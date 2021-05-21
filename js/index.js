// ITERATION 1

function updateSubtotal(product) {
  let price = product.querySelector('.price span') //obj  / obj.innerHTML => string
  let quantity = product.querySelector('input') // obj    / obj.value=> string
  let subTotalTag = product.querySelector('.subtotal span') // object
  let subtotal = parseFloat(price.innerText) * parseInt(quantity.value)
  subTotalTag.innerText = subtotal
  
  // quantity.onclick = function(){
  //   let subtotal = parseInt(price.innerHTML)*parseInt(quantity.value)
  //   subTotalTag.innerHTML = subtotal

  // }
  //... your code goes here
  return subtotal
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productsColl = document.getElementsByClassName('product') // => array-obj / HTML Collection
  let total = 0
  for(let i = 0; i < productsColl.length; i++){
    total+= updateSubtotal(productsColl[i])
  }

  // ITERATION 3
  //... your code goes here
  const totalValue = document.querySelector('#total-value span')
  totalValue.innerHTML = total

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const tdTag = target.parentElement
  const trTag = tdTag.parentElement
  //console.log(trTag)
  trTag.parentElement.removeChild(trTag)
  calculateAll()
  //... your code goes here
}

// ITERATION 5


function createProduct(event) {
  //... your code goes here
  // console.log(event.currentTarget)// => attachment button
  const target = event.currentTarget // => attachment button
  const tdTag = target.parentNode // => attachment td tag, parent node from button
  const trTag = tdTag.parentNode // => attachment for all the child's row
  const productName = trTag.querySelector(`input[placeholder='Product Name']`) // => <tr>
  const productPrice = trTag.querySelector(`input[placeholder='Product Price']`) // => <tr>
  //console.log(trTag.parentNode)
  const newProduct = document.createElement('tr')
  newProduct.setAttribute('class', 'product')
  
  for(let i = 0; i<5; i++){
    const newTd = document.createElement('td')
    const newSpan = document.createElement('span')
    switch(i){
      case 0:
        newTd.setAttribute('class', 'name')
        newSpan.innerHTML = productName.value
        newTd.appendChild(newSpan)
        newProduct.appendChild(newTd)
        break;
      case 1:
        newTd.setAttribute('class', 'price')
        newTd.innerHTML = '$'
        newSpan.innerHTML = productPrice.value
        newTd.appendChild(newSpan)
        newProduct.appendChild(newTd)
        break;
      case 2:
        newTd.setAttribute('class', 'quantity')
        const inputTag = document.createElement('input')
        inputTag.setAttribute('type', 'number')
        inputTag.setAttribute('value', 0)
        inputTag.setAttribute('min', 0)
        inputTag.setAttribute('placeholder', 'Quantity')
        newTd.appendChild(inputTag)
        newProduct.appendChild(newTd)
        break;
      case 3:
        newTd.setAttribute('class', 'subtotal')
        newTd.innerHTML = '$'
        newSpan.innerHTML = 0
        newTd.appendChild(newSpan)
        newProduct.appendChild(newTd)
        break;
      case 4:
        newTd.setAttribute('class', 'action')
        const btnAction = document.createElement('button')
        btnAction.setAttribute('class', 'btn btn-remove')
        btnAction.innerHTML = 'Quitar Producto'
        newTd.appendChild(btnAction)
        newProduct.appendChild(newTd)
        break;
    }
    
  }
  const tbodyTag = document.querySelector('tbody')
  tbodyTag.appendChild(newProduct)
  const removeBtn = document.getElementsByClassName('btn-remove')
  for(let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct)
  }
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const createBtn = document.getElementById('create')
  createBtn.addEventListener('click', createProduct)
  const removeBtn = document.getElementsByClassName('btn-remove')
  for(let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct)
  }
  //... your code goes here

});
