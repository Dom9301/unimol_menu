var first_run = false;
var vettore = [];
var corso;
var cont = 0;
var asdsasd;
asdsasd = 0;
if (!localStorage['ran_before']) {
    var testo = "0";
    var testo2 = "0";
    localStorage["sito1"] = "0";
    localStorage["sito2"] = "0";
    first_run = true;
    localStorage['ran_before'] = '1';
    cont = 0;

    alert("Unimol MENU - versione 5.2");

    startItUp();

    for (var i = 0; i < 18; i++) {
        vettore[i] = '1';
    }

    chrome.storage.sync.set({
        "corso": "inf", "anno": "12", "linkpersnome": "",
        "linkpersurl": "", "vettore": vettore
    }, function () {

    });

    setInterval(asd, 1000);
    function asd() {
        if (asdsasd == 0) {
        }
        chrome.browserAction.setBadgeText({text: ""});
        asdsasd = 1;
    }
}

function notifyMe() {

    if (cont == 0) {
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
        // Let's check if the user is okay to get some notification
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            if (localStorage["sito1"] = "0") {
                var notification = new Notification("Le notifiche degli avvisi sono attive", {icon: '/unimolbig.png'});
            } else {
                var notification = new Notification("Ci sono avvisi da leggere!", {icon: '/unimolbig.png'});
            }

        }

        else if (Notification.permission !== 'denied') {
            Notification.requestPermission(function (permission) {

                // Whatever the user answers, we make sure we store the information
                if (!('permission' in Notification)) {
                    Notification.permission = permission;
                }

                // If the user is okay, let's create a notification
                if (permission === "granted") {
                    if (localStorage["sito1"] = "0") {
                        notification = new Notification("Le notifiche degli avvisi sono attive", {icon: '/unimolbig.png'});
                    } else {
                        notification = new Notification("Ci sono avvisi da leggere!", {icon: '/unimolbig.png'});
                    }
                }
            });
        }
        cont = 1;
    }
}

function notifyMeExam() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }
    // Let's check if the user is okay to get some notification
    else if (Notification.permission === "granted") {
        // If it's okay let's create a notification
        if (localStorage["sito1"] = "0") {
            var notification = new Notification("Le notifiche dei calendari d'esame sono attive", {icon: '/unimolbig.png'});
        } else {
            var notification = new Notification("Sono stati pubblicati i calendari d'esame!", {icon: '/unimolbig.png'});
        }
    }

    else if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {

            // Whatever the user answers, we make sure we store the information
            if (!('permission' in Notification)) {
                Notification.permission = permission;
            }

            // If the user is okay, let's create a notification
            if (permission === "granted") {
                if (localStorage["sito2"] = "0") {
                    notification = new Notification("Le notifiche dei calendari d'esame sono attive", {icon: '/unimolbig.png'});
                } else {
                    notification = new Notification("Sono stati pubblicati i calendari d'esame!", {icon: '/unimolbig.png'});
                }
            }
        });
    }
}

function startItUp() {
    bla();
    setInterval(bla, 7200000);
}

chrome.storage.sync.get(null, function (val) {
    setTimeout(function () {
        settings = val;
        corso = settings.corso;
    }, 50);
});

function bla() {
    var vecchiotesto;


    var urlfetch, urlfetch_esami;
    if (corso == "biosan") {
        urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/";
        urlfetch_esami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-degli-esami/";
    } else if (corso == "biodiv") {
        urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/";
        urlfetch_esami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-degli-esami/";
    } else if (corso == "inf") {
        urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-informatica/";
        urlfetch_esami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/calendario-degli-esami/";
    } else {
        urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-informatica/";
        urlfetch_esami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/calendario-degli-esami/";
    }

    var xhr = new XMLHttpRequest();
    xhr.open("GET", urlfetch, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            // WARNING! Might be injecting a delicious script!
            //document.getElementById("resp").innerHTML = xhr.responseText;
            //console.log("ok")
            //console.log(xhr.responseText);
            //$("p").append("<font color='green'>"+xhr.responseText+"</font>");
            testo = $(xhr.responseText).find(".section").text();
            if (testo.length != localStorage["sito1"].length) {
                notifyMe();

                chrome.browserAction.setBadgeText({text: "A"});

                localStorage["sito1"] = testo;
            }

        }
    };
    xhr.send();

    var xhr2 = new XMLHttpRequest();
    xhr2.open("GET", urlfetch_esami, true);
    xhr2.onreadystatechange = function () {
        if (xhr2.readyState == 4) {
            // WARNING! Might be injecting a delicious script!
            //document.getElementById("resp").innerHTML = xhr.responseText;
            //console.log("ok")
            //console.log(xhr.responseText);
            //$("p").append("<font color='green'>"+xhr.responseText+"</font>");
            testo2 = $(xhr2.responseText).find(".section").text();
            if (testo2.length != localStorage["sito2"].length) {
                chrome.browserAction.setBadgeText({text: "C"});
                notifyMeExam();
                localStorage["sito2"] = testo2;
            }

        }
    };
    xhr2.send();
}