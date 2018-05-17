var arr = ['Invoker-Mage', 'Harley-Mage']
var contain = [] 
for (var i = 0; i < arr.length; i++) {
  contain.push([])
}
console.log(contain)
var containStr = ''
// for (var a = 0; a < arr.length; a++) {
//   for (var b = 0; b < arr[a].length; b++) {
//     if(arr[a][b] === '-') {
//       // contain[a].push(containStr)
//       // containStr = ''
//     } else if (b < arr[a].length) {
//       // contain[a].push(containStr)
//       // containStr = ''
//     } else {
//       containStr += arr[a][b]
//     }
//   }
//   console.log(containStr)
// }
for (var a = 0; a < arr.length; a++) {
  for (var b = 0; b < arr[a].length; b++) {
    // containStr += arr[a][b]
    if (arr[a][b] === '-') {
      contain[a].push(containStr)
      containStr = ''
    } else if (arr[a][b].length - 1 === arr[a][b].length -1) {
      contain[a].push(containStr)
      containStr = ''
    } else {
      containStr += arr[a][b]

    }
  }
}
console.log(contain)