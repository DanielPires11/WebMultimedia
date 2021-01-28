//alert("O JS está a funcionar");

function myFunction() {

    var i = Math.floor(Math.random() * 2);
    
    if(i == 0) {                                                        //imagem esquerda, texto direita
        var x = document.createElement("ARTICLE");                      //criação do article
        x.setAttribute("id", "myArticle");                              //aplicação do css
        document.body.append(x);                                        //implementado na pagina

        var file = document.getElementById('imagem').files[0];          //vai buscar o elemento com o id imagem, que é introduzido através de um upload
        var reader  = new FileReader();
        reader.onload = function(e)  {
            var image = document.createElement("img");                  //cria o elemento img
            image.src = e.target.result;
            image.setAttribute("id", "imgesq3");                        //aplica o css do id imgesq3
            document.body.appendChild(image);                           //mostra a imagem
            }
        reader.readAsDataURL(file);

        /*var x1 = document.createElement("IMG");
        //x1 = document.querySelector('label input[id=imagem]').value;
        x1.setAttribute("src", "./Imagens/greybackground.jpg");
        x1.setAttribute("id", "imgesq2");
        x1.setAttribute("alt", "greybackground");
        document.body.append(x1);*/

        var heading = document.createElement("H2");
        var txt1 = document.querySelector('label input[id=titulo]').value;
        //var txt1 = document.createTextNode("Teste Titulo");
        heading.append(txt1);
        document.getElementById("myArticle").append(heading);
  
        var para = document.createElement("P");
        var txt2 = document.querySelector('label input[id=texto]').value;
        para.append(txt2);
        document.getElementById("myArticle").append(para);


    } else {                                                            //imagem esquerda, texto direita
        var x = document.createElement("ARTICLE");                      //criação do article
        x.setAttribute("id", "myArticle2");                             //aplicação do css
        document.body.append(x);                                        //implementado na pagina
  
        var heading = document.createElement("H2");
        var txt1 = document.querySelector('label input[id=titulo]').value;
        //var txt1 = document.createTextNode("Teste Titulo");
        heading.append(txt1);
        document.getElementById("myArticle2").append(heading);
  
        var para = document.createElement("P");
        var txt2 = document.querySelector('label input[id=texto]').value;
        para.append(txt2);
        document.getElementById("myArticle2").append(para);

        var file = document.getElementById('imagem').files[0];
        var reader  = new FileReader();
        reader.onload = function(e)  {
            var image = document.createElement("img");
            image.src = e.target.result;
            image.setAttribute("id", "imgdir2");
            document.body.append(image);
            }
        reader.readAsDataURL(file);

        /*var x1 = document.createElement("IMG");
        //x1 = document.querySelector('label input[id=imagem]').value;
        x1.setAttribute("src", "./Imagens/greybackground.jpg");
        x1.setAttribute("id", "imgdir2");
        x1.setAttribute("alt", "greybackground");
        document.body.append(x1);*/


    }

}