# Plotly_challenge
An exercise worked using plotly.js

The purpose of this exercise was to display an interactive dashboard that illustrates organisms found in people's bellybuttons (no, I didn't pick the topic). 
The index.html was provided, but I modified it as necessary to get my code to work. The JSON data file is being served from a flask app that I built and hosted on 
heroku from the following github repository: https://github.com/gspahlin/Test_server . The data is read in from the following url: 
https://secret-anchorage-45447.herokuapp.com/. The read-in tends to be a little slow, so be patient! I used this method because of excessive trouble with CORS
errors. I offered the URL to my classmates so some of them may also be using it. 

The main file to look at in this repo is app.js, which is where the Javascript code that controls the behavior of the plots resides. 

The file index.html was not written by me, but contains the html elements that I manipulate with my Javascript. 
