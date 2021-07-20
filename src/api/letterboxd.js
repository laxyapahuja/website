const getFavoritesAndRecentMovie = async() => {
    let returnObject = {
        favorites: [],
        recent: {
            title: '',
            link: '',
            rating: 0,
            rewatched: false
        }
    }
    let response = await fetch('https://laxyacors.herokuapp.com/https://letterboxd.com/laxyapahuja')
    let res = await response.text()
    let ltbxHTML = document.createElement('html')
    ltbxHTML.innerHTML = res
    let favList = ltbxHTML.querySelectorAll('#favourites > ul > li')
    let recentList = ltbxHTML.querySelectorAll('#recent-activity > ul > li')
    for (let i = 0; i < favList.length; i++) {
        let favObject = {
            title: '',
            link: ''
        }
        favObject.title = favList[i].querySelector('div > img').getAttribute('alt')
        favObject.link = `https://letterboxd.com${favList[i].querySelector('div').getAttribute('data-film-slug')}`
        returnObject.favorites.push(favObject)
    }
    returnObject.recent.title = recentList[0].querySelector('div > img').getAttribute('alt')
    returnObject.recent.link = `https://letterboxd.com${recentList[0].querySelector('div').getAttribute('data-film-slug')}`
    returnObject.recent.rating = parseInt(recentList[0].querySelector('p > span').className.split('rating rated-')[1]) / 2;
    if (recentList[0].querySelector('p').innerHTML.includes('rewatch')) {
        returnObject.recent.rewatched = true
    }
    console.log(returnObject)
    return returnObject
}

export default getFavoritesAndRecentMovie;