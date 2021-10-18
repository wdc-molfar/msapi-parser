# Реалізація інформаційного та програмного забезпечення


## Приклад використання MSAPI-специфікацій

В прикладі визначається робочий процес з двох екземплярів сервісів. Перший - завантажує повідомлення з джерел на основі завдань, що
вибирає з черги завдань. Другий - виконує нормалізацію повідомлень.

В окремих файлах визначаються глобальні налаштування, налаштування за замовченням, типи черг та обмінників, типи мікросервісів та 
робочий процес.

**Файл глобальних налаштувань** містить налаштування для брокера повідомлень та налаштування підсистеми виявлення та моніторингу працездатності мікросервісів 

```yaml

msapi: "1.0.1"

metadata: 
  
  id: "http://localhost:8081/spec/ms_example_global_settings.yaml"
  
  title: "Global settings"
  
  description: Default queue and exchange settings
  
 
components:

#########################################################################

    Settings:                          # available section
        
        amqp:
            url: "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
        

        health:                       
            amqp:
                $ref: "#/components/Settings/amqp"
            produce:
                exchange:
                    name: health_messages
            time_interval: 30000        
            
#########################################################################

```

**Файл налаштувань за замовчуванням** містить налаштування для каналів, обмінників, черг ...

```yaml

msapi: "1.0.1"

metadata: 
  
  id: "http://localhost:8081/spec/ms_example_defaults.yaml"
  
  title: "Default queue and exchange settings"
  
  description: Default queue and exchange settings
  
 
components:

#########################################################################

    Exchanges:                          # available section
    
        default:                       # an example of exchange definition 
            type: fanout                # or "topic" or "direct"  - required type of exchange
            options:                    # optional exchange options
                durable: true           # (boolean): if true, the exchange will survive broker restarts. Defaults to true.
                autoDelete: false       # (boolean): if true, the exchange will be destroyed once the number of bindings for which it is the source drop to zero. Defaults to false.

#########################################################################

    Queues:                          # available section
    
        default:                          # an example of queue definition
            exchange: 
                $ref: "#/components/Exchanges/default"
            options:
                exclusive: false        # if true, scopes the queue to the connection (defaults to false)
                durable: true           # if true, the queue will survive broker restarts, modulo the effects of exclusive and autoDelete; this defaults to true if not supplied, unlike the others
                autoDelete: false       # if true, the queue will be deleted when the number of consumers drops to zero (defaults to false)

#########################################################################

    Consumes:                          # available section
    
        default:
            queue:
                $ref: "#/components/Queues/default"
                message:
                    options:
                        noAck: false        # (boolean): if true, the broker won’t expect an acknowledgement of messages delivered to this consumer; i.e., it will dequeue messages as soon as they’ve been sent down the wire. Defaults to false (i.e., you will be expected to acknowledge messages).
                        exclusive: false    # (boolean): if true, the broker won’t let anyone else consume from this queue; if there already is a consumer, there goes your channel (so usually only useful if you’ve made a ‘private’ queue by letting the server choose its name).

#########################################################################

    Produces:                          # available section
    
        default:
            exchange:
                $ref: "#/components/Exchanges/default"
            message:
                options:
                    persistent: true    # (boolean): If truthy, the message will survive broker restarts provided it’s in a queue that also survives restarts.


``` 


**Файл опису черг та типів повідомлень** для робочого процесу

```yaml
msapi: "1.0.1"

metadata: 
  
  id: "http://localhost:8081/spec/ms_example_components_message_processing.yaml"
  
  title: "Shared components for scrappers"
  
  description: >
    Defines the components for task messages and for multimedia messages.
    
    Scrapers consume task messages, scrap sources, and create multimedia messages.
    
    Normalizer consumes dirty multimedia messages, handles it, and creates 
    normalized messages.
    
    All parameters, exchange definitions and queue definitions will be set to 
    default or overwritten by expanding in the parent spec.
 
components:

#########################################################################

    Consumes:                          
    
        TASK_QUEUE:
            queue:
                message:
                    schema:                 
                        $ref: "#/components/Schemas/TASK_MESSAGE_SCHEMA"
        
        MEDIA_MESSAGES:
            queue:
                message:
                    schema:                
                        $ref: "#/components/Schemas/MEDIA_MESSAGE_SCHEMA"

#########################################################################

    Produces:                         
    
        MEDIA_MESSAGES:
            message:
                schema:                
                    $ref: "#/components/Schemas/MEDIA_MESSAGE_SCHEMA"

#########################################################################

    Schemas:
        
        TASK_MESSAGE_SCHEMA:
            type: object
            required:
                - id
                - timestamp
                - options
            properties:
                id: 
                    type: string
                timestamp: 
                    type: string
                options:
                    type: object
                
        MEDIA_MESSAGE_SCHEMA:
                type: object
                required:
                    - id
                    - timestamp
                    - scrapper_instance
                    - data
                properties:
                    id: 
                        type: string
                    timestamp: 
                        type: string
                    scrapper_instance:
                        type: string
                    data:
                        type: object
                        required:
                            - text
                        properties:
                            meta: 
                                type: object
                            text:
                                type: string
                                
            
        
#########################################################################


```

