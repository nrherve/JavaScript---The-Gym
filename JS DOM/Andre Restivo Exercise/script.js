function changeAllArticleColors(){
    const articles = document.querySelectorAll("#products article");
    for(a of articles){
        a.classList.add("sale");
    }
    console.log(articles);
    console.log(articles[0].classList);
    console.log(articles[0].classList.contains("sale"));
}
changeAllArticleColors();