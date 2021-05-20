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
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeBtn = document.getElementsByClassName('btn-remove')
  for(let i = 0; i < removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeProduct)
  }
  //... your code goes here
});
