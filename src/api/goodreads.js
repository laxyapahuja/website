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
    let favorite = gdrdsFavHTML.querySelectorAll('meta')[0]
    console.log(favorite)
    let favList = favorite.getAttribute('content').split(': ')[1].split(' and ')
    let reading = gdrdsHTML.querySelectorAll('meta')[0]
    for (let i = 0; i < favList.length; i++) {
        let favObject = {
            title: '',
            link: ''
        }
        favObject.link = ``
        favObject.title = favList[i]
        returnObject.favorites.push(favObject)
    }
    returnObject.recent.link = ``
    returnObject.recent.title = reading.getAttribute('content').split('reading ')[1].split(',')[0]
    console.log(returnObject)
    return returnObject
}

export default getFavoritesAndCurrentBooks;