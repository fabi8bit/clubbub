let heroArr = ['<i class="fa-solid fa-cat"> Animal</i>', '<i class="fa-solid fa-mask"> Super Hero</i>', '<i class="fa-solid fa-user-astronaut"> Human</i>'];
let genreArr = ['<i class="fa-regular fa-hand-peace"> Friendship</i>', '<i class="fa-solid fa-bolt-lightning"> War</i>', '<i class="fa-solid fa-hat-wizard"> Magic</i>'];
let environmentArr = ['<i class="fa-solid fa-tree"> Nature</i>', '<i class="fa-solid fa-city"> City</i>', '<i class="fa-solid fa-rocket"> Space</i>'];
let selection = [heroArr, genreArr, environmentArr];


// Wait for the DOM to finish loading
// Load the array with the favicons HTML code
// Add event listeners to the buttons

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName('buttons');
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") === "play") {
                createStory();


            } else if (this.getAttribute("id") === "shuffle") {
                shuffle();
            } else if (this.getAttribute("id") === "reset") {
                displayStory('display-all', 'display-none');
            } else if (this.getAttribute("id") === "logme") {
                displayWizard();
            } else if (this.getAttribute("id") === "question-btn") {
                displayInstruction('display-all', 'display-none');
            } else if (this.getAttribute("id") === "close-instruction") {
                displayInstruction('display-none', 'display-all');
            }
             else {
                let buttonType = this.getAttribute("id");
                buttonScroll(buttonType);
            }
        });
    }
    setInitialState();
});

function displayWizard() {
    let uName = document.getElementById("user").value;
    if (uName) {
        document.getElementById("login").classList.remove('display-all');
        document.getElementById("login").classList.add('display-none');
        document.getElementById("wizard-area").classList.remove('display-none');
        document.getElementById("wizard-area").classList.add('display-all');
        document.getElementById("logo-claim").innerHTML += `, ${uName}`;
    } else {
        alert('we need your name, baby!');
    }
}

/**
 * Set initial state for the buttons of the choice-area
 */
function setInitialState() {
    let choices = document.getElementsByClassName('choice');
    for (let i = 0; i < choices.length; i++) {
        choices[i].innerHTML = selection[i][0];
    }
}

/**
 * the function shuffle generate a random combination for the choice buttons.
 */
function shuffle() {
    let choices = document.getElementsByClassName('choice');
    for (let i = 0; i < choices.length; i++) {
        let randomIndex = Math.floor(Math.random() * 3);
        choices[i].innerHTML = selection[i][randomIndex];
        choices[i].setAttribute('data-selector', randomIndex);
    }
}

/**
 * buttonScroll function get the buttonType as Input.
 * buttonType correspond to the id attribute of the html element.
 * this function allows to scroll through the various option of the button(buttonType) clicked 
 */
function buttonScroll(buttonType) {
    let thisButton = document.getElementById(buttonType);
    let thisArr = "";
    let dataSelector = thisButton.getAttribute("data-selector");
    if (thisButton === hero) {
        thisArr = heroArr;
    } else if (thisButton === genre) {
        thisArr = genreArr;
    } else if (thisButton === environment) {
        thisArr = environmentArr;
    }
    parseInt(dataSelector++);
    if (dataSelector > thisArr.length - 1) {
        dataSelector = 0;
        thisButton.setAttribute('data-selector', dataSelector);
    } else {
        thisButton.setAttribute('data-selector', dataSelector); // setAttribute from this tutorial https://www.javascripttutorial.net/dom/attributes/set-the-value-of-an-attribute/
    }
    thisButton.innerHTML = thisArr[dataSelector];
}

/**
 * this function create a string that will be used as a code
 * to retrieve the html element (story) to be displayed
 */
function createStory() {
    let storyId = "s";
    let choices = document.getElementsByClassName('choice');
    for (let i = 0; i < choices.length; i++) {
        storyId += choices[i].getAttribute('data-selector');
    }
    displayStory('display-none', 'display-all');
    //put all the stories invisible before the selected one (storyId) will be set to visible 
    let stories = document.getElementsByClassName('stories');
    for (let i = 0; i < stories.length; i++) {

        stories[i].classList.add("display-none");
        stories[i].classList.remove("display-all");
    }
    //the selected story is set to visible ('initial')
    document.getElementById(storyId).classList.remove("display-none");
    document.getElementById(storyId).classList.add("display-all");
}

/**
 * this function is used to display or hide the controls and the story section
 * @param {set the wizard buttons visible or invisible} dispWiz 
 * @param {set the Story visible or invisible} dispStory 
 */
function displayStory(dispWiz, dispStory) {
    document.getElementById("wizard-area").classList.remove(dispWiz);
    document.getElementById("wizard-area").classList.remove(dispStory);
    document.getElementById("story-area").classList.remove(dispWiz);
    document.getElementById("story-area").classList.remove(dispStory);
    document.getElementById("wizard-area").classList.add(dispWiz);
    document.getElementById("story-area").classList.add(dispStory);
}

function displayInstruction(dispInstr, dispWiz) {
    document.getElementById("wizard-area").classList.remove(dispWiz);
    document.getElementById("wizard-area").classList.remove(dispInstr);
    document.getElementById("instructions").classList.remove(dispWiz);
    document.getElementById("instructions").classList.remove(dispInstr);
    document.getElementById("instructions").classList.add(dispInstr);
    document.getElementById("wizard-area").classList.add(dispWiz);
}