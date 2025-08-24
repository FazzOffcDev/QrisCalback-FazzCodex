const fs = require('fs');
function isDuplicate(id) {
  return fs.existsSync(`./logs/paid/${id}.json`);
}
function markAsPaid(id, amount, trxId) {
  const log = { id, amount, trxId, time: Date.now() };
  fs.writeFileSync(`./logs/paid/${id}.json`, JSON.stringify(log, null, 2));
}
module.exports = { isDuplicate, markAsPaid };
