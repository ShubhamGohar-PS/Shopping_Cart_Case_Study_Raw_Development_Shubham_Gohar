import FetchQuery from "./fetchQuery";
import LowestPrice from '../../static/images/lowest-price.webp'

let cartArray = JSON.parse(localStorage.getItem("CART")) || [];
export function addToCartEvent(item) {
  const addToCart = new FetchQuery("addToCart", 'post').fetch();
  addToCart.then((res)=>{
    if(res.response == 'Success'){
      if (cartArray.some((cartItem) => cartItem.id === item.id)) {
        changeNumberOfUnits("plus", item.id);
      } else {
        cartArray.push({
          ...item,
          numberOfUnits: 1,
        });
      }
      updateCart();
    }
  }).catch((err)=>console.log(err))
  
  
}

//update Cart
export function updateCart() {
  renderCartItems();
  renderSubtotal();
  // save cart to local storage
  localStorage.setItem("CART", JSON.stringify(cartArray));
}
function removeItemFromCart(id) {
  cartArray = cartArray.filter((item) => item.id !== id);
  updateCart();
}
//calculate and render subtotal
export function renderSubtotal() {
  let totalPrice = 0;
  let totalItems = 0;
  let singleSubTotal = 0;

  cartArray.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
    singleSubTotal = item.price * item.numberOfUnits;
    const subtotal = document.getElementById(item.id)
    subtotal.textContent = `Rs. ${singleSubTotal}`
  });
  const cartTotal = document.querySelector(".cart-total");
  cartTotal.textContent = `Rs.${totalPrice.toFixed(2)} >`;
  const totalItemHead = document.querySelector(".total-item");
  totalItemHead.textContent = `My Cart (${totalItems} items)`;
  const cartItems = document.querySelector(".cart-items");
  cartItems.textContent = `${totalItems} items`;
  localStorage.setItem("TOTAL_ITEM", totalItems);
}

