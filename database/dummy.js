const db = {}
async function list(tabla) {
   console.log(db, tabla)
   return db[tabla] || []
}
async function get(tabla, id) {
   let col = list(tabla);
   return col.filter(item => item.id === id)[0] || null
}
async function upsert(tabla, id) {
   if (!db[tabla]) {
      db[tabla] = []
   }
   db[tabla].push(id)
   return db
}
function remove(tabla, id) {
   return true
}
async function query(tabla, q) {
   console.log(tabla, q)
   let col = await list(tabla);
   let keys = Object.keys(q)
   let key = keys[0]
   console.log(keys)
   return col.filter(item => item[key] === q[key])[0] || null
}
module.exports = {
   list,
   get,
   upsert,
   remove,
   query
}