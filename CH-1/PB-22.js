// Write a JSON script by entering user detail of three different person having
// same age group in string format method. Print the following result in object
// form. (1) User Details (2) Name of 2nd person and his/her age.

json_str = '[{"name":"a1","age":18},{"name":"b1","age":18},{"name":"c1","age":18}]'

json_data = JSON.parse(json_str)
console.log(json_data)
console.log(json_data[1].name)
console.log(json_data[1].age)
