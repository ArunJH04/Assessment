let products = [
  { id: 1, name: 'samsung', quantity: 14, price: 25 },
  { id: 2, name: 'redmi', quantity: 43, price: 16 },
  { id: 3, name: 'vivo', quantity: 32, price: 19 },
  { id: 4, name: 'iphone', quantity: 6, price: 32 }
];

let listProducts = function() {
  let template = `<div class="container-fluid"><table class="table">
  <thead>
      <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
          <th></th>
      </tr>
  </thead>
  <tbody>
       ${listItems()} 
  </tbody>
</table><div>`;
  document.getElementById('listContainer').innerHTML = template;
};

let addButton = document.querySelector('#addButtonClick');
let updateButton = document.querySelector('#updateButtonClick');

addButton.addEventListener('click', function() {
  let data = {
    id: +products.length + 1,
    name: document.getElementById('productName').value,
    quantity: document.getElementById('quantity').value,
    price: document.getElementById('price').value
  };
  products.push(data);
  listProducts(products);
});

updateButton.addEventListener('click', function() {
  let updatedData = {
    id: document.getElementById('updateId').value,
    quantity: document.getElementById('updateQuantity').value,
    price: document.getElementById('updatePrice').value
  };

  updatedProducts = products.filter(p => {
    if (p.id == updatedData.id) {
      //     let index = products.indexOf(p);
      (p.quantity = updatedData.quantity), (p.price = updatedData.price);
    }
  });
  listProducts(products);
});

let listItems = function() {
  return products
    .map(
      product =>
        `<tr>
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
            <td><button type="button" onclick="updateList(${
              product.id
            })" class="btn btn-primary">Update</button></td>
            <td><button type="button" onclick="deleteButton(${
              product.id
            })" class="btn btn-danger">Delete</button></td>
        </tr>`
    )
    .join('');
};

let updateList = function(id) {
  products.map(product => {
    if (product.id == id) {
      document.getElementById('updateQuantity').value = product.quantity;
      document.getElementById('updatePrice').value = product.price;
      document.getElementById('updateId').value = product.id;
    }
  });
};

let deleteButton = function(id) {
  products.map(product => {
    if (product.id == id) {
      let index = products.indexOf(product);
      console.log(product.id);
      products.splice(index, 1);
    }
  });
  listProducts(products);
};

listProducts();