**Файл опису скрапера**. Опис має властивості, що налаштовуються з декількох джерел, наприклад ```consumes```. Це здійснюється за допомогою властивостей ```definition``` та ```extendedBy```. Розширення ```definition``` здійснюється на стадії оброблення ```afterResolve```.

```yaml
msapi: "1.0.1"

metadata: 
  
    id: "http://localhost:8081/spec/ms_example_scraper_service.yaml"
  
    title: "Scraper Service type definition"
  
    description: >
        Defines the type of scraper service.
        Scrapers consume task messages, scrap sources, and create multimedia messages.
        Normalizer consumes dirty multimedia messages, handles it, and creates 
        normalized messages.Normalizer consumes dirty multimedia messages, handles it, and creates 
        normalized messages.
    
    repo: "@molfar/scraper"
            

service:
    
    config:
        
        amqp:
            $ref: "./ms_example_global_settings.yaml/#/components/Settings/amqp"
        
        consume:
            amqp:
                $ref: "#/service/config/amqp"
            queue:
                exchange:
                    name: scrapper_task_messages
        produce:
            amqp:
                $ref: "#/service/config/amqp"
            exchange:
                name:
                    schema:
                        type: string
                        
        health_check:
            $ref: "./ms_example_global_settings.yaml/#/components/Settings/health"    
                        
    consumes:
        - 
            definition:
                $ref: "./ms_example_defaults.yaml/#/components/Consumes/default"
            extendedBy:
                - 
                    $ref: "./ms_example_components_message_processing.yaml/#/components/Consumes/TASK_QUEUE"
                - 
                    $ref: "#/service/config/consume"
    
    produce:
        definition:
            $ref: "./ms_example_defaults.yaml/#/components/Produces/default"
        extendedBy:
            - 
                $ref: "./ms_example_components_message_processing.yaml/#/components/Produces/MEDIA_MESSAGES"
            - 
                $ref: "#/service/config/produce"
        


```

**Файл опису нормарайзера**

```yaml
msapi: "1.0.1"

metadata: 
  
    id: "http://localhost:8081/spec/ms_example_normalizer_service.yaml"
  
    title: "Normalizer Service type definition"
  
    description: >
        Defines the type of normalizer service.
        Normalizer consumes dirty multimedia messages, handles it, and creates 
        normalized messages.
    
    repo: "@molfar/normalizer"
            

service:
    
    config:
        
        amqp:
            $ref: "./ms_example_global_settings.yaml/#/components/Settings/amqp"    
        
        consume:
            amqp:
                $ref: "#/service/config/amqp"
            queue:
                exchange:
                    name:
                        schema:
                            type: string
        produce:
            amqp:
                $ref: "#/service/config/amqp"
            exchange:
                name:
                    schema:
                        type: string
                        
        health_check:
            $ref: "./ms_example_global_settings.yaml/#/components/Settings/health"    
                        
                        
    consumes:
        - 
            definition:
                $ref: "./ms_example_defaults.yaml/#/components/Consumes/default"
            
            extendedBy:
                -    
                    $ref: "./ms_example_components_message_processing.yaml/#/components/Consumes/MEDIA_MESSAGES"
                -
                    $ref: "#/service/config/consume"
    
    produce:
        definition:
            $ref: "./ms_example_defaults.yaml/#/components/Produces/default"
        extendedBy:
            - 
                $ref: "./ms_example_components_message_processing.yaml/#/components/Produces/MEDIA_MESSAGES"
            - 
                $ref: "#/service/config/produce"
        


```

**Файл опису робочого процесу**. Робочий процес описано як послідовність зконфігурованих екземплярів сервісів. Накладання ```configuredBy``` на ```config``` здійснюється на стадії ```afterBundle```.

```yaml
msapi: "1.0.1"

metadata: 
  
    id: "http://localhost:8081/spec/ms_example_workflow.yaml"
  
    title: "Define a workflow for handling multimedia messages"
  
    description: >
        Defines a chain of two services
            

workflow:
    
    - instance:
        of:
            $ref: "./ms_example_scraper_service.yaml"
        
        name: SCRAPPER
        
        configuredBy:
            
            produce:
                exchange:
                    name: dirty_messages
    
    - instance:
        of:
            $ref: "./ms_example_normalizer_service.yaml"
        
        configuredBy:
            
            consume:
                queue:
                    exchange:
                        name: dirty_messages
            
            produce:
                exchange:
                    name: normalized_messages            
                        
                


```

