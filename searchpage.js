function search() {
    let cards = document.querySelectorAll('.cards')
    let search_query = document.getElementById("searchbar").value;
    for (var i = 0; i < cards.length; i++) {
      if(cards[i].innerText.toLowerCase()
        .includes(search_query.toLowerCase())) {
          cards[i].classList.remove("hide");
      } else {
        cards[i].classList.add("hide");
      }
    }
  }

  let products = [
    {
      "id": 1,
      "itemName":"Cheese Burger",
      "restoraunt":"Burger Arena",
      "price":"$3.88",
      "image":"Rectangle 336.png"
  },

  {
      "id": 2,
      "itemName":"Toffe's Cake",
      "restoraunt":"Top Sticks",
      "price":"$4.00",
      "image":"Rectangle 336 (1).png"
  },
  {
      "id": 3,
      "itemName":"Dancake",
      "restoraunt":"Cake World",
      "price":"$1.99",
      "image":"Rectangle 336 (2).png"
  },
  {
      "id": 4,
      "itemName":"Crispy Sandwitch",
      "restoraunt":"Fastfood Dine",
      "price":"$3.00",
      "image":"Rectangle 336 (3).png"
  },
  {
      "id": 5,
      "itemName":"Thai  Soup",
      "restoraunt":"Foody man",
      "price":"$2.79",
      "image":"Rectangle 336 (4).png"
  },
  {
      "id": 6,
      "itemName":"Cheese Burger",
      "restoraunt":"Burger Arena",
      "price":"$3.88",
      "image":"Rectangle 336.png"
  }
  ]

$(".detailsBurger").click(function () { 
  
  $("#items", ).css("display", "none");
  $("#itemsbottom", ).css("display", "none");
  $("#searchdiv").css("display","none")
  $("#header").css("display","none")
  $("#cart").css("display","none")
  $("#burgerd").css("display","flex")
});

$(".X1").click(function () { 
  $("#items", ).css("display", "flex");
  $("#itemsbottom", ).css("display", "flex");
  $("#searchdiv").css("display","flex")
  $("#header").css("display","flex")
  $("#cart").css("display","flex")
  $("#burgerd").css("display","none")
});

$("#detailsToffe").click(function () { 
  
  $("#items", ).css("display", "none");
  $("#itemsbottom", ).css("display", "none");
  $("#searchdiv").css("display","none")
  $("#cart").css("display","none")
  $("#header").css("display","none")
  $("#toffed").css("display","flex")
});

$(".X2").click(function () { 
  $("#items", ).css("display", "flex");
  $("#itemsbottom", ).css("display", "flex");
  $("#searchdiv").css("display","flex")
  $("#toffed").css("display","none")
  $("#header").css("display","flex")
  $("#cart").css("display","flex")
});

$("#detailsCake").click(function () { 
  
  $("#items", ).css("display", "none");
  $("#itemsbottom", ).css("display", "none");
  $("#searchdiv").css("display","none")
  $("#cart").css("display","none")
  $("#header").css("display","none")
  $("#dancaked").css("display","flex")
});

$(".X3").click(function () { 
  $("#items", ).css("display", "flex");
  $("#itemsbottom", ).css("display", "flex");
  $("#searchdiv").css("display","flex")
  $("#dancaked").css("display","none")
  $("#header").css("display","flex")
  $("#cart").css("display","flex")
});

$("#detailsSandwich").click(function () { 
  
  $("#items", ).css("display", "none");
  $("#itemsbottom", ).css("display", "none");
  $("#searchdiv").css("display","none")
  $("#cart").css("display","none")
  $("#header").css("display","none")
  $("#sandwichd").css("display","flex")
});

$(".X4").click(function () { 
  $("#items", ).css("display", "flex");
  $("#itemsbottom", ).css("display", "flex");
  $("#searchdiv").css("display","flex")
  $("#sandwichd").css("display","none")
  $("#header").css("display","flex")
  $("#cart").css("display","flex")
});

$("#detailsSoup").click(function () { 
  
  $("#items", ).css("display", "none");
  $("#itemsbottom", ).css("display", "none");
  $("#searchdiv").css("display","none")
  $("#header").css("display","none")
  $("#cart").css("display","none")
  $("#soupd").css("display","flex")
});

$(".X4").click(function () { 
  $("#items", ).css("display", "flex");
  $("#itemsbottom", ).css("display", "flex");
  $("#searchdiv").css("display","flex")
  $("#soupd").css("display","none")
  $("#header").css("display","flex")
  $("#cart").css("display","flex")
});

$("#foodwagon").click(function (e) { 
  window.location.replace("index1.html")
  
});

let carts = document.querySelectorAll(".addToCart")

for ( let i=0; i<carts.length; i++){
carts[i].addEventListener('click', () => {

  cartItems(products[i])
})
}





function cartItems(product) {
  let container1 = document.getElementById("itemcont")
  let itemname1 = JSON.stringify(product.itemName)
  let imagesrc1= JSON.stringify(product.image)
  let newDiv = document.createElement('div')
newDiv.innerHTML= `<div class="item"> 
 <img width="15%" src=${imagesrc1} alt="">
 <p>Item:${itemname1}</p>
 <button onclick="removeButton(this.parentNode)" id="remove">Remove </button>
 
</div>`

container1.appendChild(newDiv)




}
 
  

function removeButton(el){
  el.style.display='none';
};

  
  
