const Express = require('express')
const api = Express()
const imc = require('./lib/imc')
//command path is use to make all process in the css and html
const path = require('path')

api.set('view engine','ejs')
api.set('views', path.join(__dirname, 'views'))

api.use(Express.static(path.join(__dirname, 'public')))
// this command serve to putting someone files


api.get('/', (req, res) => {
    res.render('main',{
    
    })
})


api.get('/gordura', (req,res) => {
    
    const {altura, peso} = req.query
    if(altura && peso){
    const calculo = imc.imc(peso,altura)
    res.render('gordura', {
    error:false,
    altura: imc.Clear(altura),
    peso: imc.Clear(peso),
    calculo: imc.Clear(calculo)
    })
     }else{
         res.render('gordura', {
          error: 'valores inválidos! Por favor preenche todos os campos!!'
         })
       }
    
})




const port = process.env.PORT || 3000
api.listen((port), err => {
    if(err){
        console.log(err)
    }else{
        console.log('we are on')
    }
})