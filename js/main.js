// Listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark)

// Save Bookmark
function saveBookmark(e) {
  // Get  from values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;
  console.log(siteName);
  console.log(siteUrl);
  
  

  // Prevent form from submitting
  e.preventDefault();
}