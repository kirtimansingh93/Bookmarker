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
  //Re-fetch Bookmarks
  fetchBookmarks();

  // // check if bookmark already exists'
  // for (var i = 0; i < bookmarks.length; i++) {
  //   if (bookmarks[i].name == siteName) {
  //     alert('Bookmark already exists')
  //     return false
  //   }
  // }
  
  // Prevent form from submitting
  e.preventDefault();
}

// Delete Bookmark
function deleteBookmark(url) {
  // Get Bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  // Loop through bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url === url) {
      // Remove from array
      bookmarks.splice(i, 1)
    }
  } 
  // Reset back to localStorage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  //Re-fetch Bookmarks
  fetchBookmarks();
}

// Fetch Bookmarks
function fetchBookmarks() {
  // Get bookmarks from localStorage and parse into array of objects
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  
  // Get output div id
  var bookmarksResults = document.getElementById('bookmarksResults');

  // Build output
  bookmarksResults.innerHTML = '';
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="well">' + 
                                  '<h3>' + name + 
                                    '<a class="btn btn-primary" target="_blank" href="' + url + '">Visit</a>' + 
                                    '<a onclick="deleteBookmark(\''+url+'\' )" class="btn btn-danger" href="#">Delete</a>'
                                  '</h3>' +
                                  '</div>';
    
  }
}