/**
 * Fetch response interceptor example
 */

/*
Notes:
- In production, this should be be minified to lower the impact on page load time
- We may even want to obfuscate this in order to protect our IP here
*/

// Save the original fetch function
window.originalFetch = window.fetch;

// Override the fetch function and intercept the response from the request
window.fetch = async (...arguments) => {
  /*
  Notes:
  - At this point, we could also access the request data via "arguments"
  - This could be useful in order to help determine the user's action
  */

  // Pass this over to the original fetch function so we don't 
  // trigger an error ("RangeError: Maximum call stack size exceeded")
  let response = await window.originalFetch(...arguments);

  // Clone the response so that the original fetch call below will not
  // be affected by an error ("TypeError: Failed to execute 'json' on 'Response': body stream already read")
  let responseJson = await response.clone().json();
  console.log('Intercepted response', responseJson);

  /*
  Notes:
  - At this point, we could use the JSON data in "responseJson" to get what we need
  - The client website would have to trust that we aren't altering their response data
  - One of the many reasons that code review and technical oversight is required here
  */

  // Return the original response so that the original fetch call
  // will complete without any issues
  return response;
};
