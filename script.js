// Script for dynamic recommendations based on user preferences

// Function to recommend based on the selected destination type
function recommendDestination(type) {
    const destinationContainer = document.getElementById('destination-container');
    destinationContainer.innerHTML = ''; // Clear previous recommendations
  
    let recommendations = [];
  
    // Recommendations based on the type selected
    if (type === 'beach') {
      recommendations = [
        { name: 'Maldives', description: 'Crystal-clear waters and white sandy beaches.', image: 'images/beach1.jpeg' },
        { name: 'Bali', description: 'Surf, sun, and culture all in one place.', image: 'images/beach2.jpeg' }
      ];
    } else if (type === 'temple') {
      recommendations = [
        { name: 'Angkor Wat', description: 'A majestic spiritual site in Cambodia.', image: 'images/temple1.jpeg' },
        { name: 'Meenakshi Temple', description: 'A vibrant historical landmark in India.', image: 'images/temple2.jpeg' }
      ];
    } else if (type === 'country') {
      recommendations = [
        { name: 'Japan', description: 'A blend of technology and ancient traditions.', image: 'images/country1.jpeg' },
        { name: 'Italy', description: 'Historic cities, Mediterranean coasts, and amazing food.', image: 'images/country2.jpeg' }
      ];
    }
  
    // Display the recommendations
    recommendations.forEach(dest => {
      const destElement = document.createElement('div');
      destElement.classList.add('destination');
  
      destElement.innerHTML = `
        <img src="${dest.image}" alt="${dest.name}">
        <h3>${dest.name}</h3>
        <p>${dest.description}</p>
      `;
  
      destinationContainer.appendChild(destElement);
    });
  }
  
  // Event listeners for recommendation buttons
  document.getElementById('beach-btn').addEventListener('click', () => recommendDestination('beach'));
  document.getElementById('temple-btn').addEventListener('click', () => recommendDestination('temple'));
  document.getElementById('country-btn').addEventListener('click', () => recommendDestination('country'));
  
  // Default recommendation (on page load)
  window.onload = () => recommendDestination('beach');
  
