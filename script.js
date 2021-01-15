window.addEventListener('load',function(){
    let input2=document.getElementsByTagName('input');
    let elem2 = input2[1].outerHTML;
})

function updateTotal(){
    
    let lines = document.querySelectorAll('table tr')
    for (let i=1 ; i<lines.length; i++){
        let input = lines[i].getElementsByTagName('input')[0]
        console.log(lines[i].innerHTML)
    }
    let span = document.getElementById('total')
    span.innerHTML= total
}
window.addEventListener('submit', function(){
    let line= document.createElement('tr')
    let description = document.querySelector('form input[name=description]').value
    let quantity =  document.querySelector('form input[name=quantity]').value
    
    line.innerHTML='<tr>'+
                    '<td>'+ description + '</td>' +
                    '<td><input value="' + quantity + '"></td>' +
                    '<td><input type="button" value="Remove"></td>'+
                    '</tr>'
    let table = document.getElementById('products')
    table.append(line)
    
    let remove = line.querySelector('input[type=button]')
    remove.addEventListener('click', function(){
        // remover o elemento dois niveis a cima: tr/td
        this.parentNode.parentNode.remove()
    })
    event.preventDefault()
})