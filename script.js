
function search(e) {
    var text = document.getElementById("search").value;
    if(e.keyCode == 13){
        e.preventDefault();
        getSearch();
    }
}

async function getSearch (){
     const response = await (await fetch("https://api.github.com/${text}/repos")).json() ;
}
