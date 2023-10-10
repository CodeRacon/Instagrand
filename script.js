let cards = [
  {
    author: 'call_me_wittgenstein',
    profileImg: 'img/profile/wittgenstein.jpg',
    location: 'Vienna, Austria',
    description: 'Worüber man nicht sprechen kann, darüber muss man schweigen.',
    poster: 'img/poster/poster1.jpg',
  },
  {
    author: 'georg_w_hegel',
    profileImg: 'img/profile/hegel.jpg',
    location: 'Ingolstadt, Germany',
    description: 'Die Vernunft ist das höchste Gut des Menschen.',
    poster: 'img/poster/poster2.jpg',
  },
  {
    author: 'platonsuperbrain',
    profileImg: 'img/profile/platon.jpg',
    location: 'Athen, Greece',
    description: 'Die Ideen sind die wahren Realitäten.',
    poster: 'img/poster/poster3.jpg',
  },
  {
    author: 'e_kant',
    profileImg: 'img/profile/kant.jpg',
    location: 'Königsberg, Prussia',
    description:
      'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.',
    poster: 'img/poster/poster4.jpg',
  },
  {
    author: 'aristoteles',
    profileImg: 'img/profile/aristoteles.jpg',
    location: 'Stagira, Greece',
    description: 'Die Tugend liegt in der Mitte.',
    poster: 'img/poster/poster5.jpg',
  },
  {
    author: 'nietzsche_is_the_name',
    profileImg: 'img/profile/nietzsche.jpg',
    location: 'Röcken, Germany',
    description: 'Gott ist tot.',
    poster: 'img/poster/poster6.jpg',
  },
  {
    author: 'sokrates_so_be_it',
    profileImg: 'img/profile/sokrates.jpg',
    location: 'Athen, Greece',
    description: 'Das einzig wahre Wissen ist, dass man nichts weiß.',
    poster: 'img/poster/poster7.jpg',
  },
  {
    author: 'descartes',
    profileImg: 'img/profile/descartes.jpg',
    location: 'La Haye en Touraine, France',
    description: 'Ich denke, also bin ich.',
    poster: 'img/poster/poster8.jpg',
  },
  {
    author: 'albert_camus',
    profileImg: 'img/profile/camus.jpg',
    location: 'Mondovi, Algeria',
    description:
      'Manchmal ist schon allein weiterzumachen, einfach weiterzumachen, eine übermenschliche Leistung.',
    poster: 'img/poster/poster9.jpg',
  },
  {
    author: 'jp_sartre',
    profileImg: 'img/profile/sartre.jpg',
    location: 'Paris, France',
    description:
      'Um den wahren Wert des Lebens zu begreifen, müssen wir es ab und zu riskieren.',
    poster: 'img/poster/poster10.jpg',
  },
];

let stories = [
  {
    author: 'Rousseau',
    profileImg: 'img/profile/rousseau.jpg',
    location: 'Geneva, Switzerland',
    description: 'Der Mensch ist frei geboren, und überall liegt er in Ketten.',
  },
  {
    author: 'Confucius',
    profileImg: 'img/profile/confucius.jpg',
    location: 'Qufu, China',
    description:
      'Unser größter Ruhm ist nicht, niemals zu fallen, sondern jedes Mal aufzustehen, wenn wir fallen.',
  },
  {
    author: 'Hannah Arendt',
    profileImg: 'img/profile/arendt.jpg',
    location: 'Linden, Germany',
    description:
      'Die Freiheit ist die Fähigkeit, zu sagen, was gesagt werden sollte.',
  },
  {
    author: 'Thales',
    profileImg: 'img/profile/thales.jpg',
    location: 'Miletus, Greece',
    description: 'Alles ist voller Götter.',
  },
  {
    author: 'John Locke',
    profileImg: 'img/profile/locke.png',
    location: 'Wrington, England',
    description: 'Die Vernunft ist der Schlüssel zur Freiheit.',
  },
  {
    author: 'Hume',
    profileImg: 'img/profile/hume.webp',
    location: 'Edinburgh, Scotland',
    description: 'Die Vernunft ist ein Sklave der Leidenschaften.',
  },
];

