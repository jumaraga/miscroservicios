module.exports = {
   api: {
      port: process.env.API_PORT || 3000
   },
   jwt: {
      secret: process.env.JWT || 'secret'
   },
   mysql: {
      host: process.env.MYSQL || '',
      user: process.env.MYSQL_USER || '',
      host: process.env.MYSQL_PASSWORD || '',
      host: process.env.MYSQL_PASS || '',
      host: process.env.MYSQL_DB || '',
   }
}