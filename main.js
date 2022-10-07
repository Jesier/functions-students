const createStudent = (name, grade) => {
    const studentObject = {
        name: name,
        grade: grade

    }   
        return studentObject
}

const newStudent = createStudent("me", 2)

const addMathGrade = (studentObject) => {
    studentObject.math = "B"
        return studentObject
}

const giveMath = addMathGrade(newStudent)

const addHistoryGrade = (studentObject) => {
    studentObject.history = "C"
        return studentObject
}

const giveHistory = addHistoryGrade(newStudent)

const addScienceGrade = (studentObject) => {
    studentObject.science = "A"
        return studentObject
}

const giveScience = addScienceGrade(newStudent)







console.log(newStudent)