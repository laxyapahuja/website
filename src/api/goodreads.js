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
    let favList = gdrdsFavHTML.querySelectorAll('.bookList > li')
    let readingList = gdrdsHTML.querySelectorAll('.bookList > li')
    for (let i = 0; i < favList.length; i++) {
        let favObject = {
            title: '',
            link: ''
        }
        favObject.link = `https://goodreads.com${favList[i].querySelector('a').getAttribute('href')}`
        favObject.title = favList[i].querySelector('.bookTitle > a').innerText + ' by ' + favList[i].querySelector('.bookAuthor > div').innerText
        returnObject.favorites.push(favObject)
    }
    returnObject.recent.link = `https://goodreads.com${readingList[0].querySelector('a').getAttribute('href')}`
    returnObject.recent.title = readingList[0].querySelector('.bookTitle > a').innerText + ' by ' + gdrdsHTML.querySelector('.bookAuthor > div').innerText
    console.log(returnObject)
    return returnObject
}

export default getFavoritesAndCurrentBooks;