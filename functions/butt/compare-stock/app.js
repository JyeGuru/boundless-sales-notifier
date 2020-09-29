const AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();

exports.lambdaHandler = async (event, context) => {
  var params = {
    TableName: process.env.tablename,
    KeyConditionExpression: "beacon = :beacon",
    ExpressionAttributeValues: {
      ":beacon": event[0].beacon,
    },
    ReturnConsumedCapacity: "TOTAL"
  };
  console.log(params);
  return await docClient.query(params).promise()
};
