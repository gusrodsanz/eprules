/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('usefulInfo', [])


.service('UsefulInfo', [function(){



var list = [
        {
            'id' :  0,
            'code' :  'bg',
            'title' :  'ПОЛЕЗНА ИНФОРМАЦИЯ',   
            'text': "Съгласно решенията на Парламента относно използването на неутрален спрямо пола език в неговите документи, Правилникът за дейността беше адаптиран към насоките по този въпрос, одобрени от Групата на високо равнище за равнопоставеност на половете и многообразие на 13 февруари 2008 г. и утвърдени от Бюрото на 19 май 2008 г.\
\
Правилникът за дейността на Европейския парламент периодично се публикува като книжно тяло, както и в Официален вестник на Европейския съюз. Тези издания можете да получите от Службата за публикации на Европейския съюз.\
\
Европейският парламент може да изменя правилника за дейността си. Редакцията, която е в сила към момента, можете да намерите на уеб страницата на Европейския парламент (http://www.europarl.europa.eu).\
\
Текстовете в курсив представляват тълкуване на Правилника за дейността (съгласно член 226).",
            'lastUpdated' :  'Последно осъвременяване: 14 юни 2017 г.',
            'legalNotice' :  'Правна информация'
        },{
            'id' :  1,
            'code' :  'es',
            'title' :  'INDICACIONES ÚTILES',   
            'text': 'De conformidad con las decisiones del Parlamento sobre el uso no sexista del lenguaje en sus documentos, el texto del presente Reglamento interno se ha adaptado para integrar las orientaciones al respecto aprobadas por el Grupo de Alto Nivel sobre Igualdad de Género y Diversidad el 13 de febrero de 2008 y aceptadas por la Mesa el 19 de mayo de 2008.\
\
El Reglamento interno del Parlamento Europeo se reedita regularmente en forma de folleto y se publica en el Diario Oficial de la Unión Europea. Se puede adquirir en los lugares de venta de la Oficina de Publicaciones de la Unión Europea.\
\
El Parlamento Europeo puede, sin embargo, modificar ocasionalmente su Reglamento.interno La versión vigente está disponible en la página web del Parlamento (http://www.europarl.europa.eu).\
\
De conformidad con el artículo 226, las interpretaciones del presente Reglamento interno figuran en cursiva.',
            'lastUpdated' :  'Última actualización: 19 de junio de 2017',
            'legalNotice' :  'Aviso jurídico'
        },{
            'id' :  2,
            'code' :  'cs',
            'title' :  'UŽITEČNÉ INFORMACE',   
            'text': 'V souladu s rozhodnutími Parlamentu o používání rodově neutrálního jazyka v jeho dokumentech jednací řád zohledňuje příslušné pokyny schválené rozhodnutím Skupiny na vysoké úrovni pro rovnost pohlaví a rozmanitost dne 13. února 2008 a odsouhlasené předsednictvem dne 19. května 2008.\
\
Jednací řád Evropského parlamentu se pravidelně vydává jako brožura a zveřejňuje v Úředním věstníku Evropské unie. Tato vydání lze získat prostřednictvím Úřadu pro úřední tisky.\
\
Evropský parlament však může podle potřeby svůj jednací řád změnit. Platné znění je k dispozici na internetové stránce Evropského parlamentu (http://www.europarl.europa.eu).\
\
Výklad ustanovení jednacího řádu je psán kurzívou (v souladu s článkem 226).',
            'lastUpdated' :  'Poslední aktualizace: 13. června 2017',
            'legalNotice' :  'Právní upozornění'            
        },{
            'id' :  3,
            'code' :  'da',
            'title' :  'YDERLIGERE OPLYSNINGER',   
            'text': 'I overensstemmelse med Parlamentets afgørelser om kønsneutral sprogbrug i Parlamentets dokumenter er forretningsordenen blevet tilpasset for at tage højde for de retningslinier herfor, som blev godkendt af Gruppen på Højt Plan om Ligestilling og Diversitet den 13. februar 2008, og som Præsidiet tilsluttede sig den 19. maj 2008.\
\
Europa-Parlamentets forretningsorden udgives regelmæssigt i brochureform og i Den Europæiske Unions Tidende. Disse udgaver kan rekvireres på Kontoret for De Europæiske Fællesskabers Officielle Publikationer.\
\
Der kan imidlertid blive foretaget ændringer i Europa-Parlamentets forretningsorden. Den gældende udgave af forretningsordenen findes på Europa-Parlamentets hjemmeside (http://www.europarl.europa.eu).\
\
Fortolkninger til forretningsordenen (jf. artikel 226) er gengivet med kursiv.',
            'lastUpdated' :  'Seneste opdatering: 13. juni 2017',
            'legalNotice' :  'Juridisk meddelelse'
        },{
            'id' :  4,
            'code' :  'de',
            'title' :  'NÜTZLICHE HINWEISE',   
            'text': 'Nach den Beschlüssen des Parlaments über den geschlechtergerechten Sprachgebrauch in seinen Dokumenten wurde die Geschäftsordnung angepasst, um den Leitlinien zu diesem Thema Rechnung zu tragen, die von der Hochrangigen Gruppe für die Gleichstellung der Geschlechter und Vielfalt am 13. Februar 2008 gebilligt und vom Präsidium am 19. Mai 2008 angenommen wurden.\
\
Die Geschäftsordnung des Europäischen Parlaments wird regelmäßig als Broschüre neu aufgelegt und im Amtsblatt der Europäischen Union veröffentlicht. Sie kann über die Vertriebsstellen des Amts für Veröffentlichungen der Europäischen Union bezogen werden.\
\
Die Geschäftsordnung kann jedoch hin und wieder vom Parlament geändert werden. Die jeweils geltende Fassung findet sich auf der Website des Europäischen Parlaments (http://www.europarl.europa.eu).\
\
Kursivschrift im Text bedeutet, dass es sich um eine Auslegung zur Geschäftsordnung (gemäß Artikel 211) handelt.',
            'lastUpdated' :  'Letzte Aktualisierung: 20. Juni 2017',
            'legalNotice' :  'Rechtlicher Hinweis'
        },{
            'id' :  5,
            'code' :  'et',
            'title' :  'KASULIK TEAVE',   
            'text': 'Euroopa Parlamendi kodukord avaldatakse perioodiliselt Euroopa Liidu Teatajas ja brošüürina. Vastavaid väljaandeid on võimalik saada Euroopa Liidu Väljaannete Talitusest.\
\
Euroopa Parlament võib aegajalt oma kodukorda muuta. Kehtiva kodukorra leiate Euroopa Parlamendi kodulehelt (http://www.europarl.europa.eu).\
\
Artiklite tõlgendused (artikli 211 alusel) on toodud kaldkirjas.',
            'lastUpdated' :  'Viimane päevakajastamine: 13. juuni 2017',
            'legalNotice' :  'Õigusalane teave' 
        },{
            'id' :  6,
            'code' :  'el',
            'title' :  'ΧΡΗΣΙΜΕΣ ΟΔΗΓΙΕΣ',   
            'text': 'Σύμφωνα με τις αποφάσεις του Κοινοβουλίου για τη χρήση γλώσσας ουδέτερης ως προς το φύλο στα κείμενά του, ο Κανονισμός προσαρμόσθηκε λαμβάνοντας υπόψη τις κατευθυντήριες επί του θέματος γραμμές τις οποίες ενέκρινε η ομάδα υψηλού επιπέδου για την ισότητα και τη διαφοροποίηση των φύλων στις 13 Φεβρουαρίου 2008 και επικύρωσε το Προεδρείο στις 19 Μαΐου 2008.\
\
Ο Κανονισμός του Ευρωπαϊκού Κοινοβουλίου δημοσιεύεται περιοδικώς υπό μορφή εγχειριδίου, καθώς και στην Επίσημη Εφημερίδα της Ευρωπαϊκής Ένωσης. Οι εκδόσεις αυτές διατίθενται από την Υπηρεσία Εκδόσεων της Ευρωπαϊκής Ένωσης.\
\
Το Ευρωπαϊκό Κοινοβούλιο μπορεί ωστόσο να τροποποιεί κατά διαστήματα τον Κανονισμό του. Το ισχύον κείμενο βρίσκεται στην ιστοσελίδα του Ευρωπαϊκού Κοινοβουλίου (http://www.europarl.europa.eu).\
\
Τα κείμενα με πλάγια στοιχεία αποτελούν ερμηνείες του Κανονισμού, σύμφωνα με το άρθρο 226.',
            'lastUpdated' :  'Τελευταία ενημέρωση: 14 Ιουνίου 2017',
            'legalNotice' :  'Ανακοίνωση νομικού περιεχομένου'
        },{
            'id' :  7,
            'code' :  'en',
            'title' :  'USEFUL INFORMATION',   
            'text': "In accordance with Parliament's decisions on the use of gender-neutral language in its documents, the Rules of Procedure have been adapted to take account of the guidelines on that subject approved by the High Level Group on Gender Equality and Diversity on 13 February 2008 and endorsed by the Bureau on 19 May 2008.\
\
The European Parliament's Rules of Procedure are published periodically in booklet form and in the Official Journal of the European Union. These editions may be obtained from the Publications Office of the European Union.\
\
The European Parliament may, however, amend its Rules of Procedure from time to time. The version in force is available on the European Parliament's website (http://www.europarl.europa.eu).\
\
Text in italics indicates an interpretation of the Rules (pursuant to Rule 226).",
            'lastUpdated' :  'Last updated: 1 June 2017',
            'legalNotice' :  'Legal notice'
        },{
            'id' :  8,
            'code' :  'fr',
            'title' :  'INDICATIONS UTILES',   
            'text': "Conformément aux décisions du Parlement sur l'utilisation, dans ses documents, d'un langage neutre du point de vue du genre, le règlement intérieur a été adapté pour prendre en compte les orientations en la matière, qui ont été approuvées par le groupe de haut niveau sur l'égalité des genres et la diversité le 13 février 2008, et entérinées par le Bureau le 19 mai 2008.\
\
Le règlement intérieur du Parlement européen est publié régulièrement sous forme de brochure et au Journal officiel de l'Union européenne. Ces éditions peuvent être obtenues auprès de l'Office des publications de l'Union européenne.\
\
Il arrive toutefois que le Parlement européen modifie son règlement intérieur. La version en vigueur est disponible sur le site internet du Parlement européen (http://www.europarl.europa.eu).\
\
Les textes en italiques correspondent à des interprétations (au sens de l'article 226) du règlement intérieur.",
            'lastUpdated' :  'Dernière mise à jour: 21 juin 2017',
            'legalNotice' :  'Avis juridique'
        },{
            'id' :  9,
            'code' :  'ga',
            'title' :  'FAISNÉIS ÚSÁIDEACH',   
            'text': 'I gcomhréir le cinntí na Parlaiminte maidir le húsáid a bhaint as teanga atá neodrach ó thaobh inscne de ina cuid doiciméad, tá na Rialacha Nós Imeachta oiriúnaithe chun aird a thabhairt ar na treoirlínte ar an ábhar sin a d’fhormheas an Grúpa Ardleibhéil um Chomhionannas Inscne agus Éagsúlacht an 13 Feabhra 2008 agus ar aontaigh an Biúró leo an 19 Bealtaine 2008.\
\
Foilsítear Rialacha Nós Imeachta Pharlaimint na hEorpa ó am go chéile i bhfoirm leabhráin agus in Iris Oifigiúil an Aontais Eorpaigh. Is féidir na heagráin sin a fháil ó Oifig Foilseachán na gComhphobal Eorpach.\
\
Féadfaidh Parlaimint na hEorpa, áfach, a cuid Rialacha Nós Imeachta a leasú ó am go ham. Tá an leagan atá i bhfeidhm ar fáil ar láithreán gréasáin Pharlaimint na hEorpa (http://www.europarl.europa.eu).\
\
Is é atá sa téacs atá i gcló iodálach ná léirmhínithe ar na Rialacha (de bhun Riail 211).',
            'lastUpdated' :  'An nuashonrú is déanaí: 13 Meitheamh 2017',
            'legalNotice' :  'Fógra dlíthiúil'
        },{
            'id' :  10,
            'code' :  'hr',
            'title' :  'KORISNE INFORMACIJE',   
            'text': 'U skladu s odlukama Parlamenta da u svojim dokumentima koristi rodno neutralni jezik, Poslovnik je prilagođen tako da uzima u obzir odgovarajuće smjernice koje je 13. veljače 2008. prihvatila skupina na visokoj razini o jednakosti spolova i raznolikosti, a Predsjedništvo podržalo 19. svibnja 2008.\
\
Poslovnik Europskog parlamenta objavljuje se periodički u obliku knjižice i u Službenom listu Europske unije. Ta se izdanja mogu dobiti u Uredu za publikacije Europske unije.\
\
Ipak, Europski parlament može s vremena na vrijeme izmijeniti svoj Poslovnik. Inačica koja je na snazi dostupna je na internetskoj stranici Europskog parlamenta (http://www.europarl.europa.eu).\
\
Ukošeni tekst upućuje na tumačenje Poslovnika (u skladu s člankom 226.).',
            'lastUpdated' :  'Posljednje ažuriranje: 14. lipnja 2017.',
            'legalNotice' :  'Pravna napomena'
        },{
            'id' :  11,
            'code' :  'it',
            'title' :  'INFORMAZIONI UTILI',   
            'text': "Conformemente alla decisione del Parlamento sulla neutralità di genere, nel linguaggio utilizzato nei suoi documenti, il regolamento è stato adattato per tenere conto delle linee guida in materia adottate il 13 febbraio 2008 dal gruppo ad alto livello sulla parità di genere e la diversità e approvate il 19 maggio 2008 dall'Ufficio di presidenza.\
\
Il regolamento del Parlamento europeo è pubblicato periodicamente sotto forma di opuscolo e nella Gazzetta Ufficiale dell'Unione europea. Può essere acquistato presso l'Ufficio delle pubblicazioni dell'Unione europea.\
\
Il Parlamento europeo può, tuttavia, apportare modifiche al suo Regolamento. La versione in vigore è disponibile presso il sito internet del Parlamento europeo (http://www.europarl.europa.eu).\
\
L'uso del corsivo indica che si tratta di un'interpretazione del regolamento (ai sensi dell'articolo 211).",
            'lastUpdated' :  'Ultimo aggiornamento: 20 giugno 2017',
            'legalNotice' :  'Avviso legale'
        },{
            'id' :  12,
            'code' :  'lv',
            'title' :  'NODERĪGA INFORMĀCIJA',   
            'text': 'Saskaņā ar Parlamenta lēmumiem par dzimumneitrālas valodas lietošanu tā dokumentos Reglaments ir pielāgots, lai ņemtu vērā vadlīnijas šajā jautājumā, kas apstiprinātas ar Augstā līmeņa darba grupas par dzimumu līdztiesību 2008. gada 13. februāra lēmumu, ko apstiprinājis Prezidijs 2008. gada 19. maijā.\
\
Eiropas Parlamenta Reglamentu periodiski publicē bukleta veidā un Eiropas Savienības Oficiālajā Vēstnesī. Šos izdevumus var saņemt Eiropas Kopienu Oficiālo publikāciju birojā.\
\
Eiropas Parlaments tomēr var grozīt šo Reglamentu. Spēkā esošaja versija ir pieejama Eiropas Parlamenta mājas lapā (http://www.europarl.europa.eu).\
\
Kursīvā doti Reglamenta komentāri (226. panta nozīmē).',
            'lastUpdated' :  'Pēdējā atjaunošana - 2017. gada 13. jūnija',
            'legalNotice' :  'Juridisks paziņojums'
        },{
            'id' :  13,
            'code' :  'lt',
            'title' :  'NAUDINGA INFORMACIJA',   
            'text': 'Kai Europos Parlamento darbo tvarkos taisyklėse nurodoma į vyriškos lyties asmenį, ši nuoroda taip pat reiškia ir moteriškos lyties asmenį bei atvirkščiai, nebent iš konteksto aišku, kad yra priešingai.\
\
Europos Parlamento darbo tvarkos taisyklės leidžiamos periodiškai atskiru leidiniu bei Europos Sąjungos oficialiajame leidinyje. Šiuos leidinius galima įsigyti Europos Sąjungos leidinių biure.\
\
Europos Parlamentas laikas nuo laiko gali keisti savo Darbo tvarkos taisykles. Aktualią redakciją galima rasti Europos Parlamento interneto svetainėje (http://www.europarl.europa.eu).\
\
Tekstas kursyvu yra straipsnio išaiškinimas (pagal 226 straipsnį).',
            'lastUpdated' :  'Atnaujinta: 2017 m. birželio 13 d.',
            'legalNotice' :  'Teisinis pranešimas'
        },{
            'id' :  14,
            'code' :  'hu',
            'title' :  'HASZNOS INFORMÁCIÓK',   
            'text': 'A Parlamentnek a dokumentumaiban a nemek szempontjából semleges nyelv használatára vonatkozó döntéseivel összhangban, valamint a nemek közötti egyenlőséggel és sokféleséggel foglalkozó magas szintű csoport által 2008. február 13-án elfogadott és az elnökség által 2008, május 19-én jóváhagyott iránymutatások figyelembevétele érdekében az Eljárási Szabályzatot kiigazították.\
\
Az Európai Parlament eljárási szabályzatát időszakonként könyv alakban és az Európai Unió Hivatalos Lapjában is kihirdetik. E kiadások beszerezhetők az Európai Unió Kiadóhivatalánál.\
\
Az Európai Parlament azonban időről-időre módosítja az Eljárási Szabályzatot. A hatályban levő változat rendelkezésre áll az Európai Parlament honlapján (http://www.europarl.europa.eu).\
\
A cikkek értelmezését (a 226. cikknek megfelelően) dőlt betűs szedés jelzi.',
            'lastUpdated' :  'Utolsó frissítés: 2017. június 13.',
            'legalNotice' :  'Jogi nyilatkozat'
        },{
            'id' :  15,
            'code' :  'mt',
            'title' :  'INFORMAZZJONI UTLI',   
            'text': "Skond id-deċiżjonijiet tal-Parlament dwar l-użu ta' lingwa li tuża ġens newtrali fid-dokumenti tiegħu, ir-Regoli ta' Proċedura ġew adattati biex iqisu l-linji gwida fuq dak is-suġġett approvati mill-Grupp ta' Livell Għoli fuq l-Ugwaljanza Bejn is-Sessi u d-Diversità fit-13 ta' Frar 2008 u endorsjati mill-Bureau fid-19 ta' Mejju 2008\
\
Ir-Regoli ta' Proċedura tal-Parlament Ewropew jiġu ppubblikati perjodikament fi ktieb żgħir kif ukoll fil-Ġurnal Uffiċjali ta' l-Unjoni Ewropea. Dawn l-edizzjonijiet jistgħu jinkisbu mill-Uffiċju għall-Pubblikazzjonijiet Uffiċjali tal-Unjoni Ewropea. Madankollu, il-Parlament Ewropew jista' jemenda tali Regoli ta' Proċedura minn żmien għall-ieħor. Il-verżjoni attwali hija disponibbli fil-website tal-Parlament Ewropew (http://www.europarl.europa.eu).\
\
Test li jinsab bil-korsiv jindika interpretazzjoni tar-Regoli (skond l-Artikolu 226).",
            'lastUpdated' :  "Aġġornata l-aħħar: 16 ta' Novembru 2017",
            'legalNotice' :  'Avviż legali'
        },{
            'id' :  16,
            'code' :  'nl',
            'title' :  'HANDLEIDING VOOR DE GEBRUIKER',   
            'text': 'Overeenkomstig de beslissingen van het Parlement aangaande sekseneutraal taalgebruik in zijn documenten, is het Reglement aangepast teneinde rekening te houden met de dienaangaande door de werkgroep op hoog niveau voor gendergelijkheid en diversiteit op 13 februari 2008 goedgekeurde en door het Bureau op 19 mei 2008 bekrachtigde richtsnoeren.\
\
Het Reglement van het Europees Parlement wordt regelmatig in boekvorm en in het Publicatieblad van de Europese Unie gepubliceerd. Deze uitgaven zijn verkrijgbaar bij het Bureau voor officiële publicaties van de Europese Unie.\
\
Het Europees Parlement kan zijn Reglement echter van tijd tot tijd wijzigen. De vigerende versie is altijd te vinden op de website van het Europees Parlement (http://www.europarl.europa.eu).\
\
De cursief gedrukte teksten zijn interpretaties (cf. artikel 211).',
            'lastUpdated' :  'Laatst bijgewerkt op: 13 juni 2017',
            'legalNotice' :  'Juridische mededeling'
        },{
            'id' :  17,
            'code' :  'pl',
            'title' :  'PRZYDATNE INFORMACJE',   
            'text': 'Zgodnie z decyzją Parlamentu w sprawie używania w swoich dokumentach języka neutralnego płciowo, Regulamin Parlamentu Europejskiego został dostosowany w celu uwzględnienia wytycznych w tym zakresie zatwierdzonych przez grupę wysokiego szczebla ds. równości kobiet i mężczyzn w dniu 13 lutego 2008 r. i przyjętych w dniu 19 maja 2008 r..\
\
Regulamin Parlamentu Europejskiego jest regularnie publikowany w formie książkowej oraz w Dzienniku Urzędowym Unii Europejskiej. Egzemplarze Regulaminu można otrzymać w Urzędzie Publikacji Unii Europejskiej.\
\
Parlament Europejski może jednak dokonywać co pewien czas zmian w Regulaminie. Obowiązująca wersja dostępna jest na stronie internetowej Parlamentu Europejskiego (http://www.europarl.europa.eu).\
\
Fragmenty tekstu pisane kursywą zawierają wykładnię postanowień Regulaminu (w rozumieniu art. 226).',
            'lastUpdated' :  'Ostatnia aktualizacja: 7 lutego 2018',
            'legalNotice' :  'Informacja prawna'
        },{
            'id' :  18,
            'code' :  'pt',
            'title' :  'CONSELHOS PRÁTICOS',   
            'text': 'De acordo com as decisões do Parlamento sobre a utilização nos seus documentos de uma linguagem neutra do ponto de vista do género, o Regimento foi adaptado tendo em conta as orientações nessa matéria aprovadas em 13 de Fevereiro de 2008 pelo grupo de alto nível sobre a igualdade dos géneros e a diversidade e validadas pela Mesa em 19 de Maio de 2008.\
\
O Regimento do Parlamento Europeu é publicado regularmente sob a forma de brochura e no Jornal Oficial da União Europeia, podendo ser adquirido no Serviço das Publicações das Comunidades Europeias.\
\
Contudo, o Parlamento Europeu pode alterar o seu Regimento. A versão em vigor está disponível na página de internet do Parlamento Europeu (http://www.europarl.europa.eu).\
\
Os textos em itálico reproduzem as interpretações do articulado (nos termos do artigo 226.º).',
            'lastUpdated' :  'Última actualização: 13 de Junho de 2017',
            'legalNotice' :  'Advertência jurídica'
        },{
            'id' :  19,
            'code' :  'ro',
            'title' :  'INDICAŢII UTILE',   
            'text': 'română',
            'lastUpdated' :  '„În conformitate cu decizia Parlamentului privind folosirea unui limbaj neutru din punct de vedere al genului în documentele sale, Regulamentul de procedură a fost adaptat pentru a lua în considerare orientările privind acest subiect aprobate de Grupul la nivel înalt privind egalitatea de gen şi diversitatea la 13 februarie 2008 şi aprobate de Birou la 19 mai 2008.\
\
Regulamentul de procedură al Parlamentului European se publică periodic sub formă de broşură şi în Jurnalul Oficial al Uniunii Europene. Regulamentul poate fi obţinut la punctele de vânzare ale Oficiului pentru Publicaţii al Uniunii Europene.\
\
Periodic, Parlamentul European aduce modificări regulamentului. Versiunea în vigoare este disponibilă pe site-ul Parlamentului European (http://www.europarl.europa.eu).\
\
Textele cu caractere cursive corespund unor interpretări (în sensul articolului 226) ale dispoziţiilor din prezentul regulament.”',
            'lastUpdated' :  'Ultima actualizare: 13 iunie 2017',
            'legalNotice' :  'Notă juridică'
        },{
            'id' :  20,
            'code' :  'sk',
            'title' :  'INFORMÁCIA',   
            'text': 'Rokovací poriadok, v súlade s rozhodnutiami Parlamentu o používaní rodovo neutrálneho jazyka vo svojich dokumentoch, zohľadňuje usmernenia v tejto veci, schválené skupinou na vysokej úrovni pre rodovú rovnosť a diverzitu 13. februára 2008 a potvrdené predsedníctvom 19. mája 2008.\
\
Rokovací poriadok Európskeho parlamentu sa pravidelne vydáva vo forme brožúry a uverejňuje v Úradnom vestníku Európskej únie. Tieto vydania je možné získať prostredníctvom Úradu pre oficiálne publikácie Európskych spoločenstiev.\
\
Európsky parlament však niekedy môže svoj rokovací poriadok zmeniť. Platná verzia je dostupná na internetovej stránke Európskeho parlamentu (http://www.europarl.europa.eu).\
\
Text uvedený kurzívou je výkladom rokovacieho poriadku (v súlade s článkom 226).',
            'lastUpdated' :  'Posledná úprava: 13. júna 2017',
            'legalNotice' :  'Právne oznámenie'
        },{
            'id' :  21,
            'code' :  'sl',
            'title' :  'KORISTNE INFORMACIJE',   
            'text': 'V skladu z odločitvijo Parlamenta o uporabi spolno nevtralnega jezika v svojih dokumentih je bil Poslovnik spremenjen na način, da upošteva smerice o tem, kot jih je odobrila skupina na visoki ravni za enakost med spoloma in raznolikost dne 13. februarja 2008 in jih je podprlo predsedstvo dne 19. maja 2008.\
\
Poslovnik Evropskega parlamenta se redno izdaja kot knjižica in objavlja v Uradnem listu Evropske unije. Naroči se lahko pri Uradu za uradne publikacije Evropskih skupnosti.\
\
Mogoče so spremembe poslovnika. Veljavna različica je dostopna na spletni strani Evropskega parlamenta (http://www.europarl.europa.eu).\
\
Razlaga členov (na podlagi člena 226) je zapisana v poševnem tisku.',
            'lastUpdated' :  'Zadnja posodobitev: 13. junij 2017',
            'legalNotice' :  'Pravno obvestilo'
        },{
            'id' : 22,
            'code' :  'fi',
            'title' :  'HYÖDYLLISTÄ TIETÄÄ',   
            'text': 'Euroopan parlamentin työjärjestys julkaistaan säännöllisin väliajoin erillisenä kirjasena ja se julkaistaan myös Euroopan unionin virallisessa lehdessä. Työjärjestystä voi tilata Euroopan unionin julkaisutoimiston myyntiosastolta.\
\
Euroopan parlamentti voi kuitenkin aika ajoin muuttaa työjärjestystään. Kulloinkin voimassa oleva versio on aina saatavilla Euroopan parlamentin kotisivuilla (http://www.europarl.europa.eu).\
\
Kursiivilla painetut tekstin osat ovat työjärjestyksen tulkintoja (226 artiklan mukaisesti).',
            'lastUpdated' :  'Päivitetty viimeksi: 14. kesäkuuta 2017',
            'legalNotice' :  'Oikeudellinen huomautus' 
        },{
            'id' :  23,
            'code' :  'sv',
            'title' :  'UPPLYSNINGAR',   
            'text': 'I enlighet med parlamentets beslut om användningen av könsneutralt språk i sina handlingar har arbetsordningen anpassats för att ta hänsyn till de riktlinjer beträffande denna fråga som antogs av högnivågruppen för jämställdhet mellan kvinnor och män samt mångfald den 13 februari 2008 och som godkändes av presidiet den 19 maj 2008.\
\
Europaparlamentets arbetsordning utges regelbundet som trycksak och publiceras i Europeiska unionens officiella tidning. Den kan införskaffas genom distributionsställen tillhörande Europeiska unionens publikationbyrå.\
\
Europaparlamentet kan emellertid ändra sin arbetsordning. Den gällande versionen av arbetsordningen finns på Europaparlamentets hemsida (http://www.europarl.europa.eu).\
\
Kursiveringar i texten betyder att det rör sig om en tolkning av arbetsordningen (enligt artikel 226).',
            'lastUpdated' :  'Senaste uppdatering: 13 juni 2017',
            'legalNotice' :  'Rättsligt meddelande' 
        } 

    ];
    
    
    return {
        list: list
    }

}]);

