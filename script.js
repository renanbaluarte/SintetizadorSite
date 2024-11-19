var mostra = 0;

function info() {
var place = document.getElementById("lugar")

if (mostra == 0){
    mostra = 1;
    place.innerHTML = `<div>
    <b>O sintetizador musical é um instrumento eletrônico</b> que cria sons manipulando sinais de áudio por meio de circuitos eletrônicos, em vez de usar vibrações físicas como instrumentos tradicionais. Nos anos 90, ele se tornou essencial em gêneros como música eletrônica, pop e dance, com sintetizadores digitais como o Roland JP-8000 e o Korg M1 ganhando destaque. <br>

    <a href="https://pt.wikipedia.org/wiki/Giorgio_Moroder" target="_blank"><b>Giorgio Moroder</b></a>, pioneiro do uso criativo de sintetizadores, foi fundamental para moldar a música eletrônica e dance. Nos anos 90, sua influência ainda era forte, especialmente na música dance e no eurodance, com grupos como Ace of Base e 2 Unlimited usando sintetizadores para criar batidas cativantes e melodias dançantes.
    <br>

    Além disso, o synthpop continuou a evoluir, com bandas como Depeche Mode e New Order explorando sons mais emocionais e atmosféricos. O sintetizador também foi essencial para artistas como Moby, que mesclaram eletrônica com toques mais introspectivos.

    Em resumo, o sintetizador foi uma ferramenta chave nos anos 90, ajudando a definir o som da década e deixando um legado que continua a influenciar a música até hoje.
    
    <hr>
    
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/p7o4qgEtbLU?si=hnk0rGBW2dPFOLBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    </div>`
}else if (mostra == 1){
    place.innerHTML = ``;
    mostra = 0;
};

};

