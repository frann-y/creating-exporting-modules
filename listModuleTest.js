var output = []; //made empty array

function numberPush(number) { //pushing numbers to the array
  output.push(number)
};

function printList() { //prints the output of my list
  console.log(output);
}

function sortOutput () { //sorts my list
  output.sort(function(a, b){return a - b});
  return output;
}

function getSorted () { //prints the output of my sorted list
  console.log(sortOutput());
}

module.exports = { // these are allowed to be exported to others
  numberPush: numberPush,
  printList: printList,
  getSorted, //shorthanded version
}

// module.exorts => is writtin in the module
// module.exports => an object
// keyword: === the function to export(name of the function)
// output is not accessible, to test I made an index file, I made
// a printList function to log the output.
// in index, I required the module (i accessed the module and it's exports)
// and tested the function.
// It woked!!
// index is my import page, i m importing this page and calling it's exports
