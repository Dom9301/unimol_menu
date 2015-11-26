onload = function(){
	value = $.jStorage.get("corso", "inf");
	
	//alert($.jStorage.get("coloresfondo"));
	
	
	if(value == "biodiv"){
	var nome="Biologia - Biodiversità- L13<span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\" style=\"float: right;\"></span>"
	var corso ="http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/";
	var guida2011 = "https://drive.google.com/open?id=0B57kDuNAMnKdNVJqbHgtX1g0X00&authuser=0";
	var guida2012 = "https://drive.google.com/open?id=0B57kDuNAMnKdWEpMOTdpTzJoTDg&authuser=0";
	var guida2013 = "https://drive.google.com/open?id=0B57kDuNAMnKdWGtlRS13OVlVZDA&authuser=0";
	var guida2014 = "https://drive.google.com/open?id=0B57kDuNAMnKdSmxvbzlFLXBOcXM&authuser=0";
	var guida2015 = "https://drive.google.com/file/d/0B57kDuNAMnKdSHpQMjNYNktkb2c/view?usp=sharing";
	var orarigenerali = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-delle-lezioni/";
	var Ianno = "http://dipbioter.unimol.it/wp-content/uploads/2015/09/SB-I-anno-I-semestre.pdf";
	var IIanno = "http://dipbioter.unimol.it/wp-content/uploads/2015/09/SB-II-BD-anno-I-semestre.pdf";
	var IIIanno = "http://dipbioter.unimol.it/wp-content/uploads/2015/09/SB-III-BD-anno-I-semestre.pdf";
	var esamiascelta = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-delle-lezioni/?aid=7761&sa=0"
	var avvisi = "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/";
	var esami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-degli-esami/";

	
	} else	if(value == "biosan"){
	var nome="Biologia - Biosanitario - L13<span class=\"glyphicon glyphicon-tint\" aria-hidden=\"true\" style=\"float: right;\"></span>"
	var corso ="http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/";
	var guida2011 = "https://drive.google.com/open?id=0B57kDuNAMnKdNVJqbHgtX1g0X00&authuser=0";
	var guida2012 = "https://drive.google.com/open?id=0B57kDuNAMnKdWEpMOTdpTzJoTDg&authuser=0";
	var guida2013 = "https://drive.google.com/open?id=0B57kDuNAMnKdWGtlRS13OVlVZDA&authuser=0";
	var guida2014 = "https://drive.google.com/open?id=0B57kDuNAMnKdSmxvbzlFLXBOcXM&authuser=0";
	var guida2015 = "https://drive.google.com/file/d/0B57kDuNAMnKdSHpQMjNYNktkb2c/view?usp=sharing";
	var orarigenerali = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-delle-lezioni/";
	var Ianno = "http://dipbioter.unimol.it/wp-content/uploads/2015/09/SB-I-anno-I-semestre.pdf";
	var IIanno = "http://dipbioter.unimol.it/wp-content/uploads/2015/09/SB-II-BS-anno-I-semestre.pdf";
	var IIIanno = "http://dipbioter.unimol.it/wp-content/uploads/2015/09/SB-III-BS-anno-I-semestre.pdf";
	var esamiascelta = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-delle-lezioni/?aid=7761&sa=0"
	var avvisi = "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/";
	var esami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-degli-esami/";

	
	} else {
	var nome="Informatica - L31<span class=\"glyphicon glyphicon-globe\" aria-hidden=\"true\" style=\"float: right;\"></span>"
	var corso = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/";
	var guida2011 = "https://drive.google.com/open?id=0B57kDuNAMnKdTF9tQUlJMV9Lbmc&authuser=0";
	var guida2012 = "https://drive.google.com/open?id=0B57kDuNAMnKddWlnU3lpRE1uSVU&authuser=0";
	var guida2013 = "https://drive.google.com/open?id=0B57kDuNAMnKdamRoM3BBbjFjeHc&authuser=0";
	var guida2014 = "https://drive.google.com/open?id=0B57kDuNAMnKdSHRBMTBySkQwQ1k&authuser=0";
	var guida2015 = "https://drive.google.com/file/d/0B57kDuNAMnKdUnFZb0JFcnlSWXM/view?usp=sharing";
	var orarigenerali = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/il-calendario-delle-lezioni/";
	var Ianno = "http://dipbioter.unimol.it/wp-content/uploads/2015/10/INF_I-anno_I-semestre.pdf";
	var IIanno = "http://dipbioter.unimol.it/wp-content/uploads/2015/09/INF_II-anno-I-semestre.pdf";
	var IIIanno = "http://dipbioter.unimol.it/wp-content/uploads/2015/10/INF_III-a_I-semestre.pdf";
    var esamiascelta = "http://dipbioter.unimol.it/wp-content/uploads/2015/09/INF_ADE-anno-I-semestre.pdf"
	var avvisi = "http://dipbioter.unimol.it/blog/categorie/bacheca-informatica/";
	var esami = "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/calendario-degli-esami/";
	}

	
	$('.nome').html(nome);
	
	if($.jStorage.get("link1") == '1'){
	$('.link1').html('<a href="https://unimol.esse3.cineca.it/Home.do" target="_blank">Portale dello studente</a>');
	$('.link1').css({"display":"block"});
	}
	
	
	if($.jStorage.get("link2") == '1'){
		if($.jStorage.get("anno") == "11"){
		guida = guida2011;
		} else if($.jStorage.get("anno") == "12"){
		guida = guida2012;
		} else if($.jStorage.get("anno") == "13"){
		guida = guida2013;
		} else if($.jStorage.get("anno") == "14"){
		guida = guida2014;
		} else if($.jStorage.get("anno") == "15"){
		guida = guida2015;
		}
	$('.link2').html('<a href="'+guida+'" class="button hvr-sweep-to-right" target="_blank">Guida dello studente</a></li>');
	$('.link2').css({"display":"block"});
	}
	
	
	if($.jStorage.get("link3") == '1'){
	$('.link3').html('<a href="http://docenti.unimol.it/" class="button hvr-sweep-to-right" target="_blank">Cerca docente</a>');
	$('.link3').css({"display":"block"});
	}
	

	if($.jStorage.get("link4") == '1'){
	$('.link4').html('<a href="'+esami+'" class="button hvr-sweep-to-right" target="_blank">Calendario esami</a>');
	$('.link4').css({"display":"block"});
	}
	
	
	if($.jStorage.get("link5") == '1'){
	$('.link5').html('<a href="http://www.unimol.it/" class="button hvr-sweep-to-right" target="_blank">Unimol.it</a>');
	$('.link5').css({"display":"block"});
	}
	
	
	
	if($.jStorage.get("link6") == '1'){
	$('.link6').html('<a href="'+avvisi+'" class="button hvr-sweep-to-right" target="_blank">Avvisi</a>');
	$('.link6').css({"display":"block"});
	}
	
	if($.jStorage.get("link7") == '1'){
	if($.jStorage.get("anno") == "11"){
		orario = orarigenerali;
		} else if($.jStorage.get("anno") == "13"){
		orario = IIIanno;
		} else if($.jStorage.get("anno") == "14"){
		orario = IIanno;
		} else if($.jStorage.get("anno") == "15"){
		orario = Ianno;
		} else {
		orario = Ianno;
		}
	$('.link7').html('<a href="'+orario+'" class="button hvr-sweep-to-right" target="_blank">Orari lezioni</a>');
	$('.link7').css({"display":"block"});
	}
	
	
	if($.jStorage.get("link8") == '1'){
	$('.link8').html('<a href="http://dipbioter.unimol.it/il-dipartimento/" class="button hvr-sweep-to-right" target="_blank">Home Dipartimento</a>');
	$('.link8').css({"display":"block"});
	}
	
	if($.jStorage.get("link9") == '1'){
	$('.link9').html('<a href="'+corso+'" class="button hvr-sweep-to-right" target="_blank">Home Corso</a>');
	$('.link9').css({"display":"block"});
	}
	
	if($.jStorage.get("link10") == '1'){
	$('.link10').html('<a href="https://www.outlook.com/studenti.unimol.it" class="button hvr-sweep-to-right" target="_blank">Mail studenti</a>');
	$('.link10').css({"display":"block"});
	}
	if($.jStorage.get("link11") == '1'){
	$('.link11').html('<a href="http://e5.onthehub.com/WebStore/ProductsByMajorVersionList.aspx?ws=80a42838-836f-e011-971f-0030487d8897&vsro=8" class="button hvr-sweep-to-right" target="_blank">Dreamspark</a>');
	$('.link11').css({"display":"block"});
	}
	if($.jStorage.get("link12") == '1'){
	$('.link12').html('<a href="options.html" class="button hvr-sweep-to-right" target="_blank">Opzioni</a>');
	$('.link12').css({"display":"block"});
	}
	if($.jStorage.get("link14") == '1'){
	$('.link14').html('<a href="http://www.esu.molise.it/" class="button hvr-sweep-to-right" target="_blank">Esu Molise</a>');
	$('.link14').css({"display":"block"});
	}
	if($.jStorage.get("link15") == '1' && value == "inf"){
	$('.link15').html('<a href="http://www.distat.unimol.it/gequi/" class="button hvr-sweep-to-right" target="_blank">GeQui</a>');
	$('.link15').css({"display":"block"});
	}
	if($.jStorage.get("link13") == '1'){
	$('.link13').html('<a href="http://151.99.174.149/SebinaOpac/Opac?sysb=MOLBU" class="button hvr-sweep-to-right" target="_blank">Biblioteca</a>');
	$('.link13').css({"display":"block"});
	}
	if($.jStorage.get("link17") == '1'){
	$('.link17').html('<a href="'+orarigenerali+'" class="button hvr-sweep-to-right" target="_blank">Orari Lez. Generali</a>');
	$('.link17').css({"display":"block"});
	}
	if($.jStorage.get("link18") == '1'){
	$('.link18').html('<a href="'+esamiascelta+'" class="button hvr-sweep-to-right" target="_blank">Orari corsi a scelta</a>');
	$('.link18').css({"display":"block"});
	}
	
	if($.jStorage.get("linkpersnome") != "" && $.jStorage.get("linkpersurl") != ""){
	$('.link13').html('<a class="button hvr-sweep-to-right"  href="'+$.jStorage.get("linkpersurl")+'" target="_blank">'+$.jStorage.get("linkpersnome")+'</a>');
	$('.link13').css({"display":"block"});
	}
	
	/*if (($.jStorage.get("corso") == "inf")){
	$('.button').css({'background-color': "#2175bc"});
	}*/

	}