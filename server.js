const express = require('express');

const app = express();
const admin = require('firebase-admin');
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
swaggerJsdoc = require("swagger-jsdoc");
const credentials = require('./key.json');

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "https://stackblitzstartersszfdcq-rakg--8080--719f0797.local-credentialless.webcontainer.io",
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
const db = admin.firestore();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
app.post('/create', async (req, res) => {
  try {
    const id = req.body.email;
    console.log(req.body);
    const userData = {
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };
    const response = db.collection('usersd').doc(id).set(userData);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}.`);
});
