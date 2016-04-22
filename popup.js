onload = function () {
    var settings = [];
    var nome = "";
    var corso = "";
    var guida2011 = "";
    var guida2012 = "";
    var guida2013 = "";
    var guida2014 = "";
    var guida2015 = "";
    var orarigenerali = "";
    var Ianno = "";
    var IIanno = "";
    var IIIanno = "";
    var esamiascelta = "";
    var avvisi = "chrome-extension://dfacmkadlejhknecpajgikjbpkghgcnh/avvisi.html";
    var esami = "";
    chrome.storage.sync.get(null, function (val) {
        setTimeout(function () {
            settings = val;



            switch (settings.corso) {
                case "inf":
                    nome = "L31 - Informatica<a href=\"options.html\" target=\"_blank\"><span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\" style=\"float: right; margin-left: 10px;\"></span></a><span class=\"glyphicon glyphicon-hdd\" aria-hidden=\"true\" style=\"float: right;\"></span>";
                    corso = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/";
                    guida2011 = "https://drive.google.com/open?id=0B57kDuNAMnKdTF9tQUlJMV9Lbmc&authuser=0";
                    guida2012 = "https://drive.google.com/open?id=0B57kDuNAMnKddWlnU3lpRE1uSVU&authuser=0";
                    guida2013 = "https://drive.google.com/open?id=0B57kDuNAMnKdamRoM3BBbjFjeHc&authuser=0";
                    guida2014 = "https://drive.google.com/open?id=0B57kDuNAMnKdSHRBMTBySkQwQ1k&authuser=0";
                    guida2015 = "https://drive.google.com/file/d/0B57kDuNAMnKdUnFZb0JFcnlSWXM/view?usp=sharing";
                    orarigenerali = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/il-calendario-delle-lezioni/";
                    Ianno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/INF-I-anno-II-semestre.pdf";
                    IIanno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/INF-II-anno-II-semestre.pdf";
                    IIIanno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/INF-III-anno-II-semestre.pdf";
                    esamiascelta = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/INF_ADE-anno-II-semestre.pdf";
                    esami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/calendario-degli-esami/";
                    break;
                case "biosan":
                    nome = "L13 - Biosanitario<a href=\"options.html\" target=\"_blank\"><span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\" style=\"float: right; margin-left: 10px;\"></span></a><span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\" style=\"float: right;\"></span>";
                    corso = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/";
                    guida2011 = "https://drive.google.com/open?id=0B57kDuNAMnKdNVJqbHgtX1g0X00&authuser=0";
                    guida2012 = "https://drive.google.com/open?id=0B57kDuNAMnKdWEpMOTdpTzJoTDg&authuser=0";
                    guida2013 = "https://drive.google.com/open?id=0B57kDuNAMnKdWGtlRS13OVlVZDA&authuser=0";
                    guida2014 = "https://drive.google.com/open?id=0B57kDuNAMnKdSmxvbzlFLXBOcXM&authuser=0";
                    guida2015 = "https://drive.google.com/file/d/0B57kDuNAMnKdSHpQMjNYNktkb2c/view?usp=sharing";
                    orarigenerali = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-delle-lezioni/";
                    Ianno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/SB-I-anno-II-semestre.pdf";
                    IIanno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/SB-II-anno-II-semestre.pdf";
                    IIIanno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/SB-III-BS-anno-II-semestre.pdf";
                    esamiascelta = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/SB_ADE-anno-II-semestre.pdf";
                    esami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-degli-esami/";
                    break;
                case "biodiv":
                    nome = "L13 - Biodiversità<a href=\"options.html\" target=\"_blank\"><span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\" style=\"float: right; margin-left: 10px;\"></span></a><span class=\"glyphicon glyphicon-leaf\" aria-hidden=\"true\" style=\"float: right;\"></span>";
                    corso = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/";
                    guida2011 = "https://drive.google.com/open?id=0B57kDuNAMnKdNVJqbHgtX1g0X00&authuser=0";
                    guida2012 = "https://drive.google.com/open?id=0B57kDuNAMnKdWEpMOTdpTzJoTDg&authuser=0";
                    guida2013 = "https://drive.google.com/open?id=0B57kDuNAMnKdWGtlRS13OVlVZDA&authuser=0";
                    guida2014 = "https://drive.google.com/open?id=0B57kDuNAMnKdSmxvbzlFLXBOcXM&authuser=0";
                    guida2015 = "https://drive.google.com/file/d/0B57kDuNAMnKdSHpQMjNYNktkb2c/view?usp=sharing";
                    orarigenerali = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-delle-lezioni/";
                    Ianno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/SB-I-anno-II-semestre.pdf";
                    IIanno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/SB-II-anno-II-semestre.pdf";
                    IIIanno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/SB-III-BD-anno-II-semestre.pdf";
                    esamiascelta = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/SB_ADE-anno-II-semestre.pdf";
                    sami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-degli-esami/";
                    break;
                default:
                    nome = "L31 - Informatica<a href=\"options.html\" target=\"_blank\"><span class=\"glyphicon glyphicon-wrench\" aria-hidden=\"true\" style=\"float: right; margin-left: 10px;\"></span></a><span class=\"glyphicon glyphicon-hdd\" aria-hidden=\"true\" style=\"float: right;\"></span>";
                    corso = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/";
                    guida2011 = "https://drive.google.com/open?id=0B57kDuNAMnKdTF9tQUlJMV9Lbmc&authuser=0";
                    guida2012 = "https://drive.google.com/open?id=0B57kDuNAMnKddWlnU3lpRE1uSVU&authuser=0";
                    guida2013 = "https://drive.google.com/open?id=0B57kDuNAMnKdamRoM3BBbjFjeHc&authuser=0";
                    guida2014 = "https://drive.google.com/open?id=0B57kDuNAMnKdSHRBMTBySkQwQ1k&authuser=0";
                    guida2015 = "https://drive.google.com/file/d/0B57kDuNAMnKdUnFZb0JFcnlSWXM/view?usp=sharing";
                    orarigenerali = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/il-calendario-delle-lezioni/";
                    Ianno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/INF-I-anno-II-semestre.pdf";
                    IIanno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/INF-II-anno-II-semestre.pdf";
                    IIIanno = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/INF-III-anno-II-semestre.pdf";
                    esamiascelta = "http://dipbioter.unimol.it/wp-content/uploads/2016/02/INF_ADE-anno-II-semestre.pdf";
                    esami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/calendario-degli-esami/";
            }

            $('.nome').html(nome);


            if (settings.vettore[0] == '1') {
                $('.link1').html('<a href="https://unimol.esse3.cineca.it/Home.do" target="_blank">Portale dello studente</a>');
                $('.link1').css({"display": "block"});
            }

            if (settings.vettore[1] == '1') {
                switch (settings.anno) {
                    case "11":
                        guida = guida2011;
                        break;
                    case "12":
                        guida = guida2012;
                        break;
                    case "13":
                        guida = guida2013;
                        break;
                    case "14":
                        guida = guida2014;
                        break;
                    case "15":
                        guida = guida2015;
                        break;
                    default:
                        guida = guida2011;
                }
                $('.link2').html('<a href="' + guida + '" class="button hvr-sweep-to-right" target="_blank">Guida dello studente</a>');
                $('.link2').css({"display": "block"});
            }

            if (settings.vettore[2] == '1') {
                $('.link3').html('<a href="http://docenti.unimol.it/" class="button hvr-sweep-to-right" target="_blank">Cerca docente</a>');
                $('.link3').css({"display": "block"});
            }


            if (settings.vettore[3] == '1') {
                $('.link4').html('<a href="' + esami + '" class="button hvr-sweep-to-right" target="_blank">Calendario esami</a>');
                $('.link4').css({"display": "block"});
            }

            if (settings.vettore[4] == '1') {
                $('.link5').html('<a href="http://www.unimol.it/" class="button hvr-sweep-to-right" target="_blank">Unimol.it</a>');
                $('.link5').css({"display": "block"});
            }

            if (settings.vettore[5] == '1') {
                $('.link6').html('<a href="' + avvisi + '" class="button hvr-sweep-to-right" target="_blank">Avvisi</a>');
                $('.link6').css({"display": "block"});
            }

            if (settings.vettore[6] == '1') {
                if (settings.anno == "11") {
                    orario = orarigenerali;
                } else if (settings.anno == "13") {
                    orario = IIIanno;
                } else if (settings.anno == "14") {
                    orario = IIanno;
                } else if (settings.anno == "15") {
                    orario = Ianno;
                } else {
                    orario = Ianno;
                }
                $('.link7').html('<a href="' + orario + '" class="button hvr-sweep-to-right" target="_blank">Orari lezioni</a>');
                $('.link7').css({"display": "block"});
            }

            if (settings.vettore[7] == '1') {
                $('.link8').html('<a href="http://dipbioter.unimol.it/il-dipartimento/" class="button hvr-sweep-to-right" target="_blank">Home Dipartimento</a>');
                $('.link8').css({"display": "block"});
            }
            if (settings.vettore[8] == '1') {
                $('.link9').html('<a href="' + settings.corso + '" class="button hvr-sweep-to-right" target="_blank">Home Corso</a>');
                $('.link9').css({"display": "block"});
            }

            if (settings.vettore[9] == '1') {
                $('.link10').html('<a href="https://www.outlook.com/studenti.unimol.it" class="button hvr-sweep-to-right" target="_blank">Mail studenti</a>');
                $('.link10').css({"display": "block"});
            }
            if (settings.vettore[10] == '1') {
                $('.link11').html('<a href="http://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=80a42838-836f-e011-971f-0030487d8897&vsro=8" class="button hvr-sweep-to-right" target="_blank">Dreamspark</a>');
                $('.link11').css({"display": "block"});
            }
            if (settings.vettore[11] == '1') {
                $('.link12').html('<a href="http://www.unimol.it/servizi/servizi-per-gli-studenti/" class="button hvr-sweep-to-right" target="_blank">Servizi</a>');
                $('.link12').css({"display": "block"});
            }
            if (settings.vettore[12] == '1') {
                $('.link13').html('<a href="http://oldweb.unimol.it/unimolise/unimol/00050007_Biblioteche.html" class="button hvr-sweep-to-right" target="_blank">Biblioteca</a>');
                $('.link13').css({"display": "block"});
            }
            if (settings.vettore[13] == '1') {
                $('.link14').html('<a href="http://www.esu.molise.it/" class="button hvr-sweep-to-right" target="_blank">Esu Molise</a>');
                $('.link14').css({"display": "block"});
            }
            if (settings.vettore[14] == '1' && settings.corso == "inf") {
                $('.link15').html('<a href="https://dibt.unimol.it/gequiz/" class="button hvr-sweep-to-right" target="_blank">GeQui</a>');
                $('.link15').css({"display": "block"});
            }

            if (settings.vettore[16] == '1') {
                $('.link17').html('<a href="' + orarigenerali + '" class="button hvr-sweep-to-right" target="_blank">Orari Lez. Generali</a>');
                $('.link17').css({"display": "block"});
            }
            if (settings.vettore[17] == '1') {
                $('.link18').html('<a href="' + esamiascelta + '" class="button hvr-sweep-to-right" target="_blank">Orari corsi a scelta</a>');
                $('.link18').css({"display": "block"});
            }
           /* if (settings.nomelink != "" && settings.urllink != "") {
                alert(settings.nomelink);
                $('.link19').html('<a href="' + settings.urllink + '" class="button hvr-sweep-to-right" target="_blank">'+settings.nomelink+'</a>');
                $('.link19').css({"display": "block"});
            }*/
            /*
             if (settings.nomelink != "" && settings.urllink != "") {
             $('.link13').html('<a class="button hvr-sweep-to-right"  href="' + settings.urllink + '" target="_blank">' + settings.nomelink + '</a>');
             $('.link13').css({"display": "block"});
             }
             */
        }, 50);
    });


    chrome.browserAction.setBadgeText({text: ""});


};
