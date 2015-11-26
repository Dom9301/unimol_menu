var first_run = false;
if (!localStorage['ran_before']) {
  first_run = true;
  localStorage['ran_before'] = '1';
  $.jStorage.set("corso", "inf");
  $.jStorage.set("anno", "12");
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
  $.jStorage.set("link14", '1');
  $.jStorage.set("link15", '1');
  $.jStorage.set("link13", '1');
  $.jStorage.set("link16", '1');
  $.jStorage.set("link17", '1');
  $.jStorage.set("link18", '1');

   $.jStorage.set("linkpersnome", '');
   $.jStorage.set("linkpersurl", '');
   
   alert("Unimol MENU - versione 4.2");
}