export const cart=[];

export function addToCart(productId){
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