/**
 * Created by Dom9301 on 21/04/2016.
 */
onload = function () {
    var nome = "", anno_accedemico = "", anno_regolamento = "", carriera = "";
    var xhr = new XMLHttpRequest();
    var i;
    xhr.open("POST", "https://unimol.esse3.cineca.it/auth/Logon.do?username=USERNAME&password=PASSWORD", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            //nome_utente = $(xhr.responseText).find("#gu-header h1").html();
            nome_utente = $(xhr.responseText).find("description").html();
            //contenuto_pagina_unimol = $(xhr.responseText).find("#column1of1").html();
            info_studente = $(xhr.responseText).find(".portlet-font").html();
            info_studente2 = $(xhr.responseText).find("#gu-textStatusStudenteCorsoFac").html();
            info_studente3 = $(xhr.responseText).find(".text-align-left").html();
            console.log("asdasd "+info_studente3);
            for (i = 0; i <= 138; i++) {
                if (i > 18 && i < 28) {
                    anno_accedemico = anno_accedemico + info_studente[i];
                }
                if (i > 59 && i < 64) {
                    anno_regolamento = anno_regolamento + info_studente[i];
                }
                if (i > 90 && i < 97) {
                    carriera = carriera + info_studente[i];
                }

            }

            /*for (i = 0; i <= info_studente3.length; i++){
                if
                corso =
            }*/

            $("nome").append(nome_utente.replace(/&nbsp;/gi, ' '));
            $("anno_accademico_corrente").append(anno_accedemico);
            $("anno_regolamento").append(anno_regolamento);
            $("carriera").append(carriera);
        }
    };
    xhr.send();
};

//Anno Accademico:<b>2015/2016<br></b>Anno di Regolamento:<b>2011<br></b>Stato Carriera:<b>attivo</b><img src="images/stato_esito_a.gif">
