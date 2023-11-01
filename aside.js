// ASIDE SECTIONS: STORIES & SUGGESTIONS

//  = function to toggle the story section between expanded and collapsed states
//    - initializes variables for various elements and their current states
//    - if the story section is not expanded:
//      * expands the story section:
//        - updates CSS classes by removing 'default-height' and adding 'unfolded' to the story box
//        - updates the header span text to 'show less'
//        - adjusts the content container for scrolling
//        - sets the storySectionExpanded flag to true
//      * collapses the suggestion section:
//        - updates CSS classes by removing 'unfolded' and adding 'default-height' and 'no-scroll' to the suggestion box
//        - updates the suggestion header text based on the screen width
//        - adjusts the content container for no scrolling
//        - sets the suggestionSectionExpanded flag to false
//    - if the story section is expanded:
//      * collapses the story section:
//        - updates CSS classes by removing 'unfolded' and adding 'default-height' to the story box
//        - adjusts the content container for no scrolling
//        - updates the header span text to 'show all'
//        - sets the storySectionExpanded flag to false
let storySectionExpanded = false;
let suggestionSectionExpanded = false;

function toggleStorySection() {
  const storyBox = document.getElementById('stories');
  const storyHeaderSpan = document.getElementById('storyHeaderSpan');
  const storyCont = document.getElementById('stories-cont');
  const suggestCont = document.getElementById('suggested-cont');

  const suggestionBox = document.getElementById('suggestions');
  const suggestionHeaderSpan = document.getElementById('suggestionHeaderSpan');
  const minSuggItems = suggestions.length <= 2;

  if (!storySectionExpanded) {
    storyBox.classList.remove('default-height');
    storyBox.classList.add('unfolded');
    storyHeaderSpan.innerHTML = 'show less';
    storyCont.classList.remove('no-scroll');
    storyCont.classList.add('scroll');
    storySectionExpanded = true;

    suggestionBox.classList.remove('unfolded');
    suggestionBox.classList.add('default-height', 'no-scroll');

    if (window.innerWidth <= 951) {
      suggestionHeaderSpan.innerHTML = minSuggItems ? 'show all' : 'show all';
    } else {
      suggestionHeaderSpan.innerHTML = minSuggItems ? '' : 'show all';
    }

    suggestCont.classList.remove('scroll');
    suggestCont.classList.add('no-scroll');
    suggestionSectionExpanded = false;
  } else {
    storyBox.classList.remove('unfolded');
    storyBox.classList.add('default-height');
    storyCont.classList.remove('scroll');
    storyCont.classList.add('no-scroll');
    storyHeaderSpan.innerHTML = 'show all';

    storySectionExpanded = false;
  }
}

//  = function to reset the story section to its default state
//    - initializes variables for various elements and their current state
//    - if the story section is expanded, it performs the following reset actions:
//      * collapses the story section:
//        - updates CSS classes to remove 'unfolded' and add 'default-height' to the story box
//        - adjusts the content container for non-scrolling
//        - updates the header span text to 'show all'
//        - sets the storySectionExpanded status to false
function resetStorySection() {
  const storyBox = document.getElementById('stories');
  const storyHeaderSpan = document.getElementById('storyHeaderSpan');
  const storyCont = document.getElementById('stories-cont');

  if (storySectionExpanded) {
    storyBox.classList.remove('unfolded');
    storyBox.classList.add('default-height');
    storyHeaderSpan.innerHTML = 'show all';
    storyCont.classList.remove('scroll');
    storyCont.classList.add('no-scroll');
    storySectionExpanded = false;
  }
}

//  = function to toggle the suggestion section between expanded and collapsed states
//    - initializes variables for various elements and their current states
//    - if the suggestion section is not expanded:
//      * expands the suggestion section:
//        - updates CSS classes to remove 'default-height' and add 'unfolded' to the suggestion box
//        - updates the suggestion header text to 'show less'
//        - adjusts the content container for scrolling
//        - sets the suggestionSectionExpanded flag to true
//      * collapses the story section:
//        - updates CSS classes to remove 'unfolded' and add 'default-height' and 'no-scroll' to the story box
//        - updates the story header text based on the screen width
//        - adjusts the content container for non-scrolling
//        - sets the storySectionExpanded flag to false
//    - if the suggestion section is expanded:
//      * collapses the suggestion section:
//        - updates CSS classes to remove 'unfolded' and add 'default-height' to the suggestion box
//        - updates the suggestion header text to 'show all'
//        - adjusts the content container for non-scrolling
//        - sets the suggestionSectionExpanded status to false

function toggleSuggestionSection() {
  const suggestionBox = document.getElementById('suggestions');
  const suggestionHeaderSpan = document.getElementById('suggestionHeaderSpan');
  const storyBox = document.getElementById('stories');
  const storyCont = document.getElementById('stories-cont');
  const suggestCont = document.getElementById('suggested-cont');

  const storyHeaderSpan = document.getElementById('storyHeaderSpan');

  if (!suggestionSectionExpanded) {
    suggestionBox.classList.remove('default-height');
    suggestionBox.classList.add('unfolded');
    suggestionHeaderSpan.innerHTML = 'show less';
    suggestCont.classList.remove('no-scroll');
    suggestCont.classList.add('scroll');
    suggestionSectionExpanded = true;

    storyBox.classList.remove('unfolded');
    storyBox.classList.add('default-height');
    storyHeaderSpan.innerHTML = 'show all';
    storyCont.classList.remove('scroll');
    storyCont.classList.add('no-scroll');
    storySectionExpanded = false;
  } else {
    suggestionBox.classList.remove('unfolded');
    suggestionBox.classList.add('default-height');
    suggestionHeaderSpan.innerHTML = 'show all';
    suggestCont.classList.remove('scroll');
    suggestCont.classList.add('no-scroll');
    suggestionSectionExpanded = false;
  }
}

//  = function to reset the suggestion section to its default state
//    - initializes variables for various elements and their current state
//    - if the suggestion section is expanded, it performs the following reset actions:
//      * collapses the suggestion section:
//        - updates CSS classes to remove 'unfolded' and add 'default-height' to the suggestion box
//        - adjusts the content container for non-scrolling
//        - updates the suggestion header text to 'show all'
//        - sets the suggestionSectionExpanded flag to false
function resetSuggestionSection() {
  const suggestionBox = document.getElementById('suggestions');
  const suggestionHeaderSpan = document.getElementById('suggestionHeaderSpan');
  const suggestCont = document.getElementById('suggested-cont');

  if (suggestionSectionExpanded) {
    suggestionBox.classList.remove('unfolded');
    suggestionBox.classList.add('default-height');
    suggestionHeaderSpan.innerHTML = 'show all';
    suggestCont.classList.remove('scroll');
    suggestCont.classList.add('no-scroll');
    suggestionSectionExpanded = false;
  }
}

// BURGER-MENU

//  = function to handle the click event on the menu button
//    - when the button is clicked, it toggles the 'open' class on the menu button element
//    - updates the menuOpen flag to keep track of the menu's open/closed state
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

//  = function to handle the click event on the toggle button
//    - when the button is clicked, it toggles the 'open-sidemenu' and
//      'open-border-dummy' classes on the side menu and border-dummy elements
const toggleButton = document.getElementById('toggler');
const sideMenu = document.getElementById('sidemenu');
const borderDummy = document.getElementById('borderDummy');

toggleButton.addEventListener('click', () => {
  sideMenu.classList.toggle('open-sidemenu');
  borderDummy.classList.toggle('open-border-dummy');
});
