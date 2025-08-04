var exp = require('express');
var app = exp();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render(__dirname +"/index", {
        name: 'John Doe',
        message: 'Konichiwa Genchidesuka, Watashinotomodachi!',
        fruits: ['Apple', 'Banana', 'Cherry']
    });
});

app.listen(3000)
