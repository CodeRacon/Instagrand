// MAIN FUNCTIONALITIES

function renderPage() {
  const suggestedCont = document.getElementById('suggested-cont');
  suggestedCont.innerHTML = generateSuggestionsHTML();

  const storyCont = document.getElementById('stories-cont');
  storyCont.innerHTML = generateStoryHTML();

  renderPinboard();
}

function renderPinboard() {
  const pinboard = document.getElementById('pinboard');

  pinboard.innerHTML = '';

  for (let i = 0; i < cards.length; i++) {
    cards[i].index = i;
  }

  for (let i = 0; i < cards.length; i++) {
    const cardElement = cards[i];

    pinboard.innerHTML += renderCard(cardElement, i);
    renderUserComment(i);
    renderSocialActions(i);
  }
}

function renderCard(cardElement, i) {
  const commentCount = getCommentCount(i);
  return /*html*/ `
        <div class="card" id="card">
          <div class="card-header">
            <div class="card-header--author">
              <img
                class="card-header-author--img"
                src="${cardElement['profileImg']}" />
              <div class="author-and-location " >
                <p class="author">${cardElement['author']}</p>
                <p class="greyed">${cardElement['location']}</p>
              </div>
            </div>
            <a class="card-header__svg" href="#">
              <img src="img/icons/extend.svg"/> 
            </a>
            
          </div>

          <div class="card-poster">
            <img src="${cardElement['poster']}"/>
          </div>

          <div class="social-actions" id="socialActions-${i}">
            
          <!-- content injected via renderSocialActions() -->
            

          </div>

          <div class="comment-section">
            <p class="like-counter">1234 likes</p>

            <div class="author-commentary">
              <p>
                <span class="author-commentary--author">${cardElement['author']}</span>
                <span class="author-commentary--comment">${cardElement['description']}</span>
              </p>
            </div>

            <div id="comment-count-container${i}"  >
              
            </div>
            <div 
              class="user-commentary"
              id="user-commentary${i}">
                
              <!-- content injected via renderUserComments() -->
           
            </div>                   
          </div>

          <div class="post-container">
            <div class="input-bar">
              <input
                class="comment-input"
                id="comment${i}"
                type="text"
                placeholder="add a comment..."
                autocomplete="off" />
              <button 
                class="post-btn" 
                onclick="postComment(${i})" 
                type="button">Post
              </button>
            </div>                           
          </div>

        </div>
  `;
}

function addComment(i, author, comment) {
  // Hinzufügen des Autors und Kommentars zu den entsprechenden Arrays
  cards[i].commentAuthor.push(author);
  cards[i].comments.push(comment);

  // Speichern der aktualisierten Daten
  save();
}

function postComment(i) {
  const myUserName = 'code.racon';
  const commentInput = document.getElementById(`comment${i}`);
  const commentText = commentInput.value;
  const card = cards[i];
  if (card.commentDisplayStatus === 'limited') {
    card.commentDisplayStatus = 'full';
  }

  if (commentText !== '') {
    cards[i].comments.push(commentText);
    cards[i].commentAuthor.push(myUserName);

    commentInput.value = '';
    save();
    renderPage(); // Seite erneut rendern, um die Kommentare anzuzeigen
    renderUserComment(i);
  }
}

function likePost(i) {
  const card = cards[i];

  // Überprüfen, ob der Post bereits geliked wurde
  if (card.isPostLiked === 'true') {
    // Post wurde bereits geliked: isPostLiked auf 'false' setzen
    card.isPostLiked = 'false';
  } else {
    // Post wurde noch nicht geliked: isPostLiked auf 'true' setzen
    card.isPostLiked = 'true';
  }

  save(); // Speichern der Änderungen
  renderSocialActions(i); // Aktualisiere die Social Actions für diesen Post
}

function bookmark(i) {
  const card = cards[i];

  if (card.isBookmarked === 'true') {
    card.isBookmarked = 'false';
  } else {
    card.isBookmarked = 'true';
  }
  console.log('ge-bookmarked!');
  save();
  renderSocialActions(i);
}

