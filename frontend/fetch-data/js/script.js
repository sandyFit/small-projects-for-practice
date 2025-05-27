const searchInput = document.querySelector('#search');
const cardsContainer = document.querySelector('.cards__container');
const counter = document.querySelector('.counter');

// Fetch and render users
function fetchAndRenderUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            renderUsers(users);
            setupSearch(users);
        });
}

// Render user cards
function renderUsers(users) {
    cardsContainer.innerHTML = '';

    users.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3 class="user__name">${user.name}</h3>
            <img src="/user.png" alt="avatar"  width='150px'>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street} ${user.address.suite}</p>
        `;

        cardsContainer.appendChild(card);
    });

    countRecipes(users.length);
}

// Update recipe/user counter
function countRecipes(count) {
    counter.textContent = `${count} Users`;
    counter.style.display = count > 0 ? 'inline-block' : 'none';
}

// Setup search filter
function setupSearch(users) {
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(filter)
        );
        renderUsers(filtered);
    });
}

// Initialize
fetchAndRenderUsers();
