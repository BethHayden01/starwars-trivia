Star Wars Trivia Game

This Star Wars based Trivia game was built in order to create a fun and interactive JavaScript based quiz game for the Star Wars Enthusiast user.

The game can be accessed via this link [link](https://bethhayden01.github.io/starwars-trivia)

## User Stories

### Initial User: 
* As a first time user accessing the game for the first time I want to be able to fully understand each element of the game easily. 
* As a first time user I wish to be able to understand, through clear instructions, how to navigate through the game and score points.
* As a first time user I need to be able to easily select my answer each time and submit an answer with feedback as to how I am doing. 

### Returning User: 
* As a returing user accessing the game for a second time, I wish to be able to reload the page easily and find it in exactly the same state I first found it in. 
* As a returning user I want to be able to see the leaderboard to see if I am in the top 5 of users.
* As a returning user, I need to be able to get feedback on each response to learn what I am getting wrong each time. 

## Features

### Start Screen

The start screen of this quiz is a simple clear screen with a stand alone start button. This stand alone button, clear of any other distractions enables the user to easily navigate the begining of the game and how to initiate the games programme. 

The purpose of this page is to create a clear starting point for the user.

### Instructions

Once the button is clicked by the user, the user shall be taken to an instructions page. This page will explain in clear detail how to navigate, score, and finish the game. This page will also contain an escape button in case the user changes their mind and no longer wants to begin the quiz. 

The purpose of this page is to create an informative barrier between the start screen and the commencement of the quiz. This barrier informs the user as well as giving them a chance to back out if desired. 

### Quiz board
The following pages contain the quiz itself. There are 10 questions in which the user can test their knowledge of the Star Wars franchise.

The quiz board is comprised of an initial question at the top of the board, alongside a 15 second timer which commences when the user progresses to the questions. The user will have a choice between 4 possible answers, and once one has been chosen, it shall either display a red background on the answer for incorrect or green background for correct. Once one answer has been chosen the counter will cease and the user will be unable to selected another answer from the quiz board. The next button will also appear prompting the user to select in order to progress onto further questions, all of which shall follow the same layout as the previous qustion. 

### Results page
The results page is the final page of the quiz. This page will tell the user the game is over and display the board alongside a leaderboard. 

The leaderboard element will allow the user to input their name which shall be saved on the leaderboard alongside their score. 

At the base of the results page there shall be a try again element alongside an exit element. This try again element shall enable the user the chance to retake the quiz without viewing the start screen or the instruction page. The exit element, if selected, will take the user back to the Start Screen. 

## Technologies used 
- HTML was used as the base of the quiz. 
- CSS was used in order to style the quiz throughout. 
- CSS Grid was used to style the answer buttons into a grid formation. 
- JavaScript was used in order to make the quiz fully interative.
- Balsamiq was used to generate the wireframes for this quiz. 
- VSCode was the tool used as the desktop platform to write the code in its entirety. 
- Git was used as version control. 
- GitHub was used to host the quiz and its repository. 

## Design 

### WireFrame:

The wireframe for this quiz can be accessed below: 
![Wireframe]

### Colourscheme 
The colourscheme for this quiz was generated with the help of a StarWars based colour palette. The intention of this was to reflect the theme of the films throughout with the background being red like Darth Vaders Lightsaber, and the buttons being blue like Luke Skywalkers saber. 

## Bugs 
During the generation of the trivia game there were several bugs, the most notable of which are listed below: 

### Try Again Button
* When the try again button was selected on the results page the user was indeed taken back to the first questions without having to reapproach the start screen and instruction page. 
* However, the initial question was always question 2 and the answer selected was displayed as incorrect, even when it was indeed correct.

(Insert Image)

* This was solved simply by reviewing the code written for the try again loop. Once the code was corrected on this element, the user was able to re-attempt the quiz from question 1 without any distinct errors being displayed. 

## Unsolved Bugs 

## Deployment 

This Trivia Quiz was deployed using the GitHub platform as per the below outlined steps: 

* First navigate to the setings tab on the respoitory. 
* Select the pages option on the left hand menu of the list. 
* Choose to deploy from the Main Branch and click save. 
* Once these steps have been followed, a link to the quiz shall be generated at the top of the page which can be followed to the deployed version of the code. 

## Testing 

This quiz was run and tested in 3 browers for compatability issues. The results of which are displayed below: 

![Quiz Chrome]

![Firefox Test]

![Iphone safari]

![Microsoft Edge]

## Validation 

Validation of the quiz was tested on all languages used in this project. 

![HTML VALIDATOR]

![CSS VALIDATOR]

![JAVASCRIPT VALIDATOR]

## Future Plans 

For the future development of this project I intend to add the following elements: 

* Randomize the questions from a larger list stored in a bigger question bank.
* Use background images instead of colours (Not initially used due to potential copywrite issues).
* Add theme music to the quiz and interactive button noises. 

## Achknowledgements

- [Iuliia-konovalova](https://github.com/IuliiaKonovalova) was my mentor and a supporter of my project throughout the initial project submission and resubmission. 
- [Code-Institute](https://codeinstitute.net/) for it's helpful tutorials on JavaScript, HTML and CSS elements of this project. 
- [Eddy-Ku](https://github.com/PalliateAi) for his support and insight into CSS, HTML and JavaScript. 





