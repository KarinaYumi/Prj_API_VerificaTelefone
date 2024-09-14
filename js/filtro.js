var btnHist = document.querySelector('button');
var Array = [];

btnHist.addEventListener('click', function(){

    var input = document.querySelector('#tel').value;
    Array.push(input); 
    console.log(Array);

    //Array aparecer na tela
    let div = document.querySelector('#array');

    div.innerHTML = '';

    //Criação da lista a cada valor inserido

    let ul = document.createElement('ul');

    Array.forEach(function(valor) {
        let li = document.createElement('li');
        li.textContent = valor;
        ul.appendChild(li);
    });

    div.appendChild(ul);
});
