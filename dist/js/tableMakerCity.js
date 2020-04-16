// checa se a tag body terminou de carregar, quando tiver terminado chama a função createtable
document.getElementById("body").onload = function () { createTable() };


// busca o JSON no endereço, aguarda o retorno da requisição e então desenha a table.
function createTable () {
    var request = new XMLHttpRequest();
    request.open("GET", "https://raw.githubusercontent.com/PedroAbreuMaia/jsonfiles/master/city.json");
    request.onload = function() {
        var data = JSON.parse(request.responseText);
        var content = ' <table id="dt-basic-example" class="table table-bordered table-hover table-striped w-100">'; 
        content +=' <thead> <tr> <th>Id</th> <th>Nome</th> <th> População</th> <th>Checkbox</th> </tr> </thead> <tbody>';
        for (var i = 0; i < data.length; i++ ) {
            content += "<tr> <td>" +data[i].id+ "</td> <td>" +data[i].name+ "</td> <td>" +data[i].population; 
            content += '<td> <input type="checkbox" id="scales'+i+'" name="checkbox'+i+'"></td> </tr> ';
        }
        content += "</tbody> <tfoot> <tr> <th>Id</th> <th>Nome</th> <th>População</th> <th>Checkbox</th> </tr> </tfoot> </table>";
        //console.log(content);
        document.getElementById("tablePrint").innerHTML = content;
    }
    request.send();
}