# VR Workspace

## Getting Started 

1. Navigate to a Folder you want the files in and clone repo 
'''
git clone https://github.com/HenyoDevelopment/VR-Assistant
cd VR-Assistant 
'''
2. Create branch for your feature (fe = front end) (be = back end)
'''
git branch fe-nameoffeature
'''

## Front-End 

These are the tools I use to get up and running with API.AI in Node.js 

1. [Visual Studio Code] (https://code.visualstudio.com/) My IDE of choice for Javascript 
2. [ngrok] (https://ngrok.com/) To run locally
3. [Node.js] (https://nodejs.org/en/)

### Steps to create a new feature: 

1. Define action name 
2. Create handler function 
3. Declare argument for user input (if applicable)
4. Create HTTP Request
5. Call utilities fuction within
    ```
    .then(function(json) {
           const speech = utilities.functionName(json, param1, param2, ...)
           utilities.replyToUser(request, response, assistant, speech);
    })
    ```
6. Create the function in utilities 
7. Map the action at the bottom 

`DM Sani on Slack for any questions`

## Javascript notes:

Use let and const. 

Don't use var. 
