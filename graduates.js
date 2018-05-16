/*
{
    class : [{name: '' , score: 0}, {name: '', score: 0}]
}
*/
function graduates (students) {
    // Code disini
    var school = {}
    for (var a = 0; a < students.length; a++) {
        var nameStudents = {}
        var studentsClass = students[a].class
        if(school[studentsClass] === undefined) {
            school[studentsClass] = []
        }
        if(students[a].score >= 75) {
            //tampung dulu objek beserta key dan value
            nameStudents.name = students[a].name
            nameStudents.score = students[a].score
            //push object kedalam array
            school[studentsClass].push(nameStudents)
        }
    }
    return school
  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
//   // {
//   //   foxes: [
//   //     { name: 'Alexander', score: 100 },
//   //     { name: 'Vladimir', score: 92 }
//   //   ],
//   //   wolves: [
//   //     { name: 'Alisa', score: 76 },
//   //   ],
//   //   tigers: [
//   //     { name: 'Viktor', score: 80 }
//   //   ]
//   // }
  
  
  console.log(graduates([])); //{}