const TABLA = 'user';
const { nanoid } = require('nanoid');
const auth = require('./../auth')
module.exports = function (injectedStore) {
   let store = injectedStore;
   if (!store) {
      store = require('../../../database/dummy')
   }
   async function list() {
      return store.list(TABLA);
   }
   function get(id) {
      return store.get(TABLA, id)
   }
   async function upsert(body) {
      const user = {
         username: body.username,
         name: body.name
      }
      console.log('2')
      if (body.id) {
         user.id = body.id
      } else {
         user.id = nanoid()
      }
      if (body.password || body.username) {
         await auth.upsert({
            id: user.id,
            username: user.username,
            password: body.password
         })
      }
      return store.upsert(TABLA, user)
   }

   return {
      list,
      get,
      upsert
   }

}