<script>
    import getTopTracks from '../api/spotify'
    window.onload = () => {
        let spotifyCenter = document.getElementsByClassName('spotify-center')[0]
        getTopTracks().then(spotifyResponse => {
            console.log(spotifyResponse)
            document.getElementById('start-button').addEventListener('click', () => {
                let trackIndex = 0
                const playerInflator = (index) => {
                    return `<div class="player">
                    <div class="player-div">
                        <svg id="previous-track-button" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 11.333L18.223 4.518C18.2983 4.46789 18.3858 4.43915 18.4761 4.43483C18.5664 4.43051 18.6563 4.45077 18.736 4.49346C18.8157 4.53615 18.8824 4.59966 18.9289 4.67724C18.9754 4.75482 19 4.84356 19 4.934L19 19.066C19 19.1564 18.9754 19.2452 18.9289 19.3228C18.8824 19.4003 18.8157 19.4639 18.736 19.5065C18.6563 19.5492 18.5664 19.5695 18.4761 19.5652C18.3858 19.5608 18.2983 19.5321 18.223 19.482L8 12.667L8 19C8 19.2652 7.89464 19.5196 7.70711 19.7071C7.51957 19.8946 7.26522 20 7 20C6.73478 20 6.48043 19.8946 6.29289 19.7071C6.10536 19.5196 6 19.2652 6 19L6 5C6 4.73478 6.10536 4.48043 6.29289 4.29289C6.48043 4.10536 6.73478 4 7 4C7.26522 4 7.51957 4.10536 7.70711 4.29289C7.89465 4.48043 8 4.73478 8 5L8 11.333Z" fill="white"/>
                            </svg>                    
                    </div>
                    <div class="player-div">
                        <a target="_blank" href="${spotifyResponse[index].external_urls.spotify}"><img class="album-art" src="${spotifyResponse[index].album.images[0].url}" alt="Album Art"></a>
                    </div>
                    <div class="player-div">
                        <svg id="next-track-button" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 8.667L0.777 15.482C0.701705 15.5321 0.61423 15.5608 0.523891 15.5652C0.433553 15.5695 0.343733 15.5492 0.263999 15.5065C0.184266 15.4639 0.117604 15.4003 0.0711141 15.3228C0.024624 15.2452 4.67204e-05 15.1564 0 15.066V0.934C4.67204e-05 0.843558 0.024624 0.754822 0.0711141 0.677243C0.117604 0.599664 0.184266 0.536148 0.263999 0.493459C0.343733 0.45077 0.433553 0.430508 0.523891 0.434829C0.61423 0.439151 0.701705 0.467895 0.777 0.518L11 7.333V1C11 0.734784 11.1054 0.48043 11.2929 0.292893C11.4804 0.105357 11.7348 0 12 0C12.2652 0 12.5196 0.105357 12.7071 0.292893C12.8946 0.48043 13 0.734784 13 1V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V8.667Z" fill="white"/>
                        </svg>                    
                    </div>
                </div>
                <h3 class="song-name">${spotifyResponse[index].name}</h3>
                <h3 class="artist-name">${spotifyResponse[index].artists[0].name}</h3> 
                <style>
                    .album-art {
                    width: 10vh;
                    border-radius: 1vh;
                    }
                    .player-div {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        flex: 1;
                    }
                    .player {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        width: 100%;
                    }
                    .song-name {
                        color: white;
                        font-weight: 600;
                        padding-top: 2vh;
                        text-align: center;
                    }
                    .artist-name {
                        color: white;
                        font-weight: 400;
                        text-align: center;
                    }
                    #next-track-button {
                        cursor: pointer;
                    }
                    #previous-track-button {
                        cursor: pointer;
                    }
                </style>`
                }
                document.getElementsByClassName('spotify')[0].style.background = `rgba(255, 255, 255, 0.21)`
                document.getElementsByClassName('spotify')[0].style.backdropFilter = `blur(120px)`
                document.getElementsByTagName('body')[0].style.background = `radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.08) 100%), rgba(0, 0, 0, 0.25)`
                document.getElementsByTagName('body')[0].style.backdropFilter = `blur(140px)`
                document.getElementsByTagName('body')[0].style.backgroundImage = `url(${spotifyResponse[0].album.images[0].url})`
                document.getElementsByClassName('name')[0].style.color = 'white'
                document.getElementsByClassName('tagline')[0].style.color = 'white'
                document.getElementsByClassName('about')[0].style.color = 'white'
                document.getElementsByClassName('spotify-head-text')[0].style.color = 'white'
                document.getElementsByClassName('ri-spotify-fill')[0].style.color = 'white'
                document.getElementsByClassName('spotify-footer')[0].innerHTML = ''
                console.log(trackIndex)
                spotifyCenter.innerHTML = playerInflator(trackIndex)
                const trackChange = (index) => {
                    document.getElementsByTagName('body')[0].style.backgroundImage = `url(${spotifyResponse[index].album.images[0].url})`
                    document.querySelector('.player-div > a').setAttribute('href', spotifyResponse[index].external_urls.spotify)
                    document.getElementsByClassName('album-art')[0].setAttribute('src', spotifyResponse[index].album.images[0].url)
                    document.getElementsByClassName('song-name')[0].innerText = spotifyResponse[index].name
                    document.getElementsByClassName('artist-name')[0].innerText = spotifyResponse[index].artists[0].name
                }
                const nextTrack = () => {
                    if (trackIndex < 9 && trackIndex >= 0) {
                        trackIndex += 1
                        console.log(trackIndex)
                        trackChange(trackIndex)
                    }
                }
                const previousTrack = () => {
                    if (trackIndex <= 9 && trackIndex > 0) {
                        trackIndex -= 1
                        console.log(trackIndex)
                        trackChange(trackIndex)
                    }
                }
                document.getElementById('previous-track-button').addEventListener('click', () => {
                    previousTrack()
                })
                document.getElementById('next-track-button').addEventListener('click', () => {
                    nextTrack()
                })
            })
        })
    }

