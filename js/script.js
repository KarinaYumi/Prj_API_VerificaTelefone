let btn = document.querySelector('button')

btn.addEventListener('click', function(event){

    event.preventDefault()

    let input = document.querySelector('#tel');
    let valor = input.value

    if (/^\d{13}$/.test(valor)) {
        let url = `https://api.veriphone.io/v2/verify?phone=%2B${valor}&key=F5D9BF70C8234B039E950664551923BB`;
        
        fetch(url)
            .then(function(response){
                return response.json()
            })
            .then(function(response){
                let div = document.querySelector('.api');
                while (div.firstChild) {
                    div.removeChild(div.firstChild);
                }

                let tagsACriar = ['p','p', 'p', 'p']

                tagsACriar.forEach(element => {
                    let tag = criarElemento(element);
                    incluirNaTela(tag, div);
                });
                
                editarTds(response, div.children);
            })
    } else {
        alert("O número deve ter exatamente 13 dígitos.");
    }
})

function criarElemento(element){
    let tag = document.createElement(element);
    return tag;
}

function incluirNaTela(element, div){
    div.appendChild(element);
}

function editarTds(response, tags){
    if(response.status === 'success'){
        response.status = 'Ativo'
    }
    tags[0].textContent = response.status;
    tags[1].textContent = response.phone;
    tags[2].textContent = response.country;
    tags[3].textContent = response.phone_region;
}
