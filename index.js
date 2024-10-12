class Student {
  constructor(name, major, grades) {
    this.name = name;
    this.major = major;
    this.grades = grades;
  }

  addGrade(grade) {
    this.grades.push(grade);
  }
  gpa() {
    let gpa = 0;
    for (let i = 0; i < this.grades.length; i++) {
      gpa += this.grades[i];
    }
    return gpa / this.grades.length;
  }
}

const Eva = new Student("Eva", "Arts", [95, 75, 83]);
Eva.addGrade(90);
Eva.addGrade(12);
console.log(Eva);
console.log(Eva.gpa());
