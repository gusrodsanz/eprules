/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('rules_cs', [])


.service('Rules_cs', [function(){


var listRules = [
{
'id': 1,
'title': 'Článek 1 : Evropský parlament',
'text': '1.   Evropský parlament je shromážděním zvoleným podle Smluv, podle aktu ze dne 20. září 1976 o volbě členů Evropského parlamentu ve všeobecných a přímých volbách (dále jen "akt ze dne 20. září 1976")  a podle vnitrostátních právních předpisů odvozených od Smluv.\
\
2.   Osoby zvolené do Evropského parlamentu se označují jako:\
\
   "Членове на Европейския парламент" v bulharštině,\
\
   "Diputados al Parlamento Europeo" ve španělštině,\
\
   "Poslanci Evropského parlamentu" v češtině,\
\
   "Medlemmer af Europa-Parlamentet" v dánštině,\
\
   "Mitglieder des Europäischen Parlaments" v němčině,\
\
   "Euroopa Parlamendi liikmed" v estonštině,\
\
   "Βoυλευτές τoυ Ευρωπαϊκoύ Κoιvoβoυλίoυ" v řečtině,\
\
   "Members of the European Parliament" v angličtině,\
\
   "Députés au Parlement européen" ve francouzštině,\
\
   "Feisirí de Pharlaimint na hEorpa" v irštině,\
\
   "Zastupnici u Europskom parlamentu" v chorvatštině,\
\
   "Deputati al Parlamento europeo" v italštině,\
\
   "Eiropas Parlamenta deputāti" v lotyštině,\
\
   "Europos Parlamento nariai" v litevštině,\
\
   "Európai Parlamenti Képviselők" v maďarštině,\
\
   "Membri tal-Parlament Ewropew" v maltštině,\
\
   "Leden van het Europees Parlement" v holandštině,\
\
   "Posłowie do Parlamentu Europejskiego" v polštině,\
\
   "Deputados ao Parlamento Europeu" v portugalštině,\
\
   "Deputaţi în Parlamentul European" v rumunštině,\
\
   "Poslanci Európskeho parlamentu" ve slovenštině,\
\
   "Poslanci Evropskega parlamenta" ve slovinštině,\
\
   "Euroopan parlamentin jäsenet" ve finštině,\
\
   "Ledamöter av Europaparlamentet" ve švédštině.'
},
{
'id': 2,
'title': 'Článek 2 : Nezávislý mandát',
'text': "V souladu s čl. 6 odst. 1 aktu ze dne 20. září 1976 a s čl. 2 odst. 1 a čl. 3 odst. 1 statutu poslanců Evropského parlamentu vykonávají poslanci svůj mandát svobodně a nezávisle, nejsou vázáni žádnými pokyny a mandát, který obdrží, není vázaný."
},
{
'id': 3,
'title': 'Článek 3 : Ověřování pověřovacích listin',
'text': "1.   Po všeobecných volbách do Evropského parlamentu vyzve předseda příslušné orgány členských států, aby neprodleně oznámily Parlamentu jména zvolených poslanců, aby všichni poslanci mohli zasednout v Parlamentu s platností od okamžiku zahájení prvního zasedání následujícího po volbách.\
\
Zároveň předseda upozorní tyto orgány na příslušná ustanovení aktu ze dne 20. září 1976 a vyzve je, aby přijaly opatření nezbytná k tomu, aby nedošlo k případům neslučitelnosti s výkonem mandátu poslance Evropského parlamentu.\
\
2.   Poslanci, jejichž zvolení bylo oznámeno Parlamentu, učiní předtím, než zasednou v Parlamentu, písemné prohlášení, že nezastávají žádnou funkci neslučitelnou s výkonem mandátu poslance Evropského parlamentu ve smyslu čl. 7 odst. 1 nebo 2 aktu ze dne 20. září 1976. Po všeobecných volbách bude toto prohlášení učiněno, je-li to možné, nejpozději šest dnů před prvním zasedáním Parlamentu následujícím po volbách. Dokud nejsou ověřeny pověřovací listiny poslanců nebo není rozhodnuto o případném sporu a za předpokladu, že předtím podepsali výše uvedené písemné prohlášení, zasedají poslanci v Parlamentu a v jeho orgánech a požívají všech práv, která jsou s tím spojena.\
\
Pokud je na základě skutečností ověřitelných ze zdrojů přístupných veřejnosti zjištěno, že poslanec zastává funkci neslučitelnou s výkonem mandátu poslance Evropského parlamentu ve smyslu čl. 7 odst. 1 nebo 2 aktu ze dne 20. září 1976, Parlament na základě informace poskytnuté předsedou oznámí uvolnění mandátu.\
\
3.   Na základě zprávy příslušného výboru ověří Parlament bezodkladně pověřovací listiny a rozhodne o platnosti mandátu každého nově zvoleného poslance a rovněž o případných sporech, které mu byly předloženy podle ustanovení aktu ze dne 20. září 1976, kromě sporů, které na základě uvedeného aktu spadají výlučně do působnosti ustanovení vnitrostátních předpisů, na něž uvedený akt odkazuje.\
\
Zpráva příslušného výboru se opírá o oficiální oznámení jednotlivých členských států, která uvádějí konečné výsledky voleb se jmény zvolených kandidátů a všech náhradníků, spolu s jejich pořadím v souladu s výsledky hlasování.\
\
Mandát poslance může být potvrzen, pouze pokud poslanec učinil písemná prohlášení podle tohoto článku a přílohy I jednacího řádu.\
\
4.   Na základě návrhu příslušného výboru Parlament neprodleně ověří pověřovací listiny jednotlivých poslanců, kteří nahrazují odcházející poslance, a může se kdykoli vyjádřit ke sporu ohledně platnosti mandátu jakéhokoli poslance.\
\
5.   Pokud je poslanec jmenován v důsledku odstoupení kandidátů ze stejné listiny, zajistí příslušný výbor, aby toto odstoupení proběhlo v souladu s duchem a literou aktu ze dne 20. září 1976 a čl. 4 odst. 2 jednacího řádu.\
\
6.   Příslušný výbor zajistí, aby orgány členského státu nebo Unie předaly neprodleně Parlamentu veškeré informace, které by mohly mít vliv na způsobilost poslance nebo na způsobilost či pořadí náhradníků, a jde-li o jmenování,  aby uvedly datum platnosti tohoto jmenování.\
\
Zahájí-li příslušné orgány členských států řízení, které by mohlo vést ke ztrátě mandátu poslance, požádá předseda tyto orgány, aby ho pravidelně informovaly o stavu řízení, a postoupí tuto věc příslušnému výboru. Na návrh tohoto výboru může Parlament zaujmout k dané věci postoj."
},
{
'id': 4,
'title': 'Článek 4 : Délka funkčního období poslanců',
'text': "1.   Funkční období poslance začíná a končí v souladu s články 5 a 13 aktu ze dne 20. září 1976.\
\
2.   Poslanec, který se vzdává mandátu, oznámí tuto skutečnost předsedovi spolu se dnem účinnosti, přičemž doba mezi dnem oznámení a dnem, k němuž se poslanec mandátu vzdává, nesmí být delší než tři měsíce. Toto oznámení musí mít formu úředního zápisu sepsaného v přítomnosti generálního tajemníka nebo jeho zástupce, podepsaného generálním tajemníkem nebo jeho zástupcem a dotčeným poslancem a musí být neprodleně předloženo příslušnému výboru, který ho zařadí na pořad jednání své nejbližší schůze následující po obdržení tohoto dokumentu.\
\
Jestliže se příslušný výbor domnívá, že se poslanec vzdal mandátu v souladu s aktem ze dne 20. září 1976, je mandát prohlášen za uvolněný s platností od data, které tento poslanec uvedl v úředním zápisu, a předseda informuje o této skutečnosti Parlament.\
\
Jestliže se příslušný výbor domnívá, že se poslanec nevzdal mandátu v souladu s aktem ze dne 20. září 1976, navrhne Parlamentu, aby mandát za uvolněný neprohlásil.\
\
3.   Pokud nebyla před začátkem příštího dílčího zasedání naplánována schůze příslušného výboru, zpravodaj příslušného výboru neprodleně posoudí každé řádné oznámení poslance o tom, že se vzdává mandátu. Pokud by prodlení při posuzování tohoto oznámení mělo mít negativní následky, postoupí zpravodaj toto oznámení předsedovi výboru a podle odstavce 2 ho požádá, aby:\
\
-   jménem výboru informoval předsedu Parlamentu, že mandát může být prohlášen za uvolněný, nebo\
\
-   svolal mimořádnou schůzi výboru, na níž budou projednány konkrétní problémy, které zpravodaj zjistil.\
\
4.   Pokud příslušné orgány členských států nebo Unie či dotčený poslanec oznámí předsedovi jmenování nebo zvolení do funkce, která se neslučuje s výkonem mandátu poslance Evropského parlamentu ve smyslu čl. 7 odst. 1 nebo 2 aktu ze dne 20. září 1976, předseda o tom informuje Parlament, který prohlásí mandát za uvolněný s platností od data vzniku této neslučitelnosti.\
\
Pokud příslušné orgány členského státu oznámí předsedovi, že podle právních předpisů tohoto členského státu skončilo funkční období poslance Evropského parlamentu buď v důsledku další neslučitelnosti ve smyslu čl. 7 odst. 3 aktu ze dne 20. září 1976, nebo zbavením mandátu podle čl. 13 odst. 3 uvedeného aktu, informuje předseda Parlament, že daný mandát skončil dnem, který sdělily příslušné orgány členského státu. Pokud není datum uvedeno, považuje se za den skončení mandátu datum, kdy tento členský stát oznámil skončení mandátu.\
\
5.   Pokud orgány členských států nebo Unie informují předsedu o funkci, kterou mají v úmyslu svěřit poslanci, předseda postoupí příslušnému výboru otázku slučitelnosti navrhované funkce s aktem ze dne 20. září 1976 a informuje Parlament, poslance a příslušné orgány o závěrech přijatých tímto výborem.\
\
6.   Pokud Parlament potvrdí, že došlo k uvolnění mandátu, předseda o tom vyrozumí dotčený členský stát a vyzve jej, aby mandát neprodleně obsadil.\
\
7.   Parlament může prohlásit mandát za neplatný nebo odmítnout potvrdit uvolnění mandátu, pokud poslanec mandát přijal nebo se jej vzdal na základě věcné nepřesnosti nebo souhlasu zatíženého vadou."
},
{
'id': 5,
'title': 'Článek 5 : Výsady a imunity',
'text': "1.   Poslanci požívají výsad a imunit stanovených Protokolem č. 7 o výsadách a imunitách Evropské unie.\
\
2.   Při výkonu svých pravomocí týkajících se výsad a imunit jedná Parlament v zájmu zachování své integrity jakožto demokratického zákonodárného shromáždění a s cílem zajistit nezávislost poslanců při plnění jejich povinností. Poslanecká imunita není osobní výsadou poslanců, nýbrž zárukou nezávislosti Evropského parlamentu jako celku a jeho poslanců.\
\
3.   Doklad laissez-passer Evropské unie umožňující poslanci volný pohyb v členských státech a v jiných zemích, které jej uznávají jakožto platný cestovní doklad, vydává poslanci na jeho žádost Evropská unie za podmínky schválení předsedou Parlamentu.\
\
4.   Pro účely plnění svých parlamentních povinností mají všichni poslanci právo aktivně se podílet na činnosti výborů a delegací Parlamentu v souladu s ustanoveními jednacího řádu.\
\
5.   Poslanci mají právo nahlížet do jakéhokoli spisu Parlamentu nebo výboru, kromě osobních spisů a účtů, do nichž mohou nahlížet pouze poslanci, kterých se týkají. Výjimky z této zásady pro zacházení s dokumenty, ke kterým může být veřejnosti zakázán přístup podle nařízení (ES) č. 1049/2001(1) , jsou stanoveny v článku 210a.\
\
Se souhlasem předsednictva lze poslanci, na základě odůvodněného rozhodnutí, odepřít právo nahlédnout do dokumentu Parlamentu, jestliže předsednictvo po vyslechnutí dotčeného poslance dospěje k závěru, že toto nahlédnutí by způsobilo nepřijatelné poškození institucionálních zájmů Parlamentu nebo veřejného zájmu a že dotčený poslanec požaduje nahlédnutí do tohoto dokumentu ze soukromých a osobních důvodů. Poslanec se může proti tomuto rozhodnutí písemně odvolat do jednoho měsíce od jeho doručení. Aby mohlo být toto odvolání považováno za přípustné, musí být odůvodněno. O odvolání rozhodne Parlament bez rozpravy v průběhu dílčího zasedání, které následuje po podání odvolání.\
\
\
(1)	Nařízení (ES) č. 1049/2001 ze dne 30. května 2001 o přístupu veřejnosti k dokumentům Evropského Parlamentu, Rady a Komise (Úř. vest. L 145, 31.5.2001, s. 43)."
},
{
'id': 6,
'title': 'Článek 6 : Zbavení imunity',
'text': "1.   Každá žádost o zbavení imunity se posuzuje v souladu s články 7, 8 a 9 Protokolu č. 7 o výsadách a imunitách Evropské unie a se zásadami uvedenými v čl. 5 odst. 2 jednacího řádu.\
\
2.   Pokud je poslanec povinen vypovídat jako svědek nebo soudní znalec, není nutné žádat o zbavení poslanecké imunity za předpokladu, že:\
\
-   poslanec se nemusí dostavit v den a dobu, kdy by mu to znemožňovalo nebo ztěžovalo plnění jeho parlamentních povinností, nebo může poskytnout výpověď písemnou či jinou formou, jež mu neztěžuje plnění jeho parlamentních povinností; a\
\
-   poslanec není povinen svědčit o důvěrných informacích, které získal při plnění svých parlamentních povinností a jejichž zveřejnění nepovažuje za vhodné."
},
{
'id': 7,
'title': 'Článek 7 : Ochrana výsad a imunit',
'text': "1.   V případech, kdy orgány členského státu údajně porušily nebo údajně hodlají porušit výsady nebo imunity současného nebo bývalého poslance, může být Parlament v souladu s čl. 9 odst. 1 požádán, aby rozhodl, zda došlo nebo zda je pravděpodobné, že dojde, k porušení těchto výsad a imunit.\
\
2.   Tuto žádost o ochranu výsad a imunit lze podat zejména tehdy, je-li možné se domnívat, že by tyto okolnosti   představovaly  správní či jiné omezení volného pohybu poslance, který jede na místo zasedání Parlamentu nebo se z něj vrací, nebo správní či jiné omezení poslance vyjádřit názor nebo hlasovat během plnění svých povinností, nebo že by dané okolnosti spadaly do oblasti působnosti článku 9 Protokolu č. 7 o výsadách a imunitách Evropské unie.\
\
3.   Žádost o ochranu výsad a imunit poslance není přípustná, pokud již byla s ohledem na tytéž skutečnosti podána žádost o zbavení nebo ochranu imunity daného poslance, a to bez ohledu na to, zda bylo k této dřívější žádosti přijato rozhodnutí či nikoli.\
\
4.   Pokud již byla s ohledem na tytéž skutečnosti podána žádost o zbavení imunity určitého poslance, žádost o ochranu výsad a imunit tohoto poslance se již dále neposuzuje.\
\
5.   Pokud bylo přijato rozhodnutí neochránit výsady a imunity určitého poslance, může tento poslanec výjimečně požádat o přezkoumání tohoto rozhodnutí, jestliže předloží v souladu s čl. 9 odst. 1 jednacího řádu nové důkazy. Žádost o přezkoumání rozhodnutí není přípustná, pokud bylo proti tomuto rozhodnutí zahájeno řízení na základě článku 263 Smlouvy o fungování Evropské unie nebo pokud má předseda Parlamentu za to, že nově předložené důkazy nejsou dostatečně podloženy na to, aby odůvodňovaly přezkoumání rozhodnutí."
},
{
'id': 8,
'title': 'Článek 8 : Naléhavé opatření předsedy Parlamentu s cílem potvrdit imunitu',
'text': "1.    V naléhavém případě, pokud jsou při zadržení poslance nebo omezení jeho svobody pohybu zjevně porušeny jeho výsady a imunity, může předseda Parlamentu po konzultaci s předsedou a zpravodajem příslušného výboru z vlastního podnětu potvrdit výsady a imunity dotčeného poslance. Předseda Parlamentu uvedený podnět oznámí tomuto výboru a informuje Parlament.\
\
2.    Pokud předseda Parlamentu využije pravomocí, které jsou mu svěřeny podle odstavce 1, výbor vezme na své nejbližší schůzi podnět předsedy Parlamentu na vědomí. Výbor může, pokud to považuje za nezbytné, vypracovat zprávu a předložit ji Parlamentu."
},
{
'id': 9,
'title': 'Článek 9 : Imunitní řízení',
'text': "1.   Každá žádost o zbavení poslanecké imunity, s níž se příslušný orgán členského státu obrací na předsedu Parlamentu, nebo žádost současného či bývalého poslance o ochranu jeho výsad a imunit je oznámena v Parlamentu a postoupena příslušnému výboru.\
\
2.   Se souhlasem dotčeného poslance či bývalého poslance může příslušnou žádost podat jiný poslanec, který může dotčeného poslance či bývalého poslance zastupovat ve všech fázích daného řízení.\
\
Poslanec, který zastupuje dotčeného poslance či bývalého poslance, se nepodílí na přijímání rozhodnutí ve výboru.\
\
3.   Výbor projedná žádosti o zbavení poslanecké imunity nebo žádosti o ochranu výsad a imunit neprodleně, avšak s přihlédnutím k jejich poměrné složitosti.\
\
4.   Výbor předloží návrh odůvodněného rozhodnutí, kterým doporučí přijetí či zamítnutí žádosti o zbavení imunity nebo žádosti o ochranu výsad a imunit. Pozměňovací návrhy nejsou přípustné. Je-li daný návrh zamítnut, má se za to, že bylo přijato opačné rozhodnutí.\
\
5.   Výbor může požádat příslušný orgán o informace nebo odůvodnění, které považuje za nezbytné k tomu, aby mohl zaujmout stanovisko, zda má být poslanec zbaven imunity nebo zda má být jeho imunita ochráněna.\
\
6.   Dotčený poslanec musí dostat příležitost vyjádřit se a může předložit jakékoli dokumenty nebo jiné písemné důkazy, které považuje za relevantní.\
\
Dotčený poslanec nesmí být přítomen rozpravám o žádosti o zbavení jeho poslanecké imunity nebo o její ochranu, s výjimkou jeho slyšení.\
\
Předseda výboru vyzve poslance k tomu, aby se v uvedený den a v uvedenou dobu k záležitosti vyjádřil. Dotčený poslanec se může svého práva na vyjádření vzdát.\
\
Jestliže se dotčený poslanec v návaznosti na tuto výzvu k vyjádření nedostaví, má se za to, že se svého práva na vyjádření vzdal, pokud nepožádal o to, aby byl ze slyšení v uvedený den a v uvedenou dobu omluven, a pokud svou žádost nezdůvodnil. Předseda výboru rozhoduje o tom, zda lze žádosti o omluvu vzhledem k uvedeným důvodům vyhovět. Dotčenému poslanci není dovoleno se proti tomuto rozhodnutí odvolat.\
\
Jestliže předseda výboru žádosti o omluvu vyhoví, vyzve dotčeného poslance, aby se k dané záležitosti vyjádřil v jiný den a v jinou dobu. Jestliže se dotčený poslanec na základě této druhé výzvy ke slyšení nedostaví, řízení pokračuje, aniž by byl poslanec vyslechnut. Další žádosti o omluvu či slyšení se již nepřijímají.\
\
7.   Pokud se žádost o zbavení imunity nebo o její ochranu týká více obvinění, může být o každém z nich rozhodnuto zvlášť. Výbor může ve své zprávě ve výjimečných případech navrhnout, aby se zbavení imunity nebo její ochrana vztahovala pouze na trestní stíhání a aby poslanec, dokud není rozsudek pravomocný, nemohl být zadržen či vzat do vazby, nebo aby proti němu nemohla být přijata jiná opatření, která by mu bránila ve výkonu mandátu.\
\
8.   Výbor může předložit odůvodněné stanovisko k pravomoci daného orgánu a k přípustnosti žádosti, ale za žádných okolností se nesmí vyslovit o vině či nevině poslance, ani o tom, zda názory nebo činy, které jsou poslanci přisuzovány, odůvodňují trestní stíhání, a to ani v případě, že se výbor při posuzování žádosti podrobně seznámil se skutkovým stavem případu.\
\
9.   Návrh rozhodnutí výboru je zařazen na pořad jednání nejbližšího denního zasedání následujícího po dni, kdy byl předložen. K tomuto návrhu nelze předkládat pozměňovací návrhy.\
\
Rozprava se u každého návrhu na zbavení či zachování imunity nebo na ochranu výsady či imunity omezí na důvody pro a proti.\
\
Aniž je dotčen článek 164, nesmí poslanec, o jehož výsadách a imunitách se jedná, promluvit v rozpravě.\
\
O návrhu či návrzích rozhodnutí obsažených ve zprávě se hlasuje při prvním hlasování následujícím po rozpravě.\
\
Poté, co Parlament věc projedná, se hlasuje o každém návrhu obsaženém ve zprávě odděleně. Jestliže byl návrh zamítnut, považuje se za přijaté opačné rozhodnutí.\
\
10.   Předseda okamžitě sdělí rozhodnutí Parlamentu dotčenému poslanci a příslušnému orgánu dotčeného členského státu spolu se žádostí, aby byl předseda informován o vývoji příslušného řízení a o soudních rozhodnutích přijatých v rámci tohoto řízení. Jakmile předseda obdrží tuto informaci, sdělí ji Parlamentu způsobem, který považuje za nejvhodnější, případně po konzultaci s příslušným výborem.\
\
11.   Výbor se zabývá těmito věcmi a nakládá s veškerými dokumenty, které obdržel, s co největší důvěrností. Výbor vždy projedná žádosti týkající se imunitního řízení na neveřejné schůzi.\
\
12.   Parlament se zabývá pouze žádostmi o zbavení poslanecké imunity, které mu předložily justiční orgány nebo stálé zastoupení členského státu.\
\
13.   Výbor vypracuje zásady pro uplatňování tohoto článku.\
\
14.   Jakýkoli dotaz příslušného orgánu týkající se rozsahu výsad nebo imunit poslanců se projednává podle výše uvedených ustanovení."
},
{
'id': 10,
'title': 'Článek 10 : (vypouští se)',
'text': ""
},
{
'id': 11,
'title': 'Článek 11 : Finanční zájmy poslanců a pravidla chování',
'text': "1.   Parlament stanoví pravidla pro transparentnost finančních zájmů poslanců prostřednictvím kodexu chování přijatého většinou všech poslanců, který je přílohou k tomuto jednacímu řádu(1).\
\
Tato pravidla nesmí jinak narušovat nebo omezovat výkon mandátu poslanců nebo výkon s ním spojených politických či jiných činností.\
\
2.   Poslanci by měli zavést ustálenou praxi setkávat se pouze se zástupci zájmových skupin, kteří jsou zaregistrováni v rejstříku transparentnosti, zřízeném na základě dohody mezi Evropským parlamentem a Evropskou komisí o rejstříku transparentnosti (2).\
\
3.   Chování poslanců se vyznačuje vzájemnou úctou, vychází z hodnot a zásad vymezených ve Smlouvách a zejména v Listině základních práv a musí ctít důstojnost Parlamentu. Dále nesmí ohrozit řádný chod parlamentní činnosti, udržování bezpečnosti a pořádku v prostorách Parlamentu nebo fungování jeho zařízení.\
\
Při parlamentních rozpravách se poslanci nesmí uchylovat k hanlivým, rasistickým nebo xenofobním výrokům či chování a nesmí vyvěšovat transparenty.\
\
Poslanci dodržují pravidla Parlamentu pro nakládání s důvěrnými informacemi.\
\
Nedodržení těchto zásad a pravidel může vést k použití opatření v souladu s články 165, 166 a 167.\
\
4.   Uplatňování tohoto článku nesmí nijak omezovat živost a bezprostřednost parlamentních rozprav nebo svobodu projevu poslanců.\
\
Při uplatňování tohoto článku se plně dodržují výsadní práva poslanců vymezená v primárním právu Unie a ve statutu poslanců.\
\
Uplatňování tohoto článku vychází ze zásady transparentnosti a zaručuje, že jakékoli příslušné ustanovení je oznámeno poslancům, kteří jsou osobně informováni o svých právech a povinnostech.\
\
5.   Pokud osoba, kterou poslanec zaměstnává, nebo jiná osoba, které poslanec umožnil přístup do prostor Parlamentu či k jeho zařízení, poruší pravidla chování stanovená v odstavci 3, mohou být dotčenému poslanci případně uloženy sankce stanovené v článku 166.\
\
6.   Kvestoři určí maximální počet asistentů, které může každý poslanec zaregistrovat.\
\
7.   Pravidla chování a práva a výsady bývalých poslanců se stanoví rozhodnutím předsednictva. S bývalými poslanci nesmí být zacházeno rozdílným způsobem.\
\
\
(1)	Viz příloha I.\
(2)	Dohoda ze dne 16. dubna 2014 mezi Evropským parlamentem a Evropskou komisí o rejstříku transparentnosti pro organizace a osoby samostatně výdělečně činné, jež se podílejí na tvorbě a provádění politik EU (Úř. věst. L 277, 19.9.2014, s. 11)."
},
{
'id': 12,
'title': 'Článek 12 : Vnitřní vyšetřování vedené Evropským úřadem pro boj proti podvodům',
'text': "Společná pravidla stanovená v interinstitucionální dohodě ze dne 25. května 1999 o vnitřním vyšetřování vedeném Evropským úřadem pro boj proti podvodům (OLAF)(1), která obsahují opatření nezbytná pro usnadnění vyšetřování vedených tímto úřadem, se v Parlamentu použijí v souladu s rozhodnutím Parlamentu ze dne 18. listopadu 1999(2).\
\
\
(1)	Úř. věst. L 136, 31.5.1999, s. 15.\
(2)	Rozhodnutí Parlamentu ze dne 18. listopadu 1999 o podmínkách vnitřního vyšetřování v souvislosti s předcházením podvodům, úplatkářství a jakékoli nedovolené činnosti poškozující zájmy Společenství."
},
{
'id': 13,
'title': 'Článek 13 : Pozorovatelé',
'text': "1.   Pokud byla podepsána smlouva o přistoupení státu k Evropské unii, může předseda se souhlasem Konference předsedů vyzvat parlament přistupujícího členského státu, aby ze svých členů vybral počet pozorovatelů odpovídající počtu křesel v Evropském parlamentu přidělených tomuto státu po přistoupení.\
\
2.   Do doby vstupu smlouvy o přistoupení v platnost se tito pozorovatelé účastní jednání Parlamentu a jsou oprávněni hovořit ve výborech a politických skupinách. Nemají však právo hlasovat či kandidovat na funkce v rámci Parlamentu ani nezastupují Parlament navenek. Jejich účast nemá na jednání Parlamentu žádný právní účinek.\
\
3.   Postavení pozorovatelů je srovnatelné s postavením poslance, pokud jde o využívání zařízení Parlamentu a náhradu cestovních výdajů a výdajů na pobyt vzniklých při jejich činnosti jako pozorovatelů."
},
{
'id': 14,
'title': 'Článek 14 : Dočasný předseda',
'text': "1.   Zasedání konanému podle čl. 146 odst. 2 a každému jinému zasedání konanému za účelem volby předsedy a předsednictva předsedá odstupující předseda nebo, není-li to možné, jeden z odstupujících místopředsedů určený v souladu s jejich hierarchií, nebo nemůže-li ani jeden z nich, služebně nejstarší poslanec, dokud není zvolen předseda.\
\
2.   Po dobu předsednictví poslance, který zastává funkci dočasného předsedy podle odstavce 1, se neprojednávají žádné záležitosti, kromě záležitostí týkajících se volby předsedy nebo ověření pověřovacích listin podle čl. 3 odst. 2 druhého pododstavce. Vyskytne-li se během jeho předsednictví jiná záležitost týkající se ověření pověřovacích listin, postoupí ji příslušnému výboru."
},
{
'id': 15,
'title': 'Článek 15 : Nominace a obecná ustanovení',
'text': "1.   Předseda a po něm místopředsedové a kvestoři jsou voleni tajným hlasováním v souladu s článkem 180a.\
\
Nominace podávají se souhlasem kandidátů pouze politické skupiny nebo poslanci dosahující přinejmenším nízké prahové hodnoty. Před každým kolem hlasování lze podávat nové nominace.\
\
Jestliže počet kandidátů nepřesáhne počet volných míst, jsou kandidáti voleni aklamací, pokud  poslanci nebo jedna či více politických skupin dosahující přinejmenším vysoké prahové hodnoty nepožádá o tajné hlasování.\
\
Jestliže má být na jediném hlasovacím lístku zvolen více než jeden nejvyšší funkcionář, je hlasování platné pouze tehdy, byla-li odevzdána více než polovina dostupných hlasů.\
\
2.   Při volbě předsedy, místopředsedů a kvestorů by mělo být zohledněno spravedlivé zastoupení jednotlivých politických názorů, jakož i genderová a zeměpisná vyváženost."
},
{
'id': 16,
'title': 'Článek 16 : Volba předsedy – úvodní projev',
'text': "1.   Nominace na předsedu se podávají poslanci zastávajícímu funkci dočasného předsedy podle článku 14, který je oznámí Parlamentu. Jestliže po třech kolech volby nezíská žádný kandidát absolutní většinu odevzdaných hlasů, uskuteční se čtvrté kolo odchylně od čl. 15 odst. 1 pouze mezi dvěma poslanci, kteří získali nejvyšší počet hlasů ve třetím kole. V případě rovnosti hlasů je prohlášen za zvoleného starší z kandidátů.\
\
2.   Jakmile je předseda zvolen, uvolní poslanec zastávající funkci dočasného předsedy podle článku 14 předsednické křeslo. Úvodní projev může pronést pouze zvolený předseda."
},
{
'id': 17,
'title': 'Článek 17 : Volba místopředsedů',
'text': "1.   Po zvolení předsedy se na jediném hlasovacím lístku volí místopředsedové. Kandidáti, kteří v prvním kole volby získají absolutní většinu odevzdaných hlasů, se považují za zvolené do čtrnáctého místa podle pořadí získaných hlasů. Jestliže je počet zvolených kandidátů nižší než počet míst, která mají být obsazena, uskuteční se za stejných podmínek druhé kolo k obsazení zbývajících míst. Jestliže je zapotřebí třetí kolo, postačuje ke zvolení na zbývající místa poměrná většina. V případě rovnosti hlasů jsou prohlášeni za zvolené nejstarší poslanci.\
\
2.   S výhradou čl. 20 odst. 1 závisí hierarchie místopředsedů na pořadí, v jakém byli zvoleni, a v případě rovnosti hlasů na věku.\
\
Jestliže byli místopředsedové zvoleni aklamací, proběhne tajné hlasování, které stanoví jejich hierarchii."
},
{
'id': 18,
'title': 'Článek 18 : Volba kvestorů',
'text': "Parlament volí pět kvestorů stejným postupem jako při volbě místopředsedů."
},
{
'id': 19,
'title': 'Článek 19 : Délka funkčního období nejvyšších funkcionářů',
'text': "1.   Funkční období předsedy, místopředsedů a kvestorů je dva a půl roku.\
\
Pokud poslanec změní politickou skupinu, ponechá si funkci člena předsednictva nebo kvestora po zbytek svého dvouapůlletého funkčního období.\
\
2.   Jestliže dojde k uvolnění některé z těchto funkcí před uplynutím této doby, zvolený poslanec vykonává funkci pouze po zbývající dobu funkčního období svého předchůdce."
},
{
'id': 20,
'title': 'Článek 20 : Uvolněné funkce',
'text': "1.   Jestliže je nezbytné, aby předseda, místopředseda nebo kvestor byli nahrazeni, je jejich nástupce zvolen podle příslušných ustanovení týkajících se volby do dotčené funkce.\
\
Nově zvolený místopředseda vždy zaujímá pořadí svého předchůdce v dané hierarchii.\
\
2.   Jestliže se uvolní funkce předsedy, vykonává tuto funkci místopředseda, který po něm následuje v hierarchii, dokud není zvolen nový předseda."
},
{
'id': 21,
'title': 'Článek 21 :  Předčasné ukončení výkonu funkce',
'text': "Konference předsedů může třípětinovou většinou odevzdaných hlasů pocházejících nejméně ze tří politických skupin navrhnout Parlamentu, aby odvolal z funkce předsedu Parlamentu,  místopředsedu Parlamentu, kvestora, předsedu nebo místopředsedu výboru, předsedu nebo místopředsedu meziparlamentní delegace nebo jakéhokoli jiného funkcionáře zvoleného v Parlamentu, pokud má za to, že se dotčený poslanec dopustil závažného pochybení. O tomto návrhu Parlament rozhodne dvoutřetinovou většinou odevzdaných hlasů, která představuje většinu všech poslanců.\
\
Pokud zpravodaj poruší ustanovení kodexu chování poslanců Evropského parlamentu v souvislosti s finančními zájmy a střety zájmů(1), může být výborem, který jej jmenoval, ze své funkce odvolán, a to z podnětu předsedy Parlamentu a na návrh Konference předsedů. Většiny hlasů, které jsou požadovány v prvním pododstavci, se použijí obdobně na každou z fází tohoto postupu.\
\
\
(1)	Viz příloha I"
},
{
'id': 22,
'title': 'Článek 22 : Povinnosti předsedy',
'text': "1.   Předseda řídí všechny činnosti Parlamentu a jeho orgánů v souladu s tímto jednacím řádem a má veškeré pravomoci nezbytné k tomu, aby předsedal jednáním Parlamentu a zajistil jejich řádný průběh.\
\
2.   Povinností předsedy je zahajovat, přerušovat a ukončovat zasedání; rozhodovat o přípustnosti pozměňovacích návrhů a dalších textů předložených k hlasování, jakož i o přípustnosti parlamentních otázek; zajišťovat dodržování tohoto jednacího řádu, udržovat pořádek, udělovat slovo řečníkům, ukončovat rozpravy, dávat hlasovat a oznamovat výsledky hlasování; a postupovat výborům veškerá sdělení, která se jich týkají.\
\
3.   Předseda může promluvit v rozpravě pouze tehdy, pokud ji shrnuje nebo pokud napomíná řečníky, jestliže se odchýlili od tématu. Pokud se chce sám zúčastnit rozpravy, uvolní předsednické křeslo a nezaujme jej, dokud není rozprava o dané věci ukončena.\
\
4.   Parlament je v mezinárodních vztazích, při slavnostních příležitostech a v administrativních, právních a finančních věcech zastupován předsedou, který může tyto pravomoci přenést na jiné osoby.\
\
5.   Předseda odpovídá za bezpečnost a nedotknutelnost prostor Evropského parlamentu."
},
{
'id': 23,
'title': 'Článek 23 : Povinnosti místopředsedů',
'text': "1.   Jestliže je předseda nepřítomen nebo neschopen plnit své povinnosti, či přeje-li si účastnit se rozpravy podle čl. 22 odst. 3, nahradí ho jeden z místopředsedů určený v souladu s hierarchií.\
\
2.   Místopředsedové plní rovněž povinnosti, které jim ukládá článek 25, čl. 27 odst. 3 a 5 a čl. 71 odst. 3.\
\
3.   Předseda může přenést na místopředsedy jakékoli povinnosti, například zastupování při zvláštních slavnostech či aktech. Předseda může zejména pověřit jednoho z místopředsedů plněním povinností předsedy stanovených v článku 129 a čl. 130 odst. 2."
},
{
'id': 24,
'title': 'Článek 24 : Složení předsednictva',
'text': "1.   Předsednictvo se skládá z předsedy a čtrnácti místopředsedů Parlamentu.\
\
2.    Kvestoři jsou členy předsednictva s poradním hlasem.\
\
3.   Jestliže hlasování v předsednictvu skončí rovností hlasů, rozhoduje hlas předsedy."
},
{
'id': 25,
'title': 'Článek 25 : Povinnosti předsednictva',
'text': "1.   Předsednictvo plní povinnosti, které mu ukládá tento jednací řád.\
\
2.   Předsednictvo přijímá finanční, organizační a administrativní rozhodnutí ve věcech týkajících se vnitřní organizace Parlamentu, jeho sekretariátu a orgánů.\
\
3.   Předsednictvo na návrh generálního tajemníka nebo politické skupiny přijímá finanční, organizační a administrativní rozhodnutí ve věcech týkajících se poslanců.\
\
4.   Předsednictvo přijímá rozhodnutí ve věcech týkajících se průběhu zasedání.\
\
5.   Předsednictvo přijímá ustanovení podle článku 35 týkající se nezařazených poslanců.\
\
6.   Předsednictvo rozhoduje o organizační struktuře sekretariátu Parlamentu a stanoví pravidla týkající se administrativního a finančního postavení úředníků a ostatních zaměstnanců.\
\
7.   Předsednictvo sestavuje předběžný odhad výdajů Parlamentu.\
\
8.   Předsednictvo vydává vnitřní směrnice pro kvestory a může je pověřit plněním určitých úkolů.\
\
9.   Předsednictvo je orgánem odpovědným za povolování schůzí a pracovních cest výborů mimo běžná pracovní místa a za udělování slyšení, jakož i za povolování studijních a informativních cest zpravodajů.\
\
Pokud jsou tyto schůze nebo pracovní cesty povoleny, určí se jazykový režim na základě pravidel pro uplatňování mnohojazyčnosti přijatých předsednictvem. Stejné pravidlo platí pro delegace.\
\
10.   Předsednictvo jmenuje generálního tajemníka podle článku 222.\
\
11.   Předsednictvo stanoví prováděcí pravidla k předpisům o politických stranách a nadacích na evropské úrovni a pravidla upravující jejich financování.\
\
12.   Předsednictvo stanoví pravidla pro nakládání s důvěrnými informacemi ze strany Parlamentu, jeho orgánů, funkcionářů a ostatních poslanců a přihlédne přitom k jakékoli interinstitucionální dohodě uzavřené v této věci. Tato pravidla se zveřejní v Úředním věstníku Evropské unie.\
\
13.   Předseda nebo předsednictvo mohou pověřit jednoho nebo více členů předsednictva obecnými nebo specifickými úkoly, které jsou v pravomoci předsedy nebo předsednictva. Zároveň stanoví způsoby a prostředky jejich provádění.\
\
14.   Předsednictvo jmenuje dva místopředsedy, jejichž úkolem je udržování vztahů s vnitrostátními parlamenty.\
\
15.   Předsednictvo jmenuje místopředsedu, jehož úkolem je organizovat strukturované konzultace s evropskou občanskou společností o významných tématech.\
\
16.   Předsednictvo odpovídá za provádění statutu poslanců a na základě ročního rozpočtu rozhoduje o výši příspěvků."
},
{
'id': 26,
'title': 'Článek 26 : Složení Konference předsedů',
'text': "1.   Konference předsedů se skládá z předsedy Parlamentu a předsedů politických skupin. Předseda politické skupiny se může nechat zastupovat členem své skupiny.\
\
2.   Předseda Parlamentu poskytne nezařazeným poslancům příležitost vyjádřit své názory a poté jednoho z nich vyzve k účasti na schůzích Konference předsedů bez hlasovacího práva.\
\
3.   Konference předsedů usiluje o dosažení shody ve věcech, které jí jsou postoupeny.\
\
Pokud nelze dosáhnout shody, o věci se hlasuje tak, že váha hlasu závisí na počtu poslanců v každé politické skupině."
},
{
'id': 27,
'title': 'Článek 27 : Povinnosti Konference předsedů',
'text': "1.   Konference předsedů plní povinnosti, které jí ukládá tento jednací řád.\
\
2.   Konference předsedů přijímá rozhodnutí ve věci organizace práce Parlamentu a ve věcech týkajících se plánování legislativní činnosti.\
\
3.   Konference předsedů je orgánem odpovědným za záležitosti související se vztahy Parlamentu s ostatními orgány a institucemi Evropské unie a s vnitrostátními parlamenty členských států. Rozhodnutí o mandátu a složení delegace Parlamentu, která se má zúčastnit konzultací v Radě a v ostatních orgánech Evropské unie o zásadních otázkách rozvoje Evropské unie (jednání šerpů), jsou přijímána na základě příslušných postojů přijatých Parlamentem a zohledňují rozmanitost politických názorů zastoupených v Parlamentu. Místopředsedové pověření udržováním vztahů Parlamentu s vnitrostátními parlamenty pravidelně informují Konferenci předsedů o své činnosti v této oblasti.\
\
4.   Konference předsedů je orgánem odpovědným za záležitosti související se vztahy s nečlenskými zeměmi a s institucemi a organizacemi mimo Evropskou unii.\
\
5.   Konference předsedů je odpovědná za organizaci strukturovaných konzultací o významných tématech s evropskou občanskou společností. Tyto konzultace mohou zahrnovat organizaci veřejných diskusí o tématech obecného evropského zájmu, kterých se mohou účastnit občané, kteří o to projevili zájem. Místopředseda odpovědný za organizaci těchto konzultací pravidelně informuje Konferenci předsedů o své činnosti v této oblasti.\
\
6.   Konference předsedů sestavuje návrhy pořadu jednání dílčích zasedání Parlamentu.\
\
7.   Konference předsedů předkládá Parlamentu návrhy týkající se složení a působnosti výborů, vyšetřovacích výborů, smíšených parlamentních výborů a stálých delegací. Konference předsedů je odpovědná za povolování delegací ad hoc.\
\
8.   Konference předsedů rozhoduje podle článku 36 o způsobu rozdělení křesel v jednacím sále.\
\
9.   Konference předsedů je orgánem odpovědným za udělování svoleni k vypracování zpráv z vlastního podnětu.\
\
10.   Konference předsedů předkládá předsednictvu návrhy na řešení administrativních a rozpočtových otázek týkajících se politických skupin."
},
{
'id': 28,
'title': 'Článek 28 : Povinnosti kvestorů',
'text': "Kvestoři odpovídají za administrativní a finanční záležitosti, které se přímo týkají poslanců, v souladu s pokyny stanovenými předsednictvem, jakož i za jiné úkoly, které jsou jim svěřeny."
},
{
'id': 29,
'title': 'Článek 29 : Konference předsedů výborů',
'text': "1.   Konference předsedů výborů se skládá z předsedů všech stálých nebo zvláštních výborů. Volí svého předsedu.\
\
2.   V nepřítomnosti předsedy řídí schůzi Konference předsedů výborů nejstarší přítomný poslanec.\
\
3.   Konference předsedů výborů může dávat Konferenci předsedů doporučení týkající se práce výborů a návrhů pořadu jednání dílčích zasedání.\
\
4.   Předsednictvo a Konference předsedů mohou pověřovat Konferenci předsedů výborů konkrétními úkoly."
},
{
'id': 30,
'title': 'Článek 30 : Konference předsedů delegací',
'text': "1.   Konference předsedů delegací se skládá z předsedů všech stálých meziparlamentních delegací. Volí svého předsedu.\
\
2.   V nepřítomnosti předsedy řídí schůzi Konference předsedů delegací nejstarší přítomný poslanec.\
\
3.   Konference předsedů delegací může dávat Konferenci předsedů doporučení týkající se práce delegací.\
\
4.   Předsednictvo a Konference předsedů mohou pověřovat Konferenci předsedů delegací konkrétními úkoly.\
\
\
Článek 30a : Setrvání ve funkci v průběhu voleb\
\
Po zvolení nového Parlamentu vykonávají všechny orgány a funkcionáři odstupujícího Parlamentu nadále své funkce až do prvního zasedání nového Parlamentu."
},
{
'id': 31,
'title': 'Článek 31 : Zveřejňování rozhodnutí předsednictva a Konference předsedů',
'text': "1.   Zápisy z jednání předsednictva a Konference předsedů se překládají do všech úředních jazyků a rozesílají se všem poslancům. Tyto zápisy jsou přístupné veřejnosti, pokud předsednictvo nebo Konference předsedů výjimečně nerozhodne u některých bodů zápisu jinak z důvodu zachování důvěrnosti podle čl. 4 odst. 1 až 4 nařízení (ES) č. 1049/2001.\
\
2.   Kterýkoli poslanec může klást otázky týkající se plnění úkolů předsednictva, Konference předsedů a kvestorů. Tyto otázky se předkládají předsedovi písemně, oznámí se poslancům a do třiceti dnů od předložení se spolu s odpovědí zveřejní na internetových stránkách Parlamentu."
},
{
'id': 32,
'title': 'Článek 32 : Zřizování a rozpouštění politických skupin',
'text': "1.   Poslanci se mohou sdružovat ve skupinách podle své politické příslušnosti.\
\
Parlament obvykle neposuzuje politickou příslušnost členů skupiny. Vytvořením skupiny v souladu s tímto článkem se dotčení poslanci automaticky hlásí k politické příslušnosti. Parlament posuzuje, zda byla skupina vytvořena v souladu s jednacím řádem, pouze pokud to dotčení poslanci popírají.\
\
2.   Politická skupina je tvořena poslanci zvolenými nejméně v jedné čtvrtině členských států. Nejnižší počet poslanců nutný k vytvoření politické skupiny je 25.\
\
3.   Jestliže skupina přestane splňovat některou z požadovaných minimálních prahových hodnot, může předseda se souhlasem Konference předsedů povolit pokračování její existence do následujícího ustavujícího zasedání Parlamentu, pokud jsou splněny tyto podmínky:\
\
-   poslanci i nadále zastupují nejméně jednu pětinu členských států;\
\
-   skupina existuje déle než jeden rok.\
\
Předseda tuto výjimku neuplatní v případě, že má dostatečné důvody domnívat se, že dochází k jejímu zneužití.\
\
4.   Poslanec nemůže patřit k více než jedné politické skupině.\
\
5.   Vytvoření politické skupiny je oznámeno předsedovi formou prohlášení. Toto prohlášení musí obsahovat název skupiny, jména jejích členů a jména členů jejího předsednictva. Musí být podepsáno všemi členy skupiny.\
\
6.   Toto prohlášení se přiloží k zápisu z dílčího zasedání, v jehož průběhu bylo oznámeno zřízení dané politické skupiny.\
\
7.   Předseda oznamuje zřizování politických skupin v Parlamentu. Toto oznámení má zpětný právní účinek od okamžiku, kdy skupina oznámila své vytvoření předsedovi v souladu s tímto článkem.\
\
Předseda rovněž oznamuje v Parlamentu rozpouštění politických skupin. Právní účinek tohoto oznámení nastává dnem následujícím po dni, od kterého nejsou splněny podmínky pro existenci dané politické skupiny."
},
{
'id': 33,
'title': 'Článek 33 : Činnosti a právní postavení politických skupin',
'text': "1.   Politické skupiny vykonávají své povinnosti v rámci činností Unie, a to včetně úkolů, které jsou jim přiděleny tímto jednaccím řádem. V rámci organizační struktury generálního sekretariátu Parlamentu mají politické skupiny k dispozici vlastní sekretariát, administrativní zázemí a finanční prostředky, které jsou zahrnuty v rozpočtu Parlamentu.\
\
2.   Na začátku každého volebního období usiluje Konference předsedů o uzavření dohody o postupech, v jejichž rámci bude ve výborech a delegacích, jakož i v rozhodovacích orgánech, zohledněna politická rozmanitost Parlamentu.\
\
3.   Předsednictvo stanoví pravidla pro poskytování, využívání a kontrolu zázemí a prostředků uvedených v odstavci 1, jakož i pravidla týkající se přenesení příslušných pravomocí k plnění rozpočtu a důsledků případného porušení tohoto jednacího řádu, přičemž zohlední veškeré případné návrhy Konference předsedů.\
\
4.   Pravidla stanoví administrativní a finanční důsledky v případě rozpuštění politické skupiny."
},
{
'id': 34,
'title': 'Článek 34 : Meziskupiny',
'text': "1.   Jednotliví poslanci mohou vytvářet meziskupiny nebo jiná neoficiální seskupení poslanců složená z členů různých parlamentních výborů za účelem neformálních výměn názorů na konkrétní otázky napříč různými politickými skupinami a s cílem podporovat kontakty mezi poslanci a občanskou společností.\
\
2.   Tato seskupení musí být při svých činnostech zcela transparentní a nesmí vyvíjet žádnou činnost, která by mohla vést k záměně s oficiálními činnostmi Parlamentu nebo jeho orgánů. Jsou-li dodrženy podmínky stanovené v předpisech přijatých předsednictvem o vytváření těchto seskupení, mohou politické skupiny usnadňovat činnost těchto seskupení tím, že jim poskytují logistickou podporu.\
\
3.   Meziskupiny musí každý rok předložit prohlášení o jakékoliv peněžní či hmotné podpoře (například o službách sekretariátu), která by musela být uvedena v prohlášení podle přílohy I, byla-li by poskytována poslancům jako jednotlivcům.\
\
4.   Kvestoři vedou rejstřík prohlášení uvedených v odstavci 3. Rejstřík je zveřejněn na internetové stránce Parlamentu. Kvestoři stanoví podrobná pravidla pro tato prohlášení a zajistí dodržování tohoto článku."
},
{
'id': 35,
'title': 'Článek 35 :  Nezařazení poslanci',
'text': "1.   Poslanci, kteří nepatří k žádné politické skupině, mají k dispozici sekretariát. Podrobnou organizační úpravu, týkající se disponování tímto sekretariátem, stanoví předsednictvo na návrh generálního tajemníka.\
\
2.   Předsednictvo stanoví statut a parlamentní práva nezařazených poslanců.\
\
3.   Předsednictvo stanoví pravidla pro poskytování, čerpání a kontrolu finančních prostředků, které jsou v rozpočtu Parlamentu určeny k pokrytí výdajů na sekretariát a administrativní zázemí nezařazených poslanců."
},
{
'id': 36,
'title': 'Článek 36 : Způsob rozdělení křesel v jednacím sále',
'text': "Konference předsedů rozhodne o rozdělení křesel v jednacím sále mezi politické skupiny, nezařazené poslance a orgány Unie."
},
{
'id': 37,
'title': 'Článek 37 : Roční plánování',
'text': "1.   Parlament společně s Komisí a Radou stanoví legislativní plán Unie.\
\
Parlament a Komise spolupracují při přípravě pracovního programu Komise, jímž Komise přispívá k ročnímu a víceletému plánování Unie, v souladu s časovým harmonogramem a postupy dohodnutými mezi oběma orgány(1).\
\
2.   Po přijetí pracovního programu Komise si Parlament, Rada a Komise podle bodu 7 interinstitucionální dohody ze dne 13. dubna 2016 o zdokonalení tvorby právních předpisů(2) vymění názory a dohodnou se na společném prohlášení o ročním interinstitucionálním plánování, v němž vytyčí obecné cíle a priority.\
\
Před zahájením jednání s Radou a s Komisí o společném prohlášení uspořádá předseda výměnu názorů s Konferencí předsedů a Konferencí předsedů výborů týkající se obecných cílů a priorit Parlamentu.\
\
Před podpisem společného prohlášení si předseda vyžádá souhlas Konference předsedů.\
\
3.   Předseda zasílá veškerá usnesení Parlamentu o legislativním plánování a prioritách ostatním orgánům, které se účastní legislativního procesu Unie, a parlamentům členských států.\
\
4.   Má-li Komise v úmyslu stáhnout návrh, příslušný výbor vyzve příslušného komisaře, aby s ním tento záměr projednal. Na tuto schůzi může být rovněž pozváno předsednictví Rady. Pokud příslušný výbor se stažením návrhu nesouhlasí, může Komisi požádat, aby učinila prohlášení v Parlamentu. Použije se článek 123.\
\
\
(1)	Rámcová dohoda ze dne 20. října 2010 o vztazích mezi Evropským parlamentem a Evropskou komisí (Úř. věst. L 304, 20.11.2010, s. 47).\
(2)	Interinstitucionální dohoda mezi Evropským parlamentem, Radou Evropské unie a Evropskou komisí ze dne 13. dubna 2016 o zdokonalení tvorby právních předpisů (Úř. věst. L 123, 12.5.2016, s. 1)."
},
{
'id': 38,
'title': 'Článek 38 : Dodržování základních práv',
'text': "1.   Parlament při všech svých činnostech plně dodržuje práva, svobody a zásady uvedené v článku 6 Smlouvy o Evropské unii a hodnoty stanovené v článku 2 této smlouvy.\
\
2.   Pokud se věcně příslušný výbor, politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty domnívají, že návrh legislativního aktu, jako celek nebo jeho části, není v souladu se základními právy Evropské unie, je věc na jejich žádost postoupena výboru příslušnému pro ochranu základních práv.\
\
3.   Tato žádost musí být předložena do čtyř pracovních týdnů ode dne, kdy bylo v Parlamentu oznámeno postoupení věcně příslušnému výboru.\
\
4.   Stanovisko výboru příslušného pro ochranu základních práv tvoří přílohu zprávy věcně příslušného výboru."
},
{
'id': 39,
'title': 'Článek 39 : Ověřování právního základu',
'text': "1.   Pokud je návrh právně závazného aktu postoupen věcně příslušnému výboru, tento výbor nejprve ověří jeho právní základ.\
\
2.   Pokud příslušný výbor zpochybní platnost nebo vhodnost právního základu, a to i v rámci ověřování podle článku 5 Smlouvy o Evropské unii, požádá o stanovisko výbor příslušný pro právní záležitosti.\
\
3.   Mimoto se výbor příslušný pro právní záležitosti může otázkami týkajícími se právního základu zabývat z vlastního podnětu, a to v kterékoli fázi legislativního postupu. V těchto případech o tom řádně informuje věcně příslušný výbor.\
\
4.   Jestliže se výbor příslušný pro právní záležitosti po případné výměně názorů s Radou a Komisí v souladu s postupy dohodnutými na interinstitucionální úrovni(1) rozhodne, že zpochybní platnost nebo vhodnost právního základu, oznámí své závěry Parlamentu. Parlament o nich hlasuje před hlasováním o obsahu návrhu, aniž je tím dotčen článek 63 jednacího řádu.\
\
5.   Jestliže věcně příslušný výbor nebo výbor příslušný pro právní záležitosti nezpochybnil platnost nebo vhodnost právního základu, není přípustné předkládat v plénu pozměňovací návrhy, jejichž cílem je změna právního základu.\
\
\
(1)	Interinstitucionální dohoda ze dne 13. dubna 2016 o zdokonalení tvorby právních předpisů, bod 25 (Úř. věst. L 123, 12.5.2016, s. 1)."
},
{
'id': 40,
'title': 'Článek 40 : Přenesení legislativních pravomocí a svěření prováděcích pravomocí',
'text': "1.   Pokud Parlament posuzuje návrh legislativního aktu, kterým se přenáší pravomoc na Komisi, jak je stanoveno v článku 290 Smlouvy o fungování Evropské unie, věnuje zvláštní pozornost cílům, obsahu, působnosti a době trvání přenesení pravomoci a podmínkám, jimž podléhá.\
\
2.   Pokud Parlament posuzuje návrh legislativního aktu, kterým se svěřují prováděcí pravomoci podle článku 291 Smlouvy o fungování Evropské unie, věnuje pozornost zejména skutečnosti, že při výkonu prováděcí pravomoci není Komise oprávněna legislativní akt měnit ani doplňovat, a to ani v případě prvků, které nejsou podstatné.\
\
3.   Věcně příslušný výbor může kdykoli požádat o stanovisko výbor příslušný k výkladu a uplatňování práva Unie.\
\
4.   Mimoto se výbor příslušný pro výklad a uplatňování práva Unie může otázkami týkajícími se přenesení legislativní pravomoci a svěření prováděcích pravomocí zabývat z vlastního podnětu. V takových případech o tom řádně informuje věcně příslušný výbor."
},
{
'id': 41,
'title': 'Článek 41 : Ověřování finanční slučitelnosti',
'text': "1.   Pokud má návrh právně závazného aktu finanční dopady, Parlament posoudí, zda jsou k dispozici dostatečné finanční prostředky.\
\
2.   Věcně příslušný výbor ověří, zda jsou návrhy právně závazných aktů z finančního hlediska slučitelné s nařízením o víceletém finančním rámci.\
\
3.   Pokud věcně příslušný výbor mění finanční zajištění projednávaného aktu, vyžádá si stanovisko výboru příslušného pro rozpočtové otázky.\
\
4.   Mimoto se výbor příslušný pro rozpočtové otázky může z vlastního podnětu zabývat otázkami týkajícími se finanční slučitelnosti návrhů právně závazných aktů. V takových případech o tom řádně informuje věcně příslušný výbor.\
\
5.   Rozhodne-li se výbor příslušný pro rozpočtové otázky zpochybnit finanční slučitelnost návrhu, oznámí své závěry Parlamentu předtím, než Parlament o návrhu hlasuje."
},
{
'id': 42,
'title': 'Článek 42 : Posuzování dodržování zásad subsidiarity a proporcionality',
'text': "1.   Při posuzování návrhu legislativního aktu věnuje Parlament zvláštní pozornost tomu, zda tento návrh dodržuje zásady subsidiarity a proporcionality.\
\
2.   Pouze výbor příslušný k posuzování dodržování zásady subsidiarity může dát věcně příslušnému výboru doporučení ohledně návrhu legislativního aktu.\
\
3.   S výjimkou naléhavých případů uvedených v článku 4 Protokolu č. 1 o úloze vnitrostátních parlamentů v Evropské unii nesmí věcně příslušný výbor přistoupit ke konečnému hlasování dříve, než uplyne lhůta osmi týdnů stanovená v článku 6 Protokolu č. 2 o používání zásad subsidiarity a proporcionality.\
\
4.   Jestliže vnitrostátní parlament zašle předsedovi Parlamentu odůvodněné stanovisko v souladu s článkem 3 Protokolu č. 1, je tento dokument postoupen věcně příslušnému výboru a pro informaci výboru příslušnému k posuzování dodržování zásady subsidiarity.\
\
5.   Pokud odůvodněná stanoviska vyjadřující nesoulad návrhu legislativního aktu se zásadou subsidiarity představují alespoň třetinu všech hlasů přidělených vnitrostátním parlamentům v souladu s čl. 7 odst. 1 druhým pododstavcem Protokolu č. 2  nebo čtvrtinu těchto hlasů v případě návrhu legislativního aktu předloženého na základě článku 76 Smlouvy o fungování Evropské unie, přijme Parlament rozhodnutí až poté, co autor návrhu uvede, jak hodlá postupovat.\
\
6.   Pokud odůvodněná stanoviska vyjadřující nesoulad návrhu legislativního aktu se zásadou subsidiarity představují v rámci řádného legislativního postupu alespoň prostou většinu hlasů přidělených vnitrostátním parlamentům v souladu s čl. 7 odst. 1 druhým pododstavcem Protokolu č. 2, věcně příslušný výbor po zvážení odůvodněných stanovisek vnitrostátních parlamentů a Komise a po vyslechnutí stanoviska výboru příslušného k posuzování dodržování zásady subsidiarity může doporučit Parlamentu, aby návrh z důvodu porušení zásady subsidiarity zamítl, nebo může předložit Parlamentu jiné doporučení, které může navrhovat změny týkající se dodržování zásady subsidiarity. Stanovisko výboru příslušného k posuzování dodržování zásady subsidiarity je přílohou tohoto doporučení.\
\
Doporučení se předkládá Parlamentu k rozpravě a hlasování. Je-li doporučení zamítnout návrh přijato většinou odevzdaných hlasů, prohlásí předseda postup za ukončený. Pokud Parlament návrh nezamítne, postup pokračuje a zohlední se všechna doporučení, která Parlament schválil."
},
{
'id': 43,
'title': 'Článek 43 : Přístup k dokumentům a poskytování informací Parlamentu',
'text': "1.   Během celého legislativního procesu žádají Parlament a jeho výbory o přístup ke všem dokumentům vztahujícím se k návrhům legislativních aktů, a to za stejných podmínek jako Rada a její pracovní skupiny.\
\
2.   Během posuzování návrhu legislativního aktu žádá příslušný výbor Komisi a Radu, aby jej průběžně informovaly o postupu tohoto návrhu v Radě a v jejích pracovních skupinách, a zejména aby jej informovaly o jakémkoliv vznikajícím kompromisu, který by podstatně změnil původní návrh, nebo o záměru autora vzít svůj návrh zpět."
},
{
'id': 44,
'title': 'Článek 44 : Zastoupení Parlamentu na zasedáních Rady',
'text': "Pokud Rada přizve Parlament k účasti na svém zasedání, předseda Parlamentu požádá předsedu nebo zpravodaje věcně příslušného výboru nebo jiného poslance navrženého tímto výborem, aby zastupoval Parlament."
},
{
'id': 45,
'title': 'Článek 45 : Právo Parlamentu předkládat návrhy',
'text': "V případech, kdy Smlouvy udělují Parlamentu právo podnětu, může příslušný výbor rozhodnout o vypracování zprávy z vlastního podnětu podle článku 52 jednacího řádu.\
\
Zpráva obsahuje:\
\
(a)   návrh usnesení;\
\
(b)   předběžný návrh;\
\
(c)   vysvětlující prohlášení případně obsahující finanční prohlášení.\
\
Pokud přijetí aktu Parlamentem vyžaduje schválení nebo souhlas Rady a stanovisko nebo souhlas Komise, může Parlament po hlasování o navrženém aktu a na návrh zpravodaje rozhodnout o odkladu hlasování o návrhu usnesení do doby, než Rada nebo Komise vyjádří své stanovisko."
},
{
'id': 46,
'title': 'Článek 46 : Žádost, aby Komise předložila návrh',
'text': "1.   Parlament může podle článku 225 Smlouvy o fungování Evropské unie požádat Komisi, aby předložila vhodný návrh na přijetí nového aktu nebo změnu stávajícího aktu. Parlament tak učiní formou usnesení na základě zprávy z vlastního podnětu od příslušného výboru vypracované v souladu s článkem 52 jednacího řádu.  K přijetí usnesení při konečném hlasování je potřebný souhlas většiny všech poslanců. Parlament může zároveň stanovit lhůtu pro předložení tohoto návrhu.\
\
2.   Každý poslanec může podat návrh aktu Unie na základě práva podnětu Parlamentu podle článku 225 Smlouvy o fungování Evropské unie.\
\
Takovýto návrh může společně podat až deset poslanců. Návrh uvádí právní základ a může k němu být připojena důvodová zpráva nepřesahující 150 slov.\
\
Návrh musí být předán předsedovi, který ověří, zda jsou splněny příslušné právní požadavky. Předseda může návrh postoupit výboru příslušnému pro ověření právního základu s žádostí o vypracování stanoviska. Pokud předseda prohlásí návrh za přípustný, oznámí jej v plénu a postoupí jej věcně příslušnému výboru.\
\
Před tímto postoupením věcně příslušnému výboru je návrh přeložen do úředních jazyků, které předseda tohoto výboru pokládá za potřebné pro celkové posouzení.\
\
O dalším postupu rozhodne příslušný výbor do tří měsíců od postoupení a poté, co poskytl autorům návrhu možnost vystoupit ve výboru.\
\
Jména autorů návrhu se uvedou v názvu zprávy.\
\
3.   V usnesení Parlamentu se uvede vhodný právní základ a připojí se k němu doporučení týkající se obsahu požadovaných návrhů.\
\
4.   Pokud má návrh finanční dopady, Parlament uvede, jak zajistit dostatečné finanční prostředky.\
\
5.   Věcně příslušný výbor sleduje pokrok v přípravách navrženého právního aktu Unie, který je vypracováván na zvláštní žádost Parlamentu.\
\
6.   Konference předsedů výborů pravidelně monitoruje, zda Komise dodržuje bod 10 interinstitucionální dohody o zdokonalení tvorby právních předpisů, podle nějž má Komise na žádosti o předložení návrhů odpovědět do tří měsíců prostřednictvím přijetí zvláštního sdělení, v němž oznámí, jak v dané věci zamýšlí dále postupovat. Konference předsedů výborů pravidelně informuje o výsledcích tohoto monitorování Konferenci předsedů."
},
{
'id': 47,
'title': 'Článek 47 : Projednávání právně závazných aktů',
'text': "1.   Předseda postupuje příslušnému výboru k projednání návrhy právně závazných aktů, které Parlament obdržel od ostatních orgánů nebo od členských států.\
\
2.   V případě pochybností může předseda předtím, než oznámí v Parlamentu postoupení příslušnému výboru, předložit Konferenci předsedů otázku ohledně příslušnosti. Konference předsedů přijme rozhodnutí na základě doporučení Konference předsedů výborů nebo předsedy Konference předsedů výborů v souladu s čl. 201a odst. 2\
\
3.   Příslušný výbor může kdykoli jmenovat zpravodaje, který sleduje přípravu návrhu. Příslušný výbor přitom věnuje zvláštní pozornost návrhům, které jsou uvedeny v pracovním programu Komise.\
\
4.   V případě rozporu mezi ustanoveními jednacího řádu týkajícími se druhého a třetího čtení a jiným ustanovením jednacího řádu mají přednost ustanovení týkající se druhého a třetího čtení.\
\
\
Článek 47a : Urychlení legislativních postupů\
\
Příslušný výbor či příslušné výbory se mohou v koordinaci s Radou a Komisí dohodnout na urychlení legislativního postupu u konkrétních návrhů, obzvláště pokud se jedná o návrhy, které jsou ve společném prohlášení o ročním interinstitucionálním plánování podle čl. 37 odst. 2 označeny za prioritní."
},
{
'id': 48,
'title': 'Článek 48 : Legislativní postupy týkající se podnětů jiných orgánů než Komise nebo podnětů členských států',
'text': "1.   Při projednávání podnětů jiných orgánů než Komise nebo podnětů členských států může příslušný výbor pozvat zástupce orgánů či těchto členských států, od nichž podnět pochází, aby svůj podnět představili na schůzi výboru. Zástupci členských států předkládajících podnět mohou být doprovázeni předsednictvím Rady.\
\
2.   Před hlasováním se příslušný výbor dotáže Komise, zda k podnětu zaujme stanovisko nebo zda hodlá v brzké době předložit alternativní návrh. Jestliže Komise potvrdí, že stanovisko zaujme, nepřijme výbor svou zprávu, dokud neobdrží toto stanovisko nebo alternativní návrh.\
\
3.   Pokud byly Parlamentu předloženy souběžně nebo v krátkém časovém odstupu dva nebo více návrhů Komise nebo jiného orgánu nebo členského státu se stejným legislativním záměrem, Parlament o nich vypracuje jedinou zprávu. V této zprávě příslušný výbor uvede, ke kterému textu předkládá pozměňovací návrhy, a na všechny ostatní texty odkáže v legislativním usnesení."
},
{
'id': 49,
'title': 'Článek 49 : Legislativní zprávy',
'text': "1.   Předseda výboru, jemuž byl postoupen návrh právně závazného aktu, navrhne výboru postup, kterým je třeba se řídit.\
\
2.   Po rozhodnutí o postupu, kterým je třeba se řídit, a pokud se nepoužije zjednodušený postup podle článku 50, jmenuje výbor z členů nebo stálých náhradníků zpravodaje k návrhu právě závazného aktu, pokud tak již neučinil na základě čl. 47 odst. 3.\
\
3.   Zpráva výboru obsahuje:\
\
(a)   případné pozměňovací návrhy doplněné stručným odůvodněním, za které je odpovědný jejich autor a o němž se nehlasuje;\
\
(b)   návrh legislativního usnesení podle čl. 59 odst. 5;\
\
(c)   případné vysvětlující prohlášení, které v nutných případech obsahuje finanční rozklad o finančním dopadu zprávy a o její slučitelnosti s víceletým finančním rámcem;\
\
(d)   odkaz na posouzení dopadu provedené Parlamentem, je-li k dispozici."
},
{
'id': 50,
'title': 'Článek 50 : Zjednodušený postup',
'text': "1.   Po prvním projednání návrhu právně závazného aktu může předseda výboru navrhnout jeho schválení bez pozměňovacích návrhů. Nevznesou-li poslanci nebo jedna či více politických skupin dosahující přinejmenším střední prahové hodnoty ve výboru námitku, považuje se navržený postup za schválený. Předseda výboru nebo zpravodaj, pokud byl jmenován, předloží Parlamentu zprávu o schválení návrhu. Použije se čl. 150 odst. 1 druhý pododstavec a odst. 2 a 4.\
\
2.   Předseda výboru může případně navrhnout, aby předseda výboru nebo zpravodaj vypracovali pozměňovací návrhy na základě jednání ve výboru. Nevznesou-li poslanci nebo jedna či více politických skupin dosahující přinejmenším střední prahové hodnoty ve výboru námitku, považuje se navržený postup za schválený a pozměňovací návrhy jsou odeslány členům výboru.\
\
Nevznesou-li poslanci nebo jedna či více politických skupin dosahující přinejmenším střední prahové hodnoty ve výboru námitku vůči těmto pozměňovacím návrhům ve stanovené lhůtě, která nesmí být kratší než deset pracovních dní ode dne odeslání námitky, je zpráva považována za přijatou ve výboru. V tomto případě jsou návrh usnesení a pozměňovací návrhy předloženy Parlamentu bez rozpravy podle čl. 150 odst. 1 druhého pododstavce a odst. 2 a 4.\
\
Jestliže poslanci nebo jedna či více politických skupin dosahující přinejmenším střední prahové hodnoty ve výboru  vznesou námitku vůči těmto pozměňovacím návrhům, hlasuje se o těchto návrzích na další schůzi výboru.\
\
3.   S výjimkou ustanovení týkajících se předložení návrhů Parlamentu se tento článek použije obdobně na stanoviska výborů podle článku 53."
},
{
'id': 51,
'title': 'Článek 51 : Nelegislativní zprávy',
'text': "1.   Pokud výbor vypracovává nelegislativní zprávu, jmenuje zpravodaje ze svých členů nebo ze stálých náhradníků.\
\
2.   Zpráva výboru obsahuje:\
\
(a)   návrh usnesení;\
\
(b)   vysvětlující prohlášení, které v nutných případech obsahuje finanční rozklad o případném finančním dopadu zprávy a o její slučitelnosti s víceletým finančním rámcem;\
\
(c)   znění případných návrhů usnesení, které mají být ve zprávě obsaženy podle čl. 133 odst. 7."
},
{
'id': 52,
'title': 'Článek 52 : Zprávy z vlastního podnětu',
'text': "1.   Pokud má výbor v úmyslu vypracovat nelegislativní zprávu nebo zprávu podle článků 45 či 46 týkající se záležitosti spadající do jeho působnosti, která nebyla postoupena žádnému výboru, může tak učinit pouze se svolením Konference předsedů.\
\
Konference předsedů rozhoduje o žádostech o udělení svolení k vypracování zpráv předložených podle prvního pododstavce podle prováděcích pravidel, která si sama stanoví.\
\
2.   Pokud se Konference předsedů rozhodne, že toto svolení neudělí, musí toto rozhodnutí odůvodnit.\
\
Pokud předmět zprávy spadá do práva podnětu Parlamentu podle článku 45, může Konference předsedů toto svolení neudělit pouze z důvodu nesplnění podmínek stanovených ve Smlouvách.\
\
3.   V případech uvedených v článcích 45 a 46 Konference předsedů rozhodne do dvou měsíců.\
\
4.   Návrhy usnesení předložené Parlamentu se projednávají formou krátkého přednesení stanoveného v článku 151. Pozměňovací návrhy k těmto návrhům usnesení a žádosti o dílčí nebo oddělené hlasování jsou přípustné k projednání v plénu pouze tehdy, pokud je předložil zpravodaj za účelem zohlednění nových informací, nebo nejméně jedna desetina poslanců. Politické skupiny mohou předložit alternativní návrhy usnesení v souladu s čl. 170 odst. 3. U návrhů usnesení výboru a pozměňovacích návrhů k těmto usnesením se použije článek 180. Článek 180 se použije rovněž pro jediné hlasování o alternativních návrzích usnesení.\
\
5.   Odstavec 4 se nepoužije, splňuje-li předmět zprávy podmínky pro projednání při přednostní rozpravě v plénu nebo je-li zpráva navržena podle práva podnětu podle článků 45 nebo 46 nebo byla-li zpráva uznána za strategickou(1).\
\
\
(1)	Viz příslušné rozhodnutí Konference předsedů.\
\
\
Článek 52a : Navrhování zpráv\
\
1.   Zpravodaj je odpovědný za vypracování zprávy výboru a za její předložení Parlamentu jménem tohoto výboru.\
\
2.   Za vysvětlující prohlášení je odpovědný zpravodaj a o tomto prohlášení se nehlasuje. Vysvětlující prohlášení však  musí být v souladu s přijatým zněním návrhu usnesení a s veškerými pozměňovacími návrhy předloženými výborem. Pokud tomu tak není, může předseda výboru vysvětlující prohlášení odstranit.\
\
3.   Zpráva uvádí výsledek hlasování o zprávě jako celku a v souladu s čl. 208 odst. 3 rovněž to, jak jednotliví členové výboru hlasovali.\
\
4.   Pokud se hlasuje o celém textu, může být vypracováno menšinové stanovisko, které může být na žádost jeho autorů předmětem písemného prohlášení v rozsahu nejvýše 200 slov, připojeného k vysvětlujícímu prohlášení.\
\
Předseda výboru řeší spory, které vyvstanou v důsledku uplatňování tohoto odstavce.\
\
5.   Na návrh svého předsedy výboru může výbor stanovit lhůtu, v níž je zpravodaj povinen předložit svůj návrh zprávy. Tato lhůta může být prodloužena nebo může být jmenován nový zpravodaj.\
\
6.   Po uplynutí lhůty může výbor pověřit svého předsedu, aby požádal o zařazení věci, která byla výboru postoupena, na pořad jednání jednoho z příštích denních Parlamentu. Rozprava a hlasování pak mohou být vedeny na základě ústní zprávy příslušného výboru."
},
{
'id': 53,
'title': 'Článek 53 : Stanoviska výborů',
'text': "1.   Jestliže si výbor, jemuž byla otázka postoupena nejdříve, přeje seznámit se se stanoviskem jiného výboru nebo jestliže si jiný výbor přeje sdělit své stanovisko výboru, jemuž byla otázka postoupena nejdříve, požádají tyto výbory předsedu Parlamentu, aby byl podle čl. 201 odst. 2 jmenován jeden výbor jako příslušný výbor a druhý výbor jako výbor, který vypracovává stanovisko.\
\
Výbor, který vypracovává stanovisko, může některého ze svých členů či stálých náhradníků jmenovat zpravodajem pro stanovisko nebo zaslat své stanovisko ve formě dopisu předsedy.\
\
2.   Pokud se stanovisko týká návrhu právně závazného aktu, obsahuje návrhy na změnu textu, který byl postoupen výboru, popřípadě s připojeným krátkými odůvodněními. Za tato odůvodnění je odpovědný jejich autor a nehlasuje se o nich. V případě potřeby předloží výbor, který vypracovává stanovisko, stručné písemné odůvodnění k dokumentu jako celku. Za toto stručné odůvodnění odpovídá zpravodaj pro toto stanovisko.\
\
Pokud se stanovisko netýká návrhu právně závazného aktu, obsahuje návrhy k začlenění do návrhu usnesení předloženého příslušným výborem.\
\
O těchto návrzích na změnu textu a návrzích k začlenění do usnesení příslušný výbor hlasuje.\
\
Stanovisko se zabývá pouze záležitostmi, které spadají do působnosti výboru, který stanovisko vypracovává.\
\
3.   Příslušný výbor stanoví lhůtu, v níž musí výbor, který vypracovává stanovisko, toto stanovisko zaujmout, aby je mohl příslušný výbor vzít v úvahu. Jakékoli změny oznámených lhůt musí příslušný výbor neprodleně sdělit výboru nebo výborům, které vypracovávají stanovisko. Příslušný výbor nesmí dospět ke konečným závěrům před uplynutím uvedené lhůty.\
\
4.   Výbor pověřený vypracováním stanoviska může případně rozhodnout, že svůj postoj předloží ve formě pozměňovacích návrhů, které mají být po svém přijetí předloženy přímo v příslušném výboru. Tyto pozměňovací návrhy předkládá jménem výboru, který vypracovává stanovisko,  jeho předseda nebo zpravodaj.\
\
5.   Výbor pověřený vypracováním stanoviska předloží pozměňovací návrhy uvedené v odstavci 4 ve lhůtě pro předložení pozměňovacích návrhů, kterou stanoví příslušný výbor.\
\
6.   Všechna stanoviska a pozměňovací návrhy přijaté výborem, který vypracovává stanovisko, se připojí ke zprávě příslušného výboru jako přílohy.\
\
7.   Výbory, které vypracovávají stanovisko ve smyslu tohoto článku, nemohou předkládat pozměňovací návrhy k projednání v Parlamentu.\
\
8.   Předseda a zpravodaj výboru, který vypracovává stanovisko, jsou přizváni k účasti na schůzích příslušného výboru jako poradci v rozsahu, v jakém se jednání týká záležitostí společného zájmu."
},
{
'id': 54,
'title': 'Článek 54 : Postup s přidruženými výbory',
'text': "1.   Pokud je Konferenci předsedů postoupena otázka příslušnosti v souladu s článkem 201a a Konference předsedů se na základě přílohy V jednacího řádu domnívá, že záležitost spadá téměř stejnou měrou do působnosti dvou nebo více výborů nebo že různé části dané záležitosti spadají do působnosti dvou nebo více výborů, použije se článek 53 spolu s níže uvedenými ustanoveními:\
\
-   dotčené výbory se společně dohodnou na harmonogramu;\
\
-   zpravodajové se vzájemně informují a snaží se dohodnout se na zněních, která předkládají výborům, a na postoji k pozměňovacím návrhům;\
\
-   dotčení předsedové výborů a zpravodajové jsou vázáni zásadou řádné a loajální spolupráce; společně určí části textu, které spadají do jejich výlučné nebo společné působnosti, a dohodnou se na přesných podmínkách své spolupráce; pokud není dosaženo dohody o vymezení působnosti, předloží se věc na žádost jednoho ze zúčastněných výborů Konferenci předsedů; Konference předsedů může rozhodnout o otázce jejich působnosti nebo o tom, že se uplatní postup společných schůzí výborů podle článku 55; Konference předsedů přijímá své rozhodnutí postupem a ve lhůtě podle článku 201a.\
\
-   příslušný výbor přijme bez hlasování pozměňovací návrhy přidruženého výboru, pokud se týkají záležitostí, které náleží do výlučné působnosti tohoto přidruženého výboru; jestliže příslušný výbor nedbá výlučné kompetence tohoto přidruženého výboru, může uvedený přidružený výbor předložit tyto pozměňovacáí návrhy přímo v plénu; jestliže příslušný výbor nepřijme pozměňovací návrhy, jež náleží do sdílené působnosti tohoto výboru a přidruženého výboru, může přidružený výbor tyto pozměňovací návrhy předložit přímo v plénu;\
\
-   v případě dohodovacího řízení o návrhu musí být v delegaci Parlamentu zpravodaj z každého přidruženého výboru.\
\
Rozhodnutí Konference předsedů použít postup s přidruženými výbory se použije ve všech fázích daného postupu.\
\
Práva související s postavením „příslušného výboru“ jsou vykonávána hlavním příslušným výborem. Při výkonu těchto práv musí hlavní příslušný výbor vzít v úvahu výsady přidruženého výboru. Zejména musí hlavní příslušný výbor dodržovat povinnost ctít zásadu loajální spolupráce, pokud jde o časový harmonogram a právo přidruženého výboru určit pozměňovací návrhy, které se předloží plénu v oblasti jeho výlučné působnosti.\
\
2.   Postup uvedený v tomto článku se nepoužije na doporučení, která přijímá příslušný výbor podle článku 99."
},
{
'id': 55,
'title': 'Článek 55 : Postup společných schůzí výborů',
'text': "1.   Pokud je Konferenci předsedů postoupena otázka příslušnosti v souladu s článkem 201a, může rozhodnout, že se postup společných schůzí výborů a společné hlasování má uplatnit za podmínky, že:\
\
-   daná otázka spadá podle přílohy V neoddělitelně do působnosti několika výborů a\
\
-   Konference předsedů se domnívá, že jde o záležitost zásadního významu.\
\
2.   V takovém případě příslušní zpravodajové vypracují společný návrh zprávy, který projednají a o kterém hlasují zúčastněné výbory na společných schůzích konaných za společného předsednictví předsedů výborů.\
\
Práva související se statutem příslušného výboru mohou být ve všech fázích postupu vykonávána zúčastněnými výbory, pouze pokud jednají společně. Zúčastněné výbory mohou ustavit pracovní skupiny s cílem připravit schůze a hlasování.\
\
3.   Ve druhém čtení řádného legislativního postupu je projednáváno stanovisko Rady v rámci společné schůze zúčastněných výborů, která se v případě, že se předsedové těchto výborů nedohodnou, koná ve středu prvního týdne vyhrazeného pro schůze parlamentních orgánů po sdělení stanoviska Rady Parlamentu. Jestliže není dosaženo dohody ohledně svolání následující schůze, je tato schůze svolána předsedou Konference předsedů výborů. O doporučení pro druhé čtení je hlasováno na společné schůzi na základě společného návrhu, který vypracují příslušní zpravodajové zúčastněných výborů nebo, v případě neexistence společného návrhu, na základě pozměňovacích návrhů předložených v rámci zúčastněných výborů.\
\
Ve třetím čtení řádného legislativního postupu předsedové a zpravodajové zúčastněných výborů vykonávají funkci členů delegace ex officio v dohodovacím výboru."
},
{
'id': 56,
'title': 'Článek 56 : (vypouští se)',
'text': ""
},
{
'id': 57,
'title': 'Článek 57 : (vypouští se)',
'text': ""
},
{
'id': 58,
'title': 'Článek 58 : (vypouští se)',
'text': ""
},
{
'id': 59,
'title': 'Článek 59 : Hlasování v Parlamentu – první čtení',
'text': "1.   Parlament může návrh legislativního aktu schválit, pozměnit nebo zamítnout.\
\
2.   Parlament nejprve hlasuje o návrzích na okamžité zamítnutí návrhu legislativního aktu, který písemně předložil příslušný výbor, politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty.\
\
Je-li tento návrh na zamítnutí přijat, předseda požádá orgán, který předložil původní návrh, aby vzal návrh legislativního aktu zpět.\
\
Jestliže tak tento orgán učiní, prohlásí předseda příslušný postup za ukončený.\
\
Jestliže orgán, který předložil původní návrh, návrh legislativního aktu nevezme zpět, předseda prohlásí první čtení v Parlamentu za ukončené, jestliže Parlament na návrh předsedy výboru nebo zpravodaje příslušného výboru či politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty, nerozhodne o vrácení věci příslušnému výboru k opětovnému projednání.\
\
Jestliže není návrh na zamítnutí přijat, postupuje Parlament podle odstavců 3, 4 a 5.\
\
3.   O veškerých předběžných dohodách předložených příslušným výborem podle čl. 69f odst. 4 se hlasuje přednostně v rámci jediného hlasování, pokud Parlament na žádost politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty místo toho nerozhodne o tom, že přejde k hlasování o pozměňovacích návrzích v souladu s odstavcem 4. V tomto případě Parlament rovněž rozhodne o tom, zda se bude hlasování o pozměňovacích návrzích konat okamžitě. V opačném případě stanoví Parlament novou lhůtu pro pozměňovací návrhy a hlasování proběhne na následujícím denním zasedání.\
\
Jestliže je v rámci tohoto jediného hlasování předběžná dohoda schválena, předseda prohlásí první čtení v Parlamentu za ukončené.\
\
Jestliže v rámci tohoto jediného hlasování předběžná dohoda neobdrží většinu odevzdaných hlasů, předseda stanoví novou lhůtu pro předložení pozměňovacích návrhů k návrhu legislativního aktu. O těchto pozměňovacích návrzích se  poté hlasuje na následujícím denním zasedání s cílem uzavřít první čtení v Parlamentu.\
\
4.   Kromě případů, kdy byl přijat návrh na zamítnutí v souladu s odstavcem 2 nebo kdy byla přijata předběžná dohoda podle odstavce 3, se veškeré pozměňovací návrhy k návrhu legislativního aktu předkládají k hlasování, případně včetně jednotlivých částí předběžné dohody, v jejímž případě byly vzneseny požadavky na dílčí nebo oddělené hlasování nebo kdy byly předloženy konkurenční pozměňovací návrhy.\
\
Před hlasováním Parlamentu o pozměňovacích návrzích může předseda požádat Komisi o stanovisko a Radu o připomínky.\
\
Poté, co Parlament hlasoval o těchto pozměňovacích návrzích,  hlasuje o návrhu legislativního usnesení jako celku, pozměněném či nikoli.\
\
Jestliže je tento návrh legislativního aktu jako celek, pozměněný či nikoli, přijat, předseda prohlásí první čtení v Parlamentu za ukončené, pokud Parlament na žádost předsedy či zpravodaje příslušného výboru nebo politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty nerozhodne, že pro účely interinstitucionálních jednání podle článků 59a a 69f vrátí věc příslušnému výboru.\
\
Jestliže celý návrh legislativního aktu, pozměněný či nikoli, nezíská většinu odevzdaných hlasů, předseda prohlásí první čtení za ukončené, pokud Parlament na žádost předsedy výboru či zpravodaje příslušného výboru nebo politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty nerozhodne o vrácení věci zpět příslušnému výboru k opětovnému projednání.\
\
5.   Po hlasování podle odstavců 2, 3 a 4 a následném hlasování o případných pozměňovacích návrzích k návrhu legislativního usnesení týkajících se procesních požadavků se legislativní usnesení považuje za přijaté. V případě nutnosti se legislativní usnesení podle čl. 193 odst. 2 pozmění, aby odráželo výsledek hlasování podle odstavců 2, 3 a 4.\
\
Text legislativního usnesení a postoje Parlamentu předá předseda Radě a Komisi a v případě, že je původcem návrhu legislativního aktu skupina členských států, Soudní dvůr nebo Evropská centrální banka, rovněž těmto subjektům.\
\
\
Článek 59a : Vrácení příslušnému výboru\
\
Jestliže je na základě článku 59 věc vrácena příslušnému výboru k opětovnému projednání nebo pro účely interinstitucionálních jednání v souladu s článkem 69f, příslušný výbor o výsledku ústně či písemně informuje Parlament, a to ve lhůtě čtyř měsíců. Tuto lhůtu může Konference předsedů prodloužit.\
\
Po vrácení věci výboru umožní hlavní příslušný výbor přidruženému výboru podle článku 54 předtím, než přijme rozhodnutí o postupu, posoudit, které pozměňovací návrhy spadají do jeho výlučné působnosti a zejména určit pozměňovací návrhy, které mají být opětovně předloženy v plénu.\
\
Parlamentu nic nebrání v tom, aby v případě nutnosti rozhodl v návaznosti na zprávu příslušného výboru, kterému byla věc vrácena, o konání závěrečné rozpravy."
},
{
'id': 60,
'title': 'Článek 60 : (vypouští se)',
'text': ""
},
{
'id': 61,
'title': 'Článek 61 : (vypouští se)',
'text': ""
},
{
'id': 62,
'title': 'Článek 62 : (vypouští se)',
'text': ""
},
{
'id': 63,
'title': 'Článek 63 : Opětovné postoupení Parlamentu',
'text': "1.   Předseda na žádost příslušného výboru vyzve Komisi, aby opětovně postoupila své návrhy Parlamentu, pokud:\
\
-   Komise nahradí, podstatně změní nebo má v úmyslu podstatně změnit svůj původní návrh poté, co Parlament přijal své stanovisko, nejde-li o zohlednění postoje Parlamentu;\
\
-   časem nebo změnou okolností se podstatně změní povaha problému, kterého se návrh týkal, nebo\
\
-   od doby, kdy byl přijat postoj Parlamentu, se konaly nové volby do Parlamentu a považuje-li to Konference předsedů za žádoucí.\
\
2.   Jestliže se plánuje změna právního základu, v jejímž důsledku by se na daný návrh již nevztahoval řádný legislativní postup, Parlament, Rada a Komise si v souladu s bodem 25 interinstitucionální dohody o zdokonalení tvorby právních předpisů vymění na danou věc názory prostřednictvím svých předsedů nebo jejich zástupců.\
\
3.   Po výměně názorů uvedené v odstavci 2 předseda Parlamentu na návrh příslušného výboru požádá Radu, aby návrh právně závazného aktu opětovně postoupila Parlamentu, pokud má Komise nebo Rada v úmyslu změnit právní základ návrhu uvedený v postoji Parlamentu v prvním čtení, v důsledku čehož se již neuplatní řádný legislativní postup.\
\
\
Článek 63a : Dohoda z prvního čtení\
\
Pokud Rada podle čl. 294 odst. 4 Smlouvy o fungování Evropské unie informuje Parlament, že schválila jeho postoj, předseda oznámí po dokončení konečné právně-jazykové redakce textu v souladu s článkem 193 jednacího řádu v Parlamentu, že daný legislativní akt byl přijat ve znění, jež odpovídá postoji Parlamentu."
},
{
'id': 64,
'title': 'Článek 64 : Postoupení postoje Rady',
'text': "1.   Postoupení postoje Rady podle článku 294 Smlouvy o fungování Evropské unie se uskuteční tak, že jej předseda oznámí v Parlamentu. Předseda tak učiní poté, co obdrží dokumenty obsahující postoj, veškerá prohlášení v zápisech z jednání Rady o přijetí postoje, odůvodnění přijetí postoje Rady a postoj Komise, řádně přeložené do všech úředních jazyků Evropské unie. Předseda postoj oznámí během nejbližšího dílčího zasedání po obdržení těchto dokumentů.\
\
Před oznámením se předseda po konzultaci s předsedou příslušného výboru nebo se zpravodajem či s oběma ujistí, že text, který obdržel, je skutečně postojem Rady v prvním čtení a že nenastaly okolnosti uvedené v článku 63. V opačném případě hledá předseda vhodné řešení společně s příslušným výborem, a pokud je to možné, po dohodě s Radou.\
\
2.   Postoj Rady se považuje za automaticky postoupený příslušnému výboru v prvním čtení dnem jeho oznámení v Parlamentu.\
\
3.   Seznam těchto postoupení se zveřejňuje v zápisu ze zasedání spolu s názvem příslušného výboru."
},
{
'id': 65,
'title': 'Článek 65 : Prodloužení lhůt',
'text': "1.   Na žádost předsedy příslušného výboru předseda Parlamentu prodlouží lhůty pro druhé čtení podle čl. 294 odst. 14 Smlouvy o fungování Evropské unie.\
\
2.   Předseda oznámí Parlamentu prodloužení lhůt podle čl. 294 odst. 14 Smlouvy o fungování Evropské unie bez ohledu na to, zda byly lhůty prodlouženy na podnět Parlamentu nebo na podnět Rady."
},
{
'id': 66,
'title': 'Článek 66 : Projednání v příslušném výboru',
'text': "1.   Postoj Rady se zařazuje jako prioritní bod pořadu jednání první schůze příslušného výboru, která se má konat po dni postoupení. Rada může být vyzvána, aby přednesla svůj postoj.\
\
2.   Pokud není rozhodnuto jinak, je zpravodajem ve druhém čtení tentýž zpravodaj jako ve čtení prvním.\
\
3.   Ustanovení čl. 69 odst. 2 a 3, týkající se přípustnosti pozměňovacích návrhů k postoji Rady, se vztahují rovněž na projednávání v příslušném výboru; návrhy na zamítnutí společného postoje a pozměňovací návrhy k němu mohou předkládat pouze členové tohoto výboru nebo jejich stálí náhradníci. Výbor rozhoduje většinou odevzdaných hlasů.\
\
4.   Příslušný výbor podá doporučení pro druhé čtení s návrhem schválit, změnit nebo zamítnout postoj Rady. Doporučení obsahuje stručné odůvodnění navrhovaného rozhodnutí.\
\
5.   Články 49, 50, 53 a 188 se nevztahují na druhé čtení."
},
{
'id': 67,
'title': 'Článek 67 : Předkládání dokumentů Parlamentu',
'text': "Postoj Rady a, je-li k dispozici, i doporučení příslušného výboru pro druhé čtení se automaticky zařadí do návrhu pořadu jednání dílčího zasedání konaného v týdnu, v němž středa bezprostředně předchází dni uplynutí tříměsíční lhůty nebo lhůty čtyřměsíční, byla-li prodloužena podle článku 65, pokud věc nebyla projednána na některém z dřívějších dílčích zasedání.\
\
\
Článek 67a : Hlasování v Parlamentu – druhé čtení\
\
1.   Parlament nejprve hlasuje o návrzích na okamžité zamítnutí postoje Rady, které písemně předložil příslušný výbor, politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty. Aby byl takový návrh na zamítnutí přijat, musí získat hlasy většiny všech poslanců Parlamentu.\
\
Jestliže byl tento návrh na zamítnutí přijat, je postoj Rady zamítnut a předseda oznámí v Parlamentu, že je legislativní proces ukončen.\
\
Jestliže návrh na zamítnutí postoje Rady přijat nebyl, postupuje Parlament podle odstavců 2 až 5.\
\
2.   Přednost při hlasování mají jakékoliv předběžné dohody předložené v souladu s čl. 69f odst. 4, o nichž se hlasuje jediným hlasováním, pokud Parlament na žádost politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty nerozhodne okamžitě přistoupit k hlasování o pozměňovacích návrzích podle článku 3.\
\
Jestliže předběžná dohoda získá v jediném hlasování hlasy většiny všech poslanců Parlamentu, předseda oznámí v Parlamentu, že je druhé čtení Parlamentu ukončené.\
\
Jestliže předběžná dohoda v jediném hlasování hlasy většiny poslanců Parlamentu nezíská, postupuje Parlament podle článků 3, 4 a 5.\
\
3.   Kromě případů, kdy byl v souladu s odstavcem 1 přijat návrh na zamítnutí nebo kdy byla v souladu s odstavcem 2 přijata předběžná dohoda, se poté hlasuje o pozměňovacích návrzích k postoji Rady, včetně těch, které jsou obsaženy v předběžné dohodě předložené v souladu s čl. 69f odst. 4 příslušným výborem. Pozměňovací návrh k postoji Rady je přijat, získá-li hlasy většiny všech poslanců Parlamentu.\
\
Před hlasováním o pozměňovacích návrzích může předseda požádat Komisi o stanovisko a Radu o připomínky.\
\
4.   Bez ohledu na hlasování Parlamentu proti přijetí původního návrhu na zamítnutí postoje Rady podle odstavce 1 může Parlament na návrh předsedy příslušného výboru či jeho zpravodaje nebo na doporučení politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty projednat další návrh na zamítnutí postoje Rady po hlasování o pozměňovacích návrzích podle odstavce 2 nebo 3. Aby byl takový návrh přijat, musí získat hlasy většiny všech poslanců Parlamentu.\
\
Jestliže je postoj Rady zamítnut, oznámí předseda v Parlamentu, že je legislativní proces ukončen.\
\
5.   Po hlasování podle odstavců 1 až 4 a následném hlasování o pozměňovacích návrzích k návrhu legislativního usnesení týkajícího se procesních požadavků prohlásí předseda druhé čtení v Parlamentu za ukončené a legislativní usnesení se považuje za přijaté. V případě nutnosti se legislativní usnesení pozmění podle čl. 193 odst. 2, aby odráželo výsledek hlasování podle odstavců 1 až 4 nebo uplatňování článku 69a.\
\
Znění případného legislativního usnesení a postoje Parlamentu předá předseda Radě a Komisi.\
\
Jestliže nebyl podán návrh na zamítnutí nebo změnu postoje Rady, považuje se postoj za schválený."
},
{
'id': 68,
'title': 'Článek 68 : (vypouští se)',
'text': ""
},
{
'id': 69,
'title': 'Článek 69 : Přípustnost pozměňovacích návrhů k postoji Rady',
'text': "1.   Příslušný výbor, politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty mohou předložit pozměňovací návrhy k postoji Rady, které budou projednány v Parlamentu.\
\
2.   Pozměňovací návrhy k postoji Rady jsou přípustné pouze tehdy, jsou-li v souladu s články 169 a 170 a je-li jejich cílem:\
\
(a)   obnovit jako celek nebo částečně postoj přijatý Parlamentem při prvním čtení nebo\
\
(b)   dosáhnout kompromisu mezi Radou a Parlamentem nebo\
\
(c)   změnit část textu postoje Rady, která nebyla zahrnuta do návrhu předloženého v prvním čtení nebo se od něho obsahově liší nebo\
\
(d)   zohlednit nové skutečnosti nebo právní stav, které nastaly v době následující po přijetí postoje Parlamentu v prvním čtení.\
\
Rozhodnutí předsedy prohlásit pozměňovací návrh za přípustný či nepřípustný nelze zpochybnit.\
\
3.   Pokud se v době od prvního čtení konaly nové volby, ale článek 63 nebyl uplatněn, může předseda upustit od omezení přípustnosti stanovených v odstavci 2.\
\
\
Článek 69a : Dohoda z druhého čtení\
\
Pokud nebyl ve lhůtě pro předložení a hlasování o pozměňovacích návrzích nebo návrzích na zamítnutí přijat žádný návrh na zamítnutí postoje Rady ani žádné pozměňovací návrhy k tomuto postoji podle článků 67a a 69, oznámí předseda v Parlamentu, že navržený akt byl přijat.\
\
\
Článek 69b : Obecná ustanovení\
\
Jednání s ostatními orgány za účelem dosažení dohody v rámci legislativního postupu mohou být zahájena výhradně na základě rozhodnutí přijatého v souladu s články 69c až 69e nebo na základě vrácení věci Parlamentem pro účely interinstitucionálních jednání. Tato jednání jsou vedena s ohledem na kodex chování přijatý Konferencí předsedů(1).\
\
\
(1)	Kodex pro vedení jednání v rámci řádného legislativního postupu.\
\
\
Článek 69c : Jednání předcházející prvnímu čtení v Parlamentu\
\
1.   Pokud přijal výbor legislativní zprávu na základě článku 49, může většinou hlasů svých členů rozhodnout, že na základě této zprávy zahájí jednání.\
\
2.   Rozhodnutí o zahájení jednání jsou oznámena na začátku dílčího zasedání následujícího po jejich přijetí ve výboru. Do konce dne následujícího po tomto oznámení v Parlamentu mohou poslanci nebo jedna či více politických skupin dosahující přinejmenším střední prahové hodnoty písemně požádat, aby  se o rozhodnutí výboru zahájit jednání hlasovalo. Parlament k tomuto hlasování přistoupí v průběhu téhož dílčího zasedání.\
\
Není-li tato žádost obdržena ve lhůtě stanovené v prvním pododstavci, předseda o tom informuje Parlament. Jestliže je žádost podána, předseda může bezprostředně před hlasováním dát slovo jednomu řečníkovi hovořícímu ve prospěch rozhodnutí výboru zahájit jednání  a jednomu řečníkovi hovořícímu proti tomuto rozhodnutí. Každý z těchto řečníků může učinit prohlášení v délce nejvýše dvou minut.\
\
3.   Jestliže Parlament zamítne rozhodnutí výboru zahájit jednání, návrh legislativního aktu a zpráva příslušného výboru jsou zařazeny na pořad jednání následujícího dílčího zasedání a předseda stanoví lhůtu pro předložení pozměňovacích návrhů. Použije se čl. 59 odst. 4.\
\
4.   Jednání mohou být zahájena kdykoli po uplynutí lhůty stanovené v odst. 2 prvním pododstavci, nebyla-li podána žádost, aby se o tomto rozhodnutí o zahájení jednání v Parlamentu hlasovalo. Byla-li taková žádost podána, jednání mohou být zahájena kdykoli poté, co rozhodnutí výboru zahájit jednání schválil Parlament.\
\
\
Článek 69d : Jednání předcházející prvnímu čtení v Radě\
\
Pokud Parlament přijal svůj postoj v prvním čtení, představuje tento postoj mandát pro veškerá jednání s ostatními orgány. Příslušný výbor může kdykoli po přijetí tohoto postoje Parlamentu většinou hlasů svých členů rozhodnout o zahájení jednání. Tato rozhodnutí se oznámí v Parlamentu v průběhu dílčího zasedání následujícího po hlasování ve výboru a uvedou se v zápisu.\
\
\
Článek 69e : Jednání předcházející druhému čtení v Parlamentu\
\
Jakmile byl postoj Rady v prvním čtení předán příslušnému výboru, představuje postoj Parlamentu v prvním čtení s výhradou článku 69 mandát pro veškerá jednání s ostatními orgány. Příslušný výbor se může rozhodnout kdykoli poté zahájit jednání.\
\
Pokud postoj Rady v prvním čtení obsahuje prvky, které nebyly obsaženy v návrhu legislativního aktu nebo v postoji Parlamentu v prvním čtení, může výbor přijmout pokyny pro vyjednávací tým, a to i v podobě pozměňovacích návrhů k postoji Rady.\
\
\
Článek 69f : Vedení jednání\
\
1.   Vyjednávací tým Parlamentu vede zpravodaj a předsedá mu předseda příslušného výboru nebo jeho místopředseda určený předsedou výboru. Jeho členy jsou alespoň stínoví zpravodajové z každé politické skupiny, která si přeje účastnit se jednání.\
\
2.   Veškeré dokumenty, které mají být projednávány na jednání s Radou a Komisí (dále jen „třístranné jednání“), musí být poskytnuty vyjednávacímu týmu nejpozději 48 hodin nebo v naléhavých případech nejpozději 24 hodin před konáním daného třístranného jednání.\
\
3.   Po každém třístranném jednání podá předseda vyjednávacího týmu a zpravodaj jménem vyjednávacího týmu zprávu o jednání na nejbližší schůzi příslušného výboru.\
\
Pokud není možné včas svolat schůzi výboru, podají předseda vyjednávacího týmu a zpravodaj jménem vyjednávacího týmu zprávu na schůzi koordinátorů výboru.\
\
4.   Jestliže jednání vedou k předběžné dohodě, je o tom příslušný výbor bezodkladně informován. Dokumenty, v nichž jsou zachyceny výsledky závěrečného třístranného jednání, jsou dány k dispozici příslušnému výboru a zveřejněny. Předběžná dohoda je předložena příslušnému výboru, který rozhodne jediným hlasováním většinou odevzdaných hlasů o tom, zda ji přijme. Jestliže je tato dohoda přijata, je předložena k projednání Parlamentu, přičemž jsou v ní vyznačeny veškeré změny vůči návrhu legislativního aktu.\
\
5.   Pokud mají dotčené výbory postupující podle článků 54 a 55 odlišná stanoviska, předseda Konference předsedů výborů stanoví v souladu se zásadami stanovenými v těchto článcích podrobná pravidla pro zahájení jednání a jejich vedení.\
\
\
Článek 69g : Prodloužení lhůt\
\
1.   Na žádost delegace Parlamentu v dohodovacím výboru prodlouží předseda lhůty ve třetím čtení podle čl. 294 odst. 14 Smlouvy o fungování Evropské unie.\
\
2.   Předseda oznámí Parlamentu prodloužení lhůt podle čl. 294 odst. 14 Smlouvy o fungování Evropské unie bez ohledu na to, zda byly lhůty prodlouženy na podnět Parlamentu nebo na podnět Rady."
},
{
'id': 70,
'title': 'Článek 70 : Svolání dohodovacího výboru',
'text': "Pokud Rada informuje Parlament, že nemůže schválit všechny parlamentní pozměňovací návrhy k postoji Rady, dohodne se předseda s Radou na době a místě první schůze dohodovacího výboru. Šestitýdenní nebo v případě prodloužení osmitýdenní lhůta stanovená v čl. 294 odst. 10 Smlouvy o fungování Evropské unie začíná běžet dnem, kdy se výbor poprvé sejde."
},
{
'id': 71,
'title': 'Článek 71 : Delegace v dohodovacím výboru',
'text': "1.   Delegace Parlamentu v dohodovacím výboru má stejný počet členů jako delegace Rady.\
\
2.   Politické složení delegace odpovídá složení Parlamentu podle politických skupin. Konference předsedů stanoví přesný počet poslanců z každé politické skupiny, kteří se mají účastnit jako členové delegace Parlamentu.\
\
3.   Členové delegace jsou jmenováni politickými skupinami pro každý konkrétní případ, který je předmětem dohodovacího řízení, přednostně z členů příslušného výboru, kromě tří členů, kteří jsou jmenováni jako stálí členové po sobě následujících delegací na dobu dvanácti měsíců. Tři stálí členové jsou jmenováni politickými skupinami z místopředsedů a zastupují alespoň dvě různé politické skupiny. V každém konkrétním případě jsou členy delegace předseda a zpravodaj příslušného výboru v druhém čtení, jakož i zpravodaj z každého přidruženého výboru.\
\
4.   Politické skupiny zastoupené v delegaci jmenují náhradníky.\
\
5.   Politické skupiny nezastoupené v delegaci mohou vyslat po jednom zástupci na jakoukoli přípravnou schůzi v rámci delegace. Pokud delegace nezahrnuje žádné nezařazené poslance, může se jeden nezařazený poslanec zúčastnit interních přípravných schůzí delegace.\
\
6.   Delegaci vede předseda Parlamentu nebo jeden ze tří stálých členů.\
\
7.   Delegace rozhoduje většinou hlasů svých členů. Její jednání jsou neveřejná.\
\
Konference předsedů stanoví další procesní pokyny pro jednání delegace v dohodovacím výboru.\
\
8.   Delegace podá Parlamentu zprávu o výsledcích dohodovacího řízení."
},
{
'id': 72,
'title': 'Článek 72 : Společný návrh',
'text': "1.   Pokud je v dohodovacím výboru dosaženo dohody o společném návrhu, věc se automaticky zařadí na pořad jednání dílčího zasedání Parlamentu, které se koná do šesti nebo, v případě prodloužení, do osmi týdnů ode dne schválení společného návrhu v dohodovacím výboru.\
\
2.   Předseda nebo jiný navržený člen parlamentní delegace v dohodovacím výboru učiní prohlášení o společném návrhu, ke kterému je přiložena zpráva.\
\
3.   Ke společnému návrhu nelze předkládat žádné pozměňovací návrhy.\
\
4.   O společném návrhu jako celku se rozhoduje v jediném hlasování. Společný návrh je schválen, pokud získá většinu odevzdaných hlasů.\
\
5.   Pokud v dohodovacím výboru není dosaženo dohody o společném návrhu, předseda nebo jiný navržený člen parlamentní delegace v dohodovacím výboru učiní prohlášení. Po tomto prohlášení následuje rozprava.\
\
6.   Během dohodovacího řízení mezi Parlamentem a Radou následujícího po druhém čtení nelze návrh vrátit výboru.\
\
7.   Články 49, 50 a 53 se nepoužijí na třetí čtení."
},
{
'id': 73,
'title': 'Článek 73 : (vypouští se)',
'text': ""
},
{
'id': 74,
'title': 'Článek 74 : (vypouští se)',
'text': ""
},
{
'id': 75,
'title': 'Článek 75 : (vypouští se)',
'text': ""
},
{
'id': 76,
'title': 'Článek 76 : (vypouští se)',
'text': ""
},
{
'id': 77,
'title': 'Článek 77 : (vypouští se)',
'text': ""
},
{
'id': 78,
'title': 'Článek 78 : Podepisování přijatých aktů a jejich zveřejňování',
'text': "Po provedení konečné právně-jazykové redakce přijatého textu v souladu s článkem 193 a přílohou VII a po kontrole řádného dokončení všech postupů podepíše akty přijaté řádným legislativním postupem předseda a generální tajemník.\
\
Po podpisu aktu zajistí generální tajemníci Parlamentu a Rady jeho vyhlášení v Úředním věstníku Evropské unie.\
\
\
Článek 78a : Pozměněný návrh právně závazného aktu\
\
Jestliže má Komise v úmyslu nahradit nebo změnit svůj návrh právně závazného aktu, může příslušný výbor odložit projednávání návrhu, dokud neobdrží nový návrh nebo změny Komise.\
\
\
Článek 78b : Postoj Komise k pozměňovacím návrhům\
\
Než příslušný výbor přistoupí ke konečnému hlasování o návrhu právně závazného aktu, může požádat Komisi, aby sdělila svůj postoj ke všem pozměňovacím návrhům k návrhu, které výbor přijal.\
\
V případě potřeby je postoj Komise zahrnut do zprávy.\
\
\
Článek 78c : Hlasování v Parlamentu\
\
Ustanovení čl. 59 odst. 1, 2, 4 a 5 se použijí obdobně.\
\
\
Článek 78d : Postup po přijetí postoje Parlamentu\
\
1.   Předseda a zpravodaj příslušného výboru v období po přijetí postoje k návrhu právně závazného aktu Parlamentem sledují vývoj návrhu v rámci postupu vedoucího k jeho přijetí Radou a snaží se zejména zajistit, aby Rada a Komise řádně splnily závazky přijaté vůči Parlamentu, pokud jde o jeho postoj. Předseda a zpravodaj příslušného výboru pravidelně informují výbor.\
\
2.   Příslušný výbor může vyzvat Komisi a Radu, aby s ním tuto záležitost projednala.\
\
3.   V kterékoli fázi dalšího postupu může příslušný výbor, považuje-li to za nutné, předložit návrh usnesení podle tohoto článku, v němž doporučí Parlamentu:\
\
-   aby vyzval Komisi k tomu, aby vzala svůj návrh zpět,\
\
-   aby vyzval Komisi nebo Radu k opětovnému postoupení věci Parlamentu podle článku 78e, nebo vyzval Komisi, aby předložila nový návrh, nebo\
\
-   aby rozhodl o jiném postupu, který považuje za vhodný.\
\
Tento návrh usnesení je zařazen do návrhu pořadu jednání nejbližšího dílčího zasedání, které následuje po přijetí návrhu ve výboru.\
\
\
Článek 78e : Opětovné postoupení Parlamentu\
\
1.   Na žádost příslušného výboru vyzve předseda Radu, aby věc opětovně konzultovala s Parlamentem za stejných okolností a podmínek, jaké jsou uvedeny v čl. 63 odst. 1. Na žádost příslušného výboru předseda rovněž vyzve Radu, aby věc opětovně konzultovala s Parlamentem, pokud Rada podstatně změní nebo má v úmyslu podstatně změnit návrh právně závazného aktu, ke kterému Parlament původně zaujal postoj, kromě případů, kdy jde o začlenění parlamentních pozměňovacích návrhů.\
\
2.   Předseda rovněž požádá, aby byl návrh právně závazného aktu opětovně postoupen Parlamentu za okolností stanovených v tomto článku, pokud tak Parlament rozhodne na návrh politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty."
},
{
'id': 79,
'title': 'Článek 79 : Řádný postup pro přijímání změn Smluv',
'text': "1.    V souladu s články 45 a 52 může příslušný výbor předložit Parlamentu zprávu obsahující návrhy na změnu Smluv určené Radě.\
\
2.   Pokud je v souladu s čl. 48 odst. 3 Smlouvy o Evropské unii Parlament konzultován ve věci návrhu kladného rozhodnutí Evropské rady ve vztahu k posouzení navrhovaných změn Smluv, je věc postoupena příslušnému výboru. Výbor vypracuje zprávu obsahující:\
\
-    návrh usnesení, jež uvádí, zda Parlament schvaluje či zamítá navrhované rozhodnutí, a jež může obsahovat návrhy určené konventu nebo konferenci zástupců vlád členských států;\
\
-   případně vysvětlující prohlášení.\
\
3.   Jestliže se Evropská rada rozhodne svolat konvent, jmenuje Parlament na návrh Konference předsedů své zástupce v tomto konventu.\
\
Delegace Parlamentu zvolí svého vedoucího a své kandidáty na členství v každé řídící skupině nebo každém předsednictvu, které konvent ustaví.\
\
4.   Pokud Evropská rada požádá Parlament o souhlas s rozhodnutím nesvolat konvent za účelem posouzení navržených změn Smluv, je tato žádost postoupena příslušnému výboru v souladu s článkem 99."
},
{
'id': 80,
'title': 'Článek 80 : Zjednodušený postup pro přijímání změn Smluv',
'text': "1.   V souladu s články 45 a 52 jednacího řádu a v souladu s postupem podle čl. 48 odst. 6 Smlouvy o Evropské unii může příslušný výbor předložit Parlamentu zprávu obsahující návrhy na změnu všech nebo části ustanovení třetí části Smlouvy o fungování Evropské unie, které jsou určeny Evropské radě.\
\
2.   Pokud je v souladu s čl. 48 odst. 6 Smlouvy o Evropské unii Parlament konzultován ve věci návrhu rozhodnutí Evropské rady na změnu ustanovení části třetí Smlouvy o fungování Evropské unie, použije se obdobně čl. 79 odst. 2 jednacího řádu. V tomto případě může návrh usnesení obsahovat pouze návrhy změn ustanovení části třetí Smlouvy o fungování Evropské unie."
},
{
'id': 81,
'title': 'Článek 81 : Smlouvy o přistoupení',
'text': "1.   Každá žádost evropského státu o členství v Evropské unii předložená v souladu s článkem 49 Smlouvy o Evropské unii se postupuje k projednání příslušnému výboru.\
\
2.   Parlament může na návrh příslušného výboru, politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty rozhodnout, že požádá Komisi a Radu, aby se zúčastnily rozpravy ještě před zahájením jakýchkoliv přístupových jednání s žadatelským státem.\
\
3.   Příslušný výbor požádá Komisi a Radu, aby mu pravidelně poskytovaly veškeré informace o průběhu přístupových jednání, v případě potřeby důvěrně.\
\
4.   V jakékoli fázi přístupových jednání může Parlament na základě zprávy příslušného výboru přijmout doporučení a požadovat jejich zohlednění před uzavřením smlouvy o přistoupení žadatelského státu k Evropské unii.\
\
5.   Po ukončení přístupových jednání, avšak ještě před podepsáním jakékoli dohody, je její návrh předložen Parlamentu k souhlasu v souladu s článkem 99 jednacího řádu. V souladu s článkem 49 Smlouvy o Evropské unii se pro souhlas Parlamentu vyžaduje většina hlasů všech poslanců."
},
{
'id': 82,
'title': 'Článek 82 : Vystoupení z Unie',
'text': "Pokud se členský stát rozhodne na základě článku 50 Smlouvy o Evropské unii z Unie vystoupit, předloží se věc příslušnému výboru. Článek 81 jednacího řádu se použije obdobně. Parlament rozhodne, zda udělí svůj souhlas s dohodou o vystoupení, většinou odevzdaných hlasů."
},
{
'id': 83,
'title': 'Článek 83 : Porušení základních zásad a hodnot členským státem',
'text': "1.   Parlament může na základě zvláštní zprávy příslušného výboru vypracované v souladu s články 45 a 52 jednacího řádu:\
\
(a)   hlasovat o odůvodněném návrhu, kterým vyzývá Radu, aby postupovala podle čl. 7 odst. 1 Smlouvy o Evropské unii;\
\
(b)   hlasovat o návrhu, kterým vyzývá Komisi nebo členské státy, aby předložily návrh podle čl. 7 odst. 2 Smlouvy o Evropské unii;\
\
(c)   hlasovat o návrhu, kterým vyzývá Radu, aby postupovala podle čl. 7 odst. 3 nebo následně podle čl. 7 odst. 4 Smlouvy o Evropské unii.\
\
2.   Každá žádost Rady o vyslovení souhlasu s návrhem předloženým podle čl. 7 odst. 1 a 2 Smlouvy o Evropské unii je oznámena Parlamentu spolu s připomínkami předloženými dotčeným členským státem a postoupena příslušnému výboru v souladu s článkem 99 jednacího řádu. S výjimkou naléhavých případů a odůvodněných okolností přijme Parlament rozhodnutí na návrh příslušného výboru.\
\
3.   V souladu s článkem 354 Smlouvy o fungování Evropské unie se k přijetí rozhodnutí Parlamentu o návrzích uvedených v odstavcích 1 a 2 tohoto článku vyžaduje dvoutřetinová většina odevzdaných hlasů, která představuje většinu všech poslanců Parlamentu.\
\
4.   Na základě svolení Konference předsedů může příslušný výbor předložit doprovodný návrh usnesení. Tento návrh usnesení vyjadřuje názory Parlamentu na závažné porušování základních hodnot členským státem, na odpovídající opatření, jež je třeba přijmout, a na jejich pozdější změnu nebo zrušení.\
\
5.   Příslušný výbor zajistí, aby byl Parlament úplně informován a v případě potřeby požádán o stanoviska ke všem následným opatřením po vyslovení souhlasu podle odstavce 3. Rada se vyzve, aby podle potřeby informovala o vývoji situace. Parlament může na návrh příslušného výboru, vypracovaný se svolením Konference předsedů, přijmout doporučení Radě."
},
{
'id': 84,
'title': 'Článek 84 : Složení Parlamentu',
'text': "V dostatečném časovém předstihu před koncem volebního období může Parlament na základě zprávy příslušného výboru vypracované v souladu s čl. 14 odst. 2 Smlouvy o Evropské unii a s články 45 a 52 jednacího řádu předložit návrh na změnu svého složení. Návrh rozhodnutí Evropské rady, kterým se stanoví složení Parlamentu, Parlament posoudí v souladu s článkem 99 jednacího řádu."
},
{
'id': 85,
'title': 'Článek 85 : Posílená spolupráce mezi členskými státy',
'text': "1.   Žádosti týkající se zavedení posílené spolupráce mezi členskými státy podle článku 20 Smlouvy o Evropské unii postoupí předseda příslušnému výboru k projednání. Použije se článek 99 jednacího řádu.\
\
2.   Příslušný výbor ověří soulad s článkem 20 Smlouvy o Evropské unii a s články 326 až 334 Smlouvy o fungování Evropské unie.\
\
3.   Po zavedení posílené spolupráce jsou akty předložené v jejím rámci projednávány v Parlamentu v souladu se stejnými postupy, které by se uplatnily, pokud by nebyla zavedena posílená spolupráce. Použije se článek 47 jednacího řádu."
},
{
'id': 86,
'title': 'Článek 86 : Víceletý finanční rámec',
'text': "Pokud Rada požádá Parlament o souhlas s návrhem nařízení, kterým se stanoví víceletý finanční rámec, je věc projednána v souladu s článkem 99 jednacího řádu. V souladu s čl. 312 odst. 2 prvním pododstavcem Smlouvy o fungování Evropské unie se pro souhlas Parlamentu vyžaduje většina hlasů všech poslanců.\
\
\
Článek 86a : Roční rozpočtový proces\
\
Příslušný výbor může rozhodnout o vypracování jakékoli zprávy týkající se rozpočtu, kterou bude považovat za vhodnou, s ohledem na přílohu k interinstitucionální dohodě ze dne 2. prosince 2013 o rozpočtové kázni, spolupráci v rozpočtových záležitostech a řádném finančním řízení(1).\
\
Ostatní výbory mohou přijmout stanoviska ve lhůtě stanovené příslušným výborem.\
\
\
(1)	 Úř. věst. C 373, 20.12.2013, s. 1."
},
{
'id': 87,
'title': 'Článek 87 : (vypouští se)',
'text': ""
},
{
'id': 88,
'title': 'Článek 88 : Postoj Parlamentu k návrhu rozpočtu',
'text': "1.   Jednotliví poslanci mohou předkládat pozměňovací návrhy k postoji Rady k návrhu rozpočtu v příslušném výboru.\
\
Politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty nebo výbor mohou předložit pozměňovací návrhy k postoji Rady k návrhu rozpočtu v Parlamentu.\
\
2.   Pozměňovací návrhy musí být předloženy písemně, odůvodněny a podepsány jejich autory a musí u nich být uvedeno, ke které rozpočtové položce se vztahují.\
\
3.   Předseda stanoví lhůtu pro předložení pozměňovacích návrhů.\
\
4.   Příslušný výbor hlasuje o pozměňovacích návrzích před jejich projednáním v Parlamentu.\
\
5.   O pozměňovacích návrzích předložených v Parlamentu, které příslušný výbor zamítl, se v Parlamentu může hlasovat, pouze pokud o to před uplynutím lhůty stanovené předsedou písemně požádá výbor nebo politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty. Tato lhůta nesmí být kratší než 24 hodiny před začátkem hlasování.\
\
6.   Pozměňovací návrhy k odhadu výdajů Parlamentu podobné návrhům, které již Parlament zamítl v době, kdy byl odhad výdajů sestavován, Parlament projedná pouze v případě kladného stanoviska příslušného výboru.\
\
7.   Parlament hlasuje odděleně a v tomto pořadí:\
\
-   o pozměňovacích návrzích k jednotlivým oddílům postoje Rady k návrhu rozpočtu\
\
-   o návrhu usnesení týkajícího se návrhu rozpočtu.\
\
Použije se však čl. 174 odst. 4 až 10.\
\
8.   Články, kapitoly, hlavy a oddíly návrhu rozpočtu, k nimž nebyly předloženy žádné pozměňovací návrhy, se považují za přijaté.\
\
9.   V souladu s čl. 314 odst. 4 písm. c) Smlouvy o fungování Evropské unie se k přijetí pozměňovacích návrhů vyžaduje většina hlasů všech poslanců Parlamentu.\
\
10.   Pokud Parlament změní postoj Rady k návrhu rozpočtu, zašle se pozměněný postoj Radě a Komisi spolu s odůvodněním a zápisem z denního zasedání, na němž byly návrhy změn přijaty."
},
{
'id': 89,
'title': 'Článek 89 : (vypouští se)',
'text': ""
},
{
'id': 90,
'title': 'Článek 90 : Rozpočtové dohodovací řízení',
'text': "1.   Předseda svolá dohodovací výbor v souladu s čl. 314 odst. 4 Smlouvy o fungování Evropské unie.\
\
2.   Delegace zastupující Parlament na schůzích dohodovacího výboru v rozpočtovém procesu je složena ze stejného počtu členů jako delegace Rady.\
\
3.   Členové delegace Parlamentu v dohodovacím výboru jsou každoročně jmenováni politickými skupinami předtím, než Parlament hlasuje o postoji Rady, a to nejlépe ze členů výboru příslušného pro rozpočtové otázky a ze členů  ostatních dotčených výborů. Delegaci vede předseda Parlamentu. Předseda Parlamentu může touto funkcí pověřit místopředsedu Parlamentu, který má zkušenosti s rozpočtovými otázkami, nebo předsedu výboru příslušného pro rozpočtové otázky.\
\
4.   Použije se čl. 71 odst. 2, 4, 5, 7 a 8.\
\
5.   Pokud je v dohodovacím výboru dosaženo dohody o společném návrhu, věc se zařadí na pořad jednání denního zasedání Parlamentu, které se koná do čtrnácti dnů ode dne dosažení dohody. Společný návrh je zpřístupněn všem poslancům. Použije se čl. 72 odst. 2 a 3.\
\
6.    O společném návrhu jako celku se rozhoduje v jediném hlasování. Hlasuje se jmenovitě. Společný návrh je považován za schválený, pokud není zamítnut většinou hlasů všech poslanců Parlamentu.\
\
7.   Jestliže Parlament schválí společný návrh, zatímco Rada jej zamítne, může příslušný výbor předložit všechny nebo některé pozměňovací návrhy Parlamentu k postoji Rady za účelem potvrzení v souladu s čl. 314 odst. 7 písm. d) Smlouvy o fungování Evropské unie.\
\
Hlasování o potvrzení se zařadí na pořad jednání denního zasedání Parlamentu, které se koná do čtrnácti dnů ode dne, kdy Rada oznámila zamítnutí společného návrhu.\
\
Pozměňovací návrhy jsou považovány za potvrzené, pokud jsou schváleny většinou hlasů všech poslanců Parlamentu a třípětinovou většinou odevzdaných hlasů."
},
{
'id': 91,
'title': 'Článek 91 : Přijetí rozpočtu s konečnou platností',
'text': "Pokud má předseda za to, že rozpočet byl přijat v souladu s článkem 314 Smlouvy o fungování Evropské unie, prohlásí v Parlamentu, že rozpočet byl přijat s konečnou platností. Zajistí zveřejnění rozpočtu v Úředním věstníku Evropské unie."
},
{
'id': 92,
'title': 'Článek 92 : Systém prozatímních dvanáctin',
'text': "1.   Rozhodnutí Rady, kterým se povolují výdaje přesahující prozatímní dvanáctinu rozpočtových prostředků pro předchozí rozpočtový rok, je postoupeno příslušnému výboru.\
\
2.    Příslušný výbor může předložit návrh rozhodnutí, kterým se sníží výdaje uvedené v odstavci 1. Parlament o něm rozhodne do 30 dní po přijetí rozhodnutí Rady.\
\
3.   Parlament rozhoduje většinou hlasů všech poslanců.\
\
\
Článek 92a : Plnění rozpočtu\
\
1.   Parlament sleduje plnění rozpočtu v běžném roce. Tímto úkolem pověří výbory příslušné pro rozpočet a rozpočtovou kontrolu a ostatní dotčené výbory.\
\
2.   Každý rok před čtením návrhu rozpočtu na následující rozpočtový rok projedná Parlament problémy spojené s plněním rozpočtu v běžném roce, popřípadě na základě návrhu usnesení předloženého příslušným výborem."
},
{
'id': 93,
'title': 'Článek 93 : Udělení absolutoria Komisi za plnění rozpočtu',
'text': 'Ustanovení týkající se postupů pro udělení absolutoria Komisi za plnění rozpočtu v souladu s finančními ustanoveními Smlouvy o fungování Evropské unie a s nařízením Evropského parlamentu a Rady (EU, Euratom) č. 966/2012 (1) (dále jen "finanční nařízení") jsou připojena k tomuto jednacímu řádu jako příloha(2).\
\
\
(1)	Nařízení Evropského parlamentu a Rady (EU, Euratom) č. 966/2012 ze dne 25. října 2012, kterým se stanoví finanční pravidla o souhrnném rozpočtu Unie  a o zrušení nařízení Rady (ES, Euratom) č. 1605/2002 (Úř. věst. L 298, 26.10.2012, s. 1).\
(2)	Viz příloha IV.'
},
{
'id': 94,
'title': 'Článek 94 : Jiné postupy udělování absolutoria',
'text': "Ustanovení, kterými se řídí postup udělování absolutoria Komisi v souladu s článkem 319 Smlouvy o fungování Evropské unie, pokud jde o plnění rozpočtu, se rovněž vztahují na postup udělování absolutoria:\
\
-   předsedovi Evropského parlamentu za plnění rozpočtu Evropského parlamentu;\
\
-   osobám odpovědným za plnění rozpočtu jiných orgánů a institucí Evropské unie, jako jsou Rada, Soudní dvůr Evropské unie, Účetní dvůr, Evropský hospodářský a sociální výbor a Výbor regionů;\
\
-   Komisi za plnění rozpočtu Evropského rozvojového fondu;\
\
-   orgánům odpovědným za plnění rozpočtu právně nezávislých subjektů, které plní úkoly Unie, jestliže se na jejich činnosti vztahují právní ustanovení, podle nichž je nutné získat absolutorium Evropského parlamentu.\
\
\
Článek 94a : Interinstitucionální spolupráce\
\
Předseda se v souladu s článkem 324 Smlouvy o fungování Evropské unie účastní pravidelných setkání předsedů Evropského parlamentu, Rady a Komise, která jsou svolávána z podnětu Komise v rámci rozpočtových postupů podle části šesté hlavy II Smlouvy o fungování Evropské unie. Předseda učiní všechna nezbytná opatření, aby podpořil vzájemné konzultace a sbližování postojů jednotlivých orgánů, a usnadnil tak provádění výše uvedených postupů.\
\
Předseda může tímto úkolem pověřit místopředsedu, který má zkušenosti s rozpočtovými otázkami, nebo předsedu výboru příslušného pro rozpočtové otázky."
},
{
'id': 95,
'title': 'Článek 95 : (vypouští se)',
'text': ""
},
{
'id': 96,
'title': 'Článek 96 : Odhad výdajů Parlamentu',
'text': "1.   Předsednictvo vypracuje předběžný odhad výdajů na základě zprávy připravené generálním tajemníkem.\
\
2.   Předseda postoupí předběžný odhad výdajů příslušnému výboru, který vypracuje odhad výdajů a podá zprávu Parlamentu.\
\
3.   Předseda stanoví lhůtu pro předložení změn odhadu výdajů.\
\
Příslušný výbor sdělí své stanovisko k těmto změnám.\
\
4.   Parlament přijme odhad výdajů.\
\
5.   Předseda předá odhad výdajů Komisi a Radě.\
\
6.   Předchozí ustanovení se vztahují i na odhady opravného rozpočtu."
},
{
'id': 97,
'title': 'Článek 97 : Postup pro sestavení odhadu výdajů Parlamentu',
'text': "1.   Pokud jde o rozpočet Parlamentu, přijímá předsednictvo a výbor příslušný pro rozpočtové otázky v tomto pořadí rozhodnutí o:\
\
(a)   plánu pracovních míst;\
\
(b)    předběžném odhadu výdajů a odhadu výdajů.\
\
2.   Rozhodnutí o plánu pracovních míst se přijímají tímto postupem:\
\
(a)   předsednictvo vypracuje plán pracovních míst pro každý rozpočtový rok;\
\
(b)   v případě, že se stanovisko výboru příslušného pro rozpočtové otázky liší od původních rozhodnutí přijatých předsednictvem, zahájí se dohodovací řízení mezi předsednictvem a výborem;\
\
(c)   na konci tohoto postupu přijímá předsednictvo podle čl. 222 odst. 3 jednacího řádu konečné rozhodnutí o plánu pracovních míst, aniž jsou dotčena rozhodnutí přijatá podle článku 314 Smlouvy o fungování Evropské unie.\
\
3.   Pokud jde o vlastní odhady výdajů, postup jejich sestavování začíná okamžikem, kdy předsednictvo přijme konečné rozhodnutí o plánu pracovních míst. Fáze tohoto postupu jsou stanoveny v článku 96. V případě, že se postoj výboru příslušného pro rozpočet značně liší od postoje předsednictva, zahájí se dohodovací řízení."
},
{
'id': 98,
'title': 'Článek 98 : Pravomoc vynakládat prostředky a hradit výdaje, schvalovat účty a udělovat absolutorium',
'text': "1.   Předseda vynakládá prostředky a hradí výdaje nebo nechá vynaložit prostředky a uhradit výdaje v rámci vnitřních finančních předpisů vydaných předsednictvem po konzultaci s příslušným výborem.\
\
2.   Předseda předá návrh ročních účetních výkazů příslušnému výboru.\
\
3.   Na základě zprávy příslušného výboru schválí Parlament své účetní výkazy a rozhodne o udělení absolutoria."
},
{
'id': 99,
'title': 'Článek 99 : Postup souhlasu',
'text': "1.   Pokud je Parlament požádán, aby udělil souhlas s právně závazným aktem, příslušný výbor předloží Parlamentu doporučení, zda návrh aktu schválit nebo zamítnout.\
\
Doporučení obsahuje právní východiska, avšak neobsahuje body odůvodnění. Pozměňovací návrhy lze ve výboru předkládat pouze tehdy, je-li jejich cílem zvrátit doporučení navržené zpravodajem.\
\
K doporučení může být přiloženo krátké vysvětlující prohlášení. Za toto doporučení je zcela zodpovědný zpravodaj a nehlasuje se o něm. Ustanovení čl. 52a odst. 2 se použije obdobně.\
\
2.   Příslušný výbor může v nutných případech rovněž předložit návrh zprávy, jejíž součástí je návrh nelegislativního usnesení, v němž Parlament vysvětlí, z jakých důvodů by měl udělit nebo odmítnout udělit svůj souhlas, a jež případně obsahuje doporučení ohledně uplatňování navrženého aktu.\
\
3.   Příslušný výbor projedná žádost o udělení souhlasu bez zbytečného odkladu. Jestliže příslušný výbor nepřijme doporučení do šesti měsíců poté, co mu byla žádost o udělení souhlasu postoupena, Konference předsedů může danou věc zařadit k projednání na pořad jednání některého z příštích dílčích zasedání, nebo v řádně odůvodněných případech rozhodnout o prodloužení této šestiměsíční lhůty.\
\
4.   Parlament rozhodne o navrženém aktu v jediném hlasování o udělení souhlasu, bez ohledu na to, zda příslušný výbor doporučuje akt schválit nebo zamítnout, přičemž nelze předkládat žádné pozměňovací návrhy. Pokud navrhovaný akt potřebnou většinu nezíská, považuje se za zamítnutý.\
\
5.   Pokud je vyžadován souhlas Parlamentu, může příslušný výbor kdykoli předložit Parlamentu průběžnou zprávu s návrhem usnesení, v němž doporučí, zda navrhovaný akt změnit nebo provést."
},
{
'id': 100,
'title': 'Článek 100 : Postup zaujímání stanovisek k výjimkám týkajícím se přijetí eura.',
'text': "1.   Pokud je Parlament konzultován podle čl. 140 odst. 2 Smlouvy o fungování Evropské unie, příslušný výbor předloží Parlamentu zprávu, v níž se vysloví pro schválení nebo zamítnutí navrženého aktu, a na základě této zprávy Parlament věc projedná.\
\
2.   Parlament v jediném hlasování hlasuje o navrženém aktu, ke kterému nelze předkládat pozměňovací návrhy."
},
{
'id': 101,
'title': 'Článek 101 :  Postupy týkající se sociálního dialogu',
'text': "1.    Předseda postoupí příslušnému výboru k projednání veškeré dokumenty vypracované Komisí podle článku 154 Smlouvy o fungování Evropské unie nebo dohody sociálních partnerů podle čl. 155 odst. 1 této Smlouvy, jakož i návrhy předložené Komisí podle čl. 155 odst. 2 této Smlouvy.\
\
2.   Pokud sociální partneři informují Komisi o svém záměru zahájit postup podle článku 155 Smlouvy o fungování Evropské unie, příslušný výbor může o daném tématu vypracovat zprávu.\
\
3.   Pokud sociální partneři uzavřou dohodu a společně požadují, aby byla dohoda provedena rozhodnutím Rady na návrh Komise v souladu s čl. 155 odst. 2 Smlouvy o fungování Evropské unie, předloží příslušný výbor návrh usnesení, kterým doporučí přijetí nebo zamítnutí žádosti."
},
{
'id': 102,
'title': 'Článek 102 : Postup posuzování připravovaných dobrovolných dohod',
'text': "1.   Pokud Komise informuje Parlament o svém záměru posoudit možnost využití dobrovolné dohody jako alternativy k právním předpisům, může příslušný výbor o daném tématu vypracovat zprávu podle článku 52.\
\
2.   Pokud Komise oznámí, že má v úmyslu uzavřít dobrovolnou dohodu, může příslušný výbor předložit návrh usnesení, v němž doporučí, zda návrh Komise přijmout nebo zamítnout a za jakých podmínek."
},
{
'id': 103,
'title': 'Článek 103 : Kodifikace',
'text': "1.   Pokud je Parlamentu předložen návrh na kodifikaci právních předpisů Unie, je postoupen výboru příslušnému pro právní záležitosti. Tento výbor návrh přezkoumá podle postupů dohodnutých na interinstitucionální úrovni(1) s cílem ověřit, že se návrh omezuje na pouhou kodifikaci bez věcné změny.\
\
2.   Výbor, který byl příslušným výborem pro akty, které jsou předmětem kodifikace, může být na svou žádost nebo na žádost výboru příslušného pro právní záležitosti požádán o stanovisko, zda je kodifikace potřebná.\
\
3.   Pozměňovací návrhy k textu návrhu jsou nepřípustné.\
\
Předseda výboru příslušného pro právní záležitosti však může na žádost zpravodaje předložit tomuto výboru ke schválení technické úpravy, pokud tyto úpravy nepředstavují žádnou věcnou změnu návrhu a jsou zbytné pro zajištění souladu návrhu s pravidly kodifikace.\
\
4.   Jestliže se výbor příslušný pro právní záležitosti domnívá, že návrh neobsahuje žádnou věcnou změnu právních předpisů Unie, předloží jej Parlamentu ke schválení.\
\
Jestliže se výbor příslušný pro právní záležitosti domnívá, že návrh obsahuje věcnou změnu, navrhne Parlamentu, aby návrh zamítl.\
\
V každém z těchto dvou případů rozhodne Parlament v jediném hlasování, bez pozměňovacích návrhů a bez rozpravy.\
\
\
(1)	Interinstitucionální dohoda ze dne 20. prosince 1994, Zrychlená pracovní metoda pro úřední kodifikaci právních předpisů, bod 4 (Úř. věst. C 102, 4.4.1996, s. 2)."
},
{
'id': 104,
'title': 'Článek 104 : Přepracování',
'text': "1.   Pokud je Parlamentu předložen návrh na úřední přepracování právních předpisů Unie, je postoupen výboru příslušnému pro právní záležitosti a věcně příslušnému výboru.\
\
2.   Výbor příslušný pro právní záležitosti návrh přezkoumá podle postupů dohodnutých na interinstitucionální úrovni(1) s cílem ověřit, zda návrh neobsahuje žádnou věcnou změnu kromě těch, které v něm byly jako takové označeny.\
\
V rámci tohoto přezkumu není přípustné předkládat k textu návrhu pozměňovací návrhy. Pokud jde o ustanovení, která zůstala v návrhu na přepracování nezměněna, použije čl. 103 odst. 3 druhý pododstavec.\
\
3.   Pokud se výbor příslušný pro právní záležitosti domnívá, že návrh neobsahuje žádnou věcnou změnu kromě těch, které v něm byly jako takové označeny, informuje o tom věcně příslušný výbor.\
\
V tomto případě, kromě podmínek stanovených v článcích 169 a 170, jsou ve věcně příslušném výboru přijatelné pouze pozměňovací návrhy týkající se částí návrhu obsahujících změny.\
\
Předseda věcně příslušného výboru však může v jednotlivých případech výjimečně prohlásit za přípustné pozměňovací návrhy k částem návrhu na přepracování, které zůstaly nezměněny, pokud to považuje za nezbytné z naléhavých důvodů vnitřní logiky textu nebo protože pozměňovací návrhy jsou nerozlučně spjaty s jinými přípustnými pozměňovacími návrhy. Tyto důvody musí být uvedeny v písemném odůvodnění pozměňovacích návrhů.\
\
4.   Jestliže se výbor příslušný pro právní záležitosti domnívá, že návrh znamená jiné věcné změny než ty, které byly jako takové označeny, navrhne Parlamentu, aby návrh zamítl, a informuje o tom věcně příslušný výbor.\
\
V tomto případě předseda požádá Komisi, aby vzala svůj návrh zpět. Jestliže Komise vezme svůj návrh zpět, předseda prohlásí postup v Parlamentu za bezpředmětný a informuje o tom Radu. Jestliže Komise svůj návrh zpět nevezme, vrátí jej Parlament zpět věcně příslušnému výboru, který jej projedná podle obvyklého postupu.\
\
\
(1)	 Interinstitucionální dohoda ze dne 28. listopadu 2001 o systematičtějším využívání metody přepracování právních aktů, bod 9 (Úř. věst. C 77, 28.3.2002, s. 1). "
},
{
'id': 105,
'title': 'Článek 105 : Akty v přenesené pravomoci',
'text': "1.   Pokud Komise předá Parlamentu akt v přenesené pravomoci, postoupí předseda Parlamentu akt výboru příslušnému pro základní legislativní akt, který může určit jednoho ze svých členů pro projednání jednoho nebo více aktů v přenesené pravomoci.\
\
2.   Na dílčím zasedání následujícím po obdržení aktu předseda Parlamentu informuje Parlament o datu, kdy Parlament obdržel akt v přenesené pravomoci ve všech úředních jazycích, a o lhůtě, v níž mohou být vysloveny námitky. Uvedená lhůta začíná běžet počínaje dnem obdržení aktu.\
\
Oznámení se zveřejní v zápisu ze zasedání a uvede se název příslušného výboru.\
\
3.   V souladu s ustanoveními základního legislativního aktu může příslušný výbor, uzná-li to za vhodné a poté, co záležitost případně konzultoval s jinými dotčenými výbory, předložit Parlamentu odůvodněný návrh usnesení, kterým vyslovuje námitku vůči aktu v přenesené pravomoci. Jestliže příslušný výbor nepředloží návrh usnesení deset pracovních dní před zahájením dílčího zasedání, v němž středa bezprostředně předchází dni uplynutí lhůty uvedené v odstavci 5, může politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty předložit v této věci návrh usnesení, které bude zařazeno na pořad jednání výše uvedeného dílčího zasedání.\
\
4.   V návrhu usnesení předloženém v souladu s odstavcem 3 musí být uvedeny důvody těchto námitek Parlamentu a návrh usnesení může obsahovat žádost, aby Komise předložila nový akt v přenesené pravomoci, v němž by zohlednila uvedená doporučení Parlamentu.\
\
5.   Parlament schválí tento návrh usnesení většinou hlasů všech svých poslanců v souladu s čl. 290 odst. 2 druhým pododstavcem Smlouvy o fungování Evropské unie ve lhůtě stanovené základním legislativním aktem.\
\
Pokud se příslušný výbor domnívá, že je vhodné v souladu s ustanoveními základního legislativního aktu prodloužit lhůtu pro případné námitky vůči danému aktu v přenesené pravomoci, předseda výboru o tomto prodloužení informuje jménem Parlamentu Radu a Komisi.\
\
6.   Pokud příslušný výbor před uplynutím lhůty stanovené v základním legislativním aktu doporučí, aby Parlament prohlásil, že námitku vůči aktu v přenesené pravomoci nevysloví:\
\
-   informuje o tom příslušný výbor dopisem s odůvodněním Konferenci předsedů výborů a předloží v tomto ohledu doporučení;\
\
-   pokud není ani na následující schůzi Konference předsedů výborů, ani – v naléhavém případě – písemným postupem vyslovena žádná námitka, předseda tohoto orgánu uvědomí předsedu Parlamentu, který o této skutečnosti co nejdříve informuje plénum;\
\
-   pokud se do 24 hodin po oznámení v Parlamentu politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty vysloví proti doporučení, o doporučení se hlasuje;\
\
-   pokud v této lhůtě není vyslovena žádná námitka, doporučení se považuje za schválené;\
\
-   po přijetí tohoto doporučení je jakýkoli návrh námitky vůči aktu v přenesené pravomoci nepřípustný.\
\
7.   Příslušný výbor může v souladu s ustanoveními základního legislativního aktu z vlastního podnětu předložit Parlamentu návrh usnesení, kterým se zcela nebo částečně ruší přenesení pravomocí nebo vyslovuje námitka proti automatickému prodloužení tohoto přenesení pravomocí.\
\
V souladu s čl. 290 odst. 2 druhým pododstavcem Smlouvy o fungování Evropské unie Parlament rozhoduje o zrušení přenesení pravomocí většinou hlasů všech svých poslanců.\
\
8.   Předseda Parlamentu informuje Radu a Komisi o postojích zaujatých na základě tohoto článku."
},
{
'id': 106,
'title': 'Článek 106 : Prováděcí akty a opatření',
'text': "1.   Pokud Komise předloží Parlamentu návrh prováděcího aktu nebo opatření, postoupí předseda tento návrh výboru příslušnému pro základní legislativní akt, který může rozhodnout o určení jednoho ze svých členů pro projednání jednoho nebo několika návrhů prováděcích aktů nebo opatření.\
\
2.   Příslušný výbor může Parlamentu předložit odůvodněný návrh usnesení, který uvádí, že návrh prováděcího aktu nebo opatření překračuje prováděcí pravomoci svěřené v základním legislativním aktu nebo z jiných důvodů není v souladu s právem Unie.\
\
3.   Návrh usnesení může obsahovat žádost, aby Komise vzala zpět návrh prováděcího aktu nebo opatření, aby jej pozměnila s ohledem na uvedené námitky Parlamentu nebo aby předložila nový legislativní návrh. Předseda informuje Radu a Komisi o přijatém rozhodnutí.\
\
4.   Pokud se na prováděcí opatření, která předpokládá Komise, vztahuje regulativní postup s kontrolou podle rozhodnutí Rady 1999/468/ES (1), použijí se následující doplňující ustanovení:\
\
(a)   lhůta pro přezkum začíná běžet po předložení návrhu prováděcího opatření Parlamentu ve všech úředních jazycích. V případě zkrácené lhůty pro přezkum podle čl. 5a odst. 5 písm. b) rozhodnutí 1999/468/ES a v naléhavých případech podle čl. 5a odst. 6 tohoto rozhodnutí začne lhůta pro přezkum běžet dnem, kdy Evropský parlament obdrží konečný návrh prováděcích opatření v jazykových zněních, která byla předložena členům výboru zřízeného v souladu s tímto rozhodnutím, za předpokladu, že předseda příslušného výboru nemá námitek. Článek 158 se v obou případech uvedených v předchozí větě nepoužije;\
\
(b)   jestliže návrh prováděcího opatření vychází z čl. 5a odst. 5 nebo 6 rozhodnutí 1999/468/ES, který stanoví zkrácené lhůty, ve kterých může Evropský parlament vyjádřit nesouhlas, může návrh usnesení vyjadřujícího nesouhlas s přijetím návrhu opatření předložit předseda příslušného výboru, jestliže se tento výbor nemohl v dané lhůtě sejít;\
\
(c)   Parlament může většinou všech svých poslanců přijmout usnesení, kterým zamítne přijetí návrhu prováděcího opatření a v němž uvede, že návrh opatření překračuje prováděcí pravomoci svěřené v základním aktu, není slučitelný s cílem nebo obsahem základního aktu nebo nerespektuje zásadu subsidiarity či proporcionality;\
\
   Jestliže příslušný výbor deset pracovních dní před zahájením dílčího zasedání, v němž středa bezprostředně předchází dni uplynutí lhůty  pro vyslovení se proti návrhu prováděcího opatření, nepředloží návrh takového usnesení, může politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty předložit v této věci návrh usnesení, které bude zařazeno na pořad jednání výše uvedeného dílčího zasedání.\
\
(d)   jestliže příslušný výbor doporučí dopisem s odůvodněním předsedovi Konference předsedů výborů, aby Parlament prohlásil před uplynutím řádné lhůty podle čl. 5a odst. 3 písm. c) nebo čl. 5a odst. 4 písm. e) rozhodnutí 1999/468/ES, že nevyjádří svůj nesouhlas s navrhovaným opatřením, použije se postup podle čl. 105 odst. 6 jednacího řádu.(2)\
\
\
(1)	Rozhodnutí Rady 1999/468/ES ze dne 28. června 1999 o postupech pro výkon prováděcích pravomocí svěřených Komisi (Úř. vest. L 184, 17.7.1999, s. 23).\
(2)	Čl. 106 odst. 4 bude vypuštěn z jednacího řádu, jakmile ve stávajících právních předpisech bude zcela zrušen regulativní postup s kontrolou."
},
{
'id': 107,
'title': 'Článek 107 : Projednání postupem s přidruženými výbory nebo postupem společných schůzí výborů',
'text': "1.   Jestliže byl základní legislativní akt přijat Parlamentem postupem podle článku 54, pro projednávání aktů v přenesené pravomoci nebo návrhů prováděcích aktů nebo opatření se použijí následující doplňující ustanovení:\
\
-   akt v přenesené pravomoci nebo návrh prováděcího aktu či opatření je postoupen příslušnému výboru a přidruženému výboru;\
\
-   předseda příslušného výboru stanoví lhůtu, v níž může přidružený výbor předložit návrhy k bodům, které spadají do jeho výlučné působnosti nebo do společné působnosti těchto dvou výborů;\
\
-   jestliže akt v přenesené pravomoci nebo návrh prováděcího aktu či opatření spadá převážně do výlučné působnosti přidruženého výboru, převezme příslušný výbor návrhy tohoto výboru bez hlasování; pokud příslušný výbor nedodrží toto pravidlo, může předseda Parlamentu povolit, aby přidružený výbor předložil v plénu legislativní usnesení.\
\
2.   Jestliže byl základní legislativní akt přijat Parlamentem postupem podle článku 55, pro projednávání aktů v přenesené pravomoci a návrhů prováděcích aktů nebo opatření se použijí následující doplňující ustanovení:\
\
-    předseda Parlamentu po obdržení aktu v přenesené pravomoci nebo návrhu prováděcího aktu či opatření určí výbor nebo společné výbory příslušné pro jejich projednání, přičemž zohlední požadavky uvedené v článku 55 a případné dohody mezi předsedy dotčených výborů;\
\
-    jestliže byl akt v přenesené pravomoci nebo návrh prováděcího aktu či opatření postoupen k projednání postupem společných schůzí výborů, každý výbor může požádat o svolání společné schůze, na které bude projednán návrh usnesení. Jestliže není dosaženo dohody mezi předsedy dotčených výborů, je společná schůze svolána předsedou Konference předsedů výborů."
},
{
'id': 108,
'title': 'Článek 108 : Mezinárodní dohody',
'text': "1.   Pokud mají být zahájena jednání o uzavření, prodloužení platnosti nebo změně mezinárodní dohody, může se příslušný výbor rozhodnout vypracovat zprávu či jinak sledovat přípravnou fázi. O svém rozhodnutí informuje Konferenci předsedů výborů.\
\
2.   Příslušný výbor zjistí co nejdříve od Komise, jaký právní základ byl zvolen pro uzavření mezinárodních dohod podle odstavce 1. Příslušný výbor ověří zvolený právní základ podle článku 39.\
\
3.   Na návrh příslušného výboru, politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty může Parlament požádat Radu, aby neschválila zahájení vyjednávání, dokud Parlament nezaujme postoj k navrhovanému mandátu k vyjednávání na základě zprávy příslušného výboru.\
\
4.   V jakékoli fázi jednání a v době od ukončení jednání až po uzavření mezinárodní dohody může Parlament na základě zprávy příslušného výboru vypracované z vlastního podnětu tohoto výboru nebo po posouzení případného relevantního návrhu předloženého politickou skupinou nebo poslanci dosahujícími přinejmenším nízké prahové hodnoty přijmout doporučení Radě, Komisi nebo místopředsedovi Komise / vysokému představiteli Unie pro zahraniční věci a bezpečnostní politiku a požadovat jejich zohlednění před uzavřením této dohody.\
\
5.   Žádosti Rady o souhlas nebo stanovisko Parlamentu postoupí předseda Parlamentu výboru příslušnému k jejich projednání v souladu s článkem 99 nebo čl. 47 odst. 1.\
\
6.   Kdykoli před hlasováním v Parlamentu o žádosti o souhlas nebo stanovisko může příslušný výbor nebo nejméně jedna desetina všech poslanců Parlamentu navrhnout, aby Parlament požádal Soudní dvůr o stanovisko, zda je mezinárodní dohoda v souladu se Smlouvami.\
\
Dříve než Parlament hlasuje o návrhu, může si předseda Parlamentu vyžádat stanovisko výboru příslušného pro právní záležitosti, který oznámí své závěry Parlamentu.\
\
Jestliže Parlament schválí návrh požádat Soudní dvůr o stanovisko, hlasování o žádosti o souhlas nebo stanovisko se odloží, dokud Soud nepředloží své stanovisko.\
\
7.   Pokud Rada požádá Parlament o souhlas ve věci uzavření, prodloužení platnosti nebo změny mezinárodní dohody, rozhodne Parlament v jediném hlasování podle článku 99.\
\
Pokud Parlament neudělí souhlas s uzavřením mezinárodní dohody, oznámí předseda Radě, že danou dohodu nelze uzavřít, prodloužit nebo změnit.\
\
Aniž je dotčen čl. 99 odst. 3, může se Parlament na základě doporučení příslušného výboru rozhodnout, že své rozhodnutí o udělení souhlasu odloží, nejdéle však o jeden rok.\
\
8.   Pokud Rada požádá Parlament o stanovisko k uzavření, prodloužení platnosti nebo ke změně mezinárodní dohody, nejsou přípustné pozměňovací návrhy k textu dohody. Aniž je dotčen čl. 170 odst. 1, jsou přípustné pozměňovací návrhy k návrhu rozhodnutí Rady.\
\
Pokud je toto stanovisko přijaté Parlamentem záporné, požádá předseda Radu, aby dohodu neuzavírala.\
\
9.   Předsedové a zpravodajové příslušného výboru a všech přidružených výborů společně ověří, zda v souladu s čl. 218 odst. 10 Smlouvy o fungování Evropské unie poskytují Rada, Komise a místopředseda Komise / vysoký představitel Unie pro zahraniční věci a bezpečnostní politiku Parlamentu okamžitě, pravidelně a v plném rozsahu informace, případně i důvěrně, po celou dobu přípravy jednání, sjednávání a uzavírání mezinárodních dohod, včetně informací o návrhu i přijatém konečném znění směrnic pro jednání, jakož i informace týkající se provádění těchto dohod."
},
{
'id': 109,
'title': 'Článek 109 : Prozatímní uplatňování nebo pozastavení uplatňování mezinárodní dohody nebo vypracování postoje Unie v orgánu vytvořeném mezinárodní dohodou',
'text': "Pokud Komise nebo místopředseda Komise / vysoký představitel Unie pro zahraniční věci a bezpečnostní politiku oznámí Parlamentu a Radě svůj záměr navrhnout prozatímní uplatňování nebo pozastavení uplatňování mezinárodní dohody, může Parlament vyzvat Radu, Komisi nebo místopředsedu Komise / vysokého představitele Unie pro zahraniční věci a bezpečnostní politiku, aby učinili prohlášení, po němž následuje rozprava. Parlament může na základě zprávy příslušného výboru nebo podle článku 113 vydat doporučení, v němž zejména požádá Radu, aby nepřistupovala k prozatímnímu uplatňování dohody, dokud Parlament nevysloví svůj souhlas.\
\
Tento postup se rovněž uplatní, pokud Komise nebo místopředseda / vysoký představitel Unie pro zahraniční věci a bezpečnostní politiku předloží návrhy postojů, které mají být jménem Unie přijaty v rámci orgánu zřízeného na základě mezinárodní dohody."
},
{
'id': 110,
'title': 'Článek 110 : Zvláštní zástupci',
'text': "1.   Pokud Rada zamýšlí jmenovat zvláštního zástupce podle článku 33 Smlouvy o Evropské unii, předseda na žádost příslušného výboru vyzve Radu, aby učinila prohlášení a odpověděla na otázky týkající se mandátu, cílů a jiných relevantních záležitostí souvisejících s úlohou zvláštního zástupce.\
\
2.   Poté, co byl zvláštní zástupce jmenován, avšak předtím, než převezme svou funkci, může být vyzván, aby učinil před příslušným výborem prohlášení a odpověděl na otázky.\
\
3.   Ve lhůtě dvou měsíců po tomto slyšení může příslušný výbor navrhnout Radě, Komisi nebo místopředsedovi Komise / vysokému představiteli Unie pro zahraniční věci a bezpečnostní politiku doporučení bezprostředně se týkající jmenování.\
\
4.   Zvláštní zástupce je vyzván, aby pravidelně a úplně informoval Parlament o praktickém plnění svého mandátu."
},
{
'id': 111,
'title': 'Článek 111 : Mezinárodní zastoupení',
'text': "1.   Před jmenováním  kandidáta na post vedoucího zahraniční delegace Unie může být tento kandidát vyzván, aby vystoupil před příslušným výborem s cílem učinit prohlášení a odpovědět na otázky.\
\
2.   Do dvou měsíců po slyšení stanoveném v odstavci 1 může příslušný výbor přijmout usnesení, popřípadě dát doporučení bezprostředně se týkající jmenování."
},
{
'id': 112,
'title': 'Článek 112 : (vypouští se)',
'text': ""
},
{
'id': 113,
'title': 'Článek 113 : Doporučení týkající se vnějších politik Unie.',
'text': "1.   Příslušný výbor může vypracovat doporučení Radě, Komisi nebo místopředsedovi Komise / vysokému představiteli Unie pro zahraniční věci a bezpečnostní politiku týkající se věcí podle hlavy V Smlouvy o Evropské unii (vnější činnost Unie) nebo v případě, že Parlamentu nebyla postoupena mezinárodní dohoda, na kterou se vztahuje článek 108, nebo Parlament nebyl o této dohodě informován podle článku 109.\
\
2.   V naléhavých případech může předseda Parlamentu povolit mimořádnou schůzi dotčeného výboru.\
\
3.   V průběhu postupu přijímání těchto návrhů doporučení ve výboru je nutné předložit k hlasování písemný text.\
\
4.   V naléhavých případech uvedených v odstavci 2 se článek 158 ve výboru nepoužije a jsou přípustné ústní pozměňovací návrhy. Poslanci nemohou vznášet námitky proti tomu, aby se o ústních pozměňovacích návrzích hlasovalo ve výborech.\
\
5.   Návrhy doporučení vypracované výborem se zařadí na pořad jednání příštího dílčího zasedání. V naléhavých případech, o nichž rozhoduje předseda Parlamentu, mohou být doporučení zařazena na pořad jednání právě probíhajícího dílčího zasedání.\
\
6.   Doporučení jsou považována za přijatá, pokud před začátkem dílčího zasedání nevznesou poslanci dosahující přinejmenším nízké prahové hodnoty písemnou námitku. Pokud je předložena námitka, návrh doporučení výboru se zařadí na pořad jednání téhož dílčího zasedání. Tato doporučení jsou předmětem rozpravy a o každém pozměňovacím návrhu předloženém politickou skupinou nebo poslanci dosahujícími přinejmenším nízké prahové hodnoty se hlasuje.\
\
\
Článek 113a : Konzultace s Parlamentem a jeho informování v rámci společné zahraniční a bezpečnostní politiky\
\
1.   Při konzultaci podle článku 36 Smlouvy o Evropské unii postoupí Parlament věc příslušnému výboru, který může vypracovat návrh doporučení podle článku 113 jednacího řádu.\
\
2.   Dotčené výbory se snaží zajistit, aby je místopředseda Komise / vysoký představitel Unie pro zahraniční věci a bezpečnostní politiku pravidelně a včas informoval o vývoji a provádění společné zahraniční a bezpečnostní politiky Unie, o předpokládaných nákladech, a to pokaždé, když je v rámci této politiky přijato rozhodnutí mající finanční dopad, a aby byly informovány o jakýchkoli jiných finančních aspektech vztahujících se k provádění činností v rámci této politiky. Výjimečně, na žádost místopředsedy Komise / vysokého představitele Unie pro zahraniční věci a bezpečnostní politiku, může výbor rozhodnout o tom, že jeho jednání bude neveřejné.\
\
3.   Konzultativní dokument místopředsedy / vysokého představitele Unie pro zahraniční věci a bezpečnostní politiku o hlavních aspektech a základních směrech společné zahraniční a bezpečnostní politiky, včetně společné bezpečnostní a obranné politiky a jejích finančních dopadů na rozpočet Unie, je předmětem pravidelné rozpravy, která se koná dvakrát do roka. Použijí se postupy stanovené v článku 123.\
\
4.   Místopředseda / vysoký představitel Unie pro zahraniční věci a bezpečnostní politiku je přizván ke každé rozpravě v plénu, která se týká zahraniční, bezpečnostní nebo obranné politiky."
},
{
'id': 114,
'title': 'Článek 114 : Porušování lidských práv',
'text': "Na každém dílčím zasedání může každý příslušný výbor předložit stejným postupem jako v čl. 113 odst. 5 a 6 návrh usnesení o případech porušování lidských práv, aniž by si musel vyžádat svolení."
},
{
'id': 115,
'title': 'Článek 115 : Transparentnost činností Parlamentu',
'text': "1.   Parlament zajišťuje nejvyšší možnou transparentnost své činnosti v souladu s čl. 1 druhým pododstavcem Smlouvy o Evropské unii, článkem 15 Smlouvy o fungování Evropské unie a článkem 42 Listiny základních práv Evropské unie.\
\
2.   Rozpravy v Parlamentu jsou veřejné.\
\
3.   Výbory se zpravidla scházejí veřejně. Nejpozději při přijímání pořadu schůze však mohou rozhodnout o tom, že rozdělí pořad jednání dané schůze na body veřejné a neveřejné. U neveřejných schůzí však může výbor rozhodnout, že dokumenty ze schůzí zpřístupní veřejnosti."
},
{
'id': 116,
'title': 'Článek 116 : Přístup veřejnosti k dokumentům',
'text': "1.   Každý občan Unie a každá fyzická osoba s bydlištěm nebo právnická osoba se sídlem v členském státě má právo na přístup k dokumentům Parlamentu v souladu s článkem 15 Smlouvy o fungování Evropské unie. Tento přístup k dokumentům Parlamentu podléhá zásadám, podmínkám a omezením stanoveným v nařízení (ES) č. 1049/2001.\
\
Přístup k dokumentům Parlamentu je v co největší míře umožněn i ostatním fyzickým a právnickým osobám stejným způsobem.\
\
2.   Pro účely zpřístupnění dokumentů veřejnosti se „dokumenty Parlamentu“ rozumějí jakékoli texty ve smyslu čl. 3 písm. a) nařízení (ES) č. 1049/2001, které vypracovali nebo obdrželi funkcionáři Parlamentu ve smyslu hlavy I kapitoly 2 tohoto jednacího řádu, orgány Parlamentu, výbory, meziparlamentní delegace nebo sekretariát Parlamentu.\
\
V souladu s článkem 4 statutu poslanců Evropského parlamentu se dokumenty vypracované jednotlivými poslanci nebo politickými skupinami považují pro účely jejich zpřístupnění veřejnosti za dokumenty Parlamentu, pouze pokud jsou předloženy v souladu s jednacím řádem.\
\
Předsednictvo stanoví pravidla pro vedení záznamů o dokumentech Parlamentu.\
\
3.   Parlament vytvoří internetové stránky veřejného rejstříku dokumentů Parlamentu. Legislativní dokumenty a určité jiné kategorie dokumentů jsou v souladu s nařízením (ES) č. 1049/2001 přímo přístupné prostřednictvím internetových stránek veřejného rejstříku Parlamentu. Na internetových stránkách veřejného rejstříku Parlamentu jsou pokud možno uvedeny odkazy na jiné dokumenty Parlamentu.\
\
Kategorie dokumentů, které jsou přímo přístupné na internetových stránkách veřejného rejstříku vytvořených Parlamentem, jsou uvedeny v seznamu přijatém předsednictvem a zveřejněny na internetových stránkách veřejného rejstříku Parlamentu. Tento seznam neomezuje právo na přístup k dokumentům, které nespadají do kategorií uvedených v seznamu; tyto dokumenty mohou být zpřístupněny na písemnou žádost v souladu s nařízením (ES) č. 1049/2001.\
\
Předsednictvo přijme v souladu s nařízením (ES) č. 1049/2001 pravidla pro přístup k dokumentům, která se zveřejní v Úředním věstníku Evropské unie.\
\
4.   Předsednictvo určí orgány, které vyřizují původní žádosti (článek 7 nařízení (ES) č. 1049/2001) a přijímají rozhodnutí o potvrzujících žádostech (článek 8 tohoto nařízení) a o žádostech o přístup k citlivým dokumentům (článek 9 tohoto nařízení).\
\
5.   Jeden z místopředsedů je odpovědný za dohled nad vyřizováním žádostí o přístup k dokumentům.\
\
6.   Předsednictvo přijme výroční zprávu uvedenou v čl. 17 odst. 1 nařízení (ES) č. 1049/2001.\
\
7.   Příslušný výbor Parlamentu pravidelně posuzuje transparentnost činnosti Parlamentu a předkládá plénu zprávu obsahující jeho závěry a doporučení.\
\
Příslušný výbor může zkoumat a hodnotit zprávy přijaté ostatními orgány a subjekty podle článku 17 nařízení (ES) č. 1049/2001.\
\
8.   Konference předsedů jmenuje zástupce Parlamentu do interinstitucionálního výboru podle čl. 15 odst. 2 nařízení (ES) č. 1049/2001.\
\
\
Článek 116a : Vstup do Parlamentu\
\
1.   Průkazy opravňující ke vstupu do Parlamentu jsou poslancům, jejich asistentům a třetím osobám vydávány v souladu s předpisy přijatými předsednictvem. Tyto předpisy rovněž upravují používání a odnímání průkazů ke vstupu.\
\
2.   Průkazy se nevydávají osobám z okruhu poslance, na které se vztahuje dohoda mezi Evropským parlamentem a Evropskou komisí o rejstříku transparentnosti.\
\
3.   Subjekty uvedené v rejstříku transparentnosti a jejich zástupci, kterým byly vydány dlouhodobé průkazy ke vstupu do Evropského parlamentu, musí dodržovat:\
\
-   kodex chování osob zapsaných v rejstříku, který je přílohou dohody,\
\
-   postupy a další povinnosti, jež stanoví dohoda, a \
\
-   prováděcí ustanovení k tomuto článku.\
\
Aniž je dotčeno uplatňování obecných pravidel pro odebrání nebo dočasné zneplatnění dlouhodobých průkazů ke vstupu a pokud nejsou závažné důvody pro opačný postup, generální tajemník se souhlasem kvestorů odebere nebo zneplatní dlouhodobé průkazy ke vstupu, pokud byl držitel průkazu vyškrtnut z rejstříku transparentnosti kvůli porušení kodexu chování osob zapsaných v rejstříku, závažným způsobem porušil povinnosti stanovené v tomto odstavci nebo se bez dostatečného odůvodnění odmítl zúčastnit slyšení nebo schůze výboru, na něž byl formálně pozván, nebo spolupracovat s vyšetřovacím výborem.\
\
4.   Kvestoři mohou stanovit, v jakém rozsahu se kodex chování uvedený v odstavci 3 uplatní na osoby, které jsou držiteli dlouhodobého průkazu ke vstupu, ale nespadají do oblasti působnosti dohody.\
\
5.   Předsednictvo na návrh generálního tajemníka přijme nezbytná opatření s cílem používat rejstřík transparentnosti v souladu s ustanoveními dohody o zřízení tohoto rejstříku."
},
{
'id': 117,
'title': 'Článek 117 : Volba předsedy Komise',
'text': "1.   Poté, co Evropská rada navrhne kandidáta na předsedu Komise, požádá jej předseda Parlamentu, aby učinil prohlášení před Parlamentem a představil Parlamentu své politické cíle. Po prohlášení následuje rozprava.\
\
K účasti v rozpravě je přizvána Evropská rada.\
\
2.   V souladu s čl. 17 odst. 7 Smlouvy o Evropské unii zvolí Parlament předsedu Komise většinou hlasů všech svých členů.\
\
Hlasuje se  tajně.\
\
3.   Jestliže je kandidát zvolen, informuje o tom předseda Parlamentu Radu a požádá ji a nově zvoleného předsedu Komise, aby po vzájemné dohodě navrhli kandidáty na místa komisařů.\
\
4.   Jestliže kandidát nezíská požadovanou většinu, vyzve předseda Parlamentu Evropskou radu, aby do jednoho měsíce navrhla nového kandidáta pro volbu podle stejného postupu."
},
{
'id': 118,
'title': 'Článek 118 : Volba Komise',
'text': "1.   Předseda Parlamentu vyzve nově zvoleného předsedu Komise, aby informoval Parlament o přidělení oblastí působnosti v navrženém sboru komisařů v souladu s politickými směry nově zvoleného předsedy.\
\
2.   Předseda Parlamentu po konzultaci s nově zvoleným předsedou Komise požádá kandidáty, které nově zvolený předseda Komise a Rada navrhli na místa komisařů, aby se dostavili před příslušné výbory nebo orgány podle předpokládaných oblastí jejich působnosti.\
\
3.   Slyšení pořádají výbory. Ve výjimečných případech lze pořádat slyšení v jiném formátu, pokud je kandidátovi na komisaře svěřena oblast působnosti, která je primárně horizontální povahy, a to za předpokladu, že se tohoto slyšení zúčastní i příslušné výbory.\
\
Slyšení jsou veřejná.\
\
4.   Příslušný výbor nebo výbory vyzvou kandidáta na komisaře, aby učinil prohlášení a odpověděl na otázky. Slyšení jsou pořádána způsobem, který kandidátům na komisaře umožní sdělit Parlamentu všechny relevantní informace. Ustanovení týkající se organizace tohoto slyšení jsou obsažena v příloze jednacího řádu(1).\
\
5.   Nově zvolený předseda je vyzván, aby představil sbor komisařů a jejich program na zasedání Parlamentu. K účasti  jsou přizváni předseda Evropské rady a předseda Rady. Po prohlášení následuje rozprava.\
\
6.   Na závěr této rozpravy může politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty předložit návrh usnesení. Použije se čl. 123 odst. 3 až 8.\
\
7.   Po hlasování o návrhu usnesení Parlament zvolí nebo zamítne Komisi ve jmenovitém hlasování většinou odevzdaných hlasů. Parlament může odložit hlasování na další zasedání.\
\
8.   Předseda informuje Radu o zvolení nebo zamítnutí Komise.\
\
9.   V případě významné změny v oblastech působnosti nebo změny složení Komise během funkčního období Komise budou dotčení komisaři nebo ostatní kandidáti na komisaře pozváni, aby se zúčastnili slyšení v souladu s odstavci 3 a 4.\
\
10.   V případě změny v oblasti působnosti komisaře nebo ve finančních zájmech komisaře během jeho funkčního období Parlament tuto situaci posoudí v souladu s přílohou VI.\
\
Pokud je během funkčního období komisaře zjištěn střet zájmů a předseda Komise neuplatní doporučení Parlamentu pro řešení tohoto střetu zájmů, může Parlament požádat předsedu Komise, aby dotčenému komisaři vyslovil nedůvěru podle bodu 5 Rámcové dohody o vztazích mezi Evropským parlamentem a Evropskou komisí a případně učinil kroky k odnětí nároku na důchod nebo jej nahrazujících požitků dotčenému komisaři podle čl. 245 druhého pododstavce Smlouvy o fungování Evropské unie.\
\
\
(1)	Viz příloha VI.\
\
\
Článek 118a : Víceleté programy\
\
Po jmenování nové Komise si Parlament, Rada a Komise podle bodu 5 interinstitucionální dohody o zdokonalení tvorby právních předpisů vymění názory na víceleté programy a vypracují společné závěry.\
\
Za tím účelem uspořádá předseda před jednáním s Radou a  Komisí o společných závěrech týkajících se víceletých programů výměnu názorů s Konferencí předsedů o hlavních cílech politik a prioritách pro nové volební období. Při této výměně názorů se přihlédne mimo jiné k prioritám, které představil nově zvolený předseda Komise, jakož i k odpovědím, které kandidáti na komisaře poskytli při slyšeních podle článku 118.\
\
Před podpisem společných závěrů si předseda Parlamentu vyžádá souhlas Konference předsedů."
},
{
'id': 119,
'title': 'Článek 119 : Návrh na vyslovení nedůvěry Komisi',
'text': "1.   Návrh na vyslovení nedůvěry Komisi může předsedovi podat desetina všech poslanců. Pokud se o návrhu na vyslovení nedůvěry hlasovalo v předcházejících dvou měsících, je jakýkoliv nový návrh podaný méně než jednou pětinou všech poslanců nepřípustný.\
\
2.   Návrh se označuje „návrh na vyslovení nedůvěry“ a musí být odůvodněn. Zasílá se Komisi.\
\
3.   Předseda oznámí poslancům, že byl podán návrh na vyslovení nedůvěry, okamžitě po jeho obdržení.\
\
4.   Rozprava k návrhu se nekoná dříve než 24 hodin poté, co bylo jeho podání oznámeno poslancům.\
\
5.   O návrhu se hlasuje jmenovitě a nejdříve 48 hodin po zahájení rozpravy.\
\
6.   Aniž jsou dotčeny odstavce 4 a 5, rozprava a hlasování se konají nejpozději během dílčího zasedání, které následuje po podání návrhu.\
\
7.   V souladu s článkem 234 Smlouvy o fungování Evropské unie se návrh na vyslovení nedůvěry přijímá dvoutřetinovou většinou odevzdaných hlasů, která představuje většinu všech poslanců Parlamentu. Výsledek hlasování je oznámen předsedovi Rady a předsedovi Komise."
},
{
'id': 120,
'title': 'Článek 120 : Jmenování soudců a generálních advokátů Soudního dvora Evropské unie',
'text': "Parlament na návrh příslušného výboru jmenuje svého zástupce do sedmičlenného panelu, který má prověřit vhodnost kandidátů na místo soudce nebo generálního advokáta Soudního dvora a Tribunálu. Příslušný výbor vybere zástupce, kterého navrhne, prostou většinou hlasů. Koordinátoři uvedeného výboru připraví pro tento účel užší seznam kandidátů."
},
{
'id': 121,
'title': 'Článek 121 : Jmenování členů Účetního dvora',
'text': "1.   Kandidáti navržení na členy Účetního dvora jsou vyzváni, aby učinili prohlášení před příslušným výborem a odpověděli na otázky jeho členů. Výbor hlasuje tajně o každém návrhu na jmenování zvlášť.\
\
2.   Příslušný výbor dává Parlamentu doporučení, zda má být návrh na jmenování schválen.\
\
3.   Hlasování v plénu proběhne do dvou měsíců od obdržení návrhu na jmenování, pokud Parlament nerozhodne jinak na žádost příslušného výboru, politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty. Parlament hlasuje tajně o každém návrhu na jmenování zvlášť.\
\
4.   Je-li stanovisko Parlamentu k jednotlivému návrhu na jmenování záporné, požádá předseda Radu, aby vzala svůj návrh na jmenování zpět a předložila Parlamentu nový."
},
{
'id': 122,
'title': 'Článek 122 : Jmenování členů Výkonné rady Evropské centrální banky',
'text': "1.   Kandidát navržený na prezidenta, viceprezidenta nebo člena Výkonné rady Evropské centrální banky je vyzván, aby učinil prohlášení před příslušným výborem a odpověděl na otázky poslanců.\
\
2.   Příslušný výbor dává Parlamentu doporučení, zda má být návrh na jmenování schválen.\
\
3.   Hlasování v plénu proběhne do dvou měsíců od obdržení návrhu na jmenování, pokud Parlament nerozhodne jinak na žádost příslušného výboru, politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty. Parlament hlasuje tajně o každém návrhu na jmenování zvlášť.\
\
4.   Je-li stanovisko Parlamentu k jednotlivému návrhu na jmenování záporné, požádá předseda, aby byl dotčený návrh na jmenování vzat zpět a aby byl Parlamentu předložen návrh nový.\
\
\
Článek 122a : Jmenování členů subjektů správy hospodářských záležitostí\
\
1.   Tento článek se vztahuje na jmenování:\
\
-   předsedy a místopředsedy Rady dohledu jednotného mechanismu dohledu;\
\
-   předsedy, místopředsedy a stálých členů Jednotného výboru pro řešení krizí jednotného mechanismu pro řešení krizí;\
\
-   předsedů a výkonných ředitelů evropských orgánů dohledu (Evropského orgánu pro bankovnictví, Evropského orgánu pro cenné papíry a trhy, Evropského orgánu pro pojišťovnictví a zaměstnanecké penzijní pojištění); a\
\
-   výkonného ředitele a zástupce výkonného ředitele Evropského fondu pro strategické investice.\
\
2.   Každý kandidát je vyzván, aby učinil prohlášení před příslušným výborem a odpověděl na otázky poslanců.\
\
3.   Příslušný výbor dává Parlamentu doporučení ke každému návrhu na jmenování.\
\
4.   Hlasování v plénu proběhne do dvou měsíců od obdržení návrhu na jmenování, pokud Parlament nerozhodne jinak na žádost příslušného výboru, politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty. Parlament hlasuje tajně o každém jmenování zvlášť.\
\
5.   Je-li stanovisko Parlamentu k návrhu na jmenování záporné, požádá předseda, aby byl návrh vzat zpět a aby byl Parlamentu předložen návrh nový."
},
{
'id': 123,
'title': 'Článek 123 : Prohlášení Komise, Rady a Evropské rady',
'text': "1.   Členové Komise, Rady a Evropské rady mohou kdykoli požádat předsedu Parlamentu o dovolení učinit prohlášení. Předseda Evropské rady učiní prohlášení po každém jejím zasedání. Předseda Parlamentu rozhodne, kdy může být prohlášení učiněno a zda může po takovém prohlášení následovat řádná rozprava nebo třicet minut stručných a věcných otázek poslanců.\
\
2.   Pokud Parlament zařadí prohlášení s rozpravou na pořad jednání, rozhodne, zda bude rozprava ukončena usnesením, nebo nikoli. Parlament tak neučiní, pokud je zpráva o tomtéž tématu na pořadu téhož nebo příštího dílčího zasedání, nepředloží-li předseda z mimořádných důvodů jiný návrh. Ukončí-li Parlament rozpravu usnesením, může výbor, politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty podat návrh usnesení.\
\
3.   O návrzích usnesení se hlasuje v nejbližší možné době určené k hlasování. O jakýchkoli výjimkách rozhodne předseda. Vysvětlení hlasování je přípustné.\
\
4.   Společný návrh usnesení nahradí předchozí návrhy, které podali jeho signatáři, nikoli však návrhy podané jinými výbory, politickými skupinami nebo poslanci.\
\
5.   Pokud společný návrh usnesení předkládají politické skupiny, které představují jasnou většinu, předseda může dát o tomto návrhu hlasovat nejdříve.\
\
6.   Po přijetí usnesení se již nehlasuje o žádných dalších návrzích, nerozhodne-li předseda výjimečně jinak.\
\
7.   Autor nebo autoři návrhu usnesení předloženého podle odstavce 2 nebo čl. 135 odst. 2 mají právo vzít návrh zpět před konečným hlasováním.\
\
8.   Návrh usnesení, který byl vzat zpět, může převzít a ihned předložit skupina, výbor nebo stejný počet poslanců, kteří jsou oprávněni jej předložit. Tento odstavec a odstavec 7 se použijí rovněž v případě usnesení předložených podle článků 105 a 106."
},
{
'id': 124,
'title': 'Článek 124 : Vysvětlení rozhodnutí Komise',
'text': "Po konzultaci s Konferencí předsedů vyzve předseda Parlamentu předsedu Komise, komisaře pro vztahy s Evropským parlamentem, nebo po dohodě jiného komisaře, aby učinil po každém zasedání Komise prohlášení před Parlamentem, v němž vysvětlí hlavní rozhodnutí, která Komise přijala, pokud Konference předsedů nerozhodne, že to z časových důvodů nebo s ohledem na politický význam dané věci není nutné. Po prohlášení následuje nejméně třicetiminutová rozprava se stručnými a věcnými otázkami poslanců."
},
{
'id': 125,
'title': 'Článek 125 : Prohlášení Účetního dvora',
'text': "1.   V souvislosti s postupem udělování absolutoria či s činností Parlamentu v oblasti rozpočtové kontroly může být předseda Účetního dvora vyzván, aby učinil v Parlamentu prohlášení, v němž přednese připomínky obsažené ve výroční zprávě nebo zvláštních zprávách nebo stanoviscích Účetního dvora nebo aby vysvětlil pracovní plán Účetního dvora.\
\
2.   Parlament může rozhodnout o uspořádání samostatné rozpravy za účasti Komise a Rady o jakékoli otázce obsažené ve výše uvedených prohlášeních, zejména pokud tato prohlášení poukázala na nesrovnalosti ve finančním řízení."
},
{
'id': 126,
'title': 'Článek 126 : Prohlášení Evropské centrální banky',
'text': "1.   Prezident Evropské centrální banky je vyzván, aby Parlamentu přednesl výroční zprávu banky o činnosti Evropského systému centrálních bank a o měnové politice v předchozím a běžném roce.\
\
2.   Po přednesení zprávy následuje obecná rozprava.\
\
3.   Prezident Evropské centrální banky je nejméně čtyřikrát ročně pozván k účasti na schůzích příslušného výboru, aby učinil prohlášení a odpověděl na otázky.\
\
4.   Prezident, viceprezident a jiní členové Výkonné rady Evropské centrální banky mohou být přizváni k účasti na jiných schůzích na vlastní žádost nebo na žádost Parlamentu.\
\
5.   Vyhotoví se doslovný záznam z jednání podle odstavců 3 a 4."
},
{
'id': 127,
'title': 'Článek 127 : (vypouští se)',
'text': ""
},
{
'id': 128,
'title': 'Článek 128 : Otázky k ústnímu zodpovězení s rozpravou',
'text': "1.   Otázky Radě, Komisi nebo místopředsedovi Komise / vysokému představiteli Unie pro zahraniční věci a bezpečnostní politiku může pokládat výbor, politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty spolu se žádostí o jejich zařazení na pořad jednání Parlamentu.\
\
Tyto otázky se předkládají písemně předsedovi. Předseda je ihned postoupí Konferenci předsedů.\
\
Konference předsedů v souladu s postupem stanoveným v článku 149 rozhodne, zda budou otázky zařazeny do návrhu pořadu jednání či nikoliv. Otázky, které nejsou zařazeny do návrhu pořadu jednání Parlamentu do tří měsíců od jejich předložení, nejsou brány v potaz.\
\
2.   Otázky Komisi a místopředsedovi Komise / vysokému představiteli Unie pro zahraniční věci a bezpečnostní politiku musí být postoupeny adresátům nejméně jeden týden před zasedáním, na jehož pořad jednání jsou zařazeny, a otázky Radě nejméně tři týdny před uvedeným datem.\
\
3.   Pokud se otázky týkají společné bezpečnostní a obranné politiky, neuplatní se lhůty stanovené v odstavci 2 a odpověď musí být poskytnuta dostatečně rychle, aby byl Parlament řádně informován.\
\
4.   Otázku může v Parlamentu položit jeden z tazatelů. Adresát odpoví.\
\
5.   Ustanovení čl. 123 odst. 2 až 8 týkající se předkládání návrhů usnesení a hlasování o nich se použijí obdobně."
},
{
'id': 129,
'title': 'Článek 129 : Doba vyhrazená pro otázky',
'text': "1.   Na každé dílčí zasedání může být zařazena doba vyhrazená pro otázky Komisi v délce nejvýše 90 minut věnovaná jednomu nebo několika specifickým horizontálním tématům, o nichž rozhodne Konference předsedů jeden měsíc před dílčím zasedáním.\
\
2.   Oblast působnosti komisařů pozvaných Konferencí předsedů musí souviset se specifickým horizontálním tématem nebo tématy, kterých se budou týkat položené otázky. Počet komisařů pozvaných na každé dílčí zasedání je omezen na dva. V závislosti na specifickém horizontálním tématu nebo tématech vybraných pro dobu vyhrazenou pro otázky lze nicméně pozvat třetího komisaře.\
\
3.   V souladu s pokyny stanovenými Konferencí předsedů se může zvláštní doba vyhrazená pro otázky konat za přítomnosti Rady, předsedy Komise, místopředsedy Komise / vysokého představitele Unie pro zahraniční věci a bezpečnostní politiku a předsedy Euroskupiny.\
\
4.   Doba vyhrazená pro otázky se předem zvlášť nepřiděluje. Předseda v nejvyšší možné míře zajistí, aby možnost položit otázku měli poslanci mající různé politické názory a pocházející z různých členských států.\
\
5.   Poslanec má na položení otázky jednu minutu a komisař má dvě minuty na odpověď. Tentýž poslanec může položit doplňující otázku, která má přímou spojitost s hlavní otázkou, v délce nejvýše 30 sekund. Komisař má na doplňující odpověď dvě minuty.\
\
Otázky a doplňující otázky se musí přímo týkat specifického horizontálního tématu, o němž bylo rozhodnuto podle odstavce 1. O jejich přípustnosti rozhodne předseda."
},
{
'id': 130,
'title': 'Článek 130 : Otázky k písemnému zodpovězení',
'text': "1.   Kterýkoli poslanec může položit předsedovi Evropské rady, Radě, Komisi nebo místopředsedovi Komise / vysokému představiteli Unie pro zahraniční věci a bezpečnostní politiku otázku k písemnému zodpovězení v souladu s kritérii uvedenými v příloze jednacího řádu(1). Za obsah otázek jsou odpovědní výhradně jejich autoři.\
\
2.   Otázky se předkládají předsedovi. Záležitosti týkající se přípustnosti otázky řeší předseda. Rozhodnutí předsedy nevychází výlučně z ustanovení přílohy, na která odkazuje odstavec 1, nýbrž z ustanovení jednacího řádu obecně. Odůvodněné rozhodnutí předsedy se oznámí tazateli.\
\
3.   Otázky se předkládají v elektronické podobě. Každý poslanec může předložit nejvýše dvacet otázek v průběhu jednotlivého tříměsíčního období.\
\
4.   Určitou otázku mohou podpořit i jiní poslanci než její autor. Tato otázka se započítává do maximálního počtu otázek podle odstavce 3 pouze jejímu autoru, nikoli však poslanci, který ji podpoří.\
\
5.   Nemůže-li adresát otázku zodpovědět ve lhůtě tří týdnů (prioritní otázky) nebo šesti týdnů (neprioritní otázky) od jejího zaslání adresátovi, může být na žádost jejího autora zařazena na pořad jednání příští schůze příslušného výboru.\
\
6.   Každý poslanec může vznést jednu prioritní otázku měsíčně.\
\
7.   Otázky a všechny odpovědi, včetně jejich příslušných příloh, na tyto otázky se zveřejňují na internetových stránkách Parlamentu.\
\
\
(1)	Viz příloha III.\
\
\
Článek 130a : Méně závažné interpelace k písemnému zodpovězení\
\
1.   V případě méně závažných interpelací, které spočívají v otázkách k písemnému zodpovězení, mohou být Rada, Komise nebo místopředseda Komise, vysoký představitel Unie pro zahraniční věci a bezpečnostní politiku požádáni politickou skupinou nebo poslanci, kteří tvoří nejméně pět procent všech poslanců Parlamentu, aby podali Parlamentu informace ke konkrétně vymezeným tématům.\
\
Otázky jsou předkládány předsedovi, který v případě, že jsou tyto otázky obecně v souladu s jednacím řádem a splňují kritéria stanovená v příloze tohoto jednacího řádu(1), požádá adresáta, aby odpověděl ve lhůtě dvou týdnů. Předseda může tuto lhůtu po konzultaci s tazateli prodloužit.\
\
2.   Otázky a odpovědi se zveřejňují na internetových stránkách Parlamentu.\
\
\
(1)	Viz příloha II.\
\
\
Článek 130b : Závažné interpelace k písemnému zodpovězení s rozpravou\
\
1.   V případě závažných interpelací, které spočívají v otázkách k písemnému zodpovězení s rozpravou, mohou být tyto otázky předloženy Radě, Komisi nebo místopředsedovi Komise, vysokému představiteli Unie pro zahraniční věci a bezpečnostní politiku výborem, politickou skupinou nebo poslanci, kteří tvoří nejméně pět procent všech poslanců Parlamentu. Otázky mohou obsahovat stručné vysvětlující prohlášení.\
\
Otázky jsou předkládány písemně předsedovi, který v případě, že jsou tyto otázky obecně v souladu s jednacím řádem a splňují kritéria stanovená v příloze tohoto jednacího řádu(1), o otázce bezodkladně informuje adresáta a požádá jej, aby uvedl, zda a do kdy na ni odpoví.\
\
2.   Po obdržení písemné odpovědi je závažná interpelace zařazena do návrhu pořadu jednání Parlamentu v souladu s postupem stanoveným v článku 149. Rozprava se uskuteční, pokud o to požádá výbor, politická skupina nebo poslanci, kteří tvoří nejméně pět procent všech poslanců Parlamentu.\
\
3.   Odmítne-li adresát na otázku odpovědět nebo neodpoví-li do tří týdnů, je otázka zařazena do návrhu pořadu jednání. Rozprava se uskuteční, pokud o to požádá výbor, politická skupina nebo poslanci, kteří tvoří nejméně pět procent všech poslanců Parlamentu. Před rozpravou může být jednomu tazateli umožněno uvést dodatečné důvody pro předložení otázky.\
\
4.   Otázku může v Parlamentu přednést jeden z tazatelů. Odpoví na ni jeden člen příslušného orgánu.\
\
Ustanovení čl. 123 odst. 2 až 5 týkající se předkládání návrhů usnesení a hlasování o nich se použijí obdobně.\
\
5.   Tyto otázky, jakož i odpovědi na ně, se zveřejňují na internetových stránkách Parlamentu.\
\
\
(1)	Viz příloha II."
},
{
'id': 131,
'title': 'Článek 131 : Otázky Evropské centrální bance k písemnému zodpovězení',
'text': "1.   Kterýkoli poslanec může položit Evropské centrální bance nejvýše šest otázek k písemnému zodpovězení měsíčně v souladu s kritérii uvedenými v příloze jednacího řádu(1). Za obsah otázek jsou odpovědní výhradně jejich autoři.\
\
2.   Tyto otázky se předkládají písemně předsedovi příslušného výboru. Po obdržení těchto otázek je předseda příslušného výboru oznámí Evropské centrální bance. Záležitosti týkající se přípustnosti otázky řeší předseda příslušného výboru. Toto rozhodnutí se oznámí tazateli.\
\
3.   Tyto otázky, jakož i odpovědi na ně, se zveřejňují na internetových stránkách Parlamentu.\
\
4.   Není-li otázka k písemnému zodpovězení zodpovězena ve lhůtě šesti týdnů, může být na žádost jejího autora zařazena na pořad jednání další schůze příslušného výboru za účasti prezidenta Evropské centrální banky.\
\
\
(1)	Viz příloha II.\
\
\
Článek 131a : Otázky k písemnému zodpovězení týkající se jednotného mechanismu dohledu a jednotného mechanismu pro řešení krizí\
\
1.   Ustanovení čl. 131 odst. 1, 2 a 3 se na otázky k písemnému zodpovězení týkající se jednotného mechanismu dohledu a jednotného mechanismu pro řešení krizí použijí obdobně. Počet těchto otázek se odečte od maximálního počtu šesti otázek měsíčně stanoveného v čl. 131 odst. 1.\
\
2.   Není-li otázka k písemnému zodpovězení zodpovězena ve lhůtě pěti týdnů, může být na žádost jejího autora zařazena na pořad jednání další schůze příslušného výboru za účasti předsedy rady či výboru adresáta."
},
{
'id': 132,
'title': 'Článek 132 : Výroční zprávy a jiné zprávy dalších orgánů či institucí',
'text': "1.   Výroční zprávy a jiné zprávy dalších orgánů či institucí, u kterých Smlouvy stanoví konzultaci s Parlamentem nebo u kterých jiná právní ustanovení vyžadují stanovisko Parlamentu, jsou předmětem zprávy předložené v plénu.\
\
2.   Výroční zprávy a jiné zprávy dalších orgánů či institucí, na které se nevztahuje odstavec 1, jsou postoupeny příslušnému výboru, který je posoudí a může předložit Parlamentu krátký návrh usnesení nebo navrhnout vypracování zprávy podle článku 52, domnívá-li se, že by Parlament měl zaujmout postoj k důležité otázce, jíž se zprávy týkají."
},
{
'id': 133,
'title': 'Článek 133 : Návrhy usnesení',
'text': "1.   Kterýkoli poslanec může předložit návrh usnesení ve věci spadající do oblasti činnosti Evropské unie.\
\
Návrh nesmí obsahovat více než 200 slov.\
\
2.   Obsah tohoto návrhu:\
\
-   nesmí obsahovat rozhodnutí o záležitostech, pro něž tento jednací řád, zejména článek 46, stanovuje jiné zvláštní postupy a pravomoci, nebo\
\
-   se nesmí týkat záležitosti, která je právě projednávána v Parlamentu.\
\
3.   Každý poslanec může předložit nejvýše jeden návrh usnesení za měsíc.\
\
4.   Návrh usnesení je předán předsedovi Parlamentu, který ověří, zda jsou splněny příslušné podmínky. Pokud předseda prohlásí návrh za přípustný, oznámí jej v plénu a postoupí jej příslušnému výboru.\
\
5.   Příslušný výbor rozhodne o postupu, který má být použit, což může zahrnovat kombinace návrhu usnesení s jinými návrhy usnesení nebo se zprávami; přijetí stanoviska, které může mít formu dopisu; nebo vypracování zprávy podle článku 52. Příslušný výbor může rovněž rozhodnout o tom, že neučiní žádné kroky v návaznosti na návrh usnesení.\
\
6.   Autoři návrhu usnesení jsou informováni o rozhodnutích předsedy, výboru a Konference předsedů.\
\
7.   Zpráva uvedená v odstavci 5 obsahuje text návrhu usnesení.\
\
8.   Stanoviska ve formě dopisu uvedená v odstavci 5, která jsou určená jiným orgánům Evropské unie, těmto orgánům zasílá předseda.\
\
9.   Návrh usnesení předložený podle odstavce 1 může jeho autor, autoři nebo první signatář vzít zpět dříve, než příslušný výbor rozhodne podle odstavce 5 o vypracování zprávy.\
\
Jakmile však již návrh usnesení převzal příslušný výbor, je pouze tento výbor oprávněn vzít jej zpět. Příslušnému výboru zůstává pravomoc vzít návrh zpět až do zahájení konečného hlasování v plénu."
},
{
'id': 134,
'title': 'Článek 134 : (vypouští se)',
'text': ""
},
{
'id': 135,
'title': 'Článek 135 : Rozpravy o případech porušování lidských práv, demokracie a právního státu',
'text': "1.   Výbor, meziparlamentní delegace, politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty mohou písemně požádat předsedu o konání rozpravy v naléhavém případě porušování lidských práv, demokracie a právního státu.\
\
2.   Konference předsedů sestaví seznam témat, která mají být zařazena do konečného návrhu pořadu jednání příští rozpravy o případech porušování lidských práv, demokracie a právního státu, na základě žádostí uvedených v odstavci 1 a v souladu s ustanoveními přílohy III. Celkem nesmějí být na pořad jednání zařazena více než tři témata včetně podkapitol.\
\
V souladu s článkem 149a může Parlament upustit od projednávání tématu, které má být předmětem rozpravy, a nahradit jej v rozpravě tématem, které původně nebylo na pořadu. Návrhy usnesení o vybraných tématech může předložit výbor, politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty do večera dne, kdy se přijímá pořad jednání. Předseda stanoví přesnou lhůtu pro předkládání takových návrhů usnesení.\
\
3.   Celková řečnická doba pro politické skupiny a nezařazené poslance se stanoví v souladu s postupem stanoveným v čl. 162 odst. 4 a 5, v rámci nejdelší možné doby pro rozpravu, tj. 60 minut pro dílčí zasedání.\
\
Jakákoli doba zbývající po přednesení návrhu usnesení a řečnické doby přidělené pro případné příspěvky Komise a Rady se rozdělí mezi politické skupiny a nezařazené poslance.\
\
4.   Na konci rozpravy se přikročí okamžitě k hlasování. Článek 183 týkající se vysvětlení hlasování se nepoužije.\
\
Hlasování podle tohoto článku mohou být konána kolektivně na odpovědnost předsedy a Konference předsedů.\
\
5.   Jsou-li předloženy dva nebo více návrhů usnesení o tomtéž tématu, použije se postup stanovený v čl. 123 odst. 4 a 5.\
\
6.   Předseda Parlamentu a předsedové politických skupin mohou rozhodnout o tom, že o návrhu usnesení se má hlasovat bez rozpravy. Toto rozhodnutí vyžaduje jednomyslnou dohodu všech předsedů politických skupin.\
\
Články 187 a 188 se nevztahují na návrhy usnesení zařazené na pořad jednání k rozpravě o případech porušování lidských práv, demokracie a právního státu.\
\
Návrhy usnesení mohou být předloženy k rozpravě o porušování lidských práv, demokracie a právního státu až poté, co byl přijat seznam témat k projednání. Návrhy usnesení, které nelze projednat v rámci doby vymezené pro rozpravu, se neberou v potaz. Totéž platí pro návrhy usnesení, u nichž se na základě žádosti podle čl. 168 odst. 3 zjistí, že není dosaženo usnášeníschopnosti. Autoři mají právo předložit takové návrhy znovu buď k projednání ve výboru podle článku 133, nebo k rozpravě o porušování lidských práv, demokracie a právního státu na příštím dílčím zasedání.\
\
Žádné téma nemůže být zařazeno na pořad jednání k rozpravě o případech porušování lidských práv, demokracie a právního státu, je-li již zařazeno na pořad jednání dílčího zasedání.\
\
Jednací řád neobsahuje žádné ustanovení, které by umožňovalo společnou rozpravu k návrhu usnesení předloženému podle odst. 2 druhého pododstavce a ke zprávě výboru o téže věci.\
\
Pokud je požadováno zjištění usnášeníschopnosti podle čl. 168 odst. 3, vztahuje se tato žádost pouze na návrh usnesení, o němž se má hlasovat, a nikoli na návrhy, které následují."
},
{
'id': 136,
'title': 'Článek 136 : (vypouští se)',
'text': ""
},
{
'id': 137,
'title': 'Článek 137 : Konzultace s Evropským hospodářským a sociálním výborem',
'text': "1.   Pokud Smlouva o fungování Evropské unie stanoví konzultaci s Evropským hospodářským a sociálním výborem, zahájí předseda postup konzultace a informuje o tom Parlament.\
\
2.   Kterýkoli z výborů může požádat o konzultaci s Evropským hospodářským a sociálním výborem v otázkách obecné i specifické povahy.\
\
Výbor ve své žádosti stanoví lhůtu, v níž má Evropský hospodářský a sociální výbor zaujmout své stanovisko.\
\
Žádost o konzultaci s Evropským hospodářským a sociálním výborem bude Parlamentu oznámena na příštím dílčím zasedání a považuje se za přijatou, pokud politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty nepožádají do 24 hodin od tohoto oznámení o to, aby o ní bylo hlasováno.\
\
3.   Stanoviska Evropského hospodářského a sociálního výboru jsou postoupena příslušnému výboru."
},
{
'id': 138,
'title': 'Článek 138 : Konzultace s Výborem regionů',
'text': "1.   Pokud Smlouva o fungování Evropské unie stanoví konzultaci s Výborem regionů, zahájí předseda postup konzultace a informuje o tom Parlament.\
\
2.   Kterýkoli z výborů může požádat o konzultaci s Výborem regionů v otázkách obecné i specifické povahy.\
\
Výbor ve své žádosti stanoví lhůtu, v níž má Výbor regionů zaujmout své stanovisko.\
\
Žádost o konzultaci s Výborem regionů bude Parlamentu oznámena na příštím dílčím zasedání a považuje se za přijatou, pokud politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty nepožádají do 24 hodin od tohoto oznámení o to, aby o ní bylo hlasováno.\
\
3.   Stanoviska Výboru regionů jsou postoupena příslušnému výboru."
},
{
'id': 139,
'title': 'Článek 139 : Žádosti určené evropským agenturám',
'text': "1.   Pokud má Parlament právo podat žádost evropské agentuře, může každý poslanec podat tuto žádost písemně předsedovi Parlamentu. Tyto žádosti se musí týkat otázek spadajících do působnosti dané agentury a musí obsahovat informace vysvětlující povahu otázky a zájem Unie.\
\
2.   Po konzultaci s příslušným výborem předseda Parlamentu buď postoupí žádost agentuře, nebo přijme jiná vhodná opatření. Poslanec podávající žádost je o tom neprodleně vyrozuměn. Každá žádost postoupená předsedou agentuře musí obsahovat lhůtu pro odpověď.\
\
3.   Pokud má agentura za to, že nemůže odpovědět na takto znějící žádost, nebo chce, aby byla žádost změněna, vyrozumí o tom neprodleně předsedu Parlamentu, který přijme vhodná opatření, popřípadě po konzultaci s příslušným výborem."
},
{
'id': 140,
'title': 'Článek 140 : Interinstitucionální dohody',
'text': "1.   Parlament může uzavírat dohody s jinými orgány v souvislosti s uplatňováním Smluv nebo se záměrem zlepšit nebo vyjasnit postupy.\
\
Tyto dohody mohou mít formu společných prohlášení, výměny dopisů nebo kodexů chování či jiných vhodných nástrojů. Předseda dohody podepíše poté, co  je posoudil výbor příslušný pro ústavní otázky a schválil Parlament.\
\
2.   Pokud tyto dohody vedou k úpravám stávajících práv a povinností podle jednacího řádu nebo stanoví nová práva a povinnosti poslanců nebo orgánů Parlamentu či jinak mění nebo vykládají jednací řád, je věc před podpisem dohody postoupena věcně příslušnému výboru  k posouzení v souladu s čl. 226 odst. 2 až 6."
},
{
'id': 141,
'title': 'Článek 141 : Řízení před Soudním dvorem Evropské unie',
'text': "1.   Ve lhůtách stanovených ve Smlouvách a ve statutu Soudního dvora Evropské unie pro žalobu podanou orgány Unie a fyzickými nebo právnickými osobami zkoumá Parlament právní předpisy Unie a jejich uplatňování s cílem zajistit, aby byla plně dodržována ustanovení Smluv, zejména ustanovení týkající se práv Parlamentu. \
\
2.   Pokud se výbor příslušný pro právní záležitosti domnívá, že došlo k porušení práva Unie, informuje o tom Parlament, a to v případě nutnosti ústně. Ve vhodných případech může výbor příslušný pro právní záležitosti vyslechnout názor věcně příslušného výboru.\
\
3.   Předseda podá na základě doporučení výboru příslušného pro právní záležitosti jménem Parlamentu žalobu u Soudního dvora.\
\
Na začátku následujícího dílčího zasedání může předseda předložit Parlamentu rozhodnutí o pokračování v řízení. Jestliže se Parlament vysloví většinou odevzdaných hlasů proti žalobě, vezme ji předseda zpět.\
\
Jestliže předseda podá žalobu v rozporu s doporučením výboru příslušného pro právní záležitosti, předloží Parlamentu na začátku následujícího dílčího zasedání rozhodnutí o pokračování v řízení.\
\
4.   Po konzultaci s výborem příslušným pro právní záležitosti předseda předloží připomínky nebo vystoupí jménem Parlamentu při soudních řízeních.\
\
Má-li předseda v úmyslu odchýlit se od doporučení výboru příslušného pro právní záležitosti, informuje výbor o této skutečnosti a postoupí záležitost Konferenci předsedů s uvedením důvodů svého rozhodnutí.\
\
Domnívá-li se Konference předsedů, že by Parlament výjimečně neměl předložit připomínky nebo vstoupit do řízení u Soudního dvora Evropské unie v případě zpochybnění platnosti aktu přijatého Parlamentem, je věc bezodkladně postoupena Parlamentu k projednání.\
\
Žádné ustanovení jednacího řádu příslušnému výboru nebrání v přijetí vhodných procesních opatření umožňujících, aby výbor v naléhavých případech předložil své doporučení včas.\
\
Pokud je nezbytné rozhodnout o tom, zda by měl Parlamentu vykonat svá práva vůči Soudnímu dvoru Evropské unie, a nespadá-li dotčený akt do působnosti článku 141 tohoto jednacího řádu, použije se obdobně postup stanovený v tomto článku.\
\
5.   V naléhavých případech může předseda Parlamentu, pokud možno po konzultaci s předsedou a zpravodajem výboru příslušného pro právní záležitosti, přijmout předběžná opatření v zájmu dodržení příslušných lhůt. V těchto případech se při nejbližší příležitosti případně použije postup stanovený v odstavcích 3 nebo 4.\
\
6.   Výbor příslušný pro právní záležitosti stanoví zásady, které bude používat při uplatňování tohoto článku."
},
{
'id': 142,
'title': 'Článek 142 : Výměna informací, kontakty a vzájemné poskytování zázemí',
'text': "1.   Parlament pravidelně informuje vnitrostátní parlamenty členských států o své činnosti.\
\
2.   Organizace a podpora účinné a pravidelné meziparlamentní spolupráce v rámci Unie podle článku 9 Protokolu č. 1 o úloze vnitrostátních parlamentů v Evropské unii se sjednávají na základě mandátu, který po konzultaci s Konferencí předsedů výborů udělí Konference předsedů.\
\
Parlament veškeré dohody o těchto záležitostech schvaluje postupem stanoveným v článku 140.\
\
3.   Výbor se může přímo zapojit do jednání s vnitrostátními parlamenty na úrovni výborů v rámci stropu rozpočtových prostředků vyčleněných k tomuto účelu. Tato jednání mohou zahrnovat vhodnou formu spolupráce před legislativním procesem a po něm.\
\
4.   Každý dokument, který se týká legislativního postupu na úrovni Evropské unie a který je vnitrostátním parlamentem úřední cestou předán Evropskému parlamentu, se postupuje výboru, který je k projednání záležitostí uvedených v tomto dokumentu příslušný.\
\
5.   Konference předsedů může zmocnit předsedu, aby vyjednal poskytování zázemí vnitrostátním parlamentům členských států na základě vzájemnosti a aby navrhl další opatření pro usnadnění kontaktů s těmito vnitrostátními parlamenty."
},
{
'id': 143,
'title': 'Článek 143 : Konference parlamentních výborů pro  záležitosti Unie (COSAC)',
'text': "1.   Na návrh předsedy jmenuje Konference předsedů členy parlamentní delegace v COSAC a zmocňuje je. V čele delegace je místopředseda Evropského parlamentu odpovědný za udržování vztahů s vnitrostátními parlamenty a předseda výboru příslušného pro ústavní záležitosti.\
\
2.   Ostatní členové delegace jsou vybíráni s ohledem na věci, které se mají projednávat na zasedání COSAC, a jsou mezi nimi pokud možno zástupci výborů příslušných pro tyto záležitosti.\
\
3.   Při výběru členů delegace se přihlíží  k celkové politické rovnováze v Parlamentu.\
\
4.   Po každém zasedání COSAC předloží delegace zprávu Konferenci předsedů."
},
{
'id': 144,
'title': 'Článek 144 : Konference parlamentů',
'text': "Konference předsedů jmenuje členy parlamentní delegace v jakékoli konferenci nebo podobném orgánu, jehož se účastní zástupci parlamentů, a zmocňuje delegaci s ohledem na příslušné parlamentní usnesení. Delegace volí svého předsedu a případně jednoho nebo více místopředsedů."
},
{
'id': 145,
'title': 'Článek 145 : Volební období Parlamentu, zasedání, dílčí zasedání, denní zasedání',
'text': "1.     Volební období Parlamentu je shodné s funkčním obdobím poslanců ve smyslu aktu ze dne 20. září 1976.\
\
2.    Za zasedání se označuje období jednoho roku ve smyslu tohoto aktu a Smluv.\
\
3.   Dílčí zasedání Parlamentu se svolává zpravidla každý měsíc a je rozděleno do denních zasedání.\
\
Zasedání Parlamentu konaná ve stejný den se považují za jediné zasedání."
},
{
'id': 146,
'title': 'Článek 146 : Svolávání Parlamentu',
'text': "1.   V souladu s čl. 229 prvním pododstavcem Smlouvy o fungování Evropské unie se Parlament schází každý rok, aniž by musel být svolán, druhé úterý v měsíci březnu. Sám si určuje délku přerušení zasedání.\
\
2.   Kromě toho Parlament zasedá, aniž by bylo nutné jej svolávat, první úterý po uplynutí jednoho měsíce od skončení období uvedeného v čl. 10 odst. 1 aktu ze dne 20. září 1976.\
\
3.   Konference předsedů může s uvedením důvodů změnit délku přerušení stanovenou podle odstavce 1, a to nejpozději dva týdny přede dnem již stanoveným Parlamentem pro obnovení zasedání. Obnovení zasedání však nesmí být odloženo o více než dva týdny.\
\
4.   Na žádost většiny všech poslanců nebo na žádost Komise či Rady předseda po konzultaci s Konferencí předsedů mimořádně svolá Parlament.\
\
Předseda je se souhlasem Konference předsedů oprávněn svolat Parlament v naléhavých případech."
},
{
'id': 147,
'title': 'Článek 147 : Místo zasedání a schůzí',
'text': "1.   Zasedání Parlamentu a schůze jeho výborů se konají v souladu s ustanovením Smluv.\
\
Návrhy na dodatečná dílčí zasedání v Bruselu a veškeré změny těchto návrhů vyžadují pouze většinu odevzdaných hlasů.\
\
2.   Kterýkoli výbor může rozhodnout, že požádá, aby se jedna nebo více schůzí konalo na jiném místě. Jeho odůvodněná žádost se podává předsedovi, který ji předloží předsednictvu. Jestliže je daná věc naléhavá, může předseda rozhodnout sám. Jestliže předseda nebo předsednictvo žádost zamítnou, musí být zamítnutí odůvodněno."
},
{
'id': 148,
'title': 'Článek 148 : Účast poslanců na zasedáních',
'text': "1.   Při každém zasedání je poslancům k dispozici prezenční listina, do níž zaznamenávají podpisem svou účast.\
\
2.   Jména poslanců přítomných podle záznamu na prezenční listině jsou uvedena v zápisu z jednání z každého denního zasedání s označením „přítomen/přítomna“. Jména poslanců omluvených předsedou jsou uvedena v zápisu z jednání z každého denního zasedání s označením „omluven/omluvena“."
},
{
'id': 149,
'title': 'Článek 149 : Návrh pořadu jednání',
'text': "1.   Před každým dílčím zasedáním sestaví Konference předsedů návrh pořadu jednání na základě doporučení Konference předsedů výborů.\
\
Na pozvání předsedy Parlamentu se mohou Komise a Rada zúčastnit jednání Konference předsedů o návrhu pořadu jednání.\
\
2.   V pořadu jednání může být u některých bodů, které se mají projednávat, stanoveno, kdy se bude hlasování konat.\
\
3.   Konečný návrh pořadu jednání musí být dán poslancům k dispozici nejpozději tři hodiny před zahájením dílčího zasedání.\
\
\
Článek 149a : Přijímání a změny pořadu jednání\
\
1.   Na začátku každého dílčího zasedání přijme Parlament pořad jednání. Změny konečného návrhu pořadu jednání může navrhnout výbor, politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty. Každý takový návrh musí předseda obdržet nejpozději jednu hodinu před zahájením dílčího zasedání. Předseda může dát slovo navrhovateli a jednomu řečníkovi proti návrhu. Řečnická doba je nejvýše jedna minuta.\
\
2.   Jakmile je pořad jednání přijat, nelze jej měnit, s výjimkou případů podle článků 154, 187, 188, 189, 190 nebo 191 nebo na návrh předsedy.\
\
Je-li procesní návrh na změnu pořadu zamítnut, nemůže být během téhož dílčího zasedání znovu předložen.\
\
3.   Před ukončením zasedání oznámí předseda datum, čas a pořad jednání příštího zasedání."
},
{
'id': 150,
'title': 'Článek 150 : Postup v plénu bez pozměňovacích návrhů a rozpravy',
'text': "1.   Pokud byla zpráva ve výboru přijata tak, že proti hlasovala méně než jedna desetina poslanců výboru, je zpráva zařazena do návrhu pořadu jednání Parlamentu pro hlasování bez pozměňovacích návrhů.\
\
Tento bod pořadu jednání je předmětem jediného hlasování, pokud před sestavením konečného návrhu pořadu jednání poslanci nebo jedna či více politických skupin dosahující přinejmenším střední prahové hodnoty písemně nepožádají, aby bylo k tomuto bodu možno předkládat pozměňovací návrhy, přičemž v takovém případě stanoví předseda lhůtu pro předložení pozměňovacích návrhů.\
\
2.   O bodech zařazených do konečného návrhu pořadu jednání pro hlasování bez pozměňovacích návrhů se rovněž nevede rozprava, pokud Parlament při přijímání pořadu jednání na začátku dílčího zasedání nerozhodne jinak, a to na návrh Konference předsedů nebo na žádost politické skupiny nebo poslanců dosahujících přinejmenším nízké prahové hodnoty.\
\
3.   Při sestavování konečného návrhu pořadu jednání dílčího zasedání může Konference předsedů navrhnout zařazení dalších bodů pro hlasování bez pozměňovacích návrhů nebo bez rozpravy. Při přijímání pořadu jednání nesmí Parlament takový návrh přijmout, pokud politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty podají písemnou námitku nejpozději jednu hodinu před zahájením dílčího zasedání.\
\
4.   Pokud se o bodu hlasuje bez předchozí rozpravy, může zpravodaj nebo předseda příslušného výboru bezprostředně před hlasováním učinit prohlášení v délce nejvýše dvou minut."
},
{
'id': 151,
'title': 'Článek 151 : Krátké přednesení',
'text': "Na žádost zpravodaje nebo na návrh Konference předsedů může Parlament rovněž rozhodnout, že bod nevyžadující řádnou rozpravu bude projednán formou krátkého přednesení zpravodajem v plénu. V tomto případě má Komise možnost odpovědět a poté se může konat až desetiminutová rozprava, během které dá předseda slovo poslancům, kteří se přihlásí zvednutím ruky, a každý z nich může hovořit nejvýše jednu minutu."
},
{
'id': 152,
'title': 'Článek 152 : (vypouští se)',
'text': ""
},
{
'id': 153,
'title': 'Článek 153 : Mimořádná rozprava',
'text': "1.   Politická skupina nebo poslanci dosahující přinejmenším nízké prahové hodnoty mohou požádat, aby byla na pořad jednání Parlamentu zařazena mimořádná rozprava o záležitosti zásadního významu týkající se politiky Evropské unie. Během jednoho dílčího zasedání se zpravidla nekoná více než jedna mimořádná rozprava.\
\
2.   Žádost se podává předsedovi písemně nejpozději tři hodiny před zahájením dílčího zasedání, během něhož se má mimořádná rozprava konat. O žádosti se hlasuje na začátku dílčího zasedání při přijímání návrhu pořadu jednání.\
\
3.   V reakci na dění po přijetí pořadu jednání dílčího zasedání a po konzultaci s předsedy politických skupin může předseda navrhnout mimořádnou rozpravu. O tomto návrhu se hlasuje na začátku zasedání nebo v době vyhrazené pro hlasování. Poslanci jsou o tomto návrhu na mimořádnou rozpravu informováni nejméně jednu hodinu před hlasováním.\
\
4.   Předseda stanoví dobu konání této rozpravy. Celková délka rozpravy nesmí překročit 60 minut. Řečnická doba se politickým skupinám a nezařazeným poslancům přiděluje podle čl. 162 odst. 4 a 5.\
\
5.    Rozprava se ukončuje bez přijetí usnesení.\
\
\
Článek 153a : Tematická rozprava na žádost politické skupiny\
\
1.   Na každém dílčím zasedání jsou v návrhu pořadu jednání vyhrazeny jeden nebo dva časové úseky, z nichž každý trvá nejméně 60 minut, na rozpravu o tématech s klíčovým významem pro politiku Evropské unie.\
\
2.   Každá politická skupina má právo navrhnout aktuální téma dle svého výběru na nejméně jednu takovou rozpravu ročně. Konference předsedů zajistí, aby byl výkon tohoto práva v průběhu jakéhokoli období jednoho roku spravedlivě rozdělen mezi politické skupiny.\
\
3.   Politické skupiny sdělí zvolené aktuální téma písemně předsedovi před vypracováním konečného návrhu pořadu jednání Konferencí předsedů. Musí být plně dodržen čl. 38 odst. 1 jednacího řádu týkající se  práv, svobod a zásad uznaných článkem 6 Smlouvy o Evropské unii a hodnot zakotvených v článku 2 uvedené Smlouvy.\
\
4.   Konference předsedů stanoví, ve kterém časovém úseku se bude rozprava konat. Většinou čtyř pětin poslanců Parlamentu může Konference předsedů rozhodnout o zamítnutí určitého tématu navrženého  skupinou.\
\
5.   Rozpravu uvede zástupce politické skupiny, která dané aktuální téma navrhla. Po tomto úvodu je řečnická doba rozdělena v souladu s čl. 162 odst. 4 a 5.\
\
6.   Rozprava se ukončuje bez přijetí usnesení."
},
{
'id': 154,
'title': '',
'text': ""
},
{
'id': 155,
'title': '',
'text': ""
},
{
'id': 156,
'title': '',
'text': ""
},
{
'id': 157,
'title': '',
'text': ""
},
{
'id': 158,
'title': '',
'text': ""
},
{
'id': 159,
'title': '',
'text': ""
},
{
'id': 160,
'title': '',
'text': ""
},
{
'id': 161,
'title': '',
'text': ""
},
{
'id': 162,
'title': '',
'text': ""
},
{
'id': 163,
'title': '',
'text': ""
},
{
'id': 164,
'title': '',
'text': ""
},
{
'id': 165,
'title': '',
'text': ""
},
{
'id': 166,
'title': '',
'text': ""
},
{
'id': 167,
'title': '',
'text': ""
},
{
'id': 168,
'title': '',
'text': ""
},
{
'id': 169,
'title': '',
'text': ""
},
{
'id': 170,
'title': '',
'text': ""
},
{
'id': 171,
'title': '',
'text': ""
},
{
'id': 172,
'title': '',
'text': ""
},
{
'id': 173,
'title': '',
'text': ""
},
{
'id': 174,
'title': '',
'text': ""
},
{
'id': 175,
'title': '',
'text': ""
},
{
'id': 176,
'title': '',
'text': ""
},
{
'id': 177,
'title': '',
'text': ""
},
{
'id': 178,
'title': '',
'text': ""
},
{
'id': 179,
'title': '',
'text': ""
},
{
'id': 180,
'title': '',
'text': ""
},
{
'id': 181,
'title': '',
'text': ""
},
{
'id': 182,
'title': '',
'text': ""
},
{
'id': 183,
'title': '',
'text': ""
},
{
'id': 184,
'title': '',
'text': ""
},
{
'id': 185,
'title': '',
'text': ""
},
{
'id': 186,
'title': '',
'text': ""
},
{
'id': 187,
'title': '',
'text': ""
},
{
'id': 188,
'title': '',
'text': ""
},
{
'id': 189,
'title': '',
'text': ""
},
{
'id': 190,
'title': '',
'text': ""
},
{
'id': 191,
'title': '',
'text': ""
},
{
'id': 192,
'title': '',
'text': ""
},
{
'id': 193,
'title': '',
'text': ""
},
{
'id': 194,
'title': '',
'text': ""
},
{
'id': 195,
'title': '',
'text': ""
},
{
'id': 196,
'title': '',
'text': ""
},
{
'id': 197,
'title': '',
'text': ""
},
{
'id': 198,
'title': '',
'text': ""
},
{
'id': 199,
'title': '',
'text': ""
},
{
'id': 200,
'title': '',
'text': ""
},
{
'id': 201,
'title': '',
'text': ""
},
{
'id': 202,
'title': '',
'text': ""
},
{
'id': 203,
'title': '',
'text': ""
},
{
'id': 204,
'title': '',
'text': ""
},
{
'id': 205,
'title': '',
'text': ""
},
{
'id': 206,
'title': '',
'text': ""
},
{
'id': 207,
'title': '',
'text': ""
},
{
'id': 208,
'title': '',
'text': ""
},
{
'id': 209,
'title': '',
'text': ""
},
{
'id': 210,
'title': '',
'text': ""
},
{
'id': 211,
'title': '',
'text': ""
},
{
'id': 212,
'title': '',
'text': ""
},
{
'id': 213,
'title': '',
'text': ""
},
{
'id': 214,
'title': '',
'text': ""
},
{
'id': 215,
'title': '',
'text': ""
},
{
'id': 216,
'title': '',
'text': ""
},
{
'id': 217,
'title': '',
'text': ""
},
{
'id': 218,
'title': '',
'text': ""
},
{
'id': 219,
'title': '',
'text': ""
},
{
'id': 220,
'title': '',
'text': ""
},
{
'id': 221,
'title': '',
'text': ""
},
{
'id': 222,
'title': '',
'text': ""
},
{
'id': 223,
'title': '',
'text': ""
},
{
'id': 224,
'title': '',
'text': ""
},
{
'id': 225,
'title': '',
'text': ""
},
{
'id': 226,
'title': '',
'text': ""
},
{
'id': 227,
'title': '',
'text': ""
},
{
'id': 228,
'title': '',
'text': ""
},
{
'id': 229,
'title': '',
'text': ""
},
{
'id': 230,
'title': '',
'text': ""
}
];

      var listRules_titles = {};

      for (var i=0;i<listRules.length;i++){
        listRules_titles[listRules[i].title] = listRules[i];
      }
      
    return {
        list: listRules,
        keys: listRules_titles,
        listRulesLength: listRules.length
    }
    

}]);