Побудувати результат роботи парсера для прикладу можна за допомогою команди

```sh

npm run example

```

**Використання парсера** для побудови api:

```js

import MsapiParser from "../lib"
import fs from "fs"
import { assign, set, isArray } from "lodash"
import YAML from "js-yaml"



const applyConfiguredByToConfig = async api => {

    let instances = MsapiParser.util.deepFilter(api, o => o.instance)
    instances.forEach( o => {
        let res = assign({}, o.instance.instance)
        res.configuredBy = res.configuredBy || {}
        res.of.service.config = MsapiParser.util.deepExtend(res.of.service.config, res.configuredBy)
        set(o.instance, "instance.of.service.config", assign({},res.of.service.config)) 
    })

    return api

}

const applyExtendedBy = async api => {

    MsapiParser.util.deepFilter(api, o => o.definition).forEach( o => {
        let res = assign({},o.instance.definition)
        o.instance.extendedBy.forEach( e => {
            res = assign({}, MsapiParser.util.deepExtend(res, e))
        })
        set(api, o.path, assign({},res))
    })

    return api

}

const removeConfiguredBy = async api => {
    MsapiParser.util.deepFilter(api, o => o.configuredBy).forEach( o => {
        delete o.instance.configuredBy
    })

    return api
}


(   
    
    async function(){
        let spec = fs.readFileSync("./MSAPI_example/ms_example_workflow.yaml").toString()
        
        try {
            
            let api = await MsapiParser.build(
                "./MSAPI_example/ms_example_workflow.yaml",
                {
                    afterBundle: applyConfiguredByToConfig,
                    afterResolve: [ applyExtendedBy, removeConfiguredBy ]   
                }
            )

            console.log(JSON.stringify(api, null, " "))

        } catch (err) {
            
            console.log(err)
            err.toJSON().details.forEach( d => {
                console.log(d.message, d.path, d.params, MsapiParser.util.getLineNumberForPath(spec,d.path))
                d.inner.forEach( i => {
                    console.log(i.message, i.path, i.params, MsapiParser.util.getLineNumberForPath(spec,i.path))
                })  
             })

        }   
    }

)()


```

```MsapiParser.build``` приймає шлях до файлу або URL, а також налаштування - обробники для стадій ```afterBundle``` та ```afterResolve```.

Після стадії ```afterBundle``` всі зовнішні посилання замінені на значення (внутрішні посилання - без змін). На цій стадії ми накладаємо ```configuredBy``` на ```config``` (```applyConfiguredByToConfig```).

Після стадії ```afterResolve``` вже всі посилання замінені на значення. На цій стадії ми здійснюємо розширення ```definition``` за допомогою ```extendedBy``` (```applyExtendedBy```) та видаляємо ```configuredBy``` (```removeConfiguredBy```).

Отримуємо повністю визначений об'єкт для налаштування робочого процесу:

