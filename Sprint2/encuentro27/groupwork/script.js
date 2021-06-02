localStorage.clear()
function Product(id, name,brand, price) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.price = price
}
var products = [
    new Product('prod1','product 1', 'acme', 10),
    new Product('prod2','product 2', 'tnt', 2),
    new Product('prod3','Product 3', 'BMW', 35),
]

function addProduct(product){
    var products = getProducts();
    products.push(product)
    localStorage.setItem('productsSelected', JSON.stringify(products))
}

function getProducts(){
    const queryprods = JSON.parse(localStorage.getItem('productsSelected'))
    return queryprods ? queryprods : []
}

function numberOfProdSelect(){
    return getProducts().length
}

function calculateTotal(){
    var total = 0;
    var prods = getProducts()
    for (i = 0; i < prods.length; i++){
        total = total + prods[i].price
    }
    return total
    
}

products.forEach(prod => {
    document.getElementById(prod.id).addEventListener('click', (event) => {
        addProduct(prod)
        var cart = document.getElementById('cart')
        cart.textContent = `${numberOfProdSelect()}. Total: $${calculateTotal()}`
        console.log(getProducts())
        console.log(`Total: ${calculateTotal()}`)
        console.log(`There are ${numberOfProdSelect()} products in the cart`)
    })
})


const btnComprar = document.getElementById("btnComprar")
btnComprar.addEventListener('click', ()=>{
    const datos = document.getElementById("datos")
    datos.style.display = "block"
})