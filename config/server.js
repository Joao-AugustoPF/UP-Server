module.exports = ({ env }) => ({
  host: env('HOST', process.env.NODE_ENV === 'production' ? process.env.PRODUCTION_HOST : process.env.HOST),
  port: env.int('PORT', process.env.PORT || 1337),
  app: {
    keys: env.array('APP_KEYS', ['Y31WH3XkmBZ7I+bovzf/Eg==','dJJrPcPKttTWqejnpJ6ZOg==','xmtSos6JhJSfk/prC5MwuA==','3DzGG5wmjI2cDjac/0WcUw==']),
  }
});
