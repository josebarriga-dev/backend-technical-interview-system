// const axios = require('axios')
// const url = 'http://checkip.amazonaws.com/';
const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app')
const server = awsServerlessExpress.createServer(app)

exports.lambdaHandler = async (event, context) => {
    console.log('entro a la lambda')
    return awsServerlessExpress.proxy(server, event, context, 'PROMISE').promise
};
