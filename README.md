# Club Bub

Club Bub is an interactive story creator. It is designed for kids and emulates the behaviour of a real toy called ["Once upon a time" by Clementoni.](https://en.clementoni.com/collections/the-best-loved/products/once-upon-a-time) The origanal toy is conceived, designed and developed in Italy.

After the login page you'll be presented to the main interface of the game. By clicking on each of the three top buttons displayed , the user will be able to decide the type of character (animal, super hero, astronauts), the type of style (friendship, war, magic), and the type of setting (Space, Nature, City) for the story. Each combination will lead to a different story and a world of fairy tales. The game is an interactive storyteller to create and read up to 27 different stories.

![Responsive Mockup](readme_assets/readme_imgs/club-bub_responsive.webp)




## Development of the idea

### Where the idea comes from

My two doughters got this toy as a present and they still love to play with it. I thought was a nice idea to develope a software version of it. Club Bub is born!

- Sketches on paper

![sketches1](readme_assets/readme_imgs/button-functionality-sketch.webp)
![sketches2](readme_assets/readme_imgs/wire-sketch-clubbub.webp)
![sketches3](readme_assets/readme_imgs/sketch_functions.webp)

- Logo created starting from a sketch I got from an AI called Dall e 2 and recrafted in Adobe Illustrator

![club-bub-logo](readme_assets/readme_imgs/clubbub-logo-ext.webp)

- Color branding and layout research. I was inspired by the color branding of an App called Headspace.

![color inspiration](readme_assets/readme_imgs/hs_app_scshot.webp)




### Features

This website features only one page. The Html is divided in sections that are displayed or hidden acordingly to the user action. This section are login, wizard, instruction, and story.

- __Login__

  - The login features only one input for username and a button to enter the wizard section. Not providing the username, will result in an alert pop-up asking for the input. The input field is taken to display the user name in the next sections and it's not submitted. Clicking the enter button the Story Wizard section is diplayed and the login section hidden.
 
![Login](readme_assets/readme_imgs/mobile_login_ss.webp)

- __Wizard Area__

  - The Wizard Area allows to select the element of the story, and to display it. The Wizard is conceptually divided in three parts: Instruction, Choice Area, and Controls Area. 

    - The instruction button display the instruction on how to play the game

    - _Choice Area_:

      - Character: The user can choose amongst three types of character: Animal, Super-Hero, Human
      - Style: The user can choose amongst three types of style: Friendship, War, Magic
      - Setting: The user can choose amongst three types of settings: Space, Nature, City

    - _Controls Area_

    The Controls Area features two buttons: Shuffle, and Play
      - The shuffle button creates a random combination of the story elements
      - The Play button displays the story selected according to the choice of the user and hides the Wizard Area

![wizard-area](readme_assets/readme_imgs/mobile-wizard-ss.webp)



- __Story Area__

  - This area is where the choosen story is displayed and it is revealed after clicking on the play button. It features also a reset button to bring the user back to the wizard area

![story-area](readme_assets/readme_imgs/mobile-story-display.webp)




## Testing 

The website has been tested in all its parts and works as intended. It is fully responsive and supports all screen sizes down to 360px. The tests were conducted using the inspector of Google Chrome. It scored high results with Lighthouse both on [Desktop](readme_images/lighthouse_desktop_results.png) and [Mobile](readme_images/lighthouse_mobile_results.png) ([Screenshot_Mobile](readme_images/lighthouse_mobile_test_scrshot.png)).
The elements adapt and change their appearence according to the aspect ratio of the screen without breaking the design.




### Validator Testing 

- JS
  - 25 warning were returned when passing through [JSHint](readme_assets/JSHint_warnings.md)
- CSS
  - No errors were returned when passing through the official [W3C validator]()
- HTML
  - No errors were returned when passing through the official [W3C CSS validator]()

### Unfixed

- JSHint spotts 3 Undeclared variables which are in reality 3 global variables




## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - On the left menu click on pages
  - On Build and Deployment section select the main branch and click on save.
  - Once saved the url of the page will appear on top of the page. 

The live link can be found here - https://fabi8bit.github.io/clubbub/


## Credits 

All the code was written from scratch combining the notion aquired during the lesson and the walkthrough project "Love for Math". Though I researched on line for some code snipet:
- background pattern (https://www.toptal.com/designers/subtlepatterns/watercolor-pattern/)
- pop-up (https://www.youtube.com/watch?v=AF6vGYIyV8M)
- set html attribute using JavaScript (https://www.javascripttutorial.net/dom/attributes/set-the-value-of-an-attribute/)



### Content and technique

- For the copyright part, name included I took advantage of ChatGPT (Artificial Intelligence) inquanto not relevant to the scope of this project.
- The icons in the buttons were taken from [Font Awesome](https://fontawesome.com/)
