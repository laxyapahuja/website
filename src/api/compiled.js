import getFavoritesAndRecentMovie from '../api/letterboxd';
import getFavoritesAndCurrentBooks from '../api/goodreads';
import getStarsAndRepositories from '../api/github';

const cardsArray = async() => {
    let returnArray = []
    let movieCardText = 'I enjoy watching movies a lot. My favorite movies are'
    let movieList = await getFavoritesAndRecentMovie()
    for (let i = 0; i < movieList.favorites.length; i++) {
        if (i == (movieList.favorites.length - 1)) {
            movieCardText += ` and <a class="cardlink" target="_blank" href="${movieList.favorites[i].link}"><i>${movieList.favorites[i].title}</i>.</a> `
        } else {
            movieCardText += ` <a class="cardlink" target="_blank" href="${movieList.favorites[i].link}"><i>${movieList.favorites[i].title}</i>,</a>`
        }
    }
    if (movieList.recent.rewatched) {
        movieCardText += 'I recently rewatched '
    } else {
        movieCardText += 'I recently watched '
    }
    movieCardText += `<a class="cardlink" target="_blank" href="${movieList.recent.link}"><i>${movieList.recent.title}</i></a> and rated it <b>${String(movieList.recent.rating)}/5 stars</b>. `
    returnArray.push(movieCardText)
    let bookCardText = 'I’ve also started reading. My favorite books are '
    let bookList = []
    if (window.innerWidth < 1000) {
        bookList = await getFavoritesAndCurrentBooksMobile();
    } else {
        bookList = await getFavoritesAndCurrentBooks();
    }
    for (let i = 0; i < bookList.favorites.length; i++) {
        if (i == (bookList.favorites.length - 1)) {
            bookCardText += ` and <a class="cardlink" target="_blank" href="${bookList.favorites[i].link}"><i>${bookList.favorites[i].title}</i>.</a>`
        } else {
            bookCardText += `<a class="cardlink" target="_blank" href="${bookList.favorites[i].link}"><i>${bookList.favorites[i].title}</i></a>`
        }
    }
    returnArray.push(bookCardText)
    let bookCard2Text = 'I’m currently reading '
    bookCard2Text += `<a class="cardlink" target="_blank" href="${bookList.recent.link}"><i>${bookList.recent.title}</i></a>.`
    returnArray.push(bookCard2Text)
    let githubObject = await getStarsAndRepositories()
    let githubText = `I’m very active on GitHub! I have over ${githubObject.repos} repositories public and ${githubObject.stars} stars.`
    returnArray.push(githubText)
    return returnArray
}

export default cardsArray;