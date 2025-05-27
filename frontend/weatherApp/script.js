const searchInput = document.querySelector('#searchInput');
const checkBtn = document.querySelector('#checkBtn');
const cardContent = document.querySelector('#cardContent');


checkBtn.addEventListener('click', () => {
    const city = searchInput.value.trim();

    if (!city) return alert("Please enter a city.");

    fetch(`http://localhost:3000/weather?city=${encodeURIComponent(city)}`)
        .then(res => res.json())
        .then(data => {
            cardContent.innerHTML = `
        <h4>${data.location.name}, ${data.location.region}</h4>
        <p>Country: <strong>${data.location.country}</strong></p>
        <p>Temp (C): <strong>${data.current.temp_c}°C</strong></p>
        <p>Temp (F): <strong>${data.current.temp_f}°F</strong></p>
        <p>${data.current.condition.text}</p>
        <img src="https:${data.current.condition.icon}" alt="weather icon">
      `;
        })
        .catch(() => alert("Could not fetch weather data."));
});
