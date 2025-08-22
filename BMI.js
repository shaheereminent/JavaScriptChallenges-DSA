// Task
// 1. Store Mark's and John's mass and height in Variables
// 2. Calculate their BMI using the formula.
// 3. Create a boolean variable 'MarkHigherBMI' to check if mark has a higher bmi than john's.
// 4. Formula to calculate BMI = mass / (height ** 2)

const markHeight = 1.88
const markMass = 95

const johnHeight = 1.76
const johnMass = 85

const markBMI = markMass / markHeight ** 2
const johnBMI = johnMass / johnHeight ** 2

if (markBMI > johnBMI) {
  console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}`)
} else {
  console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`)
}
