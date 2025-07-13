const businesses = [
  { name: 'Green Grocery', description: 'Fresh fruits and vegetables.', location: 'Downtown' },
  { name: 'Sunny Cafe', description: 'Local cafe with organic snacks.', location: 'Market Street' },
  { name: 'Book Haven', description: 'Independent bookstore.', location: 'Main Avenue' },
  { name: 'Fitness Hub', description: '24/7 local gym.', location: 'West Side' },
];

const searchInput = document.getElementById('search');
const businessList = document.getElementById('business-list');

function displayBusinesses(filter = '') {
  businessList.innerHTML = '';
  const filtered = businesses.filter(b => b.name.toLowerCase().includes(filter.toLowerCase()));

  filtered.forEach(business => {
    const div = document.createElement('div');
    div.className = 'business-card';
    div.innerHTML = `
      <h2>${business.name}</h2>
      <p>${business.description}</p>
      <p><small>📍 ${business.location}</small></p>
    `;
    businessList.appendChild(div);
  });
}

searchInput.addEventListener('input', (e) => displayBusinesses(e.target.value));

// Initial display
displayBusinesses();
