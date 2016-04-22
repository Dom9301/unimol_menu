onload = function () {
    var contenuto_pagina_unimol;
    var xhr = new XMLHttpRequest();
    var urlfetch;
    var settings = [];

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
            };


            xhr.open("GET", urlfetch, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    contenuto_pagina_unimol = $(xhr.responseText).find(".section").html();
                    $("avvisi").append(contenuto_pagina_unimol);
                    document.getElementById("loading").style.display = "none";
                }
            };
            xhr.send();




        document.getElementById("linkAvvisi").setAttribute("class", "selected");
        document.getElementById("avvisi").setAttribute("class", "selected");
        document.getElementById("avvisi").style.display = "block";



        }, 200);
    });






};


