let products = {
    data: [
      {
        productName: "Earl Grey",
        category: "Black",
        price: "6.65",
        image: "img/black_EarlGrey.webp",
      },
     
      {
        productName: "Masala Chai",
        category: "Black",
        price: "6.65",
        image: "img/black_MasalaChai.webp",
      },
      {
        productName: "English Breakfast",
        category: "Black",
        price: "6.65",
        image: "img/black_EnglishBreakfast.webp",
      },
      {
        productName: "Golden Mate",
        category: "Green",
        price: "6.65",
        image: "img/green_GoldenMate.webp",
      },
      {
        productName: "Jasmine Tea",
        category: "Green",
        price: "6.65",
        image: "img/green_JasmineTea.webp",
      },
      {
        productName: "Sencha Rose",
        category: "Green",
        price: "6.65",
        image: "img/green_SenchaRose.webp",
      },
      {
        productName: "African Winter",
        category: "Herbal",
        price: "6.65",
        image: "img/herbal_AfricanWinter.webp",
      },
      {
        productName: "Blubrerry Rooibos",
        category: "Herbal",
        price: "6.65",
        image: "img/herbal_BlubrerryRooibos.webp",
      },
      {
        productName: "Earl Grey Rooibos",
        category: "Herbal",
        price: "6.65",
        image: "img/herbal_EarlGreyRooibos.webp",
      },
      {
        productName: "CoconutOolong",
        category: "Oolong",
        price: "6.65",
        image: "img/oolong_CoconutOolong.webp",
      },
      {
        productName: "Ti Kuan Yin",
        category: "Oolong",
        price: "6.65",
        image: "img/oolong_TiKuanYin.webp",
      },
      {
        productName: "SilverJasmine",
        category: "White",
        price: "6.65",
        image: "img/white_SilverJasmine.webp",
      },
      {
        productName: "Silver Needle",
        category: "White",
        price: "6.65",
        image: "img/white_SilverNeedle.webp",
      },
      {
        productName: "White Peony",
        category: "White",
        price: "6.65",
        image: "img/white_WhitePeony.webp",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  

  function productSearch () {
      //initializations
      let searchInput = document.getElementById("search-input").value;
      let elements = document.querySelectorAll(".product-name");
      let cards = document.querySelectorAll(".card");
  
      //loop through all elements
      elements.forEach((element, index) => {
        //check if text includes the search value
        if (element.innerText.includes(searchInput.toUpperCase())) {
          //display matching card
          cards[index].classList.remove("hide");
        } else {
          //hide others
          cards[index].classList.add("hide");
        }
      });
  };

// search by click 
  document.getElementById("search").addEventListener("click", productSearch);
// search by enter 
  document.getElementById("search-input").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      productSearch();
    }
});


  //Initially display all products
  function productShowDefault() {
      window.onload = () => {
      filterProduct("all");
  }};

  productShowDefault();