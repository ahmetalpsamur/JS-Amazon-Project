import { products } from "../data/products.js";
import {cart,removeCart} from "../data/cart.js";

let orderHTML="";
console.log(cart);
    cart.forEach(function(cartItem){
        let mathcingProduct;
        products.forEach(function(item){
            if(cartItem.productId===item.id){
                mathcingProduct=item;
                console.log(mathcingProduct.name)
            }
            else{
                console.log("Else")
            }
        });
        orderHTML+=`
        <div class="cart-item-container-${mathcingProduct.id}">
            <div class="delivery-date">
              Delivery date: Wednesday, June 15
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${mathcingProduct.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${mathcingProduct.name}
                </div>
                <div class="product-price">
                  $${(mathcingProduct.priceCents/100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete"
                  data-product-id="${mathcingProduct.id}" >
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-${mathcingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" checked class="delivery-option-input"
                    name="delivery-option-${mathcingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
                </div>
                <div class="delivery-option">
                  <input type="radio" class="delivery-option-input"
                    name="delivery-option-${mathcingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `
    });
    document.querySelector(".order-summary").innerHTML=orderHTML;
    document.querySelectorAll(".js-delete").forEach(function (link){
      const deleteProductId = link.dataset.productId;

      link.addEventListener("click",function eventListener(){
        removeCart(deleteProductId);
        document.querySelector(`.cart-item-container-${deleteProductId}`).remove();
      });
    })