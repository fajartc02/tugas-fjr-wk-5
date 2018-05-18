/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.

Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'

# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function highestTopSpeed (data) {
  // your code here
  var containNum = []
  var containStr = ''
  for (var i = 0; i < data.length; i++) {
    containStr += data[i]
    if (data[i] === ':') {
      containStr = ''
    } else if (data[i] === ' ') {
      containNum.push(Number(containStr))
    }
  }
  for (var a = 0; a < containNum.length; a++) {
    for (var b = a+1; b < containNum.length; b++) {
      if (containNum[b] > containNum[a]) {
        var cotntain = containNum[a]
        containNum[a] = containNum[b]
        containNum[b] = cotntain
        // console.log(containNum)
      }
    }
  }
  if (data.length <= 1) {
    return 'No Data'
  }
  // console.log(containNum)
  return containNum[0]
  // console.log(containNum)
}

console.log(highestTopSpeed('Nakazato:1400 km/h,Ryosuke:180 km/h,Iketani:1180 km/h'));
// 180

console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
// 200

console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
// 175

console.log(highestTopSpeed(''));
// No data
