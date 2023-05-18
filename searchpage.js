let search=() =>{
    let searchbox = document.getElementById("searchbar").value.toUpperCase();
    let storeitems = document.getElementById("carddiv");
    let products = document.querySelectorAll(".card")
    let productname = document.getElementsByTagName("p")

    for(var i=0; i< productname.length; i++){
        let match = products[i].querySelectorAll(".card");

        if(match){
            match.textContent || match.innerhtml

            if(textvalue.toUpperCase().indexOf(searchbox)> -1){
                products[i].style.display = ""
            }else{
                products[i].style.display = "none"
            }
        }
    }
}