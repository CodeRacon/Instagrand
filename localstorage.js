// LOCAL STORAGE

function save() {
  const data = JSON.stringify(cards);

  localStorage.setItem('cardsData', data);

  const storiesData = JSON.stringify(stories);
  localStorage.setItem('storiesData', storiesData);

  const suggestionsData = JSON.stringify(suggestions);
  localStorage.setItem('suggestionsData', suggestionsData);
}

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
  console.log('Loaded stories:', stories);

  const suggestionsData = localStorage.getItem('suggestionsData');
  if (suggestionsData) {
    suggestions = JSON.parse(suggestionsData);
  }
  console.log('Loaded suggestions:', suggestions);
}
