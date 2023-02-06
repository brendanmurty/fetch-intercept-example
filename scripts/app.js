/* Example client website JavaScript */

const urlUnreadBookmarks = 'http://localhost:8888/api/unread';
const elementContent = document.getElementById('content');

/*
Get a list of the unread bookmarks from the API, construct a HTML list of these, 
then override the contents of "elementContent" with this list.
*/
const fetchOne = fetch(urlUnreadBookmarks)
  .then((response) => response.json())
  .then((json) => {
    console.log('JSON response', json);

    // Create a list element of the bookmarks from the response
    var elementList = document.createElement('ul');
    json.forEach(bookmark => {
      var elementItem = document.createElement('li');

      elementItem.innerHTML = `<a href="${ bookmark.href }">${ bookmark.description }</a>`;

      elementList.append(elementItem);
    });

    // Override the contents of "elementContent" with this list of bookmarks
    elementContent.innerHTML = '';
    elementContent.append(elementList);
  });