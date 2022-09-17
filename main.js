$(document).ready(
        function () {
                $("#btn-executar").click(chamarAPI);

               
        });


//documentação:
//https://developers.google.com/chart/interactive/docs/gallery/bubblechart?hl=pt-br
function drawSeriesChart(intraempreendedorismoX, intraempreendedorismoY, agilidadeX, agilidadeY) {

        var data = google.visualization.arrayToDataTable([
                ['Dimensão', 'Média da Variável', 'Efeito da variável'],
                ['intraempreendedorismo', intraempreendedorismoX, intraempreendedorismoY],
                ['agilidade', agilidadeX, agilidadeY]
        ]);

        var options = {
                title: 'Efeito da Variável (importância) x Média da Variável (performance).',
                hAxis: { title: 'Efeito da Variável (importância)', viewWindow: {max: 10} },
                vAxis: { title: 'Média da Variável (performance)', viewWindow: {max: 10}  },
                bubble: { textStyle: { fontSize: 11 } },
                explorer: { maxZoomOut: 2 },
                colorAxis: {colors: ['yellow', 'red']}
        };

        var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
        chart.draw(data, options);
}

function chamarAPI() {

        //Inputs
        var vRE = $("#RE").val(); // Renovação estratégica
        var vRN = $("#RN").val(); // Relacionado ao negócio
        var vAG = $("#AG").val(); // Agilidade

        //intraempreendedorismo
        var vINTRA = 0
        vINTRA = (((vRE * 0.9) + (vRN * 0.905)) / 2)
        $("#IE").val(vINTRA.toFixed(2));
        console.log('o Valor de INTRA é: ' + vINTRA.toFixed(2) + '<br/>')

        //intraempreendedorismo Direto
        var vINTRAdir = 0.065
        console.log('o Valor de INTRA Direto é: ' + vINTRAdir + '<br/>')

        //intraempreendedorismo indireto
        var vINTRAind = (0.351 * 0.387)
        console.log('o Valor de INTRA Indireto é: ' + vINTRAind.toFixed(3) + '<br/>')

        //intraempreendedorismo Total
        var vINTRAtot = (vINTRAdir + vINTRAind)
        console.log('o Valor de INTRA Total é: ' + vINTRAtot.toFixed(3) + '<br/>')

        //intraempreendedorismo média esperada
        var vINTRAmedesp = (vINTRA * vINTRAtot)
        console.log('o Valor de INTRA Média Esperada é: ' + vINTRAmedesp.toFixed(3) + '<br/>')

        //Agilidade
        //Agilidade média esperada
        var vAGILmedesp = (vAG * 0.387)
        console.log('o Valor de AGIL Média Esperada é: ' + vAGILmedesp.toFixed(3) + '<br/>')

        //Coesão da Equipe
        //Coesão da Equipe Total Esperado
        var vCEtotalesp = (vINTRAmedesp + vAGILmedesp)
        $("#TECE").val(vCEtotalesp.toFixed(2));
        console.log('o Valor de CE Total Esperado é: ' + vCEtotalesp.toFixed(2) + '<br/>')

        //joga valores na tabela 1
        let tableBody = $("#tb_valores")
        tableBody.html("")
        let linha = "<tr><td>INTRAEMPREENDEDORISMO</td><td>" + vINTRAdir.toFixed(3) + "</td><td>" + vINTRAind.toFixed(3) + "</td><td>" + vINTRAtot.toFixed(3) + " </td><td>" + vINTRAmedesp.toFixed(3) + "</td></tr>";
        tableBody.append(linha);
        let linha2 = "<tr><td>RENOVAÇÃO ESTRATÉGICA</td><td></td><td></td><td></td><td></td></tr>";
        tableBody.append(linha2);
        let linha3 = "<tr><td>RELACIONADO AO NEGÓCIO</td><td></td><td></td><td></td><td></td></tr>";
        tableBody.append(linha3)
        let linha4 = "<tr><td>AGILIDADE</td><td>0,387</td><td> </td><td>0,387</td><td>" + vAGILmedesp.toFixed(3) + "</td></tr>";
        tableBody.append(linha4)

        //joga valores na tabela 2
        let tableBody2 = $("#tb_valores_finais")
        tableBody2.html("")
        let linha5 = "<tr><td>INTRAEMPREENDEDORISMO</td><td>0,201</td><td>" + vINTRA.toFixed(3) + "</td>";
        tableBody2.append(linha5);
        let linha6 = "<tr><td>AGILIDADE</td><td>0,387</td><td>" + vAG + "</td>";
        tableBody2.append(linha6);

        google.charts.load('current', { packages: ['corechart'] });
        google.charts.setOnLoadCallback(() => drawSeriesChart(vINTRAdir,vINTRAind, 0.387,vAG ));
}
