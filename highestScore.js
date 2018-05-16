function highestScore (students) {
    // Code disini
    var school = {}
    for (var a = 0; a < students.length; a++) {
        var classStudents = students[a].class // out: foxes, wolves, foxes, wolves
        //jika school[classStudents] (objek school dengan key dari students[a].class) tidak ditemukan, maka key akan di tembahkan kedalam object school
        if (school[classStudents] === undefined/*|| school[studentsClass].score < students[a].score*/) { // bisa digunakan || untuk mengganti name and score di dalam object
            school[classStudents] = {name: '', score: 0}
        }
        //jika objek school dengan key dari classStudents nilai scorenya < 
        if (school[classStudents].score < students[a].score) {
            school[classStudents].name = students[a].name
            school[classStudents].score = students[a].score
        }
    }
    return school
  }
  
  // TEST CASE
  console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}