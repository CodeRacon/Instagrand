let cards = [
  {
    author: 'Wittgenstein',
    profileImg: 'img/profile/wittgenstein.jpeg',
    location: 'Vienna, Austria',
    description: 'Worüber man nicht sprechen kann, darüber muss man schweigen.',
    poster: 'img/poster/poster1.jpg',
  },
  {
    author: 'Hegel',
    profileImg: 'img/profile/hegel.jpeg',
    location: 'Ingolstadt, Germany',
    description: 'Die Vernunft ist das höchste Gut des Menschen.',
    poster: 'img/poster/poster2.jpg',
  },
  {
    author: 'Platon',
    profileImg: 'img/profile/platon.jpeg',
    location: 'Athen, Greece',
    description: 'Die Ideen sind die wahren Realitäten.',
    poster: 'img/poster/poster3.jpg',
  },
  {
    author: 'Kant',
    profileImg: 'img/profile/kant.jpg',
    location: 'Königsberg, Prussia',
    description:
      'Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde.',
    poster: 'img/poster/poster4.jpg',
  },
  {
    author: 'Aristoteles',
    profileImg: 'img/profile/aristoteles.jpeg',
    location: 'Stagira, Greece',
    description: 'Die Tugend liegt in der Mitte.',
    poster: 'img/poster/poster5.jpg',
  },
  {
    author: 'Nietzsche',
    profileImg: 'img/profile/nietzsche.jpeg',
    location: 'Röcken, Germany',
    description: 'Gott ist tot.',
    poster: 'img/poster/poster6.jpg',
  },
  {
    author: 'Sokrates',
    profileImg: 'img/profile/sokrates.jpeg',
    location: 'Athen, Greece',
    description: 'Das einzig wahre Wissen ist, dass man nichts weiß.',
    poster: 'img/poster/poster7.jpg',
  },
  {
    author: 'Descartes',
    profileImg: 'img/profile/descartes.gif',
    location: 'La Haye en Touraine, France',
    description: 'Ich denke, also bin ich.',
    poster: 'img/poster/poster8.jpg',
  },
  {
    author: 'Camus',
    profileImg: 'img/profile/camus.jpeg',
    location: 'Mondovi, Algeria',
    description:
      'Manchmal ist es eine übermenschliche Leistung, weiterzumachen, einfach weiterzumachen.',
    poster: 'img/poster/poster9.jpg',
  },
  {
    author: 'Sartre',
    profileImg: 'img/profile/sartre.jpeg',
    location: 'Paris, France',
    description: 'Die Hölle, das sind die anderen.',
    poster: 'img/poster/poster10.jpg',
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
    profileImg: 'img/profile/epikur.jpeg',
    location: 'Samos, Greece',
    description:
      'Gesundheit ist das höchste Gut, die Zufriedenheit das größte Vermögen.',
  },
  {
    author: 'Voltaire',
    profileImg: 'img/profile/voltaire.jpeg',
    location: 'Paris, France',
    description:
      'Ich mag verdammen, was du sagst, aber ich werde mein Leben dafür einsetzen, dass du es sagen darfst.',
  },
  {
    author: 'Kierkegaard',
    profileImg: 'img/profile/kierkegaard.jpeg',
    location: 'Copenhagen, Denmark',
    description:
      'Das Leben kann nur rückwärts verstanden, aber nur vorwärts gelebt werden.',
    poster: '',
  },
];

let stories = [
  {
    author: 'Rousseau',
    profileImg: 'img/profile/rousseau.jpeg',
    location: 'Geneva, Switzerland',
    description: 'Der Mensch ist frei geboren, und überall liegt er in Ketten.',
  },
  {
    author: 'Confucius',
    profileImg: 'img/profile/confucius.jpeg',
    location: 'Qufu, China',
    description:
      'Unser größter Ruhm ist nicht, niemals zu fallen, sondern jedes Mal aufzustehen, wenn wir fallen.',
  },
  {
    author: 'Hannah Arendt',
    profileImg: 'img/profile/arendt.webp',
    location: 'Linden, Germany',
    description:
      'Die Freiheit ist die Fähigkeit, zu sagen, was gesagt werden sollte.',
  },
  {
    author: 'Thales',
    profileImg: 'img/profile/thales.jpeg',
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

const pinboard = document.getElementById('pinboard');

function render() {
  for (let i = 0; i < cards.length; i++) {
    const cardElement = cards[i];

    pinboard.innerHTML = '';
    pinboard.innerHTML += renderCard();
  }
}

function renderCard() {
  return /*html*/ `
    <div class="card" id="card">
          <div class="card-header">
            <div class="card-header--author">
              
              <p class="author">Wittgenstein</p>
            
            <a class="card-header__svg" href="#"
              ><img src="img/icons/extend.svg" alt="more actions"
            /></a>
          </div>
          <div class="card-poster" id="card-sprint">
            <img src="img/poster/poster1.jpg" alt="post img" />
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
              <div class="author-commentary--author"><p>Wittgenstein</p></div>
              <div class="author-commentary--comment">
                <p>
                  Worüber man nicht sprechen kann, darüber muss man schweigen.
                </p>
              </div>
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
