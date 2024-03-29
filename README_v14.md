# EstNLTK v1.4

EstNLTK (NLTK ehk Natural Language ToolKit) on peamiselt Pythonis kirjutatud kogumik teeke eestikeelsete tekstide töötluseks.

EstNLTK eesmärkideks on olemasolevate keeletehnoloogia tööriistade omavaheline liidestamine ja kättesaadavaks muutmine ning uute loomine.


# Huvitavamaid tööriistu, mis projekti käigus on valminud:
 
## estnltk

* [Dokumentatsioon](https://github.com/estnltk/estnltk/tree/version_1.4.1.1/docs/html/1.4.1)
* [Kood](https://github.com/estnltk/estnltk/tree/version_1.4.1.1) 

EstNLTK kui projekti tuumaks on Pythoni estnltk teek, milles sisaldub:

* eesti keele sõnestamine ehk sõnapiiride tuvastamine ehk üksustamine (tokeniseerimine)
* eesti keele lausestamine ehk lausepiiride tuvastamine
* eesti keele osalausestamine ehk osalausepiiride tuvastamine
* eesti keele lemmatiseerimine ehk sõnade algvormide (lemmade) määramine ning morfoloogiline analüüs ja ühestamine (liidestudes mugavalt vabamorfiga)
* sõnaliikide määramine
* eesti keele morfoloogiline süntees (etteantud lemma ja grammatilise vormi põhjal õige sõnakuju tuletamine)
* nimeolemite e nimega üksuste tuvastamine eestikeelsest tekstist (*NER* ehk *Named-entity recognition*)
* liidestus eesti Wordnetiga
* eestikeelsete ajaväljendite tuvastamine ning nende semantika esitamine (TIMEX3 formaadis)
* pindsüntaktiline analüüs ning sõltuvussüntaktiline analüüs:
	* masinõppepõhine analüüs MaltParseri abil
	* reeglipõhine analüüs mooduli EstCG abil

## Texts-viewer

* [Dokumentatsioon](https://github.com/estnltk/texts-viewer/blob/master/README.md)
* [Kood](https://github.com/estnltk/texts-viewer)

Veebitööriist tekstide käsitsi märgendamiseks ning eraldusmustrite testimiseks. 
Võimaldab teksti kiiresti mustrite alusel märgendada ning hiljem uusi mustrieraldustööriistu olemasolevate annotatsioonide vastu testida.

<img src="static/texts-viewer.png" width="200px">

## Volcanoplot

* [Dokumentatsioon](https://github.com/estnltk/volcanoplot/blob/master/README.md)
* [Kood](https://github.com/estnltk/volcanoplot)

Käsureatööriist html väljundiga, mis võimaldab visuaalselt võrrelda kahte csv-kujul sagedusloendit. [Näide kasutamisest postimehe artiklite põhjal](https://github.com/estnltk/volcanoplot/blob/master/docs/postimees_tutorial.ipynb).

<img src="static/volcanoplot.png" width="200px" width="200px">



## Cluster-labelling-plot

* [Dokumentatsioon](https://github.com/estnltk/cluster-labelling-plot/blob/master/README.md)
* [Kood](https://github.com/estnltk/cluster-labelling-plot)

Jupyter-põhine tööriist andmepunktiklastrite klassifitseerimiseks.
 
<img src="static/cluster-labelling-plot.png" width="200px">


## Textclassifier

* [Kood](https://github.com/estnltk/textclassifier)

## Ner-tagger

* [Dokumentatsioon](https://github.com/estnltk/ner-tagger/blob/master/README.md)
* [Kood](https://github.com/estnltk/ner-tagger)

Ner-tagger on veebitööriist, mis aitab märgendada ja annoteerida teksti. Eelkõige mõeldud nimeolemite märgendamiseks.

<img src="static/ner-tagger.png" width="200px">

## gap-tagger

* [Dokumentatsioon](https://github.com/estnltk/gap-tagger/tree/master/docs)
* [Kood](https://github.com/estnltk/gap-tagger)

Gap-tagger on veebipõhine tööriist lauselünga-eksperimentide läbiviimiseks. Eksperimendi käigus kuvatakse kasutajale lause ühe eemaldatud sõnaga. Selle lünga peab ta täitma ühega pakutud valikutest.

<img src="static/gap-tagger.png" width="200px">

## episodeminer

* [Kood](https://github.com/estnltk/episode-miner)


Episode-miner leiab Winepi algoritmiga sündmuste jadast sagedamini esinevad episoodid. Näiteks tekstist tihti kasutatud fraasid või sõnadest sagedasemad tähekombinatsioonid. Võimaldab sündmusi rühmitada ja toob näiteid leitud episoodidest.

## pattern-examiner

* [Dokumentatsioon](https://github.com/estnltk/pattern-examiner/blob/master/README.md)
* [Kood](https://github.com/estnltk/pattern-examiner)

Pattern-examiner on tööriist suurte tekstihulkade sarnansuse hindamiseks, nende klasterdamiseks ja filtreerimiseks.

--------- 

# Avaldatud artiklid

* Alexander Tkachenko, Timo Petmanson, Sven Laur: [Hybrid Lemmatizer for Estonian. Baltic HLT 2014: 244-247](http://ebooks.iospress.nl/publication/38035)
* Siim Orasmaa, Timo Petmanson, Alexander Tkachenko, Sven Laur, Heiki-Jaan Kaalep: [EstNLTK - NLP Toolkit for Estonian. LREC 2016](http://www.lrec-conf.org/proceedings/lrec2016/summaries/332.html)

--------- 


EstNLTK on Loodud Tartu Ülikoolis, projektijuht on Sven Laur.
