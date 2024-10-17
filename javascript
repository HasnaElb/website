// Basic JavaScript for handling search functionality

document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const keyword = document.getElementById('search-keyword').value;
  if (keyword) {
    // Here, you would typically call an API or filter through job listings
    console.log(`Searching for jobs with keyword: ${keyword}`);
  } else {
    alert('Please enter a search keyword');
  }
});