$(document).ready(
        function () {
                $("#btn-executar").click(chamarAPI);
        });

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
        console.log('o Valor de CE Total Esperado é: ' + vCEtotalesp.toFixed(2) + '<br/>')
}