// ASIDE SECTIONS: STORIES & SUGGESTIONS

let storySectionExpanded = false;
let suggestionSectionExpanded = false;

function toggleStorySection() {
  const storyBox = document.getElementById('stories');
  const storyHeaderSpan = document.getElementById('storyHeaderSpan');
  const suggestionBox = document.getElementById('suggestions');
  const suggestionHeaderSpan = document.getElementById('suggestionHeaderSpan');

  if (!storySectionExpanded) {
    // Aufklappen der Story-Section
    storyBox.classList.remove('default-height');
    storyBox.classList.add('unfolded');
    storyHeaderSpan.innerHTML = 'show less';
    storySectionExpanded = true;

    // Einklappen der Suggestion-Section
    suggestionBox.classList.remove('unfolded');
    suggestionBox.classList.add('default-height', 'no-scroll');
    suggestionHeaderSpan.innerHTML = 'show all';
    suggestionSectionExpanded = false;
  } else {
    // Zurücksetzen in den Default-Modus
    storyBox.classList.remove('unfolded');
    storyBox.classList.add('default-height');
    storyHeaderSpan.innerHTML = 'show all';
    storySectionExpanded = false;
  }
}

function resetStorySection() {
  const storyBox = document.getElementById('stories');
  const storyHeaderSpan = document.getElementById('storyHeaderSpan');

  if (storySectionExpanded) {
    // Zurücksetzen der Story-Section in den Default-Modus
    storyBox.classList.remove('unfolded');
    storyBox.classList.add('default-height');
    storyHeaderSpan.innerHTML = 'show all';
    storySectionExpanded = false;
  }
}

function toggleSuggestionSection() {
  const suggestionBox = document.getElementById('suggestions');
  const suggestionHeaderSpan = document.getElementById('suggestionHeaderSpan');
  const storyBox = document.getElementById('stories');
  const storyHeaderSpan = document.getElementById('storyHeaderSpan');

  if (!suggestionSectionExpanded) {
    // Aufklappen der Suggestion-Section
    suggestionBox.classList.remove('default-height');
    suggestionBox.classList.add('unfolded');
    suggestionHeaderSpan.innerHTML = 'show less';
    suggestionSectionExpanded = true;

    // Einklappen der Story-Section
    storyBox.classList.remove('unfolded');
    storyBox.classList.add('default-height');
    storyHeaderSpan.innerHTML = 'show all';
    storySectionExpanded = false;
  } else {
    // Zurücksetzen in den Default-Modus
    suggestionBox.classList.remove('unfolded');
    suggestionBox.classList.add('default-height');
    suggestionHeaderSpan.innerHTML = 'show all';
    suggestionSectionExpanded = false;
  }
}

function resetSuggestionSection() {
  const suggestionBox = document.getElementById('suggestions');
  const suggestionHeaderSpan = document.getElementById('suggestionHeaderSpan');

  if (suggestionSectionExpanded) {
    // Zurücksetzen der Suggestion-Section in den Default-Modus
    suggestionBox.classList.remove('unfolded');
    suggestionBox.classList.add('default-height');
    suggestionHeaderSpan.innerHTML = 'show all';
    suggestionSectionExpanded = false;
  }
}
