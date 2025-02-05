function solve(studentsArray) {
    let studentsList = [];
    for(let student of studentsArray){
        let tokens = student.split(', ');
        let name = tokens[0].split(': ')[1];
        let grade = tokens[1].split(': ')[1];
        let score = tokens[2].split(': ')[1];

        if(score >= 3){
            grade++;
            studentsList.push({
                name,
                grade,
                score,
            });
        }
    }

    let sortedStudents = studentsList.sort((a, b) => a.grade - b.grade);
    while(sortedStudents.length > 0){
        let firstStudentGrade = sortedStudents[0].grade;
        let fullScore = 0;
        let nGraders = [];

        while (sortedStudents.length > 0 && sortedStudents[0].grade === firstStudentGrade){
            fullScore += Number(sortedStudents[0].score);
            nGraders.push(sortedStudents[0].name);
            sortedStudents.shift();
        }

        console.log(`${firstStudentGrade} Grade`);
        console.log(`List of students: ${nGraders.join(', ')}`);
        console.log(`Average annual score from last year: ${(fullScore / nGraders.length).toFixed(2)}\n`);
    }
}