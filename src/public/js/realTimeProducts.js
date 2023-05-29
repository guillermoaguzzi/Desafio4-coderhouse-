const socket = io();

const productForm = document.getElementById('product-form');

const productList = document.getElementById('product-list');

const productsArray = [];


productForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const productNameInput = document.getElementById('product-name');
  const productName = productNameInput.value;
  socket.emit ('dataTransfer', productName);
  productNameInput.value = '';
});

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