function renderSocialActions(i) {
  const socialActionsContainer = document.getElementById(`socialActions-${i}`);
  socialActionsContainer.innerHTML = ''; // Leeren des Containers

  for (let k = 0; k < cards.length; k++) {
    // Erstelle das Herzsymbol mit dem entsprechenden Pfad basierend auf isPostLiked
    const likeSymbolPath =
      cards[i].isPostLiked === 'true'
        ? 'M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z'
        : 'M178 34c-21 0-39.26 9.47-50 25.34C117.26 43.47 99 34 78 34a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60Zm-50 175.11C111.59 199.64 30 149.72 30 94a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 56.83 157.72 46 178 46a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11Z';

    const bookmarkSymbolPath =
      cards[i].isBookmarked === 'true'
        ? 'M184 32H72a16 16 0 0 0-16 16v176a8 8 0 0 0 12.24 6.78L128 193.43l59.77 37.35A8 8 0 0 0 200 224V48a16 16 0 0 0-16-16Z'
        : 'M184 34H72a14 14 0 0 0-14 14v176a6 6 0 0 0 9.18 5.09l60.81-38l60.83 38A6 6 0 0 0 198 224V48a14 14 0 0 0-14-14Zm2 179.17l-54.83-34.26a6 6 0 0 0-6.36 0L70 213.17V48a2 2 0 0 1 2-2h112a2 2 0 0 1 2 2Z';

    // HTML für das Herzsymbol
    const likeSymbolHTML = /*html*/ `
    <svg 
      onclick="likePost(${i})"
      id="heart-icon-${i}"            
      width="36" 
      height="36" 
      viewBox="0 0 256 256">
      <path 
        fill="#117460" 
        d="${likeSymbolPath}"
      />
    </svg>
    `;

    // Restlichen HTML-Code für die anderen Symbole und das Lesezeichen
    const commentAndShareSymbolHTML = /*html*/ `
    <svg 
      width="36" 
      height="36" 
      viewBox="0 0 24 24">
      <path 
        fill="#117460"  
        d="M5 3h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-4.59l-3.7 3.71c-.18.18-.43.29-.71.29a1 1 0 0 1-1-1v-3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m13 1H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h4v4l4-4h5a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"/>
    </svg>
    <svg 
      width="32"  
      height="32" 
      viewBox="0 0 24 24">
      <path 
        fill="#117460"
        d="m15.7 6.92l-6.89 4.02c.12.33.19.69.19 1.06s-.07.73-.19 1.06l6.89 4.02A2.996 2.996 0 0 1 21 19c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.37.07-.73.19-1.06L8.3 13.92A2.996 2.996 0 0 1 3 12a2.996 2.996 0 0 1 5.3-1.92l6.89-4.02C15.07 5.73 15 5.37 15 5c0-1.66 1.34-3 3-3s3 1.34 3 3a2.996 2.996 0 0 1-5.3 1.92M18 21c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.9 2 2 2M6 14c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.89 2 2 2m12-7c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .9-2 2s.9 2 2 2Z"/>
    </svg>
    `;

    const bookmarkHTML = /*html*/ `
    <svg 
      onclick="bookmark(${i})"
      id="bookmark-icon-${i}"
      width="36" 
      height="36" 
      viewBox="0 0 256 256">
      <path 
        fill="#117460" 
        d="${bookmarkSymbolPath}"/>
    </svg>
    `;

    // Füge das generierte HTML in den Container ein
    socialActionsContainer.innerHTML = /*html*/ `
    <div class="icons-inline">
      ${likeSymbolHTML}
      ${commentAndShareSymbolHTML}
    </div>
    <div class="bookmark">
      ${bookmarkHTML}
    </div>
    `;
  }
}

function likeComment(i, j) {
  const card = cards[i];

  // Überprüfen, ob der Kommentar bereits geliked wurde
  if (card.likeStatus[j]) {
    // Kommentar wurde bereits geliked: likeStatus auf 'false' setzen
    card.likeStatus[j] = false;
  } else {
    // Kommentar wurde noch nicht geliked: likeStatus auf 'true' setzen
    card.likeStatus[j] = true;
  }
  save();
  // Kommentare neu rendern
  renderUserComment(i);
}

