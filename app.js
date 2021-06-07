/*
NOTES and INSTRUCTIONS

Today we will start playing around with a little bit of Javascript. 
We need to use it so that we respond to button clicks, change how the webpage looks, send requests to server, etc.

We can definitely use plain javascript but there are libraries out there that simplify the usage / understanding.
We will be using a library called p5.js. (https://p5js.org/reference/)

you will need to copy this two lines into your html file: 
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.3.1/p5.js"></script>  --------------- PLACE within the <head> tag
<script type="text/javascript" src="js/app.js"></script>   ----------------------------------------- PLACE within the <body> tag

lastly you need to place this file in your js folder.
*/
/////////////////////////////////////////////////////////////////////////

var DOM_EL = {
    loginPage : null,
        loginButton : null,
        loginPageUsername: null,
        loginPagePassword: null,
    focusAreaPage : null,
    questionnairePage : null,
    dashboardPage : null,
    challengePage : null,
    ccaChallengePage : null,
    ccaQuizPage : null,
}

var APP_STATE = {

}

/////////////////////////////////////////////////////////////////////////


function setup(){ // a function that runs once

    
    DOM_EL.loginPage = select("#login-page");
        DOM_EL.loginButton = select("#login-button");
        DOM_EL.loginButton.mousePressed(loginEvent);          // we will talk a little about this
        DOM_EL.loginPageUsername = select("#login-page-username");
        DOM_EL.loginPagePassword = select("#login-page-password");
    DOM_EL.focusAreaPage = select("#focus-area-page");
    DOM_EL.questionnairePage = select("#questionnaire-page"); // we will talk a little about this
    DOM_EL.dashboardPage = select("#dashboard-page");
    DOM_EL.challengePage = select("#challenge-page");
    DOM_EL.ccaChallengePage = select("#cca-challenge-page");
    DOM_EL.ccaQuizPage = select("#cca-quiz-page");

    
    DOM_EL.focusAreaPage.hide();
    DOM_EL.questionnairePage.hide();
    DOM_EL.dashboardPage.hide();
    DOM_EL.challengePage.hide();
    DOM_EL.ccaChallengePage.hide();
    DOM_EL.ccaQuizPage.hide();

}


///////////////////////////////////////////////////////////////////////////

function draw(){  // a function that runs in a loop once function setup is finished

}

///////////////////////////////////////////////////////////////////////////

function loginEvent(){
    console.log("check if account and password is correct");
    console.log(DOM_EL.loginPageUsername.value());
    console.log("if wrong do nothing, if correct, ask server whether account needs onboarding or can proceed to dashboard page");
    console.log("wait for server to reply");
    console.log("show relevant page");
}

