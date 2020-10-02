// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        const bootstrapArticles = res.data.articles.bootstrap
        const javascriptArticles = res.data.articles.javascript
        const jqueryArticles = res.data.articles.jquery
        const nodeArticles = res.data.articles.node
        const techArticles = res.data.articles.technology

        const cardsContainer = document.querySelector('.cards-container')

        const articlesArr = [bootstrapArticles, javascriptArticles, jqueryArticles, nodeArticles, techArticles]

        articlesArr.forEach(arr => {
            arr.forEach(item => {
                cardsContainer.appendChild(cardMaker(item))
            })
        })
    })
    .catch(err => {
        return `Uh oh, something went wrong! ${err}`
    })

    function cardMaker(object){
        const cardDiv = document.createElement('div')
        cardDiv.classList.add('card')

        const headline = document.createElement('div')
        headline.classList.add('headline')
        headline.textContent = object['headline']

        const authorDiv = document.createElement('div')
        authorDiv.classList.add('author')

        const imgDiv = document.createElement('div')
        imgDiv.classList.add('img-container')

        const img = document.createElement('img')
        img.src = object['authorPhoto']

        const authorName = document.createElement('span')
        authorName.textContent = object['authorName']

        cardDiv.appendChild(headline);
        cardDiv.appendChild(authorDiv);
        authorDiv.appendChild(imgDiv);
        authorDiv.appendChild(authorName);
        imgDiv.appendChild(img);

        cardDiv.addEventListener('click', e => {
            console.log(headline.textContent)
        })
        return cardDiv
    }