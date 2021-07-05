const getFavoritesAndCurrentBooks = async() => {
    let returnObject = {
        favorites: [],
        recent: {
            title: '',
            link: '',
        }
    }
    let response = await fetch('https://laxyacors.herokuapp.com/https://www.goodreads.com/user/show/15850881-laxya-pahuja')
    let res = await response.text()
    let responseFav = await fetch('https://laxyacors.herokuapp.com/https://www.goodreads.com/review/list/15850881-laxya-pahuja?shelf=favorites')
    let resFav = await responseFav.text()
    let gdrdsFavHTML = document.createElement('html')
    gdrdsFavHTML.innerHTML = resFav
    let gdrdsHTML = document.createElement('html')
    gdrdsHTML.innerHTML = res
    if (window.outerWidth > 1500) {
        let reading = gdrdsHTML.querySelector('#currentlyReadingReviews > div')
        let favList = gdrdsHTML.querySelectorAll('#featured_shelf > .bigBoxBody > .bigBoxContent > .imgGrid > a')
        for (let i = 0; i < favList.length; i++) {
            let favObject = {
                title: '',
                link: ''
            }
            favObject.link = 'https://goodreads.com' + favList[i].getAttribute('href')
            favObject.title = favList[i].querySelector('img').getAttribute('title')
            returnObject.favorites.push(favObject)
        }
        returnObject.recent.link = 'https://goodreads.com' + reading.querySelector('.firstcol > a').getAttribute('href')
        returnObject.recent.title = reading.querySelector('.firstcol > a').getAttribute('title') + ' by ' + reading.querySelector('.authorName').text
    } else {
        let favList = gdrdsFavHTML.querySelectorAll('.bookList > li')
        for (let i = 0; i < favList.length; i++) {
            let favObject = {
                title: '',
                link: ''
            }
            favObject.link = 'https://goodreads.com' + favList[i].querySelector('.bookTitle > a').getAttribute('href')
            favObject.title = favList[i].querySelector('.bookTitle > a').text + ' by ' + favList[i].querySelector('.bookAuthor > div').innerText
            returnObject.favorites.push(favObject)
        }
        returnObject.recent.link = 'https://goodreads.com' + gdrdsHTML.querySelector('.bookTitle > a').getAttribute('href')
        returnObject.recent.title = gdrdsHTML.querySelector('.bookTitle > a').text + ' by ' + gdrdsHTML.querySelector('.bookAuthor > div').innerText
    }
    return returnObject
}

export default getFavoritesAndCurrentBooks;