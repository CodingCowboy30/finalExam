// Lets talk about the backend.
// What is the backend used for? Storing and organizing data!
// You can store all types of data in a backend database.
// What is a database? Any collection of data that allows computers to quickly search and retrieve information.

// What is mongodb? non-relational database management system(DBMS)
// What is MySQL? Realtional database management system(RDBMS)
// You dont always need to know how to use a server to code in a backend language

// Lets talk about MongoDB(our non-realtional database)
// non-relational databases use a NOSQL approach.
// What I mean by that is, SQL breakes the data up and store it like this:
// --Schema
//    --Table
//        --Columns
//        --Rows
// This closely resembles a SpreadSheet

// Database -- GoogleSheets
// --Schema -- Public
//   -- Table -- UserTable
//       -- Columns -- id, first_name, last_name, age, created_at
//       -- Rows -- every User is a new row

// in databases like these the "id" column value can NOT be reused. This insures that every piece of data on that table has a unique identifier(id).

// What does a non-relational database like Mongo look like?
// --Schema
//    -- Collections
//       -- Documents

// The schema defines the structure of the data and creates a document. Then the document is placed inside of a collection
//  --Collection -- UserCollection

// Our process in creating our very own MongoDB datbase will be as follows
// 1. Create schema
// 2. Create collection
// 3. Create Document
// 4. Add/Update/Get/Delete things in our DB

// To start our node project we will input the following command into the terminal:
// NOTE: make sure you are in the folder you want your project to start in. In this example we want to be in the backend folder.

// npm init

// once complete it should give us a package.json. Next we need to install a few packages so we can create a server.
// What is a server? It connects the frontend to our database(backend).
// You can think of a server just like a real restaurant server.
// The Kitchen is our backend.
// The server is exactly that. our server.
// The customer is our frontend.
// The customer(frontend) makes a request and gives it to the server.
// Then the server takes it to the kitchen(backend).
// The kitchen(backend) makes(Create/Update/Get/Delete) what the customer(Frontend) wants.
// The kitchen(backend) gives it to the server.
// The server gives it to the customer(frontend).

// So if we want to create a server we need to install a few things.
// npm install express body-parser