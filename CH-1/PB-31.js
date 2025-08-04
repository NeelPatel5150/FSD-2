// Create a JSON object named Home Expenses in which you have to add
// monthly expenses of transport , food bill and names of different family
// members including mother,father,brother and sister.Print the expenses of father
// with his name.

home_expenses = {
    father : {
        name : "Shahsin",
        transport : 2000,
        food : 3000
    },
    
    mother : {
        name : "Swetal",
        transport : 1000,
        food : 2000
    },

    sister : {
        name : "Mitrangi",
        transport : 3000,
        food : 5000
    }, 
    
    brother : {
        name : "Hetansh",
        transport : 5000,
        food : 2000
    }  
}

console.log(home_expenses.father)
