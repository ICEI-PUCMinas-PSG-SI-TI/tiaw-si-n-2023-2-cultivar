let conectarBtn = document.getElementById("conectar");
let pesquisaPlantasEl = document.getElementById('pesquisar');
let contentPlantsEl = document.getElementById('content-plants');

pesquisaPlantasEl.addEventListener('keyup', pesquisa_plantas);


function pesquisa_plantas(){

  let pesquisarEl = document.getElementById('pesquisar').value;
  let divstitulosEl = document.querySelectorAll('.plants');
  let titulosEl = document.querySelectorAll('.text-div');
  pesquisarEl = pesquisarEl.toLowerCase();


  for(var aux = 0; aux < titulosEl.length; aux++){
    //divstitulosEl[aux].style.animation='';
    if(!titulosEl[aux].innerHTML.toLowerCase().includes(pesquisarEl)){
      divstitulosEl[aux].style.display= 'none';
    }
    else{
      divstitulosEl[aux].style.display= 'flex';
      divstitulosEl[aux].style.animation='pesquisa 0.3s 2 alternate';
      divstitulosEl[aux].addEventListener("animationend", function(e){
        if(e.type =="animationend"){
          e.target.style.animation ='';
        }
      });
    }
  }
}
gera_cards();
function gera_cards(){
  let dados = set_dados();
  let strHtml ='';
  let strAside ='';
  let menuAsideEl = document.getElementById("menu-aside");
  let contentPlatnsEl = document.getElementById("content-plants");
  let img = document.createElement('img');
  
  // Adiciona o elemento de imagem ao documento
  /*
  <div class="plants">
  <div id="plant1"><img src="imgs/girassol.jpg"></div>
      <p class="text-div">O girassol é uma planta originária da América do Norte e da América Central. Seu nome científico é Helianthus annuus L. e faz parte da família das Compositae, também conhecidas como margaridas. É uma espécie anual, com caule grosso, ereto, robusto, de rápido crescimento e tem poucas ramificações no ápice.</p>
    </div>
    <a href="#plant1">
    <li class="plants-aside">Girassol</li>
    </a>
    */
  for(let i = 0; i < dados.length; i++){
    strHtml += `<div class="plants"><div id="plant${i+1}" class="imagens_plantas"><img src="../${dados[i].foto}"></div><div class="text-div"><h4>${dados[i].nome}:</h4><p>${dados[i].resumo}</p><div class="botoes"><a href="cultivar.html?${i+1}"><button id="cultivar-${i+1}">CULTIVAR</button></a><a href="rcGirassol.html"><button id="receita-${i+1}">RECEITAS</button></a></div></div></div>`;
    strAside += `<a href="#plant${i+1}"><li class ="plants-aside">${dados[i].nome}</li></a>`;
  }
  menuAsideEl.innerHTML = strAside;
  contentPlantsEl.innerHTML = strHtml;
}

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
        "descricao": "Os girassóis são plantas anuais ou perenes que em algumas espécies podem crescer até uma altura de 300 centímetros (120 polegadas) ou mais5. Eles são fáceis de cuidar, mas requerem muita água para prosperar. <p>Para começar, escolha um local ensolarado em seu jardim. Os girassóis crescem melhor em locais com luz solar direta (6 a 8 horas por dia); eles requerem verões longos e quentes para florescer bem. Selecione uma área abrigada de ventos fortes que possam derrubar essas plantas altas, se possível. Pode ser útil plantar girassóis em grupos para se apoiarem contra o vento e a chuva.</p><p>Os girassóis crescerão em quase qualquer solo, incluindo solos pobres e secos. No entanto, eles prosperam em solo bem drenado que contém uma boa quantidade de matéria orgânica8. Embora tolerantes a condições secas, a rega regular dos girassóis promove a floração, pois a floração geralmente reduz durante períodos de seca.</p><p>As sementes de girassol precisam ser regadas regularmente, especialmente durante os estágios iniciais de crescimento. Regá-las pelo menos duas vezes ao dia e com mais frequência em condições quentes ou secas é recomendado9. No entanto, é importante regá-las adequadamente, o que pode levar à podridão das raízes e outros problemas.</p><p>Além disso, os girassóis não gostam de competir com as ervas daninhas, então mantenha o jardim limpo. A cobertura morta ao redor de seus girassóis ajudará a manter a umidade do solo e a supressão de ervas daninhas8. Além disso, a vida selvagem costuma ser atraída por mudas de girassol. Portanto, é melhor proteger as mudas com coberturas de fileira ou tela, removendo a cobertura assim que as plantas tiverem de 1 a 2 pés de altura.</p>",
        "altura": " 6 ~ 10 pés",
        "diasSemPoda": "2 vezes por ano",
        "diasSemRegas": "1 vez por semana",
        "tempoLuz": "6 horas, 8 horas, 90℉ (32℃)",
        "foto": "assets/girassol.jpg"
      },
      {
        "nome": "Orquídea",
        "resumo": "Orquídeas são todas as plantas que compõem a família Orchidaceae, pertencente à ordem Asparagales, uma das maiores famílias de plantas existentes. Apresentam muitíssimas e variadas formas, cores e tamanhos e existem em todos os continentes, exceto na Antártida, predominando nas áreas tropicais.",
        "descricao": "Cultivar orquídeas pode ser um processo gratificante. Aqui estão algumas dicas para ajudá-lo a começar:<p><strong>1. Escolha o local certo:</strong> As orquídeas precisam de muita luz, mas não luz solar direta. Uma janela voltada para o leste ou oeste é ideal. Elas também precisam de um local bem ventilado.</p><p><strong>2. Rega adequada:</strong> As orquídeas devem ser regadas regularmente, mas não em excesso. Uma boa regra é regar uma vez por semana. No entanto, isso pode variar dependendo do clima e do tipo de orquídea.</p><p><strong> 3.Cuidado com o solo:</strong> As orquídeas preferem um solo bem drenado. Muitas orquídeas prosperam em cascas de árvores ou musgo esfagno em vez de solo tradicional.</p><p><strong>4. Fertilizante:</strong> As orquídeas se beneficiam da alimentação regular com um fertilizante equilibrado. Procure um fertilizante que contenha nitrogênio, fósforo e potássio para o melhor crescimento.</p><p><strong>5. Poda:</strong> A poda regular ajuda a manter a planta saudável. Isso deve ser feito pelo menos duas vezes por ano.</p>",
        "altura": "2 milímetros (menor), 3 metros (maior)",
        "diasSemPoda": "2 vezes por ano",
        "diasSemRegas": "1 vez por semana",
        "tempoLuz": "6 a 8 horas por dia",
        "foto": "assets/orquidea.jpg"
      }, 
      {
        "nome": "arroz",
        "resumo": "O arroz é uma planta da família das gramíneas que alimenta mais da metade da população humana do mundo. É a terceira maior cultura cerealífera do mundo, apenas ultrapassada pelas de milho e trigo. É rico em hidratos de carbono.",
        "descricao": "O arroz é uma planta que gosta de muita água e luz solar. Aqui estão algumas dicas para cultivar arroz:<p><strong>1. Escolha o local certo:</strong> O arroz precisa de muita luz, mas não luz solar direta. Uma janela voltada para o leste ou oeste é ideal. Eles também precisam de um local bem ventilado2.</p><p><strong>2. Rega adequada:</strong> O arroz deve ser regado regularmente, mas não em excesso. Uma boa regra é regar uma vez por semana. No entanto, isso pode variar dependendo do clima e do tipo de arroz2.</p><p><strong> 3.Cuidado com o solo:</strong> O arroz prefere um solo bem drenado. Muitos arrozes prosperam em cascas de árvores ou musgo esfagno em vez de solo tradicional2.</p><p><strong> 4.Fertilizante:</strong> O arroz se beneficia da alimentação regular com um fertilizante equilibrado. Procure um fertilizante que contenha nitrogênio, fósforo e potássio para o melhor crescimento2.</p><p><strong> 5.Poda:</strong> A poda regular ajuda a manter a planta saudável. Isso deve ser feito pelo menos duas vezes por ano.<strong><p>Lembre-se, cada tipo de arroz pode ter suas próprias necessidades específicas, então é sempre uma boa ideia pesquisar sobre o tipo específico de arroz que você está cultivando. Boa sorte com seu arroz!</p>",
        "altura": "0,4m (menor), 5m (maior), 1 a 1,8m (geral), 72,2cm e 65,5cm (estágio de bota)",
        "diasSemPoda": "1 vez por ano",
        "diasSemRegas": "Continuamente inundado até 7 a 10 dias antes da colheita",
        "tempoLuz": "6 a 8 horas por dia",
        "foto": "assets/arroz.jpg"
      },
      {
        "nome": "Feijão",
        "resumo": "Feijão é um nome comum para uma grande variedade de sementes de plantas de alguns gêneros da família Fabaceae. Proporciona nutrientes essenciais como proteínas, ferro, cálcio, vitaminas, carboidratos e fibras. A combinação de arroz com feijão é típica da culinária do Brasil e da América Central.",
        "descricao": "O feijão é uma planta que gosta de muita água e luz solar. Aqui estão algumas dicas para cultivar feijão:<p><strong>1. Escolha o local certo:</strong> O feijão precisa de muita luz, mas não luz solar direta. Uma janela voltada para o leste ou oeste é ideal. Eles também precisam de um local bem ventilado.</p><p><strong>2. Rega adequada:</strong> O feijão deve ser regado regularmente, mas não em excesso. Uma boa regra é regar uma vez por semana. No entanto, isso pode variar dependendo do clima e do tipo de feijão.</p><p><strong>3. Cuidado com o solo:</strong> O feijão prefere um solo bem drenado. Muitos feijões prosperam em cascas de árvores ou musgo esfagno em vez de solo tradicional.</p><p><strong>4. Fertilizante:</strong> O feijão se beneficia da alimentação regular com um fertilizante equilibrado. Procure um fertilizante que contenha nitrogênio, fósforo e potássio para o melhor crescimento.</p><p><strong>5. Poda:</strong> A poda regular ajuda a manter a planta saudável. Isso deve ser feito pelo menos duas vezes por ano.</p><p>Lembre-se, cada tipo de feijão pode ter suas próprias necessidades específicas, então é sempre uma boa ideia pesquisar sobre o tipo específico de feijão que você está cultivando. Boa sorte com seu feijão!</p>",
        "altura": "0,4m (menor), 5m (maior), 1 a 1,8m (geral), 72,2cm e 65,5cm (estágio de bota).",
        "diasSemPoda": "1 vez por ano.",
        "diasSemRegas": "Continuamente inundado até 7 a 10 dias antes da colheita.",
        "tempoLuz": "6 a 8 horas por dia.",
        "foto": "assets/feijao.jpeg"
      }
    ];
    localStorage.setItem('plantas', JSON.stringify(objDados));
  }

  return objDados;
}