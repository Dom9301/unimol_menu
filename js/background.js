//SISTEMATO

var vettore = [];

chrome.runtime.onInstalled.addListener(function(details) {

	//se l'estensione è appena stata installata
	if (details.reason == "install") {
		for (var i = 0; i < 18; i++) {
			vettore[i] = '1';
		}

		alert("Grazie per aver installato UNIMOL Menu");
		//impostazioni di default, informatica 2016/2017
		chrome.storage.sync.set({
			"corso": "informatica",
			"anno": "16",
			"vettore": vettore
		}, function() {});
	}

	//se l'estensione è stata aggiornata
	else if (details.reason == "update") {
		var thisVersion = chrome.runtime.getManifest().version;
		alert("UNIMOL Menu aggiornata alla versione " + thisVersion + "!");
	}

});