const express = require('express');

const app = express();
const admin = require('firebase-admin');
const credentials = require('./key.json');

admin.initializeApp({
  credential:admin.credential.cert(credentials)
})

const db = admin.firestore();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post('/create', async(req, res)=>{
  try{
    const id = req.body.email;
    const userData ={
      email:req.body.email,
      firstname:req.body.firstname,
      lastname:req.body.lastname
    };
    const response = db.collection("usersd").doc(id).set(userData);
    res.send(response);
  }catch(error){
    res.send(error);

  }

})

const PORT = process.env.PORT || 8080;

app.listen(PORT , () => {
  console.log(`server is running on ${PORT}.`);
})