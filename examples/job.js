// eslint-disable-next-line
const delay   = require('lodash.delay');

const { Log4Microservice } = require('../logger');

class Job {
  constructor(job) {
    this.job = job;
    this.logger = new Log4Microservice(__filename, { job_id: job.id });
  }

  updateBalance() {
    this.logger.debug(`Updating balance for user ${this.job.user_id}`);
  }

  connectToBank() {
    this.logger.debug(`Connecting to bank gateway: ${this.job.gateway} ${this.job.transaction_id}`);
    delay(this.updateBalance.bind(this), 300);
  }

  processPayment() {
    this.logger.debug(`Processing payment for ${this.job.user_id}`);
    delay(this.connectToBank.bind(this), 500);
  }

  processJob() {
    this.processPayment();
  }
}

module.exports = Job;
