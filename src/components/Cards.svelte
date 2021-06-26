<script>
    import cardsArray from '../api/compiled';
    let cards = cardsArray();
    cards.then(cards => {
        const card = document.getElementsByClassName('cards')[0]
        const cardText = document.querySelector('.cards > h3')
        const cardLink = document.getElementsByClassName('cardlink')
        let i = 1;
        let cardColorsTransparent = [['rgba(255, 122, 122, 0.4)', '#FFFFFF'], ['rgba(193, 245, 154, 0.4)', '#304A1C'], ['rgba(213, 161, 247, 0.4)', '#743E97'], ['rgba(249, 128, 162, 0.4)', '#FFFFFF']]
        let cardColors = [['rgba(255, 122, 122)', '#FFFFFF'], ['rgba(193, 245, 154)', '#304A1C'], ['rgba(213, 161, 247)', '#743E97'], ['rgba(249, 128, 162)', '#FFFFFF']]
        cardText.innerHTML = cards[0]
        function cycle() {
            setTimeout(() => {
                console.log(i)
                cardText.innerHTML = cards[i]
                card.style.backgroundColor = cardColors[i][0]
                cardText.style.color = cardColors[i][1]
                Array.prototype.slice.call(cardLink).forEach((element) => {
                    element.style.color = cardColors[i][1]
                })
                i++;
                if (i == 4) {
                    i = 0
                    cycle();
                } else {
                    cycle();
                }
            }, 3000)
        }
        cycle();
        document.getElementById('start-button').addEventListener('click', () => {
            cardColors = cardColorsTransparent
        })
    })
</script>

<div class=cards>
    <style>
    .cardlink {
        text-decoration: none;
        font-style: italic;
        color: white;
        font-weight: 600;
    }
    </style>
    <h3>Fetching data from my <a class="cardlink" href="https://github.com/laxyapahuja">GitHub</a>, <a class="cardlink" href="https://www.goodreads.com/user/show/15850881-laxya-pahuja">Goodreads</a> & <a class="cardlink" href="https://letterboxd.com/laxyapahuja">Letterboxd</a> accounts dynamically. Please wait...</h3>
</div>

<style>
    .cards {
        width: 100%;
        height: 32vh;
        flex: 1;
        border-radius: 16px;
        margin-left: 0.5vw;
        background-color: #FF7A7A;
    }
    .cards h3 {
        font-size: 24px;
        padding: 24px;
        color: white;
        font-weight: 400;
    }
</style>