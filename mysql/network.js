const router = require('express').Router();
const store = require('../store/mysql')

router.get('/:tabla', list)
router.get('/:tabla', get)
router.post('/:tabla', insert)
router.put('/:tabla', upsert)

async function list(req, res, next) {
   await store.list(req.params.tabla)
}