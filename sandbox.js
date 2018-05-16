function meleeRangedGrouping (str) {
    //your code here
    var arrHerro = []
    for (var i = 0; i < 2; i++) {
        arrHerro.push([])
    }
    var containStr = ''
    for (var i = 0; i < str.length; i++) {
        if(str[i] !== '-') {
            containStr += str[i]
        }
    }
    arrHerro[1].push(containStr)
    console.log(arrHerro)
  }
  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
//   console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
//   console.log(meleeRangedGrouping('')); // []