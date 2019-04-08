/*******************************************
  Basic Loop - Uses input from array to do
  more work than Simple Loop in index.js
*******************************************/
(function () {
  'use strict';

  // Require syntax (natively supported by Node),
  //  instead of ES6 imports (not natively supported by Node... yet)
  // Use ".." syntax to go up a directory to get to the parent dir of /basic01,
  //  the ".js" extention is assumed and not required, but you can add if you want
  const shared = require('../shared');

  /*******************************************
    Create For Loop Function
  *******************************************/
  function performLoop() {
    // get data from shared function "createData" defined in the createData.js file
    const data = shared.createData();
    let output = '';

    for (let i = 0; i < data.length; i++) {
      // use a conditional to output the number with the string but only when the text is "three"
      if (data[i] === 'three') {
        output += "3 - "
      }
      // pre-pend output to the new string in array
      //  then append an encoded carriage return (\r) and new line (\n)
      output += data[i] + '\r\n';
    }

    // when the loop is done, we will have an extra \r\n, so remove the last extra chars
    output = output.substring(0, output.length - 2);

    // this allows the function to return the new string to the calling code
    return output;
  }


  /*******************************************
    Execute code to console
  *******************************************/

  console.log('*'.repeat(shared.BORDER_REPEAT));
  console.log('Start Basic Loop 01');

  console.log(performLoop());

  console.log('*'.repeat(shared.BORDER_REPEAT));
})();
