const express = require('express')
const app = express()
const port = 3000


const products=[
];

app.use(express.json())
app.use(express.json({ limit: "100mb" }))


let counter=0;
app.use((req,res,next) => {
    counter++;
    console.log("This is request number: ", counter);

    next();
})

function specialMiddleWare(req,res,next){
  console.log("Special middleware was called.");
  next();
}

app.get('/products',(req,res) => {
  if(products.length>0){
    res.send(
      {
      products: products
    }
  )
  }else{
    res.send("There are no products to show.")
  }
})

app.post('/products',async (req,res) => {
  // products.push();
  const newProduct= req.body.product;
  products.push(newProduct);
  res.send({
    message: "Your new product is added"
  });
})

app.delete('/products/:index',(req,res) => {
  // console.log({params: req.params})
  // res.send({params: req.url.params})
  delete products[req.params.index];
  res.send("Your product is deleted");
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/account', (req,res) => {
    res.send("This is your account information");
});

app.delete('/account',specialMiddleWare, (req,res) => {
    res.send("Your account is deleted permanently forever.");
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})