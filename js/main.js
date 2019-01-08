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
  
  /*
  // Local Storage Test 
    - Local storage stores strings therefore we mush parse                         the json into a string in order to save it and when we                       need to get it back we can parse it back to json.
    - We want to save the bookmark in local storage but before we do that we       want to see if there is already any bookmark values stored. If there is,     we want to fetch it, add to it and save it again. 
      
      localStorage.setItem('test', 'Hello World');
      console.log(localStorage.getItem('test'));
      localStorage.removeItem('test');
      console.log(localStorage.getItem('test'));
  */

  // Test if bookmark is null
  if (localStorage.getItem('bookmarks') === null) {
    // Initialize empty array
    var bookmarks = [];
    // Add to array
    bookmarks.push(bookmark);
    // Set to localStorage (JSON.stringify stores bookmark as a string formatted    json array - json to string)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else {
    // Get bookmarks from localStorage (JSON.parse will turn a string into json.)
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Add bookmark to array
    bookmarks.push(bookmark);
    // Reset back to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }
  
  // Prevent form from submitting
  e.preventDefault();
}