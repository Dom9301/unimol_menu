//SISTEMATO 

onload = function () {
    var nome = "";
    var avvisi = "chrome-extension://dfacmkadlejhknecpajgikjbpkghgcnh/avvisi.html";
    var apri = "";
    var link = "";
    chrome.storage.sync.get(null, function (impostazioni) {
        setTimeout(function () {


            //IMPOSTAZIONE LINK IN BASE AL CORSO
            function set_link() {
                corso = corsi[indice].url_corso;
                nome_corso = corsi[indice].nome;
                id = corsi[indice].id;
                icona = corsi[indice].icona;
                guida2011 = corsi[indice].url_guide.g2011_12;
                guida2012 = corsi[indice].url_guide.g2012_13;
                guida2013 = corsi[indice].url_guide.g2013_14;
                guida2014 = corsi[indice].url_guide.g2014_15;
                guida2015 = corsi[indice].url_guide.g2015_16;
                guida2016 = corsi[indice].url_guide.g2016_17;
                orarigenerali = corsi[indice].url_orari;
                Ianno = corsi[indice].url_orario.primo_anno;
                IIanno = corsi[indice].url_orario.secondo_anno;
                IIIanno = corsi[indice].url_orario.terzo_anno;
                esamiascelta = corsi[indice].url_esami_ade;
                esami = corsi[indice].url_esami;
            }


            //SELEZIONE CORSO
            switch (impostazioni.corso) {
                case "l_informatica":
                    indice = 0;
                    set_link();
                    break;
                case "l_biosanitaria":
                    indice = 1;
                    set_link();
                    break;
                case "l_biodiversita":
                    indice = 2;
                    set_link();
                    break;
                case "lm_informatica":
                    indice = 3;
                    set_link();
                    break;
                case "lm_biosanitaria":
                    indice = 4;
                    set_link();
                    break;
                case "lm_biodiversita":
                    indice = 5;
                    set_link();
                    break;
                default:
                    indice = 0;
                    set_link();
            }

            nome = id + " " + nome_corso + " " + '<a class="info_btn" href="/home.html" target="_blank"><span class="glyphicon glyphicon-wrench" aria-hidden="true" style="float: right; margin-left: 10px;"></span></a><span class="glyphicon ' + icona + '" aria-hidden="true" style="float: right;"></span>';

            $('.nome').html(nome);

            //PORTALE STUDENTE
            if (impostazioni.vettore[0] == '1') {
                $('.link1').html('<a href="https://unimol.esse3.cineca.it/Home.do" ' + apri + '>Portale dello studente</a>');
                $('.link1').css({
                    "display": "block"
                });
            }

            //IMPOSTAZIONE APERTURA LINK (TARGET BLANK, per capirci)
            if (impostazioni.link_nuova_pagina == "1") {
                apri = 'target="_blank"';
            } else {
                apri = '';
                $("a").click(function () {
                    chrome.tabs.query({
                            'active': true,
                            'windowId': chrome.windows.WINDOW_ID_CURRENT
                        },
                        function (tabs) {
                            chrome.tabs.update(
                                tabs[0].id, {
                                    'url': link
                                });
                            window.close();
                        });
                });
                $(".info_btn").click(function () {
                    chrome.tabs.query({
                            'active': true,
                            'windowId': chrome.windows.WINDOW_ID_CURRENT
                        },
                        function (tabs) {
                            chrome.tabs.update(
                                tabs[0].id, {
                                    'url': link
                                });
                            window.close();
                        }
                    );
                });
            }

            //GUIDE STUDENTE
            if (impostazioni.vettore[1] == '1') {
                switch (impostazioni.anno) {
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
                    case "16":
                        guida = guida2016;
                        break;
                    default:
                        guida = guida2011;
                }
                $('.link2').html('<a href="' + guida + '" class="button hvr-sweep-to-right" ' + apri + '>Guida dello studente</a>');
                $('.link2').css({
                    "display": "block"
                });
            }

            //CERCA DOCENTE
            if (impostazioni.vettore[2] == '1') {
                $('.link3').html('<a href="http://docenti.unimol.it/" class="button hvr-sweep-to-right" ' + apri + '>Cerca docente</a>');
                $('.link3').css({
                    "display": "block"
                });
            }

            //CALENDARIO ESAMI
            if (impostazioni.vettore[3] == '1') {
                $('.link4').html('<a href="' + esami + '" class="button hvr-sweep-to-right" ' + apri + '>Calendario esami</a>');
                $('.link4').css({
                    "display": "block"
                });
            }

            //UNIMOL.IT
            if (impostazioni.vettore[4] == '1') {
                $('.link5').html('<a href="http://www.unimol.it/" class="button hvr-sweep-to-right" ' + apri + '>Unimol.it</a>');
                $('.link5').css({
                    "display": "block"
                });
            }

            //AVVISI
            if (impostazioni.vettore[5] == '1') {
                $('.link6').html('<a href="' + avvisi + '" class="button hvr-sweep-to-right" ' + apri + '>Avvisi</a>');
                $('.link6').css({
                    "display": "block"
                });
            }

            //ORARI LEZIONI
            if (impostazioni.vettore[6] == '1') {
                if (impostazioni.anno == "14") {
                    orario = IIIanno;
                } else if (impostazioni.anno == "15") {
                    orario = IIanno;
                } else if (impostazioni.anno == "16") {
                    orario = Ianno;
                } else {
                    orario = Ianno;
                }
                $('.link7').html('<a href="' + orario + '" class="button hvr-sweep-to-right" ' + apri + '>Orari lezioni</a>');
                $('.link7').css({
                    "display": "block"
                });
            }

            //HOME DIPARTIMENTO
            if (impostazioni.vettore[7] == '1') {
                $('.link8').html('<a href="http://dipbioter.unimol.it/il-dipartimento/" class="button hvr-sweep-to-right" ' + apri + '>Home Dipartimento</a>');
                $('.link8').css({
                    "display": "block"
                });
            }

            //HOME CORSO
            if (impostazioni.vettore[8] == '1') {
                $('.link9').html('<a href="' + corso + '" class="button hvr-sweep-to-right" ' + apri + '>Home Corso</a>');
                $('.link9').css({
                    "display": "block"
                });
            }

            //MAIL STUDENTI
            if (impostazioni.vettore[9] == '1') {
                $('.link10').html('<a href="https://www.outlook.com/studenti.unimol.it" class="button hvr-sweep-to-right" ' + apri + '>Mail studenti</a>');
                $('.link10').css({
                    "display": "block"
                });
            }

            //MICROSOFT IMAGINE
            if (impostazioni.vettore[10] == '1') {
                $('.link11').html('<a href="http://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=80a42838-836f-e011-971f-0030487d8897&vsro=8" class="button hvr-sweep-to-right" ' + apri + '>Microsoft Imagine</a>');
                $('.link11').css({
                    "display": "block"
                });
            }

            //SERVIZI
            if (impostazioni.vettore[11] == '1') {
                $('.link12').html('<a href="http://www.unimol.it/servizi/servizi-per-gli-studenti/" class="button hvr-sweep-to-right" ' + apri + '>Servizi</a>');
                $('.link12').css({
                    "display": "block"
                });
            }

            //BIBLIOTECA
            if (impostazioni.vettore[12] == '1') {
                $('.link13').html('<a href="http://oldweb.unimol.it/unimolise/unimol/00050007_Biblioteche.html" class="button hvr-sweep-to-right" ' + apri + '>Biblioteca</a>');
                $('.link13').css({
                    "display": "block"
                });
            }

            //ESU MOLISE
            if (impostazioni.vettore[13] == '1') {
                $('.link14').html('<a href="http://www.esu.molise.it/" class="button hvr-sweep-to-right" ' + apri + '>ESU Molise</a>');
                $('.link14').css({
                    "display": "block"
                });
            }

            //GEQUI
            if (impostazioni.vettore[14] == '1' && impostazioni.corso == "inf") {
                $('.link15').html('<a href="https://dibt.unimol.it/gequiz/" class="button hvr-sweep-to-right" ' + apri + '>GeQui</a>');
                $('.link15').css({
                    "display": "block"
                });
            }

            //ORARI LEZIONI GENERALI
            if (impostazioni.vettore[16] == '1') {
                $('.link17').html('<a href="' + orarigenerali + '" class="button hvr-sweep-to-right" ' + apri + '>Orari Lez. Generali</a>');
                $('.link17').css({
                    "display": "block"
                });
            }

            //ORARI ADE
            if (impostazioni.vettore[17] == '1') {
                $('.link18').html('<a href="' + esamiascelta + '" class="button hvr-sweep-to-right" ' + apri + '>Orari corsi a scelta</a>');
                $('.link18').css({
                    "display": "block"
                });
            }


            $("a").click(function () {
                var myClass = this.className;
                if (myClass.indexOf("link1") != -1) {
                    link = "https://unimol.esse3.cineca.it/Home.do";
                }
                if (myClass.indexOf("link2") != -1) {
                    link = guida;
                }
                if (myClass.indexOf("link3") != -1) {
                    link = "http://docenti.unimol.it/";
                }
                if (myClass.indexOf("link4") != -1) {
                    link = esami;
                }

                if (myClass.indexOf("link5") != -1) {
                    link = "http://www.unimol.it/";
                }

                if (myClass.indexOf("link6") != -1) {
                    link = avvisi;
                }

                if (myClass.indexOf("link7") != -1) {
                    link = orario;
                }

                if (myClass.indexOf("link8") != -1) {
                    link = "http://dipbioter.unimol.it/il-dipartimento/";
                }

                if (myClass.indexOf("link9") != -1) {
                    link = corso;
                }

                if (myClass.indexOf("link10") != -1) {
                    link = "https://www.outlook.com/studenti.unimol.it";
                }

                if (myClass.indexOf("link11") != -1) {
                    link = "http://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=80a42838-836f-e011-971f-0030487d8897&vsro=8";
                }
                if (myClass.indexOf("link12") != -1) {
                    link = "http://www.unimol.it/servizi/servizi-per-gli-studenti/";
                }
                if (myClass.indexOf("link13") != -1) {
                    link = "http://oldweb.unimol.it/unimolise/unimol/00050007_Biblioteche.html";
                }
                if (myClass.indexOf("link14") != -1) {
                    link = "http://www.esu.molise.it/";
                }
                if (myClass.indexOf("link15") != -1) {
                    link = "https://dibt.unimol.it/gequiz/";
                }
                if (myClass.indexOf("link16") != -1) {
                    link = orarigenerali;
                }
                if (myClass.indexOf("link17") != -1) {
                    link = orarigenerali;
                }
                if (myClass.indexOf("link18") != -1) {
                    link = esamiascelta;
                }

                /*if (myClass.indexOf("info_btn") != -1) {
                 link = "http://google.it";
                 }*/
            });


        }, 1);
    });
};