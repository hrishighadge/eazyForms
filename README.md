# eazyForms
Web Application to easily create and deploy survey forms in node JS. It also sends response to WhatsApp using Twilio API.

## Use it Now!
- Install NodeJS
- Clone this repository
- Install npm packages via 
```
npm install
```
- Run the application via 
```
node index.js
```

### Creating form
- Go to form data file <a href="https://github.com/hrishighadge/eazyForms/blob/master/views/data/formData.json">formData.json</a>
- Create form in JSON format
- Add formId as unique number and Form Title. After that add Questions, Types, Required field and options.

eg.
<br>
```javascript
[ 
    {
        "formId": 1, 
        "formTitle": "Survey Form", //Title of your form
        "formData":[
            {  
                "question": "Name of the Person?",  //Question you want to post
                "type": "Short Answer", //There are 3 types available: Short Answer, Single Choice and Multiple Choice
                "required": true  //Set this value to false if answer is optional.
            }, 
            { 
                "question": "Email id of the Person?", 
                "type": "Single Choice",
                "required": true,
                "options": ["option1", "option2"]
            },
            {
                "question": "What is your favourite game?",
                "type": "Multiple Choice",
                "required": false,
                "options": ["option1", "option2"]
            },
            { 
                "question": "Email id of the Person?", 
                "type": "Single Choice",
                "required": true,
                "options": ["option1", "option2"]
            }
        ]
    }
] 
```

### Getting Form Response
- Go to <a href="https://github.com/hrishighadge/eazyForms/blob/master/index.js">formData.json</a>
- Uncomment the commented code
- Add your Twilio accountSid and authToken.
