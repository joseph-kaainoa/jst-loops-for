(function() {
  "use strict";

  const BORDER_REPEAT = 20;
  console.log('*'.repeat(BORDER_REPEAT));
  console.log('Simple for loop example output');

  // creates arbitrary "data"
  function createLoopData(amountOfItems) {
    return new Array("one", "two", "three", "four");
  }

  // The classic for loop
  function useSimpleForLoop() {
    const data = createLoopData();
    let output = "";
    for (let i = 0; i < data.length; i++) {
        output += data[i];
    }
    return output;
  }

  console.log(useSimpleForLoop());
  console.log('*'.repeat(BORDER_REPEAT));

})();
