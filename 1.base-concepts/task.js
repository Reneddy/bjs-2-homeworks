"use strict";
//Задача 1 Решение квадратного уравнения
function solveEquation(a, b, c) {
	let roots = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	return d > 0 ? (roots.push((-b + Math.sqrt(d)) / (2 * a)), roots.push((-b - Math.sqrt(d)) / (2 * a))) : d === 0 ? (roots.push(-b / (2 * a))) : [], roots;
}

//Задача 2 Калькулятор ипотеки
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let payment = (amount - contribution) * (percent / 1200 + ((percent / 1200)) / ((Math.pow((1 + percent / 1200), countMonths)) - 1));
	let creditAmount = payment * countMonths;
	return +creditAmount.toFixed(2);
}
