const getTopArtists = async() => {
    var details = {
        'grant_type': 'refresh_token',
        'refresh_token': __myapp.env.SPOTIFY_API_REFRESH_TOKEN,
        'client_id': __myapp.env.SPOTIFY_CLIENT_ID,
        'client_secret': __myapp.env.SPOTIFY_CLIENT_SECRET
    };
    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    let response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    })
    let res = await response.json()
    let accessToken = res.access_token

    let responseTracks = await fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    let resTracks = await responseTracks.json()
    console.log(resTracks)
    return resTracks.items
}

export default getTopArtists;