'use strict';

const { WorkloadModuleBase } = require('@hyperledger/caliper-core');

class MyWorkload extends WorkloadModuleBase {
    constructor() {
        super();
    }
    async initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext) {
        await super.initializeWorkloadModule(workerIndex, totalWorkers, roundIndex, roundArguments, sutAdapter, sutContext);
    }
    
    async submitTransaction() {
        //const randomId = Math.floor(Math.random()*this.roundArguments.assets);
        const myArgs = {
            contractId: 'orgtmp',
            contractVersion: 'v3',
            contractFunction: 'setOrgTmp',
            invokerIdentity: 'client0.org1.example.com',
            contractArguments: ['Org1Sensor1', '10C','12AM'],
            readOnly: false
        };
        await this.sutAdapter.sendRequests(myArgs);
    }
    
    async cleanupWorkloadModule() {
        // NOOP
    }
}
function createWorkloadModule() {
    return new MyWorkload();
}
module.exports.createWorkloadModule = createWorkloadModule;