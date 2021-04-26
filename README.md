<!--
title: 'Serverless Nodejs Rest API with TypeScript And MongoDB Atlas'
description: 'Nodejs project for Amazon AWS lambda to receive webhooks, store them and send out an SNS.'
layout: Doc
framework: v1
platform: AWS
language: nodeJS
authorLink: 'https://github.com/Q-Angelo'
authorName: 'May Jun'
authorAvatar: 'https://avatars0.githubusercontent.com/u/17956058?s=460&u=f3acebabd097e6e93d5be5a8366b980fea5b15aa&v=4'
-->
# Serverless Nodejs Rest API with TypeScript And MongoDB Atlas

This is a REST API for AWS Lambda with TypeScript, MongoDB Atlas and SNS.

## Use Cases

* REST API with typescript
* MongoDB Atlas data storage
* Multi-environment management under Serverless
* Mocha unit tests and lambda-tester interface test
* AWS lambda function log view

## Deploy

### To Test It Locally

* Run ```npm install``` to install all the necessary dependencies.
* Run ```npm run local``` use serverless offline to test locally. 
* Build ```npm run build``` creates a dist folder and zips it, ready to upload on amazon aws lambda

### Deploy on AWS, simply run:

```
$ npm run deploy

# or

$ serverless deploy
```

## Usage

send an HTTP request directly to the endpoint from Mailgun
