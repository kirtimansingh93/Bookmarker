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
  
  // Local Storage Test 
      /*
      - Local storage stores strings therefore we mush parse the json into a       string in order to save it and when we need to get it back we can parse    it back to json.
      */
  localStorage.setItem('test', 'Hello World');
  console.log(localStorage.getItem('test'));
  localStorage.removeItem('test');
  console.log(localStorage.getItem('test'));

  
  // Prevent form from submitting
  e.preventDefault();
}