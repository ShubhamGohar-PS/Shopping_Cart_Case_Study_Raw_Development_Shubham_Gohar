import Component from "../utility/createComponent";
import FetchQuery from "../utility/fetchQuery";

class Categories extends Component {
  constructor(renderHookid) {
    super(renderHookid, true);
  }
  render() {
    const mainSection = document.querySelector(".main-section");
    const categorySection = this.createRootElement(
      "section",
      "category-section"
    );
    const div = this.createRootElement("div", "category-div");
    const categoryFetch = new FetchQuery("categories",'get').fetch();

    categoryFetch.then((categories) => {
      console.log(categories);
      for (const category of categories) {
        if (category.order >= 0) {
          const singleCat = this.createRootElement("div", "single-cat");
          const categoryImg = this.createRootElement("img", "category-img");
          categoryImg.src = category.imageUrl;
          categoryImg.alt = category.key;
          categoryImg.width = '300'
          categoryImg.height = '250'
          singleCat.append(categoryImg);
          const infoDiv = this.createRootElement("div", "cat-info");
          const h2 = this.createRootElement("h2", "cat-head");
          h2.textContent = category.name;
          const p = this.createRootElement('p', 'cat-desc')
          p.textContent = category.description
          const button = this.createRootElement('button', 'cat-btn')
          button.textContent = 'Explore ' + category.key
          button.type = 'button'
          button.id = category.key
          const url = `products.html?catId=${category.id}`
          button.addEventListener('click', ()=>{
            window.location.href = url
          })
          infoDiv.append(h2);
          infoDiv.append(p)
          infoDiv.append(button)
          singleCat.append(infoDiv)  
          div.append(singleCat);
        }
      }
    });
    categorySection.append(div);
    mainSection.append(categorySection);
  }
}

export default Categories;
