function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('dtNasc');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img'); //CRIANDO TAG 'img' DINAMICAMENTE NO JAVASCRIPT
        img.setAttribute('id', 'foto'); //ADICIONANDO ATRIBUTO 'id='foto' NA TAG 'img' DINAMICAMENTE NO JAVASCRIPT'
        if(fsex[0].checked){ //SE MARCARDO OPÇÃO 'MASCULINO'
            genero = 'Homem';
            if(idade >= 0 && idade < 10){ //CRIANÇA
                img.setAttribute('src', 'foto-bebe-m.png');
            }else if(idade < 21){ //JOVEM
                img.setAttribute('src', 'foto-jovem-m.png');
            }else if(idade < 50){ //ADULTO
                img.setAttribute('src', 'foto-adulto-m.png');                
            }else{ //IDOSO
                img.setAttribute('src', 'foto-idoso-m.png');
            }

        }else if(fsex[1].checked){ //SE MARCARDO OPÇÃO 'FEMININO'
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){ //CRIANÇA
                img.setAttribute('src', 'foto-bebe-f.png');
            }else if(idade < 21){ //JOVEM
                img.setAttribute('src', 'foto-jovem-f.png');
            }else if(idade < 50){ //ADULTO
                img.setAttribute('src', 'foto-adulto-f.png');                
            }else{ //IDOSO
                img.setAttribute('src', 'foto-idoso-f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img); //EXIBINDO TAG 'img' DINAMICAMENTE NO JAVASCRIPT
    }
}