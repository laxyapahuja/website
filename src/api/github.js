const getStarsAndRepositories = async() => {
    let returnObject = {
        stars: 0,
        repos: 0
    }
    let response = await fetch('https://api.github.com/users/laxyapahuja/repos')
    let res = await response.json()
    returnObject.repos = res.length
    res.forEach((repo) => {
        returnObject.stars += repo.stargazers_count
    })
    return returnObject
}

export default getStarsAndRepositories