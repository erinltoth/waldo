// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // for(var i = 0; i < arr.length; i++){
  //   var name = arr[i];
  //   if(name === 'Waldo'){
  //     found(name, i);
  //   }
  // }
  arr.forEach(function(searchName, i) {
    if (searchName === "Waldo") {
      found(searchName, i);   // execute callback
    }
  });
}
  // for (var i = 0; i < arr.length; i++) {
    // if (arr[i] === "Waldo") {

function actionWhenFound(name, i) {
  console.log("Found him!");
  console.log('Found ' + name + ' at index', i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
