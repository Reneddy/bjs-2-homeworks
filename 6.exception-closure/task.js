﻿'use strict'

//Задача 1

function parseCount(value) {
    const result = Number.parseFloat(value);
    if (isNaN(result)) {
    throw new Error ("Невалидное значение");
    }
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (e) {
    return e
    }
}

//Задача 2

class Triangle {
   constructor(a, b, c) {
     if (a + b < c || a + c < b || b + c < a) {
        throw new Error("Треугольник с такими сторонами не существует");
     }
     this.a = a;
     this.b = b;
     this.c = c;
   }

   get perimeter() {
     return this.a + this.b + this.c;
   }

   get area() {
     let s = this.perimeter/ 2;
     return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(3);
   }
 }

 function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
 }


