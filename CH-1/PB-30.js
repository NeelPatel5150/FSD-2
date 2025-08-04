// Write one JSON string with date property (yyyy-mm-dd) and print date in
// India standard time. 

string = '{"date":"2006-02-12", "name":"Hetansh", "age":19}';

let ob = JSON.parse(string);
a = new Date(ob.date);
console.log(a);
