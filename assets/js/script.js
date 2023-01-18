// Wait for the DOM to finish loading
// Add event listeners to the buttons

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName('buttons');

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("id") === "play") {
                alert(`You clicked ${this.getAttribute("id")}!`);
            } else {
                let buttonType = this.getAttribute("id");
                alert(`You clicked ${buttonType}`);
            }
        });
    }
});


function setupStory() {

}

function buttonScroll() {
    

}

function shuffle() {

}

function createStory() {
    
}