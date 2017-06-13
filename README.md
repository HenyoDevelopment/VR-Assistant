# VR Workspace

## Javascript notes:

Use let and const. 

Don't use var. 

## Front-End 

Steps to create a new feature: 

1. Define action name 
2. Create handler function 
3. Declare argument for user input (if applicable)
4. Create HTTP Request
5. Call utilities fuction within
       .then(function(json) {
           const speech = utilities.functionName(json, param1, param2, ...)
           utilities.replyToUser(request, response, assistant, speech);
       })
6. Create the function in utilities 
7. Map the action at the bottom 

DM Sani on Slack for questions
