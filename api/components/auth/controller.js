const TABLA = 'auth'
const auth = require('../../../auth/index')
const bcrypt = require('bcrypt')
module.exports = function (injectedStore) {
   let store = injectedStore;
   if (!store) {
      store = require('../../../database/dummy')
   }
   async function login(username, password) {


      const data = await store.query(TABLA, {
         username,
      })
      return bcrypt.compare(password, data.password)
         .then((compared) => {
            if (compared === true) {
               return auth.sign(data);
            } else {
               throw new Error('Informacion invalida')
            }
         })
         .catch(e => {

         })

   }
   async function upsert(data) {
      const authData = {
         id: data.id,
      }
      console.log('3')
      if (data.username) {
         authData.username = data.username
      }
      if (data.password) {
         authData.password = await bcrypt.hash(data.password, 6)
      }
      return store.upsert(TABLA, authData)
   }
   return {
      upsert,
      login
   }
}