</script>

<div class="spotify">
    <div class='spotify-head'>
        <div class="spotify-head-div">
            <h2 class="spotify-head-text">my top 10 tracks</h2>
        </div>                  
        <i class="ri-spotify-fill"></i>
    </div>
    <div class="spotify-center">
        <div class="spotify-center-div">
            <h1>want to check out my top 10 spotify tracks?</h1>
            <svg id="start-button" width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.3346 10.0314L23.3958 2.09272L25.4886 0L37 11.5114L25.4886 23.0229L23.3958 20.9302L31.3346 12.9914H0V10.0314H31.3346Z" fill="#2A3B46"/>
            </svg>
        </div>                          
    </div>
    <div class="spotify-footer">
        <h3 class="spotify-footer-text">fetched directy from <a href="https://open.spotify.com/user/connieraff66">my spotify account</a></h3>
    </div>
</div>

<style>
    .spotify {
        display: flex;
        flex-direction: column;
        flex: 1.3;
        width: 100%;
        height: 16.25vw;
        border-radius: 16px;
        margin-right: 0.5vw;
        background: linear-gradient(180deg, rgba(108, 183, 232, 0.43) -9.26%, #C1F59A 107.79%);
    }
    .spotify:hover {
        background-color: transparent;      
    }
    .spotify-head {
        display: flex;
        flex-direction: row;
        margin: 0 1vw 0 1vw;
        align-items: center;
        height: 4vw;
    }
    .spotify-footer {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 3vw;
        margin: auto;
    }
    .spotify-footer-text {
        color: #45535C;
        font-size: 0.7vw;
        font-weight: 400;
        font-style: italic;
    }
    .spotify-head-div {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
    .spotify-head i {
        margin-left: auto;
        color: #45535C;
        font-size: 2vw;
        padding: 0;
    }
    .spotify-center {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1vw 3vw 1vw 3vw;
        height: 10.25vw;
    }
    .spotify-center svg {
        cursor: pointer;
    }
    .spotify-center-div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .spotify-center h1 {
        color: #2A3B46;
        font-size: 1.5vw;
        font-weight: 600;
        text-align: center;
        margin-bottom: 1vw;
    }
    .spotify-head-text {
        color: #45535C;
        font-size: 0.9vw;
        font-weight: 400;
        margin-left: 1.8vw;
    }
</style>