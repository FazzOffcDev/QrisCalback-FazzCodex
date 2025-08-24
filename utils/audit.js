const fs = require('fs');
function logAudit(type, id, data) {
  const log = { type, id, time: Date.now(), data };
  fs.writeFileSync(`./logs/${type}_${id}.json`, JSON.stringify(log, null, 2));
}
module.exports = { logAudit };
