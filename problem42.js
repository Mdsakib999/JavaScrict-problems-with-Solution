// Default parameter
// Calculate salary

function cal_salary(salary, tax = .10, bonus = 0) {
    const remain_money = salary + bonus - (salary*tax);
    return remain_money;
}

console.log(cal_salary(15000));