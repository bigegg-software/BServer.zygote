var fetch = require('node-fetch');

var DataBaseController = require('../node_modules/parse-server/lib/Controllers/DatabaseController');
let dataBaseCreate = DataBaseController.prototype.create;

DataBaseController.prototype.create = function (className, object, {
	acl
} = {}) {
	object = _handleClassPower(className, object);
	return dataBaseCreate.bind(this)(className, object, acl)
};


function _handleClassPower(className, object) {
	if (!object.ACL) {
	}
	return object
}

function _initClassLevel(className, classLevelPremissions) {

	return fetch(`${process.env.PARSE_PUBLIC_SERVER_URL}/schemas/${className}`, {
		method: 'put',
		body: JSON.stringify(classLevelPremissions),
		headers: {
			'Content-Type': 'application/json',
			'x-parse-master-key': process.env.PARSE_SERVER_MASTER_KEY,
			'x-parse-application-id': process.env.PARSE_SERVER_APPLICATION_ID
		},
	}).then(res => res.json())

}

_initClassLevel("_User", {
	classLevelPermissions: {
		find: {
			"requiresAuthentication": true,
		},
		get: {"requiresAuthentication": true,},
		create: {"requiresAuthentication": true,},
		update: {"requiresAuthentication": true,},
		delete: {"requiresAuthentication": true,},
		addField: {"requiresAuthentication": true,},
	}
}).then(data => {
}, err => console.log);

