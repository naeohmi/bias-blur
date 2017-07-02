# Bias Blur
## Chrome extension to hide names and profile pictures to anonymize applicants in an effort to increase racial and gender diversity.

![logo](/assets/logo.png)

This proof of concept is a hackathon project for the 2017 Women in Tech Demo Day, presented by CapitalOne and AngelHack (June 16-17).  
Made by @naeohmi, @keziyah, and @cvicky

React | JavaScript | Express | Watson Document Coversion API

# How to use

## Chrome Extension
The Chrome extension hides names and profile pictures on LinkedIn profiles so that recruiters can evaluate candidates without bias. 
* Clone the project, then follow these instructions to manually install the directory chromeExtension.  
https://www.cnet.com/how-to/how-to-install-chrome-extensions-manually/
* Now you can use the extension on any LinkedIn profile. You shouldn't see the profile picture, candidate name, or other personal information. 

![screenshot](/assets/bias-blur-screen.png)

## Resume viewer
This component allows someone to upload a resume document. The resume will be converted to HTML and the person's name will be hidden. 
* Clone the project, then `cd aboutface-react`.
* `npm install`
* Get the path to your resume, and then change lines 24 and 43 of `server.js` to reflect the path to your resume on your computer. 
* If you are using this in July of 2017 or later, you will probably need to use your own credentials for the Watson Document conversion API (because we were using a free trial.) You can do this by signing up for a free Bluemix trial. Then, add your credentials to lines 14 and 15 of `server.js`

* Start the React app with `npm start `. 
* In another terminal window, start the express server with `node server.js`. 
* Go to localhost:3000/resume. Upload a your resume, and you should see your name, and any part of your resume that contains your name, such as your GitHub link, replaced with other text. 
