const logger = (msg = '') => {
  console.log(`--------------------------------------------------------------`);
  console.log(`Date time of log: ${new Date()}`);
  console.log(msg);
  console.log(`--------------------------------------------------------------`);
}


module.exports = logger;