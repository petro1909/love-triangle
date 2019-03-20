/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var count = 0;  
  for (var i = 0; i<preferences.length; i++) { 
      var n = preferences[i] - 1;
      if (n == i) continue;
      var k = preferences[n] - 1;
      if (n == k) continue;
      var m = preferences[k] - 1;
      if (m == k) continue;
      if (m == i) {
          count++;
      }
   }
   return count / 3;
};
