const socket = io();

const productList = document.getElementById('product-list-home');

const productsArray = [];

socket.on ('log', data=>{
productsArray.push(data);
console.log(productsArray);
productList.innerHTML = '';
productsArray.forEach(product => {
    const li = document.createElement('li');
    li.textContent = product;
    productList.appendChild(li);
});
});