function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var cargo = 2000
  var angkotArr = []
  for (var i = 0 ; i < arrPenumpang.length; i++) {
    var angkot = {}
    // for (var j = 0; j < arrPenumpang[i].length; j++) {
        angkot.penumpang = arrPenumpang[i][0]
        angkot.naikDari = arrPenumpang[i][1]
        angkot.tujuan = arrPenumpang[i][2]
        angkot.bayar = (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])) * cargo
    // }
    angkotArr.push(angkot)
  }
  return angkotArr
}


//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]