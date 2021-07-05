<script>
    import cardsArray from '../api/compiled';
    let cards = cardsArray();
    cards.then(cards => {
        const card = document.getElementsByClassName('cards')[0]
        const cardText = document.querySelector('.cards > div > h3')
        const cardLink = document.getElementsByClassName('cardlink')
        let i = 1;
        let t;
        let cardColorsTransparent = [['rgba(255, 122, 122, 0.4)', '#FFFFFF'], ['rgba(193, 245, 154, 0.4)', '#304A1C'], ['rgba(213, 161, 247, 0.4)', '#743E97'], ['rgba(249, 128, 162, 0.4)', '#FFFFFF']]
        let cardColors = [['rgba(255, 122, 122)', '#FFFFFF'], ['rgba(193, 245, 154)', '#304A1C'], ['rgba(213, 161, 247)', '#743E97'], ['rgba(249, 128, 162)', '#FFFFFF']]
        cardText.innerHTML = cards[0]
        function cycle() {
            t = setTimeout(() => {
                cardText.innerHTML = cards[i]
                card.style.backgroundColor = cardColors[i][0]
                cardText.style.color = cardColors[i][1]
                Array.prototype.slice.call(cardLink).forEach((element) => {
                    element.style.color = cardColors[i][1]
                })
                i++;
                if (i >= 4) {
                    i = 0
                    cycle();
                } else {
                    cycle();
                }
            }, 4000)
        }
        cycle();
        card.addEventListener('mouseover', () => {
            clearTimeout(t)
        })
        card.addEventListener('mouseout', () => {
            cycle()
        })
        document.getElementById('start-button').addEventListener('click', () => {
            cardColors = cardColorsTransparent
        })
    })
</script>

<div class="cards">
    <style>
    .cardlink {
        text-decoration: none;
        color: white;
        font-weight: 600;
    }
    </style>
    <div>
        <h3>Fetching data from my <a class="cardlink" href="https://github.com/laxyapahuja">GitHub</a>, <a class="cardlink" href="https://www.goodreads.com/user/show/15850881-laxya-pahuja">Goodreads</a> & <a class="cardlink" href="https://letterboxd.com/laxyapahuja">Letterboxd</a> accounts dynamically. Please wait...</h3>
    </div>
</div>

<style>
    .cards {
        width: 100%;
        height: 312px;
        flex: 1;
        border-radius: 16px;
        margin-left: 0.5vw;
        background-color: #FF7A7A;
        transition: all 1s;
        overflow: hidden;
    }
    .cards div {
        overflow-y:auto;
        max-height: 32vh;
    }
    .cards h3 {
        font-size: 24px;
        padding: 24px;
        color: white;
        font-weight: 400;
    }
</style>