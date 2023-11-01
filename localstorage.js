// LOCAL STORAGE

// function to save card, stories, and suggestions data in local storage
// - converts the 'cards' array, 'stories' array, and 'suggestions' array into
//   JSON-formatted strings and stores them in local storage under specific keys
//   ('cardsData', 'storiesData', and 'suggestionsData') for data persistence
function save() {
  const data = JSON.stringify(cards);

  localStorage.setItem('cardsData', data);

  const storiesData = JSON.stringify(stories);
  localStorage.setItem('storiesData', storiesData);

  const suggestionsData = JSON.stringify(suggestions);
  localStorage.setItem('suggestionsData', suggestionsData);
}

// function to load card, stories, and suggestions data from local storage
// - retrieves JSON-formatted data from local storage using specific keys
//   ('cardsData', 'storiesData', and 'suggestionsData')
// - if data is found in local storage, it parses and assigns it to respective arrays
// - sets the 'commentDisplayStatus' property for each card in the 'cards' array to 'limited'
// - calls 'renderPage()' to update the user interface based on the loaded data
function load() {
  const data = localStorage.getItem('cardsData');

  if (data) {
    cards = JSON.parse(data);
  }

  cards.forEach((card) => {
    card.commentDisplayStatus = 'limited';
  });

  const storiesData = localStorage.getItem('storiesData');
  if (storiesData) {
    stories = JSON.parse(storiesData);
  }

  const suggestionsData = localStorage.getItem('suggestionsData');
  if (suggestionsData) {
    suggestions = JSON.parse(suggestionsData);
  }
  renderPage();
}
