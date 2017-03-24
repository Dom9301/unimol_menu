/**
 * Created by Dom9301 on 24/04/2016.
 */
$(document).ready(function() {
	var urlfetch;
	var vettorelink = new Array("link1", "link2", "link3", "link4", "link5", "link6", "link7", "link8", "link9", "link10", "link11", "link12", "link13", "link14", "link15", "link16", "link17", "link18");

	//carica impostazioni sincronizzate
	chrome.storage.sync.get(null, function(val) {
		setTimeout(function() {
			settings = val;

			switch (settings.corso) {
				case "l_informatica":
					urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-informatica/";
					$("#corso_seguito").find("select").val("l_informatica");
					break;
                case "lm_informatica":
                    urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-sicurezza-dei-sistemi-software/";
                    $("#corso_seguito").find("select").val("lm_informatica");
                    break;
                case "l_biosanitaria":
                    urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/";
                    $("#corso_seguito").find("select").val("l_biosanitaria");
                    break;
                case "l_biodiversita":
                    urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/";
                    $("#corso_seguito").find("select").val("l_biodiversita");
                    break;
                case "lm_biosanitaria":
                    urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-biologia-lm/";
                    $("#corso_seguito").find("select").val("lm_biosanitaria");
                    break;
                case "lm_biodiversita":
                    urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-biologia-lm/";
                    $("#corso_seguito").find("select").val("lm_biodiversita");
                    break;
				default:
					urlfetch = "http://dipbioter.unimol.it/blog/categorie/bacheca-informatica/";
					$("#corso_seguito").find("select").val("l_informatica");
			}

			if (settings.link_nuova_pagina == "1") {
				$("#blank_link").prop("checked", true);
			} else {
				$("#blank_link").prop("checked", false);
			}

			for (var i = 0; i < 18; i++) {
				if (settings.vettore[i] == '1') {
					$("#" + vettorelink[i]).prop("checked", true);
				}
			}

			if (settings.anno == "11") {
				$("#annocorso").val("11");
			} else if (settings.anno == "12") {
				$("#annocorso").val("12");
			} else if (settings.anno == "13") {
				$("#annocorso").val("13");
			} else if (settings.anno == "14") {
				$("#annocorso").val("14");
			} else if (settings.anno == "15") {
				$("#annocorso").val("15");
			} else if (settings.anno == "16") {
				$("#annocorso").val("16");
			}

		}, 1);
	});

	$("#salva").click(function() {
		var vettore = [];
		//corso
		var link_nuova_pagina = "";
		var corso_selezionato = $('#corsoseguito')[0];
		var corso = corso_selezionato.children[corso_selezionato.selectedIndex].value;
		//anno
		var anno_selezionato = $('#annocorso')[0];
		var anno = anno_selezionato.children[anno_selezionato.selectedIndex].value;

		for (var i = 0; i < 18; i++) {
			if ($('#' + vettorelink[i]).prop('checked')) {
				vettore[i] = '1';
			} else {
				vettore[i] = '0';
			}
		}

		if ($('#blank_link').prop('checked')) {
			link_nuova_pagina = "1";
		} else {
			link_nuova_pagina = "0";
		}

		//IMPLEMENTAZIONE SALVATAGGIO SINCRONIZZATO DELLE IMPOSTAZIONI##########
		chrome.storage.sync.set({
			"corso": corso,
			"anno": anno,
			"vettore": vettore,
			"link_nuova_pagina": link_nuova_pagina
		}, function() {

		});
		setTimeout(function() {
			Materialize.toast('Impostazioni salvate con successo', 2500);
		}, 200);
	});

	$('#selectall').click(function() {
		for (i = 0; i <= 18; i++) {
			link = "#link" + [i];
			$(link).prop("checked", true);
		}
	});

	$('#deselectall').click(function() {
		for (i = 0; i <= 18; i++) {
			link = "#link" + [i];
			$(link).prop("checked", false);
		}
	});
});