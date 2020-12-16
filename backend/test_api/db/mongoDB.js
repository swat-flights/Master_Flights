const mongoose = require('mongoose')

async function dbConnection(URL) {
  await mongoose.connect(
    URL,
    {
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    }
  )
  .then(() => console.table(
    ['[DB] Conectada con exito', 'Ready state is: ' +  mongoose.connection.readyState]
  ))
  .catch((err) => console.error('[DB ERROR]:', err))
}

module.exports = dbConnection;