const express = require('express');
const app = express();
var path = require('path')

app.set('port', 3000);


// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('build'));
// }

app.use(express.static(path.join(__dirname, 'public')))

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

console.log("hihih hi hihi hihi")

app.listen(app.get('port'), () => {
  console.log(`Server started at: http://localhost:${app.get('port')}/`);
})

