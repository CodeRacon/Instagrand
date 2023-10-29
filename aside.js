// ASIDE SECTIONS: STORIES & SUGGESTIONS

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
    // Aufklappen der Story-Section
    storyBox.classList.remove('default-height');
    storyBox.classList.add('unfolded');
    storyHeaderSpan.innerHTML = 'show less';
    storyCont.classList.remove('no-scroll');
    storyCont.classList.add('scroll');
    storySectionExpanded = true;

    // Einklappen der Suggestion-Section
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
    // Zurücksetzen in den Default-Modus
    storyBox.classList.remove('unfolded');
    storyBox.classList.add('default-height');
    storyCont.classList.remove('scroll');
    storyCont.classList.add('no-scroll');
    storyHeaderSpan.innerHTML = 'show all';

    storySectionExpanded = false;
  }
}

function resetStorySection() {
  const storyBox = document.getElementById('stories');
  const storyHeaderSpan = document.getElementById('storyHeaderSpan');
  const storyCont = document.getElementById('stories-cont');

  if (storySectionExpanded) {
    // Zurücksetzen der Story-Section in den Default-Modus
    storyBox.classList.remove('unfolded');
    storyBox.classList.add('default-height');
    storyHeaderSpan.innerHTML = 'show all';
    storyCont.classList.remove('scroll');
    storyCont.classList.add('no-scroll');
    storySectionExpanded = false;
  }
}

function toggleSuggestionSection() {
  const suggestionBox = document.getElementById('suggestions');
  const suggestionHeaderSpan = document.getElementById('suggestionHeaderSpan');
  const storyBox = document.getElementById('stories');
  const storyCont = document.getElementById('stories-cont');
  const suggestCont = document.getElementById('suggested-cont');

  const storyHeaderSpan = document.getElementById('storyHeaderSpan');

  if (!suggestionSectionExpanded) {
    // Aufklappen der Suggestion-Section
    suggestionBox.classList.remove('default-height');
    suggestionBox.classList.add('unfolded');
    suggestionHeaderSpan.innerHTML = 'show less';
    suggestCont.classList.remove('no-scroll');
    suggestCont.classList.add('scroll');
    suggestionSectionExpanded = true;

    // Einklappen der Story-Section
    storyBox.classList.remove('unfolded');
    storyBox.classList.add('default-height');
    storyHeaderSpan.innerHTML = 'show all';
    storyCont.classList.remove('scroll');
    storyCont.classList.add('no-scroll');
    storySectionExpanded = false;
  } else {
    // Zurücksetzen in den Default-Modus
    suggestionBox.classList.remove('unfolded');
    suggestionBox.classList.add('default-height');
    suggestionHeaderSpan.innerHTML = 'show all';
    suggestCont.classList.remove('scroll');
    suggestCont.classList.add('no-scroll');
    suggestionSectionExpanded = false;
  }
}

function resetSuggestionSection() {
  const suggestionBox = document.getElementById('suggestions');
  const suggestionHeaderSpan = document.getElementById('suggestionHeaderSpan');
  const suggestCont = document.getElementById('suggested-cont');

  if (suggestionSectionExpanded) {
    // Zurücksetzen der Suggestion-Section in den Default-Modus
    suggestionBox.classList.remove('unfolded');
    suggestionBox.classList.add('default-height');
    suggestionHeaderSpan.innerHTML = 'show all';
    suggestCont.classList.remove('scroll');
    suggestCont.classList.add('no-scroll');
    suggestionSectionExpanded = false;
  }
}
