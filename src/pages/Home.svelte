<script>
	import getTopArtists from "../api/spotify";
    import cardsArray from '../api/compiled';
    let cardColors = [['#FF7A7A', '#FFFFFF'], ['#C1F59A', '#304A1C'], ['#D5A1F7', '#304A1C'], ['#FF7A7A', '#FFFFFF']]
    let cards = cardsArray();
	let tracks = getTopArtists();
</script>

<body>
    <div class="home">
        <div class="intro">
            <div class="intro-left">
                <img src="https://github.com/laxyapahuja.png" alt="Laxya Pahuja" class="pfp">
            </div>
            <div class="intro-right">
                <h1 class="name">Laxya Pahuja</h1>
                <h2 class="tagline">developer, filmmaker & motion designer</h2>
                <p class="about">i'm an 18 year-old developer & motion designer from india.
                    <br/>
                    i love to develop solutions to problems prevalent around me. i'm primarily interested in mobile & web development, although I've also built text editor extensions for clients. although i use ts, js and python for my projects, i'm trying my best to expand my skillset to reach new horizons.
                    <br/>
                    <br/>
                    i'm a huge film making enthusiast and have also worked on some films of my own before. initially starting off as an editor and a motion designer, i've now started directing and writing my own films.</p>    
            </div>
        </div>
        <div class="activity">
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
                            <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M31.3346 10.0314L23.3958 2.09272L25.4886 0L37 11.5114L25.4886 23.0229L23.3958 20.9302L31.3346 12.9914H0V10.0314H31.3346Z" fill="#2A3B46"/>
                            </svg>
                        </div>                          
                    </div>
                    <div class="spotify-footer">
                        <h3 class="spotify-footer-text">fetched directy from <a href="https://open.spotify.com/user/connieraff66">my spotify account</a></h3>
                    </div>
                </div>
            <div class=cards>
                {#await cards then card}
                <style>
                    .cardlink {
                        text-decoration: none;
                        color: white;
                        font-style: italic;
                        font-weight: 600;
                    }
                    </style>
                <h3>{@html card[0]}</h3>
                {/await}
            </div>
        </div>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
        <div class="socials">
            <div>
                <a class="footerlink" href="mailto:mail@laxya.co" target="_blank"><i class="ri-mail-fill"></i></a>
                <a class="footerlink" href="https://github.com/laxyapahuja" target="_blank"><i class="ri-github-fill"></i></a>
                <a class="footerlink" href="https://linkedin.com/in/laxyapahuja" target="_blank"><i class="ri-linkedin-fill"></i></a>
                <a class="footerlink" href="https://twitter.com/LaxyaPahuja" target="_blank"><i class="ri-twitter-fill"></i></a>
                <a class="footerlink" href="https://instagram.com/laxyapahuja_" target="_blank"><i class="ri-instagram-fill"></i></a>
                <a class="footerlink" href="https://youtube.com/laxyapahuja" target="_blank"><i class="ri-youtube-fill"></i></a>
                <a class="footerlink" href="https://behance.net/designpr0" target="_blank"><i class="ri-behance-fill"></i></a>
            </div>
        </div>
    </div>
</body>

<style>
    .home {
        padding: 2vw 6vw 2vw 6vw;
        overflow-y:auto;
    }
    .intro {
        display: flex;
        flex-direction: row;
    }
    .intro-left {
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .intro-right {
        display: flex;
        flex-direction: column;
        flex: 2;
    }
	.pfp {
		border-radius: 100px;
		width: 10vw;
		margin-right: 0.5vw;
	}
    .name {
        font-size: 3vw;
        font-weight: 800;
    }
    .tagline {
        font-size: 1.2vw;
        font-weight: 400;
        padding: 0.2vw 0 0.5vw 0;
        color: black;
    }
    .about {
        font-size: 0.9vw;
        font-weight: 400;
        color: black;
        margin-bottom: 3vw;
    }
    .activity {
        display: flex;
        flex-direction: row;
        margin-bottom: 1vw;
    }
    .spotify {
        display: flex;
        flex-direction: column;
        flex: 1.3;
        width: 100%;
        height: 16.25vw;
        border-radius: 16px;
        margin-right: 0.5vw;
        background: linear-gradient(180deg, rgba(108, 183, 232, 0.43) -9.26%, #C1F59A 107.79%);
        transition: background 1s linear;
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
    .cards {
        width: 100%;
        height: 16.25vw;
        background-color: #eaeaea;
        flex: 1;
        border-radius: 16px;
        margin-left: 0.5vw;
        background-color: #FF7A7A;
    }
    .cards h3 {
        font-size: 1.22vw;
        padding: 1.2vw;
        color: white;
        font-weight: 400;
    }
    i {
        font-size: 1.2vw;
        padding: 0 1vw 0 1vw;
        color: #B3B3B3;
    }
    .footerlink {
        text-decoration: none;
    }
    .socials {
        height: 4vw;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2vw 0 2vw 0;
    }
</style>