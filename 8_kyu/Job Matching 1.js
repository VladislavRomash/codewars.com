let candidate1 = {minSalary: 120000},
    job1 = {maxSalary: 130000},
    job2 = {maxSalary: 80000};

function match({minSalary}, {maxSalary}) {
    if (!minSalary || !maxSalary) throw new Error('')
    return minSalary * 0.9 <= maxSalary
}

match(candidate1, job1)
match(candidate1, job2)