
const express = require("express");
const exphbs = require("express-handlebars");
const path = require('path');

const app = express();

app.engine("hbs", exphbs({
    defaultLayout: "main.hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
}));

/*app.engine("hbs", exphbs);*/

app.set("view engine", ".hbs");
// usar archivos en public
app.use(express.static(path.join(__dirname, 'public')));
// server config
app.set('port', process.env.PORT || 1234);

// rutas

// inicio
app.get("/", (req, res) => {
    res.json("Inicio LinaPlus");
});

//menu administrador
app.get("/admin", (req, res) => {
    res.render("menuAdministrador", {
        style: "/css/menuAdministrador.css",
    })
});

// administrar elementos
app.get('/admin/elementos', (req, res) => {
    res.render('administrarElementos', {
        style: '/css/administrarElementos.css',
        script: '/js/administrarElementos.js'
    });
});

// administrar eventos
app.get('/admin/eventos', (req, res) => {
    res.render('administrarEventos', {
        style: '/css/administrarEventos.css',
        script: "/js/administrarEventos.js"
    });
});

// 404
app.get('*', (req, res) => {
    res.send('Esto no se ha programado, le recomendamos que deje de ser concha')
});


//RUN!
app.listen(app.get('port'), () => {
    console.log('Running at... ' + app.get('port'));
});


