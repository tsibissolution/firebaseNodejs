const express = require('express');
const cors = require('cors');
const app = express();
const admin = require('firebase-admin');

// const swaggerDocument = require('./swagger.json');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const credentials = require('./key.json');
const router = require('./routes/routers.js');

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const db = admin.firestore();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
// app.post('/create', async (req, res) => {
//   try {
//     const id = req.body.email;
//     console.log(req.body);
//     const userData = {
//       email: req.body.email,
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//     };
//     const response = db.collection('usersd').doc(id).set(userData);
//     res.send(response);
//   } catch (error) {
//     res.send(error);
//   }
// });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}.`);
});
