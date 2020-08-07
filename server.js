const app = require('express')();
const fileUpload = require('express-fileupload');
const PORT = process.env.PORT || 3000;

app.use(fileUpload());
app.use(require('./router/router'));

app.listen(PORT, () => console.log('Escuchando en el puerto', PORT));