//render Cart Items
function renderCartItems() {
  const cartContentDiv = document.querySelector(".content-div");
  const promoDesc = document.querySelector(".promo-desc");
  const checkoutBtnBottom = document.querySelector(".checkout-button");
  const startShoppingBtn = document.querySelector(".start-shopping");
  cartContentDiv.innerHTML = "";
  const trustImageDiv = document.createElement('div')
  trustImageDiv.className = 'trust-image-div'
  cartContentDiv.append(trustImageDiv)

  const prodImg = document.createElement('img')
  prodImg.className = 'lowest-price-img'
  prodImg.src = LowestPrice
  prodImg.alt = 'lowest-price'
  trustImageDiv.append(prodImg)

  const trustDesc = document.createElement('p')
  trustDesc.className = 'trust-description'
  trustDesc.textContent = 'You won\'t find it cheaper anywhere'
  trustImageDiv.append(trustDesc)
  
  if (cartArray.length === 0) {
    cartContentDiv.innerHTML =
      "No content in cart <br/> Your favourite items are just a click away.";
    cartContentDiv.style.backgroundColor = "white";
    cartContentDiv.style.color = "black";
    cartContentDiv.style.display = "flex";
    cartContentDiv.style.alignItems = "center";
    cartContentDiv.style.justifyContent = "center";
    cartContentDiv.style.textAlign = "center";
    cartContentDiv.style.height = "100%";
    checkoutBtnBottom.style.display = "none";
    startShoppingBtn.style.display = "inline-flex";
    promoDesc.innerHTML = "";
  }
  cartArray.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "item-div";
    cartContentDiv.append(itemDiv);

    const productImgDiv = document.createElement("div");
    productImgDiv.className = "product-img-div";
    itemDiv.append(productImgDiv);

    const productImg = document.createElement("img");
    productImg.src = item.imageURL;
    productImg.alt = item.name;
    productImgDiv.append(productImg);

    const infoDiv = document.createElement("div");
    infoDiv.className = "info-div";
    itemDiv.append(infoDiv);

    const productTitle = document.createElement("h3");
    productTitle.className = "product-title";
    productTitle.textContent = item.name;
    infoDiv.append(productTitle);

    const informationDiv = document.createElement("div");
    informationDiv.className = "information";
    infoDiv.append(informationDiv);

    const minusBtn = document.createElement("button");
    minusBtn.className = "minus";
    minusBtn.title = "minus";
    minusBtn.innerHTML = `<i class="fa-solid fa-minus"></i>`;
    minusBtn.addEventListener("click", () => {
      changeNumberOfUnits("minus", item.id);
    });
    informationDiv.append(minusBtn);

    const quantitySpan = document.createElement("span");
    quantitySpan.className = "quantity";
    quantitySpan.textContent = item.numberOfUnits;
    informationDiv.append(quantitySpan);

    const plusBtn = document.createElement("button");
    plusBtn.className = "plus";
    plusBtn.title = "plus";
    plusBtn.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    plusBtn.addEventListener("click", () => {
      changeNumberOfUnits("plus", item.id);
    });
    informationDiv.append(plusBtn);

    const iconX = document.createElement("i");
    iconX.className = "fa-solid fa-xmark";
    informationDiv.append(iconX);

    const productPriceSpan = document.createElement("span");
    productPriceSpan.className = "price";
    productPriceSpan.textContent = `Rs.${item.price}`;
    informationDiv.append(productPriceSpan);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.title = "delete";
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteBtn.addEventListener("click", () => {
      removeItemFromCart(item.id);
    });
    informationDiv.append(deleteBtn);

    const productSubtotalDiv = document.createElement("div");
    productSubtotalDiv.className = "product-subtotal";
    itemDiv.append(productSubtotalDiv);

    const itemSubtotal = document.createElement("h6");
    itemSubtotal.className = "single-subtotal";
    itemSubtotal.textContent = `Rs.${item.price}`;
    itemSubtotal.id = item.id
    productSubtotalDiv.append(itemSubtotal);

    promoDesc.textContent = "Promo code can be applied on payment page";

    startShoppingBtn.style.display = "none";
    checkoutBtnBottom.style.display = "inline-flex";
    cartContentDiv.style.height = "70%";
    cartContentDiv.style.overflowY = "scroll";
    cartContentDiv.style.backgroundColor = "rgb(221, 221, 221)";
    cartContentDiv.style.justifyContent = "unset";
    trustImageDiv.style.display = 'flex'
    trustImageDiv.style.order = '2'

    
  });
  
}

function changeNumberOfUnits(action, id) {
  cartArray = cartArray.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.stock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });
  updateCart();
}


export const closeMiniCart = () => {
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.classList.remove("active");
  const backdrop = document.querySelector('.backdrop')
  backdrop.classList.remove('active')
};

export const openMiniCart = () => {
  const cartContainer = document.querySelector(".cart-container");
  cartContainer.classList.add("active");
  const backdrop = document.querySelector('.backdrop')
  backdrop.classList.add('active')
  updateCart();
};



//CategoryNavToggle
export const CategoryNavToggle = (currentCat) => {
  const currentCategory = document.getElementById(currentCat);
  const checkFilter = currentCategory.classList.contains('filtered')
  if(checkFilter){
    currentCategory.classList.remove('filtered')
  }else{
    currentCategory.classList.add('filtered')
  }
  const allCats = document.querySelectorAll("li");
  const allCatsArray = Array.from(allCats);
  allCatsArray.forEach((category) => {
    category.classList.remove("active");
  });
  
  currentCategory.classList.add("active");

  console.log(currentCategory);
  currentCategory.classList.add("mobile-active");

  allCatsArray.forEach((category) => {
    category.classList.remove("mobile-active");
  });

};


//mobile category toggle
export const mobileCategoryToggle = () => {
  const categoryli = document.querySelectorAll(".category-item");
  const categoryArray = Array.from(categoryli);
  categoryArray.forEach((category) => {
    category.classList.toggle("mobile-active");
  });

  console.log("mobile button clicked");
};
