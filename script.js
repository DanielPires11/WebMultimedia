//alert("O JS está a funcionar");

/*let BtnEle = document.querySelector(".Btn");
   let resEle = document.querySelector(".result");
   let boolVal = true;
   resEle.innerHTML = boolVal;
   BtnEle.addEventListener("click", () => {
      boolVal = !boolVal;
      resEle.innerHTML = boolVal;
   });*/

function myFunction() {


    var i = Math.floor(Math.random() * 2);
    
    if(i == 0) {
        var x1 = document.createElement("IMG");
        x1.setAttribute("src", "./Imagens/greybackground.jpg");
        x1.setAttribute("id", "imgesq2");
        x1.setAttribute("alt", "greybackground");
        document.body.append(x1);

        var x = document.createElement("ARTICLE");
        x.setAttribute("id", "myArticle");
        document.body.append(x);
  
        var heading = document.createElement("H2");
        var txt1 = document.createTextNode("Teste Titulo");
        heading.appendChild(txt1);
        document.getElementById("myArticle").append(heading);
  
        var para = document.createElement("P");
        var txt2 = document.createTextNode("Teste Texto");
        para.appendChild(txt2);
        document.getElementById("myArticle").append(para);

    } else {
        var x = document.createElement("ARTICLE");
        x.setAttribute("id", "myArticle2");
        document.body.appendChild(x);
  
        var heading = document.createElement("H2");
        var txt1 = document.createTextNode("Teste Titulo");
        heading.appendChild(txt1);
        document.getElementById("myArticle2").appendChild(heading);
  
        var para = document.createElement("P");
        var txt2 = document.createTextNode("Teste Texto");
        para.appendChild(txt2);
        document.getElementById("myArticle2").appendChild(para);

        var x1 = document.createElement("IMG");
        x1.setAttribute("src", "./Imagens/greybackground.jpg");
        x1.setAttribute("id", "imgdir2");
        x1.setAttribute("alt", "greybackground");
        document.body.appendChild(x1);

    }

}