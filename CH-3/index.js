fs = require('fs')

fs.writeFile("test.txt", "Exam Attempt\n", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("File created successfully")

        fs.appendFile("test.txt", "Entry 1: Pass\nEntry 2: Fail\nEntry 3: Pass\n", (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Data appended successfully")
                
                fs.readFile("test.txt", "utf-8", (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        l = data.split('\n')
                        pass_count = 0
                        console.log(l);
                        
                        for (i = 1; i <= 3; i++) {
                            s = ""
                            for (j = 9; j <= 12; j++) {
                                s += l[i][j]
                            }
                            console.log(s);
                            
                            if (s == "Pass") {
                                pass_count++
                            }
                        }
                        console.log("Number of Passes : " + pass_count)

                        if (pass_count >= 3) {
                            fs.writeFile("test.txt", " ", (err) => {
                                if (err) {
                                    console.log(err)
                                } else {
                                    console.log("Content Erased")
                                }
                            })
                        }
                    }
                })
            }
        })
    }
})
                

