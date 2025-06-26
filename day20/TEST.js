function getProducts(){
    // 1.호출하기
    let products =localStorage.getItem('products')
    if(products == null){products = []}
    else{
        products = JSON.parse(products);
    }
    return products;
}

function setProducts(products){
    localStorage.setItem('products', JSON.stringify(products));

}


