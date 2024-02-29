import {cart} from "../data/cart.js";
import {products} from "../data/products.js";


let htmlProducts = "";
products.forEach(function (product) {
  let divProducts = `
    <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select id="select-option-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button
          button-primary js-add-to-cart"
          data-product-id="${product.id}"
          >
            Add to Cart
          </button>
        </div>
    `
  htmlProducts += divProducts;
});
document.querySelector(".js-products-grid").innerHTML = htmlProducts;
let AddCard = document.querySelectorAll(".js-add-to-cart").forEach(function(product){
  product.addEventListener("click",eventListener);
  function eventListener(){
    console.log(product.dataset.productId);
    const productId=product.dataset.productId;
    let mathcingItem;
    cart.forEach(cartElement => {
      if(cartElement.productId===productId){
        mathcingItem=cartElement;
      }
    });
    if(mathcingItem){
      mathcingItem.quantity+=getQuantity(productId);
      showAdded(productId);
    }
    else{
      cart.push({
        productId:productId,
          quantity:getQuantity(productId)
        });
        showAdded(productId);
    }
    console.log(cart);
    showCartQuantity();
    
  }
});

function showCartQuantity(){
  let cart_quantity=document.querySelector(".cart-quantity");
  let allQuantity=0;
  cart.forEach(function(item){allQuantity+=item.quantity})
  cart_quantity.innerHTML=allQuantity;
}
function getQuantity(selected){
  let value =Number(document.querySelector(`#select-option-${selected}`).value);
  console.log(value);
  return value;
}
function showAdded(selected){
  let selectAdded = document.querySelector(`.js-added-to-cart-${selected}`);
  selectAdded.classList.add('added-to-cart-visible');
  
  let timeoutId = setTimeout(function(){
    selectAdded.classList.remove("added-to-cart-visible");
    
  },2000)
  

}

