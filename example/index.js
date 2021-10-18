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
