module.exports = {
  auth: {
    secret: 'mykey'
  },
  database: {
    local: 'mongodb://localhost/contacts-db',
    mLab: process.env.MONGODB_URI
  }
};
