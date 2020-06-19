// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  // this.forEach(a => newArray.push(callback(a)));
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  
  return newArray;

};

var new_s = s.myMap(function(item){
  return item * 2;
});
