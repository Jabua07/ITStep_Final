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

$("#detailsBurger").click(function () { 
  
  $("#items", ).css("display", "none");
  $("#itemsbottom", ).css("display", "none");
  $("#searchdiv").css("display","none")
  $("#burgerd").css("display","flex")
});

$(".X1").click(function () { 
  $("#items", ).css("display", "flex");
  $("#itemsbottom", ).css("display", "flex");
  $("#searchdiv").css("display","flex")
  $("#burgerd").css("display","none")
});

$("#detailsToffe").click(function () { 
  
  $("#items", ).css("display", "none");
  $("#itemsbottom", ).css("display", "none");
  $("#searchdiv").css("display","none")
  $("#toffed").css("display","flex")
});

$(".X2").click(function () { 
  $("#items", ).css("display", "flex");
  $("#itemsbottom", ).css("display", "flex");
  $("#searchdiv").css("display","flex")
  $("#toffed").css("display","none")
});

$("#detailsCake").click(function () { 
  
  $("#items", ).css("display", "none");
  $("#itemsbottom", ).css("display", "none");
  $("#searchdiv").css("display","none")
  $("#dancaked").css("display","flex")
});

$(".X3").click(function () { 
  $("#items", ).css("display", "flex");
  $("#itemsbottom", ).css("display", "flex");
  $("#searchdiv").css("display","flex")
  $("#dancaked").css("display","none")
});

$("#detailsSandwich").click(function () { 
  
  $("#items", ).css("display", "none");
  $("#itemsbottom", ).css("display", "none");
  $("#searchdiv").css("display","none")
  $("#sandwichd").css("display","flex")
});

$(".X4").click(function () { 
  $("#items", ).css("display", "flex");
  $("#itemsbottom", ).css("display", "flex");
  $("#searchdiv").css("display","flex")
  $("#sandwichd").css("display","none")
});

$("#detailsSoup").click(function () { 
  
  $("#items", ).css("display", "none");
  $("#itemsbottom", ).css("display", "none");
  $("#searchdiv").css("display","none")
  $("#soupd").css("display","flex")
});

$(".X4").click(function () { 
  $("#items", ).css("display", "flex");
  $("#itemsbottom", ).css("display", "flex");
  $("#searchdiv").css("display","flex")
  $("#soupd").css("display","none")
});

$("#foodwagon").click(function (e) { 
  window.location.replace("index.html")
  
});


