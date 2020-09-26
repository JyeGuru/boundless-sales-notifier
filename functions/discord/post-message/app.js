const fetch = require("node-fetch");

exports.lambdaHandler = async (event, context) => {
  return await fetch(event.webhook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event.message),
  }).then((response) => response);
};