```json

{
 "msapi": "1.0.1",
 "metadata": {
  "id": "http://localhost:8081/spec/ms_example_workflow.yaml",
  "title": "Define a workflow for handling multimedia messages",
  "description": "Defines a chain of two services\n    \n"
 },
 "workflow": [
  {
   "instance": {
    "of": {
     "msapi": "1.0.1",
     "metadata": {
      "id": "http://localhost:8081/spec/ms_example_scraper_service.yaml",
      "title": "Scraper Service type definition",
      "description": "Defines the type of scraper service. Scrapers consume task messages, scrap sources, and create multimedia messages. Normalizer consumes dirty multimedia messages, handles it, and creates  normalized messages.Normalizer consumes dirty multimedia messages, handles it, and creates  normalized messages.\n",
      "repo": "@molfar/scraper"
     },
     "service": {
      "config": {
       "amqp": {
        "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
       },
       "consume": {
        "amqp": {
         "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
        },
        "queue": {
         "exchange": {
          "name": "scrapper_task_messages"
         }
        }
       },
       "produce": {
        "amqp": {
         "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
        },
        "exchange": {
         "name": "dirty_messages"
        }
       },
       "health_check": {
        "amqp": {
         "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
        },
        "produce": {
         "exchange": {
          "name": "health_messages"
         }
        },
        "time_interval": 30000
       }
      },
      "consumes": [
       {
        "queue": {
         "message": {
          "options": {
           "noAck": false,
           "exclusive": false
          },
          "schema": {
           "type": "object",
           "required": [
            "id",
            "timestamp",
            "scrapper_instance",
            "data"
           ],
           "properties": {
            "id": {
             "type": "string"
            },
            "timestamp": {
             "type": "string"
            },
            "options": {
             "type": "object"
            },
            "scrapper_instance": {
             "type": "string"
            },
            "data": {
             "type": "object",
             "required": [
              "text"
             ],
             "properties": {
              "meta": {
               "type": "object"
              },
              "text": {
               "type": "string"
              }
             }
            }
           }
          }
         },
         "exchange": {
          "type": "fanout",
          "options": {
           "durable": true,
           "autoDelete": false
          },
          "name": "normalized_messages"
         },
         "options": {
          "exclusive": false,
          "durable": true,
          "autoDelete": false
         }
        },
        "amqp": {
         "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
        }
       }
      ],
      "produce": {
       "exchange": {
        "type": "fanout",
        "options": {
         "durable": true,
         "autoDelete": false
        },
        "name": "normalized_messages"
       },
       "message": {
        "options": {
         "persistent": true
        },
        "schema": {
         "type": "object",
         "required": [
          "id",
          "timestamp",
          "scrapper_instance",
          "data"
         ],
         "properties": {
          "id": {
           "type": "string"
          },
          "timestamp": {
           "type": "string"
          },
          "scrapper_instance": {
           "type": "string"
          },
          "data": {
           "type": "object",
           "required": [
            "text"
           ],
           "properties": {
            "meta": {
             "type": "object"
            },
            "text": {
             "type": "string"
            }
           }
          }
         }
        }
       },
       "amqp": {
        "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
       }
      }
     }
    },
    "name": "SCRAPPER"
   }
  },
  {
   "instance": {
    "of": {
     "msapi": "1.0.1",
     "metadata": {
      "id": "http://localhost:8081/spec/ms_example_normalizer_service.yaml",
      "title": "Normalizer Service type definition",
      "description": "Defines the type of normalizer service. Normalizer consumes dirty multimedia messages, handles it, and creates  normalized messages.\n",
      "repo": "@molfar/normalizer"
     },
     "service": {
      "config": {
       "amqp": {
        "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
       },
       "consume": {
        "amqp": {
         "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
        },
        "queue": {
         "exchange": {
          "name": "dirty_messages"
         }
        }
       },
       "produce": {
        "amqp": {
         "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
        },
        "exchange": {
         "name": "normalized_messages"
        }
       },
       "health_check": {
        "amqp": {
         "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
        },
        "produce": {
         "exchange": {
          "name": "health_messages"
         }
        },
        "time_interval": 30000
       }
      },
      "consumes": [
       {
        "queue": {
         "message": {
          "options": {
           "noAck": false,
           "exclusive": false
          },
          "schema": {
           "type": "object",
           "required": [
            "id",
            "timestamp",
            "scrapper_instance",
            "data"
           ],
           "properties": {
            "id": {
             "type": "string"
            },
            "timestamp": {
             "type": "string"
            },
            "options": {
             "type": "object"
            },
            "scrapper_instance": {
             "type": "string"
            },
            "data": {
             "type": "object",
             "required": [
              "text"
             ],
             "properties": {
              "meta": {
               "type": "object"
              },
              "text": {
               "type": "string"
              }
             }
            }
           }
          }
         },
         "exchange": {
          "type": "fanout",
          "options": {
           "durable": true,
           "autoDelete": false
          },
          "name": "normalized_messages"
         },
         "options": {
          "exclusive": false,
          "durable": true,
          "autoDelete": false
         }
        },
        "amqp": {
         "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
        }
       }
      ],
      "produce": {
       "exchange": {
        "type": "fanout",
        "options": {
         "durable": true,
         "autoDelete": false
        },
        "name": "normalized_messages"
       },
       "message": {
        "options": {
         "persistent": true
        },
        "schema": {
         "type": "object",
         "required": [
          "id",
          "timestamp",
          "scrapper_instance",
          "data"
         ],
         "properties": {
          "id": {
           "type": "string"
          },
          "timestamp": {
           "type": "string"
          },
          "scrapper_instance": {
           "type": "string"
          },
          "data": {
           "type": "object",
           "required": [
            "text"
           ],
           "properties": {
            "meta": {
             "type": "object"
            },
            "text": {
             "type": "string"
            }
           }
          }
         }
        }
       },
       "amqp": {
        "url": "amqps://xoilebqg:Nx46t4t9cxQ2M0rF2rIyZPS_xbAhmJIG@hornet.rmq.cloudamqp.com/xoilebqg"
       }
      }
     }
    }
   }
  }
 ]
}

```


