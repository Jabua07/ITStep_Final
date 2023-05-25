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