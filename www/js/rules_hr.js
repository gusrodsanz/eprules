/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('rules_hr', [])


.service('Rules_hr', [function(){


var listRules = [
{
'id': 1,
'title': 'Članak 1. : Europski parlament',
'text': '1.   Europski je parlament skupština koja se izabire u skladu s Ugovorima, Aktom od 20. rujna 1976. o izboru zastupnika u Europski parlament neposrednim općim izborima te nacionalnim zakonodavstvom koje proizlazi iz Ugovora.\n\r\
\n\r\
2.   Osobe izabrane u Europski parlament nazivaju se:\n\r\
\n\r\
   "Членове на Европейския парламент" na bugarskom jeziku,\n\r\
\n\r\
   "Diputados al Parlamento Europeo" na španjolskom jeziku,\n\r\
\n\r\
   "Poslanci Evropského parlamentu" na češkom jeziku,\n\r\
\n\r\
   "Medlemmer af Europa-Parlamentet" na danskom jeziku,\n\r\
\n\r\
   "Mitglieder des Europäischen Parlaments" na njemačkom jeziku,\n\r\
\n\r\
   "Euroopa Parlamendi liikmed" na estonskom jeziku,\n\r\
\n\r\
   "Βoυλευτές τoυ Ευρωπαϊκoύ Κoιvoβoυλίoυ" na grčkom jeziku,\n\r\
\n\r\
   "Members of the European Parliament" na engleskom jeziku,\n\r\
\n\r\
   "Députés au Parlement européen" na francuskom jeziku,\n\r\
\n\r\
   "Feisirí de Pharlaimint na hEorpa" na irskom jeziku,\n\r\
\n\r\
   "Zastupnici u Europskom parlamentu" na hrvatskom jeziku,\n\r\
\n\r\
   "Deputati al Parlamento europeo" na talijanskom jeziku,\n\r\
\n\r\
   "Eiropas Parlamenta deputāti" na latvijskom jeziku,\n\r\
\n\r\
   "Europos Parlamento nariai" na litvanskom jeziku,\n\r\
\n\r\
   "Európai Parlamenti Képviselők" na mađarskom jeziku,\n\r\
\n\r\
   "Membri tal-Parlament Ewropew" na malteškom jeziku,\n\r\
\n\r\
   "Leden van het Europees Parlement" na nizozemskom jeziku,\n\r\
\n\r\
   "Posłowie do Parlamentu Europejskiego" na poljskom jeziku,\n\r\
\n\r\
   "Deputados ao Parlamento Europeu" na portugalskom jeziku,\n\r\
\n\r\
   "Deputaţi în Parlamentul European" na rumunjskom jeziku,\n\r\
\n\r\
   "Poslanci Európskeho parlamentu" na slovačkom jeziku,\n\r\
\n\r\
   "Poslanci Evropskega parlamenta" na slovenskom jeziku,\n\r\
\n\r\
   "Euroopan parlamentin jäsenet" na finskom jeziku,\n\r\
\n\r\
   "Ledamöter av Europaparlamentet" na švedskom jeziku.'
},
{
'id': 2,
'title': 'Članak 2. : Nezavisnost mandata',
'text': "U skladu s člankom 6. stavkom 1. Akta od 20. rujna 1976. te s člankom 2. stavkom 1. i člankom 3. stavkom 1. Statuta zastupnika u Europskom parlamentu, zastupnici svoj mandat obnašaju slobodno i nezavisno, ne obvezuju ih nikakve upute i nemaju obvezujući mandate."
},
{
'id': 3,
'title': 'Članak 3. : Provjera valjanosti mandata',
'text': "1.   Nakon općih izbora za Europski parlament predsjednik poziva nadležna tijela država članica da bez odgode obavijeste Parlament o imenima izabranih zastupnika kako bi mandati svih zastupnika u Parlamentu mogli započeti kada i prva sjednica nakon izbora.\n\r\
\n\r\
Predsjednik istovremeno upozorava ta nadležna tijela na odgovarajuće odredbe Akta od 20. rujna 1976. i poziva ih da poduzmu potrebne mjere kako bi se izbjegla  nespojivost s dužnosti zastupnika u Europskom parlamentu.\n\r\
\n\r\
2.   Zastupnici o čijem je izboru Parlament obaviješten, prije početka mandata u Parlamentu pisanim putem izjavljuju da ne obnašaju dužnost nespojivu s onom zastupnika u Europskom parlamentu u smislu članka 7. stavaka 1. i 2. Akta od 20. rujna 1976. Ta se izjava podnosi nakon općih izbora, ako je moguće, najkasnije šest dana prije prve sjednice Parlamenta nakon izbora. Dok se ne provjeri valjanost zastupničkog mandata ili donese odluka o mogućem sporu, zastupnici sudjeluju na sjednicama Parlamenta i njegovih tijela sa svim pravima koja im uz to pripadaju pod uvjetom da su potpisali gore navedenu pisanu izjavu.\n\r\
\n\r\
Ako se na osnovi činjenica koje je moguće provjeriti u javno dostupnim izvorima ustanovi da zastupnik obnaša dužnost nespojivu s onom zastupnika u Europskom parlamentu u smislu članka 7. stavaka 1. ili 2. Akta od 20. rujna 1976., Parlament na temelju informacija koje mu je dao predsjednik utvrđuje slobodno zastupničko mjesto.\n\r\
\n\r\
3.   Parlament na temelju izvješća nadležnog odbora bez odgode pristupa provjeri valjanosti mandata i odlučuje o valjanosti mandata svakog novoizabranog zastupnika, te o svim sporovima koji su mu upućeni u skladu s odredbama Akta od 20. rujna 1976. osim onih koji su, prema tom Aktu, obuhvaćeni isključivo nacionalnim odredbama na koje taj Akt upućuje.\n\r\
\n\r\
Izvješće odbora temelji se na službenoj obavijesti svake države članice o konačnim rezultatima izbora, u kojoj su navedena imena izabranih kandidata i mogućih zamjenika te njihov poredak u skladu s rezultatima glasovanja.\n\r\
\n\r\
Valjanost mandata zastupnika ne može se potvrditi ako zastupnik nije podnio pisane izjave propisane ovim člankom i Prilogom I. Poslovniku.\n\r\
\n\r\
4.   Parlament na temelju prijedloga nadležnog odbora bez odgode provjerava valjanosti mandata pojedinih zastupnika koji zamjenjuju zastupnike na odlasku i može u bilo kojem trenutku donijeti odluku o sporu koji se tiče valjanosti mandata zastupnika.\n\r\
\n\r\
5.    Ako imenovanje zastupnika nastupi kao posljedica odustanka kandidata koji se nalazi na istoj listi, nadležni odbor odigurava da je navedeni odustanak nastupio u skladu s duhom i slovom Akta od 20. rujna 1976. i članka 4. stavka 2. ovog Poslovnika.\n\r\
\n\r\
6.   Nadležni odbor osigurava da tijela država članica ili Unije bez odgode Parlamentu pošalju sve informacije koje mogu utjecati na ispunjavanje uvjeta za potvrdu valjanosti mandata zastupnika ili na ispunjavanje uvjeta ili poredak zamjenika, te da u slučaju imenovanja zastupnika naznače datum od kojega ono proizvodi učinke.\n\r\
\n\r\
Ako nadležna tijela država članica pokrenu postupak koji može dovesti do prestanka dužnosti zastupnika, predsjednik od njih traži da ga redovito obavještavaju o tijeku postupka te upućuje predmet nadležnom odboru. Na prijedlog nadležnog odbora Parlament može donijeti stajalište o navedenom predmetu."
},
{
'id': 4,
'title': 'Članak 4. : Trajanje mandata zastupnika',
'text': "1.   Mandat zastupnika započinje i završava u skladu s člancima 5. i 13. Akta od 20. rujna 1976.\n\r\
\n\r\
2.   Zastupnici koji podnesu ostavku obavještavaju predsjednika Parlamenta o svojoj ostavci i o danu od kojega ona proizvodi učinke, koji može biti najkasnije tri mjeseca nakon dana te obavijesti. Ova se obavijest sastavlja u obliku službene zabilješke u nazočnosti glavnog tajnika ili njegovog predstavnika, koji je potpisuje zajedno sa dotičnim zastupnikom te se zabilješka odmah podnosi nadležnom odboru, koji je uvrštava u dnevni red svojeg prvog sastanka nakon primitka zabilješke.\n\r\
\n\r\
Ako nadležni odbor smatra da je ostavka u skladu s Aktom od 20. rujna 1976., objavljuje se slobodno zastupničko mjesto od dana koji u službenoj zabilješci navede zastupnik u ostavci, a predsjednik o tome obavještava Parlament.\n\r\
\n\r\
Ako nadležni odbor smatra da ostavka nije u skladu s Aktom od 20. rujna 1976., predlaže Parlamentu da ne objavljuje slobodno zastupničko mjesto.\n\r\
\n\r\
3.   Ako prije sljedeće sjednice Parlamenta nije zakazan sastanak nadležnog odbora, izvjestitelj nadležnog odbora bez odgode proučava svaku ostavku koja je propisno dostavljena. Ako bi odgoda razmatranja obavijesti mogla imati štetne posljedice, izvjestitelj upućuje predmet predsjedniku odbora i u skladu sa stavkom 2 zahtijeva sljedeće:\n\r\
\n\r\
-   da se predsjednika Parlamenta u ime odbora obavijesti da se može objaviti slobodno zastupničko mjesto ili\n\r\
\n\r\
-   da se sazove izvanredna sjednica odbora radi razmatranja posebnih poteškoća koje je izvjestitelj utvrdio.\n\r\
\n\r\
4.   Ako nadležna tijela bilo država članica bilo Unije ili sam zastupnik obavijeste predsjednika o imenovanju ili izboru na dužnost nespojivu s onom zastupnika u Europskom parlamentu u smislu članka 7. stavka 1. ili 2. Akta od 20. rujna 1976., predsjednik o tome obavještava Parlament, koji objavljuje slobodno zastupničko mjesto od dana pojave nespojivosti.\n\r\
\n\r\
Ako nadležna tijela država članica obavijeste predsjednika o prestanku mandata zastupnika u Europskom parlamentu bilo zbog dodatne nespojivosti utvrđene zakonom te države članice u skladu s člankom 7. stavkom 3. Akta od 20. rujna 1976. bilo zbog povlačenja mandata tog zastupnika u skladu s člankom 13. stavkom 3. tog Akta, predsjednik obavještava Parlament da je mandat zastupnika prestao s danom navedenim u obavijesti nadležnog tijela države članice. Ako u obavijesti nije naveden datum, datum prestanka mandata je datum priopćenja od strane države članice.\n\r\
\n\r\
5.   Kada tijela država članica ili Unije obavijeste predsjednika o zadaći koju namjeravaju povjeriti zastupniku, predsjednik nadležnom odboru upućuje pitanje o spojivosti predložene zadaće s Aktom od 20. rujna 1976. te obavještava Parlament, zastupnika i dotična tijela o zaključcima nadležnog odbora.\n\r\
\n\r\
6.   Ako Parlament utvrdi slobodno zastupničko mjesto, predsjednik o tome obavještava državu članicu i poziva je da ga bez odgode popuni.\n\r\
\n\r\
7.   U slučajevima kada je prihvaćanje ili prestanak mandata utemeljen na sadržajnoj netočnosti ili manama volje, Parlament može imenovanje proglasiti nevažećim ili može odbiti utvrditi slobodno zastupničko mjesto."
},
{
'id': 5,
'title': 'Članak 5. : Povlastice i imuniteti',
'text': "1.   Zastupnici uživaju povlastice i imunitete utvrđene u Protokolu br. 7 o povlasticama i imunitetima Europske unije.\n\r\
\n\r\
2.   Izvršavajući svoje ovlasti u vezi s povlasticama i imunitetima Parlament djeluje tako da očuva svoj integritet kao demokratska zakonodavna skupština i osigurava nezavisnost zastupnika u obnašanju njihovih dužnosti. Parlamentarni imunitet nije osobna povlastica zastupnika već jamstvo neovisnosti Parlamenta kao cjeline i njegovih zastupnika.\n\r\
\n\r\
3.   Europska unija na zahtjev zastupnika i pod uvjetom da predsjednik Parlamenta da odobrenje predsjednika Parlamenta izdaje zastupnicima propusnicu Europske unije, koja im omogućuje slobodno kretanje u državama članicama i drugim zemljama koje je priznaju kao važeću putnu ispravu..\n\r\
\n\r\
4.   U svrhu obnašanja svojih zastupničkih dužnosti svaki zastupnik ima pravo aktivno sudjelovati u radu parlamentarnih odbora i izaslanstava u skladu s odredbama ovog Poslovnika.\n\r\
\n\r\
5.   Zastupnici imaju pravo uvida u sve dokumente Parlamenta ili nekog odbora osim u osobne dokumente i račune, koje smiju pregledati isključivo zastupnici na koje se oni odnose. Iznimke od ovog pravila postupanja s dokumentima za koje se može odbiti javni pristup u skladu s Uredbom (EZ) br. 1049/2001 Europskog parlamenta i Vijeća(1) utvrđene su u članku 210.a. \n\r\
\n\r\
Zastupniku se na temelju obrazložene odluke može uz odobrenje Predsjedništva osporiti pravo uvida u dokument Parlamenta ako nakon saslušanja dotičnog zastupnika Predsjedništvo zaključi da bi  spomenuti  uvid  uzrokovao  neprihvatljivu  štetu  institucionalnim  interesima  Parlamenta  ili javnim interesima te da dotični zastupnik traži uvid u dokument zbog privatnih i osobnih razloga. Zastupnik može protiv takve odluke podnijeti pisanu žalbu u roku od mjesec dana od primitka obavijesti. Da bi bila prihvatljiva, u pisanoj žalbi moraju se navesti razlozi. O žalbi odlučuje Parlament bez rasprave na sjednici koja slijedi nakon podnošenja žalbe.\n\r\
\n\r\
\n\r\
(1)	Uredba (EZ) br. 1049/2011 Europskog Parlamenta i Vijeća od 30. svibnja 2001. o javnom pristupu dokumentima Europskog parlamenta, Vijeća i Komisije (SL L 145, 31.5.2001., str. 43.).Insert footnote here..."
},
{
'id': 6,
'title': 'Članak 6. : Ukidanje imuniteta',
'text': "1.   Svi zahtjevi za ukidanje imuniteta ocjenjuju se u skladu s člancima 7., 8. i 9. Protokola br. 7. Europske unije o povlasticama i imunitetima i s načelima na koja se upućuje u članku 5. stavku 2. Poslovnika.\n\r\
\n\r\
2.   Ako su zastupnici pozvani u svojstvu svjedoka ili vještaka, nije potrebno zahtijevati ukidanje imuniteta, pod uvjetom:\n\r\
\n\r\
-   da neće morati svjedočiti u vrijeme koji im onemogućuje ili otežava izvršavanje parlamentarnih dužnosti, ili da će mogu dati izjavu u pisanom ili bilo kojem drugom obliku kojim im se ne otežava izvršavanje njihovih parlamentarnih dužnosti i\n\r\
\n\r\
-   da neće morati svjedočiti o povjerljivim informacijama koje su dobili pri obnašanju svoje zastupničke dužnosti za koje smatraju da ih ne trebaju otkriti."
},
{
'id': 7,
'title': 'Članak 7. : Zaštita povlastica i imuniteta',
'text': "1.   U slučajevima kad se tvrdi da je došlo ili će doći do povreda povlastica i imuniteta zastupnika ili bivšeg zastupnika od strane tijela države članice, može se u skladu s člankom 9. stavkom 1. podnijeti zahtjev da Parlament donese odluku o tome je li doista došlo ili bi moglo doći do povrede tih povlastica i imuniteta.\n\r\
\n\r\
2.   Posebice, takav zahtjev za zaštitu povlastica i imuniteta može se podnijeti ako se smatra da bi okolnosti predstavljale administrativna ili druga ograničenja slobodnog kretanja zastupnikâ pri putovanju  na  mjesto  zasjedanja  Parlamenta  ili  povratku  s  njega,  ili  administrativna ili druga ograničenja slobodnog  izražavanja mišljenja  ili  glasovanja  tijekom  obnašanja  njihovih dužnosti,  ili  da  bi  te okolnosti potpadale  pod  okvir  članka 9. Protokola br. 7 Europske unije o povlasticama i imunitetima.\n\r\
\n\r\
3.   Zahtjev za zaštitu povlastica i imuniteta zastupnika nije dopušten ako je u vezi s istim činjenicama već primljen zahtjev za ukidanje ili zaštitu imuniteta tog zastupnika, bez obzira na to je li taj raniji zahtjev doveo do odluke.\n\r\
\n\r\
4.   Zahtjev za zaštitu povlastica i imuniteta zastupnika ne razmatra se ako je u vezi s istim činjenicama već primljen zahtjev za ukidanje imuniteta tog zastupnika.\n\r\
\n\r\
5.   U  slučajevima  u  kojima  je  donesena  odluka  da  se  ne  zaštite  povlastice  i  imunitet zastupnika, zastupnik iznimno može uz podnošenje novih dokaza u skladu s člankom 9. stavkom 1. podnijeti zahtjev za ponovno razmatranje odluke. Zahtjev za ponovno razmatranje nije dopušten ako je postupak pokrenut protiv odluke na osnovi članka 263. Ugovora o funkcioniranju Europske unije ili ako predsjednik smatra da su novopodneseni dokazi nedovoljno utemeljeni da opravdaju ponovno razmatranje."
},
{
'id': 8,
'title': 'Članak 8. : Hitno djelovanje predsjednika u svrhu potvrde imuniteta',
'text': "1.   U slučajevima kad je zastupnik uhićen ili mu je ograničena sloboda kretanja, čime je počinjena očita povreda njegovih povlastica i imuniteta, predsjednik Parlamenta može nakon savjetovanja s predsjednikom i izvjestiteljem nadležnog odbora hitno pokrenuti inicijativu da se potvrde povlastice i imuniteti dotičnog zastupnika. O toj inicijativi predsjednik obavještava odbor i Parlament.\n\r\
\n\r\
2.   Ako se predsjednik koristi ovlastima koje su mu dodijeljene stavkom 1., odbor predsjednikovu inicijativu prima na znanje na svojoj sljedećoj sjednici. Ako odbor to smatra potrebnim, može pripremiti izvješće i podnijeti ga Parlamentu."
},
{
'id': 9,
'title': 'Članak 9. : Postupci u vezi s imunitetom',
'text': "1.   Svaki zahtjev za ukidanje imuniteta zastupnika koji nadležno tijelo države članice uputi predsjedniku, ili zahtjev za zaštitu povlastica i imuniteta koji zastupnik ili bivši zastupnik uputi predsjedniku, objavljuje se u Parlamentu i upućuje nadležnom odboru.\n\r\
\n\r\
2.   Uz suglasnost dotičnog zastupnika ili bivšeg zastupnika zahtjev može uputiti drugi zastupnik kojem se dozvoljava predstavljanje zastupnika ili bivšeg zastupnika u svim fazama postupka.\n\r\
\n\r\
Zastupnik koji predstavlja dotičnog zastupnika ili bivšeg zastupnika  nije uključen u odluke koje donosi odbor.\n\r\
\n\r\
3.   Odbor razmatra zahtjeve za ukidanje imuniteta ili zahtjeve za zaštitu povlastica i imuniteta i imuniteta bez odgode, ali uzimajući u obzir njihovu relativnu složenost.\n\r\
\n\r\
4.   Nadležni odbor podnosi prijedlog obrazložene odluke u kojem preporučuje prihvaćanje ili odbijanje zahtjeva za ukidanje imuniteta ili zahtjeva za zaštitu imuniteta i povlastica. Amandmani nisu dopušteni. Ako se prijedlog odbije, smatra se da je donesena suprotna odluka.\n\r\
\n\r\
5.   Odbor može tražiti da mu nadležno tijelo pruži informacije ili objašnjenja koje smatra neophodnim za stvaranje mišljenja o tome treba li imunitet oduzeti ili zaštititi.\n\r\
\n\r\
6.   Dotični zastupnik ima mogućnost da bude saslušan i može priložiti dokumente ili druge pisane dokaze koje smatra relevantnima.\n\r\
\n\r\
Dotični zastupnik neće biti prisutan za vrijeme rasprave o zahtjevu za ukidanje ili zaštitu svog imuniteta, osim na samom saslušanju.\n\r\
\n\r\
Predsjednik odbora poziva zastupnika na saslušanje i pritom navodi datum i vrijeme. Dotični zastupnik se može odreći prava da bude saslušan.\n\r\
\n\r\
Ako se dotični zastupnik ne odazove saslušanju na koje je pozvan, smatrat će se da se odrekao prava da bude saslušan, osim ako se nije ispričao zbog nemogućnosti saslušanja u predloženo vrijeme i pritom za to naveo razloge. Predsjednik odbora donosi odluku o tome može li se isprika prihvatiti u svjetlu danih razloga. Dotični zastupnik ne može uložiti žalbu na tu odluku.\n\r\
\n\r\
Ako predsjednik odbora odobri ispriku, poziva dotičnog zastupnika na saslušanje u nekom drugom terminu. Ako zastupnik ne postupi u skladu s drugim pozivom na saslušanje, postupak se nastavlja bez saslušanja zastupnika. Nije dopušteno podnošenje novih isprika ili novih zahtjeva za saslušanje.\n\r\
\n\r\
7.   Ako zahtjev za ukidanje ili zaštitu imuniteta sadrži više točaka, o svakoj točki može se donijeti odvojena odluka. U iznimnim slučajevima u izvješću odbora moguće je predložiti da se ukidanje ili zaštita imuniteta primijeni isključivo u postupku kaznenog progona i da do pravomoćnosti presude zastupnik zadržava imunitet od bilo kojeg oblika uhićenja ili zatvaranja te od bilo koje druge mjere koja bi mu onemogućila izvršavanje dužnosti koje proizlaze iz mandata.\n\r\
\n\r\
8.   Odbor može dati obrazloženo mišljenje o nadležnosti dotičnog tijela i o dopuštenosti zahtjeva, ali se ni pod kojim uvjetima ne može izjasniti o zastupnikovoj krivnji niti se izjasniti o tome opravdavaju li mišljenja ili postupci  zastupnika koji mu se pripisuju kazneni progon, čak ni u slučaju da odbor prilikom razmatranja zahtjeva stekne podrobna saznanja o činjenicama slučaja.\n\r\
\n\r\
9.   Prijedlog odluke odbora uvrštava se na dnevni red prve dnevne sjednice nakon dana njegova podnošenja. Na taj prijedlog nije moguće podnositi amandmane.\n\r\
\n\r\
Rasprava se ograničava na razmatranje razloga za prihvaćanje ili odbijanje prijedloga za ukidanje ili zadržavanje imuniteta, ili prijedloga za zaštitu povlastica ili imuniteta.\n\r\
\n\r\
Ne dovodeći u pitanje članak 164., zastupnik čije se povlastice ili imuniteti razmatraju ne može govoriti u raspravi.\n\r\
\n\r\
Prijedlog ili prijedlozi odluke u izvješću stavljaju se na  glasovanje se na prvom glasovanju nakon rasprave.\n\r\
\n\r\
Nakon što Parlament razmotri predmet, o svakom se prijedlogu u izvješću glasuje odvojeno. Ako se prijedlog odbije, smatra se da je donesena suprotna odluka.\n\r\
\n\r\
10.   Predsjednik odmah priopćava odluku Parlamenta dotičnom zastupniku i nadležnom tijelu dotične države članice te traži da ga obavještavaju o razvoju događaja u postupku i sudskim odlukama koje iz njega proizlaze. Kad predsjednik primi informaciju o tome, prenosi je Parlamentu na način koji smatra najprimjerenijim, po potrebi nakon što se savjetuje s nadležnim odborom.\n\r\
\n\r\
11.   Odbor s navedenim predmetima i zaprimljenim dokumentima postupa strogo povjerljivo. Zahtjeve koji se odnose na postupke povezane s imunitetom odbor uvijek razmatra na sjednici zatvorenoj za javnost.\n\r\
\n\r\
12.   Parlament ispituje samo zahtjeve za ukidanje imuniteta zastupnika koje su mu proslijedila pravosudna tijela ili stalna predstavništva država članica.\n\r\
\n\r\
13.   Odbor utvrđuje načela za primjenu ovog članka.\n\r\
\n\r\
14.   Svaki upit o opsegu povlastica i imuniteta zastupnika koji podnese nadležno tijelo razmatra se u skladu s gore navedenim odredbama."
},
{
'id': 10,
'title': 'Članak 10. : (Briše se.)',
'text': ""
},
{
'id': 11,
'title': 'Članak 11. : Financijski interesi zastupnika i pravila ponašanja',
'text': "1.   Pravila kojima se uređuje transparentnost financijskih interesa njegovih zastupnika Parlament utvrđuje u obliku Kodeksa ponašanja koji donosi većinom glasova svojih zastupnika i koji se prilaže ovom Poslovniku kao prilog(1).\n\r\
\n\r\
Ta pravila ne utječu ni na koji drugi način na obnašanje zastupničke dužnosti ili bilo koje s njim povezane političke ili druge aktivnosti niti ih ograničavaju.\n\r\
\n\r\
2.   Zastupnici bi trebali usvojiti sustavnu praksu sastajanja isključivo s predstavnicima interesnih skupina koji su službeno registrirani u Registru transparentnosti osnovanom Sporazumom Europskog parlamenta i Europske komisije o registru transparentnosti.(2)\n\r\
\n\r\
3.   Ponašanju zastupnika svojstveno je međusobno poštovanje. Ono se  temelji na vrijednostima i načelima utvrđenima u Ugovorima, a naročito u Povelji o temeljnim pravima i njime se poštuje dostojanstvo Parlamenta. Nadalje, ono ne dovodi u pitanje neometani rad Parlamenta, jamčenje sigurnosti i reda u prostorima Parlamenta niti funkcioniranje opreme Parlamenta.\n\r\
\n\r\
Zastupnici u parlamentarnim raspravama ne smiju se klevetnički, rasistički ili ksenofobno izražavati ili ponašati niti u tom kontekstu isticati natpise ili transparente.\n\r\
\n\r\
Zastupnici se pridržavaju pravila Parlamenta o postupanju s povjerljivim informacijama.\n\r\
\n\r\
Nepridržavanje navedenih normi i pravila može dovesti do primjene mjera u skladu s člancima 165., 166. i 167.\n\r\
\n\r\
4.   Primjena ovog članka ne utječe ni na koji drugi način na dinamičnost parlamentarnih rasprava niti umanjuje slobodu govora zastupnika.\n\r\
\n\r\
Temelji se na potpunom poštovanju ovlasti zastupnika utvrđenih primarnim pravom Unije i Statutom zastupnika.\n\r\
\n\r\
Temelji se na načelu transparentnosti tako da se osigura da su relevantne odredbe jasne zastupnicima koji se osobno obavještavaju o svojim pravima i obvezama.\n\r\
\n\r\
5.   Ako osoba koju je zaposlio zastupnik ili druga osoba kojoj je zastupnik omogućio pristup prostorima ili opremi Parlamenta prekrši pravila ponašanja utvrđena u stavku 3., dotičnom zastupniku mogu se, prema potrebi, odrediti sankcije utvrđene u članku 166.\n\r\
\n\r\
6.   Kvestori određuju najveći broj asistenata koje svaki zastupnik može registrirati.\n\r\
\n\r\
7.   Kodeks ponašanja te prava i povlastice bivših zastupnika utvrđuju se odlukom Predsjedništva. Nema razlike u postupanju s bivšim zastupnicima.\n\r\
\n\r\
\n\r\
(1)	 Vidi Prilog I.\n\r\
(2)	Sporazum od 16. travnja 2014. između Europskog parlamenta i Europske komisije o osnivanju registra transparentnosti za organizacije i samozaposlene osobe koje sudjeluju u oblikovanju i provedbi politike Europske unije (SL L 277, 19.9.2014., str. 11.)."
},
{
'id': 12,
'title': 'Članak 12. : Unutarnje istrage koje provodi Europski ured za borbu protiv prijevara (OLAF)',
'text': "Zajednička pravila utvrđena Međuinstitucijskim sporazumom od 25. svibnja 1999. o unutarnjim istragama Europskog ureda za borbu protiv prijevara (OLAF-a)(1) koja sadrže neophodne mjere za neometano provođenje tih istraga primjenjuju se unutar Parlamenta u skladu s Odlukom Parlamenta od 18. studenoga 1999.(2)\n\r\
\n\r\
\n\r\
(1)	SL L 136, 31.5.1999., str. 15.Insert footnote here...\n\r\
(2)	Odluka Parlamenta od 18. studenoga 1999. o uvjetima unutarnjih istraga koje se odnose na sprečavanje prijevare, korupcije i svih nezakonitih radnji koje štete interesima Zajednica.Insert footnote here..."
},
{
'id': 13,
'title': 'Članak 13. : Promatrači',
'text': "1.   Nakon potpisivanja ugovora o pristupanju države Europskoj uniji, predsjednik može, nakon pristanka Konferencije predsjednika, pozvati parlament države pristupnice da između svojih zastupnika imenuje onoliko promatrača koliko će zastupničkih mjesta u Europskom parlamentu nakon pristupanja pripadati toj državi članici.\n\r\
\n\r\
2.   Promatrači sudjeluju u radu Parlamenta prije stupanja na snagu Ugovora o pristupanju te imaju pravo govoriti u odborima i klubovima zastupnika. Oni nemaju pravo glasa niti kandidature na izborima za položaje u Parlamentu niti predstavljaju Parlament izvan njega. Njihovo sudjelovanje nema nikakav pravni učinak na rad Parlamenta.\n\r\
\n\r\
3.   Pri korištenju prostora Parlamenta i povratu putnih troškova i dnevnica nastalih tijekom obavljanja poslova promatrača, s njima se postupa jednako kao i sa zastupnicima."
},
{
'id': 14,
'title': 'Članak 14. : Privremeni predsjedatelj',
'text': "1.   Na dnevnoj sjednici predviđenoj člankom 146. stavkom 2. i na bilo kojoj drugoj dnevnoj sjednici koja se održava radi izbora predsjednika i Predsjedništva, odlazeći predsjednik, ili u njegovoj odsutnosti jedan od odlazećih potpredsjednika određen po redu prvenstva, ili u njihovoj odsutnosti zastupnik s najdužim stažem, preuzima predsjedanje do izbora novog predsjednika.\n\r\
\n\r\
2.   Za vrijeme predsjedanja privremenog predsjedatelja na temelju stavka 1. ne odvijaju se parlamentarne aktivnosti osim onih koje se tiču izbora predsjednika i provjere valjanosti mandata u skladu s člankom 3. stavkom 2. drugim podstavkom. Sva ostala pitanja koja se tiču provjere mandata pokrenuta tijekom njegova predsjedanja upućuju se nadležnom odboru."
},
{
'id': 15,
'title': 'Članak 15. : Kandidature i opće odredbe',
'text': "1.   Predsjednik, a zatim potpredsjednici i kvestori biraju se tajnim glasovanjem u skladu s člankom 180a.\n\r\
\n\r\
Kandidature se predlažu uz suglasnost kandidata i može ih predložiti isključivo klub zastupnika ili zastupnici koji dosežu barem niski prag. Nove kandidature mogu se predati prije svakog glasovanja.\n\r\
\n\r\
Ako broj kandidatura ne prelazi broj mjesta koje treba popuniti, kandidate se izabire aklamacijom osim ako zastupnici ili klub/klubovi zastupnika koji dosežu barem visoki prag zahtijevaju tajno glasovanje.\n\r\
\n\r\
Ako se u jednom glasovanju bira više od jednog obnašatelja dužnosti, glasački listić važeći je samo ako je dano više od polovine raspoloživih glasova.\n\r\
\n\r\
2.   Prilikom izbora predsjednika, potpredsjednika i kvestora treba voditi računa o tome da se osigura pravedna zastupljenost političkih stajališta te rodna i geografska ravnoteža."
},
{
'id': 16,
'title': 'Članak 16. : Izbor predsjednika – uvodni govor',
'text': "1.   Kandidature za izbor predsjednika predaju se zastupniku koji privremeno predsjeda na temelju članka 14. te ih on objavljuje u Parlamentu. Ako nakon tri kruga glasovanja nijedan kandidat ne dobije apsolutnu većinu danih glasova, u četvrtom krugu odstupajući od članka 15. stavka 1. sudjeluju samo dva zastupnika koja su ostvarila najveći broj glasova u trećem krugu. U slučaju neodlučenog rezultata glasovanja izabranim se proglašava stariji kandidat.\n\r\
\n\r\
2.   Čim se izabere predsjednik, zastupnik koji privremeno predsjeda na temelju članka 14. napušta mjesto predsjedavajućeg. Jedino izabrani predsjednik može održati uvodni govor."
},
{
'id': 17,
'title': 'Članak 17. : Izbor potpredsjednika',
'text': "1.   Potpredsjednici se zatim biraju u jednom krugu glasovanja . Zastupnici koji u prvom krugu dobiju apsolutnu većinu danih glasova, njih najviše četrnaest, proglašavaju se izabranima po redoslijedu ostvarenih glasova. Ako je broj izabranih kandidata manji od broja raspoloživih mjesta, pod istim se uvjetima održava drugi krug radi popunjavanja preostalih mjesta. Ako je potreban treći krug, za izbor na preostala mjesta dovoljna je relativna većina. U slučaju neodlučenog rezultata glasovanja izabranim se proglašavaju najstariji kandidati.\n\r\
\n\r\
2.   Sukladno odredbama članka 20. stavka 1. red prvenstva potpredsjednika određen je prema redoslijedu kojim su izabrani i, u slučaju neodlučenog rezultata, prema dobi.\n\r\
\n\r\
Ako su potpredsjednici izabrani aklamacijom, red prvenstva određuje se tajnim glasovanjem."
},
{
'id': 18,
'title': 'Članak 18. : Izbor kvestora',
'text': "Parlament bira pet kvestora istim postupkom kojim se koristi za izbor potpredsjednika."
},
{
'id': 19,
'title': 'Članak 19. : Trajanje mandata obnašatelja dužnosti u Parlamentu',
'text': "1.   Mandat predsjednika, potpredsjednika i kvestora traje dvije i pol godine.\n\r\
\n\r\
Ako zastupnik promijeni klub, do kraja dvoipolgodišnjeg mandata zadržava svoje mjesto u Predsjedništvu ili kao kvestor.\n\r\
\n\r\
2.   Ako se prije isteka tog mandata pojavi slobodno mjesto za jedan od navedenih položaja, zastupnik izabran na to mjesto obnaša dužnost samo u preostalom razdoblju mandata svog prethodnika."
},
{
'id': 20,
'title': 'Članak 20. : Slobodna mjesta',
'text': "1.   Ako je potrebno zamijeniti predsjednika, potpredsjednika ili kvestora, nasljednik se izabire u skladu s mjerodavnim pravilima za izbor na predmetno mjesto.\n\r\
\n\r\
Novoizabrani potpredsjednik zauzima mjesto svog prethodnika u redu prvenstva.\n\r\
\n\r\
2.   Ako se oslobodi dužnost predsjednika, do izbora novog predsjednika njegovu funkciju obnaša potpredsjednik prema redu prvenstva."
},
{
'id': 21,
'title': 'Članak 21. : Prijevremeni prestanak mandata',
'text': "Konferencija predsjednika može tropetinskom većinom danih glasova koja predstavlja najmanje tri kluba zastupnika predložiti Parlamentu da razriješi predsjednika, potpredsjednika, kvestora, predsjednika ili potpredsjednika odbora, predsjednika ili potpredsjednika međuparlamentarnog izaslanstva ili bilo kojeg drugog nositelja dužnosti izabranog u Parlamentu, ako smatra da je dotični zastupnik počinio ozbiljnu povredu dužnosti. Parlament o tom prijedlogu odlučuje dvotrećinskom većinom danih glasova koji predstavljaju većinu zastupnika u Parlamentu.\n\r\
\n\r\
Kada izvjestitelj prekrši odredbe Kodeksa ponašanja zastupnika u Europskom parlamentu u vezi financijskih interesa i sukoba interesa, odbor koji ga je izabrao može ga na inicijativu predsjednika i na prijedlog Konferencije predsjednika razriješiti dužnosti. Većine utvrđene u prvom stavku primjenjuju se na odgovarajući način u svakoj fazi postupka."
},
{
'id': 22,
'title': 'Članak 22. : Dužnosti predsjednika',
'text': "1.   Predsjednik upravlja svim aktivnostima Parlamenta i njegovih tijela u skladu s ovim Poslovnikom i ima sve ovlasti potrebne za vođenje parlamentarnih postupaka i osiguravanje njihovog pravilnog vođenja.\n\r\
\n\r\
2.   Dužnosti predsjednika su otvaranje, prekidanje i zaključivanje sjednice; odlučivanje o dopuštenosti amandmana i drugih tekstova koji se stavljaju na glasovanje te o dopuštenosti parlamentarnih pitanja; osiguravanje pridržavanja Poslovnika, održavanje reda, davanje riječi govornicima, zaključivanje rasprave, stavljanje prijedloga na glasovanje, objavljivanje rezultata glasovanja i upućivanje odborima obavijesti koje ih se tiču.\n\r\
\n\r\
3.   Predsjednik može govoriti u raspravi samo da je sažme ili vrati na temu. Ako želi sudjelovati u raspravi, predsjednik mora napustiti predsjedateljsko mjesto i smije se na njega vratiti tek po završetku rasprave.\n\r\
\n\r\
4.   Predsjednik predstavlja Parlament u međunarodnim odnosima, svečanim prigodama i administrativnim, pravnim i financijskim pitanjima te može navedene ovlasti delegirati.\n\r\
\n\r\
5.   Predsjednik je odgovoran za sigurnost i nepovredivost prostora Europskog parlamenta."
},
{
'id': 23,
'title': 'Članak 23. : Dužnosti potpredsjednika',
'text': "1.   Ako je predsjednik odsutan ili nije u mogućnosti obnašati svoje dužnosti, ili ako želi sudjelovati u raspravi u skladu s člankom 22. stavkom 3., zamjenjuje ga jedan od potpredsjednika u skladu s redom prvenstva.\n\r\
\n\r\
2.   Potpredsjednici također obnašaju dužnosti koje su im dodijeljene na temelju članka 25., članka 27. stavaka 3. i 5. i članka 71. stavka 3.\n\r\
\n\r\
3.   Predsjednik može potpredsjednicima delegirati bilo koje dužnosti kao što su predstavljanje Parlamenta na određenim svečanostima ili u određenim prilikama. Predsjednik posebno može odrediti potpredsjednika koji će preuzeti nadležnosti koje su dodijeljene predsjedniku u članku 129. i članku 130. stavku 2."
},
{
'id': 24,
'title': 'Članak 24. : Sastav Predsjedništva',
'text': "1.   Predsjedništvo se sastoji od predsjednika i 14 potpredsjednika Parlamenta.\n\r\
\n\r\
2.   Kvestori su članovi Predsjedništva sa savjetodavnom funkcijom.\n\r\
\n\r\
3.   Ako je rezultat glasovanja u Predsjedništvu izjednačen, predsjednik ima odlučujući glas."
},
{
'id': 25,
'title': 'Članak 25. : Dužnosti Predsjedništva',
'text': "1.   Predsjedništvo obavlja dužnosti koje su mu dodijeljene na temelju Poslovnika.\n\r\
\n\r\
2.   Predsjedništvo donosi financijske, organizacijske i administrativne odluke o pitanjima koja se tiču unutarnje organizacije Parlamenta, njegovog tajništva i tijela.\n\r\
\n\r\
3.   Predsjedništvo donosi financijske, organizacijske i administrativne odluke o pitanjima koja se tiču zastupnikâ na prijedlog glavnog tajnika ili kluba zastupnika.\n\r\
\n\r\
4.   Predsjedništvo donosi odluke o pitanjima vezanima uz odvijanje dnevnih sjednica.\n\r\
\n\r\
5.   Predsjedništvo donosi odredbe iz članka 35. koje se tiču nezavisnih zastupnika.\n\r\
\n\r\
6.   Predsjedništvo odlučuje o planu radnih mjesta Tajništva i utvrđuje propise koji se tiču administrativnog i financijskog položaja dužnosnika i ostalih službenika.\n\r\
\n\r\
7.   Predsjedništvo sastavlja prednacrt projekcije proračuna Parlamenta.\n\r\
\n\r\
8.   Predsjedništvo donosi smjernice za kvestore i može od njih zahtijevati da izvršavaju određene zadaće.\n\r\
\n\r\
9.   Predsjedništvo je tijelo nadležno za odobravanje sastanaka ili službenih putovanja odbora izvan uobičajenih mjesta rada i saslušanja te studijskih i informativnih putovanja izvjestitelja.\n\r\
\n\r\
Kad se takvi sastanci ili službena putovanja odobre, pitanje jezične organizacije određuje se na temelju Kodeksa o višejezičnosti, koji je donijelo Predsjedništvo. Isto se pravilo primjenjuje na izaslanstva.\n\r\
\n\r\
10.   Predsjedništvo imenuje glavnog tajnika u skladu s člankom 222.\n\r\
\n\r\
11.   Predsjedništvo utvrđuje provedbena pravila koja se odnose na propise za političke stranke i zaklade na europskoj razini i pravila o njihovom financiranju.\n\r\
\n\r\
12.   Predsjedništvo utvrđuje pravila o postupanju Parlamenta i njegovih tijela, obnašatelja dužnosti i drugih zastupnika s povjerljivim informacijama, uzimajući u obzir sve u vezi s tim sklopljene međuinstitucijske sporazume. Ta se pravila objavljuju u Službenom listu Europske unije.\n\r\
\n\r\
13.   Predsjednik i/ili Predsjedništvo mogu povjeriti jednom ili više članova Predsjedništva opće ili posebne zadaće koje su u nadležnosti predsjednika i/ili Predsjedništva. Istovremeno se utvrđuju načini i sredstva obavljanja tih zadaća.\n\r\
\n\r\
14.   Predsjedništvo imenuje dva potpredsjednika koji su zaduženi za odnose s nacionalnim parlamentima.\n\r\
\n\r\
15.   Predsjedništvo imenuje potpredsjednika koji je zadužen za provedbu strukturiranog dijaloga o važnim temama s europskim civilnim društvom.\n\r\
\n\r\
16.   Predsjedništvo je nadležno za primjenu Statuta zastupnika i donosi odluke o iznosima naknada na temelju godišnjeg proračuna."
},
{
'id': 26,
'title': 'Članak 26. : Sastav Konferencije predsjednika',
'text': "1.   Konferencija predsjednika sastoji se od predsjednika Parlamenta i predsjednika klubova zastupnika. Predsjednika kluba zastupnika može predstavljati član tog kluba.\n\r\
\n\r\
2.   Predsjednik Parlamenta, nakon što nezavisnim zastupnicima pruži priliku da izraze svoja stajališta, poziva jednog od njih da sudjeluje na sjednicama Konferencije predsjednika bez prava glasa.\n\r\
\n\r\
3.   Konferencija predsjednika nastoji postići konsenzus o predmetima koji joj se upućuju.\n\r\
\n\r\
Ako se konsenzus ne može postići, predmet se stavlja na glasovanje koje podliježe ponderiranju na temelju broja zastupnika u svakom klubu zastupnika."
},
{
'id': 27,
'title': 'Članak 27. : Dužnosti Konferencije predsjednika',
'text': "1.   Konferencija predsjednika obavlja dužnosti koje su joj dodijeljene Poslovnikom.\n\r\
\n\r\
2.   Konferencija predsjednika donosi odluke o organizaciji rada Parlamenta i pitanjima zakonodavnog planiranja.\n\r\
\n\r\
3.   Konferencija predsjednika je nadležno tijelo za pitanja koja se tiču odnosa Parlamenta s drugim institucijama i tijelima Europske unije te nacionalnim parlamentima država članica. Odluke o mandatu i sastavu izaslanstva Parlamenta pri savjetovanjima u Vijeću i drugim institucijama Europske unije u vezi s ključnim pitanjima o razvoju Europske unije (postupak sa šerpama) donose se na temelju relevantnih stajališta Parlamenta, uzimajući u obzir i raznovrsnost političkih stajališta zastupljenih u Parlamentu. Potpredsjednici koji su zaduženi za odnose Parlamenta s nacionalnim parlamentima redovito izvještavaju Konferenciju predsjednika o svojim aktivnostima u tom pogledu.\n\r\
\n\r\
4.   Konferencija predsjednika je nadležno tijelo za pitanja koja se tiču odnosa s državama koje nisu članice Europske unije te institucijama i organizacijama izvan Unije.\n\r\
\n\r\
5.   Konferencija predsjednika nadležna je za organiziranje strukturiranog savjetovanja s europskim civilnim društvom o važnim temama. To savjetovanje može uključivati održavanje javnih rasprava o temama od općeg europskog interesa u kojima mogu sudjelovati zainteresirani građani. Potpredsjednik nadležan za provedbu takvih savjetovanja redovito izvještava Konferenciju predsjednika o svojim aktivnostima.\n\r\
\n\r\
6.   Konferencija predsjednika sastavlja prijedlog dnevnog reda sjednica Parlamenta.\n\r\
\n\r\
7.   Konferencija predsjednika predlaže Parlamentu sastav i nadležnost odbora, istražnih odbora, zajedničkih parlamentarnih odbora i stalnih izaslanstava. Konferencija predsjednika nadležna je za odobravanje ad hoc izaslanstava.\n\r\
\n\r\
8.   Konferencija predsjednika odlučuje o tome kako se raspodjeljuju mjesta u vijećnici u skladu s člankom 36.\n\r\
\n\r\
9.   Konferencija predsjednika je nadležno tijelo za odobravanje sastavljanja izvješća o vlastitoj inicijativi.\n\r\
\n\r\
10.   Konferencija predsjednika podnosi prijedloge Predsjedništvu o administrativnim i proračunskim pitanjima koja se tiču klubova zastupnika."
},
{
'id': 28,
'title': 'Članak 28. : Dužnosti kvestora',
'text': "Kvestori su nadležni za administrativna i financijska pitanja koja se izravno odnose na zastupnike u skladu sa smjernicama koje utvrdi Predsjedništvo te za druge zadaće koje im se dodijele."
},
{
'id': 29,
'title': 'Članak 29. : Konferencija predsjednika odbora',
'text': "1.   Konferencija predsjednika odbora sastoji se od predsjednika svih stalnih i posebnih odbora. Konferencija izabire svog predsjednika.\n\r\
\n\r\
2.   U odsutnosti predsjednika sastankom Konferencije predsjeda najstariji nazočni član.\n\r\
\n\r\
3.   Konferencija predsjednika odbora može davati preporuke Konferenciji predsjednika o radu odbora i izradi prijedloga dnevnog reda sjednica.\n\r\
\n\r\
4.   Predsjedništvo i Konferencija predsjednika mogu Konferenciji predsjednika odbora povjeriti obavljanje posebnih zadataka."
},
{
'id': 30,
'title': 'Članak 30. : Konferencija predsjednika izaslanstava',
'text': "1.   Konferencija predsjednika izaslanstava sastoji se od predsjednika svih stalnih međuparlamentarnih izaslanstava. Konferencija izabire svog predsjednika.\n\r\
\n\r\
2.   U odsutnosti predsjednika sjednicom Konferencije predsjeda najstariji nazočni član.\n\r\
\n\r\
3.   Konferencija predsjednika izaslanstava može Konferenciji predsjednika davati preporuke u vezi s radom izaslanstava.\n\r\
\n\r\
4.   Predsjedništvo i Konferencija predsjednika mogu Konferenciji predsjednika izaslanstava povjeriti obavljanje posebnih zadataka.\n\r\
\n\r\
Članak 30.a : Nastavak obnašanja dužnosti tijekom održavanja izbora\n\r\
\n\r\
Kad se izabere novi Parlament, sva tijela i nositelji dužnosti Parlamenta u odlasku ostaju na dužnosti do prve dnevne sjednice novog Parlamenta."
},
{
'id': 31,
'title': 'Članak 31 : Javnost rada Predsjedništva i Konferencije predsjednika',
'text': "1.   Zapisnik sa sjednice Predsjedništva i Konferencije predsjednika prevodi se na službene jezike i dijeli zastupnicima te je dostupan javnosti, osim ako iz razloga povjerljivosti Predsjedništvo ili Konferencija predsjednika iznimno ne odluče drukčije u vezi s određenim točkama zapisnika, u skladu s člankom 4. stavcima od 1. do 4. Uredbe (EZ) br. 1049/2001.\n\r\
\n\r\
2.   Svaki zastupnik u Parlamentu može postavljati pitanja koja se tiču obavljanja dužnosti Predsjedništva, Konferencije predsjednika i kvestora. Takva pitanja podnose se predsjedniku u pisanom obliku, o njima se obavještavaju zastupnici te se zajedno s odgovorom objavljuju na internetskim stranicama Parlamenta u roku od 30 dana od njihova podnošenja."
},
{
'id': 32,
'title': 'Članak 32. : Osnivanje i raspuštanje klubova zastupnika',
'text': "1.   Zastupnici se mogu povezivati u klubove prema svojoj političkoj pripadnosti.\n\r\
\n\r\
Parlament u pravilu ne treba procjenjivati političku pripadnost članova klubova. Pri osnivanju kluba na temelju ovog članka dotični članovi automatski prihvaćaju da imaju političku pripadnost. Samo ako dotični članovi tu pripadnost poriču, potrebna je procjena Parlamenta o tome je li klub sastavljen u skladu s Poslovnikom.\n\r\
\n\r\
2.   Klub zastupnika sastoji se od izabranih zastupnika iz najmanje jedne četvrtine država članica. Za osnivanje kluba zastupnika potrebno je najmanje 25 zastupnika.\n\r\
\n\r\
3.   Ako sastav kluba zastupnika padne ispod jednog od zadanih pragova, predsjednik može, uz suglasnost Konferencije predsjednika, dopustiti takvom klubu da nastavi postojati do sljedeće konstituirajuće sjednice Parlamenta ako su zadovoljeni sljedeći uvjeti:\n\r\
\n\r\
-   zastupnici i dalje predstavljaju najmanje jednu petinu država članica;\n\r\
\n\r\
-   klub postoji duže od godinu dana.\n\r\
\n\r\
Predsjednik ne primjenjuje ovo izuzeće ako postoji dovoljno dokaza za sumnju da se ono zloupotrebljava.\n\r\
\n\r\
4.   Zastupnik može pripadati samo jednom klubu zastupnika.\n\r\
\n\r\
5.   Kad se osnuje klub zastupnika, predsjednika se o tome obavještava izjavom. U izjavi se navodi ime kluba te imena njegovih članova i članova predsjedništva kluba. Izjavu potpisuju svi članovi kluba.\n\r\
\n\r\
6.   Izjava se prilaže zapisniku sa sjednice tijekom koje je objavljeno osnivanje kluba zastupnika.\n\r\
\n\r\
7.   Predsjednik u Parlamentu najavljuje osnivanje klubova zastupnika. Takva najava ima retroaktivan pravni učinak od trenutka kada je klub u skladu s ovim člankom obavijestio predsjednika da je osnovan.\n\r\
\n\r\
Predsjednik također u Parlamentu najavljuje raspuštanje klubova zastupnika. Takva najava ima pravni učinak od dana nakon onoga kada  klub više ne ispunjava uvjete za postojanje."
},
{
'id': 33,
'title': 'Članak 33. : Aktivnosti i pravni položaj klubova zastupnika',
'text': "1.   Klubovi zastupnika obavljaju svoje dužnosti u okviru djelovanja Unije, uključujući zadaće koje su im dodijeljene na temelju Poslovnika. Na temelju plana radnih mjesta Glavnog tajništva na raspolaganju im je tajništvo Parlamenta, uz administrativnu podršku i odobrena sredstva predviđena za tu svrhu u proračunu Parlamenta.\n\r\
\n\r\
2.   Na početku svakog saziva Konferencija predsjednika poduzima korake kako bi se dogovorila oko postupaka kojima će odraziti političku raznovrsnost Parlamenta u odborima i izaslanstvima te tijelima koja odlučuju.\n\r\
\n\r\
3.   Uzimajući u obzir sve prijedloge Konferencije predsjednika, Predsjedništvo utvrđuje pravila koja se tiču pružanja, provedbe i nadzora navedene podrške i odobrenih sredstava iz stavka 1. te s tim povezane delegacije ovlasti izvršenja proračuna i posljedice svakog nepridržavanja tih pravila.\n\r\
\n\r\
4.   Ta pravila određuju administrativne i financijske posljedice u slučaju ukidanja kluba zastupnika."
},
{
'id': 34,
'title': 'Članak 34. : Međuklubovi',
'text': "1.   Pojedinačni zastupnici mogu osnivati međuklubove ili druge neslužbene skupine zastupnika radi neformalne razmjene mišljenja o određenim temama između različitih klubova zastupnika, uz uključivanje članova različitih parlamentarnih odbora te radi promicanja kontakta između zastupnika i civilnog društva.\n\r\
\n\r\
2.   Takve skupine moraju biti potpuno transparentne u svojim aktivnostima i ne smiju djelovati na način koji bi mogao dovesti do zabluda u vezi sa službenim djelovanjem Parlamenta ili njegovih tijela. Ako su ispunjeni uvjeti utvrđeni u pravilima o osnivanju takvih skupina koje je usvojilo Predsjedništvo, klubovi zastupnika im mogu olakšati rad pružanjem logističke podrške.\n\r\
\n\r\
3.   Međuklubovi su obvezni svake godine prijaviti svaku pomoć u novcu ili naravi (na primjer, pomoć u tajničkim poslovima) koja bi morala biti prijavljena u skladu s Prilogom I., da je osobno ponuđena zastupnicima.\n\r\
\n\r\
4.   Kvestori vode registar prijava iz stavka 3. Taj se registar objavljuje na internetskoj stranici Parlamenta. Kvestori donose detaljna pravila o tim prijavama i osiguravaju učinkovitu primjenu ovoga članka."
},
{
'id': 35,
'title': 'Članak 35. : Nezavisni zastupnici',
'text': "1.   Zastupnicima koji ne pripadaju klubu zastupnika na raspolaganju je tajništvo. Pojedinosti o takvom stavljanju na raspolaganje tajništva  utvrđuje Predsjedništvo na prijedlog glavnog tajnika.\n\r\
\n\r\
2.   Predsjedništvo određuje status i parlamentarna prava nezavisnih zastupnika.\n\r\
\n\r\
3.   Predsjedništvo utvrđuje pravila koja se tiču pružanja, provedbe i revizije odobrenih sredstava koja su u proračunu Parlamenta izdvojena za pokrivanje troškova tajništva i administrativne podrške nezavisnim zastupnicima."
},
{
'id': 36,
'title': 'Članak 36. : Raspodjela mjesta u vijećnici',
'text': "Konferencija predsjednika odlučuje o tome kako se klubovima zastupnika, nezavisnim zastupnicima i institucijama Unije dodjeljuju mjesta u vijećnici."
},
{
'id': 37,
'title': 'Članak 37. : Godišnje planiranje programa',
'text': "1.   Parlament surađuje s Komisijom i Vijećem radi utvrđivanja zakonodavnog planiranja Unije.\n\r\
\n\r\
Parlament i Komisija surađuju u pripremi programa rada Komisije – njezinog doprinosa izradi godišnjih i višegodišnjih programa Unije – u skladu s rasporedom i dogovorima između ove dvije institucije(1)\n\r\
\n\r\
2.   Nakon usvajanja programa rada Komisije, Parlament, Vijeće i Komisija u skladu sa stavkom 7. Međuinstitucijskog sporazuma od 13. travnja 2016. o boljoj izradi zakonodavstva(2) razmijenit će mišljenja i dogovoriti zajedničku izjavu o godišnjem međuinstitucijskom planiranju programa, u kojoj su utvrđeni širi ciljevi i prioriteti.\n\r\
\n\r\
Prije pregovora s Vijećem i Komisijom o zajedničkoj izjavi predsjednik razmjenjuje gledišta s Konferencijom predsjednika i Konferencijom predsjednika odbora u pogledu širih ciljeva i prioriteta Parlamenta.\n\r\
\n\r\
Prije potpisivanja zajedničke izjave predsjednik traži odobrenje Konferencije predsjednika.\n\r\
\n\r\
3.   Svaku rezoluciju koju je Parlament donio u vezi sa zakonodavnim planiranjem i prioritetima predsjednik šalje drugim institucijama koje sudjeluju u zakonodavnom postupku Unije te parlamentima država članica.\n\r\
\n\r\
4.   Ako Komisija namjerava povući prijedlog, nadležni odbor poziva nadležnog povjerenika na sastanak radi rasprave o toj namjeri. Predsjedništvo Vijeća također može biti pozvano na takav sastanak. Ako se nadležni odbor ne slaže s planiranim povlačenjem prijedloga, može zatražiti od Komisije da podnese izjavu Parlamentu. Primjenjuje se članak 123.\n\r\
\n\r\
\n\r\
(1)	Okvirni sporazum od 20. listopada 2010. o odnosima između Europskog parlamenta i Europske komisije (SL L 304, 20.11.2010., str. 47.).\n\r\
(2)	Međuinstitucijski sporazum između Europskog parlamenta, Vijeća Europske unije i Europske komisije o boljoj izradi zakonodavstva"
},
{
'id': 38,
'title': 'Članak 38. : Poštovanje temeljnih prava',
'text': "1.   Parlament u svim svojim aktivnostima u potpunosti poštuje prava, slobode i načela koji se priznaju u članku 6. Ugovora o Europskoj uniji te vrijednosti ugrađene u njegov članak 2.\n\r\
\n\r\
2.   Ako odbor nadležan za predmet, klub zastupnika ili zastupnici koji dosežu barem niski prag smatraju da prijedlog zakonodavnog akta ili njegovi dijelovi nisu u skladu s temeljnim pravima Europske unije, predmet se na njihov zahtjev upućuje odboru nadležnom za zaštitu temeljnih prava.\n\r\
\n\r\
3.   Taj se zahtjev podnosi u roku od četiri radna tjedna nakon što je upućivanje odboru nadležnom za predmet najavljeno u Parlamentu.\n\r\
\n\r\
4.   Mišljenje odbora nadležnog za zaštitu temeljnih prava prilaže se izvješću odbora nadležnog za dotični predmet."
},
{
'id': 39,
'title': 'Članak 39. : Provjera pravne osnove',
'text': "1.   Kada se prijedlog pravno obvezujućeg akta povjerava odboru nadležnom za dotični predmet, taj odbor najprije provjerava njegovu pravnu osnovu.\n\r\
\n\r\
2.   Ako taj odbor ospori valjanost ili primjerenost pravne osnove, što uključuje i provjeru usklađenosti s člankom 5. Ugovora o Europskoj uniji, on traži mišljenje odbora nadležnog za pravna pitanja.\n\r\
\n\r\
3.   Osim toga, odbor nadležan za pravna pitanja može također na vlastitu inicijativu razmatrati pitanja pravne osnove u bilo kojoj fazi zakonodavnog postupka. U takvim slučajevima propisno obavještava odbor nadležan za predmet.\n\r\
\n\r\
4.   Ako odbor nadležan za pravna pitanja odluči osporiti valjanost ili primjerenost pravne osnove, o svojim zaključcima obavještava Parlament, po potrebi, nakon razmjene gledišta s Vijećem i Komisijom u skladu s dogovorima na međuinstitucijskoj razini(1). Ne dovodeći u pitanje članak 63., Parlament o tome glasuje prije glasovanja o sadržaju prijedloga.\n\r\
\n\r\
5.   Ako odbor nadležan za predmet ili odbor nadležan za pravna pitanja nije prethodno osporavao valjanost ili primjerenost pravne osnove, podnošenje amandmana u Parlamentu radi promjene pravne osnove nije dopušteno.\n\r\
\n\r\
\n\r\
(1)	Međuinstitucionalni sporazum od 13. travnja 2016. o boljoj izradi zakonodavstva, stavak 25. (SL L 123, 12.5.2016., str. 1.)."
},
{
'id': 40,
'title': 'Članak 40. : Delegiranje zakonodavnih ovlasti i dodjela provedbenih ovlasti',
'text': "1.   Prilikom razmatranja prijedloga zakonodavnog akta kojim se delegiraju ovlasti Komisiji u skladu s člankom 290. Ugovora o funkcioniranju Europske unije, Parlament obraća posebnu pozornost na ciljeve, sadržaj, opseg i trajanje delegiranih ovlasti te na uvjete kojima podliježe.\n\r\
\n\r\
2.   Prilikom razmatranja prijedloga zakonodavnog akta kojim se dodjeljuju provedbene ovlasti u skladu s člankom 291. Ugovora o funkcioniranju Europske unije, Parlament obraća posebnu pozornost na činjenicu da Komisija pri izvršavanju provedbenih ovlasti ne smije mijenjati niti nadopunjavati zakonodavni akt, pa čak ni njegove elemente koji nisu ključni.\n\r\
\n\r\
3.   Odbor nadležan za predmet može u bilo kojem trenutku zatražiti mišljenje odbora nadležnog za tumačenje i primjenu prava Unije.\n\r\
\n\r\
4.   Odbor nadležan za tumačenje i primjenu prava Unije može također na vlastitu inicijativu razmatrati pitanja delegacije zakonodavnih ovlasti i dodjele provedbenih ovlasti. U takvim slučajevima propisno obavještava odbor nadležan za predmet."
},
{
'id': 41,
'title': 'Članak 41. : Provjera financijske usklađenosti',
'text': "1.   Ako prijedlog zakonski obvezujućeg akta ima financijske posljedice, Parlament utvrđuje jesu li predviđena dovoljna financijska sredstva.\n\r\
\n\r\
2.   Odbor nadležan  za predmet provjerava za svaki prijedlog pravno obvezujućeg akta financijsku usklađenost s uredbom o višegodišnjem financijskom okviru.\n\r\
\n\r\
3.   Ako odbor nadležan za predmet mijenja iznos financijskih sredstava za akt koji razmatra, o tome traži mišljenje odbora nadležnog za proračunska pitanja.\n\r\
\n\r\
4.   Osim toga, odbor nadležan za proračunska pitanja može također na vlastitu inicijativu razmatrati pitanja financijske usklađenosti prijedloga pravno obvezujućih akata. U takvim slučajevima propisno obavještava odbor nadležan za predmet.\n\r\
\n\r\
5.   Ako odbor nadležan za proračunska pitanja odluči osporiti financijsku usklađenost prijedloga, o svojim zaključcima obavještava Parlament prije nego što Parlament glasuje o prijedlogu."
},
{
'id': 42,
'title': 'Članak 42. : Provjera poštovanja načela supsidijarnosti i proporcionalnosti',
'text': "1.   Tijekom razmatranja prijedloga zakonodavnog akta Parlament obraća posebnu pozornost na to poštuje li prijedlog načela supsidijarnosti i proporcionalnosti.\n\r\
\n\r\
2.   Samo odbor nadležan za poštovanje načela supsidijarnosti može podnositi preporuke odboru nadležnom za predmet u vezi s prijedlogom zakonodavnog akta.\n\r\
\n\r\
3.   Osim u žurnim slučajevima navedenima u članku 4. Protokola br. 1 o ulozi nacionalnih parlamenata u Europskoj uniji, odbor nadležan za predmet ne održava konačno glasovanje prije isteka roka od osam tjedana utvrđenog u članku 6. Protokola br. 2 o primjeni načela supsidijarnosti i proporcionalnosti.\n\r\
\n\r\
4.   Ako nacionalni parlament predsjedniku uputi obrazloženo mišljenje u skladu s člankom 3. Protokola br. 1, ono se upućuje odboru nadležnom za dotični predmet i radi obavijesti šalje odboru nadležnom za poštovanje načela supsidijarnosti.\n\r\
\n\r\
5.   Ako obrazložena mišljenja o neusklađenosti prijedloga zakonodavnog akta s načelom supsidijarnosti predstavljaju najmanje jednu trećinu svih glasova dodijeljenih nacionalnim parlamentima u skladu s člankom 7. stavkom 1. drugim podstavkom Protokola br. 1 ili četvrtinu istih u slučaju prijedloga zakonodavnog akta podnesenog na temelju članka 76. Ugovora o funkcioniranju Europske unije, Parlament ne donosi odluku sve dok se autor prijedloga ne očituje o svojem daljnjem postupanju.\n\r\
\n\r\
6.   Ako u okviru redovnog zakonodavnog postupka obrazložena mišljenja o neusklađenosti prijedloga zakonodavnog akta s načelom supsidijarnosti predstavljaju najmanje običnu većinu glasova dodijeljenih nacionalnim parlamentima u skladu s člankom 7. stavkom 1. drugim podstavkom Protokola br. 1, nadležni odbor može, nakon što razmotri obrazložena mišljenja koja su podnijeli nacionalni parlamenti i Komisija te nakon što sasluša stajališta odbora nadležnog za poštovanje načela supsidijarnosti, predložiti Parlamentu da odbije prijedlog na temelju kršenja načela supsidijarnosti ili podnijeti Parlamentu bilo koju drugu preporuku koja može uključivati prijedloge za izmjene vezane uz poštovanje načela supsidijarnosti. Svakoj takvoj preporuci prilaže se mišljenje odbora nadležnog za poštovanje načela supsidijarnosti.\n\r\
\n\r\
Preporuka se podnosi Parlamentu na raspravu i glasovanje. Ako je preporuka da se prijedlog odbije prihvaćena većinom danih glasova, predsjednik proglašava postupak zaključenim. Ako Parlament ne odbije prijedlog, postupak se nastavlja, uzimajući u obzir sve preporuke koje je Parlament odobrio."
},
{
'id': 43,
'title': 'Članak 43. : Pristup dokumentima i davanje informacija Parlamentu',
'text': "1.   Tijekom cijelog zakonodavnog postupka Parlament i njegovi odbori zahtijevaju pristup svim dokumentima koji su vezani uz prijedloge zakonodavnih akata pod istim uvjetima kao Vijeće i njegove radne skupine.\n\r\
\n\r\
2.   Tijekom razmatranja prijedloga zakonodavnog akta nadležni odbor traži od Komisije i Vijeća da ga obavještavaju o napretku postupanja s prijedlogom u Vijeću i njegovim radnim skupinama, a posebno da ga obavještavaju o svim novim kompromisnim rješenjima koja bi bitno izmijenila izvorni prijedlog ili o namjeri autora prijedloga da ga povuče."
},
{
'id': 44,
'title': 'Članak 44. : Predstavljanje Parlamenta na sjednicama Vijeća',
'text': "Kad Vijeće pozove Parlament da sudjeluje na sjednici Vijeća, predsjednik Parlamenta traži da Parlament predstavlja predsjednik ili izvjestitelj odbora nadležnog za dotični predmet ili drugi zastupnik kojeg odredi  taj odbor."
},
{
'id': 45,
'title': 'Članak 45. : Pravo Parlamenta da podnosi prijedloge',
'text': "U slučajevima kada je Ugovorima Parlamentu dodijeljeno pravo inicijative, nadležni odbor može sastaviti izvješće o vlastitoj inicijativi u skladu s člankom 52.\n\r\
\n\r\
Izvješće sadržava:\n\r\
\n\r\
(a)   prijedlog rezolucije;\n\r\
\n\r\
(b)   nacrt prijedloga;\n\r\
\n\r\
(c)   obrazloženje koje, prema potrebi, uključuje financijski izvještaj.\n\r\
\n\r\
Ako je Parlamentu za donošenje akta potrebno odobrenje ili suglasnost Vijeća i mišljenje ili suglasnost Komisije, Parlament može, nakon glasovanja o predloženom aktu i na prijedlog izvjestitelja, odlučiti odgoditi glasovanje o prijedlogu rezolucije sve dok Vijeće ili Komisija ne iznesu svoje stajalište."
},
{
'id': 46,
'title': 'Članak 46. : Zahtjevi za podnošenje prijedloga upućeni Komisiji',
'text': "1.   U skladu s člankom 225. Ugovora o funkcioniranju Europske unije Parlament može zatražiti od Komisije da podnese odgovarajući prijedlog za donošenje novog akta ili izmjenu postojećeg akta. Parlament to čini donošenjem rezolucije na temelju izvješća o vlastitoj inicijativi koje je sastavio nadležni odbor u skladu s člankom 52. Rezolucija se donosi većinom glasova zastupnika u konačnom glasovanju. Parlament istovremeno može postaviti rok za podnošenje takvog prijedloga.\n\r\
\n\r\
2.   Svaki zastupnik može podnijeti prijedlog akta Unije na temelju prava inicijative koje je Parlamentu dodijeljeno člankom 225. Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
Takav prijedlog zajednički može podnijeti najviše 10 zastupnika. U prijedlogu se navodi pravna osnova na kojoj je izrađen i može biti popraćen obrazloženjem od najviše 150 riječi.\n\r\
\n\r\
Prijedlog se podnosi predsjedniku, koji provjerava jesu li ispunjeni pravni zahtjevi. On prijedlog može uputiti odboru nadležnom za takvu provjeru i tražiti mišljenje o primjerenosti pravne osnove. Ako predsjednik prijedlog proglasi dopuštenim, objavljuje ga na plenarnoj sjednici i upućuje odboru nadležnom .za predmet\n\r\
\n\r\
Prije takvog upućivanja odboru nadležnom za predmet, prijedlog se prevodi na one službene jezike za koje predsjednik odbora smatra da su potrebni za sažeto razmatranje.\n\r\
\n\r\
Odbor nadležan za predmet donosi odluku o daljnjem postupanju u roku od tri mjeseca nakon upućivanja te nakon što je autorima prijedloga dao priliku da se obrate odboru.\n\r\
\n\r\
U naslovu izvješća navode se autori prijedloga.\n\r\
\n\r\
3.   U rezoluciji Parlamenta navodi se odgovarajuća pravna osnova te joj se prilažu preporuke o sadržaju zahtijevanih prijedloga.\n\r\
\n\r\
4.   Ako prijedlog ima financijske posljedice, Parlament navodi način osiguravanja dostatnih financijskih sredstava.\n\r\
\n\r\
5.   Odbor nadležan za predmet nadzire napredak pripreme svakog predloženog pravnog akta Unije koji je sastavljen na temelju posebnog zahtjeva Parlamenta.\n\r\
\n\r\
6.   Konferencija predsjednika odbora redovito nadzire usklađenost Komisije sa stavkom 10. Međuinstitucijskog sporazuma o boljoj izradi zakonodavstva, pri čemu Komisija odgovara na takve zahtjeve u roku od tri mjeseca navodeći daljnja postupanja koja s njima u vezi planira provesti donošenjem posebne komunikacije. Konferencija predsjednika odbora redovito izvještava Konferenciju predsjednika o rezultatima tog nadzora."
},
{
'id': 47,
'title': 'Članak 47. : Razmatranje pravno obvezujućih akata',
'text': "1.   Predsjednik upućuje prijedloge pravno obvezujućih akata primljene od drugih institucija ili država članica na razmatranje nadležnom odboru.\n\r\
\n\r\
2.   U slučaju dvojbe predsjednik može, prije nego što u Parlamentu objavi upućivanje nadležnom odboru, podnijeti Konferenciji predsjednika pitanje u vezi s nadležnošću. Konferencija predsjednika donosi odluku na temelju preporuke Konferencije predsjednika odbora ili njezinog predsjednika u skladu s člankom 201.a stavkom 2.\n\r\
\n\r\
3.   Nadležni odbor može u svakom trenutku odlučiti imenovati izvjestitelja koji će pratiti pripremnu fazu prijedloga. Na to će obratiti posebnu pozornost ako je prijedlog uvršten u radni program rada Komisije.\n\r\
\n\r\
4.   U slučaju proturječja između odredbe Poslovnika koja se tiče drugog i trećeg čitanja i bilo koje druge odredbe Poslovnika, prednost ima odredba koja se tiče drugog i trećeg čitanja.\n\r\
\n\r\
Članak 47.a : Ubrzavanje zakonodavnih postupaka\n\r\
\n\r\
Nadležni odbor ili odbori mogu uz koordinaciju s Vijećem i Komisijom dogovoriti ubrzavanje zakonodavnih postupaka u pogledu određenih prijedloga, posebice odabranih među prijedlozima koji su definirani kao prioriteti u zajedničkoj izjavi o godišnjem međuinstitucijskom planiranju programa u skladu s člankom 37. stavkom 2."
},
{
'id': 48,
'title': 'Članak 48. : Zakonodavni postupci u vezi s inicijativama institucija koje nisu Komisija ili s inicijativama država članica',
'text': "1.   Prilikom rada na inicijativama institucija koje nisu Komisija ili inicijativama država članica, nadležni odbor može pozvati predstavnike institucija ili država članica koje su inicijativu pokrenule da predstave svoju inicijativu odboru. Predstavnike država članica koje su inicijativu pokrenule može pratiti Predsjedništvo Vijeća.\n\r\
\n\r\
2.   Prije nego što prijeđe na glasovanje nadležni odbor traži od Komisije odgovor priprema li ona mišljenje o inicijativi ili namjerava podnijeti alternativan prijedlog u kratkom razdoblju. Ako je odgovor koji dobije potvrdan, odbor ne prihvaća izvješće prije nego što zaprimi to mišljenje ili taj alternativni prijedlog.\n\r\
\n\r\
3.   U slučaju kad dva ili više prijedloga koji dolaze iz Komisije i/ili druge institucije i/ili država članica s istim zakonodavnim ciljem budu podnesena Parlamentu istovremeno ili u kratkom razdoblju, Parlament ih razmatra u jednom izvješću. Nadležni odbor u svojem izvješću navodi u pogledu kojeg teksta predlaže izmjene te upućuje na sve druge tekstove u zakonodavnoj rezoluciji."
},
{
'id': 49,
'title': 'Članak 49. : Zakonodavna izvješća',
'text': "1.   Predsjednik odbora kojem je upućen prijedlog pravno obvezujućeg akta predlaže odboru korištenje određenog postupka.\n\r\
\n\r\
2.   Nakon donošenja odluke o postupku koji se koristi te ako se ne primjenjuje pojednostavljeni postupak iz članka 50., odbor između svojih članova ili stalnih zamjenika imenuje izvjestitelja za prijedlog pravno obvezujućeg akta ako to prethodno nije učinio na temelju članka 47. stavka 3.\n\r\
\n\r\
3.   Izvješće odbora sadržava:\n\r\
\n\r\
(a)   ako postoje, amandmane na prijedlog uz koje su po potrebi priložena kratka obrazloženja za koja je nadležan autor i koja se ne stavljaju na glasovanje;\n\r\
\n\r\
(b)   nacrt zakonodavne rezolucije u skladu s člankom 59. stavkom 5.;\n\r\
\n\r\
(c)   prema potrebi, obrazloženje koje, ako je potrebno, uključuje financijski izvještaj u kojem se iskazuje razmjer financijskih posljedica izvješća, ima li ih, i njegova usklađenost s višegodišnjim financijskim okvirom.\n\r\
\n\r\
(d)   ako postoji, upućivanje na procjenu utjecaja koju je proveo Parlament."
},
{
'id': 50,
'title': 'Članak 50. : Pojednostavljeni postupak',
'text': "1.   Nakon prve rasprave o prijedlogu pravno obvezujućeg akta predsjednik odbora može predložiti da se akt odobri bez amandmana. Smatra se da je predloženi postupak odobren osim ako zastupnici ili klub/klubovi zastupnika koji dosežu barem srednji prag u odboru tomu ne prigovore. Predsjednik odbora ili, ako je imenovan, izvjestitelj podnosi Parlamentu izvješće kojim se prijedlog odobrava. Primjenjuje se članak 150. stavak 1., drugi podstavak, te stavci 2. i 4.\n\r\
\n\r\
2.   Predsjednik odbora isto tako može predložiti da on sam ili izvjestitelj sastave skup amandmana koji odražavaju raspravu u odboru. Ako zastupnici ili klub/klubovi zastupnika koji dosežu barem srednji prag u odboru tomu ne prigovore, smatra se da je predloženi postupak odobren i amandmani se šalju članovima odbora.\n\r\
\n\r\
Ako zastupnici ili klub/klubovi zastupnika koji dosežu barem srednji prag ne prigovore na amandmane u određenom roku, koji ne može biti kraći od 10 radnih dana od dana slanja amandmana, smatra se da je odbor prihvatio izvješće. U tom se slučaju nacrt zakonodavne rezolucije i amandmani podnose Parlamentu bez rasprave u skladu s člankom 150. stavkom 1. drugim podstavkom te člankom 150. stavcima 2. i 4.\n\r\
\n\r\
Ako zastupnici ili klub/klubovi zastupnika koji dosežu barem srednji prag prigovore amandmanima, oni se stavljaju na glasovanje na sljedećoj sjednici odbora.\n\r\
\n\r\
3.   Uz iznimku odredbi koje se odnose na podnošenje Parlamentu, ovaj članak primjenjuje se mutatis mutandis na mišljenja odbora u smislu članka 53."
},
{
'id': 51,
'title': 'Članak 51. : Nezakonodavna izvješća',
'text': "1.   Ako sastavlja nezakonodavno izvješće, odbor imenuje izvjestitelja između svojih članova ili stalnih zamjenika.\n\r\
\n\r\
2.   Izvješće odbora sadržava:\n\r\
\n\r\
(a)   prijedlog rezolucije;\n\r\
\n\r\
(b)   obrazloženje koje, ako je potrebno, uključuje financijski izvještaj u kojem se iskazuje razmjer financijskih posljedica izvješća, ima li ih, i njegova usklađenost s višegodišnjim financijskim okvirom;\n\r\
\n\r\
(c)   tekstove mogućih prijedloga rezolucija koje se uključuju na temelju članka 133. stavka 7."
},
{
'id': 52,
'title': 'Članak 52. : Izvješća o vlastitoj inicijativi',
'text': "1.   Odbor koji namjerava sastaviti nezakonodavno izvješće ili izvješće u skladu s člankom 45. ili 46. o pitanju iz svoje nadležnosti koje nije bilo upućeno, može to učiniti samo uz odobrenje Konferencije predsjednika.\n\r\
\n\r\
Konferencija predsjednika odlučuje o zahtjevima za odobrenje sastavljanja izvješća u skladu s prvim podstavkom na temelju provedbenih odredbi koje sama utvrđuje.\n\r\
\n\r\
2.   Ako Konferencija predsjednika odluči uskratiti takvo odobrenje, navodi razlog za to.\n\r\
\n\r\
Kada je predmet izvješća u okviru prava inicijative Parlamenta iz članka 45., Konferencija predsjednika može odlučiti uskratiti odobrenje samo ako nisu uvjeti ispunjeni utvrđeni Ugovorima.\n\r\
\n\r\
3.   U slučajevima iz članaka 45. i 46. Konferencija predsjednika donosi odluku u roku od dva mjeseca.\n\r\
\n\r\
4.   Prijedlozi rezolucija podneseni Parlamentu razmatraju se prema postupku kratkog predstavljanja navedenom u članku 151. Amandmane na takve prijedloge rezolucija i zahtjeve za glasovanje po dijelovima ili odvojeno glasovanje dopušteno je razmatrati na plenarnoj sjednici samo ako ih je podnio ili izvjestitelj radi uzimanja u obzir novih informacija ili najmanje jedna desetina zastupnika. Klubovi zastupnika mogu podnositi alternativne prijedloge rezolucija u skladu s člankom 170. stavkom 3. Članak 180. primjenjuje se na odborov prijedlog rezolucije i amandmane na isti. Članak 180. također se primjenjuje na jedinstveno glasovanje o alternativnim prijedlozima rezolucija.\n\r\
\n\r\
5.   Stavak 4. ne primjenjuje se ako predmet izvješća ispunjava uvjete za ključnu raspravu na plenarnoj sjednici, ako je izvješće sastavljeno u skladu s pravom inicijative iz članka 45. ili 46. ili ako je izvješće odobreno kao strateško izvješće.(1).\n\r\
\n\r\
\n\r\
(1)	Vidi relevantnu odluku Konferencije predsjednika.\n\r\
\n\r\
Članak 52.a : Izrada izvješća\n\r\
\n\r\
1.   Izvjestitelj je odgovoran za pripremu izvješća odbora i za njegovo predstavljanje Parlamentu u ime tog odbora.\n\r\
\n\r\
2.   Za obrazloženje je nadležan izvjestitelj i o njemu se ne glasuje. Ono, međutim, mora biti suglasno s tekstom usvojenog prijedloga rezolucije i svim amandmanima koje odbor predlaže. U protivnom, predsjednik odbora može izbrisati obrazloženje.\n\r\
\n\r\
3.   U izvješću se navodi rezultat glasovanja o izvješću u cijelosti i u skladu s člankom 208. stavkom 3. navodi se kako je svaki član glasovao.\n\r\
\n\r\
4.   Mišljenja manjine mogu biti iznesena prilikom glasovanja o tekstu u cijelosti, na zahtjev svojih autora mogu biti predmet pisane izjave ne dulje od 200 riječi, koja se prilaže obrazloženju.\n\r\
\n\r\
Predsjednik odbora rješava sve sporove koji se mogu pojaviti kao posljedica primjene ovog stavka.\n\r\
\n\r\
5.   Na prijedlog svojeg predsjednika, odbor može odrediti rok u kojem izvjestitelj mora podnijeti nacrt izvješća. Moguće je produljiti ovaj rok ili imenovati novog izvjestitelja.\n\r\
\n\r\
6.   Nakon isteka roka odbor može naložiti predsjedniku odbora da zatraži uvrštavanje predmeta koji mu je upućen u dnevni red jedne od sljedećih sjednica Parlamenta. Rasprave i glasovanja potom se mogu voditi na temelju usmenog izvješća dotičnog odbora."
},
{
'id': 53,
'title': 'Članak 53. : Mišljenja odbora',
'text': "1.   Ako se odbor kojemu je predmet najprije upućen želi upoznati sa stajalištem drugog odbora ili ako drugi odbor želi iznijeti svoja stajališta odboru kojemu je predmet najprije upućen, ti odbori mogu u skladu s člankom 201. stavkom 2. zatražiti od predsjednika Parlamenta da se jedan odbor imenuje nadležnim odborom, a drugi odborom koji daje mišljenje.\n\r\
\n\r\
Odbor koji daje mišljenje može kao izvjestitelja za mišljenje imenovati jednog od svojih članova ili stalnih zamjenika ili stajališta odbora može poslati njegov predsjednik u obliku pisma.\n\r\
\n\r\
2.   Ako se odnosi na prijedlog pravno obvezujućeg akta, mišljenje se sastoji od amandmana na tekst koji se upućuju odboru i uz koje se po potrebi prilažu kratka obrazloženja. Za ta obrazloženja odgovoran je njihov autor i o njima se ne glasuje. Ako je potrebno, odbor koji daje mišljenje može podnijeti kratko pisano obrazloženje za mišljenje u cijelosti. Za to kratko pisano obrazloženje odgovoran je izvjestitelj za mišljenje.\n\r\
\n\r\
Ako se ne odnosi na prijedlog pravno obvezujućeg akta, mišljenje se sastoji od preporuka za dijelove prijedloga rezolucije nadležnog odbora.\n\r\
\n\r\
Nadležni odbor ove amandmane i prijedloge stavlja na glasovanje.\n\r\
\n\r\
U mišljenjima se razmatraju isključivo ona pitanja koja su u nadležnosti odbora koji daje mišljenje.\n\r\
\n\r\
3.   Nadležni odbor određuje rok u kojem odbor čije se mišljenje traži mora dostaviti svoje mišljenje da bi ga nadležni odbor mogao uzeti u obzir. Nadležni odbor odmah priopćava svaku promjenu u najavljenom rasporedu odboru/odborima koji daju mišljenje. Nadležni odbor ne donosi konačne zaključke prije nego što taj rok istekne.\n\r\
\n\r\
4.   Odbor koji daje mišljenje isto tako može odlučiti predstaviti svoje stajalište u obliku amandmana koji se nakon usvajanja podnose izravno u nadležnom odboru. Te amandmane u ime odbora podnosi predsjednik ili izvjestitelj.\n\r\
\n\r\
5.   Odbor koji daje mišljenje podnosi amandmane iz stavka 4. unutar roka za podnošenje amandmana koji je utvrdio nadležni odbor.\n\r\
\n\r\
6.   Nadležni odbor svojem izvješću prilaže sva mišljenja i amandmane koje je usvojio odbor koji daje mišljenje.\n\r\
\n\r\
7.   Odbori koji daju mišljenje u smislu ovoga članka ne mogu podnositi amandmane Parlamentu na razmatranje.\n\r\
\n\r\
8.   Predsjednik i izvjestitelj odbora koji daje mišljenje pozivaju se da u savjetodavnom svojstvu sudjeluju na sjednicama nadležnog odbora ako se one bave pitanjima od zajedničkog interesa."
},
{
'id': 54,
'title': 'Članak 54. : Postupak u pridruženom odboru',
'text': "1.   Ako se u skladu s člankom 201.a Konferenciji predsjednika uputi pitanje o nadležnosti, a Konferencija predsjednika na temelju Priloga V. smatra da je predmet gotovo podjednako u nadležnosti dvaju ili više odbora ili su pak različiti dijelovi predmeta u nadležnosti dvaju ili više različitih odbora, primjenjuje se članak 53. sa sljedećim dodatnim odredbama:\n\r\
\n\r\
-   odbori zajednički dogovaraju raspored;\n\r\
\n\r\
-   izvjestitelji se međusobno obavještavaju i nastoje postići dogovor o tekstovima koje predlažu svojim odborima te o svojem stajalištu prema amandmanima;\n\r\
\n\r\
-   predsjednici odbora i izvjestitelji obvezni su poštovati načelo dobre i iskrene suradnje i zajednički određuju dijelove teksta koji su u njihovoj isključivoj ili podijeljenoj nadležnosti te se dogovaraju o konkretnom načinu suradnje. U slučaju da ne postignu dogovor o razgraničenju nadležnosti, predmet se na zahtjev jednog od odbora podnosi Konferenciji predsjednika; Konferencija predsjednika može odlučiti o pitanju nadležnosti odbora ili o primjeni postupka zajedničkih odbora na temelju članka 55.; odluku donosi u skladu s postupkom i u roku utvrđenom u članku 201.a;\n\r\
\n\r\
-   nadležni odbor bez glasovanja prihvaća amandmane pridruženog odbora ako se oni tiču predmeta koji su u isključivoj nadležnosti pridruženih odbora. Ako nadležni odbor ne poštuje isključivu nadležnost pridruženog odbora, pridruženi odbor može podnijeti amandmane izravno na plenarnoj sjednici; ako nadležni odbor ne usvoji amandmane pridruženog odbora o predmetima koji su u podijeljenoj nadležnosti nadležnog i pridruženog odbora, pridruženi odbor može podnijeti te amandmane izravno na plenarnoj sjednici;\n\r\
\n\r\
-   u slučaju kad se u vezi s prijedlogom odvija postupak mirenja, u izaslanstvo Parlamenta uključeni su izvjestitelji svakog pridruženog odbora.\n\r\
\n\r\
Odluka Konferencije predsjednika o primjeni postupka s pridruženim odborima primjenjuje se na sve faze dotičnog postupka.\n\r\
\n\r\
Prava svojstvena statusu ''nadležnog odbora'' izvršava vodeći odbor. Pri izvršavanju tih prava vodeći odbor mora uzimati u obzir ovlasti pridruženog odbora. Vodeći odbor mora posebno poštovati obvezu pridržavanja načela iskrene suradnje u vezi s rasporedom te poštovati pravo pridruženog odbora da odredi amandmane iz njegove isključive nadležnosti koji se podnose na plenarnoj sjednici.\n\r\
\n\r\
2.   Postupak utvrđen ovim člankom ne primjenjuje se na preporuke koje nadležni odbor usvaja u skladu s člankom 99."
},
{
'id': 55,
'title': 'Članak 55. : Postupak u zajedničkom odboru',
'text': "1.   Kada u skladu s člankom 201.a primi pitanje koje se tiče nadležnosti, Konferencija predsjednika može odlučiti da se primjenjuje postupak sa zajedničkim sjednicama odbora i zajedničkim glasovanjem, pod uvjetom da:\n\r\
\n\r\
-   prema Prilogu V. pitanje je neodvojivo u nadležnosti nekoliko odbora; i\n\r\
\n\r\
-   smatra kako se radi o pitanju od velike važnosti.\n\r\
\n\r\
2.   U tom slučaju dotični izvjestitelji sastavljaju jedinstveni nacrt izvješća koje uključeni odbori razmatraju i o kojemu glasuju na zajedničkim sjednicama koje se održavaju pod zajedničkim predsjedanjem predsjednika tih odbora.\n\r\
\n\r\
U svim dijelovima postupka uključeni odbori mogu izvršavati prava koja proizlaze iz statusa nadležnog odbora samo kada nastupaju zajednički. Takvi odbori mogu osnivati radne skupine radi pripremanja zajedničkih sjednica i glasovanja.\n\r\
\n\r\
3.   U drugom čitanju redovnog zakonodavnog postupka, stajalište Vijeća razmatra se na zajedničkoj sjednici uključenih odbora, koja se, ako njihovi predsjednici ne postignu dogovor, održava u srijedu prvog tjedna u kojem je predviđeno održavanje sjednica parlamentarnih tijela nakon što Vijeće Parlamentu dostavi svoje stajalište. Ako se ne postigne dogovor o održavanju dodatne sjednice, takvu sjednicu saziva predsjednik Konferencije predsjednika odbora. O preporuci za drugo čitanje glasuje se na zajedničkoj sjednici na temelju zajedničkog teksta koji izrađuju izvjestitelji uključenih odbora, ili u nedostatku zajedničkog teksta, na temelju amandmana predloženih u uključenim odborima.\n\r\
\n\r\
Predsjednici i izvjestitelji dotičnih odbora su tijekom trećeg čitanja redovnog zakonodavnog postupka po službenoj dužnosti članovi izaslanstva u Odboru za mirenje."
},
{
'id': 56,
'title': 'Članak 56. : (Briše se.)',
'text': ""
},
{
'id': 57,
'title': 'Članak 57. : (Briše se.)',
'text': ""
},
{
'id': 58,
'title': 'Članak 58. : (Briše se.)',
'text': ""
},
{
'id': 59,
'title': 'Članak 59. : Glasovanje u Parlamentu – prvo čitanje',
'text': "1.   Parlament može odobriti, izmijeniti ili odbiti nacrt zakonodavnog akta.\n\r\
\n\r\
2.   Parlament prvo glasuje o svim prijedlozima za trenutačno odbacivanje nacrta zakonodavnog akta koje je u pisanom obliku podnio nadležni odbor, klub zastupnika ili zastupnici koji dosežu barem niski prag.\n\r\
\n\r\
U slučaju prihvaćanja prijedloga za odbijanje, predsjednik traži da institucija iz koje prijedlog potječe povuče nacrt zakonodavnog akta.\n\r\
\n\r\
Ako institucija iz koje prijedlog potječe to učini, predsjednik postupak proglašava zaključenim.\n\r\
\n\r\
Ako institucija iz koje prijedlog potječe ne povuče nacrt zakonodavnog akta, predsjednik objavljuje da je prvo čitanje u Parlamentu zaključeno, osim ako na prijedlog predsjednika ili izvjestitelja nadležnog odbora ili kluba zastupnika ili zastupnika koji dosežu barem niski prag Parlament ne odluči vratiti predmet nadležnom odboru na ponovno razmatranje.\n\r\
\n\r\
Ako se taj prijedlog za odbijanje ne prihvati, Parlament zatim postupa u skladu sa stavcima od 3., 4. i 5.\n\r\
\n\r\
3.   Pri glasovanju se daje prioritet privremenim sporazumima koje je podnio nadležni odbor na temelju članka 69.f stavka 4. i o njima se glasuje jedinstvenim glasovanjem, osim ako Parlament na zahtjev kluba zastupnika ili zastupnika koji dosežu barem niski prag ne odluči umjesto toga prijeći na glasovanje o amandmanima u skladu sa stavkom 4. U tom slučaju Parlament također odlučuje hoće li se odmah glasovati o amandmanima. Ako to nije slučaj, Parlament određuje novi rok za amandmane i glasovanje se održava na nekoj od sljedećih dnevnih sjednica.\n\r\
\n\r\
U slučaju prihvaćanja privremenog sporazuma jedinstvenim glasovanjem, predsjednik objavljuje da je prvo čitanje u Parlamentu zaključeno.\n\r\
\n\r\
Ako sporazum ne uspije osigurati većinu glasova u jedinstvenom glasovanju, predsjednik određuje novi rok za amandmane na nacrt zakonodavnog akta. O tim se amandmanima zatim glasuje na nekojod sljedećih dnevnih sjednica kako bi Parlament zaključio svoje prvo čitanje.\n\r\
\n\r\
4.   Osim u slučajevima kada se prihvati prijedlog odbijanja u skladu sa stavkom 2. ili privremeni sporazum u skladu sa stavkom 3., svi amandmani na nacrt zakonodavnog akta stavljaju se na glasovanje, uključujući, ako je primjenjivo, pojedinačne dijelove privremenog sporazuma ako su podneseni zahtjevi za glasovanje po dijelovima ili odvojeno glasovanje ili suprotni amandmani.\n\r\
\n\r\
Prije glasovanja o amandmanima u Parlamentu predsjednik može pozvati Komisiju da iznese svoje stajalište te pozvati Vijeće da iznese primjedbe.\n\r\
\n\r\
Nakon glasovanja o tim amandmanima Parlament glasuje o nacrtu zakonodavnog akta u cijelosti, bilo da je izmijenjen ili nije.\n\r\
\n\r\
Usvoji li se nacrt zakonodavnog akta u cijelosti, bilo da je izmijenjen ili nije, predsjednik objavljuje da je prvo čitanje zaključeno, osim ako Parlament na prijedlog predsjednika  nadležnog odbora ili izvjestitelja nadležnog odbora ili kluba zastupnika ili zastupnika koji dosežu barem niski prag ne odluči vratiti predmet nadležnom odboru na međuinstitucijske pregovore u skladu s člancima 59.a i 69.f.\n\r\
\n\r\
Ako cijeli nacrt zakonodavnog akta, izmijenjen ili ne, ne dobije većinu danih glasova, predsjednik objavljuje da je prvo čitanje zaključeno, osim ako Parlament na prijedlog predsjednika nadležnog odbora ili izvjestitelja nadležnog odbora ili kluba zastupnika ili zastupnika koji dosežu barem niski prag ne odluči vratiti predmet nadležnom odboru na ponovno razmatranje.\n\r\
\n\r\
5.   Nakon glasovanja iz stavaka 2., 3. i 4. te glasovanja koja su uslijedila nakon toga o amandmanima na nacrt zakonodavne rezolucije u vezi s postupovnim zahtjevima, ako ih je bilo, smatra se da je zakonodavna rezolucija donesena. Zakonodavna rezolucija izmjenjuje se, ako je potrebno, u skladu s člankom 193. stavkom 2. kako bi odražavala ishod glasovanja iz stavaka 2., 3. i 4.\n\r\
\n\r\
Tekst zakonodavne rezolucije i stajališta Parlamenta predsjednik prosljeđuje Vijeću i Komisiji te, ako nacrt zakonodavnog akta potječe od njih, skupini država članica, Sudu Europske unije ili Europskoj središnjoj banci.\n\r\
\n\r\
\n\r\
Članak 59.a : Vraćanje nadležnom odboru\n\r\
\n\r\
Ako se predmet vrati nadležnom odboru na ponovno razmatranjeu skladu s člankom 59. ili na međuinstitucijske pregovore u skladu s člankom 69.f, nadležni odbor usmeno ili pisanim putem izvještava Parlament u razdoblju od četiri mjeseca. Konferencija predsjednika može produljiti to razdoblje.\n\r\
\n\r\
Nakon vraćanja predmeta odboru vodeći odbor mora, kao što je utvrđeno člankom 54., prije donošenja odluke o primjeni određenog postupka dopustiti pridruženom odboru da izabere amandmane koji su u njegovoj isključivoj nadležnosti, a posebno da izabere koji će se amandmani ponovno podnijeti na plenarnoj sjednici.\n\r\
\n\r\
Nijedna odredba Poslovnika ne sprečava Parlament da nakon izvješća nadležnog odbora kojem je predmet vraćen odluči po potrebi održati završnu raspravu."
},
{
'id': 60,
'title': 'Članak 60. : (Briše se.)',
'text': ""
},
{
'id': 61,
'title': 'Članak 61. : (Briše se.)',
'text': ""
},
{
'id': 62,
'title': 'Članak 62. : (Briše se.)',
'text': ""
},
{
'id': 63,
'title': 'Članak 63. : Ponovno upućivanje Parlamentu',
'text': "1.   Na zahtjev nadležnog odbora predsjednik traži od Komisije da prijedlog ponovno uputi Parlamentu ako:\n\r\
\n\r\
-   Komisija zamijeni, bitno izmijeni ili namjerava bitno izmijeniti svoj prvotni prijedlog nakon što je Parlament donio svoje stajalište, osim u slučaju kad se to čini radi uzimanja u obzir stajališta Parlamenta;\n\r\
\n\r\
-   priroda problema o kojem je riječ u prijedlogu bitno se promijenila zbog proteka vremena ili izmijenjenih okolnosti; ili\n\r\
\n\r\
-   nakon usvajanja stajališta održali su se novi izbori za Parlament i Konferencija predsjednika to smatra poželjnim.\n\r\
\n\r\
2.   Ako se predviđa promjena pravne osnove prijedloga, prema kojoj se redovni zakonodavni postupak više ne bi primjenjivao na taj prijedlog, Parlament, Vijeće i Komisija u skladu sa stavkom 25. Međuinstitucijskog sporazuma o boljoj izradi zakonodavstva razmjenjuju stajališta o tome preko svojih predsjednika ili njihovih predstavnika.\n\r\
\n\r\
3.   Nakon razmjene stajališta iz stavka 2. predsjednik na zahtjev nadležnog odbora traži od Vijeća da nacrt pravno obvezujućeg akta ponovno uputi Parlamentu ako Komisija ili Vijeće namjeravaju promijeniti pravnu osnovu iz stajališta Parlamenta u prvom čitanju tako da se redovni zakonodavni postupak više ne bi primjenjivao.\n\r\
\n\r\
\n\r\
Članak 63.a : Sporazum u prvom čitanju\n\r\
\n\r\
Ako u skladu s člankom 294. stavkom 4. Ugovora o funkcioniranju Europske unije Vijeće obavijesti Parlament da je odobrilo stajalište Parlamenta, predsjednik nakon finalizacije u skladu s člankom 193. objavljuje u Parlamentu da je zakonodavni akt prihvaćen u verziji koja odgovara stajalištu Parlamenta."
},
{
'id': 64,
'title': 'Članak 64. : Dostavljanje stajališta Vijeća',
'text': "1.   Dostavljanje stajališta Vijeća u skladu s člankom 294. Ugovora o funkcioniranju Europske unije odvija se u trenutku kad ga u Parlamentu objavi predsjednik. Predsjednik objavljuje stajalište nakon što je zaprimio dokumente koji sadržavaju stajalište, sve izjave uvedene u zapisnik Vijeća prilikom usvajanja stajališta, razloge na temelju kojih je Vijeće usvojilo to stajalište, te stajalište Komisije, propisno prevedene na sve službene jezike Europske unije. Predsjednik objavljuje stajalište tijekom prve sjednice nakon zaprimanja navedenih dokumenata.\n\r\
\n\r\
Prije objave predsjednik ustanovljuje, nakon savjetovanja s predsjednikom nadležnog odbora, izvjestiteljem ili obojicom, da je zaprimljeni tekst doista stajalište Vijeća u prvom čitanju te da se ne primjenjuju okolnosti opisane u članku 63. U suprotnom, predsjednik zajedno s nadležnim odborom i po mogućnosti u dogovoru s Vijećem traži odgovarajuće rješenje.\n\r\
\n\r\
2.   Smatra se da je stajalište Vijeća automatski upućeno nadležnom odboru u prvom čitanju na dan njegova priopćavanja Parlamentu.\n\r\
\n\r\
3.   Popis navedenih dostava objavljuje se u zapisniku sa sjednice zajedno s nazivima nadležnih odbora."
},
{
'id': 65,
'title': 'Članak 65. : Produljenje rokova',
'text': "1.   Na zahtjev predsjednika nadležnog odbora, predsjednik produljuje rokove za drugo čitanje u skladu s člankom 294. stavkom 14. Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
2.   Predsjednik obavještava Parlament o svakom produljenju rokova na temelju članka 294. stavka 14. Ugovora o funkcioniranju Europske unije, neovisno je li do takvih promjena došlo na inicijativu Parlamenta ili Vijeća."
},
{
'id': 66,
'title': 'Članak 66. : Postupak u nadležnom odboru',
'text': "1.   Stajalište Vijeća uvrštava se kao prioritetna točka dnevnog reda prvog sljedećeg sastanka nadležnog odbora nakon datuma njegove dostave. Vijeće može biti pozvano da predstavi svoje stajalište.\n\r\
\n\r\
2.   Ako nadležni odbor ne odluči drukčije, izvjestitelj u drugom čitanju isti je kao onaj u prvom čitanju.\n\r\
\n\r\
3.   Odredbe članka 69. stavaka 2. i 3. o dopuštenosti amandmana na stajalište Vijeća primjenjuju se na postupke u nadležnom odboru. Isključivo članovi ili stalni zamjenici u tom odboru imaju pravo podnositi prijedloge za odbijanje i amandmane. Odbor odlučuje većinom glasova.\n\r\
\n\r\
4.   Nadležni odbor podnosi preporuku za drugo čitanje u kojoj predlaže odobrenje, izmjenu ili odbijanje stajališta Vijeća. Preporuka uključuje kratko obrazloženje predložene odluke.\n\r\
\n\r\
5.   Članci 49., 50., 53. i 188. ne primjenjuju se tijekom drugog čitanja."
},
{
'id': 67,
'title': 'Članak 67. : Podnošenje Parlamentu',
'text': "Stajalište Vijeća i, ako je dostupna, preporuka nadležnog odbora za drugo čitanje automatski se uvrštavaju u prijedlog dnevnog reda one sjednice u kojoj srijeda dolazi prije dana isteka razdoblja od tri mjeseca te je tom danu najbliža, ili prije isteka razdoblja od četiri mjeseca ako je rok produljen u skladu s člankom 65., osim ako je predmet prethodno razmatran na ranijoj sjednici.\n\r\
\n\r\
\n\r\
Članak 67.a : Glasovanje u Parlamentu – drugo čitanje\n\r\
\n\r\
1.   Parlament prvo glasuje o svim prijedlozima za trenutačno odbijanje stajališta Vijeća koje je u pisanom obliku podnio nadležni odbor, klub zastupnika ili zastupnici koji dosežu barem niski prag. Za prihvaćanje takvog prijedloga za odbijanje potrebna je većina glasova zastupnika u Parlamentu.\n\r\
\n\r\
U slučaju prihvaćanja prijedloga za odbijanje stajalište Vijeća je odbijeno, a predsjednik u Parlamentu objavljuje da je zakonodavni postupak zaključen.\n\r\
\n\r\
U slučaju neprihvaćanja tog prijedloga za odbijanje, Parlament zatim postupa u skladu sa stavcima od 2. do 5.\n\r\
\n\r\
2.   Pri glasovanju se daje prioritet privremenom sporazumu koje je podnio nadležni odbor u skladu s člankom 69.f stavkom 4. i o njemu se glasuje jedinstvenim glasovanjem, osim ako Parlament na zahtjev kluba zastupnika ili zastupnika koji dosežu barem niski prag ne odluči odmah prijeći na glasovanje o amandmanima u skladu sa stavkom 3.\n\r\
\n\r\
Ako jedinstvenim glasovanjem privremeni sporazum dobije glasove većine zastupnika u Parlamentu, predsjednik u Parlamentu objavljuje da je drugo čitanje Parlamenta zaključeno.\n\r\
\n\r\
Ako jedinstvenim glasovanjem privremeni sporazum ne dobije glasove većine zastupnika u Parlamentu, Parlament zatim postupa u skladu sa stavcima 3., 4. i 5.\n\r\
\n\r\
3.   Osim ako je prijedlog za odbijanje prihvaćen u skladu sa stavkom 1. ili ako je privremeni sporazum usvojen u skladu sa stavkom 2., provodi se glasovanje o svim izmjenama stajališta Vijeća, uključujući one sadržane u privremenom sporazumu koji je podnio nadležni odbor u skladu s člankom 69.f stavkom 4. Izmjene stajališta Vijeća usvajaju se samo ako dobiju apsolutnu većinu glasova zastupnika u Parlamentu.\n\r\
\n\r\
Prije glasovanja o amandmanima predsjednik može pozvati Komisiju da iznese svoje stajalište te pozvati Vijeće da iznese primjedbe.\n\r\
\n\r\
4.   Neovisno o glasovanju Parlamenta protiv prvotnog prijedloga za odbijanje stajališta Vijeća na osnovi stavka 1., Parlament može na prijedlog predsjednika ili izvjestitelja nadležnog odbora ili kluba zastupnika ili zastupnika koji dosežu barem niski prag razmotriti daljnji prijedlog za odbijanje nakon glasovanja o izmjenama iz stavaka 2. ili 3. Za prihvaćanje takvog prijedloga, potrebna je većina glasova zastupnika u Parlamentu.\n\r\
\n\r\
U slučaju odbijanja stajališta Vijeća, predsjednik u Parlamentu objavljuje da je zakonodavni postupak zaključen.\n\r\
\n\r\
5.   Nakon glasovanja iz stavaka od 1. do 4. te svih glasovanja koja su uslijedila nakon toga o izmjenama nacrta zakonodavne rezolucije u vezi s postupovnim zahtjevima predsjednik objavljuje da je drugo čitanje Parlamenta zaključeno i smatra se da je zakonodavna rezolucija donesena. Zakonodavna se rezolucija izmjenjuje ako je to potrebno u skladu s člankom 193. stavkom 2. kako bi odražavala ishod glasovanja iz stavaka od 1. do 4. ili primjenu članka 69.a.\n\r\
\n\r\
Tekst zakonodavne rezolucije i stajališta Parlamenta, ako postoji, predsjednik prosljeđuje Vijeću i Komisiji.\n\r\
\n\r\
Ako nije podnesen prijedlog za odbijanje ili izmjenu stajališta Vijeća, smatra ga se odobrenim."
},
{
'id': 68,
'title': 'Članak 68. : (Briše se.)',
'text': ""
},
{
'id': 69,
'title': 'Članak 69. : Dopuštenost amandmana na stajalište Vijeća',
'text': "1.   Nadležni odbor, klub zastupnika ili zastupnici koji dosežu barem niski prag mogu podnositi amandmane na stajalište Vijeća na razmatranje u Parlamentu.\n\r\
\n\r\
2.   Amandman na stajalište Vijeća dopušten je samo ako je u skladu s člancima 169. i 170. te ako se njime nastoji:\n\r\
\n\r\
(a)   potpuno ili djelomično ponovno zauzeti stajalište koje je Parlament usvojio u prvom čitanju; ili\n\r\
\n\r\
(b)   postići kompromis između Vijeća i Parlamenta; ili\n\r\
\n\r\
(c)   izmijeniti dio teksta stajališta Vijeća koji nije bio uključen u prijedlog podnesen u prvom čitanju ili se od njega sadržajno razlikuje; ili\n\r\
\n\r\
(d)   uzeti u obzir novu činjenicu ili pravnu situaciju koja se pojavila nakon usvajanja stajališta Parlamenta u prvom čitanju.\n\r\
\n\r\
Odluka predsjednika o tome da amandman proglasi dopuštenim ili nedopuštenim ne može se dovoditi u pitanje.\n\r\
\n\r\
3.   Ako su se nakon prvog čitanja održali izbori, ali nije došlo do pozivanja na članak 63., predsjednik može ukinuti ograničenja o dopuštenosti utvrđena u stavku 2.\n\r\
\n\r\
Članak 69.a : Sporazum u drugom čitanju\n\r\
\n\r\
Ako se u roku određenom za podnošenje amandmana i glasovanje o amandmanima i prijedlozima za odbijanje ne podnese prijedlog za odbijanje stajališta Vijeća niti amandman na to stajalište na temelju članaka 67.a i 69., predsjednik u Parlamentu objavljuje da je predloženi akt donesen.\n\r\
\n\r\
Članak 69.b : Opće odredbe\n\r\
\n\r\
U pregovore s drugim institucijama radi postizanja dogovora tijekom zakonodavnog postupka može se stupiti samo nakon donošenja odluke u skladu s člancima  od 69.c do 69.e ili nakon odluke Parlamenta o vraćanju u međuinstitucijske pregovore. Takvi pregovori se vode uzimajući u obzir Kodeks ponašanja koji je utvrdila Konferencija predsjednika(1).\n\r\
\n\r\
\n\r\
(1)	Kodeks ponašanja za pregovore u okviru redovnih zakonodavnih postupaka.\n\r\
\n\r\
Članak 69.c : Pregovori prije prvog čitanja u Parlamentu\n\r\
\n\r\
1.   Ako je odbor usvojio zakonodavno izvješće u skladu s člankom 49. može, većinom glasova svojih članova, odlučiti o stupanju u pregovore na temelju tog izvješća .\n\r\
\n\r\
2.   Odluke o stupanju u pregovore objavljuju se na počeku sjednice koja se održava nakon usvajanja u odboru. Do kraja dana koji slijedi nakon dana objavljivanja odluke u Parlamentu zastupnici ili klub/klubovi zastupnika koji dosežu barem srednji prag mogu u pisanom obliku zatražiti da se glasuje o odluci odbora o stupanju u pregovore. Parlament o tim zahtjevima glasuje tijekom iste sjednice.\n\r\
\n\r\
Ako zahtjev ne bude zaprimljen do roka utvrđenogu prvom podstavku, predsjednik o tome obavještava Parlament. Ako je zahtjev podnesen, predsjednik može, neposredno prije glasovanja, dati riječ jednom govorniku koji podržava odluku odbora o stupanju u pregovore i jednome koji je protiv te odluke. Svaki govornik može dati izjavu u trajanju od najdulje dvije minute.\n\r\
\n\r\
3.   Ako Parlament odbije odluku odbora o stupanju u pregovore, nacrt zakonodavnog akta i izvješće nadležnog odbora uvrštavaju se na dnevni red sljedeće sjednice, a predsjednik utvrđuje rok za amandmane. Primjenjuje se članak 59. stavak 4.\n\r\
\n\r\
4.   Pregovori mogu započeti bilo kada nakon isteka roka iz stavka 2. prvog podstavka i ako nije podnesen zahtjev da se o odluci o stupanju u pregovore glasuje u Parlamentu. Ako je zahtjev podnesen, pregovori mogu započeti bilo kada nakon što se u Parlamentu odobri odluka odbora o stupanju u pregovore.\n\r\
\n\r\
Članak 69.d : Pregovori prije prvog čitanja u Vijeću\n\r\
\n\r\
Ako je Parlament usvojio stajalište u prvom čitanju, to stajalište predstavlja mandat za pregovore s drugim institucijama. Nadležni odbor većinom glasova svojih članova može odlučiti stupiti u pregovore u bilo kojem trenutku nakon toga. Te se odluke objavljuju u Parlamentu tijekom sjednice nakon glasovanja u odboru i unose se u zapisnik.\n\r\
\n\r\
Članak 69.e : Pregovori prije drugog čitanja u Parlamentu\n\r\
\n\r\
Ako je stajalište Vijeća u prvom čitanju upućeno nadležnom odboru, stajalište Parlamenta u prvom čitanju u skladu s odredbama članka 69. predstavlja mandat za sve pregovore s drugim institucijama. Nadležni odbor može odlučiti stupiti u pregovore u bilo kojem trenutku nakon toga.\n\r\
\n\r\
Ako stajalište Vijeća u prvom čitanju sadrži elemente koji nisu obuhvaćeni nacrtom zakonodavnog akta ili stajalištem Parlamenta u prvom čitanju, odbor može donijeti smjernice za pregovarački tim, među ostalim u obliku amandmana na stajalište Vijeća.\n\r\
\n\r\
Članak 69.f : Vođenje pregovora\n\r\
\n\r\
1.   Pregovarački tim Parlamenta vodi izvjestitelj, a njime predsjeda predsjednik nadležnog odbora ili potpredsjednik kojeg odredi predsjednik. Sastoji se barem od izvjestitelja u sjeni iz svih klubova zastupnika koji žele sudjelovati.\n\r\
\n\r\
2.   Svi dokumenti o kojima će se raspravljati na sastanku s Vijećem i Komisijom („trijalozi”) dostavljaju se pregovaračkom timu najmanje 48 sati odnosno u hitnim slučajevima najmanje 24 sata prije tog trijaloga.\n\r\
\n\r\
3.   Nakon svakog trijaloga predsjednik pregovaračkog tima i izvjestitelj na sljedećoj sjednici nadležnog odbora iznose povratno izvješće u ime pregovaračkog tima.\n\r\
\n\r\
Ako sjednicu odbora nije moguće pravovremeno sazvati, predsjednik pregovaračkog tima i izvjestitelj iznose povratno izvješće u ime pregovaračkog tima na sastanku koordinatora odbora.\n\r\
\n\r\
4.   Ako se pregovorima postigne privremeni sporazum, obavještava se nadležni odbor bez odgode. Dokumenti koji sadrže rezultate zaključnog trijaloga stavljaju se na raspolaganje  nadležnom odboru i objavljuju se. Privremeni sporazum podnosi se nadležnom odboru, koji jedinstvenim glasovanjem donosi odluku o odobravanju većinom danih glasova. Ako bude odobren, podnosi se na razmatranje Parlamentu uz jasno navođenje svih promjena nacrta zakonodavnog akta.\n\r\
\n\r\
5.   U slučaju neslaganja uključenih odbora iz članaka 54. i 55., detaljna pravila otvaranja i vođenja pregovora određuje predsjednik Konferencije predsjednika odbora u skladu s načelima utvrđenim tim člancima.\n\r\
\n\r\
Članak 69.g : Produljenje rokova\n\r\
\n\r\
1.   Na zahtjev izaslanstva Parlamenta u Odboru za mirenje predsjednik produljuje rokove za treće čitanje u skladu s člankom 294. stavkom 14. Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
2.   Predsjednik obavještava Parlament o svakom produljenju rokova na temelju članka 294. stavka 14. Ugovora o funkcioniranju Europske unije, neovisno je li do takvog produljenja došlo na inicijativu Parlamenta ili Vijeća."
},
{
'id': 70,
'title': 'Članak 70. : Sazivanje Odbora za mirenje',
'text': "Ako Vijeće priopći Parlamentu da ne može prihvatiti sve amandmane Parlamenta na stajalište Vijeća, predsjednik Parlamenta s Vijećem dogovara vrijeme i mjesto prve sjednice Odbora za mirenje. Rok od šest tjedana ili produljeni rok od osam tjedana predviđeni člankom 294. stavkom 10. Ugovora o funkcioniranju Europske unije počinju teći od dana kada se Odbor prvi put sastane."
},
{
'id': 71,
'title': 'Članak 71. : Izaslanstvo u Odboru za mirenje',
'text': "1.   Izaslanstvo Parlamenta u Odboru za mirenje sastoji se od istog broja članova kao izaslanstvo Vijeća.\n\r\
\n\r\
2.   Politički sastav izaslanstva odgovara sastavu Parlamenta po klubovima zastupnika. Konferencija predsjednika određuje točan broj zastupnika iz svakog kluba koji će sudjelovati u radu izaslanstva Parlamenta.\n\r\
\n\r\
3.   Klubovi zastupnika imenuju članove izaslanstva za svaki postupak mirenja, po mogućnosti između članova nadležnih odbora, s izuzetkom tri člana koji se imenuju stalnim članovima sljedećih izaslanstava za razdoblje od 12 mjeseci. Klubovi zastupnika imenuju tri stalna predstavnika između potpredsjednika Parlamenta, koji moraju predstavljati najmanje dva različita kluba. Predsjednik i izvjestitelj nadležnog odbora u drugom čitanju te izvjestitelji svih pridruženih odbora članovi su izaslanstva u svakome slučaju.\n\r\
\n\r\
4.   Klubovi zastupnika koji imaju predstavnike u izaslanstvu imenuju i njihove zamjenike.\n\r\
\n\r\
5.   Klubovi zastupnika koji nemaju predstavnike u izaslanstvu mogu poslati po jednog predstavnika na svaki interni pripremni sastanak izaslanstva. Ako u izaslanstvu nema ni jednog nezavisnog zastupnika, jedan nezavisni zastupnik može prisustvovati svim internim pripremnim sastancima izaslanstva.\n\r\
\n\r\
6.   Izaslanstvo vodi predsjednik Parlamenta ili jedan od tri stalna člana.\n\r\
\n\r\
7.   Izaslanstvo odlučuje većinom glasova svojih članova. Njegove rasprave nisu javne.\n\r\
\n\r\
Konferencija predsjednika utvrđuje daljnje postupovne smjernice za rad izaslanstva u Odboru za mirenje.\n\r\
\n\r\
8.   Izaslanstvo izvještava Parlament o rezultatima mirenja."
},
{
'id': 72,
'title': 'Članak 72. : Zajednički tekst',
'text': "1.   Ako se u Odboru za mirenje postigne dogovor o zajedničkom tekstu, predmet se uvrštava u dnevni red dnevne sjednice Parlamenta koja se održava šest tjedana ili, ako je rok produljen, osam tjedana od dana odobrenja zajedničkog teksta u Odboru za mirenje.\n\r\
\n\r\
2.   Predsjednik ili drugi imenovani član izaslanstva Parlamenta u Odboru za mirenje daje izjavu o zajedničkom tekstu kojoj se prilaže izvješće.\n\r\
\n\r\
3.   Na zajednički tekst nije moguće podnositi amandmane.\n\r\
\n\r\
4.   O zajedničkom tekstu kao cjelini održava se jedinstveno glasovanje. Zajednički se tekst odobrava ako dobije većinu glasova.\n\r\
\n\r\
5.   Ako u Odboru za mirenje nije postignut dogovor o zajedničkom tekstu, predsjednik ili drugi imenovani član izaslanstva Parlamenta u Odboru za mirenje daje izjavu. Nakon izjave slijedi rasprava.\n\r\
\n\r\
6.   Tijekom postupka mirenja između Parlamenta i Vijeća nakon drugog čitanja predmet se ne vraća odboru.\n\r\
\n\r\
7.   Članci 49., 50. i 53. ne primjenjuju se tijekom trećeg čitanja."
},
{
'id': 73,
'title': 'Članak 73. : (Briše se.)',
'text': ""
},
{
'id': 74,
'title': 'Članak 74. : (Briše se.)',
'text': ""
},
{
'id': 75,
'title': 'Članak 75. : (Briše se.)',
'text': ""
},
{
'id': 76,
'title': 'Članak 76. : (Briše se.)',
'text': ""
},
{
'id': 77,
'title': 'Članak 77. : (Briše se.)',
'text': ""
},
{
'id': 78,
'title': 'Članak 78. : Potpisivanje i objavljivanje donesenih akata',
'text': "Nakon finalizacije usvojenog teksta u skladu s člankom 193. i Prilogom VII. i nakon što je provjereno jesu li svi postupci propisno zaključeni predsjednik i glavni tajnik potpisuju akte koji su doneseni u skladu s redovnim zakonodavnim postupkom.\n\r\
\n\r\
Nakon potpisivanja akta glavni tajnici Parlamenta i Vijeća dogovaraju se o objavljivanju akta u Službenom listu Europske unije.\n\r\
\n\r\
\n\r\
Članak 78.a : Izmijenjeni prijedlog pravno obvezujućeg akta\n\r\
\n\r\
Ako Komisija namjerava zamijeniti ili izmijeniti svoj prijedlog pravno obvezujućeg akta, nadležni odbor može odgoditi razmatranje predmeta sve dok ne zaprimi novi prijedlog ili izmjene prijedloga Komisije.\n\r\
\n\r\
Rule 78.b : Stajalište Komisije o amandmanima\n\r\
\n\r\
Prije nego što prijeđe na konačno glasovanje o prijedlogu pravno obvezujućeg akta, nadležni odbor može tražiti od Komisije da iznese svoje stajalište o svim amandmanima na prijedlog koje je odbor prihvatio.\n\r\
\n\r\
To se stajalište po potrebi uvrštava u izvješće.\n\r\
\n\r\
Članak 78.c : Glasovanje u Parlamentu\n\r\
\n\r\
Članak 59. stavci 1., 2., 4. i 5. primjenjuju se mutatis mutandis.\n\r\
\n\r\
Članak 78.d : Daljnji postupak nakon usvajanja stajališta Parlamenta\n\r\
\n\r\
1.   Nakon što Parlament usvoji svoje stajalište o nacrtu pravno obvezujućeg akta, predsjednik i izvjestitelj nadležnog odbora prate daljnji razvoj tog nacrta akta tijekom cijelog trajanja postupka sve dok ga ne usvoji Vijeće, prije svega kako bi se zajamčilo da se Vijeće ili Komisija na odgovarajući način pridržavaju obveza koje su dali Parlamentu u pogledu njegova stajališta. Predsjednik i izvjestitelj nadležnog odbora o tome redovito izvješćuju nadležni odbor.\n\r\
\n\r\
2.   Nadležni odbor može pozvati Komisiju i Vijeće da s njime rasprave o tom predmetu.\n\r\
\n\r\
3.   U svakoj fazi daljnjeg postupka nadležni odbor može, ako smatra da je to potrebno, podnijeti prijedlog rezolucije kojim preporučuje Parlamentu da:\n\r\
\n\r\
-   pozove Komisiju da povuče svoj prijedlog,\n\r\
\n\r\
-   pozove Komisiju ili Vijeće da ponovno upute predmet Parlamentu u skladu s člankom 78.e ili pozove Komisiju da podnese novi prijedlog ili\n\r\
\n\r\
-   poduzme bilo koju drugu radnju za koju smatra da je prikladna.\n\r\
\n\r\
Taj prijedlog rezolucije uvrštava se u prijedlog dnevnog reda prve sljedeće sjednice nakon usvajanja prijedloga odbora.\n\r\
\n\r\
Članak 78.e : Ponovno upućivanje Parlamentu\n\r\
\n\r\
1.   Na zahtjev nadležnog odbora predsjednik poziva Vijeće da se ponovno savjetuje s Parlamentom pod jednakim okolnostima i jednakim uvjetima kao što su oni navedeni u članku 63. stavku 1. Predsjednik na zahtjev nadležnog odbora poziva Vijeće da se ponovo savjetuje s Parlamentom ako Vijeće bitno izmijeni ili namjerava izmijeniti pravno obvezujući akt o kojem je Parlament već iznio svoje stajalište, osim ako se to čini radi uvrštavanja izmjena Parlamenta.\n\r\
\n\r\
2.   Predsjednik također zahtijeva da se nacrt pravno obvezujućeg akta ponovno uputi Parlamentu pod okolnostima utvrđenima ovim člankom ako Parlament tako odluči na prijedlog kluba zastupnika ili zastupnika koji dosežu barem niski prag."
},
{
'id': 79,
'title': 'Članak 79. : Redovna revizija Ugovora',
'text': "1.   U skladu s člancima 45. i 52. nadležni odbor može Parlamentu podnijeti izvješće koje sadrži prijedloge o izmjeni Ugovora upućene Vijeću.\n\r\
\n\r\
2.   Ako se u skladu s člankom 48. stavkom 3. Ugovora o Europskoj uniji od Parlamenta traži mišljenje o prijedlogu odluke Europskog vijeća o razmatranju izmjena Ugovora, predmet se upućuje u nadležni odbor. Odbor sastavlja izvješće koje uključuje sljedeće:\n\r\
\n\r\
-   prijedlog rezolucije u kojem se navodi odobrava li Parlament predloženu odluku ili je odbija, koji također može sadržavati prijedloge upućene konvenciji ili konferenciji predstavnika vlada država članica;\n\r\
\n\r\
-   po potrebi obrazloženje.\n\r\
\n\r\
3.   Ako Europsko vijeće odluči sazvati konvenciju, Parlament na prijedlog Konferencije predsjednika imenuje svoje predstavnike.\n\r\
\n\r\
Izaslanstvo Parlamenta izabire svog voditelja i kandidate za članstvo u bilo kojem povjerenstvu ili predsjedništvu koje konvencija osnuje.\n\r\
\n\r\
4.   Ako Europsko vijeće zahtijeva suglasnost Parlamenta za odluku o nesazivanju konvencije u svrhu proučavanja predloženih izmjena Ugovora, taj se zahtjev upućuje nadležnom odboru u skladu s člankom 99."
},
{
'id': 80,
'title': 'Članak 80. : Pojednostavljena revizija Ugovora',
'text': "1.   U skladu s člancima 45. i 52. nadležni odbor može u skladu s postupkom utvrđenim u članku 48. stavku 6. Ugovora o Europskoj uniji podnijeti izvješće Parlamentu koje sadrži prijedloge upućene Europskom vijeću o reviziji svih odredbi ili dijela odredbi trećeg dijela Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
2.   Ako se u skladu s člankom 48. stavkom 6. Ugovora o Europskoj uniji Parlament savjetuje o prijedlogu odluke Europskog vijeća kojom se izmjenjuje treći dio Ugovora o funkcioniranju Europske unije, članak 79. stavak 2. Poslovnika primjenjuje se na odgovarajući način. U tom slučaju u prijedlogu rezolucije mogu biti samo prijedlozi izmjena odredbi trećeg dijela Ugovora o funkcioniranju Europske unije."
},
{
'id': 81,
'title': 'Članak 81. : Ugovori o pristupanju',
'text': "1.   Svaki zahtjev europske države da postane članicom Europske unije u skladu s člankom 49. Ugovora o Europskoj uniji upućuje se na razmatranje nadležnom odboru.\n\r\
\n\r\
2.   Na prijedlog nadležnog odbora, kluba zastupnika ili zastupnika koji dosežu barem niski prag Parlament može od Komisije i Vijeća zahtijevati sudjelovanje u raspravi prije nego započnu ikakvi pregovori s državom podnositeljicom zahtjeva.\n\r\
\n\r\
3.   Nadležni odbor od Komisije i Vijeća traži da mu pružaju potpune i redovite informacije o napretku pregovora o pristupanju, po potrebi povjerljivo.\n\r\
\n\r\
4.   U svakoj fazi pregovora Parlament može, na temelju izvješća nadležnog odbora, usvojiti preporuke i zahtijevati da se one uzmu u obzir prije zaključivanja ugovora o pristupanju države Europskoj uniji.\n\r\
\n\r\
5.   Po zaključenju pregovora o pristupanju, ali prije potpisivanja ugovora, Parlamentu se podnosi nacrt ugovora i od njega traži suglasnost u skladu s člankom 99. U skladu s člankom 49. Ugovora o Europskoj uniji za suglasnost Parlamenta potrebna je većina glasova njegovih zastupnika."
},
{
'id': 82,
'title': 'Članak 82. : Istupanje iz Unije',
'text': "Ako država članica u skladu s člankom 50. Ugovora o Europskoj uniji odluči istupiti iz Unije, predmet se upućuje nadležnom odboru. Članak 81.  Poslovnika primjenjuje se na odgovarajući način. Parlament suglasnost na ugovor o istupanju daje većinom glasova."
},
{
'id': 83,
'title': 'Članak 83. : Kršenje temeljnih načela i vrijednosti od strane države članice',
'text': "1.   Parlament može na temelju posebnog izvješća nadležnog odbora sastavljenog u skladu s člancima 45. i 52.:\n\r\
\n\r\
(a)   glasovati o obrazloženom prijedlogu kojim se poziva Vijeće da djeluje u skladu s člankom 7. stavkom 1. Ugovora o Europskoj uniji;\n\r\
\n\r\
(b)   glasovati o prijedlogu kojim se poziva Komisija ili države članice da podnesu prijedlog u skladu s člankom 7. stavkom 2. Ugovora o Europskoj uniji;\n\r\
\n\r\
(c)   glasovati o prijedlogu kojim se poziva Vijeće da djeluje u skladu s člankom 7. stavkom 3. ili naknadno, s člankom 7. stavkom 4. Ugovora o Europskoj uniji.\n\r\
\n\r\
2.   Svaki zahtjev Vijeća za suglasnost u vezi s prijedlogom podnesenim u skladu s člankom 7. stavcima 1. i 2. Ugovora o Europskoj uniji zajedno s primjedbama koje podnosi dotična država članica objavljuje se u Parlamentu i upućuje nadležnom odboru u skladu s člankom 99. Osim u hitnim i opravdanim okolnostima Parlament donosi svoju odluku na prijedlog nadležnog odbora.\n\r\
\n\r\
3.   U skladu s člankom 354. Ugovora o funkcioniranju Europske unije za donošenje odluke navedene u stavcima 1. i 2.  ovog članka potrebna je dvotrećinska većina danih glasova koja predstavlja većinu zastupnika u Parlamentu.\n\r\
\n\r\
4.   Ako to odobri Konferencija predsjednika, nadležni odbor može podnijeti priloženi prijedlog rezolucije. U ovom prijedlogu rezolucije iznose se stajališta Parlamenta o ozbiljnom kršenju koje je počinila država članica, o odgovarajućim mjerama koje treba poduzeti te o njihovoj izmjeni ili opozivu.\n\r\
\n\r\
5.   Nadležni odbor osigurava da je Parlament u potpunosti obaviješten i da se po potrebi traži njegovo stajalište o svim daljnjim mjerama nakon njegove suglasnosti dane u skladu sa stavkom 3. Vijeće se poziva da po potrebi ukratko izloži razvoj događaja. Na prijedlog nadležnog odbora sastavljenog uz odobrenje Konferencije predsjednika Parlament može usvojiti preporuke za Vijeće."
},
{
'id': 84,
'title': 'Članak 84. : Sastav Parlamenta',
'text': "Parlament može pravodobno prije kraja saziva, na temelju izvješća koje sastavlja nadležni odbor u skladu s člankom 14. stavkom 2. Ugovora o Europskoj uniji i člancima 45. i 52. Poslovnika, pripremiti prijedlog o promjeni svog sastava. Nacrt odluke Europskog vijeća kojom se ustanovljuje sastav Parlamenta razmatra se u skladu s člankom 99."
},
{
'id': 85,
'title': 'Članak 85. : Pojačana suradnja između država članica',
'text': "1.   Predsjednik upućuje nadležnom odboru na razmatranje zahtjeve za uspostavu pojačane suradnje između država članica u skladu s člankom 20. Ugovora o Europskoj uniji. Primjenjuje se članak 99.\n\r\
\n\r\
2.   Nadležni odbor provjerava usklađenost s člankom 20. Ugovora o Europskoj uniji i člancima od 326. do 334. Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
3.   Akti koji se predlažu na temelju pojačane suradnje nakon njezine uspostave razmatraju se u Parlamentu u skladu s onim postupcima koji bi bili primijenjivani kada ne bi bilo pojačane suradnje. Primjenjuje se članak 47."
},
{
'id': 86,
'title': 'Članak 86. : Višegodišnji financijski okvir',
'text': "Ako Vijeće zahtijeva suglasnost Parlamenta s prijedlogom uredbe kojom se utvrđuje višegodišnji financijski okvir, predmet se rješava u skladu s člankom 99. U skladu s člankom 312. stavkom 2. prvim podstavkom Ugovora o funkcioniranju Europske unije za suglasnost Parlamenta potrebna je većina glasova zastupnika.\n\r\
\n\r\
Članak 86.a : Godišnji proračunski postupak\n\r\
\n\r\
Nadležni odbor može odlučiti izraditi bilo koje izvješće koje se smatra prikladnim za proračun, uzimajući u obzir Prilog Međuinstitucionalnom sporazumu od 2. prosinca 2013. o proračunskoj disciplini, o suradnji u vezi s proračunskim pitanjima i o dobrom financijskom upravljanju(1).\n\r\
\n\r\
Svi ostali odbori mogu iznijeti mišljenje u roku koji odredi nadležni odbor.\n\r\
\n\r\
\n\r\
(1)	SL C 373, 20.12.2013., str. 1."
},
{
'id': 87,
'title': 'Članak 87. : (Briše se.)',
'text': "1.   Amandmane na stajalište Vijeća o nacrtu proračuna u nadležnom odboru mogu podnijeti pojedini zastupnici.\n\r\
\n\r\
Amandmane na stajalište Vijeća o nacrtu proračuna u Parlamentu može podnijeti klub zastupnika ili zastupnici koji dosežu barem niski prag ili se to može učiniti uime odbora.\n\r\
\n\r\
2.   Amandmani se podnose i obrazlažu u pisanom obliku, autori ih moraju potpisati i u njima mora biti navedeno na koju se proračunsku liniju odnose.\n\r\
\n\r\
3.   Predsjednik određuje rok za podnošenje amandmana.\n\r\
\n\r\
4.   Nadležni odbor glasuje o amandmanima prije nego što se o njima raspravlja u Parlamentu.\n\r\
\n\r\
5.   Amandmani podneseni u Parlamentu koji su odbijeni u nadležnom odboru mogu se staviti na glasovanje samo ako to pisanim putem prije isteka roka koji je odredio predsjednik Parlamenta zatraži odbor ili klub zastupnika ili zastupnici koji dosežu barem niski prag. Taj rok ne smije biti kraći od 24 sata prije početka glasovanja.\n\r\
\n\r\
6.   O amandmanima na projekciju proračuna Parlamenta koji su slični onima koje je Parlament prethodno odbio prilikom sastavljanja projekcije proračuna Parlament raspravlja samo kad nadležni odbor iznese pozitivno mišljenje.\n\r\
\n\r\
7.   Parlament održava uzastopna glasovanja:\n\r\
\n\r\
-   o amandmanima na stajalište Vijeća o nacrtu proračuna, po odjeljcima,\n\r\
\n\r\
-   o prijedlogu rezolucije o nacrtu proračuna.\n\r\
\n\r\
Primjenjuje se međutim članak 174. stavci 4. do 10.\n\r\
\n\r\
8.   Članci, poglavlja, glave i odjeljci nacrta proračuna na koje nije podnesen nijedan amandman smatraju se prihvaćenima.\n\r\
\n\r\
9.   U skladu s člankom 314. stavkom 4. točkom (c) Ugovora o funkcioniranju Europske unije, za usvajanje amandmana, potrebna je većina glasova zastupnika Parlamenta.\n\r\
\n\r\
10.   Ako Parlament izmijeni stajalište Vijeća o nacrtu proračuna, tako izmijenjeno stajalište šalje se Vijeću i Komisiji zajedno s obrazloženjima i zapisnikom s dnevne sjednice na kojoj su amandmani usvojeni."
},
{
'id': 88,
'title': 'Članak 88. : Stajalište Parlamenta o nacrtu proračuna',
'text': "1.   Amandmane na stajalište Vijeća o nacrtu proračuna u nadležnom odboru mogu podnijeti pojedini zastupnici.\n\r\
\n\r\
Amandmane na stajalište Vijeća o nacrtu proračuna u Parlamentu može podnijeti klub zastupnika ili zastupnici koji dosežu barem niski prag ili se to može učiniti uime odbora.\n\r\
\n\r\
2.   Amandmani se podnose i obrazlažu u pisanom obliku, autori ih moraju potpisati i u njima mora biti navedeno na koju se proračunsku liniju odnose.\n\r\
\n\r\
3.   Predsjednik određuje rok za podnošenje amandmana.\n\r\
\n\r\
4.   Nadležni odbor glasuje o amandmanima prije nego što se o njima raspravlja u Parlamentu.\n\r\
\n\r\
5.   Amandmani podneseni u Parlamentu koji su odbijeni u nadležnom odboru mogu se staviti na glasovanje samo ako to pisanim putem prije isteka roka koji je odredio predsjednik Parlamenta zatraži odbor ili klub zastupnika ili zastupnici koji dosežu barem niski prag. Taj rok ne smije biti kraći od 24 sata prije početka glasovanja.\n\r\
\n\r\
6.   O amandmanima na projekciju proračuna Parlamenta koji su slični onima koje je Parlament prethodno odbio prilikom sastavljanja projekcije proračuna Parlament raspravlja samo kad nadležni odbor iznese pozitivno mišljenje.\n\r\
\n\r\
7.   Parlament održava uzastopna glasovanja:\n\r\
\n\r\
-   o amandmanima na stajalište Vijeća o nacrtu proračuna, po odjeljcima,\n\r\
\n\r\
-   o prijedlogu rezolucije o nacrtu proračuna.\n\r\
\n\r\
Primjenjuje se međutim članak 174. stavci 4. do 10.\n\r\
\n\r\
8.   Članci, poglavlja, glave i odjeljci nacrta proračuna na koje nije podnesen nijedan amandman smatraju se prihvaćenima.\n\r\
\n\r\
9.   U skladu s člankom 314. stavkom 4. točkom (c) Ugovora o funkcioniranju Europske unije, za usvajanje amandmana, potrebna je većina glasova zastupnika Parlamenta.\n\r\
\n\r\
10.   Ako Parlament izmijeni stajalište Vijeća o nacrtu proračuna, tako izmijenjeno stajalište šalje se Vijeću i Komisiji zajedno s obrazloženjima i zapisnikom s dnevne sjednice na kojoj su amandmani usvojeni."
},
{
'id': 89,
'title': 'Članak 89. : (Briše se.)',
'text': ""
},
{
'id': 90,
'title': 'Članak 90. : Mirenje u proračunskom postupku',
'text': "1.   Predsjednik saziva Odbor za mirenje u skladu s člankom 314. stavkom 4. Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
2.   Izaslanstvo Parlamenta na sjednicama Odbora za mirenje u proračunskom postupku sastoji se od jednakog broja članova kao izaslanstvo Vijeća.\n\r\
\n\r\
3.   Klubovi zastupnika imenuju članove izaslanstva u Odboru za mirenje svake godine prije glasovanja Parlamenta o stajalištu Vijeća, po mogućnosti između članova odbora nadležnog za pitanja proračuna i drugih relevantnih odbora. Izaslanstvo vodi predsjednik Parlamenta. Predsjednik Parlamenta može ovu ulogu delegirati potpredsjedniku koji ima iskustvo u pitanjima proračuna ili predsjedniku odbora nadležnog za proračunska pitanja.\n\r\
\n\r\
4.   Primjenjuje se članak 71. stavci 2., 4., 5., 7. i 8.\n\r\
\n\r\
5.   Ako se u Odboru za mirenje postigne dogovor o zajedničkom tekstu, predmet se uvrštava u dnevni red dnevne sjednice Parlamenta koja se održava u roku od 14 dana od dana postizanja dogovora. Zajednički tekst dostupan je svim zastupnicima. Primjenjuje se članak 72. stavci 2. i 3.\n\r\
\n\r\
6.   O zajedničkom tekstu kao cjelini održava se jedinstveno glasovanje. Glasuje se poimenično. Zajednički tekst smatra se odobrenim osim ako ga odbije većina zastupnika u Parlamentu.\n\r\
\n\r\
7.   Ako Parlament odobri zajednički tekst, a Vijeće ga odbije, nadležni odbor može podnijeti sve ili neke amandmane Parlamenta na stajalište Vijeća radi potvrđivanja u skladu s člankom 314. stavkom 7. točkom (d) Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
Glasovanje o potvrđivanju uvrštava se u dnevni red dnevne sjednice Parlamenta koja se treba održati u roku od 14 dana od datuma kad je Vijeće priopćilo da odbija zajednički tekst.\n\r\
\n\r\
Zajednički tekst smatra se potvrđenim ako ga je odobrila većina zastupnika u Parlamentu s tri petine glasova."
},
{
'id': 91,
'title': 'Članak 91. : Konačno donošenje proračuna',
'text': "Ako predsjednik smatra da je proračun donesen u skladu s odredbama članka 314. Ugovora o funkcioniranju Europske unije, u Parlamentu objavljuje njegovo konačno donošenje. Predsjednik ga daje na objavu u Službenom listu Europske unije."
},
{
'id': 92,
'title': 'Članak 92. : Sustav privremenih dvanaestina',
'text': "1.   Svaka odluka Vijeća kojom se odobrava rashod koji premašuje privremenu dvanaestinu odobrenih proračunskih sredstava za prethodnu financijsku godinu upućuje se nadležnom odboru.\n\r\
\n\r\
2.   Nadležni odbor može podnijeti nacrt odluke kojom se smanjuje rashod naveden u stavku 1. Parlament o tome odlučuje u roku od 30 dana nakon donošenja odluke Vijeća.\n\r\
\n\r\
3.   Parlament odlučuje većinom glasova svojih zastupnika.\n\r\
\n\r\
Članak 92.a : Izvršenje proračuna\n\r\
\n\r\
1.   Parlament nadzire izvršenje proračuna za tekuću godinu. Taj zadatak povjerava odboru nadležnom za proračun i proračunski nadzor i drugim mjerodavnim odborima.\n\r\
\n\r\
2.   Parlament svake godine prije čitanja nacrta proračuna za sljedeću financijsku godinu razmatra probleme pri izvršenju tekućeg proračuna, po potrebi na temelju prijedloga rezolucije koji podnese nadležni odbor."
},
{
'id': 93,
'title': 'Članak 93. : Davanje razrješnice Komisiji u vezi s izvršenjem proračuna',
'text': "Odredbe o postupku davanja razrješnice Komisiji u odnosu na izvršenje proračuna u skladu s financijskim odredbama Ugovora o funkcioniranju Europske unije i Uredbe (EU, Euratom) br. 966/2012 Europskog parlamenta i Vijeća(1) („Financijska uredbaˮ) priložene su ovom Poslovniku.(2)\n\r\
\n\r\
\n\r\
(1)	Uredba (EU, Euratom) br. 966/2012 Europskog parlamenta i Vijeća od 25. listopada 2012. o financijskim pravilima koja se primjenjuju na opći proračun Unije i o stavljanju izvaa snage Uredbe Vijeća (EZ; Euratom) br. 1605/2002 (SL L 298, 26.10.2012..\n\r\
(2)	Vidi Prilog IV."
},
{
'id': 94,
'title': 'Članak 94. : Drugi postupci davanja razrješnice',
'text': "Odredbe o postupku davanja razrješnice Komisiji u skladu s člankom 319. Ugovora o funkcioniranju Europske unije u vezi s izvršenjem proračuna isto tako se primjenjuju na postupak davanja razrješnice:\n\r\
\n\r\
-   predsjedniku Parlamenta u izvršenju proračuna Europskog parlamenta;\n\r\
\n\r\
-   osobama nadležnima za izvršenje proračuna drugih institucija i tijela Europske unije poput Vijeća, Suda Europske unije, Revizorskog suda, Europskoga gospodarskog i socijalnog odbora i Odbora regija;\n\r\
\n\r\
-   Komisiji u vezi s izvršenjem proračuna Europskog fonda za razvoj;\n\r\
\n\r\
-   tijelima nadležnima za upravljanje proračunom pravno nezavisnih tijela koja obavljaju zadaće Unije u mjeri u kojoj njihove aktivnosti podliježu pravnim odredbama za koje je potrebna razrješnica Europskog parlamenta.\n\r\
\n\r\
Članak 94.a : Međuinstitucijska suradnja\n\r\
\n\r\
U skladu s člankom 324. Ugovora o funkcioniranju Europske unije predsjednik sudjeluje na redovitim sastancima između predsjednika Europskog parlamenta, Vijeća i Komisije sazvanima na inicijativu Komisije na temelju proračunskih postupaka koji se navode u glavi II. šestog dijela Ugovora o funkcioniranju Europske unije. Predsjednik poduzima sve potrebne korake kako bi promicao savjetovanje i pomirenje stajališta institucija u svrhu olakšavanja provedbe gore navedenih postupaka.\n\r\
\n\r\
Predsjednik Parlamenta može ovaj zadatak delegirati potpredsjedniku koji ima iskustvo u pitanjima proračuna ili predsjedniku odbora nadležnog za ta pitanja."
},
{
'id': 95,
'title': 'Članak 95. : (Briše se.)',
'text': ""
},
{
'id': 96,
'title': 'Članak 96. : Projekcija proračuna Parlamenta',
'text': "1.   Predsjedništvo sastavlja prednacrt projekcije proračuna na temelju izvješća koje priprema glavni tajnik.\n\r\
\n\r\
2.   Predsjednik šalje prednacrt projekcije proračuna nadležnom odboru, koji sastavlja nacrt projekcije proračuna i o tome izvještava Parlament.\n\r\
\n\r\
3.     Predsjednik određuje rok za podnošenje amandmana na nacrt projekcije proračuna.\n\r\
\n\r\
Nadležni odbor daje svoje mišljenje o tim amandmanima.\n\r\
\n\r\
4.   Parlament prihvaća projekciju proračuna.\n\r\
\n\r\
5.   Predsjednik šalje projekciju proračuna Komisiji i Vijeću.\n\r\
\n\r\
6.   Gore navedene odredbe također se primjenjuju na projekciju proračuna za izmjenu proračuna."
},
{
'id': 97,
'title': 'Članak 97. : Postupak pri sastavljanju nacrta projekcije proračuna Parlamenta',
'text': "1.   Predsjedništvo i odbor nadležan za proračunska pitanja donose odluke o proračunu Parlamenta u sljedećim fazama:\n\r\
\n\r\
(a)   plan radnih mjesta;\n\r\
\n\r\
(b)   prednacrt i nacrt projekcije proračuna.\n\r\
\n\r\
2.   Odluke o planu radnih mjesta donose se u skladu sa sljedećim postupkom:\n\r\
\n\r\
(a)   Predsjedništvo sastavlja plan radnih mjesta za svaku financijsku godinu;\n\r\
\n\r\
(b)   postupak mirenja između Predsjedništva i odbora nadležnog za proračunska pitanja pokreće se u slučajevima kad se mišljenje odbora razlikuje od prvotnih odluka Predsjedništva;\n\r\
\n\r\
(c)   na kraju postupka Predsjedništvo donosi konačnu odluku o projekciji proračuna u vezi s planom radnih mjesta u skladu s člankom 222. stavkom 3., ne dovodeći u pitanje odluke donesene u skladu s člankom 314. Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
3.    U vezi sa samom projekcijom proračuna, postupak njezina sastavljanja započinje čim Predsjedništvo donese konačnu odluku o planu radnih mjesta. Faze ovog postupka su one utvrđene člankom 96. Postupak mirenja otvara se u slučajevima kad se stajališta odbora nadležnog za proračunska pitanja i Predsjedništva znatno razlikuju."
},
{
'id': 98,
'title': 'Članak 98. : Ovlast preuzimanja obveza i podmirivanja rashoda, odobravanja financijskih izvještaja i davanja razrješnice',
'text': "1.   Predsjednik preuzima obveze i podmiruje rashode koji su pokriveni unutarnjim financijskim propisima koje donosi Predsjedništvo nakon savjetovanja s odgovarajućim odborom ili nalaže njihovo preuzimanje i podmirivanje.\n\r\
\n\r\
2.   Predsjednik šalje nacrt godišnjih financijskih izvještaja nadležnom odboru.\n\r\
\n\r\
3.   Na temelju izvješća nadležnog odbora Parlament odobrava godišnje financijske izvještaje i odlučuje o davanju razrješnice."
},
{
'id': 99,
'title': 'Članak 99. : Postupak suglasnosti',
'text': "1.   Kad se od Parlamenta traži suglasnost za pravno obvezujući akt, nadležni odbor podnosi Parlamentu preporuku o prihvaćanju ili odbijanju predloženog akta.\n\r\
\n\r\
Preporuka sadrži citate, ali ne  sadrži uvodne izjave. Amandmani u odboru dopušteni su samo ako im je cilj poništiti preporuku koju je predložio izvjestitelj.\n\r\
\n\r\
Preporuka može biti popraćena kratkim obrazloženjem. To obrazloženje je u isključivoj nadležnosti izvjestitelja i o kojem se ne glasuje. Na odgovarajući se način primjenjuje članak 52.a. stavak 2.\n\r\
\n\r\
2.   Ako je potrebno, nadležni odbor također može podnijeti izvješće, uključujući prijedlog nezakonodavne rezolucije, u kojemu se navode razlozi zašto bi Parlament trebao dati ili odbiti svoju suglasnost te se po potrebi daju preporuke za provedbu predloženog akta.\n\r\
\n\r\
3.   Nadležni odbor razmatra zahtjev za suglasnost bez nepotrebne odgode. Ako nadležni odbor nije usvojio preporuku u roku od šest mjeseci nakon što mu je upućen zahtjev za suglasnost, Konferencija predsjednika može staviti to pitanje na dnevni red jedne od sljedećih sjednica radi razmatranja ili, u opravdanim slučajevima, produljiti rok od šest mjeseci.\n\r\
\n\r\
4.   Parlament o predloženom aktu odlučuje jedinstvenim glasovanjem o suglasnosti, bez obzira na to preporučuje li nadležni odbor da se akt prihvati ili odbije, bez mogućnosti podnošenja amandmana. Ako potrebna većina nije ostvarena, smatra se da je predloženi akt odbijen.\n\r\
\n\r\
5.   Ako se od Parlamenta traži suglasnost, nadležni odbor u bilo kojem trenutku može podnijeti Parlamentu privremeno izvješće o prijedlogu zajedno s prijedlogom rezolucije koji sadrži preporuke za promjenu ili provedbu predloženog akta."
},
{
'id': 100,
'title': 'Članak 100. : Postupak davanja mišljenja o odstupanjima od uvođenja eura',
'text': "1.   Kad je pozvan dati mišljenje u skladu s člankom 140. stavkom 2. Ugovora o funkcioniranju Europske unije, nadležni parlamentarni odbor Parlamentu podnosi izvješće kojim se predlaže prihvaćanje ili odbijanje predloženog akta, te na temelju kojega Parlament raspravlja.\n\r\
\n\r\
2.   Parlament potom jedinstvenim glasovanjem odlučuje o predloženom aktu, bez mogućnosti podnošenja amandmana."
},
{
'id': 101,
'title': 'Članak 101. : Postupci koji se odnose na socijalni dijalog',
'text': "1.   Predsjednik upućuje na razmatranje nadležnom odboru sve dokumente koje sastavi Komisija u skladu s člankom 154. Ugovora o funkcioniranju Europske unije ili sporazume između socijalnih partnera sklopljene u skladu s člankom 155. stavkom 1. tog Ugovora te prijedloge koje podnese Komisija u skladu s člankom 155. stavkom 2. tog Ugovora.\n\r\
\n\r\
2.   Kad socijalni partneri obavijeste Komisiju da žele pokrenuti postupak predviđen člankom 155. Ugovora o funkcioniranju Europske unije, nadležni odbor može sastaviti izvješće o dotičnom suštinskom pitanju.\n\r\
\n\r\
3.   Ako socijalni partneri sklope sporazum i zajednički tražeda se on provede odlukom Vijeća na prijedlog Komisije prema članku 155. stavku 2. Ugovora o funkcioniranju Europske unije, nadležni odbor podnosi prijedlog rezolucije kojim preporučuje prihvaćanje ili odbijanje zahtjeva."
},
{
'id': 102,
'title': 'Članak 102. : Postupci nadzora predviđenih dobrovoljnih sporazuma',
'text': "1.   Kad Komisija obavijesti Parlament da namjerava ispitati mogućnost primjene dobrovoljnih sporazuma kao alternativu zakonodavstvu, nadležni odbor može sastaviti izvješće o dotičnom suštinskom pitanju u skladu s člankom 52.\n\r\
\n\r\
2.   Ako Komisija objavi da namjerava sklopiti dobrovoljni sporazum, nadležni odbor može podnijeti prijedlog rezolucije kojim preporučuje da Pralament prihvatie ili odbije prijedlog i navodi uvjete pod kojima se on prihvaća ili odbija."
},
{
'id': 103,
'title': 'Članak 103. : Kodifikacija',
'text': "1.   Kad se Parlamentu podnese prijedlog kodifikacije zakonodavstva Unije, prijedlog se upućuje odboru nadležnom za pravna pitanja. Taj odbor pregledava prijedlog u skladu s načinima dogovorenima na međuinstitucijskoj razini(1)kako bi utvrdio da se radi samo o kodifikaciji, bez suštinskih promjena.\n\r\
\n\r\
2.   Od odbora koji je bio nadležan za akte koji su predmet kodifikacije može se, na vlastiti zahtjev ili zahtjev odbora nadležnog za pravna pitanja, tražiti da dostavi mišljenje o poželjnosti kodifikacije.\n\r\
\n\r\
3.   Amandmani na tekst prijedloga nisu dopušteni.\n\r\
\n\r\
Međutim, na zahtjev izvjestitelja, predsjednik odbora nadležnog za pravna pitanja može tražiti od tog odbora odobrenje tehničkih prilagodbi, pod uvjetom da te prilagodbe ne uključuju suštinske promjene prijedloga i da su nužne kako bi se osigurala usklađenost prijedloga s pravilima kodifikacije .\n\r\
\n\r\
4.   Ako odbor nadležan za pravna pitanja zaključi da prijedlog nema za posljedicu suštinske promjene zakonodavstva Unije, upućuje ga na odobrenje Parlamentu.\n\r\
\n\r\
Ako odbor  nadležan za pravna pitanja zaključi da prijedlog ima za posljedicu suštinsku promjenu, predlaže Parlamentu da odbije prijedlog.\n\r\
\n\r\
U oba slučaja Parlament donosi odluku jedinstvenim glasovanjem, bez amandmana i rasprave.\n\r\
\n\r\
\n\r\
(1)	Međuinstitucionalni sporazum od 20. prosinca 1994., Ubrzani način rada za službenu kodifikaciju zakonodavnih tekstova, točka 4. (SL C 102, 4.4.1996., str. 2.)."
},
{
'id': 104,
'title': 'Članak 104. : Preinake',
'text': "1.   Ako se Parlamentu podnese prijedlog preinake zakonodavstva Unije, prijedlog se upućuje odboru nadležnom za pravna pitanja i odboru nadležnom za dotični predmet.\n\r\
\n\r\
2.   Odbor nadležan za pravna pitanja pregledava prijedlog u skladu s načinima dogovorenima na međuinstitucijskoj razini(1) kako bi utvrdio da prijedlog nema za posljedicu suštinske promjene osim onih koje su kao takve u njemu navedene.\n\r\
\n\r\
U okviru tog pregleda amandmani na tekst prijedloga nisu dopušteni. Međutim, drugi podstavak članka 103. stavka 3. primjenjuje se na odredbe koje ostaju nepromijenjene u prijedlogu preinake.\n\r\
\n\r\
3.   Ako odbor nadležan za pravna pitanja smatra da prijedlog nema za posljedicu suštinske promjene osim onih koje su kao takve u njemu navedene, o tome obavještava odbor nadležan za predmet.\n\r\
\n\r\
U tom slučaju, pored uvjeta utvrđenih člancima 169. i 170., amandmani su dopušteni u odboru nadležnom za dotični predmet samo ako se odnose na dijelove prijedloga koji sadrže promjene.\n\r\
\n\r\
Međutim, predsjednik odbora nadležnog za dotični predmet iznimno i razmatrajući svaki slučaj zasebno može dopustiti amandmane na dijelove prijedloga koji su ostali nepromijenjeni ako smatra da je to potrebno zbog bitnih razloga koji se odnose na unutarnju logiku teksta ili zbog toga što su amandmani neodvojivo povezani s ostalim dopuštenim amandmanima. Ti razlozi moraju se navesti u pisanom obrazloženju amandmana.\n\r\
\n\r\
4.   Ako odbor nadležan za pravna pitanja smatra da prijedlog ima za posljedicu suštinske promjene osim onih koje su kao takve u njemu navedene, predlaže Parlamentu da odbije prijedlog i o tome obavještava odbor nadležan za dotični predmet.\n\r\
\n\r\
U tom slučaju predsjednik traži od Komisije da ga povuče. Ako Komisija to učini, predsjednik zaključuje da je postupak u Parlamentu bespredmetan i o tome obavještava Vijeće. Ako Komisija ne povuče svoj prijedlog, Parlament ga vraća odboru nadležnom za dotični predmet, koji ga razmatra u skladu s redovnim postupkom.\n\r\
\n\r\
\n\r\
(1)	Međuinstitucionalni sporazum od 28. studenog 2001. o sustavnijoj metodi preinaka pravnih akata, točka 9. (SL C 77, 28.3.2002. str. 1.)."
},
{
'id': 105,
'title': 'Članak 105. : Delegirani akti',
'text': "1.   Kad Komisija Europskom parlamentu proslijedi delegirani akt, predsjednik ga upućuje odboru nadležnom za temeljni zakonodavni akt, koji može odlučiti odrediti jednoga od svojih članova za razmatranje jednog ili više delegiranih akata.\n\r\
\n\r\
2.   Tijekom sjednice koja slijedi nakon primitka delegiranog akta predsjednik Parlamentu priopćava datum njegova primitka na svim službenim jezicima te rok do kojeg je moguće uložiti prigovore. Taj rok počinje teći od datuma primitka.\n\r\
\n\r\
Priopćenje se objavljuje u zapisniku sa sjednice zajedno s nazivom nadležnog odbora.\n\r\
\n\r\
3.   U skladu s odredbama temeljnog zakonodavnog akta i ako to smatra primjerenim, nadležni odbor može nakon savjetovanja sa svim drugim relevantnim odborima Parlamentu podnijeti obrazloženi prijedlog rezolucije kojim se ulaže prigovor na delegirani akt. Ako u razdoblju od 10 radnih dana prije početka sjednice tijekom koje srijeda pada prije datuma isteka roka iz stavka 5. i najbliža mu je nadležni odbor ne podnese prijedlog rezolucije, klub zastupnika ili zastupnici koji dosežu barem niski prag mogu podnijeti prijedlog rezolucije o predmetu koji treba uvrstiti u dnevni red navedene sjednice.\n\r\
\n\r\
4.   U svakom prijedlogu rezolucije podnesenom u skladu sa stavkom 3. navode se razlozi za prigovore Parlamenta, a on može sadržavati i zahtjev kojim se Komisija poziva na podnošenje novog delegiranog akta u kojemu se u obzir uzimaju preporuke Parlamenta.\n\r\
\n\r\
5.   Parlament odobrava taj prijedlog u roku utvrđenom u temeljnom zakonodavnom aktu i većinom glasova svojih zastupnika u skladu s člankom 290. stavkom 2. drugim podstavkom Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
Ako nadležni odbor smatra da u skladu s odredbama temeljnog zakonodavnog akta treba produljiti rok za ulaganje prigovora na delegirani akt, predsjednik nadležnog odbora u ime Parlamenta obavještava Vijeće i Komisiju o tom produljenju.\n\r\
\n\r\
6.   Ako je preporuka nadležnog odbora da prije isteka roka utvrđenog u temeljnom zakonodavnom aktu Parlament izjavi da nema prigovor na delegirani akt:\n\r\
\n\r\
-   o tome nadležni odbor obrazloženim pismom obavještava predsjednika Konferencije predsjednika odbora i u tom smislu podnosi preporuku;\n\r\
\n\r\
-   ako se na sljedećoj sjednici Konferencije predsjednika odbora ili u hitnom slučaju pisanim postupkom ne uloži prigovor, njezin predsjednik o tome obavještava predsjednika Parlamenta koji u najkraćem mogućem roku o tome obavještava zastupnike na plenarnoj sjednici;\n\r\
\n\r\
-   ako u roku od 24 sata nakon objave u Parlamentu klub zastupnika ili zastupnici koji dosežu barem niski prag ulože prigovor na preporuku, ona se stavlja na glasovanje;\n\r\
\n\r\
-   ako u istom roku nema prigovora, predložena preporuka smatra se prihvaćenom;\n\r\
\n\r\
-   nakon što se takva preporuka usvoji, nisu dopušteni daljnji prijedlozi prigovora na delegirani akt.\n\r\
\n\r\
7.   Nadležni odbor može, u skladu s odredbama temeljnog zakonodavnog akta, Parlamentu podnijeti prijedlog rezolucije u kojemu u cijelosti ili djelomično povlači delegaciju ovlasti ili se protivi prešutnom produljenju delegacije ovlasti.\n\r\
\n\r\
U skladu s člankom 290. stavkom 2. drugim podstavkom Ugovora o funkcioniranju Europske unije, za odluku o povlačenju delegacije ovlasti potrebni su glasovi većine zastupnika u Parlamentu.\n\r\
\n\r\
8.   Predsjednik obavještava Vijeće i Komisiju o stajalištima koja su usvojena u skladu s ovim člankom."
},
{
'id': 106,
'title': 'Članak 106. : Provedbeni akti i mjere',
'text': "1.   Kad Komisija Parlamentu pošalje nacrt provedbenog akta ili mjere, predsjednik ga upućuje odboru nadležnom za temeljni zakonodavni akt, koji može odlučiti odrediti jednoga od svojih članova za razmatranje jednog ili više nacrta provedbenih akata ili mjera.\n\r\
\n\r\
2.   Nadležni odbor može podnijeti Parlamentu obrazloženi prijedlog rezolucije u kojem navodi da nacrt provedbenog akta ili mjera premašuje provedbene ovlasti predviđene temeljnim zakonodavnim aktom ili da iz drugih razloga nije u skladu s pravom Unije.\n\r\
\n\r\
3.   Prijedlog rezolucije može sadržavati zahtjev Komisiji da povuče nacrt provedbenog akta ili mjere, da ih izmijeni u skladu s prigovorima Parlamenta ili da podnese novi zakonodavni prijedlog. Predsjednik obavještava Vijeće i Komisiju o usvojenom stajalištu.\n\r\
\n\r\
4.   Ako su provedbene mjere koje predvidi Komisija obuhvaćene regulatornim postupkom s kontrolom predviđenim Odlukom Vijeća 1999/468/EZ(1), primjenjuju se sljedeće dodatne odredbe:\n\r\
\n\r\
(a)   vrijeme za nadzor počinje teći od trenutka kad je nacrt provedbene mjere podnesen Parlamentu na svim službenim jezicima. Kad se primjenjuju skraćeni rokovi kao što je predviđeno člankom 5.a stavkom 5. točkom (b) Odluke 1999/468/EZ i u hitnim slučajevima predviđenima člankom 5.a stavkom 6. te Odluke, vrijeme za nadzor, osim ako predsjednik nadležnog odbora ne uloži prigovor, počinje teći od dana kad je Parlament primio konačni nacrt provedbene mjere u jezičnim verzijama koje su podnesene članovima odbora osnovanog u skladu s tom Odlukom. Članak 158. ne primjenjuje se u dva slučaja navedena u prethodnoj rečenici;\n\r\
\n\r\
(b)   ako se nacrt provedbenih mjera temelji na stavcima 5. ili 6. članka 5.a Odluke 1999/468/EZ kojima se predviđaju skraćeni rokovi za protivljenje Parlamenta, predsjednik nadležnog odbora može podnijeti prijedlog rezolucije u kojem se izražava protivljenje usvajanju nacrta mjera u slučaju da se odbor nije mogao sastati u utvrđenom roku;\n\r\
\n\r\
(c)   Parlament odlukom većine svojih zastupnika može donijeti rezoluciju u kojoj se izražava protivljenje usvajanju nacrta provedbene mjere i u kojoj se navodi da se nacrtom mjera prekoračuju provedbene ovlasti predviđene temeljnim aktom, da nije usklađen s ciljem ili sadržajem temeljnog akta ili da se njime ne poštuju načela supsidijarnosti ili proporcionalnosti;\n\r\
\n\r\
   Ako u razdoblju od 10 radnih dana prije početka sjednice tijekom koje srijeda pada prije datuma isteka roka za protivljenje usvajanju nacrta provedbene mjere i najbliža mu je nadležni odbor ne podnese prijedlog rezolucije, klub zastupnika ili zastupnici koji dosežu barem niski prag mogu podnijeti prijedlog rezolucije o predmetu koji treba uvrstiti u dnevni red gore navedene sjednice.\n\r\
\n\r\
(d)   ako nadležni odbor obrazloženim pismom preporuči predsjedniku Konferencije predsjednika odbora da Parlament izjavi da nema prigovora na predloženu mjeru prije isteka redovnog roka predviđenog člankom 5.a stavkom 3. točkom (c) i/ili člankom 5.a stavkom 4. točkom (e) Odluke 1999/468/EZ, primjenjuje se postupak utvrđen člankom 105. stavkom 6.(2).\n\r\
\n\r\
\n\r\
(1)	Odluka Vijeća 1999/468/EZ od 28. lipnja 1999. o utvrđivanju postupaka za izvršavanje provedbenih ovlasti dodijeljenih Komisiji (SL L 184, 17.7.1999., str. 23.).\n\r\
(2)	Članak 106. stavak 4. briše se iz Poslovnika čim regulatorni postupak s kontrolom bude uklonjen iz važećeg zakonodavstva."
},
{
'id': 107,
'title': 'Članak 107. : Razmatranje u skladu s postupkom s pridruženim odborima ili postupkom sa zajedničkim odborima',
'text': "1.   Ako Parlament usvoji temeljni zakonodavni akt u skladu s postupkom predviđenim u članku 54., na razmatranje delegiranih akata i nacrta provedbenih akata ili mjera primjenjuju se sljedeće dodatne odredbe:\n\r\
\n\r\
-   delegirani akt ili nacrt provedbenog akta ili mjere prosljeđuje se nadležnom odboru i pridruženom odboru;\n\r\
\n\r\
-   predsjednik nadležnog odbora određuje rok u kojemu pridruženi odbor može sastaviti prijedloge o predmetima koji su u njegovoj isključivoj nadležnosti ili u zajedničkoj nadležnosti tih dvaju odbora;\n\r\
\n\r\
-    ako su delegirani akt ili nacrt provedbenog akta ili mjere uglavnom u isključivoj nadležnosti pridruženog odbora, nadležni odbor prihvaća njegove prijedloge bez glasovanja; u suprotnom, predsjednik Parlamenta može ovlastiti pridruženi odbor da podnese prijedlog rezolucije na plenarnoj sjednici.\n\r\
\n\r\
2.   Ako Parlament usvoji temeljni zakonodavni akt u skladu s postupkom predviđenim u članku 55., na razmatranje delegiranih akata i nacrta provedbenih akata ili mjera primjenjuju se sljedeće dodatne odredbe:\n\r\
\n\r\
-   nakon primitka delegiranog akta ili nacrta provedbenog akta ili mjere predsjednik određuje nadležni odbor ili odbore koji su zajednički nadležni za njegovo razmatranje, u skladu s kriterijima utvrđenima u članku 55. i mogućim dogovorima između predsjednika dotičnih odbora;\n\r\
\n\r\
-   ako su delegirani akt ili nacrt provedbenog akta ili mjere proslijeđeni na razmatranje u skladu s postupkom sa zajedničkim odborima, svaki odbor može zahtijevati sazivanje zajedničke sjednice za razmatranje prijedloga rezolucije. Ako predsjednici dotičnih odbora ne postignu dogovor, predsjednik Konferencije predsjednika odbora saziva zajedničku sjednicu."
},
{
'id': 108,
'title': 'Članak 108. : Međunarodni sporazumi',
'text': "1.   Kad se namjeravaju započeti pregovori o sklapanju, obnovi ili izmjeni međunarodnog sporazuma, nadležni odbor može sastaviti izvješće ili na drugi način nadgledati tu pripremnu fazu. Nadležni odbor o toj odluci obavještava Konferenciju predsjednika odbora.\n\r\
\n\r\
2.   Nadležni odbor u najkraćem mogućem roku doznaje od Komisije pravnu osnovu odabranu za sklapanje međunarodnih sporazuma iz stavka 1. Nadležni odbor provjerava odabranu pravnu osnovu u skladu s člankom 39.\n\r\
\n\r\
3.   Parlament može na prijedlog nadležnog odbora, kluba zastupnika ili zastupnika koji dosežu barem niski prag tražiti od Vijeća da ne odobri početak pregovora sve dok Parlament ne zauzme stajalište o predloženom pregovaračkom mandatu na temelju izvješća nadležnog odbora.\n\r\
\n\r\
4.   U svakoj fazi pregovora te od zaključivanja pregovora do sklapanja međunarodnog sporazuma Parlament može, na temelju izvješća nadležnog odbora, koje je odbor sastavio o vlastitoj inicijativi, ili nakon razmatranja mogućih relevantnih prijedloga koje su podnijeli klub zastupnika ili zastupnici koji dosežu barem niski prag, prihvatiti preporuke za Vijeće, Komisiju ili potpredsjednika Komisije / Visokog predstavnika Unije za vanjske poslove i sigurnosnu politiku te zahtijevati da se one uzmu u obzir prije sklapanja tog međunarodnog sporazuma.\n\r\
\n\r\
5.   Zahtjeve koje Vijeće podnese Parlamentu u svrhu dobivanja njegove suglasnosti ili njegova mišljenja predsjednik upućuje nadležnom odboru na razmatranje u skladu s člankom 99. ili člankom 47. stavkom 1.\n\r\
\n\r\
6.   U bilo kojem trenutku prije nego što Parlament glasuje o zahtjevu za suglasnost ili mišljenje, nadležni odbor ili najmanje jedna desetina zastupnika u Parlamentu mogu predložiti da Parlament traži mišljenje Suda o usklađenosti međunarodnog sporazuma s Ugovorima.\n\r\
\n\r\
Prije nego što Parlament glasuje o tom prijedlogu, predsjednik može zatražiti mišljenje odbora nadležnog za pravna pitanja, koji obavještava Parlament o svojim zaključcima.\n\r\
\n\r\
Ako Parlament prihvati prijedlog da se traži mišljenje Suda, glasovanje o zahtjevu za suglasnost ili mišljenje odgađa se dok Sud ne dostavi svoje mišljenje.\n\r\
\n\r\
7.   Kad Vijeće od Parlamenta zahtijeva suglasnost za sklapanje, obnovu ili izmjenu međunarodnog sporazuma, on odlučuje jedinstvenim glasovanjem u skladu s člankom 99.\n\r\
\n\r\
Ako Parlament odbije dati svoju suglasnost, predsjednik obavještava Vijeće da se predmetni sporazum ne može sklopiti, obnoviti ili izmijeniti.\n\r\
\n\r\
Ne dovodeći u pitanje članak 99. stavak 3., Parlament na temelju preporuke nadležnog odbora može odlučiti odgoditi svoju odluku o postupku suglasnosti na razdoblje od najduže jedne godine.\n\r\
\n\r\
8.   Kad Vijeće od Parlamenta traži mišljenje o sklapanju, obnavljanju ili izmjeni međunarodnog sporazuma, amandmani na tekst sporazuma nisu dopušteni. Ne dovodeći u pitanje članak 170. stavak 1., dopušteni su amandmani na nacrt odluke Vijeća.\n\r\
\n\r\
Ako je mišljenje koje Parlament donese negativno, predsjednik traži od Vijeća da ne sklopi dotični sporazum.\n\r\
\n\r\
9.   Predsjednici i izvjestitelji nadležnog odbora i pridruženih odbora, ako ih ima, zajednički provjeravaju da u skladu s člankom 218. stavkom 10. Ugovora o funkcioniranju Europske unije Vijeće, Komisija i potpredsjednik Komisije / Visoki predstavnik Unije za vanjske poslove i sigurnosnu politiku u svim fazama priprema za pregovore, pregovora i sklapanja međunarodnih sporazuma, podnose Parlamentu neposredne, redovite i potpune informacije, ako je potrebno uz jamstvo povjerljivosti, uključujući informacije o nacrtu i konačnom usvojenom tekstu pregovaračkih smjernica te informacije o provedbi tih sporazuma."
},
{
'id': 109,
'title': 'Članak 109. : Privremene primjene ili odgode primjene međunarodnih sporazuma ili utvrđivanja stajališta Unije u tijelu osnovanom međunarodnim sporazumom',
'text': "Ako Komisija ili potpredsjednik Komisije /Visoki predstavnik Unije za vanjske poslove i sigurnosnu politiku obavijesti Parlament i Vijeće o svojoj namjeri da predloži privremenu primjenu ili odgodu primjene međunarodnog sporazuma, Parlament može pozvati Vijeće, Komisiju ili potpredsjednika Komisije / Visokog predstavnika Unije za vanjske poslove i sigurnosnu politiku da daju izjavu nakon koje slijedi rasprava. Parlament može izdati preporuke na temelju izvješća nadležnog odbora ili u skladu s člankom 113., koje prije svega mogu obuhvaćati zahtjev Vijeću da se sporazum privremeno ne primjenjuje dok Parlamenta ne da svoju suglasnost.\n\r\
\n\r\
Isti se postupak primjenjuje i kad Komisija ili potpredsjednik / Visoki predstavnik predloži stajališta koja će se u ime Unije zauzeti u tijelu osnovanom međunarodnim sporazumom."
},
{
'id': 110,
'title': 'Članak 110. : Posebni predstavnici',
'text': "1.   Ako Vijeće namjerava imenovati posebnog predstavnika na temelju članka 33. Ugovora o Europskoj uniji, predsjednik na zahtjev nadležnog odbora poziva Vijeće na davanje izjave i odgovaranje na pitanja koja se odnose na mandat, ciljeve i druga bitna pitanja vezana uz zadaće i ulogu posebnog predstavnika.\n\r\
\n\r\
2.   Nakon imenovanja, ali prije preuzimanja dužnosti, posebni predstavnik može biti pozvan dati izjavu i odgovoriti na pitanja pred nadležnim odborom.\n\r\
\n\r\
3.   U roku od dva mjeseca nakon tog saslušanja nadležni odbor može izdati preporuke za Vijeće, Komisiju ili potpredsjednika Komisije / Visokog predstavnika Unije za vanjske poslove i sigurnosnu politiku koje se izravno odnose na imenovanje.\n\r\
\n\r\
4.   Posebni predstavnik poziva se da u potpunosti i redovito izvještava Parlament o praktičnoj provedbi svojeg mandata."
},
{
'id': 111,
'title': 'Članak 111. : Međunarodno zastupanje',
'text': "1.   Prije imenovanja kandidat za voditelja delegacije Unije kandidat može biti pozvan dati izjavu i odgovoriti na pitanja pred nadležnim odborom.\n\r\
\n\r\
2.   U roku od dva mjeseca nakon saslušanja predviđenog stavkom 1. nadležni odbor može po potrebi donijeti rezoluciju ili dati preporuku koja se izravno odnosi na imenovanje."
},
{
'id': 112,
'title': 'Članak 112. : (Briše se.)',
'text': ""
},
{
'id': 113,
'title': 'Članak 113. : Preporuke o vanjskim politikama Europske unije',
'text': "1.   Nadležni odbor može izraditi nacrt preporuka za Vijeće, Komisiju ili potpredsjednika Komisije / Visokog predstavnika Unije za vanjske poslove i sigurnosnu politiku o temama iz glave V. Ugovora o Europskoj uniji (Vanjsko djelovanje Unije) ili u slučajevima kad međunarodni sporazum obuhvaćen područjem primjene članka 108. nije upućen Parlamentu ili Parlament nije obaviješten o tome u skladu s člankom 109.\n\r\
\n\r\
2.   U hitnim slučajevima predsjednik Parlamenta može odobriti hitni sastanak dotičnog odbora.\n\r\
\n\r\
3.   Tijekom postupka prihvaćanja tih nacrta preporuka u fazi razmatranja u odboru nužno je pisani tekst staviti na glasovanje.\n\r\
\n\r\
4.   U hitnim slučajevima iz stavka 2. članak 158. ne primjenjuje se u fazi razmatranja u odboru i dopuštaju se usmeni amandmani. Zastupnici ne smiju ulagati prigovor na usmene amandmane o kojima se glasuje u odboru.\n\r\
\n\r\
5.   Nacrt preporuka koje je sastavio odbor uvrštava se u dnevni red sljedeće sjednice. U hitnim slučajevima, o kojima odlučuje predsjednik, preporuke se mogu uvrstiti u dnevni red aktualne sjednice.\n\r\
\n\r\
6.   Preporuke se smatraju usvojenima, osim ako prije početka sjednice klub zastupnika ili zastupnici koji dosežu barem niski prag ne ulože pisani prigovor. Ako se uloži takav prigovor, nacrt preporuka koji je sastavio odbor uvrštava se na dnevni red iste sjednice. O tim se preporukama raspravlja te se glasuje o svim amandmanima koje su podnijeli klub zastupnika ili zastupnici koji dosežu barem niski prag.\n\r\
\n\r\
Članak 113.a : Savjetovanje s Parlamentom i izvještavanje Parlamenta u okviru zajedničke vanjske i sigurnosne politike\n\r\
\n\r\
1.   Ako se od Parlamenta traži mišljenje u skladu s člankom 36. Ugovora o Europskoj uniji, predmet se upućuje nadležnom odboru, koji može sastaviti nacrt preporuka u skladu s člankom 113.\n\r\
\n\r\
2.   Odgovarajući odbori nastoje osigurati da ih potpredsjednik Komisije / Visoki predstavnik Unije za vanjske poslove i sigurnosnu politiku redovito i pravodobno izvještava o razvoju i provedbi zajedničke vanjske i sigurnosne politike Unije, o predviđenim troškovima kad god se u okviru te politike donese odluka za koju su potrebni izdaci, te o svim drugim financijskim pitanjima vezanima uz provedbu mjera iz područja te politike. Iznimno, na zahtjev potpredsjednika / Visokog predstavnika odbor može održati sjednicu zatvorenu za javnost.\n\r\
\n\r\
3.   Dvaput godišnje održava se rasprava o savjetodavnom dokumentu koji sastavlja potpredsjednik / Visoki predstavnik o glavnim aspektima i temeljnim smjernicama zajedničke vanjske i sigurnosne politike, uključujući zajedničku sigurnosnu i obrambenu politiku i financijske posljedice na proračun Unije. Primjenjuju se postupci utvrđeni člankom 123.\n\r\
\n\r\
4.   Potpredsjednik / Visoki predstavnik poziva se na svaku plenarnu raspravu koja uključuje vanjsku, sigurnosnu ili obrambenu politiku."
},
{
'id': 114,
'title': 'Članak 114. : Kršenje ljudskih prava',
'text': "Na svakoj sjednici svaki od nadležnih odbora može, bez traženja odobrenja, podnijeti prijedlog rezolucije vezan uz slučajeve kršenja ljudskih prava na temelju postupka utvrđenog člankom 113. stavcima 5. i 6."
},
{
'id': 115,
'title': 'Članak 115. : Transparentnost aktivnosti Parlamenta',
'text': "1.   Parlament osigurava maksimalnu transparentnost u obavljanju svojih aktivnosti u skladu s drugim stavkom članka 1. Ugovora o Europskoj uniji, člankom 15. Ugovora o funkcioniranju Europske unije i člankom 42. Povelje Europske unije o temeljnim pravima.\n\r\
\n\r\
2.   Rasprave u Parlamentu su javne.\n\r\
\n\r\
3.   Sjednice odbora u pravilu su otvorene za javnost. Međutim, odbori mogu odlučiti, najkasnije prilikom usvajanja dnevnog reda sjednice, podijeliti dnevni red na točke koje su otvorene i točke koje su zatvorene za javnost. No ako je sjednica zatvorena za javnost, odbor može odlučiti omogućiti javni pristup dokumentima sa sjednice."
},
{
'id': 116,
'title': 'Članak 116. : Javni pristup dokumentima',
'text': "1.   Svaki građanin Unije i svaka fizička ili pravna osoba koja boravi ili ima sjedište u jednoj od država članica imaju pravo pristupa dokumentima Parlamenta u skladu s člankom 15. Ugovora o funkcioniranju Europske unije. Takav pristup dokumentima podliježe  načelima, uvjetima i ograničenjima utvrđenima Uredbom (EZ) br. 1049/2001 Europskog parlamenta i Vijeća.\n\r\
\n\r\
Pristup dokumentima Parlamenta na isti je način u najvećoj mogućoj mjeri omogućen drugim fizičkim ili pravnim osobama.\n\r\
\n\r\
2.   U svrhu pristupa dokumentima, izraz „dokumenti Parlamenta” znači svaki sadržaj u smislu članka 3. točke (a) Uredbe (EZ) br. 1049/2001 koji su sastavili ili primili obnašatelji dužnosti u Parlamentu u smislu glave I. poglavlja 2. ovog Poslovnika, tijela Parlamenta, odbori, ili međuparlamentarna izaslanstva ili Glavno tajništvo Parlamenta.\n\r\
\n\r\
U skladu s člankom 4. Statuta zastupnika u Europskom parlamentu, u svrhu pristupa dokumentima, dokumenti koje su sastavili pojedini zastupnici ili klubovi zastupnika dokumenti su Parlamenta samo ako su podneseni u skladu s Poslovnikom.\n\r\
\n\r\
Predsjedništvo utvrđuje pravila kojima osigurava da se svi dokumenti Parlamenta unesu u registar.\n\r\
\n\r\
3.   Parlament uspostavlja internetske stranice javnog registra svojih dokumenata. Zakonodavni dokumenti i neke druge kategorije dokumenata izravno su, u skladu s Uredbom (EZ) br. 1049/2001, dostupni preko internetskih stranica javnog registra Parlamenta. Upute na druge dokumente Parlamenta u najvećoj se mogućoj mjeri uključuju na internetske stranice javnog registra Parlamenta.\n\r\
\n\r\
Kategorije dokumenata koji su izravno dostupni preko internetskih stranica javnog registra Parlamenta navode se u popisu koji usvaja Predsjedništvo i koji se objavljuje na internetskim stranicama javnog registra Parlamenta. Taj popis ne ograničava pravo pristupa dokumentima koji nisu obuhvaćeni navedenim kategorijama; ti dokumenti mogu biti dostupni na pisani zahtjev u skladu s Uredbom (EZ) br. 1049/2001.\n\r\
\n\r\
Predsjedništvo donosi pravila o pristupu dokumentima u skladu s Uredbom (EZ) br. 1049/2001, koja se objavljuju u Službenom listu Europske unije.\n\r\
\n\r\
4.   Predsjedništvo imenuje tijela nadležna za obradu prvotnih zahtjeva (članak 7. Uredbe (EZ) br. 1049/2001) te za donošenje odluke o potvrdnim zahtjevima (članak 8. te uredbe) i o zahtjevima za pristup dokumentima osjetljive prirode (članak 9. te uredbe).\n\r\
\n\r\
5.   Jedan od potpredsjednika nadležan je za nadzor obrade zahtjeva za pristup dokumentima.\n\r\
\n\r\
6.   Predsjedništvo donosi godišnje izvješće iz članka 17. stavka 1. Uredbe (EZ) br. 1049/2001.\n\r\
\n\r\
7.   Nadležni odbor Parlamenta redovito ispituje transparentnost aktivnosti Parlamenta i podnosi izvješće sa svojim zaključcima i preporukama na plenarnoj sjednici.\n\r\
\n\r\
Nadležni odbor također može pregledavati i ocjenjivati izvješća koja druge institucije i agencije donesu u skladu s člankom 17. Uredbe (EZ) br. 1049/2001.\n\r\
\n\r\
8.   Konferencija predsjednika imenuje predstavnike Parlamenta u međuinstitucijskom odboru osnovanom u skladu s člankom 15. stavkom 2. Uredbe (EZ) br. 1049/2001.\n\r\
\n\r\
Članak 116.a : Pristup Parlamentu\n\r\
\n\r\
1.   Iskaznice za pristup za zastupnike, asistente zastupnika i treće osobe izdaju se na temelju pravila koja donosi Predsjedništvo. Tim se pravilima također uređuje korištenje i oduzimanje iskaznica za pristup.\n\r\
\n\r\
2.   Iskaznice se ne izdaju osobama u pratnji zastupnika na koje se primjenjuje Sporazum Europskog parlamenta i Europske komisije o registru transparentnosti.\n\r\
\n\r\
3.   Subjekti navedeni u registru transparentnosti i njihovi predstavnici kojima su izdane dugoročne iskaznice za pristup Europskom parlamentu moraju poštovati:\n\r\
\n\r\
-   Kodeks ponašanja za osobe upisane u registar, priložen sporazumu;\n\r\
\n\r\
-   postupke i ostale obveze utvrđene sporazumom i\n\r\
\n\r\
-   odredbe kojima se provodi ovaj članak.\n\r\
\n\r\
Ne dovodeći u pitanje primjenjivost općih pravila kojima se uređuje oduzimanje ili privremena deaktivacija dugoročnih iskaznica za pristup i osim ako ne postoje važni razlozi protiv toga, glavni tajnik uz odobrenje kvestora oduzima ili deaktivira dugoročnu iskaznicu za pristup ako je nositelj ispisan iz registra transparentnosti zbog kršenja Kodeksa ponašanja za osobe upisane u registar ili je kriv za ozbiljno kršenje obveza iz ovog stavka ili je odbio odazvati se službenom pozivu na saslušanje ili sjednicu odbora ili surađivati s istražnim odborom i nije ponudio zadovoljavajuće obrazloženje.\n\r\
\n\r\
4.   Kvestori mogu utvrditi u kojoj se mjeri Kodeks ponašanja iz stavka 3. primjenjuje na osobe na koje se, iako posjeduju dugoročnu iskaznicu za pristup, sporazum ne primjenjuje.\n\r\
\n\r\
5.   Predsjedništvo na prijedlog glavnog tajnika utvrđuje mjere potrebne za provedbu registra transparentnosti, sukladno odredbama sporazuma o osnivanju navedenog registra."
},
{
'id': 117,
'title': 'Članak 117. : Izbor predsjednika Komisije',
'text': "1.   Kad Europsko vijeće predloži kandidata za predsjednika Komisije, predsjednik poziva kandidata da pred Parlamentom da izjavu i predstavi svoje političke smjernice. Nakon izjave slijedi rasprava.\n\r\
\n\r\
Europsko vijeće poziva se da sudjeluje u raspravi.\n\r\
\n\r\
2.   U skladu s člankom 17. stavkom 7. Ugovora o Europskoj uniji Parlament bira predsjednika Komisije većinom svih zastupnika.\n\r\
\n\r\
Glasuje se tajno.\n\r\
\n\r\
3.   Ako je kandidat izabran, predsjednik o tome obavještava Vijeće tražeći od njega i od izabranog predsjednika Komisije da suglasno predlože kandidate za različita mjesta povjerenika.\n\r\
\n\r\
4.   Ako kandidat ne dobije potrebnu većinu, predsjednik poziva Europsko vijeće da u roku od mjesec dana predloži novog kandidata za izbor u skladu s istim postupkom."
},
{
'id': 118,
'title': 'Članak 118. : Izbor Komisije',
'text': "1.   Predsjednik poziva izabranog predsjednika Komisije da obavijesti Parlament o raspodjeli  dužnosti (resora) u predloženom kolegiju povjerenika u skladu s političkim smjernicama izabranog predsjednika.\n\r\
\n\r\
2.   Nakon savjetovanja s izabranim predsjednikom Komisije predsjednik poziva kandidate koje su izabrani predsjednik Komisije i Vijeće predložili za različita mjesta povjerenika da se predstave pred odgovarajućim odborima ili tijelima, ovisno o njihovim predviđenim područjima nadležnosti.\n\r\
\n\r\
3.   Saslušanja održavaju odbori.\n\r\
\n\r\
Saslušanje se iznimno može održati u drukčijem obliku ako kandidat za povjerenika ima odgovornosti koje su primarno horizontalne, pod uvjetom da u tom saslušanju sudjeluju nadležni odbori. Saslušanja su otvorena za javnost.\n\r\
\n\r\
4.   Nadležni odbor ili odbori pozivaju kandidata za povjerenika na davanje izjave i odgovaranje na pitanja. Saslušanja se organiziraju tako da omoguće kandidatima za povjerenike da Parlamentu iznesu sve bitne informacije. Odredbe koje se odnose na organizaciju takvih saslušanja utvrđene su u prilogu ovom Poslovniku(1).\n\r\
\n\r\
5.   Izabrani predsjednik poziva se da predstavi kolegij povjerenika i njihov program na sjednici Parlamenta na koju su pozvani predsjednik Europskog vijeća i predsjednik Vijeća. Nakon izjave slijedi rasprava.\n\r\
\n\r\
6.   Kako bi zaključili raspravu, klub zastupnika ili zastupnici koji dosežu barem niski prag mogu podnijeti prijedlog rezolucije. Primjenjuje se članak 123. stavci od 3. do 8.\n\r\
\n\r\
7.   Nakon glasovanja o prijedlogu rezolucije Parlament izabire ili odbija Komisiju većinom danih glasova, poimenično. Parlament može odgoditi glasovanje do sljedeće dnevne sjednice.\n\r\
\n\r\
8.   Predsjednik obavještava Vijeće o izboru ili odbijanju Komisije.\n\r\
\n\r\
9.   U slučaju znatne promjene resora ili promjene sastava Komisije tijekom trajanja mandata Komisije dotični povjerenici ili drugi kandidati za povjerenike pozvani su da sudjeluju u saslušanju koje se održava u skladu sa stavcima 3. i 4.\n\r\
\n\r\
10.   U slučaju promjene resora povjerenika ili financijskih interesa povjerenika tijekom njegova mandata Parlament u skladu s Prilogom VI. pregledava te promjene.\n\r\
\n\r\
Ako se tijekom mandata povjerenika utvrdi sukob interesa, a predsjednik Komisije pritom ne primijeni preporuke Parlamenta za razrješenje sukoba interesa, Parlament može od predsjednika Komisije zatražiti da uskrati povjerenje tom povjereniku u skladu sa stavkom 5. Okvirnoga sporazuma o odnosima između Europskog parlamenta i Europske komisije te da, po potrebi, poduzme mjere kako bi se dotičnom povjereniku uskratilo pravo na mirovinu ili druge zamjenske povlastice u skladu s člankom 245. Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
\n\r\
(1)	Vidi Prilog VI.\n\r\
\n\r\
\n\r\
Članak 118.a : Višegodišnje planiranje programa\n\r\
\n\r\
Nakon imenovanja nove Komisije Parlament, Vijeće i Komisija u skladu sa stavkom 5. Međuinstitucijskog sporazuma o boljoj izradi zakonodavstva razmjenjuju mišljenja i dogovaraju se o zajedničkim zaključcima o višegodišnjem planiranju programa.\n\r\
\n\r\
U tu svrhu te prije pregovora s Vijećem i Komisijom o zajedničkim zaključcima o višegodišnjem planiranju programa, predsjednik održava razmjenu mišljenja s Konferencijom predsjednika o glavnim ciljevima i prioritetima politike za novo zakonodavno razdoblje. Tijekom te razmjene mišljenja uzimaju se u obzir, među ostalim, prioriteti koje je predstavio izabrani predsjednik Komisije te odgovori kandidata za povjerenike dani tijekom saslušanja iz članka 118.\n\r\
\n\r\
Prije potpisivanja zajedničkih zaključaka predsjednik traži odobrenje Konferencije predsjednika."
},
{
'id': 119,
'title': 'Članak 119. : Prijedlog za izglasavanje nepovjerenja Komisiji',
'text': "1.   Jedna desetina zastupnika u Parlamentu može podnijeti predsjedniku prijedlog za izglasavanje nepovjerenja Komisiji. Ako se o prijedlogu za izglasavanje nepovjerenja glasovalo tijekom prethodna dva mjeseca, novi prijedlog koji podnese manje od jedne petine zastupnika u Parlamentu nije dopušten.\n\r\
\n\r\
2.   Prijedlog se treba zvati „prijedlog za izglasavanje nepovjerenja” i treba biti obrazložen. Prosljeđuje ga se Komisiji.\n\r\
\n\r\
3.   Čim ga primi, predsjednik objavljuje zastupnicima da je podnesen prijedlog za izglasavanje nepovjerenja.\n\r\
\n\r\
4.   Rasprava o izglasavanju nepovjerenja smije se održati tek nakon proteka 24 sata od objave zastupnicima primitka prijedloga za izglasavanje nepovjerenja.\n\r\
\n\r\
5.   O prijedlogu se glasuje poimenično, najmanje 48 sati nakon početka rasprave.\n\r\
\n\r\
6.   Ne dovodeći u pitanje stavke 4. i 5., rasprava i glasovanje odvijaju se najkasnije tijekom prve sljedeće sjednice nakon podnošenja prijedloga.\n\r\
\n\r\
7.   U skladu s člankom 234. Ugovora o funkcioniranju Europske unije prijedlog za izglasavanje nepovjerenja prihvaća se ako dobije dvotrećinsku većinu danih glasova, koji ujedno predstavljaju većinu zastupnika u Parlamentu. O rezultatu glasovanja obavještavaju se predsjednik Vijeća i predsjednik Komisije."
},
{
'id': 120,
'title': 'Članak 120. : Imenovanje sudaca i nezavisnih odvjetnika Suda Europske unije',
'text': "Parlament na prijedlog nadležnog odbora imenuje svojeg kandidata u sedmeročlano vijeće čija je zadaća nadgledati podobnost kandidata za obnašanje dužnosti suca ili nezavisnog odvjetnika Suda i Općeg suda. Kandidata kojeg želi predložiti nadležni odbor odabire glasovanjem običnom većinom. Koordinatori tog odbora u tu svrhu sastavljaju uži popis kandidata."
},
{
'id': 121,
'title': 'Članak 121. : Imenovanje članova Revizorskog suda',
'text': "1.   Predloženi kandidati za članove Revizorskog suda pozivaju se dati izjavu pred nadležnim odborom i odgovoriti na pitanja njegovih članova. Odbor tajno i odvojeno glasuje o svakoj kandidaturi.\n\r\
\n\r\
2.   Nadležni odbor Parlamentu daje preporuku o prihvaćanju kandidature.\n\r\
\n\r\
3.   Na plenarnoj sjednici glasuje se u roku od dva mjeseca od primitka kandidature osim ako Parlament na zahtjev nadležnog odbora, kluba zastupnika ili zastupnika koji dosežu barem niski prag ne odluči drukčije. Parlament tajno i odvojeno glasuje o svakoj kandidaturi.\n\r\
\n\r\
4.   Ako je mišljenje koje Parlament donese o pojedinoj kandidaturi negativno, predsjednik traži od Vijeća da povuče kandidaturu i Parlamentu podnese novu."
},
{
'id': 122,
'title': 'Članak 122. : Imenovanje članova izvršnog odbora Europske središnje banke',
'text': "1.   Predloženi kandidat za predsjednika, potpredsjednika ili člana izvršnog odbora Europske središnje banke poziva se dati izjavu pred nadležnim odborom i odgovoriti na pitanja njegovih članova.\n\r\
\n\r\
2.   Nadležni odbor Parlamentu daje preporuku o prihvaćanju ili odbijanju kandidature.\n\r\
\n\r\
3.   Glasuje se u roku od dva mjeseca od primitka kandidature osim ako Parlament na zahtjev nadležnog odbora, kluba zastupnika ili zastupnika koji dosežu barem niski prag ne odluči drukčije. Parlament tajno i odvojeno glasuje o svakoj kandidaturi.\n\r\
\n\r\
4.   Ako je mišljenje koje Parlament donese o pojedinoj kandidaturi negativno, predsjednik traži da se kandidatura povuče i da se Parlamentu podnese nova.\n\r\
\n\r\
Članak 122.a : Imenovanja u tijela za gospodarsko upravljanje\n\r\
\n\r\
1.   Ovaj članak primjenjuje se na imenovanje:\n\r\
\n\r\
-   predsjednika i potpredsjednika Nadzornog odbora Jedinstvenog nadzornog mehanizma;\n\r\
\n\r\
-   predsjednika, potpredsjednika i stalne članove Jedinstvenog odbora za sanaciju Jedinstvenog sanacijskog mehanizma;\n\r\
\n\r\
-   predsjednika i izvršnih direktora europskog nadzornog tijela (Europskog nadzornog tijela za bankarstvo, Europskog nadzornog tijela za vrijednosne papire i tržišta kapitala, Europskog nadzornog tijela za osiguranje i strukovno mirovinsko osiguranje) i\n\r\
\n\r\
-   direktora i zamjenika direktora Europskog fonda za strateška ulaganja.\n\r\
\n\r\
2.   Svaki kandidat poziva se da pred nadležnim odborom da izjavu i odgovori na pitanja njegovih članova.\n\r\
\n\r\
3.   Nadležni odbor daje preporuku Parlamentu o svakom prijedlogu za imenovanje.\n\r\
\n\r\
4.   Glasuje se u roku od dva mjeseca od primitka prijedloga za imenovanje, osim ako Parlament na zahtjev nadležnog odbora, kluba zastupnika ili zastupnika koji dosežu barem niski prag ne odluči drukčije. Parlament o svakom imenovanju glasuje zasebno tajnim glasovanjem.\n\r\
\n\r\
5.   Ako je odluka koju Parlament donese o pojedinom prijedlogu za imenovanje negativna, predsjednik traži da se prijedlog povuče i Parlamentu podnese novi."
},
{
'id': 123,
'title': 'Članak 123. : Izjave Komisije, Vijeća i Europskog vijeća',
'text': "1.   Članovi Komisije, Vijeća i Europskog vijeća mogu u bilo kojem trenutku tražiti od predsjednika Parlamenta dopuštenje za davanje izjave. Predsjednik Europskog vijeća daje izjavu nakon svakog sastanka tog tijela. Predsjednik Parlamenta odlučuje o tome kad se može dati izjava i hoće li nakon nje slijediti cjelovita rasprava ili razdoblje za kratka i jezgrovita pitanja zastupnika u trajanju od 30 minuta.\n\r\
\n\r\
2.   Kad u svoj dnevni red uvrštava izjavu s raspravom, Parlament odlučuje hoće li raspravu zaključiti rezolucijom. To ne čini ako je izvješće o istom predmetu predviđeno za istu ili sljedeću sjednicu osim ako predsjednik, zbog iznimnih razloga, ne predloži drukčije. Ako Parlament odluči zaključiti raspravu rezolucijom, odbor, klub zastupnika ili zastupnici koji dosežu barem niski prag mogu podnijeti prijedlog rezolucije.\n\r\
\n\r\
3.   O prijedlozima rezolucija glasuje se u što je moguće ranije vrijeme glasovanja. Predsjednik odlučuje o mogućim iznimkama. Dopuštena su obrazloženja glasovanja.\n\r\
\n\r\
4.   Zajednički prijedlog rezolucije zamjenjuje prijedloge rezolucija koje su prethodno podnijeli njihovi potpisnici, ali ne i one koje su podnijeli drugi odbori, klubovi zastupnika ili zastupnici.\n\r\
\n\r\
5.   Ako zajednički prijedlog rezolucije podnesu klubovi zastupnika koji čine nedvojbenu većinu, predsjednik može prvo staviti taj prijedlog na glasovanje.\n\r\
\n\r\
6.   Nakon donošenja rezolucije ne može se glasovati o daljnjim prijedlozima, osim ako predsjednik u iznimnim okolnostima ne odluči drukčije.\n\r\
\n\r\
7.   Autor ili autori prijedloga rezolucije podnesenog na temelju stavka 2. ili članka 135. stavka 2. imaju ga pravo povući prije konačnog glasovanja.\n\r\
\n\r\
8.   Klub, odbor ili isti broj zastupnika koji je potreban za podnošenje prijedloga mogu odmah preuzeti povučeni prijedlog rezolucije i ponovno ga podnijeti. Ovaj stavak i stavak 7. primjenjuju se i na rezolucije podnesene na temelju članaka 105. i 106."
},
{
'id': 124,
'title': 'Članak 124. : Objašnjenja odluka Komisije',
'text': "Predsjednik Parlamenta poziva predsjednika Komisije, povjerenika nadležnog za odnose s Europskim parlamentom ili, prema dogovoru, drugog povjerenika, da nakon svake sjednice Komisije Parlamentu daje izjavu u kojoj objašnjavaju glavne donesene odluke, osim ako zbog razloga u vezi s rasporedom ili zbog relativne političke važnosti teme Konferencija predsjednika ne odluči da to nije potrebno. Nakon izjave slijedi rasprava u trajanju od najmanje 30 minuta tijekom koje zastupnici mogu postavljati kratka i jezgrovita pitanja."
},
{
'id': 125,
'title': 'Članak 125. : Izjave Revizorskog suda',
'text': "1.   U okviru postupka davanja razrješnice ili rada Parlamenta na području proračunskog nadzora, predsjednik Revizorskog suda može biti pozvan dati izjavu Parlamentu kako bi predstavio primjedbe sadržane u godišnjem izvješću, posebnim izvješćima ili mišljenjima Suda ili kako bi objasnio program rada Suda.\n\r\
\n\r\
2.   Parlament može održati zasebnu raspravu o bilo kojem pitanju proizašlom iz tih izjava uz sudjelovanje Komisije i Vijeća, posebno u slučaju prijavljenih nepravilnosti u financijskom upravljanju."
},
{
'id': 126,
'title': 'Članak 126. : Izjave Europske središnje banke',
'text': "1.   Predsjednik Europske središnje banke poziva se da predstavi Parlamentu godišnje izvješće Banke o radu Europskog sustava središnjih banaka i o monetarnoj politici u prethodnoj i tekućoj godini.\n\r\
\n\r\
2.   Nakon predstavljanja slijedi opća rasprava.\n\r\
\n\r\
3.   Predsjednik Europske središnje banke poziva se na sjednice nadležnog odbora najmanje četiri puta godišnje radi davanja izjave i odgovaranja na pitanja.\n\r\
\n\r\
4.   Na svoj zahtjev ili na zahtjev Parlamenta, predsjednik, potpredsjednik i drugi članovi izvršnog odbora Europske središnje banke pozivaju se na dodatne sjednice.\n\r\
\n\r\
5.   Sastavlja se doslovno izvješće o postupcima iz stavaka 3. i 4."
},
{
'id': 127,
'title': 'Članak 127. : (Briše se.)',
'text': ""
},
{
'id': 128,
'title': 'Članak 128. : Pitanja za usmeni odgovor s raspravom',
'text': "1.   Odbor, klub zastupnika ili zastupnici koji dosežu barem niski prag mogu postaviti pitanja Vijeću, Komisiji ili potpredsjedniku Komisije / Visokom predstavniku Unije za vanjske poslove i sigurnosnu politiku, uz zahtjev da ih se uvrsti u dnevni red Parlamenta.\n\r\
\n\r\
Pitanja se podnose u pisanom obliku predsjedniku. Predsjednik ih odmah upućuje Konferenciji predsjednika.\n\r\
\n\r\
Konferencija predsjednika odlučuje hoće li pitanja biti uvrštena u prijedlog dnevnog reda u skladu s postupkom predviđenim u članku 149. Pitanja koja nisu uvrštena u prijedlog dnevnog reda Parlamenta u roku od tri mjeseca od podnošenja ne razmatraju se.\n\r\
\n\r\
2.   Pitanja Komisiji i potpredsjedniku Komisije / Visokom predstavniku Unije za vanjske poslove i sigurnosnu politiku upućuju se primatelju najmanje tjedan dana prije sjednice na čijem će se dnevnom redu pojaviti, a pitanja Vijeću najmanje tri tjedna prije tog dana.\n\r\
\n\r\
3.   Ako se pitanja odnose na zajedničku sigurnosnu i obrambenu politiku, rokovi predviđeni stavkom 2. se ne primjenjuju. Odgovor mora biti podnesen u odgovarajućem roku kako bi Parlament bio pravilno obaviješten.\n\r\
\n\r\
4.   Jedan od podnositelja može izložiti pitanje u Parlamentu. Primatelj odgovara na pitanje.\n\r\
\n\r\
5.   Članak 123. stavci od 2. do 8. u vezi s podnošenjem prijedloga rezolucija i glasovanjem o njima primjenjuju se na odgovarajući način."
},
{
'id': 129,
'title': 'Članak 129.',
'text': "1.   Na svakoj sjednici može se održati vrijeme za pitanja Komisiji u trajanju do 90 minuta koje se odnosi na jednu posebnu horizontalnu temu ili više njih koje utvrđuje Konferencija predsjednika jedan mjesec prije sjednice.\n\r\
\n\r\
2.   Povjerenici koje je Konferencija predsjednika pozvala da sudjeluju imaju resore povezane s posebnom horizontalnom temom ili više njih o kojoj im se trebaju postaviti pitanja. Broj povjerenika ograničen je na dva po sjednici. Moguće je, međutim, dodati trećeg povjerenika ovisno o posebnoj horizontalnoj temi ili temama odabranima za vrijeme za pitanja.\n\r\
\n\r\
3.   U skladu sa smjernicama koje donese Konferencija predsjednika, može se održati posebni aktualni sat s Vijećem, s predsjednikom Komisije, s potpredsjednikom Komisije / Visokim predstavnikom Unije za vanjske poslove i sigurnosnu politiku i s predsjednikom Eurogrupe.\n\r\
\n\r\
4.   Vrijeme za pitanja ne dodjeljuje se posebno unaprijed. Predsjednik osigurava da, koliko je to moguće, naizmjenično mogu postaviti pitanje zastupnici s različitim političkim stajalištima i iz različitih država članica.\n\r\
\n\r\
5.   Zastupnik ima na raspolaganju jednu minutu za postavljanje pitanja, a povjerenik dvije minute za davanje odgovora. Taj zastupnik može postaviti dodatno pitanje kraće od 30 sekundi, koje se izravno odnosi na glavno pitanje. Povjerenik potom ima na raspolaganju dvije minute za davanje dodatnog odgovora.\n\r\
\n\r\
Pitanja i dodatna pitanja moraju biti izravno povezana s odabranom posebnom horizontalnom temom iz stavka 1. Predsjednik može odlučiti o njihovoj dopuštenosti."
},
{
'id': 130,
'title': 'Članak 130. : Pitanja za pisani odgovor',
'text': "1.   Svaki zastupnik može postaviti pitanja predsjedniku Europskog vijeća, Vijeću, Komisiji ili potpredsjedniku Komisije/Visokom predstavniku Unije za vanjske poslove i sigurnosnu politiku i na njih tražiti pisani odgovor, u skladu s kriterijima utvrđenima u prilogu ovom Poslovniku.(1) Za sadržaj pitanja odgovorni su isključivo njihovi podnositelji.\n\r\
\n\r\
2.   Pitanja se podnose predsjedniku. U slučaju dvojbi oko dopuštenosti pitanja odlučuje predsjednik. Odluka predsjednika ne temelji se isključivo na odredbama iz priloga navedenog u stavku 1. nego općenito na odredbama ovog Poslovnika. Podnositelja pitanja obavještava se o obrazloženoj odluci predsjednika.\n\r\
\n\r\
3.   Pitanja se podnose u elektroničkom formatu. Svaki zastupnik može podnijeti najviše dvadeset pitanja tijekom razdoblja od tri mjeseca.\n\r\
\n\r\
4.   Pitanja mogu podržati drugi zastupnici. Ta će se pitanja pribrojiti samo najvećem dopuštenom broju pitanja podnositelja, a ne i pobornika sukladno stavku 3.\n\r\
\n\r\
5.   Ako primatelj ne može odgovoriti na pitanje u roku od tri tjedna (prioritetno pitanje) ili šest tjedana (neprioritetno pitanje) nakon što mu je ono proslijeđeno, ono se na zahtjev podnositelja može uvrstiti u dnevni red sljedeće sjednice nadležnog odbora.\n\r\
\n\r\
6.   Svaki zastupnik može podnijeti samo jedno prioritetno pitanje svaki mjesec.\n\r\
\n\r\
7.   Pitanja i odgovori, uključujući pripadajuće priloge, objavljuju se na internetskoj stranici Parlamenta.\n\r\
\n\r\
\n\r\
(1)	Vidi Prilog II.\n\r\
\n\r\
Članak 130.a : Kraća zastupnička pitanja za pisani odgovor\n\r\
\n\r\
1.   U kraćim zastupničkim pitanjima, koja dolaze u obliku pitanja za pisani odgovor, odbor, klub zastupnika ili najmanje pet posto zastupnika u Europskom parlamentu može zatražiti od Vijeća, Komisije ili potpredsjednika Komisije / Visokog predstavnika Unije za vanjske poslove i sigurnosnu politiku da Parlamentu pruži informacije o točno određenim pitanjima.\n\r\
\n\r\
Ta se pitanja podnose predsjedniku, koji, ako su pitanja općenito u skladu s Poslovnikom i kriterijima utvrđenim u prilogu Poslovniku(1), od primatelja pitanja traži da odgovori u roku od dva tjedna; predsjednik može produljiti taj rok nakon savjetovanja s autorima pitanja.\n\r\
\n\r\
2.   Pitanja i odgovori objavljuju se na internetskim stranicama Parlamenta.\n\r\
\n\r\
\n\r\
(1)	Vidi Prilog II.\n\r\
\n\r\
Članak 130.b : Dulja zastupnička pitanja za pisani odgovor s raspravom\n\r\
\n\r\
1.   Odbor, klub zastupnika ili najmanje pet posto zastupnika u Europskom parlamentu može postaviti dulja zastupnička pitanja, tj. pitanja za pisani odgovor s raspravom, Vijeću, Komisiji ili potpredsjedniku Komisije / Visokom predstavniku Unije za vanjske poslove i sigurnosnu politiku. Pitanja mogu obuhvaćati kratko obrazloženje.\n\r\
\n\r\
Takva se pitanja u pisanom obliku podnose predsjedniku, koji, ako su pitanja općenito u skladu s Poslovnikom i kriterijima utvrđenim u prilogu Poslovniku(1), smjesta obavještava primatelja pitanja o tome i od njega traži da navede hoće li odgovoriti i kada.\n\r\
\n\r\
2.   Nakon primitka pisanog odgovora, dulje zastupničko pitanje uvrštava se u prijedlog dnevnog reda Parlamenta u skladu s postupkom predviđenim u članku 149. Rasprava se održava ako to zatraži odbor, klub zastupnika ili najmanje pet posto zastupnika u Parlamentu.\n\r\
\n\r\
3.   Ako primatelj odbije odgovoriti na pitanje ili to ne učini u roku od tri tjedna, pitanje se uvrštava u prijedlog dnevnog reda. Rasprava se održava ako to zatraži odbor, klub zastupnika ili najmanje pet posto zastupnika u Parlamentu. Prije rasprave jednom od podnositelja pitanja može se dopustiti da dodatno obrazloži pitanje.\n\r\
\n\r\
4.   Jedan od podnositelja može izložiti pitanje u Parlamentu. Na pitanje odgovara jedan predstavnik dotične institucije.\n\r\
\n\r\
Članak 123. stavci od 2. do 5. u vezi s podnošenjem prijedloga rezolucija i glasovanjem o njima primjenjuju se mutatis mutandis.\n\r\
\n\r\
5.   Pitanja i odgovori na njih objavljuju se na internetskim stranicama Parlamenta.\n\r\
\n\r\
\n\r\
(1)	Vidi Prilog II."
},
{
'id': 131,
'title': 'Članak 131. : Pitanja za pisani odgovor upućena Europskoj središnjoj banci',
'text': "1.   Svaki zastupnik može u skladu s kriterijima utvrđenima u prilogu ovom Poslovniku Europskoj središnjoj banci postaviti najviše šest pitanja mjesečno i na njih tražiti pisani odgovor.(1) Za sadržaj pitanja odgovorni su isključivo njihovi podnositelji.\n\r\
\n\r\
2.   Pitanja se u pisanom obliku podnose predsjedniku nadležnog odbora. Po primitku takvih pitanja predsjednik nadležnog odbora o  njima obavještava Europsku središnju banku. U slučaju dvojbi oko dopuštenosti pitanja odlučuje predsjednik nadležnog odbora. Podnositelja pitanja obavještava se o takvoj odluci.\n\r\
\n\r\
3.   Pitanja, kao i odgovori na njih, objavljuju se na internetskim stranicama Parlamenta.\n\r\
\n\r\
4.   Ako na pitanje za pisani odgovor nije odgovoreno u roku od šest tjedana, ono se na zahtjev podnositelja može uvrstiti u dnevni red sljedećeg sastanka nadležnog odbora i predsjednika Europske središnje banke.\n\r\
\n\r\
\n\r\
(1)	Vidi Prilog II.\n\r\
\n\r\
Članak 131.a : Pitanja za pisani odgovor u vezi s jedinstvenim nadzornim mehanizmom i jedinstvenim sanacijskim mehanizmom\n\r\
\n\r\
1.   Članak 131. stavci 1., 2. i 3. primjenjuju se mutatis mutandis u pogledu pitanja za pisani odgovor u vezi s Jedinstvenim nadzornim mehanizmom i Jedinstvenim sanacijskim mehanizmom. Broj tih pitanja oduzima se od šest, što je najveći dopušteni broj pitanja kako je predviđeno u članku 131. stavku 1.\n\r\
\n\r\
2.   Ako na pitanje za pisani odgovor nije odgovoreno u roku od pet tjedana, ono se na zahtjev podnositelja može uvrstiti na dnevni red sljedećeg sastanka nadležnog odbora i predsjednika odbora primatelja."
},
{
'id': 132,
'title': 'Članak 132. : Godišnja i ostala izvješća drugih institucija ili tijela',
'text': "1.   Godišnja i ostala izvješća drugih institucija ili tijela za koje je u Ugovorima predviđeno savjetovanje s Parlamentom ili za koje se u drugim pravnim odredbama traži mišljenje Parlamenta predmet su izvješća koja se podnosi na plenarnoj sjednici.\n\r\
\n\r\
2.   Godišnja i ostala izvješća drugih institucija ili tijela koja nisu obuhvaćena stavkom 1. upućuju se nadležnom odboru, koji ih preispituje i koji Parlamentu može podnijeti kratki prijedlog rezolucije ili predložiti sastavljanje izvješća u skladu s člankom 52. u slučaju da smatra da bi Parlament trebao zauzeti stajalište o važnom pitanju iz izvješća."
},
{
'id': 133,
'title': 'Članak 133. : Prijedlozi rezolucija',
'text': "1.   Svaki zastupnik može podnijeti prijedlog rezolucije o predmetu iz područja djelovanja Europske unije.\n\r\
\n\r\
Prijedlog ne smije biti duži od 200 riječi.\n\r\
\n\r\
2.   Takav prijedlog ne smije:\n\r\
\n\r\
-   sadržavati odluke o predmetima za koje su u ovom Poslovniku, osobito u članku 46., utvrđeni posebni postupci i nadležnosti ili\n\r\
\n\r\
-   odnositi se na predmet kojim se Parlament trenutačno bavi.\n\r\
\n\r\
3.   Svaki zastupnik smije podnijeti najviše jedan takav prijedlog mjesečno.\n\r\
\n\r\
4.   Prijedlog rezolucije podnosi se predsjedniku koji provjerava ispunjava li on primjenjive kriterije. Ako predsjednik prijedlog proglasi dopuštenim, objavljuje ga na plenarnoj sjednici i upućuje ga nadležnom odboru.\n\r\
\n\r\
5.   Nadležni odbor odlučuje koji postupak će se primijeniti, uključujući spajanje prijedloga rezolucije s drugim prijedlozima rezolucija ili izvješćima, donošenje mišljenja, koje može biti u obliku pisma, ili sastavljanje izvješća u skladu s člankom 52. Nadležni odbor također može odlučiti ne postupati po prijedlogu rezolucije.\n\r\
\n\r\
6.   Autori prijedloga rezolucije obavještavaju se o odlukama predsjednika, odbora i Konferencije predsjednika.\n\r\
\n\r\
7.   Izvješće iz stavka 5. sadržava tekst prijedloga rezolucije.\n\r\
\n\r\
8.   Predsjednik drugim institucijama Europske unije prosljeđuje mišljenja u obliku pisma iz stavka 5. koja su na njih naslovljena u obliku pisma.\n\r\
\n\r\
9.   Autor ili autori, ili prvi potpisnik mogu povući prijedlog rezolucije podnesen u skladu sa stavkom 1. prije nego što nadležni odbor odluči, u skladu sa stavkom 5., o njemu sastaviti izvješće.\n\r\
\n\r\
Nakon što nadleži odbor na taj način preuzme prijedlog rezolucije, jedino je on ovlašten povući prijedlog.početka konačnog glasovanja na plenarnoj sjednici.Nadležni odbor zadržava pravo povući prijedlog sve do"
},
{
'id': 134,
'title': 'Članak 134. : (Briše se.)',
'text': ""
},
{
'id': 135,
'title': 'Članak 135. : Rasprave o slučajevima kršenja ljudskih prava, demokratskih načela i vladavine prava',
'text': "1.   Odbor, međuparlamentarno izaslanstvo, klub zastupnika ili zastupnici koji dosežu barem niski prag mogu pisanim putem od Predsjednika tražiti održavanje rasprave o hitnom slučaju kršenja ljudskih prava, demokratskih načela i vladavine prava.\n\r\
\n\r\
2.   Konferencija predsjednika na temelju zahtjeva iz stavka 1. i u skladu s odredbama Priloga III. sastavlja popis predmeta koji će se uvrstiti u konačni prijedlog dnevnog reda za sljedeću raspravu o slučajevima kršenja ljudskih prava, demokratskih načela i vladavine prava. U dnevni red smiju se uvrstiti najviše tri predmeta, uključujući potpoglavlja.\n\r\
\n\r\
U skladu s člankom 149.a Parlament može odustati od teme o kojoj je trebalo raspravljati i zamijeniti je temom koja nije na dnevnom redu. Prijedloge rezolucija o odabranim predmetima može podnijeti odbor, klub zastupnika ili zastupnici koji dosežu barem niski prag najkasnije do večeri dana usvajanja dnevnog reda. Predsjednik određuje točan rok za podnošenje tih prijedloga rezolucija.\n\r\
\n\r\
3.   U okviru vremena za rasprave od najviše 60 minuta po sjednici ukupno vrijeme za izlaganje klubova zastupnika i nezavisnih zastupnika raspodjeljuje se u skladu s postupkom utvrđenim člankom 162. stavcima 4. i 5.\n\r\
\n\r\
Vrijeme koje preostane nakon oduzimanja vremena potrebnog za predstavljanje prijedloga rezolucija i nakon mogućeg vremena za izlaganje dodijeljenog Komisiji i Vijeću raspodjeljuje se među klubovima zastupnika i nezavisnim zastupnicima.\n\r\
\n\r\
4.   Na kraju rasprave odmah se glasuje. Članak 183. u vezi s obrazloženjima glasovanja ne primjenjuje se.\n\r\
\n\r\
Glasovanja u skladu s ovim člankom mogu se organizirati skupno u okviru nadležnosti predsjednika i Konferencije predsjednika.\n\r\
\n\r\
5.   Ako su za isti predmet podnesena dva ili više prijedloga rezolucija, primjenjuje se postupak iz članka 123. stavaka 4. i 5.\n\r\
\n\r\
6.   Predsjednik i predsjednici klubova zastupnika mogu odlučiti da se o prijedlogu rezolucije glasuje bez rasprave. Za tu odluku potreban je jednoglasni sporazum predsjednika svih klubova zastupnika.\n\r\
\n\r\
Odredbe članaka 187. i 188. ne primjenjuju se na prijedloge rezolucija uvrštene u dnevni red za raspravu o slučajevima kršenja ljudskih prava, demokratskih načela i vladavine prava.\n\r\
\n\r\
Prijedlozi rezolucija podnose se za raspravu o slučajevima kršenja ljudskih prava, demokratskih načela i vladavine prava tek nakon usvajanja popisa tema. Prijedlozi rezolucija koje nije moguće obraditi unutar vremena dodijeljenog za raspravu se ne razmatraju. Isto vrijedi za prijedloge rezolucija za koje je ustanovljeno, nakon zahtjeva u skladu s člankom 168. stavkom 3., da nema kvoruma. Podnositelji imaju pravo ponovno podnijeti te prijedloge bilo na razmatranje u odboru prema članku 133., bilo za raspravu o slučajevima kršenja ljudskih prava, demokratskih načela i vladavine prava na sljedećoj sjednici.\n\r\
\n\r\
Predmet nije moguće uvrstiti u dnevni red za raspravu o slučajevima kršenja ljudskih prava, demokratskih načela i vladavine prava ako je već na dnevnom redu te sjednice.\n\r\
\n\r\
U Poslovniku ne postoje odredbe kojima se dopušta zajednička rasprava o prijedlogu rezolucije podnesenom u skladu sa stavkom 2., drugim podstavkom, te o izvješću odbora o istoj temi.\n\r\
\n\r\
Ako je u skladu s člankom 168. stavkom 3. podnesen zahtjev za utvrđivanje kvoruma, taj zahtjev vrijedi samo za prijedlog rezolucije koji se stavlja na glasovanje, a ne za one koji slijede."
},
{
'id': 136,
'title': 'Članak 136. : (Briše se.)',
'text': ""
},
{
'id': 137,
'title': 'Članak 137. : Savjetovanje s Europskim gospodarskim i socijalnim odborom',
'text': "1.   Ako se Ugovorom o funkcioniranju Europske unije predviđa savjetovanje s Europskim gospodarskim i socijalnim odborom, predsjednik pokreće postupak savjetovanja i o tome obavještava Parlament.\n\r\
\n\r\
2.   Odbor može zahtijevati savjetovanje s Europskim gospodarskim i socijalnim odborom o predmetima opće prirode ili o posebnim točkama.\n\r\
\n\r\
Odbor u svojem zahtjevu navodi rok u kojem Europski gospodarski i socijalni odbor treba dostaviti svoje mišljenje.\n\r\
\n\r\
Zahtjev za savjetovanje s Europskim gospodarskim i socijalnim odborom Parlamentu objavljuje se na njegovoj sljedećoj sjednici i smatrat će se odobrenim, osim ako klub zastupnika ili zastupnici koji dosežu barem niski prag u roku od 24 sata od objave zatraže glasovanje o tom zahtjevu.\n\r\
\n\r\
3.   Mišljenja koja pošalje Europski gospodarski i socijalni odbor upućuju se nadležnom odboru."
},
{
'id': 138,
'title': 'Članak 138. : Savjetovanje s Odborom regija',
'text': "1.   Ako se Ugovorom o funkcioniranju Europske unije predviđa savjetovanje s Odborom regija, predsjednik pokreće postupak savjetovanja i o tome obavještava Parlament.\n\r\
\n\r\
2.   Odbor može zahtijevati savjetovanje s Odborom regija o predmetima opće prirode ili o posebnim točkama.\n\r\
\n\r\
Odbor u svojem zahtjevu navodi rok u kojem Odbor regija treba dostaviti svoje mišljenje.\n\r\
\n\r\
Zahtjev za savjetovanje s Odborom regija Parlamentu se objavljuje na njegovoj sljedećoj sjednici i smatrat će se odobrenim, osim ako klub zastupnika ili zastupnici koji dosežu barem niski prag u roku od 24 sata od objave zatraže glasovanje o tom zahtjevu.\n\r\
\n\r\
3.   Mišljenja koja pošalje Odbor regija upućuju se nadležnom odboru."
},
{
'id': 139,
'title': 'Članak 139. : Zahtjevi upućeni europskim agencijama',
'text': "1.   Ako Parlament ima pravo podnijeti zahtjev europskoj agenciji, svaki zastupnik može predsjedniku Parlamenta podnijeti takav zahtjev u pisanom obliku. Zahtjevi se moraju odnositi na predmete koji ulaze u područje djelovanja agencije i biti popraćeni informacijama koje objašnjavaju predmet i interes Unije.\n\r\
\n\r\
2.   Nakon savjetovanja s nadležnim odborom predsjednik prosljeđuje zahtjev agenciji ili poduzima druge odgovarajuće mjere. O tome se odmah obavještava zastupnik koji podnosi zahtjev. U svakom zahtjevu koji predsjednik pošalje agenciji navodi se rok za odgovor.\n\r\
\n\r\
3.   Ako agencija smatra da nije u mogućnosti odgovoriti na zahtjev u obliku u kojemu je podnesen ili traži njegovu promjenu, odmah obavještava predsjednika, koji poduzima odgovarajuće mjere, po potrebi nakon savjetovanja s nadležnim odborom."
},
{
'id': 140,
'title': 'Članak 140. : Međuinstitucijski sporazumi',
'text': "1.   Parlament može sklapati sporazume s drugim institucijama u okviru primjene Ugovora ili radi poboljšanja ili pojašnjenja postupaka.\n\r\
\n\r\
Ti sporazumi mogu imati oblik zajedničkih izjava, razmjena pisama, kodeksa ponašanja ili druge odgovarajuće oblike. Nakon što ih pregleda odbor nadležan za ustavna pitanja i odobri Parlament, potpisuje ih predsjednik.\n\r\
\n\r\
2.   Kad se takvim sporazumima podrazumijevaju promjene postojećih postupovnih prava ili obveza ili ustanovljuju nova postupovna prava ili obveze zastupnika ili tijela Parlamenta ili na drugi način podrazumijevaju izmjena ili tumačenje Poslovnika, prije potpisivanja sporazuma predmet se upućuje na razmatranje odboru nadležnomu za predmet u skladu s člankom 226. stavcima od 2. do 6."
},
{
'id': 141,
'title': 'Članak 141. : Postupak pred Sudom Europske unije',
'text': "1.   Parlament u roku određenom u Ugovorima i Statutu Suda Europske unije za tužbe institucija Unije i fizičkih ili pravnih osoba pregledava zakonodavstvo Unije i njegovu provedbu kako bi utvrdio da su u potpunosti poštovani Ugovori, posebno kad se to odnosi na prava Parlamenta.\n\r\
\n\r\
2.   Ako sumnja u kršenje prava Unije, odbor nadležan za pravna pitanja izvještava Parlament, po potrebi usmeno. Odbor nadležan za pravna pitanja po potrebi može saslušati stajališta odbora nadležnog za dotični predmet.\n\r\
\n\r\
3.   Predsjednik podnosi tužbu u ime Parlamenta u skladu s preporukom odbora nadležnog za pravna pitanja.\n\r\
\n\r\
Na početku sljedeće sjednice predsjednik može od Parlamenta tražiti donošenje odluke o ostajanju pri tužbi. Ako Parlament većinom danih glasova donese odluku protiv tužbe, predsjednik je povlači.\n\r\
\n\r\
Ako predsjednik podnese tužbu protivno preporuci odbora nadležnog za pravna pitanja, na početku sljedeće sjednice od Parlamenta traži donošenje odluke o ostajanju pri tužbi.\n\r\
\n\r\
4.   Predsjednik nakon savjetovanja s odborom nadležnim za pravna pitanja podnosi primjedbe ili sudjeluje u sudskom postupku u ime Parlamenta.\n\r\
\n\r\
Ako predsjednik ne namjerava djelovati u skladu s preporukom odbora nadležnog za pravna pitanja, o tome obavještava odbor i predmet upućuje Konferenciji predsjednika navodeći razloge.\n\r\
\n\r\
Ako Konferencija predsjednika smatra da Parlament iznimno ne treba podnijeti primjedbe ili sudjelovati u postupku pred Sudom Europske unije u kojemu se dovodi u pitanje pravna valjanost akta Parlamenta, predmet se bez odgode upućuje Parlamentu.\n\r\
\n\r\
Nijedna odredba Poslovnika ne sprečava odbor nadležan za pravna pitanja da odluči o odgovarajućim postupovnim mjerama radi pravovremenog prosljeđivanja svoje preporuke u hitnim slučajevima.\n\r\
\n\r\
Ako se radi o donošenju odluke o korištenju prava Parlamenta pred Sudom Europske unije i ako dotični akt nije obuhvaćen člankom 141., postupak predviđen tim člankom primjenjuje se na odgovarajući način.\n\r\
\n\r\
5.   U hitnim slučajevima, po mogućnosti nakon savjetovanja s predsjednikom i izvjestiteljem odbora nadležnog za pravna pitanja, predsjednik može poduzeti mjere predostrožnosti radi pridržavanja odgovarajućih rokova. U tim se slučajevima postupak predviđen stavcima 3. i 4., prema potrebi, provodi što je prije moguće.\n\r\
\n\r\
6.   Odbor nadležan za pravna pitanja utvrđuje načela koja će koristiti pri primjeni ovog članka."
},
{
'id': 142,
'title': 'Članak 142. : Razmjena informacija, kontakti i uzajamno ustupanje prostora i opreme',
'text': "1.   Parlament redovito izvještava nacionalne parlamente država članica o svome radu.\n\r\
\n\r\
2.   Na temelju mandata koji daje Konferencija predsjednika nakon savjetovanja s Konferencijom predsjednika odbora pregovara se o organizaciji i promicanju učinkovite i redovite međuparlamentarne suradnje unutar Unije, u skladu s člankom 9. Protokola br. 1 o ulozi nacionalnih parlamenata u Europskoj uniji.\n\r\
\n\r\
Parlament odobrava sve sporazume o tim predmetima u skladu s postupkom iz članka 140.\n\r\
\n\r\
3.   Odbor može započeti izravni dijalog s nacionalnim parlamentima na razini odbora unutar granica odobrenih proračunskih sredstava namijenjenih u tu svrhu. Dijalog može uključivati odgovarajuće oblike suradnje prije i poslije donošenja zakonodavnih akata.\n\r\
\n\r\
4.   Svi dokumenti koji se odnose na zakonodavni postupak na razini Unije i koje nacionalni parlament službeno pošalje Europskom parlamentu prosljeđuju se odboru nadležnom za predmet na koji se dokument odnosi.\n\r\
\n\r\
5.   Konferencija predsjednika može dati mandat predsjedniku Parlamenta da pregovara o ustupanju prostora i opreme nacionalnim parlamentima država članica na temelju uzajamnosti te da predloži druge mjere za olakšavanje kontakata s tim nacionalnim parlamentima."
},
{
'id': 143,
'title': 'Članak 143. : Konferencija parlamentarnih odbora za poslove Unije (COSAC)',
'text': "1.   Konferencija predsjednika na prijedlog predsjednika Parlamenta imenuje članove izaslanstva Parlamenta u COSAC-u i može mu dati mandat. Izaslanstvo predvodi potpredsjednik Europskog parlamenta nadležan za odnose s nacionalnim parlamentima i predsjednik odbora nadležnog za ustavna pitanja.\n\r\
\n\r\
2.   Drugi članovi izaslanstva biraju se u skladu s predmetima o kojima će se raspravljati na sastanku COSAC-a i uključuju, u što većoj mjeri, predstavnike odbora nadležnih za te predmete.\n\r\
\n\r\
3.   Pri izboru članova izaslanstva vodi se računa o općoj političkoj ravnoteži u Parlamentu.\n\r\
\n\r\
4.   Izaslanstvo nakon svake sjednice COSAC-a podnosi izvješće Konferenciji predsjednika."
},
{
'id': 144,
'title': 'Članak 144. : Konferencija parlamenata',
'text': "Konferencija predsjednika imenuje članove izaslanstva Parlamenta na svakoj konferenciji ili u sličnom tijelu koje uključuje predstavnike parlamenata i tom izaslanstvu daje mandat u skladu s odgovarajućim rezolucijama Parlamenta. Izaslanstvo izabire svog predsjednika i po potrebi jednog ili više potpredsjednika."
},
{
'id': 145,
'title': 'Članak 145. : Parlamentarni saziv, zasjedanja, sjednice, dnevne sjednice',
'text': "1.   Parlamentarni saziv teče istodobno s trajanjem mandata zastupnika predviđenim Aktom od 20. rujna 1976.\n\r\
\n\r\
2.   Zasjedanje odgovara razdoblju od jedne godine propisanom Aktom i Ugovorima.\n\r\
\n\r\
3.   Sjednica odgovara sastanku Parlamenta koji se u pravilu održava svaki mjesec i dijeli na dnevne sjednice.\n\r\
\n\r\
Dnevne sjednice Parlamenta održane isti dan smatraju se jedinstvenom dnevnom sjednicom."
},
{
'id': 146,
'title': 'Članak 146. : Sazivanje Parlamenta',
'text': "1.   U skladu s prvim stavkom članka 229. Ugovora o funkcioniranju Europske unije, Parlament se sastaje bez potrebe za sazivanjem drugog utorka u ožujku svake godine. Sam određuje trajanje prekida zasjedanja.\n\r\
\n\r\
2.   Parlament se također sastaje bez potrebe za sazivanjem prvog utorka nakon isteka razdoblja od mjesec dana po završetku razdoblja iz članka 10. stavka 1. Akta od 20. rujna 1976.\n\r\
\n\r\
3.   Konferencija predsjednika može, uz obrazloženje, promijeniti trajanje prekida o kojima je odlučeno u skladu sa stavkom 1. najmanje dva tjedna prije datuma nastavka zasjedanja koji je prethodno odredio Parlament. Nastavak zasjedanja, međutim, ne smije biti odgođen za dulje od dva tjedna.\n\r\
\n\r\
4.   Na zahtjev većine zastupnika ili na zahtjev Komisije ili Vijeća, nakon savjetovanja s Konferencijom predsjednika, predsjednik iznimno saziva Parlament.\n\r\
\n\r\
Predsjednik iznimno, uz odobrenje Konferencije predsjednika, predsjednik može sazvati Parlament u hitnim slučajevima."
},
{
'id': 147,
'title': 'Članak 147. : Mjesto održavanja sjednica',
'text': "1.   Sjednice Parlamenta i parlamentarnih odbora održavaju se u skladu s odredbama Ugovora.\n\r\
\n\r\
Za prihvaćanje prijedloga za održavanje dodatnih sjednica Parlamenta u Bruxellesu i mogućih amandmana na njih potrebna je samo većina danih glasova.\n\r\
\n\r\
2.   Svaki odbor može zatražiti da se jedna ili više sjednica održe na drugom mjestu. Obrazloženi zahtjev upućuje se predsjedniku, koji ga podnosi Predsjedništvu. Ako se radi o hitnom predmetu, predsjednik može sam donijeti odluku. Ako Predsjedništvo ili predsjednik odbiju zahtjev, moraju se navesti razlozi odbijanja."
},
{
'id': 148,
'title': 'Članak 148. : Nazočnost zastupnika na dnevnim sjednicama',
'text': '1.   Zastupnici se na svakoj dnevnoj sjednici potpisuju na popis nazočnih.\n\r\
\n\r\
2.   Imena zastupnika čija je nazočnost zabilježena u popisu nazočnih navode se u zapisniku sa svake sjednice s napomenom „nazočan/nazočna”. Imena zastupnika čiju je ispriku prihvatio Predsjednik navode se u zapisniku sa svake sjednice s napomenom „ispričan/ispričana”.'
},
{
'id': 149,
'title': 'Članak 149. : Prijedlog dnevnog reda',
'text': "1.   Prije svake sjednice Konferencija predsjednika, na temelju preporuka Konferencije predsjednika odbora, sastavlja prijedlog dnevnog reda.\n\r\
\n\r\
Komisija i Vijeće mogu na poziv predsjednika sudjelovati u raspravama Konferencije predsjednika o prijedlogu dnevnog reda.\n\r\
\n\r\
2.   U prijedlogu dnevnog reda mogu biti navedena vremena glasovanja o određenim točkama predviđenima za razmatranje.\n\r\
\n\r\
3.   Konačni prijedlog dnevnog reda stavlja se na raspolaganje zastupnicima najmanje tri sata prije početka sjednice.\n\r\
\n\r\
\n\r\
Članak 149.a : Usvajanje i izmjena dnevnog reda\n\r\
\n\r\
1.   Na početku svake sjednice Parlament usvaja dnevni red. Amandmane na konačni prijedlog dnevnog reda mogu predložiti odbor, klub zastupnika ili najmanje 40 zastupnika. Sve takve prijedloge predsjednik mora primiti najmanje sat vremena prije početka sjednice. Predsjednik može dati riječ podnositelju i jednom govorniku koji je protiv prihvaćanja prijedloga, a vrijeme za izlaganje ne smije biti dulje od jedne minute.\n\r\
\n\r\
2.   Dnevni red se nakon usvajanja ne može izmijeniti osim u skladu s člankom 154., 187., 188., 190. ili 191., ili na prijedlog predsjednika.\n\r\
\n\r\
Ako je postupovni prijedlog izmjene dnevnog reda odbijen, više ne može biti podnesen tijekom iste sjednice.\n\r\
\n\r\
3.   Prije završetka dnevne sjednice predsjednik objavljuje datum, vrijeme i dnevni red sljedeće dnevne sjednice."
},
{
'id': 150,
'title': 'Članak 150. : Postupak na plenarnoj sjednici bez amandmana i rasprave',
'text': "1.   Ako je izvješće prihvaćeno u odboru, a da je manje od jedne desetine članova odbora glasovalo protiv, izvješće se uvrštava u prijedlog dnevnog reda Parlamenta za glasovanje bez amandmana.\n\r\
\n\r\
O točki se zatim glasuje jedinstvenim glasovanjem osim ako su prije sastavljanja konačnog prijedloga dnevnog reda zastupnici ili klub/klubovi zastupnika koji dosežu barem srednji prag pisanim putem zahtijevali da se dopuste amandmani na točku; u tom slučaju predsjednik određuje rok za podnošenje amandmana.\n\r\
\n\r\
2.   Točke uvrštene u konačni prijedlog dnevnog reda za glasovanje bez amandmana također se stavljaju na glasovanja bez rasprave osim ako Parlament prilikom usvajanja dnevnog reda na početku sjednice, na prijedlog Konferencije predsjednika ili na zahtjev kluba zastupnika ili zastupnika koji dosežu barem niski prag ne odluči drukčije.\n\r\
\n\r\
3.   Prilikom sastavljanja konačnog prijedloga dnevnog reda sjednice Konferencija predsjednika može predložiti da se druge točke stave na glasovanje bez amandmana ili bez rasprave. Prilikom usvajanja dnevnog reda Parlament ne smije prihvatiti takve prijedloge ako su se klub zastupnika ili zastupnici koji dosežu barem niski prag pisanim putem izjasnili protiv toga najmanje sat vremena prije početka sjednice.\n\r\
\n\r\
4.   Kad se točka stavlja na glasovanje bez rasprave, izvjestitelj ili predsjednik nadležnog odbora mogu neposredno prije glasovanja dati izjavu u trajanju od najdulje dvije minute."
},
{
'id': 151,
'title': 'Članak 151. : Kratko predstavljanje',
'text': "Na zahtjev izvjestitelja ili na prijedlog Konferencije predsjednika Parlament također može odlučiti da će se točka o kojoj nije potrebna cjelovita rasprava obraditi kratkim predstavljanjem izvjestitelja na plenarnoj sjednici. U tom slučaju Komisija ima priliku odgovoriti, nakon čega slijedi rasprava u trajanju od najdulje 10 minuta, tijekom koje predsjednik zastupnicima koje zamijeti da su se javili („catch the eye”) može dati riječ u trajanju od najdulje jedne minute po zastupniku."
},
{
'id': 152,
'title': 'Članak 152. : (Briše se.)',
'text': ""
},
{
'id': 153,
'title': 'Članak 153.',
'text': "1.    Klub zastupnika ili zastupnici koji dosežu barem niski prag mogu zahtijevati da se u dnevni red Parlamenta uvrsti izvanredna rasprava o predmetu od velikog interesa za politiku Europske unije. U pravilu se na svakoj sjednici održava samo jedna izvanredna rasprava.\n\r\
\n\r\
2.   Zahtjev se predsjedniku podnosi pisanim putem najmanje tri sata prije početka sjednice na kojoj se treba održati izvanredna rasprava. O tom zahtjevu glasuje se na početku sjednice prilikom usvajanja dnevnog reda.\n\r\
\n\r\
3.   Kao odgovor na događaje koji uslijede nakon usvajanja dnevnog reda sjednice, predsjednik može predložiti izvanrednu raspravu nakon savjetovanja s predsjednicima klubova zastupnika. O svakom takvom prijedlogu glasuje se na početku dnevne sjednice ili u dogovoreno vrijeme glasovanja. Zastupnici se o takvom prijedlogu za izvanrednu raspravu obavještavaju.\n\r\
\n\r\
4.   Predsjednik određuje vrijeme održavanja takve rasprave. Ukupno trajanje rasprave ne smije biti dulje od 60 minuta. Vrijeme za izlaganje dodjeljuje se klubovima zastupnika i nezavisnim zastupnicima u skladu s člankom 162. stavcima 4. i 5.\n\r\
\n\r\
5.   Rasprava se zaključuje bez donošenja rezolucije.\n\r\
\n\r\
\n\r\
Članak 153.a : Tematska rasprava na zahtjev kluba zastupnika\n\r\
\n\r\
1.   Na svakoj sjednici u prijedlogu dnevnog reda predviđa se jedno ili dva razdoblja u trajanju od najmanje 60 minuta za rasprave o aktualnoj temi od velikog interesa za politiku Europske unije.\n\r\
\n\r\
2.   Svaki klub zastupnika ima pravo predložiti aktualnu temu po vlastitom izboru za najmanje jednu takvu raspravu godišnje. Konferencija predsjednika tijekom razdoblja od jedne godine osigurava pravednu raspodjelu korištenja tog prava među klubovima zastupnika.\n\r\
\n\r\
3.   Prije nego što Konferencija predsjednika sastavi konačan prijedlog dnevnog reda, klubovi zastupnika predsjedniku u pisanom obliku podnose aktualnu temu po vlastitom izboru. U potpunosti se poštuje članak 38. stavak 1. o pravima, slobodama i načelima iz članka 6. Ugovora o Europskoj uniji te vrijednosti ugrađene u njegov članak 2.\n\r\
\n\r\
4.   Konferencija predsjednika utvrđuje vrijeme održavanja takve rasprave. Može odlučiti, većinom koja predstavlja četiri petine zastupnika u Parlamentu, odbiti temu koju je klub predložio.\n\r\
\n\r\
5.   Raspravu započinje predstavnik kluba zastupnika koji je predložio aktualnu temu. Vrijeme za izlaganje nakon tog uvoda dodjeljuje se u skladu s člankom 162. stavcima 4. i 5.\n\r\
\n\r\
6.   Rasprava se zaključuje bez donošenja rezolucije."
},
{
'id': 154,
'title': 'Članak 154. : Hitni postupak',
'text': "1.   Predsjednik, odbor, klub zastupnika, zastupnici koji dosežu barem niski prag, Komisija ili Vijeće mogu zahtijevati da se rasprava o prijedlogu podnesenom Parlamentu u skladu s člankom 47. stavkom 1. provede po hitnom postupku. Zahtjev mora biti podnesen u pisanom obliku i biti obrazložen.\n\r\
\n\r\
2.   Čim predsjednik primi zahtjev za hitnu raspravu, o tome obavještava Parlament. O zahtjevu se glasuje na početku prve sljedeće dnevne sjednice nakon one na kojoj je zahtjev objavljen, pod uvjetom da je prijedlog na koji se zahtjev odnosi podijeljen zastupnicima na službenim jezicima. Kad postoji nekoliko zahtjeva za hitnu raspravu o istom predmetu, prihvaćanje ili odbijanje zahtjeva za hitnu raspravu primjenjuje se na sve zahtjeve o istom predmetu.\n\r\
\n\r\
3.   Prije glasovanja riječ mogu imati samo podnositelj zahtjeva, jedan govornik koji je protiv usvajanja te predsjednik i/ili izvjestitelj nadležnog odbora. Nitko od njih ne može govoriti dulje od tri minute.\n\r\
\n\r\
4.   Pitanja koja se razmatraju po hitnom postupku imaju prednost pred drugim točkama dnevnog reda. Predsjednik određuje vrijeme rasprave i glasovanja.\n\r\
\n\r\
5.   Hitni postupak može se održati bez izvješća ili, iznimno, na temelju usmenog izvješća nadležnog odbora.\n\r\
\n\r\
Članci 69.b i 69.c ne primjenjuju se u slučaju primjene hitnog postupka i vođenja međuinstitucijskih pregovora. Članak 69.f primjenjuje se mutatis mutandis."
},
{
'id': 155,
'title': 'Članak 155. : Zajednička rasprava',
'text': "U bilo kojem trenutku može se donijeti odluka da se o sličnim ili činjenično srodnim točkama dnevnog reda provede zajednička rasprava."
},
{
'id': 156,
'title': 'Članak 156. : Rokovi',
'text': "Osim u hitnim slučajevima na koje se odnose članci 135. i 154., rasprava i glasovanje o tekstu ne smiju započeti ako nije bio dostupan zastupnicima najmanje 24 sata ranije."
},
{
'id': 157,
'title': 'Članak 157. : Pristup vijećnici',
'text': "1.   Pristup vijećnici imaju samo zastupnici u Parlamentu, članovi Komisije ili Vijeća, glavni tajnik Parlamenta, članovi osoblja koji su po prirodi posla dužni biti nazočni te svaka osoba koju pozove predsjednik.\n\r\
\n\r\
2.   Jedino nositelji propusnice koju u tu svrhu propisno izdaju predsjednik ili glavni tajnik Parlamenta imaju pristup galerijama.\n\r\
\n\r\
3.   Posjetitelji kojima je dopušten pristup galerijama moraju sjediti u tišini. Parlamentarni podvornici odmah udaljavaju osobe koje izražavaju odobravanje ili negodovanje."
},
{
'id': 158,
'title': 'Članak 158. : Jezici',
'text': "1.   Svi dokumenti Parlamenta sastavljaju se na službenim jezicima.\n\r\
\n\r\
2.   Svi zastupnici imaju pravo u Parlamentu govoriti na službenom jeziku koji izaberu. Govori održani na jednom od službenih jezika simultano se prevode na druge službene jezike i na svaki drugi jezik za koji Predsjedništvo smatra da je to potrebno.\n\r\
\n\r\
3.   Na sjednicama odbora i izaslanstava osigurava se usmeno prevođenje sa službenih jezika i na službene jezike koje članovi i zamjenici članova dotičnog odbora ili izaslanstva upotrebljavaju i traže.\n\r\
\n\r\
4.   Na sjednicama odbora i izaslanstava koje se održavaju izvan uobičajenih mjesta rada osigurava se usmeno prevođenje sa jezika i na jezike članova koji su potvrdili svoju nazočnost na sjednici. U iznimnim slučajevima ovo se pravilo ne mora strogo poštovati. Predsjedništvo donosi potrebne odredbe.\n\r\
\n\r\
5.   Nakon objave rezultata glasovanja, predsjednik odlučuje o zahtjevima koji se odnose na navodne nepodudarnosti između različitih jezičnih verzija."
},
{
'id': 159,
'title': 'Članak 159. : Prijelazna odredba',
'text': "1.   Tijekom prijelaznog razdoblja koje traje do završetka osmog parlamentarnog saziva(1), dopustiva su odstupanja od članka 158. ako, unatoč poduzimanju odgovarajućih mjera, nije dostupan dovoljan broj usmenih ili pismenih prevoditelja za jedan od službenih jezika.\n\r\
\n\r\
2.   Predsjedništvo na prijedlog glavnog tajnika i uzimajući u obzir odredbe iz stavka 3. utvrđuje za svaki od dotičnih službenih jezika jesu li ispunjeni uvjeti navedeni u stavku 1. Predsjedništvo ponovno razmatra svoju odluku o odstupaju svakih šest mjeseci na temelju izvješća glavnog tajnika o napretku. Predsjedništvo donosi potrebne provedbene mjere.\n\r\
\n\r\
3.   Primjenjuju se posebne privremene odredbe koje je u vezi sa sastavljanjem pravnih akata donijelo Vijeće na temelju Ugovora.\n\r\
\n\r\
4.   Na temelju obrazložene preporuke Predsjedništva Parlament može u svakom trenutku odlučiti ukinuti ovaj članak ili, na kraju razdoblja navedenog u stavku 1., produljiti vrijeme njegove primjene.\n\r\
\n\r\
\n\r\
(1)	Produljeno odlukom Parlamenta od 26. veljače 2014.."
},
{
'id': 160,
'title': 'Članak 160. : Distribucija dokumenata',
'text': "Dokumenti koji čine podlogu parlamentarnih rasprava i odluka stavljaju se na raspolaganje zastupnicima.\n\r\
\n\r\
Ne dovodeći u pitanje prvi stavak, zastupnici i klubovi zastupnika imaju izravan pristup unutarnjem računalnom sustavu Europskog parlamenta za uvid u sve pripremne dokumente koji nisu povjerljive naravi (nacrt izvješća, nacrt preporuke, nacrt mišljenja, radni dokument, amandmani podneseni u odboru)."
},
{
'id': 161,
'title': 'Članak 161. : Elektroničko postupanje s dokumentima',
'text': "Dokumenti Parlamenta mogu se pripremati, potpisivati i dostavljati u elektroničkom obliku. Predsjedništvo je dužno odlučiti o tehničkim značajkama i izgledu elektroničkog oblika."
},
{
'id': 162,
'title': 'Članak 162. : Raspodjela vremena za izlaganje i popis govornika',
'text': "1.   Konferencija predsjednika može predložiti Parlamentu da se za određenu raspravu raspodijeli vrijeme za izlaganje. Parlament o tom prijedlogu odlučuje bez rasprave.\n\r\
\n\r\
2.   Zastupnici ne smiju govoriti ako im predsjednik ne da riječ. Zastupnici govore sa svojih mjesta i obraćaju se predsjedniku. Ako se govornici udalje od teme rasprave, predsjednik ih opominje.\n\r\
\n\r\
3.   Predsjednik može za prvi dio određene rasprave sastaviti popis govornika koji uključuje jedan ili više krugova govornika iz svakog kluba zastupnika koji želi uzeti riječ, prema redoslijedu ovisnom o veličini kluba.\n\r\
\n\r\
4.   Vrijeme za izlaganje za ovaj dio rasprave raspodjeljuje se u skladu sa sljedećim kriterijima:\n\r\
\n\r\
(a)   prvi dio vremena za izlaganje ravnomjerno se dijeli među svim klubovima zastupnika;\n\r\
\n\r\
(b)   drugi dio dijeli se među klubovima zastupnika ovisno o ukupnom broju njihovih članova;\n\r\
\n\r\
(c)   nezavisnim zastupnicima ukupno vrijeme za izlaganje dodjeljuje se ovisno o dijelovima dodijeljenima svakom klubu zastupnika u skladu s točkama (a) i (b);\n\r\
\n\r\
(d)   raspodjela vremena za izlaganje uzima u obzir činjenicu da će zastupniku s invaliditetom možda trebati više vremena.\n\r\
\n\r\
5.   Kad je ukupno vrijeme za izlaganje dodijeljeno za više točaka dnevnog reda, klubovi zastupnika obavještavaju predsjednika koliki će dio svog vremena za izlaganje posvetiti svakoj pojedinoj točki. Predsjednik osigurava da se ta vremena za izlaganje poštuju.\n\r\
\n\r\
6.   Preostali dio vremena za raspravu ne raspodjeljuje se posebno unaprijed. Umjesto toga predsjednik može pozvati zastupnike da uzmu riječ, u pravilu u trajanju od najdulje jedne minute. Predsjednik osigurava da, koliko god je to moguće, naizmjenično imaju riječ govornici s različitim političkim stajalištima i iz različitih država članica.\n\r\
\n\r\
7.   Predsjednik može na zahtjev dati prednost predsjedniku ili izvjestitelju nadležnog odbora i predsjednicima klubova zastupnika koji žele govoriti u njihovo ime, ili govornicima koji ih zamjenjuju.\n\r\
\n\r\
8.   Predsjednik može dati riječ zastupnicima koji podizanjem plave kartice pokažu da žele drugom zastupniku tijekom njegovog izlaganja postaviti pitanje u vezi s onim što je taj zastupnik rekao u trajanju od najdulje pola minute. Predsjednik to čini pod uvjetom da se govornik s tim slaže i da predsjednik smatra da to neće ni omesti tijek rasprave ni, dodatnim pitanjima podizanjem plavih kartica, stvoriti veću neravnotežu političke pripadnosti zastupnika koji sudjeluju u toj raspravi.\n\r\
\n\r\
9.   Vrijeme za izlaganje zastupnika ograničeno je na jednu minutu kad se radi o sljedećemu: zapisniku sa sjednice, postupovnim prijedlozima ili amandmanima na konačni prijedlog dnevnog reda ili na dnevni red.\n\r\
\n\r\
10.   U raspravi o izvješću Komisija i Vijeće u pravilu imaju riječ odmah nakon što izvjestitelj predstavi svoje izvješće. Komisija, Vijeće i izvjestitelj mogu ponovno dobiti riječ, posebno kako bi odgovorili na izjave zastupnika.\n\r\
\n\r\
11.   Zastupnici koji nisu govorili u raspravi mogu najviše jednom tijekom sjednice predati pisanu izjavu od najviše 200 riječi koja se prilaže doslovnom izvješću s rasprave.\n\r\
\n\r\
12.   Poštujući članak 230. Ugovora o funkcioniranju Europske unije, predsjednik pokušava postići dogovor s Komisijom, Vijećem i predsjednikom Europskog vijeća o odgovarajućoj raspodjeli vremena za njihovo izlaganje."
},
{
'id': 163,
'title': 'Članak 163. : Jednominutni govori',
'text': "Na svakoj sjednici za vrijeme prve dnevne sjednice predsjednik tijekom razdoblja od najdulje 30 minuta daje riječ zastupnicima koji žele upozoriti Parlament na pitanje od političke važnosti. Vrijeme za izlaganje svakog zastupnika ograničeno je na jednu minutu. Predsjednik i kasnije tijekom iste sjednice može dopustiti takvo dodatno razdoblje."
},
{
'id': 164,
'title': 'Članak 164. : Osobne izjave',
'text': "1.   Zastupnici koji zatraže riječ radi davanja osobne izjave govore na kraju rasprave o dotičnoj točki dnevnog reda ili prilikom usvajanja zapisnika s dnevne sjednice na koju se odnosi zahtjev za riječ.\n\r\
\n\r\
Zastupnici ne smiju govoriti o suštinskim pitanjima, već svoje izjave ograničavaju na pobijanje mogućih primjedbi koje su tijekom rasprave izrečene o njima osobno ili mišljenja koja su im pripisana, ili na ispravljanje vlastitih izjava.\n\r\
\n\r\
2.   Osobna izjava smije trajati najdulje tri minute osim ako Parlament ne odluči drukčije.\n\r\
\n\r\
Članak 164.a : Sprečavanje ometanja\n\r\
\n\r\
Predsjednik ima ovlast prekinuti prekomjerno korištenje prijedloga poput pitanja kršenja Poslovnika, postupovnih zahtjeva, obrazloženja glasovanja te zahtjeva za odvojeno glasovanje, glasovanje po dijelovima ili poimenično glasovanje, ako je uvjeren da se navedenim zahtjevima očigledno namjerava prouzročiti dugotrajno i ozbiljno ometanje rada Parlamenta ili prava drugih zastupnika te ako je uvjeren da će ti zahtjevi dovesti do navedenih posljedica."
},
{
'id': 165,
'title': 'Članak 165. : Trenutačne mjere',
'text': "1.   Predsjednik opominje svakog zastupnika koji naruši neometano odvijanje sjednice ili čije ponašanje nije u skladu s odgovarajućim odredbama članka 11.\n\r\
\n\r\
2.   Ako se prijestup ponovi, predsjednik zastupnika opominje po drugi put, što se unosi u zapisnik.\n\r\
\n\r\
3.   Ako se ometanje nastavi ili je počinjen daljnji prijestup, predsjednik dotičnom zastupniku može oduzeti riječ i udaljiti ga iz vijećnice do kraja dnevne sjednice. Predsjednik mjeru udaljavanja s dnevne sjednice u slučajevima iznimno ozbiljnog narušavanja reda može izreći odmah i bez druge opomene. Glavni tajnik osigurava trenutačno provođenje ovih stegovnih mjera uz pomoć parlamentarnih podvornika i po potrebi Službe sigurnosti Parlamenta.\n\r\
\n\r\
4.   Ako ometanje ugrozi rad Parlamenta, predsjednik zaključuje dnevnu sjednicu ili je odgađa na određeno vrijeme kako bi se ponovno uspostavio red. Ako se pozivi predsjednika ne mogu čuti, on napušta predsjedničko mjesto, čime se dnevna sjednica prekida. Dnevna sjednica se nastavlja na poziv predsjednika.\n\r\
\n\r\
5.   Predsjednik može odlučiti prekinuti emitiranje sjednice uživo u slučaju klevetničkog, rasističkog ili ksenofobnog govora ili ponašanja zastupnika.\n\r\
\n\r\
6.   Predsjednik može odlučiti da iz audiovizualne snimke rasprava izbriše one dijelove govora zastupnika koji sadrže klevetnički, rasistički ili ksenofobni govor.\n\r\
\n\r\
Ta odluka ima trenutačni učinak. Međutim, odluka podliježe potvrdi Predsjedništva najkasnije četiri tjedna od njezina donošenja ili, ako se Predsjedništvo ne sastane u tom roku, na njegovoj sljedećoj sjednici.\n\r\
\n\r\
7.   Ovlasti predviđene stavcima od 1. do 6. na odgovarajući se način dodjeljuju predsjedateljima tijela, odbora i izaslanstava, kako je predviđeno Poslovnikom.\n\r\
\n\r\
8.   Po potrebi i s obzirom na ozbiljnost kršenja pravila ponašanja zastupnika, predsjedatelj sjednice, odbora ili izaslanstva može od predsjednika tražiti da se primijeni članak 166. najkasnije prije sljedeće plenarne sjednice ili sljedeće sjednice dotičnog tijela, odbora ili izaslanstva."
},
{
'id': 166,
'title': 'Članak 166. : Sankcije',
'text': "1.   U ozbiljnim slučajevima narušavanja reda ili ometanja rada Parlamenta, čime se krše načela utvrđena člankom 11., predsjednik donosi obrazloženu odluku o odgovarajućoj sankciji.\n\r\
\n\r\
Predsjednik poziva dotičnog zastupnika da prije donošenja odluke podnese pisane primjedbe. U iznimnim slučajevima, predsjednik može sazvati saslušanje dotičnog zastupnika.\n\r\
\n\r\
Odluka se dotičnom zastupniku dostavlja preporučenim pismom ili mu je, u hitnim slučajevima, dostavljaju podvornici.\n\r\
\n\r\
Nakon dostave odluke dotičnom zastupniku, predsjednik u Parlamentu priopćava svaku sankciju izrečenu zastupniku. O njoj obavještava predsjedatelje tijela, odbora i izaslanstava čiji je zastupnik član.\n\r\
\n\r\
Nakon što sankcija postane konačna, do kraja se saziva objavljuje na vidljivom mjestu na internetskoj stranici Parlamenta i tamo ostaje do kraja parlamentarnog saziva .\n\r\
\n\r\
2.   Kod procjene opaženog ponašanja u obzir se uzima njegova iznimnost, učestalost ili ustrajnost te stupanj njegove ozbiljnosti.\n\r\
\n\r\
Vidljive radnje koje se mogu tolerirati, pod uvjetom da nisu uvredljive, klevetničke, rasističke ili ksenofobne te da ostaju u prihvatljivim granicama, treba razlikovati od onih koje aktivno ometaju parlamentarne aktivnosti.\n\r\
\n\r\
3.   Sankcija se može sastojati od jedne ili više sljedećih mjera:\n\r\
\n\r\
(a)   ukor;\n\r\
\n\r\
(b)   gubitak prava na dnevnicu za razdoblje od dva do trideset dana;\n\r\
\n\r\
(c)   privremeno oduzimanje prava sudjelovanja u svim ili nekim aktivnostima Parlamenta za razdoblje od dva do trideset dana tijekom kojih se sastaje Parlament ili bilo koje njegovo tijelo, odbor ili izaslanstvo, ne dovodeći u pitanje pravo glasa na plenarnoj sjednici i uvjetovano, u ovom slučaju, strogim pridržavanjem pravila ponašanja zastupnika;\n\r\
\n\r\
(d)   zabrana da zastupnik predstavlja Parlament u okviru međuparlamentarnog izaslanstva, međuparlamentarne konferencije ili bilo kojeg međuparlamentarnog foruma, u trajanju do jedne godine;\n\r\
\n\r\
(e)   u slučaju povrede povjerljivosti, ograničenje prava na pristup povjerljivim ili tajnim informacijama u trajanju do jedne godine.\n\r\
\n\r\
4.   Mjere utvrđene u stavku 3. točkama od (b) do (e) mogu se udvostručiti u slučaju ponovljenih prijestupa ili ako zastupnik odbije poštovati mjeru donesenu u skladu s člankom 165. stavkom 3.\n\r\
\n\r\
5.   Osim toga, predsjednik može Konferenciji predsjednika dodatno podnijeti prijedlog da se zastupnika u Parlamentu privremeno ili trajno razriješi jedne ili više dužnosti koje obnaša u skladu s postupkom utvrđenim u članku 21."
},
{
'id': 167,
'title': 'Članak 167. : Unutarnji žalbeni postupak',
'text': "Zastupnik može Predsjedništvu podnijeti unutarnju žalbu u roku od dva tjedna od obavijesti o sankciji koju je izrekao predsjednik na temelju članka 166. stavaka od 1. do 4. Žalba ima za posljedicu prekid primjene sankcije. Predsjedništvo može u roku od najkasnije četiri tjedna od podnošenja žalbe ili, ako se ne sastane u tom roku, na svojoj sljedećoj sjednici, poništiti, potvrditi ili izmijeniti izrečenu sankciju, ne dovodeći u pitanje mogućnost žalbe izvan Parlamenta koju ima dotični zastupnik. Ako Predsjedništvo ne donese odluku u tom roku, sankcija se smatra poništenom."
},
{
'id': 168,
'title': 'Članak 168. : Kvorum',
'text': "1.   Parlament može raspravljati, utvrditi dnevni red i usvojiti zapisnik bez obzira na broj nazočnih zastupnika.\n\r\
\n\r\
2.   Kvorum je postignut ako je u vijećnici nazočna jedna trećina zastupnika u Parlamentu.\n\r\
\n\r\
3.   Glasovanje je valjano bez obzira na broj zastupnika koji glasuju osim ako predsjednik, na zahtjev koji prije početka glasovanja podnese najmanje 40 zastupnika, ustanovi da nema kvoruma. Ako je broj nazočnih zastupnika nedovoljan za kvorum, predsjednik objavljuje da nema kvoruma i točka o kojoj se glasovalo uvrštava se u dnevni red sljedeće sjednice.\n\r\
\n\r\
Elektronički sustav glasovanja može se upotrijebiti u svrhu provjere praga od 40 zastupnika, ali ga se ne može upotrijebiti za provjeru kvoruma. Vrata vijećnice ne smiju se zatvarati.\n\r\
\n\r\
4.   Zastupnici koji traže utvrđivanje kvoruma moraju biti nazočni u vijećnici prilikom podnošenja zahtjeva te se računaju kao nazočni u smislu stavaka 2. i 3., čak i ako potom napuste vijećnicu.\n\r\
\n\r\
5.   Ako je nazočno manje od 40 zastupnika, predsjednik može utvrditi da nema kvoruma.\n\r\
\n\r\
Članak 168.a : Pragovi\n\r\
\n\r\
1.   Za potrebe ovog Poslovnika, osim ako nije drukčije odlučeno, primjenjuju se sljedeće definicije:\n\r\
\n\r\
(a)   „niski prag” znači jedna dvadesetina zastupnika ili jedan klub zastupnika u Parlamentu;\n\r\
\n\r\
(b)   „srednji prag” znači jedna desetina zastupnika u Parlamentu, koju čine jedan ili više klubova zastupnika ili pojedinačnih zastupnika ili kombinacija toga dvoga;\n\r\
\n\r\
(c)   „visoki prag” znači jedna petina zastupnika u Parlamentu, koju čine jedan ili više klubova zastupnika ili pojedinačnih zastupnika ili kombinacija toga dvoga.\n\r\
\n\r\
2.   Ako je potreban potpis zastupnika kako bi se utvrdilo je li dosegnut primjenjivi prag, zastupnik svoj potpis može dati vlastoručno ili u elektroničkom obliku preko sustava elektroničkog potpisa Parlamenta. Zastupnik u odgovarajućem roku može povući svoj potpis, ali ga poslije toga ne može ponovno dati.\n\r\
\n\r\
3.   Ako je za postizanje praga potrebna potpora kluba zastupnika, njega predstavlja predsjednik kluba zastupnika ili osoba koju je imenovao u tu svrhu.\n\r\
\n\r\
4.   Za primjenu srednjeg i visokog praga potpora kluba zastupnika računa se na sljedeći način:\n\r\
\n\r\
-   u slučaju pozivanja na članak kojim je utvrđen prag tijekom sjednice: svi fizički prisutni zastupnici koji pripadaju klubu zastupnika koji pruža potporu;\n\r\
\n\r\
-   u ostalim slučajevima: svi zastupnici koji pripadaju klubu zastupnika koji pruža potporu."
},
{
'id': 169,
'title': 'Članak 169. : Podnošenje i obrazlaganje amandmana',
'text': "1.   Nadležni odbor, klub zastupnika ili zastupnici koji dosežu barem niski prag mogu podnijeti amandmane na razmatranje u Parlamentu. Objavljuju se imena svih supotpisnika.\n\r\
\n\r\
Amandmani se podnose u pisanom obliku i uz potpise podnositelja.\n\r\
\n\r\
Amandmani na prijedloge pravno obvezujućih akata mogu biti popraćeni kratkim obrazloženjem. Za ta obrazloženja odgovoran je podnositelj i o njima se ne glasuje.\n\r\
\n\r\
2.   Podložno ograničenjima utvrđenima člankom 170. amandmanom se može tražiti izmjena bilo kojeg dijela teksta. Može se odnositi na brisanje, dodavanje ili zamjenjivanje riječi ili brojki.\n\r\
\n\r\
U ovom članku i članku 170. riječ „tekst” odnosi se na cijeli prijedlog rezolucije/nacrta zakonodavne rezolucije, prijedlog odluke ili prijedlog pravno obvezujućeg akta.\n\r\
\n\r\
3.   Predsjednik određuje rok za podnošenje amandmana.\n\r\
\n\r\
4.   Tijekom rasprave amandman može obrazložiti njegov podnositelj ili bilo koji drugi zastupnik kojeg podnositelj imenuje za svojeg zamjenika.\n\r\
\n\r\
5.   Amandman se ne razmatra ako ga podnositelj povuče osim ako ga odmah ne preuzme drugi zastupnik.\n\r\
\n\r\
6.   O amandmanima se glasuje tek nakon što ih se stavi na raspolaganje na svim službenim jezicima osim ako Parlament ne odluči drukčije. Parlament ne može odlučiti drukčije ako se najmanje 40 zastupnika tome protivi. Parlament izbjegava donositi odluke kojima se u neprihvatljivoj mjeri zastupnici koji govore određeni jezik stavljaju u nepovoljan položaj..\n\r\
\n\r\
Kad je nazočno manje od 100 zastupnika, Parlament ne može odlučiti drukčije ako najmanje jedna desetina nazočnih zastupnika uloži prigovor.\n\r\
\n\r\
Na prijedlog predsjednika, s usmenim amandmanom ili bilo kojom drugom usmenom izmjenom postupa se kao s amandmanom koji nije dostupan na svim službenim jezicima. Ako predsjednik na temelju članka 170. stavka 2. smatra da je dopušten, te ako prigovor ne bude uložen u skladu s člankom 169. stavkom 6., stavlja se na glasovanje u skladu s utvrđenim redoslijedom glasovanja.\n\r\
\n\r\
Broj glasova potrebnih da se u odboru uloži prigovor na glasovanje o takvom amandmanu ili takvoj izmjeni utvrđuje se na temelju članka 209., razmjerno broju glasova potrebnih na plenarnoj sjednici koji se, prema potrebi, zaokružuje na sljedeći puni broj."
},
{
'id': 170,
'title': 'Članak 170. : Dopuštenost amandmana',
'text': "1.   Ne dovodeći u pitanje dodatne uvjete utvrđene u članku 52. stavku 4. u vezi s izvješćima o vlastitoj inicijativi i članku 69. stavku 2. u vezi s amandmanima na stajalište Vijeća, amandman nije dopušten ako se:\n\r\
\n\r\
(a)   ne odnosi izravno na tekst čiju izmjenu traži;\n\r\
\n\r\
(b)   njime traži brisanje ili zamjena teksta u cijelosti;\n\r\
\n\r\
(c)   njime traži izmjena više od jednog pojedinačnog članka ili stavka teksta na koji se odnosi, uz iznimku kompromisnih amandmana i amandmana kojima se traže identične promjene određenog oblika riječi u cijelom tekstu;\n\r\
\n\r\
(d)   njime traži izmjena prijedloga kodifikacije zakonodavstva Unije; međutim, članak 103. stavak 3. drugi podstavak primjenjuje se mutatis mutandis;\n\r\
\n\r\
(e)   njime traži izmjena onih dijelova prijedloga preinake zakonodavstva Unije koji u tom prijedlogu ostaju neizmijenjeni; međutim, članak 104. stavak\n\r\
\n\r\
(f)   njime samo želi osigurati jezična točnost ili urediti terminološka dosljednost teksta na jeziku na kojem je amandman podnesen; u tom slučaju predsjednik zajedno s uključenim stranama traži odgovarajuće jezično rješenje.\n\r\
\n\r\
2.   O dopuštenosti amandmana odlučuje predsjednik.\n\r\
\n\r\
Predsjednikova odluka iz stavka 2., koja se odnosi na dopuštenost amandmana, ne temelji se isključivo na odredbama stavka 1. ovog članka, već na odredbama Poslovnika općenito.\n\r\
\n\r\
3.   Klub zastupnika ili zastupnici koji dosežu barem niski prag mogu podnijeti alternativni prijedlog rezolucije kojim traže zamjenu nezakonodavnog prijedloga rezolucije sadržanog u izvješću odbora.\n\r\
\n\r\
U tom slučaju taj klub ili zastupnici ne mogu podnositi amandmane na prijedlog rezolucije nadležnog odbora. Alternativni prijedlog rezolucije ne smije biti duži od prijedloga rezolucije odbora. O njemu se u Parlamentu glasuje jedinstvenim glasovanjem bez amandmana.\n\r\
\n\r\
Članak 123. stavak 4. i stavak 5. u vezi sa zajedničkim prijedlozima rezolucija primjenjuju se na odgovarajući način.\n\r\
\n\r\
4.   Uz suglasnost predsjednika, amandmani se iznimno mogu podnositi nakon isteka roka za njihovo podnošenje ako je riječ o kompromisnim amandmanima ili u slučaju tehničkih problema. Predsjednik odlučuje o dopuštenosti takvih amandmana. Za glasovanje o tim amandmanima predsjednik mora dobiti suglasnost Parlamenta.\n\r\
\n\r\
Mogu se primijeniti sljedeći opći kriteriji dopuštenosti kompromisnih amandmana:\n\r\
\n\r\
-   kompromisni amandmani u pravilu se odnose na dijelove teksta koji su bili predmet amandmana prije roka za podnošenje amandmana;\n\r\
\n\r\
-   kompromisne amandmane u pravilu podnose klubovi zastupnika koji predstavljaju većinu u Parlamentu, predsjednici ili izvjestitelji dotičnih odbora ili podnositelji drugih amandmana;\n\r\
\n\r\
-   kompromisni amandmani u pravilu imaju za posljedicu povlačenje drugih amandmana na isti dio teksta.\n\r\
\n\r\
Jedino predsjednik može predložiti razmatranje kompromisnog amandmana. Da bi se glasovalo o kompromisnom amandmanu, predsjednik mora dobiti suglasnost Parlamenta, provjeravajući ima li prigovora na održavanje tog glasovanja. U slučaju prigovora, Parlament o predmetu odlučuje većinom danih glasova."
},
{
'id': 171,
'title': 'Članak 171. : Postupak glasovanja',
'text': "1.   Osim ako ovim Poslovnikom nije predviđeno drukčije, na glasovanja o tekstovima podnesenim Parlamentu primjenjuje se sljedeći postupak:\n\r\
\n\r\
(a)   najprije se, prema potrebi, glasuje o svim amandmanima na prijedlog pravno obvezujućeg akta,\n\r\
\n\r\
(b)   potom se, prema potrebi, glasuje o tom prijedlogu u cijelosti, bilo da je izmijenjen ili ne,\n\r\
\n\r\
(c)   potom se glasuje o svim amandmanima na prijedlog rezolucije ili na nacrt zakonodavne rezolucije,\n\r\
\n\r\
(d)   na kraju se glasuje o prijedlogu rezolucije u cijelosti (konačno glasovanje).\n\r\
\n\r\
Parlament ne glasuje ni o jednom obrazloženju sadržanom u izvješću.\n\r\
\n\r\
2.   Prilikom glasovanja o prijedlozima pravno obvezujućih akata i o nezakonodavnim prijedlozima rezolucija najprije se glasuje o suštinskim dijelovima, a potom o citatima i uvodnim izjavama.\n\r\
\n\r\
3.   Amandman se ne razmatra ako nije u skladu s odlukama koje su o tekstu prethodno donesene tijekom istog glasovanja.\n\r\
\n\r\
4.   Za vrijeme glasovanja smije govoriti samo izvjestitelj, ili umjesto njega, predsjednik odbora. Ima priliku ukratko iznijeti stajališta nadležnog odbora o amandmanima o kojima se glasuje."
},
{
'id': 172,
'title': 'Članak 172. : (Briše se.)',
'text': ""
},
{
'id': 173,
'title': 'Članak 173. : (Briše se.)',
'text': ""
},
{
'id': 174,
'title': 'Članak 174. : Redoslijed glasovanja o amandmanima',
'text': "1.   Amandmani imaju prednost pred tekstom na koji se odnose i o njima se glasuje prije glasovanja o tekstu.\n\r\
\n\r\
2.   Ako su na isti dio teksta podnesena dva ili više amandmana koji se međusobno isključuju, prednost ima onaj amandman koji se najviše razlikuje od izvornog teksta i o njemu se najprije glasuje. Ako ga se prihvati, ostali amandmani smatraju se odbijenima; a ako ga se odbije, glasuje se o amandmanu koji je sljedeći prema redu prvenstva i postupak se ponavlja za svaki od preostalih amandmana. Ako postoji dvojba o redu prvenstva, odluku donosi predsjednik. Ako su odbijeni svi amandmani, izvorni tekst smatra se usvojenim, osim ako u predviđenom roku nije zatraženo odvojeno glasovanje.\n\r\
\n\r\
3.   Međutim, ako smatra da će to olakšati glasovanje, predsjednik može staviti na glasovanje najprije izvorni tekst ili staviti na glasovanje amandman koji je bliži izvornom tekstu prije amandmana koji se najviše razlikuje od izvornog teksta.\n\r\
\n\r\
Ako bilo koji od njih dobije većinu glasova, ostali amandmani podneseni na isti dio teksta se ne razmatraju.\n\r\
\n\r\
4.   Ako se glasuje o kompromisnim amandmanima, oni imaju prednost prilikom glasovanja.\n\r\
\n\r\
5.   U slučaju glasovanja o kompromisnom amandmanu ne dopušta se glasovanje po dijelovima.\n\r\
\n\r\
6.   Ako je nadležni odbor podnio skup amandmana na tekst na koji se odnosi izvješće, predsjednik ih stavlja na glasovanje skupno, osim ako klub zastupnika ili zastupnici koji dosežu barem niski prag ne zahtijevaju odvojena glasovanja ili glasovanja po dijelovima o posebnim točkama ili ako su podneseni drugi konkurentni amandmani.\n\r\
\n\r\
7.   Predsjednik može staviti druge amandmane na skupno glasovanje ako se međusobno nadopunjavaju, osim ako klub zastupnika ili zastupnici koji dosežu barem niski prag ne zahtijevaju odvojena glasovanja ili glasovanja po dijelovima. Podnositelji amandmana mogu predložiti i skupna glasovanja ako se njihovi amandmani međusobno nadopunjavaju.\n\r\
\n\r\
8.   Predsjednik može odlučiti, ovisno o prihvaćanju ili odbijanju određenog amandmana, da se o nekoliko drugih amandmana sličnog sadržaja ili sa sličnim ciljevima glasuje skupno. Prije te odluke predsjednik može tražiti suglasnost Parlamenta.\n\r\
\n\r\
Takav skup amandmana može se odnositi na različite dijelove izvornog teksta.\n\r\
\n\r\
9.   Ako različiti autori podnesu dva ili više amandmana identičnog sadržaja, o njima se glasuje kao o jednom amandmanu.\n\r\
\n\r\
10.   U slučaju amandmana za koje se zahtijeva poimenično glasovanje glasuje se za svaki amandman pojedinačno."
},
{
'id': 175,
'title': 'Članak 175. : Odabir u odboru amandmana za plenarnu sjednicu',
'text': "Ako je više od 50 amandmana ili zahtjeva za glasovanje po dijelovima ili odvojeno glasovanje podneseno u vezi s tekstom koji je odbor podnio na razmatranje u Parlamentu, predsjednik može, nakon savjetovanja s predsjednikom nadležnog odbora, tražiti da se taj odbor sastane radi glasovanja o svakom od tih amandmana ili zahtjeva. Na plenarnoj sjednici glasuje se o amandmanu ili zahtjevu za glasovanje po dijelovima ili odvojeno glasovanje za koje je u ovoj fazi glasovala najmanje jedna trećina članova odbora."
},
{
'id': 176,
'title': 'Članak 176. : Glasovanje po dijelovima',
'text': "1.   Ako tekst o kojem će se glasovati sadrži dvije ili više odredbi, upućuje na dvije ili više točaka ili ga se može podijeliti na dva ili više dijelova s različitim značenjem i/ili normativnom vrijednošću, klub zastupnika ili zastupnici koji dosežu barem niski prag mogu zahtijevati glasovanje po dijelovima.\n\r\
\n\r\
2.   Zahtjev se podnosi najkasnije večer uoči glasovanja osim ako predsjednik ne odredi drukčiji rok. Predsjednik odlučuje o zahtjevu."
},
{
'id': 177,
'title': 'Članak 177. : Pravo glasa',
'text': "Pravo glasa je osobno pravo.\n\r\
\n\r\
Zastupnici glasuju pojedinačno i osobno.\n\r\
\n\r\
Svaka povreda ovog članka smatra se ozbiljnim slučajem narušavanja reda na koje se odnosi članak 166. stavak 1. i ima pravne posljedice navedene u tom članku."
},
{
'id': 178,
'title': 'Članak 178.',
'text': "1.   U Parlamentu se u pravilu glasuje dizanjem ruke.\n\r\
\n\r\
Međutim, predsjednik u bilo kojem trenutku može odlučiti da će se glasovanja provesti uz pomoć elektroničkog sustava glasovanja.\n\r\
\n\r\
2.   Predsjednik proglašava početak i završetak glasovanja.\n\r\
\n\r\
Nakon što predsjednik proglasi početak glasovanja, nitko osim njega ne smije govoriti do proglašenja završetka glasovanja.\n\r\
\n\r\
3.   Pri izračunu broja glasova za prihvaćanje ili odbijanje teksta u obzir se uzimaju samo glasovi za i protiv, osim ako je posebna većina utvrđena Ugovorima.\n\r\
\n\r\
4.   Ako predsjednik odluči da je rezultat glasovanja provedenog dizanjem ruke dvojben, ponovno se glasuje uz pomoć elektroničkog sustava glasovanja, a u slučaju da on ne radi, sjedenjem i ustajanjem.\n\r\
\n\r\
5.   Predsjednik utvrđuje rezultat glasovanja i objavljuje ga.\n\r\
\n\r\
6.   Rezultat glasovanja se bilježi."
},
{
'id': 179,
'title': 'Članak 179. : Konačno glasovanje',
'text': "Prilikom odlučivanja na temelju izvješća Parlament glasuje poimenično jedinstvenim i/ili konačnim glasovanjem u skladu s člankom 180. stavkom 3.\n\r\
\n\r\
Odredbe članka 179. o poimeničnom glasovanju se u slučaju postupka o imunitetu zastupnika ne odnose na izvješća predviđena člankom 8. stavkom 2., i člankom 9. stavcima 4., 7. i 9.\n\r\
\n\r\
Članak 179.a : Izjednačen broj glasova\n\r\
\n\r\
1.   U slučaju izjednačenog broja glasova prema članku 171. stavku 1. točki (b) ili (d), tekst se u cijelosti vraća odboru. To se također primjenjuje na glasovanje prema člancima 3. i 9.\n\r\
\n\r\
2.   U slučaju izjednačenog broja glasova o tekstu o kojem se u skladu s člankom 176. glasuje po dijelovima, tekst se smatra usvojenim.\n\r\
\n\r\
3.   U svim drugim slučajevima izjednačenog broja glasova tekst ili prijedlog smatraju se odbijenima, ne dovodeći u pitanje članke kojima je propisana kvalificirana većina.\n\r\
\n\r\
Članak 179.a stavak 3. tumači se tako da u slučaju izjednačenog broja glasova o nacrtu preporuke u skladu s člankom 141. stavkom 4. o neintervenciji u postupku pred Sudom Europske unije, takav izjednačen broj glasova ne znači donošenje preporuke za intervenciju Parlamenta u spomenutom postupku. U takvom se slučaju smatra da nadležni odbor nije dao nikakvu preporuku.\n\r\
\n\r\
Predsjednik može glasovati, ali njegov glas nije odlučujući."
},
{
'id': 180,
'title': 'Članak 180. : Poimenično glasovanje',
'text': "1.   Uz slučajeve predviđene tim člancima, poimenično se glasuje ako to pisanim putem zahtijeva klub zastupnika ili zastupnici koji dosežu barem niski prag najkasnije večer uoči glasovanja, osim ako predsjednik ne odredi drukčiji rok.\n\r\
\n\r\
Odredbe članka 180. o poimeničnom glasovanju se u slučaju postupka o imunitetu zastupnika ne odnose na izvješća predviđena člankom 8. stavkom 2., i člankom 9. stavcima 4., 7. i 9.\n\r\
\n\r\
2.   Svaki klub zastupnika može podnijeti najviše stotinu zahtjeva za poimenično glasovanje po sjednici.\n\r\
\n\r\
3.   Poimenično glasovanje provodi se uz pomoć elektroničkog sustava glasovanja.\n\r\
\n\r\
Ako upotreba tog sustava nije moguća iz tehničkih razloga, poimenično glasovanje može se provesti abecednim redom, počevši s imenom zastupnika koje odredi ždrijeb. Predsjednik glasuje posljednji. Glasovanje se provodi usmeno izgovaranjem riječi „da”, „ne” ili „uzdržan”.\n\r\
\n\r\
4.   Glasovanja se bilježe u zapisnik sa sjednice, pri čemu se imena zastupnika upisuju abecednim redom po klubu zastupnika zajedno s naznakom o tome kako su glasovali.\n\r\
\n\r\
Članak 180.a : Tajno glasovanje\n\r\
\n\r\
1.   O imenovanjima se glasuje tajno, ne dovodeći u pitanje članak 15. stavak 1. i članak 204. stavak 2. prvi podstavak.\n\r\
\n\r\
Prilikom izračuna broja glasova u obzir se uzimaju samo glasački listići s imenima kandidata.\n\r\
\n\r\
2.   Glasovanje se također provodi tajno ako to zahtijevaju zastupnici ili klub/klubovi zastupnika koji dosežu barem visoki prag. Ti zahtjevi moraju biti podneseni prije početka glasovanja.\n\r\
\n\r\
3.   Zahtjev za tajno glasovanje ima prednost pred zahtjevom za poimenično glasovanje.\n\r\
\n\r\
4.   Glasove nakon tajnog glasovanja prebrojavaju između dva i osam zastupnika odabranih ždrijebom, osim u slučaju elektroničkog glasovanja.\n\r\
\n\r\
U slučaju glasovanja iz stavka 1. kandidati ne smiju prebrojavati glasove.\n\r\
\n\r\
Imena zastupnika koji su sudjelovali u tajnom glasovanju bilježe se u zapisnik s dnevne sjednice na kojoj je provedeno glasovanje."
},
{
'id': 181,
'title': 'Članak 181. : Upotreba sustava elektroničkog glasovanja',
'text': "1.   Tehničke detalje upotrebe elektroničkog sustava glasovanja utvrđuje Predsjedništvo.\n\r\
\n\r\
2.   Prilikom elektroničkog glasovanja, osim ako se odnosi na poimenično glasovanje, bilježi se samo brojčani rezultat glasovanja.\n\r\
\n\r\
3.   Predsjednik u bilo kojem trenutku može odlučiti upotrijebiti sustav elektroničkog glasovanja u svrhu provjere praga."
},
{
'id': 182,
'title': 'Članak 182. : (Briše se.)',
'text': "Članak 182.a : Sporovi oko glasovanja\n\r\
\n\r\
1.   Pitanja o pridržavanju Poslovnika koja se odnose na valjanost glasovanja mogu se postaviti nakon što predsjednik proglasi glasovanje završenim.\n\r\
\n\r\
2.   Nakon objave rezultata glasovanja provedenog dizanjem ruke, svaki zastupnik može tražiti da se taj rezultat provjeri uz pomoć elektroničkog sustava glasovanja.\n\r\
\n\r\
3.   Predsjednik odlučuje je li objavljeni rezultat valjan. Njegova je odluka konačna."
},
{
'id': 183,
'title': 'Članak 183. : Obrazloženja glasovanja',
'text': "1.   Nakon zaključenja glasovanja svaki zastupnik može dati usmeno obrazloženje jedinstvenog i/ili konačnog glasovanja o točki koja je podnesena Parlamentu u trajanju od najdulje jedne minute. Svaki zastupnik može dati najviše tri usmena obrazloženja po sjednici.\n\r\
\n\r\
Pri takvom glasovanju svaki zastupnik može dati pisano obrazloženje glasovanja od najviše 200 riječi, koje se uključuje na stranicu zastupnika na internetskoj stranici Parlamenta.\n\r\
\n\r\
Svaki klub zastupnika može dati obrazloženje glasovanja u trajanju od najdulje dvije minute.\n\r\
\n\r\
Nakon što je započelo prvo obrazloženje glasovanja o prvoj točki, daljnji zahtjevi za davanje obrazloženja glasovanja se ne prihvaćaju.\n\r\
\n\r\
Obrazloženja glasovanja dopuštaju se za jedinstveno i/ili konačno glasovanje o bilo kojoj točki koja je podnesena Parlamentu. U svrhu ovog članka pojam „konačno glasovanje” ne odnosi se na vrstu glasovanja, već na posljednje glasovanje o bilo kojoj točki.\n\r\
\n\r\
2.   Obrazloženja glasovanja nisu dopuštena u slučaju tajnog glasovanja ili glasovanja o postupovnim predmetima.\n\r\
\n\r\
3.   Ako je točka uvrštena u dnevni red Parlamenta bez amandmana ili bez rasprave, zastupnici mogu samo podnijeti pisana obrazloženja glasovanja u skladu sa stavkom 1.\n\r\
\n\r\
Usmena ili pisana obrazloženja glasovanja moraju se odnositi izravno na točku koja je podnesena Parlamentu."
},
{
'id': 184,
'title': 'Članak 184. : (Briše se.)',
'text': "Članak 184.a : Pitanja o pridržavanju Poslovnika\n\r\
\n\r\
1.   Zastupnici mogu dobiti riječ kako bi predsjednika upozorili na svako nepridržavanje Poslovnika Parlamenta. Pri tome najprije navode članak na koji se pozivaju.\n\r\
\n\r\
2.   Zahtjev za postavljanje pitanja o pridržavanju Poslovnika ima prednost pred svim drugim javljanjima za riječ ili postupovnim prijedlozima.\n\r\
\n\r\
3.   Vrijeme za izlaganje ne smije biti dulje od jedne minute.\n\r\
\n\r\
4.   Predsjednik odmah odlučuje o pitanjima o pridržavanju Poslovnika u skladu s Poslovnikom i svoju odluku objavljuje odmah nakon postavljanja pitanja o pridržavanju Poslovnika. O predsjednikovoj odluci se ne glasuje.\n\r\
\n\r\
5.   Iznimno, predsjednik može izjaviti da će svoju odluku objaviti kasnije, ali ne kasnije od 24 sata nakon postavljanja pitanja o pridržavanju Poslovnika. Odgoda odluke nema za posljedicu odgodu rasprave. Predsjednik može uputiti predmet nadležnom odboru.\n\r\
\n\r\
Zahtjev za postavljanje pitanja o pridržavanju Poslovnika mora se odnositi na točku dnevnog reda o kojoj se raspravlja. Predsjednik može u odgovarajućem trenutku dopustiti pitanje o pridržavanju Poslovnika koje se odnosi na drugi predmet, npr. nakon zaključenja rasprave o dotičnoj točki dnevnog reda ili prije prekida dnevne sjednice."
},
{
'id': 185,
'title': 'Članak 185. : Postupovni prijedlozi',
'text': "1.   Javljanja za riječ vezana uz postupovni prijedlog koji se odnosi na:\n\r\
\n\r\
(a)   nedopuštenost predmeta (članak 187.),\n\r\
\n\r\
(b)   vraćanje predmeta odboru (članak 188.),\n\r\
\n\r\
(c)   zaključenje rasprave (članak 189.),\n\r\
\n\r\
(d)   odgoda rasprave ili glasovanja (članak 190.) ili\n\r\
\n\r\
(e)   prekid ili zaključenje dnevne sjednice (članak 191.)\n\r\
\n\r\
imaju prednost pred drugim javljanjima za riječ.\n\r\
\n\r\
Osim predlagatelja o tim prijedlozima riječ mogu imati samo jedan govornik protiv te predsjednik ili izvjestitelj nadležnog odbora.\n\r\
\n\r\
2.   Vrijeme za izlaganje ne smije biti dulje od jedne minute.Članak 186. : (Briše se.)"
},
{
'id': 186,
'title': 'Članak 186. : (Briše se.)',
'text': ""
},
{
'id': 187,
'title': 'Članak 187. : Prijedlog za proglašavanje predmeta nedopuštenim',
'text': "1.   Klub zastupnika ili zastupnici koji dosežu barem niski prag na početku rasprave o određenoj točki dnevnog reda mogu predložiti da se predmet  proglasi nedopuštenim. O tom prijedlogu glasuje se odmah.\n\r\
\n\r\
Namjera da se predmet proglasi nedopuštenim priopćava se predsjedniku najmanje 24 sata ranije, o čemu on odmah obavještava Parlament.\n\r\
\n\r\
2.   Ako je prijedlog prihvaćen, Parlament odmah prelazi na sljedeću točku dnevnog reda."
},
{
'id': 188,
'title': 'Članak 188. : Vraćanje predmeta odboru',
'text': "1.   Klub zastupnika ili zastupnici koji dosežu barem niski prag mogu zahtijevati vraćanje predmeta odboru prilikom utvrđivanja dnevnog reda ili prije početka rasprave.\n\r\
\n\r\
Namjera da se predloži vraćanje predmeta odboru priopćava se predsjedniku najmanje 24 sata ranije, o čemu on odmah obavještava Parlament.\n\r\
\n\r\
2.   Klub zastupnika ili zastupnici koji dosežu barem niski prag također mogu predložiti vraćanje predmeta odboru prije ili za vrijeme glasovanja. O tom se prijedlogu glasuje odmah.\n\r\
\n\r\
3.   Takav se prijedlog  može  se  podnijeti  samo  jednom  u  svakoj  fazi postupka iz stavaka 1. i 2.\n\r\
\n\r\
4.   Vraćanje predmeta odboru ima za posljedicu prekid razmatranja te točke.\n\r\
\n\r\
5.   Parlament može odrediti rok u kojem odbor mora izvijestiti o svojim zaključcima."
},
{
'id': 189,
'title': 'Članak 189. : Zaključenje rasprave',
'text': "1.    Na prijedlog predsjednika ili na zahtjev kluba zastupnika ili zastupnika koji dosežu barem niski prag rasprava se može zaključiti prije nego što se iscrpi popis govornika. O tom se prijedlogu ili zahtjevu glasuje odmah.\n\r\
\n\r\
2.    Ako su prijedlog ili zahtjev prihvaćeni, riječ može dobiti samo po jedan zastupnik iz svakog kluba zastupnika čiji članovi još nisu govorili u toj raspravi.\n\r\
\n\r\
3.   Nakon izlaganja na koja se odnosi stavak 2. rasprava se zaključuje i Parlament glasuje o predmetu o kojem se raspravlja, osim u slučaju kad je vrijeme glasovanja unaprijed određeno.\n\r\
\n\r\
4.   Ako su prijedlog ili zahtjev odbijeni, samo ih predsjednik može ponovno podnijeti tijekom iste rasprave."
},
{
'id': 190,
'title': 'Članak 190. : Odgoda rasprave ili glasovanja',
'text': "1.   Na početku rasprave o točki dnevnog reda klub zastupnika ili zastupnici koji dosežu barem niski prag mogu predložiti da se rasprava odgodi za određeni dan i vrijeme. O tom prijedlogu glasuje se odmah.\n\r\
\n\r\
Namjera da se predloži odgoda priopćava se predsjedniku najmanje 24 sata ranije. Predsjednik o o bilo kakvom priopćenju odmah obavještava Parlament.\n\r\
\n\r\
2.   Ako je prijedlog prihvaćen, Parlament prelazi na sljedeću točku dnevnog reda. Odgođena rasprava nastavlja se određenog dana i u određeno vrijeme.\n\r\
\n\r\
3.   Ako je prijedlog odbijen, ne može biti ponovno podnesen tijekom iste sjednice.\n\r\
\n\r\
4.   Prije ili tijekom glasovanja klub zastupnika ili zastupnici koji dosežu barem niski pragmogu predložiti odgodu glasovanja. O tom prijedlogu glasuje se odmah."
},
{
'id': 191,
'title': 'Članak 191. : Prekid ili zaključenje dnevne sjednice',
'text': "Dnevna sjednica može biti prekinuta ili zaključena za vrijeme rasprave ili glasovanja ako Parlament tako odluči na prijedlog predsjednika ili na zahtjev zastupnika ili kluba/klubova zastupnika koji dosežu barem visoki prag. O tom prijedlogu ili zahtjevu glasuje se odmah.\n\r\
\n\r\
Ako se podnese zahtjev za prekid ili zaključenje dnevne sjednice, postupak glasovanja o tom zahtjevu započinje bez ikakve odgode. Primjenjuje se uobičajeni način najavljivanja glasovanja na plenarnoj sjednici te bi se u skladu s postojećom praksom trebalo omogućiti dovoljno vremena da zastupnici dođu u vijećnicu.\n\r\
\n\r\
Analogno s člankom 149.a stavkom 2. podstavkom 2., ako je taj zahtjev odbačen, sličan zahtjev ne može se podnijeti opet tijekom istoga dana. U skladu s člankom 164.a predsjednik ima pravo prekinuti prekomjerno korištenje zahtjeva navedenih u ovome članku."
},
{
'id': 192,
'title': 'Članak 192. : Zapisnik',
'text': "1.   Zapisnik sa svake dnevne sjednice, u kojemu su navedene pojedinosti o radu, imenima govornika i odlukama Parlamenta, uključujući rezultat svakog glasovanja o svim amandmanima, stavlja se na raspolaganje najmanje pola sata prije početka popodnevnog dijela sljedeće dnevne sjednice.\n\r\
\n\r\
2.   Popis dokumenata koji čine podlogu parlamentarnih rasprava i odluka objavljuje se u zapisniku.\n\r\
\n\r\
3.   Na početku popodnevnog dijela svake dnevne sjednice predsjednik Parlamentu daje na usvajanje zapisnik s prethodne dnevne sjednice.\n\r\
\n\r\
4.   Ako netko iznese prigovor na zapisnik, Parlament po potrebi odlučuje treba li zatražene promjene uzeti u obzir. Nijedan zastupnik ne smije o tom pitanju govoriti dulje od jedne minute.\n\r\
\n\r\
5.   Predsjednik i glavni tajnik potpisuju zapisnik, koji se pohranjuje u arhiv Parlamenta. Objavljuje se u Službenom listu Europske unije."
},
{
'id': 193,
'title': 'Članak 193. : Usvojeni tekstovi',
'text': "1.   Tekstovi koje Parlament usvoji objavljuju se odmah nakon glasovanja. Zajedno sa zapisnicima odgovarajućih dnevnih sjednica daju se na uvid Parlamentu te se pohranjuju u njegov arhiv.\n\r\
\n\r\
2.   Tekstove koje Parlament usvoji potrebno je pravno i jezično finalizirati, što je u nadležnosti predsjednika. Kad su tekstovi usvojeni na temelju dogovora između Parlamenta i Vijeća, obje institucije dorađuju tekst suglasno i usko surađujući.\n\r\
\n\r\
3.   Kako bi se osigurala dosljednost i kvaliteta teksta u skladu s izraženom voljom Parlamenta, postupak utvrđen člankom 231. primjenjuje se kad su potrebne prilagodbe koje ne uključuju samo ispravke tiskarskih pogrešaka ili ispravke potrebne kako bi se osiguralo podudaranje svih jezičnih varijanti, njihova jezična točnost i terminološka dosljednost.\n\r\
\n\r\
4.   Stajališta koja Parlament usvaja redovnim zakonodavnim postupkom imaju oblik pročišćenog teksta. Ako Parlament ne glasuje na temelju dogovora s Vijećem, u pročišćenom se tekstu navode svi prihvaćeni amandmani.\n\r\
\n\r\
5.   Nakon finalizacije usvojene tekstove potpisuju predsjednik i glavni tajnik te se oni objavljuju u Službenom listu Europske unije."
},
{
'id': 194,
'title': 'Članak 194. : Doslovno izvješće',
'text': "1.   Doslovno izvješće rada svake dnevne sjednice sastavlja se kao višejezični dokument u kojem su sva usmena sudjelovanja u raspravi napisana na izvornom službenom jeziku.\n\r\
\n\r\
2.   Ne dovodeći u pitanje njegove ostale stegovne ovlasti, predsjednik može tražiti da se iz doslovnih izvješća izbrišu govori zastupnika kojima nije dana riječ ili koji nastave govoriti nakon isteka vremena koje im je dodijeljeno.\n\r\
\n\r\
3.   Govornici mogu napraviti ispravke zapisa svojih usmenih sudjelovanja u raspravi u roku od pet radnih dana. Ispravke se unutar toga roka šalju Glavnom tajništvu.\n\r\
\n\r\
4.   Višejezično doslovno izvješće objavljuje se u prilogu Službenom listu Europske unije i čuva se u arhivu Parlamenta.\n\r\
\n\r\
5.   Na zahtjev zastupnika, dio doslovnog izvješća prevodi se na bilo koji službeni jezik. Prijevod se po potrebi radi u kratkom roku."
},
{
'id': 195,
'title': 'Članak 195. : Audiovizualna snimka sjednice',
'text': "1.   Sjednice Parlamenta na jezicima na kojima se održavaju, kao i višejezični tonski zapis iz svih aktivnih prevodilačkih kabina, prenose se na njegovoj internetskoj stranici u stvarnom vremenu.\n\r\
\n\r\
2.   Odmah nakon sjednice izrađuju se indeksirana audiovizualna snimka rasprava na jezicima na kojima su održane i višejezični tonski zapis prijevoda iz svih aktivnih prevoditeljskih kabina te su oni do kraja parlamentarnog mandata i tijekom narednog parlamentarnog mandata dostupni na internetskoj stranici Parlamenta nakon čega se čuvaju u arhivu Parlamenta. Audiovizualna snimka se povezuje s višejezičnim doslovnim izvješćima s rasprave čim postanu dostupni."
},
{
'id': 196,
'title': 'Članak 196. : Osnivanje stalnih odbora(1)',
'text': "Na prijedlog Konferencije predsjednika Parlament osniva stalne odbore. Njihove se nadležnosti određuju u prilogu ovom Poslovniku (2) koji se prihvaća većinom danih glasova. Članovi odbora biraju se tijekom prve sjednice novoizabranog Parlamenta te iznova nakon dvije i pol godine.\n\r\
\n\r\
Nadležnosti stalnih odbora ne moraju se odrediti u trenutku njihova osnivanja.\n\r\
\n\r\
\n\r\
(1)	Izmjene članka 196  donesenog 13. prosinca 2016. (P8_TA(2016)0484) o članstvu u odborima primjenjuju se od početka prve sjednice nakon izbora za Parlament koji se trebaju održati 2019. Stoga nisu navedene u ovoj verziji.\n\r\
(2)	Vidi Prilog V."
},
{
'id': 197,
'title': 'Članak 197. : Posebni odbori',
'text': "1.   Na prijedlog Konferencije predsjednika Parlament može u bilo kojem trenutku osnovati posebne odbore, čije se nadležnosti, sastav i trajanje mandata određuju istovremeno s donošenjem odluke o njihovu osnivanju.(1)\n\r\
\n\r\
2.   Trajanje mandata posebnih odbora ne smije biti dulje od 12 mjeseci, osim ako ga Parlament po isteku ne produlji. Osim ako u odluci Parlamenta o osnivanju posebnog odbora nije navedeno drukčije, trajanje njegova mandata počinje teći od datuma njegove konstituirajuće sjednice.\n\r\
\n\r\
3.   Posebni odbori nemaju pravo davati mišljenja drugim odborima.\n\r\
\n\r\
\n\r\
(1)	Izmjene članka 197. stavka 1. donesenog 13. prosinca 2016. (P8_TA(2016)0484) o članstvu u odborima primjenjuje se samo na početku prve sjednice nakon izbora za Parlament koji se trebaju održati 2019. Stoga nisu navedene u ovoj verziji."
},
{
'id': 198,
'title': 'Članak 198. : Istražni odbori',
'text': "1.   U skladu s člankom 226. Ugovora o funkcioniranju Europske unije i člankom 2. Odluke 95/167/EZ, Euratom, EZUČ Europskog parlamenta, Vijeća i Komisije(1), Parlament može na zahtjev četvrtine svojih zastupnika osnovati istražni odbor kako bi istražio navodna kršenja ili nepravilnosti u provedbi prava Unije za koje su naizgled odgovorni institucija ili tijelo Europske unije, tijelo javne uprave države članice ili osobe koje su prema pravu Europske unije ovlaštene za provedbu tog prava.\n\r\
\n\r\
Ne mogu se podnositi amandmani u vezi s predmetom istrage koji je odredila četvrtina zastupnika u Parlamentu i rokom utvrđenim u stavku 11.\n\r\
\n\r\
2.   Odluka o osnivanju istražnog odbora objavljuje se u Službenom listu Europske unije u roku od mjesec dana od donošenja.\n\r\
\n\r\
3.   Način rada istražnog odbora uređen je odredbama Poslovnika koje se odnose na odbore, osim ako nije drukčije predviđeno ovim člankom i Odlukom 95/167/EZ, Euratom, EZUČ.\n\r\
\n\r\
4.   U zahtjevu za osnivanje odbora mora se točno navesti predmet istrage te se moraju detaljno obrazložiti razlozi za pokretanje istrage. Parlament na prijedlog Konferencije predsjednika odlučuje o tome hoće li osnovati odbor te ako ga osnuje, o njegovu sastavu u skladu s člankom 199.(2)\n\r\
\n\r\
5.   Istražni odbori nemaju pravo davati mišljenja drugim odborima.\n\r\
\n\r\
6.   U bilo kojoj fazi rada istražnog odbora glasovati mogu samo punopravni članovi ili, u njihovoj odsutnosti, zamjenici.\n\r\
\n\r\
7.   Istražni odbor bira predsjednika i potpredsjednike te imenuje jednog ili više izvjestitelja. Istražni odbor također može dodijeliti dužnosti, posebne zadaće ili odgovornosti svojim članovima koji potom o tome moraju detaljno izvijestiti odbor.\n\r\
\n\r\
8.   Između sjednica koordinatori odbora u hitnim slučajevima ili po potrebi imaju ovlasti odbora, što je podložno odobrenju tog odbora na njegovoj sljedećoj sjednici.\n\r\
\n\r\
9.   U vezi s jezicima koji se upotrebljavaju istražni odbor primjenjuje odredbe članka 158. Međutim, Predsjedništvo odbora:\n\r\
\n\r\
-   može ograničiti usmeno prevođenje na službene jezike članova odbora ako smatra da je to zbog povjerljivosti potrebno,\n\r\
\n\r\
-   donosi odluke o prevođenju primljenih dokumenata koje omogućavaju učinkovit i brz rad odbora tijekom rasprave te osigurati poštovanje potrebne tajnosti i povjerljivosti.\n\r\
\n\r\
10.   Ako tvrdnje o kršenju ili nepravilnosti pri provedbi prava Unije upućuju na moguću odgovornost određene institucije ili tijela vlasti države članice, istražni odbor može od parlamenta te države članice zatražiti da surađuje u istrazi.\n\r\
\n\r\
11.   Istražni odbor završava svoj rad predstavljanjem izvješća o rezultatima svoga rada Parlamentu u roku od najviše 12 mjeseci od svoje konstituirajuće sjednice. Parlament može dvaput odlučiti o produljenju tog roka za po tri mjeseca. Izvješće po potrebi može sadržavati mišljenja manjine u skladu s uvjetima utvrđenima u članku 52.a. Izvješće se objavljuje.\n\r\
\n\r\
Na zahtjev istražnog odbora Parlament održava raspravu o izvješću na prvoj sjednici nakon podnošenja izvješća.\n\r\
\n\r\
12.   Odbor također može Parlamentu podnijeti nacrt preporuke naslovljene na institucije ili tijela Europske unije ili država članica.\n\r\
\n\r\
13.   Predsjednik u skladu s Prilogom V. nadležnom odboru nalaže praćenje radnji koje se poduzimaju u vezi s rezultatima rada istražnog odbora i po potrebi izvještavanje o njima. Predsjednik poduzima sve daljnje korake koji se smatraju korisnima za osiguravanje primjene zaključaka istrage u praksi.\n\r\
\n\r\
\n\r\
(1)	Odluka 95/167/EZ, Euratom, EZUČ Europskog parlamenta, Vijeća i Komisije od 19. travnja 1995. o detaljnim odredbama o izvršavanju prava Europskog parlamenta na istragu (SL L 113, 19.5.1995., str.1.).\n\r\
(2)	Izmjene članka 198. stavka 3. (sada članka 198. stavka 4.) donesenog 13. prosinca 2016. (P8_TA(2016)0484) o članstvu u odborima primjenjuje se samo na početku prve sjednice nakon izbora za Parlament koji se trebaju održati 2019. Stoga nisu navedene u ovoj verziji."
},
{
'id': 199,
'title': 'Članak 199. : Sastav odbora(1)',
'text': "1.   Članovi odbora i istražnih odbora biraju se nakon što klubovi zastupnika i nezavisni zastupnici podnesu prijedloge kandidata. Konferencija predsjednika podnosi prijedloge Parlamentu. Koliko je god moguće, sastav odbora odražava sastav Parlamenta.\n\r\
\n\r\
Kad zastupnici promijene klub zastupnika, mjesta u parlamentarnim odborima zadržavaju do isteka dvoipolgodišnjeg mandata. Međutim, ako promjena kluba određenog zastupnika narušava pravednu zastupljenost političkih stajališta u odboru, Konferencija predsjednika daje nove prijedloge sastava tog odbora u skladu s postupkom utvrđenim u drugoj rečenici stavka 1., pri čemu moraju biti zajamčena osobna prava dotičnog zastupnika.\n\r\
\n\r\
Proporcionalna raspodjela mjesta u odboru među klubovima zastupnika ne smije odstupati od najbližeg odgovarajućeg cijelog broja. Ako klub odluči da neće prihvatiti mjesta u odboru, ta mjesta ostaju slobodna te se odbor smanjuje za odgovarajući broj mjesta. Razmjena mjesta između klubova zastupnika nije dopuštena.\n\r\
\n\r\
2.    Amandmani na prijedloge Konferencije predsjednika dopuštaju se samo ako ih podnese najmanje 40 zastupnika. Parlament o tim amandmanima odlučuje tajnim glasovanjem.\n\r\
\n\r\
3.    Izabranim članovima smatraju se oni zastupnici koje predloži Konferencija predsjednika, čiji su prijedlozi po potrebi promijenjeni u skladu sa stavkom 2.\n\r\
\n\r\
4.    Ako klub zastupnika ne podnese prijedlog kandidata za članstvo u istražnom odboru u skladu sa stavkom 1. u roku koji je odredila Konferencija predsjednika, ona podnosi Parlamentu samo prijedloge kandidata koje je primila u zadanom roku.\n\r\
\n\r\
5.   Konferencija predsjednika može, uz suglasnost osoba koje će biti imenovane, privremeno popuniti slobodna mjesta u odboru, uzimajući u obzir stavak 1.\n\r\
\n\r\
6.   Sve te promjene podnose se Parlamentu na odobrenje na sljedećoj dnevnoj sjednici.\n\r\
\n\r\
\n\r\
(1)	Izmjene članka 199. usvojene 13. prosinca 2016. (P8_TA(2016)0484) stupaju na snagu s početkom prve sjednice nakon izbora za Parlament koji bi se trebali održati 2019. Stoga se ne navode u ovoj verziji."
},
{
'id': 200,
'title': 'Članak 200. : Zamjenici(1)',
'text': "1.    Klubovi zastupnika i nezavisni zastupnici mogu imenovati onoliko stalnih zamjenika u svakom odboru koliko imaju punopravnih članova koji ih zastupaju u tom odboru. O tome se obavještava predsjednik. Stalni zamjenici imaju pravo sudjelovati i govoriti na sjednicama odbora te glasovati ako punopravni član nije nazočan.\n\r\
\n\r\
U odsutnosti punopravnog člana nekog odbora, stalni zamjenik iz istog kluba zastupnika ima pravo umjesto njega privremeno sudjelovati u glasovanju sve dok ne bude privremeno zamijenjen punopravnim članom u skladu s člankom 199. stavkom 5., ili, u nedostatku takve privremene zamjene, do imenovanja novog punopravnog člana. Ova se ovlast temelji na odluci Parlamenta u odnosu na brojčani sastav odbora i cilj joj je osigurati da broj zastupnika dotičnog kluba zastupnika koji mogu glasovati bude jednak onom prije nego što je zastupničko mjesto postalo slobodno.\n\r\
\n\r\
2.   Osim toga, u odsutnosti punopravnog člana i ako stalni zamjenici nisu imenovani ili su odsutni, punopravni se član odbora može dogovoriti da ga na sjednicama zastupa drugi član iz istog kluba zastupnika, koji će imati pravo glasa. O imenu zamjenika obavještava se predsjednik odbora prije početka glasovanja.\n\r\
\n\r\
Stavak 2. na odgovarajući se način primjenjuje i na nezavisne zastupnike.\n\r\
\n\r\
Prethodna obavijest iz zadnje rečenice stavka 2. mora se dati prije kraja rasprave ili prije početka glasovanja o točki ili točkama pri kojima se punopravni član zamjenjuje.***\n\r\
\n\r\
Odredbama ovog članka obuhvaćena su dva jasno definirana načela:\n\r\
\n\r\
-   klub zastupnika u odboru ne može imati više stalnih zamjenika nego što ima punopravnih članova;\n\r\
\n\r\
-   samo klubovi zastupnika smiju imenovati stalne zamjenike, pod jednim uvjetom, a taj je da o tome izvijeste predsjednika.\n\r\
\n\r\
Iz čega proizlazi:\n\r\
\n\r\
-   položaj stalnog zamjenika isključivo ovisi o članstvu u određenom klubu zastupnika;\n\r\
\n\r\
-   ako se broj punopravnih članova kluba zastupnika u odboru promijeni, u skladu s tim mijenja se i najveći mogući broj stalnih zamjenika koje taj klub može u odboru imenovati;\n\r\
\n\r\
-   zastupnici koji promijene klub ne mogu zadržati položaj stalnog zamjenika koji su imali kao članovi svog prvobitnog kluba;\n\r\
\n\r\
-    ni u kojem slučaju član odbora ne može zamjenjivati zastupnika iz nekog drugog kluba.\n\r\
\n\r\
\n\r\
(1)	Brisanje članka 200. o kojem je odlučeno 13. prosinca 2016. (P8_TA(2016)0484) stupa na snagu s početkom prve sjednice nakon izbora za Parlament koji bi se trebali održati 2019. Članak je stoga naveden u ovoj verziji."
},
{
'id': 201,
'title': 'Članak 201. : Dužnosti odbora',
'text': "1.   Stalni odbori bave se pitanjima koja im uputi Parlament ili, tijekom prekida zasjedanja, predsjednik Parlamenta u ime Konferencije predsjednika.\n\r\
\n\r\
2.   Kad su za rješavanje nekog pitanja nadležna dva ili više stalnih odbora, jedan se odbor proglašava nadležnim odborom, a ostali odborima čije se mišljenje traži.\n\r\
\n\r\
Međutim, jedno pitanje istovremeno smije biti upućeno najviše trima odborima, osim ako se ne odluči odstupiti od ovog pravila pod uvjetima utvrđenima stavkom 1.\n\r\
\n\r\
3.   Dva ili više odbora ili pododbora mogu zajednički razmatrati pitanja za koja su nadležni, ali ne mogu zajednički odlučivati, osim u slučaju primjene članka 55.\n\r\
\n\r\
4.   Svaki odbor može, uz suglasnost nadležnih tijela Parlamenta, povjeriti jednom ili više svojih članova da provedu studiju ili prikupe informacije.\n\r\
\n\r\
Članak 201.a : Pitanja nadležnosti\n\r\
\n\r\
1.   Ako se stalni odbor oglasi nenadležnim za razmatranje određene točke ili ako dođe do spora oko nadležnosti između dvaju ili više stalnih odbora, pitanje nadležnosti podnosi se Konferenciji predsjednika odbora u roku četiri tjedna nakon objave u Parlamentu o upućivanju tog predmeta odboru.\n\r\
\n\r\
2.   Konferencija predsjednika donosi odluku u roku od šest tjedana nakon podnošenja pitanja na temelju preporuke Konferencije predsjednika odbora ili ako ne bude takve preporuke, na temelju preporuke njezinog predsjednika. Ako Konferencija predsjednika ne donese odluku u zadanom roku, smatra se da je preporuka prihvaćena.\n\r\
\n\r\
3.   Predsjednici odbora mogu se s drugim predsjednicima odbora dogovoriti o dodjeli pojedinog predmeta određenom odboru, što je po potrebi podložno odobrenju postupka s pridruženim odborima u skladu s člankom 54."
},
{
'id': 202,
'title': 'Članak 202. : (Briše se.)',
'text': ""
},
{
'id': 203,
'title': 'Članak 203. : Pododbori',
'text': "1.   Pododbori se mogu osnovati u skladu s člankom 196. Stalni ili posebni odbor mogu također u interesu svojeg rada i uz prethodno odobrenje Konferencije predsjednika osnovati jedan ili više pododbora i istovremeno odlučiti o njihovu sastavu, u skladu s relevantnim odredbama utvrđenima u članku 199., i područjima nadležnosti, koja moraju ući u područje nadležnosti matičnog odbora. Pododbori odgovaraju svojim matičnim odborima.\n\r\
\n\r\
2.   Postupak za pododbore isti je kao i za odbore, osim ako nije drugačije navedeno u Poslovniku.\n\r\
\n\r\
3.   Punopravni članovi pododbora biraju se između članova matičnog odbora.\n\r\
\n\r\
4.   Zamjenici smiju biti nazočni na sjednicama pododbora pod istim uvjetima koji se primjenjuju na odbore.\n\r\
\n\r\
5.   Predsjednik matičnog odbora može uključiti predsjednike pododbora u rad koordinatora ili im dopustiti predsjedanje raspravama u matičnom odboru o pitanjima kojima se podrobnije bave dotični pododbori, pod uvjetom da se takav način postupanja podnese Predsjedništvu odbora na razmatranje te da se odobri."
},
{
'id': 204,
'title': 'Članak 204. : Predsjedništvo odbora',
'text': "1.   Nakon što su članovi odbora imenovani u skladu s člankom 199., odbor na prvoj sjednici bira Predsjedništvo koje se sastoji od predsjednika i potpredsjednika, izabranih između punopravnih članova tog odbora odvojenim glasovanjem. O broju potpredsjednika koji će biti izabrani odlučuje Parlament na prijedlog Konferencije predsjednika. Sastav predsjedništva svakog odbora mora odražavati raznolikost Parlamenta; nije dozvoljeno da svi članovi predsjedništva budu muškarci ili svi žene ili da su svi potpredsjednici iz iste države članice.\n\r\
\n\r\
2.   Kad je broj kandidata isti kao i broj slobodnih mjesta, izbor se provodi aklamacijom. Međutim, ako na pojedinom glasovanju ima više kandidata ili ako zastupnici ili klub/klubovi zastupnika koji dosežu barem visoki prag u odboru zatraže glasovanje, izbor se provodi tajnim glasovanjem.\n\r\
\n\r\
Ako postoji samo jedan kandidat, za izbor je potrebna apsolutna većina danih glasova za i protiv.\n\r\
\n\r\
Ako ima više kandidata, izabran je kandidat koji dobije apsolutnu većinu danih glasova na prvome glasovanju. Na drugom glasovanju izabran je kandidat koji dobije najviše glasova. Kod izjednačenog rezultata izabire se najstariji kandidat.\n\r\
\n\r\
3.   Sljedeći članci u vezi s obnašateljima dužnosti u Parlamentu primjenjuju se mutatis mutandis na odbore: Članak 14. (Privremeni predsjedatelj), članak 15. (Kandidature i opće odredbe), članak 16. (Izbor predsjednika – uvodni govor), članak 19. (Trajanje mandata obnašatelja dužnosti u Parlamentu) i članak 20. (Slobodna mjesta)."
},
{
'id': 205,
'title': 'Članak 205. : Koordinatori odbora',
'text': "1.   Klubovi zastupnika mogu jednog od svojih članova iz svakog odbora imenovati za koordinatora.\n\r\
\n\r\
2.   Predsjednik odbora po potrebi poziva koordinatore odbora na sastanak radi pripreme odluka koje odbor mora donijeti, posebno onih u vezi s postupkom i imenovanjem izvjestitelja. Odbor može delegirati na koordinatore ovlast za donošenje određenih odluka, izuzimajući odluke u vezi s usvajanjem izvješća, prijedloga rezolucija, mišljenja ili amandmana.\n\r\
\n\r\
Potpredsjednici mogu biti pozvani na sastanak koordinatora odbora u ulozi savjetnika.\n\r\
\n\r\
Ako nije moguće postići konsenzus, koordinatori mogu odlučivati samo većinom glasova koji jasno predstavljaju veliku većinu u odboru, uzimajući u obzir odnose snaga različitih klubova zastupnika.\n\r\
\n\r\
Predsjednik priopćava odboru sve odluke i preporuke koordinatora, koje se smatraju usvojenima ako nisu osporene. Navode se navode u zapisniku sa sjednice odbora.\n\r\
\n\r\
Nezavisni zastupnici ne čine klub zastupnika u smislu članka 32. i stoga ne mogu imenovati koordinatore, koji su jedini zastupnici s pravom sudjelovanja na sastancima koordinatora.\n\r\
\n\r\
U svakom slučaju, nezavisnim zastupnicima mora biti zajamčeno pravo na pristup informacijama, u skladu s načelom nediskriminacije, prosljeđivanjem informacija i nazočnošću člana tajništva nezavisnih zastupnika na sastancima koordinatora.\n\r\
\n\r\
Članak 205.a : Izvjestitelji u sjeni\n\r\
\n\r\
Klubovi zastupnika mogu za svako izvješće odrediti izvjestitelja u sjeni kako bi pratio napredak rada na određenom izvješću i kako bi unutar odbora u ime kluba nastojao postići kompromis. O imenima izvjestitelja u sjeni obavještava se predsjednik odbora."
},
{
'id': 206,
'title': 'Članak 206. : Sjednice odbora',
'text': "1.   Odbor saziva njegov predsjednik ili se sastaje na zahtjev predsjednika Parlamenta.\n\r\
\n\r\
Predsjednik pri sazivanju sjednice podnosi prijedlog njezina dnevnog reda. Odbor donosi odluku o dnevnome redu na početku sjednice.\n\r\
\n\r\
2.   Komisija, Vijeće i druge institucije Unije mogu dobiti riječ na sjednicama odbora ako ih u ime odbora pozove predsjednik odbora.\n\r\
\n\r\
Odbor može donijeti odluku te na sjednicu pozvati bilo koju drugu osobu i dati joj riječ.\n\r\
\n\r\
Nadležni odbor može, uz prethodno odobrenje Predsjedništva Parlamenta, organizirati saslušanje stručnjaka ako smatra da je ono od presudne važnosti za učinkovito obavljanje posla u vezi s određenim predmetom.\n\r\
\n\r\
3.   Ne dovodeći u pitanje članak 53. stavak 8. i osim ako određeni odbor ne odluči drukčije, zastupnici koji nazoče sjednicama odbora čiji nisu članovi ne mogu sudjelovati u raspravama.\n\r\
\n\r\
No odbor im može dopustiti da na njegovim sjednicama imaju savjetodavnu ulogu.\n\r\
\n\r\
4.   Članak 162. stavak 2. o raspodjeli vremena za izlaganje primjenjuje se mutatis mutandis na odbore.\n\r\
\n\r\
5.   Članak 194. stavci 2., 3. i 5. primjenjuju se mutatis mutandis u slučaju sastavljanja doslovnog izvješća."
},
{
'id': 207,
'title': 'Članak 207. : Zapisnik sa sjednice odbora',
'text': "Zapisnik sa svake sjednice odbora stavlja se na raspolaganje svim članovima odbora i podnosi se odboru na odobrenje."
},
{
'id': 208,
'title': 'Članak 208. : Glasovanje u odboru',
'text': "1.   Ne dovodeći u pitanje članak 66. stavak 3. o drugom čitanju, amandmane ili nacrte prijedloga za odbijanje podnesene na razmatranje u odboru mora uvijek potpisati punopravni član dotičnog odbora ili njegov zamjenik ili supotpisati barem jedan takav član.\n\r\
\n\r\
2.   Glasovanje odbora je valjano ako je nazočna četvrtina članova odbora. Ako prije glasovanja zastupnici ili klub/klubovi zastupnika koji dosežu barem visoki prag u odboru to zatraže, glasovanje je valjano samo ako glasuje većina njegovih članova.\n\r\
\n\r\
3.   U svakom jedinstvenom ili konačnom glasovanju u odboru o izvješću ili mišljenju glasuje se poimenično u skladu s člankom 180. stavcima 3. i 4. Kod glasovanja o amandmanima i drugim glasovanjima glasuje se dizanjem ruke osim ako predsjednik ne odluči održati elektroničko glasovanje ili ako zastupnici ili klub/klubovi zastupnika koji dosežu barem visoki prag u odboru ne zatraže poimenično glasovanje.\n\r\
\n\r\
Odredbe članka 208. stavka 3. o poimeničnom glasovanju se u slučaju postupka o imunitetu zastupnika ne odnose na izvješća predviđena člankom 8. stavkom 2., i člankom 9. stavcima 4., 7. i 9.\n\r\
\n\r\
4.   Na temelju podnesenih amandmana, umjesto da glasuje, odbor može zatražiti od izvjestitelja da podnese novi nacrt uzimajući u obzir što je moguće više amandmana. U tom slučaju određuje se novi rok za podnošenje amandmana."
},
{
'id': 209,
'title': 'Članak 209. : Odredbe u vezi s plenarnim sjednicama koje se primjenjuju na odbore',
'text': "Sljedeći članci u vezi s glasovanjem i javljanjima za riječ koja se odnose na postupak primjenjuju se mutatis mutandis na odbore: članak 164.a (Sprečavanje ometanja), članak 168.a (Pragovi), članak 169. (Podnošenje i obrazlaganje amandmana), članak 170. (Dopuštenost amandmana), članak 171. (Postupak glasovanja), članak 174. (Redoslijed glasovanja o amandmanima), članak 176. stavak 1. (Glasovanje po dijelovima), članak 177. (Pravo glasa), članak 178. (Glasovanje), članak 179.a (Izjednačen broj glasova), članak 180. stavci 3. i 4. (Poimenično glasovanje), članak 180.a (Tajno glasovanje), članak 181. (Upotreba sustava elektroničkog glasovanja), članak 182.a (Sporovi oko glasovanja), članak 184.a (Pitanja o pridržavanju Poslovnika), članak 190. (Odgoda rasprave ili glasovanja) i  članak 191. (Prekid ili zaključenje dnevne sjednice)."
},
{
'id': 210,
'title': 'Članak 210. : Vrijeme za pitanja u odboru',
'text': "Ako odbor tako odluči, može se održati vrijeme za pitanja u odboru. Svaki odbor odlučuje o svojim pravilima tijekom vremena za pitanja.\n\r\
\n\r\
Članak 210.a : Postupak za rad odbora s povjerljivim informacijama koje je Parlament zaprimio\n\r\
\n\r\
1.   Kad Parlament ima pravnu obvezu postupati povjerljivo sa zaprimljenim informacijama, predsjednik nadležnog odbora po službenoj dužnosti primjenjuje postupak povjerljivosti u skladu sa stavkom 3.\n\r\
\n\r\
2.   Ne dovodeći u pitanje stavak 1., u odsutnosti bilo kakve pravne obveze povjerljivog postupanja sa zaprimljenim informacijama, bilo koji odbor može na temelju pisanog ili usmenog zahtjeva jednog od svojih članova primijeniti postupak povjerljivosti u skladu sa stavkom 3. na informacije ili dokumente navedene u tom zahtjevu. U tom je slučaju za donošenje odluke o primjeni postupka povjerljivosti potrebna dvotrećinska većina nazočnih članova.\n\r\
\n\r\
3.   Kada predsjednik odbora proglasi da se primjenjuje povjerljivi postupak, na raspravi su nazočni samo članovi odbora, dužnosnici i stručnjaci koje je predsjednik unaprijed odredio i čija je nazočnost nužna.\n\r\
\n\r\
Dokumenti se distribuiraju na početku, a skupljaju na kraju sjednice. Označeni su brojevima. Nije dopušteno raditi bilješke ni preslike.\n\r\
\n\r\
U zapisniku sa sjednice ne navode se podrobnosti rasprave o točki obrađenoj u okviru postupka povjerljivosti. Dozvoljeno je zabilježiti samo relevantnu odluku ako je donesena.\n\r\
\n\r\
4.   Zastupnici ili klub/klubovi zastupnika koji dosežu barem srednji prag u odboru koji je primijenio postupak povjerljivosti mogu zatražiti razmatranje kršenja povjerljivosti. Taj zahtjev može biti uvršten na dnevni red sljedeće sjednice odbora. Većinom glasova svojih članova odbor može donijeti odluku o predaji predmeta predsjedniku radi daljnjeg razmatranja u skladu s člancima 11. i 166."
},
{
'id': 211,
'title': 'Članak 211. : Javna saslušanja o inicijativama građana',
'text': "1.   Nakon što Komisija u skladu s člankom 10. stavkom 1. točkom (a) Uredbe (EU) br. 211/2011 Europskog parlamenta i Vijeća(1) objavi inicijativu građana u odgovarajućem registru predsjednik Europskog parlamenta, na prijedlog predsjednika Konferencije predsjednika odbora:\n\r\
\n\r\
(a)   zadužuje odbor nadležan za dotično pitanje u skladu s Prilogom V. za organizaciju javnog saslušanja iz članka 11. Uredbe (EU) br. 211/2011; odbor nadležan za predstavke automatski se pridružuje u skladu s člankom 54.;\n\r\
\n\r\
(b)   može, u slučaju da se dvije ili više inicijativa građana objavljenih u odgovarajućem registru u skladu s člankom 10. stavkom 1. točkom (a) Uredbe (EU) br. 211/2011 bave sličnim pitanjima, nakon savjetovanja s organizatorima odlučiti da se organizira zajedničko javno saslušanje na kojem će se o svim uključenim inicijativama građana ravnopravno raspravljati.\n\r\
\n\r\
2.   Odbor nadležan za predmet:\n\r\
\n\r\
(a)   utvrđuje je li Komisija primila organizatore na odgovarajućoj razini u skladu s člankom 10. stavkom 1. točkom (b) Uredbe (EU) br. 211/2011;\n\r\
\n\r\
(b)   osigurava, ako je potrebno uz podršku Konferencije predsjednika odbora, da je Komisija propisno uključena u organizaciju javnog saslušanja te da je na primjeren način zastupljena na saslušanju.\n\r\
\n\r\
3.   Predsjednik odbora nadležnog za predmet saziva javno saslušanje na odgovarajući datum u roku od tri mjeseca od predaje inicijative Komisiji u skladu s člankom 9. Uredbe (EU) br. 211/2011.\n\r\
\n\r\
4.   Odbor nadležan za predmet organizira javno saslušanje u Parlamentu, po potrebi zajedno s drugim institucijama i tijelima Unije koja bi željela sudjelovati. Na sudjelovanje može pozvati i druge zainteresirane strane.\n\r\
\n\r\
Odbor nadležan za predmet poziva skupinu predstavnika organizatora, uključujući barem jednu kontaktnu osobu navedenu u članku 3. stavku 2. drugom podstavku Uredbe (EU) br. 211/2011, da na saslušanju predstave inicijativu.\n\r\
\n\r\
5.   Predsjedništvo u skladu sa sporazumima postignutima s Komisijom usvaja pravila o povratu nastalih troškova.\n\r\
\n\r\
6.   Predsjednik Parlamenta i predsjednik Konferencije predsjednika odbora može u skladu s ovim člankom te ovlasti prenijeti potpredsjedniku odnosno predsjedniku drugog odbora.\n\r\
\n\r\
7.   Ako su zadovoljeni uvjeti navedeni u članku 54. ili članku 55., te se odredbe također na odgovarajući način primjenjuju i na druge odbore. Također se primjenjuju članci 201. i 201.a.\n\r\
\n\r\
Članak 25. stavak 9. se ne primjenjuje na javna saslušanja za inicijative građana.\n\r\
\n\r\
8.   Ako Komisija ne podnese zakonodavni prijedlog o građanskoj inicijativi koja joj je uspješno predana u skladu s člankom 9. Uredbe (EU) br. 211/2011 unutar razdoblja od 12 mjeseci nakon što je dala pozitivno mišljenje o njoj i u komunikaciji navela koje mjere planira poduzeti, odbor nadležan za predmet može u dogovoru s organizatorima te građanske inicijative održati saslušanje te, prema potrebi, pokrenuti postupak iz članka 46. radi izvršavanja prava Europskog parlamenta da od Komisije zatraži podnošenje odgovarajućeg prijedloga.\n\r\
\n\r\
\n\r\
(1)	Uredba (EU) br. 211/2011 Europskog parlamenta i Vijeća od 16. veljače 2011 od 16. veljače 2011. o građanskoj inicijativi (SL L 65, 11.3.2011., str. 1.)."
},
{
'id': 212,
'title': 'Članak 212. :  Osnivanje i dužnosti međuparlamentarnih izaslanstava(1)',
'text': "1.   Na prijedlog Konferencije predsjednika Parlament osniva stalna međuparlamentarna izaslanstva i odlučuje o njihovoj naravi i broju članova, uzimajući u obzir njihove dužnosti. Članovi se biraju tijekom prve ili druge sjednice novoizabranog Parlamenta na razdoblje trajanja parlamentarnog saziva.\n\r\
\n\r\
2.   Članovi izaslanstava biraju se nakon što klubovi zastupnika i nezavisni zastupnici predlože kandidate Konferenciji predsjednika. Konferencija predsjednika podnosi Parlamentu prijedloge kojima se pokušava što je više moguće osigurati pravedno zastupanje država članica i političkih stajališta. Primjenjuje se članak 199. stavci 2., 3., 5. i 6.\n\r\
\n\r\
3.   Predsjedništva izaslanstava osnivaju se u skladu s postupkom utvrđenim člankom 204. koji se primjenjuje na stalne odbore.\n\r\
\n\r\
4.   Parlament određuje opće ovlasti pojedinih izaslanstava te može u bilo kojem trenutku povećati ili smanjiti te ovlasti.\n\r\
\n\r\
5.   Konferencija predsjednika, na prijedlog Konferencije predsjednika izaslanstava, donosi provedbene odredbe potrebne izaslanstvima za obavljanje njihova posla.\n\r\
\n\r\
6.   Predsjednik izaslanstva redovito izvješćuje odbor nadležan za vanjsku politiku o radu izaslanstva.\n\r\
\n\r\
7.   Predsjedniku izaslanstva pruža se prilika da bude saslušan pred odborom ako je na dnevnom redu sjednice odbora točka koja ima veze s područjem koje je u nadležnosti izaslanstva. Isto se primjenjuje na predsjednika ili izvjestitelja tog odbora na sastancima izaslanstva.\n\r\
\n\r\
\n\r\
(1)	Izmjene članka 212. stavaka 1. i 2. usvojene 13. prosinca 2016. (P8_TA(2016)0484) u odnosu na postojeća izaslanstva stupaju na snagu s početkom prve sjednice nakon izbora za Parlament koji bi se trebali održati 2019. Stoga se ne navode u ovoj verziji."
},
{
'id': 213,
'title': 'Članak 213. : (Briše se.)',
'text': ""
},
{
'id': 214,
'title': 'Članak 214. : Zajednički parlamentarni odbori',
'text': "1.   Europski  parlament  može  osnovati  zajedničke  parlamentarne  odbore  s  parlamentima država pridruženih Uniji ili država s kojima je Unija započela pristupne pregovore.\n\r\
\n\r\
Ti odbori mogu sastaviti preporuke koje se upućuju dotičnim parlamentima. U slučaju Europskog parlamenta te se preporuke upućuju nadležnom odboru koji predlaže daljnje radnje.\n\r\
\n\r\
2.   Opće ovlasti raznih zajedničkih parlamentarnih odbora određuje Europski parlament u skladu sa sporazumima s trećim zemljama.\n\r\
\n\r\
3.   Na zajedničke parlamentarne odbore primjenjuju se postupci utvrđeni odgovarajućim sporazumom. Temelje se na načelu jednakosti između izaslanstva Europskog parlamenta i izaslanstva drugog parlamenta iz zajedničkog odbora.\n\r\
\n\r\
4.   Zajednički parlamentarni odbori sastavljaju vlastiti poslovnik i podnose ga na odobrenje Predsjedništvu Europskog parlamenta i nadležnom tijelu nacionalnog parlamenta treće zemlje.\n\r\
\n\r\
5.   Izbor članova izaslanstava Europskog parlamenta u zajedničke parlamentarne odbore i osnivanje predsjedništava tih izaslanstava odvija se u skladu s postupkom utvrđenim za međuparlamentarna izaslanstva.\n\r\
\n\r\
\n\r\
Članak 214.a : Suradnja s Parlamentarnom skupštinom Vijeća Europe\n\r\
\n\r\
1.   Tijela Europskog parlamenta, a posebno njegovi odbori, surađuju s odgovarajućim tijelima Parlamentarne skupštine Vijeća Europe na područjima od zajedničkog interesa, posebno radi poboljšanja učinkovitosti i sprečavanja udvostručavanja posla.\n\r\
\n\r\
2.   Konferencija predsjednika u dogovoru s nadležnim tijelima Parlamentarne skupštine Vijeća Europe odlučuje o načinu suradnje."
},
{
'id': 215,
'title': 'Članak 215. : Pravo na predstavke',
'text': "1.   U skladu s člankom 227. Ugovora o funkcioniranju Europske unije, svi građani Europske unije i sve fizičke ili pravne osobe koje borave ili imaju sjedište u državi članici imaju pravo pojedinačno ili zajedno s drugim građanima ili osobama podnijeti Parlamentu predstavku u vezi s pitanjima koja su u području djelovanja Europske unije i koja ih se izravno tiču.\n\r\
\n\r\
2.   Na predstavkama koje se podnose Parlamentu mora pisati ime i stalna adresa svakog podnositelja predstavke.\n\r\
\n\r\
3.   Podnesci koji su upućeni Parlamentu bez jasne namjere da budu predstavke ne unose se u registar kao predstavke, već se odmah prosljeđuju odgovarajućoj službi radi daljnjeg postupanja.\n\r\
\n\r\
4.   Ako predstavku potpiše nekoliko fizičkih ili pravnih osoba, potpisnici predstavke određuju jednog predstavnika i zamjenike koji se u svrhu ove glave smatraju podnositeljima predstavke.\n\r\
\n\r\
Ako nije određen nijedan predstavnik, podnositeljem predstavke smatra se prvi potpisnik ili neka druga odgovarajuća osoba.\n\r\
\n\r\
5.   Svaki podnositelj predstavke može u bilo kojem trenutku povući potpis s predstavke.\n\r\
\n\r\
Povuku li svi podnositelji predstavke svoje potpise s predstavke, ona se poništava.\n\r\
\n\r\
6.   Predstavka mora biti napisana na službenom jeziku Europske unije.\n\r\
\n\r\
Predstavke napisane na bilo kojem drugom jeziku uzimaju se u obzir samo ako podnositelj predstavke priloži prijevod na jednom od službenih jezika. Prepiska između Parlamenta i podnositelja predstavke odvija se na tom službenom jeziku.\n\r\
\n\r\
Predsjedništvo može odlučiti da predstavke i prepiska s podnositeljima predstavki mogu biti sastavljene na drugim jezicima koji u skladu s ustavnim poretkom dotične države članice uživaju status službenog jezika na cijelom državnom području ili na jednom njegovu dijelu.\n\r\
\n\r\
7.   Predstavke se mogu podnijeti poštom ili s pomoću portala za predstavke koji je dostupan na mrežnoj stranici Parlamenta i koji podnositelja predstavke navodi kako sastaviti predstavku u skladu sa stavcima 1. i 2.\n\r\
\n\r\
8.   U slučaju zaprimanja nekoliko predstavki koje se bave sličnim pitanjem, moguće ih je obraditi skupno.\n\r\
\n\r\
9.   Ako ispunjavaju uvjete utvrđene stavkom 2., predstavke se unose u registar po redoslijedu primitka. Predstavke koje ne ispunjavaju te uvjete se pohranjuju te se podnositelj predstavke obavještava o razlozima.\n\r\
\n\r\
10.   Predsjednik predstavke upisane u registar šalje nadležnom odboru, koji najprije utvrđuje dopuštenost predstavke u skladu s člankom 227. Ugovora o funkcioniranju Europske unije.\n\r\
\n\r\
Ako u odboru nije postignut konsenzus oko dopuštenosti određene predstavke, predstavka se proglašava dopuštenom ako to zatraži najmanje trećina članova odbora.\n\r\
\n\r\
11.   Predstavke koje odbor proglasi nedopuštenima pohranjuju se, a podnositelji se obavještavaju o toj odluci i razlozima zbog kojih je donesena. Ako je moguće, preporuča se korištenje drugih pravnih sredstava.\n\r\
\n\r\
12.   Predstavke unesene u registar postaju javni dokument te Parlament može zbog transparentnosti objaviti ime podnositelja, mogućih supodnositelja i mogućih pobornika te sadržaj predstavke. Podnositelj predstavke, supodnositelji i pobornici obavješćuju se na odgovarajući način.\n\r\
\n\r\
13.   Neovisno o stavku 12. podnositelj predstavke, supodnositelj ili pobornik mogu zatražiti da se ne navede njihovo ime kako bi im se zaštitila privatnost. U tom slučaju Parlament mora udovoljiti njihovu zahtjevu.\n\r\
\n\r\
Kad se podnositeljeva pritužba ne može istražiti zbog zatražene anonimnosti, o daljnjim se koracima dogovara s podnositeljem.\n\r\
\n\r\
14.   Ako smatra da je to potrebno, Parlament može radi zaštite prava trećih strana po službenoj dužnosti ili na zahtjev dotične treće strane učiniti anonimnom predstavku i/ili ostale podatke koje ona sadrži.\n\r\
\n\r\
15.   Predstavke koje Parlamentu podnesu fizičke osobe koje nisu građani Europske unije niti u njoj borave, odnosno pravne osobe koje nemaju sjedište u državi članici, posebno se upisuju i pohranjuju. Predsjednik svaki mjesec odboru šalje popis takvih predstavki primljenih u prethodnom mjesecu, navodeći njihov predmet. Odbor može zatražiti uvid u one koje želi razmotriti."
},
{
'id': 216,
'title': 'Članak 216. : Razmatranje predstavki',
'text': "1.   Odbor nadležan za predstavke   razmatra   dopuštene   predstavke   u   sklopu   svojeg   redovnog   rada, raspravljajući o njima na redovnoj sjednici ili pisanim postupkom. Podnositelji predstavke mogu biti pozvani na sjednicu odbora ako se raspravlja o njihovoj predstavci ili sami mogu zatražiti da budu nazočni. O pravu na riječ podnositelja predstavke odlučuje predsjednik slobodnom ocjenom.\n\r\
\n\r\
2.   Odbor može u vezi s dopuštenom predstavkom podnijeti kratki prijedlog rezolucije Parlamentu, pod uvjetom da se unaprijed obavijesti Konferencija predsjednika odbora i da se tomu ne protivi Konferencija predsjednika. Ti prijedlozi rezolucija uvrštavaju se u prijedlog dnevnog reda sjednice koja se održava najkasnije osam tjedana nakon prihvaćanja prijedloga predstavke u odboru. O prijedlozima se glasuje jedinstvenim glasovanjem. Konferencija predsjednika može predložiti primjenu članka 151., a ako to ne učini se prijedlozi za predstavke usvajaju bez rasprave.\n\r\
\n\r\
3.   Kad odbor namjerava sastaviti izvješće o vlastitoj inicijativi u skladu s člankom 52. stavkom 1. u pogledu dopuštene predstavke i koje se posebno odnosi na primjenu ili tumačenje prava Unije ili predložene promjene postojećeg zakonodavstva, pridružuje se odbor nadležan za dotični predmet u skladu s člankom 53. i člankom 54. Nadležni odbor bez glasovanja prihvaća prijedloge za dijelove prijedloga rezolucije koje je primio od odbora nadležnog za dotični predmet, a koji se odnose na primjenu ili tumačenje prava Unije ili promjene postojećeg zakonodavstva. Ako odbor ne prihvati te prijedloge, pridruženi odbor nadležan za predmet može izravno podnijeti na plenarnoj sjednici.\n\r\
\n\r\
4.   Potpisnici mogu iskazati ili povući podršku dopuštenoj predstavci na portalu za predstavke. Taj je portal dostupan na mrežnoj stranici Parlamenta.\n\r\
\n\r\
5.   Odbor može zatražiti pomoć Komisije, posebno u obliku informacija u vezi s primjenom ili pridržavanjem prava Unije te oko informacija ili dokumenata vezanih uz predstavku. Predstavnici Komisije pozivaju se na sjednice odbora.\n\r\
\n\r\
6.   Odbor može tražiti od predsjednika Parlamenta da mišljenje ili preporuku odbora proslijedi Komisiji, Vijeću ili odgovarajućem tijelu u državi članici radi poduzimanja radnji ili davanja odgovora.\n\r\
\n\r\
7.   Odbor jednom godišnje izvještava Parlament o ishodu svojih razmatranja te, prema potrebi, o mjerama koje su poduzeli Vijeće ili Komisija u vezi s predstavkama koje im je uputio Parlament.\n\r\
\n\r\
Kad se završi razmatranje dopuštene predstavke, postupak se proglašava zaključenim na temelju odluke odbora.\n\r\
\n\r\
8.   Podnositelj predstavke obavještava se o svim relevantnim odlukama odbora i razlozima za njihovo donošenje.\n\r\
\n\r\
9.   Odbor može na zahtjev podnositelja predstavke donijeti odluku o ponovnom otvaranju predstavke ako su u vezi s njome podnesene nove relevantne činjenice.\n\r\
\n\r\
10.   Većinom glasova svojih članova odbor usvaja smjernice za postupanje s predstavkama u skladu s ovim Poslovnikom.\n\r\
\n\r\
Članak 216.a : Posjeti u svrhu utvrđivanja činjenica\n\r\
\n\r\
1.   Tijekom razmatranja predstavki, utvrđivanja činjenica ili traženja rješenja odbor može u svrhu prikupljanja informacija organizirati posjete u države članice ili regije o kojima se radi u dopuštenim predstavkama o kojima se već raspravljalo u odboru. Posjeti u svrhu utvrđivanja činjenica u pravilu obuhvaćaju pitanja kojima se bavi nekoliko predstavki. Primjenjuju se pravila Predsjedništva kojima se uređuje rad izaslanstava odbora unutar Europske unije.\n\r\
\n\r\
2.   Zastupnici izabrani u državi članici odredišta ne čine dio izaslanstva. Može im po službenoj dužnosti biti dopušteno pratiti izaslanstvo u posjetu u svrhu utvrđivanja činjenica.\n\r\
\n\r\
3.   Nakon svakog posjeta službeni članovi izaslanstva sastavljaju izvješće o posjetu. Voditelj izaslanstva koordinira sastavljanje izvješća i nastoji postići konsenzus o njegovu sadržaju među službenim članovima na ravnopravnoj osnovi. Ako ne postignu konsenzus, u izvješću o posjetu navode se različiti stavovi.\n\r\
\n\r\
Zastupnici koji su dio izaslanstva po službenoj dužnosti ne sudjeluju u sastavljanju izvješća.\n\r\
\n\r\
4.   Izvješće o posjetu, uključujući moguće preporuke, podnosi se odboru. Zastupnici mogu podnositi amandmane na preporuke, ali ne na dijelove izvješća koji se odnose na činjenice koje je utvrdilo izaslanstvo.\n\r\
\n\r\
Odbor najprije glasuje o amandmanima na preporuke, ako postoje, a potom o izvješću o posjetu u cjelini.\n\r\
\n\r\
Ako se odobri, izvješće o posjetu prosljeđuje se predsjedniku radi obavijesti."
},
{
'id': 217,
'title': 'Članak 217. : Obavijest o predstavkama',
'text': "1.   O predstavkama upisanima u registar naveden u članku 215. stavku 9. i glavnim odlukama u vezi s postupkom koji se mora primjenjivati u odnosu na određene predstavke obavještava se na plenarnoj sjednici. Te obavijesti unose se u zapisnik.\n\r\
\n\r\
2.   Naslov i sažetak sadržaja predstavki unesenih u registar te mišljenja i najvažnije odluke koji su poslani u vezi s razmatranjem predstavki dostupni su javnosti na portalu za predstavke na mrežnoj stranici Parlamenta."
},
{
'id': 218,
'title': 'Članak 218. : Inicijativa građana',
'text': "1.   Kad Europski parlament zaprimi obavijest da je Europska komisija pozvana da podnese zakonodavni prijedlog u skladu s odredbama članka 11. stavka 4. Ugovora o Europskoj uniji i u skladu s Uredbom (EU) br. 211/2011, Odbor za predstavke utvrđuje je li vjerojatno da će to utjecati na njegov rad, te, ako je potrebno, obavještava podnositelja predstavke o srodnoj temi.\n\r\
\n\r\
2.   Predložene inicijative građana koje su prijavljene u skladu s člankom 4. Uredbe (EU) br. 211/2011, ali koje ne mogu biti podnesene Komisiji u skladu s člankom 9. te iste Uredbe jer nisu poštovani svi navedeni relevantni postupci i uvjeti može razmotriti odbor nadležan za predstavke ako smatra da ih treba dodatno razmotriti. Članci 215., 216., 216.a i 217. primjenjuju se na odgovarajući način."
},
{
'id': 219,
'title': 'Članak 219. : Izbor Europskog ombudsmana',
'text': "1.   Na početku svakog parlamentarnog saziva ili u slučaju smrti, ostavke ili razrješenja Europskog ombudsmana predsjednik poziva na podnošenje kandidatura za funkciju Europskog ombudsmana i određuje rok u kojemu se kandidature moraju podnijeti. Poziv se objavljuje u Službenom listu Europske unije.\n\r\
\n\r\
2.   Kandidature mora podržati najmanje 40 zastupnika iz najmanje dvije države članice.\n\r\
\n\r\
Svaki zastupnik može podržati samo jednog kandidata.\n\r\
\n\r\
Uz kandidaturu moraju se priložiti svi dokumenti na osnovi kojih je moguće sa sigurnošću utvrditi da kandidat ispunjava uvjete utvrđene u članku 6. stavku 2. Odluke 94/262/EZUČ, EZ, Euratom Europskog parlamenta(1).\n\r\
\n\r\
3.   Kandidature se prosljeđuju nadležnom odboru. Pravovremeno se objavljuje cjeloviti popis zastupnika koji su dali svoju potporu kandidatima.\n\r\
\n\r\
4.   Nadležni odbor može pozvati kandidate na saslušanje. Na tim saslušanjima mogu biti nazočni svi zastupnici.\n\r\
\n\r\
5.   Abecedni popis dopuštenih kandidatura zatim se stavlja na glasovanje u Parlamentu.\n\r\
\n\r\
6.   Europski ombudsman izabire se većinom danih glasova.\n\r\
\n\r\
Ako nakon prva dva glasovanja nijedan kandidat nije izabran, dalje se mogu natjecati samo dva kandidata koja su u drugom glasovanju dobila najviše glasova.\n\r\
\n\r\
Kod svakog izjednačenog broja glasova izabire se najstariji kandidat.\n\r\
\n\r\
7.   Prije glasovanja predsjednik utvrđuje je li nazočna najmanje polovica zastupnika Parlamenta.\n\r\
\n\r\
8.   Europski ombudsman obnaša svoju dužnost dok njegov nasljednik ne stupi na dužnost, osim u slučaju smrti ili razrješenja dužnosti.\n\r\
\n\r\
\n\r\
(1)	Odluka 94/262/EZUČ, EZ, Euratom Europskog parlamenta od 9. ožujka 1994. o propisima i općim uvjetima koji uređuju obnašanje dužnosti Europskog ombudsmana (SL L 113, 4.5.1994., str. 15.)."
},
{
'id': 220,
'title': 'Članak 220. : Djelokrug rada Europskog ombudsmana',
'text': "1.   Nadležni odbor ispituje slučajeve nepravilnog postupanja uprave o kojima ga je obavijestio Europski ombudsman u skladu s člankom 3. stavcima 6. i 7. Odluke 94/262/EZUČ, EZ, Euratom, na temelju čega može odlučiti sastaviti izvješće u skladu s člankom 52.\n\r\
\n\r\
Nadležni odbor ispituje izvješće koje Europski ombudsman podnosi na kraju svakog godišnjeg zasjedanja o rezultatima svojih radnji ispitivanja, u skladu s člankom 3. stavkom 8. Odluke 94/262/EZUČ, EZ, Euratom. Nadležni odbor može Parlamentu podnijeti prijedlog rezolucije ako smatra da Parlament treba zauzeti stajalište u pogledu bilo kojeg aspekta tog izvješća.\n\r\
\n\r\
2.   Europski ombudsman također može na zahtjev nadležnog odbora ili na vlastitu inicijativu dati informacije nadležnom odboru."
},
{
'id': 221,
'title': 'Članak 221. : Razrješenje Europskog ombudsmana',
'text': "1.   Desetina zastupnika u Parlamentu može zatražiti razrješenje Europskog ombudsmana ako više ne udovoljava uvjetima koji su potrebni za obavljanje njegovih dužnosti ili ako je počinio ozbiljnu povredu radne dužnosti. Ako je u prethodna dva mjeseca izglasan takav zahtjev za razrješenje, novi zahtjev za razrješenje može podnijeti najmanje petina zastupnika u Parlamentu.\n\r\
\n\r\
2.   Zahtjev se šalje Europskom ombudsmanu i nadležnom odboru koji podnosi izvješće Parlamentu ako većina njegovih članova smatra da su razlozi opravdani. Na svoj zahtjev Europski ombudsman saslušava se prije glasovanja o izvješću. Nakon rasprave Parlament donosi odluku tajnim glasovanjem.\n\r\
\n\r\
3.   Prije glasovanja predsjednik utvrđuje je li nazočna polovica zastupnika u Parlamentu.\n\r\
\n\r\
4.   Ako je izglasano da Europskog ombudsmana treba razriješiti dužnosti, a on ipak ne odstupi, predsjednik najkasnije do prve sljedeće sjednice nakon one na kojoj je provedeno glasovanje traži od Suda da Europskog ombudsmana razriješi dužnosti i bez odgađanja donese odluku.\n\r\
\n\r\
Ostavkom Europskog ombudsmana taj se postupak okončava."
},
{
'id': 222,
'title': 'Članak 222. : Glavno tajništvo Parlamenta',
'text': "1.   Parlament ima glavnog tajnika kojega imenuje Predsjedništvo.\n\r\
\n\r\
Glavni tajnik svečano priseže pred Predsjedništvom da će svoje dužnosti obnašati savjesno i u potpunosti nepristrano.\n\r\
\n\r\
2.   Glavni je tajnik na čelu tajništva o čijem sastavu i organizaciji odlučuje Predsjedništvo.\n\r\
\n\r\
3.   Predsjedništvo određuje plan radnih mjesta Glavnog tajništva Parlamenta i propise u vezi s administrativnim i financijskim položajem dužnosnika i drugih službenika.\n\r\
\n\r\
Predsjednik Parlamenta o tomu obavještava odgovarajuće institucije Europske unije."
},
{
'id': 223,
'title': 'Članak 223. : (Briše se.)',
'text': "Članak 223.a : Ovlasti u vezi s europskim političkim strankama i europskim političkim zakladama(1)\n\r\
\n\r\
1.   Ako Parlament  u  skladu  s  člankom 65.  stavkom 1.  Financijske uredbe  odluči zadržati pravo odobravanja rashoda, on djeluje putem svojega Predsjedništva.\n\r\
\n\r\
Predsjedništvo je na toj osnovi nadležno za donošenje odluka na temelju članaka 17., 18., 24., članka 27. stavka 3. i članka 30. Uredbe (EU, Euratom) br. 1141/2014. Europskog parlamenta i Vijeća(2).\n\r\
\n\r\
Pojedinačne odluke koje Predsjedništvo donosi na temelju ovog stavka potpisuje predsjednik u njegovo ime i o njima se obavještava podnositelja zahtjeva ili korisnika u skladu s člankom 297. Ugovora o funkcioniranju Europske unije. U pojedinačnim odlukama navode se razlozi na kojima se one temelje u skladu s člankom 296. drugim stavkom tog Ugovora.\n\r\
\n\r\
Predsjedništvo može u bilo kojem trenutku zatražiti mišljenje Konferencije predsjednika.\n\r\
\n\r\
2.   Na zahtjev četvrtine zastupnika u Parlamentu koji predstavljaju najmanje tri kluba zastupnika, Parlament glasuje o odluci da se, u skladu s člankom 10. stavkom 3. Uredbe (EU, Euratom) br. 1141/2014, od Tijela za europske političke stranke i europske političke zaklade zatraži da provjeriti ispunjava li pojedina registrirana europska politička stranka ili europska politička zaklada uvjete utvrđene u članku 3. stavku 1. točki (c) i članku 3. stavku 2. točki (c) Uredbe (EU, Euratom) br. 1141/2014.\n\r\
\n\r\
3.   Na zahtjev četvrtine zastupnika u Parlamentu koji predstavljaju najmanje tri kluba zastupnika, Parlament glasuje o prijedlogu obrazložene odluke da se, u skladu s člankom 10. stavkom 4. Uredbe (EU, Euratom) br. 1141/2014, iznese prigovor na odluku Tijela za europske političke stranke i europske političke zaklade o brisanju pojedine europske političke stranke ili europske političke zaklade iz Registra u roku od tri mjeseca od dostavljanja odluke.\n\r\
\n\r\
Nadležni odbor podnosi prijedlog obrazložene odluke. Ako se taj prijedlog odbije, smatra se da je donesena suprotna odluka.\n\r\
\n\r\
4.   Na temelju prijedloga nadležnog odbora Konferencija predsjednika imenuje dva člana odbora neovisnih uglednih osoba u skladu s člankom 11. stavkom 1. Uredbe (EU, Euratom) br. 1141/2014.\n\r\
\n\r\
\n\r\
(1)	Članak 223.a primjenjuje se samo na europske političke stranke i europske političke zaklade u smislu članka 2. stavaka 3. i 4. Uredbe (EU, Euratom) br. 1141/2014. Vidjeti i bilješke uz članka 224. i 225.\n\r\
(2)	Uredba (EU, Euratom) br. 1141/2014 Europskog parlamenta i Vijeća od 22. listopada 2014. o statutu i financiranju europskih političkih stranaka i europskih političkih zaklada (SL L 317, 4.11.2014., str. 1.)."
},
{
'id': 224,
'title': 'Članak 224. : Ovlasti Predsjedništva (Briše se.)(1)',
'text': "1.   Predsjedništvo odlučuje o svim zahtjevima za dodjelu financijske potpore koje podnesu političke stranke na europskoj razini i o podjeli odobrenih sredstava između političkih stranaka kojima je zahtjev odobren. Predsjedništvo sastavlja popis korisnika sredstava i dodijeljenih iznosa.\n\r\
\n\r\
2.   Predsjedništvo odlučuje o prekidu isplate ili smanjenju financijske potpore i povratu iznosa koji su pogrešno isplaćeni.\n\r\
\n\r\
3.   Na kraju proračunske godine Predsjedništvo prihvaća konačna izvješća o aktivnostima i konačne financijske izvještaje političkih stranaka koje su dobile potporu.\n\r\
\n\r\
4.   Pod uvjetima utvrđenima Uredbom (EZ) br. 2004/2003 Europskog parlamenta i Vijeća Predsjedništvo može odobriti tehničku pomoć političkim strankama na europskoj razini u skladu s njihovim prijedlozima. Predsjedništvo može na glavnog tajnika delegirati ovlast za određene vrste odluka u vezi s odobravanjem tehničke pomoći.\n\r\
\n\r\
5.   U svim slučajevima iz stavaka od 1. do 4. Predsjedništvo djeluje na temelju prijedloga glavnog tajnika. Osim u slučajevima navedenima u stavcima 1. i 4., prije nego što donese odluku, Predsjedništvo saslušava predstavnike određene političke stranke. Predsjedništvo može u bilo kojem trenutku zatražiti mišljenje Konferencije predsjednika.\n\r\
\n\r\
6.   Kad Parlament nakon provjere utvrdi da se neka politička stranka na europskoj razini više ne pridržava načela slobode, demokracije, poštovanja ljudskih prava i temeljnih sloboda te načela vladavine prava, Predsjedništvo donosi odluku o prestanku davanja financijske potpore toj političkoj stranci.\n\r\
\n\r\
\n\r\
(1)	Postojeći tekst članka 224. i dalje se primjenjuje u pogledu akata i obveza koje se odnose na financiranje političkih stranaka i političkih zaklada na europskoj razini za proračunske godine 2014., 2015., 2016. i 2017., na koje se i dalje u skladu s člankom 40. Uredbe (EU, Euratom) br. 1141/2014 primjenjuje Uredba (EZ) br. 2004/2003 Europskog parlamenta i Vijeća o propisima kojima se uređuju političke stranke na europskoj razini i pravilima o njihovom financiranju. Vidjeti također bilješke uz članke 223.a and 225."
},
{
'id': 225,
'title': 'Članak 225. : Ovlasti nadležnog odbora i Parlamenta na plenarnoj sjednici (Briše se.)(1)',
'text': "1.   Na zahtjev četvrtine zastupnika koji predstavljaju najmanje tri kluba zastupnika, nakon rasprave u Konferenciji predsjednika predsjednik poziva nadležni odbor da provjeri pridržava li se i dalje politička stranka na europskoj razini (posebno u svojem programu i aktivnostima) načela na kojima se temelji Europska unija; prvenstveno načela slobode, demokracije, poštovanja ljudskih prava i temeljnih sloboda te načela vladavine prava.\n\r\
\n\r\
2.   Prije nego što Parlamentu podnese prijedlog odluke, nadležni odbor saslušava predstavnike određene političke stranke te traži i razmatra mišljenje odbora čiji su članovi nezavisne ugledne osobe, u skladu s Uredbom (EZ) br. 2004/2003.\n\r\
\n\r\
3.   Parlament većinom danih glasova prihvaća prijedlog odluke o tome poštuje li ili krši određena politička stranka načela iz stavka 1. Podnošenje amandmana nije dopušteno. U svakom slučaju, ako prijedlog odluke nije dobio većinu glasova, smatra se da je prihvaćena suprotna odluka.\n\r\
\n\r\
4.   Odluka Parlamenta na snazi je od dana podnošenja zahtjeva navedenog u stavku 1.\n\r\
\n\r\
5.   Predsjednik predstavlja Parlament u odboru nezavisnih uglednih osoba.\n\r\
\n\r\
6.   Nadležni odbor sastavlja izvješće, predviđeno Uredbom (EZ) br. 2004/2003, o primjeni spomenute Uredbe i financiranim aktivnostima te ga podnosi na plenarnoj sjednici.\n\r\
\n\r\
\n\r\
(1)	Postojeći tekst članka 225. i dalje se primjenjuje na političke stranke i političke zaklade na europskoj razini u smislu članka 2. Uredbe (EZ) br. 2004/2003 sve dok one dobivaju sredstva za proračunske godine 2014., 2015., 2016. i 2017. u okviru primjene te potonje uredbe. Vidjeti također bilješke uz članke 223.a and 224."
},
{
'id': 226,
'title': 'Članak 226. : Primjena Poslovnika',
'text': "1.   Ako se pojave sumnje u vezi s primjenom ili tumačenjem odredbi Poslovnika, predsjednik može dotični predmet uputiti na razmatranje nadležnom odboru.\n\r\
\n\r\
Predsjednici odbora mogu na isti način postupiti kad do takvih sumnji dođe tijekom rada odbora i s njim su u vezi.\n\r\
\n\r\
2.   Odbor odlučuje treba li predložiti izmjene ovog Poslovnika. U tom slučaju postupa u skladu s člankom 227.\n\r\
\n\r\
3.   Ako nadležni odbor odluči da je tumačenje postojećeg Poslovnika dovoljno, šalje svoje tumačenje predsjedniku, koji o tome izvještava Parlament na sljedećoj sjednici.\n\r\
\n\r\
4.   Ako klub zastupnika ili zastupnici koji dosežu barem niski prag ospore tumačenje odbora u roku od 24 sata nakon objave, o tom se predmetu glasuje u Parlamentu. Tekst se usvaja većinom danih glasova, pod uvjetom da je nazočna najmanje trećina zastupnika. U slučaju odbijanja predmet se vraća odboru.\n\r\
\n\r\
5.   Neosporena tumačenja i ona koja je Parlament prihvatio dodaju se u kurzivu kao pojašnjenja određenog članka ili članaka.\n\r\
\n\r\
6.   Tumačenja se moraju uzeti u obzir pri sljedećoj primjeni i tumačenju dotičnih članaka.\n\r\
\n\r\
7.   Nadležni odbor redovito razmatra Poslovnik i tumačenja.\n\r\
\n\r\
8.   U slučaju da se ovim Poslovnikom dodjeljuju prava određenom broju zastupnika, taj se broj automatski usklađuje s najbližim cijelim brojem koji predstavlja isti postotak zastupnika u Parlamentu kad se god ukupni broj zastupnika u Parlamentu promijeni, posebno nakon proširenja Europske unije."
},
{
'id': 227,
'title': 'Članak 227. : Izmjene Poslovnika',
'text': "1.   Svaki zastupnik može predložiti izmjene ovog Poslovnika i njegovih priloga, po potrebi s kratkim obrazloženjem.\n\r\
\n\r\
Nadležni odbor razmatra predložene amandmane i odlučuje hoće li ih podnijeti Parlamentu.\n\r\
\n\r\
U svrhu primjene članaka 169., 170. i 174. prilikom razmatranja tih predloženih izmjena u Parlamentu svako upućivanje na „izvorni tekst” ili „prijedlog zakonodavnog akta” u tim člancima smatra se upućivanjem na odredbu koja je tada bila na snazi.\n\r\
\n\r\
2.   U skladu s člankom 232. Ugovora o funkcioniranju Europske unije, izmjene Poslovnika prihvaćaju se samo ako za njih glasuje većina zastupnika u Parlamentu.\n\r\
\n\r\
3.   Ako nije drukčije odlučeno prilikom glasovanja, izmjene Poslovnika i njegovih priloga stupaju na snagu prvog dana sjednice nakon prihvaćanja amandmana."
},
{
'id': 228,
'title': 'Članak 228. : Simboli Unije',
'text': "1.   Parlament priznaje i preuzima sljedeće simbole Unije:\n\r\
\n\r\
-   zastavu na kojoj je 12 zlatnih zvjezdica raspoređenih u krug na plavoj pozadini;\n\r\
\n\r\
-   himnu preuzetu iz „Ode radosti”, iz Devete simfonije Ludwiga van Beethovena;\n\r\
\n\r\
-   geslo „Ujedinjena u raznolikosti”.\n\r\
\n\r\
2.   Parlament slavi Dan Europe 9. svibnja.\n\r\
\n\r\
3.   Zastave su izvješene u svim prostorima Parlamenta te tijekom službenih događaja. Zastava se nalazi u svim dvoranama za sastanke u Parlamentu.\n\r\
\n\r\
4.   Himna se izvodi na početku svake konstituirajuće sjednice i na drugim svečanim sjednicama, posebno kao dobrodošlica predsjednicima država ili vlada ili kako bi se pozdravili novi zastupnici nakon proširenja.\n\r\
\n\r\
5.   Geslo se ispisuje na službene dokumente Parlamenta.\n\r\
\n\r\
6.   Predsjedništvo razmatra daljnju moguću uporabu simbola u Parlamentu. Ono utvrđuje detaljne odredbe u vezi s primjenom ovog članka."
},
{
'id': 229,
'title': 'Članak 229. : Nedovršeni poslovi',
'text': "Na kraju zadnje sjednice prije izbora svi nedovršeni poslovi Parlamenta se ne razmatraju, ako je udovoljeno uvjetima odredaba iz drugog stavka ovog članka.\n\r\
\n\r\
Na početku svakog parlamentarnog saziva Konferencija predsjednika donosi odluku o obrazloženim zahtjevima parlamentarnih odbora i drugih institucija u vezi s tim hoće li iznova započeti ili nastaviti s razmatranjem nedovršenih poslova.\n\r\
\n\r\
Te odredbe ne odnose se na predstavke i tekstove o kojima nije potrebno donijeti odluku."
},
{
'id': 230,
'title': 'Članak 230. : (Briše se.)',
'text': ""
},
{
'id': 231,
'title': 'Članak 231. : Ispravci',
'text': "1.   Ako se uoči pogreška u tekstu koji je Parlament usvojio, predsjednik po potrebi upućuje prijedlog ispravka nadležnom odboru.\n\r\
\n\r\
2.   Ako se uoči pogreška u tekstu koji je Parlament usvojio i usuglasio s drugim institucijama, predsjednik traži suglasnost tih institucija u vezi s potrebnim ispravcima prije nego što postupi u skladu sa stavkom 1.\n\r\
\n\r\
3.   Nadležni odbor razmatra prijedlog ispravka i podnosi ga Parlamentu ako se slaže s tim da se pogreška do koje je došlo može ispraviti na predloženi način.\n\r\
\n\r\
4.   Ispravak se objavljuje na idućoj sjednici. Ako klub zastupnika ili zastupnici koji dosežu barem niski prag najkasnije 24 sata nakon te obavijesti ne zahtijevaju glasovanje o ispravku, smatra se da je ispravak prihvaćen. Ako se ispravak ne prihvati, vraća se nadležnom odboru. Nadležni odbor može predložiti izmijenjen ispravak ili zaključiti postupak.\n\r\
\n\r\
5.   Usvojeni ispravak objavljuje se na isti način kao i tekst na koji se odnosi. Na odgovarajući se način primjenjuje članak 78."
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





