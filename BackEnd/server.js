/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// With node projects the imports look a little different.
// We no longer use import in a standard node javascript file.
// If we want to use express and body-parser(or anything you install) you must use the javascript 'require' function.
// syntax: const nameOfVariable = require("name-of-package")
// You can find a complete list of packages in your package.json under the dependencies or devDependencies
// The cool thing about importing using require is that the import doesnt have to go at the top like our React import.
const express = require('express') // express is our server library.
const bodyParser = require('body-parser') // body-parser is a middleware libary that parses the body of incoming HTTP requests.
const mongoose = require('mongoose')
// An HTTP request is a message sent from a client to a server to receive a resource to build content.

// The next step in creating a server to to use express to create one.
// The default or standard way to do this is to create a variable called 'app' and assign it the express function
const app = express()

// Now we need to tell our app to parse the body of any requests
//It allows you to access the data sent in the request body through req.body.
app.use(bodyParser.json())

// After we build the server with express and use body-parser then we will connect to our Atlas DB. We use the mongoose library to connect. The first thing we pass into the connect method is the connection string. the connection string the "url" to your backend. The Second thing we pass into the connect method is the "options" object. The "options" object is to customize the behavior the the connection.
mongoose.connect(
  'mongodb+srv://mcarrprsvr:MyLifeMyRules2024!!@learnmongodb.fh6ixj1.mongodb.net/?retryWrites=true&w=majority&appName=LearnMongoDB',
  { useNewUrlParser: true, useUnifiedTopology: true }
)

// Lets make our first GET Request. Express gives us these requests in the form of methods on teh express(app) object.
// Every one of the Request Methods have the following syntax:
// app.request("/endpointUrl", async functionToRunWhenURLIsUsed)
app.get('/helloWorld', async (req, res) => {
  // inside the async function to run when the url is used in the frontend we need to use the try/catch approach to fetching data. It is set up just like a if statement but reversed.
  try {
    console.log('This is a Get')
  } catch (error) {
    console.error(error)
  }
})

app.post('/helloWorld', async (req, res) => {
  // inside the async function to run when the url is used in the frontend we need to use the try/catch approach to fetching data. It is set up just like a if statement but reversed.
  try {
    console.log('This is a Post')
  } catch (error) {
    console.error(error)
  }
})

app.get('/codeMessage', async () =>{
  try{
      console.log('I LOOOOOOOVE TO CODE!')
  } catch (error){
      console.error(error)
  }
})

// The port allows us to connect directly to our server
// Port 3000 is default or standard for development environments
const port = 3000

// We have to tell our app to listen to a port and let us know when our server has started running.
// We can use the .listen method on our app to do this.
// the syntax for a .listen is this: .listen(port, functionToRunWhenConnected)
app.listen(port, () => {
  console.log('Server running on port ' + port)
})

// Now lets run our server!
// all we need to do is type "node server.js" in our terminal!
// NOTE: Make sure you are in the correct folder! It will be the folder where your server is.
// mongodb+srv://VenixSurf:GOober1417!$@learnmongodb.gj3bpnb.mongodb.net/?retryWrites=true&w=majority&appName=LearnMongodb