const router = require('express').Router();
const db = require('../db.js');
// const Users = require('../Controller/userController');
// const auth = require('../Middleware/auth');

router.post('/create', async (req, res) => {
  /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to sign in a specific user' */

  /*	#swagger.parameters['obj'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: { $ref: "#/definitions/addUser" }
    } */

  /* #swagger.security = [{
            "apiKeyAuth": []
    }] */
  try {
    const id = req.body.email;
    console.log(req.body);

    const userData = {
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname
    };
    const response = db.collection('usersd').doc(id).set(userData);
    console.log(response);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
});

// router.get("/", auth, Users.findoneData);
// router.post("/signin", Users.signinUser);
// router.get("/elements", auth, Users.findoneElements);

module.exports = router;
