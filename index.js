/* 1.Fruit Billing System.  */

const prices = {
    apple: 2.50,
    banana: 1.50,
    orange: 3.00,
    mango: 4.00,
    pineapple: 5.00
};

function calculateTotalCost(fruits) {
    let totalCost = 0;
    for (const fruit in fruits) {
        if (fruits.hasOwnProperty(fruit) && prices.hasOwnProperty(fruit)) {
            totalCost += fruits[fruit] * prices[fruit];
        }
    }
    return totalCost;
}

function generateBill(fruits) {
    let bill = "========== Bill ==========\n";
    let totalCost = 0;
    for (const fruit in fruits) {
        if (fruits.hasOwnProperty(fruit) && prices.hasOwnProperty(fruit)) {
            const cost = fruits[fruit] * prices[fruit];
            bill += `${fruit}: ${fruits[fruit]} x ${prices[fruit]} = ${cost.toFixed(2)}\n`;
            totalCost += cost;
        }
    }
    bill += "=========================\n";
    bill += `Total Cost: ${totalCost.toFixed(2)}`;
    return bill;
}

const fruits = {
    apple: parseInt(prompt("Enter the quantity of apples:")) || 0,
    banana: parseInt(prompt("Enter the quantity of bananas:")) || 0,
    orange: parseInt(prompt("Enter the quantity of oranges:")) || 0,
    mango: parseInt(prompt("Enter the quantity of mangoes:")) || 0,
    pineapple: parseInt(prompt("Enter the quantity of pineapples:")) || 0
};

const totalCost = calculateTotalCost(fruits);
const bill = generateBill(fruits);

console.log(bill);
alert(bill);

/* 2. program to input electricity unit charges and
  */

function calculateElectricityBill(units) {
    let bill = 0;

    if (units <= 50) {
        bill = units * 0.50;
    } else if (units <= 150) {
        bill = (50 * 0.50) + ((units - 50) * 0.75);
    } else if (units <= 250) {
        bill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
    } else {
        bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
    }

    const surcharge = bill * 0.20;
    const totalBill = bill + surcharge;

    return totalBill;
}

const units = parseFloat(prompt("Enter the number of electricity units consumed:"));
const totalBill = calculateElectricityBill(units);

console.log(`Total electricity bill: Rs. ${totalBill.toFixed(2)}`);
alert(`Total electricity bill: Rs. ${totalBill.toFixed(2)}`);

/* 3. program student marksheet (Grade System). */

function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A+';
    } else if (marks >= 80) {
        return 'A';
    } else if (marks >= 70) {
        return 'B';
    } else if (marks >= 60) {
        return 'C';
    } else if (marks >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

function calculateMarksheet(marks) {
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const averageMarks = totalMarks / marks.length;
    const grade = calculateGrade(averageMarks);

    return {
        totalMarks: totalMarks,
        averageMarks: averageMarks,
        grade: grade
    };
}

const subjects = ['Math', 'Physics', 'Chemistry', 'Biology', 'English'];
let marks = [];

for (let i = 0; i < subjects.length; i++) {
    const mark = parseFloat(prompt(`Enter marks for ${subjects[i]}:`));
    marks.push(mark);
}

const marksheet = calculateMarksheet(marks);

console.log(`Total Marks: ${marksheet.totalMarks}`);
console.log(`Average Marks: ${marksheet.averageMarks.toFixed(2)}`);
console.log(`Grade: ${marksheet.grade}`);

alert(`Total Marks: ${marksheet.totalMarks}\nAverage Marks: ${marksheet.averageMarks.toFixed(2)}\nGrade: ${marksheet.grade}`);