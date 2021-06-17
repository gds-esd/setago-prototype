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
    mainPage: null,
        sidebarContainer : null,
            setagoTab : null,
            challengeTab: null,
            progressionTab: null,
        focusAreaPage : null,
        questionnairePage : null,
        dashboardPage : null,
        challengePage : null,
            ccachallengeTab : null,
                ccachallengePage : null,
                ccachallengeQuiz : null,
                ccachallengeMain : null,
            commchallengeTab : null,
                commchallengePage : null,
                commchallengeQuiz : null,
                commchallengeMain : null,
            srdmchallengeTab : null,
                srdmchallengePage : null, 
                srdmchallengeQuiz : null, 
                srdmchallengeMain : null, 

}

var APP_STATE = {

}

/////////////////////////////////////////////////////////////////////////


function setup(){ // a function that runs once

    
    DOM_EL.loginPage = select("#login-page");
        DOM_EL.loginButton = select("#login-button");
        DOM_EL.loginButton.mousePressed(loginEvent);
        DOM_EL.loginPageUsername = select("#login-page-username");
        DOM_EL.loginPagePassword = select("#login-page-password");
    DOM_EL.mainPage = select("#main-page");
        DOM_EL.focusAreaPage = select("#focus-area-page");
        DOM_EL.questionnairePage = select("#questionnaire-page");
        DOM_EL.dashboardPage = select("#dashboard-page");
            DOM_EL.setagoTab = select("#title");
            DOM_EL.setagoTab.mousePressed(logoEvent);
            DOM_EL.challengeTab = select("#challenge-tab");
            DOM_EL.challengeTab.mousePressed(challengeEvent);
                DOM_EL.challengePage = select("#challenge-page")
                    DOM_EL.ccachallengeTab = select ("#cca-startbutn");
                    DOM_EL.ccachallengeTab.mousePressed(ccachallengeEvent);
                    DOM_EL.commchallengeTab = select("#comm-startbtn");
                    DOM_EL.commchallengeTab.mousePressed(commchallengeEvent);
                    DOM_EL.srdmchallengeTab = select("#srdm-startbutn");
                    DOM_EL.srdmchallengeTab.mousePressed(srdmchallengeEvent);
        

    DOM_EL.mainPage.hide();
    DOM_EL.focusAreaPage.hide();
    DOM_EL.questionnairePage.hide();
    DOM_EL.dashboardPage.hide();
    DOM_EL.challengePage.hide();
        DOM_EL.ccachallengePage.hide();
        DOM_EL.ccachallengeQuiz.hide();
        DOM_EL.ccachallengeMain.hide();
        DOM_EL.commchallengePage.hide();
        DOM_EL.commchallengePage.hide();
        DOM_EL.commchallengeQuiz.hide();
        DOM_EL.srdmchallengePage.hide();
        DOM_EL.srdmchallengeQuiz.hide();
        DOM_EL.srdmchallengeMain.hide();


}


///////////////////////////////////////////////////////////////////////////

function draw(){  // a function that runs in a loop once function setup is finished

}

///////////////////////////////////////////////////////////////////////////

function loginEvent(){
    console.log("check if account and password is correct");
    console.log(DOM_EL.loginPageUsername.value());
    if(DOM_EL.loginPageUsername.value() == "username"){
        if(DOM_EL.loginPagePassword.value() == "password"){
            //yay both username and password matched!
            DOM_EL.loginPage.hide();
            DOM_EL.mainPage.style("display","flex");
            DOM_EL.dashboardPage.style("display", "flex");
            console.log("show relevant page");
        }
        else{
            console.log("boo password wrong");
        }
    }
    else{
        console.log("boo username wrong");
    }

    console.log(DOM_EL.loginPagePassword.value());
    console.log("if wrong do nothing, if correct, ask server whether account needs onboarding or can proceed to dashboard page");
    console.log("wait for server to reply");
    console.log("show relevant page");

    let u = "?user=" + DOM_EL.loginPageUsername.value();
let k = "&password=" + DOM_EL.loginPagePassword.value();

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://cotf.cf/admin/SETAGO_GET_USER' + u + k, true);
xhr.onload = function () {
    console.log("got a reply");
};
xhr.send();
}

// if the value of login username = "username" , and if login password = "password",
// hide loginpage

///////////////////////////////////////////////////////////////////////////


function logoEvent(){
    hideAllsubPage();
    DOM_EL.dashboardPage.style("display","flex");
  
}
///////////////////////////////////////////////////////////////////////////

function challengeEvent(){
    hideAllsubPage();
    DOM_EL.challengePage.style("display","flex");
}

///////////////////////////////////////////////////////////////////////////

function ccachallengeEvent(){
    hideAllsubPage();
    DOM_EL.ccachallengePage.style("display","flex");
}


///////////////////////////////////////////////////////////////////////////

function commchallengeEvent(){
    hideAllsubPage();
   
}


///////////////////////////////////////////////////////////////////////////

function srdmchallengeEvent(){
    hideAllsubPage();
   
}


///////////////////////////////////////////////////////////////////////////

function hideAllsubPage(){
    DOM_EL.focusAreaPage.hide();
    DOM_EL.questionnairePage.hide();
    DOM_EL.dashboardPage.hide();
    DOM_EL.challengePage.hide();
        DOM_EL.ccachallengePage.hide();
            DOM_EL.ccachallengeQuiz.hide();
            DOM_EL.ccachallengeMain.hide();
        DOM_EL.commchallengePage.hide();
            DOM_EL.commchallengePage.hide();
            DOM_EL.commchallengeQuiz.hide();
}