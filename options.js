onload = function () {
    var contenuto_pagina_unimol;
    var xhr = new XMLHttpRequest();
    var urlfetch;
    var settings = [];

    var vettorelink = new Array("link1", "link2", "link3", "link4", "link5", "link6", "link7", "link8", "link9", "link10", "link11", "link12", "link13", "link14", "link15", "link16", "link17", "link18");

    //carica impostazioni sincronizzate
    chrome.storage.sync.get(null, function (val) {
        setTimeout(function () {
            settings = val;
            switch (settings.corso) {
                case "inf":
                    urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-informatica/";
                    break;
                case "biosan":
                    urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/";
                    break;
                case "biodiv":
                    urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/";
                    break;
                default:
                    urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-informatica/";
            }


            for (var i = 0; i < 18; i++) {
                if (settings.vettore[i] == '1') {
                    document.getElementById(vettorelink[i]).checked = true;
                }
            }
/*
            if (!settings.linkpersurl) {
                document.getElementById("urllink").value = "HTTP://";
            } else {
                document.getElementById("urllink").value = settings.linkpersurl;
            }

            if (!settings.linkpersnome) {
                document.getElementById("nomelink").value = "";
            } else {
                document.getElementById("nomelink").value = settings.linkpersnome;
            }
*/

            if (settings.anno == "11") {
                document.getElementById("annocorso").selectedIndex = 0;
            } else if (settings.anno == "12") {
                document.getElementById("annocorso").selectedIndex = 1;
            } else if (settings.anno == "13") {
                document.getElementById("annocorso").selectedIndex = 2;
            } else if (settings.anno == "14") {
                document.getElementById("annocorso").selectedIndex = 3;
            } else if (settings.anno == "15") {
                document.getElementById("annocorso").selectedIndex = 4;
            }

            if (settings.corso == "biosan") {
                document.getElementById('corsoseguito').value = "biosan";
            } else if (settings.corso == "biodiv") {
                document.getElementById('corsoseguito').value = "biodiv";
            } else if (settings.corso == "inf") {
                document.getElementById('corsoseguito').value = "inf";
            }

            xhr.open("GET", urlfetch, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    contenuto_pagina_unimol = $(xhr.responseText).find(".section").html();
                    $("avvisi").append(contenuto_pagina_unimol);
                    document.getElementById("loading").style.display = "none";
                }
            };
            xhr.send();


        }, 1000);
    });



    //#######
    /*function ok(valore) {
        console.log(valore);
        settings = valore;
        console.log(settings.corso);
        return settings;
    }*/







    $("#salva").click(function () {
        var vettore = [];
        //corso
        var corso_selezionato = document.getElementById("corsoseguito");
        var corso = corso_selezionato.children[corso_selezionato.selectedIndex].value;
        //anno
        var anno_selezionato = document.getElementById("annocorso");
        var anno = anno_selezionato.children[anno_selezionato.selectedIndex].value;
        //link personalizzato
        //var linkpersonalizzato_nome = document.getElementById("nomelink").value;
        //var linkpersonalizzato_url = document.getElementById("urllink").value;

        for (var i = 0; i < 18; i++) {
            if (document.getElementById(vettorelink[i]).checked) {
                vettore[i] = '1';
            } else {
                vettore[i] = '0';
            }
        }

        //IMPLEMENTAZIONE SALVATAGGIO SINCRONIZZATO DELLE IMPOSTAZIONI##########
        chrome.storage.sync.set({
            "corso": corso, "anno": anno, /*"linkpersnome": linkpersonalizzato_nome,
            "linkpersurl": linkpersonalizzato_url,*/ "vettore": vettore
        }, function () {

        });
        //###########

    });








    $('#linkConf').click(function () {
        document.getElementById("linkConf").setAttribute("class", "selected");
        document.getElementById("configurazione").setAttribute("class", "selected");
        document.getElementById("configurazione").style.display = "block";
        document.getElementById("linkInfo").setAttribute("class", "");
        document.getElementById("info").style.display = "none";
        document.getElementById("linkFeed").setAttribute("class", "");
        document.getElementById("feedback").style.display = "none";
        document.getElementById("linkModulistica").setAttribute("class", "");
        document.getElementById("modulistica").style.display = "none";
        document.getElementById("linkAvvisi").setAttribute("class", "");
        document.getElementById("avvisi").style.display = "none";
    });

    $('#linkInfo').click(function () {
        document.getElementById("linkInfo").setAttribute("class", "selected");
        document.getElementById("info").setAttribute("class", "selected");
        document.getElementById("info").style.display = "block";
        document.getElementById("linkConf").setAttribute("class", "");
        document.getElementById("configurazione").style.display = "none";
        document.getElementById("linkFeed").setAttribute("class", "");
        document.getElementById("feedback").style.display = "none";
        document.getElementById("linkModulistica").setAttribute("class", "");
        document.getElementById("modulistica").style.display = "none";
        document.getElementById("linkAvvisi").setAttribute("class", "");
        document.getElementById("avvisi").style.display = "none";
    });

    $('#linkFeed').click(function () {
        document.getElementById("linkFeed").setAttribute("class", "selected");
        document.getElementById("feedback").setAttribute("class", "selected");
        document.getElementById("feedback").style.display = "block";
        document.getElementById("linkInfo").setAttribute("class", "");
        document.getElementById("info").style.display = "none";
        document.getElementById("linkConf").setAttribute("class", "");
        document.getElementById("configurazione").style.display = "none";
        document.getElementById("linkModulistica").setAttribute("class", "");
        document.getElementById("modulistica").style.display = "none";
        document.getElementById("linkAvvisi").setAttribute("class", "");
        document.getElementById("avvisi").style.display = "none";
    });

    $('#linkModulistica').click(function () {
        document.getElementById("linkModulistica").setAttribute("class", "selected");
        document.getElementById("modulistica").setAttribute("class", "selected");
        document.getElementById("modulistica").style.display = "block";
        document.getElementById("linkInfo").setAttribute("class", "");
        document.getElementById("info").style.display = "none";
        document.getElementById("linkConf").setAttribute("class", "");
        document.getElementById("configurazione").style.display = "none";
        document.getElementById("linkFeed").setAttribute("class", "");
        document.getElementById("feedback").style.display = "none";
        document.getElementById("linkAvvisi").setAttribute("class", "");
        document.getElementById("avvisi").style.display = "none";
    });

    $('#linkAvvisi').click(function () {
        document.getElementById("linkAvvisi").setAttribute("class", "selected");
        document.getElementById("avvisi").setAttribute("class", "selected");
        document.getElementById("avvisi").style.display = "block";
        document.getElementById("linkInfo").setAttribute("class", "");
        document.getElementById("info").style.display = "none";
        document.getElementById("linkConf").setAttribute("class", "");
        document.getElementById("configurazione").style.display = "none";
        document.getElementById("linkFeed").setAttribute("class", "");
        document.getElementById("feedback").style.display = "none";
        document.getElementById("linkModulistica").setAttribute("class", "");
        document.getElementById("modulistica").style.display = "none";
    });




    $('#selectall').click(function () {
        jQuery('#link1').attr('checked', true);
        jQuery('#link2').attr('checked', true);
        jQuery('#link3').attr('checked', true);
        jQuery('#link4').attr('checked', true);
        jQuery('#link5').attr('checked', true);
        jQuery('#link6').attr('checked', true);
        jQuery('#link7').attr('checked', true);
        jQuery('#link8').attr('checked', true);
        jQuery('#link9').attr('checked', true);
        jQuery('#link10').attr('checked', true);
        jQuery('#link11').attr('checked', true);
        jQuery('#link12').attr('checked', true);
        jQuery('#link13').attr('checked', true);
        jQuery('#link14').attr('checked', true);
        jQuery('#link15').attr('checked', true);
        jQuery('#link17').attr('checked', true);
        jQuery('#link18').attr('checked', true);
    });

    $('#deselectall').click(function () {
        jQuery('#link1').attr('checked', false);
        jQuery('#link2').attr('checked', false);
        jQuery('#link3').attr('checked', false);
        jQuery('#link4').attr('checked', false);
        jQuery('#link5').attr('checked', false);
        jQuery('#link6').attr('checked', false);
        jQuery('#link7').attr('checked', false);
        jQuery('#link8').attr('checked', false);
        jQuery('#link9').attr('checked', false);
        jQuery('#link10').attr('checked', false);
        jQuery('#link11').attr('checked', false);
        jQuery('#link12').attr('checked', false);
        jQuery('#link13').attr('checked', false);
        jQuery('#link14').attr('checked', false);
        jQuery('#link15').attr('checked', false);
        jQuery('#link17').attr('checked', false);
        jQuery('#link18').attr('checked', false);
    });


};