function renderUserComment(i) {
  const userComments = document.getElementById(`user-commentary${i}`);
  const commentCount = cards[i].comments.length;
  const commentAuthors = cards[i].commentAuthor;
  const likeStatus = cards[i].likeStatus;
  const commentDisplayStatus = cards[i].commentDisplayStatus;

  const commentContainer = document.getElementById(
    `comment-count-container${i}`
  );

  if (userComments) {
    userComments.innerHTML = ''; // Leeren Sie den Inhalt zuerst

    if (commentCount > 0) {
      const maxComments = commentDisplayStatus === 'limited' ? 3 : commentCount;

      const displayedCommentAuthors = commentAuthors.slice(0, maxComments);
      const displayedComments = cards[i].comments.slice(0, maxComments);

      for (let j = 0; j < maxComments; j++) {
        const heartPath = likeStatus[j]
          ? `M240 94c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 220.66 16 164 16 94a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 40.88 157.35 32 178 32a62.07 62.07 0 0 1 62 62Z`
          : `M178 34c-21 0-39.26 9.47-50 25.34C117.26 43.47 99 34 78 34a60.07 60.07 0 0 0-60 60c0 29.2 18.2 59.59 54.1 90.31a334.68 334.68 0 0 0 53.06 37a6 6 0 0 0 5.68 0a334.68 334.68 0 0 0 53.06-37C219.8 153.59 238 123.2 238 94a60.07 60.07 0 0 0-60-60Zm-50 175.11C111.59 199.64 30 149.72 30 94a48.05 48.05 0 0 1 48-48c20.28 0 37.31 10.83 44.45 28.27a6 6 0 0 0 11.1 0C140.69 56.83 157.72 46 178 46a48.05 48.05 0 0 1 48 48c0 55.72-81.59 105.64-98 115.11Z`;

        userComments.innerHTML += /*html*/ `
          <div class="user-comment-container">
            <div class="user-comment" >
              <p>
                <span class="user-commentary--user">${
                  displayedCommentAuthors[j] || ''
                }&nbsp;</span> 
                <span class="user-commentary--comment">${
                  displayedComments[j] || ''
                }</span>
              </p>
            </div>
            <div class="like-btn" onclick="likeComment(${i}, ${j})">
              <svg  viewBox="0 0 256 256">
                <path
                  fill="#117460"
                  d="${heartPath}"
                />
              </svg>
            </div>   
          </div>
        `;
      }

      if (commentCount >= 4) {
        commentContainer.classList.remove('d-none');
        commentContainer.innerHTML = /*html*/ `
          <span class="all-comments greyed" onclick="toggleAllComments(${i})">
            ${
              commentDisplayStatus === 'limited'
                ? `Show all ${commentCount} comments`
                : 'Show less'
            }
          </span>
        `;
      } else {
        commentContainer.classList.add('d-none');
      }
    } else {
      commentContainer.classList.add('d-none');
    }
  } else {
    commentContainer.classList.add('d-none');
  }
}

function toggleAllComments(i) {
  const card = cards[i];
  if (card.commentDisplayStatus === 'limited') {
    card.commentDisplayStatus = 'full';
  } else {
    card.commentDisplayStatus = 'limited';
  }
  renderUserComment(i);
}

function getCommentCount(i) {
  return cards[i].comments.length;
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
            <p class="update greyed">some time ago</p>
          </div>
        </div>
      </div>
    `;
  }

  return storyHTML;
}

function generateSuggestionsHTML() {
  const suggestionHeaderSpan = document.getElementById('suggestionHeaderSpan');
  const isMinimumSuggestions = suggestions.length <= 2;

  if (window.innerWidth <= 951) {
    suggestionHeaderSpan.innerHTML = isMinimumSuggestions
      ? 'show all'
      : 'show all';
  } else {
    suggestionHeaderSpan.innerHTML = isMinimumSuggestions ? '' : 'show all';
  }

  let suggestionsHTML = '';

  if (suggestions.length === 0) {
    // Wenn das suggestions-Array leer ist, zeige eine Nachricht
    suggestionsHTML = /*html*/ `
      <div class="suggested">
        <p class="notice">No more suggestions yet</p>
      </div>
    `;
  } else {
    // Andernfalls generiere den normalen HTML-Inhalt
    for (let i = 0; i < suggestions.length; i++) {
      const suggestElement = suggestions[i];
      suggestionsHTML += /*html*/ `
        <div class="suggested">
          <div class="user-info-box">
            <img src="${suggestElement['profileImg']}" alt="" class="suggested-profile__img" />
            <p class="user">${suggestElement['author']}</p>
          </div>
          <p onclick="followUser(${i})" class="follow-btn">Follow</p>
        </div>
      `;
    }
  }

  // Fügen Sie diesen Event-Listener hinzu, um die Änderungen im suggestions-Array zu überwachen
  document.addEventListener('DOMContentLoaded', function () {
    // Hier überprüfen, ob das suggestions-Array leer ist und entsprechend reagieren
    if (suggestions.length === 0) {
      const suggestedCont = document.getElementById('suggested-cont');
      suggestedCont.innerHTML = generateSuggestionsHTML();
    }
  });
  return suggestionsHTML;
}

function followUser(i) {
  const followedUser = suggestions[i];

  const isAlreadyFollowed = stories.some(
    (story) => story.author === followedUser.author
  );

  if (!isAlreadyFollowed) {
    stories.push(followedUser);
    suggestions.splice(i, 1);
    save();
    renderPage();
  }
}
