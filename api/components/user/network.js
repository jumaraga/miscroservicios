const express = require('express')
const router = express.Router()
const response = require('../../../network/response')
const Controller = require('./index')
const secure = require('../user/secure')
router.get('/', list)
router.get('/:id', get);
router.post('/', function (req, res, next) {
   Controller.upsert(req.body)
      .then((user) => {
         response.success(req, res, user, 201);
      })
      .catch((err) => {
         response.error(req, res, err.message, 500);
      });
});
router.put('/', secure('update'), upsert);


function list(req, res) {
   Controller.list()
      .then((lista) => {
         console.log(lista)
         response.success(req, res, lista, 200);
      })
      .catch((err) => {
         console.log(err)
         response.error(req, res, err.message, 500);
      });

}

function get(req, res) {
   Controller.get(req.params.id)
      .then((user) => {
         response.success(req, res, user, 200);
      })
      .catch((err) => {
         response.error(req, res, err.message, 500);
      });

}

function upsert(req, res) {
   Controller.upsert(req.body)
      .then((user) => {
         response.success(req, res, user, 201);
      })
      .catch((err) => {
         response.error(req, res, err.message, 500);
      });

}

module.exports = router