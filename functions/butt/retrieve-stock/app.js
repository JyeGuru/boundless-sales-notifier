const fetch = require("node-fetch");

exports.lambdaHandler = async (event, context) => {
  return await fetch(
    "https://api.boundless.mayumi.fi/beacon/"+event.beacon
  )
    .then((response) => response.json())
    .then((data) => data.result.sell);
};
