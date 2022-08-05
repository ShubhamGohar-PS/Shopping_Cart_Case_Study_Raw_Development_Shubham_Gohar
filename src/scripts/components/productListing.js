import Component from "../utility/createComponent";
import FetchQuery from "../utility/fetchQuery";
import {
  addToCartEvent,
  CategoryNavToggle,
  mobileCategoryToggle,
} from "../utility/cartEventsMobileCatEvent";

class ProductListing extends Component {
  constructor(renderHookId) {
    super(renderHookId, true);
  }
  renderFilteredProducts(categoryId) {

    const productFetch = new FetchQuery("products", "get").fetch();

    productFetch.then((productArray) => {
      const filteredProducts = productArray.filter(
        (item) => item.category === categoryId
      );

      const productList =
        filteredProducts.length === 0 ? productArray : filteredProducts;
  
      this.renderProducts(productList);
    });
  }
  renderProducts(productList) {
  
    const productContainer = document.querySelector(".product-container");
    productContainer.innerHTML = "";
  
    for (const product of productList) {
      const productDiv = this.createRootElement("div", "product-div");
      const productName = this.createRootElement("h4", "product-name");
      const imageDescDiv = this.createRootElement("div", "image-desc-div");
      productName.textContent = product.name;
      const productImage = this.createRootElement("img", "product-image");
      productImage.src = product.imageURL;
      productImage.alt = product.name;
      const imageDiv = this.createRootElement("div", "product-image-div");
      imageDiv.append(productImage);
      const productDescription = this.createRootElement(
        "p",
        "product-description"
      );
      productDescription.textContent = product.description.substring(0, 120);

      const priceBtnDiv = this.createRootElement("div", "price-div");
      imageDescDiv.append(imageDiv);
      imageDescDiv.append(productDescription);
      const price = this.createRootElement("strong", "price");
      price.textContent = "MRP Rs." + product.price;
      const buyBtn = this.createRootElement("button", "buy-btn");
      buyBtn.type = "button";
      buyBtn.textContent = "Buy Now";

      buyBtn.addEventListener("click", () => {
        addToCartEvent(product);
      });
      const buyBtnMobileTab = this.createRootElement(
        "button",
        "buy-btn-mobile"
      );
      buyBtnMobileTab.textContent = `Buy Now @ Rs.${product.price}`;
      buyBtnMobileTab.addEventListener("click", () => {
        addToCartEvent(product);
      });
      priceBtnDiv.append(buyBtnMobileTab);
      priceBtnDiv.append(price);
      priceBtnDiv.append(buyBtn);
      productDiv.append(productName);
      productDiv.append(imageDescDiv);
      productDiv.append(priceBtnDiv);
      productContainer.append(productDiv);
    }

  }
  renderCategories() {
    const main = document.querySelector(".product-main-container");
    const catSection = this.createRootElement(
      "section",
      "product-category-section"
    );
    main.append(catSection);
    const catDiv = this.createRootElement("div", "product-category-div");
    catSection.append(catDiv);
    const categoryUl = this.createRootElement("ul", "product-category-ul");
    const catToggle = this.createRootElement("button", "category-toggle");
    catToggle.title = "toggle-categories";
    catToggle.innerHTML = `<i class="fa-solid fa-angle-down"></i>`;
    catToggle.addEventListener("click", () => {
      mobileCategoryToggle();
    });
    catDiv.append(catToggle);
    const categoryFetch = new FetchQuery("categories", "get").fetch();

    categoryFetch.then((categories) => {
      for (const category of categories) {
        if (category.order >= 0) {
          const categoryList = this.createRootElement("li", "category-item");
          categoryList.textContent = category.name;
          categoryList.id = category.id;
          categoryUl.append(categoryList);
          categoryList.addEventListener("click", () => {
            
            CategoryNavToggle(category.id);

            this.renderFilteredProducts(category.id);
          });
        }
      }
    });
    catDiv.append(categoryUl);
  }
  render() {
    
    const main = document.querySelector("main");
    this.renderCategories();
    const productsSection = this.createRootElement(
      "section",
      "products-section"
    );
    main.append(productsSection);
    const productContainer = this.createRootElement("div", "product-container");
    productsSection.append(productContainer);

    this.renderFilteredProducts();
    
  }
}

export default ProductListing;
