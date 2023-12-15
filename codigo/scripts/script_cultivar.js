let dados = set_dados();
let url = window.location.href;
let plantaUrl = url.split('?')[1];

let imagemEl = document.getElementById('imagem');
let infosEl = document.getElementById('descricao');

    infosEl.innerHTML += `<p><strong>NOME: </strong> ${dados[plantaUrl-1].nome}</p>`;
    infosEl.innerHTML += `<p><strong>ALTURA: </strong> ${dados[plantaUrl-1].altura}</p>`;
    infosEl.innerHTML += `<p><strong>DIAS SEM PODAS: </strong> ${dados[plantaUrl-1].diasSemPoda}</p>`;
    infosEl.innerHTML += `<p><strong>DIAS SEM REGAS: </strong> ${dados[plantaUrl-1].diasSemRegas}</p>`;
    infosEl.innerHTML += `<p><strong>LUZ SOLAR: </strong> ${dados[plantaUrl-1].tempoLuz}</p>`;

imagemEl.src = `${dados[plantaUrl-1].foto}`;

let descricaoEl = document.getElementById('content-infos');
descricaoEl.innerHTML += `<p><strong>RESUMO: </strong>${dados[plantaUrl-1].resumo}</p>`; 
descricaoEl.innerHTML += `<p><strong>CULTIVO: </strong>${dados[plantaUrl-1].descricao}</p>`; 

function set_dados(){
    let strDados = localStorage.getItem('plantas');
    let objDados = {};
  
    if(strDados){
      objDados = JSON.parse(strDados);
    }
    else{
      objDados = [
        {
          "nome": "Girassol",
          "resumo": "O girassol é uma planta originária da América do Norte e da América Central. Seu nome científico é Helianthus annuus L. e faz parte da família das Compositae, também conhecidas como margaridas. É uma espécie anual, com caule grosso, ereto, robusto, de rápido crescimento e tem poucas ramificações no ápice.",
          "descricao": "",
          "altura": "",
          "diasSemPoda": "",
          "diasSemRegas": "",
          "tempoLuz": "",
          "foto": "imgs/girassol.jpg"
        },
        {
          "nome": "Orquídea",
          "resumo": "Orquídeas são todas as plantas que compõem a família Orchidaceae, pertencente à ordem Asparagales, uma das maiores famílias de plantas existentes. Apresentam muitíssimas e variadas formas, cores e tamanhos e existem em todos os continentes, exceto na Antártida, predominando nas áreas tropicais.",
          "descricao": "",
          "altura": "",
          "diasSemPoda": "",
          "diasSemRegas": "",
          "tempoLuz": "",
          "foto": "imgs/orquidea.jpg"
        }, 
        {
          "nome": "arroz",
          "resumo": "O arroz é uma planta da família das gramíneas que alimenta mais da metade da população humana do mundo. É a terceira maior cultura cerealífera do mundo, apenas ultrapassada pelas de milho e trigo. É rico em hidratos de carbono.",
          "descricao": "",
          "altura": "",
          "diasSemPoda": "",
          "diasSemRegas": "",
          "tempoLuz": "",
          "foto": "imgs/arroz.jpg"
        },
        {
          "nome": "Feijão",
          "resumo": "Feijão é um nome comum para uma grande variedade de sementes de plantas de alguns gêneros da família Fabaceae. Proporciona nutrientes essenciais como proteínas, ferro, cálcio, vitaminas, carboidratos e fibras. A combinação de arroz com feijão é típica da culinária do Brasil e da América Central.",
          "descricao": "",
          "altura": "",
          "diasSemPoda": "",
          "diasSemRegas": "",
          "tempoLuz": "",
          "foto": "imgs/feijao.jpeg"
        }
      ];
      localStorage.setItem('plantas', JSON.stringify(objDados));
    }
  
    return objDados;
}