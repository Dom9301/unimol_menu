//SISTEMATO

var xhr = new XMLHttpRequest();
var url_pagina_avvisi;
chrome.storage.sync.get(null, function(impostazioni) {


	setTimeout(function() {

		switch (impostazioni.corso) {
			case "informatica":
				url_pagina_avvisi = "http://dipbioter.unimol.it/blog/categorie/bacheca-informatica/";
				break;
			case "biologia":
				url_pagina_avvisi = "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/";
				break;
			default:
				url_pagina_avvisi = "http://dipbioter.unimol.it/blog/categorie/bacheca-informatica/";
		}


		xhr.open("GET", url_pagina_avvisi, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				contenuto_pagina_unimol = $(xhr.responseText).find(".section").html();
				$("#loading").removeAttr("style").hide();
				$("avvisi").append(contenuto_pagina_unimol);
			}
		};
		xhr.send();

	}, 100);

});