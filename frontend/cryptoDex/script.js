document.addEventListener('DOMContentLoaded', () => {
    const cardBox = document.querySelector('.cards__box');

    function fetchCoinsData() {
        fetch('http://localhost:3000/getData')
            .then(response => response.json())
            .then(coins => {
                console.log('Coins data:', coins);
                renderCards(coins);
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                alert("Could not fetch data from CoinGecko.");
            });
    }

    function renderCards(coins) {
        cardBox.innerHTML = '';

        coins.map(coin => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <div class="signature">
                    <img class="icon" src="${coin.icon}" alt="${coin.name}" />
                    <h3>${coin.name}  ${coin.symbol.toUpperCase()}</h3>
                </div>
                <p><strong>Price:</strong> $${coin.price}</p>
            `;
            cardBox.appendChild(card);
        });
    }

    fetchCoinsData(); // 🔥 call the function here
});
