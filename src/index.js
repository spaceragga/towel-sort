
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let array = [];

  if (!matrix) return [];

  for (let j = 0; j < matrix.length; j++) {
    if (j % 2 !== 0) matrix[j].reverse();
    for (let n = 0; n < matrix[j].length; n++) {
      array.push(matrix[j][n]);
    }
  }
  return array;
}
