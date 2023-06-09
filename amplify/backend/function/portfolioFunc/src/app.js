/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_PORTFOLIOTABLE_ARN
	STORAGE_PORTFOLIOTABLE_NAME
	STORAGE_PORTFOLIOTABLE_STREAMARN
Amplify Params - DO NOT EDIT */

const express = require('express')
const bodyParser = require('body-parser')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

function generateId() {
  const date = new Date();
  const randomId = Math.random().toString(36).substring(2, 15);
  const timestamp = date.getTime().toString();
  return `${randomId}${timestamp}`;
}

/*****************************
 *  POST method for projects *
 ****************************/

app.post('/projects/add', function(req, res) {
  const params = {
    TableName: process.env.STORAGE_TESTAPITABLE_NAME,
    Item: {
      id: generateId(),
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      desc: req.body.desc,
      tags: req.body.tags
    }
  };
  docClient.put(params, function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Could not save item' });
    } else {
      res.json({ message: "Data added sucessfully" });
    }
  });
});

/****************************
 *  GET method for projects *
 ***************************/

app.get('/projects/get', function(req, res) {
  const params = {
    TableName: process.env.STORAGE_PORTFOLIOTABLE_NAME,
  };
  docClient.scan(params, function(err, data) {
    if (err) {
      console.log(err);
      res.status(500).json({ error: 'Could not retrieve items' });
    } else {
      res.json(data.Items);
    }
  });
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
