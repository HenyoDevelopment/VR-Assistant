"use strict"

module.exports = {
    convertBalance: function(currency, json) {
        const currentBalance = json.balance
        var convertedBalance
        var currencySymbol

        switch (currency) {
            case "euros":
                convertedBalance = parseFloat(currentBalance * 1.12051).toFixed(2)
                currencySymbol = "€"
                break
            case "yen":
                convertedBalance = parseFloat(currentBalance * 111.476).toFixed(2)
                currencySymbol = "¥"
                break
            case "pounds":
                convertedBalance = parseFloat(currentBalance * 0.7768).toFixed(2)
                currencySymbol = "£"
            case "sterling":
            case "pounds sterling":
                convertedBalance = parseFloat(currentBalance * 0.7768).toFixed(2)
                currencySymbol = "£"
                break
            default:
                convertedBalance = currentBalance
        }

        var speech = ("Your converted balance from $ is: " + currencySymbol +  convertedBalance)
        
        console.log("convertBalance hit")
        return speech
    },

    replyToUser: function(request, response, assistant, speech) {
        if(request.body.originalRequest && request.body.originalRequest.source == "google") { //for google assistant
            assistant.ask(speech + ". What else can I help you with?"); //assistant.tell will end the conversation
        }
        else { //for slack
            return response.json({
                    speech: speech,
                    displayText: speech,
                    source: "summit_bot"
                });
        }
    },
}