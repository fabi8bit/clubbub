let heroArr = ['<i class="fa-solid fa-kiwi-bird">','<i class="fa-solid fa-mask"></i>','<i class="fa-solid fa-user-astronaut"></i>'];
let genreArr = ['<i class="fa-regular fa-hand-peace"></i>','<i class="fa-solid fa-bolt-lightning"></i>','<i class="fa-solid fa-hat-wizard"></i>'];
let environmentArr = ['<i class="fa-solid fa-rocket"></i>','<i class="fa-solid fa-tree"></i>','<i class="fa-solid fa-city"></i>'];
let selection = [heroArr,genreArr,environmentArr];


// Wait for the DOM to finish loading
// Load the array with the favicons HTML code
// Add event listeners to the buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName('buttons');
    

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "play") {
                displayStory('none','initial'); 
            } else if (this.getAttribute("id") === "shuffle") {
                shuffle();
            } else if (this.getAttribute("id") === "reset") {
                displayStory('initial','none');
            }
            else {
                let buttonType = this.getAttribute("id");
                buttonScroll(buttonType);
            }
        });

    }
    setInitialState();
    


});

/**
 * Set initial state for the buttons of the choice-area
 */
function setInitialState() {
    let choices = document.getElementsByClassName('choice');
    // console.log(choices[0].innerHTML);
    for (let i=0 ; i<choices.length ; i++) {
        choices[i].innerHTML = selection[i][0];
        
    }
}

/**
 * the function shuffle generate a random combination for the choice buttons.
 */
function shuffle() {
    let choices = document.getElementsByClassName('choice');
    for (let i=0 ; i<choices.length ; i++) {
        let randomIndex = Math.floor(Math.random() * 3);
        console.log(choices[i]);
        console.log(randomIndex);
        choices[i].innerHTML = selection[i][randomIndex];
        
        
    }
}

function setupStory() {

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
    
    console.log(dataSelector);
    
    if (dataSelector > thisArr.length-1){
        dataSelector = 0;
        thisButton.setAttribute('data-selector',dataSelector);
    } else {
        thisButton.setAttribute('data-selector',dataSelector); // setAttribute from this tutorial https://www.javascripttutorial.net/dom/attributes/set-the-value-of-an-attribute/
    }

    thisButton.innerHTML = thisArr[dataSelector];
    

}



function createStory() {
    
}

function displayStory(dispWiz,dispStory) {
    document.getElementById("wizard-area").style.display = dispWiz;
    document.getElementById("story-area").style.display = dispStory;
    console.log()

}

