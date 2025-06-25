function getProducts(){
    let products = localStorage.getItem('prodicts')
    if(products==null){products=[]}
    else{ products = JSON.parse(products);}
    return products;
}

function setProducts(products){
    localStorage.setItem('products', JSON.stringify(products));

}


function productAdd(){
    const pnameInput = document.querySelector('#pnameInput');

}

