const fetch = require("node-fetch");

exports.lambdaHandler = async (event, context) => {
  if (event.override == true) {
    return true;
  } else {
    return await fetch(event.webhook)
      .then((response) => response.json())
      .then((data) => {
        if (data.name && data.code == undefined) {
          return true;
        } else {
          return false;
        }
      });
  }
};
