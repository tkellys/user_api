const express = require('express')
const app = express()
const port = 3000
const users = require('./src/data/users.json')


app.get('/', (req, res) => {
  res.send('Helloouuu')
});
app.get('/users', (req,res) => {
    res.send(users).json()
})

app.get('/user/:id', (req, res)=>{
    let idParam = parseInt(req.params.id)
    // console.log(req.params.id);

   let userFiltrado = users.filter((user) => 
        user.id === idParam
    )
    res.status(200).json(userFiltrado);
})

app.listen(port, () => {
  console.log(`Estou ouvindo na porta http://localhost:${port}`)
})