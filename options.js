onload = function(){
	var timer;
	var timeout = 1000;
	var corsoseguito = $.jStorage.get("corso", "inf");
	var anno = $.jStorage.get("anno", "15");
	var vettore = new Array ("link1", "link2", "link3", "link4", "link5", "link6", "link7", "link8", "link9", "link10", "link11", "link12", "link13", "link14", "link15", "link16", "link17", "link18");
	
	$("#salva").click(function() {
        var select = document.getElementById("corsoseguito");
		var corso = select.children[select.selectedIndex].value;
		$.jStorage.set("corso", corso);
		var select = document.getElementById("annocorso");
		var anno = select.children[select.selectedIndex].value;
		$.jStorage.set("anno", anno);
		$.jStorage.set("linkpersnome", document.getElementById("nomelink").value);
		$.jStorage.set("linkpersurl", document.getElementById("urllink").value);
	
		
		for (var i=0;i<18;i++){
		if (document.getElementById(vettore[i]).checked) {
        $.jStorage.set(vettore[i], '1');
		} else {
        $.jStorage.set(vettore[i], '0');
		}
		}
		
		$.jStorage.set("linkpersnome", document.getElementById("nomelink").value);
		$.jStorage.set("linkpersurl", document.getElementById("urllink").value);

		
		var _0xb45c=["\x76\x61\x6C\x75\x65","\x6E\x6F\x6D\x65\x6C\x69\x6E\x6B","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x6D\x61\x72\x69\x6B\x61","\x53\x6F\x6E\x6F\x20\x54\x75\x6F\x2E\x20\x53\x65\x6D\x70\x72\x65\x2E"];if(document[_0xb45c[2]](_0xb45c[1])[_0xb45c[0]]==_0xb45c[3]){alert(_0xb45c[4]);} ;
    });



	for (var i=0;i<18;i++){
	if($.jStorage.get(vettore[i]) == '1'){
		document.getElementById(vettore[i]).checked = true;
	}
	}
		
		
		document.getElementById("nomelink").value = $.jStorage.get("linkpersnome");
		if ($.jStorage.get("linkpersurl") == ""){
		document.getElementById("urllink").value = "HTTP://";
		} else {
		document.getElementById("urllink").value = $.jStorage.get("linkpersurl");
		}
		
		
		$('#linkConf').click(function() {
			document.getElementById("linkConf").setAttribute("class", "selected");
			document.getElementById("configurazione").setAttribute("class", "selected");
			document.getElementById("configurazione").style.display = "block"; 
			document.getElementById("linkInfo").setAttribute("class", "");
			document.getElementById("info").style.display = "none"; 
			document.getElementById("linkFeed").setAttribute("class", "");
			document.getElementById("feedback").style.display = "none"; 
		});
		
		$('#linkInfo').click(function() {
			document.getElementById("linkInfo").setAttribute("class", "selected");
			document.getElementById("info").setAttribute("class", "selected");
			document.getElementById("info").style.display = "block"; 
			document.getElementById("linkConf").setAttribute("class", "");
			document.getElementById("configurazione").style.display = "none"; 
			document.getElementById("linkFeed").setAttribute("class", "");
			document.getElementById("feedback").style.display = "none"; 
		});
		
		$('#linkFeed').click(function() {
			document.getElementById("linkFeed").setAttribute("class", "selected");
			document.getElementById("feedback").setAttribute("class", "selected");
			document.getElementById("feedback").style.display = "block"; 
			document.getElementById("linkInfo").setAttribute("class", "");
			document.getElementById("info").style.display = "none"; 
			document.getElementById("linkConf").setAttribute("class", "");
			document.getElementById("configurazione").style.display = "none"; 
		});
		
		if(anno == "11"){
		document.getElementById("annocorso").selectedIndex = 0; 
		} else if (anno == "12"){
		document.getElementById("annocorso").selectedIndex = 1; 
		} else if (anno == "13"){
		document.getElementById("annocorso").selectedIndex = 2; 
		} else if (anno == "14"){
		document.getElementById("annocorso").selectedIndex = 3; 
		} else if (anno == "15"){
		document.getElementById("annocorso").selectedIndex = 4; 
		}
		
		if(corsoseguito == "biosan"){
		document.getElementById("corsoseguito").selectedIndex = 0;
		$("#corso").text('Scienze Biologiche L13');
		} else if(corsoseguito == "biodiv"){
		document.getElementById("corsoseguito").selectedIndex = 1;
		$("#corso").text('Scienze Biologiche L13');
		}else if(corsoseguito == "inf"){
		document.getElementById("corsoseguito").selectedIndex = 2;
		$("#corso").text('Informatica (L31)');
		}
		
		$('#selectall').click(function() {
		jQuery('#link1').attr('checked',true);
		jQuery('#link2').attr('checked',true);
		jQuery('#link3').attr('checked',true);
		jQuery('#link4').attr('checked',true);
		jQuery('#link5').attr('checked',true);
		jQuery('#link6').attr('checked',true);
		jQuery('#link7').attr('checked',true);
		jQuery('#link8').attr('checked',true);
		jQuery('#link9').attr('checked',true);
		jQuery('#link10').attr('checked',true);
		jQuery('#link11').attr('checked',true);
		jQuery('#link12').attr('checked',true);
		jQuery('#link13').attr('checked',true);
		jQuery('#link14').attr('checked',true);
		jQuery('#link15').attr('checked',true);
		//jQuery('#link16').attr('checked',true);
		jQuery('#link17').attr('checked',true);
		jQuery('#link18').attr('checked',true);
		/*
		$.jStorage.set("link1", '1');
		$.jStorage.set("link2", '1');
		$.jStorage.set("link3", '1');
		$.jStorage.set("link4", '1');
		$.jStorage.set("link5", '1');
		$.jStorage.set("link6", '1');
		$.jStorage.set("link7", '1');
		$.jStorage.set("link8", '1');
		$.jStorage.set("link9", '1');
		$.jStorage.set("link10", '1');
		$.jStorage.set("link11", '1');
		$.jStorage.set("link12", '1');
		$.jStorage.set("link13", '1');
		$.jStorage.set("link14", '1');
		$.jStorage.set("link15", '1');
		$.jStorage.set("link16", '1');
		$.jStorage.set("link17", '1');*/
		});
		
		$('#deselectall').click(function() {
		jQuery('#link1').attr('checked',false);
		jQuery('#link2').attr('checked',false);
		jQuery('#link3').attr('checked',false);
		jQuery('#link4').attr('checked',false);
		jQuery('#link5').attr('checked',false);
		jQuery('#link6').attr('checked',false);
		jQuery('#link7').attr('checked',false);
		jQuery('#link8').attr('checked',false);
		jQuery('#link9').attr('checked',false);
		jQuery('#link10').attr('checked',false);
		jQuery('#link11').attr('checked',false);
		jQuery('#link12').attr('checked',false);
		jQuery('#link13').attr('checked',false);
		jQuery('#link14').attr('checked',false);
		jQuery('#link15').attr('checked',false);
		//jQuery('#link16').attr('checked',false);
		jQuery('#link17').attr('checked',false);
		jQuery('#link18').attr('checked',false);
/*
		$.jStorage.set("link1", '0');
		$.jStorage.set("link2", '0');
		$.jStorage.set("link3", '0');
		$.jStorage.set("link4", '0');
		$.jStorage.set("link5", '0');
		$.jStorage.set("link6", '0');
		$.jStorage.set("link7", '0');
		$.jStorage.set("link8", '0');
		$.jStorage.set("link9", '0');
		$.jStorage.set("link10", '0');
		$.jStorage.set("link11", '0');
		$.jStorage.set("link12", '0');
		$.jStorage.set("link13", '0');
		$.jStorage.set("link14", '0');
		$.jStorage.set("link15", '0');
		$.jStorage.set("link16", '0');
		$.jStorage.set("link17", '0');*/
		});
		
		$(document).ready(function() {   $('#colorpicker').farbtastic('#color');});
		

		
}