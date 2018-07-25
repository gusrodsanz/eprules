/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('rules_it', [])


.service('Rules_it', [function(){


var listRules = [
{
'id': 1,
'title': 'Articolo 1 : Il Parlamento europeo',
'text': '1.   Il Parlamento europeo è l\'assemblea eletta a norma dei trattati, dell\'Atto del 20 settembre 1976 relativo all\'elezione dei membri del Parlamento europeo a suffragio universale diretto e delle legislazioni nazionali derivanti dai trattati.\
\
2.    I rappresentanti eletti al Parlamento europeo sono denominati:\
\
   "Членове на Европейския парламент" in lingua bulgara,\
\
   "Diputados al Parlamento Europeo" in lingua spagnola,\
\
   "Poslanci Evropského parlamentu" in lingua ceca,\
\
   "Medlemmer af Europa-Parlamentet" in lingua danese,\
\
   "Mitglieder des Europäischen Parlaments" in  lingua tedesca,\
\
   "Euroopa Parlamendi liikmed" in lingua estone,\
\
   "Βoυλευτές τoυ Ευρωπαϊκoύ Κoιvoβoυλίoυ" in lingua greca,\
\
   "Members of the European Parliament" in lingua inglese,\
\
   "Députés au Parlement européen" in lingua francese,\
\
   "Feisirí de Pharlaimint na hEorpa" in lingua irlandese,\
\
   "Zastupnici u Europskom parlamentu" in lingua croata,\
\
   "Deputati al Parlamento europeo" in lingua italiana,\
\
   "Eiropas Parlamenta deputāti" in lingua lettone,\
\
   "Europos Parlamento nariai" in lingua lituana,\
\
   "Európai Parlamenti Képviselők" in lingua ungherese,\
\
   "Membri tal-Parlament Ewropew" in lingua maltese,\
\
   "Leden van het Europees Parlement" in lingua olandese,\
\
   "Posłowie do Parlamentu Europejskiego" in lingua polacca,\
\
   "Deputados ao Parlamento Europeu" in lingua portoghese,\
\
   "Deputaţi în Parlamentul European" in lingua romena,\
\
   "Poslanci Európskeho parlamentu" in lingua slovacca,\
\
   "Poslanci Evropskega parlamenta" in lingua slovena,\
\
   "Euroopan parlamentin jäsenet" in lingua finlandese,\
\
   "Ledamöter av Europaparlamentet" in lingua svedese.'
},
{
'id': 2,
'title': 'Articolo 2 : Indipendenza del mandato',
'text': "In conformità dell\'articolo 6, paragrafo 1, dell\'Atto del 20 settembre 1976 nonché dell\'articolo 2, paragrafo 1, e dell\'articolo 3, paragrafo 1, dello Statuto dei deputati al Parlamento europeo, i deputati esercitano il loro mandato liberamente e in modo indipendente e non possono essere vincolati da istruzioni né ricevere alcun mandato imperativo."
},
{
'id': 3,
'title': 'Articolo 3 : Verifica dei poteri',
'text': "1.   A seguito delle elezioni al Parlamento europeo, il Presidente invita le autorità competenti degli Stati membri a comunicare immediatamente al Parlamento i nomi dei deputati eletti, affinché questi possano sedere in Parlamento a partire dall'apertura della prima seduta successiva alle elezioni.\
\
Il Presidente attira, al contempo, l\'attenzione di tali autorità sulle disposizioni pertinenti dell\'Atto del 20 settembre 1976 e le invita ad adottare le misure necessarie al fine di evitare qualsiasi incompatibilità con il mandato di deputato al Parlamento europeo.\
\
2.   Ciascun deputato la cui elezione sia stata notificata al Parlamento dichiara per iscritto, prima di sedere in Parlamento, di non ricoprire alcuna carica incompatibile con quella di deputato al Parlamento europeo, ai sensi dell\'articolo 7, paragrafi 1 e 2, dell\'Atto del 20 settembre 1976. Dopo le elezioni, tale dichiarazione è presentata, se possibile, al più tardi sei giorni prima della prima seduta del Parlamento successiva alle elezioni. Fintanto che i poteri di un deputato non siano stati verificati o non si sia deciso in merito ad eventuali contestazioni, il deputato siede con pieni diritti nel Parlamento e nei suoi organi, purché abbia previamente firmato suddetta dichiarazione scritta.\
\
Qualora venga accertato, sulla base di fatti verificabili presso fonti accessibili al pubblico, che un deputato ricopre una carica incompatibile con quella di deputato al Parlamento europeo, ai sensi dell\'articolo 7, paragrafi 1 o 2, dell\'Atto del 20 settembre 1976, il Parlamento, sulla base di informazioni fornite dal suo Presidente, ne constata la vacanza.\
\
3.   Il Parlamento, sulla base di una relazione della sua commissione competente, procede immediatamente alla verifica dei poteri e decide in merito alla validità del mandato di ciascuno dei membri neoeletti, nonché in merito a eventuali contestazioni presentate in base alle disposizioni dell\'Atto del 20 settembre 1976, eccettuate quelle che, in conformità di tale Atto, rientrano esclusivamente nelle disposizioni nazionali cui tale Atto rinvia.\
\
La relazione della commissione competente si basa sulla comunicazione ufficiale, da parte di ciascuno Stato membro, dell\'insieme dei risultati elettorali, nella quale si precisano il nome dei candidati eletti e dei loro eventuali sostituti nonché la graduatoria, così come risulta dal voto.\
\
Il mandato di un deputato potrà essere convalidato soltanto dopo che questi abbia rilasciato le dichiarazioni scritte previste dal presente articolo e dall'allegato I del presente regolamento.\
\
4.   Il Parlamento, sulla base di una proposta della commissione competente, procede senza ritardo alla verifica dei poteri di ciascun deputato che sostituisce un deputato uscente e può in ogni momento pronunciarsi su eventuali contestazioni relative alla validità del mandato di uno dei suoi membri.\
\
5.   Qualora la nomina di un deputato risulti dalla rinuncia di candidati figuranti sulla stessa lista, la commissione competente si accerta che tale rinuncia sia avvenuta conformemente allo spirito e alla lettera dell\'Atto del 20 settembre 1976, nonché all\'articolo 4, paragrafo 2, del presente regolamento.\
\
6.   La commissione competente vigila a che qualsiasi informazione suscettibile di incidere sull'eleggibilità di un deputato o sull'eleggibilità o sulla graduatoria dei sostituti sia comunicata immediatamente al Parlamento dalle autorità degli Stati membri o dell\'Unione europea, con l\'indicazione della data di decorrenza qualora si tratti di una nomina.\
\
Nel caso in cui le autorità competenti degli Stati membri avviino una procedura suscettibile di portare a una dichiarazione di decadenza del mandato di un deputato, il Presidente chiede loro di essere regolarmente informato sullo stato della procedura e deferisce la questione alla commissione competente, su proposta della quale il Parlamento può pronunciarsi."
},
{
'id': 4,
'title': 'Articolo 4 : Durata del mandato',
'text': "1.   L'inizio e il termine del mandato sono determinati a norma degli articoli 5 e 13 dell\'Atto del 20 settembre 1976.\
\
2.   I deputati dimissionari comunicano al Presidente le loro dimissioni e la data a partire dalla quale queste decorrono. Tale data non deve eccedere i tre mesi dalla comunicazione. Detta comunicazione assume la forma di un verbale redatto alla presenza del Segretario generale, o di un suo rappresentante, firmato da questi e dal deputato interessato e immediatamente presentato alla commissione competente che lo iscrive all\'ordine del giorno della prima riunione successiva al ricevimento del suddetto documento.\
\
Qualora la commissione competente ritenga che le dimissioni siano conformi all'Atto del 20 settembre 1976, viene constatata una vacanza con effetto a partire dalla data indicata dal deputato dimissionario nel verbale delle dimissioni e il Presidente ne informa il Parlamento.\
\
Qualora la commissione competente ritenga che le dimissioni non rispettino l'Atto del 20 settembre 1976, essa propone al Parlamento di non constatare la vacanza.\
\
3.   Qualora non sia prevista una riunione della commissione competente prima della tornata successiva, il relatore della commissione competente esamina senza indugio ogni dimissione debitamente notificata. Qualora un ritardo nell'esame della notifica possa produrre effetti pregiudizievoli, il relatore deferisce la questione al presidente della commissione affinché questi, conformemente al disposto del paragrafo 2:\
\
-   informi il Presidente del Parlamento, a nome della commissione, che la vacanza può essere constatata, oppure\
\
-   convochi una riunione straordinaria della commissione per esaminare problemi particolari rilevati dal relatore.\
\
4.   Qualora le autorità competenti degli Stati membri o dell\'Unione europea o il deputato interessato notifichino al Presidente una nomina o un'elezione a funzioni incompatibili con l\'esercizio del mandato di deputato al Parlamento europeo ai sensi dell\'articolo 7, paragrafi 1 o 2, dell\'Atto del 20 settembre 1976, il Presidente ne informa il Parlamento, che constata la vacanza a decorrere dalla data dell\'incompatibilità.\
\
Qualora le autorità competenti degli Stati membri notifichino al Presidente la fine del mandato di un deputato al Parlamento europeo a causa di un'ulteriore incompatibilità stabilita dalla legislazione vigente nello Stato membro in questione a norma dell\'articolo 7, paragrafo 3, dell\'Atto del 20 settembre 1976 o a causa della revoca del mandato del deputato a norma dell\'articolo 13, paragrafo 3, dello stesso Atto, il Presidente informa il Parlamento che il mandato è terminato alla data comunicata dalle autorità competenti dello Stato membro. Qualora tale data non sia comunicata, la data di cessazione del mandato è la data della comunicazione dello Stato membro.\
\
5.   Qualora le autorità degli Stati membri o dell\'Unione europea informino il Presidente di una missione che intendono affidare a un deputato, il Presidente deferisce alla commissione competente l\'esame della compatibilità della missione prevista con l'Atto del 20 settembre 1976. Egli informa il Parlamento, il deputato in questione e le autorità interessate in merito alle conclusioni della commissione.\
\
6.   Quando il Parlamento constata la vacanza, il Presidente ne informa lo Stato membro interessato e lo invita ad assegnare il seggio senza indugio.\
\
7.   Nel caso in cui l\'accettazione del mandato o la rinuncia allo stesso appaiano inficiate da inesattezze materiali o da vizi di consenso, il Parlamento può dichiarare non valido il mandato esaminato ovvero può rifiutare la constatazione della vacanza."
},
{
'id': 5,
'title': 'Articolo 5 : Privilegi e immunità',
'text': "1.   I deputati beneficiano dei privilegi e delle immunità previsti dal Protocollo n. 7 sui privilegi e sulle immunità dell\'Unione europea.\
\
2.   Nell'esercizio dei suoi poteri in materia di privilegi e immunità, il Parlamento opera al fine di mantenere la propria integrità di assemblea legislativa democratica e di garantire l\'indipendenza dei suoi membri nell'esercizio delle loro funzioni. L'immunità parlamentare non è un privilegio personale del deputato ma una garanzia di indipendenza del Parlamento in quanto istituzione e dei suoi membri.\
\
3.   Un lasciapassare dell\'Unione europea che assicuri a un deputato la libera circolazione negli Stati membri e negli altri paesi che lo riconoscono come un documento di viaggio valido è rilasciato dall\'Unione europea a un deputato su sua richiesta e a condizione che il Presidente del Parlamento lo autorizzi.\
\
4.   Ai fini dell\'esercizio delle loro funzioni parlamentari, tutti i deputati hanno il diritto di partecipare attivamente ai lavori delle commissioni e delle delegazioni parlamentari in conformità delle disposizioni del presente regolamento.\
\
5.   I deputati hanno il diritto di prendere visione di tutti i documenti in possesso del Parlamento o di una commissione, salvo i documenti e i conteggi personali la cui consultazione è consentita solo ai deputati interessati. Le deroghe a questo principio riguardanti il trattamento dei documenti cui può essere negato l\'accesso al pubblico a norma del regolamento (CE) n. 1049/2001 del Parlamento europeo e del Consiglio(1) sono disciplinate dall'articolo 210 bis.\
\
Col consenso dell\'Ufficio di presidenza, mediante decisione motivata, può essere rifiutato a un deputato l\'accesso a un documento del Parlamento ove l'Ufficio di presidenza, sentito l\'interessato, giunga alla conclusione che tale accesso nuocerebbe in modo inaccettabile agli interessi istituzionali del Parlamento o all\'interesse pubblico e che la richiesta del deputato è motivata da ragioni private e personali. Entro un mese dalla notifica della decisione il deputato può presentare contro di essa un ricorso scritto. Per essere ricevibili, i ricorsi scritti devono essere motivati. La decisione in merito a tale ricorso è adottata dal Parlamento, senza discussione, durante la tornata successiva alla presentazione del ricorso.\
\
\
(1)	Regolamento (CE) n. 1049/2001 del Parlamento europeo e del Consiglio del 30 maggio 2001 relativo all\'accesso del pubblico ai documenti del Parlamento europeo, del Consiglio e della Commissione (GU L 145 del 31.5.2001, pag. 43)."
},
{
'id': 6,
'title': 'Articolo 6 : Revoca dell\'immunità',
'text': "1.   Ogni richiesta di revoca dell\'immunità è valutata in conformità degli articoli 7, 8 e 9 del protocollo n. 7 sui privilegi e sulle immunità dell\'Unione europea nonché dei principi richiamati nell\'articolo 5, paragrafo 2, del presente regolamento.\
\
2.   Qualora un deputato sia tenuto a comparire come testimone o esperto, non è necessario chiedere la revoca dell\'immunità, a condizione che:\
\
-   il deputato non sia obbligato a comparire in un giorno e in un'ora tali da impedire o rendere difficile l\'esercizio delle sue funzioni parlamentari, ovvero possa deporre per iscritto o in un'altra forma che non ostacoli l\'esercizio delle sue funzioni parlamentari, e che\
\
-   il deputato non sia obbligato a deporre in merito a informazioni ottenute in via riservata nell\'ambito dell\'esercizio delle sue funzioni parlamentari e che non ritenga opportuno rivelare."
},
{
'id': 7,
'title': 'Articolo 7 : Difesa dei privilegi e dell\'immunità',
'text': "1.   Nei casi in cui si presuma che i privilegi e le immunità di un deputato o ex deputato siano stati o stiano per essere violati dalle autorità di uno Stato membro, può essere presentata, ai sensi dell\'articolo 9, paragrafo 1, una richiesta di decisione del Parlamento che stabilisca se sia stata effettivamente commessa o vi sia la probabilità che venga commessa una violazione di tali privilegi e immunità.\
\
2.   In particolare, può essere presentata una siffatta richiesta di difesa dei privilegi o delle immunità se si ritiene che le circostanze costituirebbero un ostacolo di ordine amministrativo o di altra natura alla libertà di movimento dei membri del Parlamento europeo che si recano al luogo di riunione del Parlamento europeo o ne ritornano o all\'espressione di un'opinione o di un voto nell'esercizio del loro mandato, oppure se tali circostanze rientrerebbero nell\'ambito dell\'articolo 9 del protocollo n. 7 sui privilegi e sulle immunità dell\'Unione europea.\
\
3.   Una richiesta di difesa dei privilegi e delle immunità di un deputato non è ricevibile qualora una richiesta di revoca o di difesa dell\'immunità di tale deputato sia già pervenuta in relazione agli stessi fatti, indipendentemente dalla circostanza che tale richiesta abbia condotto o meno all\'adozione di una decisione.\
\
4.   Una richiesta di difesa dei privilegi e delle immunità di un deputato decade se perviene una richiesta di revoca dell\'immunità di tale deputato in relazione agli stessi fatti.\
\
5.   Nei casi in cui sia stata adottata la decisione di non difendere i privilegi e le immunità di un deputato questi può, in via eccezionale, presentare richiesta di riesame della decisione presentando nuove prove in conformità dell\'articolo 9, paragrafo 1. La richiesta di riesame non è ricevibile se è stato proposto un ricorso contro la decisione di cui all\'articolo 263 del trattato sul funzionamento dell\'Unione europea, o se il Presidente ritiene che i nuovi elementi di prova presentati non siano sufficienti a giustificare un riesame."
},
{
'id': 8,
'title': 'Articolo 8 : Azione d\'urgenza del Presidente per confermare l\'immunità',
'text': "1.   In via urgente, nel caso in cui un deputato venga arrestato o vengano apportate restrizioni alla sua libertà di movimento in apparente violazione dei suoi privilegi e immunità, il Presidente, previa consultazione del presidente e del relatore della commissione competente, può prendere un\'iniziativa per confermare i privilegi e le immunità del deputato interessato. Il Presidente comunica tale iniziativa alla commissione e ne informa il Parlamento.\
\
2.   Allorché il Presidente si avvale dei poteri conferitigli dal paragrafo 1, la commissione prende atto dell\'iniziativa del Presidente nella sua riunione successiva. Ove lo ritenga necessario, la commissione può elaborare una relazione da sottoporre al Parlamento."
},
{
'id': 9,
'title': 'Articolo 9 : Procedure in materia di immunità',
'text': "1.   Ogni richiesta diretta al Presidente da un'autorità competente di uno Stato membro e volta a revocare l\'immunità di un deputato, ovvero da un deputato o da un ex deputato in difesa dei privilegi e delle immunità, è comunicata in Aula e deferita alla commissione competente.\
\
2.   Con l\'accordo del deputato o dell\'ex deputato interessato, la richiesta può essere presentata da un altro deputato, il quale può rappresentare il deputato o l\'ex deputato interessato in ogni fase della procedura.\
\
Il deputato che rappresenta il deputato o l\'ex deputato interessato non partecipa alle decisioni adottate dalla commissione.\
\
3.   La commissione esamina senza indugio, ma tenendo conto della loro relativa complessità, le richieste di revoca dell\'immunità o di difesa delle immunità e dei privilegi.\
\
4.   La commissione presenta una proposta di decisione motivata che raccomanda l\'accoglimento o la reiezione della richiesta di revoca dell\'immunità o di difesa dei privilegi e delle immunità. Gli emendamenti sono irricevibili. In caso di reiezione di una proposta, si considera adottata la decisione contraria.\
\
5.   La commissione può chiedere all\'autorità interessata tutte le informazioni e tutti i chiarimenti che reputi necessari per pronunciarsi sull'opportunità di revocare o di difendere l\'immunità.\
\
6.   Al deputato interessato è offerta l'opportunità di essere ascoltato ed egli può produrre tutti i documenti o gli altri elementi scritti di giudizio che ritiene pertinenti.\
\
Il deputato interessato non è presente durante le discussioni sulla richiesta di revoca o di difesa della sua immunità, se non per essere ascoltato.\
\
Il presidente della commissione invita il deputato per l\'audizione, indicandone data e ora. Il deputato interessato può rinunciare al diritto ad essere ascoltato.\
\
Se a seguito di tale invito il deputato interessato non compare all\'audizione, si considera che abbia rinunciato al diritto di essere ascoltato, a meno che non abbia giustificato la sua mancata presenza alla data e all\'ora proposte, precisandone i motivi. Il presidente della commissione decide se tale giustificazione debba essere accettata alla luce dei motivi addotti. Al deputato interessato non è consentito il ricorso avverso la suddetta decisione.\
\
Se il presidente della commissione accetta la giustificazione, invita il deputato interessato ad essere ascoltato a una nuova data e ora. Se il deputato interessato non si presenta al momento fissato nel secondo invito, la procedura prosegue senza la sua audizione. A questo punto non possono essere accettate nuove giustificazioni o richieste di essere ascoltato.\
\
7.   Qualora la richiesta di revoca o di difesa dell\'immunità comporti vari capi d'accusa, ciascuno di essi può essere oggetto di una decisione distinta. La relazione della commissione può proporre, a titolo eccezionale, che la revoca o la difesa dell\'immunità si riferisca esclusivamente alla prosecuzione del procedimento penale senza che contro il deputato possa essere adottata, fintanto che non si abbia sentenza passata in giudicato, alcuna misura privativa o limitativa della sua libertà o qualunque altra misura che gli impedisca di esercitare le funzioni proprie del suo mandato.\
\
8.   La commissione può fornire un parere motivato sulla competenza dell\'autorità interessata e sulla ricevibilità della richiesta, ma in nessun caso si pronuncia sulla colpevolezza o meno del deputato né sull'opportunità o meno di perseguire penalmente le opinioni o gli atti che gli sono attribuiti, anche qualora l\'esame della richiesta abbia fornito alla commissione una conoscenza approfondita del merito della questione.\
\
9.   La proposta di decisione della commissione è iscritta d\'ufficio all\'ordine del giorno della seduta successiva alla sua presentazione. Non è ammesso alcun emendamento a tale proposta.\
\
La discussione può vertere soltanto sulle ragioni che militano a favore e contro ciascuna delle proposte di revoca o mantenimento dell\'immunità o di difesa di un privilegio o di un\'immunità.\
\
Fatte salve le disposizioni dell\'articolo 164, il deputato i cui privilegi o immunità formano oggetto della questione non può intervenire nella discussione.\
\
La proposta o le proposte di decisione contenute nella relazione sono poste in votazione nel corso del primo turno di votazioni successivo alla discussione.\
\
Dopo l\'esame da parte del Parlamento si procede a una votazione distinta su ciascuna proposta figurante nella relazione. In caso di reiezione di una proposta, si considera adottata la decisione contraria.\
\
10.   Il Presidente comunica immediatamente la decisione del Parlamento al deputato interessato e all\'autorità competente dello Stato membro interessato, chiedendo di essere informato su qualsiasi nuovo sviluppo nel relativo procedimento e sulle deliberazioni giudiziarie adottate. Non appena il Presidente riceve dette informazioni, le comunica al Parlamento nella forma che ritiene più opportuna, se necessario previa consultazione della commissione competente.\
\
11.   La commissione tratta tali questioni e i documenti ricevuti con la massima riservatezza. L'esame da parte della commissione delle richieste riguardanti le procedure in materia di immunità si svolge sempre a porte chiuse.\
\
12.   Il Parlamento esamina unicamente le richieste di revoca dell\'immunità di un deputato che gli sono state trasmesse dalle autorità giudiziarie o dalle rappresentanze permanenti degli Stati membri.\
\
13.   La commissione elabora i principi per l\'applicazione del presente articolo.\
\
14.   Qualsiasi richiesta di informazioni presentata da un'autorità competente quanto alla portata dei privilegi o delle immunità dei deputati è esaminata in conformità delle norme che precedono."
},
{
'id': 10,
'title': 'Articolo 10 : (soppresso)',
'text': ""
},
{
'id': 11,
'title': 'Articolo 11 : Interessi finanziari dei deputati e norme di comportamento',
'text': "1.   Il Parlamento stabilisce norme di trasparenza relative agli interessi finanziari dei propri membri, sotto forma di un codice di condotta approvato a maggioranza dei suoi membri e allegato al presente regolamento(1).\
\
Esse non possono in altro modo perturbare o limitare l\'esercizio del mandato e dell\'attività politica o di altra natura comunque a esso connessa.\
\
2.   I deputati dovrebbero adottare la pratica sistematica di incontrare esclusivamente i rappresentanti di interessi iscritti nel registro per la trasparenza introdotto dall'accordo tra il Parlamento europeo e la Commissione europea sul registro per la trasparenza(2).\
\
3.   Il comportamento dei deputati è improntato al rispetto reciproco, si basa sui valori e i principi definiti nei trattati, e in particolare nella Carta dei diritti fondamentali, e salvaguarda la dignità del Parlamento. Inoltre, non deve compromettere il regolare svolgimento dei lavori parlamentari, il mantenimento della sicurezza e dell'ordine negli edifici del Parlamento o il corretto funzionamento delle sue attrezzature.\
\
Durante le discussioni parlamentari, i deputati si astengono dall'utilizzare un linguaggio o dal tenere un comportamento diffamatorio, razzista o xenofobo e dall'esporre striscioni.\
\
I deputati rispettano le norme del Parlamento sul trattamento delle informazioni riservate.\
\
Il mancato rispetto di tali elementi e norme può comportare l\'applicazione di misure conformemente agli articoli 165, 166 e 167.\
\
4.   L\'applicazione del presente articolo non ostacola in altro modo la vivacità delle discussioni parlamentari né la libertà di parola dei deputati.\
\
Essa si fonda sul pieno rispetto delle prerogative dei deputati quali definite nel diritto primario dell\'Unione e nello statuto loro applicabile.\
\
Essa si basa altresì sul principio di trasparenza e garantisce che ogni disposizione in materia sia portata a conoscenza dei deputati, che vengono informati individualmente dei loro diritti e doveri.\
\
5.   Qualora una persona impiegata da un deputato o un'altra persona alla quale il deputato ha facilitato l\'accesso agli edifici o alle attrezzature del Parlamento non rispetti le norme di comportamento di cui al paragrafo 3, al deputato in questione possono essere applicate, se del caso, le sanzioni di cui all\'articolo 166.\
\
6.   I questori stabiliscono il numero massimo di assistenti che ciascun deputato può accreditare.\
\
7.   Le norme di comportamento, i diritti e i privilegi degli ex deputati sono stabiliti con decisione dell\'Ufficio di presidenza. Non si effettua alcuna distinzione nel trattamento degli ex deputati.\
\
\
(1)	Cfr. allegato I.\
(2)	Accordo del 16 aprile 2014 tra il Parlamento europeo e la Commissione europea sul registro per la trasparenza delle organizzazioni e dei liberi professionisti che svolgono attività di concorso all\'elaborazione e attuazione delle politiche dell\'Unione europea (GU L 277 del 19.9.2014, pag. 11)."
},
{
'id': 12,
'title': 'Articolo 12 : Indagini interne svolte dall\'Ufficio europeo per la lotta antifrode (OLAF)',
'text': "La disciplina comune prevista dall'accordo interistituzionale del 25 maggio 1999 relativo alle indagini interne svolte dall\'Ufficio europeo per la lotta antifrode (OLAF)(1), che comprende i provvedimenti necessari per agevolare il regolare svolgimento delle indagini svolte dall\'Ufficio, è applicabile all\'interno del Parlamento, conformemente alla decisione del Parlamento del 18 novembre 1999(2).\
\
\
(1)	GU L 136 del 31.5.1999, pag. 15.\
(2)	Decisione del Parlamento del 18 novembre 1999 riguardante le condizioni e le modalità delle indagini interne in materia di lotta contro le frodi, la corruzione e ogni altra attività illecita lesiva degli interessi delle Comunità."
},
{
'id': 13,
'title': 'Articolo 13 : Osservatori',
'text': "1.   In seguito alla firma di un trattato relativo all\'adesione di uno Stato all'Unione europea, il Presidente, previo accordo della Conferenza dei presidenti, può invitare il parlamento dello Stato aderente a designare fra i suoi membri un numero di osservatori pari al numero dei seggi che saranno assegnati a tale Stato nel Parlamento europeo a seguito dell\'adesione.\
\
2.   Tali osservatori prendono parte ai lavori del Parlamento in attesa dell\'entrata in vigore del trattato di adesione e hanno diritto di parola in seno alle commissioni e ai gruppi politici. Non hanno diritto di voto né possono candidarsi per l\'elezione a cariche in seno al Parlamento, né possono rappresentare il Parlamento all\'esterno. La loro partecipazione non ha alcun effetto giuridico sulle deliberazioni del Parlamento.\
\
3.   Il loro trattamento è assimilato a quello dei deputati per quanto riguarda l'uso delle strutture e dei servizi del Parlamento e il rimborso delle spese di viaggio e di soggiorno sostenute nello svolgimento delle loro attività di osservatori."
},
{
'id': 14,
'title': 'Articolo 14 : Presidente',
'text': "1.   Nella seduta di cui all\'articolo 146, paragrafo 2, così come in ogni altra seduta dedicata all\'elezione del Presidente e dell\'Ufficio di presidenza, il Presidente uscente o, in sua assenza, un vicepresidente uscente identificato sulla base dell'ordine di precedenza o, in sua assenza, il deputato che ha esercitato il mandato per il periodo più lungo assume le funzioni di Presidente fino alla proclamazione dell\'elezione del Presidente.\
\
2.   Sotto la presidenza del deputato che svolge temporaneamente la funzione di Presidente a norma del paragrafo 1 non può aver luogo alcuna discussione il cui oggetto sia estraneo all\'elezione del Presidente o alla verifica dei poteri in conformità dell\'articolo 3, paragrafo 2. Qualsiasi altra questione attinente alla verifica dei poteri sollevata durante la sua presidenza è deferita alla commissione competente."
},
{
'id': 15,
'title': 'Articolo 15 : Candidature e disposizioni generali',
'text': "1.   Il Presidente è eletto a scrutinio segreto, seguito dai vicepresidenti e dai questori, conformemente al disposto dell\'articolo 180 bis.\
\
Le candidature devono essere presentate con il consenso degli interessati e possono essere presentate unicamente da un gruppo politico o da un numero di deputati pari almeno alla soglia bassa. Prima di ciascuno scrutinio possono essere presentate nuove candidature.\
\
Qualora il numero delle candidature non superi il numero dei seggi da assegnare, i candidati sono eletti per acclamazione, a meno che un numero di deputati o uno o più gruppi politici pari almeno alla soglia alta richiedano uno scrutinio segreto.\
\
In caso di scrutinio unico per più di un titolare di carica, la scheda è valida solo se sono stati espressi più della metà dei voti disponibili.\
\
2.   Nelle elezioni del Presidente, dei vicepresidenti e dei questori, congiuntamente considerati, è opportuno complessivamente tener conto di un'equa rappresentanza degli orientamenti politici come pure del genere e dell\'equilibrio geografico."
},
{
'id': 16,
'title': 'Articolo 16 : Elezione del Presidente - allocuzione inaugurale',
'text': "1.   Le candidature alla carica di Presidente devono essere presentate al deputato che svolge temporaneamente la funzione di Presidente a norma dell\'articolo 14, il quale ne informa il Parlamento. Se, dopo tre scrutini, nessun candidato ha ottenuto la maggioranza assoluta dei voti espressi, in deroga all\'articolo 15, paragrafo 1, possono essere candidati al quarto scrutinio soltanto i due deputati che, al terzo scrutinio, abbiano ottenuto il maggior numero di voti; in caso di parità di voti, è proclamato eletto il candidato più anziano.\
\
2.   Non appena il Presidente è stato eletto, il deputato che svolge temporaneamente la funzione di Presidente a norma dell\'articolo 14 gli cede il seggio presidenziale. Solo il Presidente eletto può pronunciare un'allocuzione inaugurale."
},
{
'id': 17,
'title': 'Articolo 17 : Elezione dei vicepresidenti',
'text': "1.   Successivamente si procede all\'elezione, con un unico scrutinio, dei vicepresidenti. Sono eletti al primo scrutinio, fino a un massimo di quattordici deputati e nell'ordine numerico dei voti riportati, i candidati che hanno ottenuto la maggioranza assoluta dei voti espressi. Se il numero dei candidati eletti è inferiore al numero dei seggi da assegnare, si procede a un secondo scrutinio, con le stesse modalità, per l\'assegnazione dei seggi restanti. Qualora un terzo scrutinio si renda necessario, l\'elezione ha luogo a maggioranza relativa per i seggi che rimangono da attribuire; in caso di parità di voti, sono proclamati eletti i candidati più anziani.\
\
2.   Fatte salve le disposizioni dell\'articolo 20, paragrafo 1, l'ordine di precedenza dei vicepresidenti è determinato dall'ordine secondo il quale essi sono stati eletti e, in caso di parità di voti, dall'età.\
\
Qualora l\'elezione dei vicepresidenti abbia avuto luogo per acclamazione, si procede a una votazione a scrutinio segreto per stabilire l'ordine di precedenza."
},
{
'id': 18,
'title': 'Articolo 18 : Elezione dei questori',
'text': "Il Parlamento procede all\'elezione di cinque questori secondo la stessa procedura applicabile all\'elezione dei vicepresidenti."
},
{
'id': 19,
'title': 'Articolo 19 : Durata delle cariche',
'text': "1.   La durata delle cariche di Presidente, di vicepresidente e di questore è di due anni e mezzo.\
\
Il deputato che passi a un altro gruppo politico conserva per la durata restante della carica di due anni e mezzo il seggio da lui eventualmente occupato nell'Ufficio di presidenza o nella carica di questore.\
\
2.   Qualora si verifichi una vacanza per una di queste cariche prima della scadenza di tale termine, il deputato eletto a tal fine ricoprirà la carica solo per il periodo restante del mandato del suo predecessore."
},
{
'id': 20,
'title': 'Articolo 20 : Vacanza',
'text': "1.   Qualora il Presidente, un vicepresidente o un questore debba essere sostituito, si procede all\'elezione del successore conformemente alle disposizioni in materia di elezioni riguardanti ciascuna carica.\
\
Il nuovo vicepresidente prende il posto del vicepresidente uscente nell'ordine di precedenza.\
\
2.   Qualora si renda vacante la carica di Presidente, un vicepresidente, identificato sulla base dell'ordine di precedenza, esercita tale funzione fino all\'elezione del nuovo Presidente."
},
{
'id': 21,
'title': 'Articolo 21 : Cessazione anticipata delle cariche',
'text': "La Conferenza dei presidenti può, decidendo a maggioranza di tre quinti dei voti espressi che rappresentino almeno tre gruppi politici, proporre al Parlamento la revoca delle cariche di Presidente, vicepresidente, questore, presidente o vicepresidente di commissione, presidente o vicepresidente di delegazione interparlamentare, o di qualsiasi altra posizione cui un deputato è stato eletto in seno al Parlamento, qualora ritenga che il deputato in questione abbia commesso una colpa grave. Il Parlamento decide in merito a tale proposta a maggioranza di due terzi dei voti espressi che rappresentano la maggioranza dei deputati che lo compongono.\
\
Qualora un relatore violi le disposizioni del codice di condotta dei deputati al Parlamento europeo in materia di interessi finanziari(1), la commissione che lo ha designato può revocare tale carica, su iniziativa del Presidente e su proposta della Conferenza dei presidenti. Le maggioranze previste al primo comma si applicano mutatis mutandis a ciascuna fase di tale procedura.\
\
\
(1)	Cfr. allegato I."
},
{
'id': 22,
'title': 'Articolo 22 : Attribuzioni del Presidente',
'text': "1.   Il Presidente dirige, in conformità del presente regolamento, l\'insieme dei lavori del Parlamento e dei suoi organi. Egli dispone di tutti i poteri necessari per presiedere alle deliberazioni del Parlamento e per assicurarne il buono svolgimento.\
\
2.   Il Presidente apre, sospende e toglie le sedute. Decide in merito alla ricevibilità degli emendamenti e degli altri testi posti in votazione nonché in merito alla ricevibilità delle interrogazioni parlamentari. Fa osservare il regolamento, mantiene l'ordine, concede la facoltà di parlare, dichiara chiuse le discussioni, mette le questioni ai voti e proclama i risultati delle votazioni. Trasmette inoltre alle commissioni le comunicazioni che sono di loro competenza.\
\
3.   Il Presidente può prendere la parola in una discussione solo per esporre lo stato della questione e richiamare alla medesima; se intende partecipare a una discussione, abbandona il seggio presidenziale e può rioccuparlo solo dopo che la discussione sulla questione sia terminata.\
\
4.   Nelle relazioni internazionali, nelle cerimonie, negli atti amministrativi, giudiziari o finanziari il Parlamento è rappresentato dal suo Presidente, che può delegare tale potere.\
\
5.   Il Presidente è responsabile della sicurezza e dell\'inviolabilità degli edifici del Parlamento europeo."
},
{
'id': 23,
'title': 'Articolo 23 : Attribuzioni dei vicepresidenti',
'text': "1.   Il Presidente, in caso di assenza, di impedimento o qualora intenda partecipare a una discussione a norma dell\'articolo 22, paragrafo 3, è sostituito da uno dei vicepresidenti identificato sulla base dell'ordine di precedenza di cui all\'articolo 17, paragrafo 2.\
\
2.   I vicepresidenti assolvono altresì le funzioni che sono loro attribuite a norma degli articoli 25, 27, paragrafi 3 e 5, e 71, paragrafo 3.\
\
3.   Il Presidente può delegare ai vicepresidenti qualsiasi funzione, come quella di rappresentare il Parlamento in relazione a cerimonie o atti determinati. In particolare, può incaricare un vicepresidente di svolgere le funzioni attribuite al Presidente dall'articolo 129 e dall'articolo 130, paragrafo 2."
},
{
'id': 24,
'title': 'Articolo 24 : Composizione dell\'Ufficio di presidenza',
'text': "1.   L'Ufficio di presidenza del Parlamento si compone del Presidente e dei quattordici vicepresidenti del Parlamento.\
\
2.   I questori sono membri dell\'Ufficio di presidenza con funzioni consultive.\
\
3.   Nelle deliberazioni dell\'Ufficio di presidenza, in caso di parità di voti, il voto del Presidente è preponderante."
},
{
'id': 25,
'title': 'Articolo 25 : Attribuzioni dell\'Ufficio di presidenza',
'text': "1.   L'Ufficio di presidenza svolge i compiti a esso affidati dal presente regolamento.\
\
2.   L'Ufficio di presidenza adotta decisioni di carattere finanziario, organizzativo e amministrativo concernenti l'organizzazione interna del Parlamento, il Segretariato del Parlamento e i suoi organi.\
\
3.   L'Ufficio di presidenza adotta decisioni di carattere finanziario, organizzativo e amministrativo concernenti i deputati, su proposta del Segretario generale o di un gruppo politico.\
\
4.   L'Ufficio di presidenza disciplina le questioni relative allo svolgimento delle sedute.\
\
5.   L'Ufficio di presidenza adotta le disposizioni previste all\'articolo 35 per i deputati non iscritti.\
\
6.   L'Ufficio di presidenza stabilisce l'organigramma del Segretariato del Parlamento e i regolamenti relativi alla situazione amministrativa e finanziaria dei funzionari e degli altri agenti.\
\
7.   L'Ufficio di presidenza stabilisce il progetto preliminare di stato di previsione del bilancio del Parlamento.\
\
8.   L'Ufficio di presidenza adotta le direttive per i questori e può chiedere che essi svolgano determinati compiti.\
\
9.   L'Ufficio di presidenza è l'organo competente ad autorizzare le riunioni o le missioni delle commissioni al di fuori dei luoghi abituali di lavoro, le audizioni, nonché i viaggi di studio e di informazione effettuati dai relatori.\
\
Allorquando tali riunioni o missioni sono autorizzate, il regime linguistico è fissato sulla base del Codice di condotta sul multilinguismo adottato dall\'Ufficio di presidenza. Si procede allo stesso modo anche per quanto riguarda le delegazioni.\
\
10.   L'Ufficio di presidenza nomina il Segretario generale conformemente all\'articolo 222.\
\
11.   L'Ufficio di presidenza fissa le modalità di applicazione del regolamento relativo allo statuto e al finanziamento dei partiti politici e delle fondazioni a livello europeo.\
\
12.   L'Ufficio di presidenza stabilisce le norme concernenti il trattamento di informazioni riservate da parte del Parlamento e dei suoi organi, di titolari di posizioni e di altri deputati, tenendo conto degli eventuali accordi interistituzionali conclusi in materia. Tali norme sono pubblicate nella Gazzetta ufficiale dell\'Unione europea.\
\
13.   Il Presidente e/o l'Ufficio di presidenza possono affidare a uno o più membri dell\'Ufficio di presidenza compiti generali o particolari rientranti nelle competenze del Presidente e/o dell\'Ufficio di presidenza. Allo stesso tempo vengono determinate le modalità di esecuzione di tali compiti.\
\
14.   L'Ufficio di presidenza designa due vicepresidenti ai quali è affidato il compito di occuparsi delle relazioni con i parlamenti nazionali.\
\
15.   L'Ufficio di presidenza designa un vicepresidente al quale è affidato il compito di condurre consultazioni strutturate con la società civile europea su argomenti di rilievo.\
\
16.   L'Ufficio di presidenza è competente per l\'applicazione dello Statuto dei deputati e decide riguardo agli importi delle indennità sulla base del bilancio annuale."
},
{
'id': 26,
'title': 'Articolo 26 : Composizione della Conferenza dei presidenti',
'text': "1.   La Conferenza dei presidenti è composta dal Presidente del Parlamento e dai presidenti dei gruppi politici. Il presidente di un gruppo politico può farsi rappresentare da un membro del suo gruppo.\
\
2.   Il Presidente del Parlamento, dopo aver dato l'opportunità ai deputati non iscritti di esprimere il loro parere, invita uno di loro alle riunioni della Conferenza dei presidenti, alle quali prende parte senza diritto di voto.\
\
3.   La Conferenza dei presidenti cerca di raggiungere un consenso sulle questioni che le sono deferite.\
\
Qualora non possa essere raggiunto tale consenso, si procede a una votazione ponderata in funzione della consistenza numerica di ciascun gruppo politico."
},
{
'id': 27,
'title': 'Articolo 27 : Attribuzioni della Conferenza dei presidenti',
'text': "1.   La Conferenza dei presidenti svolge i compiti a essa affidati dal presente regolamento.\
\
2.   La Conferenza dei presidenti delibera sull'organizzazione dei lavori del Parlamento e sulle questioni connesse alla programmazione legislative.\
\
3.   La Conferenza dei presidenti è l'organo competente per le questioni relative alle relazioni del Parlamento con le altre istituzioni e gli altri organi dell\'Unione europea nonché con i parlamenti nazionali degli Stati membri. Le decisioni relative al mandato e alla composizione della delegazione del Parlamento che prende parte alle consultazioni in seno al Consiglio e ad altre istituzioni dell\'Unione europea su questioni fondamentali concernenti lo sviluppo dell\'Unione europea (processo degli sherpa) sono prese sulla base delle relative posizioni adottate dal Parlamento e tenendo conto della diversità delle opinioni politiche rappresentate in seno a quest'ultimo. I vicepresidenti ai quali è stato affidato il compito di occuparsi delle relazioni del Parlamento con i parlamenti nazionali riferiscono regolarmente alla Conferenza dei presidenti sulle loro attività al riguardo.\
\
4.   La Conferenza dei presidenti è l'organo competente per le questioni relative alle relazioni con i paesi terzi e con istituzioni od organizzazioni extracomunitarie.\
\
5.   La Conferenza dei presidenti è responsabile dell'organizzazione di consultazioni strutturate con la società civile europea su argomenti di rilievo. Tali consultazioni possono comprendere l'organizzazione di dibattiti pubblici su argomenti d'interesse generale europeo, ai quali i cittadini interessati possono partecipare. Il vicepresidente competente per l\'attuazione di queste consultazioni riferisce regolarmente alla Conferenza dei presidenti sulle sue attività in materia.\
\
6.   La Conferenza dei presidenti fissa il progetto di ordine del giorno delle tornate del Parlamento.\
\
7.   La Conferenza dei presidenti presenta al Parlamento proposte per quanto concerne la composizione e le competenze delle commissioni e delle commissioni d'inchiesta nonché delle commissioni parlamentari miste e delle delegazioni permanenti. La Conferenza dei presidenti è l'organo competente per l\'autorizzazione delle delegazioni ad hoc.\
\
8.   La Conferenza dei presidenti decide in merito alla ripartizione dei posti in Aula a norma dell\'articolo 36.\
\
9.   La Conferenza dei presidenti è l'organo competente per l\'autorizzazione della redazione delle relazioni d'iniziativa.\
\
10.   La Conferenza dei presidenti presenta all'Ufficio di presidenza proposte in merito a problemi amministrativi e finanziari dei gruppi politici."
},
{
'id': 28,
'title': 'Articolo 28 : Attribuzioni dei questori',
'text': "I questori sono incaricati di compiti amministrativi e finanziari concernenti direttamente i deputati, secondo direttive fissate dall\'Ufficio di presidenza, come pure degli altri compiti loro affidati."
},
{
'id': 29,
'title': 'Articolo 29 : Conferenza dei presidenti di commissione',
'text': "1.   La Conferenza dei presidenti di commissione è composta dai presidenti di tutte le commissioni permanenti e speciali. Essa elegge il proprio presidente.\
\
2.   In caso di assenza del Presidente, è il decano d'età ad assumere la presidenza della riunione.\
\
3.   La Conferenza dei presidenti di commissione può presentare alla Conferenza dei presidenti proposte in merito ai lavori delle commissioni e alla fissazione dell'ordine del giorno delle tornate.\
\
4.   L'Ufficio di presidenza e la Conferenza dei presidenti possono delegare alla Conferenza dei presidenti di commissione determinate attribuzioni."
},
{
'id': 30,
'title': 'Articolo 30 : Conferenza dei presidenti di delegazione',
'text': "1.   La Conferenza dei presidenti di delegazione è composta dai presidenti di tutte le delegazioni interparlamentari permanenti. Essa elegge il proprio presidente.\
\
2.   In caso di assenza del Presidente, è il decano d'età a assumere la presidenza della riunione.\
\
3.   La Conferenza dei presidenti di delegazione può presentare alla Conferenza dei presidenti proposte in merito ai lavori delle delegazioni.\
\
4.   L'Ufficio di presidenza e la Conferenza dei presidenti possono delegare alla Conferenza dei presidenti di delegazione determinate attribuzioni.\
\
Articolo 30 bis : Continuità delle cariche durante il periodo elettorale\
\
In occasione della rielezione del Parlamento, tutti gli organi e i titolari di posizioni del Parlamento uscente continuano a essere in carica fino alla prima seduta del nuovo Parlamento."
},
{
'id': 31,
'title': 'Articolo 31 : Informazioni sull\'attività dell\'Ufficio di presidenza e della Conferenza dei presidenti',
'text': "1.   I processi verbali dell\'Ufficio di presidenza e della Conferenza dei presidenti sono tradotti nelle lingue ufficiali e distribuiti a tutti i deputati. Essi sono accessibili al pubblico, salvo che, in casi eccezionali, l'Ufficio di presidenza o la Conferenza dei presidenti, per i motivi di riservatezza di cui all\'articolo 4, paragrafi da 1 a 4, del regolamento (CE) n. 1049/2001, decidano altrimenti per quanto riguarda determinati punti dei processi verbali.\
\
2.   Ogni deputato può presentare interrogazioni attinenti all\'esercizio da parte dell\'Ufficio di presidenza, della Conferenza dei presidenti e dei questori delle rispettive attribuzioni. Tali interrogazioni sono presentate per iscritto al Presidente, notificate ai deputati e pubblicate sul sito internet del Parlamento entro il termine di trenta giorni dalla loro presentazione."
},
{
'id': 32,
'title': 'Articolo 32 : Costituzione e scioglimento di gruppi politici',
'text': "1.   I deputati possono organizzarsi in gruppi secondo le affinità politiche.\
\
Non è necessario di norma che il Parlamento valuti l\'affinità politica dei membri di un gruppo. Al momento di formare un gruppo sulla base del presente articolo, i deputati interessati accettano per definizione di avere un'affinità politica. Soltanto quando questa è negata dai deputati interessati è necessario che il Parlamento valuti se il gruppo è stato costituito in conformità del regolamento.\
\
2.   Un gruppo politico è composto da deputati eletti in almeno un quarto degli Stati membri. Per costituire un gruppo politico occorre un numero minimo di venticinque deputati.\
\
3.   Se la consistenza numerica di un gruppo scende al di sotto di una delle soglie richieste, il Presidente, previo accordo della Conferenza dei presidenti, può autorizzare il gruppo ad esistere fino alla successiva seduta costitutiva del Parlamento, a condizione che:\
\
-   i suoi membri continuino a rappresentare almeno un quinto degli Stati membri;\
\
-   il gruppo esista da più di un anno.\
\
Il Presidente non concede questa deroga qualora vi siano elementi sufficienti per sospettare una sua applicazione abusiva.\
\
4.   Un deputato può appartenere a un solo gruppo politico.\
\
5.   La costituzione di un gruppo politico deve essere dichiarata al Presidente. Tale dichiarazione deve indicare la denominazione del gruppo, il nome dei suoi membri e la composizione del suo ufficio di presidenza. La dichiarazione è firmata da tutti i membri del gruppo.\
\
6.   La dichiarazione è allegata al processo verbale della tornata durante la quale viene comunicata la costituzione del gruppo politico.\
\
7.   Il Presidente comunica la costituzione dei gruppi politici in Aula. Tale comunicazione ha effetti giuridici retroattivi a partire dal momento in cui il gruppo ha notificato la sua costituzione al Presidente in conformità del presente articolo.\
\
Il Presidente comunica anche lo scioglimento dei gruppi politici in Aula. Tale comunicazione avrà effetti giuridici a partire dal giorno successivo al momento in cui il gruppo non soddisfa più le condizioni per la sua esistenza."
},
{
'id': 33,
'title': 'Articolo 33 : Attività e status giuridico dei gruppi politici',
'text': "1.   I gruppi politici esercitano le loro funzioni nel quadro delle attività dell\'Unione europea, compresi i compiti loro assegnati dal regolamento. I gruppi politici dispongono di una segreteria, nell\'ambito dell'organigramma del Segretariato del Parlamento, nonché delle strutture amministrative e degli stanziamenti previsti nel bilancio del Parlamento.\
\
2.   All'inizio di ogni legislatura, la Conferenza dei presidenti si adopera per concordare procedure intese a riflettere la diversità politica del Parlamento in seno alle commissioni e delegazioni e agli organi decisionali.\
\
3.   L'Ufficio di presidenza, sulla base delle proposte presentate dalla Conferenza dei presidenti, fissa le disposizioni relative alla concessione, all\'esecuzione e al controllo delle strutture e degli stanziamenti di cui al paragrafo 1 nonché alle relative deleghe dei poteri di esecuzione del bilancio e alle conseguenze di un eventuale mancato rispetto di tali disposizioni.\
\
4.   Tali disposizioni definiscono le conseguenze amministrative e finanziarie applicabili in caso di scioglimento di un gruppo politico."
},
{
'id': 34,
'title': 'Articolo 34 : Intergruppi',
'text': "1.   I singoli deputati possono costituire intergruppi o altri raggruppamenti non ufficiali di deputati al fine di svolgere scambi informali di opinioni su argomenti specifici tra diversi gruppi politici, con la partecipazione di membri di commissioni parlamentari diverse, e per promuovere i contatti fra i deputati e la società civile.\
\
2.   Tali raggruppamenti devono agire in modo pienamente trasparente e non devono svolgere attività suscettibili di dare adito a confusione con le attività ufficiali del Parlamento o dei suoi organi. Nel rispetto delle condizioni fissate dalle norme a disciplina della loro costituzione adottate dall\'Ufficio di presidenza, i gruppi politici possono agevolarne le attività fornendo loro supporto logistico.\
\
3.   Gli intergruppi sono tenuti a effettuare una dichiarazione annuale indicante ogni sostegno, in contanti o in natura (per esempio assistenza di segreteria) che, se offerto a titolo individuale, sarebbe stato soggetto all\'obbligo di dichiarazione a norma dell\'allegato I.\
\
4.   I questori tengono un registro delle dichiarazioni di cui al paragrafo 3. Il registro è pubblicato nel sito internet del Parlamento. I questori stabiliscono le modalità relative a dette dichiarazioni e assicurano l\'effettiva applicazione del presente articolo."
},
{
'id': 35,
'title': 'Articolo 35 : Deputati non iscritti',
'text': "1.   I deputati non appartenenti ad alcun gruppo politico dispongono di una segreteria. Le modalità di fornitura di tale segreteria sono fissate dall\'Ufficio di presidenza, su proposta del Segretario generale.\
\
2.   L'Ufficio di presidenza disciplina la posizione e le prerogative parlamentari dei deputati non appartenenti ad alcun gruppo politico.\
\
3.   L'Ufficio di presidenza fissa le disposizioni relative alla concessione, all\'esecuzione e al controllo degli stanziamenti previsti nel bilancio del Parlamento per le spese di segreteria e per le strutture amministrative dei deputati non iscritti."
},
{
'id': 36,
'title': 'Articolo 36 : Ripartizione dei posti in Aula',
'text': "La Conferenza dei presidenti decide in merito alla ripartizione dei posti in Aula per i gruppi politici, i deputati non iscritti e le istituzioni dell\'Unione."
},
{
'id': 37,
'title': 'Articolo 37 : Programmazione annuale',
'text': "1.   Il Parlamento concorre con la Commissione e il Consiglio alla definizione della programmazione legislativa dell\'Unione.\
\
Il Parlamento e la Commissione cooperano all\'atto della preparazione del programma di lavoro della Commissione, che costituisce il contributo di quest'ultima istituzione alla programmazione annuale e pluriennale dell\'Unione, in base a uno scadenzario e a modalità convenuti tra le due istituzioni(1).\
\
2.   Successivamente all\'adozione del programma di lavoro della Commissione, il Parlamento, il Consiglio e la Commissione, in conformità del punto 7 dell\'accordo interistituzionale 'Legiferare meglio', del 13 aprile 2016(2) procedono a uno scambio di opinioni e concordano una dichiarazione comune sulla programmazione interistituzionale annuale che fissa gli obiettivi e le priorità di massima.\
\
Prima di avviare i negoziati con il Consiglio e con la Commissione sulla dichiarazione comune, il Presidente tiene uno scambio di opinioni con la Conferenza dei presidenti e con la Conferenza dei presidenti di commissione per quanto riguarda gli obiettivi e le priorità di massima del Parlamento.\
\
Prima di procedere alla firma della dichiarazione comune, il Presidente chiede l\'approvazione della Conferenza dei presidenti.\
\
3.   Il Presidente trasmette ogni risoluzione sulla programmazione e sulle priorità legislative approvata dal Parlamento alle altre istituzioni che partecipano alla procedura legislativa dell\'Unione e ai parlamenti degli Stati membri.\
\
4.   Qualora la Commissione intenda ritirare una proposta, il Commissario responsabile è invitato dalla commissione competente a una riunione per discutere tale intenzione. Anche la Presidenza del Consiglio può essere invitata a tale riunione. Se la commissione competente non è d'accordo con l\'intenzione di ritirare la proposta, può chiedere alla Commissione di rilasciare una dichiarazione al Parlamento. Si applica l\'articolo 123.\
\
\
(1)	Accordo quadro del 20 ottobre 2010 sulle relazioni tra il Parlamento europeo e la Commissione europea (GU L 304 del 20.11.2010, pag. 47).\
(2)	GU L 123 del 12.5.2016, pag. 1."
},
{
'id': 38,
'title': 'Articolo 38 : Rispetto dei diritti fondamentali',
'text': "1.   In tutte le sue attività il Parlamento rispetta pienamente i diritti, le libertà e i principi riconosciuti dall'articolo 6 del trattato sull'Unione europea e i valori sanciti all\'articolo 2 del trattato.\
\
2.   Qualora la commissione competente, un gruppo politico o un numero di deputati pari almeno alla soglia bassa ritengano che una proposta di atto legislativo o parti di essa non rispettino i diritti fondamentali dell\'Unione europea, la questione è deferita, su loro richiesta, alla commissione competente per la tutela dei diritti fondamentali.\
\
3.   Tale richiesta deve essere presentata entro quattro settimane lavorative dall'annuncio in Aula del deferimento alla commissione competente per il merito.\
\
4.   Il parere della commissione competente per la tutela dei diritti fondamentali è allegato alla relazione della commissione competente."
},
{
'id': 39,
'title': 'Articolo 39 : Verifica della base giuridica',
'text': "1.   Ogni qualvolta una proposta di atto giuridicamente vincolante è deferita alla commissione competente per il merito, quest'ultima verifica in primo luogo la base giuridica.\
\
2.   Qualora tale commissione contesti la legittimità o l\'appropriatezza della base giuridica, anche rispetto alla verifica di conformità di cui all\'articolo 5 del trattato sull'Unione europea, essa chiede il parere della commissione competente per gli affari giuridici.\
\
3.   La commissione competente per gli affari giuridici può inoltre, di sua iniziativa, occuparsi di questioni concernenti la base giuridica in qualsiasi fase della procedura legislativa. In tal caso ne informa debitamente la commissione competente per il merito.\
\
4.   Qualora decida di contestare la legittimità o l\'appropriatezza della base giuridica, ove opportuno in seguito a uno scambio di opinioni con il Consiglio e la Commissione in conformità degli accordi stipulati a livello interistituzionale(1), la commissione competente per gli affari giuridici riferisce le proprie conclusioni al Parlamento. Fatto salvo l\'articolo 63, il Parlamento vota al riguardo prima di procedere alla votazione sul contenuto della proposta.\
\
5.   Gli emendamenti volti a modificare la base giuridica presentati in Aula senza che la commissione competente per il merito o la commissione competente per gli affari giuridici abbiano contestato la legittimità e l'opportunità della base giuridica stessa, sono irricevibili.\
\
\
(1)	Accordo interistituzionale 'Legiferare meglio', del 13 aprile 2016, punto 25."
},
{
'id': 40,
'title': 'Articolo 40 : Delega del potere legislativo e conferimento di competenze di esecuzione',
'text': "1.   Nell'esaminare una proposta di atto legislativo che delega poteri alla Commissione a norma dell\'articolo 290 del trattato sul funzionamento dell\'Unione europea, il Parlamento presta particolare attenzione agli obiettivi, al contenuto, alla portata e alla durata della delega, nonché alle condizioni cui essa è soggetta.\
\
2.   Nell'esaminare una proposta di atto legislativo che conferisce competenze di esecuzione a norma dell\'articolo 291 del trattato sul funzionamento dell\'Unione europea, il Parlamento presta particolare attenzione al fatto che, nell'esercizio delle competenze di esecuzione, la Commissione non possa modificare né integrare l\'atto legislativo nemmeno nei suoi elementi non essenziali.\
\
3.   La commissione competente per il merito può in qualsiasi momento chiedere il parere della commissione competente per l\'interpretazione e l\'applicazione del diritto dell\'Unione.\
\
4.   La commissione competente per l\'interpretazione e l\'applicazione del diritto dell\'Unione può inoltre, di sua iniziativa, occuparsi di questioni concernenti la delega dei poteri legislativi e il conferimento di competenze di esecuzione. In tal caso ne informa debitamente la commissione competente per il merito."
},
{
'id': 41,
'title': 'Articolo 41 : Verifica della compatibilità finanziaria',
'text': "1.   In caso di proposta di atto giuridicamente vincolante avente incidenze finanziarie, il Parlamento accerta se sono previste risorse finanziarie sufficienti.\
\
2.   Per ogni proposta di atto giuridicamente vincolante, la commissione competente per il merito verifica la compatibilità finanziaria dell\'atto con il regolamento che stabilisce il quadro finanziario pluriennale.\
\
3.   Qualora modifichi la dotazione finanziaria dell\'atto esaminato, la commissione competente per il merito chiede il parere della commissione competente per le questioni di bilancio.\
\
4.   La commissione competente per le questioni di bilancio può inoltre, di sua iniziativa, occuparsi di questioni relative alla compatibilità finanziaria delle proposte di atti giuridicamente vincolanti. In tal caso ne informa debitamente la commissione competente per il merito.\
\
5.   Qualora decida di contestare la compatibilità finanziaria della proposta, la commissione competente per le questioni di bilancio riferisce le proprie conclusioni al Parlamento, prima che quest'ultimo voti sulla proposta."
},
{
'id': 42,
'title': 'Articolo 42 : Esame del rispetto dei principi di sussidiarietà e di proporzionalità',
'text': "1.   Durante l\'esame di una proposta di atto legislativo il Parlamento verifica con particolare attenzione se essa rispetti i principi di sussidiarietà e di proporzionalità.\
\
2.   Solo la commissione competente per il rispetto del principio di sussidiarietà può presentare raccomandazioni alla commissione competente per il merito su una proposta di atto legislativo.\
\
3.   Tranne che nei casi urgenti di cui all\'articolo 4 del protocollo n. 1 sul ruolo dei parlamenti nazionali nell'Unione europea, la commissione competente non procede alla votazione finale prima della scadenza del termine di otto settimane previsto all\'articolo 6 del protocollo n. 2 sull\'applicazione dei principi di sussidiarietà e di proporzionalità.\
\
4.   Se un parlamento nazionale invia al Presidente un parere motivato in conformità dell\'articolo 3 del protocollo n. 1, tale documento è deferito alla commissione competente per il merito e trasmesso, per conoscenza, alla commissione competente per il rispetto del principio di sussidiarietà.\
\
5.   Qualora i pareri motivati sul mancato rispetto del principio di sussidiarietà da parte di una proposta di atto legislativo rappresentino almeno un terzo dell\'insieme dei voti attribuiti ai parlamenti nazionali ai sensi dell\'articolo 7, paragrafo 1, secondo comma, del protocollo n. 2, o un quarto qualora si tratti di una proposta di atto legislativo presentato sulla base dell\'articolo 76 del trattato sul funzionamento dell\'Unione europea, il Parlamento non prende alcuna decisione finché l\'autore della proposta non abbia dichiarato come intende procedere.\
\
6.   Qualora, secondo la procedura legislativa ordinaria, i pareri motivati sul mancato rispetto del principio di sussidiarietà da parte di una proposta di atto legislativo rappresentino almeno la maggioranza semplice dei voti attribuiti ai parlamenti nazionali ai sensi dell\'articolo 7, paragrafo 1, secondo comma, del protocollo n. 2, la commissione competente per il merito, previo esame dei pareri motivati dei parlamenti nazionali e della Commissione, e avendo ascoltato le osservazioni della commissione competente per il rispetto del principio di sussidiarietà, può raccomandare al Parlamento di respingere la proposta per violazione del principio di sussidiarietà o sottoporre al Parlamento qualsiasi altra raccomandazione che può contenere suggerimenti di modifiche in relazione al rispetto di detto principio. Il parere della commissione competente per il rispetto del principio di sussidiarietà è allegato a detta raccomandazione.\
\
La raccomandazione è presentata al Parlamento per discussione e votazione. Se una raccomandazione di reiezione della proposta è approvata a maggioranza dei voti espressi, il Presidente dichiara conclusa la procedura. Se il Parlamento non respinge la proposta, la procedura prosegue tenendo conto delle raccomandazioni approvate dal Parlamento."
},
{
'id': 43,
'title': 'Articolo 43 : Informazione e accesso del Parlamento ai documenti',
'text': "1.   Durante l\'intera procedura legislativa il Parlamento e le sue commissioni possono chiedere accesso a tutti i documenti relativi alle proposte di atti legislativi, a parità di condizioni con il Consiglio e i suoi gruppi di lavoro.\
\
2.   In sede di esame di una proposta di atto legislativo, la commissione competente invita la Commissione e il Consiglio a tenerla informata dell\'andamento della proposta in seno al Consiglio e ai suoi gruppi di lavoro, in particolare del delinearsi di compromessi che modifichino in modo sostanziale la proposta originaria, o dell\'intenzione dell\'autore di ritirare la sua proposta."
},
{
'id': 44,
'title': 'Articolo 44 : Rappresentanza del Parlamento alle riunioni del Consiglio',
'text': "Qualora il Consiglio inviti il Parlamento a partecipare ad una riunione del Consiglio, il Presidente del Parlamento chiede al presidente o al relatore della commissione competente in materia o a un altro deputato designato da tale commissione di rappresentare il Parlamento."
},
{
'id': 45,
'title': 'Articolo 45 : Diritto del Parlamento di presentare proposte',
'text': "Nei casi in cui i trattati conferiscono al Parlamento un diritto d'iniziativa, la commissione competente può decidere di elaborare una relazione d'iniziativa in conformità dell\'articolo 52.\
\
La relazione comprende:\
\
(a)   una proposta di risoluzione;\
\
(b)   un progetto di proposta;\
\
(c)   una motivazione corredata, se del caso, di una scheda finanziaria.\
\
Qualora l\'approvazione di un atto da parte del Parlamento richieda l\'approvazione o l\'accordo del Consiglio e il parere o l\'accordo della Commissione, il Parlamento può, in seguito al voto sull\'atto proposto e su proposta del relatore, decidere di rinviare il voto sulla proposta di risoluzione fintanto che il Consiglio o la Commissione non abbiano formulato la loro posizione."
},
{
'id': 46,
'title': 'Articolo 46 : Richieste alla Commissione di presentare proposte',
'text': "1.   Il Parlamento può chiedere alla Commissione di presentargli, per l\'adozione di nuovi atti o la modifica di atti esistenti, ogni adeguata proposta ai sensi dell\'articolo 225 del trattato sul funzionamento dell\'Unione europea. A tal fine il Parlamento approva una risoluzione sulla base di una relazione di iniziativa della commissione competente, elaborata a norma dell\'articolo 52. La risoluzione deve essere approvata a maggioranza dei deputati che compongono il Parlamento nella votazione finale. Il Parlamento può stabilire contestualmente un termine per la presentazione di tale proposta.\
\
2.   Ogni deputato può presentare una proposta di atto dell\'Unione nel quadro del diritto di iniziativa del Parlamento a norma dell\'articolo 225 del trattato sul funzionamento dell\'Unione europea.\
\
La proposta può essere presentata congiuntamente da un numero massimo di dieci deputati. Essa indica la base giuridica su cui è fondata e può essere corredata di una motivazione di non oltre 150 parole.\
\
La proposta è presentata al Presidente che verifica se sono soddisfatti i requisiti giuridici. Ai fini di tale verifica il Presidente può deferire la proposta alla commissione competente per un parere sull\'adeguatezza della base giuridica. Se il Presidente reputa la proposta ammissibile, ne dà comunicazione in Aula e la trasmette per esame alla commissione competente per il merito.\
\
Prima della trasmissione alla commissione competente per il merito, la proposta è tradotta nelle lingue ufficiali che il presidente della commissione competente ritiene necessarie ai fini di un esame sommario.\
\
La commissione competente per il merito decide in merito al seguito da dare alla proposta entro tre mesi dal deferimento e dopo aver dato agli autori della proposta la possibilità di rivolgersi alla commissione.\
\
Il nome degli autori della proposta viene indicato nel titolo della relazione.\
\
3.   La risoluzione del Parlamento precisa la pertinente base giuridica ed è corredata di raccomandazioni in ordine al contenuto della proposta richiesta.\
\
4.   Qualora la proposta richiesta presenti incidenze finanziarie, il Parlamento precisa le modalità volte a garantire un'adeguata copertura finanziaria.\
\
5.   La commissione competente per il merito segue l\'avanzamento di ogni atto giuridico dell\'Unione proposto a seguito di una richiesta specifica del Parlamento.\
\
6.   La Conferenza di presidenti di commissione controlla regolarmente il rispetto da parte della Commissione del punto 10 dell\'accordo interistituzionale 'Legiferare meglio', secondo cui la Commissione deve rispondere alle richieste di presentare proposte entro tre mesi, adottando una comunicazione specifica che indica il seguito che intende dare. La Conferenza dei presidenti di commissione riferisce regolarmente sui risultati di tale monitoraggio alla Conferenza dei presidenti."
},
{
'id': 47,
'title': 'Articolo 47 : Esame di atti giuridicamente vincolanti',
'text': "1.   Le proposte di atti giuridicamente vincolanti presentate da altre istituzioni o dagli Stati membri sono deferite dal Presidente, per esame, alla commissione competente.\
\
2.   In caso di dubbio, il Presidente può, prima della comunicazione in Aula del deferimento alla commissione competente, sottoporre una questione di competenza alla Conferenza dei presidenti. La Conferenza dei presidenti adotta una decisione sulla base di una raccomandazione della Conferenza dei presidenti di commissione, o del presidente di quest'ultima, in conformità dell\'articolo 201 bis, paragrafo 2.\
\
3.   La commissione competente può decidere in qualsiasi momento di nominare un relatore incaricato di seguire la fase preparatoria di una proposta. Essa tiene particolarmente conto di questa possibilità qualora la proposta figuri nel programma di lavoro della Commissione.\
\
4.   In caso di conflitto tra una disposizione del regolamento relativa alla seconda e alla terza lettura e un'altra disposizione del regolamento stesso prevale la disposizione relativa alla seconda e alla terza lettura.\
\
Articolo 47 bis : Accelerazione delle procedure legislative\
\
L\'accelerazione delle procedure legislative, in coordinamento con il Consiglio e la Commissione, riguardo a proposte specifiche, selezionate in particolare fra quelle definite prioritarie nella dichiarazione comune sulla programmazione interistituzionale annuale in conformità dell\'articolo 37, paragrafo 2, può essere concordata dalla commissione o dalle commissioni competenti."
},
{
'id': 48,
'title': 'Articolo 48 : Procedure legislative sulle iniziative presentate da istituzioni diverse dalla Commissione o dagli Stati membri',
'text': "1.   Nell'esame di iniziative presentate da istituzioni diverse dalla Commissione o presentate dagli Stati membri, la commissione competente può invitare rappresentanti delle istituzioni o degli Stati membri promotori a presentarle la loro iniziativa. I rappresentanti degli Stati membri promotori possono essere accompagnati dalla Presidenza del Consiglio.\
\
2.   Prima di procedere alla votazione, la commissione competente chiede alla Commissione se sta preparando un parere sull'iniziativa o se intende presentare, entro un breve lasso di tempo, una proposta alternativa. In caso di risposta affermativa, la commissione competente non approva la propria relazione prima di aver ricevuto il parere o la proposta alternativa della Commissione.\
\
3.   Qualora la Commissione e/o un'altra istituzione e/o gli Stati membri presentino al Parlamento, simultaneamente o entro un breve lasso di tempo, due o più proposte aventi lo stesso obiettivo legislativo, il Parlamento le esamina nell\'ambito di un'unica relazione. La commissione competente indica nella propria relazione il testo a cui ha presentato emendamenti e menziona nella risoluzione legislativa tutti gli altri testi."
},
{
'id': 49,
'title': 'Articolo 49 : Relazioni di carattere legislativo',
'text': "1.   Il presidente della commissione cui è stata deferita una proposta di atto giuridicamente vincolante propone alla sua commissione la procedura da seguire.\
\
2.   Dopo la decisione sulla procedura da seguire, e se non si applica la procedura semplificata di cui all\'articolo 50, la commissione designa un relatore sulla proposta di atto giuridicamente vincolante tra i propri membri titolari o i sostituti permanenti, a meno che non l\'abbia già fatto in base all\'articolo 47, paragrafo 3.\
\
3.   La relazione della commissione comprende:\
\
(a)   gli eventuali emendamenti alla proposta, corredati, se del caso, di brevi motivazioni, che sono redatte sotto la responsabilità dell\'autore e non sono poste in votazione;\
\
(b)   un progetto di risoluzione legislativa secondo le disposizioni dell\'articolo 59, paragrafo 5;\
\
(c)   se del caso, una motivazione che comprenda, ove necessario, una scheda finanziaria nella quale sono stabiliti l\'eventuale impatto finanziario della relazione e la sua compatibilità con il quadro finanziario pluriennale;\
\
(d)   se disponibile, un riferimento alla valutazione d'impatto eseguita dal Parlamento."
},
{
'id': 50,
'title': 'Articolo 50 : Procedura semplificata',
'text': "1.   Dopo una prima discussione su una proposta di atto giuridicamente vincolante, il presidente della commissione può proporre l\'approvazione della proposta senza emendamenti. Salvo nel caso in cui un numero di deputati o uno o più gruppi politici pari almeno alla soglia media in commissione vi si opponga, la procedura proposta è considerata approvata. Il presidente della commissione o il relatore, qualora quest'ultimo sia stato designato, presenta al Parlamento una relazione recante approvazione della proposta. Si applicano l\'articolo 150, paragrafo 1, secondo comma, e i paragrafi 2 e 4 dello stesso articolo.\
\
2.   In alternativa, il presidente della commissione può proporre che venga elaborata, a sua cura o a cura del relatore, una serie di emendamenti che riflettano la discussione in commissione. Salvo nel caso in cui un numero di deputati o uno o più gruppi politici pari almeno alla soglia media in commissione vi si opponga, la procedura proposta è considerata approvata e gli emendamenti vengono trasmessi ai membri della commissione.\
\
Se entro un termine che non può essere inferiore a dieci giorni lavorativi dalla trasmissione, non si oppone agli emendamenti un numero di deputati o uno o più gruppi politici pari almeno alla soglia media in commissione, la relazione si considera approvata da quest'ultima. In tal caso il progetto di risoluzione legislativa e gli emendamenti sono presentati al Parlamento senza discussione ai sensi dell\'articolo 150, paragrafo 1, secondo comma, e dei paragrafi 2 e 4 dello stesso articolo.\
\
Qualora un numero di deputati o uno o più gruppi politici pari almeno alla soglia media in commissione si opponga agli emendamenti, questi ultimi sono posti in votazione nella riunione di commissione successiva.\
\
3.   Fatta eccezione per le disposizioni relative alla presentazione al Parlamento, il presente articolo si applica mutatis mutandis ai pareri delle commissioni ai sensi dell\'articolo 53."
},
{
'id': 51,
'title': 'Articolo 51 : Relazioni di carattere non legislativo',
'text': "1.   Qualora una commissione elabori una relazione di carattere non legislativo, essa designa un relatore fra i propri membri titolari o i sostituti permanenti.\
\
2.   La relazione della commissione comprende:\
\
(a)   una proposta di risoluzione;\
\
(b)   se del caso, una motivazione che comprenda, ove necessario, una scheda finanziaria nella quale sono stabiliti l\'eventuale impatto finanziario della relazione e la sua compatibilità con il quadro finanziario pluriennale;\
\
(c)   i testi di proposte di risoluzione che devono figurare a norma dell\'articolo 133, paragrafo 7."
},
{
'id': 52,
'title': 'Articolo 52 : Relazioni di iniziativa',
'text': "1.   Qualora una commissione intenda elaborare una relazione non legislativa o una relazione a norma dell\'articolo 45 o dell\'articolo 46 su un argomento di sua competenza che non è stato oggetto di deferimento, deve chiedere l\'autorizzazione della Conferenza dei presidenti.\
\
La Conferenza dei presidenti delibera sulle richieste di autorizzazione a elaborare una relazione ai sensi del primo comma, conformemente alle disposizioni attuative da essa stabilite.\
\
2.   Nel caso in cui la Conferenza dei presidenti decida di negare l\'autorizzazione essa motiva il proprio diniego.\
\
Se l'oggetto della relazione rientra nel diritto di iniziativa del Parlamento di cui all\'articolo 45, la Conferenza dei presidenti può decidere di negare l\'autorizzazione solo ove non siano soddisfatti i requisiti stabiliti dai trattati.\
\
3.   Nei casi di cui agli articoli 45 e 46 la Conferenza dei presidenti adotta una decisione entro due mesi.\
\
4.   Le proposte di risoluzione presentate al Parlamento sono esaminate conformemente alla procedura di breve presentazione di cui all\'articolo 151. Gli emendamenti a tali proposte di risoluzione e le richieste di votazione distinta o per parti separate sono ricevibili in Aula soltanto se presentati dal relatore per tenere conto di nuove informazioni o da almeno un decimo dei deputati. I gruppi politici possono presentare proposte di risoluzione alternative a norma dell\'articolo 170, paragrafo 3. Alla proposta di risoluzione della commissione e ai relativi emendamenti si applica l\'articolo 180. L\'articolo 180 si applica altresì alla votazione unica delle proposte di risoluzione alternative.\
\
5.   Il paragrafo 4 non si applica se l'oggetto della relazione può essere tema di una discussione prioritaria in Aula, se la relazione è redatta in virtù del diritto d'iniziativa di cui all\'articolo 45 o all\'articolo 46 o se la relazione è stata autorizzata in quanto relazione strategica(1).\
\
\
(1)	Cfr. la relativa decisione della Conferenza dei presidenti.\
\
Articolo 52 bis : Modalità di elaborazione delle relazioni\
\
1.   Il relatore è incaricato di redigere la relazione della commissione e di illustrarla in Aula a nome di tale commissione.\
\
2.   La motivazione è redatta sotto la responsabilità del relatore e non è posta in votazione. Essa deve essere tuttavia conforme al testo della proposta di risoluzione approvata e agli eventuali emendamenti proposti dalla commissione. In caso contrario, il presidente della commissione può sopprimere la motivazione.\
\
3.   Nella relazione è menzionato il risultato della votazione sull'insieme della relazione stessa ed è indicato, in conformità dell\'articolo 208, paragrafo 3, il voto espresso da ciascun membro.\
\
4.   Le posizioni della minoranza possono essere espresse al momento della votazione sull'insieme del testo e possono, a richiesta dei rispettivi autori, essere oggetto di una dichiarazione scritta di 200 parole al massimo che è allegata alla motivazione.\
\
Il presidente dirime le controversie che potrebbero nascere dall'applicazione del presente paragrafo.\
\
5.   Su proposta del suo presidente, la commissione può stabilire il termine entro il quale il relatore presenterà un progetto di relazione. Tale termine può essere prorogato oppure può essere designato un nuovo relatore.\
\
6.   Scaduto il termine, la commissione può incaricare il suo presidente di chiedere che la questione a essa deferita sia iscritta all\'ordine del giorno di una delle successive sedute del Parlamento. In questo caso, le discussioni e le votazioni possono svolgersi sulla base di una semplice relazione orale della commissione interessata."
},
{
'id': 53,
'title': 'Articolo 53 : Pareri delle commissioni',
'text': "1.   Se la commissione cui per prima è stata sottoposta una questione vuole conoscere il parere di un'altra commissione o se un'altra commissione desidera esprimere il suo parere sulla stessa questione, esse possono chiedere al Presidente del Parlamento che, in conformità dell\'articolo 201, paragrafo 2, una commissione sia designata competente per il merito e l\'altra competente per parere.\
\
La commissione che esprime parere può designare un relatore per parere tra i propri membri titolari o tra i sostituti permanenti oppure trasmettere il proprio parere sotto forma di lettera del suo presidente.\
\
2.   Qualora il parere riguardi una proposta di atto giuridicamente vincolante, esso contiene proposte di modifica al testo sottoposto all\'esame della commissione, corredate, se del caso, di brevi motivazioni. Tali motivazioni sono redatte sotto la responsabilità del loro autore e non sono poste in votazione. Se necessario, la commissione competente per parere può presentare una breve motivazione scritta per il parere nel suo insieme. Tale breve motivazione è redatta sotto la responsabilità del relatore del parere.\
\
Qualora il parere non riguardi una proposta di atto giuridicamente vincolante, esso consiste in suggerimenti riferiti a parti della proposta di risoluzione della commissione competente per il merito.\
\
La commissione competente per il merito pone in votazione tali proposte di modifica o suggerimenti.\
\
I pareri riguardano esclusivamente questioni che rientrano nelle attribuzioni della commissione competente per parere.\
\
3.   La commissione competente per il merito fissa un termine entro il quale la commissione competente per parere deve pronunciarsi affinché il parere possa essere preso in considerazione dalla commissione competente per il merito. Quest'ultima comunica immediatamente alla commissione o alle commissioni competenti per parere ogni modifica del calendario annunciato. La commissione competente per il merito formula le proprie conclusioni finali solo dopo la scadenza del termine.\
\
4.   In alternativa, la commissione che esprime parere può decidere di illustrare la propria posizione sotto forma di emendamenti che, successivamente alla loro approvazione, dovranno essere presentati direttamente alla commissione competente per il merito. Tali emendamenti sono presentati dal presidente o dal relatore a nome della commissione.\
\
5.   La commissione che esprime parere presenta gli emendamenti di cui al paragrafo 4 entro il termine stabilito dalla commissione competente per il merito.\
\
6.   Tutti i pareri e gli emendamenti approvati dalla commissione che esprime parere sono allegati alla relazione della commissione competente per il merito.\
\
7.   Le commissioni che esprimono parere ai sensi del presente articolo non possono presentare emendamenti in Aula.\
\
8.   Il presidente e il relatore della commissione competente per parere sono invitati a partecipare in veste consultiva alle riunioni della commissione competente per il merito quando esse vertano sulla questione di interesse comune."
},
{
'id': 54,
'title': 'Articolo 54 : Procedura con le commissioni associate',
'text': "1.   Qualora una questione di competenza sia stata sottoposta alla Conferenza dei presidenti a norma dell\'articolo 201 bis e la Conferenza dei presidenti, sulla base dell\'allegato V, ritenga che la questione rientri a titolo pressoché paritario nell\'ambito di competenza di due o più commissioni o che diversi aspetti della questione rientrino nell\'ambito di competenza di due o più commissioni, si applicano l\'articolo 53 e le seguenti disposizioni supplementari:\
\
-   le commissioni interessate decidono di comune accordo il calendario;\
\
-   il relatore e i relatori per parere si tengono reciprocamente informati e cercano di concordare i testi da essi proposti alle rispettive commissioni e la loro posizione per quanto riguarda gli emendamenti;\
\
-   i presidenti, il relatore e i relatori per parere interessati sono vincolati dal principio di buona e leale cooperazione e determinano insieme le parti del testo che rientrano nelle loro competenze esclusive o condivise e convengono le modalità precise della loro cooperazione. In caso di disaccordo sulla delimitazione delle competenze, la questione è sottoposta, su richiesta di una delle commissioni interessate, alla Conferenza dei presidenti, che può decidere sulla questione delle rispettive competenze oppure decidere di applicare la procedura con commissioni congiunte a norma dell\'articolo 55. Tale decisione è adottata conformemente alla procedura e nel rispetto del termine di cui all\'articolo 201 bis;\
\
-   la commissione competente per il merito accoglie senza votazione gli emendamenti di una commissione associata qualora riguardino questioni che rientrano nell\'ambito di competenza esclusiva della commissione associata. Qualora la commissione competente per il merito non rispetti la competenza esclusiva della commissione associata, quest'ultima può presentare gli emendamenti direttamente in Aula. Nel caso in cui degli emendamenti riguardanti questioni che rientrano nella competenza condivisa della commissione competente per il merito e di una commissione associata non siano approvati dalla commissione competente per il merito, la commissione associata li può presentare direttamente in Aula;\
\
-   qualora la proposta segua la procedura di conciliazione, la delegazione del Parlamento comprende il relatore per parere di ogni commissione associata.\
\
La decisione della Conferenza dei presidenti di applicare la procedura con le commissioni associate si applica in tutte le fasi della procedura in questione.\
\
I diritti collegati allo status di 'commissione competente' sono esercitati dalla commissione responsabile per il merito. Nell'esercizio di tali diritti, quest'ultima deve rispettare le prerogative della commissione associata. In particolare, la commissione competente per il merito deve rispettare l'obbligo di cooperazione leale per quanto riguarda il calendario e il diritto della commissione associata di determinare gli emendamenti che sono sottoposti all'Aula nell\'ambito della sua competenza esclusiva.\
\
2.   La procedura di cui al presente articolo non si applica alle raccomandazioni che la commissione competente deve approvare a norma dell\'articolo 99."
},
{
'id': 55,
'title': 'Articolo 55 : Procedura con le commissioni congiunte',
'text': "1.   Ove le sia sottoposto un problema di competenza sulla base dell\'articolo 201 bis, la Conferenza dei presidenti può decidere di applicare la procedura con riunioni congiunte delle commissioni e con votazione congiunta, purché:\
\
-   la materia rilevi, in virtù dell\'allegato V, della competenza di più commissioni in modo inscindibile, e\
\
-   la Conferenza dei presidenti sia convinta che si tratti di una questione di grande rilevanza.\
\
2.   In tal caso i rispettivi relatori elaborano un unico progetto di relazione, che è esaminato e votato dalle commissioni interessate nel corso di riunioni congiunte tenute sotto la presidenza congiunta dei presidenti delle commissioni interessate.\
\
In tutte le fasi della procedura, i diritti afferenti allo status di commissione competente possono essere esercitati dalle commissioni interessate solo congiuntamente. Queste ultime possono costituire gruppi di lavoro per preparare le riunioni e le votazioni.\
\
3.   In fase di seconda lettura della procedura legislativa ordinaria, la posizione del Consiglio è esaminata nel corso di una riunione congiunta delle commissioni interessate che, in mancanza di accordo tra i presidenti di dette commissioni, si svolge il mercoledì della prima settimana di riunione di organi parlamentari successiva alla comunicazione della posizione del Consiglio al Parlamento. In mancanza di accordo in ordine alla convocazione di una ulteriore riunione, questa è convocata dal presidente della Conferenza dei presidenti di commissione. La raccomandazione per la seconda lettura è votata in riunione congiunta sulla base di un progetto comune elaborato dai rispettivi relatori delle commissioni interessate o, in assenza di un progetto comune, degli emendamenti presentati dalle commissioni interessate.\
\
In fase di terza lettura della procedura legislativa ordinaria, i presidenti e i relatori delle commissioni coinvolte sono d\'ufficio membri della delegazione al Comitato di conciliazione."
},
{
'id': 56,
'title': 'Articolo 56 : (soppresso)',
'text': ""
},
{
'id': 57,
'title': 'Articolo 57 : (soppresso)',
'text': ""
},
{
'id': 58,
'title': 'Articolo 58 : (soppresso)',
'text': ""
},
{
'id': 59,
'title': 'Articolo 59 : Votazione in Parlamento – Prima lettura',
'text': "1.   Il Parlamento può approvare, modificare o respingere il progetto di atto legislativo.\
\
2.   Il Parlamento vota innanzitutto sull'eventuale proposta di reiezione immediata del progetto di atto legislativo presentata per iscritto dalla commissione competente, da un gruppo politico o un numero di deputati pari almeno alla soglia bassa.\
\
Se la proposta di reiezione è approvata, il Presidente chiede all\'istituzione che ha presentato il progetto di atto legislativo di ritirarlo.\
\
Se tale istituzione accoglie la richiesta, il Presidente dichiara conclusa la procedura.\
\
Se l\'istituzione in questione non ritira il progetto di atto legislativo, il Presidente annuncia che la prima lettura del Parlamento è conclusa, a meno che il Parlamento, su proposta del presidente o del relatore della commissione competente o di un gruppo politico o un numero di deputati pari almeno alla soglia bassa, non decida di rinviare la questione alla commissione competente per un nuovo esame.\
\
Se la proposta di reiezione non è approvata, il Parlamento agisce in conformità dei paragrafi 3, 4 e 5.\
\
3.   Qualsiasi accordo provvisorio presentato dalla commissione competente a norma dell\'articolo 69 septies, paragrafo 4, ha la precedenza nella votazione ed è oggetto di una votazione unica, a meno che il Parlamento, su richiesta di un gruppo politico o un numero di deputati pari almeno alla soglia bassa, decida invece di procedere alla votazione sugli emendamenti in conformità del paragrafo 4. In tal caso, il Parlamento decide altresì se la votazione sugli emendamenti deve tenersi immediatamente. In caso negativo, il Parlamento fissa un nuovo termine per la presentazione di emendamenti e la votazione ha luogo nel corso di una seduta successiva.\
\
Se l\'accordo provvisorio è approvato mediante votazione unica, il Presidente annuncia che la prima lettura del Parlamento è conclusa.\
\
Se, nell\'ambito di una votazione unica, l\'accordo provvisorio non ottiene la maggioranza dei voti espressi, il Presidente fissa un nuovo termine per la presentazione di emendamenti al progetto di atto legislativo. Tali emendamenti sono quindi posti in votazione nel corso di una seduta successiva affinché il Parlamento possa concludere la prima lettura.\
\
4.   A meno che non sia approvata una proposta di reiezione in conformità del paragrafo 2 o che non sia stato approvato un accordo provvisorio in conformità del paragrafo 3, gli emendamenti al progetto di atto legislativo sono posti in votazione, comprese, se del caso, le singole parti dell\'accordo provvisorio, in caso di presentazione di richieste di votazione distinta o per parti separate o di emendamenti concorrenti.\
\
Prima che il Parlamento voti sugli emendamenti, il Presidente può chiedere alla Commissione di precisare la sua posizione e al Consiglio di formulare le sue osservazioni.\
\
Dopo la votazione su tali emendamenti, il Parlamento vota sull'intero progetto di atto legislativo, eventualmente modificato.\
\
Se l\'intero progetto di atto legislativo, quale eventualmente modificato, è approvato, il Presidente annuncia che la prima lettura è conclusa, a meno che il Parlamento, su proposta del presidente o del relatore della commissione competente o di un gruppo politico o un numero di deputati pari almeno alla soglia bassa, non decida di rinviare la questione alla commissione competente per l\'avvio di negoziati interistituzionali in conformità degli articoli 59 bis e 69 septies.\
\
Se l\'intero progetto di atto legislativo, quale eventualmente modificato, non ottiene la maggioranza dei voti espressi, il Presidente annuncia che la prima lettura è conclusa, a meno che il Parlamento, su proposta del presidente o del relatore della commissione competente o di un gruppo politico o un numero di deputati pari almeno alla soglia bassa, non decida di rinviare la questione alla commissione competente per un nuovo esame.\
\
5.   Dopo le votazioni effettuate in conformità dei paragrafi 2, 3 e 4 e le successive votazioni sugli emendamenti al progetto di risoluzione legislativa relativamente a richieste procedurali, se presenti, la risoluzione legislativa è considerata approvata. Se necessario, la risoluzione legislativa è modificata, in conformità dell\'articolo 193, paragrafo 2, onde riflettere l\'esito delle votazioni effettuate in conformità dei paragrafi 2, 3 e 4.\
\
Il testo della risoluzione legislativa e della posizione del Parlamento è trasmesso dal Presidente al Consiglio e alla Commissione, nonché al gruppo di Stati membri, alla Corte di giustizia e alla Banca centrale europea qualora il progetto di atto legislativo sia stato presentato da questi ultimi.\
\
Articolo 59 bis : Rinvio alla commissione competente\
\
Se, in conformità dell\'articolo 59, una questione è rinviata alla commissione competente per un nuovo esame o per l\'avvio di negoziati interistituzionali in conformità dell\'articolo 69 septies, la commissione competente riferisce al Parlamento, oralmente o per iscritto, entro un termine di quattro mesi. Tale termine può essere prorogato dalla Conferenza dei presidenti.\
\
In seguito ad un rinvio in commissione, la commissione competente per il merito, prima di decidere sulla procedura, deve permettere ad una commissione associata a norma dell\'articolo 54 di effettuare le sue scelte in relazione agli emendamenti che sono di sua competenza esclusiva, in particolare la scelta degli emendamenti che devono essere nuovamente sottoposti all'Aula.\
\
Nulla impedisce al Parlamento di decidere di tenere, ove opportuno, un dibattito conclusivo a seguito della relazione della commissione competente alla quale la questione è stata rinviata."
},
{
'id': 60,
'title': 'Articolo 60 : (soppresso)',
'text': ""
},
{
'id': 61,
'title': 'Articolo 61 : (soppresso)',
'text': ""
},
{
'id': 62,
'title': 'Articolo 62 : (soppresso)',
'text': ""
},
{
'id': 63,
'title': 'Articolo 63 : Nuova presentazione della proposta al Parlamento',
'text': "1.   Su richiesta della commissione competente, il Presidente chiede alla Commissione di presentare nuovamente al Parlamento la proposta qualora\
\
-   la Commissione sostituisca, modifichi o intenda modificare sostanzialmente la sua proposta iniziale, dopo che il Parlamento ha adottato la sua posizione, a meno che non si proceda in tal senso al fine di tenere conto della posizione del Parlamento,\
\
-   la natura del problema su cui verte la proposta cambi sostanzialmente a seguito del passare del tempo o del mutare delle circostanze, ovvero\
\
-   abbiano avuto luogo nuove elezioni al Parlamento dopo che quest'ultimo ha adottato la sua posizione e la Conferenza dei presidenti lo ritenga opportuno.\
\
2.   Se è prevista una modifica della base giuridica di una proposta che faccia venir meno l\'applicazione della procedura legislativa ordinaria alla proposta stessa, il Parlamento, il Consiglio e la Commissione procedono, a norma del punto 25 dell\'accordo interistituzionale 'Legiferare meglio', ad uno scambio di opinioni sulla questione attraverso i rispettivi Presidenti o rappresentanti.\
\
3.   A seguito dello scambio di opinioni di cui al paragrafo 2 e su richiesta della commissione competente, il Presidente chiede al Consiglio di presentare nuovamente al Parlamento il progetto di atto giuridicamente vincolante, qualora la Commissione o il Consiglio intenda modificare la base giuridica prevista nella posizione del Parlamento in prima lettura, in modo tale da far venir meno l\'applicazione della procedura legislativa ordinaria.\
\
Articolo 63 bis : Accordo in prima lettura\
\
Qualora, conformemente all\'articolo 294, paragrafo 4, del trattato sul funzionamento dell\'Unione europea, il Consiglio informi il Parlamento di avere approvato la posizione del Parlamento, il Presidente, previa messa a punto a norma dell\'articolo 193, annuncia in Aula che l\'atto legislativo è approvato nella formulazione corrispondente alla posizione del Parlamento."
},
{
'id': 64,
'title': 'Articolo 64 : Comunicazione della posizione del Consiglio',
'text': "1.   La comunicazione della posizione del Consiglio conformemente all\'articolo 294 del trattato sul funzionamento dell\'Unione europea ha luogo nel momento in cui il Presidente ne dà l\'annuncio in Aula. Il Presidente procede a tale annuncio dopo aver ricevuto i documenti in cui figurano la posizione stessa, tutte le dichiarazioni riportate a verbale dal Consiglio al momento dell\'adozione della posizione, i motivi che hanno indotto il Consiglio ad adottarla nonché la posizione della Commissione, debitamente tradotti nelle lingue ufficiali dell\'Unione europea. L\'annuncio del Presidente è fatto nel corso della tornata successiva al ricevimento di tali documenti.\
\
Prima di procedere all\'annuncio, il Presidente verifica, in consultazione con il presidente della commissione competente, il relatore o con entrambi, che il testo inviatogli abbia effettivamente natura di posizione del Consiglio in prima lettura e che non sussistano gli estremi dell\'articolo 63. In caso contrario, il Presidente ricerca, d'intesa con la commissione competente e, se possibile, in accordo con il Consiglio, la soluzione adeguata.\
\
2.   Il giorno del suo annuncio in Aula, la posizione del Consiglio si considera deferita d\'ufficio alla commissione competente in prima lettura.\
\
3.   L'elenco di tali comunicazioni con la denominazione della commissione competente è pubblicato nel processo verbale delle sedute."
},
{
'id': 65,
'title': 'Articolo 65 : Proroga dei termini',
'text': "1.   Il Presidente, su richiesta del presidente della commissione competente, proroga i termini fissati per la seconda lettura conformemente all\'articolo 294, paragrafo 14, del trattato sul funzionamento dell\'Unione europea.\
\
2.   Il Presidente notifica al Parlamento ogni proroga dei termini decisa a norma dell\'articolo 294, paragrafo 14, del trattato sul funzionamento dell\'Unione europea, su iniziativa del Parlamento o del Consiglio."
},
{
'id': 66,
'title': 'Articolo 66 : Procedura in sede di commissione competente',
'text': "1.   La posizione del Consiglio è iscritta come punto prioritario all\'ordine del giorno della prima riunione della commissione competente per il merito successiva alla data della sua comunicazione. Il Consiglio può essere invitato a presentare la sua posizione.\
\
2.   A meno che la commissione responsabile non decida altrimenti, per la seconda lettura il relatore resta lo stesso della prima.\
\
3.   Si applicano alle deliberazioni della commissione competente le disposizioni di cui all\'articolo 69, paragrafi 2 e 3, relative alla ricevibilità degli emendamenti alla posizione del Consiglio; solo i membri titolari e i sostituti permanenti di tale commissione possono presentare proposte di reiezione o emendamenti. La commissione decide a maggioranza dei voti espressi.\
\
4.   La commissione competente presenta una raccomandazione per la seconda lettura che propone di approvare, emendare o respingere la posizione adottata dal Consiglio. Nella raccomandazione figura una breve motivazione della decisione proposta.\
\
5.   Gli articoli 49, 50, 53 e 188 non si applicano alla seconda lettura."
},
{
'id': 67,
'title': 'Articolo 67 : Presentazione al Parlamento',
'text': "La posizione del Consiglio e, qualora esista, la raccomandazione per la seconda lettura della commissione competente sono iscritte d\'ufficio nel progetto di ordine del giorno della tornata il cui mercoledì precede ed è più vicino al giorno della conclusione del periodo di tre mesi o, se prorogato a norma dell\'articolo 65, di quattro mesi, a meno che la questione non sia stata esaminata in una tornata precedente.\
\
Articolo 67 bis : Votazione in Parlamento – Seconda lettura\
\
1.   Il Parlamento vota innanzitutto sull'eventuale proposta di reiezione immediata della posizione del Consiglio presentata per iscritto dalla commissione competente, da un gruppo politico o un numero di deputati pari almeno alla soglia bassa. Affinché sia approvata, tale proposta di reiezione richiede i voti favorevoli della maggioranza dei deputati che compongono il Parlamento.\
\
Se la proposta di reiezione è approvata, la posizione del Consiglio è respinta e il Presidente annuncia in Aula che la procedura legislativa è conclusa.\
\
Se la proposta di reiezione non è approvata, il Parlamento agisce in conformità dei paragrafi 2, 3, 4 e 5.\
\
2.   Qualsiasi accordo provvisorio presentato dalla commissione competente a norma dell\'articolo 69 septies, paragrafo 4, ha la precedenza nella votazione ed è oggetto di una votazione unica, a meno che il Parlamento, su richiesta di un gruppo politico o un numero di deputati pari almeno alla soglia bassa, decida di procedere immediatamente alla votazione sugli emendamenti in conformità del paragrafo 3.\
\
Se, nell\'ambito di una votazione unica, l\'accordo provvisorio ottiene i voti favorevoli della maggioranza dei deputati che compongono il Parlamento, il Presidente annuncia in Aula che la seconda lettura del Parlamento è conclusa.\
\
Se, nell\'ambito di una votazione unica, l\'accordo provvisorio non ottiene i voti favorevoli della maggioranza dei deputati che compongono il Parlamento, quest'ultimo procede in conformità dei paragrafi 3, 4 e 5.\
\
3.   A meno che non sia approvata una proposta di reiezione in conformità del paragrafo 1 o che non sia approvato un accordo provvisorio in conformità del paragrafo 2, gli emendamenti alla posizione del Consiglio, inclusi quelli contenuti nell\'accordo provvisorio presentato dalla commissione competente in conformità dell\'articolo 69 septies, paragrafo 4, sono posti in votazione. Un emendamento alla posizione del Consiglio è approvato soltanto se ottiene i voti favorevoli della maggioranza dei deputati che compongono il Parlamento.\
\
Prima di porre in votazione gli emendamenti, il Presidente può chiedere alla Commissione di precisare la sua posizione e al Consiglio di formulare le sue osservazioni.\
\
4.   Nonostante una votazione contraria del Parlamento alla proposta iniziale di reiezione della posizione del Consiglio in conformità del paragrafo 1, il Parlamento può esaminare, su proposta del presidente o del relatore della commissione competente o di un gruppo politico o un numero di deputati pari almeno alla soglia bassa, una nuova proposta di reiezione, dopo aver votato sugli emendamenti in conformità dei paragrafi 2 o 3. Affinché sia approvata, tale proposta richiede i voti favorevoli della maggioranza dei deputati che compongono il Parlamento.\
\
Se la posizione del Consiglio è respinta, il Presidente annuncia in Aula che la procedura legislativa è conclusa.\
\
5.   Dopo le votazioni effettuate in conformità dei paragrafi da 1 a 4 e le successive votazioni sugli emendamenti al progetto di risoluzione legislativa relativamente a richieste procedurali, il Presidente annuncia che la seconda lettura del Parlamento è conclusa e la risoluzione legislativa è considerata approvata. Se necessario, la risoluzione legislativa è modificata, in conformità dell\'articolo 193, paragrafo 2, onde riflettere l\'esito delle votazioni effettuate in conformità dei paragrafi da 1 a 4 o l\'applicazione dell\'articolo 69 bis.\
\
Il testo della risoluzione legislativa e la posizione del Parlamento, se del caso, sono trasmessi dal Presidente al Consiglio e alla Commissione.\
\
Qualora non sia stata presentata una proposta di reiezione o modifica della posizione del Consiglio, essa si considera approvata."
},
{
'id': 68,
'title': 'Articolo 68 : (soppresso)',
'text': ""
},
{
'id': 69,
'title': 'Articolo 69 : Ricevibilità degli emendamenti alla posizione del Consiglio',
'text': "1.   La commissione competente per il merito, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono presentare emendamenti alla posizione del Consiglio per esame in seduta plenaria.\
\
2.   Un emendamento alla posizione del Consiglio è ricevibile soltanto se è conforme alle disposizioni degli articoli 169 e 170 e mira a:\
\
(a)   ripristinare completamente o parzialmente la posizione approvata dal Parlamento in prima lettura, ovvero\
\
(b)   raggiungere un compromesso tra Consiglio e Parlamento, ovvero\
\
(c)   modificare una parte del testo della posizione del Consiglio che non figura nella proposta presentata in prima lettura o vi compare con diverso tenore,\
\
(d)   tener conto di un fatto o di una nuova situazione giuridica intervenuti dopo l\'approvazione della posizione del Parlamento in prima lettura.\
\
La decisione del Presidente in merito alla ricevibilità di un emendamento è inoppugnabile.\
\
3.   Qualora abbiano avuto luogo nuove elezioni dopo la prima lettura, ma non sia stata chiesta l\'applicazione dell\'articolo 63, il Presidente può decidere di derogare alle limitazioni in materia di ricevibilità di cui al paragrafo 2.\
\
Articolo 69 bis : Accordo in seconda lettura\
\
Se non sono presentate proposte di reiezione o emendamenti alla posizione del Consiglio a norma degli articoli 67 bis e 69 entro i termini per la presentazione e la votazione di emendamenti o di proposte di reiezione, il Presidente annuncia in Aula che l\'atto proposto è stato approvato.\
\
Articolo 69 ter : Disposizioni generali\
\
I negoziati con le altre istituzioni al fine di pervenire ad un accordo nel corso di una procedura legislativa possono essere avviati solo a seguito di una decisione adottata in conformità degli articoli da 69 quater a 69 sexies o a seguito di un rinvio, da parte del Parlamento, per l\'avvio di negoziati interistituzionali. Tali negoziati sono condotti sulla base del Codice di condotta stabilito dalla Conferenza dei presidenti(1).\
\
\
(1)	Codice di condotta per la negoziazione nel contesto della procedura legislativa ordinaria.\
\
\
Articolo 69 quater : Negoziati precedenti alla prima lettura del Parlamento\
\
1.   Se una commissione ha approvato una relazione legislativa a norma dell\'articolo 49, può decidere, a maggioranza dei suoi membri, di avviare negoziati sulla base di tale relazione.\
\
2.   Le decisioni sull\'avvio di negoziati sono annunciate all\'inizio della tornata successiva alla loro approvazione in commissione. Entro la fine del giorno successivo all\'annuncio in Aula, un numero di deputati o uno o più gruppi politici pari almeno alla soglia media possono chiedere per iscritto di porre in votazione la decisione della commissione sull\'avvio di negoziati. Il Parlamento procede a tale votazione durante la stessa tornata.\
\
Qualora una tale richiesta non pervenga entro la scadenza del termine di cui al primo comma, il Presidente informa al riguardo il Parlamento. Ove tale richiesta sia formulata, il Presidente può dare la parola a un oratore a favore e a un oratore contrario alla decisione di avviare negoziati subito prima della votazione. Ciascun oratore può fare una dichiarazione di durata non superiore ai due minuti.\
\
3.   Se il Parlamento respinge la decisione della commissione sull\'avvio di negoziati, il progetto di atto legislativo e la relazione della commissione competente sono iscritti all\'ordine del giorno della tornata successiva e il Presidente fissa un termine per la presentazione di emendamenti. Si applica l\'articolo 59, paragrafo 4.\
\
4.   I negoziati possono avere inizio in qualsiasi momento dopo la scadenza del termine di cui al paragrafo 2, primo comma, se non è stata formulata alcuna richiesta di procedere a una votazione in Parlamento sulla decisione in merito all\'avvio di negoziati. Qualora tale richiesta sia stata formulata, i negoziati possono avere inizio in qualsiasi momento dopo che la decisione della commissione sull\'avvio di negoziati sia stata approvata dal Parlamento.\
\
Articolo 69 quinquies : Negoziati precedenti alla prima lettura del Consiglio\
\
Qualora il Parlamento abbia approvato la propria posizione in prima lettura, quest'ultima costituisce il mandato per eventuali negoziati con altre istituzioni. La commissione competente può decidere, a maggioranza dei suoi membri, di avviare negoziati in qualsiasi momento successivo. Tali decisioni sono comunicate in Aula durante la tornata successiva alla votazione in commissione e sono menzionate nel processo verbale.\
\
Articolo 69 sexies : Negoziati precedenti alla seconda lettura del Parlamento\
\
Se la posizione del Consiglio in prima lettura è stata deferita alla commissione competente, la posizione del Parlamento in prima lettura costituisce, nel rispetto dell\'articolo 69, il mandato per eventuali negoziati con altre istituzioni. La commissione competente può decidere di avviare negoziati in qualsiasi momento successivo.\
\
Qualora la posizione del Consiglio in prima lettura contenga elementi che non sono contemplati dal progetto di atto legislativo o dalla posizione del Parlamento in prima lettura, la commissione può adottare orientamenti per la squadra negoziale, anche sotto forma di emendamenti alla posizione del Consiglio.\
\
Articolo 69 septies : Svolgimento dei negoziati\
\
1.   La squadra negoziale del Parlamento è guidata dal relatore ed è presieduta dal presidente della commissione competente o da un vicepresidente designato dal presidente. Essa comprende almeno i relatori ombra di ogni gruppo politico che desidera parteciparvi.\
\
2.   Tutti i documenti che si prevede di discutere in una riunione con il Consiglio e con la Commissione ('trilogo') sono trasmessi alla squadra negoziale almeno 48 ore, o in caso di urgenza, almeno 24 ore prima del trilogo in questione.\
\
3.   Dopo ogni trilogo, il presidente della squadra negoziale e il relatore, a nome della squadra negoziale, riferiscono alla commissione competente in occasione della riunione successiva di quest'ultima.\
\
Qualora non risulti possibile convocare in tempo utile una riunione della commissione, il presidente della squadra negoziale e il relatore, a nome della squadra negoziale, riferiscono in occasione di una riunione dei coordinatori della commissione.\
\
4.   Se i negoziati sfociano in un accordo provvisorio, la commissione competente è informata senza indugio. I documenti che riflettono l\'esito del trilogo conclusivo sono messi a disposizione della commissione competente e sono pubblicati. L\'accordo provvisorio è presentato alla commissione competente, la quale decide se approvarlo mediante votazione unica, a maggioranza dei voti espressi. Se approvato, l\'accordo provvisorio è sottoposto all\'esame in Aula e presentato in modo da indicare chiaramente le modifiche al progetto di atto legislativo.\
\
5.   In caso di disaccordo tra le commissioni interessate di cui agli articoli 54 e 55, le disposizioni dettagliate per l\'avvio dei negoziati e la condotta di tali negoziati sono definite dal presidente della Conferenza dei presidenti di commissione conformemente ai principi enunciati nei suddetti articoli.\
\
Articolo 69 octies : Proroga dei termini\
\
1.   Il Presidente, su richiesta della delegazione del Parlamento al Comitato di conciliazione, proroga i termini fissati per la terza lettura conformemente all\'articolo 294, paragrafo 14, del trattato sul funzionamento dell\'Unione europea.\
\
2.   Il Presidente notifica al Parlamento ogni proroga dei termini decisa, a norma dell\'articolo 294, paragrafo 14, del trattato sul funzionamento dell\'Unione europea, su iniziativa del Parlamento o del Consiglio."
},
{
'id': 70,
'title': 'Articolo 70 : Convocazione del Comitato di conciliazione',
'text': "Qualora il Consiglio comunichi al Parlamento di non essere in grado di accogliere tutti gli emendamenti del Parlamento alla sua posizione, il Presidente concorda con il Consiglio la data e il luogo di una prima riunione del Comitato di conciliazione. Il termine di sei settimane o, qualora tale termine sia stato prorogato, di otto settimane, previsto dall'articolo 294, paragrafo 10, del trattato sul funzionamento dell\'Unione europea, decorre dal giorno in cui il Comitato si riunisce per la prima volta."
},
{
'id': 71,
'title': 'Articolo 71 : Delegazione al Comitato di conciliazione',
'text': "1.   La delegazione del Parlamento al Comitato di conciliazione è composta da un numero di membri pari a quello dei membri della delegazione del Consiglio.\
\
2.   La composizione politica della delegazione riflette la ripartizione per gruppi politici del Parlamento. La Conferenza dei presidenti fissa il numero preciso di deputati dei vari gruppi politici figuranti quali membri della delegazione del Parlamento.\
\
3.   I membri della delegazione sono nominati dai gruppi politici per ogni caso specifico di conciliazione, preferibilmente tra i membri della commissione competente, a eccezione di tre membri che sono nominati come membri permanenti di delegazioni consecutive per un periodo di dodici mesi. I tre membri permanenti sono designati dai gruppi politici fra i vicepresidenti e rappresentano almeno due diversi gruppi politici. Il presidente e il relatore per la seconda lettura della commissione competente come pure il relatore per parere di ogni commissione associata sono in ogni caso membri della delegazione.\
\
4.   I gruppi politici rappresentati in seno alla delegazione nominano sostituti.\
\
5.   Ciascuno dei gruppi politici non rappresentati in seno alla delegazione può inviare un rappresentante a ogni riunione preparatoria interna della delegazione. Qualora la delegazione non comprenda alcun deputato non iscritto, uno di questi può partecipare a ogni riunione preparatoria interna della delegazione.\
\
6.   La delegazione è guidata dal Presidente o da uno dei tre membri permanenti.\
\
7.   La delegazione decide a maggioranza dei suoi membri. Le sue discussioni non sono pubbliche.\
\
La Conferenza dei presidenti stabilisce ulteriori orientamenti procedurali per i lavori della delegazione al Comitato di conciliazione.\
\
8.   I risultati della conciliazione sono trasmessi dalla delegazione al Parlamento."
},
{
'id': 72,
'title': 'Articolo 72 : Progetto comune',
'text': "1.   Qualora in sede di Comitato di conciliazione si raggiunga l\'accordo su un progetto comune, la questione è iscritta all\'ordine del giorno di una seduta del Parlamento compresa nelle sei o, in caso di proroga, otto settimane dalla data di approvazione del progetto comune da parte del Comitato di conciliazione.\
\
2.   Il presidente o un altro membro designato della delegazione al Comitato di conciliazione fa una dichiarazione sul progetto comune, che è corredato di una relazione.\
\
3.   Non possono essere presentati emendamenti al progetto comune.\
\
4.   Il progetto comune nel suo insieme forma oggetto di una votazione unica. Il progetto comune è approvato qualora raccolga la maggioranza dei voti espressi.\
\
5.   Qualora in sede di Comitato di conciliazione non si raggiunga un accordo su un progetto comune, il presidente o un altro membro designato della delegazione del Parlamento al Comitato di conciliazione fanno una dichiarazione. Tale dichiarazione è seguita da discussione.\
\
6.   Durante la procedura di conciliazione tra il Parlamento e il Consiglio a seguito della seconda lettura non vi può essere rinvio in commissione.\
\
7.   Gli articoli 49, 50 e 53 non si applicano alla terza lettura."
},
{
'id': 73,
'title': 'Articolo 73 : (soppresso)',
'text': ""
},
{
'id': 74,
'title': 'Articolo 74 : (soppresso)',
'text': ""
},
{
'id': 75,
'title': 'Articolo 75 : (soppresso)',
'text': ""
},
{
'id': 76,
'title': 'Articolo 76 : (soppresso)',
'text': ""
},
{
'id': 77,
'title': 'Articolo 77 : (soppresso)',
'text': ""
},
{
'id': 78,
'title': 'Articolo 78 : Firma e pubblicazione degli atti adottati',
'text': "Previa messa a punto del testo approvato a norma dell\'articolo 193 e dell\'allegato VII e previa verifica che tutte le procedure siano state debitamente espletate, gli atti adottati secondo la procedura legislativa ordinaria sono firmati dal Presidente e dal Segretario generale.\
\
A seguito della firma degli atti, i Segretari generali del Parlamento e del Consiglio provvedono alla loro pubblicazione nella Gazzetta ufficiale dell\'Unione europea.\
\
Articolo 78 bis : Modifica di una proposta di atto giuridicamente vincolante\
\
Qualora la Commissione intenda sostituire o modificare la sua proposta di atto giuridicamente vincolante, la commissione competente può sospendere il suo esame della questione fino a quando non abbia ricevuto la nuova proposta ovvero le modifiche della Commissione.\
\
Articolo 78 ter : Posizione della Commissione sugli emendamenti\
\
Prima di procedere alla votazione finale su una proposta di atto giuridicamente vincolante, la commissione competente può chiedere alla Commissione di precisare la sua posizione in merito a tutti gli emendamenti alla sua proposta approvati in commissione.\
\
Se del caso, tale posizione è inserita nella relazione della commissione competente.\
\
Articolo 78 quater : Votazione in Aula\
\
L\'articolo 59, paragrafi 1, 2, 4 e 5, si applica mutatis mutandis.\
\
Articolo 78 quinquies : Seguito da dare alla posizione del Parlamento\
\
1.   Nel periodo successivo all\'approvazione della posizione del Parlamento su un progetto di atto giuridicamente vincolante, il presidente e il relatore della commissione competente seguono la procedura che dà luogo all\'adozione del progetto di atto da parte del Consiglio, in particolare per accertarsi che il Consiglio o la Commissione rispettino compiutamente tutti gli impegni assunti nei confronti del Parlamento riguardo alla sua posizione. Il presidente e il relatore della commissione competente riferiscono regolarmente alla commissione competente.\
\
2.   La commissione competente può invitare la Commissione e il Consiglio a discutere la questione con la commissione stessa.\
\
3.   In ogni fase della procedura prevista dal presente articolo la commissione competente può, qualora lo giudichi necessario, presentare una proposta di risoluzione con cui raccomanda al Parlamento di:\
\
-   invitare la Commissione a ritirare la sua proposta,\
\
-   chiedere alla Commissione o al Consiglio di consultare nuovamente il Parlamento in conformità dell\'articolo 78 sexies, o alla Commissione di presentare una nuova proposta, ovvero\
\
-   prendere qualsiasi altra iniziativa che giudichi opportuna.\
\
Tale proposta di risoluzione è iscritta nel progetto di ordine del giorno della tornata successiva all\'approvazione della proposta della commissione.\
\
Articolo 78 sexies : Nuova presentazione della proposta al Parlamento\
\
1.   Su richiesta della commissione competente, il Presidente invita il Consiglio a consultare nuovamente il Parlamento nelle stesse circostanze e alle stesse condizioni precisate all\'articolo 63, paragrafo 1. Su richiesta della commissione competente, il Presidente invita inoltre il Consiglio a consultare nuovamente il Parlamento qualora il Consiglio modifichi sostanzialmente o intenda modificare sostanzialmente il progetto iniziale di atto giuridicamente vincolante sul quale il Parlamento ha espresso la sua posizione, a meno che non proceda in tal senso al fine di integrare gli emendamenti del Parlamento.\
\
2.   Il Presidente chiede inoltre al Consiglio di consultare nuovamente il Parlamento sul progetto di atto giuridicamente vincolante, nelle circostanze specificate nel presente articolo, se il Parlamento così decide su richiesta di un gruppo politico o un numero di deputati pari almeno alla soglia bassa."
},
{
'id': 79,
'title': 'Articolo 79 : Revisione ordinaria dei trattati',
'text': "1.   In conformità degli articoli 45 e 52, la commissione competente può presentare al Parlamento una relazione contenente proposte al Consiglio volte a modificare i trattati.\
\
2.   Quando il Parlamento è consultato a norma dell\'articolo 48, paragrafo 3, del trattato sull'Unione europea, su una proposta di decisione del Consiglio europeo favorevole all\'esame di modifiche ai trattati, la questione è deferita alla commissione competente. La commissione elabora una relazione contenente:\
\
-   una proposta di risoluzione che indica se il Parlamento approva o respinge la proposta di decisione proposta e che può contenere proposte all\'attenzione della Convenzione o della conferenza dei rappresentanti dei governi degli Stati membri;\
\
-   se del caso, una motivazione.\
\
3.   Se il Consiglio europeo decide di convocare una Convenzione, i rappresentanti del Parlamento sono nominati da quest'ultimo su proposta della Conferenza dei presidenti.\
\
La delegazione del Parlamento elegge il proprio capo e i candidati a qualsiasi gruppo direttivo o ufficio di presidenza istituito dalla Convenzione.\
\
4.   Qualora il Consiglio europeo chieda l’approvazione del Parlamento sulla decisione di non convocare una Convenzione per l\'esame delle proposte di modifica dei trattati, tale questione è deferita alla commissione competente in conformità dell\'articolo 99."
},
{
'id': 80,
'title': 'Articolo 80 : Revisione semplificata dei trattati',
'text': "1.   In conformità degli articoli 45 e 52, la commissione competente può presentare al Parlamento, secondo la procedura di cui all\'articolo 48, paragrafo 6, del trattato sull'Unione europea, una relazione contenente le proposte al Consiglio europeo volte a rivedere in tutto o in parte le disposizioni della parte terza del trattato sul funzionamento dell\'Unione europea.\
\
2.   Quando il Parlamento è consultato a norma dell\'articolo 48, paragrafo 6, del trattato sull'Unione europea, su una proposta di decisione del Consiglio europeo che modifica la parte terza del trattato sul funzionamento dell\'Unione europea, l\'articolo 79, paragrafo 2, si applica mutatis mutandis. In tal caso, la proposta di risoluzione può contenere proposte di modifica solo delle disposizioni della parte terza del trattato sul funzionamento dell\'Unione europea."
},
{
'id': 81,
'title': 'Articolo 81 : Trattati di adesione',
'text': "1.   Ogni richiesta di uno Stato europeo di diventare membro dell\'Unione europea conformemente all\'articolo 49 del trattato sull'Unione europea è deferita, per esame, alla commissione competente.\
\
2.   Il Parlamento può decidere, su proposta della commissione competente, di un gruppo politico o un numero di deputati pari almeno alla soglia bassa, di chiedere al Consiglio e alla Commissione di partecipare a una discussione prima che inizino i negoziati sull\'adesione con lo Stato richiedente.\
\
3.   La commissione competente chiede alla Commissione e al Consiglio di fornirle regolarmente informazioni esaurienti sull\'andamento dei negoziati sull\'adesione, se necessario in forma riservata.\
\
4.   In ogni fase dei negoziati sull\'adesione, sulla base di una relazione della commissione competente, il Parlamento può adottare raccomandazioni e chiedere che esse siano tenute in considerazione prima della conclusione di un trattato di adesione di uno Stato richiedente all'Unione europea.\
\
5.   Allorché i negoziati sull\'adesione sono conclusi, ma prima della firma di un accordo, il progetto di accordo è sottoposto al Parlamento, per approvazione, a norma dell\'articolo 99. In conformità dell\'articolo 49 del trattato sull'Unione europea, l\'approvazione del Parlamento richiede i voti favorevoli della maggioranza dei membri che lo compongono."
},
{
'id': 82,
'title': 'Articolo 82 : Recesso dall\'Unione',
'text': "Se uno Stato membro decide, a norma dell\'articolo 50 del trattato sull'Unione europea, di recedere dall\'Unione, la questione è deferita alla commissione competente. L\'articolo 81 si applica mutatis mutandis. Il Parlamento decide se dare la propria approvazione all\'accordo sul recesso a maggioranza dei voti espressi."
},
{
'id': 83,
'title': 'Articolo 83 : Violazione dei principi e dei valori fondamentali da parte di uno Stato membro',
'text': "1.   Il Parlamento, sulla base di una relazione specifica della commissione competente elaborata a norma degli articoli 45 e 52, può:\
\
(a)   porre in votazione una proposta motivata in cui invita il Consiglio ad agire ai sensi dell\'articolo 7, paragrafo 1, del trattato sull'Unione europea;\
\
(b)   porre in votazione una proposta in cui invita la Commissione o gli Stati membri a presentare una proposta ai sensi dell\'articolo 7, paragrafo 2, del trattato sull'Unione europea;\
\
(c)   porre in votazione una proposta in cui invita il Consiglio ad agire ai sensi dell\'articolo 7, paragrafo 3, o, in seguito, dell\'articolo 7, paragrafo 4, del trattato sull'Unione europea.\
\
2.   Le richieste di approvazione provenienti dal Consiglio relative a una proposta presentata a norma dell\'articolo 7, paragrafi 1 e 2, del trattato sull'Unione europea, corredate delle osservazioni formulate dallo Stato membro interessato, sono comunicate al Parlamento e deferite alla commissione competente in conformità dell\'articolo 99. Tranne in casi urgenti e giustificati, il Parlamento delibera su proposta della commissione competente.\
\
3.   In conformità dell\'articolo 354 del trattato sul funzionamento dell\'Unione europea, l\'adozione da parte del Parlamento delle decisioni sulle proposte di cui ai paragrafi 1 e 2 del presente articolo richiede la maggioranza dei due terzi dei voti espressi, che rappresentino la maggioranza dei deputati che compongono il Parlamento.\
\
4.   Previa autorizzazione della Conferenza dei presidenti, la commissione competente può presentare una proposta di risoluzione di accompagnamento. Tale proposta di risoluzione illustra la posizione del Parlamento su una grave violazione da parte di uno Stato membro, sulle opportune misure da adottare e sui criteri applicabili per la loro modifica o revoca.\
\
5.   La commissione competente provvede affinché il Parlamento sia tenuto pienamente informato e, se necessario, consultato su tutte le misure di accompagnamento adottate sulla base della sua approvazione, a norma del paragrafo 3. Il Consiglio è invitato ad illustrare gli eventuali sviluppi. Su proposta della commissione competente, elaborata con l\'autorizzazione della Conferenza dei presidenti, il Parlamento può approvare raccomandazioni destinate al Consiglio."
},
{
'id': 84,
'title': 'Articolo 84 : Composizione del Parlamento',
'text': "In tempo utile prima del termine di una legislatura, il Parlamento può, sulla base di una relazione elaborata dalla commissione competente in conformità dell\'articolo 14, paragrafo 2, del trattato sull'Unione europea e degli articoli 45 e 52 del suo regolamento, formulare una proposta volta a modificare la propria composizione. Il progetto di decisione del Consiglio europeo che stabilisce la composizione del Parlamento è esaminato da quest'ultimo in conformità dell\'articolo 99."
},
{
'id': 85,
'title': 'Articolo 85 : Cooperazione rafforzata fra Stati membri',
'text': "1.   Le richieste miranti a instaurare una cooperazione rafforzata fra gli Stati membri a norma dell\'articolo 20 del trattato sull'Unione europea sono deferite per esame dal Presidente alla commissione competente. Si applica l\'articolo 99.\
\
2.   La commissione competente verifica il rispetto dell\'articolo 20 del trattato sull'Unione europea e degli articoli da 326 a 334 del trattato sul funzionamento dell\'Unione europea.\
\
3.   Gli atti successivi proposti nel quadro della cooperazione rafforzata, una volta istituita, sono esaminati dal Parlamento conformemente alle stesse procedure che sarebbero state applicate ove non fosse stata instaurata la cooperazione rafforzata. Si applica l\'articolo 47."
},
{
'id': 86,
'title': 'Articolo 86 : Quadro finanziario pluriennale',
'text': "Qualora il Consiglio chieda l\'approvazione del Parlamento sulla proposta di regolamento che stabilisce il quadro finanziario pluriennale, la questione è trattata a norma dell\'articolo 99. In conformità dell\'articolo 312, paragrafo 2, primo comma, del trattato sul funzionamento dell\'Unione europea, l\'approvazione del Parlamento richiede i voti favorevoli della maggioranza dei deputati che lo compongono.\
\
Articolo 86 bis : Procedura di bilancio annuale\
\
La commissione competente può decidere di redigere qualsiasi relazione che ritenga opportuna in materia di bilancio, tenendo conto dell\'allegato all\'accordo interistituzionale, del 2 dicembre 2013, sulla disciplina di bilancio, sulla cooperazione in materia di bilancio e sulla sana gestione finanziaria(1).\
\
Qualsiasi altra commissione può esprimere un parere entro il termine fissato dalla commissione competente.\
\
\
(1)	GU C 373 del 20.12.2013, pag. 1."
},
{
'id': 87,
'title': 'Articolo 87 : (soppresso)',
'text': ""
},
{
'id': 88,
'title': 'Articolo 88 : Posizione del Parlamento sul progetto di bilancio',
'text': "1.   I singoli deputati possono presentare alla commissione competente emendamenti alla posizione del Consiglio sul progetto di bilancio.\
\
Un gruppo politico o un numero di deputati pari almeno alla soglia bassa o una commissione possono presentare in seduta plenaria emendamenti alla posizione del Consiglio sul progetto di bilancio.\
\
2.   Gli emendamenti sono presentati e motivati per iscritto, sono sottoscritti dai loro autori e indicano la linea di bilancio cui si riferiscono.\
\
3.   Il Presidente stabilisce il termine di presentazione degli emendamenti.\
\
4.   La commissione competente per il merito vota sugli emendamenti prima della loro discussione in seduta plenaria.\
\
5.   Gli emendamenti presentati in seduta plenaria che siano stati respinti in seno alla commissione competente per il merito possono essere posti in votazione solo se una commissione, un gruppo politico o un numero di deputati pari almeno alla soglia bassa ne abbiano fatto richiesta per iscritto entro un termine fissato dal Presidente. Tale termine non può in ogni caso essere inferiore a 24 ore prima dell\'inizio della votazione.\
\
6.   Gli emendamenti allo stato di previsione del Parlamento che riprendano progetti analoghi a quelli già respinti dal Parlamento in sede di elaborazione di tale stato di previsione sono posti in discussione solo se hanno ottenuto il parere favorevole della commissione competente per il merito.\
\
7.   Il Parlamento si pronuncia con votazioni successive su:\
\
-   gli emendamenti alla posizione del Consiglio sul progetto di bilancio, per sezione,\
\
-   le proposte di risoluzione relative a tale progetto di bilancio.\
\
Sono tuttavia applicabili le disposizioni di cui all\'articolo 174, paragrafi da 4 a 10.\
\
8.   Gli articoli, i capitoli, i titoli e le sezioni del progetto di bilancio per i quali non siano stati presentati emendamenti sono considerati approvati.\
\
9.   In conformità dell\'articolo 314, paragrafo 4, lettera c), del trattato sul funzionamento dell\'Unione europea, per essere approvati gli emendamenti devono ottenere i voti favorevoli della maggioranza dei deputati che compongono il Parlamento.\
\
10.   Qualora il Parlamento abbia emendato la posizione del Consiglio sul progetto di bilancio, la posizione così emendata è trasmessa al Consiglio e alla Commissione corredata delle motivazioni e del processo verbale della seduta in cui gli emendamenti sono stati approvati."
},
{
'id': 89,
'title': 'Articolo 89 : (soppresso)',
'text': ""
},
{
'id': 90,
'title': 'Articolo 90 : Conciliazione di bilancio',
'text': "1.   Il Presidente convoca il Comitato di conciliazione in conformità dell\'articolo 314, paragrafo 4, del trattato sul funzionamento dell\'Unione europea.\
\
2.   La delegazione che rappresenta il Parlamento alle riunioni del Comitato di conciliazione nel quadro della procedura di bilancio è composta da un numero di membri pari a quello dei membri della delegazione del Consiglio.\
\
3.   I membri della delegazione che rappresenta il Parlamento alle riunioni del Comitato di conciliazione sono nominati annualmente dai gruppi politici prima che il Parlamento voti la posizione del Consiglio, preferibilmente tra i membri della commissione competente per le questioni di bilancio e altre commissioni interessate. La delegazione è guidata dal Presidente del Parlamento. Il Presidente può delegare tale ruolo a un vicepresidente con esperienza in materia di bilancio o al presidente della commissione competente per le questioni di bilancio.\
\
4.   Si applica l\'articolo 71, paragrafi 2, 4, 5, 7 e 8.\
\
5.   Qualora in seno al Comitato di conciliazione si raggiunga l\'accordo su un progetto comune, la questione è iscritta all\'ordine del giorno di una seduta del Parlamento da tenersi nei 14 giorni successivi alla data di tale accordo. Il progetto comune è messo a disposizione dei deputati. Si applica l\'articolo 72, paragrafi 2 e 3.\
\
6.   Il progetto comune nel suo insieme forma oggetto di una votazione unica. La votazione si svolge per appello nominale. Il progetto comune si considera approvato a meno che la maggioranza dei membri che compongono il Parlamento lo respinga.\
\
7.   Se il Parlamento approva il progetto comune mentre il Consiglio lo respinge, la commissione competente può presentare per conferma tutti gli emendamenti del Parlamento alla posizione del Consiglio o parte di essi, in conformità dell\'articolo 314, paragrafo 7, lettera d), del trattato sul funzionamento dell\'Unione europea.\
\
Il voto di conferma è iscritto all’ordine del giorno di una seduta entro 14 giorni dalla data di comunicazione della reiezione del testo comune da parte del Consiglio.\
\
Gli emendamenti sono considerati confermati qualora siano approvati dalla maggioranza dei membri che compongono il Parlamento e dai tre quinti dei voti espressi."
},
{
'id': 91,
'title': 'Articolo 91 : Adozione definitiva del bilancio',
'text': "Una volta constatata l\'adozione del bilancio in conformità delle disposizioni dell\'articolo 314 del trattato sul funzionamento dell\'Unione europea, il Presidente proclama in Aula che il bilancio è definitivamente adottato. Egli provvede a farlo pubblicare nella Gazzetta ufficiale dell\'Unione europea."
},
{
'id': 92,
'title': 'Articolo 92 : Regime dei dodicesimi provvisori',
'text': "1.   Le decisioni adottate dal Consiglio che autorizzano spese superiori al dodicesimo provvisorio degli stanziamenti aperti per l\'esercizio precedente sono deferite alla commissione competente.\
\
2.   La commissione competente può presentare un progetto di decisione volto a ridurre le spese di cui al paragrafo 1. Il Parlamento decide in merito entro trenta giorni a decorrere dall'adozione della decisione del Consiglio.\
\
3.   Il Parlamento delibera a maggioranza dei deputati che lo compongono.\
\
Articolo 92 bis : Esecuzione del bilancio\
\
1.   Il Parlamento procede al controllo dell\'esecuzione del bilancio in corso. Esso affida tale compito alle commissioni competenti in materia di bilancio e di controllo dei bilanci nonché alle altre commissioni interessate.\
\
2.   Il Parlamento esamina ogni anno, anteriormente alla sua lettura del progetto di bilancio relativo all\'esercizio successivo, i problemi inerenti all\'esecuzione del bilancio in corso, se del caso sulla base di una proposta di risoluzione presentata dalla commissione in materia."
},
{
'id': 93,
'title': 'Articolo 93 : Discarico alla Commissione per l\'esecuzione del bilancio',
'text': "Le disposizioni che disciplinano la procedura relativa al discarico alla Commissione per l\'esecuzione del bilancio, in conformità delle disposizioni finanziarie del Trattato sul funzionamento dell\'Unione europea e del regolamento (UE, Euratom) n. 966/2012 del Parlamento europeo e del Consiglio(1) ('Regolamento finanziario'), sono allegate al presente regolamento(2).\
\
\
(1)	Regolamento (UE, Euratom) n. 966/2012 del Parlamento europeo e del Consiglio, del 25 ottobre 2012, che stabilisce le regole finanziarie applicabili al bilancio generale dell\'Unione e che abroga il regolamento (CE, Euratom) n. 1605/2012 (GU L 298 del 26.10.2012, pag. 1).\
(2)	Cfr. allegato IV."
},
{
'id': 94,
'title': 'Articolo 94 : Altre procedure in materia di discarico',
'text': "Le disposizioni che disciplinano la procedura relativa al discarico alla Commissione per l\'esecuzione del bilancio, in conformità dell\'articolo 319 del trattato sul funzionamento dell\'Unione europea, si applicano anche alla procedura relativa al discarico da dare:\
\
-   al Presidente del Parlamento europeo per l\'esecuzione del bilancio del Parlamento europeo;\
\
-   ai responsabili dell\'esecuzione dei bilanci di altre istituzioni e organi dell\'Unione europea, quali il Consiglio, la Corte di giustizia dell\'Unione europea, la Corte dei conti, il Comitato economico e sociale europeo e il Comitato delle regioni;\
\
-   alla Commissione per l\'esecuzione del bilancio del Fondo europeo di sviluppo;\
\
-   agli organi responsabili dell\'esecuzione del bilancio di organismi giuridicamente indipendenti che svolgono funzioni dell\'Unione, nella misura in cui le disposizioni che ne disciplinano l\'attività prevedano il discarico da parte del Parlamento europeo.\
\
Articolo 94 bis : Cooperazione interistituzionale\
\
In conformità dell\'articolo 324 del trattato sul funzionamento dell\'Unione europea, il Presidente partecipa ai regolari incontri fra i Presidenti del Parlamento europeo, del Consiglio e della Commissione convocati, su iniziativa della Commissione, nel quadro delle procedure di bilancio di cui al titolo II della parte sesta del trattato sul funzionamento dell\'Unione europea. Il Presidente prende tutte le misure necessarie per promuovere la concertazione e la riconciliazione delle posizioni delle istituzioni al fine di agevolare l\'attuazione delle procedure summenzionate.\
\
Il Presidente del Parlamento può delegare questo compito a un vicepresidente con esperienza in materia di bilancio o al presidente della commissione competente per le questioni di bilancio."
},
{
'id': 95,
'title': 'Articolo 95 : (soppresso)',
'text': ""
},
{
'id': 96,
'title': 'Articolo 96 : Stato di previsione del Parlamento',
'text': "1.   L'Ufficio di presidenza stabilisce il progetto preliminare di stato di previsione sulla base di una relazione del Segretario generale.\
\
2.   Il Presidente trasmette il progetto preliminare alla commissione competente, che redige il progetto di stato di previsione e ne riferisce al Parlamento.\
\
3.   Il Presidente fissa un termine per la presentazione di emendamenti al progetto di stato di previsione.\
\
La commissione competente esprime il suo parere su tali emendamenti.\
\
4.   Il Parlamento stabilisce lo stato di previsione.\
\
5.   Il Presidente trasmette lo stato di previsione alla Commissione e al Consiglio.\
\
6.   Le disposizioni che precedono si applicano anche agli stati di previsione per bilanci rettificativi."
},
{
'id': 97,
'title': 'Articolo 97 : Procedure da applicare per stabilire lo stato di previsione del Parlamento',
'text': "1.   Per quanto riguarda il bilancio del Parlamento, l'Ufficio di presidenza e la commissione competente per le questioni di bilancio decidono in fasi successive:\
\
(a)   l'organigramma;\
\
(b)   il progetto preliminare e il progetto di stato di previsione.\
\
2.   Le decisioni sull'organigramma sono prese secondo la procedura seguente:\
\
(a)   l'Ufficio di presidenza stabilisce l'organigramma di ciascun esercizio;\
\
(b)   viene avviata una procedura di concertazione tra l'Ufficio di presidenza e la commissione competente per le questioni di bilancio qualora il parere di quest'ultima diverga delle decisioni iniziali dell\'Ufficio di presidenza;\
\
(c)   al termine della procedura, la decisione finale sullo stato di previsione dell'organigramma spetta all'Ufficio di presidenza, conformemente all\'articolo 222, paragrafo 3, fatte salve le decisioni prese conformemente all\'articolo 314 del trattato sul funzionamento dell\'Unione europea.\
\
3.   Per quanto riguarda lo stato di previsione propriamente detto, la procedura relativa ai preparativi ha inizio non appena l'Ufficio di presidenza si sia pronunciato definitivamente sull'organigramma. Le fasi di tale procedura sono quelle delineate all\'articolo 96. Se la commissione competente per le questioni di bilancio e l'Ufficio di presidenza hanno posizioni molto divergenti si avvia una fase di concertazione."
},
{
'id': 98,
'title': 'Articolo 98 : Competenze in materia di impegno e di liquidazione delle spese, di chiusura dei conti e di concessione del discarico',
'text': "1.   Il Presidente procede o fa procedere all\'impegno e alla liquidazione delle spese, nel quadro del regolamento finanziario interno stabilito dall\'Ufficio di presidenza, previa consultazione della commissione competente.\
\
2.   Il Presidente trasmette alla commissione competente il progetto di rendiconto.\
\
3.   Su relazione della commissione competente, il Parlamento chiude i conti e si pronuncia sul discarico."
},
{
'id': 99,
'title': 'Articolo 99 : Procedura di approvazione',
'text': "1.   Qualora il Parlamento sia stato invitato a dare la sua approvazione a un atto giuridicamente vincolante, la commissione competente presenta al Parlamento una raccomandazione volta ad approvare o a respingere l\'atto proposto.\
\
La raccomandazione contiene visti, ma non considerando. Gli emendamenti in commissione sono ricevibili solo se sono intesi a invertire la raccomandazione proposta dal relatore.\
\
La raccomandazione può essere corredata di una breve motivazione. Tale motivazione è redatta sotto la responsabilità esclusiva del relatore e non è posta in votazione. L\'articolo 52 bis, paragrafo 2, si applica mutatis mutandis.\
\
2.   Se necessario, la commissione competente può altresì presentare una relazione comprendente una proposta di risoluzione non legislativa, specificando i motivi per cui il Parlamento dovrebbe dare o rifiutare la sua approvazione e, ove opportuno, formulando raccomandazioni per l\'attuazione dell\'atto proposto.\
\
3.   La commissione competente esamina la richiesta di approvazione senza indebiti ritardi. Se la commissione competente non ha adottato la sua raccomandazione entro sei mesi dal deferimento della richiesta di approvazione, la Conferenza dei presidenti può iscrivere la questione all\'ordine del giorno di una tornata successiva affinché sia esaminata, ovvero può decidere, in casi debitamente motivati, di prorogare il termine di sei mesi.\
\
4.   Il Parlamento decide sull\'atto proposto con una sola votazione sull\'approvazione, indipendentemente dal fatto che la raccomandazione della commissione competente sia di approvare o di respingere l\'atto. Qualora non sia raggiunta la maggioranza richiesta, l\'atto proposto è da considerarsi respinto.\
\
5.   Qualora sia richiesta l\'approvazione del Parlamento, la commissione competente può, in qualsiasi momento, presentare al Parlamento una relazione interlocutoria sulla proposta, con una proposta di risoluzione contenente raccomandazioni per la modifica o l\'attuazione dell\'atto proposto."
},
{
'id': 100,
'title': 'Articolo 100 : Procedura di parere sulle deroghe all\'adozione dell\'euro',
'text': "1.   Quando è invitato a esprimere il suo parere a norma dell\'articolo 140, paragrafo 2, del trattato sul funzionamento dell\'Unione europea, il Parlamento delibera sulla base di una relazione della sua commissione competente che propone di approvare o respingere l\'atto proposto.\
\
2.   Il Parlamento procede a una votazione unica sull\'atto proposto, senza che possano essere presentati emendamenti."
},
{
'id': 101,
'title': 'Articolo 101 : Procedure relative al dialogo fra le parti sociali',
'text': "1.   I documenti elaborati dalla Commissione a norma dell\'articolo 154 del trattato sul funzionamento dell\'Unione europea o gli accordi conclusi dalle parti sociali a norma dell\'articolo 155, paragrafo 1, di tale trattato, così come le proposte presentate dalla Commissione a norma dell\'articolo 155, paragrafo 2, di tale trattato, sono deferiti per esame dal Presidente alla commissione competente.\
\
2.   Quando le parti sociali informano la Commissione della loro volontà di avviare il processo di cui all\'articolo 155 del trattato sul funzionamento dell\'Unione europea, la commissione competente può elaborare una relazione sul merito della questione.\
\
3.   Quando le parti sociali raggiungono un accordo e chiedono congiuntamente che a detto accordo sia data attuazione tramite una decisione del Consiglio su proposta della Commissione, in conformità dell\'articolo 155, paragrafo 2, del trattato sul funzionamento dell\'Unione europea, la commissione competente presenta una proposta di risoluzione che raccomanda l\'accoglimento o la reiezione della richiesta."
},
{
'id': 102,
'title': 'Articolo 102 : Procedure relative all\'esame degli accordi volontari previsti',
'text': "1.   Quando la Commissione informa il Parlamento che intende esaminare la possibilità di ricorrere ad accordi volontari in alternativa alla legislazione, la commissione competente può elaborare una relazione sul merito della questione, a norma dell\'articolo 52.\
\
2.   Quando la Commissione annuncia che intende concludere un accordo volontario, la commissione competente può presentare una proposta di risoluzione in cui raccomanda che il Parlamento approvi o respinga la proposta e precisa le condizioni applicabili."
},
{
'id': 103,
'title': 'Articolo 103 : Codificazione',
'text': "1.   Qualora una proposta relativa alla codificazione di legislazione dell\'Unione sia sottoposta al Parlamento, essa è deferita alla commissione competente per le questioni giuridiche. Quest'ultima la esamina secondo le modalità stabilite a livello interistituzionale(1) onde certificare che si limiti ad una mera codificazione, senza modifiche sostanziali.\
\
2.   La commissione che era competente per il merito per gli atti oggetto della codificazione può essere invitata, su sua richiesta o su richiesta della commissione competente per le questioni giuridiche, ad esprimere il proprio parere in merito all\'opportunità della codificazione.\
\
3.   Gli emendamenti al testo della proposta sono irricevibili.\
\
Tuttavia, su richiesta del relatore, il presidente della commissione competente per le questioni giuridiche può sottoporre all\'approvazione di quest'ultima adeguamenti tecnici, a condizione che tali adeguamenti non contengano modifiche sostanziali della proposta e siano necessari per garantire la conformità della proposta alle regole della codificazione.\
\
4.   Se la commissione competente per le questioni giuridiche ritiene che la proposta non contenga modifiche sostanziali della legislazione dell\'Unione, la deferisce al Parlamento per approvazione.\
\
Se ritiene che la proposta contenga modifiche sostanziali, la commissione competente per le questioni giuridiche propone al Parlamento di respingere la proposta.\
\
In entrambi i casi, il Parlamento si esprime con un voto unico, senza emendamenti e senza discussione.\
\
\
(1)	Accordo interistituzionale del 20 dicembre 1994, Metodo di lavoro accelerato ai fini della codificazione ufficiale dei testi legislativi, punto 4 (GU C 102 del 4.4.1996, pag. 2)."
},
{
'id': 104,
'title': 'Articolo 104 : Rifusione',
'text': "1.   Se al Parlamento è sottoposta una proposta di rifusione della legislazione dell\'Unione, la proposta è deferita alla commissione competente per le questioni giuridiche e alla commissione competente per il merito.\
\
2.   La commissione competente per le questioni giuridiche esamina la proposta secondo le modalità stabilite a livello interistituzionale(1) onde verificare che non contenga modifiche sostanziali se non quelle espressamente indicate come tali.\
\
Nell'ambito di tale esame, gli emendamenti al testo della proposta sono irricevibili. Tuttavia, l\'articolo 103, paragrafo 3, secondo comma, si applica per quanto riguarda le disposizioni rimaste invariate nella proposta di rifusione.\
\
3.   Se la commissione competente per le questioni giuridiche stabilisce che la proposta non contiene modifiche sostanziali ulteriori rispetto a quelle espressamente indicate come tali, ne informa la commissione competente per il merito.\
\
In tal caso, fatte salve le condizioni di cui agli articoli 169 e 170, sono ricevibili in seno alla commissione competente per il merito soltanto gli emendamenti che riguardano le parti della proposta che contengono modifiche.\
\
Gli emendamenti alle parti della proposta rimaste immutate possono tuttavia essere accettati, a titolo eccezionale e caso per caso, dal presidente della commissione competente per il merito qualora giudichi che ciò sia necessario per ragioni imprescindibili di coerenza del testo o di connessione inscindibile con altri emendamenti ricevibili. Tali ragioni devono essere indicate per iscritto nella motivazione dell\'emendamento.\
\
4.   Se la commissione competente per le questioni giuridiche ritiene che la proposta contenga modifiche sostanziali ulteriori rispetto a quelle espressamente indicate come tali, essa propone al Parlamento di respingere la proposta e ne informa la commissione competente per il merito.\
\
In questo caso, il Presidente invita la Commissione a ritirare la sua proposta. Se la Commissione ritira la sua proposta, il Presidente dichiara che la procedura è divenuta priva di oggetto e ne dà comunicazione al Consiglio. Se la Commissione non ritira la sua proposta, il Parlamento la deferisce alla commissione competente per il merito, che la esamina secondo la normale procedura.\
\
\
(1)	Accordo interistituzionale del 28 novembre 2001 ai fini di un ricorso più strutturato alla tecnica della rifusione degli atti normativi, punto 9 (GU C 77 del 28.3.2002, pag. 1)."
},
{
'id': 105,
'title': 'Articolo 105 : Atti delegati',
'text': "1.   Quando la Commissione trasmette al Parlamento un atto delegato, il Presidente lo deferisce alla commissione competente per l\'atto legislativo di base che può decidere di designare uno dei suoi membri per l\'esame di uno o più atti delegati.\
\
2.   Durante la tornata successiva alla ricezione dell\'atto delegato, il Presidente comunica al Parlamento la data di ricezione in tutte le lingue ufficiali e il periodo durante il quale possono essere sollevate obiezioni. Detto termine inizia a decorrere dalla data di ricezione.\
\
Tale annuncio è pubblicato nel processo verbale della seduta unitamente alla denominazione della commissione competente.\
\
3.   La commissione competente può, conformemente alle disposizioni dell\'atto legislativo di base e, se lo ritiene opportuno, previa consultazione di tutte le commissioni interessate, presentare al Parlamento una proposta di risoluzione motivata volta a sollevare obiezioni all\'atto delegato. Qualora la commissione competente non abbia presentato detta proposta di risoluzione entro dieci giorni lavorativi prima dell\'inizio della tornata il cui mercoledì precede ed è prossimo alla data di scadenza del termine di cui al paragrafo 5, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono presentare una proposta di risoluzione intesa a iscrivere il punto all\'ordine del giorno di tale tornata.\
\
4.   Una proposta di risoluzione presentata a norma del paragrafo 3 indica i motivi delle obiezioni del Parlamento e può contenere una richiesta alla Commissione di presentare un nuovo atto delegato che tenga conto delle raccomandazioni formulate dal Parlamento.\
\
5.   Il Parlamento approva tale proposta entro il termine specificato nell\'atto legislativo di base e a maggioranza dei membri che lo compongono, in conformità dell\'articolo 290, paragrafo 2, secondo comma, del trattato sul funzionamento dell\'Unione europea.\
\
Qualora la commissione competente ritenga opportuno prorogare il termine per sollevare le obiezioni a un atto delegato in conformità delle disposizioni dell\'atto legislativo di base, il presidente della commissione competente notifica tale proroga, a nome del Parlamento, al Consiglio e alla Commissione.\
\
6.   Qualora la commissione competente raccomandi che, prima della scadenza del termine previsto nell\'atto legislativo di base, il Parlamento dichiari di non sollevare obiezioni all\'atto delegato:\
\
-   essa ne informa il presidente della Conferenza dei presidenti di commissione con lettera motivata e presenta una raccomandazione in tal senso;\
\
-   se nessuna obiezione è sollevata né durante la riunione successiva della Conferenza dei presidenti di commissione né, in caso di urgenza, con procedura scritta, il presidente della commissione competente lo comunica al Presidente del Parlamento, che ne informa l'Aula nel più breve tempo possibile;\
\
-   se, entro 24 ore dall'annuncio in Aula, un gruppo politico o un numero di deputati pari almeno alla soglia bassa si oppongono alla raccomandazione, quest'ultima è posta in votazione;\
\
-   se, entro lo stesso termine, nessuna obiezione è stata sollevata la raccomandazione proposta si considera approvata;\
\
-   l\'adozione di una siffatta raccomandazione rende irricevibile qualsiasi ulteriore proposta di obiezione all\'atto delegato.\
\
7.   La commissione competente può, conformemente alle disposizioni dell\'atto legislativo di base, adottare l\'iniziativa di presentare al Parlamento una proposta di risoluzione che revoca, in tutto o in parte, la delega di poteri o che si oppone alla proroga tacita della delega di poteri prevista da tale atto.\
\
In conformità dell\'articolo 290, paragrafo 2, secondo comma, del trattato sul funzionamento dell\'Unione europea, la decisione di revoca della delega di poteri richiede i voti favorevoli della maggioranza dei membri che compongono il Parlamento.\
\
8.   Il Presidente informa il Consiglio e la Commissione delle posizioni adottate in virtù del presente articolo."
},
{
'id': 106,
'title': 'Articolo 106 : Atti e misure di esecuzione',
'text': "1.   Qualora la Commissione trasmetta al Parlamento un progetto di atto o di misura di esecuzione, il Presidente lo deferisce alla commissione competente per l\'atto legislativo di base, che può decidere di designare uno dei suoi membri per l\'esame di uno o più progetti di atti o di misure di esecuzione.\
\
2.   La commissione competente può presentare al Parlamento una proposta di risoluzione motivata indicando che un progetto di atto o di misura di esecuzione eccede le competenze di esecuzione conferite nell\'atto legislativo di base o non è conforme al diritto dell\'Unione per altri motivi.\
\
3.   La proposta di risoluzione può comprendere una richiesta alla Commissione di ritirare il progetto di atto o di misura di esecuzione, di modificarlo alla luce delle obiezioni formulate dal Parlamento o di presentare una nuova proposta legislativa. Il Presidente informa il Consiglio e la Commissione della posizione adottata.\
\
4.   Se le misure di esecuzione previste dalla Commissione rientrano nella procedura di regolamentazione con controllo prevista dalla decisione 1999/468/CE del Consiglio(1), si applicano le seguenti disposizioni supplementari:\
\
(a)   il termine per l\'esame decorre dal momento in cui il progetto di misura di esecuzione è stato trasmesso al Parlamento in tutte le lingue ufficiali. Se si applica il termine per l\'esame ridotto previsto all\'articolo 5 bis, paragrafo 5, lettera b), della decisione 1999/468/CE e nei casi di urgenza di cui all\'articolo 5 bis, paragrafo 6, della decisione 1999/468/CE, salvo obiezione del presidente della commissione competente, il termine per l\'esame comincia a decorrere dalla data di ricezione, da parte del Parlamento, del progetto definitivo di misura di esecuzione nelle versioni linguistiche presentate ai membri del comitato istituito conformemente alla decisione 1999/468/CE. Nei due casi di cui alla frase precedente non si applica l\'articolo 158;\
\
(b)   se il progetto di misura di esecuzione si basa sull\'articolo 5 bis, paragrafi 5 o 6, della decisione 1999/468/CE, in base ai quali i termini entro cui il Parlamento può opporsi sono ridotti, il presidente della commissione competente può presentare una proposta di risoluzione contraria all\'adozione del progetto di misura se la commissione competente non ha potuto riunirsi nel termine prescritto;\
\
(c)   il Parlamento, deliberando a maggioranza dei membri che lo compongono, può approvare una risoluzione in cui si oppone all\'adozione del progetto di misura di esecuzione e in cui indica che tale progetto di misura eccede le competenze di esecuzione conferite nell\'atto di base o che non è compatibile con il fine o il contenuto dell\'atto di base oppure che non rispetta i principi di sussidiarietà o di proporzionalità.\
\
   Qualora la commissione competente non abbia presentato detta proposta di risoluzione dieci giorni lavorativi prima dell\'inizio della tornata il cui mercoledì precede ed è il più prossimo alla data di scadenza del termine per opporsi all\'adozione del progetto di misura di esecuzione, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono presentare una proposta di risoluzione intesa a iscrivere il punto all\'ordine del giorno di tale tornata;\
\
(d)   se la commissione competente raccomanda con lettera motivata al presidente della Conferenza dei presidenti di commissione che il Parlamento non dichiari di opporsi alla misura proposta, prima della scadenza del termine ordinario di cui all\'articolo 5 bis, paragrafo 3, lettera c), e/o all\'articolo 5 bis, paragrafo 4, lettera e), della decisione 1999/468/CE, si applica la procedura di cui all\'articolo 105, paragrafo 6, del presente regolamento(2).\
\
\
(1)	Decisione 1999/468/CE del Consiglio, del 28 giugno 1999, che stabilisce le modalità per l\'esercizio delle competenze di esecuzione attribuite alla Commissione (GU L 184 del 17.7.1999, pag. 23).\
(2)	L\'articolo 106, paragrafo 4, sarà cancellato dal regolamento non appena la procedura di regolamentazione con controllo sarà stata completamente rimossa da ogni atto legislativo in vigore."
},
{
'id': 107,
'title': 'Articolo 107 : Esame nell\'ambito della procedura con le commissioni associate o della procedura con le commissioni congiunte',
'text': "1.   Se l\'atto legislativo di base è stato approvato dal Parlamento nel quadro della procedura di cui all\'articolo 54, si applicano le seguenti disposizioni supplementari all\'esame degli atti delegati o dei progetti di atti o di misure di esecuzione:\
\
-   l\'atto delegato o il progetto di atto o di misura di esecuzione è trasmesso alla commissione competente per il merito e alla commissione associata;\
\
-   il presidente della commissione competente per il merito stabilisce un termine entro il quale la commissione associata può formulare proposte sui punti di sua esclusiva competenza o di competenza congiunta tra queste due commissioni;\
\
-   se l\'atto delegato o il progetto di atto o di misura di esecuzione rientra essenzialmente nelle competenze esclusive della commissione associata, le proposte di quest'ultima sono riprese senza votazione dalla commissione competente; ove la commissione competente non rispetti tale regola, il Presidente può autorizzare la commissione associata a presentare una proposta di risoluzione al Parlamento.\
\
2.   Se l\'atto legislativo di base è stato approvato dal Parlamento nel quadro della procedura di cui all\'articolo 55, si applicano le seguenti disposizioni supplementari all\'esame degli atti delegati e dei progetti di atti o di misure di esecuzione:\
\
-   il Presidente determina, sin dalla ricezione dell\'atto delegato o del progetto di atto o di misura di esecuzione, quali siano la commissione competente o le commissioni competenti congiuntamente alla luce dei criteri stabiliti all\'articolo 55 e di eventuali accordi tra i presidenti delle commissioni interessate;\
\
-   se un atto delegato o un progetto di atto o di misura di esecuzione è stato rinviato per esame secondo la procedura con le commissioni congiunte, ciascuna commissione può chiedere la convocazione di una riunione congiunta per l\'esame di una proposta di risoluzione. In mancanza di un accordo tra i presidenti delle commissioni interessate, la riunione congiunta è convocata dal presidente della Conferenza dei presidenti di commissione."
},
{
'id': 108,
'title': 'Articolo 108 : Accordi internazionali',
'text': "1.   Qualora si preveda l\'apertura di negoziati sulla conclusione, il rinnovo o la modifica di un accordo internazionale, la commissione competente può decidere di elaborare una relazione o di seguire in altro modo questa fase preparatoria. Essa informa la Conferenza dei presidenti di commissione della sua decisione.\
\
2.   La commissione competente si informa quanto prima presso la Commissione circa la base giuridica scelta per la conclusione degli accordi internazionali di cui al paragrafo 1. La commissione competente verifica, a norma dell\'articolo 39, la base giuridica scelta.\
\
3.   Il Parlamento, su proposta della commissione competente, di un gruppo politico o di almeno quaranta deputati, può chiedere al Consiglio di non autorizzare l\'apertura dei negoziati fintantoché il Parlamento non si sia pronunciato sulla proposta di mandato a negoziare, sulla base di una relazione della commissione competente.\
\
4.   In ogni fase dei negoziati, e dal termine dei negoziati stessi fino alla conclusione dell\'accordo internazionale, il Parlamento, sulla base della relazione della commissione competente, elaborata di sua iniziativa o dopo aver esaminato qualsiasi proposta in materia presentata da un gruppo politico o da almeno quaranta deputati, può adottare raccomandazioni al Consiglio, alla Commissione o al vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza e chiedere che esse siano prese in considerazione prima della conclusione di tale accordo.\
\
5.   Nei casi in cui il Consiglio chiede l\'approvazione o il parere del Parlamento, tale richiesta è trasmessa dal Presidente, per esame, alla commissione competente, in conformità dell\'articolo 99 o dell\'articolo 47, paragrafo 1.\
\
6.   In qualsiasi momento prima della votazione del Parlamento su una richiesta di approvazione o di parere, la commissione competente o almeno un decimo dei deputati che compongono il Parlamento possono proporre che il Parlamento chieda il parere della Corte di giustizia sulla compatibilità di un accordo internazionale con i trattati.\
\
Prima della votazione del Parlamento sulla proposta, il Presidente può chiedere il parere della commissione competente per le questioni giuridiche, che riferisce le sue conclusioni al Parlamento.\
\
Se il Parlamento approva la proposta di chiedere un parere alla Corte di giustizia, la votazione sulla richiesta di approvazione o di parere è rinviata fino a quando la Corte si sarà pronunciata.\
\
7.   Qualora il Consiglio inviti il Parlamento a dare la sua approvazione alla conclusione, al rinnovo o alla modifica di un accordo internazionale, il Parlamento decide con votazione unica in conformità dell\'articolo 99.\
\
Qualora il Parlamento rifiuti di dare la sua approvazione, il Presidente comunica al Consiglio che l\'accordo in questione non può essere concluso, rinnovato o modificato.\
\
Fatto salvo l\'articolo 99, paragrafo 3, il Parlamento può decidere, sulla base di una raccomandazione della commissione competente, di rinviare la decisione sulla procedura di approvazione per non più di un anno.\
\
8.   Qualora il Consiglio inviti il Parlamento a esprimere il suo parere sulla conclusione, il rinnovo o la modifica di un accordo internazionale, non sono ricevibili emendamenti al testo dell\'accordo. Fatto salvo l\'articolo 170, paragrafo 1, gli emendamenti al progetto di decisione del Consiglio sono ricevibili.\
\
Qualora il parere espresso dal Parlamento sia negativo, il Presidente chiede al Consiglio di non concludere l\'accordo in questione.\
\
9.   I presidenti e i relatori della commissione competente ed eventualmente delle commissioni associate verificano che, in conformità dell\'articolo 218, paragrafo 10, del trattato sul funzionamento dell\'Unione europea, il Consiglio, la Commissione e il vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza forniscano al Parlamento informazioni immediate, regolari ed esaurenti, se necessario in forma riservata, in tutte le fasi dei preparativi dei negoziati, della negoziazione e della conclusione di accordi internazionali, ivi incluse le informazioni sui progetti e i testi definitivi approvati delle direttive di negoziato, nonché le informazioni relative all\'attuazione di tali accordi."
},
{
'id': 109,
'title': 'Articolo 109 : Applicazione provvisoria o sospensione dell\'applicazione di accordi internazionali ovvero definizione della posizione dell\'Unione nell\'ambito di un organismo istituito da un accordo internazionale',
'text': "Qualora la Commissione o il vicepresidente della Commissione/alto rappresentante dell\'Unione per gli Affari esteri e la politica di sicurezza informino il Parlamento e il Consiglio della propria intenzione di proporre l\'applicazione o la sospensione provvisoria di un accordo internazionale, il Parlamento può invitare il Consiglio, la Commissione o il vicepresidente/alto rappresentante a rilasciare una dichiarazione seguita da una discussione. Il Parlamento può formulare raccomandazioni sulla base di una relazione della commissione competente o a norma dell\'articolo 113, le quali possono includere, in particolare, una richiesta rivolta al Consiglio di non applicare provvisoriamente un accordo fino all\'approvazione del Parlamento.\
\
Tale procedura si applica quando la Commissione o il vicepresidente/alto rappresentante propongono le posizioni da adottare a nome dell\'Unione in un organismo istituito da un accordo internazionale."
},
{
'id': 110,
'title': 'Articolo 110 : Rappresentante speciale',
'text': "1.   Qualora il Consiglio intenda nominare un rappresentante speciale a norma dell\'articolo 33 del trattato sull'Unione europea, il Presidente, su richiesta della commissione competente, invita il Consiglio a rilasciare una dichiarazione e a rispondere a domande in merito al mandato, agli obiettivi e agli altri aspetti pertinenti relativi ai compiti e al ruolo che dovrà svolgere il rappresentante speciale.\
\
2.   Una volta nominato, e prima di assumere le proprie funzioni, il rappresentante speciale può essere invitato a comparire dinanzi alla commissione competente per rilasciare una dichiarazione e rispondere alle domande rivoltegli.\
\
3.   Nei due mesi successivi all\'audizione, la commissione competente può formulare raccomandazioni destinate al Consiglio, alla Commissione o al vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza aventi diretta attinenza con la nomina.\
\
4.   Il rappresentante speciale è invitato a tenere il Parlamento pienamente e regolarmente informato in merito all\'esecuzione concreta del suo mandato."
},
{
'id': 111,
'title': 'Articolo 111 : Rappresentanza internazionale',
'text': "1.   Anteriormente alla nomina, il candidato a una posizione di capo di una delegazione esterna dell\'Unione può essere invitato a comparire dinanzi alla commissione competente per fare una dichiarazione e rispondere a domande.\
\
2.   Entro due mesi dall'audizione di cui al paragrafo 1, la commissione competente può approvare una risoluzione o formulare una raccomandazione direttamente attinente alla nomina."
},
{
'id': 112,
'title': 'Articolo 112 : (soppresso)',
'text': ""
},
{
'id': 113,
'title': 'Articolo 113 : Raccomandazioni concernenti le politiche esterne dell\'Unione',
'text': "1.   La commissione competente può elaborare progetti di raccomandazioni destinate al Consiglio, alla Commissione o al vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza, relativamente a materie di cui al Titolo V del trattato sull'Unione europea (azione esterna dell\'Unione) o qualora un accordo internazionale che rientra nell\'ambito dell\'articolo 108 non sia stato deferito al Parlamento o il Parlamento non ne sia stato informato conformemente all\'articolo 109.\
\
2.   In caso di urgenza, il Presidente può autorizzare una riunione d\'urgenza della commissione interessata.\
\
3.   Nel corso della procedura di approvazione di tali progetti di raccomandazioni in sede di commissione, è necessario porre in votazione un testo scritto.\
\
4.   Nei casi di urgenza di cui al paragrafo 2, l\'articolo 158 non è applicabile in sede di commissione e sono ricevibili emendamenti orali. I deputati non si possono opporre alla messa in votazione di emendamenti orali in commissione.\
\
5.   I progetti di raccomandazioni formulate dalla commissione sono iscritte all\'ordine del giorno della tornata immediatamente successiva alla loro presentazione. In casi urgenti decisi dal Presidente, le raccomandazioni possono essere iscritte all\'ordine del giorno della tornata in corso.\
\
6.   Le raccomandazioni si considerano approvate a meno che, prima dell\'inizio della tornata, almeno quaranta deputati non abbiano espresso per iscritto la loro opposizione. Qualora sia espressa un'opposizione, i progetti di raccomandazioni della commissione sono iscritti all\'ordine del giorno della medesima tornata. Tali raccomandazioni sono oggetto di discussione, e gli emendamenti presentati da un gruppo politico o da almeno quaranta deputati sono posti in votazione.\
\
Articolo 113 bis : Consultazione e informazione del Parlamento nell\'ambito della politica estera e di sicurezza comune\
\
1.   Quando il Parlamento è consultato a norma dell\'articolo 36 del trattato sull'Unione europea, la questione è deferita alla commissione competente, la quale può elaborare progetti di raccomandazioni a norma dell\'articolo 113 del presente regolamento.\
\
2.   Le commissioni interessate si adoperano affinché il vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza trasmetta loro regolarmente e tempestivamente informazioni sull'evoluzione e sull\'attuazione della politica estera e di sicurezza comune dell\'Unione europea, sui costi previsti per ogni decisione adottata in tale ambito che abbia un\'incidenza finanziaria nonché su qualsiasi altro aspetto finanziario relativo all\'attuazione di azioni rientranti nell\'ambito della politica estera e di sicurezza comune. In via eccezionale, su richiesta del vicepresidente/alto rappresentante, una commissione competente può decidere di riunirsi a porte chiuse.\
\
3.   Due volte l\'anno si tiene una discussione sul documento consultivo elaborato dal vicepresidente/alto rappresentante in merito ai principali aspetti e alle scelte fondamentali della politica estera e di sicurezza comune, comprese la politica di sicurezza e di difesa comune e le implicazioni finanziarie per il bilancio dell\'Unione. Si applicano le procedure definite all\'articolo 123.\
\
4.   Il vicepresidente/alto rappresentante è invitato a tutte le discussioni in Aula che riguardano la politica estera, di sicurezza o di difesa."
},
{
'id': 114,
'title': 'Articolo 114 : Violazione dei diritti umani',
'text': "Per ogni tornata ciascuna commissione competente può presentare, senza necessità di autorizzazione, una proposta di risoluzione relativa a casi di violazione dei diritti umani secondo la procedura di cui all\'articolo 113, paragrafi 5 e 6."
},
{
'id': 115,
'title': 'Articolo 115 : Trasparenza delle attività del Parlamento',
'text': "1.   Il Parlamento assicura la massima trasparenza delle sue attività in linea con le disposizioni dell\'articolo 1, paragrafo 2, del trattato sull'Unione europea, dell\'articolo 15 del trattato sul funzionamento dell\'Unione europea e dell\'articolo 42 della Carta dei diritti fondamentali dell\'Unione europea.\
\
2.   Le discussioni in seno al Parlamento sono pubbliche.\
\
3.   Le riunioni delle commissioni del Parlamento sono di norma pubbliche. Le commissioni possono tuttavia decidere, al più tardi in sede di approvazione dell'ordine del giorno della riunione in questione, di dividere l'ordine del giorno di una determinata riunione in punti aperti al pubblico e punti a porte chiuse. Tuttavia, in caso di riunioni a porte chiuse la commissione può decidere di concedere l\'accesso del pubblico ai documenti della riunione."
},
{
'id': 116,
'title': 'Articolo 116 : Diritto di accesso del pubblico ai documenti',
'text': "1.   Qualsiasi cittadino dell\'Unione europea e qualsiasi persona fisica o giuridica che risieda o abbia la sede sociale in uno Stato membro ha il diritto di accedere ai documenti del Parlamento, a norma dell\'articolo 15 del trattato sul funzionamento dell\'Unione europea. Tale accesso ai documenti del Parlamento è effettuato secondo i principi, le condizioni e le limitazioni definite nel regolamento (CE) n. 1049/2001.\
\
Nella misura del possibile, l\'accesso ai documenti del Parlamento è parimenti consentito ad altre persone fisiche o giuridiche.\
\
2.   Ai fini dell\'accesso ai documenti, l\'espressione 'documenti del Parlamento' sta ad indicare qualsiasi contenuto informativo ai sensi dell\'articolo 3, lettera a), del regolamento (CE) n. 1049/2001 che sia stato elaborato o ricevuto dai titolari di cariche del Parlamento ai sensi del titolo I, capitolo 2, dagli organi del Parlamento, dalle commissioni o delegazioni interparlamentari o dal Segretariato del Parlamento.\
\
In conformità dell\'articolo 4 dello statuto dei deputati al Parlamento europeo, i documenti elaborati da singoli deputati o gruppi politici sono documenti del Parlamento ai fini dell\'accesso ai documenti solo se sono presentati a norma del presente regolamento.\
\
L'Ufficio di presidenza stabilisce norme volte ad assicurare che tutti i documenti del Parlamento siano registrati.\
\
3.   Il Parlamento istituisce un sito internet del registro pubblico dei documenti del Parlamento. I documenti legislativi e alcune altre categorie di documenti sono resi direttamente accessibili, in conformità del regolamento (CE) n. 1049/2001, attraverso il sito internet del registro pubblico del Parlamento. Riferimenti ad altri documenti del Parlamento sono inseriti, per quanto possibile, nel sito internet del registro pubblico del Parlamento.\
\
Le categorie di documenti direttamente accessibili mediante il sito internet del registro pubblico del Parlamento sono indicate in un elenco adottato dall\'Ufficio di presidenza e pubblicato sul sito internet del registro pubblico del Parlamento. Tale elenco non limita il diritto d'accesso ai documenti che non rientrano nelle categorie elencate; tali documenti possono essere resi accessibili su richiesta scritta in conformità del regolamento (CE) n. 1049/2001.\
\
L'Ufficio di presidenza adotta norme per l\'accesso ai documenti, in conformità del regolamento (CE) n. 1049/2001, che sono pubblicate nella Gazzetta Ufficiale dell\'Unione europea.\
\
4.   L'Ufficio di presidenza designa gli organi incaricati del trattamento delle domande iniziali (articolo 7 del regolamento (CE) n. 1049/2001) e dell\'adozione delle decisioni relative alle domande di conferma (articolo 8 di detto regolamento) e alle domande di accesso a documenti sensibili (articolo 9 dello stesso).\
\
5.   Uno dei vicepresidenti è responsabile della supervisione del trattamento delle domande di accesso ai documenti.\
\
6.   L'Ufficio di presidenza adotta la relazione annuale di cui all\'articolo 17, paragrafo 1, del regolamento (CE) n. 1049/2001.\
\
7.   La commissione competente del Parlamento verifica periodicamente la trasparenza delle attività del Parlamento e presenta in Aula una relazione contenente le sue conclusioni e raccomandazioni.\
\
Inoltre, la commissione competente può esaminare e valutare le relazioni adottate dalle altre istituzioni e agenzie a norma dell\'articolo 17 del regolamento (CE) n. 1049/2001.\
\
8.   La Conferenza dei presidenti nomina i rappresentanti del Parlamento al comitato interistituzionale istituito a norma dell\'articolo 15, paragrafo 2, del regolamento (CE) n. 1049/2001.\
\
Articolo 116 bis : Accesso al Parlamento\
\
1.   I titoli di accesso per i deputati, i loro assistenti e soggetti terzi sono rilasciati sulla base delle norme stabilite dall\'Ufficio di presidenza. Tali norme disciplinano altresì l'uso e il ritiro dei titoli di accesso.\
\
2.   I titoli di accesso non sono rilasciati a persone appartenenti alla cerchia di un deputato che rientrano nell\'ambito di applicazione dell\'accordo tra il Parlamento europeo e la Commissione europea sul registro per la trasparenza.\
\
3.   Le entità elencate nel registro per la trasparenza e i loro rappresentanti cui è stato rilasciato un titolo di accesso di lunga durata al Parlamento europeo devono rispettare:\
\
-   il codice di condotta per i soggetti registrati allegato all\'accordo;\
\
-   le procedure e altri obblighi definiti dall'accordo; nonché\
\
-   le disposizioni di attuazione del presente articolo.\
\
Fatta salva l\'applicabilità delle norme generali che disciplinano il ritiro o la disattivazione temporanea dei titoli di accesso di lunga durata, e salvo che ragioni importanti vi si oppongano, il Segretario generale, previa autorizzazione dei questori, ritira o disattiva un titolo di accesso di lunga durata quando il suo titolare è stato cancellato dal registro per la trasparenza per violazione del codice di condotta per i soggetti registrati, si è reso colpevole di una grave violazione degli obblighi di cui al presente paragrafo o ha rifiutato di accettare un invito formale a partecipare a un'audizione o a una riunione di commissione o di collaborare con una commissione d'inchiesta, senza fornire una giustificazione sufficiente.\
\
4.   I questori possono definire in che misura il codice di condotta di cui al paragrafo 3 sia applicabile alle persone che, pur possedendo un titolo di accesso di lunga durata, non rientrano nell\'ambito di applicazione dell\'accordo.\
\
5.   L'Ufficio di presidenza, su proposta del Segretario generale, adotta le misure necessarie per dare attuazione al registro per la trasparenza, in conformità delle disposizioni dell\'accordo sull'istituzione di detto registro."
},
{
'id': 117,
'title': 'Articolo 117 : Elezione del Presidente della Commissione',
'text': "1.   Dopo che il Consiglio europeo ha proposto un candidato a Presidente della Commissione, il Presidente invita il candidato a fare una dichiarazione e a presentare i suoi orientamenti politici al Parlamento. La dichiarazione è seguita da una discussione.\
\
Il Consiglio europeo è invitato a partecipare al dibattito.\
\
2.   In conformità dell\'articolo 17, paragrafo 7, del trattato sull'Unione europea, il Parlamento elegge il Presidente della Commissione a maggioranza dei membri che lo compongono.\
\
La votazione si svolge a scrutinio segreto.\
\
3.   Qualora il candidato sia eletto, il Presidente ne informa il Consiglio, invitando quest'ultimo e il neoeletto Presidente della Commissione a proporre di comune accordo i candidati ai vari posti di commissario.\
\
4.   Se il candidato non ottiene la maggioranza richiesta, il Presidente invita il Consiglio europeo a proporre, entro un mese, un nuovo candidato all\'elezione, secondo la stessa procedura."
},
{
'id': 118,
'title': 'Articolo 118 : Elezione della Commissione',
'text': "1.   Il Presidente invita il Presidente eletto della Commissione a informare il Parlamento circa la distribuzione dei portafogli in seno al proposto collegio dei commissari, in linea con gli orientamenti politici del Presidente eletto.\
\
2.   Il Presidente, una volta consultato il Presidente eletto della Commissione, invita i candidati proposti dal Presidente eletto della Commissione e dal Consiglio per i vari posti di commissario a comparire dinanzi alle varie commissioni o ai vari organi parlamentari secondo le loro prevedibili competenze.\
\
3.   Le audizioni sono effettuate dalle commissioni. Un'audizione può eccezionalmente assumere una forma diversa quando un commissario designato ha responsabilità di carattere principalmente orizzontale, a condizione che l\'audizione includa le commissioni competenti.\
\
Le audizioni sono pubbliche.\
\
4.   La commissione o le commissioni competenti invitano il commissario designato a formulare una dichiarazione e a rispondere a domande. Le audizioni sono organizzate in modo da consentire ai commissari designati di fornire al Parlamento tutte le informazioni utili. Le disposizioni concernenti l'organizzazione delle audizioni sono stabilite in un allegato del regolamento(1).\
\
5.   Il Presidente eletto è invitato a presentare il collegio dei commissari e il suo programma in occasione di una seduta del Parlamento. Alla seduta sono invitati il Presidente del Consiglio europeo e il Presidente del Consiglio. La dichiarazione è seguita da una discussione.\
\
6.   A conclusione della discussione, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono presentare una proposta di risoluzione. Si applica l\'articolo 123, paragrafi da 3 a 8.\
\
7.   Dopo aver votato sulla proposta di risoluzione, il Parlamento elegge o respinge la Commissione a maggioranza dei voti espressi, per appello nominale. Il Parlamento può aggiornare la votazione alla seduta successiva.\
\
8.   Il Presidente informa il Consiglio dell\'elezione o della reiezione della Commissione.\
\
9.   In caso di sostanziale cambiamento di portafoglio in seno alla Commissione o di un cambiamento della sua composizione, durante il mandato, il commissario o i commissari interessati o qualsiasi altro commissario designato sono invitati a partecipare a un'audizione organizzata in conformità dei paragrafi 3 e 4.\
\
10.   Qualora il portafoglio o gli interessi finanziari di un commissario subiscano un cambiamento durante il suo mandato, la situazione è sottoposta al controllo del Parlamento in conformità dell\'allegato VI.\
\
Laddove sia individuato un conflitto di interessi durante il mandato di un commissario e qualora il Presidente della Commissione non attui le raccomandazioni del Parlamento volte a risolvere il conflitto d'interessi, il Parlamento può chiedere al Presidente della Commissione di ritirare la fiducia a tale commissario, a norma del punto 5 dell\'accordo quadro sulle relazioni tra il Parlamento europeo e la Commissione europea, nonché di adottare provvedimenti, se del caso, per privare il commissario in questione del diritto a pensione o altri vantaggi sostitutivi in conformità dell\'articolo 245, secondo comma, del trattato sul funzionamento dell\'Unione europea.\
\
\
(1)	Cfr. allegato VI.\
\
Articolo 118 bis : Programmazione pluriennale\
\
Alla nomina di una nuova Commissione, il Parlamento, il Consiglio e la Commissione, in conformità del paragrafo 5 dell\'accordo interistituzionale 'Legiferare meglio', procedono a uno scambio di opinioni e raggiungono un accordo su conclusioni comuni in materia di programmazione pluriennale.\
\
A tal fine, prima di negoziare con il Consiglio e la Commissione in merito alle conclusioni comuni in materia di programmazione pluriennale, il Presidente effettua uno scambio di opinioni con la Conferenza dei presidenti sugli obiettivi e le priorità strategiche principali della nuova legislatura. Tale scambio di opinioni tiene conto, tra l\'altro, delle priorità presentate dal Presidente eletto della Commissione nonché delle risposte fornite dai commissari designati durante le audizioni previste dall'articolo 118.\
\
Prima di procedere alla firma delle conclusioni comuni, il Presidente chiede l\'approvazione della Conferenza dei presidenti."
},
{
'id': 119,
'title': 'Articolo 119 : Mozione di censura nei confronti della Commissione',
'text': "1.   Un decimo dei deputati che compongono il Parlamento può presentare al Presidente una mozione di censura nei confronti della Commissione. Nel caso in cui una mozione di censura sia stata votata nei due mesi precedenti, ogni nuova mozione presentata da meno di un quinto dei deputati che compongono il Parlamento è irricevibile.\
\
2.   La mozione deve recare la menzione 'Mozione di censura' ed essere motivata. Essa è trasmessa alla Commissione.\
\
3.   Il Presidente comunica immediatamente ai deputati la presentazione della mozione.\
\
4.   La discussione sulla censura ha luogo solo quando siano trascorse almeno ventiquattr'ore dalla comunicazione della mozione di censura ai deputati.\
\
5.   La votazione sulla mozione ha luogo per appello nominale, quando siano trascorse almeno quarantott'ore dall'inizio della discussione.\
\
6.   Fatti salvi i paragrafi 4 e 5, la discussione e la votazione hanno luogo al più tardi nel corso della tornata successiva alla presentazione della mozione.\
\
7.   In conformità dell\'articolo 234 del trattato sul funzionamento dell\'Unione europea, la mozione è approvata a maggioranza dei due terzi dei voti espressi e a maggioranza dei deputati che compongono il Parlamento. L'esito della votazione è notificato ai Presidenti del Consiglio e della Commissione."
},
{
'id': 120,
'title': 'Articoli 120 : Nomina di giudici e avvocati generali alla Corte di giustizia dell\'Unione europea',
'text': "Su proposta della sua commissione competente, il Parlamento nomina un candidato al comitato di sette persone incaricato di esaminare l\'idoneità dei candidati a ricoprire la funzione di giudice o avvocato generale alla Corte di giustizia e al Tribunale. La commissione competente sceglie il candidato che intende proporre mediante una votazione a maggioranza semplice. A tal fine, i coordinatori di tale commissione definiscono una rosa di candidati."
},
{
'id': 121,
'title': 'Articolo 121 : Nomina dei membri della Corte dei conti',
'text': "1.   Le personalità designate come membri della Corte dei conti sono invitate a fare una dichiarazione dinanzi alla commissione competente e a rispondere alle domande rivolte dai suoi membri. La commissione vota separatamente, a scrutinio segreto, su ciascuna candidatura.\
\
2.   La commissione competente presenta al Parlamento una raccomandazione quanto all\'approvazione della candidatura proposta.\
\
3.   La votazione in Aula ha luogo entro due mesi dalla ricezione delle candidature a meno che il Parlamento, su richiesta della commissione competente, di un gruppo politico o un numero di deputati pari almeno alla soglia bassa, non decida altrimenti. Il Parlamento vota separatamente, a scrutinio segreto, su ciascuna candidatura.\
\
4.   Qualora il Parlamento abbia espresso parere negativo su una singola candidatura, il Presidente invita il Consiglio a ritirare la proposta e a presentare al Parlamento una nuova proposta."
},
{
'id': 122,
'title': 'Articolo 122 : Nomina dei membri del comitato esecutivo della Banca centrale europea',
'text': "1.   Il candidato proposto alla presidenza, alla vicepresidenza o alla carica di membro del comitato esecutivo della Banca centrale europea è invitato a fare una dichiarazione dinanzi alla commissione parlamentare competente e a rispondere alle domande rivolte dai suoi membri.\
\
2.   La commissione competente presenta al Parlamento una raccomandazione quanto all\'approvazione o alla reiezione della candidatura proposta.\
\
3.   La votazione ha luogo entro due mesi dalla ricezione della proposta, a meno che il Parlamento non decida altrimenti su richiesta della commissione competente, di un gruppo politico o un numero di deputati pari almeno alla soglia bassa. Il Parlamento vota separatamente, a scrutinio segreto, su ciascuna candidatura.\
\
4.   Se il Parlamento esprime parere negativo su una candidatura, il Presidente chiede il ritiro della proposta e la presentazione al Parlamento di una nuova proposta.\
\
Articolo 122 bis : Nomine relative agli organismi di governance economica\
\
1.   Il presente articolo si applica alle nomine per le seguenti cariche:\
\
-   presidente e vicepresidente del consiglio di vigilanza del meccanismo di vigilanza unico;\
\
-   presidente, vicepresidente e membri a tempo pieno del comitato di risoluzione unico del meccanismo di risoluzione unico;\
\
-   presidenti e direttori esecutivi dell\'Autorità europea di vigilanza (Autorità bancaria europea, Autorità europea degli strumenti finanziari e dei mercati, Autorità europea delle assicurazioni e delle pensioni aziendali e professionali); nonché\
\
-   direttore generale e vice direttore generale del Fondo europeo per gli investimenti strategici.\
\
2.   Ciascun candidato è invitato a rendere una dichiarazione dinanzi alla commissione competente e a rispondere alle domande rivolte dai suoi membri.\
\
3.   La commissione competente presenta al Parlamento una raccomandazione relativa a ciascuna proposta di nomina.\
\
4.   La votazione ha luogo entro due mesi dalla ricezione della proposta di nomina, a meno che il Parlamento non decida altrimenti su richiesta della commissione competente, di un gruppo politico o un numero di deputati pari almeno alla soglia bassa. Il Parlamento vota separatamente, a scrutinio segreto, su ciascuna candidatura.\
\
5.   Qualora il Parlamento abbia adottato una decisione sfavorevole su una proposta di nomina, il Presidente chiede che la proposta sia ritirata e che al Parlamento ne venga presentata una nuova."
},
{
'id': 123,
'title': 'Articolo 123 : Dichiarazioni della Commissione, del Consiglio e del Consiglio europeo',
'text': "1.   I membri della Commissione, del Consiglio e del Consiglio europeo possono in qualsiasi momento chiedere la parola al Presidente del Parlamento per rilasciare una dichiarazione. Il Presidente del Consiglio europeo rende una dichiarazione al termine di ogni riunione dello stesso. Il Presidente del Parlamento decide quando tale dichiarazione possa essere fatta e se possa essere seguita da una discussione approfondita o da un periodo di trenta minuti in cui i deputati possono porre domande brevi e precise.\
\
2.   Quando è iscritta all\'ordine del giorno una dichiarazione seguita da discussione, il Parlamento decide se concludere o meno la discussione con una risoluzione. Non può procedere in tal senso se una relazione sullo stesso argomento è prevista nel corso della stessa tornata o di quella successiva, a meno che il Presidente non disponga diversamente per motivi eccezionali. Se il Parlamento decide di concludere la discussione con una risoluzione, una commissione, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono presentare una proposta di risoluzione.\
\
3.   Le proposte di risoluzione sono poste in votazione nel primo turno di votazioni possibile. Il Presidente decide in merito alle deroghe. Sono ammesse dichiarazioni di voto.\
\
4.   Una proposta di risoluzione comune sostituisce le proposte precedenti sottoscritte dai suoi firmatari, ma non quelle presentate da altre commissioni, gruppi politici o deputati.\
\
5.   Se una proposta di risoluzione comune è presentata da gruppi politici che rappresentano una chiara maggioranza, il Presidente può porla in votazione per prima.\
\
6.   Dopo l\'approvazione di una proposta di risoluzione non è posta in votazione nessun'altra proposta di risoluzione, a meno che, in casi eccezionali, il Presidente non decida diversamente.\
\
7.   L\'autore o gli autori di una proposta di risoluzione presentata a norma del paragrafo 2 o dell\'articolo 135, paragrafo 2, hanno il diritto di ritirarla prima della relativa votazione finale.\
\
8.   Una proposta di risoluzione ritirata può essere immediatamente fatta propria e ripresentata da un gruppo politico, da una commissione parlamentare o da un numero di deputati pari a quello necessario per presentarla. Il paragrafo 7 e il presente paragrafo si applicano altresì alle proposte di risoluzione presentate a norma degli articoli 105 e 106."
},
{
'id': 124,
'title': 'Articolo 124 : Dichiarazioni che illustrano le decisioni della Commissione',
'text': "Il Presidente del Parlamento invita il Presidente della Commissione, il commissario responsabile per le relazioni con il Parlamento o, previo accordo, un altro commissario a fare una dichiarazione dinanzi al Parlamento dopo ognuna delle riunioni della Commissione, illustrandone le decisioni principali, salvo che, per ragioni di orario o per la relativa rilevanza politica della materia, la Conferenza dei presidenti decida che non è necessario. La dichiarazione è seguita da una discussione della durata minima di 30 minuti nel corso della quale i deputati possono porre domande brevi e precise."
},
{
'id': 125,
'title': 'Articolo 125 : Dichiarazioni della Corte dei conti',
'text': "1.   Il Presidente della Corte dei conti, nell\'ambito della procedura di discarico o delle attività del Parlamento concernenti il settore del controllo di bilancio, può essere invitato a rilasciare una dichiarazione in Aula per presentare le osservazioni contenute nella relazione annuale, nelle relazioni speciali o nei pareri della Corte, nonché per illustrare il programma di lavoro della Corte.\
\
2.   Il Parlamento può decidere di discutere separatamente, con la partecipazione della Commissione e del Consiglio, eventuali questioni sollevate in tali dichiarazioni, in particolare allorché sono segnalate irregolarità nella gestione finanziaria."
},
{
'id': 126,
'title': 'Articolo 126 : Dichiarazioni della Banca centrale europea',
'text': "1.   Il Presidente della Banca centrale europea è invitato a presentare al Parlamento la relazione annuale della Banca centrale europea sull\'attività del Sistema europeo di banche centrali e sulla politica monetaria dell\'anno precedente e dell\'anno in corso.\
\
2.   Il Parlamento tiene un dibattito generale sulla relazione presentatagli.\
\
3.   Il Presidente della Banca centrale europea è invitato a partecipare a riunioni della commissione competente almeno quattro volte l\'anno per fare una dichiarazione e rispondere a domande.\
\
4.   Su loro richiesta o su richiesta del Parlamento, il presidente, il vicepresidente o altri membri del comitato esecutivo della Banca centrale europea sono invitati a partecipare ad altre riunioni.\
\
5.   È redatto un resoconto integrale delle riunioni di cui ai paragrafi 3 e 4."
},
{
'id': 127,
'title': 'Articolo 127 : (soppresso)',
'text': ""
},
{
'id': 128,
'title': 'Articolo 128 : Interrogazioni con richiesta di risposta orale seguita da discussione',
'text': "1.   Una commissione, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono rivolgere interrogazioni al Consiglio, alla Commissione o al vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza corredate di una richiesta di iscrizione all\'ordine del giorno del Parlamento.\
\
Le interrogazioni sono presentate per iscritto al Presidente. Il Presidente le sottopone senza indugio alla Conferenza dei presidenti.\
\
La Conferenza dei presidenti decide se iscrivere o meno le interrogazioni nel progetto di ordine del giorno in conformità dell\'articolo 149. Le interrogazioni non iscritte nel progetto di ordine del giorno del Parlamento entro tre mesi dalla presentazione decadono.\
\
2.   Un'interrogazione deve essere trasmessa al destinatario almeno una settimana prima della seduta all\'ordine del giorno della quale sarà iscritta, se si tratta di un\'interrogazione alla Commissione e al vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza, e almeno tre settimane prima di questa data, se si tratta di un\'interrogazione al Consiglio.\
\
3.   Per le interrogazioni riguardanti la politica di sicurezza e di difesa comune, i termini di cui al paragrafo 2 non si applicano e la risposta deve essere fornita entro un termine ragionevole affinché il Parlamento sia tenuto debitamente informato.\
\
4.   Uno degli autori dell\'interrogazione può illustrare l\'interrogazione in Aula. Il destinatario deve rispondere.\
\
5.   L\'articolo 123, paragrafi da 2 a 8, concernente la presentazione e la votazione di proposte di risoluzione, si applica mutatis mutandis."
},
{
'id': 129,
'title': 'Articolo 129 : Tempo delle interrogazioni',
'text': "1.   Il tempo riservato alle interrogazioni alla Commissione può svolgersi in ciascuna tornata per una durata massima di novanta minuti su una o più specifiche tematiche orizzontali decise dalla Conferenza dei presidenti un mese prima della tornata.\
\
2.   I Commissari invitati a partecipare dalla Conferenza dei presidenti sono responsabili di un portafoglio attinente alla specifica o alle specifiche tematiche orizzontali su cui vertono le interrogazioni loro rivolte. Il numero di Commissari invitati è limitato a due per tornata. Tuttavia, è possibile invitarne un terzo a seconda della specifica o delle specifiche tematiche orizzontali prescelte per il tempo delle interrogazioni.\
\
3.   Conformemente alle direttive definite dalla Conferenza dei presidenti possono essere previsti tempi specifici riservati alle interrogazioni destinate al Consiglio, al Presidente della Commissione, al vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza e al Presidente dell'Eurogruppo.\
\
4.   Il tempo riservato alle interrogazioni non è preventivamente ripartito in modo specifico. Il Presidente assicura, per quanto possibile, che ai deputati di tendenze politiche diverse e di Stati membri diversi sia data l'opportunità di rivolgere interrogazioni a turno.\
\
5.   Il deputato dispone di un minuto per formulare l\'interrogazione e il Commissario di due minuti per rispondere. Il deputato può rivolgere un\'interrogazione supplementare della durata massima di 30 secondi che abbia attinenza diretta con l\'interrogazione principale. Il Commissario dispone di due minuti per la risposta supplementare.\
\
Le interrogazioni e le interrogazioni supplementari devono avere attinenza diretta con la specifica tematica orizzontale decisa a norma del paragrafo 1. Il Presidente può decidere in merito alla loro ricevibilità."
},
{
'id': 130,
'title': 'Articolo 130 : Interrogazioni con richiesta di risposta scritta',
'text': "1.   Ciascun deputato può rivolgere interrogazioni con richiesta di risposta scritta al Presidente del Consiglio europeo, al Consiglio, alla Commissione o al vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza in base ai criteri stabiliti in un allegato al regolamento(1). Il contenuto delle interrogazioni è di esclusiva responsabilità dell\'autore.\
\
2.   Le interrogazioni sono presentate al Presidente. Il Presidente dirime le questioni concernenti la ricevibilità di un\'interrogazione. La decisione del Presidente si fonda non solo sulle disposizioni dell\'allegato di cui al paragrafo 1, ma sulle disposizioni del presente regolamento, in generale. La decisione motivata del Presidente è comunicata all\'interrogante.\
\
3.   Le interrogazioni sono presentate in formato elettronico. Ciascun deputato può presentare al massimo venti interrogazioni su un periodo continuativo di tre mesi.\
\
4.   Un'interrogazione può essere sostenuta da deputati diversi dall'autore. Tali interrogazioni sono sottratte solo dal numero massimo di interrogazioni di cui, a norma del paragrafo 3, dispone l\'autore e non da quello del sostenitore.\
\
5.   Qualora a un\'interrogazione non possa essere data risposta da parte del destinatario entro tre settimane (interrogazione prioritaria) o sei settimane (interrogazione non prioritaria) dal momento in cui gli è stata trasmessa, essa può venire iscritta, su richiesta dell\'interrogante, all\'ordine del giorno della riunione successiva della commissione competente.\
\
6.   Ciascun deputato può presentare una sola interrogazione prioritaria al mese.\
\
7.   Le interrogazioni e le relative risposte, compresi gli eventuali allegati, sono pubblicate sul sito internet del Parlamento.\
\
\
(1)	Cfr. allegato II.\
\
Articolo 130 bis : Interpellanze minori con richiesta di risposta scritta\
\
1.   Una commissione, un gruppo politico o almeno il cinque per cento dei membri che compongono il Parlamento possono rivolgere un\'interpellanza minore, che consiste in un\'interrogazione con richiesta di risposta scritta, al Consiglio, alla Commissione o al vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza affinché essi forniscano al Parlamento informazioni in merito a questioni specifiche.\
\
Le interpellanze sono presentate al Presidente, il quale, a condizione che siano conformi al regolamento in generale e ai criteri stabiliti in un allegato dello stesso(1), chiede al destinatario di rispondere entro un termine di due settimane. Il Presidente può prorogare tale termine previa consultazione degli autori delle interpellanze.\
\
2.   Le interpellanze e le relative risposte sono pubblicate sul sito internet del Parlamento.\
\
\
(1)	Cfr. allegato II.\
\
Articolo 130 ter : Interpellanze principali con richiesta di risposta scritta seguite da discussione\
\
1.   Una commissione, un gruppo politico o almeno il cinque per cento dei membri che compongono il Parlamento possono rivolgere un\'interpellanza principale, che consiste in un\'interrogazione con richiesta di risposta scritta seguita da discussione, al Consiglio, alla Commissione o al vicepresidente della Commissione/alto rappresentante dell\'Unione per gli affari esteri e la politica di sicurezza. Le interpellanze possono includere una breve motivazione.\
\
Le interpellanze sono presentate per iscritto al Presidente, il quale, a condizione che esse siano conformi al regolamento in generale e ai criteri stabiliti in un allegato dello stesso(1), informa immediatamente il destinatario dell\'interpellanza e gli chiede di dichiarare se e quando intende rispondere.\
\
2.   Al ricevimento della risposta scritta, l\'interpellanza principale è iscritta nel progetto di ordine del giorno del Parlamento secondo la procedura di cui all\'articolo 149. Se una commissione, un gruppo politico o almeno il cinque per cento dei membri che compongono il Parlamento ne fanno richiesta, deve aver luogo una discussione.\
\
3.   Se il destinatario rifiuta di rispondere all\'interpellanza o non provvede in tal senso entro tre settimane, l\'interpellanza è iscritta nel progetto di ordine del giorno. Se una commissione, un gruppo politico o almeno il cinque per cento dei membri che compongono il Parlamento ne fanno richiesta, deve aver luogo una discussione. Prima della discussione, uno degli autori può essere autorizzato a motivare ulteriormente l\'interpellanza.\
\
4.   Uno degli autori può illustrare l\'interpellanza in Aula. Un membro dell\'istituzione interessata risponde.\
\
L\'articolo 123, paragrafi da 2 a 5, concernente la presentazione e la votazione di proposte di risoluzione, si applica mutatis mutandis.\
\
5.   Le interpellanze e le relative risposte sono pubblicate sul sito internet del Parlamento.\
\
\
(1)	Cfr. allegato II."
},
{
'id': 131,
'title': 'Articolo 131 : Interrogazioni con richiesta di risposta scritta alla Banca centrale europea\
\
1.   Ciascun deputato può rivolgere alla Banca centrale europea un massimo di sei interrogazioni con richiesta di risposta scritta al mese, conformemente ai criteri stabiliti in un allegato del regolamento(1). Il contenuto delle interrogazioni è di esclusiva responsabilità dell\'autore.\
\
2.   Le interrogazioni sono presentate per iscritto al presidente della commissione competente. Al ricevimento di tali interrogazioni, il presidente della commissione competente le notifica alla Banca centrale europea. Il presidente della commissione competente dirime le questioni concernenti la ricevibilità di un\'interrogazione. La decisione del presidente è comunicata all\'interrogante.\
\
3.   Le interrogazioni e le relative risposte sono pubblicate sul sito internet del Parlamento.\
\
4.   Qualora un\'interrogazione con richiesta di risposta scritta non abbia ricevuto risposta entro sei settimane, essa può essere iscritta, su richiesta dell\'interrogante, all\'ordine del giorno della riunione successiva della commissione competente con il Presidente della Banca centrale europea.\
\
\
(1)	Cfr. allegato II.\
\
Articolo 131 bis : Interrogazioni con richiesta di risposta scritta concernenti il meccanismo di vigilanza unico e il meccanismo di risoluzione unico\
\
1.   L\'articolo 131, paragrafi 1, 2 e 3, si applica, mutatis mutandis, alle interrogazioni con richiesta di risposta scritta concernenti il meccanismo di vigilanza unico e il meccanismo di risoluzione unico. Il numero di tali interrogazioni è sottratto dal numero massimo di sei interrogazioni al mese previsto all\'articolo 131, paragrafo 1.\
\
2.   Qualora un\'interrogazione con richiesta di risposta scritta non abbia ricevuto risposta entro cinque settimane, essa può essere iscritta, su richiesta dell\'interrogante, all\'ordine del giorno della riunione successiva della commissione competente con il presidente del comitato del destinatario.',
'text': ""
},
{
'id': 132,
'title': 'Articolo 132 : Relazioni annuali e altre relazioni di altre istituzioni o di altri organismi',
'text': "1.   Le relazioni annuali e le altre relazioni di altre istituzioni o di altri organismi per le quali i trattati prevedono la consultazione del Parlamento o per le quali altre disposizioni giuridiche prevedono il parere del Parlamento ai fini dello sviluppo dell\'Unione europea sono trattate nell\'ambito di una relazione presentata in Aula.\
\
2.   Le relazioni annuali e le altre relazioni di altre istituzioni o di altri organismi che non rientrano nel campo di applicazione del paragrafo 1 sono deferite alla commissione competente, che le esamina e che può presentare una breve proposta di risoluzione al Parlamento o proporre di elaborare una relazione conformemente all\'articolo 52, qualora ritenga che il Parlamento debba prendere una posizione su una questione importante trattata in tali relazioni."
},
{
'id': 133,
'title': 'Articolo 133 : Proposte di risoluzione',
'text': "1.   Ogni deputato può presentare una proposta di risoluzione su un argomento rientrante nell\'ambito delle attività dell\'Unione europea.\
\
Tale proposta consiste al massimo di 200 parole.\
\
2.   La proposta di risoluzione non può:\
\
-   contenere decisioni su questioni per le quali il presente regolamento, in particolare l\'articolo 46, stabilisce altre procedure e competenze specifiche; oppure\
\
-   trattare questioni che sono oggetto di lavori in corso al Parlamento.\
\
3.   Ogni deputato può presentare al massimo una proposta di questo tipo al mese.\
\
4.   La proposta di risoluzione è presentata al Presidente, che verifica se soddisfa i criteri applicabili. Se il Presidente reputa la proposta ricevibile, ne dà comunicazione in Aula e la trasmette per esame alla commissione competente.\
\
5.   La commissione competente decide sulla procedura, che può comprendere il trattamento congiunto della proposta di risoluzione con altre proposte di risoluzione o relazioni, la formulazione di un parere, anche sotto forma di lettera, o l\'elaborazione di una relazione a norma dell\'articolo 52. La commissione competente può anche decidere di non dare seguito alla proposta di risoluzione.\
\
6.   Gli autori della proposta di risoluzione sono informati delle decisioni del Presidente, della commissione e della Conferenza dei presidenti.\
\
7.   La relazione di cui al paragrafo 5 deve contenere il testo della proposta di risoluzione.\
\
8.   I pareri sotto forma di lettera di cui al paragrafo 5 destinati ad altre istituzioni dell\'Unione europea sono ad esse trasmessi a cura del Presidente.\
\
9.   Una proposta di risoluzione presentata a norma del paragrafo 1 può essere ritirata dal suo autore o dai suoi autori o dal primo firmatario della proposta prima che la commissione competente abbia deciso, sulla base del paragrafo 5, di elaborare una relazione in merito.\
\
Una volta che la proposta di risoluzione sia stata fatta propria in tal modo dalla commissione competente, solo quest'ultima ha facoltà di ritirarla. La commissione competente può esercitare tale facoltà di ritiro sino all\'apertura della votazione finale in Aula."
},
{
'id': 134,
'title': 'Articolo 134 : (soppresso)',
'text': ""
},
{
'id': 135,
'title': 'Articolo 135 : Discussioni su casi di violazione dei diritti umani, della democrazia e dello Stato di diritto',
'text': "1.   Una commissione, una delegazione interparlamentare, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono chiedere per iscritto al Presidente che sia tenuta una discussione su un caso urgente di violazione dei diritti umani, della democrazia e dello Stato di diritto.\
\
2.   La Conferenza dei presidenti stabilisce, sulla base delle richieste di cui al paragrafo 1 e secondo le modalità previste dall'allegato III, un elenco degli argomenti da iscrivere nel progetto definitivo di ordine del giorno per le successive discussioni su casi di violazione dei diritti umani, della democrazia e dello Stato di diritto. Il numero complessivo degli argomenti iscritti all\'ordine del giorno non può essere superiore a tre, incluse le sottocategorie.\
\
Conformemente all\'articolo 149 bis, il Parlamento può decidere di sopprimere un argomento previsto per le discussioni e di sostituirlo con un argomento non previsto. Le proposte di risoluzione sugli argomenti scelti possono essere presentate da una commissione, un gruppo politico o un numero di deputati pari almeno alla soglia bassa al più tardi la sera dell\'approvazione dell'ordine del giorno. Il Presidente fissa il termine esatto per la presentazione delle proposte di risoluzione in questione.\
\
3.   Il tempo di parola complessivo dei gruppi politici e dei deputati non iscritti viene ripartito in conformità dell\'articolo 162, paragrafi 4 e 5, nei limiti del tempo complessivo di non oltre sessanta minuti per tornata previsto per le discussioni.\
\
Il tempo restante dopo aver tenuto conto dell\'illustrazione delle proposte di risoluzione e del tempo concordato per gli eventuali interventi della Commissione e del Consiglio è ripartito tra i gruppi politici e i deputati non iscritti.\
\
4.   Al termine della discussione ha luogo immediatamente la votazione. Non si applicano nella fattispecie le disposizioni dell\'articolo 183 concernente le dichiarazioni di voto.\
\
Le votazioni effettuate in applicazione del presente articolo possono essere organizzate congiuntamente nell\'ambito delle responsabilità del Presidente e della Conferenza dei presidenti.\
\
5.   Qualora su un medesimo argomento siano state presentate due o più proposte di risoluzione, si applica la procedura di cui all\'articolo 123, paragrafi 4 e 5.\
\
6.   Il Presidente e i presidenti dei gruppi politici possono decidere di porre in votazione una proposta di risoluzione senza discussione. Tale decisione richiede l\'accordo unanime dei presidenti dei gruppi politici.\
\
Le disposizioni degli articoli 187 e 188 non si applicano alle proposte di risoluzione iscritte all\'ordine del giorno delle discussioni su casi di violazione dei diritti umani, della democrazia e dello Stato di diritto.\
\
Le proposte di risoluzione sono presentate in vista di una discussione su casi di violazione dei diritti umani, della democrazia e dello Stato di diritto solo dopo l\'approvazione dell\'elenco degli argomenti. Le proposte di risoluzione che non possono essere esaminate nell\'arco di tempo previsto per queste discussioni decadono. Decadono anche le proposte di risoluzione per le quali sia stata constatata, in seguito a una richiesta presentata ai sensi dell\'articolo 168, paragrafo 3, la mancanza del numero legale. Gli autori hanno il diritto di ripresentare queste proposte di risoluzione in vista di un loro deferimento in commissione (articolo 133) o dell\'iscrizione nelle discussioni su casi di violazione dei diritti umani, della democrazia e dello Stato di diritto della tornata successiva.\
\
Un argomento non può essere iscritto all\'ordine del giorno per essere discusso nelle discussioni su casi di violazioni dei diritti umani, della democrazia e dello Stato di diritto se è già iscritto all\'ordine del giorno della stessa tornata.\
\
Il regolamento non contiene alcuna disposizione che consenta di esaminare congiuntamente una proposta di risoluzione presentata in conformità del paragrafo 2, secondo comma, e una relazione presentata da una commissione sullo stesso argomento. Qualora sia richiesta la constatazione del numero legale ai sensi dell\'articolo 168, paragrafo 3, tale richiesta è valida solo per la proposta di risoluzione che deve essere posta in votazione e non per le successive."
},
{
'id': 136,
'title': 'Articolo 136 : (soppresso)',
'text': ""
},
{
'id': 137,
'title': 'Articolo 137 : Consultazione del Comitato economico e sociale europeo',
'text': "1.   Qualora il trattato sul funzionamento dell\'Unione europea preveda la consultazione del Comitato economico e sociale europeo, il Presidente avvia la procedura di consultazione e ne informa il Parlamento.\
\
2.   Una commissione può chiedere che il Comitato economico e sociale europeo sia consultato su questioni di carattere generale o su temi specifici.\
\
Nella sua richiesta, la commissione indica il termine entro il quale il Comitato economico e sociale europeo deve esprimere il proprio parere.\
\
Le richieste di consultazione del Comitato economico e sociale europeo sono annunciate in Aula nel corso della tornata successiva e sono considerate approvate a meno che, entro 24 ore dall'annuncio, un gruppo politico o un numero di deputati pari almeno alla soglia bassa non chiedano che siano poste in votazione.\
\
3.   I pareri trasmessi dal Comitato economico e sociale europeo sono deferiti alla commissione competente."
},
{
'id': 138,
'title': 'Articolo 138 : Consultazione del Comitato delle regioni',
'text': "1.   Qualora il trattato sul funzionamento dell\'Unione europea preveda la consultazione del Comitato delle regioni, il Presidente avvia la procedura di consultazione e ne informa il Parlamento.\
\
2.   Una commissione può chiedere che il Comitato delle regioni sia consultato su questioni di carattere generale o su punti specifici.\
\
Nella sua richiesta, la commissione indica il termine entro il quale il Comitato delle regioni deve esprimere il proprio parere.\
\
Le richieste di consultazione del Comitato delle regioni sono annunciate in Aula nel corso della tornata successiva e sono considerate approvate a meno che, entro 24 ore dall'annuncio, un gruppo politico o un numero di deputati pari almeno alla soglia bassa non chiedano che siano poste in votazione.\
\
3.   I pareri trasmessi dal Comitato delle regioni sono deferiti alla commissione competente."
},
{
'id': 139,
'title': 'Articolo 139 : Richieste alle Agenzie europee',
'text': "1.   Ove il Parlamento abbia il diritto di presentare una richiesta ad un'Agenzia europea, ogni deputato può presentare per iscritto una tale richiesta al Presidente del Parlamento. Tali richieste riguardano temi che rientrino nella missione dell\'Agenzia interessata e sono corredate di informazioni generali che definiscano la questione e l\'interesse dell\'Unione.\
\
2.   Il Presidente, previa consultazione della commissione competente, trasmette la richiesta all'Agenzia o adotta ogni altra misura appropriata. Il deputato richiedente è immediatamente informato. Ogni richiesta trasmessa dal Presidente ad un'Agenzia prevede un termine per la risposta.\
\
3.   Qualora l'Agenzia ritenga di non essere in grado di rispondere alla richiesta formulata, o ne chieda una modifica, essa è tenuta ad informarne immediatamente il Presidente che adotta ogni misura appropriata, previa consultazione della commissione competente, ove necessario."
},
{
'id': 140,
'title': 'Articolo 140 : Accordi interistituzionali',
'text': "1.   Il Parlamento può concludere accordi con altre istituzioni nel contesto dell\'applicazione dei trattati o ai fini di un miglioramento o chiarimento delle procedure.\
\
Tali accordi possono assumere la forma di dichiarazioni comuni, scambio di lettere, codici di condotta o altri idonei strumenti. Sono firmati dal Presidente previo esame da parte della commissione competente per gli affari costituzionali e previa approvazione del Parlamento.\
\
2.   Prima della firma di tali accordi, qualora essi comportino la modifica di diritti od obblighi regolamentari esistenti, istituiscano nuovi diritti od obblighi regolamentari per i deputati o gli organi del Parlamento, o comportino in altro modo una modifica o un\'interpretazione del regolamento, la questione è deferita all\'esame della commissione competente per il merito, ai sensi dell\'articolo 226, paragrafi da 2 a 6."
},
{
'id': 141,
'title': 'Articolo 141 : Procedimenti dinanzi alla Corte di giustizia dell\'Unione europea',
'text': "1.   Il Parlamento, entro i termini specificati dai trattati e dallo statuto della Corte di giustizia dell\'Unione europea per i ricorsi da parte delle istituzioni dell\'Unione europea o da parte di persone fisiche o giuridiche, esamina la legislazione dell\'Unione e la sua attuazione per assicurarsi che i trattati, in particolare per quanto concerne i diritti del Parlamento, siano stati pienamente rispettati.\
\
2.   La commissione competente per le questioni giuridiche riferisce al Parlamento, se necessario oralmente, allorché presuma una violazione del diritto dell\'Unione. Se del caso, la commissione competente per le questioni giuridiche può ascoltare le osservazioni della commissione competente per il merito.\
\
3.   Il Presidente presenta un ricorso a nome del Parlamento, conformemente alla raccomandazione della commissione competente per le questioni giuridiche.\
\
All'inizio della tornata successiva il Presidente può sottoporre al Parlamento la decisione in merito al mantenimento del ricorso. Qualora il Parlamento decida a maggioranza dei voti espressi contro il ricorso, il Presidente lo ritira.\
\
Qualora il Presidente presenti il ricorso contrariamente alla raccomandazione della commissione competente per le questioni giuridiche, egli sottopone al Parlamento, all\'inizio della tornata successiva, la decisione in merito al mantenimento del ricorso.\
\
4.   Il Presidente presenta osservazioni o interviene a nome del Parlamento nei procedimenti giurisdizionali, previa consultazione della commissione competente per le questioni giuridiche.\
\
Quando intenda discostarsi dalla raccomandazione della commissione competente per le questioni giuridiche, il Presidente ne informa la commissione e deferisce la questione alla Conferenza dei presidenti, precisando i propri motivi.\
\
Se la Conferenza dei presidenti ritiene che il Parlamento non debba, eccezionalmente, presentare osservazioni o intervenire dinanzi alla Corte di giustizia dell\'Unione europea qualora sia in causa la validità di un atto del Parlamento, la questione è sottoposta senza indugio al Parlamento.\
\
Nessuna disposizione del regolamento impedisce alla commissione competente per le questioni giuridiche di decidere opportune disposizioni procedurali per la tempestiva trasmissione della propria raccomandazione in casi urgenti.\
\
Qualora si tratti di esercitare i diritti del Parlamento dinanzi alla Corte di giustizia dell\'Unione europea e l\'atto in questione non rientri nell\'ambito di applicazione dell\'articolo 141 del presente regolamento, la procedura prevista da tale articolo si applica per analogia.\
\
5.   In casi urgenti il Presidente, ove possibile dopo aver consultato il presidente e il relatore della commissione competente per le questioni giuridiche, può agire a titolo conservativo per rispettare i termini previsti. In tali casi si applica al più presto la procedura di cui ai paragrafi 3 o 4, a seconda dei casi.\
\
6.   La commissione competente per le questioni giuridiche elabora i principi che utilizzerà per l\'applicazione del presente articolo."
},
{
'id': 142,
'title': 'Articolo 142 : Scambio di informazioni, contatti e agevolazioni reciproche',
'text': "1.   Il Parlamento europeo tiene regolarmente informati i parlamenti nazionali degli Stati membri in merito alle sue attività.\
\
2.   L'organizzazione e la promozione dell\'effettiva e costante cooperazione interparlamentare all\'interno dell\'Unione, a norma dell\'articolo 9 del protocollo n. 1 sul ruolo dei parlamenti nazionali nell'Unione europea, sono negoziate in base ad un mandato conferito dalla Conferenza dei presidenti, previa consultazione della Conferenza dei presidenti di commissione.\
\
Il Parlamento approva gli accordi in materia conformemente alla procedura di cui all\'articolo 140.\
\
3.   Una commissione può avviare direttamente un dialogo con i parlamenti nazionali a livello di commissione entro i limiti degli stanziamenti di bilancio accantonati a tal fine. Ciò può comprendere opportune forme di cooperazione pre-legislativa e post-legislativa.\
\
4.   Ogni documento concernente una procedura legislativa a livello dell\'Unione che sia trasmesso ufficialmente da un parlamento nazionale al Parlamento europeo è inoltrato alla commissione competente per la materia trattata in tale documento.\
\
5.   La Conferenza dei presidenti può dare mandato al Presidente di negoziare agevolazioni a favore dei parlamenti nazionali degli Stati membri, su base reciproca, e di proporre qualsiasi altra misura volta a facilitare i contatti con tali parlamenti nazionali."
},
{
'id': 143,
'title': 'Articolo 143 : Conferenza degli organi parlamentari specializzati negli affari dell\'Unione (COSAC)',
'text': "1.   Su proposta del Presidente, la Conferenza dei presidenti nomina i membri della delegazione del Parlamento alla COSAC e può conferire loro un mandato. La delegazione è guidata da un vicepresidente del Parlamento europeo competente per le relazioni con i parlamenti nazionali e dal presidente della commissione competente per gli affari costituzionali.\
\
2.   Gli altri membri della delegazione sono scelti in base ai temi discussi nella riunione della COSAC e comprendono, per quanto possibile, rappresentanti delle commissioni competenti per tali temi.\
\
3.   Nella scelta dei membri della delegazione, si tiene debitamente conto dell\'equilibrio politico globale all\'interno del Parlamento.\
\
4.   Dopo ogni riunione della COSAC, la delegazione presenta una relazione alla Conferenza dei presidenti."
},
{
'id': 144,
'title': 'Articolo 144 : Conferenze di parlamenti',
'text': "La Conferenza dei presidenti nomina i membri della delegazione del Parlamento a qualsiasi conferenza o analogo organo ai quali partecipino rappresentanti di parlamenti e le conferisce un mandato conforme alle pertinenti risoluzioni del Parlamento. La delegazione elegge il proprio presidente e, se del caso, uno o più vicepresidenti."
},
{
'id': 145,
'title': 'Articolo 145 : Legislature, sessioni, tornate, sedute',
'text': "1.   La legislatura corrisponde alla durata del mandato dei deputati prevista nell'Atto del 20 settembre 1976.\
\
2.   La sessione ha una durata annuale, conformemente all'Atto suddetto e ai trattati.\
\
3.   La tornata è la riunione del Parlamento che ha luogo di regola ogni mese; essa si ripartisce in singoli giorni di seduta.\
\
Le sedute che il Parlamento tiene nel corso di una stessa giornata sono considerate come un'unica seduta."
},
{
'id': 146,
'title': 'Articolo 146 : Convocazione del Parlamento',
'text': "1.   In conformità dell\'articolo 229, primo comma, del trattato sul funzionamento dell\'Unione europea, il Parlamento si riunisce di pieno diritto il secondo martedì di marzo di ogni anno e decide in modo sovrano circa la durata delle interruzioni della sessione.\
\
2.   Inoltre il Parlamento si riunisce di pieno diritto il primo martedì successivo alla scadenza del termine di un mese dalla fine del periodo di cui all\'articolo 10, paragrafo 1, dell\'Atto del 20 settembre 1976.\
\
3.   La Conferenza dei presidenti può modificare la durata delle interruzioni fissate in conformità del paragrafo 1 con decisione motivata presa almeno quindici giorni prima della data precedentemente stabilita dal Parlamento per la ripresa della sessione. Tale data per la ripresa della sessione non può essere posticipata di più di quindici giorni.\
\
4.   Sentita la Conferenza dei presidenti, il Presidente convoca, in via eccezionale, il Parlamento su richiesta della maggioranza dei deputati che lo compongono o su richiesta della Commissione o del Consiglio.\
\
È inoltre facoltà del Presidente, con l\'accordo della Conferenza dei presidenti, convocare il Parlamento in via eccezionale in caso di urgenza."
},
{
'id': 147,
'title': 'Articolo 147 : Luogo di riunione',
'text': "1.   Il Parlamento tiene le sedute plenarie e le riunioni di commissione conformemente alle disposizioni dei trattati.\
\
Le proposte di tornate aggiuntive a Bruxelles e qualsiasi eventuale emendamento alle stesse richiedono soltanto la maggioranza dei voti espressi.\
\
2.   Ogni commissione può decidere di chiedere che una o più delle proprie riunioni si tengano altrove. La richiesta motivata è trasmessa al Presidente del Parlamento che la sottopone all\'approvazione dell\'Ufficio di presidenza. In caso di urgenza, il Presidente può decidere da solo. Se sono sfavorevoli, le decisioni dell\'Ufficio di presidenza o del Presidente devono essere motivate."
},
{
'id': 148,
'title': 'Articolo 148 : Partecipazione dei deputati alle sedute',
'text': "1.   Per ogni seduta è esposto un elenco di presenza che deve essere firmato dai deputati.\
\
2.   I nominativi dei deputati la cui presenza è attestata dall'elenco sono indicati sul processo verbale di ogni seduta come 'presenti'. I nominativi dei deputati la cui assenza è giustificata dal Presidente sono indicati come 'giustificati' sul processo verbale di ogni seduta."
},
{
'id': 149,
'title': 'Articolo 149 : Progetto di ordine del giorno',
'text': "1.   Prima di ogni tornata il progetto di ordine del giorno è fissato dalla Conferenza dei presidenti in base alle raccomandazioni della Conferenza dei presidenti di commissione.\
\
La Commissione e il Consiglio possono assistere, su invito del Presidente, alle deliberazioni della Conferenza dei presidenti sul progetto di ordine del giorno.\
\
2.   Il progetto di ordine del giorno può indicare il momento della votazione per taluni punti di cui è previsto l\'esame.\
\
3.   Il progetto definitivo di ordine del giorno è messo a disposizione dei deputati almeno tre ore prima dell\'inizio della tornata.\
\
Articolo 149 bis : Approvazione e modifica dell'ordine del giorno\
\
1.   All'inizio di ciascuna tornata il Parlamento approva il suo ordine del giorno. Una commissione, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono presentare proposte di modifica al progetto definitivo di ordine del giorno. Le proposte devono pervenire al Presidente almeno un'ora prima dell\'apertura della tornata. Il Presidente può dare la parola all\'autore di ciascuna proposta e a un oratore contro. Il tempo di parola non può superare un minuto.\
\
2.   Una volta approvato, l'ordine del giorno non può essere modificato, salvo applicazione degli articoli 154, 187, 188, 189, 190 o 191 o su proposta del Presidente.\
\
Qualora una mozione di procedura volta a modificare l'ordine del giorno sia respinta, essa non può essere ripresentata durante la stessa tornata.\
\
3.   Prima di togliere la seduta, il Presidente comunica al Parlamento la data, l'ora e l'ordine del giorno della seduta successiva."
},
{
'id': 150,
'title': 'Articolo 150 : Procedura in Aula senza emendamenti e senza discussione',
'text': "1.   Qualora una relazione sia approvata in commissione con un numero di voti contrari inferiore a un decimo dei deputati che compongono la commissione, essa è iscritta al progetto di ordine del giorno del Parlamento per una votazione senza emendamenti.\
\
Il punto forma quindi oggetto di una votazione unica a meno che, prima della fissazione del progetto definitivo di ordine del giorno, un numero di deputati o uno o più gruppi politici pari almeno alla soglia media non abbiano richiesto per iscritto che esso possa essere modificato, nel qual caso il Presidente fissa un termine per la presentazione di emendamenti.\
\
2.   I punti iscritti al progetto definitivo di ordine del giorno per la votazione senza emendamenti sono altresì posti in votazione senza discussione, a meno che il Parlamento, all\'atto dell\'approvazione dell'ordine del giorno all\'inizio della tornata, non decida altrimenti su proposta della Conferenza dei presidenti, o su richiesta di un gruppo politico o di un numero di deputati pari almeno alla soglia bassa.\
\
3.   All'atto della fissazione del progetto definitivo di ordine del giorno di una tornata, la Conferenza dei presidenti può proporre che altri punti posti in votazione senza emendamenti siano posti in votazione senza discussione. All'atto dell\'approvazione dell'ordine del giorno, il Parlamento non può accettare proposte di questo tipo se un gruppo politico o un numero di deputati pari almeno alla soglia bassa vi si sono opposti per iscritto almeno un'ora prima dell\'inizio della tornata.\
\
4.   Quando un punto è posto in votazione senza discussione, il relatore o il presidente della commissione competente possono fare una dichiarazione di durata non superiore ai due minuti subito prima della votazione."
},
{
'id': 151,
'title': 'Articolo 151 : Breve presentazione',
'text': "Su richiesta del relatore o su proposta della Conferenza dei presidenti, il Parlamento può altresì decidere che un punto che non richiede discussione approfondita sia trattato mediante una breve presentazione del relatore in Aula. In tal caso, la Commissione ha la possibilità di replicare, cui può far seguito una discussione della durata massima di dieci minuti nel corso della quale il Presidente può dare la parola per un minuto ciascuno ai deputati che chiedano di intervenire."
},
{
'id': 152,
'title': 'Articolo 152 : (soppresso)',
'text': ""
},
{
'id': 153,
'title': 'Articolo 153 : Discussione straordinaria',
'text': "1.   Un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono chiedere l\'iscrizione all\'ordine del giorno del Parlamento di una discussione straordinaria su una questione di notevole rilevanza connessa alla politica dell\'Unione europea. Di norma in ogni tornata si tiene una sola discussione straordinaria.\
\
2.   La richiesta è presentata per iscritto al Presidente almeno tre ore prima dell\'inizio della tornata nel corso della quale la discussione straordinaria dovrà svolgersi. La votazione sulla richiesta ha luogo all\'inizio della tornata, al momento dell\'approvazione del progetto definitivo di ordine del giorno.\
\
3.   Per tener conto di circostanze che si verificano dopo l\'approvazione dell'ordine del giorno di una tornata, il Presidente, previa consultazione dei presidenti dei gruppi politici, può proporre una discussione straordinaria. Tale proposta di discussione straordinaria è votata all\'inizio di una seduta o nel corso di un tempo di votazione programmato ed è notificata ai deputati almeno un'ora prima del voto.\
\
4.   Il Presidente stabilisce l'ora in cui ha luogo la discussione. La durata complessiva della discussione non supera i 60 minuti. Il tempo di parola è ripartito fra i gruppi politici e i deputati non iscritti a norma dell\'articolo 162, paragrafi 4 e 5.\
\
5.   La discussione si conclude senza l\'approvazione di una risoluzione.\
\
Articolo 153 bis : Discussione richiesta da un gruppo politico su tematiche di attualità\
\
1.   Il progetto di ordine del giorno di ogni tornata prevede uno o due periodi di durata non inferiore a sessanta minuti ciascuno per le discussioni su tematiche di attualità di notevole rilevanza per la politica dell\'Unione europea.\
\
2.   Ciascun gruppo politico ha il diritto di proporre una tematica di attualità di sua scelta per almeno una discussione di questo tipo all\'anno. La Conferenza dei presidenti garantisce, su un periodo continuativo di un anno, un'equa distribuzione dell\'esercizio di detto diritto tra i gruppi politici.\
\
3.   I gruppi politici trasmettono per iscritto al Presidente la tematica di attualità di loro scelta prima che la Conferenza dei presidenti fissi il progetto definitivo di ordine del giorno. L\'articolo 38, paragrafo 1, concernente i diritti, le libertà e i principi riconosciuti dall'articolo 6 del trattato sull'Unione europea e i valori sanciti all\'articolo 2 del medesimo trattato deve essere pienamente rispettato.\
\
4.   La Conferenza dei presidenti stabilisce l'ora in cui ha luogo la discussione. Essa può decidere a maggioranza dei quattro quinti dei deputati che compongono il Parlamento di respingere una tematica proposta da un gruppo.\
\
5.   La discussione è introdotta da un rappresentante del gruppo politico che ha proposto la tematica di attualità. Il tempo di parola successivo a tale presentazione è ripartito a norma dell\'articolo 162, paragrafi 4 e 5.\
\
6.   La discussione si conclude senza l\'approvazione di una risoluzione."
},
{
'id': 154,
'title': 'Articolo 154 : Urgenza',
'text': "1.   L'urgenza di una discussione su una proposta presentata al Parlamento ai sensi dell\'articolo 47, paragrafo 1, può essere richiesta al Parlamento dal Presidente, da una commissione parlamentare, da un gruppo politico o un numero di deputati pari almeno alla soglia bassa, dalla Commissione o dal Consiglio. La richiesta va presentata per iscritto e deve essere motivata.\
\
2.   Il Presidente, non appena gli sia stata presentata una richiesta di discussione con procedura d\'urgenza, ne informa l'Aula; la votazione sulla richiesta ha luogo all\'inizio della seduta successiva a quella in cui essa è stata comunicata al Parlamento, sempre che la proposta oggetto della richiesta sia stata distribuita ai deputati nelle lingue ufficiali. Qualora vi siano più richieste di discussione con procedura d\'urgenza sullo stesso argomento, l\'approvazione o la reiezione dell'urgenza riguardano tutte le risoluzioni relative a tale argomento.\
\
3.   Prima della votazione possono essere ascoltati soltanto, per un massimo di tre minuti ciascuno, l\'autore della richiesta, un oratore contro e il presidente o il relatore della commissione competente.\
\
4.   I punti per i quali sia stata decisa l'urgenza hanno la precedenza sugli altri punti dell'ordine del giorno; il Presidente fissa il momento della loro discussione e votazione.\
\
5.   La procedura d\'urgenza può aver luogo senza relazione o, in via eccezionale, su semplice relazione orale della commissione competente.\
\
Qualora sia utilizzata una procedura d\'urgenza e abbiano luogo negoziati interistituzionali, non si applicano gli articoli 69 ter e 69 quater. L\'articolo 69 septies si applica mutatis mutandis."
},
{
'id': 155,
'title': 'Articolo 155 : Discussione congiunta',
'text': "La decisione di tenere una discussione congiunta su questioni della stessa natura o collegate fra loro può essere presa in qualsiasi momento."
},
{
'id': 156,
'title': 'Articolo 156 : Termini',
'text': "Salvo i casi di urgenza previsti agli articoli 135 e 154, un testo può essere posto in discussione e in votazione solamente se è stato messo a disposizione dei deputati da almeno 24 ore."
},
{
'id': 157,
'title': 'Articolo 157 : Accesso all\'aula',
'text': "1.   Nessuna persona estranea può accedere all\'aula, eccezion fatta per i deputati, i membri della Commissione e del Consiglio, il Segretario generale del Parlamento, i membri del personale chiamati a prestarvi servizio e le persone invitate dal Presidente.\
\
2.   Sono ammesse nelle tribune soltanto le persone munite di una tessera regolarmente rilasciata a questo scopo dal Presidente o dal Segretario generale del Parlamento.\
\
3.   Il pubblico ammesso nelle tribune deve stare seduto e in silenzio. Chiunque manifesti approvazione o disapprovazione è immediatamente espulso dai commessi."
},
{
'id': 158,
'title': 'Articolo 158 : Lingue',
'text': "1.   Tutti i documenti del Parlamento sono redatti nelle lingue ufficiali.\
\
2.   Tutti i deputati hanno il diritto di esprimersi in Parlamento nella lingua ufficiale di loro scelta. Gli interventi in una delle lingue ufficiali sono interpretati simultaneamente in ognuna delle altre lingue ufficiali e in qualsiasi altra lingua ritenuta necessaria dall\'Ufficio di presidenza.\
\
3.   Durante le riunioni di commissione e di delegazione è assicurata l\'interpretazione da e verso le lingue ufficiali utilizzate e richieste dai membri e dai membri sostituti della commissione o della delegazione in questione.\
\
4.   Durante le riunioni di commissione o di delegazione al di fuori dei luoghi abituali di lavoro è assicurata l\'interpretazione da e verso le lingue dei membri che hanno confermato la propria presenza alla riunione. È possibile derogare in via eccezionale a detto regime. L'Ufficio di presidenza adotta le disposizioni necessarie.\
\
5.   Dopo la proclamazione del risultato di una votazione, il Presidente decide sulle eventuali richieste riguardanti presunte discrepanze tra le varie versioni linguistiche."
},
{
'id': 159,
'title': 'Articolo 159 : Norma transitoria',
'text': "1.   Durante un periodo transitorio, che si conclude al termine dell'ottava legislatura(1), sono consentite deroghe alle disposizioni dell\'articolo 158 se, benché siano state prese tutte le misure necessarie, non è possibile disporre di un numero sufficiente di interpreti e di traduttori in una lingua ufficiale.\
\
2.   Su proposta del Segretario generale, e tenendo in debito conto le disposizioni di cui al paragrafo 3, l'Ufficio di presidenza determina se le condizioni definite al paragrafo 1 sono rispettate per ciascuna delle lingue ufficiali in questione e riesamina la propria decisione ogni sei mesi sulla base di una relazione del Segretario generale sui progressi compiuti. L'Ufficio di presidenza adotta le necessarie norme di attuazione.\
\
3.   Sono applicabili le deroghe temporanee decise del Consiglio in conformità dei trattati in merito alla redazione degli atti giuridici.\
\
4.   Il Parlamento, su raccomandazione motivata dell\'Ufficio di presidenza, può decidere in ogni momento l\'abrogazione anticipata del presente articolo o la sua eventuale proroga alla scadenza di cui al paragrafo 1.\
\
\
(1)	Esteso con decisione del Parlamento del 26 febbraio 2014."
},
{
'id': 160,
'title': 'Articolo 160 : Distribuzione dei documenti',
'text': "I documenti sulla base dei quali il Parlamento discute e si pronuncia sono messi a disposizione dei deputati.\
\
Ferma restando l\'applicazione del primo comma, i deputati e i gruppi politici hanno accesso diretto al sistema informatico interno del Parlamento per la consultazione di qualsiasi documento preparatorio non riservato (progetti di relazione, progetti di raccomandazione, progetti di parere, documenti di lavoro, emendamenti presentati in commissione)."
},
{
'id': 161,
'title': 'Articolo 161 : Trattamento elettronico dei documenti',
'text': "I documenti del Parlamento possono essere preparati, firmati e distribuiti in formato elettronico. L'Ufficio di presidenza decide in merito alle specifiche tecniche e alla presentazione del formato elettronico."
},
{
'id': 162,
'title': 'Articolo 162 : Ripartizione del tempo di parola ed elenco degli oratori',
'text': "1.   La Conferenza dei presidenti può proporre al Parlamento di ripartire il tempo di parola in vista dello svolgimento di una discussione. Il Parlamento decide in merito senza discussione.\
\
2.   I deputati non possono intervenire se non sono invitati dal Presidente. L'oratore parla dal suo posto e si rivolge al Presidente. Se un oratore si allontana dall'argomento della discussione, il Presidente lo richiama a tale argomento.\
\
3.   Il Presidente stabilisce, per la prima parte di una determinata discussione, un elenco degli oratori che include uno o più turni di intervento per ciascun gruppo politico che desideri prendere la parola, secondo un ordine basato sulle dimensioni relative dei gruppi stessi.\
\
4.   Il tempo di parola per questa parte della discussione è ripartito sulla base dei seguenti criteri:\
\
(a)   una prima frazione del tempo di parola è ripartita in parti uguali fra tutti i gruppi;\
\
(b)   una seconda frazione è ripartita tra i gruppi proporzionalmente al numero totale dei loro membri;\
\
(c)   ai deputati non iscritti è attribuito globalmente un tempo di parola calcolato secondo le frazioni accordate a ciascun gruppo in conformità delle precedenti lettere a) e b);\
\
(d)   la ripartizione del tempo di parola in Aula tiene conto del fatto che i deputati disabili possano necessitare di un tempo maggiore.\
\
5.   Qualora per più punti all\'ordine del giorno si stabilisca un'unica ripartizione del tempo di parola, i gruppi comunicano al Presidente quale frazione del tempo loro assegnato sarà utilizzata per ogni singolo punto. Il Presidente vigila affinché tali tempi di parola siano rispettati.\
\
6.   Il resto del tempo riservato alla discussione non è preventivamente ripartito in modo specifico. Per contro, il Presidente può invitare i deputati a intervenire, come regola generale, per non più di un minuto assicurando, per quanto possibile, che intervengano alternativamente oratori di tendenze politiche diverse e di diversi Stati membri.\
\
7.   Su richiesta, il Presidente può dare precedenza d'intervento al presidente o al relatore della commissione competente e ai presidenti dei gruppi politici che prendono la parola a nome dei loro gruppi ovvero ai loro sostituti.\
\
8.   Il Presidente può concedere la parola ai deputati che indichino, mostrando un cartellino blu, che desiderano rivolgere ad un altro deputato, durante il suo intervento, una domanda di durata non superiore a mezzo minuto correlata all\'intervento del deputato. Il Presidente procede in tal senso a condizione che l'oratore sia d'accordo e sempreché il Presidente stesso ritenga che ciò non perturbi l\'andamento della discussione né dia luogo, attraverso domande consecutive rivolte mediante cartellini blu, a un grave squilibrio per quanto riguarda le affinità dei gruppi politici cui appartengono i deputati che prendono la parola nella discussione.\
\
9.   La durata del tempo di parola è limitata a un minuto per gli interventi sul processo verbale dei lavori, sulle mozioni procedurali e sulle modifiche al progetto definitivo di ordine del giorno o all\'ordine del giorno.\
\
10.   Nella discussione su una relazione, alla Commissione e al Consiglio viene di norma data la parola immediatamente dopo l\'intervento del relatore che illustra la relazione. Alla Commissione, al Consiglio e al relatore può essere data nuovamente la parola, in particolare per replicare alle dichiarazioni dei deputati.\
\
11.   I deputati che non hanno preso la parola nella discussione possono, al massimo una volta in ogni tornata, presentare una dichiarazione scritta che non superi le 200 parole e che sarà allegata al resoconto integrale della discussione.\
\
12.   Tenuto in debito conto l\'articolo 230 del trattato sul funzionamento dell\'Unione europea, il Presidente cerca di concordare con la Commissione, il Consiglio e il Presidente del Consiglio europeo l\'assegnazione alle due istituzioni di un tempo di parola adeguato."
},
{
'id': 163,
'title': 'Articolo 163 : Interventi di un minuto',
'text': "Per non più di trenta minuti durante la prima seduta di ciascuna tornata, il Presidente dà la parola ai deputati che desiderano effettuare interventi di un minuto al massimo per richiamare l\'attenzione del Parlamento su una questione avente rilevanza politica. Il Presidente può decidere di accordare successivamente, durante la stessa tornata, un analogo tempo di parola."
},
{
'id': 164,
'title': 'Articolo 164 : Fatto personale',
'text': "1.   Ogni deputato che chieda di parlare per fatto personale è ascoltato alla fine della discussione sul punto dell'ordine del giorno in corso, o al momento dell\'approvazione del processo verbale della seduta cui si riferisce la richiesta di intervento.\
\
L'oratore non può intervenire sull\'argomento della discussione, ma deve limitarsi a respingere affermazioni fatte nel corso della discussione con riferimento alla sua persona o a opinioni che gli sono state attribuite oppure a rettificare proprie dichiarazioni precedenti.\
\
2.   Salvo decisione contraria del Parlamento, non può essere concesso un tempo superiore ai tre minuti per dichiarazioni per fatto personale.\
\
Articolo 164 bis : Prevenzione di comportamenti ostruzionistici\
\
Il Presidente ha il potere di porre fine a un eccessivo ricorso a prassi quali richiami al regolamento, mozioni di procedura e dichiarazioni di voto, nonché richieste di votazioni distinte, per parti separate o per appello nominale, nei casi in cui ritenga che vi sia il chiaro intento di pregiudicare in modo grave e duraturo lo svolgimento dei lavori dell\'Aula o i diritti degli altri deputati."
},
{
'id': 165,
'title': 'Articolo 165 : Misure immediate',
'text': "1.   Il Presidente richiama all\'ordine il deputato che turbi il regolare svolgimento della seduta o il cui comportamento non sia compatibile con le pertinenti disposizioni dell\'articolo 11.\
\
2.   In caso di recidiva, il Presidente lo richiama nuovamente all\'ordine con iscrizione nel processo verbale.\
\
3.   Qualora la turbativa continui o in caso di nuova recidiva, il Presidente può togliere la parola al deputato ed espellerlo dall'Aula per il resto della seduta. In caso di gravità eccezionale il Presidente può espellere il deputato dall'Aula per il resto della seduta immediatamente e senza un secondo richiamo all\'ordine. Il Segretario generale vigila immediatamente sull'esecuzione di un siffatto provvedimento, con l\'assistenza degli uscieri e, se necessario, del personale di sicurezza del Parlamento.\
\
4.   In caso di tumulti e azioni di disturbo che pregiudichino il proseguimento dei lavori, il Presidente, al fine di ristabilire l'ordine, sospende la seduta per un dato tempo o la toglie. Se riescono vani i suoi richiami, abbandona il seggio e la seduta è sospesa. Essa riprende previa convocazione da parte del Presidente.\
\
5.   Il Presidente può decidere di interrompere la trasmissione in diretta della seduta in caso di linguaggio o comportamento diffamatorio, razzista o xenofobo da parte di un deputato.\
\
6.   Il Presidente può ordinare di eliminare dalla registrazione audiovisiva delle discussioni le parti di un intervento di un deputato che contengono un linguaggio diffamatorio, razzista o xenofobo.\
\
L'ordine ha effetto immediato. Esso deve tuttavia essere confermato dall\'Ufficio di presidenza, che si pronuncia entro quattro settimane dalla data in cui l'ordine è stato dato, oppure, se non si riunisce nel corso di tale periodo, nella sua successiva riunione.\
\
7.   I poteri definiti ai paragrafi da 1 a 6 sono attribuiti, mutatis mutandis, al presidente di seduta di organi, commissioni e delegazioni quali definiti dal presente regolamento.\
\
8.   Se del caso, in funzione della gravità della violazione delle norme di comportamento dei deputati, il presidente di una tornata, di un organo, di una commissione o di una delegazione può presentare al Presidente una richiesta di attuazione dell\'articolo 166, al massimo entro la tornata successiva o la riunione seguente dell'organo, della commissione o della delegazione interessati."
},
{
'id': 166,
'title': 'Articolo 166 : Sanzioni',
'text': "1.   In gravi casi di infrazioni all\'ordine o di turbativa dell\'attività del Parlamento in violazione dei principi definiti all\'articolo 11, il Presidente adotta una decisione motivata che irroga la sanzione adeguata.\
\
Il deputato interessato è invitato dal Presidente a presentare osservazioni per iscritto prima che la decisione sia adottata. In casi eccezionali, il Presidente può convocare il deputato interessato per un'audizione orale.\
\
La decisione è notificata al deputato interessato tramite lettera raccomandata o, in caso di urgenza, tramite gli uscieri.\
\
Qualsiasi sanzione irrogata a un deputato, dopo essere stata notificata a quest'ultimo, è annunciata dal Presidente in Aula e comunicata ai presidenti degli organi, delle commissioni e delle delegazioni cui partecipa il deputato.\
\
Una volta divenuta definitiva, la sanzione è pubblicata in modo visibile sul sito internet del Parlamento per il resto della legislatura.\
\
2.   La valutazione dei comportamenti osservati deve tener conto del loro carattere puntuale, ricorrente o permanente nonché del loro grado di gravità.\
\
È opportuno distinguere i comportamenti di natura visiva, che possono essere tollerati nella misura in cui non siano ingiuriosi, diffamatori, razzisti o xenofobi e rimangano entro limiti ragionevoli, da quelli che comportano una turbativa attiva dell\'attività parlamentare.\
\
3.   La sanzione può consistere in una o più di una delle misure seguenti:\
\
(a)   ammonizione;\
\
(b)   perdita del diritto all\'indennità di soggiorno per un periodo da due a trenta giorni;\
\
(c)   fatto salvo l\'esercizio del diritto di voto in plenaria e con riserva in tal caso del rigoroso rispetto delle norme di comportamento, sospensione temporanea, per un periodo da due a trenta giorni di riunione del Parlamento o di uno qualsiasi dei suoi organi, commissioni o delegazioni, dalla partecipazione a tutte o a una parte delle attività del Parlamento;\
\
(d)   divieto per il deputato di rappresentare il Parlamento in una delegazione interparlamentare, una conferenza interparlamentare o qualsiasi sede interistituzionale per un periodo fino a un anno;\
\
(e)   in caso di violazione degli obblighi di riservatezza, limitazione dei diritti di accesso alle informazioni riservate o classificate per un periodo fino a un anno.\
\
4.   Le misure di cui al paragrafo 3, lettere da b) a e), possono essere raddoppiate in caso di recidiva o se il deputato rifiuta di conformarsi a una misura adottata in virtù dell\'articolo 165, paragrafo 3.\
\
5.   Il Presidente può inoltre presentare alla Conferenza dei presidenti una proposta volta a sospendere o revocare uno o più dei mandati del deputato in seno al Parlamento, conformemente alla procedura di cui all\'articolo 21."
},
{
'id': 167,
'title': 'Articolo 167 : Modalità di ricorso interno',
'text': "Il deputato interessato può presentare all'Ufficio di presidenza, entro il termine di due settimane a decorrere dalla notifica della sanzione adottata dal Presidente a norma dell\'articolo 166, paragrafi da 1 a 4, un ricorso interno che sospende l\'applicazione della sanzione. L'Ufficio di presidenza può, entro quattro settimane dalla presentazione del ricorso o, se non si riunisce nel corso di tale periodo, nella sua successiva riunione, annullare, confermare o modificare la portata della sanzione adottata fatti salvi i diritti di ricorso esterni a disposizione dell\'interessato. In assenza di decisione dell\'Ufficio di presidenza entro il termine impartito, la sanzione è considerata nulla e non avvenuta."
},
{
'id': 168,
'title': 'Articolo 168 : Numero legale',
'text': "1.   Il Parlamento è sempre in numero per deliberare, per discutere il suo ordine del giorno e per approvare il processo verbale.\
\
2.   Il numero legale è raggiunto quando si trovi riunito nell'Aula un terzo dei deputati che compongono il Parlamento.\
\
3.   Le votazioni sono valide qualunque sia il numero dei deputati votanti, a meno che il Presidente, su richiesta di almeno quaranta deputati effettuata prima dell\'inizio delle votazioni, non constati che il numero legale non è presente. Se il numero legale non è raggiunto, il Presidente annuncia la mancanza del numero legale e la votazione è iscritta all\'ordine del giorno della seduta successiva.\
\
Il sistema di votazione elettronico può essere usato per controllare la soglia di quaranta deputati, ma non per verificare il numero legale. La chiusura delle porte dell\'Aula non ha luogo.\
\
4.   I deputati che richiedono la verifica del numero legale devono essere presenti in Aula quando la richiesta viene presentata e sono inclusi nel numero dei presenti, ai sensi dei paragrafi 2 e 3, anche se poi lasciano l'Aula.\
\
5.   Qualora siano presenti meno di quaranta deputati, il Presidente può constatare che il numero legale non è presente.\
\
Articolo 168 bis : Soglie\
\
1.   Ai fini del presente regolamento e salvo ove diversamente specificato, si intende per:\
\
(a)   'soglia bassa': un ventesimo dei deputati che compongono il Parlamento o un gruppo politico;\
\
(b)   'soglia media': un decimo dei deputati che compongono il Parlamento, comprendente uno o più gruppi politici o singoli deputati oppure una combinazione di entrambi;\
\
(c)   'soglia alta': un quinto dei deputati che compongono il Parlamento, comprendente uno o più gruppi politici o singoli deputati oppure una combinazione di entrambi.\
\
2.   Ove, per determinare se una soglia applicabile è stata raggiunta, si renda necessaria la firma di un deputato, questa può essere apposta a mano o essere in formato elettronico, mediante ricorso al sistema di firma elettronica del Parlamento. Un deputato può ritirare la propria firma entro i termini applicabili, ma non può in seguito rinnovarla.\
\
3.   Ove sia necessario il sostegno di un gruppo politico per raggiungere una soglia, il gruppo si pronuncia tramite il proprio presidente o una persona da questo debitamente designata a tal fine.\
\
4.   Il sostegno di un gruppo politico è calcolato come segue per l\'applicazione delle soglie media e alta:\
\
-   se nel corso di una seduta o riunione è invocato un articolo che preveda tale soglia: tutti i deputati appartenenti al gruppo in questione e fisicamente presenti;\
\
-   negli altri casi: tutti i deputati appartenenti al gruppo in questione."
},
{
'id': 169,
'title': 'Articolo 169 : Presentazione ed enunciazione degli emendamenti',
'text': "1.   La commissione competente per il merito, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono presentare emendamenti affinché siano esaminati in Aula. I nomi di tutti i cofirmatari sono pubblicati.\
\
Gli emendamenti devono essere presentati per iscritto e firmati dai loro autori.\
\
Gli emendamenti a proposte di atti giuridicamente vincolanti possono essere corredati di una breve motivazione. Tale motivazione è redatta sotto la responsabilità dell\'autore e non è posta in votazione.\
\
2.   Con riserva delle limitazioni stabilite all\'articolo 170, un emendamento può tendere a modificare qualsiasi parte di un testo e può avere lo scopo di sopprimere, aggiungere o sostituire parole o cifre.\
\
Per 'testo' si intende, nel presente articolo e nell\'articolo 170, l\'insieme di una proposta di risoluzione, di un progetto di risoluzione legislativa, di una proposta di decisione ovvero di una proposta di atto giuridicamente vincolante.\
\
3.   Il Presidente fissa un termine per la presentazione degli emendamenti.\
\
4.   Un emendamento può essere enunciato, durante la discussione, dal suo autore o da qualsiasi altro deputato designato come sostituto dall'autore dell\'emendamento.\
\
5.   Un emendamento ritirato dal suo autore decade, a meno che un altro deputato non lo faccia proprio immediatamente.\
\
6.   Se il Parlamento non decide altrimenti, gli emendamenti possono essere posti in votazione solo quando siano resi disponibili in tutte le lingue ufficiali. Tale decisione non può essere presa quando vi sia opposizione da parte di almeno quaranta deputati. Il Parlamento evita di prendere decisioni suscettibili di tradursi in uno svantaggio inaccettabile per i deputati che utilizzano una determinata lingua.\
\
Qualora siano presenti meno di cento deputati, il Parlamento non può decidere altrimenti quando vi sia obiezione di almeno un decimo dei deputati presenti.\
\
Su proposta del Presidente, un emendamento orale o qualsiasi altra modifica apportata oralmente sono trattati come un emendamento non reso disponibile in tutte le lingue ufficiali. Se il Presidente li giudica ricevibili in base all\'articolo 170, paragrafo 2, e salvo obiezioni sollevate a norma dell\'articolo 169, paragrafo 6, essi sono posti in votazione nel rispetto dell'ordine di votazione previsto.\
\
In commissione, il numero di voti necessario per opporsi a che un tale emendamento o una tale modifica siano posti in votazione è stabilito conformemente all\'articolo 209, in proporzione a quello previsto per l'Aula, arrotondato se necessario all'unità superiore."
},
{
'id': 170,
'title': 'Articolo 170 : Ricevibilità degli emendamenti',
'text': "1.   Fatte salve le condizioni addizionali di cui all\'articolo 52, paragrafo 4, concernenti le relazioni di iniziativa e all\'articolo 69, paragrafo 2, concernenti gli emendamenti alla posizione del Consiglio, un emendamento non è ricevibile se:\
\
(a)   il suo contenuto non ha alcun rapporto diretto con il testo che tende a modificare;\
\
(b)   tende a sopprimere o sostituire la totalità di un testo;\
\
(c)   tende a modificare più di uno degli articoli o dei paragrafi del testo cui si riferisce, a meno che non si tratti di emendamenti di compromesso o di emendamenti volti ad apportare modifiche identiche a una particolare formulazione che ricorra in tutto il testo;\
\
(d)   tende a modificare una proposta di codificazione del diritto dell\'Unione. Tuttavia, l\'articolo 103, paragrafo 3, secondo comma, si applica mutatis mutandis;\
\
(e)   tende a modificare le parti di una proposta che comporta una rifusione della legislazione dell\'Unione che rimangono invariate in tale proposta. Tuttavia, l\'articolo 104, paragrafo 2, secondo comma, e l\'articolo 104, paragrafo 3, terzo comma, si applicano mutatis mutandis;\
\
(f)   tende unicamente ad assicurare la correttezza linguistica o la coerenza terminologica del testo nella lingua in cui l\'emendamento è presentato. In tal caso il Presidente ricerca con gli interessati una soluzione linguistica adeguata.\
\
2.   Il Presidente decide in ordine alla ricevibilità degli emendamenti.\
\
La decisione del Presidente a norma del paragrafo 2 sulla ricevibilità degli emendamenti non è presa sulla sola base delle disposizioni del paragrafo 1, bensì sulla base delle disposizioni del regolamento in generale.\
\
3.   Un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono presentare una proposta di risoluzione volta a sostituire una proposta di risoluzione non legislativa inserita in una relazione di commissione.\
\
In tal caso, il gruppo o i deputati interessati non possono presentare emendamenti alla proposta di risoluzione della commissione competente. La proposta di risoluzione alternativa non può essere più lunga di quella della commissione competente ed è presentata in Aula per un'unica votazione senza emendamenti.\
\
I paragrafi 4 e 5 dell\'articolo 123 concernenti le proposte di risoluzione comune si applicano mutatis mutandis.\
\
4.   Con l\'accordo del Presidente, possono essere posti in votazione in via eccezionale emendamenti presentati dopo la chiusura del termine di presentazione, se si tratta di emendamenti di compromesso o qualora si presentino problemi tecnici. Il Presidente decide in ordine alla ricevibilità di tali emendamenti. Il Presidente deve ottenere il consenso del Parlamento per porre in votazione tali emendamenti.\
\
Riguardo alla ricevibilità degli emendamenti di compromesso possono essere applicati i seguenti criteri generali di ricevibilità:\
\
-   in linea di massima, gli emendamenti di compromesso si riferiscono a parti del testo sulle quali sono stati presentati emendamenti prima del termine per la loro presentazione;\
\
-   in linea di massima, gli emendamenti di compromesso sono presentati dai gruppi politici che rappresentano una maggioranza in Parlamento, dai presidenti o dai relatori delle commissioni interessate o dagli autori di altri emendamenti;\
\
-   in linea di massima, gli emendamenti di compromesso comportano il ritiro di altri emendamenti sullo stesso punto.\
\
Solo il Presidente può proporre che vengano presi in considerazione emendamenti di compromesso. Per porre in votazione l\'emendamento, il Presidente deve ottenere il consenso del Parlamento chiedendo a tal fine se vi sono obiezioni nei confronti della votazione di un emendamento di compromesso. Nel caso in cui vi siano obiezioni, il Parlamento decide a maggioranza dei voti espressi."
},
{
'id': 171,
'title': 'Articolo 171 : Procedura di votazione',
'text': "1.   Fatte salve le disposizioni particolari previste dal presente regolamento, il Parlamento applica la seguente procedura per le votazioni sui testi che gli sono presentati:\
\
(a)   dapprima, se del caso, si procede alla votazione sugli eventuali emendamenti alla proposta di atto giuridicamente vincolante,\
\
(b)   successivamente, se del caso, si procede alla votazione sull'insieme della proposta, eventualmente modificata,\
\
(c)   quindi, si procede alla votazione sugli eventuali emendamenti alla proposta di risoluzione o al progetto di risoluzione legislativa,\
\
(d)   infine, si procede alla votazione sull'insieme della proposta di risoluzione (votazione finale).\
\
Il Parlamento non vota sull'eventuale motivazione contenuta in una relazione.\
\
2.   Nelle votazioni di proposte di atti giuridicamente vincolanti e di proposte di risoluzione non legislativa, si procede prima a votare il dispositivo e poi i visti e i considerando.\
\
3.   Un emendamento decade se incompatibile con precedenti deliberazioni sul medesimo testo nel corso della stessa votazione.\
\
4.   Al momento della votazione sono consentiti soltanto brevi interventi del relatore o, in sua vece, del presidente della commissione, per esporre la posizione della commissione stessa sugli emendamenti posti in votazione."
},
{
'id': 172,
'title': 'Articolo 172 : (soppresso)',
'text': ""
},
{
'id': 173,
'title': 'Articolo 173 : (soppresso)',
'text': ""
},
{
'id': 174,
'title': 'Articolo 174 : Ordine di votazione degli emendamenti',
'text': "1.   Gli emendamenti hanno la precedenza sul testo cui si riferiscono e sono posti in votazione prima di quest'ultimo.\
\
2.   Se due o più emendamenti che si escludono a vicenda concernono la stessa parte di testo, quello che si allontana di più dal testo di base ha la precedenza e deve essere posto in votazione per primo. La sua approvazione determina la reiezione degli altri emendamenti. Se esso è respinto, è posto in votazione l\'emendamento che viene così ad avere la precedenza e la stessa procedura è ripetuta per ognuno degli emendamenti successivi. In caso di dubbio sulla precedenza, il Presidente decide. Qualora tutti gli emendamenti siano respinti, il testo originale è considerato approvato a meno che, entro il termine specificato, non sia stata richiesta una votazione distinta.\
\
3.   Tuttavia, se ritiene che ciò possa facilitare la votazione, il Presidente può porre dapprima in votazione il testo di base o mettere ai voti un emendamento che si allontani di meno dal testo di base prima di quello che maggiormente se ne discosta.\
\
Se uno di questi testi è approvato, tutti gli altri emendamenti presentati sulla stessa parte di testo decadono.\
\
4.   Qualora siano posti in votazione emendamenti di compromesso, su di essi si vota prioritariamente.\
\
5.   Per una votazione su un emendamento di compromesso non è consentita la votazione per parti separate.\
\
6.   Qualora la commissione competente abbia presentato una serie di emendamenti a un testo che forma oggetto della relazione, il Presidente li pone in votazione in blocco, a meno che, su punti specifici, un gruppo politico o un numero di deputati pari almeno alla soglia bassa non abbiano chiesto una votazione distinta o per parti separate, o a meno che non siano stati presentati altri emendamenti concorrenti.\
\
7.   Il Presidente può porre in votazione altri emendamenti in blocco qualora essi siano complementari, a meno che un gruppo politico o un numero di deputati pari almeno alla soglia bassa non abbiano chiesto una votazione distinta o per parti separate. Anche gli autori di emendamenti complementari possono proporne la votazione in blocco.\
\
8.   Il Presidente può decidere, a seguito dell\'approvazione o della reiezione di uno specifico emendamento, che altri emendamenti simili per contenuto o per obiettivo siano posti in votazione in blocco. Il Presidente può chiedere l\'accordo del Parlamento prima di procedere.\
\
Una tale serie di emendamenti può riferirsi a parti diverse del testo originale.\
\
9.   Qualora autori diversi presentino due o più emendamenti identici, questi ultimi sono posti in votazione come un unico emendamento.\
\
10.   Sugli emendamenti per i quali è richiesta la votazione per appello nominale si vota singolarmente."
},
{
'id': 175,
'title': 'Articolo 175 : Selezione in commissione degli emendamenti presentati per la votazione in Aula',
'text': "Qualora gli emendamenti o le richieste di votazione distinta o per parti separate concernenti un testo presentato da una commissione che dovrà essere esaminato in Aula siano più di cinquanta, il Presidente, dopo aver consultato il presidente di tale commissione, può chiedere a quest'ultima di riunirsi per votare ciascuno di detti emendamenti o richieste. Gli emendamenti o le richieste di votazione distinta o per parti separate che in questa fase non ricevano il voto favorevole di almeno un terzo dei deputati che compongono la commissione non sono posti in votazione in Aula."
},
{
'id': 176,
'title': 'Articolo 176 : Votazione per parti separate',
'text': "1.   Qualora il testo da porre in votazione contenga più disposizioni o si riferisca a più argomenti o sia suscettibile di essere distinto in più parti aventi un proprio significato e/o un proprio valore normativo, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono chiedere la votazione per parti separate.\
\
2.   La richiesta deve essere presentata al più tardi la sera precedente la votazione, a meno che il Presidente non fissi un'altra scadenza. Il Presidente decide in ordine a tale richiesta."
},
{
'id': 177,
'title': 'Articolo 177 : Diritto di voto',
'text': "Il diritto di voto è personale.\
\
I deputati esprimono il loro voto individualmente e personalmente.\
\
Ogni infrazione del presente articolo è considerata come grave turbativa della seduta, ai sensi dell\'articolo 166, paragrafo 1, e comporta le conseguenze giuridiche di cui è fatta menzione in detto articolo."
},
{
'id': 178,
'title': 'Articolo 178 : Votazione',
'text': "1.   Il Parlamento vota di norma per alzata di mano.\
\
Tuttavia, il Presidente può decidere in qualsiasi momento il ricorso al sistema di votazione elettronico.\
\
2.   Il Presidente dichiara l\'apertura e la chiusura di ogni singola votazione.\
\
Dopo che il Presidente ha dichiarato aperta la votazione non è ammesso alcun intervento, se non da parte del Presidente stesso, fino a che quest'ultimo abbia dichiarato chiusa la votazione.\
\
3.   Per l\'approvazione o la reiezione di un testo entrano nel calcolo dei voti espressi soltanto i voti a favore e contro, salvo nei casi per i quali i trattati prevedano una maggioranza specifica.\
\
4.   Qualora il Presidente decida che il risultato di una votazione per alzata di mano è incerto, si procede alla votazione elettronica e, in caso di guasto del dispositivo elettronico di voto, per alzata e seduta.\
\
5.   Il computo dei voti è constatato dal Presidente, che proclama il risultato della votazione.\
\
6.   Il risultato della votazione è registrato."
},
{
'id': 179,
'title': 'Articolo 179 : Votazione finale',
'text': "Quando decide sulla base di una relazione, il Parlamento procede a qualsiasi votazione unica e/o finale ricorrendo al voto per appello nominale in conformità dell\'articolo 180, paragrafo 3.\
\
Le disposizioni di cui all\'articolo 179 sulla votazione per appello nominale non si applicano alle relazioni di cui all\'articolo 8, paragrafo 2, e all\'articolo 9, paragrafi 4, 7 e 9, nel quadro delle procedure in materia di immunità di un deputato.\
\
Articolo 179 bis : Parità di voti\
\
1.   In caso di parità di voti in una votazione a norma dell\'articolo 171, paragrafo 1, lettere b) o d), l\'insieme del testo è rinviato alla commissione. Tale procedura si applica anche nel caso di votazioni a norma degli articoli 3 e 9.\
\
2.   In caso di parità di voti su un testo posto in votazione per parti separate a norma dell\'articolo 176, il testo si considera approvato.\
\
3.   In tutti gli altri casi di parità di voti, fatti salvi gli articoli che richiedono una maggioranza qualificata, il testo o la proposta sono respinti.\
\
L\'articolo 179 bis, paragrafo 3, deve essere interpretato nel senso che una situazione di parità di voti su una proposta di raccomandazione di non intervenire in un procedimento giurisdizionale dinanzi alla Corte di giustizia dell\'Unione europea, ai sensi dell\'articolo 141, paragrafo 4, non significhi l\'adozione di una raccomandazione in base alla quale il Parlamento dovrebbe intervenire in tale procedimento. In tal caso, si considera che la commissione competente non si sia espressa al riguardo.\
\
Il Presidente può prendere parte alle votazioni, ma il suo voto non è preponderante."
},
{
'id': 180,
'title': 'Articolo 180 : Votazione per appello nominale',
'text': "1.   Oltre ai casi previsti dal presente regolamento, la votazione per appello nominale ha luogo qualora un gruppo politico o un numero di deputati pari almeno alla soglia bassa lo chiedano per iscritto al più tardi la sera prima della votazione, a meno che il Presidente non fissi un'altra scadenza.\
\
Le disposizioni di cui all\'articolo 180 sulla votazione per appello nominale non si applicano alle relazioni di cui all\'articolo 8, paragrafo 2, e all\'articolo 9, paragrafi 4, 7 e 9, nel quadro delle procedure in materia di immunità di un deputato.\
\
2.   Ciascun gruppo politico può presentare non più di cento richieste di votazioni per appello nominale per tornata.\
\
3.   La votazione per appello nominale si svolge utilizzando il sistema di votazione elettronica.\
\
Qualora quest'ultimo non possa essere utilizzato per motivi tecnici, si può procedere all\'appello nominale per ordine alfabetico, cominciando con il nome del deputato estratto a sorte. Il Presidente è chiamato per ultimo a votare. Il voto viene espresso oralmente dicendo 'sì', 'no' o 'astensione'.\
\
4.   Il risultato della votazione è iscritto nel processo verbale della seduta secondo l'ordine alfabetico nominativo dei deputati elencati secondo il rispettivo gruppo politico, con l\'indicazione del voto espresso da ciascun deputato.\
\
Articolo 180 bis : Votazione a scrutinio segreto\
\
1.   Per le nomine, fatta salva l\'applicazione dell\'articolo 15, paragrafo 1, e dell\'articolo 204, paragrafo 2, primo comma, la votazione ha luogo a scrutinio segreto.\
\
Entrano nel calcolo dei voti espressi solamente le schede recanti i nomi di candidati di cui è stata presentata la candidatura.\
\
2.   La votazione ha inoltre luogo a scrutinio segreto nel caso in cui un numero di deputati o uno o più gruppi politici pari almeno alla soglia alta ne faccia richiesta. Tale richiesta deve essere presentata prima dell\'inizio della votazione.\
\
3.   Una richiesta di votazione a scrutinio segreto ha la precedenza rispetto a una richiesta di votazione per appello nominale.\
\
4.   Lo spoglio delle schede per ogni scrutinio segreto è effettuato da due a otto scrutatori estratti a sorte tra i deputati, salvo in caso di votazione elettronica.\
\
Per le votazioni di cui al paragrafo 1 i candidati non possono essere scrutatori.\
\
I nomi dei deputati che hanno partecipato a una votazione a scrutinio segreto sono pubblicati nel processo verbale della seduta nel corso della quale la votazione ha avuto luogo."
},
{
'id': 181,
'title': 'Articolo 181 : Ricorso al sistema di votazione elettronico',
'text': "1.   Le modalità tecniche di utilizzazione del sistema elettronico sono disciplinate da istruzioni dell\'Ufficio di presidenza.\
\
2.   A meno che non si tratti di una votazione per appello nominale, in caso di votazione mediante sistema elettronico, è registrato soltanto il risultato numerico della votazione.\
\
3.   Il Presidente può decidere in qualsiasi momento il ricorso al sistema di votazione elettronico per verificare una soglia."
},
{
'id': 182,
'title': 'Articolo 182 : (soppresso)',
'text': "Articolo 182 bis : Contestazione della votazione\
\
1.   I richiami al regolamento concernenti la validità di una votazione possono essere formulati dopo che il Presidente ne ha dichiarato la chiusura.\
\
2.   Dopo la proclamazione del risultato di una votazione per alzata di mano può essere chiesta la controprova. Essa ha luogo ricorrendo al sistema elettronico.\
\
3.   Sulla validità del risultato proclamato decide il Presidente. La sua decisione è inoppugnabile."
},
{
'id': 183,
'title': 'Articolo 183 : Dichiarazioni di voto',
'text': "1.   Allorché la votazione è conclusa, ogni deputato può rilasciare una dichiarazione orale di non oltre un minuto sulla votazione unica e/o finale in relazione a un punto sottoposto al Parlamento. Ciascun deputato non può rilasciare più di tre dichiarazioni di voto orali per tornata.\
\
I deputati possono rilasciare su tale votazione una dichiarazione di voto scritta di non oltre 200 parole. La dichiarazione è pubblicata sulla pagina dei deputati sul sito internet del Parlamento.\
\
Un gruppo politico può rilasciare una dichiarazione di durata non superiore a due minuti.\
\
Una richiesta di dichiarazione di voto non è più ricevibile dopo l\'inizio della prima dichiarazione sul primo punto.\
\
Sono ammesse dichiarazioni di voto sulla votazione unica e/o finale per qualsiasi punto sottoposto al Parlamento. Ai fini del presente articolo l\'espressione 'votazione finale' non si riferisce al tipo di votazione, ma all'ultima votazione su un punto qualsiasi.\
\
2.   Non sono ammesse dichiarazioni di voto nel caso di votazioni a scrutinio segreto o di votazioni su questioni procedurali.\
\
3.   Qualora un punto sia iscritto all\'ordine del giorno del Parlamento senza emendamenti o senza discussione, i deputati possono rilasciare solo dichiarazioni di voto scritte, conformemente al paragrafo 1.\
\
Le dichiarazioni di voto, orali o scritte, devono avere un nesso diretto con il punto sottoposto al Parlamento."
},
{
'id': 184,
'title': 'Articolo 184 : (soppresso)',
'text': "Articolo 184 bis : Richiamo al regolamento\
\
1.   La facoltà di parlare può essere concessa a un deputato per attirare l\'attenzione del Presidente sul mancato rispetto del regolamento. All'inizio del suo intervento il deputato deve indicare l\'articolo cui si riferisce.\
\
2.   Le richieste di intervento sul regolamento hanno la precedenza su ogni altra, così come sulle mozioni di procedura.\
\
3.   Il tempo di parola non può superare un minuto.\
\
4.   Sul richiamo al regolamento il Presidente decide immediatamente in conformità delle disposizioni del regolamento e comunica la sua decisione subito dopo il richiamo al regolamento. La decisione del Presidente non è soggetta a votazione.\
\
5.   In via eccezionale, e sempre che il rinvio della decisione non provochi l\'aggiornamento della discussione in corso, il Presidente può dichiarare che la sua decisione sarà comunicata successivamente, e comunque entro un termine non superiore alle 24 ore dal richiamo al regolamento. Egli può sottoporre la questione alla commissione competente.\
\
Una richiesta d'intervento per richiamo al regolamento deve riferirsi al punto in esame dell'ordine del giorno. Il Presidente può dar luogo ad una richiesta di intervento che riguardi un altro tema, ad un momento opportuno, per esempio non appena concluso l\'esame del punto dell'ordine del giorno in questione ovvero prima della sospensione della seduta."
},
{
'id': 185,
'title': 'Articolo 185 : Mozioni di procedura',
'text': "1.   Hanno precedenza su ogni altra le richieste di intervento per le mozioni di procedura aventi lo scopo di:\
\
(a)   porre una questione pregiudiziale (articolo 187),\
\
(b)   chiedere il rinvio in commissione (articolo 188),\
\
(c)   chiedere la chiusura della discussione (articolo 189),\
\
(d)   chiedere l\'aggiornamento della discussione o della votazione (articolo 190),\
\
(e)   chiedere la sospensione o la chiusura della seduta (articolo 191).\
\
Su tali mozioni possono unicamente intervenire, oltre all\'autore, un oratore contrario e il presidente o il relatore della commissione competente.\
\
2.   Il tempo di parola non può superare un minuto."
},
{
'id': 186,
'title': 'Articolo 186 : (soppresso)',
'text': ""
},
{
'id': 187,
'title': 'Articolo 187 : Questione pregiudiziale',
'text': "1.   All'apertura della discussione su un determinato punto dell'ordine del giorno, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono presentare una questione pregiudiziale volta a richiedere il rifiuto della discussione per motivi di irricevibilità del punto in questione. Tale richiesta è messa immediatamente ai voti.\
\
L'intenzione di presentare una siffatta questione pregiudiziale è notificata con almeno 24 ore di anticipo al Presidente, che ne informa immediatamente il Parlamento.\
\
2.   Nel caso in cui la proposta sia accolta, il Parlamento passa immediatamente al punto successivo dell'ordine del giorno."
},
{
'id': 188,
'title': 'Articolo 188 : Rinvio in commissione',
'text': "1.   Un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono chiedere il rinvio in commissione al momento della fissazione dell'ordine del giorno o prima dell\'apertura della discussione.\
\
L'intenzione di presentare una richiesta di rinvio in commissione è notificata con almeno 24 ore di anticipo al Presidente, che ne informa immediatamente il Parlamento.\
\
2.   Il rinvio in commissione può essere chiesto anche da un gruppo politico o da un numero di deputati pari almeno alla soglia bassa prima o durante la votazione. Tale richiesta è messa immediatamente ai voti.\
\
3.   La richiesta può essere presentata solo una volta in ciascuna di queste diverse fasi della procedura di cui ai paragrafi 1 e 2.\
\
4.   Il rinvio in commissione interrompe l\'esame del punto.\
\
5.   Il Parlamento può impartire alla commissione un termine entro il quale presentare le sue conclusioni."
},
{
'id': 189,
'title': 'Articolo 189 : Chiusura della discussione',
'text': "1.   La chiusura di una discussione può essere proposta dal Presidente o chiesta da un gruppo politico o da un numero di deputati pari almeno alla soglia bassa prima che sia esaurito l\'elenco degli oratori. La relativa votazione ha luogo immediatamente.\
\
2.   Nel caso in cui la proposta o la richiesta siano accolte, ha ancora facoltà di parlare un solo deputato per ogni gruppo non ancora intervenuto nella discussione.\
\
3.   Dopo gli interventi di cui al paragrafo 2, la discussione è chiusa e il Parlamento procede alla votazione sulla questione, a meno che non sia stato preventivamente fissato il momento della votazione.\
\
4.   Qualora la proposta o la richiesta siano respinte, non possono essere ripresentate durante la stessa discussione, salvo che dal Presidente."
},
{
'id': 190,
'title': 'Articolo 190 : Aggiornamento della discussione o della votazione',
'text': "1.   All'apertura della discussione su un determinato punto dell'ordine del giorno, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono proporre che la discussione sia aggiornata fino a un momento stabilito. Tale richiesta è messa immediatamente ai voti.\
\
L'intenzione di proporre l\'aggiornamento della discussione deve essere notificata con almeno 24 ore di anticipo al Presidente. Il Presidente informa immediatamente il Parlamento di tale notifica.\
\
2.   Nel caso in cui la proposta sia accolta, il Parlamento passa al punto successivo dell'ordine del giorno. La discussione oggetto dell\'aggiornamento deve essere ripresa al momento stabilito.\
\
3.   Nel caso in cui la proposta sia respinta, non può essere ripresentata nel corso della stessa tornata.\
\
4.   Prima o durante una votazione, un gruppo politico o un numero di deputati pari almeno alla soglia bassa possono presentare una richiesta di aggiornamento. Tale richiesta è messa immediatamente ai voti."
},
{
'id': 191,
'title': 'Articolo 191 : Sospensione o chiusura della seduta',
'text': "Nel corso di una discussione o di una votazione la seduta può essere sospesa o chiusa se lo decide il Parlamento su proposta del Presidente o su richiesta di uno o più gruppi politici o di un numero di deputati pari almeno alla soglia alta. La votazione sulla proposta o sulla richiesta ha luogo immediatamente.\
\
Qualora sia presentata una richiesta di sospensione o chiusura della seduta, la procedura di voto su tale richiesta deve essere avviata senza indebiti ritardi. È opportuno utilizzare i sistemi abitualmente usati per annunciare le votazioni in Aula e, conformemente alla prassi vigente, occorre dare ai deputati il tempo necessario per raggiungere l\'emiciclo.\
\
Pertanto, per analogia con l\'articolo 149 bis, paragrafo 2, secondo comma, se la richiesta è stata respinta, non può essere presentata una nuova richiesta dello stesso tipo durante la medesima giornata. Conformemente all\'articolo 164 bis, il Presidente ha facoltà di porre fine al ricorso eccessivo alla presentazione di richieste a norma del presente articolo."
},
{
'id': 192,
'title': 'Articolo 192 : Processo verbale',
'text': "1.   Il processo verbale di ogni seduta, che illustra nei dettagli i lavori, i nomi degli oratori e le decisioni del Parlamento, incluso il risultato delle votazioni sugli emendamenti, è messo a disposizione almeno mezz'ora prima dell\'inizio della parte pomeridiana della seduta successiva.\
\
2.   Un elenco dei documenti sulla base dei quali il Parlamento discute e si pronuncia è pubblicato nel processo verbale.\
\
3.   Quando il processo verbale è oggetto di contestazione, il Parlamento decide, se del caso, circa la presa in considerazione delle modifiche richieste. Nessun deputato può intervenire sul tema per più di un minuto.\
\
4.   Quando il processo verbale è oggetto di contestazione, il Parlamento decide, se del caso, circa la presa in considerazione delle modifiche richieste. Nessun deputato può intervenire sul tema per più di un minuto.\
\
5.   Il processo verbale, munito delle firme del Presidente e del Segretario generale, è depositato negli archivi del Parlamento. Esso è pubblicato nella Gazzetta ufficiale dell\'Unione europea."
},
{
'id': 193,
'title': 'Articolo 193 : Testi approvati',
'text': "1.   I testi approvati dal Parlamento sono pubblicati immediatamente dopo la votazione. Essi sono presentati al Parlamento unitamente al processo verbale della rispettiva seduta e sono conservati negli archivi del Parlamento.\
\
2.   I testi approvati dal Parlamento sono oggetto di una messa a punto giuridico-linguistica sotto la responsabilità del Presidente. Qualora i testi in questione siano approvati in base ad un accordo raggiunto tra il Parlamento e il Consiglio, tale messa a punto è effettuata da tali due istituzioni in stretta cooperazione e di comune accordo.\
\
3.   Si applica la procedura di cui all’articolo 231 qualora, onde garantire la coerenza e la qualità del testo conformemente alla volontà espressa dal Parlamento, siano necessari adeguamenti che vadano al di là della correzione di errori tipografici o delle correzioni necessarie per assicurare la concordanza di tutte le versioni linguistiche, come pure la loro correttezza linguistica e coerenza terminologica.\
\
4.   Le posizioni approvate dal Parlamento ai sensi della procedura legislativa ordinaria si presentano sotto forma di un testo consolidato. Qualora la votazione in Parlamento non sia basata su un accordo con il Consiglio, il testo consolidato indica tutti gli emendamenti approvati.\
\
5.   Dopo la messa a punto, il Presidente e il Segretario generale appongono la firma in calce ai testi approvati, che sono pubblicati nella Gazzetta ufficiale dell\'Unione europea."
},
{
'id': 194,
'title': 'Articolo 194 : Resoconto integrale',
'text': "1.   Per ogni seduta è redatto un resoconto integrale delle discussioni nella forma di un documento multilingue in cui tutti i contributi orali figurano nella lingua originale ufficiale.\
\
2.   Il Presidente, fatti salvi gli altri suoi poteri disciplinari, può far espungere dal resoconto integrale gli interventi dei deputati che non hanno preliminarmente ottenuto la parola o che continuano a parlare oltre il tempo loro assegnato.\
\
3.   Gli oratori possono apportare correzioni al testo integrale dei loro contributi orali entro cinque giorni lavorativi. Le correzioni sono trasmesse al Segretariato entro tale termine.\
\
4.   Il resoconto integrale multilingue è pubblicato come allegato alla Gazzetta ufficiale dell\'Unione europea e conservato negli archivi del Parlamento.\
\
5.   Su richiesta di un deputato è effettuata la traduzione di un estratto del resoconto integrale in una qualsiasi lingua ufficiale. Se necessario, la traduzione è fornita in tempi brevi."
},
{
'id': 195,
'title': 'Articolo 195 : Registrazione audiovisiva delle discussioni',
'text': "1.   Le discussioni del Parlamento nelle lingue in cui si svolgono, come anche le registrazioni audiovisive multilingue provenienti da tutte le cabine di interpretazione attive sono trasmesse in tempo reale sul sito internet del Parlamento.\
\
2.   Dopo ogni seduta sono prodotte e rese immediatamente accessibili sul sito internet del Parlamento una registrazione audiovisiva indicizzata delle discussioni nelle lingue in cui si svolgono, come anche le audioregistrazioni multilingue provenienti da tutte le cabine di interpretazione attive. Le registrazioni rimangono accessibili per il resto della legislatura e durante quella successiva, dopo di che sono conservate negli archivi del Parlamento. La registrazione audiovisiva è collegata al resoconto integrale multilingue delle discussioni non appena quest'ultimo è reso disponibile."
},
{
'id': 196,
'title': 'Articolo 196 : Costituzione delle commissioni permanenti(1)',
'text': "Su proposta della Conferenza dei presidenti, il Parlamento costituisce commissioni permanenti. Le loro attribuzioni sono stabilite in un allegato al presente regolamento(2), adottato a maggioranza dei voti espressi. L'elezione dei membri delle commissioni ha luogo nel corso della prima tornata del Parlamento neoeletto e, di nuovo, dopo due anni e mezzo.\
\
Le attribuzioni delle commissioni permanenti possono essere anche stabilite in un momento diverso da quello della loro costituzione.\
\
\
(1)	Le modifiche all\'articolo 196 adottate il 13 dicembre 2016 (P8_TA(2016)0484), riguardanti la partecipazione alle commissioni, si applicano a decorrere dall'apertura della prima tornata dopo le elezioni del Parlamento, che si terranno nel 2019. Esse non sono pertanto riprodotte nella presente versione.\
(2)	Cfr. allegato V."
},
{
'id': 197,
'title': 'Articolo 197 : Commissioni speciali',
'text': "1.   Su proposta della Conferenza dei presidenti il Parlamento può in qualsiasi momento costituire commissioni speciali le cui attribuzioni, la cui composizione e il cui mandato sono fissati contemporaneamente alla decisione della loro costituzione(1).\
\
2.   Il mandato delle commissioni speciali non può superare i dodici mesi, a meno che il Parlamento non prolunghi questo periodo alla sua scadenza. Salvo ove diversamente stabilito nella decisione del Parlamento che costituisce la commissione speciale, il mandato di quest'ultima ha inizio alla data della sua riunione costitutiva.\
\
3.   Le commissioni speciali non sono titolate a formulare pareri destinati ad altre commissioni.\
\
\
(1)	Le modifiche all\'articolo 197, paragrafo 1, adottate il 13 dicembre 2016 (P8_TA(2016)0484), riguardanti la partecipazione alle commissioni, si applicano a decorrere dall'apertura della prima tornata dopo le elezioni del Parlamento, che si terranno nel 2019. Esse non sono pertanto riprodotte nella presente versione."
},
{
'id': 198,
'title': 'Articolo 198 : Commissioni di inchiesta',
'text': "1.   Conformemente all\'articolo 226 del trattato sul funzionamento dell\'Unione europea e all\'articolo 2 della decisione 95/167/CE, Euratom, CECA del Parlamento europeo, del Consiglio e della Commissione(1), il Parlamento può, su richiesta di un quarto dei suoi membri, costituire una commissione di inchiesta incaricata di esaminare le denunce di infrazione o di cattiva amministrazione nell\'applicazione del diritto dell\'Unione risultanti da atti di un\'istituzione o di un organo delle Comunità europee o di un'amministrazione pubblica di uno Stato membro o di persone cui la legislazione dell\'Unione conferisce il mandato di applicare quest'ultima.\
\
Non possono essere emendati né l'oggetto dell\'indagine quale definito da un quarto dei membri del Parlamento né il periodo fissato al paragrafo 11.\
\
2.   La decisione di costituire una commissione di inchiesta è pubblicata nella Gazzetta ufficiale dell\'Unione europea entro un mese dalla sua adozione.\
\
3.   Le modalità di funzionamento di una commissione di inchiesta sono disciplinate dalle disposizioni del regolamento applicabili alle commissioni, fatte salve le disposizioni particolari previste dal presente articolo e dalla decisione 95/167/CE, Euratom, CECA.\
\
4.   La richiesta di costituire una commissione di inchiesta deve contenere l\'indicazione precisa dell'oggetto dell\'indagine e includere una motivazione particolareggiata. Il Parlamento, su proposta della Conferenza dei presidenti, decide in merito alla costituzione della commissione e, qualora decida di costituirla, in merito alla sua composizione, in conformità dell\'articolo 199(2).\
\
5.   Le commissioni di inchiesta non sono titolate a formulare pareri destinati ad altre commissioni.\
\
6.   In qualsiasi fase dei lavori di una commissione di inchiesta, hanno diritto di voto soltanto i membri titolari o, in loro assenza, i membri supplenti.\
\
7.   La commissione di inchiesta elegge il proprio presidente e i vicepresidenti e nomina uno o più relatori. La commissione può inoltre affidare ai suoi membri missioni, incarichi specifici o deleghe, fermo restando che essi devono poi riferirle in modo circostanziato.\
\
8.   Nell'intervallo tra una riunione e l\'altra, i coordinatori esercitano, in casi di emergenza o necessità, i poteri della commissione, con riserva di ratifica nella sua riunione successiva.\
\
9.   Per quanto concerne l'uso delle lingue, la commissione di inchiesta si attiene all\'articolo 158. Tuttavia, l'ufficio di presidenza della commissione:\
\
-   può limitare l\'interpretazione alle lingue ufficiali dei membri della commissione partecipanti ai lavori, qualora lo ritenga necessario per ragioni di riservatezza;\
\
-   decide in merito alla traduzione dei documenti ricevuti in modo che la commissione possa portare avanti i propri lavori con efficienza e rapidità e siano rispettate la segretezza e la riservatezza del caso.\
\
10.   Qualora le denunce di infrazione o di cattiva amministrazione nell\'applicazione del diritto dell\'Unione suggeriscano eventuali responsabilità di un organo o di un'autorità di uno Stato membro, la commissione di inchiesta può chiedere al parlamento dello Stato membro interessato di collaborare all\'indagine.\
\
11.   La commissione di inchiesta conclude i propri lavori presentando al Parlamento una relazione sui risultati degli stessi entro un termine massimo di dodici mesi dalla sua riunione costitutiva. Per due volte il Parlamento può decidere di prorogare detto termine di altri tre mesi. Se del caso, la relazione può essere corredata di pareri di minoranza alle condizioni previste all\'articolo 52 bis. La relazione è pubblicata.\
\
Su richiesta della commissione di inchiesta, il Parlamento procede a una discussione su detta relazione nella tornata successiva alla presentazione della relazione stessa.\
\
12.   La commissione di inchiesta può altresì sottoporre al Parlamento un progetto di raccomandazione destinata a istituzioni od organi dell\'Unione europea o degli Stati membri.\
\
13.   Il Presidente del Parlamento incarica la commissione competente a norma dell\'allegato V del regolamento di verificare il seguito dato ai risultati dei lavori della commissione di inchiesta e, se del caso, di elaborare una relazione in merito. Egli prende tutte le altre disposizioni ritenute utili ai fini della concreta applicazione delle conclusioni delle inchieste.\
\
\
(1)	Decisione 95/167/CE, Euratom, CECA del Parlamento europeo, del Consiglio e della Commissione, del 19 aprile 1995, relativa alle modalità per l\'esercizio del diritto di inchiesta del Parlamento europeo (GU L 113 del 19.5.1995, pag. 1.).\
(2)	Le modifiche all\'articolo 198, paragrafo 3 (attuale articolo 198, paragrafo 4), adottate il 13 dicembre 2016 (P8_TA(2016)0484), riguardanti la partecipazione alle commissioni, si applicano a decorrere dall'apertura della prima tornata dopo le elezioni del Parlamento, che si terranno nel 2019. Esse non sono pertanto riprodotte nella presente versione."
},
{
'id': 199,
'title': 'Articolo 199 : Composizione delle commissioni(1)',
'text': "1.   L'elezione dei membri delle commissioni e delle commissioni di inchiesta ha luogo su designazione da parte dei gruppi e dei deputati non iscritti. La Conferenza dei presidenti presenta proposte al Parlamento. La composizione delle commissioni riflette per quanto possibile la composizione del Parlamento.\
\
Il deputato che passi a un altro gruppo politico mantiene per la durata restante della carica di due anni e mezzo i seggi occupati nelle commissioni parlamentari. Tuttavia, se a seguito del passaggio di un deputato a un altro gruppo l\'equa rappresentanza degli orientamenti politici nell\'ambito di una commissione risulta alterata, la Conferenza dei presidenti deve presentare nuove proposte per la composizione di tale commissione, conformemente alla procedura di cui al paragrafo 1, seconda frase, fatti salvi i diritti del deputato in questione.\
\
La ripartizione proporzionale tra i gruppi politici dei seggi in seno ad una commissione non deve discostarsi dal numero intero più appropriato. Se un gruppo decide di non occupare seggi in seno a una commissione, i seggi in questione restano vacanti e le dimensioni della commissione sono ridotte del numero corrispondente. Non è ammesso lo scambio di seggi tra i gruppi politici.\
\
2.   Ogni emendamento alle proposte della Conferenza dei presidenti deve essere presentato, per essere ricevibile, da almeno quaranta deputati. Il Parlamento si pronuncia su tali emendamenti mediante scrutinio segreto.\
\
3.   Sono considerati eletti i deputati figuranti nelle proposte della Conferenza dei presidenti nella forma eventualmente modificata sulla base del paragrafo 2.\
\
4.   Qualora un gruppo politico ometta di presentare candidati per una commissione di inchiesta, conformemente al paragrafo 1, entro la scadenza fissata dalla Conferenza dei presidenti, quest'ultima sottopone alla ratifica dell\'Assemblea soltanto i nomi notificatile entro tale scadenza.\
\
5.   La sostituzione dei membri delle commissioni, allorché si siano resi vacanti dei seggi, può essere decisa provvisoriamente dalla Conferenza dei presidenti, d'accordo con i deputati da designare e tenuto conto delle disposizioni di cui al paragrafo 1.\
\
6.   Tali modifiche sono sottoposte alla ratifica del Parlamento nella seduta successiva.\
\
\
(1)	Le modifiche all\'articolo 199 adottate il 13 dicembre 2016 (P8_TA(2016)0484) entrano in vigore all\'apertura della prima tornata dopo le prossime elezioni del Parlamento, che si terranno nel 2019. Esse non sono pertanto riprodotte nella presente versione."
},
{
'id': 200,
'title': 'Articolo 200 : Membri supplenti(1)',
'text': "1.   I gruppi politici e i deputati non iscritti possono designare per ciascuna commissione un numero di supplenti permanenti pari al numero dei membri titolari che rappresentano i gruppi (e i deputati non iscritti) in seno alla commissione. Il Presidente ne deve essere informato. I supplenti permanenti hanno diritto a partecipare alle riunioni della commissione, a prendervi la parola e, in caso di assenza del membro titolare, a partecipare alla votazione.\
\
In caso di vacanza del seggio del membro titolare di una commissione, ha diritto a partecipare alla votazione in sua vece e a titolo temporaneo un membro supplente dello stesso gruppo politico, fino alla sostituzione provvisoria del membro titolare in conformità dell\'articolo 199, paragrafo 5, o, in mancanza di tale sostituzione provvisoria, fino alla nomina di un nuovo membro titolare. Tale diritto si basa sulla decisione del Parlamento relativa alla composizione numerica della commissione e mira a garantire che possa partecipare alla votazione un numero di membri del gruppo politico interessato pari a quello esistente prima della vacanza del seggio.\
\
2.   Il membro titolare di una commissione può, in caso di assenza e qualora non siano stati nominati supplenti permanenti o qualora questi ultimi siano a loro volta assenti, farsi sostituire nelle riunioni da un altro membro dello stesso gruppo politico con diritto di voto. Il nome di questo sostituto deve essere comunicato al presidente della commissione interessata prima dell\'inizio della votazione.\
\
Il paragrafo 2 si applica, mutatis mutandis, ai deputati non iscritti.\
\
La comunicazione preventiva prevista all'ultima frase del paragrafo 2, ultima frase, deve essere effettuata prima che abbia termine la discussione o prima che abbia inizio la votazione sul punto o sui punti per i quali il titolare si è fatto sostituire.\
\
*\
*        *\
Il disposto del presente articolo si articola intorno a due elementi chiaramente fissati da detto testo:\
\
-   un gruppo politico non può avere in una commissione un numero di membri sostituti permanenti superiore a quello dei membri titolari;\
\
-   soltanto i gruppi politici hanno la facoltà di designare membri sostituti permanenti, alla sola condizione di informarne il Presidente.\
\
In conclusione:\
\
-   la qualità di sostituto permanente dipende unicamente dall'appartenenza a un gruppo determinato;\
\
-   quando viene modificato il numero di membri titolari di cui un gruppo politico dispone in una commissione, il numero massimo di membri sostituti permanenti che tale gruppo può designare subisce la medesima modifica;\
\
-   quando un membro cambia di gruppo politico, non può conservare il mandato di sostituto permanente assegnatogli dal suo gruppo d'origine;\
\
-   in nessun caso il membro di una commissione può essere sostituto di un collega appartenente a un altro gruppo politico.\
\
\
(1)	La soppressione dell\'articolo 200 decisa il 13 dicembre 2016 (P8_TA(2016)0484) entra in vigore all\'apertura della prima tornata dopo le elezioni del Parlamento che si terranno nel 2019. Tale articolo è pertanto riprodotto nella presente versione."
},
{
'id': 201,
'title': 'Articolo 201 : Attribuzioni delle commissioni',
'text': "1.   Le commissioni permanenti hanno il compito di esaminare le questioni che sono loro sottoposte dal Parlamento ovvero, durante un\'interruzione della sessione, dal Presidente a nome della Conferenza dei presidenti.\
\
2.   Se più commissioni permanenti sono competenti per una stessa questione, si designa una commissione competente per il merito e le altre competenti per parere.\
\
Nondimeno, le commissioni cui è stata simultaneamente sottoposta una questione non possono superare il numero di tre, a meno che non venga decisa una deroga a tale norma alle condizioni previste al paragrafo 1.\
\
3.   Due o più commissioni o sottocommissioni possono procedere in comune all\'esame di questioni di loro competenza, senza però poter prendere una decisione congiuntamente, tranne nei casi in cui si applica l\'articolo 55.\
\
4.   Previo accordo degli organi competenti del Parlamento, ogni commissione può incaricare uno o più dei suoi membri di procedere a una missione di studio o di informazione.\
\
Articolo 201 bis : Questioni di competenza\
\
1.   Nel caso in cui una commissione permanente si dichiari incompetente a esaminare un punto, o nel caso in cui sorga un conflitto di competenza fra due o più commissioni permanenti, la questione della competenza è sottoposta alla Conferenza dei presidenti di commissione entro quattro settimane dalla comunicazione in Aula del deferimento alla commissione.\
\
2.   La Conferenza dei presidenti adotta una decisione entro sei settimane dalla data in cui le viene sottoposta la questione sulla base di una raccomandazione formulata dalla Conferenza dei presidenti di commissione o, in assenza di questa, dal presidente di quest'ultima. Se entro detto termine la Conferenza dei presidenti non ha preso una decisione, la raccomandazione si considera approvata.\
\
3.   I presidenti di commissione possono stringere accordi con altri presidenti di commissione per quanto riguarda l\'assegnazione di un argomento a una determinata commissione, fatta salva, ove necessario, l\'autorizzazione di una procedura con le commissioni associate di cui all\'articolo 54."
},
{
'id': 202,
'title': 'Articolo 202 : (soppresso)',
'text': ""
},
{
'id': 203,
'title': 'Articolo 203 : Sottocommissioni',
'text': "1.   Le sottocommissioni possono essere costituite a norma dell\'articolo 196. Inoltre, ogni commissione permanente o speciale può nominare nel proprio ambito, nell'interesse dei suoi lavori e su autorizzazione preventiva della Conferenza dei presidenti, una o più sottocommissioni, determinandone la composizione ai sensi delle pertinenti disposizioni dell\'articolo 199, e la competenza, che ricade entro gli ambiti di competenza della commissione principale. Le sottocommissioni riferiscono alla rispettiva commissione principale.\
\
2.   Salvo diversamente specificato nel presente regolamento, la procedura seguita per le commissioni si applica alle sottocommissioni.\
\
3.   I membri titolari di una sottocommissione sono scelti tra i membri della commissione principale.\
\
4.   I sostituti sono ammessi alle riunioni delle sottocommissioni alle stesse condizioni stabilite per le riunioni delle commissioni.\
\
5.   Il presidente della commissione principale può associare i presidenti delle sottocommissioni ai lavori dei coordinatori o permettere loro di presiedere, in seno alla commissione principale, i dibattiti concernenti questioni trattate nello specifico dalla sottocommissione, a condizione che tale modo di procedere sia sottoposto all\'attenzione dell'ufficio di presidenza della commissione per esame e approvazione."
},
{
'id': 204,
'title': 'Articolo 204 : Uffici di presidenza delle commissioni',
'text': "1.   Nella prima riunione di una commissione successiva alla nomina dei suoi membri in conformità dell\'articolo 199 la commissione elegge tra i suoi membri titolari un presidente e, in scrutini separati, i vicepresidenti, che insieme costituiscono l'ufficio di presidenza della commissione. Il numero di vicepresidenti da eleggere è determinato dal Parlamento su proposta della Conferenza dei presidenti. La diversità del Parlamento deve riflettersi nella composizione dell'ufficio di presidenza di ciascuna commissione; non è ammesso che l'ufficio di presidenza sia esclusivamente maschile o femminile né che tutti i vicepresidenti siano originari dello stesso Stato membro.\
\
2.   Quando il numero dei candidati corrisponde al numero dei seggi da assegnare, l\'elezione avviene per acclamazione. Tuttavia, in caso di più candidature a un determinato turno, o se un numero di deputati o uno o più gruppi politici pari almeno alla soglia alta in commissione ha richiesto la votazione, l\'elezione ha luogo a scrutinio segreto.\
\
In caso di candidatura unica l\'elezione ha luogo a maggioranza assoluta dei suffragi espressi, favorevoli e contrari.\
\
In caso di più candidature l\'elezione ha luogo a maggioranza assoluta dei suffragi espressi al primo turno. Al secondo turno, è eletto il candidato che ottiene il maggior numero di voti. In caso di parità, è eletto il candidato più anziano.\
\
3.   Si applicano mutatis mutandis alle commissioni i seguenti articoli relativi alle cariche: articolo 14 (Presidente pro tempore), articolo 15 (Candidature e disposizioni generali), articolo 16 (Elezione del Presidente - allocuzione inaugurale), articolo 19 (Durata delle cariche) e articolo 20 (Vacanza)."
},
{
'id': 205,
'title': 'Articolo 205 : Coordinatori di commissione',
'text': "1.   I gruppi politici possono designare in ogni commissione uno dei loro membri come coordinatore.\
\
2.   Una riunione dei coordinatori di commissione è convocata, se necessario, dal presidente della commissione per preparare le decisioni che quest'ultima dovrà adottare, segnatamente quelle relative alla procedura e alla nomina dei relatori. La commissione può delegare ai coordinatori il potere di adottare talune decisioni, ad eccezione di quelle relative all\'approvazione di relazioni, proposte di risoluzione, pareri o emendamenti.\
\
I vicepresidenti possono essere invitati a partecipare alle riunioni dei coordinatori di commissione a titolo consultivo.\
\
Quando non sia possibile raggiungere un consenso, i coordinatori possono decidere soltanto se dispongono di una maggioranza chiaramente rappresentativa di un'ampia maggioranza dei membri della commissione, tenendo conto delle rispettive dimensioni dei vari gruppi politici.\
\
Il presidente comunica alla commissione tutte le decisioni e le raccomandazioni dei coordinatori, che si considerano approvate in assenza di contestazioni e che sono debitamente menzionate nel processo verbale della riunione della commissione.\
\
I deputati non iscritti non costituiscono un gruppo politico ai sensi dell\'articolo 32 e non possono dunque nominare dei coordinatori, i quali sono i soli membri che possono partecipare di diritto alle riunioni dei coordinatori.\
\
In ogni caso, occorre garantire il diritto di accesso all\'informazione dei deputati non iscritti nel rispetto del principio di non discriminazione, mediante la trasmissione di informazioni e la presenza di un membro della segreteria dei deputati non iscritti alle riunioni dei coordinatori.\
\
Articolo 205 bis : Relatori ombra\
\
I gruppi politici possono nominare, per ogni relazione, un relatore ombra per seguire i progressi della relazione in questione e trovare compromessi in seno alla commissione, a nome del gruppo. I loro nominativi sono comunicati al presidente della commissione."
},
{
'id': 206,
'title': 'Articolo 206 : Riunioni delle commissioni',
'text': "1.   Le commissioni si riuniscono su convocazione del loro presidente o per iniziativa del Presidente del Parlamento.\
\
Quando convoca la riunione, il presidente presenta un progetto di ordine del giorno. La commissione si pronuncia sull'ordine del giorno all\'inizio della riunione.\
\
2.   La Commissione, il Consiglio e le altre istituzioni dell\'Unione possono prendere la parola alle riunioni di commissione, su invito del presidente fatto a nome della commissione stessa.\
\
Altre persone possono essere invitate, con decisione della commissione, ad assistere a una riunione e a prendervi la parola.\
\
La commissione competente può organizzare, previa approvazione da parte dell\'Ufficio di presidenza, un'audizione di esperti quando lo ritenga indispensabile per condurre i propri lavori in modo efficace su una determinata questione.\
\
3.   Fatta salva l\'applicazione dell\'articolo 53, paragrafo 8, e salvo decisione contraria della commissione, i deputati che assistono alle riunioni delle commissioni di cui non fanno parte non possono partecipare alle deliberazioni.\
\
Essi possono essere tuttavia autorizzati dalla commissione a partecipare alle sue riunioni in veste consultiva.\
\
4.   L\'articolo 162, paragrafo 2, sulla ripartizione del tempo di parola si applica mutatis mutandis alle commissioni.\
\
5.   Quando è redatto un resoconto integrale, l\'articolo 194, paragrafi 2, 3 e 5, si applica mutatis mutandis."
},
{
'id': 207,
'title': 'Articolo 207 : Processo verbale delle riunioni delle commissioni',
'text': "Il processo verbale di ogni riunione di commissione è messo a disposizione di tutti i membri della commissione e sottoposto all\'approvazione di questa."
},
{
'id': 208,
'title': 'Articolo 208 : Voto in sede di commissione',
'text': "1.   Fatte salve le disposizioni dell\'articolo 66, paragrafo 3, relative alla seconda lettura, gli emendamenti o i progetti di proposte di reiezione presentati affinché siano esaminati in commissione sono sempre firmati da un membro titolare o da un membro supplente della commissione interessata, oppure cofirmati da almeno uno di tali membri.\
\
2.   Una commissione può validamente votare se un quarto dei membri che la compongono è effettivamente presente. Quando, tuttavia, un numero di deputati o uno o più gruppi politici pari almeno alla soglia alta in commissione lo richieda prima dell\'apertura della votazione, questa è valida soltanto se il numero dei votanti raggiunge la maggioranza dei suoi membri.\
\
3.   Ogni votazione unica e/o finale in commissione su una relazione o un parere si svolge per appello nominale in conformità dell\'articolo 180, paragrafi 3 e 4. La votazione sugli emendamenti e le altre votazioni si svolgono per alzata di mano, a meno che il presidente non decida di procedere a una votazione mediante sistema elettronico o un numero di deputati o uno o più gruppi politici pari almeno alla soglia alta in commissione non richieda una votazione per appello nominale.\
\
Le disposizioni di cui all\'articolo 208, paragrafo 3, sulla votazione per appello nominale non si applicano alle relazioni di cui all\'articolo 8, paragrafo 2, e all\'articolo 9, paragrafi 4, 7 e 9, nel quadro delle procedure in materia di immunità di un deputato.\
\
4.   Alla luce degli emendamenti presentati, la commissione, invece di procedere alla votazione, può chiedere al relatore di presentare un nuovo progetto che tenga conto del più gran numero di emendamenti possibile. In tal caso è fissata una nuova scadenza per gli emendamenti."
},
{
'id': 209,
'title': 'Articolo 209 : Disposizioni concernenti la seduta plenaria applicabili in commissione',
'text': "I seguenti articoli relativi alle votazioni e agli interventi sulla procedura si applicano mutatis mutandis alle commissioni: articolo 164 bis (Prevenzione di comportamenti ostruzionistici), articolo 168 bis (Soglie), articolo 169 (Presentazione ed enunciazione degli emendamenti), articolo 170 (Ricevibilità degli emendamenti), articolo 171 (Procedura di votazione), articolo 174 (Ordine di votazione degli emendamenti), articolo 176, paragrafo 1 (Votazione per parti separate), articolo 177 (Diritto di voto), articolo 178 (Votazione), articolo 179 bis (Parità di voti), articolo 180, paragrafi 3 e 4 (Votazione per appello nominale), articolo 180 bis (Votazione a scrutinio segreto), articolo 181 (Ricorso al sistema di votazione elettronico), articolo 182 bis (Contestazione della votazione), articolo 184 bis (Richiamo al regolamento), articolo 190 (Aggiornamento della discussione o della votazione) e articolo 191 (Sospensione o chiusura della seduta)."
},
{
'id': 210,
'title': 'Articolo 210 : Tempo delle interrogazioni in commissione',
'text': "Una commissione può decidere di riservare tempo alle interrogazioni. La commissione stessa fissa le norme per lo svolgimento di tale tempo riservato alle interrogazioni.\
\
Articolo 210 bis : Procedura da applicare per la consultazione da parte di una commissione delle informazioni confidenziali ricevute dal Parlamento\
\
1.   Quando il Parlamento ha l'obbligo giuridico di trattare le informazioni ricevute come informazioni confidenziali, il presidente della commissione competente applica d\'ufficio la procedura di trattamento confidenziale prevista al paragrafo 3.\
\
2.   Fatto salvo il paragrafo 1, in assenza dell'obbligo giuridico di trattare le informazioni ricevute come informazioni confidenziali, qualsiasi commissione può, di sua iniziativa, applicare la procedura di trattamento confidenziale di cui al paragrafo 3 a un\'informazione o a un documento indicati da uno dei suoi membri mediante una richiesta scritta od orale. In tal caso, per l\'adozione di una decisione circa l\'applicazione della procedura di trattamento confidenziale è necessario il voto della maggioranza dei due terzi dei membri presenti.\
\
3.   Una volta che il presidente della commissione abbia disposto l\'applicazione della procedura di trattamento confidenziale, assistono alla riunione soltanto i membri della commissione nonché i funzionari e gli esperti precedentemente designati dal presidente, limitati allo stretto necessario.\
\
I documenti sono distribuiti all\'inizio della riunione e raccolti al termine di quest'ultima. Essi sono numerati. Non si possono prendere appunti né fare fotocopie.\
\
Il processo verbale della riunione non fornisce alcun dettaglio dell\'esame del punto trattato secondo la procedura confidenziale. Soltanto la decisione, qualora venga presa, può figurare nel processo verbale.\
\
4.   L'esame di casi di violazione del segreto può essere richiesto da un numero di deputati o uno o più gruppi politici pari almeno alla soglia media nella commissione che ha avviato la procedura di trattamento confidenziale. Tale richiesta può essere iscritta all\'ordine del giorno della riunione di commissione successiva. A maggioranza dei suoi membri, la commissione può decidere di sottoporre la questione al Presidente per un ulteriore esame a norma degli articoli 11 e 166."
},
{
'id': 211,
'title': 'Articolo 211 : Audizioni pubbliche relative alle iniziative dei cittadini',
'text': "1.   Allorché la Commissione ha pubblicato nel registro previsto a tal fine un\'iniziativa dei cittadini a norma dell\'articolo 10, paragrafo 1, lettera a), del regolamento (UE) n. 211/2011 del Parlamento europeo e del Consiglio(1), il Presidente del Parlamento, su proposta del presidente della Conferenza dei presidenti di commissione:\
\
(a)   incarica la commissione competente per il merito, ai sensi dell\'allegato V, di organizzare l\'audizione pubblica di cui all\'articolo 11 del regolamento (UE) n. 211/2011; la commissione competente per le petizioni è automaticamente associata ai sensi dell\'articolo 54 del presente regolamento;\
\
(b)   può, qualora due o più iniziative dei cittadini pubblicate nel registro previsto a tal fine a norma dell\'articolo 10, paragrafo 1, lettera a), del regolamento (UE) n. 211/2011 vertano su una questione analoga, decidere, previa consultazione degli organizzatori, di organizzare un'audizione pubblica congiunta in cui siano affrontate, in modo paritario, tutte le iniziative dei cittadini interessate.\
\
2.   La commissione competente per il merito:\
\
(a)   valuta se la Commissione ha ricevuto gli organizzatori a un livello appropriato, a norma dell\'articolo 10, paragrafo 1, lettera b), del regolamento (UE) n. 211/2011;\
\
(b)   assicura, se necessario con il sostegno della Conferenza dei presidenti di commissione, che la Commissione sia debitamente coinvolta nell'organizzazione dell\'audizione pubblica e che, in tale occasione, sia rappresentata a livello appropriato.\
\
3.   Il presidente della commissione competente per il merito convoca l\'audizione pubblica in una data appropriata entro tre mesi dalla presentazione dell\'iniziativa alla Commissione a norma dell\'articolo 9 del regolamento (UE) n. 211/2011.\
\
4.   La commissione competente per il merito organizza l\'audizione pubblica in Parlamento, se del caso congiuntamente ad altre istituzioni e organi dell\'Unione europea che desiderino parteciparvi. Essa può invitare altre parti interessate a partecipare.\
\
La commissione competente per il merito invita un gruppo di rappresentanti degli organizzatori, che includa come minimo una delle persone di contatto di cui all\'articolo 3, paragrafo 2, secondo comma, del regolamento (UE) n. 211/2011, per presentare l\'iniziativa nell\'ambito dell\'audizione.\
\
5.   L'Ufficio di presidenza approva, secondo le modalità concordate con la Commissione, la regolamentazione relativa al rimborso delle spese sostenute.\
\
6.   Il Presidente del Parlamento e il presidente della Conferenza dei presidenti di commissione possono delegare i poteri loro conferiti a norma del presente articolo rispettivamente a un vicepresidente o a un altro presidente di commissione.\
\
7.   Se sono soddisfatte le condizioni di cui all\'articolo 54 o 55, dette disposizioni si applicano, mutatis mutandis, anche ad altre commissioni. Si applicano altresì gli articoli 201 e 201 bis.\
\
L\'articolo 25, paragrafo 9, non si applica alle audizioni pubbliche relative alle iniziative dei cittadini.\
\
8.   Qualora la Commissione non dovesse presentare una proposta di atto legislativo su un\'iniziativa dei cittadini che le era stata correttamente presentata a norma dell\'articolo 9 del regolamento (UE) n. 211/2011 entro un periodo di dodici mesi dalla formulazione di un parere favorevole all\'iniziativa e dall'indicazione in una comunicazione dell\'azione che intende intraprendere, la commissione competente per il merito può organizzare un'audizione in consultazione con gli organizzatori dell\'iniziativa dei cittadini e, ove necessario, avviare la procedura di cui all\'articolo 46 allo scopo di esercitare il diritto del Parlamento di chiedere alla Commissione di presentare una proposta adeguata.\
\
\
(1)	Regolamento (UE) n. 211/2011 del Parlamento europeo e del Consiglio, del 16 febbraio 2011, riguardante l\'iniziativa dei cittadini (GU L 65 dell'11.3.2011, pag. 1)."
},
{
'id': 212,
'title': 'Articolo 212 : Costituzione e attribuzioni delle delegazioni interparlamentari(1)',
'text': "1.   Su proposta della Conferenza dei presidenti, il Parlamento costituisce delegazioni interparlamentari permanenti e decide sulla loro natura e sul numero dei loro membri alla luce delle competenze loro affidate. L'elezione dei membri delle delegazioni ha luogo nel corso della prima o della seconda tornata del Parlamento neoeletto e vale per tutta la legislatura.\
\
2.   L'elezione dei membri delle delegazioni ha luogo dopo che i gruppi politici e i deputati non iscritti hanno presentato le candidature alla Conferenza dei presidenti. La Conferenza dei presidenti sottopone al Parlamento proposte che tengono conto, nella misura del possibile, di un'equa rappresentanza degli Stati membri e degli orientamenti politici. Si applica l\'articolo 199, paragrafi 2, 3, 5 e 6.\
\
3.   La costituzione degli uffici di presidenza delle delegazioni avviene secondo la procedura fissata per le commissioni permanenti in conformità dell\'articolo 204.\
\
4.   Il Parlamento stabilisce le competenze generali delle singole delegazioni. Esso può decidere in qualsiasi momento di ampliare o restringere tali competenze.\
\
5.   La Conferenza dei presidenti adotta, su proposta della Conferenza dei presidenti di delegazione, le norme di applicazione necessarie per le attività delle delegazioni.\
\
6.   Il presidente della delegazione riferisce periodicamente alla commissione competente per gli affari esteri in merito alle attività della delegazione.\
\
7.   Il presidente di una delegazione ha la possibilità di intervenire dinanzi a una commissione quando nell'ordine del giorno di quest'ultima figuri una questione rientrante nell\'ambito di competenza della delegazione. Ciò vale, in occasione delle riunioni di una delegazione, anche per il presidente o il relatore di tale commissione.\
\
\
(1)	Le modifiche agli articoli 212, paragrafi 1 e 2, adottate il 13 dicembre 2016 (P8_TA(2016)0484), entrano in vigore all\'apertura della prima tornata dopo le prossime elezioni del Parlamento, che si terranno nel 2019. Esse non sono pertanto riprodotte nella presente versione."
},
{
'id': 213,
'title': 'Articolo 213 : (soppresso)',
'text': ""
},
{
'id': 214,
'title': 'Articolo 214 : Commissioni parlamentari miste',
'text': "1.   Il Parlamento europeo può costituire commissioni parlamentari miste con i parlamenti di Stati associati all'Unione o di Stati con i quali l'Unione ha avviato negoziati in vista della loro adesione.\
\
Queste commissioni possono formulare raccomandazioni destinate ai parlamenti partecipanti. Nel caso del Parlamento europeo, tali raccomandazioni sono deferite alla commissione competente, che presenta proposte sul seguito da darvi.\
\
2.   Le competenze generali delle diverse commissioni parlamentari miste sono definite dal Parlamento europeo conformemente agli accordi con il paese terzo interessato.\
\
3.   Le commissioni parlamentari miste sono disciplinate dalle norme procedurali previste dal relativo accordo. Esse si fondano sulla parità fra la delegazione del Parlamento europeo e quella del parlamento omologo.\
\
4.   Le commissioni parlamentari miste adottano il proprio regolamento, che sottopongono per approvazione, in seno al Parlamento europeo, al suo Ufficio di presidenza e, in seno al parlamento omologo del paese terzo, al suo organo competente.\
\
5.   L'elezione dei membri delle delegazioni del Parlamento europeo alle commissioni parlamentari miste e la costituzione degli uffici di presidenza di dette delegazioni avvengono conformemente alla procedura vigente per le delegazioni interparlamentari.\
\
Articolo 214 bis : Cooperazione con l'Assemblea parlamentare del Consiglio d'Europa\
\
1.   Gli organi del Parlamento, e in particolare le commissioni, cooperano con i loro omologhi dell\'Assemblea parlamentare del Consiglio d'Europa nei settori di comune interesse, soprattutto allo scopo di migliorare l\'efficacia dei lavori e di evitare duplicazioni.\
\
2.   La Conferenza dei presidenti, d'intesa con le autorità competenti dell\'Assemblea parlamentare del Consiglio d'Europa, definisce le modalità di tale cooperazione."
},
{
'id': 215,
'title': 'Articolo 215 : Diritto di petizione',
'text': "1.   Conformemente all\'articolo 227 del trattato sul funzionamento dell\'Unione europea, qualsiasi cittadino dell\'Unione, o qualsiasi persona fisica o giuridica che risieda o abbia la sede sociale in uno Stato membro, ha il diritto di presentare, individualmente o in associazione con altri cittadini o persone, una petizione al Parlamento su una materia che rientra nel campo di attività dell\'Unione europea e che lo (la) concerna direttamente.\
\
2.   Le petizioni al Parlamento devono menzionare il nome e il domicilio di ciascuno dei firmatari.\
\
3.   Le osservazioni rivolte al Parlamento che non intendono chiaramente essere delle petizioni non sono registrate come tali; esse sono invece trasmesse senza indugio al servizio competente per il loro ulteriore trattamento.\
\
4.   Nel caso in cui una petizione sia firmata da più persone fisiche o giuridiche, i firmatari designano un rappresentante e rappresentanti supplenti che sono considerati i firmatari ai fini del presente titolo.\
\
Nel caso in cui tale designazione non abbia avuto luogo, è considerato autore della petizione il primo firmatario o altra persona idonea.\
\
5.   Ciascun firmatario può in qualunque momento ritirare la sua firma dalla petizione.\
\
Qualora tutti i firmatari dovessero ritirare la loro firma, la petizione diviene caduca.\
\
6.   Le petizioni devono essere redatte in una lingua ufficiale dell\'Unione europea.\
\
Le petizioni redatte in un'altra lingua sono prese in esame solo se il firmatario ha allegato una traduzione in una lingua ufficiale. Nella corrispondenza con il firmatario il Parlamento utilizza la lingua ufficiale in cui è redatta la traduzione.\
\
L'Ufficio di presidenza può decidere che le petizioni e la corrispondenza con i firmatari possano essere redatte in altre lingue che, in base all\'ordinamento costituzionale degli Stati membri interessati, sono lingue ufficiali in tutto il loro territorio o in parte di esso.\
\
7.   Le petizioni possono essere presentate per posta o tramite il portale delle petizioni, che è messo a disposizione sul sito internet del Parlamento e che guida il firmatario nella formulazione della petizione in modo da rispettare i paragrafi 1 e 2.\
\
8.   Qualora si ricevano più petizioni su una questione analoga, queste possono essere trattate congiuntamente.\
\
9.   Se soddisfano le condizioni di cui al paragrafo 2, le petizioni sono iscritte in un ruolo generale nell'ordine in cui sono pervenute. Le petizioni che non soddisfano tali condizioni sono archiviate e il motivo è comunicato ai firmatari.\
\
10.   Le petizioni iscritte nel ruolo generale sono deferite dal Presidente alla commissione competente per le petizioni, che deve stabilirne la ricevibilità in base all\'articolo 227 del trattato sul funzionamento dell\'Unione europea.\
\
Nel caso in cui la commissione non raggiunga un consenso sulla ricevibilità di una petizione, quest'ultima è dichiarata ricevibile su richiesta di almeno un terzo dei membri della commissione.\
\
11.   Le petizioni che siano state dichiarate irricevibili dalla commissione sono archiviate. I firmatari sono informati in merito alla decisione presa e ai motivi della stessa. Ove possibile, possono essere raccomandati mezzi di ricorso alternativi.\
\
12.   Una volta iscritte nel ruolo generale, le petizioni diventano documenti pubblici e il Parlamento, per ragioni di trasparenza, può pubblicare il nome del firmatario nonché dei cofirmatari e degli eventuali sostenitori, e il contenuto della petizione. Il firmatario, i cofirmatari e i sostenitori sono informati di conseguenza.\
\
13.   In deroga al paragrafo 12, il firmatario, un cofirmatario o un sostenitore può chiedere che il suo nome non sia reso noto, al fine di tutelare la sua vita privata. In tal caso il Parlamento è tenuto a soddisfare tale richiesta.\
\
Quando la denuncia del firmatario non può dar luogo ad indagini per ragioni di anonimato del firmatario, quest'ultimo è consultato sul seguito da dare.\
\
14.   Al fine di tutelare i diritti dei terzi, il Parlamento può, di sua iniziativa o su richiesta del terzo interessato, rendere anonima una petizione e/o gli altri dati ivi contenuti, se ritiene utile procedere in tal senso.\
\
15.   Le petizioni indirizzate al Parlamento da persone fisiche o giuridiche che non siano cittadini dell\'Unione europea e che non abbiano la propria residenza o sede sociale in uno Stato membro sono trattate e archiviate separatamente. Il Presidente invia mensilmente una relazione sulle petizioni ricevute durante il mese precedente, con l\'indicazione del loro oggetto, alla commissione. La commissione può chiedere di prendere visione di quelle che ritiene opportuno trattare."
},
{
'id': 216,
'title': 'Articolo 216 : Esame delle petizioni',
'text': "1.   Le petizioni ricevibili sono esaminate dalla commissione competente per le petizioni nel corso della sua normale attività, nell\'ambito di una discussione durante una riunione ordinaria, oppure con procedura scritta. I firmatari possono essere invitati a partecipare alle riunioni della commissione qualora la loro petizione sia oggetto di discussione, oppure possono chiedere di essere presenti. Il diritto di parola è concesso ai firmatari a discrezione del presidente.\
\
2.   Su una petizione ricevibile, la commissione può decidere di presentare una breve proposta di risoluzione al Parlamento, previa informazione della Conferenza dei presidenti di commissione e salvo obiezioni da parte della Conferenza dei presidenti. Tali proposte di risoluzione sono iscritte nel progetto di ordine del giorno della tornata che si svolge al più tardi dopo otto settimane dall'approvazione in commissione delle predette proposte di risoluzione. Esse sono oggetto di una votazione unica. La Conferenza dei presidenti può proporre di applicare l\'articolo 151. In caso contrario, le proposte di risoluzione sono poste in votazione senza discussione.\
\
3.   Qualora la commissione intenda elaborare una relazione di iniziativa a norma dell\'articolo 52, paragrafo 1, su una petizione ricevibile, che tratti, in particolare, dell\'applicazione o dell\'interpretazione del diritto dell\'Unione o di modifiche proposte al diritto vigente, la commissione competente per la materia trattata è associata a norma degli articoli 53 e 54. La commissione accetta senza votazione i suggerimenti relativi ad alcune parti della proposta di risoluzione ricevuti dalla commissione competente per la materia trattata se essi vertono sull\'applicazione o sull'interpretazione del diritto dell\'Unione o su modifiche al diritto vigente. Se la commissione non accetta tali suggerimenti, la commissione competente per il merito può presentarli direttamente all'Aula.\
\
4.   I firmatari possono associarsi oppure ritirare il proprio sostegno a una petizione ricevibile sul portale delle petizioni, che è disponibile sul sito internet del Parlamento.\
\
5.   La commissione può chiedere alla Commissione di assisterla, segnatamente mediante precisazioni sull\'applicazione o il rispetto del diritto dell\'Unione, nonché mediante la comunicazione di informazioni e documenti relativi alla petizione. Rappresentanti della Commissione sono invitati a partecipare alle riunioni della commissione.\
\
6.   La commissione può chiedere al Presidente del Parlamento di trasmettere il suo parere o la sua raccomandazione alla Commissione, al Consiglio o all\'autorità dello Stato membro in questione al fine di ottenere un suo intervento o una sua risposta.\
\
7.   La commissione riferisce al Parlamento con periodicità annuale sui risultati delle proprie deliberazioni e, se del caso, sulle misure adottate dal Consiglio o dalla Commissione in relazione alle petizioni trasmesse dal Parlamento.\
\
Una volta concluso l\'esame di una petizione ricevibile, quest'ultima è archiviata con decisione della commissione.\
\
8.   Il firmatario della petizione è informato di tutte le pertinenti decisioni adottate dalla commissione e dei relativi motivi.\
\
9.   Una petizione può essere riaperta con decisione della commissione, se nuovi fatti pertinenti alla petizione sono stati sottoposti all\'attenzione di quest'ultima e se il firmatario lo richiede.\
\
10.   A maggioranza dei suoi membri, la commissione adotta orientamenti sul trattamento delle petizioni in conformità del presente regolamento.\
\
Articolo 216 bis : Missioni d'informazione\
\
1.   Ai fini dell\'esame delle petizioni, dell\'accertamento dei fatti o della ricerca di soluzioni, la commissione può organizzare missioni d'informazione nello Stato membro o nella regione cui fanno riferimento petizioni ricevibili che sono già state discusse in commissione. Di norma le missioni d'informazione riguardano questioni che sono state sollevate in varie petizioni. Si applicano le regolamentazioni dell\'Ufficio di presidenza che disciplinano le delegazioni delle commissioni in seno all'Unione europea.\
\
2.   I deputati eletti nello Stato membro di destinazione non possono far parte della delegazione. Essi possono essere autorizzati ad accompagnare la delegazione della missione d'informazione ex officio.\
\
3.   Dopo ogni missione, i membri ufficiali della delegazione redigono un resoconto della missione. Il capo della delegazione coordina l\'elaborazione del resoconto e si adopera per raggiungere un consenso sul contenuto tra i membri ufficiali su un piano di parità. In mancanza di un consenso, il resoconto di missione illustra le valutazioni divergenti.\
\
I deputati che fanno parte della delegazione ex officio non contribuiscono all\'elaborazione del resoconto.\
\
4.   Il resoconto di missione, comprensivo di eventuali raccomandazioni, è presentato alla commissione. I deputati possono presentare emendamenti alle raccomandazioni, ma non alle parti del resoconto che riguardano i fatti accertati dalla delegazione.\
\
La commissione vota innanzitutto gli emendamenti alle eventuali raccomandazioni e, successivamente, l\'insieme del resoconto di missione.\
\
Se approvato, il resoconto di missione è trasmesso per informazione al Presidente."
},
{
'id': 217,
'title': 'Articolo 217 : Pubblicità delle petizioni',
'text': "1.   Le petizioni iscritte nel ruolo generale di cui all\'articolo 215, paragrafo 9, e le principali decisioni in merito alla procedura di esame delle stesse sono annunciate in Aula. Tali comunicazioni sono pubblicate nel processo verbale.\
\
2.   Il titolo e la sintesi delle petizioni iscritte nel ruolo generale nonché i pareri e le principali decisioni che accompagnano l\'esame della petizione sono consultabili sul portale delle petizioni disponibile sul sito internet del Parlamento."
},
{
'id': 218,
'title': 'Articolo 218 : Iniziativa dei cittadini',
'text': "1.   Quando al Parlamento è comunicato che la Commissione è stata invitata a presentare una proposta di atto legislativo in base all\'articolo 11, paragrafo 4, del trattato sull'Unione europea e conformemente al regolamento (UE) n. 211/2011, la commissione competente per le petizioni verifica se ciò possa influire sui propri lavori e, in tal caso, ne informa i firmatari di petizioni su argomenti connessi.\
\
2.   Le proposte di iniziative dei cittadini che sono state registrate a norma dell\'articolo 4 del regolamento (UE) n. 211/2011, ma che non possono essere presentate alla Commissione a norma dell\'articolo 9 di tale regolamento in quanto non sono state rispettate tutte le procedure e le condizioni pertinenti previste, possono essere esaminate dalla commissione competente per le petizioni se essa ritiene che sia appropriato darvi seguito. Gli articoli 215, 216, 216 bis e 217 si applicano mutatis mutandis."
},
{
'id': 219,
'title': 'Articolo 219 : Elezione del Mediatore',
'text': "1.   All'inizio di ogni legislatura o in caso di decesso, dimissioni o destituzione del Mediatore, il Presidente lancia un appello per la presentazione di candidature in vista della nomina del Mediatore e fissa il termine per la presentazione delle stesse. L\'appello è pubblicato nella Gazzetta ufficiale dell\'Unione europea.\
\
2.   Le candidature devono essere appoggiate da almeno quaranta deputati cittadini di almeno due Stati membri.\
\
Ogni deputato può appoggiare una sola candidatura.\
\
Le candidature devono comportare la presentazione di tutti i documenti giustificativi che consentano di accertare in modo inequivocabile che il candidato soddisfa le condizioni di cui all\'articolo 6, paragrafo 2, della decisione 94/262/CECA, CE, Euratom del Parlamento europeo(1).\
\
3.   Le candidature sono trasmesse per esame alla commissione competente. Un elenco completo dei deputati che hanno dato il loro sostegno ai candidati è messo a disposizione del pubblico a tempo debito.\
\
4.   La commissione competente può chiedere di ascoltare i candidati. Le relative audizioni sono aperte a tutti i deputati.\
\
5.   L'elenco alfabetico delle candidature ricevibili è quindi sottoposto al voto del Parlamento.\
\
6.   Il Mediatore è eletto a maggioranza dei voti espressi.\
\
Se nessun candidato è eletto al termine dei primi due turni, possono ripresentarsi soltanto i due candidati che hanno ottenuto il maggior numero di voti al secondo turno.\
\
In tutti i casi di parità di voti prevale il candidato più anziano.\
\
7.   Prima di dichiarare aperta la votazione, il Presidente si accerta che sia presente almeno la metà dei deputati che compongono il Parlamento.\
\
8.   Salvo in caso di decesso o di destituzione, il Mediatore rimane in carica sino all\'assunzione del mandato da parte del suo successore.\
\
\
(1)	Decisione 94/262/CECA, CE, Euratom del Parlamento europeo sullo statuto e le condizioni generali per l\'esercizio delle funzioni del Mediatore (GU L 113 del 4.5.1994, pag. 15)."
},
{
'id': 220,
'title': 'Articolo 220 : Azione del Mediatore',
'text': "1.   La commissione competente esamina i casi di cattiva amministrazione dei quali è stata informata dal Mediatore conformemente all\'articolo 3, paragrafi 6 e 7, della decisione 94/262/CECA, CE, Euratom, all\'esito dei quali può decidere di elaborare una relazione a norma dell\'articolo 52.\
\
Al termine di ogni sessione annuale la commissione competente esamina la relazione che il Mediatore ha presentato sul risultato delle proprie indagini conformemente all\'articolo 3, paragrafo 8, della decisione 94/262/CECA, CE, Euratom. La commissione competente può presentare una proposta di risoluzione al Parlamento se ritiene che quest'ultimo debba prendere una posizione su un qualsiasi aspetto di detta relazione.\
\
2.   Il Mediatore può altresì fornire informazioni alla commissione competente su richiesta di quest'ultima ovvero essere ascoltato dalla stessa su propria iniziativa."
},
{
'id': 221,
'title': 'Articolo 221 : Destituzione del Mediatore',
'text': "1.   Un decimo dei deputati che compongono il Parlamento può richiedere la destituzione del Mediatore qualora non risponda più alle condizioni necessarie per l\'esercizio delle sue funzioni ovvero abbia commesso una colpa grave. Nel caso in cui una siffatta richiesta sia stata votata nei due mesi precedenti, una nuova richiesta può essere presentata unicamente da un quinto dei deputati che compongono il Parlamento.\
\
2.   La richiesta è trasmessa al Mediatore e alla commissione competente. Se ritiene, a maggioranza dei suoi membri, che i motivi addotti siano fondati, detta commissione presenta una relazione al Parlamento. Il Mediatore è ascoltato, su sua richiesta, prima che la relazione sia posta in votazione. Il Parlamento delibera, previa discussione, a scrutinio segreto.\
\
3.   Prima di procedere alla votazione il Presidente si accerta che sia presente almeno la metà dei deputati che compongono il Parlamento.\
\
4.   In caso di voto favorevole alla destituzione del Mediatore, e qualora questi non vi abbia dato seguito, il Presidente, al più tardi entro la tornata successiva a quella della votazione, invita la Corte di giustizia, con richiesta di pronuncia sollecita, a dichiarare dimissionario il Mediatore.\
\
Le dimissioni volontarie del Mediatore interrompono la procedura."
},
{
'id': 222,
'title': 'Articolo 222 : Segretariato del Parlamento',
'text': "1.   Il Parlamento è assistito da un Segretario generale, nominato dall\'Ufficio di presidenza.\
\
Il Segretario generale prende l\'impegno solenne dinanzi all'Ufficio di presidenza di esercitare le sue funzioni con assoluta imparzialità e lealtà.\
\
2.   Il Segretario generale del Parlamento dirige un Segretariato la cui composizione e organizzazione sono stabilite dall\'Ufficio di presidenza.\
\
3.   L'Ufficio di presidenza stabilisce l'organigramma del Segretariato del Parlamento e i regolamenti relativi alla situazione amministrativa e finanziaria dei funzionari e degli altri agenti.\
\
Il Presidente del Parlamento informa al riguardo le competenti istituzioni dell\'Unione europea."
},
{
'id': 223,
'title': 'Articolo 223 : (soppresso)',
'text': "Articolo 223 bis : Competenze relative ai partiti politici europei e alle fondazioni politiche europee(1)\
\
1.   Qualora, conformemente all\'articolo 65, paragrafo 1, del Regolamento finanziario, il Parlamento decida di riservarsi il diritto di autorizzare le spese, esso agisce per il tramite del suo Ufficio di presidenza.\
\
Su questa base, l'Ufficio di presidenza ha il potere di adottare decisioni a norma degli articoli 17, 18 e 24, dell\'articolo 27, paragrafo 3, e dell\'articolo 30 del regolamento (UE, Euratom) n. 1141/2014 del Parlamento europeo e del Consiglio(2).\
\
​​Le singole decisioni adottate dall\'Ufficio di presidenza sulla base del presente paragrafo sono firmate dal Presidente, che lo rappresenta, e sono notificate al richiedente o al beneficiario conformemente all\'articolo 297 del trattato sul funzionamento dell\'Unione europea. Le singole decisioni sono motivate, conformemente all\'articolo 296, secondo comma, di detto trattato.\
\
L'Ufficio di presidenza può, in qualsiasi momento, chiedere il parere della Conferenza dei presidenti.\
\
2.   Su richiesta di un quarto dei deputati che compongono il Parlamento, in rappresentanza di almeno tre gruppi politici, il Parlamento vota la decisione di presentare all'Autorità per i partiti politici europei e le fondazioni politiche europee, a norma dell\'articolo 10, paragrafo 3, del regolamento (UE, Euratom) n. 1141/2014, una richiesta di verifica del rispetto, da parte di un partito politico europeo o di una fondazione politica europea registrati, delle condizioni di cui all\'articolo 3, paragrafo 1, lettera c), e dell\'articolo 3, paragrafo 2, lettera c), del regolamento (UE, Euratom) n. 1141/2014.\
\
3.   Su richiesta di un quarto dei deputati che compongono il Parlamento, in rappresentanza di almeno tre gruppi politici, il Parlamento vota una proposta di decisione motivata di sollevare obiezioni, a norma dell\'articolo 10, paragrafo 4, del regolamento (UE, Euratom) n. 1141/2014, in merito alla decisione dell\'Autorità per i partiti politici europei e le fondazioni politiche europee di revocare la registrazione di un partito politico europeo o di una fondazione politica europea entro un termine di tre mesi dalla data in cui tale decisione gli è stata notificata.\
\
La commissione competente presenta una proposta di decisione motivata. In caso di reiezione di tale proposta, si considera adottata la decisione contraria.\
\
4.   Sulla base di una proposta presentata dalla commissione competente, la Conferenza dei presidenti nomina due membri del comitato di personalità indipendenti a norma dell\'articolo 11, paragrafo 1, del regolamento (UE, Euratom) n. 1141/2014.\
\
\
(1)	L\'articolo 223 bis si applica unicamente ai partiti politici europei e alle fondazioni politiche a livello europeo ai sensi dell\'articolo 2, punti 3 e 4, del regolamento (UE, Euratom) n. 1141/2014. Cfr. anche le note a piè di pagina relative agli articoli 224 e 225.\
(2)	Regolamento (UE, Euratom) n. 1141/2014 del Parlamento europeo e del Consiglio relativo allo statuto e al finanziamento dei partiti politici europei e delle fondazioni politiche europee (GU L 317 del 4.11.2014, pag. 1)."
},
{
'id': 224,
'title': 'Articolo 224 : Competenze dell\'Ufficio di presidenza (soppresso)(1)',
'text': "1.   L'Ufficio di presidenza decide in merito alla domanda di finanziamento presentata dal partito politico a livello europeo nonché alla ripartizione degli stanziamenti fra i partiti politici beneficiari. Esso stabilisce un elenco dei beneficiari e degli importi assegnati.\
\
2.   L'Ufficio di presidenza decide l\'eventuale sospensione o riduzione di un finanziamento e l\'eventuale recupero delle somme indebitamente riscosse.\
\
3.   L'Ufficio di presidenza approva, una volta concluso l\'esercizio di bilancio, la relazione di attività finale e i conteggi finanziari finali del partito politico beneficiario.\
\
4.   L'Ufficio di presidenza, alle condizioni stabilite dal regolamento (CE) n. 2004/2003 del Parlamento europeo e del Consiglio, può concedere l\'assistenza tecnica ai partiti politici a livello europeo sulla base delle loro proposte. L'Ufficio di presidenza può delegare al Segretario generale determinati tipi di decisioni relative alla concessione di assistenza tecnica.\
\
5.   In tutti i casi di cui ai paragrafi precedenti l'Ufficio di presidenza agisce sulla base di una proposta del Segretario generale. Tranne nei casi di cui ai paragrafi 1 e 4, prima di prendere una decisione l'Ufficio di presidenza sente i rappresentanti del partito politico interessato. L'Ufficio di presidenza può, in qualsiasi momento, chiedere il parere della Conferenza dei presidenti.\
\
6.   Allorché il Parlamento constata, previa verifica, che un partito politico a livello europeo non rispetta più i principi di libertà, di democrazia, di rispetto dei diritti dell'uomo e delle libertà fondamentali, nonché dello Stato di diritto, l'Ufficio di presidenza decide l\'esclusione di tale partito politico dal finanziamento.\
\
\
(1)	L\'articolo 224 rimane applicabile agli atti e agli impegni attinenti al finanziamento dei partiti politici europei e delle fondazioni politiche a livello europeo per gli esercizi 2014, 2015, 2016 e 2017, i quali, conformemente all\'articolo 40 del regolamento (UE, Euratom) n. 1141/2014, continuano a essere disciplinati dal regolamento (CE) n. 2004/2003 del Parlamento europeo e del Consiglio relativo allo statuto e al finanziamento dei partiti politici a livello europeo. Cfr. anche le note agli articoli 223 bis e 225."
},
{
'id': 225,
'title': 'Articolo 225 : Competenze della commissione competente e del Parlamento in seduta plenaria (soppresso)(1)',
'text': "1.   Su richiesta di un quarto dei membri del Parlamento, in rappresentanza di almeno tre gruppi politici, il Presidente, previo scambio di opinioni in sede di Conferenza dei presidenti, chiede alla commissione competente di verificare se un partito politico a livello europeo continui a rispettare, in particolare nel suo programma e nella sua azione, i principi sui quali è fondata l'Unione europea, vale a dire i principi di libertà, di democrazia, di rispetto dei diritti dell'uomo e delle libertà fondamentali, nonché dello Stato di diritto.\
\
2.   La commissione competente, prima di sottoporre una proposta di decisione al Parlamento, sente i rappresentanti del partito politico interessato e sollecita ed esamina il parere del comitato composto di personalità indipendenti previsto dal regolamento (CE) n. 2004/2003 del Parlamento europeo e del Consiglio.\
\
3.   Il Parlamento vota a maggioranza dei suffragi espressi la proposta di decisione che constata che il partito politico interessato rispetta i principi enunciati nel paragrafo 1 o che non li rispetta. Non è possibile presentare emendamenti. In entrambi i casi, se la proposta di decisione non ottiene la maggioranza, si considera approvata la decisione contraria.\
\
4.   La decisione del Parlamento prende effetto il giorno della presentazione della domanda di cui al paragrafo 1.\
\
5.   Il Presidente rappresenta il Parlamento al comitato di personalità indipendenti.\
\
6.   La commissione competente elabora la relazione prevista dal regolamento (CE) n. 2004/2003 del Parlamento europeo e del Consiglio sull\'applicazione di detto regolamento e sulle attività finanziate, e la presenta in seduta plenaria.\
\
\
(1)	L\'articolo 225 rimane applicabile ai partiti politici e alle fondazioni politiche a livello europeo ai sensi dell\'articolo 2 del regolamento (CE) n. 2004/2003, fintantoché ricevono finanziamenti per gli esercizi 2014, 2015, 2016 e 2017 in applicazione di quest'ultimo regolamento. Crr. anche le note agli articoli 223 bis e 224."
},
{
'id': 226,
'title': 'Articolo 226 : Applicazione del regolamento',
'text': "1.   Qualora sorgano dubbi in merito all\'applicazione o all\'interpretazione del presente regolamento, il Presidente può deferire l\'esame della questione alla commissione competente.\
\
I presidenti di commissione possono fare altrettanto qualora nel corso dell\'attività della commissione sorgano dubbi relativi a detta attività.\
\
2.   La commissione competente decide se sia necessario proporre una modifica del regolamento. In tal caso procede in conformità dell\'articolo 227.\
\
3.   Se decide che è sufficiente un\'interpretazione delle disposizioni del regolamento in vigore, la commissione competente comunica la sua interpretazione al Presidente, che ne informa il Parlamento nel corso della tornata successiva.\
\
4.   Qualora un gruppo politico o un numero di deputati pari almeno alla soglia bassa contestino l\'interpretazione della commissione competente entro 24 ore dalla sua comunicazione, la questione è sottoposta al Parlamento che si pronuncia a maggioranza dei voti espressi, in presenza di almeno un terzo dei suoi membri. In caso di reiezione, la questione è rinviata in commissione.\
\
5.   Le interpretazioni che non sono state oggetto di contestazione e quelle approvate dal Parlamento sono pubblicate nel regolamento sotto forma di note in corsivo corredanti l\'articolo o gli articoli cui si riferiscono.\
\
6.   Queste interpretazioni costituiscono un precedente per la futura applicazione e interpretazione degli articoli in questione.\
\
7.   Il regolamento e le sue interpretazioni sono soggetti a una revisione periodica a cura della commissione competente.\
\
8.   Ogniqualvolta il numero totale dei seggi del Parlamento è modificato, in particolare a seguito di un ampliamento dell\'Unione europea, laddove il presente regolamento conferisca diritti a un numero determinato di deputati tale numero è automaticamente sostituito dal numero intero più vicino che rappresenta la stessa percentuale dei deputati al Parlamento."
},
{
'id': 227,
'title': 'Articolo 227 : Modifica del regolamento',
'text': "1.   Ciascun deputato può proporre modifiche al presente regolamento e ai suoi allegati, corredate, se del caso, di una breve motivazione.\
\
La commissione competente le esamina e decide se sottoporle al Parlamento.\
\
Ai fini dell\'applicazione degli articoli 169, 170 e 174 all\'esame di tali proposte in Aula, i riferimenti fatti, in detti articoli, al 'testo di base' o alla proposta di atto giuridicamente vincolante sono considerati rinvii alla disposizione del regolamento in vigore.\
\
2.   Conformemente all\'articolo 232 del trattato sul funzionamento dell\'Unione europea, le proposte di modifica del presente regolamento possono essere approvate solo a maggioranza dei deputati che compongono il Parlamento.\
\
3.   Salvo eccezioni previste all\'atto della votazione, le modifiche al presente regolamento e ai suoi allegati entrano in vigore il primo giorno della tornata successiva alla loro approvazione."
},
{
'id': 228,
'title': 'Articolo 228 : Simboli dell\'Unione',
'text': '1.   Il Parlamento riconosce e fa suoi i seguenti simboli dell\'Unione:\
\
-   la bandiera con un cerchio di dodici stelle dorate su fondo blu;\
\
-    l\'inno tratto dall\'"Inno alla gioia" della Nona sinfonia di Ludwig van Beethoven;\
\
-   il motto "Unita nella diversità".\
\
2.   Il Parlamento celebra il giorno dell\'Europa il 9 maggio.\
\
3.   La bandiera è esposta in tutti i locali del Parlamento e in occasione di eventi ufficiali. La bandiera è utilizzata in ogni sala di riunione del Parlamento.\
\
4.   L\'inno è eseguito all\'inizio di ogni seduta costitutiva e in altre sedute solenni, in particolare per dare il benvenuto ai capi di Stato o di governo o per accogliere i nuovi deputati nel quadro di un allargamento.\
\
5.   Il motto è riprodotto sui documenti ufficiali del Parlamento.\
\
6.   L\'Ufficio di presidenza valuta ulteriori utilizzazioni dei simboli all\'interno del Parlamento. L\'Ufficio di presidenza stabilisce disposizioni dettagliate per l\'attuazione del presente articolo.'
},
{
'id': 229,
'title': 'Articolo 229 : Questioni pendenti',
'text': "Nell'ultima seduta che precede le nuove elezioni tutte le questioni pendenti dinanzi al Parlamento decadono, fatto salvo il disposto del secondo comma del presente articolo.\
\
All'inizio di ogni legislatura la Conferenza dei presidenti statuisce sulle richieste motivate delle commissioni parlamentari e delle altre istituzioni intese a ricominciare o proseguire l\'esame di tali questioni pendenti.\
\
Queste disposizioni non si applicano alle petizioni e ai testi che non richiedono una deliberazione."
},
{
'id': 230,
'title': 'Articolo 230 : (soppresso)',
'text': ""
},
{
'id': 231,
'title': 'Articolo 231 : Rettifiche',
'text': "1.   Quando in un testo approvato dal Parlamento è individuato un errore, il Presidente trasmette, se del caso, un progetto di rettifica alla commissione competente.\
\
2.   Quando è individuato un errore in un testo approvato dal Parlamento e concordato con altre istituzioni, prima di procedere a norma del paragrafo 1 il Presidente si adopera per ottenere l\'accordo di dette istituzioni sulle correzioni necessarie.\
\
3.   La commissione competente esamina il progetto di rettifica e lo sottopone al Parlamento qualora ritenga che si sia verificato un errore che può essere corretto nel modo proposto.\
\
4.   La rettifica è annunciata in occasione della tornata successiva. Essa è considerata approvata a meno che, entro 24 ore dall'annuncio, un gruppo politico o un numero di deputati pari almeno alla soglia bassa non chiedano che sia messa ai voti. Se non è approvata, la rettifica è rinviata alla commissione competente che può proporre una rettifica modificata o chiudere la procedura.\
\
5.   Le rettifiche approvate sono pubblicate nello stesso modo previsto per il testo cui fanno riferimento. L\'articolo 78 si applica mutatis mutandis."
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





