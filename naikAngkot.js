function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var cargo = 2000
  var arrAngkot = []
  if (arrPenumpang.length > 0) {
      for (var i = 0; i < arrPenumpang.length; i++) {
          var objAngkot = {}
          for (var j = 0; j < arrPenumpang[i].length; j++) {
              if(arrPenumpang[i][j] === 'Dimitri') {
                  objAngkot.penumpang = arrPenumpang[i][j]
                  objAngkot.naikDari = arrPenumpang[i][1]
                  objAngkot.tujuan = arrPenumpang[i][2]
                  objAngkot.bayar = cargo * (rute.indexOf(objAngkot.tujuan) - rute.indexOf(objAngkot.naikDari))
                  arrAngkot.push(objAngkot)
              } else if (arrPenumpang[i][j] === 'Icha') {
                  objAngkot.penumpang = arrPenumpang[i][j]
                  objAngkot.naikDari = arrPenumpang[i][1]
                  objAngkot.tujuan = arrPenumpang[i][2]
                  objAngkot.bayar = cargo * (rute.indexOf(objAngkot.tujuan) - rute.indexOf(objAngkot.naikDari))
                  arrAngkot.push(objAngkot)
                } 
            }
        }
        return arrAngkot
    } else {
        return arrAngkot
    }
}
    // console.log(arrAngkot)


//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]