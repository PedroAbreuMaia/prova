// checa se a a página terminou de carregar, quando tiver terminado chama a função buttonClicked
window.onload = function () { buttonClicked(); };


// verifica se os buttons foram clicados, caso tenham sido aciona a resposa específica de cada um
function buttonClicked() {
    var btnCity = document.getElementById("btn-city");
    btnCity.addEventListener("click", function() {
        window.location = "table_people.html";
    }); 
    var btnPeople = document.getElementById("btn-people");
    btnPeople.addEventListener("click", function() {
        window.location = "page_error_404.html";
    });       
}