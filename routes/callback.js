const express = require('express');
const router = express.Router();
const { logAudit } = require('../utils/audit');
const { notifyAdmin } = require('../utils/notify');
const { isDuplicate, markAsPaid } = require('../utils/duplicate');

router.post('/', async (req, res) => {
  const { external_id, status, amount, trx_id } = req.body;

  if (status === 'PAID') {
    if (await isDuplicate(external_id)) return res.sendStatus(200);

    await markAsPaid(external_id, amount, trx_id);
    logAudit('QRIS_PAID', external_id, req.body);
    notifyAdmin(`✅ QRIS Paid: ${external_id} - Rp${amount}`);
  }

  res.sendStatus(200);
});

module.exports = router;
