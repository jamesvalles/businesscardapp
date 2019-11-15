James Valles 
Biz Card Application 
Web Applications 
Final Project

Github: https://github.com/jamesvalles/businesscardapp
Hosting addres: 


Login instructions
1) You can create an account or 2)
Login using: 
chandlergegg@gmail.com
5DeepBreaths! 


Hi there! Here is my final project which took over 60+ hours to complete.

This application let's you store your business cards. You have two ways to enter your cards:

All aspects of this project have been 100% completed and tested and work. 

The following has been complete: 

**Implemented Components:** 
Business Card
New Business Card *(This was optional, but I completed)
Web Cam 
BusinessCards (aka dashboard) *(This was optional but completed)
Login 
Logout(Fully implemented on the navbar)
NotFound 

**Additional components implemented:**
update - lets you update business card*
topnav - top nav bar where search box is located*
profile - this is optional*
footer - added footer * 

**Services**
Created authservice, firebase service, webcam connect service with also connects to google vision api 

**Additional**
*Implemented interfaces for all class components and services where applicable. 
*When navigating to a page that doesn't exist you will get a pagenotfound (notfound component)

All routes added: 
login 
notFound
businessCards
userProfile 
camera
newCard
'' redirected to login 
'**' redirected to notFound
 
Extra credit: 

-Added additional components indicated above with denoted with a *
-Worked to stylize, played with google fonts, bootstap, bootsnippets, css/html
-Added footer 
-

Full functionality:
-Can create a card
-Read cards in from firebase displays on dashboard
-Update business card details and saves to database
-Remove business card from dashboard 
-User can logout/login and is authenticated. 


**Adding Card**
 1) you can use your webcam by clicking "Camera" on the left nav bar and pressing the camera icon with the plus sign below your camera feed on the right and then clicking on "Add Business Card" and you will be redirected to the card dashboard. 

 2) You can click on "+Add Card" on the left nav bar. You will then be prompted to fill out the form. Once you are done, please click "Add Card" and you will be redirected to the card dashboard. 


 **Updating a Card**
 The card dashboard shows all cards that have been entered. To edit a card, simply click on the pencil icon for the specific card you would like to edit. You will then be redirected to the update page. Once you have entered new information into the update form, click "Update Card" and you will be redirected to the card dashboard. 

 **About Google and Camera API Accuracy**
 The accuarcy depends on card formatting, certain numbers will work better than other number formats. I spent a considerable amount of time trying to match regular expression to extract, phone, email, address, name, etc. 

 At the current time the following field and formats will be read, all others, if unsuccessful will be filled with NA for not available. The user can always click on the pencil next to the business card they would like to edit on the dashboard. 

 Formats tested: 
 all emails work name@name.com
 web addresses (www.domainname.com)
 Phone numbers (123.456.0123 and 123-123-2345)
 name will pick up anything on the card, its very hard to specifically narrow a name, as theres no way to really figure out whats a first or last name. 

 **

Thank you!! Great class. Have a great winter break. 

Questions: james@jamesvalles.com