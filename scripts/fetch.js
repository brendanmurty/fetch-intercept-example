console.log('Starting script...');

const urlUnreadBookmarks = 'http://localhost:8888/api/unread';
const elementContent = document.getElementById('content');

fetchOne = fetch(urlUnreadBookmarks)
  .then((response) => response.json())
  .then((json) => console.log(json));

