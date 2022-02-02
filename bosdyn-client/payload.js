const {BaseClient, common_header_errors} = require('../bosdyn-client/common.js');
const payload_service = require('../bosdyn/api/payload_service_grpc_pb.js');
const payload_pb = require('../bosdyn/api/payload_pb.js');

function _get_entry_value(response){
	return response.getPayloads();
}

/**
* A client handling payload configs.
* @class AuthClient
* @extends BaseClient
*/
class PayloadClient extends BaseClient {

	static default_service_name = 'payload';
    static service_type = 'bosdyn.api.PayloadService';

    /**
    * Create an instance of PayloadClient's class.
    * @param {string} [name=null] Name of the Class.
    */
    constructor(name = null){
    	super(payload_service.PayloadServiceClient, name);
    }

    /**
    * List all payloads registered on the robot.
    * @param {object} args Extra arguments to pass to grpc call invocation.
    * @return {array} A list of the proto message definitions of all registered payloads
    * @throws {RpcError} Problem communicating with the robot.
    */
    async list_payloads(args){
    	const request = new payload_pb.ListPayloadsRequest();
    	return await this.call(this._stub.listPayloads, request, _get_entry_value, common_header_errors, args);
    }

    /**
    * List all payloads registered on the robot asynchronously.
    * @param {object} args Extra arguments to pass to grpc call invocation.
    * @return {array} A list of the proto message definitions of all registered payloads
    * @throws {RpcError} Problem communicating with the robot.
    */
    list_payloads_async(args){
    	var request = new payload_pb.ListPayloadsRequest();
    	return this.call_async(this._stub.listPayloads, request, _get_entry_value, common_header_errors, args);
    }

}

module.exports = {
    PayloadClient
};