var output = []; //made empty array

function numberPush(number) { //pushing numbers to the array
  output.push(number)
};

function printList() { //prints the output of my list
  console.log(output);
}

function sortOutput () { //sorts my list
  output.sort(function(a, b){return a-b});
  return output;
}

function getSorted () {
  console.log(sortOutput());
}

module.exports = {
  numberPush: numberPush,
  getSorted,
}
