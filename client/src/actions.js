/**
 * 	Dependencies
 */
import fetch from 'isomorphic-fetch';
import Config from '../../src/app/boot/config';

const config = new Config();

function getPerson(person) {
	return {
		type: 'REQUEST_PERSON',
		person
	}
}

function savePerson(person) {
	return {
		type: 'RESPONSE_PERSON',
		person
	}
}

function fetchPerson(person) {
	return fetch('//' + config.server.url + ':' + config.server.port + '/person/' + person);
}

export function doView() {
	return {
		type: 'VISIT'
	}
}

export function getResumeFromServer(person) {

	return function(dispatch) {
		return fetchPerson().then(
			response => {return response.json(); }
		).then(
			person => dispatch(savePerson(person))
		)
	}
}