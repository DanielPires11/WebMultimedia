//alert("O JS está a funcionar");

/*var A = [];
var B = 0;
for(var i = 0; i < 50; i++) {
    if(i%2 == 0) A[i] = 0;
    else A[i] = 1;
}*/

function myFunction() {    

    var i = Math.floor(Math.random() * 2);
    
    if(i == 0) {                                                        //imagem esquerda, texto direita
        var x = document.createElement("DIV");                      //criação do article
        x.setAttribute("id", "myArticle");                              //aplicação do css
        document.body.appendChild(x);                                        //implementado na pagina

        var file = document.getElementById('imagem').files[0];          //vai buscar o elemento com o id imagem, que é introduzido através de um upload
        var reader  = new FileReader();
        reader.onload = function(e)  {
            var image = document.createElement("img");                  //cria o elemento img
            image.src = e.target.result;
            image.setAttribute("id", "imgesq3");                        //aplica o css do id imgesq3
            //document.getElementById("myArticle2");
            document.body.appendChild(image);                           //mostra a imagem
            }
        reader.readAsDataURL(file);

        var heading = document.createElement("H2");
        var txt1 = document.querySelector('label input[id=titulo]').value;
        heading.append(txt1);
        document.getElementById("myArticle").appendChild(heading);
  
        var para = document.createElement("P");
        var txt2 = document.querySelector('label input[id=texto]').value;
        para.append(txt2);
        document.getElementById("myArticle").appendChild(para);                                      

    } else {                                                            //imagem esquerda, texto direita
        var y = document.createElement("DIV");                      //criação do article
        y.setAttribute("id", "myArticle2");                             //aplicação do css
        document.body.appendChild(y);                                        //implementado na pagina
  
        var heading1 = document.createElement("H2");
        var txt3 = document.querySelector('label input[id=titulo]').value;
        heading1.append(txt3);
        document.getElementById("myArticle2").append(heading1);
  
        var para1 = document.createElement("P");
        var txt4 = document.querySelector('label input[id=texto]').value;
        para1.append(txt4);
        document.getElementById("myArticle2").append(para1);

        var file1 = document.getElementById('imagem').files[0];
        var reader2  = new FileReader();
        reader2.onload = function(e)  {
            var image = document.createElement("img");
            image.src = e.target.result;
            image.setAttribute("id", "imgdir2");
            //document.getElementById("myArticle");
            document.body.append(image);
            }
        reader2.readAsDataURL(file1);

    }

}