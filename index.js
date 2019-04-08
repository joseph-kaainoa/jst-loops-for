(function () {
  'use strict';

  /*******************************************
    Shared code
  *******************************************/
  const BORDER_REPEAT = 20;
  // creates arbitrary "data"
  function createLoopData(amountOfItems) {
    return new Array('one', 'two', 'three', 'four');
  }

  /*******************************************
    Do Simple For Example
  *******************************************/
  console.log('*'.repeat(BORDER_REPEAT));
  console.log('Simple for loop example output');

  // The classic for loop
  function useSimpleForLoop() {
    // usually you already have an array or list that has data in it,
    //  in this we will create data to loop through
    const data = createLoopData();
    let output = '';

    /*
     *   Basic for loop that:
     *     1. Creates the index variable called i and initialized it to 0,
     *         this is why most loops have the letter "i" as the variable name
     *     2. Defines the end of the loop, because our start is 0 and not 1
     *         we use one less than the total items
     *     3. Increment the index by one, specifically use a post-incrementor
     *         (plusses are after the variable,
     *         a pre-incrementor has the plusses before the variable)
     */
    for (let i = 0; i < data.length; i++) {
      output += data[i];
    }

    return output;
  }

  console.log(useSimpleForLoop());
  console.log('*'.repeat(BORDER_REPEAT));

  /*******************************************
    For Loop with check
  *******************************************/

})();
