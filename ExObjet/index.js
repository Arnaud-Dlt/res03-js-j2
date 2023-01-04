let student = {
    name : "Arnaud",
    age : 19,
    grades : [12, 14, 8],
    average : 0
    
};

for(grade of student.grades)
{
    student.average+=grade;
}
student.average=student.average/student.grades.length;
console.log(student.average)


let students = [
    {
        name : "Steven",
        age : 18,
        average : 10
    },
    {
        name : "Jessica",
        age : 20,
        average : 13
    },
    {
        name : "Charlie",
        age : 17,
        average : 12
    },
];

for(student of students)
{
    console.log(`${student.name} a ${student.age} ans et a une moyenne de ${student.average}`);
}