import crypto from "crypto";
import fs from "fs/promises";

class ProductManager{

  constructor(pathFile){
    this.pathFile = pathFile;
  }

  generateNewId(){
    return crypto.randomUUID();
  }

  async addProduct(newProduct){
    try {
      //recuperar los productos
      const fileData = await fs.readFile( this.pathFile, "utf-8" );
      const products = JSON.parse(fileData);

      const newId = this.generateNewId();

      //creamos el producto nuevo y lo pusheamos al array de products
      const product = { id: newId, ...newProduct };
      products.push(product);

      //guardar los productos en el json
      await fs.writeFile( this.pathFile, JSON.stringify(products, null, 2) , "utf-8" );

      return { message: "Producto añadido correctamente", products }
    } catch (error) {
      throw new Error("Error al añadir el nuevo producto: "+error.message);
    }
  }

  async getProducts(){
    try {
      //recuperar los productos
      const fileData = await fs.readFile( this.pathFile, "utf-8" );
      const products = JSON.parse(fileData);

      return { message: "Lista de productos", products };
    } catch (error) {
      
    }
  }

  async setProductById(productId, updates){
    try {
      //recuperar los productos
      const fileData = await fs.readFile( this.pathFile, "utf-8" );
      const products = JSON.parse(fileData);

      const indexProduct = products.findIndex( product => product.id === productId );
      if( indexProduct === -1 ) throw new Error("Producto no encontrado");

      products[indexProduct] = { ...products[indexProduct], ...updates };

      //guardar los productos actualizados en el json
      await fs.writeFile( this.pathFile, JSON.stringify(products, null, 2) , "utf-8" );

      return { message: "Producto modificado correctamente", products };
    } catch (error) {
      
    }
  }

  async deleteProductById(productId){
    try {
      //recuperar los productos
      const fileData = await fs.readFile( this.pathFile, "utf-8" );
      const products = JSON.parse(fileData);

      const filteredProduct = products.filter( product => product.id !== productId );

      //guardar los productos actualizados en el json
      await fs.writeFile( this.pathFile, JSON.stringify(filteredProduct, null, 2) , "utf-8" );

      return { message: "Producto eliminado correctamente", products: filteredProduct };
    } catch (error) {
      
    }
  }
}

async function main(){
  try {
    const productManager = new ProductManager("./data/products.json");
    //await productManager.addProduct({ title: "Pantalon de jean", price: 2500, stock: 10 });

    //await productManager.setProductById("b7489dd7-7aff-402f-8b36-b80a7894fbe4", { price: 13000 })

    await productManager.deleteProductById("8c8db58e-3acb-42c6-8d07-78c3624c179d");
    const products = await productManager.getProducts();
    console.log(products);
  } catch (error) {
    console.log(error);
  }
}

main();