"use strict";

//setup / import libraries
const ApiAiAssistant = require("actions-on-google").ApiAiAssistant;
const express = require("express");
const bodyParser = require("body-parser");
const httpRequest = require("request-promise");  
require("string_score");
const utilities = require("./utilities.js"); //utility functions
const app = express();
app.set("port", (process.env.PORT || 8080));
app.use(bodyParser.json({type: "application/json"}));

//register an endpiont that will listen on http://localhost:8080/
app.post("/", function (request, response) {
  //Create an instance of API.AI assistant
  const assistant = new ApiAiAssistant({request: request, response: response});

  // **************************
  //  Convert Balance Action
  // **************************

  //Action name for converting balance
  const CONVERT_BALANCE_ACTION = "convertBalance";
  //Handler function for Nessie
  function handleConvertBalance(assistant) {
    //1. Declare argument constant for user input (currency)
    const CURRENCY_ARG = "currency";
    //2. Extract currency amount from api.ai 
    const currency = assistant.getArgument(CURRENCY_ARG).toLowerCase();
    console.log(currency)
    //3. Perform networking call to Nessie API 
    const CUSTOMER_ACCOUNT = "5925e8aba73e4942cdafd649"
    const NESSIE_API_KEY = "d5b7be3380bb6eb21f3c377b204f3ebc";

    const convertBalanceAPIUrl = "http://api.reimaginebanking.com/accounts/"
    + CUSTOMER_ACCOUNT + "?key=" + NESSIE_API_KEY;

    httpRequest({
      method: "GET",
      uri: convertBalanceAPIUrl,
      json: true
    }).then(function (json) {
      const speech = utilities.convertBalance(currency, json);
      utilities.replyToUser(request, response, assistant, speech);
    })
    .catch(function (err) {
      console.log("Error:" + err);
      const speech = "I could not convert your balance. Ask me something else.";
      utilities.replyToUser(request, response, assistant, speech);
    });
  }

  //create a map of potential actions that a user can trigger
  const actionMap = new Map();

  //for each action, set a mapping between the action name and the handler function
  actionMap.set(CONVERT_BALANCE_ACTION, handleConvertBalance)


  //register the action map with the assistant
  assistant.handleRequest(actionMap);
});

// Start the server on your local machine
const server = app.listen(app.get("port"), function () {
  console.log("App listening on port %s", server.address().port);
  console.log("Press Ctrl+C to quit.");
});