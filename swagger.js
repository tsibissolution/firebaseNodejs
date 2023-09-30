const swaggerAutogen = require('swagger-autogen')();
const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/*.js'];
const PORT = process.env.PORT || 8080;
const config = {
  info: {
    title: 'Blog API Documentation',
    description: '',
  },
  // securityDefinitions: {
  //     apiKeyAuth: {
  //       type: 'apiKey',
  //       in: 'header', // can be 'header', 'query' or 'cookie'
  //       name: 'X-API-KEY', // name of the header, query parameter or cookie
  //       description: 'Some description...'
  //     }
  //   },
  tags: [],
  host: 'stackblitzstartersszfdcq-rakg--8080--719f0797.local-credentialless.webcontainer.io:',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    addUser: {
      email: 'abc@gmail.com  ',
      firstname: 'John',
      lastname: 'Doe',
    },
  },
};

// swaggerAutogen(outputFile, endpointsFiles, config);
swaggerAutogen(outputFile, endpointsFiles, config).then(() => {
  require('./server'); // Your project's root file
});
