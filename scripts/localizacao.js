function initMap() {
  const location = [-21.366760, -48.744412];
  const map = L.map('map').setView(location, 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker(location).addTo(map)
      .bindPopup('Confeitaria da Sandra')
      .openPopup();
}

function getDirections() {
  const url = `https://www.google.com/maps/dir/?api=1&destination=-21.366760,-48.744412`;
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', initMap);
