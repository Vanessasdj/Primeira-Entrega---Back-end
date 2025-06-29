const express = require("express");
const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");

const app = express();
app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});
