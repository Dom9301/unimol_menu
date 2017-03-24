//DATABASE

var corsi = [{
    nome: "Informatica",
    id: "L31",
    icona: "glyphicon-hdd",
    url_corso: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/",
    url_orario: {
        primo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/INF-I-anno-II-semestre.pdf",
        secondo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/INF-II-anno-II-semestre.pdf",
        terzo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/INF-III-anno-II-semestre.pdf"
    },
    url_orari: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/il-calendario-delle-lezioni/",
    url_guide: {
        g2011_12: "http://oldweb.unimol.it/unimolise/allegati/51185/Informatica_a.a.%202011_2012.pdf",
        g2012_13: "http://oldweb.unimol.it/unimolise/allegati/51185/INF_guida_2012_2013.pdf",
        g2013_14: "http://oldweb.unimol.it/unimolise/allegati/55750/GUIDA%20Informatica.pdf",
        g2014_15: "http://www.unimol.it//wp-content/uploads/2014/08/INFORMATICA1.pdf",
        g2015_16: "http://www.unimol.it/wp-content/uploads/2015/07/GUIDA-CL-INFORMATICA.pdf",
        g2016_17: "http://www.unimol.it/wp-content/uploads/2016/08/Guida_INFORMATICA_2016.pdf"
    },
    url_esami: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/informatica/calendario-degli-esami/",
    url_esami_ade: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/INF_ADE-anno-II-semestre.pdf",
    url_avvisi: "http://dipbioter.unimol.it/blog/categorie/bacheca-informatica/"
}, {
    //Biologia con proseguo a Biosanitaria
    nome: "Biosanitaria",
    id: "L13",
    icona: "glyphicon-tint",
    url_corso: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/",
    url_orario: {
        primo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/SB-I-anno-II-semestre.pdf",
        secondo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/SB-II-anno-II-semestre.pdf",
        terzo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/SB-III-BS-anno-II-semestre.pdf"
    },
    url_orari: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-delle-lezioni/",
    url_guide: {
        g2011_12: "http://www.unimol.it/unimolise/allegati/51251/Scienze%20Biologiche_a.a.%202011_2012.pdf",
        g2012_13: "http://oldweb.unimol.it/unimolise/allegati/51251/SB_guida_2012_2013.pdf",
        g2013_14: "http://www.unimol.it/unimolise/allegati/55750/GUIDA%20Scienze%20Biologiche.pdf",
        g2014_15: "http://dipbioter.unimol.it/wp-content/uploads/2016/03/SCIENZE-BIOLOGICHE_2014_2015.pdf",
        g2015_16: "http://www.unimol.it/wp-content/uploads/2015/07/GUIDA-CL-SCIENZE-BIOLOGICHE.pdf",
        g2016_17: "http://www.unimol.it/wp-content/uploads/2016/08/Guida_SCIENZE-BIOLOGICHE_2016.pdf"
    },
    url_esami: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-degli-esami/",
    url_esami_ade: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/SB_ADE-anno-II-semestre.pdf",
    url_avvisi: "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/"
}, {
    //Biologia con proseguo a Biodiversità
    nome: "Biodiversità",
    id: "L13",
    icona: "glyphicon-leaf",
    url_corso: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/",
    url_orario: {
        primo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/SB-I-anno-II-semestre.pdf",
        secondo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/SB-II-anno-II-semestre.pdf",
        terzo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/SB-III-BD-anno-II-semestre.pdf"
    },
    url_orari: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-delle-lezioni/",
    url_guide: {
        g2011_12: "http://www.unimol.it/unimolise/allegati/51251/Scienze%20Biologiche_a.a.%202011_2012.pdf",
        g2012_13: "http://oldweb.unimol.it/unimolise/allegati/51251/SB_guida_2012_2013.pdf",
        g2013_14: "http://www.unimol.it/unimolise/allegati/55750/GUIDA%20Scienze%20Biologiche.pdf",
        g2014_15: "http://dipbioter.unimol.it/wp-content/uploads/2016/03/SCIENZE-BIOLOGICHE_2014_2015.pdf",
        g2015_16: "http://www.unimol.it/wp-content/uploads/2015/07/GUIDA-CL-SCIENZE-BIOLOGICHE.pdf",
        g2016_17: "http://www.unimol.it/wp-content/uploads/2016/08/Guida_SCIENZE-BIOLOGICHE_2016.pdf"
    },
    url_esami: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-triennali/scienze-biologiche/calendario-degli-esami/",
    url_esami_ade: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/SB_ADE-anno-II-semestre.pdf",
    url_avvisi: "http://dipbioter.unimol.it/blog/categorie/bacheca-scienze-biologiche/"
}, {
    nome: "Sicurezza dei Sistemi Software",
    id: "LM66",
    icona: "glyphicon-lock",
    url_corso: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/sicurezza-dei-sistemi-software/",
    url_orario: {
        primo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/SSS-I-anno-II-semestre.pdf",
        secondo_anno: "/404.html",
        terzo_anno: "/404.html"
    },
    url_orari: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/sicurezza-dei-sistemi-software/calendario-delle-lezioni/",
    url_guide: {
        g2011_12: "/404.html",
        g2012_13: "/404.html",
        g2013_14: "/404.html",
        g2014_15: "/404.html",
        g2015_16: "/404.html",
        g2016_17: "https://drive.google.com/open?id=0B57kDuNAMnKdcVJZdE9zU0NXYnM"
    },
    url_esami: "tp://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/sicurezza-dei-sistemi-software/calendario-degli-esami/",
    url_esami_ade: "/404.html",
    url_avvisi: "http://dipbioter.unimol.it/blog/categorie/bacheca-sicurezza-dei-sistemi-software/"
}, {
    nome: "Biosanitaria",
    id: "LM6",
    icona: "glyphicon-leaf",
    url_corso: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/biologia/",
    url_orario: {
        primo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/BG-I-BS-anno-II-semestre.pdf",
        secondo_anno: "/404.html",
        terzo_anno: "/404.html"
    },
    url_orari: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/biologia/calendario-delle-lezioni/",
    url_guide: {
        g2011_12: "/404.html",
        g2012_13: "/404.html",
        g2013_14: "ttp://oldweb.unimol.it/unimolise/allegati/55750/GUIDA%20Magistrale%20Biologia.pdf",
        g2014_15: "http://www.unimol.it//wp-content/uploads/2014/08/BIOLOGIA_2014_20151.pdf",
        g2015_16: "http://www.unimol.it/wp-content/uploads/2015/07/GUIDA-LM-BIOLOGIA.pdf",
        g2016_17: "http://www.unimol.it/wp-content/uploads/2016/08/Guida-BIOLOGIA_2016.pdf"
    },
    url_esami: "ttp://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/biologia/calendario-degli-esami/",
    url_esami_ade: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/biologia/calendario-delle-lezioni/",
    url_avvisi: "http://dipbioter.unimol.it/blog/categorie/bacheca-biologia-lm/"
},{
    nome: "Biodiversità",
    id: "LM6",
    icona: "glyphicon-leaf",
    url_corso: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/biologia/",
    url_orario: {
        primo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/BG-I-BD-anno-II-semestre.pdf",
        secondo_anno: "http://dipbioter.unimol.it/wp-content/uploads/2017/02/BG-II-BD-anno-II-semestre.pdf",
        terzo_anno: "/404.html"
    },
    url_orari: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/biologia/calendario-delle-lezioni/",
    url_guide: {
        g2011_12: "/404.html",
        g2012_13: "/404.html",
        g2013_14: "ttp://oldweb.unimol.it/unimolise/allegati/55750/GUIDA%20Magistrale%20Biologia.pdf",
        g2014_15: "http://www.unimol.it//wp-content/uploads/2014/08/BIOLOGIA_2014_20151.pdf",
        g2015_16: "http://www.unimol.it/wp-content/uploads/2015/07/GUIDA-LM-BIOLOGIA.pdf",
        g2016_17: "http://www.unimol.it/wp-content/uploads/2016/08/Guida-BIOLOGIA_2016.pdf"
    },
    url_esami: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/biologia/calendario-degli-esami/",
    url_esami_ade: "http://dipbioter.unimol.it/didattica/corsi-di-laurea-magistrali/biologia/calendario-delle-lezioni/",
    url_avvisi: "http://dipbioter.unimol.it/blog/categorie/bacheca-biologia-lm/"
}];

/*{
 nome: "",
 id: "",
 icona: "glyphicon-",
 url_corso: "",
 url_orario: {
 primo_anno: "",
 secondo_anno: "",
 terzo_anno: ""
 },
 url_orari: "",
 url_guide: {
 g2011_12: "",
 g2012_13: "",
 g2013_14: "",
 g2014_15: "",
 g2015_16: "",
 g2016_17: ""
 },
 url_esami: "",
 url_esami_ade: "",
 url_avvisi: ""
 }*/