let suggestions = [
  {
    author: 'Spinoza',
    profileImg: 'img/profile/spinoza.webp',
    location: 'Amsterdam, Netherlands',
    description:
      'Freiheit besteht nicht darin, seine Wünsche zu befriedigen, sondern in der Fähigkeit, seine Begierden zu kontrollieren.',
  },
  {
    author: 'Epicurus',
    profileImg: 'img/profile/epikur.jpg',
    location: 'Samos, Greece',
    description:
      'Gesundheit ist das höchste Gut, die Zufriedenheit das größte Vermögen.',
  },
  {
    author: 'Voltaire',
    profileImg: 'img/profile/voltaire.jpg',
    location: 'Paris, France',
    description:
      'Ich mag verdammen, was du sagst, aber ich werde mein Leben dafür einsetzen, dass du es sagen darfst.',
  },
  {
    author: 'Kierkegaard',
    profileImg: 'img/profile/kierkegaard.jpg',
    location: 'Copenhagen, Denmark',
    description:
      'Das Leben kann nur rückwärts verstanden, aber nur vorwärts gelebt werden.',
    poster: '',
  },
];

let users = [];

const pinboard = document.getElementById('pinboard');

const storyCont = document.getElementById('stories-cont');
storyCont.innerHTML = generateStoryHTML();

const suggestedCont = document.getElementById('suggested-cont');
suggestedCont.innerHTML = generateSuggestionsHTML();

function renderPage() {
  renderPinboard();
}

function renderPinboard() {
  pinboard.innerHTML = '';

  for (let i = 0; i < cards.length; i++) {
    const cardElement = cards[i];

    pinboard.innerHTML += renderCard(cardElement);
  }
}

function renderCard(cardElement) {
  return /*html*/ `
    <div class="card" id="card">
          <div class="card-header">
            <div class="card-header--author">
              <img
                class="card-header-author--img"
                src="${cardElement['profileImg']}" />
              <p class="author">${cardElement['author']}</p>
            </div>
            <a class="card-header__svg" href="#">
              <img src="img/icons/extend.svg"/> 
            </a>
            
          </div>

          <div class="card-poster">
            <img src="${cardElement['poster']}"/>
          </div>

          <div class="social-actions">
            <div class="icons-inline">
              <a href="#"><img src="img/icons/heart.svg" alt="" /></a>
              <a href="#"><img src="img/icons/comment.svg" alt="" /></a>
              <a href="#"><img src="img/icons/share.svg" alt="" /></a>
            </div>
            <div class="bookmark">
              <a href="#"><img src="img/icons/bookmark.svg" alt="" /></a>
            </div>
          </div>

          <div class="comment-section">
            <p class="like-counter">1234 likes</p>

            <div class="author-commentary">
              <p>
                <span class="author-commentary--author">${cardElement['author']}</span>
                <span class="author-commentary--comment">${cardElement['description']}</span>
              </p>
            </div>

            <p class="all-comments greyed">View all 52 comments</p>
            <div class="user-commentary">
              <div class="user-commentary--user">silentbob</div>
              <div class="user-commentary--comment">Fair enough!</div>
            </div>

            <div class="like-btn">
              <svg onclick="toggleHeart()" viewBox="0 0 256 256">
                <path
                  fill="#6a6a6a"
                  d="M178 34c-21 0-39.26 9.47-50 25.34C117.26 43.47 99 34 78 34a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60Zm-50 175.11C111.59 199.64 30 149.72 30 94a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 56.83 157.72 46 178 46a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11Z" />
              </svg>
            </div>
          </div>
        </div>
  `;
}

function generateStoryHTML() {
  let storyHTML = '';

  for (let i = 0; i < stories.length; i++) {
    const storyElement = stories[i];

    storyHTML += /*html*/ `
      <div class="story">
        <img src="${storyElement['profileImg']}" alt="" class="story-profile__img" />
        <div class="suggested-user">
          <div class="username-and-update">
            <p class="user">${storyElement['author']}</p>
            <p class="update greyed">2 HOURS AGO</p>
          </div>
        </div>
      </div>
    `;
  }

  return storyHTML;
}

function generateSuggestionsHTML() {
  let suggestionsHTML = '';

  for (let i = 0; i < suggestions.length; i++) {
    const suggestElement = suggestions[i];
    suggestionsHTML += /*html*/ `
      <div class="suggested">
        <div class="user-info-box">
          <img src="${suggestElement['profileImg']}" alt="" class="suggested-profile__img" />
          <p class="user">${suggestElement['author']}</p>
        </div>
        <a href="#" class="follow-btn">Follow</a>
      </div>
    `;
  }

  return suggestionsHTML;
}
