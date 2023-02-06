/**
 * Fetch response interceptor example
 */

// Save the original fetch function
window.originalFetch = window.fetch;

// Override the fetch function and intercept the response from the request
window.fetch = async (...arguments) => {
  // Pass this over to the original fetch function so we don't 
  // trigger an error ("RangeError: Maximum call stack size exceeded")
  let response = await window.originalFetch(...arguments);

  // Clone the response so that the original fetch call below will not
  // be affected by an error ("TypeError: Failed to execute 'json' on 'Response': body stream already read")
  let responseJson = await response.clone().json();
  console.log('Intercepted response', responseJson);

  /*
  Notes:
  - At this point, we could use the JSON data in "responseJson" to get what we need and pass this on or store it as needed by our system
  - The client website would have to trust that we aren't altering their response data
  - One of the many reasons that code review and technical oversight is required
  */


  // Return the original response so that the original fetch call will complete
  // without any issues
  return response;
};
