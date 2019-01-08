// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark)

// Save Bookmark
function saveBookmark(e) {
  // Get  from values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;
  
  // Create object to store into local storage as an array of objects.
  var bookmark = {
    name: siteName, 
    url: siteUrl
  }
  
  console.log(bookmark);
  
  // Prevent form from submitting
  e.preventDefault();
}