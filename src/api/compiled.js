import getFavoritesAndRecentMovie from '../api/letterboxd';
import getFavoritesAndCurrentBooks from '../api/goodreads';

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
    let bookList = await getFavoritesAndCurrentBooks();
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
    return returnArray
}

export default cardsArray;