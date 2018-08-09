/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('rules_pt', [])


.service('Rules_pt', [function(){


var listRules = [
{
'id': 1,
'title': 'Artigo 1.º : O Parlamento Europeu',
'text': '1.   O Parlamento Europeu é a Assembleia eleita nos termos dos Tratados, do Ato de 20 de setembro de 1976 relativo à eleição dos deputados ao Parlamento Europeu por sufrágio universal direto e da legislação nacional decorrente da aplicação dos Tratados.\n\r\
\n\r\
2.   A denominação dos representantes eleitos para o Parlamento Europeu é a seguinte:\n\r\
\n\r\
   "Членове на Европейския парламент" em búlgaro,\n\r\
\n\r\
   "Diputados al Parlamento Europeo" em espanhol,\n\r\
\n\r\
   "Poslanci Evropského parlamentu" em checo,\n\r\
\n\r\
   "Medlemmer af Europa-Parlamentet" em dinamarquês,\n\r\
\n\r\
   "Mitglieder des Europäischen Parlaments" em alemão,\n\r\
\n\r\
   "Euroopa Parlamendi liikmed" em estónio,\n\r\
\n\r\
   "Βoυλευτές τoυ Ευρωπαϊκoύ Κoιvoβoυλίoυ" em grego,\n\r\
\n\r\
   "Members of the European Parliament" em inglês,\n\r\
\n\r\
   "Députés au Parlement européen" em francês,\n\r\
\n\r\
   "Feisirí de Pharlaimint na hEorpa" em irlandês,\n\r\
\n\r\
   "Zastupnici u Europskom parlamentu" em croata,\n\r\
\n\r\
   "Deputati al Parlamento europeo" em italiano,\n\r\
\n\r\
   "Eiropas Parlamenta deputāti" en letão,\n\r\
\n\r\
   "Europos Parlamento nariai" em lituano,\n\r\
\n\r\
   "Európai Parlamenti Képviselők" em húngaro,\n\r\
\n\r\
   "Membri tal-Parlament Ewropew" em maltês,\n\r\
\n\r\
   "Leden van het Europees Parlement" em neerlandês,\n\r\
\n\r\
   "Posłowie do Parlamentu Europejskiego" em polaco,\n\r\
\n\r\
   "Deputados ao Parlamento Europeu" em português,\n\r\
\n\r\
   "Deputaţi în Parlamentul European" em romeno,\n\r\
\n\r\
   "Poslanci Európskeho parlamentu" em eslovaco,\n\r\
\n\r\
   "Poslanci Evropskega parlamenta" em esloveno,\n\r\
\n\r\
   "Euroopan parlamentin jäsenet" em finlandês,\n\r\
\n\r\
   "Ledamöter av Europaparlamentet" em sueco.'
},
{
'id': 2,
'title': 'Artigo 2.º : Independência do mandato',
'text': "Nos termos do artigo 6.º, n.º 1, do Ato de 20 de setembro de 1976, do artigo 2.º, n.º 1, e do artigo 3.º, n.º 1, do Estatuto dos Deputados ao Parlamento Europeu, os deputados gozam de liberdade e independência no exercício do seu mandato, não se encontrando sujeitos a quaisquer ordens ou instruções."
},
{
'id': 3,
'title': 'Artigo 3.º : Verificação de poderes',
'text': "1.   Após as eleições gerais para o Parlamento Europeu, o Presidente convida as autoridades competentes dos Estados-Membros a comunicar sem demora ao Parlamento os nomes dos deputados eleitos, a fim de que todos os deputados possam ocupar o seu lugar no Parlamento desde a abertura da primeira sessão seguinte às eleições.\n\r\
\n\r\
Ao mesmo tempo, o Presidente chama a atenção das referidas autoridades para as disposições pertinentes do Ato de 20 de setembro de 1976, convidando-as a tomar as medidas necessárias para evitar qualquer incompatibilidade com o mandato de deputado ao Parlamento Europeu.\n\r\
\n\r\
2.   Os  deputados  cuja  eleição  tenha  sido  comunicada  ao  Parlamento  devem  declarar  por escrito, antes de ocuparem o seu lugar no Parlamento, que não exercem funções incompatíveis com o mandato de deputado ao Parlamento Europeu, nos termos do artigo 7.º, n.º 1 ou n.º 2, do Ato de 20 de Setembro de 1976. Após as eleições gerais, a declaração em causa será feita, se possível, o mais tardar seis dias antes da primeira sessão do Parlamento seguinte às eleições. Enquanto os seus poderes não tiverem sido verificados ou não tiver havido decisão sobre uma eventual impugnação, os deputados terão assento no Parlamento e nos respetivos órgãos no pleno gozo dos seus direitos, desde que tenham assinado previamente a declaração escrita acima citada.\n\r\
\n\r\
Caso factos verificáveis a partir de fontes acessíveis ao público permitam estabelecer que um deputado exerce funções incompatíveis com o mandato de deputado ao Parlamento Europeu, nos termos do artigo 7.º, n.º 1 ou n.º 2,  do Ato de 20 de setembro de 1976, o Parlamento, com base em informações prestadas pelo seu Presidente, verifica a abertura da vaga.\n\r\
\n\r\
3.   Com base em relatório da comissão competente, o Parlamento verifica sem demora os poderes e delibera sobre a validade do mandato de cada um dos deputados recém-eleitos, bem como sobre eventuais impugnações apresentadas nos termos do disposto no Ato de 20 de Setembro de 1976, com exceção das que, nos termos desse Ato, sejam regidas exclusivamente pelas disposições nacionais para que o Ato remete.\n\r\
\n\r\
O relatório da comissão baseia-se na comunicação oficial de cada Estado‑Membro relativa à totalidade dos resultados eleitorais, especificando os nomes dos candidatos eleitos e dos eventuais substitutos, pela ordem de classificação decorrente da votação.\n\r\
\n\r\
Os mandatos dos deputados só podem ser validados após terem sido feitas as declarações escritas previstas no presente artigo e no anexo I do presente Regimento.\n\r\
\n\r\
4.   Com base numa proposta da comissão competente, o Parlamento verifica sem demora os poderes dos deputados que substituem deputados cessantes, e pode pronunciar-se em qualquer momento sobre qualquer impugnação da validade do mandato de um dos seus membros.\n\r\
\n\r\
5.   Caso a nomeação de um deputado resulte da desistência de candidatos inscritos na mesma lista, a comissão competente assegura a conformidade dessa desistência com o espírito e a letra do Ato de 20 de setembro de 1976 e com o artigo 4.º, n.º 2, do presente Regimento.\n\r\
\n\r\
6.   A comissão competente assegura que qualquer informação suscetível de afetar a elegibilidade de um deputado ou a elegibilidade ou a ordem de classificação dos suplentes seja imediatamente comunicada ao Parlamento pelas autoridades dos Estados-Membros ou da União, mencionando, caso se trate de nomeação, a data a partir da qual a mesma deverá produzir efeitos.\n\r\
\n\r\
Caso as autoridades competentes dos Estados-Membros iniciem um processo suscetível de culminar na perda do mandato de um deputado, o Presidente solicita-lhes que o informem regularmente do andamento do processo e consulta a comissão competente. O Parlamento pode pronunciar-se sobre o assunto, sob proposta da comissão competente."
},
{
'id': 4,
'title': 'Artigo 4.º : Duração do mandato parlamentar',
'text': "1.   O mandato dos deputados tem início e termo tal como previsto nos artigos 5.º e 13.º do Ato de 20 de setembro de 1976.\n\r\
\n\r\
2.   Os deputados que renunciem ao mandato notificam o Presidente da sua renúncia, bem como da data em que a mesma produzirá efeitos, a qual não poderá ser posterior a três meses após a notificação. Esta notificação assumirá a forma de ata redigida na presença do secretário-geral ou de um seu representante e será assinada por este e pelo deputado em questão e imediatamente submetida à comissão competente, que a inscreverá na ordem do dia da primeira reunião que realizar após a receção da notificação.\n\r\
\n\r\
Caso a comissão competente entenda que o pedido de renúncia está em conformidade com o Ato de 20 de setembro de 1976, será declarada uma abertura de vaga a contar da data indicada pelo deputado cessante na ata de renúncia ao mandato, e o Presidente informará desse facto o Parlamento.\n\r\
\n\r\
Caso a comissão competente entenda que o pedido de renúncia não está em conformidade com o Ato de 20 de setembro de 1976, proporá que o Parlamento não declare a abertura da vaga.\n\r\
\n\r\
3.   Caso não esteja programada uma reunião da comissão competente antes do período de sessões seguinte, o relator da comissão competente aprecia sem demora os pedidos de renúncia devidamente notificados. Caso um atraso nesta apreciação possa ter efeitos prejudiciais, o relator remete o assunto para o presidente da comissão, para que este, nos termos do n.º 2:\n\r\
\n\r\
-   informe o Presidente do Parlamento, em nome da comissão, de que a abertura da vaga pode ser declarada; ou\n\r\
\n\r\
-   convoque uma reunião extraordinária da comissão para examinar as dificuldades específicas verificadas pelo relator.\n\r\
\n\r\
4.   Caso as autoridades competentes dos Estados-Membros ou da União, ou o deputado em questão, notifiquem o Presidente de qualquer nomeação ou eleição para funções incompatíveis com o exercício do mandato de deputado ao Parlamento Europeu, nos termos do artigo 7.º, n.º 1 ou n.º 2, do Ato de 20 de setembro de 1976, o Presidente informa desse facto o Parlamento, que declara a abertura de vaga, com início a partir da data da incompatibilidade.\n\r\
\n\r\
Caso as autoridades competentes dos Estados-Membros notifiquem o Presidente do termo do mandato de um deputado ao Parlamento Europeu, quer devido a uma incompatibilidade adicional estabelecida na legislação desse Estado-Membro nos termos do artigo 7.º, n.º 3, do Ato de 20 de setembro de 1976, quer devido à perda do mandato nos termos do artigo 13.º, n.º 3, desse Ato, o Presidente informa o Parlamento de que o mandato do deputado em questão chegou ao seu termo na data comunicada pelas autoridades competentes do Estado-Membro. Se essa data não tiver sido comunicada, a data do termo do mandato é a data da notificação feita por esse Estado-Membro.\n\r\
\n\r\
5.   Caso as autoridades dos Estados‑Membros ou da União informem o Presidente de uma missão que entendam confiar a um deputado, o Presidente consulta a comissão competente acerca da compatibilidade da missão prevista com o Ato de 20 de setembro de 1976 e dá a conhecer as conclusões da comissão competente ao Parlamento, ao deputado e às autoridades interessadas.\n\r\
\n\r\
6.   Logo que o Parlamento verifique a abertura da vaga, o Presidente comunica-a ao Estado-Membro em causa e convida-o a preencher a vaga sem demora.\n\r\
\n\r\
7.   Caso a aceitação ou a renúncia do mandato estejam feridas de erro material ou de vícios do consentimento, o Parlamento pode declarar a invalidade do mandato examinado ou recusar-se a verificar a abertura de vaga."
},
{
'id': 5,
'title': 'Artigo 5.º : Privilégios e imunidades',
'text': "1.   Os deputados gozam dos privilégios e imunidades previstos no Protocolo n.º 7 relativo aos Privilégios e Imunidades da União Europeia.\n\r\
\n\r\
2.   No exercício dos seus poderes em matéria de privilégios e imunidades, o Parlamento age para manter a sua integridade enquanto assembleia legislativa democrática e para garantir a independência dos seus membros no exercício das suas funções. A imunidade parlamentar não é um privilégio pessoal dos deputados, mas sim uma garantia da independência do Parlamento como um todo, e dos seus membros.\n\r\
\n\r\
3.   Os livres-trânsitos da União Europeia que asseguram aos deputados a livre circulação nos Estados‑Membros e noutros países que os reconheçam como documentos de viagem válidos são emitidos  pela União Europeia aos  deputados, a seu pedido, com a condição de que o Presidente do Parlamento autorize a sua emissão.\n\r\
\n\r\
4.   Para efeitos do exercício das suas funções parlamentares, todos os deputados têm o direito de participar ativamente nos trabalhos das comissões e das delegações do Parlamento, nos termos do presente Regimento.\n\r\
\n\r\
5.   Os deputados têm o direito de examinar todos os documentos que se encontrem em poder do  Parlamento  ou  das  suas  comissões,  com  exceção  de  documentos  e  contas  pessoais,  cuja consulta só é autorizada aos deputados a que digam respeito. As exceções a este princípio no que se refere ao tratamento de documentos suscetíveis de ser excluídos do acesso do público por força do Regulamento (CE) n.º 1049/2001 do Parlamento Europeu e do Conselho(1) encontram-se regulamentadas no artigo 210.º-A do presente Regimento.\n\r\
\n\r\
Mediante aprovação da Mesa, expressa em decisão devidamente fundamentada, pode ser vedado a um deputado o acesso a um documento do Parlamento se, após ter ouvido o deputado em causa, a Mesa chegar à conclusão de que esse acesso seria suscetível de lesar de forma inaceitável os interesses institucionais do Parlamento ou o interesse público, e de que o pedido do interessado é motivado por razões privadas e pessoais. O deputado em causa pode contestar por escrito essa decisão no prazo de um mês a contar da sua notificação. Para serem consideradas admissíveis, estas contestações escritas têm de ser fundamentadas. O Parlamento delibera sobre a contestação apresentada, sem debate, no período de sessões subsequente à sua apresentação.\n\r\
\n\r\
\n\r\
(1)	Regulamento (CE) n.º 1049/2001 do Parlamento Europeu e do Conselho, de 30 de maio de 2001, relativo ao acesso do público aos documentos do Parlamento Europeu, do Conselho e da Comissão (JO L 145 de 31.5.2001, p. 43)"
},
{
'id': 6,
'title': 'Artigo 6.º : Levantamento da imunidade',
'text': "1.   Os pedidos de levantamento da imunidade são avaliados de acordo com o disposto nos artigos 7.º, 8.º e 9.º do Protocolo n.º 7 relativo aos Privilégios e Imunidades da União Europeia e com os princípios a que se refere o artigo 5.º, n.º 2, do presente Regimento.\n\r\
\n\r\
2.   Caso os deputados devam comparecer em tribunal na qualidade de testemunhas ou de peritos, não é necessário solicitar o levantamento da imunidade, desde que os deputados:\n\r\
\n\r\
-   não sejam obrigados a comparecer num dia ou hora que impeçam ou dificultem o exercício das suas funções parlamentares, ou possam prestar declarações por escrito ou de qualquer outra forma que não dificulte o exercício das suas funções parlamentares; e\n\r\
\n\r\
-   não sejam obrigados a prestar declarações, relativas a informações obtidas confidencialmente em virtude do exercício das suas funções parlamentares, que entendam não ser conveniente revelar."
},
{
'id': 7,
'title': 'Artigo 7.º : Defesa dos privilégios e imunidades',
'text': "1.   Nos casos em que, alegadamente, os privilégios e imunidades de um deputado ou de um antigo deputado tenham sido ou estejam prestes a ser violados pelas autoridades de um Estado‑Membro, pode ser apresentado um pedido, nos termos do artigo 9.º, n.º 1, para que o Parlamento decida se existiu, ou é provável que venha a existir, uma violação desses privilégios e imunidades.\n\r\
\n\r\
2.   Em particular, pode ser apresentado um pedido de defesa dos privilégios e imunidades caso se considere que as circunstâncias são passíveis de constituir uma restrição de ordem administrativa ou de outra natureza à livre circulação dos deputados quando se dirigem para os locais de reunião do Parlamento ou deles regressam, ou uma restrição de ordem administrativa ou de outra natureza à expressão de opiniões ou votos no exercício do seu mandato, ou que as circunstâncias podem ser abrangidas pelo âmbito de aplicação do artigo 9.º do Protocolo n.º 7 relativo aos Privilégios e Imunidades da União Europeia.\n\r\
\n\r\
3.   Um pedido de defesa dos privilégios e imunidades de um deputado não é admissível se já tiver sido recebido um pedido de levantamento ou defesa da imunidade desse deputado relativo aos mesmos factos, independentemente de já ter sido tomada ou não uma decisão sobre esse pedido anterior.\n\r\
\n\r\
4.   A apreciação de um pedido de defesa dos privilégios e imunidades de um deputado não é prosseguida se já tiver sido recebido um pedido de levantamento da imunidade desse deputado relativo aos mesmos factos.\n\r\
\n\r\
5.   Caso tenha sido tomada uma decisão de não defender os privilégios e imunidades de um deputado, este pode requerer, a título excecional, que a decisão seja reapreciada, apresentando novos elementos de prova nos termos do artigo 9.º, n.º 1. O pedido de reapreciação não é admissível se tiver sido interposto recurso da decisão ao abrigo do artigo 263.° do Tratado sobre o Funcionamento da União Europeia, ou se o Presidente entender que os novos elementos de prova apresentados não estão suficientemente fundamentados para justificar a reapreciação."
},
{
'id': 8,
'title': 'Artigo 8.º : Ação urgente do Presidente para confirmar a imunidade',
'text': "1.   Nos casos com caráter de urgência, quando um deputado for detido ou a sua liberdade de circulação for restringida em manifesta violação dos seus privilégios e imunidades, o Presidente, após consultar o presidente e o relator da comissão competente, pode tomar a iniciativa de confirmar os privilégios e imunidades do deputado em causa. O Presidente comunica a sua iniciativa à comissão competente e informa do facto o Parlamento.\n\r\
\n\r\
2.   Quando o Presidente exercer os poderes que lhe são conferidos pelo n.º 1, a comissão competente toma conhecimento da iniciativa do Presidente na sua reunião seguinte. Caso o entenda oportuno, a comissão pode elaborar um relatório a apresentar ao Parlamento."
},
{
'id': 9,
'title': 'Artigo 9.º : Procedimentos relativos à imunidade',
'text': "1.   Os pedidos de levantamento da imunidade de um deputado dirigidos ao Presidente pelas autoridades competentes de um Estado-Membro, bem como os pedidos de defesa dos privilégios e imunidades dirigidos ao Presidente por deputados ou por antigos deputados, são anunciados em sessão plenária e enviados à comissão competente.\n\r\
\n\r\
2.   Com o acordo do deputado ou do antigo deputado em causa, o pedido pode ser feito por outro deputado, que será autorizado a representar o deputado ou o antigo deputado em causa em todas as fases do processo.\n\r\
\n\r\
O deputado que representa o deputado ou o antigo deputado em causa não participa nas decisões da comissão.\n\r\
\n\r\
3.   A comissão aprecia sem demora, mas tendo em conta a sua complexidade relativa, todos os pedidos de levantamento da imunidade ou de defesa dos privilégios e imunidades.\n\r\
\n\r\
4.   A comissão apresenta uma proposta de decisão fundamentada que recomenda a aprovação ou a rejeição dos pedidos de levantamento da imunidade ou de defesa dos privilégios e imunidades. Não são admissíveis alterações. Caso uma proposta seja rejeitada, considera-se aprovada a decisão contrária.\n\r\
\n\r\
5.   A comissão pode solicitar às autoridades competentes todas as informações ou esclarecimentos que considere necessários para determinar se a imunidade deve ser levantada ou defendida.\n\r\
\n\r\
6.   O deputado em causa deve ter a possibilidade de ser ouvido, e pode apresentar todos os documentos ou outros elementos de prova escritos que entender oportunos.\n\r\
\n\r\
O deputado em causa não está presente durante os debates sobre o pedido de levantamento ou defesa da sua imunidade, exceto na audição propriamente dita.\n\r\
\n\r\
O presidente da comissão convida o deputado para uma audição, e indica-lhe a data e a hora da mesma. O deputado em causa pode renunciar ao direito de ser ouvido.\n\r\
\n\r\
Se o deputado em causa não comparecer à audição na sequência desse convite, considera-se que renunciou ao direito de ser ouvido, a não ser que peça escusa de ser ouvido no dia e hora indicados, e que tenha apresentado as suas razões. O presidente da comissão decide se o pedido de escusa deve ser aceite em função das razões apresentadas. O deputado em causa não pode recorrer dessa decisão.\n\r\
\n\r\
Se o presidente da comissão aceitar o pedido de escusa, convida o deputado em causa para ser ouvido em nova data e hora. Se o deputado em causa não se apresentar ao segundo convite para ser ouvido, o processo segue o seu curso sem que o deputado seja ouvido. Nesse caso, não serão aceites novos pedidos de escusa nem de audição.\n\r\
\n\r\
7.   Caso o pedido de levantamento ou de defesa da imunidade tenha a ver com vários fundamentos de acusação, cada um destes pode ser objeto de uma decisão distinta. O relatório da comissão pode propor, excecionalmente, que o levantamento ou a defesa da imunidade se apliquem exclusivamente à ação penal e que, enquanto a sentença não transitar em julgado, não possam ser tomadas contra o deputado medidas de detenção, de prisão ou outras que o impeçam de exercer as funções inerentes ao seu mandato.\n\r\
\n\r\
8.   A comissão pode emitir um parecer fundamentado sobre a competência da autoridade em questão e sobre a admissibilidade do pedido, mas não pode em caso algum pronunciar-se sobre a culpabilidade ou não culpabilidade do deputado, nem sobre se se justifica ou não processar penalmente o deputado pelas opiniões ou atos que lhe são atribuídos, mesmo que a apreciação do pedido de levantamento da imunidade lhe proporcione um conhecimento aprofundado do assunto.\n\r\
\n\r\
9.   A proposta de decisão da comissão é inscrita na ordem do dia da primeira sessão seguinte ao dia em que tiver sido entregue. Não são admissíveis alterações a essa proposta.\n\r\
\n\r\
O debate cinge-se exclusivamente às razões invocadas a favor e contra cada uma das propostas de levantamento ou de manutenção da imunidade, ou de defesa de um privilégio ou da imunidade.\n\r\
\n\r\
Sem prejuízo do artigo 164.º, o deputado cujos privilégios ou imunidades estejam em causa não pode intervir no debate.\n\r\
\n\r\
A proposta ou as propostas de decisão constantes do relatório são postas à votação no primeiro período de votação subsequente ao debate.\n\r\
\n\r\
Após a apreciação do assunto pelo Parlamento, procede-se à votação em separado de cada uma das propostas incluídas no relatório. Caso uma proposta seja rejeitada, considera-se aprovada a decisão contrária.\n\r\
\n\r\
10.   O Presidente comunica de imediato a decisão do Parlamento ao deputado em causa e às autoridades competentes do Estado‑Membro em causa, solicitando ser informado do andamento do processo relevante e das decisões judiciais tomadas no seu âmbito. Assim que tiver recebido essas informações, o Presidente comunica-as ao Parlamento da forma que considere mais adequada, se necessário após consultar a comissão competente.\n\r\
\n\r\
11.   A comissão aprecia essas questões e examina todos os documentos recebidos com a máxima confidencialidade. A apreciação dos pedidos respeitantes a processos de imunidade é sempre feita pela comissão à porta fechada.\n\r\
\n\r\
12.   O Parlamento só examina os pedidos de levantamento da imunidade dos deputados que lhe tenham sido transmitidos pelas autoridades judiciais ou pelas representações permanentes dos Estados‑Membros.\n\r\
\n\r\
13.   A comissão estabelece os princípios de aplicação do presente artigo.\n\r\
\n\r\
14.   Os pedidos de informação sobre o alcance dos privilégios e imunidades dos deputados, apresentados por uma autoridade competente, são tratados em conformidade com as disposições precedentes."
},
{
'id': 10,
'title': 'Artigo 10.º : (suprimido)',
'text': ""
},
{
'id': 11,
'title': 'Artigo 11.º : Interesses financeiros dos deputados e regras de conduta',
'text': "1.   O Parlamento estabelece regras de transparência relativas aos interesses financeiros dos deputados sob a forma de um código de conduta aprovado pela maioria dos membros que o compõem, anexo ao presente Regimento(1).\n\r\
\n\r\
Essas regras não podem prejudicar ou restringir de forma alguma o exercício do mandato dos deputados nem as suas atividades, políticas ou outras, a ele inerentes.\n\r\
\n\r\
2.   Os deputados devem adotar a prática sistemática de só se encontrarem com representantes de grupos de interesses inscritos no Registo de Transparência estabelecido pelo Acordo entre o Parlamento Europeu e a Comissão Europeia sobre o registo de transparência(2).\n\r\
\n\r\
3.   O comportamento dos deputados pauta-se pelo respeito mútuo, radica nos valores e nos princípios definidos nos Tratados e, em particular, na Carta dos Direitos Fundamentais, e preserva a dignidade do Parlamento. Além disso, não deve comprometer o bom andamento dos trabalhos parlamentares nem a segurança e a ordem ou o bom funcionamento dos equipamentos nas instalações do Parlamento.\n\r\
\n\r\
Nos debates parlamentares, os deputados abstêm-se de linguagem e de comportamentos ofensivos, racistas ou xenófobos, e não desfraldam bandeiras nem bandeirolas.\n\r\
\n\r\
Os deputados respeitam as regras do Parlamento aplicáveis ao tratamento de informações confidenciais.\n\r\
\n\r\
A violação dessas normas e regras pode levar à aplicação de medidas nos termos dos artigos 165.º, 166.º e 167.º.\n\r\
\n\r\
4.   A aplicação do presente artigo não obsta de forma alguma à vivacidade dos debates parlamentares nem prejudica a liberdade que assiste aos deputados no uso da palavra.\n\r\
\n\r\
A aplicação do presente artigo assenta no pleno respeito das prerrogativas dos deputados, tal como definidas no direito primário e no Estatuto dos Deputados.\n\r\
\n\r\
A aplicação do presente artigo baseia-se no princípio da transparência e garante que todas as disposições nesta matéria sejam levadas ao conhecimento dos deputados, que devem ser informados individualmente dos seus direitos e deveres.\n\r\
\n\r\
5.   Caso uma pessoa empregada por um deputado, ou uma pessoa a quem o deputado tenha facilitado o acesso às instalações ou aos equipamentos do Parlamento, não respeite as regras de conduta estabelecidas no n.º 3, podem ser aplicadas ao deputado em causa, se adequado, as sanções previstas no artigo 166.º.\n\r\
\n\r\
6.   Os questores fixam o número máximo de assistentes que cada deputado pode acreditar.\n\r\
\n\r\
7.   As regras de conduta e os direitos e privilégios dos antigos deputados são fixados por decisão da Mesa. Não são feitas distinções de tratamento entre os antigos deputados.\n\r\
\n\r\
\n\r\
(1)	Ver anexo I.\n\r\
(2)	Acordo de 16 de abril de 2014 entre o Parlamento Europeu e a Comissão Europeia sobre a criação de um registo de transparência para organizações e trabalhadores independentes que participem na tomada de decisões e na execução de políticas da União Europeia (JO L 277 de 19.9.2014, p. 11)."
},
{
'id': 12,
'title': 'Artigo 12.º : Inquéritos internos efetuados pelo Organismo Europeu de Luta Antifraude (OLAF)',
'text': "O regime comum previsto pelo Acordo Interinstitucional de 25 de Maio de 1999 relativo aos inquéritos internos efetuados pelo Organismo Europeu de Luta Antifraude (OLAF)(1), que inclui as medidas necessárias para facilitar a boa execução dos inquéritos efetuados pelo Organismo, é aplicável no Parlamento, em conformidade com a Decisão do Parlamento de 18 de novembro de 1999(2).\n\r\
\n\r\
\n\r\
(1)	JO L 136 de 31.5.1999, p. 15.\n\r\
(2)	Decisão do Parlamento de 18 de novembro de 1999 relativa às condições e regras dos inquéritos internos em matéria de luta contra a fraude, a corrupção e todas as atividades ilegais lesivas dos interesses das Comunidades."
},
{
'id': 13,
'title': 'Artigo 13.º : Observadores',
'text': "1.   Quando um Tratado de Adesão de um Estado à União Europeia é assinado, o Presidente, após ter obtido o acordo da Conferência dos Presidentes, pode convidar o parlamento do Estado aderente a designar de entre os seus próprios membros um determinado número de observadores, igual ao número de lugares que serão atribuídos a esse Estado no Parlamento Europeu após a adesão.\n\r\
\n\r\
2.   Esses observadores participam nos trabalhos do Parlamento enquanto o Tratado de Adesão não entrar em vigor, e têm o direito de se expressar nas comissões e nos grupos políticos. Não têm o direito de votar ou de se apresentar como candidatos a eleições para cargos no Parlamento, nem podem representar o Parlamento no exterior. A sua participação é desprovida de efeitos jurídicos nos trabalhos do Parlamento.\n\r\
\n\r\
3.   O tratamento que lhes é reservado é semelhante ao dos deputados no que respeita à utilização das instalações do Parlamento e ao reembolso das despesas de viagem e de estadia em que incorram no âmbito das suas atividades de observadores."
},
{
'id': 14,
'title': 'Artigo 14.º : Presidência interina',
'text': "1.   Na sessão prevista no artigo 146.º, n.º 2, bem como em qualquer outra sessão consagrada à eleição do Presidente e da Mesa, o Presidente cessante ou, na falta deste, um dos vice-presidentes cessantes, determinado segundo a ordem de precedência, ou, na falta destes, o deputado em funções há mais tempo, ocupa a presidência até à proclamação da eleição do Presidente.\n\r\
\n\r\
2.   Durante a presidência do deputado que ocupe interinamente a presidência ao abrigo do n.º 1 não são efetuados debates cujo objeto seja estranho à eleição do Presidente ou à verificação de poderes nos termos do artigo 3.º, n.º 2, segundo parágrafo. Quaisquer outras questões relacionadas com a verificação de poderes levantadas durante a sua presidência são enviadas à comissão competente."
},
{
'id': 15,
'title': 'Artigo 15.º : Candidaturas e disposições gerais',
'text': "1.   O Presidente e, em seguida, os vice-presidentes e os questores são eleitos por escrutínio secreto, nos termos do artigo 180.º-A.\n\r\
\n\r\
As candidaturas são apresentadas com o acordo dos interessados, e só podem ser apresentadas por um grupo político ou por um número de deputados que atinja pelo menos o limiar baixo. Podem ser apresentadas novas candidaturas antes de cada uma das voltas do escrutínio.\n\r\
\n\r\
Se o número de candidaturas não exceder o número de lugares a preencher, os candidatos são eleitos por aclamação, salvo se um número de deputados ou um ou vários grupos políticos que atinjam pelo menos o limiar alto solicitarem a realização de um escrutínio secreto.\n\r\
\n\r\
Se forem eleitos vários titulares num único escrutínio, o boletim de voto só é considerado válido se tiverem sido expressos mais de metade dos votos disponíveis.\n\r\
\n\r\
2.   Na eleição do Presidente, dos vice‑presidentes e dos questores deve ser tida em consideração a necessidade de assegurar, de forma global, uma representação equitativa das tendências políticas, o equilíbrio entre os géneros e o equilíbrio geográfico."
},
{
'id': 16,
'title': 'Artigo 16.º : Eleição do Presidente - discurso inaugural',
'text': "1.   As candidaturas ao cargo de Presidente são apresentadas ao deputado que ocupe interinamente a presidência ao abrigo do artigo 14.º, que as anuncia ao Parlamento. Se, após três voltas de escrutínio, nenhum dos candidatos tiver obtido a maioria absoluta dos votos expressos, só podem candidatar-se à quarta volta, em derrogação do artigo 15.º, n.º 1, os dois candidatos que tiverem obtido o maior número de votos na terceira volta. Em caso de empate, é eleito o candidato mais idoso.\n\r\
\n\r\
2.   Assim que o Presidente tiver sido eleito, o deputado que ocupe interinamente a presidência ao abrigo do artigo 14.º cede‑lhe o lugar. O discurso inaugural só pode ser proferido pelo Presidente eleito."
},
{
'id': 17,
'title': 'Artigo 17.º : Eleição dos vice-presidentes',
'text': "1.   Procede-se em seguida à eleição dos vice-presidentes num escrutínio único. São eleitos à primeira volta, dentro do limite dos 14 lugares a preencher e pela ordem dos votos obtidos, os candidatos que obtiverem a maioria absoluta dos votos expressos. Se o número de candidatos  eleitos for inferior ao número de lugares a preencher, procede‑se a uma segunda volta de escrutínio, nas mesmas condições, a fim de preencher os restantes lugares. Se for necessário uma terceira volta de escrutínio, utiliza-se o critério da maioria relativa para o preenchimento dos lugares vagos. Em caso de empate, são declarados eleitos os candidatos mais idosos.\n\r\
\n\r\
2.   Sem prejuízo do artigo 20.º, n.º 1, a ordem de precedência dos vice-presidentes é determinada pela ordem segundo a qual foram eleitos e, em caso de empate, pela idade.\n\r\
\n\r\
Se os vice-presidentes tiverem sido eleitos por aclamação, procede-se a uma votação por escrutínio secreto para determinar a ordem de precedência."
},
{
'id': 18,
'title': 'Artigo 18.º : Eleição dos questores',
'text': "O Parlamento procede à eleição dos cinco questores pelo mesmo processo utilizado para a eleição dos vice-presidentes."
},
{
'id': 19,
'title': 'Artigo 19.º : Duração dos mandatos',
'text': "1.   A duração do mandato do Presidente, dos vice-presidentes e dos questores é de dois anos e meio.\n\r\
\n\r\
Caso um deputado mude de grupo político, mantém o lugar que ocupava eventualmente na Mesa ou como questor até ao termo do seu mandato de dois anos e meio.\n\r\
\n\r\
2.   Em caso de abertura de vaga antes do termo de um destes mandatos, o deputado eleito em substituição ocupa o cargo do seu predecessor apenas até ao termo do mandato deste último."
},
{
'id': 20,
'title': 'Artigo 20.º : Abertura de vaga',
'text': "1.   Caso seja necessário proceder à substituição do Presidente, de um vice-presidente ou de um questor, o substituto é eleito segundo as regras da eleição para o cargo em causa.\n\r\
\n\r\
Um vice-presidente recém-eleito ocupa o lugar do seu predecessor na ordem de precedência.\n\r\
\n\r\
2.   Se o cargo de Presidente vagar, um vice-presidente, determinado segundo a ordem de precedência, exerce as funções de Presidente até à eleição do novo Presidente."
},
{
'id': 21,
'title': 'Artigo 21.º : Cessação antecipada de funções',
'text': "Deliberando por maioria de três quintos dos votos expressos, que representem pelo menos três grupos políticos, a Conferência dos Presidentes pode propor que o Parlamento ponha termo ao mandato do Presidente, de um vice-presidente, de um questor, do presidente ou do vice-presidente de uma comissão, do presidente ou do vice-presidente de uma delegação interparlamentar, ou de qualquer outro titular de um cargo eletivo no Parlamento, caso considere que o deputado em questão incorreu numa falta grave. O Parlamento delibera sobre esta proposta por maioria de dois terços dos votos expressos, que representem a maioria dos membros que o compõem.\n\r\
\n\r\
Caso um relator viole as disposições do Código de Conduta dos Deputados ao Parlamento Europeu em matéria de Interesses Financeiros e de Conflitos de Interesses(1), a comissão que o nomeou pode pôr termo ao seu mandato, por iniciativa do Presidente e sob proposta da Conferência dos Presidentes. As maiorias previstas no primeiro parágrafo aplicam-se, com as necessárias adaptações, a cada uma das etapas deste processo.\n\r\
\n\r\
\n\r\
(1)	Ver anexo I."
},
{
'id': 22,
'title': 'Artigo 22.º : Funções do Presidente',
'text': "1.   O Presidente dirige todas as atividades do Parlamento e dos seus órgãos em conformidade com o presente Regimento, e dispõe de todos os poderes necessários para presidir aos trabalhos do Parlamento e para assegurar a sua boa execução.\n\r\
\n\r\
2.   Cabe ao Presidente abrir, suspender e encerrar as sessões, decidir da admissibilidade das alterações e dos outros textos postos à votação, bem como da admissibilidade das perguntas parlamentares. Cabe também ao Presidente assegurar o respeito do Regimento, manter a ordem, conceder a palavra, dar por encerrados os debates, pôr os assuntos à votação e proclamar o resultado das votações. Compete ainda ao Presidente enviar às comissões as comunicações que lhes digam respeito.\n\r\
\n\r\
3.   O Presidente só pode usar da palavra num debate para resumir a questão e para chamar os deputados ao assunto. Se pretender participar no debate, o Presidente abandona o seu lugar e só pode retomá-lo após a conclusão do debate.\n\r\
\n\r\
4.   O Parlamento é representado em relações  internacionais,  em cerimónias  oficiais e  em atos  administrativos,  judiciais  e financeiros pelo Presidente, que pode delegar esses poderes.\n\r\
\n\r\
5.   O Presidente é responsável pela segurança e pela inviolabilidade das instalações do Parlamento Europeu."
},
{
'id': 23,
'title': 'Artigo 23.º : Funções dos vice-presidentes',
'text': "1.   Em caso de ausência ou de impedimento, ou se quiser participar num debate nos termos do artigo 22.º, n.º 3, o Presidente é substituído por um dos vice-presidentes, determinado segundo a ordem de precedência.\n\r\
\n\r\
2.   Os vice-presidentes exercem igualmente as funções que lhes são atribuídas nos termos do artigo 25.º, do artigo 27.º, n.ºs 3 e 5, e do artigo 71.º, n.º 3.\n\r\
\n\r\
3.   O Presidente pode delegar funções nos vice-presidentes, nomeadamente a representação do Parlamento em cerimónias ou atos específicos. Em particular, o Presidente pode designar um vice- presidente para exercer as funções do Presidente previstas no artigo 129.º e no artigo 130.º, n.º 2."
},
{
'id': 24,
'title': 'Artigo 24.º : Composição da Mesa',
'text': "1.   A Mesa é composta pelo Presidente e pelos 14 vice-presidentes do Parlamento.\n\r\
\n\r\
2.   Os questores são membros da Mesa na qualidade de consultores.\n\r\
\n\r\
3.   Em caso de empate nas votações da Mesa, o Presidente tem voto de qualidade."
},
{
'id': 25,
'title': 'Artigo 25.º : Funções da Mesa',
'text': "1.   A Mesa assume as funções que lhe são conferidas pelo presente Regimento.\n\r\
\n\r\
2.   A Mesa decide sobre as questões financeiras, organizativas e administrativas respeitantes à organização interna do Parlamento, ao seu Secretariado e aos seus órgãos.\n\r\
\n\r\
3.   A Mesa decide sobre as questões financeiras, organizativas e administrativas respeitantes aos deputados, com base numa proposta do Secretário-Geral ou de um grupo político.\n\r\
\n\r\
4.   A Mesa decide sobre as questões relativas à condução das sessões.\n\r\
\n\r\
5.   A Mesa aprova as disposições referidas no artigo 35.º relativamente aos deputados não inscritos.\n\r\
\n\r\
6.   A Mesa elabora o organigrama do Secretariado do Parlamento e estabelece as regras relativas à situação administrativa e pecuniária dos funcionários e outros agentes.\n\r\
\n\r\
7.   A Mesa elabora o anteprojeto de previsão de receitas e despesas do Parlamento.\n\r\
\n\r\
8.   A Mesa aprova as linhas de orientação aplicáveis aos questores, e pode incumbi-los de desempenhar certas tarefas.\n\r\
\n\r\
9.   A Mesa é o órgão competente para autorizar as reuniões e as missões das comissões fora dos locais de trabalho habituais, as audições e as viagens de estudo ou de informação efetuadas pelos relatores.\n\r\
\n\r\
Quando essas reuniões ou missões são autorizadas, o seu regime linguístico é determinado com base no Código de Conduta sobre o Multilinguismo aprovado pela Mesa. Aplica-se o mesmo às delegações.\n\r\
\n\r\
10.   A Mesa nomeia o Secretário‑Geral, nos termos do artigo 222.º.\n\r\
\n\r\
11.   A Mesa define as regras de execução do regulamento relativo ao estatuto e ao financiamento das fundações e dos partidos políticos a nível europeu.\n\r\
\n\r\
12.   A Mesa estabelece as regras relativas ao tratamento de informações confidenciais pelo Parlamento e pelos seus órgãos, pelos titulares de cargos e por outros deputados, tendo em conta os acordos interinstitucionais celebrados sobre essas matérias. Essas regras são publicadas no Jornal Oficial da União Europeia.\n\r\
\n\r\
13.   O Presidente e/ou a Mesa podem delegar em um ou vários membros da Mesa funções gerais ou especiais da competência do Presidente e/ou da Mesa. Ao mesmo tempo, são fixadas as regras de execução dessas funções.\n\r\
\n\r\
14.   A Mesa designa dois vice-presidentes responsáveis pelas relações com os parlamentos nacionais.\n\r\
\n\r\
15.   A Mesa designa um vice-presidente responsável pela organização das consultas estruturadas com a sociedade civil europeia sobre grandes temas.\n\r\
\n\r\
16.   A Mesa aplica o Estatuto dos Deputados e decide dos montantes dos subsídios com base no orçamento anual."
},
{
'id': 26,
'title': 'Artigo 26.º : Composição da Conferência dos Presidentes',
'text': "1.   A Conferência dos Presidentes é composta pelo Presidente do Parlamento e pelos presidentes dos grupos políticos. O presidente de um grupo político pode fazer-se representar por um membro do seu grupo.\n\r\
\n\r\
2.   O Presidente do Parlamento, após dar oportunidade aos deputados não‑inscritos para manifestarem a sua opinião, convida um deles para participar nas reuniões da Conferência dos Presidentes, sem direito a voto.\n\r\
\n\r\
3.   A Conferência dos Presidentes procura chegar a consenso sobre as questões que lhe forem submetidas.\n\r\
\n\r\
Caso não seja possível chegar a consenso, procede-se a uma votação ponderada em função do número de deputados de cada grupo político."
},
{
'id': 27,
'title': 'Artigo 27.º : Funções da Conferência dos Presidentes',
'text': "1.   A Conferência dos Presidentes assume as funções que lhe são conferidas pelo presente Regimento.\n\r\
\n\r\
2.   A Conferência dos Presidentes decide sobre a organização dos trabalhos do Parlamento e sobre as questões relativas à programação legislativa.\n\r\
\n\r\
3.   A Conferência dos Presidentes é o órgão competente para as questões relativas às relações do Parlamento com os outros órgãos e instituições da União Europeia e com os parlamentos nacionais dos Estados-Membros. As decisões relativas ao mandato e à composição da delegação do Parlamento que participa em consultas no Conselho e noutras instituições da União Europeia sobre questões fundamentais relativas ao aprofundamento da União Europeia (processo Sherpa) são tomadas com base nas posições relevantes adotadas pelo Parlamento e tendo em conta a diversidade dos pontos de vista políticos representados no Parlamento. Os vice-presidentes responsáveis pelas relações do Parlamento com os parlamentos nacionais informam periodicamente a Conferência dos Presidentes sobre as suas atividades nesse domínio.\n\r\
\n\r\
4.   A Conferência dos Presidentes é o órgão competente para as questões relativas às relações do Parlamento com os países terceiros e com as instituições e as organizações exteriores à União.\n\r\
\n\r\
5.   A Conferência dos Presidentes organiza as consultas estruturadas com a sociedade civil europeia sobre grandes temas. Essas consultas podem incluir a realização de debates públicos sobre temas de interesse geral europeu, em que os cidadãos interessados podem participar.    O vice-presidente responsável pela realização dessas consultas informa periodicamente a Conferência dos Presidentes sobre as suas atividades neste domínio.\n\r\
\n\r\
6.   A Conferência dos Presidentes elabora o projeto de ordem do dia dos períodos de sessões do Parlamento.\n\r\
\n\r\
7.   A Conferência dos Presidentes apresenta propostas ao Parlamento sobre a composição e a competência das comissões, das comissões de inquérito, das comissões parlamentares mistas e das delegações permanentes. A Conferência dos Presidentes autoriza a criação de delegações ad hoc.\n\r\
\n\r\
8.   A Conferência dos Presidentes decide, nos termos do artigo 36.º, da atribuição dos lugares no hemiciclo.\n\r\
\n\r\
9.   A Conferência dos Presidentes é o órgão competente para autorizar a elaboração de relatórios de iniciativa.\n\r\
\n\r\
10.   A Conferência dos Presidentes apresenta à Mesa propostas sobre questões administrativas e orçamentais relativas aos grupos políticos."
},
{
'id': 28,
'title': 'Artigo 28.º : Funções dos questores',
'text': "Os questores são responsáveis pelos assuntos administrativos e financeiros diretamente relacionados com os deputados, de acordo com as linhas de orientação aprovadas pela Mesa, e pelo desempenho de outras funções que lhes sejam confiadas."
},
{
'id': 29,
'title': 'Artigo 29.º : Conferência dos Presidentes das Comissões',
'text': "1.   A Conferência dos Presidentes das Comissões é composta pelos presidentes de todas as comissões permanentes ou especiais. A Conferência elege o seu presidente.\n\r\
\n\r\
2.   Na ausência do presidente, as reuniões da Conferência são presididas pelo deputado mais idoso que estiver presente.\n\r\
\n\r\
3.   A Conferência dos Presidentes das Comissões pode apresentar recomendações à Conferência dos Presidentes sobre as atividades das comissões e sobre a elaboração das ordens do dia dos períodos de sessões.\n\r\
\n\r\
4.   A Mesa e a Conferência dos Presidentes podem delegar certas funções na Conferência dos Presidentes das Comissões."
},
{
'id': 30,
'title': 'Artigo 30.º : Conferência dos Presidentes das Delegações',
'text': "1.   A Conferência dos Presidentes das Delegações é composta pelos presidentes de todas as delegações interparlamentares permanentes. A Conferência elege o seu presidente.\n\r\
\n\r\
2.   Na ausência do presidente, as reuniões da Conferência são presididas pelo deputado mais idoso que estiver presente.\n\r\
\n\r\
3.   A Conferência dos Presidentes das Delegações pode apresentar recomendações à Conferência dos Presidentes sobre as atividades das delegações.\n\r\
\n\r\
4.   A Mesa e a Conferência dos Presidentes podem delegar certas funções na Conferência dos Presidentes das Delegações.\n\r\
\n\r\
Artigo 30.º-A : Continuidade das funções durante os períodos de eleições\n\r\
\n\r\
Quando é eleito um novo Parlamento, os órgãos e os titulares de cargos do Parlamento cessante mantêm-se em funções até à primeira sessão do novo Parlamento."
},
{
'id': 31,
'title': 'Artigo 31.º : Publicidade das decisões da Mesa e da Conferência dos Presidentes',
'text': "1.   As atas das reuniões da Mesa e da Conferência dos Presidentes são traduzidas em todas as línguas oficiais e distribuídas a todos os deputados. As atas são acessíveis ao público, salvo se, a título excecional e por razões de confidencialidade, nos termos do artigo 4.º, n.ºs 1 a 4, do Regulamento (CE) n.º 1049/2001, a Mesa ou a Conferência dos Presidentes decidirem em contrário relativamente a certos pontos das atas.\n\r\
\n\r\
2.   Os deputados podem formular perguntas sobre o exercício das funções da Mesa, da Conferência dos Presidentes e dos questores. As perguntas são apresentadas por escrito ao Presidente, notificadas aos deputados e publicadas, juntamente com as respostas que lhes forem dadas, no sítio web do Parlamento, no prazo de 30 dias a contar da data em que tiverem sido apresentadas."
},
{
'id': 32,
'title': 'Artigo 32.º : Constituição e dissolução dos grupos políticos',
'text': "1.   Os deputados podem constituir-se em grupos por afinidades políticas.\n\r\
\n\r\
Normalmente, o Parlamento não precisa de avaliar a afinidade política dos membros de um grupo. Ao constituírem um grupo ao abrigo do presente artigo, os deputados em causa aceitam por definição que existe entre si afinidade política. Só quando isso for posto em causa pelos deputados em causa é que é necessário que o Parlamento avalie se o grupo se encontra constituído em conformidade com o Regimento.\n\r\
\n\r\
2.   Um grupo político é constituído por deputados eleitos em pelo menos um quarto dos Estados-Membros. O número mínimo de deputados exigido para a constituição de um grupo político é de 25.\n\r\
\n\r\
3.   Se um grupo deixar de respeitar um dos limiares exigidos, o Presidente, com o acordo da Conferência dos Presidentes, pode permitir que o grupo continue a existir até à próxima sessão constitutiva do Parlamento, desde que se encontrem reunidas as seguintes condições:\n\r\
\n\r\
-   os deputados continuam a representar pelo menos um quinto dos Estados-Membros;\n\r\
\n\r\
-   o grupo foi constutuído há mais de um ano.\n\r\
\n\r\
O Presidente não aplica esta derrogação caso existam elementos suficientes para suspeitar de que a mesma está a ser utilizada abusivamente.\n\r\
\n\r\
4.   Um deputado não pode pertencer a mais de um grupo político.\n\r\
\n\r\
5.   A constituição de um grupo político é comunicada ao Presidente por meio de uma declaração. Essa declaração indica a denominação do grupo, o nome dos deputados que o integram e a composição da mesa. A declaração é assinada por todos os membros do grupo.\n\r\
\n\r\
6.   A declaração é apensa à ata da sessão em que a constituição do grupo político for anunciada.\n\r\
\n\r\
7.   O Presidente anuncia a constituição dos grupos políticos no Parlamento. Este anúncio tem efeitos legais retroativos à data em que o grupo comunicou a sua constituição ao Presidente nos termos do presente artigo.\n\r\
\n\r\
O Presidente anuncia igualmente a dissolução dos grupos políticos no Parlamento. Este anúncio tem efeitos legais a partir do dia seguinte àquele em que o grupo tenha deixado de preencher as condições para a sua existência."
},
{
'id': 33,
'title': 'Artigo 33.º : Atividades e situação jurídica dos grupos políticos',
'text': "1.   Os grupos políticos exercem as suas funções no quadro das atividades da União, incluindo as atribuições que o presente Regimento lhes comete. Os grupos políticos dispõem de um secretariado no quadro do organigrama do Secretariado do Parlamento, dotado de estruturas administrativas e de dotações inscritas para esse efeito no orçamento do Parlamento.\n\r\
\n\r\
2.   No início de cada legislatura, a Conferência dos Presidentes procura chegar a acordo sobre o modo de refletir a diversidade política do Parlamento nas suas comissões, nas suas delegações e nos seus órgãos decisórios.\n\r\
\n\r\
3.   Tendo em conta as propostas feitas pela Conferência dos Presidentes, a Mesa aprova as regras relativas à disponibilização, à execução e ao controlo das estruturas e das dotações referidas no n.º 1, bem como à delegação dos poderes de execução do orçamento que lhes está associada, e às consequências do incumprimento dessas regras.\n\r\
\n\r\
4.   Essas regras estabelecem as consequências administrativas e financeiras resultantes da dissolução de um grupo político."
},
{
'id': 34,
'title': 'Artigo 34.º : Intergrupos',
'text': "1.   Os deputados podem constituir intergrupos ou outros agrupamentos não oficiais de deputados, a fim de proceder a trocas de pontos de vista informais sobre temas específicos entre diferentes grupos políticos, reunindo membros de diferentes comissões parlamentares, e de promover contactos entre os deputados e a sociedade civil.\n\r\
\n\r\
2.   Os referidos agrupamentos são totalmente transparentes nas suas iniciativas e não realizam atividades suscetíveis de gerar confusão com as atividades oficiais do Parlamento ou dos seus órgãos. Desde que as condições previstas na regulamentação aprovada pela Mesa aplicável à sua constituição sejam respeitadas, os grupos políticos podem facilitar as atividades destes agrupamentos dando-lhes apoio logístico.\n\r\
\n\r\
3.   Os intergrupos são obrigados a fazer uma declaração anual de todos os apoios, em numerário ou em espécie (por exemplo, assistência de secretariado), que, se fossem oferecidos aos deputados a título individual, teriam de ser declarados por força do anexo I.\n\r\
\n\r\
4.   Os questores mantêm um registo das declarações a que se refere o n.º 3. Esse registo é publicado no sítio web do Parlamento. Os questores aprovam as regras de execução dessas declarações e asseguram a aplicação efetiva do presente artigo."
},
{
'id': 35,
'title': 'Artigo 35.º : Deputados não inscritos',
'text': "1.   Os deputados que não pertençam a nenhum grupo político dispõem de um secretariado. As regras de execução relativas à disponibilização dos secretariados são estabelecidas pela Mesa, sob proposta do Secretário-Geral.\n\r\
\n\r\
2.   A Mesa determina o estatuto e os direitos parlamentares dos deputados não inscritos.\n\r\
\n\r\
3.   A Mesa aprova a regulamentação relativa à disponibilização, à execução e ao controlo das dotações inscritas no orçamento do Parlamento para cobrir as despesas de secretariado e das estruturas administrativas dos deputados não inscritos."
},
{
'id': 36,
'title': 'Artigo 36.º : Atribuição dos lugares no hemiciclo',
'text': "A Conferência dos Presidentes determina a forma como os lugares são atribuídos  aos grupos políticos, aos deputados não inscritos e às instituições da União no hemiciclo."
},
{
'id': 37,
'title': 'Artigo 37.º : Programação anual',
'text': "1.   O Parlamento participa, juntamente com a Comissão e o Conselho, na definição da programação legislativa da União.\n\r\
\n\r\
O Parlamento e a Comissão cooperam na elaboração do programa de trabalho da Comissão, que constitui o contributo da Comissão para a programação anual e plurianual da União, segundo o calendário e as modalidades acordados entre as duas instituições(1).\n\r\
\n\r\
2.   Após a aprovação do programa de trabalho da Comissão, o Parlamento, o Conselho e a Comissão procedem, nos termos do ponto 7 do Acordo Interinstitucional de 13 de abril de 2016 sobre Legislar Melhor(2), a uma troca de pontos de vista e chegam a acordo quanto a uma declaração comum sobre a programação interinstitucional anual que define objetivos e prioridades gerais.\n\r\
\n\r\
Antes de encetar as negociações com o Conselho e a Comissão sobre a declaração comum, o Presidente efetua uma troca de pontos de vista com a Conferência dos Presidentes e com a Conferência dos Presidentes das Comissões sobre os objetivos e as prioridades gerais do Parlamento.\n\r\
\n\r\
Antes de assinar a declaração comum, o Presidente solicita a aprovação da Conferência dos Presidentes.\n\r\
\n\r\
3.   O Presidente transmite as resoluções aprovadas pelo Parlamento sobre a programação e as prioridades legislativas às outras instituições que participam no processo legislativo da União e aos parlamentos dos Estados-Membros.\n\r\
\n\r\
4.   Caso a Comissão tencione retirar uma proposta, o Comissário responsável é convidado a participar numa reunião da comissão competente para debater essa intenção. A Presidência do Conselho pode também ser convidada para essa reunião. Se a comissão competente não concordar com a retirada da proposta, pode solicitar que a Comissão faça uma declaração ao Parlamento. Aplica-se o artigo 123.º.\n\r\
\n\r\
\n\r\
(1)	Acordo-Quadro de 20 de Outubro de 2010 sobre as relações entre o Parlamento Europeu e a Comissão Europeia (JO L 304 de 20.11.2010, p. 47).\n\r\
(2)	Acordo Interinstitucional de 13 de Abril de 2016 entre o Parlamento Europeu, o Conselho da União Europeia e a Comissão Europeia sobre Legislar Melhor (JO L 123 de 12.5.2016, p. 1)."
},
{
'id': 38,
'title': 'Artigo 38.º : Respeito dos direitos fundamentais',
'text': "1.   O Parlamento respeita integralmente, em todas as suas atividades, os direitos, as liberdades e os princípios reconhecidos no artigo 6.º do Tratado da União Europeia e os valores consagrados no artigo 2.º desse Tratado.\n\r\
\n\r\
2.   Se a comissão competente quanto à matéria de fundo, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo, considerarem que uma proposta de ato legislativo, no todo ou em parte, não respeita os direitos fundamentais da União Europeia, a questão é enviada, a seu pedido, à comissão competente para a proteção dos direitos fundamentais.\n\r\
\n\r\
3.   Esse pedido é apresentado no prazo de quatro semanas de trabalho a contar do anúncio feito no Parlamento do envio da questão à comissão competente quanto à matéria de fundo.\n\r\
\n\r\
4.   O parecer da comissão competente para a proteção dos direitos fundamentais é anexado ao relatório da comissão competente quanto à matéria de fundo."
},
{
'id': 39,
'title': 'Artigo 39.º : Verificação da base jurídica',
'text': "1.   Quando uma  proposta  de  ato  juridicamente  vinculativo  é enviada à  comissão competente quanto à matéria de fundo, essa comissão começa por verificar a sua base jurídica.\n\r\
\n\r\
2.   Se essa comissão contestar a validade ou a pertinência da base jurídica, nomeadamente no contexto da verificação da conformidade com o artigo 5.º do Tratado da União Europeia, solicita o parecer da comissão competente para os assuntos jurídicos.\n\r\
\n\r\
3.   Além disso, a comissão competente para os assuntos jurídicos pode analisar, por sua própria iniciativa, em qualquer etapa do processo legislativo, questões relacionadas com a base jurídica. Nesses casos, informa devidamente a comissão competente quanto à matéria de fundo.\n\r\
\n\r\
4.   Caso a comissão competente para os assuntos jurídicos decida contestar a validade ou a pertinência da base jurídica, se for caso disso, após a troca de pontos de vista com o Conselho e a Comissão de acordo com as modalidades estabelecidas a nível interinstitucional(1), comunica as suas conclusões ao Parlamento. Sem prejuízo do artigo 63.º, o Parlamento procede à votação das conclusões antes de votar sobre o fundo da proposta.\n\r\
\n\r\
5.   Se a comissão competente quanto à matéria de fundo ou a comissão competente para os assuntos jurídicos não tiverem contestado a validade ou a pertinência da base jurídica, as alterações apresentadas em sessão plenária destinadas a alterar a base jurídica não são admissíveis.\n\r\
\n\r\
\n\r\
(1)	Acordo Interinstitucional de 13 de abril de 2016 sobre Legislar Melhor, ponto 25."
},
{
'id': 40,
'title': 'Artigo 40.º : Delegação de poderes legislativos e atribuição de competências de execução',
'text': "1.   Ao examinar uma proposta de ato legislativo que delegue poderes na Comissão nos termos do artigo 290.º do Tratado sobre o Funcionamento da União Europeia, o Parlamento dá especial atenção aos objetivos, ao conteúdo, ao âmbito e à duração da delegação, e às condições a que a mesma fica sujeita.\n\r\
\n\r\
2.   Ao examinar uma proposta de ato legislativo que delegue competências de execução nos termos do artigo 291.º do Tratado sobre o Funcionamento da União Europeia, o Parlamento dá especial atenção ao facto de que, ao exercer uma competência de execução, a Comissão não pode alterar nem completar o ato legislativo, mesmo no que se refere aos seus elementos não essenciais.\n\r\
\n\r\
3.   A comissão competente quanto à matéria de fundo pode solicitar, em qualquer momento, o parecer da comissão competente para a interpretação e a aplicação do direito da União.\n\r\
\n\r\
4.   Além disso, a comissão competente para a interpretação e a aplicação do direito da União pode analisar, por sua própria iniciativa, questões relacionadas com a delegação de poderes legislativos e com a atribuição de competências de execução. Nesses casos, informa devidamente a comissão competente quanto à matéria de fundo."
},
{
'id': 41,
'title': 'Artigo 41.º : Verificação da compatibilidade financeira',
'text': "1.   Caso uma proposta de ato juridicamente vinculativo tenha incidências financeiras, o Parlamento verifica se estão previstos recursos financeiros suficientes.\n\r\
\n\r\
2.   A comissão competente quanto à matéria de fundo verifica a compatibilidade financeira de todas as propostas de atos juridicamente vinculativos com o regulamento que estabelece o quadro financeiro plurianual.\n\r\
\n\r\
3.   Quando a comissão competente quanto à matéria de fundo alterar a dotação financeira do ato examinado, solicita o parecer da comissão competente para as questões orçamentais.\n\r\
\n\r\
4.   Além disso, a  comissão  competente  para  as  questões  orçamentais  pode  analisar,  por  sua própria iniciativa, questões relativas à compatibilidade financeira das propostas de atos juridicamente vinculativos. Nesses casos, informa devidamente a comissão competente quanto à matéria de fundo.\n\r\
\n\r\
5.   Se a comissão competente para as questões orçamentais decidir contestar a compatibilidade financeira de uma proposta, comunica as suas conclusões ao Parlamento antes de este proceder à votação da proposta."
},
{
'id': 42,
'title': 'Artigo 42.º : Verificação do respeito dos princípios da subsidiariedade e da proporcionalidade',
'text': "1.   Durante a apreciação de uma proposta de ato legislativo, o Parlamento dá especial atenção à questão de saber se essa proposta respeita os princípios da subsidiariedade e da proporcionalidade.\n\r\
\n\r\
2.   A comissão competente para o respeito do princípio da subsidiariedade é a única que pode formular recomendações, à comissão competente quanto à matéria de fundo, sobre uma proposta de ato legislativo.\n\r\
\n\r\
3.   Com exceção dos casos urgentes a que se refere o artigo 4.º do Protocolo n.º 1 relativo ao Papel dos Parlamentos Nacionais na União Europeia, a comissão competente quanto à matéria de fundo não procede à sua votação final antes do termo do prazo de oito semanas previsto no artigo 6.º do Protocolo n.º 2 relativo à Aplicação dos Princípios da Subsidiariedade e da Proporcionalidade.\n\r\
\n\r\
4.   Se um parlamento nacional dirigir ao Presidente um parecer fundamentado nos termos do artigo 3.º do Protocolo n.º 1, esse documento é enviado à comissão competente quanto à matéria de fundo e transmitido, para conhecimento, à comissão competente para o respeito do princípio da subsidiariedade.\n\r\
\n\r\
5.   Se os pareceres fundamentados sobre o incumprimento do princípio da subsidiariedade por um projeto de ato legislativo representarem pelo menos um terço de todos os votos atribuídos aos parlamentos nacionais nos termos do segundo parágrafo do artigo 7.º, n.º 1, do Protocolo n.º 2, ou um quarto no caso de um projeto de ato legislativo apresentado com base no artigo 76.º do Tratado sobre o Funcionamento da União Europeia, o Parlamento não se pronuncia antes de o autor da proposta indicar como tenciona proceder.\n\r\
\n\r\
6.   Se, no quadro do processo legislativo ordinário, os pareceres fundamentados sobre o incumprimento do princípio da subsidiariedade por uma proposta de ato legislativo representarem pelo menos a maioria simples dos votos atribuídos aos parlamentos nacionais nos termos do segundo parágrafo do artigo 7.º, n.º 1, do Protocolo n.º 2, a comissão competente quanto à matéria de fundo pode recomendar, uma vez examinados os pareceres fundamentados apresentados pelos parlamentos nacionais e pela Comissão, e tendo ouvido a comissão competente para o respeito do princípio da subsidiariedade, que o Parlamento rejeite a proposta em virtude de a mesma violar o princípio da subsidiariedade, ou apresentar ao Parlamento qualquer outra recomendação,  a  qual  pode  incluir  sugestões  de  alterações  relacionadas  com  o  respeito  do princípio da subsidiariedade. O parecer da comissão competente para o respeito do princípio da subsidiariedade é anexado à recomendação.\n\r\
\n\r\
A recomendação é apresentada ao Parlamento para debate e votação. Se uma recomendação destinada a rejeitar a proposta for aprovada por maioria dos votos expressos, o Presidente declara encerrado o processo. Se o Parlamento não rejeitar a proposta, o processo segue o seu curso, tendo em conta as recomendações aprovadas pelo Parlamento."
},
{
'id': 43,
'title': 'Artigo 43.º : Acesso aos documentos e informação do Parlamento',
'text': "1.   Durante o processo legislativo, o Parlamento e as suas comissões podem solicitar acesso a todos os documentos relacionados com propostas de atos legislativos nas mesmas condições que o Conselho e os seus grupos de trabalho.\n\r\
\n\r\
2.   Durante a apreciação de uma proposta de ato legislativo, a comissão competente solicita que a Comissão e o Conselho a mantenham informada do andamento dessa proposta no Conselho e nos seus grupos de trabalho, e, em particular, de qualquer possível compromisso suscetível de alterar substancialmente a proposta inicial, ou da intenção do autor de retirar a sua proposta."
},
{
'id': 44,
'title': 'Artigo 44.º : Representação do Parlamento nas reuniões do Conselho',
'text': "Quando o Conselho convidar o Parlamento para participar numa reunião do Conselho, o Presidente solicita ao presidente ou ao relator da comissão competente quanto à matéria de fundo, ou a outro deputado designado por essa comissão, que represente o Parlamento."
},
{
'id': 45,
'title': 'Artigo 45.º : Direito do Parlamento de apresentar propostas',
'text': "Nos casos em que os Tratados conferem um direito de iniciativa ao Parlamento, a comissão competente pode decidir elaborar um relatório de iniciativa nos termos do artigo 52.º do Regimento.\n\r\
\n\r\
Esse relatório inclui:\n\r\
\n\r\
a)   Uma proposta de resolução;\n\r\
\n\r\
b)   Um projeto de proposta;\n\r\
\n\r\
c)   Uma exposição de motivos que contém, se for caso disso, uma ficha financeira.\n\r\
\n\r\
Caso a aprovação de um ato pelo Parlamento exija a aprovação ou o acordo do Conselho e o parecer ou o acordo da Comissão, o Parlamento pode decidir, na sequência da votação do ato proposto, e sob proposta do relator, adiar a votação da proposta de resolução até que o Conselho ou a Comissão tenham formulado a sua posição."
},
{
'id': 46,
'title': 'Artigo 46.º : Pedidos de apresentação de propostas dirigidos à Comissão',
'text': "1.   O Parlamento pode solicitar que a Comissão lhe apresente, nos termos do artigo 225.º do Tratado  sobre  o  Funcionamento  da  União  Europeia,   propostas  adequadas  para  a aprovação de novos atos ou para a alteração dos atos existentes. Para o efeito, o Parlamento aprova uma resolução com base num relatório de iniciativa elaborado pela comissão competente nos termos do artigo 52.º do Regimento. Para a aprovação  da  resolução,  são  necessários  os  votos  favoráveis  da  maioria  dos  membros  que compõem o Parlamento na votação final. O Parlamento pode fixar, simultaneamente, um prazo para a apresentação dessas propostas.\n\r\
\n\r\
2.   Qualquer deputado pode apresentar uma proposta de um ato da União ao abrigo do direito de iniciativa conferido ao Parlamento pelo artigo 225.º do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
Essa proposta pode ser apresentada conjuntamente por um máximo de 10 deputados. A proposta deve indicar a base jurídica em que se baseia e pode ser acompanhada por uma exposição de motivos com um máximo de 150 palavras.\n\r\
\n\r\
A proposta é apresentada ao Presidente, que verifica se os requisitos legais estão cumpridos. O Presidente  pode  transmitir  a  proposta,  para  parecer  sobre  a  pertinência  da  base  jurídica,  à comissão competente para efetuar essa verificação. Se o Presidente declarar a proposta admissível, anuncia-a em sessão plenária e transmite-a à comissão competente quanto à matéria de fundo.\n\r\
\n\r\
Antes de ser transmitida à comissão competente quanto à matéria de fundo, a proposta é traduzida para as línguas oficiais que o presidente dessa comissão considere necessárias para possibilitar um exame sumário.\n\r\
\n\r\
A comissão competente quanto à matéria de fundo toma uma decisão sobre o seguimento a dar à proposta no prazo de três meses a contar da sua receção, após ter dado aos seus autores a oportunidade de se dirigirem à comissão.\n\r\
\n\r\
Os nomes dos autores da proposta figuram no título do respetivo relatório.\n\r\
\n\r\
3.   A  resolução  do  Parlamento  indica  a  base  jurídica  pertinente  e  é  acompanhada  de recomendações quanto ao conteúdo da proposta requerida.\n\r\
\n\r\
4.   Se uma proposta tiver incidências financeiras, o Parlamento indica a forma de assegurar uma cobertura financeira suficiente.\n\r\
\n\r\
5.   A comissão competente quanto à matéria de fundo acompanha a preparação de todos os projetos de atos legislativos da União elaborados na sequência de um pedido específico do Parlamento.\n\r\
\n\r\
6.   A Conferência dos Presidentes das Comissões verifica periodicamente se a Comissão cumpre o disposto no ponto 10 do Acordo Interinstitucional sobre Legislar Melhor, segundo o qual a Comissão deve dar resposta aos pedidos de apresentação de propostas no prazo de três meses, indicando o seguimento que tenciona dar‑lhes mediante a adoção de uma comunicação específica. A Conferência dos Presidentes das Comissões comunica periodicamente à Conferência dos Presidentes os resultados dessa verificação."
},
{
'id': 47,
'title': 'Artigo 47.º : Apreciação dos atos juridicamente vinculativos',
'text': "1.   O Presidente envia as propostas de atos juridicamente vinculativos recebidas das instituições ou dos Estados-Membros às comissões competentes, para apreciação.\n\r\
\n\r\
2.   Em  caso  de  dúvida,  o  Presidente  pode  submeter  à  apreciação  da  Conferência  dos Presidentes,  antes  de  anunciar  em  sessão  plenária  o  envio  à  comissão  competente,  qualquer questão relativa à definição de competências. A Conferência dos Presidentes toma a sua decisão com base numa recomendação da Conferência dos Presidentes das Comissões, ou do presidente da Conferência dos Presidentes das Comissões, nos termos do artigo 201.º-A, n.º 2.\n\r\
\n\r\
3.   A comissão competente pode decidir designar, em qualquer momento, um relator para acompanhar a fase de preparação da proposta. A comissão competente deve ponderar fazê-lo, em particular, caso a proposta figure no programa de trabalho da Comissão.\n\r\
\n\r\
4.   Em caso de conflito entre uma disposição do Regimento respeitante à segunda ou à terceira leituras e qualquer outra disposição do Regimento, prevalece a disposição respeitante à segunda ou à terceira leituras.\n\r\
\n\r\
Artigo 47.º-A : Aceleração dos procedimentos legislativos\n\r\
\n\r\
A aceleração dos procedimentos legislativos em coordenação com o Conselho e a Comissão no que diz respeito a propostas específicas, selecionadas em particular de entre as propostas identificadas como prioritárias na declaração comum sobre a programação interinstitucional anual nos termos do artigo 37.º, n.º 2, pode ser decidida pela comissão ou comissões competentes."
},
{
'id': 48,
'title': 'Artigo 48.º : Procedimentos legislativos sobre iniciativas apresentadas pelas instituições, com exceção da Comissão, ou pelos Estados-Membros',
'text': "1.   Quando proceder ao exame de iniciativas apresentadas pelas instituições, com exceção da Comissão, ou pelos Estados-Membros, a comissão competente pode convidar representantes dessas instituições ou desses Estados-Membros a apresentarem-lhe a iniciativa em causa. Os representantes dos Estados-Membros podem ser acompanhados pela Presidência do Conselho.\n\r\
\n\r\
2.   Antes de proceder à votação, a comissão competente solicita que a Comissão a informe se está a preparar um parecer sobre a iniciativa, ou se tenciona apresentar uma proposta alternativa a breve trecho. Se a resposta recebida for afirmativa, a comissão não aprova o seu relatório antes de receber o parecer ou a proposta alternativa da Comissão.\n\r\
\n\r\
3.   Quando forem apresentadas ao Parlamento, em simultâneo ou dentro de um curto período, duas ou mais propostas, emanadas da Comissão e/ou de outra instituição e/ou dos Estados- Membros, com o mesmo objetivo legislativo, o Parlamento procede à sua apreciação num único relatório. No seu relatório, a comissão competente indica a que textos se referem as alterações propostas, e refere-se a todos os outros textos na resolução legislativa."
},
{
'id': 49,
'title': 'Artigo 49.º : Relatórios legislativos',
'text': "1.   O presidente de uma comissão à qual seja enviada uma proposta de ato juridicamente vinculativo propõe à comissão o procedimento a seguir.\n\r\
\n\r\
2.   Após ter tomado uma decisão sobre o procedimento a seguir, e caso não se aplique o processo simplificado nos termos do artigo 50.º, a comissão nomeia, de entre os seus membros titulares ou os seus suplentes permanentes, se ainda não o tiver feito com base no artigo 47.º, n.º 3, um relator sobre a proposta de ato juridicamente vinculativo.\n\r\
\n\r\
3.   O relatório da comissão inclui:\n\r\
\n\r\
a)   Alterações à proposta, caso existam, acompanhadas, se adequado, de breves justificações da responsabilidade do autor, que não são postas à votação;\n\r\
\n\r\
b)   Um projeto de resolução legislativa, nos termos do artigo 59.º, n.º 5;\n\r\
\n\r\
c)   Se adequado, uma exposição de motivos que contenha, se for caso disso, uma ficha financeira que estabelece a magnitude do impacto financeiro do relatório, caso exista, e a sua compatibilidade com o quadro financeiro plurianual;\n\r\
\n\r\
(d)   Se disponível, uma referência à avaliação de impacto do Parlamento."
},
{
'id': 50,
'title': 'Artigo 50.º : Processo simplificado',
'text': "1.   Na sequência de um primeiro debate sobre uma proposta de ato juridicamente vinculativo, o presidente pode propor que a proposta seja aprovada sem alterações. Salvo oposição de um número de deputados ou de um ou vários grupos políticos que atinjam pelo menos o limiar médio na comissão, considera-se que o processo proposto foi aprovado. O presidente ou, caso tenha sido nomeado um relator, este último, apresentam ao Parlamento um relatório de aprovação da proposta. Aplica-se o artigo 150.º, n.º 1, segundo parágrafo, e n.ºs 2 e 4.\n\r\
\n\r\
2.   Em alternativa, o presidente pode propor que ele próprio ou o relator redijam uma série de alterações que reflitam os debates da comissão. Salvo oposição de um número de deputados ou de um ou vários grupos políticos que atinjam pelo menos o limiar médio na comissão, considera-se que o processo proposto foi aprovado, e as alterações são enviadas aos membros da comissão.\n\r\
\n\r\
Salvo se um número de deputados ou um ou vários grupos políticos que atinjam pelo menos o limiar médio na comissão tiverem formulado objeções às alterações num prazo fixado, que não pode ser inferior a 10 dias úteis a contar da data da sua transmissão, o relatório é considerado aprovado pela comissão. Neste caso, o projeto de resolução legislativa e as alterações são submetidos à aprovação do Parlamento, sem debate, nos termos do artigo 150.º, n.º 1, segundo parágrafo, e n.ºs 2 e 4.\n\r\
\n\r\
Se um número de deputados ou um ou vários grupos políticos que atinjam pelo menos o limiar médio na comissão formularem objeções às alterações, estas são postas à votação na reunião seguinte da comissão.\n\r\
\n\r\
3.   Com exceção das disposições relativas à apresentação ao Parlamento, o presente artigo aplica-se, com as necessárias adaptações, aos pareceres das comissões, na aceção do artigo 53.º."
},
{
'id': 51,
'title': 'Artigo 51.º : Relatórios não legislativos',
'text': "1.   Caso uma comissão elabore um relatório não legislativo, nomeia um relator de entre os seus membros titulares ou os seus substitutos permanentes.\n\r\
\n\r\
2.   O relatório da comissão inclui:\n\r\
\n\r\
a)   Uma proposta de resolução;\n\r\
\n\r\
b)   Uma exposição de motivos que contenha, se necessário, uma ficha financeira que estabelece a magnitude do impacto financeiro do relatório, caso exista, e a sua compatibilidade com o quadro financeiro plurianual;\n\r\
\n\r\
c)   O texto das propostas de resolução que nele devam figurar nos termos do artigo 133.º, n.º 7."
},
{
'id': 52,
'title': 'Artigo 52.º : Relatórios de iniciativa',
'text': "1.   Caso uma comissão pretenda elaborar um relatório não legislativo ou um relatório nos termos dos artigos 45.º ou 46.º sobre matéria da sua competência sobre a qual não tenha sido consultada, só pode fazê-lo com autorização prévia da Conferência dos Presidentes.\n\r\
\n\r\
A Conferência dos Presidentes decide sobre os pedidos de autorização para elaborar relatórios apresentados nos termos do primeiro parágrafo com base em disposições de aplicação que ela própria estabelece.\n\r\
\n\r\
2.   Caso a Conferência dos Presidentes decida recusar essa autorização, indica as razões da sua recusa.\n\r\
\n\r\
Caso o objeto do relatório se inscreva no direito de iniciativa do Parlamento a que se refere o artigo  45.º,  a Conferência dos Presidentes só pode decidir recusar essa  autorização  se  as  condições  definidas  nos  Tratados  não estiverem preenchidas.\n\r\
\n\r\
3.   Nos casos referidos nos artigos 45.º e 46.º, a Conferência dos Presidentes toma uma decisão no prazo de dois meses.\n\r\
\n\r\
4.   As propostas de resolução apresentadas ao Parlamento são apreciadas pelo procedimento de breve apresentação definido no artigo 151.º. As alterações a essas propostas de resolução e os pedidos de votação por partes e de votação em separado só são admissíveis para apreciação no plenário se forem apresentados pelo relator a fim de ter em conta novas informações ou, no mínimo, por um décimo dos deputados. Os grupos políticos podem apresentar propostas de resolução alternativas nos termos do artigo 170.º, n.º 3. O artigo 180.º aplica-se à proposta de resolução da comissão  e  às  alterações  à  mesma.  O  artigo  180.º  aplica-se  igualmente  à  votação  única  de propostas de resolução alternativas.\n\r\
\n\r\
5.   O n.º 4 não se aplica nos casos em que o objeto do relatório justifique um debate prioritário no plenário, em que o relatório seja elaborado em conformidade com o direito de iniciativa referido nos artigos 45.º ou 46.º, ou em que o relatório tenha sido autorizado como relatório estratégico(1).\n\r\
\n\r\
\n\r\
(1)	Ver decisão aplicável da Conferência dos Presidentes.\n\r\
\n\r\
Artigo 52.º-A : Elaboração dos relatórios\n\r\
\n\r\
1.   O relator fica encarregado de elaborar o relatório da comissão e de o apresentar ao Parlamento em nome da comissão.\n\r\
\n\r\
2.   A exposição de motivos é da responsabilidade do relator e não é posta à votação. No entanto, deve ser conforme com o texto da proposta de resolução aprovada e com as alterações propostas pela comissão. Caso contrário, o presidente da comissão pode suprimi-la.\n\r\
\n\r\
3.   O relatório menciona o resultado da votação feita sobre o texto na sua globalidade e, nos termos do artigo 208.º, n.º 3, indica o sentido do voto de cada deputado.\n\r\
\n\r\
4.   As  posições  minoritárias  podem  ser  expressas  aquando  da  votação  do  texto  na  sua globalidade e, a pedido dos seus autores, podem ser objeto de uma declaração escrita, com o máximo de 200 palavras, que é anexada à exposição de motivos.\n\r\
\n\r\
O presidente da comissão arbitra os litígios a que a aplicação do presente número possa dar origem.\n\r\
\n\r\
5.   Sob proposta do presidente, a comissão pode fixar um prazo para o relator lhe apresentar o projeto de relatório. Este prazo pode ser prorrogado, ou nomeado um novo relator.\n\r\
\n\r\
6.   Após o termo desse prazo, a comissão pode encarregar o seu presidente de solicitar que o assunto apresentado à comissão seja inscrito na ordem do dia de uma das sessões seguintes do Parlamento. Nesse caso, os debates e as votações podem realizar-se com base num relatório oral da comissão interessada."
},
{
'id': 53,
'title': 'Artigo 53.º : Pareceres das comissões',
'text': "1.   Se a comissão inicialmente consultada sobre uma questão desejar ouvir a opinião de outra comissão, ou se outra comissão pretender dar a conhecer a sua opinião à comissão inicialmente consultada sobre essa questão, essas comissões podem requerer ao Presidente, nos termos do artigo 201.º, n.º 2, que uma das comissões seja designada como comissão competente e a outra como comissão encarregada de emitir parecer.\n\r\
\n\r\
A comissão encarregada de emitir parecer pode nomear, de entre os seus membros titulares ou os seus suplentes permanentes, um relator de parecer, ou enviar as suas opiniões sob a forma de uma carta do seu presidente.\n\r\
\n\r\
2.   No caso de uma proposta de ato juridicamente vinculativo, o parecer consiste em alterações ao texto enviado à comissão, acompanhadas, se adequado, de breves justificações. As justificações são da responsabilidade do seu autor e não são postas à votação. Se necessário, a comissão encarregada de emitir parecer pode apresentar uma breve justificação escrita do parecer como um todo. Essa breve justificação escrita é da responsabilidade do relator de parecer.\n\r\
\n\r\
No caso de uma proposta de ato juridicamente não vinculativo, o parecer consiste em sugestões relativamente a partes da proposta de resolução apresentada pela comissão competente.\n\r\
\n\r\
A comissão competente põe essas alterações ou sugestões à votação.\n\r\
\n\r\
Os pareceres incidem unicamente nas questões que se inscrevam nas áreas de competência da comissão encarregada de emitir parecer.\n\r\
\n\r\
3.   A  comissão  competente  fixa  um  prazo  para  a comissão encarregada de emitir parecer emitir o seu parecer, a fim de poder tê-lo em conta. A comissão competente notifica imediatamente a comissão ou as comissões encarregadas de emitir parecer de qualquer alteração do calendário anunciado. A comissão competente não aprova as suas conclusões finais antes do termo desse prazo.\n\r\
\n\r\
4.   Em alternativa, a comissão encarregada de emitir parecer pode decidir apresentar a sua posição sob a forma de alterações a apresentar diretamente na comissão competente após terem sido aprovadas. Estas alterações são apresentadas pelo presidente ou pelo relator em nome da comissão encarregada de emitir parecer.\n\r\
\n\r\
5.   A comissão encarregada de emitir parecer apresenta as alterações a que se refere o n.º 4 dentro do prazo para a apresentação de alterações fixado pela comissão competente.\n\r\
\n\r\
6.   Os pareceres e as alterações aprovados pela comissão encarregada de emitir parecer são anexados ao relatório da comissão competente.\n\r\
\n\r\
7.   As comissões encarregadas de emitir parecer na aceção do presente artigo não podem apresentar alterações para apreciação no Parlamento.\n\r\
\n\r\
8.   O presidente e o relator da comissão encarregada de emitir parecer são convidados a participar, a título consultivo, nas reuniões da comissão competente que abordem a questão comum."
},
{
'id': 54,
'title': 'Artigo 54.º : Processo de comissões associadas',
'text': "1.   Se uma questão de competência for submetida à Conferência dos Presidentes nos termos do artigo 201.º-A, e a Conferência dos Presidentes entender, com base no anexo V, que o assunto se enquadra quase em igual medida na esfera de competências de duas ou mais comissões, ou que diferentes partes do assunto são da competência de duas ou mais comissões, aplica-se o artigo 53.º, com as seguintes disposições complementares:\n\r\
\n\r\
-   o calendário é aprovado de comum acordo pelas comissões interessadas;\n\r\
\n\r\
-   os relatores interessados mantêm-se mutuamente informados e procuram chegar a acordo sobre os textos que proporão às suas comissões e sobre a sua posição relativamente às alterações;\n\r\
\n\r\
-   os  presidentes  e  os  relatores  interessados  ficam  vinculados  ao  princípio  de cooperação sã e leal; identificam em conjunto as partes do texto que se enquadram no âmbito da sua competência exclusiva ou partilhada, e chegam a acordo quanto às formas precisas da sua cooperação; em caso de desacordo quanto à delimitação das competências, a questão é submetida, a pedido de uma das comissões em causa, à apreciação da Conferência dos Presidentes; a Conferência dos Presidentes pode deliberar sobre a questão das respetivas competências ou decidir que deve ser aplicado o processo de reuniões conjuntas das comissões, nos termos do artigo 55.º; a Conferência dos Presidentes toma a sua decisão pelo procedimento previsto e dentro do prazo fixado no artigo 201.º-A;\n\r\
\n\r\
-   a comissão competente aceita, sem as pôr à votação, as alterações de uma comissão associada desde que digam respeito a assuntos  que  se  enquadrem  no  âmbito  da  competência  exclusiva  da  comissão associada; se a comissão competente não respeitar a competência   exclusiva   da   comissão   associada,   a   comissão   associada   pode apresentar alterações diretamente no plenário; se a comissão competente não aprovar alterações sobre questões que se enquadrem no âmbito da sua competência partilhada com uma comissão associada, a comissão associada pode apresentar essas alterações diretamente no plenário;\n\r\
\n\r\
-   no caso de a proposta ser objeto de um processo de conciliação, a delegação do Parlamento integra o relator da comissão associada em causa.\n\r\
\n\r\
A decisão da Conferência dos Presidentes de aplicar o processo de comissões associadas aplica-se em todas as fases do processo em causa.\n\r\
\n\r\
Os direitos ligados ao estatuto de «comissão competente» são exercidos pela comissão principal. No exercício desses direitos, a comissão principal deve ter devidamente em conta as prerrogativas da comissão associada. Em particular, a comissão principal deve cumprir a obrigação de respeitar o princípio de cooperação leal quanto ao calendário, e deve respeitar o direito que assiste à comissão associada de determinar as alterações apresentadas em sessão plenária que se inserem no âmbito da sua competência exclusiva.\n\r\
\n\r\
2.   O processo previsto no presente artigo não se aplica às recomendações a adotar pela comissão competente nos termos do artigo 99.º."
},
{
'id': 55,
'title': 'Artigo 55.º : Processo de comissões conjuntas',
'text': "1.   Quando lhe for submetida uma questão de competência nos termos do artigo 201.º-A, a Conferência dos Presidentes pode decidir que se aplique o processo de reuniões conjuntas das comissões e uma votação conjunta, desde que:\n\r\
\n\r\
-   por força do anexo V, o assunto se insira indissociavelmente na esfera de competências de várias comissões, e\n\r\
\n\r\
-   a Conferência considere que a questão é muito importante.\n\r\
\n\r\
2.   Nesse caso, os respetivos relatores elaboram um único projeto de relatório, que é examinado e votado pelas comissões interessadas em reuniões conjuntas realizadas sob a presidência conjunta dos seus presidentes.\n\r\
\n\r\
Em todas as fases do processo, os direitos ligados à qualidade de comissão competente só podem ser exercidos pelas comissões interessadas se estas agirem em conjunto. As comissões interessadas podem criar grupos de trabalho para preparar as reuniões e as votações.\n\r\
\n\r\
3.   Na fase de segunda leitura do processo legislativo ordinário, a posição do Conselho é apreciada numa reunião conjunta das comissões interessadas, a qual, caso os seus presidentes não cheguem a acordo, se realizará na quarta-feira da primeira semana reservada às reuniões de órgãos parlamentares subsequente à comunicação da posição do Conselho ao Parlamento. Caso não se chegue a acordo sobre a convocação de uma reunião ulterior, essa reunião é convocada pelo presidente da Conferência dos Presidentes das Comissões. A votação da recomendação para segunda leitura realiza-se numa reunião conjunta com base num projeto comum elaborado pelos respetivos relatores das comissões interessadas ou, na falta de um projeto comum, com base nas alterações apresentadas nas comissões interessadas.\n\r\
\n\r\
Na fase de terceira leitura do processo legislativo ordinário, os presidentes e os relatores das comissões interessadas são, ex officio, membros da delegação ao Comité de Conciliação."
},
{
'id': 56,
'title': 'Artigo 56.º : (suprimido)',
'text': ""
},
{
'id': 57,
'title': 'Artigo 57.º : (suprimido)',
'text': ""
},
{
'id': 58,
'title': 'Artigo 58.º : (suprimido)',
'text': ""
},
{
'id': 59,
'title': 'Artigo 59.º : Votação no Parlamento – primeira leitura',
'text': "1.   O Parlamento pode aprovar, alterar ou rejeitar o projeto de ato legislativo.\n\r\
\n\r\
2.   O Parlamento vota em primeiro lugar qualquer proposta de rejeição imediata do projeto de ato legislativo apresentada por escrito pela comissão competente, por um grupo político ou por um número de deputados que atinja pelo menos o limiar baixo.\n\r\
\n\r\
Se essa proposta de rejeição for aprovada, o Presidente solicita à instituição em causa que retire o projeto de ato legislativo.\n\r\
\n\r\
Se a instituição em causa retirar o projeto de ato legislativo, o Presidente declara encerrado o processo.\n\r\
\n\r\
Se a instituição em causa não retirar o projeto de ato legislativo, o Presidente anuncia que a primeira leitura do Parlamento está concluída, salvo se, sob proposta do presidente ou do relator da comissão competente, de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, o Parlamento decidir devolver o assunto à comissão competente para reapreciação.\n\r\
\n\r\
Se a proposta de rejeição não for aprovada, o Parlamento procede nos termos dos n.ºs 3, 4 e 5.\n\r\
\n\r\
3.   Qualquer acordo provisório apresentado pela comissão competente nos termos do artigo 69.º-F, n.º 4, é votado prioritariamente e submetido a uma votação única, salvo se, a pedido de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, o Parlamento decidir, em vez disso, proceder à votação das alterações, nos termos do n.º 4. Nesse caso, o Parlamento decide também se procederá à votação imediata das alterações. Caso contrário, o Parlamento fixa um novo prazo para a apresentação de alterações, e a votação realizar-se-á numa sessão ulterior.\n\r\
\n\r\
Se, nessa votação única, o acordo provisório for aprovado, o Presidente anuncia que a primeira leitura do Parlamento está concluída.\n\r\
\n\r\
Se, nessa votação única, o acordo provisório não obtiver a maioria dos votos expressos, o Presidente fixa um novo prazo para a apresentação de alterações ao projeto de ato legislativo. Essas alterações serão postas à votação numa sessão ulterior, para que o Parlamento conclua a sua primeira leitura.\n\r\
\n\r\
4.   Exceto se tiver sido aprovada uma proposta de rejeição nos termos do n.º 2, ou se tiver sido aprovado um acordo provisório nos termos do n.º 3, as alterações ao projeto de ato legislativo são postas à votação, incluindo, se for caso disso, as partes do acordo provisório em relação às quais tenham sido apresentados pedidos de votação por partes ou em separado, ou tenham sido apresentadas alterações concorrentes.\n\r\
\n\r\
Antes de o Parlamento proceder à votação das alterações, o Presidente pode solicitar que a Comissão dê a conhecer a sua posição e que o Conselho apresente as suas observações.\n\r\
\n\r\
Depois de ter votado essas alterações, o Parlamento procede à votação do projeto de ato legislativo como um todo, alterado ou não.\n\r\
\n\r\
Se o projeto de ato legislativo como um todo, alterado ou não, for aprovado, o Presidente anuncia que a primeira leitura  do  Parlamento  está  concluída,  salvo  se,  sob  proposta  do  presidente  ou  do  relator  da comissão competente, de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, o Parlamento decidir devolver o assunto à comissão competente, para a realização de negociações interinstitucionais nos termos dos artigos 59.º-A e 69.º-F.\n\r\
\n\r\
Se o projeto de ato legislativo como um todo, alterado ou não, não obtiver a maioria dos votos expressos, o Presidente anuncia que a primeira leitura do Parlamento está concluída, salvo se, sob proposta do presidente ou do relator da comissão competente, de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, o Parlamento decidir devolver o assunto à comissão competente para reapreciação.\n\r\
\n\r\
5.   Após as votações realizadas nos termos dos n.ºs 2, 3 e 4, e a votação subsequente das alterações ao projeto de resolução legislativa relativas a pedidos de caráter processual, se as houver, a resolução legislativa é considerada aprovada. Se necessário, a resolução legislativa é modificada nos termos do artigo 193.º, n.º 2, a fim de refletir o resultado das votações realizadas nos termos dos n.ºs 2, 3 e 4.\n\r\
\n\r\
O Presidente transmite o texto da resolução legislativa e da posição do Parlamento ao Conselho e à Comissão, bem como, caso o projeto de ato legislativo deles tenha emanado, ao grupo de Estados-Membros em causa, ao Tribunal de Justiça ou ao Banco Central Europeu.\n\r\
\n\r\
Artigo 59.º-A : Devolução à comissão competente\n\r\
\n\r\
Se, nos termos do artigo 59.º, um assunto for devolvido à comissão competente para reapreciação ou para a realização de negociações interinstitucionais nos termos do artigo 69.º-F, a comissão competente informa o Parlamento, oralmente ou por escrito, no prazo de quatro meses. Esse prazo pode ser prorrogado pela Conferência dos Presidentes.\n\r\
\n\r\
Após uma devolução à comissão, a comissão principal, antes de tomar uma decisão quanto ao procedimento a seguir, deve permitir, como previsto no artigo 54.º, que uma comissão associada selecione as alterações que se inserem no âmbito da sua competência exclusiva e escolha, em particular, as que deverão ser apresentadas de novo ao Parlamento.\n\r\
\n\r\
Nada obsta a que o Parlamento realize, se adequado, um debate final, na sequência do relatório da comissão competente, à qual o assunto tenha sido devolvido."
},
{
'id': 60,
'title': 'Artigo 60.º : (suprimido)',
'text': ""
},
{
'id': 61,
'title': 'Artigo 61.º : (suprimido)',
'text': ""
},
{
'id': 62,
'title': 'Artigo 62.º : (suprimido)',
'text': ""
},
{
'id': 63,
'title': 'Artigo 63.º : Nova consulta do Parlamento',
'text': "1.   A pedido da comissão competente, o Presidente solicita que a Comissão submeta de novo a sua proposta ao Parlamento se:\n\r\
\n\r\
-   a    Comissão    substituir,    alterar    substancialmente    ou    tencionar    alterar substancialmente a sua proposta inicial após o Parlamento ter aprovado a sua posição, exceto se o fizer a fim de ter em conta a posição do Parlamento;\n\r\
\n\r\
-   a natureza do problema sobre o qual a proposta incide se alterar substancialmente com o decorrer do tempo ou por alteração das circunstâncias; ou\n\r\
\n\r\
-   tiverem sido realizadas novas eleições para o Parlamento após este ter aprovado a sua posição, e a Conferência dos Presidentes o tiver por conveniente.\n\r\
\n\r\
2.   Caso se preveja uma alteração da base jurídica de uma proposta que leve a que o processo legislativo ordinário deixe de ser aplicável a essa proposta, o Parlamento, o Conselho e a Comissão, agindo através dos respetivos Presidentes ou dos seus representantes, procedem, nos termos do ponto 25 do Acordo Interinstitucional sobre Legislar Melhor, a uma troca de pontos de vista sobre a questão.\n\r\
\n\r\
3.   Na sequência da troca de pontos de vista a que se refere o n.º 2, o Presidente, a pedido da comissão competente, solicita ao Conselho que apresente de novo o projeto de ato juridicamente vinculativo ao Parlamento, caso a Comissão ou o Conselho tencionem alterar a base jurídica prevista na posição do Parlamento em primeira leitura, e daí resulte que o processo legislativo ordinário deixe de ser aplicável.\n\r\
\n\r\
Artigo 63.º-A : Acordo em primeira leitura\n\r\
\n\r\
Caso, nos termos do artigo 294.º, n.º 4, do Tratado sobre o Funcionamento da União Europeia, o Conselho tenha informado o Parlamento de que aprovou a posição do Parlamento, o Presidente, após a finalização prevista no artigo 193.º, anuncia em sessão plenária que o ato legislativo foi aprovado com a redação que lhe foi dada na posição do Parlamento."
},
{
'id': 64,
'title': 'Artigo 64.º : Transmissão da posição do Conselho',
'text': "1.   A transmissão da posição do Conselho nos termos do artigo 294.º do Tratado sobre o Funcionamento da União Europeia tem lugar quando o Presidente a anuncia no Parlamento. O  Presidente  faz  o  anúncio  após  ter  recebido  os  documentos  que  contêm a posição propriamente dita, todas as declarações exaradas na ata da reunião do Conselho em que este aprovou a sua posição, as razões que levaram o Conselho a aprová-la, e a posição da Comissão, devidamente traduzidos em todas as línguas oficiais da União Europeia. O anúncio do Presidente é feito durante o período de sessões seguinte à receção desses documentos.\n\r\
\n\r\
Antes de fazer o anúncio, o Presidente verifica, após ter consultado o presidente da comissão competente ou o relator, ou ambos, se o texto recebido é efetivamente a posição em primeira leitura do Conselho  e  se  não  se aplicam as circunstâncias  previstas  no  artigo  63.º.  Caso  contrário,  o Presidente procura, em conjunto com a comissão competente e, se possível, de acordo com o Conselho, encontrar a solução adequada.\n\r\
\n\r\
2.   A posição do Conselho considera‑se automaticamente enviada à comissão competente em primeira leitura no dia em que foi anunciada no Parlamento.\n\r\
\n\r\
3.   A lista destas comunicações é publicada na ata das sessões, com indicação das comissões competentes."
},
{
'id': 65,
'title': 'Artigo 65.º : Prorrogação de prazos',
'text': "1.   A pedido do presidente da comissão competente, o Presidente prorroga os prazos para segunda leitura nos termos do artigo 294.º, n.º 14, do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
2.   O Presidente notifica o Parlamento de todas as prorrogações de prazos feitas nos termos do artigo 294.º, n.º 14, do Tratado sobre o Funcionamento da União Europeia, quer essas prorrogações sejam da iniciativa do Parlamento ou do Conselho."
},
{
'id': 66,
'title': 'Artigo 66.º : Processo de apreciação na comissão competente',
'text': "1.   A posição do Conselho é inscrita como ponto prioritário da ordem do dia da primeira reunião da comissão competente que se realize após a sua transmissão. O Conselho pode ser convidado a apresentar a sua posição.\n\r\
\n\r\
2.   Salvo decisão em contrário da comissão competente, o relator para a segunda leitura é o mesmo que o relator da primeira leitura.\n\r\
\n\r\
3.   As  disposições do artigo 69.º, n.ºs 2 e 3, respeitantes  à  admissibilidade  das  alterações  à  posição  do  Conselho, aplicam-se ao processo de deliberação da comissão competente; só os membros da comissão ou os seus substitutos permanentes podem apresentar propostas de rejeição e alterações. A comissão delibera por maioria dos votos expressos.\n\r\
\n\r\
4.   A comissão competente apresenta uma recomendação para segunda leitura que propõe a aprovação, a alteração ou a rejeição da posição aprovada pelo Conselho. A recomendação inclui uma breve justificação da decisão proposta.\n\r\
\n\r\
5.   Os artigos 49.º, 50.º, 53.º e 188.º não se aplicam à segunda leitura."
},
{
'id': 67,
'title': 'Artigo 67.º : Apresentação no Parlamento',
'text': "A posição do Conselho e, caso esteja disponível, a recomendação para segunda leitura da comissão competente são automaticamente incluídas no projeto de ordem do dia do período de sessões cuja quarta-feira anteceda imediatamente o dia em que o prazo de três meses ou, em caso de prorrogação nos termos do artigo 65.º, o prazo de quatro meses, expire, salvo se o assunto tiver sido tratado num período de sessões anterior.\n\r\
\n\r\
Artigo 67.º-A : Votação no Parlamento – segunda leitura\n\r\
\n\r\
1.   O Parlamento vota em primeiro lugar qualquer proposta de rejeição imediata da posição do Conselho  apresentada  por  escrito  pela  comissão  competente,  por  um  grupo  político  ou  por um número de deputados que atinja pelo menos o limiar baixo. Para a aprovação destas propostas de rejeição são necessários os votos favoráveis da maioria dos membros que compõem o Parlamento.\n\r\
\n\r\
Se  essa  proposta  de  rejeição  for  aprovada,  a  posição  do  Conselho  é rejeitada e o Presidente anuncia no Parlamento que o processo legislativo está encerrado.\n\r\
\n\r\
Se essa proposta de rejeição não for aprovada, o Parlamento procede nos termos dos n.ºs 2 a 5.\n\r\
\n\r\
2.   Qualquer acordo provisório apresentado pela comissão competente nos termos do artigo 69.º-F, n.º 4, é votado prioritariamente e submetido a uma votação única, salvo se, a pedido de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, o Parlamento decidir proceder de imediato à votação das alterações, nos termos  do n.º 3.\n\r\
\n\r\
Se, numa votação única, o acordo provisório obtiver os votos favoráveis da maioria dos membros que compõem o Parlamento, o Presidente anuncia em sessão plenária que a primeira leitura do Parlamento está concluída.\n\r\
\n\r\
Se, numa votação única, o acordo provisório não obtiver os votos favoráveis da maioria dos membros que compõem o Parlamento, o Parlamento procede nos termos dos n.ºs 3, 4 e 5.\n\r\
\n\r\
3.   Exceto se tiver sido aprovada uma proposta de rejeição nos termos do n.º 1, ou se tiver sido aprovado um acordo provisório nos termos do n.º 2, as alterações à posição do Conselho, incluindo as alterações constantes do acordo provisório apresentado pela comissão competente nos termos do artigo 69.º-F, n.º 4, são postas à votação. As alterações à posição do Conselho só são aprovadas se obtiverem os votos favoráveis da maioria dos membros que compõem o Parlamento.\n\r\
\n\r\
Antes da votação das alterações, o Presidente pode solicitar que a Comissão dê a conhecer a sua posição e  que o Conselho apresente as suas observações.\n\r\
\n\r\
4.   Não obstante o voto desfavorável do Parlamento sobre a proposta inicial de rejeição da posição  do  Conselho  nos  termos  do  n.º  1,  o  Parlamento  pode  considerar,  sob  proposta  do presidente ou do relator da comissão competente, de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, a possibilidade de examinar uma nova proposta de rejeição, após ter votado as alterações nos termos do n.º 2 ou do n.º 3. Para a aprovação destas propostas  são  necessários  os  votos  favoráveis  da  maioria  dos  membros  que  compõem  o Parlamento.\n\r\
\n\r\
Se a posição do Conselho for rejeitada, o Presidente anuncia no Parlamento que o processo legislativo está encerrado.\n\r\
\n\r\
5.   Após a votação realizada nos termos dos n.ºs 1 a 4 e a votação subsequente das alterações ao projeto de resolução legislativa relativas a pedidos de caráter processual, o Presidente anuncia que a segunda leitura do Parlamento está encerrada, e a resolução legislativa é considerada aprovada. Se necessário, a resolução legislativa é modificada, nos termos do artigo 193.º, n.º 2, a fim de refletir o resultado da votação realizada nos termos dos n.ºs 1 a 4 ou a aplicação do artigo 69.º-A.\n\r\
\n\r\
O Presidente transmite o texto da resolução legislativa e da posição do Parlamento, se for o caso, ao Conselho e à Comissão.\n\r\
\n\r\
Caso não tenham sido apresentadas propostas de rejeição ou de alteração da posição do Conselho, esta é considerada aprovada."
},
{
'id': 68,
'title': 'Artigo 68.º : (suprimido)',
'text': ""
},
{
'id': 69,
'title': 'Artigo 69.º : Admissibilidade das alterações à posição do Conselho',
'text': "1.   A comissão competente, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo, podem apresentar propostas de alteração à posição do Conselho, para apreciação em sessão plenária.\n\r\
\n\r\
2.   As alterações à posição do Conselho só são consideradas admissíveis se respeitarem o disposto nos artigos 169.º e 170.º, e se visarem:\n\r\
\n\r\
a)   Reconstituir total ou parcialmente a posição aprovada pelo Parlamento na sua primeira leitura; ou\n\r\
\n\r\
b)   Chegar a um compromisso entre o Conselho e o Parlamento; ou\n\r\
\n\r\
c)   Alterar partes do texto de uma posição do Conselho que não figuravam na proposta apresentada em primeira leitura, ou cujo teor era diferente da proposta; ou\n\r\
\n\r\
d)   Tomar em consideração um facto novo ou uma nova situação jurídica verificados desde a aprovação da posição do Parlamento em primeira leitura.\n\r\
\n\r\
Da decisão do Presidente quanto à admissibilidade das alterações não cabe recurso.\n\r\
\n\r\
3.   Caso se tenham realizado eleições desde a primeira leitura, e o artigo 63.º não tenha sido invocado, o Presidente pode decidir não aplicar as restrições quanto à admissibilidade previstas no n.º 2.\n\r\
\n\r\
Artigo 69.º-A : Acordo em segunda leitura\n\r\
\n\r\
Caso não tenham sido apresentadas propostas de rejeição da posição do Conselho nem alterações a essa posição nos termos dos artigos 67.º-A e 69.º, nos prazos previstos para a apresentação e para a votação de alterações ou de propostas de rejeição, o Presidente anuncia no Parlamento que o ato proposto foi aprovado.\n\r\
\n\r\
Artigo 69.º-B : Disposições gerais\n\r\
\n\r\
As negociações com as outras instituições a fim de se chegar a um acordo durante um processo legislativo só podem ser encetadas na sequência de uma decisão tomada nos termos dos artigos 69.º-C a 69.º-E ou após uma devolução do Parlamento para a realização de negociações interinstitucionais. Estas negociações realizam-se em conformidade com o código de conduta estabelecido pela Conferênci dos Presidentes(1).\n\r\
\n\r\
\n\r\
(1)	Código de conduta para a negociação do processo legislativo ordinário.\n\r\
\n\r\
\n\r\
Artigo 69.º-C : Negociações antes da primeira leitura do Parlamento\n\r\
\n\r\
1.   Se uma comissão aprovar um relatório legislativo nos termos do artigo 49.º, pode decidir, por maioria dos seus membros, encetar negociações com base nesse relatório.\n\r\
\n\r\
2.   A decisão de encetar negociações é anunciada no início do período de sessões seguinte ao da sua aprovação em comissão. Até ao fim do dia seguinte ao anúncio feito no Parlamento, um número de deputados ou um ou vários grupos políticos que atinjam pelo menos o limiar médio podem solicitar por escrito que a decisão de uma comissão de encetar negociações seja posta à votação. Nesse caso, o Parlamento procede a essa votação durante o mesmo período de sessões.\n\r\
\n\r\
Se, até ao termo do prazo fixado no primeiro parágrafo, não for recebido nenhum pedido, o Presidente informa do facto o Parlamento. Caso seja apresentado um pedido, o Presidente pode dar a palavra, imediatamente antes da votação, a um orador a favor da decisão da comissão de encetar negociações e a um orador contra essa decisão. Cada orador pode fazer uma declaração de dois minutos, no máximo.\n\r\
\n\r\
3.   Se o Parlamento rejeitar a decisão da comissão de encetar negociações, o projeto de ato legislativo e o relatório da comissão competente são inscritos na ordem do dia do período de sessões seguinte, e o Presidente fixa um prazo para a apresentação de alterações. Aplica-se o artigo 59.º, n.º 4.\n\r\
\n\r\
4.   As negociações podem começar a qualquer momento após o prazo fixado no primeiro parágrafo do n.º 2 ter expirado sem ter sido apresentado nenhum pedido de votação no Parlamento da decisão de encetar negociações. Se um tal pedido tiver sido feito, as negociações podem começar a qualquer momento após a decisão da comissão de encetar negociações ter sido aprovada pelo Parlamento.\n\r\
\n\r\
Artigo 69.º-D : Negociações antes da primeira leitura do Conselho\n\r\
\n\r\
Quando o Parlamento tiver aprovado a sua posição em primeira leitura, essa posição constitui um mandato para a realização de negociações com as outras instituições. A comissão competente pode decidir, por maioria dos seus membros, encetar as negociações em qualquer momento ulterior. Estas decisões são anunciadas no Parlamento durante o período de sessões subsequente à votação em comissão, e são exaradas em ata.\n\r\
\n\r\
Artigo 69.º-E : Negociações antes da segunda leitura do Parlamento\n\r\
\n\r\
Quando a posição do Conselho em primeira leitura tiver sido transmitida à comissão competente, a posição do Parlamento em primeira leitura, nos termos do artigo 69.º, constitui o mandato para a realização de negociações com as outras instituições. A comissão competente pode decidir encetar as negociações em qualquer momento ulterior.\n\r\
\n\r\
Se a posição do Conselho em primeira leitura incluir elementos não abrangidos pelo projeto de ato legislativo ou pela posição do Parlamento em primeira leitura, a comissão pode aprovar diretrizes, inclusive sob a forma de alterações à posição do Conselho, destinadas à equipa de negociações.\n\r\
\n\r\
Artigo 69.º-F : Realização das negociações\n\r\
\n\r\
1.   A equipa de negociações do Parlamento é chefiada pelo relator e presidida pelo presidente da comissão competente ou por um vice-presidente designado pelo presidente. A equipa é constituída, pelo menos, pelos relatores-sombra de cada grupo político que deseje participar.\n\r\
\n\r\
2.   Os  documentos  a  debater  nas reuniões  com  o  Conselho  e  com a  Comissão  («trílogo»)  são distribuídos à equipa de negociações pelo menos 48 horas ou, em casos urgentes, pelo menos 24 horas antes da realização de cada trílogo.\n\r\
\n\r\
3.   Após cada trílogo, o presidente da equipa de negociações e o relator prestam informações à comissão competente, em nome da equipa de negociações, na sua reunião seguinte.\n\r\
\n\r\
Caso seja impossível convocar uma reunião da comissão em tempo oportuno, o presidente da equipa de negociações e o relator prestam informações, em nome da equipa de negociações, numa reunião dos coordenadores da comissão.\n\r\
\n\r\
4.   Se  as  negociações  conduzirem  a  um  acordo  provisório,  a  comissão  competente é imediatamente informada do facto. Os documentos que refletem os resultados do trílogo final são disponibilizados à comissão competente e publicados. O acordo provisório é apresentado à comissão competente, que toma uma decisão, mediante votação única, por maioria dos votos expressos, sobre a sua aprovação. Se o acordo for aprovado, é submetido à apreciação do Parlamento, apresentado de forma que indique claramente as modificações do projeto de ato legislativo.\n\r\
\n\r\
5.   Em caso de desacordo entre as comissões em causa nos termos dos artigos 54.º e 55.º, as regras de execução para a abertura e a realização das negociações são determinadas pelo presidente da  Conferência  dos  Presidentes  das  Comissões,  de  acordo  com  os  princípios  previstos  nesses artigos.\n\r\
\n\r\
Artigo 69.º-G : Prorrogação de prazos\n\r\
\n\r\
1.   A pedido da delegação do Parlamento ao Comité de Conciliação, o Presidente prorroga os prazos para a terceira leitura, nos termos do artigo 294.º, n.º 14, do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
2.   O Presidente notifica o Parlamento de todas as prorrogações de prazos feitas nos termos do artigo 294.º, n.º 14, do Tratado sobre o Funcionamento da União Europeia, quer essas prorrogações sejam da iniciativa do Parlamento ou do Conselho."
},
{
'id': 70,
'title': 'Artigo 70.º : Convocação do Comité de Conciliação',
'text': "Caso o Conselho informe o Parlamento de que não pode aprovar todas as alterações do Parlamento à posição do Conselho, o Presidente acorda com o Conselho uma data e um local para a primeira reunião do Comité de Conciliação. O prazo de seis semanas ou, em caso de prorrogação, de oito semanas previsto no artigo 294.º, n.º 10, do Tratado sobre o Funcionamento da União Europeia começa a correr no dia em que o comité se reunir pela primeira vez."
},
{
'id': 71,
'title': 'Artigo 71.º : Delegação ao Comité de Conciliação',
'text': "1.   O número de membros da delegação do Parlamento ao Comité de Conciliação é igual ao número de membros da delegação do Conselho.\n\r\
\n\r\
2.   A composição política da delegação corresponde à repartição do Parlamento por grupos políticos. A Conferência dos Presidentes fixa o número exato de deputados de cada grupo político que serão membros da delegação do Parlamento.\n\r\
\n\r\
3.   Os membros da delegação são nomeados pelos grupos políticos para cada caso de conciliação, de preferência de entre os membros da comissão competente, exceto no que se refere a três membros, que são nomeados membros permanentes das sucessivas delegações por um período de 12 meses. Os três membros permanentes são designados pelos grupos políticos de entre os vice-presidentes e devem representar pelo menos dois grupos políticos diferentes. O presidente e o relator para a segunda leitura da comissão competente, bem como o relator de qualquer comissão associada, são sempre membros da delegação.\n\r\
\n\r\
4.   Os grupos políticos representados na delegação designam substitutos.\n\r\
\n\r\
5.   Os grupos políticos não representados na delegação podem enviar um representante por grupo às reuniões preparatórias internas da delegação. Se a delegação não incluir deputados não inscritos, um deputado não inscrito pode assistir às reuniões preparatórias internas da delegação.\n\r\
\n\r\
6.   A delegação é chefiada pelo Presidente ou por um dos três membros permanentes.\n\r\
\n\r\
7.   A delegação delibera por maioria dos seus membros. Os debates realizam-se à porta fechada.\n\r\
\n\r\
A  Conferência  dos  Presidentes  estabelece  orientações  processuais  complementares  para  os trabalhos da delegação ao Comité de Conciliação.\n\r\
\n\r\
8.   A  delegação informa o Parlamento dos resultados da conciliação."
},
{
'id': 72,
'title': 'Artigo 72.º : Projeto comum',
'text': "1.   Caso o Comité de Conciliação chegue a acordo quanto a um projeto comum, o assunto é inscrito na ordem do dia de uma sessão plenária a realizar no prazo de seis semanas ou, em caso de prorrogação, de oito semanas a contar da data da aprovação do projeto comum pelo Comité de Conciliação.\n\r\
\n\r\
2.   O  presidente  ou  outro  membro  designado  da  delegação  do  Parlamento  ao  Comité de Conciliação faz uma declaração sobre o projeto comum, o qual é acompanhado de um relatório.\n\r\
\n\r\
3.   Não podem ser apresentadas alterações ao projeto comum.\n\r\
\n\r\
4.   O projeto comum como um todo é objeto de uma votação única. Para a aprovação do projeto comum, é necessária a maioria dos votos expressos.\n\r\
\n\r\
5.   Caso não se chegue a acordo quanto a um projeto comum no Comité de Conciliação, o presidente ou outro membro designado da delegação do Parlamento ao Comité de Conciliação faz uma declaração. Essa declaração é seguida de um debate.\n\r\
\n\r\
6.   Durante o processo de conciliação entre o Parlamento e o Conselho posterior à segunda leitura, não pode haver devolução à comissão.\n\r\
\n\r\
7.   Os artigos 49.º, 50.º e 53.º não se aplicam à terceira leitura."
},
{
'id': 73,
'title': 'Artigo 73.º : (suprimido)',
'text': ""
},
{
'id': 74,
'title': 'Artigo 74.º : (suprimido)',
'text': ""
},
{
'id': 75,
'title': 'Artigo 75.º : (suprimido)',
'text': ""
},
{
'id': 76,
'title': 'Artigo 76.º : (suprimido)',
'text': ""
},
{
'id': 77,
'title': 'Artigo 77.º : (suprimido)',
'text': ""
},
{
'id': 78,
'title': 'Artigo 78.º : Assinatura e publicação dos atos aprovados',
'text': "Após a finalização do texto aprovado nos termos do artigo 193.º e do Anexo VII, e uma vez feita a verificação de que todos os procedimentos foram devidamente cumpridos, os atos aprovados pelo processo legislativo ordinário são assinados pelo Presidente e pelo Secretário-Geral.\n\r\
\n\r\
Após a assinatura do ato, os secretários-gerais do Parlamento e do Conselho tomam as medidas necessárias para assegurar a sua publicação no Jornal Oficial da União Europeia.\n\r\
\n\r\
Artigo 78.º-A : Proposta alterada de um ato juridicamente vinculativo\n\r\
\n\r\
Se a Comissão pretender substituir ou alterar a sua proposta de um ato juridicamente vinculativo, a comissão competente pode adiar o exame da questão até receber uma nova proposta ou as alterações da Comissão.\n\r\
\n\r\
Artigo 78.º-B : Posição da Comissão sobre as alterações\n\r\
\n\r\
Antes de proceder à votação final de uma proposta de ato juridicamente vinculativo, a comissão competente pode solicitar que a Comissão dê a conhecer a sua posição sobre todas as alterações aprovadas pela comissão.\n\r\
\n\r\
Se for caso disso, essa posição é incluída no relatório.\n\r\
\n\r\
Artigo 78.º-C : Votação no Parlamento\n\r\
\n\r\
Aplica-se, com as necessárias adaptações, o artigo 59.º, n.ºs 1, 2, 4 e 5.\n\r\
\n\r\
Artigo 78.º-D : Acompanhamento da posição do Parlamento\n\r\
\n\r\
1.   Após o Parlamento ter aprovado a sua posição sobre um projeto de ato juridicamente vinculativo, o presidente e o relator da comissão competente acompanham o andamento   do   processo   conducente   à   aprovação   desse   projeto   de   ato   pelo   Conselho, nomeadamente a fim de  assegurar o cumprimento efetivo dos compromissos assumidos pelo Conselho ou pela Comissão perante o Parlamento quanto à posição do Parlamento. O presidente e o relator da comissão competente informam periodicamente a comissão ao longo do processo.\n\r\
\n\r\
2.   A comissão competente pode convidar a Comissão e o Conselho para discutirem o assunto consigo.\n\r\
\n\r\
3.   Durante o  processo  de  acompanhamento,  a  comissão  competente  pode apresentar a qualquer momento,  se  o  considerar  necessário,  uma  proposta  de  resolução  recomendando  que  o Parlamento:\n\r\
\n\r\
-   solicite que a Comissão retire a sua proposta,\n\r\
\n\r\
-   solicite que a Comissão ou o Conselho lhe apresentem de novo a proposta, nos termos do artigo 78.º-E, ou que a Comissão apresente uma nova proposta, ou\n\r\
\n\r\
-   tome qualquer outra medida que considere adequada.\n\r\
\n\r\
Essa proposta é inscrita no projeto de ordem do dia do período de sessões subsequente à aprovação da proposta pela comissão.\n\r\
\n\r\
Artigo 78.º-E : Nova consulta do Parlamento\n\r\
\n\r\
1.   A pedido da comissão competente, o Presidente convida o Conselho a consultar de novo o Parlamento nas mesmas circunstâncias e nas mesmas condições previstas no artigo 63.º, n.º 1. A pedido da comissão competente, o Presidente convida também o Conselho a consultar de novo o Parlamento caso o Conselho altere substancialmente ou pretenda alterar substancialmente o projeto de ato juridicamente vinculativo sobre o qual o Parlamento tomou inicialmente a sua posição, exceto se o fizer a fim de  incorporar as alterações do Parlamento.\n\r\
\n\r\
2.   O Presidente solicita também que um projeto de ato juridicamente vinculativo seja submetido de novo ao Parlamento nas circunstâncias definidas no presente artigo se, a pedido de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, o Parlamento assim o decidir."
},
{
'id': 79,
'title': 'Artigo 79.º : Revisão ordinária dos Tratados',
'text': "1.   Nos termos dos artigos 45.º e 52.º, a comissão competente pode apresentar ao Parlamento um relatório que contenha propostas, dirigidas ao Conselho, para a alteração dos Tratados.\n\r\
\n\r\
2.   Caso o Parlamento seja consultado, nos termos do artigo 48.º, n.º 3, do Tratado da União Europeia, sobre uma proposta de decisão do Conselho Europeu favorável à análise de alterações aos Tratados, a questão é transmitida à comissão competente. A comissão elabora um relatório que deve incluir:\n\r\
\n\r\
-   uma proposta de resolução que indique se o Parlamento aprova ou rejeita a decisão proposta, a qual pode incluir propostas dirigidas à Convenção ou à conferência dos representantes dos governos dos Estados-Membros;\n\r\
\n\r\
-   se for caso disso, uma exposição de motivos.\n\r\
\n\r\
3.   Se o Conselho Europeu decidir convocar uma Convenção, o Parlamento designa, sob proposta da Conferência dos Presidentes, os representantes do Parlamento nessa Convenção.\n\r\
\n\r\
A delegação do Parlamento elege o seu chefe e os seus candidatos para fazerem parte de qualquer comité diretivo ou de qualquer mesa criados pela Convenção.\n\r\
\n\r\
4.   Caso o Conselho Europeu solicite a aprovação do Parlamento sobre uma decisão de não convocar uma Convenção para analisar as alterações propostas aos Tratados, o pedido é transmitido à comissão competente nos termos do artigo 99.º do Regimento."
},
{
'id': 80,
'title': 'Artigo 80.º : Revisão simplificada dos Tratados',
'text': "1.   Nos termos dos artigos 45.º e 52.º, a comissão competente pode apresentar ao Parlamento, nos termos do procedimento previsto no artigo 48.º, n.º 6, do Tratado da União Europeia, um relatório que contenha propostas, dirigidas ao Conselho Europeu, para a revisão total ou parcial das disposições da Parte III do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
2.   Se o Parlamento for consultado, nos termos do artigo 48.º, n.º 6, do Tratado da União Europeia, sobre uma proposta de decisão do Conselho Europeu que altere a Parte III do Tratado sobre o Funcionamento da União Europeia, aplica-se, com as necessárias adaptações, o artigo 79.º, n.º 2, do Regimento. Nesse caso, a proposta de resolução só pode incluir propostas de alteração das disposições da Parte III do Tratado sobre o Funcionamento da União Europeia."
},
{
'id': 81,
'title': 'Artigo 81.º : Tratados de adesão',
'text': "1.   Qualquer pedido de um Estado europeu para se tornar membro da União Europeia, nos termos do artigo 49.º do Tratado da União Europeia, é enviado para apreciação à comissão competente.\n\r\
\n\r\
2.   Sob  proposta  da  comissão  competente,  de  um  grupo  político  ou  de  um número  de deputados que atinja pelo menos o limiar baixo, o Parlamento pode decidir convidar a Comissão e o Conselho para participarem num debate antes da abertura de negociações de adesão com o Estado requerente.\n\r\
\n\r\
3.   A comissão competente solicita que a Comissão e o Conselho lhe prestem informações completas e periódicas sobre o andamento das negociações de adesão, se necessário a título confidencial.\n\r\
\n\r\
4.   O  Parlamento  pode  aprovar  recomendações  com  base  num  relatório  da  comissão competente em qualquer fase das negociações de adesão, e solicitar que essas recomendações sejam tidas em conta antes da celebração de qualquer tratado de adesão de um Estado requerente à União Europeia.\n\r\
\n\r\
5.   Após a conclusão das negociações de adesão, mas antes da assinatura de qualquer acordo, o projeto de acordo é submetido à apreciação do Parlamento para aprovação, nos termos do artigo 99.º do Regimento. Nos termos do artigo 49.º do Tratado da União Europeia, a aprovação do Parlamento exige os votos da maioria dos membros que o compõem."
},
{
'id': 82,
'title': 'Artigo 82.º : Retirada da União',
'text': "Se um Estado-Membro decidir retirar-se da União nos termos do artigo 50.º do Tratado da União Europeia, a questão é enviada à comissão competente. Aplica-se, com as necessárias adaptações,  o artigo 81.º do Regimento. O Parlamento pronuncia-se sobre a aprovação de um acordo de retirada por maioria dos votos expressos."
},
{
'id': 83,
'title': 'Artigo 83.º : Violação dos princípios e dos valores fundamentais por um Estado-Membro',
'text': "1.   Com base num relatório específico da comissão competente, elaborado nos termos dos artigos 45.º e 52.º do Regimento, o Parlamento pode votar:\n\r\
\n\r\
a)   Uma proposta fundamentada que solicite que o Conselho tome as medidas previstas no artigo 7.º, n.º 1, do Tratado da União Europeia;\n\r\
\n\r\
b)   Uma proposta que solicite que a Comissão ou os Estados-Membros apresentem uma proposta nos termos do artigo 7.º, n.º 2, do Tratado da União Europeia;\n\r\
\n\r\
c)   Uma proposta que solicite que o Conselho tome as medidas previstas no artigo 7.º, n.º 3, ou, subsequentemente, no artigo 7.º, n.º 4, do Tratado da União Europeia.\n\r\
\n\r\
2.   Qualquer pedido de aprovação apresentado pelo Conselho em relação a uma proposta apresentada nos termos do artigo 7.º, n.ºs 1 e 2, do Tratado da União Europeia é anunciado no Parlamento, juntamente com as observações apresentadas pelo Estado-Membro em causa, e enviado à comissão competente, nos termos do artigo 99.º do Regimento. Salvo em circunstâncias urgentes devidamente justificadas, o Parlamento toma a sua decisão sob proposta da comissão competente.\n\r\
\n\r\
3.   Nos termos do artigo 354.º do Tratado sobre o Funcionamento da União Europeia, a aprovação pelo Parlamento de decisões sobre as propostas referidas nos n.ºs 1 e 2 do presente artigo exigem a maioria de dois terços dos votos expressos, que representem a maioria dos membros que compõem o Parlamento.\n\r\
\n\r\
4.   Mediante autorização da Conferência dos Presidentes, a comissão competente pode apresentar uma proposta de resolução de acompanhamento. Essa proposta de resolução expõe a opinião do Parlamento sobre uma violação grave cometida por um Estado‑Membro, sobre as medidas adequadas a tomar e sobre a alteração ou a revogação dessas medidas.\n\r\
\n\r\
5.   A  comissão  competente  assegura  que  o  Parlamento  seja  mantido plenamente  informado  e,  se necessário, consultado sobre todas as medidas de acompanhamento tomadas com base na sua aprovação dada nos termos do n.º 3. O Conselho é convidado a expor, se adequado, a evolução do assunto. Sob proposta da comissão competente, elaborada com a autorização da Conferência dos Presidentes, o Parlamento pode aprovar recomendações destinadas ao Conselho."
},
{
'id': 84,
'title': 'Artigo 84.º : Composição do Parlamento',
'text': "Em tempo oportuno antes do fim de uma legislatura, o Parlamento pode fazer, com base num relatório elaborado pela comissão competente, nos termos do artigo 14.º, n.º 2, do Tratado da União Europeia e dos artigos 45.º e 52.º do Regimento, uma proposta para alterar a sua composição. O projeto de decisão do Conselho Europeu que estabelece a composição do Parlamento é examinado pelo Parlamento nos termos do artigo 99.º do Regimento."
},
{
'id': 85,
'title': 'Artigo 85.º : Cooperação reforçada entre os Estados-Membros',
'text': "1.   Os pedidos para estabelecer uma cooperação reforçada entre os Estados‑Membros nos termos do artigo 20.º do Tratado da União Europeia são enviados pelo Presidente à comissão competente para apreciação. Aplica-se o artigo 99.º do Regimento.\n\r\
\n\r\
2.   A comissão competente verifica o cumprimento do artigo 20.º do Tratado da União Europeia e dos artigos 326.º a 334.º do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
3.   Os  atos  propostos  ulteriormente  no  âmbito  da  cooperação  reforçada,  uma  vez  esta estabelecida, são tratados pelo Parlamento segundo os mesmos procedimentos que teriam sido aplicados se a cooperação reforçada não tivesse sido estabelecida. Aplica-se o artigo 47.º do Regimento."
},
{
'id': 86,
'title': 'Artigo 86.º : Quadro financeiro plurianual',
'text': "Caso o Conselho solicite a aprovação do Parlamento para a proposta de regulamento que estabelece o quadro financeiro plurianual, a questão é examinada nos termos do artigo 99.º do Regimento. Nos termos do primeiro parágrafo do artigo 312.º, n.º 2, do Tratado sobre o Funcionamento da União Europeia, a aprovação do Parlamento exige os votos da maioria dos membros que o compõem.\n\r\
\n\r\
Artigo 86.º-A : Processo orçamental anual\n\r\
\n\r\
A comissão competente pode decidir elaborar qualquer relatório considerado pertinente sobre o orçamento, tendo em conta o anexo do Acordo Interinstitucional de 2 de dezembro de 2013 sobre a disciplina orçamental, a cooperação em matéria orçamental e a boa gestão financeira(1).\n\r\
\n\r\
As outras comissões podem emitir parecer no prazo fixado pela comissão competente.\n\r\
\n\r\
\n\r\
(1)	JO C 373 de 20.12.2013, p. 1."
},
{
'id': 87,
'title': 'Artigo 87.º : (suprimido)',
'text': ""
},
{
'id': 88,
'title': 'Artigo 88.º : Posição do Parlamento sobre o projeto de orçamento',
'text': "1.   Os deputados podem apresentar alterações à posição do Conselho sobre o projeto de orçamento na comissão competente.\n\r\
\n\r\
Um grupo político ou um número de deputados que atinja pelo menos o limiar baixo, ou uma comissão, podem apresentar alterações à  posição  do  Conselho  sobre  o  projeto  de orçamento no Parlamento.\n\r\
\n\r\
2.   As  alterações  são  apresentadas  e  justificadas  por  escrito,  são assinadas  pelos  seus autores e indicam a rubrica orçamental a que se referem.\n\r\
\n\r\
3.   O Presidente fixa o prazo para a apresentação das alterações.\n\r\
\n\r\
4.   A comissão competente vota as alterações antes de serem discutidas no Parlamento.\n\r\
\n\r\
5.   As alterações apresentadas no Parlamento que tenham sido rejeitadas na comissão competente só podem ser postas à votação se uma comissão ou um grupo político ou um número de deputados que atinja pelo menos o limiar baixo o tiverem requerido por escrito, num prazo a fixar pelo Presidente. O termo desse prazo não pode ser inferior a 24 horas antes da abertura da votação.\n\r\
\n\r\
6.   No caso de alterações à previsão de receitas e despesas do Parlamento que sejam similares a alterações já rejeitadas pelo Parlamento quando a previsão de receitas e despesas foi elaborada, o Parlamento só as debate se a comissão competente tiver dado um parecer favorável.\n\r\
\n\r\
7.   O Parlamento procede à votação sucessiva:\n\r\
\n\r\
-   das alterações à posição do Conselho sobre o projeto de orçamento, secção por secção,\n\r\
\n\r\
-   de uma proposta de resolução relativa ao projeto de orçamento.\n\r\
\n\r\
No entanto, aplica-se o artigo 174.º, n.ºs 4 a 10.\n\r\
\n\r\
8.   Os artigos, capítulos, títulos e secções do projeto de orçamento em relação aos quais não tenham sido apresentadas alterações são considerados aprovados.\n\r\
\n\r\
9.   Nos termos do artigo 314.º, n.º 4, alínea c), do Tratado sobre o Funcionamento da União Europeia, para a aprovação das alterações, são necessários os votos da maioria dos membros que compõem o Parlamento.\n\r\
\n\r\
10.   Se o Parlamento tiver alterado a posição do Conselho sobre o projeto de orçamento, a posição assim alterada é transmitida ao Conselho e à Comissão, juntamente com as justificações e com a ata da sessão em que as alterações foram aprovadas."
},
{
'id': 89,
'title': 'Artigo 89.º : (suprimido)',
'text': ""
},
{
'id': 90,
'title': 'Artigo 90.º : Conciliação orçamental',
'text': "1.   O Presidente convoca o Comité de Conciliação nos termos do artigo 314.º, n.º 4, do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
2.   O número de membros da delegação que representa o Parlamento nas reuniões do Comité de Conciliação no processo orçamental é igual ao da delegação do Conselho.\n\r\
\n\r\
3.   Todos os anos, antes da votação do Parlamento sobre a posição do Conselho, os grupos políticos designam os membros da delegação do Parlamento ao Comité de Conciliação, de preferência de entre os membros da comissão competente para as questões orçamentais e de outras comissões interessadas. A delegação é chefiada pelo Presidente do Parlamento. O Presidente pode delegar essas funções num vice-presidente com experiência em questões orçamentais ou no presidente da comissão competente para as questões orçamentais.\n\r\
\n\r\
4.   Aplica-se o artigo 71.º, n.ºs 2, 4, 5, 7 e 8.\n\r\
\n\r\
5.   Caso o Comité de Conciliação chegue a acordo quanto a um projeto comum, o assunto é inscrito na ordem do dia de uma sessão plenária a realizar no prazo de 14 dias a contar da data desse acordo. O projeto comum é disponibilizado a todos os deputados. Aplica-se o artigo 72.º, n.ºs 2 e 3.\n\r\
\n\r\
6.   O projeto comum como um todo é objeto de uma votação única. A votação é nominal. O projeto comum considera-se aprovado, salvo se for rejeitado pela maioria dos membros que compõem o Parlamento.\n\r\
\n\r\
7.   Se o Parlamento aprovar o projeto comum e o Conselho o rejeitar, a comissão competente pode apresentar todas ou algumas das alterações do Parlamento à posição do Conselho para confirmação, nos termos do artigo 314.º, n.º 7,  alínea d), do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
A votação de confirmação é inscrita na ordem do dia de uma sessão plenária a realizar no prazo de 14 dias a contar da data da comunicação pelo Conselho da sua rejeição do projeto comum.\n\r\
\n\r\
As alterações consideram-se confirmadas se forem aprovadas pela maioria dos membros que compõem o Parlamento e por três quintos dos votos expressos."
},
{
'id': 91,
'title': 'Artigo 91.º : Aprovação definitiva do orçamento',
'text': "Quando o Presidente considerar que o orçamento foi aprovado em conformidade com o disposto no artigo 314° do Tratado sobre o Funcionamento da União Europeia, declara em sessão plenária que o orçamento foi definitivamente aprovado. O Presidente toma as medidas necessárias para assegurar que o orçamento seja publicado no Jornal Oficial da União Europeia."
},
{
'id': 92,
'title': 'Artigo 92.º : Regime de duodécimos provisórios',
'text': "1.   Qualquer decisão do Conselho que autorize despesas que excedam o duodécimo provisório das dotações do orçamento para o exercício anterior é enviada à comissão competente.\n\r\
\n\r\
2.   A comissão competente pode apresentar um projeto de decisão que reduza as despesas a que se refere o n.º 1. O Parlamento delibera sobre esse projeto no prazo de 30 dias após a aprovação da decisão do Conselho.\n\r\
\n\r\
3.   O Parlamento delibera por maioria dos membros que o compõem.\n\r\
\n\r\
Artigo 92.º-A : Execução do orçamento\n\r\
\n\r\
1.   O Parlamento procede ao controlo da execução do orçamento para o exercício em curso. O Parlamento confia essa missão às comissões competentes para o orçamento e para o controlo orçamental, e às outras comissões interessadas.\n\r\
\n\r\
2.   O Parlamento analisa todos os anos, antes da sua leitura do projeto de orçamento para o exercício seguinte, os problemas relativos à execução do orçamento em curso, se necessário com base numa proposta de resolução apresentada pela comissão competente."
},
{
'id': 93,
'title': 'Artigo 93.º : Quitação à Comissão pela execução do orçamento',
'text': "As disposições relativas ao processo de concessão de quitação à Comissão pela execução do orçamento, nos termos das disposições financeiras do Tratado sobre o Funcionamento da União Europeia e do Regulamento (UE, Euratom) n.° 966/2012 do Parlamento Europeu e do Conselho(1) (o “Regulamento Financeiro”), constam de anexo ao Regimento(2).\n\r\
\n\r\
\n\r\
(1)	Regulamento (UE, Euratom) n.° 966/2012 do Parlamento Europeu e do Conselho, de 25 de outubro de 2012 , relativo às disposições financeiras aplicáveis ao orçamento geral da União e que revoga o Regulamento (CE, Euratom) n.° 1605/2002 (JO L 298 de 26.10.2012, p. 1).\n\r\
(2)	Ver anexo IV."
},
{
'id': 94,
'title': 'Artigo 94.º : Outros processos de quitação',
'text': "As disposições relativas ao processo de concessão de quitação à Comissão, nos termos do artigo 319.º do Tratado sobre o Funcionamento da União Europeia, pela execução do orçamento aplicam-se também ao processo de quitação:\n\r\
\n\r\
-   ao Presidente do Parlamento Europeu pela execução do orçamento do Parlamento Europeu;\n\r\
\n\r\
-   aos responsáveis pela execução dos orçamentos de outras instituições e organismos da União Europeia, tais como o Conselho, o Tribunal de Justiça da União Europeia, o Tribunal de Contas, o Comité Económico e Social Europeu e o Comité das Regiões;\n\r\
\n\r\
-   à Comissão pela execução do orçamento do Fundo Europeu de Desenvolvimento;\n\r\
\n\r\
-   aos órgãos responsáveis pela execução do orçamento dos organismos com autonomia jurídica que realizam tarefas da União, na medida em que as disposições aplicáveis à sua atividade prevejam a quitação pelo Parlamento Europeu.\n\r\
\n\r\
Artigo 94.º-A : Cooperação interinstitucional\n\r\
\n\r\
Nos termos do artigo 324.º do Tratado sobre o Funcionamento da União Europeia, o Presidente  participa  em  reuniões  periódicas  dos  Presidentes  do  Parlamento  Europeu,  do Conselho e da Comissão, convocadas por iniciativa da Comissão no quadro dos procedimentos orçamentais a que se refere o Título II da Parte VI do Tratado sobre o Funcionamento da União Europeia. O Presidente toma todas as medidas necessárias para promover a consulta e a conciliação das posições das instituições, a fim de facilitar a aplicação dos procedimentos acima citados.\n\r\
\n\r\
O Presidente pode delegar essas funções num vice-presidente com experiência em questões orçamentais ou no presidente da comissão competente para as questões orçamentais."
},
{
'id': 95,
'title': 'Artigo 95.º : (Suprimido)',
'text': ""
},
{
'id': 96,
'title': 'Artigo 96.º : Previsão de receitas e despesas do Parlamento',
'text': "1.   A Mesa elabora o anteprojeto de previsão de receitas e despesas com base num relatório preparado pelo Secretário-Geral.\n\r\
\n\r\
2.   O Presidente transmite o anteprojeto de previsão de receitas e despesas à comissão competente, que elabora o projeto de previsão de receitas e despesas e apresenta um relatório ao Parlamento.\n\r\
\n\r\
3.   O Presidente fixa um prazo para a apresentação de alterações ao projeto de previsão de receitas e despesas. A comissão competente emite parecer sobre essas alterações.\n\r\
\n\r\
4.   O Parlamento aprova a previsão de receitas e despesas.\n\r\
\n\r\
5.   O Presidente transmite a previsão de receitas e despesas à Comissão e ao Conselho.\n\r\
\n\r\
6.   As disposições anteriores aplicam-se também às previsões de receitas e despesas dos orçamentos retificativos."
},
{
'id': 97,
'title': 'Artigo 97.º : Processo a aplicar na elaboração da previsão de receitas e despesas do Parlamento',
'text': "1.   No que se refere ao orçamento do Parlamento, a Mesa e a comissão competente para os assuntos orçamentais tomam decisões, em fases sucessivas, sobre:\n\r\
\n\r\
(a)   O organigrama;\n\r\
\n\r\
(b)   O anteprojeto e o projeto de previsão de receitas e despesas.\n\r\
\n\r\
2.   As decisões sobre o organigrama são tomadas de acordo com o seguinte processo:\n\r\
\n\r\
(a)   A Mesa estabelece o organigrama para cada exercício financeiro;\n\r\
\n\r\
(b)   Caso o parecer da comissão competente para os assuntos orçamentais divirja das decisões iniciais tomadas pela Mesa, abre-se um processo de conciliação entre a Mesa e essa comissão;\n\r\
\n\r\
(c)   No final do processo, a Mesa toma a decisão final sobre a previsão de receitas e despesas do organigrama, nos termos do artigo 222.º, n.º 3, do Regimento, sem prejuízo de decisões tomadas nos termos do artigo 314.º do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
3.   Quanto à previsão de receitas e despesas propriamente dita, o processo da sua elaboração começa assim que a Mesa tiver tomado uma decisão final sobre o organigrama. As fases desse processo constam do artigo 96.º. Quando a comissão competente para os assuntos orçamentais e a Mesa tiverem posições muito divergentes, abre-se um processo de conciliação."
},
{
'id': 98,
'title': 'Artigo 98.º : Competência em matéria de autorização e pagamento de despesas, de aprovação das contas e de quitação',
'text': "1.   O Presidente procede ou manda proceder à autorização e ao pagamento de despesas no quadro do regulamento financeiro interno aprovado pela Mesa, após ter consultado a comissão competente.\n\r\
\n\r\
2.   O Presidente transmite o projeto de regularização das contas à comissão competente.\n\r\
\n\r\
3.   Com  base  num  relatório  da  comissão  competente,  o  Parlamento  aprova  as  contas  e pronuncia-se sobre a quitação."
},
{
'id': 99,
'title': 'Artigo 99.º : Processo de aprovação',
'text': "1.   Quando for pedida a sua aprovação para uma proposta de ato juridicamente vinculativo, a comissão competente apresenta ao Parlamento uma recomendação para aprovar ou rejeitar o ato proposto.\n\r\
\n\r\
A recomendação inclui citações, mas não considerandos. As alterações apresentadas em comissão só são admissíveis se pretenderem inverter o sentido da recomendação proposta pelo relator.\n\r\
\n\r\
A recomendação pode ser acompanhada de uma breve exposição de motivos. Essa exposição de motivos é da responsabilidade exclusiva do relator, e não é posta à votação. Aplica-se,  com as necessárias adaptações, o artigo 52.º-A, n.º 2.\n\r\
\n\r\
2.   Acomissão competente pode apresentar também, se necessário, um relatório que inclua uma proposta de resolução não legislativa  indicando  as  razões  pelas quais  o  Parlamento  deverá conceder ou recusar conceder a sua aprovação e, se for caso disso, fazendo recomendações para a aplicação do ato proposto.\n\r\
\n\r\
3.   A comissão competente examina o pedido de aprovação sem demora injustificada. Se a comissão competente não tiver aprovado a sua recomendação no prazo de seis meses após o pedido de aprovação lhe ter sido enviado, a Conferência dos Presidentes pode inscrever o assunto para apreciação na ordem do dia de um período de sessões ulterior ou, em casos devidamente justificados, decidir prorrogar o prazo de seis meses.\n\r\
\n\r\
4.   O  Parlamento  decide  sobre  o  ato proposto  mediante  uma  votação  única  sobre  a aprovação, independentemente de a recomendação da comissão competente propor a aprovação ou a rejeição do ato, e não podem ser apresentadas alterações. Se a maioria exigida não for alcançada, considera-se que o ato proposto foi rejeitado.\n\r\
\n\r\
5.   Caso seja necessária a aprovação do Parlamento, a comissão competente pode apresentar a qualquer momento um relatório provisório ao Parlamento, que inclua uma proposta de resolução contendo recomendações para a alteração ou a aplicação do ato proposto"
},
{
'id': 100,
'title': 'Artigo 100.º : Processo de parecer sobre derrogações à adoção do euro',
'text': "1.   Quando o Parlamento for consultado nos termos do artigo 140.º, n.º 2, do Tratado sobre o Funcionamento da União Europeia, a comissão competente apresenta um relatório ao Parlamento propondo a aprovação ou a rejeição do ato proposto. O Parlamento toma a sua decisão com base nesse relatório.\n\r\
\n\r\
2.   O Parlamento vota o ato proposto numa votação única, e não podem ser apresentadas alterações."
},
{
'id': 101,
'title': 'Artigo 101.º : Diálogo social',
'text': "1.   O Presidente envia os documentos elaborados pela Comissão nos termos do artigo 154.º do Tratado sobre o Funcionamento da União Europeia e os acordos celebrados pelos parceiros sociais nos termos do artigo 155.º, n.º 1, desse Tratado, bem como as propostas apresentadas pela Comissão nos termos do artigo 155.º, n.º 2, desse Tratado, à comissão competente, para apreciação.\n\r\
\n\r\
2.   Quando  os  parceiros  sociais  informarem  a  Comissão  de que desejam encetar  o processo  previsto  no  artigo  155.º  do  Tratado  sobre  o  Funcionamento  da  União  Europeia,  a comissão competente pode elaborar um relatório sobre o assunto em causa.\n\r\
\n\r\
3.   Quando os parceiros sociais tiverem chegado a acordo e solicitarem conjuntamente que o seu acordo seja aplicado por uma decisão do Conselho sob proposta da Comissão, nos termos do artigo 155.º, n.º 2, do Tratado sobre o Funcionamento da União Europeia, a comissão competente apresenta uma proposta de resolução recomendando a aprovação ou a rejeição do pedido."
},
{
'id': 102,
'title': 'Artigo 102.º : Procedimentos para apreciação de acordos voluntários previstos',
'text': "1.   Caso  a  Comissão  informe  o  Parlamento  da  sua  intenção  de  examinar a possibilidade de recorrer  a  acordos voluntários em alternativa a medidas legislativas, a comissão competente pode elaborar um relatório sobre o assunto em causa nos termos do artigo 52.°\n\r\
\n\r\
2.   Caso a Comissão anuncie a sua intenção de celebrar um acordo voluntário, a comissão competente pode apresentar uma proposta de resolução recomendando que o Parlamento aprove ou rejeite a proposta da Comissão, e em que condições."
},
{
'id': 103,
'title': 'Artigo 103.º : Codificação',
'text': "1.   Quando for apresentada ao Parlamento uma proposta de codificação da legislação da União, a proposta é enviada à comissão competente para os assuntos jurídicos. Essa comissão examina a proposta, segundo o procedimento acordado a nível interinstitucional(1), a fim de verificar se a proposta se limita a uma codificação pura e simples, sem alterações de fundo.\n\r\
\n\r\
2.   Pode ser solicitado um parecer sobre a oportunidade da codificação à comissão que era competente para os atos objeto da codificação, a seu pedido ou a pedido da comissão competente para os assuntos jurídicos.\n\r\
\n\r\
3.   Não são admissíveis alterações ao texto da proposta.\n\r\
\n\r\
No entanto, a pedido do relator, o presidente da comissão competente para os assuntos jurídicos pode submeter à aprovação dessa comissão adaptações técnicas, desde que essas adaptações não impliquem alterações de fundo da proposta  e sejam necessárias para assegurar a conformidade da proposta com as regras da codificação.\n\r\
\n\r\
4.   Se a comissão competente para os assuntos jurídicos considerar que a proposta não implica alterações de fundo da legislação da União, apresenta-a ao Parlamento, para aprovação.\n\r\
\n\r\
Se a comissão competente para os assuntos jurídicos entender que a proposta implica uma alteração de fundo, propõe que o Parlamento rejeite a proposta.\n\r\
\n\r\
Em qualquer dos casos, o Parlamento aprova uma decisão mediante votação única, sem alterações nem debate.\n\r\
\n\r\
\n\r\
(1)	Acordo Interinstitucional de 20 de dezembro de 1994 relativo ao método de trabalho acelerado tendo em vista a codificação oficial dos textos legislativos, ponto 4 (JO C 102 de 4.4.1996, p. 2)."
},
{
'id': 104,
'title': 'Artigo 104.º : Reformulação',
'text': "1.   Quando for apresentada ao Parlamento uma proposta de reformulação da legislação da União, a proposta é enviada à comissão competente para os assuntos jurídicos e à comissão competente quanto à matéria de fundo.\n\r\
\n\r\
2.   A  comissão  competente  para  os  assuntos  jurídicos  examina  a  proposta  segundo  o procedimento  acordado  a  nível interinstitucional(1), a fim de  verificar  se  a  proposta  não  implica alterações de fundo para além das já identificadas como tal na proposta.\n\r\
\n\r\
Para efeitos desse exame, não são admissíveis alterações ao texto da proposta. No entanto, o segundo parágrafo do artigo 103.º, n.º 3, aplica-se às disposições inalteradas da proposta de reformulação.\n\r\
\n\r\
3.   Se a comissão competente para os assuntos jurídicos considerar que a proposta não implica alterações de fundo para além das já identificadas como tal na proposta, informa do facto a comissão competente quanto à matéria de fundo.\n\r\
\n\r\
Nesse caso, para além das condições estabelecidas nos artigos 169.º e 170.º, só são admissíveis na comissão competente quanto à matéria de fundo alterações que incidam nas partes da proposta que tenham sido modificadas.\n\r\
\n\r\
No entanto, podem ser aceites alterações das partes que inalteradas, a título excecional e numa base casuística, pelo presidente da comissão competente quanto à matéria de fundo, se o presidente considerar que tal é necessário por motivos imperiosos de coerência interna do texto ou por as alterações estarem inextricavelmente relacionadas com outras alterações admissíveis. Essas razões devem figurar numa justificação escrita das alterações.\n\r\
\n\r\
4.   Se a comissão competente para os assuntos jurídicos considerar que a proposta implica alterações de fundo para além das já identificadas como tal na proposta, propõe que o Parlamento rejeite a proposta e informa do facto a comissão competente quanto à matéria de fundo.\n\r\
\n\r\
Nesse caso, o Presidente convida a Comissão a retirar a proposta. Se a Comissão retirar a proposta, o Presidente declara que o procedimento deixou de ter razão de ser no Parlamento e informa do facto o Conselho. Se a Comissão não retirar a proposta, o Parlamento devolve-a  à comissão competente quanto à matéria de fundo, que a examina segundo o procedimento normal.\n\r\
\n\r\
\n\r\
(1)	Acordo Interinstitucional de 28 de novembro de 2001 para um recurso mais estruturado à técnica de reformulação dos atos jurídicos, ponto 9 (JO C 77 de 28.3.2002, p. 1)."
},
{
'id': 105,
'title': 'Artigo 105.º : Atos delegados',
'text': "1.   Se  a  Comissão  transmitir  um  ato  delegado ao  Parlamento,  o  Presidente  envia-o  à comissão competente para o ato legislativo de base, a qual pode decidir designar um dos seus membros para a proceder à apreciação de um ou vários atos delegados.\n\r\
\n\r\
2.   Durante o período de sessões subsequente à sua receção, o Presidente comunica ao Parlamento a data em que o ato delegado foi recebido em todas as línguas oficiais e o prazo para a formulação de objeções. O referido prazo começa a correr a partir da data de receção.\n\r\
\n\r\
A comunicação é publicada na ata da sessão, com a indicação da comissão competente.\n\r\
\n\r\
3.   Em conformidade com as disposições do ato legislativo de base e, se o considerar oportuno, depois de consultar as outras comissões interessadas, a comissão competente pode apresentar ao Parlamento uma proposta de resolução fundamentada com objeções ao ato delegado. Se, no prazo de 10 dias úteis antes do início do período de sessões cuja quarta-feira precede imediatamente o termo do prazo referido no n.º 5, a comissão competente não tiver apresentado uma tal proposta de resolução, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo pode apresentar uma proposta de resolução sobre o assunto para ser inscrita na ordem do dia do período de sessões acima referido.\n\r\
\n\r\
4.   As propostas de resolução apresentadas nos termos do n.º 3 devem indicar as razões das objeções do Parlamento e podem conter um pedido, dirigido à Comissão, de apresentação de um novo ato delegado que tenha em conta as recomendações formuladas pelo Parlamento.\n\r\
\n\r\
5.   O Parlamento aprova essa proposta de resolução no prazo previsto no ato legislativo de base, por maioria dos membros que o compõem, nos termos do segundo parágrafo do artigo 290.º, n.º 2, do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
Se a comissão competente considerar que convém prorrogar, em conformidade com as disposições do ato legislativo de base, o prazo para a formulação de objeções ao ato delegado, o presidente da comissão notifica dessa prorrogação, em nome do Parlamento, o Conselho e a Comissão.\n\r\
\n\r\
6.   Se a comissão competente recomendar que, antes do termo do prazo previsto no ato legislativo de base, o Parlamento declare que não formula objeções ao ato delegado:\n\r\
\n\r\
-   a comissão competente informa desse facto o presidente da Conferência dos Presidentes das Comissões por carta fundamentada e apresenta uma recomendação nesse sentido;\n\r\
\n\r\
-   se não forem formuladas objeções, quer na reunião seguinte da Conferência dos Presidentes das Comissões quer, por motivos de urgência, mediante procedimento escrito, o presidente da comissão competente comunica o facto ao Presidente do Parlamento, que informa o plenário no mais breve trecho;\n\r\
\n\r\
-   se, no prazo de 24 horas após o anúncio no Parlamento, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo se opuserem à recomendação, esta última é posta à votação;\n\r\
\n\r\
-   se, no mesmo prazo, não forem formuladas objeções, a recomendação proposta é considerada aprovada;\n\r\
\n\r\
-   a aprovação de uma tal recomendação torna qualquer proposta ulterior de objeção ao ato delegado não admissível.\n\r\
\n\r\
7.   Em conformidade com as disposições do ato legislativo de base, a comissão competente pode apresentar ao Parlamento uma proposta de resolução que revogue, total ou parcialmente, a delegação de poderes prevista nesse ato ou que se oponha à prorrogação tácita dessa delegação de poderes.\n\r\
\n\r\
Nos termos do segundo parágrafo do artigo 290.º, n.º 2, do Tratado sobre o Funcionamento da União Europeia, uma  decisão  de  revogar  a  delegação  de  poderes  exige  os  votos  da  maioria  dos membros que o compõem o  Parlamento.\n\r\
\n\r\
8.   O Presidente informa o Conselho e a Comissão sobre as posições adotadas por força do presente artigo."
},
{
'id': 106,
'title': 'Artigo 106.º : Atos e medidas de execução',
'text': "1.   Se a Comissão transmitir ao Parlamento um projeto de ato ou de medida de execução, o Presidente envia-o à comissão competente para o ato legislativo de base, a qual pode decidir designar um dos seus membros para proceder à apreciação de um ou vários projetos de atos ou de medidas de execução.\n\r\
\n\r\
2.   A comissão competente pode apresentar ao Parlamento uma proposta de resolução fundamentada que indique que um projeto de ato ou de medida de execução excede as competências de execução atribuídas no ato legislativo de base, ou não é conforme com o direito da União por outras razões.\n\r\
\n\r\
3.   A proposta de resolução pode incluir um pedido à Comissão solicitando-lhe que retire o projeto de ato ou de medida de execução, que o altere tendo em conta as objeções formuladas pelo Parlamento ou que apresente uma nova proposta legislativa. O Presidente informa o Conselho e a Comissão sobre a posição adotada.\n\r\
\n\r\
4.   Se as medidas de execução previstas pela Comissão se inserirem no âmbito do procedimento de regulamentação com controlo consagrado na Decisão 1999/468/CE do Conselho(1), aplicam-se as seguintes disposições complementares:\n\r\
\n\r\
(a)   O prazo de controlo começa a correr após o projeto de medida de execução ter sido apresentado ao Parlamento em todas as línguas oficiais. Caso se aplique o prazo de controlo abreviado previsto no artigo 5.º-A, n.º 5, alínea b), da Decisão 1999/468/CE, e nos casos de urgência previstos no artigo 5.º-A, n.º 6, dessa decisão, o prazo de controlo começa a correr, salvo objeção do presidente da comissão competente, após o Parlamento ter recebido o projeto definitivo de medida de execução nas versões linguísticas apresentadas aos membros do comité criado nos termos dessa decisão. Nos dois casos antes referidos, não se aplica o artigo 158.º;\n\r\
\n\r\
(b)   Se o projeto de medida de execução se basear no artigo 5.º-A, n.ºs 5 ou 6, da Decisão 1999/468/CE, que prevê os prazos abreviados para a oposição do Parlamento, o presidente da comissão competente pode apresentar uma proposta de resolução de oposição à aprovação do projeto de medida, caso a comissão não tenha podido reunir-se dentro do prazo previsto;\n\r\
\n\r\
(c)   O Parlamento,  deliberando  por  maioria  dos  membros  que  o  compõem,  pode aprovar uma resolução de oposição à aprovação do projeto de medida de execução que indique que o projeto excede as competências de execução previstas no ato de base, não é compatível com a finalidade ou o teor do ato de base ou não respeita os princípios da subsidiariedade ou da proporcionalidade;\n\r\
\n\r\
   Se, no prazo de 10 dias úteis antes do início do período de sessões cuja quarta‑feira precede  imediatamente  o  termo  do  prazo  de  oposição  à  aprovação do projeto de medida  de execução, a comissão competente não tiver apresentado uma tal proposta de resolução, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem apresentar uma proposta de resolução sobre o assunto para ser inscrita na ordem do dia do período de sessões acima referido.\n\r\
\n\r\
(d)   Se a comissão competente recomendar, por carta fundamentada dirigida ao presidente da Conferência dos Presidentes das Comissões, que o Parlamento declare que não se opõe à medida proposta, antes do termo do prazo normal previsto no artigo 5.º-A, n.º 3, alínea c), e/ou no artigo 5.º-A, n.º 4, alínea e), da Decisão 1999/468/CE, aplica-se o procedimento previsto no artigo 105.º, n.º 6, do Regimento(2).\n\r\
\n\r\
\n\r\
(1)	Decisão 1999/468/CE do Conselho, de 28 de junho de 1999, que fixa as regras de exercício das competências de execução atribuídas à Comissão (JO L 184 de 17.7.1999, p.23).\n\r\
(2)	O artigo 106.°, n.° 4, será suprimido do Regimento quando o procedimento de regulação com controlo tiver sido completamente eliminado da legislação em vigor."
},
{
'id': 107,
'title': 'Artigo 107.º : Apreciação segundo o processo de comissões associadas ou segundo o processo de comissões conjuntas',
'text': "1.   Se  o  ato  legislativo  de  base  tiver  sido  aprovado  pelo  Parlamento  em  aplicação  do procedimento previsto no artigo 54.º, aplicam-se à apreciação dos atos delegados ou dos projetos de atos ou de medidas de execução as seguintes disposições complementares:\n\r\
\n\r\
-   o ato delegado ou o projeto de ato ou de medida de execução é transmitido à comissão competente e à comissão associada;\n\r\
\n\r\
-   o presidente da comissão competente fixa um prazo durante o qual a comissão associada pode elaborar propostas sobre assuntos que se inscrevam no âmbito da sua competência exclusiva ou no âmbito da competência conjunta das duas comissões;\n\r\
\n\r\
-   se o ato delegado ou o projeto de ato ou de medida de execução se inscrever, no essencial, no âmbito da competência exclusiva da comissão associada, as propostas desta última serão retomadas sem votação pela comissão competente; caso contrário, o Presidente pode autorizar a comissão associada a apresentar uma proposta de resolução ao Parlamento.\n\r\
\n\r\
2.   Se  o  ato  legislativo  de  base  tiver  sido  aprovado  pelo  Parlamento  nos termos  do procedimento previsto no artigo 55.º, aplicam-se à apreciação dos atos delegados e dos projetos de atos ou de medidas de execução as seguintes disposições complementares:\n\r\
\n\r\
-   uma vez recebido o ato delegado ou o projeto de ato ou de medida de execução, o Presidente determina a comissão competente ou as comissões conjuntamente competentes para a sua apreciação, de acordo com os critérios estabelecidos no artigo 55.º e tendo em conta os acordos alcançados entre os presidentes das comissões interessadas;\n\r\
\n\r\
-   se um ato delegado ou um projeto de ato ou de medida de execução tiver sido enviado para apreciação segundo o processo de comissões conjuntas, cada comissão pode solicitar a convocação de uma reunião conjunta para a apreciação de uma proposta de resolução. Se os presidentes das comissões interessadas não chegarem a acordo, a reunião conjunta é convocada pelo presidente da Conferência dos Presidentes das Comissões."
},
{
'id': 108,
'title': 'Artigo 108.º : Acordos internacionais',
'text': "1.   Caso se preveja a abertura de negociações sobre a celebração, a renovação ou a alteração de acordos   internacionais,   a   comissão   competente   pode   decidir   elaborar   um   relatório   ou acompanhar de outra forma esta fase preparatória. Nesse caso, informa a Conferência dos Presidentes das Comissões da sua decisão.\n\r\
\n\r\
2.   A comissão competente averigua, logo que possível, junto da Comissão qual a base jurídica escolhida para a celebração dos acordos internacionais a que se refere o n.º 1. A comissão competente verifica a base jurídica escolhida em conformidade com o artigo 39.º.\n\r\
\n\r\
3.   Sob proposta da comissão competente, de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, o Parlamento pode solicitar que o Conselho não autorize a abertura das negociações até que o Parlamento se tenha pronunciado, com base num relatório da comissão competente, sobre o mandato de negociação proposto.\n\r\
\n\r\
4.   Em qualquer fase das negociações e entre o fim das negociações e a celebração do acordo internacional, o Parlamento pode aprovar recomendações destinadas ao Conselho, à Comissão ou à Vice-Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança, com base num relatório da comissão competente, elaborado por essa comissão por sua iniciativa ou após apreciação das propostas relevantes apresentadas por um grupo político ou por um número de deputados  que  atinja  pelo  menos  o  limiar  baixo,  e  solicitar  que  essas  recomendações  sejam tomadas em conta antes da celebração do acordo.\n\r\
\n\r\
5.   Os pedidos de aprovação ou de parecer do Parlamento, apresentados pelo Conselho, são transmitidos pelo Presidente à comissão competente para apreciação nos termos do artigo 99.º ou do artigo 47.º, n.º 1.\n\r\
\n\r\
6.   Em  qualquer  momento  antes  de  o  Parlamento  proceder  à  votação  de  um  pedido  de aprovação ou de parecer, a comissão competente ou, no mínimo, um décimo dos deputados que compõem o Parlamento pode propor que o Parlamento solicite um parecer ao Tribunal de Justiça sobre a compatibilidade do acordo internacional com os Tratados.\n\r\
\n\r\
Antes de o Parlamento proceder à votação dessa proposta, o Presidente pode solicitar o parecer da comissão competente para os assuntos jurídicos, que apresentará as suas conclusões ao Parlamento.\n\r\
\n\r\
Se o Parlamento aprovar a proposta de solicitar um parecer ao Tribunal de Justiça, a votação do pedido de aprovação ou de parecer é adiada até o Tribunal emitir o seu parecer.\n\r\
\n\r\
7.   Caso o Conselho solicite que o Parlamento dê a sua aprovação para a celebração, a renovação ou a alteração de um acordo internacional, o Parlamento decide mediante votação única, nos termos do artigo 99.º.\n\r\
\n\r\
Se o Parlamento decidir não dar a sua aprovação, o Presidente informa o Conselho de que o acordo em causa não pode ser celebrado, renovado ou alterado.\n\r\
\n\r\
Sem prejuízo do artigo 99.º, n.º 3, o Parlamento pode decidir, com base numa recomendação da comissão competente, suspender a sua decisão sobre o processo de aprovação durante um ano, no máximo.\n\r\
\n\r\
8.   Caso o Conselho solicite que o Parlamento dê o seu parecer sobre a celebração, a renovação ou a alteração de um acordo internacional, não são admissíveis alterações ao texto do acordo. Sem prejuízo do artigo 170.º, n.º 1, são admissíveis alterações ao projeto de decisão do Conselho.\n\r\
\n\r\
Se o parecer do Parlamento for desfavorável, o Presidente solicita que o Conselho não celebre o acordo em causa.\n\r\
\n\r\
9.   Os presidentes e os relatores da comissão competente e das comissões associadas, se as houver, procuram assegurar conjuntamente que, nos termos do artigo 218.º, n.º 10, do Tratado sobre o Funcionamento da União Europeia, o Conselho, a Comissão e a Vice-Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança prestem imediatamente e periodicamente informações exaustivas ao Parlamento, se necessário a título confidencial, em todas as fases preparatórias das negociações, bem como em todas as fases da negociação e celebração de acordos internacionais, designadamente informações sobre o projeto e o texto final das diretrizes de negociação, e informações sobre a aplicação dos referidos acordos."
},
{
'id': 109,
'title': 'Artigo 109.º : Aplicação provisória ou suspensão da aplicação de acordos internacionais ou definição da posição da União em instâncias criadas por acordos internacionais',
'text': "Caso a Comissão ou a Vice‑Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança informem o Parlamento e o Conselho da sua intenção de propor a aplicação provisória ou a suspensão de um acordo internacional, o Parlamento pode convidar o Conselho, a Comissão ou a Vice-Presidente/Alta Representante a proferir uma declaração, seguida de debate. O Parlamento pode formular recomendações com base num relatório da comissão competente ou nos termos do artigo 113.º, que podem incluir, em particular, um pedido para que o Conselho não aplique provisoriamente um acordo enquanto o Parlamento não der a sua aprovação.\n\r\
\n\r\
Esse procedimento aplica-se também quando a Comissão ou a Vice-Presidente/Alta Representante propuserem posições a adotar em nome da União numa instância criada por um acordo internacional."
},
{
'id': 110,
'title': 'Artigo 110.º : Representantes especiais',
'text': "1.   Se o Conselho tencionar nomear um representante especial nos termos do artigo 33.º do Tratado da União Europeia, o Presidente, a pedido da comissão competente, convida o Conselho a fazer uma declaração, e a responder a perguntas, sobre o mandato, os objetivos e outros aspetos pertinentes relacionados com as funções e o papel a desempenhar pelo representante especial.\n\r\
\n\r\
2.   Uma vez nomeado, mas antes de assumir funções, o representante especial pode ser convidado a comparecer perante a comissão competente a fim de fazer uma declaração e de responder a perguntas.\n\r\
\n\r\
3.   No prazo de dois meses a contar da data da audição, a comissão competente pode fazer recomendações ao Conselho, à Comissão ou à Vice-Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança, diretamente relacionadas com a nomeação.\n\r\
\n\r\
4.   O  representante  especial  é  convidado  a  manter  o  Parlamento  plena  e  regularmente informado sobre os aspetos práticos da execução do seu mandato."
},
{
'id': 111,
'title': 'Artigo 111.º : Representação internacional',
'text': "1.   Antes de ser nomeado, o candidato a chefe de uma delegação externa da União pode ser convidado a comparecer perante a comissão competente a fim de fazer uma declaração e de responder a perguntas.\n\r\
\n\r\
2.   No prazo de dois meses a contar da data da audição a que se refere o n.º 1, a comissão competente pode aprovar uma resolução ou fazer uma recomendação, conforme adequado, diretamente relacionada com a nomeação."
},
{
'id': 112,
'title': 'Artigo 112.º : (suprimido)',
'text': ""
},
{
'id': 113,
'title': 'Artigo 113.º : Recomendações sobre as políticas externas da União',
'text': "1.   A  competente  pode  elaborar  projetos  de  recomendação  dirigidos ao  Conselho,  à Comissão ou à Vice-Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança sobre questões do âmbito do Título V do Tratado da União Europeia (ação externa da União), ou nos casos em que o Parlamento não tenha sido consultado sobre um acordo internacional que se enquadre no âmbito de aplicação do artigo 108.º do Regimento, ou em que o Parlamento não tenha sido informado nos termos do artigo 109.º do Regimento.\n\r\
\n\r\
2.   Em casos de urgência, o Presidente pode autorizar a realização de uma reunião urgente da comissão em causa.\n\r\
\n\r\
3.   No quadro do processo de aprovação desses projetos de recomendação em comissão, é necessário pôr à votação um texto escrito.\n\r\
\n\r\
4.   Nos casos urgentes a que se refere o n.º 2, o artigo 158.º não se aplica em comissão, e podem ser apresentadas alterações orais. Os deputados não podem opor-se a que sejam postas à votação alterações orais em comissão.\n\r\
\n\r\
5.   Os projetos de recomendação elaborados pela comissão são inscritos na ordem do dia do período de sessões seguinte. Em casos urgentes, qualificados como tal pelo Presidente, as recomendações podem ser inscritas na ordem do dia do período de sessões em curso.\n\r\
\n\r\
6.   As recomendações são consideradas aprovadas, salvo se, antes do início do período de sessões, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo apresente por escrito uma objeção. Caso seja apresentada uma tal objeção, os projetos de recomendação da comissão são inscritos na ordem do dia do mesmo período de sessões. Essas recomendações são objeto de debate, e as alterações apresentadas por um grupo político ou por um número de deputados que atinja pelo menos o limiar baixo são postas à votação.\n\r\
\n\r\
Artigo 113.º-A : Consulta e informação do Parlamento no âmbito da política externa e de segurança comum\n\r\
\n\r\
1.   Quando  o  Parlamento  for  consultado  nos  termos  do  artigo  36.º  do  Tratado  da  União Europeia, a questão é enviada à comissão competente, que pode elaborar projetos de recomendação nos termos do artigo 113.º do Regimento.\n\r\
\n\r\
2.   As comissões em causa devem procurar assegurar que a Vice-Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança lhes preste informações regulares e tempestivas sobre a evolução e a execução da política externa e de segurança comum da União, sobre os custos previstos para cada decisão tomada no âmbito da mesma que tenha incidências financeiras e sobre quaisquer outros aspetos financeiros relacionados com a execução de ações no âmbito daquela política. Excecionalmente, a pedido da Vice-Presidente/Alta  Representante, uma comissão pode decidir reunir-se à porta fechada.\n\r\
\n\r\
3.   Duas vezes por ano, realiza-se um debate sobre o documento consultivo elaborado pela Vice-Presidente/Alta Representante sobre os principais aspetos e as opções fundamentais da política externa  e de segurança comum,  incluindo a  política comum de segurança e de defesa e as respetivas incidências financeiras no orçamento da União. Aplicam-se os procedimentos previstos no artigo 123.º.\n\r\
\n\r\
4.   A Vice-Presidente/Alta‑Representante é convidada a estar presente em todos os debates em sessão plenária que impliquem questões de política externa, de segurança ou de defesa."
},
{
'id': 114,
'title': 'Artigo 114.º : Violação dos direitos humanos',
'text': "Em cada período de sessões, sem que para tal seja necessária autorização, cada uma das comissões competentes pode apresentar uma proposta de resolução, de acordo com o mesmo procedimento que o previsto no artigo 113.º, n.ºs 5 e 6, sobre casos de violação dos direitos humanos."
},
{
'id': 115,
'title': 'Artigo 115.º : Transparência das atividades do Parlamento',
'text': "1.   O Parlamento assegura que as suas atividades sejam conduzidas com a máxima transparência, de acordo com o disposto no segundo parágrafo do artigo 1.º do Tratado da União Europeia, no artigo 15.º do Tratado sobre o Funcionamento da União Europeia e no artigo 42.º da Carta dos Direitos Fundamentais da União Europeia.\n\r\
\n\r\
2.   Os debates do Parlamento são públicos.\n\r\
\n\r\
3.   As reuniões das comissões do Parlamento são, normalmente, públicas. Contudo, até ao momento da aprovação da ordem do dia de uma reunião, as comissões podem decidir dividir a ordem do dia em pontos a tratar em público e pontos a tratar à porta fechada. Porém, se uma reunião tiver lugar à porta fechada, a comissão pode decidir que os documentos dessa reunião sejam acessíveis ao público."
},
{
'id': 116,
'title': 'Artigo 116.º : Acesso do público aos documentos',
'text': "1.   Os cidadãos da União, bem como as pessoas singulares ou coletivas que residam ou tenham a sua sede social num Estado-Membro, têm direito de acesso aos documentos do Parlamento, nos termos do artigo 15.º do Tratado sobre o Funcionamento da União Europeia. O acesso aos documentos do Parlamento está sujeito aos princípios, condições e limitações estabelecidos no Regulamento (CE) n.º 1049/2001.\n\r\
\n\r\
O acesso aos documentos do Parlamento é concedido, tanto quanto possível, a outras pessoas singulares ou coletivas nas mesmas condições.\n\r\
\n\r\
2.   Para  efeitos  de  acesso  aos  documentos,  entende-se  por  “documentos  do  Parlamento” qualquer conteúdo, na aceção do artigo 3.º, alínea a), do Regulamento (CE) n.º 1049/2001, elaborado ou recebido por titulares de cargos do Parlamento, na aceção do título I, capítulo 2, do Regimento, por órgãos do Parlamento, por comissões ou delegações interparlamentares ou pelo Secretariado do Parlamento.\n\r\
\n\r\
Nos termos do artigo 4.º do Estatuto dos Deputados ao Parlamento Europeu, os documentos elaborados por deputados ou por grupos políticos só são considerados documentos do Parlamento, para efeitos de acesso aos mesmos, os documentos que sejam apresentados nos termos do Regimento.\n\r\
\n\r\
A Mesa estabelece regras para garantir que todos os documentos do Parlamento sejam registados.\n\r\
\n\r\
3.   O  Parlamento  cria  um  sítio  web  para  o  registo  público  dos  seus  documentos.  Os documentos legislativos e algumas outras categorias de documentos são diretamente acessíveis, nos termos do Regulamento (CE) n.º 1049/2001, no sítio web do registo público do Parlamento. Na medida do possível, as referências a outros documentos do Parlamento são incluídas no sítio web do registo público do Parlamento.\n\r\
\n\r\
As categorias de documentos diretamente acessíveis no sítio web do registo público do Parlamento são indicadas numa lista aprovada pela Mesa e publicada nesse mesmo sítio web. Essa lista não restringe o direito de acesso aos documentos não incluídos nas categorias nela indicadas; esses documentos podem ser disponibilizados, mediante pedido escrito, nos termos do Regulamento (CE) n.º 1049/2001.\n\r\
\n\r\
A Mesa aprova as regras relativas ao acesso aos documentos, nos termos do Regulamento (CE) n.º 1049/2001; essas regras são publicadas no Jornal Oficial da União Europeia.\n\r\
\n\r\
4.   A Mesa designa os órgãos competentes para o tratamento dos pedidos iniciais (artigo 7.º do Regulamento (CE) n.º 1049/2001) e para a aprovação das decisões sobre os pedidos confirmativos (artigo 8.º desse regulamento), e sobre os pedidos de acesso a documentos sensíveis (artigo 9.º desse regulamento).\n\r\
\n\r\
5.   A supervisão do tratamento dispensado aos pedidos de acesso aos documentos é da responsabilidade de um dos vice-presidentes.\n\r\
\n\r\
6.   A Mesa aprova o relatório anual referido no artigo 17.º, n.º 1, do Regulamento (CE) n.º 1049/2001.\n\r\
\n\r\
7.   A comissão competente verifica periodicamente a transparência das atividades do Parlamento e apresenta um relatório com as suas conclusões e recomendações ao plenário.\n\r\
\n\r\
A comissão competente pode examinar e avaliar também os relatórios aprovados pelas outras instituições e agências, nos termos do artigo 17.º do Regulamento (CE) n.º 1049/2001.\n\r\
\n\r\
8.   A Conferência dos Presidentes designa os representantes do Parlamento ao Comité Interinstitucional criado nos termos do artigo 15.º, n.º 2, do Regulamento (CE) n.º 1049/2001.\n\r\
\n\r\
Artigo 116.º-A : Acesso ao Parlamento\n\r\
\n\r\
1.   Os cartões de acesso dos deputados, dos assistentes dos deputados e de terceiros são emitidos de acordo com as normas estabelecidas pela Mesa. Essas normas regulam também a utilização e a revogação dos cartões de acesso.\n\r\
\n\r\
2.   Os  cartões  de  acesso  não  são  emitidos  às  pessoas  que  integram  o  círculo  de colaboradores dos deputados, abrangidas pelo âmbito de aplicação do Acordo entre  o  Parlamento  Europeu  e  a  Comissão  Europeia  sobre  o  registo  de transparência.\n\r\
\n\r\
3.   As entidades enumeradas no registo de transparência e os seus representantes que disponham de cartões de acesso de longa duração ao Parlamento Europeu devem respeitar:\n\r\
\n\r\
-   o Código de Conduta das Entidades Registadas, anexo ao acordo;\n\r\
\n\r\
-   os procedimentos e outros deveres estabelecidos pelo Acordo; e\n\r\
\n\r\
-   as disposições de execução do presente artigo.\n\r\
\n\r\
Sem prejuízo da aplicabilidade das regras gerais de revogação ou suspensão temporária dos cartões de acesso de longa duração, e a não ser que existam grandes argumentos em sentido contrário, o Secretário-Geral pode, com autorização dos questores, revogar ou suspender um cartão de acesso de longa duração se o seu titular tiver sido retirado do registo de transparência por motivos de violação do Código de Conduta das Entidades Registadas, se tiver cometido uma violação grave dos deveres previstos no presente número, ou se se tiver recusado a respeitar, sem justificação suficiente, uma convocatória formal para participar numa audição ou numa reunião de comissão, ou a cooperar com uma comissão de inquérito.\n\r\
\n\r\
4.   Os questores podem definir em que medida o código de conduta a que se refere o n.º 3 é aplicável às pessoas que, apesar de disporem de um cartão de acesso de longa duração, não são abrangidas pelo âmbito de aplicação do acordo.\n\r\
\n\r\
5.   A Mesa aprova, sob proposta do Secretário-Geral, as medidas necessárias para a aplicação do registo de transparência, nos termos do disposto no acordo sobre a criação desse registo."
},
{
'id': 117,
'title': 'Artigo 117.º : Eleição do Presidente da Comissão',
'text': "1.   Quando  o  Conselho  Europeu  propuser  um  candidato  a  Presidente  da  Comissão,  o Presidente convida o candidato a proferir uma declaração e a apresentar as suas orientações políticas perante o Parlamento. A declaração é seguida de debate.\n\r\
\n\r\
O Conselho Europeu é convidado a participar no debate.\n\r\
\n\r\
2.   Nos termos do artigo 17.º, n.º 7, do Tratado da União Europeia, o Parlamento elege o Presidente da Comissão por maioria dos membros que o compõem.\n\r\
\n\r\
A votação é secreta.\n\r\
\n\r\
3.   Se o candidato for eleito, o Presidente informa do facto o Conselho e solicita que o Conselho e o Presidente eleito da Comissão proponham, de comum acordo, os candidatos para os diferentes cargos de comissários.\n\r\
\n\r\
4.   Se o candidato não obtiver a maioria necessária, o Presidente convida o Conselho Europeu a propor um novo candidato no prazo de um mês para uma eleição pelo mesmo procedimento."
},
{
'id': 118,
'title': 'Artigo 118.º : Eleição da Comissão',
'text': "1.   O Presidente convida o Presidente eleito da Comissão a informar o Parlamento sobre a atribuição das pastas no colégio de comissários proposto de acordo com as orientações políticas do Presidente eleito.\n\r\
\n\r\
2.   O Presidente, após consulta do Presidente eleito da Comissão, convida os candidatos indigitados pelo Presidente eleito da Comissão e pelo Conselho para os vários cargos de comissários a comparecer perante as comissões parlamentares ou os órgãos adequados em função do seu domínio provável de atividade.\n\r\
\n\r\
3.   As audições são realizadas pelas comissões. A título excecional, uma audição pode ser realizada num formato diferente quando um comissário indigitado tiver competências essencialmente horizontais, desde que nessa audição participem as comissões competentes.\n\r\
\n\r\
As audições são públicas.\n\r\
\n\r\
4.   A comissão ou comissões competentes convidam o comissário indigitado a fazer uma declaração e a responder a perguntas. As audições são organizadas de forma a permitir que os comissários indigitados apresentem ao Parlamento todas as informações pertinentes. As disposições relativas à organização dessas audições são estabelecidas num anexo do Regimento(1).\n\r\
\n\r\
5.   O Presidente eleito da Comissão é convidado a apresentar o colégio de comissários e o respetivo programa numa sessão do Parlamento. O Presidente do Conselho Europeu e o Presidente do Conselho são convidados a comparecer. A declaração é seguida de debate.\n\r\
\n\r\
6.   A fim de encerrar esse debate, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem apresentar uma proposta de resolução. Aplica-se o o artigo 123.º, n.ºs 3 a 8.\n\r\
\n\r\
7.   Na sequência da votação da proposta de resolução, o Parlamento elege ou rejeita a Comissão por maioria dos votos expressos, por votação nominal. O Parlamento pode adiar a votação para a sessão seguinte.\n\r\
\n\r\
8.   O Presidente informa o Conselho da eleição ou da rejeição da Comissão.\n\r\
\n\r\
9.   No caso de uma mudança substancial na atribuição das pastas ou de uma mudança na composição da Comissão no curso do mandato, os comissários interessados ou quaisquer outros comissários indigitados são convidados a participar numa audição organizada nos termos dos n.ºs 3 e 4.\n\r\
\n\r\
10.   Em caso de mudança da pasta de um comissário ou dos interesses financeiros de um comissário no curso do mandato, a situação é submetida ao controlo do Parlamento nos termos do anexo VI.\n\r\
\n\r\
Se se registar um conflito de interesses durante o mandato de um comissário e o Presidente da Comissão não aplicar as recomendações do Parlamento para a resolução desse conflito de interesses, o Parlamento pode solicitar que o Presidente da Comissão retire a confiança ao comissário em causa, nos termos do n.º 5 do Acordo-Quadro sobre as Relações entre o Parlamento Europeu e a Comissão Europeia, e que, se for caso disso, tome medidas destinadas a privar o comissário do seu direito a pensão ou a outros benefícios que a substituam, nos termos do segundo parágrafo do artigo 245.º do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
\n\r\
(1)	Ver anexo VI.\n\r\
\n\r\
Artigo 118.º-A : Programação plurianual\n\r\
\n\r\
Aquando da nomeação de uma nova Comissão, o Parlamento, o Conselho e a Comissão procedem, nos termos do ponto 5 do Acordo Interinstitucional Legislar Melhor, a uma troca de pontos de vista e aprovam conclusões comuns sobre a programação plurianual.\n\r\
\n\r\
Para esse efeito, e antes de negociar com o Conselho e com a Comissão as conclusões comuns sobre a programação plurianual, o Presidente procede a uma troca de pontos de vista com a Conferência dos Presidentes sobre os principais objetivos e prioridades estratégicas para a nova legislatura. Esta troca de pontos de vista tem em conta, entre outros aspetos, as prioridades apresentadas pelo Presidente eleito da Comissão e as respostas dadas pelos comissários indigitados durante as audições previstas no artigo 118.º.\n\r\
\n\r\
Antes de assinar as conclusões comuns, o Presidente solicita a aprovação da Conferência dos Presidentes."
},
{
'id': 119,
'title': 'Artigo 119.º : Moção de censura à Comissão',
'text': "1.   Um décimo dos membros que compõem o Parlamento pode apresentar ao Presidente uma moção de censura à Comissão. Se tiver sido votada uma moção de censura durante os dois meses  precedentes, não é admissível qualquer nova moção de censura apresentada por menos de um quinto dos membros que compõem o Parlamento.\n\r\
\n\r\
2.   A  moção  deve  conter  a  menção  «moção  de  censura»  e  deve indicar  as  razões  que  a fundamentam. A moção é transmitida à Comissão.\n\r\
\n\r\
3.   O Presidente anuncia aos deputados que foi apresentada uma moção de censura imediatamente após a ter recebido.\n\r\
\n\r\
4.   O debate sobre a censura realiza‑se pelo menos 24 horas após a receção de uma moção de censura ter sido anunciada aos deputados.\n\r\
\n\r\
5.   A votação da moção é nominal e realiza-se pelo menos 48 horas após a abertura do debate.\n\r\
\n\r\
6.   Sem prejuízo dos n.ºs 4 e 5, o debate e a votação realizam-se, o mais tardar, durante o período de sessões subsequente à apresentação da moção.\n\r\
\n\r\
7.   Nos termos do artigo 234.º do Tratado sobre o Funcionamento da União Europeia, a moção de censura é aprovada se obtiver a maioria de dois terços dos votos expressos, que representem a maioria dos membros que compõem o Parlamento. O resultado da votação é notificado ao Presidente do Conselho e ao Presidente da Comissão."
},
{
'id': 120,
'title': 'Artigo 120.º : Nomeação dos juízes e dos advogados-gerais do Tribunal de Justiça da União Europeia',
'text': "Sob proposta da comissão competente, o Parlamento nomeará o seu candidato para o grupo de sete pessoas encarregadas de controlar a aptidão dos candidatos para exercerem o cargo de juiz ou de advogado‑geral do Tribunal de Justiça e do Tribunal Geral. A comissão competente seleciona o candidato que deseja propor deliberando por maioria simples. Para o efeito, os coordenadores dessa comissão estabelecem uma lista restrita de candidatos."
},
{
'id': 121,
'title': 'Artigo 121.º : Nomeação dos membros do Tribunal de Contas',
'text': "1.   Os candidatos indigitados para o cargo de membro do Tribunal de Contas são convidados a proferir uma declaração perante a comissão competente e a responder às perguntas formuladas pelos seus membros. A comissão vota separadamente sobre cada candidatura, por escrutínio secreto.\n\r\
\n\r\
2.   A comissão competente apresenta uma recomendação de aprovação ou de rejeição da candidatura ao Parlamento.\n\r\
\n\r\
3.   A votação no plenário realiza-se no prazo de dois meses a contar da receção da candidatura, salvo se o Parlamento, a pedido da comissão competente, de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, decidir em contrário. O Parlamento vota separadamente sobre cada candidatura, por escrutínio secreto.\n\r\
\n\r\
4.   Se  o  parecer  aprovado pelo  Parlamento  sobre  uma  candidatura  for  desfavorável,  o Presidente convida o Conselho a retirar a sua candidatura e a apresentar uma nova candidatura ao Parlamento."
},
{
'id': 122,
'title': 'Artigo 122.º : Nomeação dos membros da Comissão Executiva do Banco Central Europeu',
'text': "1.   O  candidato  indigitado  para  o  cargo  de  Presidente,  de Vice-Presidente  ou  de membro  da Comissão Executiva do Banco Central Europeu é convidado a proferir uma declaração perante a comissão competente e a responder às perguntas formuladas pelos seus membros.\n\r\
\n\r\
2.   A comissão competente apresenta uma recomendação de aprovação ou de rejeição da candidatura ao Parlamento.\n\r\
\n\r\
3.   A votação no plenário realiza-se no prazo de dois meses a contar da receção da candidatura, salvo se o Parlamento,  a  pedido  da  comissão  competente,  de  um  grupo  político  ou  de  um número  de deputados que atinja pelo menos o limiar baixo, decidir em contrário. O Parlamento vota separadamente sobre cada candidatura, por escrutínio secreto.\n\r\
\n\r\
4.   Se o parecer aprovado pelo Parlamento sobre uma candidatura for desfavorável, o Presidente convida o Conselho a retirar a sua candidatura e a apresentar uma nova candidatura ao Parlamento.\n\r\
\n\r\
Artigo 122.º-A : Nomeações para os órgãos de governação económica\n\r\
\n\r\
1.   O presente artigo aplica-se à nomeação:\n\r\
\n\r\
-   do presidente e do vice-presidente do Conselho de Supervisão do Mecanismo Único de Supervisão;\n\r\
\n\r\
-   do presidente, do vice-presidente e dos membros que exercem funções a tempo inteiro do Conselho Único de Resolução do Mecanismo Único de Resolução;\n\r\
\n\r\
-   dos presidentes e dos diretores executivos da Autoridade Europeia de Supervisão (Autoridade Bancária Europeia, Autoridade Europeia dos Valores Mobiliários e dos Mercados, Autoridade Europeia dos Seguros e Pensões Complementares de Reforma); e\n\r\
\n\r\
-   do diretor executivo e do diretor executivo adjunto do Fundo Europeu para Investimentos Estratégicos.\n\r\
\n\r\
2.   Cada candidato é convidado a fazer uma declaração perante a comissão competente e a responder às perguntas formuladas pelos seus membros.\n\r\
\n\r\
3.   A comissão competente apresenta ao Parlamento uma recomendação sobre cada proposta de nomeação.\n\r\
\n\r\
4.   A votação no plenário realiza-se no prazo de dois meses a contar da receção da proposta de nomeação, salvo se o Parlamento, a pedido da comissão competente, de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, decidir em contrário. O Parlamento vota separadamente sobre cada candidatura, por escrutínio secreto.\n\r\
\n\r\
5.   Se a decisão aprovada pelo Parlamento sobre uma proposta de nomeação for desfavorável, o Presidente solicita que a proposta seja retirada e que seja apresentada uma nova proposta ao Parlamento."
},
{
'id': 123,
'title': 'Artigo 123.º : Declarações da Comissão, do Conselho e do Conselho Europeu',
'text': "1.   Os membros da Comissão, do Conselho e do Conselho Europeu podem pedir a palavra ao Presidente do Parlamento a qualquer momento para fazer uma declaração. O Presidente do Conselho Europeu faz uma declaração após cada uma das suas reuniões. O Presidente do Parlamento decide do momento em que a declaração pode ser feita, e se pode ser seguida de um debate circunstanciado ou de um breve período de  30 minutos de perguntas breves e concisas apresentadas pelos deputados.\n\r\
\n\r\
2.   Se estiver inscrita na ordem do dia uma declaração seguida de debate, o Parlamento decide se encerra ou não o debate com uma resolução. Não pode fazê-lo, no entanto, se estiver previsto para o mesmo período de sessões ou para o período de sessões seguinte um relatório sobre a mesma matéria, salvo proposta em contrário do Presidente, por motivos excecionais. Se o Parlamento decidir encerrar o debate com uma resolução, uma comissão, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem apresentar uma proposta de resolução.\n\r\
\n\r\
3.   As propostas de resolução são postas à votação no primeiro período de votação possível. O Presidente decide das exceções eventuais. São admissíveis declarações de voto.\n\r\
\n\r\
4.   Uma proposta de resolução comum substitui as propostas anteriormente apresentadas pelos mesmos signatários, mas não as apresentadas por outras comissões, grupos políticos ou deputados.\n\r\
\n\r\
5.   Se uma proposta de resolução comum for apresentada por grupos políticos que representem uma clara maioria, o Presidente pode pô-la à votação em primeiro lugar.\n\r\
\n\r\
6.   Após  a  aprovação  de  uma  proposta  de  resolução,  não  são  postas  à  votação  outras propostas, salvo se o Presidente, em circunstâncias excecionais, decidir em contrario.\n\r\
\n\r\
7.   O autor ou os autores de uma proposta de resolução apresentada nos termos do n.º 2 do presente artigo ou do artigo 135.º, n.º 2, podem retirá-la antes da votação final.\n\r\
\n\r\
8.   Uma proposta de resolução que tenha sido retirada pode ser subscrita e reapresentada imediatamente por um grupo político, por uma comissão ou por um número de deputados igual ao requerido para a sua apresentação. O presente número e o n.º 7 aplicam-se também às resoluções apresentadas nos termos dos artigos 105.º e 106.º."
},
{
'id': 124,
'title': 'Artigo 124.º : Explicação das decisões da Comissão',
'text': "O Presidente do Parlamento convida o Presidente da Comissão, o Comissário responsável pelas relações com o Parlamento Europeu ou, na sequência de acordo, qualquer outro comissário, a fazer uma declaração perante o Parlamento, após cada reunião da Comissão, destinada a explicar as principais decisões tomadas, salvo se, por razões de calendário ou de interesse político relativo do assunto, a Conferência dos Presidentes decidir que tal não é necessário. A declaração é seguida de um debate de pelo menos 30 minutos, durante o qual os deputados podem formular perguntas breves e concisas."
},
{
'id': 125,
'title': 'Artigo 125.º : Declarações do Tribunal de Contas',
'text': "1.   No âmbito do processo de quitação ou das atividades do Parlamento relacionadas com o controlo orçamental, o Presidente do Tribunal de Contas pode ser convidado a fazer uma declaração ao Parlamento para apresentar as observações constantes do relatório anual, dos relatórios especiais ou dos pareceres do Tribunal, ou para explicitar o programa de trabalho do Tribunal.\n\r\
\n\r\
2.   O  Parlamento  pode  decidir  proceder  a  um debate  separado, com a participação da Comissão e do Conselho,  sobre  quaisquer  questões suscitadas pelas referidas declarações, em especial se tiverem sido assinaladas irregularidades na gestão financeira."
},
{
'id': 126,
'title': 'Artigo 126.º : Declarações do Banco Central Europeu',
'text': "1.   O Presidente do Banco Central Europeu é convidado a apresentar ao Parlamento o relatório anual do Banco sobre as atividades do sistema europeu de bancos centrais e sobre a política monetária do ano anterior e do ano em curso.\n\r\
\n\r\
2.   Essa apresentação é seguida de um debate de caráter geral.\n\r\
\n\r\
3.   O Presidente do Banco Central Europeu é convidado a participar em reuniões da comissão competente pelo menos quatro vezes por ano, a fim de fazer declarações e de responder a perguntas.\n\r\
\n\r\
4.   A seu pedido ou a pedido do Parlamento, o Presidente, o vice-presidente e os restantes membros da comissão executiva do Banco Central Europeu podem ser convidados a participar noutras reuniões.\n\r\
\n\r\
5.   É redigido um relato integral das atividades referidas nos n.ºs 3 e 4."
},
{
'id': 127,
'title': 'Artigo 127.º : (suprimido)',
'text': ""
},
{
'id': 128,
'title': 'Artigo 128.º : Perguntas com pedido de resposta oral com debate',
'text': "1.   Uma comissão, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem formular perguntas ao Conselho, à Comissão ou à Vice-Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança, e requerer que as perguntas sejam inscritas na ordem do dia do Parlamento.\n\r\
\n\r\
As perguntas são entregues por escrito ao Presidente. O Presidente envia-as de imediato à Conferência dos Presidentes.\n\r\
\n\r\
A Conferência dos Presidentes decide se as perguntas são inscritas no projeto de ordem do dia ou não, nos termos do artigo 149.º. As perguntas não inscritas no projeto de ordem do dia do Parlamento no prazo de três meses a contar da sua apresentação, caducam.\n\r\
\n\r\
2.   As perguntas à Comissão e à Vice-Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança são transmitidas aos destinatários pelo menos uma semana antes da sessão em cuja ordem do dia devam ser inscritas, e as perguntas ao Conselho, pelo menos três semanas antes dessa data.\n\r\
\n\r\
3.   Se as perguntas incidirem sobre a política comum de segurança e defesa, não se aplicam os prazos previstos no n.º 2, e a resposta deve ser dada com a prontidão suficiente para que o Parlamento seja mantido devidamente informado.\n\r\
\n\r\
4.   Um dos autores da pergunta pode usar da palavra para a desenvolver no Parlamento. O destinatário responde.\n\r\
\n\r\
5.   Aplica-se, com as necessárias adaptações, o artigo 123.º, n.ºs 2 a 8, relativos à apresentação e à votação de propostas de resolução."
},
{
'id': 129,
'title': 'Artigo 129.º : Período de perguntas',
'text': "1.   Em cada período de sessões pode haver um período de perguntas à Comissão, com a duração máxima de 90 minutos, sobre um ou mais temas horizontais específicos fixados pela Conferência dos Presidentes um mês antes do período de sessões em causa.\n\r\
\n\r\
2.   Os   comissários   convidados   a   participar   pela   Conferência   dos   Presidentes   têm uma pasta relacionada com o tema ou os temas horizontais específicos sobre os quais lhes serão feitas perguntas. O número de comissários a convidar é limitado a dois por cada período de sessões. No entanto, é possível convidar um terceiro comissário, em função do tema ou temas horizontais específicos escolhidos para o período de perguntas.\n\r\
\n\r\
3.   Em conformidade com as orientações estabelecidas pela Conferência dos Presidentes, podem realizar-se períodos de perguntas específicos ao Conselho, ao Presidente da Comissão, à Vice-Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança e ao Presidente do Eurogrupo.\n\r\
\n\r\
4.   O tempo de uso da palavra do período de perguntas não é atribuído com antecedência. O Presidente assegura, na medida do possível, que deputados de diferentes tendências políticas e de diferentes Estados-Membros possam apresentar perguntas, alternadamente.\n\r\
\n\r\
5.   Cada deputado dispõe de um minuto para formular a pergunta, e o Comissário dispõe de dois minutos para dar a resposta. O deputado pode formular uma pergunta complementar, com a duração máxima de 30 segundos, que tenha relação direta com a pergunta principal. Nesse caso, o Comissário dispõe de dois minutos suplementares para dar a sua resposta.\n\r\
\n\r\
As perguntas e as perguntas complementares devem estar diretamente relacionadas com o tema horizontal específico decidido nos termos do n.º 1. O Presidente pode decidir da sua admissibilidade."
},
{
'id': 130,
'title': 'Artigo 130 : Perguntas com pedido de resposta escrita',
'text': "1.   Os deputados podem dirigir perguntas com pedido de resposta escrita ao Conselho Europeu, ao Conselho, à Comissão ou à Vice-Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança, em conformidade com os critérios estabelecidos num anexo do Regimento. O conteúdo das perguntas é da exclusiva responsabilidade dos seus autores.\n\r\
\n\r\
2.   As perguntas são apresentadas ao Presidente. As questões relativas à admissibilidade de uma pergunta são decididas pelo Presidente. A decisão do Presidente deve basear-se, não só nas disposições do anexo referido no n.º 1, mas também nas disposições do Regimento em geral. A decisão fundamentada do Presidente é notificada ao autor da pergunta.\n\r\
\n\r\
3.   As perguntas são apresentadas em formato eletrónico. Cada deputado pode apresentar, no máximo, 20 perguntas durante um período de três meses consecutivos.\n\r\
\n\r\
4.   As perguntas podem ter o apoio de outros deputados para além dos próprios autores. As perguntas são contabilizadas apenas para o número máximo de perguntas feitas pelo autor, mas não para o número máximo de perguntas  do deputado apoiante, nos termos do n.º 3.\n\r\
\n\r\
5.   Se uma pergunta não tiver podido receber resposta do destinatário no prazo de três semanas (perguntas prioritárias) ou no prazo de seis semanas (perguntas não prioritárias) depois de lhe ter sido transmitida, pode ser inscrita, a pedido do seu autor, na ordem do dia da reunião seguinte da comissão competente.\n\r\
\n\r\
6.   Cada deputado pode formular uma pergunta prioritária por mês.\n\r\
\n\r\
7.   As  perguntas  e  as  respostas, incluindo  os  anexos que as acompanham,  são publicadas no sítio web do Parlamento.\n\r\
\n\r\
Artigo 130.º-A : Interpelações breves com pedido de resposta escrita\n\r\
\n\r\
1.   Em interpelações breves, consistentes em perguntas com pedido de resposta escrita, o Conselho, a Comissão ou a Vice‑Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança podem ser convidados por uma comissão, por um grupo político ou por um mínimo de cinco por cento dos deputados que compõem o Parlamento a prestar informações ao Parlamento sobre temas específicos.\n\r\
\n\r\
Essas perguntas são apresentadas ao Presidente que, caso as perguntas estejam em conformidade com o Regimento em geral e cumpram os critérios estabelecidos num anexo do Regimento(1), solicita ao destinatário que responda no prazo de duas semanas. O Presidente pode prorrogar esse prazo após consultar os autores das perguntas.\n\r\
\n\r\
2.   As perguntas e as respostas são publicadas no sítio web do Parlamento.\n\r\
\n\r\
\n\r\
(1)	Ver Anexo II.\n\r\
\n\r\
\n\r\
Artigo 130.º-B : Interpelações extensas com pedido de resposta escrita e debate\n\r\
\n\r\
1.   Em interpelações extensas, consistentes em perguntas com pedido de resposta escrita e debate, essas perguntas podem ser apresentadas ao  Conselho, à Comissão ou à Vice‑Presidente da Comissão/Alta Representante da União para os Negócios Estrangeiros e a Política de Segurança por uma comissão, por um grupo político ou por um mínimo de cinco por cento dos deputados que compõem o Parlamento. As interpelações podem incluir uma breve exposição de motivos.\n\r\
\n\r\
Essas perguntas são apresentadas por escrito ao Presidente que, caso as perguntas estejam em conformidade com o Regimento em geral e cumpram os critérios estabelecidos num anexo do Regimento(1), as comunica de imediato ao destinatário da pergunta e lhe pede que declare se e quando tenciona responder.\n\r\
\n\r\
2.   Após receção da resposta por escrito, a interpelação extensa é inscrita no projeto de ordem do dia do Parlamento, em conformidade com o procedimento previsto no artigo 149.º. Realiza-se um debate, se uma comissão, um grupo político ou um mínimo de cinco por cento dos deputados que compõem o Parlamento o solicitarem.\n\r\
\n\r\
3.   Se o destinatário se recusar a responder à pergunta ou não o fizer no prazo de três semanas, a pergunta é inscrita no projeto de ordem do dia. Realiza-se um debate, se uma comissão, um grupo político ou um mínimo de cinco por cento dos deputados que compõem o Parlamento o solicitarem. Antes do debate, um dos autores da pergunta pode ser autorizado a aduzir fundamentos adicionais para a mesma.\n\r\
\n\r\
4.   Um dos autores da pergunta pode usar da palavra no Parlamento para a desenvolver. A resposta é dada por um membro da instituição interpelada.\n\r\
\n\r\
Aplica-se, com as necessárias adaptações, o artigo 123.º, n.ºs 2 a 5, relativos à apresentação e à votação de propostas de resolução.\n\r\
\n\r\
5.   As perguntas e as respostas são publicadas no sítio web do Parlamento.\n\r\
\n\r\
\n\r\
(1)	Ver anexo II"
},
{
'id': 131,
'title': 'Artigo 131.º : Perguntas com pedido de resposta escrita ao Banco Central Europeu',
'text': "1.   Qualquer deputado pode dirigir, no máximo, seis perguntas com pedido de resposta escrita por mês ao Banco Central Europeu, em conformidade com os critérios estabelecidos num anexo do Regimento(1). O conteúdo das perguntas é da exclusiva responsabilidade dos seus autores.\n\r\
\n\r\
2.   As perguntas são apresentadas por escrito ao presidente da comissão competente, que as notifica ao Banco Central Europeu. As questões relativas à admissibilidade de uma pergunta são decididas pelo presidente da comissão competente. A decisão sobre a admissibilidade é notificada ao autor da pergunta.\n\r\
\n\r\
3.   As perguntas e as respostas são publicadas no sítio web do Parlamento.\n\r\
\n\r\
4.   Se uma pergunta com pedido de resposta escrita não tiver recebido resposta no prazo de seis semanas, pode ser inscrita, a pedido  do  seu  autor,  na  ordem  do  dia  da  reunião  seguinte  da  comissão  competente  com  o Presidente do Banco Central Europeu.\n\r\
\n\r\
\n\r\
(1)	Ver anexo II.\n\r\
\n\r\
Artigo 131.º-A : Perguntas com pedido de resposta escrita relativas ao Mecanismo Único de Supervisão e ao Mecanismo Único de Resolução\n\r\
\n\r\
1.   O artigo 131.º, n.ºs 1, 2 e 3, aplica-se, com as necessárias adaptações, às perguntas com pedido de resposta escrita relativas ao Mecanismo Único de Supervisão e ao Mecanismo Único de Resolução. O número dessas perguntas é deduzido do máximo de seis perguntas por mês previstas no artigo 131.º, n.º 1.\n\r\
\n\r\
2.   Se  uma  pergunta  com pedido de resposta escrita não  tiver  recebido  resposta  no  prazo  de  cinco  semanas,  pode  ser inscrita, a pedido do seu autor, na ordem do dia da reunião seguinte da comissão competente com o Presidente do Conselho do Mecanismo a que se destina."
},
{
'id': 132,
'title': 'Artigo 132.º : Relatórios anuais e outros relatórios de outras instituições ou instâncias',
'text': "1.   Os relatórios anuais e outros relatórios de outras instituições ou instâncias para os quais os Tratados prevejam a consulta do Parlamento, ou para os quais outras disposições legais requeiram que o Parlamento emita parecer, são objeto de relatório a apresentar ao plenário.\n\r\
\n\r\
2.   Os relatórios anuais e outros relatórios de outras instituições ou instâncias não abrangidos pelo n.º 1 são enviados à comissão competente, que procede ao seu exame, e que pode apresentar uma breve proposta de resolução ao Parlamento ou propor a elaboração de um relatório nos termos do artigo 52.º se considerar que o Parlamento deve tomar uma posição sobre uma questão importante tratada nos relatórios."
},
{
'id': 133,
'title': 'Artigo 133.º : Propostas de resolução',
'text': "1.   Os deputados podem apresentar propostas de resolução sobre assuntos que se enquadrem na esfera de atividades da União.\n\r\
\n\r\
Essas propostas de resolução não podem ter mais de 200 palavras.\n\r\
\n\r\
2.   Essas propostas de resolução não podem:\n\r\
\n\r\
-   conter decisões sobre assuntos em relação aos quais o Regimento, em particular o artigo 46.º, define competências e procedimentos específicos, nem\n\r\
\n\r\
-   abordar assuntos que sejam objeto de procedimentos em curso no Parlamento.\n\r\
\n\r\
3.   Cada deputado pode apresentar, no máximo, uma proposta de resolução desse tipo por mês.\n\r\
\n\r\
4.   As propostas de resolução são apresentadas ao Presidente, que verifica o cumprimento dos critérios  aplicáveis.  Se  o  Presidente  declarar  que uma  proposta  é admissível,  anuncia a  proposta no plenário e envia-a à comissão competente.\n\r\
\n\r\
5.   A comissão competente decide do procedimento a seguir, que pode incluir a combinação de uma proposta de resolução com outras propostas de resolução ou com relatórios; a aprovação de um parecer, eventualmente sob a forma de carta; ou a elaboração de um relatório nos termos do artigo 52.º. A comissão competente pode igualmente decidir não dar seguimento à proposta de resolução.\n\r\
\n\r\
6.   Os autores de propostas de resolução são informados das decisões do Presidente, da comissão e da Conferência dos Presidentes.\n\r\
\n\r\
7.   O relatório referido no n.º 5 inclui o texto da proposta de resolução.\n\r\
\n\r\
8.   Os pareceres sob a forma de carta referidos no n.º 5, dirigidos a outras instituições da União, são-lhes transmitidos pelo Presidente.\n\r\
\n\r\
9.   Uma proposta de resolução apresentada nos termos do n.º 1 pode ser retirada pelo seu autor ou autores, ou pelo seu primeiro signatário, antes de a comissão competente ter decidido, nos termos do n.º 5, elaborar um relatório sobre a mesma.\n\r\
\n\r\
Após ter sido subscrita pela comissão competente, só essa comissão tem o poder de retirar a proposta de resolução. A comissão competente pode fazê-lo até à abertura da votação final no plenário."
},
{
'id': 134,
'title': 'Artigo 134.º : (suprimido)',
'text': ""
},
{
'id': 135,
'title': 'Artigo 135.º : Debate sobre casos de violação dos direitos humanos, da democracia e do primado do direito',
'text': "1.   Uma comissão, uma delegação interparlamentar, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem apresentar por escrito ao Presidente pedidos de debate sobre casos urgentes de violação dos direitos humanos, da democracia e do primado do direito.\n\r\
\n\r\
2.   A Conferência dos Presidentes elabora uma lista de assuntos a inscrever no projeto definitivo de ordem do dia do próximo debate sobre casos de violação dos direitos humanos, da democracia e do primado do direito com base nos pedidos a que se refere o n.º 1 e de acordo com o disposto no anexo III. O número total de assuntos inscritos na ordem do dia não pode ser superior a três, incluindo subdivisões.\n\r\
\n\r\
Nos termos do artigo 149.º-A, o Parlamento pode decidir suprimir um assunto previsto para debate e substituí-lo por um assunto não previsto. As propostas de resolução sobre os assuntos escolhidos podem  ser  apresentadas  por  uma  comissão,  por  um  grupo  político  ou  por  um número  de deputados que atinja pelo menos o limiar baixo até ao fim da tarde do dia em que a ordem do dia for aprovada. O Presidente fixa o prazo exato para a apresentação dessas propostas de resolução.\n\r\
\n\r\
3.   Dentro do tempo global previsto para os debates, a saber, 60 minutos, no máximo, por cada período de sessões, o tempo global de uso da palavra a atribuir aos grupos políticos e aos deputados não inscritos é repartido nos termos do artigo 162.º, n.ºs 4 e 5.\n\r\
\n\r\
O tempo restante, uma vez deduzido o tempo necessário para apresentar as propostas de resolução e o tempo de uso da palavra atribuído à Comissão e ao Conselho, é repartido pelos grupos políticos e pelos deputados não inscritos.\n\r\
\n\r\
4.   No final do debate, procede-se imediatamente à votação. Não se aplica o artigo 183.º, relativo às declarações de voto.\n\r\
\n\r\
As votações realizadas nos termos do presente artigo podem ser organizadas conjuntamente, sob a responsabilidade do Presidente e da Conferência dos Presidentes.\n\r\
\n\r\
5.   Caso sejam apresentadas duas ou mais propostas de resolução sobre o mesmo assunto, aplica-se o procedimento previsto no artigo 123.º, n.ºs 4 e 5.\n\r\
\n\r\
6.   O Presidente do Parlamento e os presidentes dos grupos políticos podem decidir que uma proposta de resolução seja posta à votação sem debate. Tal decisão requer o acordo unânime de todos os presidentes dos grupos políticos.\n\r\
\n\r\
As disposições dos artigos 187.º e 188.º não se aplicam às propostas de resolução inscritas na ordem do dia do debate sobre casos de violação dos direitos humanos, da democracia e do primado do direito.\n\r\
\n\r\
As propostas de resolução para o debate sobre casos de violação dos direitos humanos, da democracia e do primado do direito só são apresentadas após a lista de assuntos ter sido aprovada. As propostas de resolução que não puderem ser tratadas dentro do tempo atribuído ao debate caducam. Aplica-se o mesmo às propostas de resolução em relação às quais se verifique, na sequência de um pedido feito nos termos do artigo 168.º, n.º 3, que não existe quórum. Os autores podem reapresentar essas propostas de resolução para serem apreciadas em comissão nos termos do artigo 133.º ou para serem inscritas no debate sobre casos de violação dos direitos humanos, da democracia e do primado do direito no período de sessões seguinte.\n\r\
\n\r\
Um assunto não pode ser inscrito para o debate sobre casos de violação dos direitos humanos, da democracia e do primado do direito se já estiver inscrito na ordem do dia desse período de sessões.\n\r\
\n\r\
Nenhuma disposição do Regimento permite a discussão conjunta de uma proposta de resolução, apresentada nos termos do segundo parágrafo do n.º 2, e de um relatório elaborado por uma comissão sobre o mesmo assunto.\n\r\
\n\r\
Quando for apresentado um pedido de verificação do quórum nos termos do artigo 168.º, n.º 3, esse pedido só é válido para a proposta de resolução que vai ser posta à votação, e não para as seguintes."
},
{
'id': 136,
'title': 'Artigo 136.º : (suprimido)',
'text': ""
},
{
'id': 137,
'title': 'Artigo 137.º : Consulta do Comité Económico e Social Europeu',
'text': "1.   Quando o Tratado sobre o Funcionamento da União Europeia previr a consulta do Comité Económico e Social, o Presidente dá início ao processo de consulta e informa do facto o Parlamento.\n\r\
\n\r\
2.   As comissões podem requerer que o Comité Económico e Social Europeu seja consultado sobre problemas de ordem geral ou sobre questões específicas.\n\r\
\n\r\
As comissões podem indicar, no seu pedido, o prazo para o Comité Económico e Social Europeu emitir o seu parecer.\n\r\
\n\r\
Um pedido de consulta do Comité Económico e Social Europeu é anunciado no Parlamento no período de sessões seguinte e é considerado aprovado, salvo se, no prazo de 24 horas após o anúncio, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo tiverem requerido que o pedido seja posto à votação.\n\r\
\n\r\
3.   Os pareceres transmitidos pelo Comité Económico e Social Europeu são enviados à comissão competente."
},
{
'id': 138,
'title': 'Artigo 138.º : Consulta do Comité das Regiões',
'text': "1.   Quando o Tratado sobre o Funcionamento da União Europeia previr a consulta do Comité das Regiões, o Presidente dá início ao processo de consulta e informa do facto o Parlamento.\n\r\
\n\r\
2.   As comissões podem requerer que o Comité das Regiões seja consultado sobre problemas de ordem geral ou sobre questões específicas.\n\r\
\n\r\
As comissões podem indicar, no seu pedido, o prazo para o Comité das Regiões emitir o seu parecer.\n\r\
\n\r\
Um pedido de consulta do Comité das Regiões é anunciado no Parlamento no período de sessões seguinte e é considerado aprovado, salvo se, no prazo de 24 horas após o anúncio, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo tiverem requerido que o pedido seja posto à votação.\n\r\
\n\r\
3.    Os pareceres transmitidos pelo Comité das Regiões são enviados à comissão competente."
},
{
'id': 139,
'title': 'Artigo 139.º : Pedidos apresentados às agências europeias',
'text': "1.   Quando o Parlamento tiver o direito de apresentar um pedido a uma agência europeia, os deputados podem enviar o pedido por escrito ao Presidente do Parlamento. Esses pedidos devem incidir em questões que se enquadrem no âmbito de competências da agência em causa, e ser acompanhados de informações gerais sobre a questão a examinar e sobre o interesse da União.\n\r\
\n\r\
2.   Após ter consultado a comissão competente, o Presidente transmite o pedido à agência em causa ou toma qualquer outra medida adequada. O deputado que tiver apresentado o pedido é imediatamente informado. Todos os pedidos enviados pelo Presidente a uma agência devem incluir um prazo para a resposta.\n\r\
\n\r\
3.   Se a agência considerar que ela própria não pode responder ao pedido nos termos em que este foi formulado, ou pretender que o mesmo seja alterado, informa imediatamente o Presidente, que toma as medidas adequadas, se necessário após consultar a comissão competente."
},
{
'id': 140,
'title': 'Artigo 140.º : Acordos interinstitucionais',
'text': "1.   O Parlamento pode celebrar acordos com outras instituições no contexto da aplicação dos Tratados, ou a fim de melhorar ou clarificar procedimentos.\n\r\
\n\r\
Esses acordos podem assumir a forma de declarações comuns, trocas de cartas, códigos de conduta ou outros instrumentos adequados. Após terem sido examinados pela comissão competente para os assuntos constitucionais e aprovados pelo Parlamento, são assinados pelo Presidente.\n\r\
\n\r\
2.   Se esses acordos implicarem a alteração dos direitos ou obrigações processuais existentes, criarem novos direitos ou obrigações processuais para os deputados ou para os órgãos do Parlamento, ou implicarem qualquer outra alteração ou interpretação do Regimento, o assunto é enviado à comissão competente quanto à matéria de fundo para apreciação nos termos do artigo 226.º, n.ºs 2 a 6, antes de serem assinados."
},
{
'id': 141,
'title': 'Artigo 141.º : Recursos para o Tribunal de Justiça da União Europeia',
'text': "1.   Nos prazos fixados pelos Tratados e pelo Estatuto do Tribunal de Justiça da União Europeia para a interposição de recurso por parte das instituições da União e de pessoas singulares e coletivas, o Parlamento examina a legislação da União e a sua aplicação a fim de se certificar de que os Tratados foram plenamente respeitados, nomeadamente no que se refere aos direitos do Parlamento.\n\r\
\n\r\
2.   Se presumir que existe violação do direito da União, a comissão competente para os assuntos jurídicos informa o Parlamento, se necessário oralmente. Se adequado, a comissão competente para os assuntos jurídicos pode ouvir a opinião da comissão competente quanto à matéria de fundo.\n\r\
\n\r\
3.   O Presidente interpõe recurso para o Tribunal de Justiça da União Europeia em nome do Parlamento de acordo com a recomendação da comissão competente para os assuntos jurídicos.\n\r\
\n\r\
No início do período de sessões seguinte, o Presidente pode pedir que o Parlamento decida se o recurso deve ser mantido. Se o Parlamento se pronunciar contra o recurso por maioria dos votos expressos, o Presidente retira o recurso.\n\r\
\n\r\
Se o Presidente interpuser um recurso contra a recomendação da comissão competente para os assuntos jurídicos, solicita que o Parlamento decida, no início do período de sessões seguinte, se o recurso deve ser mantido.\n\r\
\n\r\
4.   Se o Presidente decidir apresentar observações ou intervir em processos judiciais em nome do Parlamento, deve fazê-lo após consultar a comissão competente para os assuntos jurídicos.\n\r\
\n\r\
Se o Presidente pretender afastar-se da recomendação da comissão competente para os assuntos jurídicos, informa desse facto a comissão e envia o assunto à Conferência dos Presidentes, expondo os seus motivos.\n\r\
\n\r\
Se a Conferência dos Presidentes considerar que o Parlamento não deve, excecionalmente, apresentar observações nem intervir num processo pendente no Tribunal de Justiça da União Europeia em que a validade jurídica de um ato do Parlamento seja posta em causa, a questão é submetida sem demora à apreciação do Parlamento.\n\r\
\n\r\
Nada no presente Regimento impede a comissão competente para os assuntos jurídicos de decidir dos trâmites processuais adequados para a transmissão atempada da sua recomendação em casos de urgência.\n\r\
\n\r\
Caso seja necessário tomar uma decisão quanto à questão de saber se o Parlamento deve exercer os seus direitos face ao Tribunal de Justiça da União Europeia, e o ato em questão não esteja abrangido pelo artigo 141.º do Regimento, aplica-se, com as necessárias adaptações, o procedimento previsto no presente artigo.\n\r\
\n\r\
5.   Em casos urgentes, o Presidente pode tomar medidas cautelares, se possível, após consultar o presidente e o relator da comissão competente para os assuntos jurídicos, a fim de respeitar os prazos aplicáveis. Nesses casos aplicam-se, com a maior celeridade, os procedimentos previstos nos n.ºs 3 ou 4, conforme adequado.\n\r\
\n\r\
6.   A comissão competente para os assuntos jurídicos estabelece os princípios em que se baseará para aplicar o presente artigo."
},
{
'id': 142,
'title': 'Artigo 142.º : Intercâmbio de informações, contactos e facilidades recíprocas',
'text': "1.   O Parlamento Europeu mantém os parlamentos nacionais dos Estados-Membros periodicamente informados sobre as suas atividades.\n\r\
\n\r\
2.   A organização e a promoção de uma cooperação interparlamentar eficaz e regular na União, nos termos do artigo 9.º do Protocolo n.º 1 relativo ao Papel dos Parlamentos Nacionais na União Europeia, é negociada com base num mandato conferido pela Conferência dos Presidentes, após consulta da Conferência dos Presidentes das Comissões.\n\r\
\n\r\
O Parlamento aprova os acordos sobre a matéria em causa nos termos do artigo 140.º.\n\r\
\n\r\
3.   Uma comissão pode encetar diretamente um diálogo com os parlamentos nacionais a nível de comissões, dentro dos limites das dotações orçamentais reservadas para esse efeito. Este diálogo pode incluir formas adequadas de cooperação pré-legislativa e pós-legislativa.\n\r\
\n\r\
4.   Os documentos relativos a um processo legislativo a nível da União, oficialmente transmitidos por um parlamento nacional ao Parlamento Europeu, são enviados à comissão competente quanto à matéria de fundo tratada no documento em causa.\n\r\
\n\r\
5.   A Conferência dos Presidentes pode mandatar o Presidente do Parlamento para negociar facilidades para os parlamentos nacionais dos Estados-Membros, numa base recíproca, ou para propor outras medidas destinadas a facilitar os contactos com os parlamentos nacionais."
},
{
'id': 143,
'title': 'Artigo 143.º : Conferência dos Órgãos Especializados em Assuntos da União (COSAC)',
'text': "1.   Sob proposta do Presidente, a Conferência dos Presidentes designa os membros da delegação do Parlamento à COSAC, e pode conferir-lhes um mandato específico. A delegação é presidida por um vice-presidente do Parlamento diretamente responsável pelas relações com os parlamentos nacionais e pelo presidente da comissão competente para os assuntos constitucionais.\n\r\
\n\r\
2.   Os restantes membros da delegação são escolhidos em função dos assuntos a tratar nas reuniões da COSAC e incluem, na medida do possível, representantes das comissões competentes para esses assuntos.\n\r\
\n\r\
3.   Na escolha dos membros da delegação, deve ser devidamente tido em conta o equilíbrio político global no Parlamento.\n\r\
\n\r\
4.   A delegação apresenta um relatório à Conferência dos Presidentes após cada reunião da COSAC."
},
{
'id': 144,
'title': 'Artigo 144.º : Conferências parlamentares',
'text': "A Conferência dos Presidentes designa os membros das delegações do Parlamento às conferências ou instâncias similares em que participem representantes parlamentares, e mandata-os em conformidade com as resoluções relevantes do Parlamento. Cada delegação elege o seu presidente e, se necessário, um ou mais vice-presidentes."
},
{
'id': 145,
'title': 'Artigo 145.º : Legislatura, Sessão, períodos de sessões, sessões diárias',
'text': "1.   A legislatura coincide com a duração do mandato dos deputados prevista pelo Ato de 20 de setembro de 1976.\n\r\
\n\r\
2.   A Sessão corresponde ao período de um ano, como decorre do citado Ato e dos Tratados.\n\r\
\n\r\
3.   O período de sessões é a reunião que o Parlamento realiza em regra todos os meses, e subdivide-se em sessões diárias.\n\r\
\n\r\
As sessões plenárias do Parlamento que se realizem no mesmo dia são consideradas como uma única sessão."
},
{
'id': 146,
'title': 'Artigo 146.º : Convocação do Parlamento',
'text': "1.   Nos termos do primeiro parágrafo do artigo 229.º do Tratado da União Europeia, o Parlamento reúne-se de pleno direito na segunda terça-feira de março de cada ano. O Parlamento delibera soberanamente quanto à duração das interrupções da Sessão.\n\r\
\n\r\
2.   Além disso, o Parlamento reúne-se de pleno direito na primeira terça-feira seguinte ao final de um intervalo de um mês a contar do termo do período previsto no artigo 10.º, n.º 1, do Ato de 20 de setembro de 1976.\n\r\
\n\r\
3.   A Conferência dos Presidentes pode alterar a duração das interrupções fixadas nos termos do n.º 1, mediante decisão fundamentada, tomada pelo menos 15 dias antes da data previamente marcada pelo Parlamento para o reinício da Sessão. O reinício da Sessão não pode, porém, ser adiado por mais de 15 dias.\n\r\
\n\r\
4.   A pedido da maioria dos membros que compõem o Parlamento ou a pedido da Comissão ou do Conselho, o Presidente, após consultar a Conferência dos Presidentes, convoca o Parlamento a título excecional.\n\r\
\n\r\
Em casos de urgência, Presidente tem a faculdade de convocar o Parlamento a título excecional, com o consentimento da Conferência dos Presidentes."
},
{
'id': 147,
'title': 'Artigo 147.º : Locais de reunião',
'text': "1.   O Parlamento realiza as suas sessões plenárias nas condições previstas nos Tratados.\n\r\
\n\r\
A aprovação de propostas de realização de períodos de sessões adicionais em Bruxelas, bem como de alterações às mesmas, exige apenas a maioria dos votos expressos.\n\r\
\n\r\
2.   As comissões podem requerer que uma ou várias das suas reuniões se realizem noutro local. Esse pedido, devidamente fundamentado, é apresentado ao Presidente, que o submete à Mesa.\n\r\
\n\r\
Em casos de urgência, o Presidente pode chamar a si a decisão. Se a decisão da Mesa ou do Presidente for negativa, deve ser justificada."
},
{
'id': 148,
'title': 'Artigo 148.º : Participação nas sessões',
'text': '1.   Em cada sessão existe uma folha de presenças, que deve ser assinada pelos deputados.\n\r\
\n\r\
2.   Os nomes dos deputados cuja presença seja comprovada pela folha de presenças são indicados na ata de cada sessão com a menção «presente». Os nomes dos deputados cuja ausência seja justificada pelo Presidente são indicados na ata de cada sessão com a menção "ausência justificada".'
},
{
'id': 149,
'title': 'Artigo 149.º : Projeto de ordem do dia',
'text': "1.   Antes de cada período de sessões, a Conferência dos Presidentes elabora um projeto de ordem do dia com base nas recomendações da Conferência dos Presidentes das Comissões.\n\r\
\n\r\
A Comissão e o Conselho podem assistir, a convite do Presidente, às deliberações da Conferência dos Presidentes sobre o projeto de ordem do dia.\n\r\
\n\r\
2.   O projeto de ordem do dia pode indicar o momento em que serão postos à votação certos pontos cuja apreciação esteja prevista.\n\r\
\n\r\
3.   O projeto definitivo de ordem do dia é disponibilizado aos deputados pelo menos três horas antes do início do período de sessões.\n\r\
\n\r\
Artigo 149.º-A : Aprovação e alteração da ordem do dia\n\r\
\n\r\
1.   No início de cada período de sessões, o Parlamento aprova a ordem do dia. Uma comissão, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem apresentar propostas de alteração ao projeto definitivo de ordem do dia. Essas propostas devem ser recebidas pelo Presidente pelo menos uma hora antes da abertura do período de sessões. Para cada proposta, o Presidente pode dar a palavra ao seu autor e a um orador contra. O tempo de uso da palavra não pode exceder um minuto.\n\r\
\n\r\
2.   Uma vez aprovada, a ordem do dia não pode ser alterada, salvo nos termos dos artigos 154.º, 187.º, 188.º, 189.º ou 191.º, ou sob proposta do Presidente.\n\r\
\n\r\
Caso um requerimento que tenha por objeto alterar da ordem do dia seja rejeitado, não pode ser reapresentado durante o mesmo período de sessões.\n\r\
\n\r\
3.   Antes da suspensão da sessão, o Presidente informa o Parlamento da data, da hora e da ordem do dia da sessão seguinte."
},
{
'id': 150,
'title': 'Artigo 150.º : Processo no plenário sem alterações e sem debate',
'text': "1.   Um relatório aprovado em comissão com um número de votos contra inferior a um décimo dos membros da comissão é inscrito no projeto de ordem do dia do Parlamento para votação sem alterações.\n\r\
\n\r\
Esse ponto é objeto de uma votação única, salvo se, antes da elaboração do projeto definitivo de ordem do dia, um número de deputados ou um ou vários grupos políticos que atinjam pelo menos o limiar médio solicitarem por escrito autorização para apresentar alterações a esse ponto. Nesse caso, o Presidente fixa o prazo para a apresentação de alterações.\n\r\
\n\r\
2.   Os pontos inscritos no projeto definitivo de ordem do dia para votação sem alterações são também postos à votação sem debate, salvo se o Parlamento, ao aprovar a sua ordem do dia no início de um período de sessões, decidir em contrário sob proposta da Conferência dos Presidentes ou a pedido de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo.\n\r\
\n\r\
3.   Ao elaborar o projeto definitivo de ordem do dia de um período de sessões, a Conferência dos Presidentes pode propor que outros pontos sejam postos à votação sem alterações ou sem debate. Ao aprovar a sua ordem do dia, o Parlamento não pode aceitar propostas nesse sentido se um grupo político ou um número de deputados que atinja pelo menos o limiar baixo tiverem manifestado a sua oposição por escrito pelo menos uma hora antes da abertura do período de sessões.\n\r\
\n\r\
4.   Quando um ponto é posto à votação sem debate, o relator ou o presidente da comissão competente pode fazer, imediatamente antes da votação, uma declaração com a duração máxima de dois minutos."
},
{
'id': 151,
'title': 'Artigo 151.º : Breve apresentação',
'text': "A  pedido  do  relator  ou  sob  proposta  da  Conferência  dos  Presidentes,  o  Parlamento  pode igualmente decidir que um ponto que não requeira debate circunstanciado seja tratado através de uma breve apresentação no plenário pelo relator. Nesse caso, a Comissão tem a possibilidade de responder, e segue-se um debate com a duração máxima de 10 minutos durante o qual o Presidente pode dar a palavra aos deputados que a solicitem por um minuto, no máximo, para cada um."
},
{
'id': 152,
'title': 'Artigo 152.º : (suprimido)',
'text': ""
},
{
'id': 153,
'title': 'Artigo 153.º : Debate extraordinário',
'text': "1.   Um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem solicitar a inscrição na ordem do dia do Parlamento de um debate extraordinário sobre um assunto de interesse relevante relacionado com a política da União. Em regra, não se realiza mais de um debate extraordinário em cada período de sessões.\n\r\
\n\r\
2.   O pedido é apresentado por escrito ao Presidente pelo menos três horas antes do início do período de sessões em que o debate extraordinário deve realizar-se. A votação desse pedido realiza-se no início do período de sessões, quando o Parlamento aprova a ordem do dia.\n\r\
\n\r\
3.   Em resposta a acontecimentos ocorridos após a aprovação da ordem do dia de um período de sessões, o Presidente pode propor, após consultar os presidentes dos grupos políticos, a realização de um debate extraordinário. A votação dessa proposta realiza-se no início de uma sessão ou durante um período de votação previsto. Os deputados são notificados de qualquer proposta de debate extraordinário pelo menos uma hora antes da votação.\n\r\
\n\r\
4.   O Presidente determina o momento em que esse debate se realizará. A duração máxima do debate é de 60 minutos. O tempo de uso da palavra é atribuído aos grupos políticos e aos deputados não inscritos nos termos do artigo 162.º, n.ºs 4 e 5.\n\r\
\n\r\
5.   Após o encerramento do debate não é aprovada nenhuma resolução.\n\r\
\n\r\
Artigo 153.º-A : Debate sobre assuntos de atualidade a pedido de um grupo político\n\r\
\n\r\
1.   Em cada período de sessões, o projeto de ordem do dia prevê um ou dois períodos de 60 minutos cada um, no mínimo, para debater um assunto de atualidade com interesse relevante para a política da União.\n\r\
\n\r\
2.   Cada grupo político tem o direito de propor a realização de pelo menos um debate por  ano  sobre um assunto de  atualidade da sua escolha. A Conferência dos Presidentes assegura, ao longo de 12 meses consecutivos, uma repartição equitativa do exercício desse direito entre os grupos políticos.\n\r\
\n\r\
3.   Os grupos políticos apresentam ao Presidente, por escrito, o assunto de atualidade da sua escolha antes de a Conferência dos Presidentes elaborar o projeto definitivo de ordem do dia. O artigo 38.º, n.º 1, do Regimento, relativo aos direitos, às liberdades e aos princípios reconhecidos no artigo 6.º do Tratado da União Europeia, bem como os valores consagrados no artigo 2.º desse Tratado, devem ser plenamente respeitados.\n\r\
\n\r\
4.   A Conferência dos Presidentes determina o momento em que esse debate se realizará. A Conferência dos Presidentes pode decidir, por maioria de quatro quintos dos deputados que compõem o Parlamento, rejeitar um assunto apresentado por um grupo político.\n\r\
\n\r\
5.   O debate é introduzido por um representante do grupo político que propôs o assunto de atualidade. Após a introdução, o tempo de uso da palavra é atribuído nos termos do artigo 162.º, n.ºs 4 e 5.\n\r\
\n\r\
6.   Após o encerramento do debate não é aprovada nenhuma resolução."
},
{
'id': 154,
'title': 'Artigo 154.º : Processo de urgência',
'text': "1.   O Presidente, uma comissão, um grupo político, um número de deputados que atinja pelo menos o limiar baixo, a Comissão ou o Conselho podem solicitar ao Parlamento que o debate de uma proposta apresentada ao Parlamento nos termos do artigo 47.º, n.º 1, seja considerado urgente. Esse pedido deve ser apresentado por escrito e fundamentado.\n\r\
\n\r\
2.   Assim que o Presidente receber um pedido de debate urgente, informa do facto o Parlamento. A votação do pedido realiza-se no início da sessão seguinte àquela em que o anúncio tiver sido feito, desde que a proposta a que o pedido se refere tenha sido distribuída em todas as línguas oficiais. Caso existam vários pedidos de debate urgente sobre o mesmo assunto, a aprovação ou a rejeição da urgência do debate aplica‑se a todos os pedidos sobre o mesmo assunto.\n\r\
\n\r\
3.   Antes da votação, só têm direito a usar da palavra o autor do pedido, um orador contra e o presidente e/ou o relator da comissão competente. Nenhum desses oradores pode usar da palavra por mais de três minutos.\n\r\
\n\r\
4.   Os pontos tratados pelo processo de urgência têm prioridade sobre os restantes pontos da ordem do dia. O Presidente fixa o momento do debate e da votação.\n\r\
\n\r\
5.   O processo de urgência pode-se aplicar sem relatório ou, excecionalmente, com base num relatório oral da comissão competente.\n\r\
\n\r\
Quando se aplicar um processo de urgência e se realizarem negociações interinstitucionais, não se aplicam os artigos 69.º-B e 69.º-C. Aplica-se o artigo 69.º-F, com as necessárias adaptações."
},
{
'id': 155,
'title': 'Artigo 155.º : Discussão conjunta',
'text': "Pode ser tomada a qualquer momento uma decisão de discutir conjuntamente pontos semelhantes ou que tenham uma base factual comum."
},
{
'id': 156,
'title': 'Artigo 156.º : Prazos',
'text': "Com exceção dos casos urgentes referidos nos artigos 135.º e 154.º, não se realizam debates nem votações de textos que não tenham sido disponibilizados aos deputados pelo menos 24 horas antes."
},
{
'id': 157,
'title': 'Artigo 157.º : Acesso ao hemiciclo',
'text': "1.   Só têm acesso ao hemiciclo os deputados ao Parlamento, os membros da Comissão e do Conselho, o Secretário-Geral do Parlamento, o pessoal em serviço e qualquer pessoa a convite do Presidente.\n\r\
\n\r\
2.   Só podem ter acesso às galerias os portadores de cartões de admissão emitidos para o efeito pelo Presidente ou pelo Secretário-Geral do Parlamento.\n\r\
\n\r\
3.   O público admitido nas galerias deve manter-se sentado e em silêncio. Os contínuos procedem à expulsão imediata das pessoas que profiram exclamações de aprovação ou desaprovação."
},
{
'id': 158,
'title': 'Artigo 158.º : Línguas',
'text': "1.   Os documentos do Parlamento são redigidos nas línguas oficiais.\n\r\
\n\r\
2.   Os deputados têm o direito de usar da palavra no Parlamento na língua oficial da sua escolha. As intervenções numa das línguas oficiais são interpretadas em simultâneo para cada uma das outras línguas oficiais, bem como para qualquer outra língua que a Mesa entenda necessária.\n\r\
\n\r\
3.   Nas reuniões das comissões e das delegações, é assegurada a interpretação de e para as línguas oficiais utilizadas e requeridas pelos membros titulares e suplentes dessas comissões ou delegações.\n\r\
\n\r\
4.   Nas reuniões das comissões e das delegações que se realizem fora dos locais de trabalho habituais, a interpretação é assegurada de e para as línguas dos membros que tenham confirmado a sua comparência na reunião. Este regime pode ser flexibilizado, a título excecional. A Mesa aprova as disposições necessárias.\n\r\
\n\r\
5.   Após a proclamação dos resultados de uma votação, o Presidente delibera sobre os pedidos relativos a alegadas discrepâncias entre as diferentes versões linguísticas."
},
{
'id': 159,
'title': 'Artigo 159.º : Disposição transitória',
'text': "1.   Durante um período transitório, que expirará no fim da oitava legislatura(1), são autorizadas derrogações ao artigo 158.º caso, e na medida em que, não existam intérpretes e tradutores em número suficiente para uma língua oficial, apesar de terem sido feitas as diligências necessárias.\n\r\
\n\r\
2.   A Mesa verifica, sob proposta do Secretário-Geral e tendo devidamente em conta os regimes referidos no n.º 3, se se encontram reunidas as condições referidas no n.º 1 relativamente a cada uma das línguas oficiais visadas. A Mesa reexamina semestralmente a sua decisão, com base num relatório do Secretário-Geral sobre os progressos realizados. A Mesa aprova as medidas de execução necessárias.\n\r\
\n\r\
3.   Aplicam-se os regimes temporários de exceção adotados pelo Conselho com base nos Tratados no que respeita à redação dos atos jurídicos.\n\r\
\n\r\
4.   Com base numa recomendação fundamentada da Mesa, o Presidente pode decidir a qualquer momento revogar antecipadamente o presente artigo ou prolongar a sua aplicação, no final do período indicado no n.º 1.\n\r\
\n\r\
\n\r\
(1)	Prolongado por decisão do Parlamento de 26 de fevereiro de 2014."
},
{
'id': 160,
'title': 'Artigo 160.º : Distribuição de documentos',
'text': "Os documentos que servem de base aos debates e às decisões do Parlamento são disponibilizados aos deputados.\n\r\
\n\r\
Sem prejuízo do parágrafo anterior, os deputados e os grupos políticos têm acesso direto ao sistema informático interno do Parlamento, a fim de poderem consultar todos os documentos preparatórios de carácter não confidencial (projetos de relatório, projetos de recomendação, projetos de parecer, documentos de trabalho e alterações apresentadas em comissão)."
},
{
'id': 161,
'title': 'Artigo 161.º : Tratamento eletrónico dos documentos',
'text': "Os documentos do Parlamento podem ser elaborados, assinados e distribuídos em suporte eletrónico. A Mesa decide das características técnicas e da apresentação do suporte eletrónico."
},
{
'id': 162,
'title': 'Artigo 162.º : Repartição do tempo de uso da palavra e lista de oradores',
'text': "1.   A Conferência dos Presidentes pode propor ao Parlamento a repartição do tempo de uso da palavra para um debate. O Parlamento delibera sobre esta proposta sem debate.\n\r\
\n\r\
2.   Os deputados só podem usar da palavra se para tal forem convidados pelo Presidente. Os deputados tomam a palavra dos seus lugares e dirigem-se ao Presidente. Se os oradores se afastarem do objeto do debate, o Presidente adverte-os.\n\r\
\n\r\
3.   O Presidente pode estabelecer, para a primeira parte de um debate específico, uma lista de oradores que inclua uma ou várias séries de oradores de cada grupo político que desejem intervir, por ordem da dimensão relativa desses grupos.\n\r\
\n\r\
4.   O tempo de uso da palavra para esta parte do debate é repartido segundo os seguintes critérios:\n\r\
\n\r\
(a)   Uma primeira fração do tempo de uso da palavra é repartida igualmente entre todos os grupos políticos;\n\r\
\n\r\
(b)   Uma segunda fração é repartida entre os grupos políticos proporcionalmente ao número total dos seus membros;\n\r\
\n\r\
(c)   Aos deputados não inscritos é atribuído, globalmente, um tempo de uso da palavra calculado com base nas frações atribuídas a cada grupo político nos termos das alíneas a) e b);\n\r\
\n\r\
(d)   A  repartição  do  tempo  de  uso  da  palavra  deve  ter  em  consideração  o facto de os deputados portadores de deficiência podem precisar de mais tempo.\n\r\
\n\r\
5.   Se o tempo global de uso da palavra se distribuir por vários pontos da ordem do dia, os grupos políticos comunicam ao Presidente que frações do seu tempo de uso da palavra pretendem atribuir a cada um desses pontos. O Presidente assegura que os tempos de uso da palavra assim fixados sejam respeitados.\n\r\
\n\r\
6.   A parte restante do tempo de debate não é atribuída especificamente com antecedência. Em vez disso, o Presidente pode conceder a palavra aos deputados, em regra geral, durante um minuto, no máximo. O Presidente assegura, na medida do possível, que intervenham alternadamente oradores de diferentes tendências políticas e de diferentes Estados-Membros.\n\r\
\n\r\
7.   A pedido, o Presidente pode dar prioridade ao presidente e ao relator da comissão competente, bem como aos presidentes dos grupos políticos que pretendam fazer uso da palavra em nome dos seus grupos, ou aos oradores que os substituam.\n\r\
\n\r\
8.   O Presidente pode conceder a palavra aos deputados que manifestem, levantando um cartão azul, o desejo de fazer uma pergunta com o máximo de meio minuto de duração a outro deputado durante a intervenção deste, que incida sobre o assunto abordado nessa intervenção. O Presidente só o fará se o orador estiver de acordo e se o Presidente entender que tal não perturbará o desenrolar do debate nem provocará, em resultado de sucessivas questões colocadas mediante o levantamento de cartões azuis, um grande desequilíbrio ao nível das afinidades dos grupos políticos dos deputados que usam da palavra nesse debate.\n\r\
\n\r\
9.   O tempo de uso da palavra para intervenções sobre as atas das sessões, sobre pontos de ordem e sobre alterações ao projeto definitivo de ordem do dia ou à ordem do dia não pode exceder um minuto.\n\r\
\n\r\
10.   No debate sobre um relatório, a palavra é dada, em regra, à Comissão e ao Conselho imediatamente após a apresentação do relatório pelo relator. A Comissão, o Conselho e o relator podem tomar novamente a palavra, em particular para responder às intervenções dos deputados.\n\r\
\n\r\
11.   Os deputados que não tenham usado da palavra num debate podem, no máximo uma vez por cada período de sessões, apresentar uma declaração escrita que não exceda 200 palavras. Essas declarações escritas são anexadas ao relato integral das sessõessões.\n\r\
\n\r\
12.   Tendo devidamente em conta o artigo 230.º do Tratado sobre o Funcionamento da União Europeia, o Presidente procura chegar a um acordo com a Comissão, com o Conselho e com o Presidente do Conselho Europeu quanto a uma repartição adequada do tempo de uso da palavra que lhes é atribuído."
},
{
'id': 163,
'title': 'Artigo 163.º : Intervenções de um minuto',
'text': "Na primeira sessão de cada período de sessões, o Presidente concede a palavra durante um período não superior a 30 minutos aos deputados que desejem chamar a atenção do Parlamento para questões políticas importantes. O tempo de uso da palavra de cada deputado não pode exceder um minuto. O Presidente pode conceder um novo período similar ulteriormente durante o mesmo período de sessões."
},
{
'id': 164,
'title': 'Artigo 164.º : Intervenções sobre assuntos de natureza pessoal',
'text': "1.   Os deputados que peçam para fazer uma intervenção sobre assuntos de natureza pessoal são ouvidos no final da discussão do ponto da ordem do dia em apreciação, ou aquando da aprovação da ata da sessão a que o pedido de intervenção se refere.\n\r\
\n\r\
Os deputados em causa não podem referir-se à matéria de fundo do debate; devem limitar-se, nas suas intervenções, a refutar observações que os afetem pessoalmente, feitas durante o debate, ou opiniões que lhes tenham sido atribuídas, ou a retificar as suas próprias declarações.\n\r\
\n\r\
2.   Salvo decisão em contrário do Parlamento, as intervenções sobre assuntos de natureza pessoal não podem exceder três minutos.\n\r\
\n\r\
Artigo 164.º-A : Prevenção da prática de obstrução\n\r\
\n\r\
O Presidente tem o poder de fazer cessar o recurso excessivo a intervenções tais como pontos de ordem, declarações de voto ou pedidos de votação em separado, de votação por partes ou de votação nominal, caso esteja convencido de que essas intervenções ou esses pedidos têm manifestamente por objeto e terão por efeito provocar uma obstrução prolongada e grave dos trabalhos do Parlamento ou do exercício dos direitos dos deputados."
},
{
'id': 165,
'title': 'Artigo 165.º : Medidas imediatas',
'text': '1.   O Presidente adverte os deputados que prejudiquem o bom andamento dos trabalhos ou cujo comportamento não respeite as disposições pertinentes do artigo 11.º.\n\r\
\n\r\
2.   Em caso de recidiva, o Presidente adverte novamente o deputado, e a advertência é lavrada em ata.\n\r\
\n\r\
3.   Se a perturbação se mantiver, ou em caso de nova recidiva, o Presidente pode retirar a palavra ao deputado e ordenar que este seja expulso do hemiciclo até ao final da sessão. Em casos de excecional gravidade, o Presidente pode recorrer imediatamente à expulsão do deputado em causa do hemiciclo até ao final da sessão, sem segunda advertência. O Secretário-Geral procura assegurar sem demora a execução desta medida disciplinar, com a ajuda dos contínuos e, se necessário, do serviço de segurança do Parlamento.\n\r\
\n\r\
4.   Caso as perturbações ameacem comprometer o bom andamento dos trabalhos, o Presidente interrompe a sessão por um período determinado ou suspende-a, a fim de restabelecer a ordem. Se o Presidente não conseguir fazer-se ouvir, abandona a presidência, o que implica a interrupção da sessão. A sessão é reatada por convocação do Presidente.\n\r\
\n\r\
5.   O Presidente pode decidir interromper a transmissão da sessão em direto caso um deputado adote linguagem ou comportamentos ofensivos, racistas ou xenófobos.\n\r\
\n\r\
6.   O Presidente pode ordenar que as partes do discurso de um deputado que contenham linguagem ofensiva, racista ou xenófoba sejam suprimidas da gravação audiovisual dos debates.\n\r\
\n\r\
Essa ordem produz efeitos imediatos. Fica, contudo, sujeita a confirmação da Mesa  o mais tardar quatro semanas após ter sido dada ou, se a Mesa não se reunir durante esse período, na sua reunião seguinte.\n\r\
\n\r\
7.   Os poderes previstos nos n.ºs 1 a 6 são conferidos, com as necessárias adaptações, aos presidentes de sessão dos órgãos, comissões e delegações, tal como definidos no Regimento.\n\r\
\n\r\
8.   Se adequado, e tendo em conta a gravidade da violação das regras de conduta dos deputados, o deputado que ocupe a presidência de um período de sessões, de um órgão, de uma comissão ou de uma delegação pode  solicitar, o mais tardar no período de sessões seguinte ou na reunião seguinte do órgão, da comissão ou da delegação em causa, que o Presidente aplique o artigo 166.º.'
},
{
'id': 166,
'title': 'Artigo 166.º : Sanções',
'text': "1.   Em casos graves de desordem ou de perturbação do Parlamento, em violação dos princípios previstos no artigo 11.º, o Presidente aprova uma decisão fundamentada que imponha as sanções adequadas.\n\r\
\n\r\
O deputado em causa é convidado pelo Presidente a apresentar observações por escrito antes da adoção da decisão. Em casos excecionais, o Presidente pode convocar uma audição do deputado em causa.\n\r\
\n\r\
Essa decisão é notificada ao deputado em causa por carta registada ou, em casos urgentes, pelos contínuos.\n\r\
\n\r\
Após a decisão ter sido notificada ao deputado em causa, as sanções impostas a um deputado são anunciadas pelo Presidente no Parlamento. Os presidentes dos órgãos, das comissões e das delegações a que o deputado pertença são informados do facto.\n\r\
\n\r\
Uma vez tornada definitiva, a sanção é publicada num lugar bem visível no sítio web do Parlamento, e não é suprimida até ao termo da legislatura.\n\r\
\n\r\
2.   Na apreciação dos comportamentos observados, deve ser tido em conta o seu carácter pontual, recorrente ou permanente, e a sua gravidade.\n\r\
\n\r\
Deve ser estabelecida uma distinção entre os comportamentos de carácter visual, que podem ser tolerados desde que não sejam injuriosos, difamatórios, racistas ou xenófobos, e se mantenham dentro de proporções razoáveis, e os comportamentos que perturbem ativamente a atividade parlamentar.\n\r\
\n\r\
3.   A sanção aplicada pode consistir em uma ou várias das seguintes medidas:\n\r\
\n\r\
(a)   Censura;\n\r\
\n\r\
(b)   Perda do direito ao subsídio de estadia por um período de dois a trinta dias;\n\r\
\n\r\
(c)   Sem prejuízo do exercício do direito de voto em sessão plenária, e na condição, neste caso, de que as regras de conduta sejam estritamente respeitadas, suspensão temporária da participação no todo ou em parte das atividades do Parlamento por um período de dois a trinta dias durante os quais o Parlamento ou qualquer dos seus órgãos, comissões ou delegações se reúnam;\n\r\
\n\r\
(d)   Proibição de representar o Parlamento numa delegação interparlamentar, numa conferência interparlamentar ou em fóruns interinstitucionais pelo período máximo de um ano.\n\r\
\n\r\
(e)   Em caso de violação da confidencialidade, limitação do direito de acesso a informações confidenciais ou classificadas pelo período máximo de um ano.\n\r\
\n\r\
4.   As medidas previstas no n.º 3, alíneas b) a e), podem ser agravadas para o dobro em caso de infrações repetidas, ou caso o deputado se recuse a cumprir uma medida tomada nos termos do artigo 165.º, n.º 3.\n\r\
\n\r\
5.   Além disso, o Presidente pode apresentar à Conferência dos Presidentes uma proposta de suspensão ou de retirada do deputado de um ou mais mandatos que exerça no Parlamento, em conformidade com o procedimento previsto no artigo 21.º."
},
{
'id': 167,
'title': 'Artigo 167.º : Vias de recurso internas',
'text': "O deputado em causa pode interpor um recurso interno para a Mesa no prazo de duas semanas a contar da notificação da sanção imposta pelo Presidente ao abrigo do artigo 166.º, n.ºs 1 a 4. O recurso tem efeitos suspensivos sobre a aplicação da sanção. No prazo de quatro semanas a contar da data de interposição do recurso ou, caso não se reúna durante esse período, na sua reunião seguinte, a Mesa pode anular, confirmar ou alterar a sanção imposta, sem prejuízo do direito de interposição de recurso externo que assiste ao interessado. Se a Mesa não tomar uma decisão no prazo fixado, a sanção é considerada nula."
},
{
'id': 168,
'title': 'Artigo 168.º : Quórum',
'text': "1.   O Parlamento pode deliberar, fixar a ordem do dia e aprovar a ata, independentemente do número de deputados presentes.\n\r\
\n\r\
2.   Considera-se que existe quórum quando estiverem presentes no hemiciclo um terço dos membros que compõem o Parlamento.\n\r\
\n\r\
3.   As votações são sempre válidas, seja qual for o número de deputados votantes, salvo se o Presidente verificar, a pedido de pelo menos 40 deputados feito antes de a votação ter começado, que não existe quórum. Se o número de deputados requerido para o quórum não for atingido, o Presidente declara que não existe quórum, e a votação é inscrita na ordem do dia da sessão seguinte.\n\r\
\n\r\
O sistema eletrónico de votação pode ser utilizado para verificar o limiar de 40 deputados, mas não pode ser utilizado para verificar o quórum. Não é permitido fechar as portas do hemiciclo.\n\r\
\n\r\
4.   Os deputados que solicitem a verificação do quórum devem estar presentes no hemiciclo quando o pedido for feito, e são incluídos na contagem das presenças nos termos dos n.ºs 2 e 3, mesmo que depois abandonem o hemiciclo.\n\r\
\n\r\
5.   Se estiverem presentes menos de 40 deputados, o Presidente pode declarar que não existe quórum.\n\r\
\n\r\
Artigo 168.º-A : Limiares\n\r\
\n\r\
1.   Para efeitos do Regimento, e salvo disposição em contrário, entende-se por:\n\r\
\n\r\
(a)   «Limiar baixo», um vigésimo dos membros que compõem o Parlamento ou um grupo político;\n\r\
\n\r\
(b)   «Limiar médio», um décimo dos membros que compõem o Parlamento, formado por um ou vários grupos políticos ou por deputados a título individual, ou por uma combinação de ambos;\n\r\
\n\r\
(c)   «Limiar alto», um quinto dos membros que compõem o Parlamento, formado por um ou vários grupos políticos ou por deputados a título individual, ou por uma combinação de ambos.\n\r\
\n\r\
2.   Caso seja necessária a assinatura de um deputado para determinar se um limiar aplicável foi atingido, essa assinatura pode ser manuscrita ou em formato eletrónico, caso em que será produzida pelo sistema de assinatura eletrónica do Parlamento. Os deputados podem retirar a sua assinatura dentro dos prazos definidos, mas não podem renová-la posteriormente.\n\r\
\n\r\
3.   Caso seja necessário o apoio de um grupo político para alcançar um limiar, o grupo é representado pelo seu presidente ou por uma pessoa devidamente designada por este último para esse efeito.\n\r\
\n\r\
4.   Para a aplicação dos limiares médio e alto, o apoio de um grupo político é contabilizado da seguinte forma:\n\r\
\n\r\
-   caso seja invocado um artigo que preveja um tal limiar durante uma sessão ou uma reunião: todos os deputados que pertençam ao grupo em causa e que estejam fisicamente presentes;\n\r\
\n\r\
-   em todos os outros casos: todos os deputados que pertençam ao grupo em causa."
},
{
'id': 169,
'title': 'Artigo 169.º : Entrega e apresentação de alterações',
'text': '1.   A comissão competente, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem propor alterações para apreciação no Parlamento. São publicados os nomes de todos os cossignatários.\n\r\
\n\r\
As alterações são apresentadas por escrito e assinadas pelos seus autores.\n\r\
\n\r\
As alterações a propostas de atos juridicamente vinculativos, podem ser acompanhadas de uma breve justificação. As justificações são da responsabilidade do seu autor e não são postas à votação.\n\r\
\n\r\
2.   Sem prejuízo das restrições previstas no artigo 170.º, as alterações podem destinar-se a alterar qualquer parte de um texto. Podem visar suprimir, acrescentar ou substituir palavras ou algarismos.\n\r\
\n\r\
No presente artigo e no artigo 170.º, o termo "texto" significa a totalidade de uma proposta de resolução, de um projeto de resolução legislativa, de uma proposta de decisão ou de uma proposta de ato juridicamente vinculativo.\n\r\
\n\r\
3.   O Presidente fixa um prazo para a apresentação de alterações.\n\r\
\n\r\
4.   Uma alteração pode ser apresentada, durante o debate, pelo seu autor ou por qualquer outro deputado designado pelo autor para o substituir.\n\r\
\n\r\
5.   Uma  alteração  que seja retirada  pelo  seu  autor  caduca,  salvo se  for imediatamente retomada por outro deputado.\n\r\
\n\r\
6.   As alterações só são postas à votação depois de terem sido disponibilizadas em todas as línguas oficiais, salvo decisão em contrário do Parlamento. O Parlamento não pode decidir em contrário se pelo menos 40 deputados se opuserem. O Parlamento deve evitar tomar decisões suscetíveis  de  colocar  os  deputados  que  utilizem  uma  determinada  língua  numa  situação de desvantagem inaceitável.\n\r\
\n\r\
Quando estiverem presentes menos de 100 deputados, o Parlamento não pode decidir em contrário se pelo menos um décimo dos deputados presentes se opuser.\n\r\
\n\r\
Sob proposta do Presidente, uma alteração oral ou qualquer outra modificação oral é tratada do mesmo modo que uma alteração não disponibilizada em todas as línguas oficiais. Se o Presidente a considerar admissível ao abrigo do artigo 170.°, n.° 2, e salvo oposição expressa nos termos do artigo 169.°, n.° 6, a alteração oral é posta à votação segundo a ordem de votação estabelecida.\n\r\
\n\r\
Em comissão, o número de votos necessário para se opor a uma alteração oral ou a uma modificação oral é estabelecido com base no artigo 209.° proporcionalmente ao número aplicável no plenário, arredondado, se for caso disso, à unidade superior mais próxima.'
},
{
'id': 170,
'title': 'Artigo 170.º : Admissibilidade das alterações',
'text': "1.   Sem prejuízo das condições suplementares previstas no artigo 52.º, n.º 4, relativo aos relatórios de iniciativa, e no artigo 69.º, n.º 2, relativo às alterações à posição do Conselho, uma alteração não é admissível se:\n\r\
\n\r\
(a)   O seu conteúdo não tiver relação direta com o texto que pretende alterar;\n\r\
\n\r\
(b)   Se destinar a suprimir ou substituir um texto na sua totalidade;\n\r\
\n\r\
(c)   Se destinar a alterar mais do que um dos artigos ou números do texto ao qual se aplica, com exceção das alterações de compromisso e das alterações que visam introduzir alterações idênticas de uma expressão particular recorrente em todo o texto;\n\r\
\n\r\
(d)   Se destinar a alterar uma proposta de codificação de um ato legislativo da União; no entanto, aplica-se, com as necessárias adaptações, o segundo parágrafo do artigo 103.º, n.º 3;\n\r\
\n\r\
(e)   Se destinar a alterar as  partes  de  uma  proposta  de  reformulação de um ato legislativo da União que permanecem inalteradas na referida proposta; no entanto, aplica-se, com as necessárias adaptações, o segundo parágrafo do artigo 104.º, n.º 2, e o terceiro parágrafo do artigo 104.º, n.º 3;\n\r\
\n\r\
(f)   Se destinar apenas a assegurar a correção linguística ou a coerência terminológica do texto  na  língua  em  que  a  alteração  é  apresentada;  nesse  caso,  o  Presidente procura, em conjunto com os interessados, uma solução linguística adequada.\n\r\
\n\r\
2.   O Presidente decide da admissibilidade das alterações.\n\r\
\n\r\
A decisão do Presidente sobre a admissibilidade das alterações, tomada nos termos do n.º 2, baseia-se nas disposições do n.º 1, mas também nas disposições do Regimento em geral.\n\r\
\n\r\
3.   Um grupo político ou um número de deputados que atinja pelo menos o limiar baixo pode apresentar uma proposta de resolução alternativa destinada a substituir uma proposta de resolução não legislativa contida num relatório de comissão.\n\r\
\n\r\
Nesse  caso,  o  mesmo  grupo  ou  os  deputados  em  causa  não  podem  apresentar  alterações  à proposta de resolução da comissão competente. A proposta de resolução alternativa não pode ser mais extensa do que a proposta de resolução da comissão. A proposta é submetida a uma votação única no Parlamento, sem alterações.\n\r\
\n\r\
Aplica-se, com as necessárias adaptações,  o artigo 123.º, n.ºs 4 e 5, respeitante às propostas de resolução comum.\n\r\
\n\r\
4.   Com o acordo do Presidente, podem excecionalmente ser apresentadas alterações após o termo do prazo para a apresentação de alterações, se se tratar de alterações de compromisso ou se existirem problemas de ordem técnica. O Presidente decide da admissibilidade dessas alterações. O Presidente deve obter o acordo do Parlamento antes de pôr essas alterações à votação.\n\r\
\n\r\
Podem aplicar-se os seguintes critérios de admissibilidade de alterações de compromisso:\n\r\
\n\r\
-   em regra geral, as alterações de compromisso dizem respeito a partes do texto que foram objeto de alterações antes do termo do prazo para a apresentação de alterações;\n\r\
\n\r\
-   em regra geral, as alterações de compromisso são apresentadas por grupos políticos que representem uma maioria no Parlamento, pelos presidentes ou pelos relatores das comissões interessadas, ou pelos autores de outras alterações;\n\r\
\n\r\
-   em regra geral, as alterações de compromisso implicam que outras alterações sobre o mesmo ponto sejam retiradas.\n\r\
\n\r\
Só o Presidente pode propor que uma alteração de compromisso seja tomada em consideração. Para que uma alteração de compromisso seja posta à votação, o Presidente deve obter o acordo do Parlamento perguntando se existem objeções a essa votação. Caso seja formulada uma objeção, o Parlamento decide por maioria dos votos expressos."
},
{
'id': 171,
'title': 'Artigo 171.º : Processo de votação',
'text': "1.   Salvo disposição específica em contrário do Regimento, aplica-se o seguinte processo na votação dos textos apresentados ao  Parlamento:\n\r\
\n\r\
(a)   Em primeiro lugar, se for caso disso, são votadas as alterações à proposta de ato juridicamente vinculativo;\n\r\
\n\r\
(b)    Em segundo lugar,  se  for  caso  disso,  é  votada essa  proposta  como um todo, alterada ou não;\n\r\
\n\r\
(c)   Em terceiro lugar, são votadas as alterações à proposta de resolução ou ao projeto de resolução legislativa;\n\r\
\n\r\
(d)   Por fim, procede-se à votação final da proposta de resolução como um todo (votação final).\n\r\
\n\r\
O Parlamento não vota sobre as exposições de motivos incluídas nos relatórios.\n\r\
\n\r\
2.   Na votação de propostas de atos juridicamente vinculativos e de propostas de resolução não legislativas, é votado em primeiro lugar o dispositivo, e em seguida as citações e os considerandos.\n\r\
\n\r\
3.   As alterações incompatíveis com decisões anteriormente tomadas sobre o texto durante a mesma votação caducam.\n\r\
\n\r\
4.   Durante a votação, só o relator ou, em vez dele, o presidente da comissão podem tomar a palavra. Podem fazê-lo para expor brevemente a posição da comissão competente sobre as alterações postas à votação."
},
{
'id': 172,
'title': 'Artigo 172.º : (suprimido)',
'text': ""
},
{
'id': 173,
'title': 'Artigo 173.º : (suprimido)',
'text': ""
},
{
'id': 174,
'title': 'Artigo 174.º : Ordem de votação das alterações',
'text': "1.   As alterações têm prioridade sobre o texto a que se aplicam e são votadas antes desse texto.\n\r\
\n\r\
2.   Se duas ou mais alterações que se excluam mutuamente se aplicarem à mesma parte do texto, tem prioridade a alteração que se afastar mais do texto original, e é votada em primeiro lugar. Se essa alteração for aprovada, as outras alterações são consideradas rejeitadas. Se for rejeitada, é votada a alteração seguinte na ordem de prioridades, seguindo-se o mesmo processo em relação às restantes alterações. Em caso de dúvida quanto à prioridade, o Presidente decide. Se todas as alterações forem rejeitadas, o texto original considera-se aprovado, salvo se tiver sido requerida uma votação em separado, dentro do prazo previsto.\n\r\
\n\r\
3.   No entanto, caso o Presidente considere que tal facilita a votação, pode pôr à votação em primeiro lugar o texto original, ou pôr à votação uma alteração que se afaste menos do texto original antes da alteração que mais se afasta desse texto.\n\r\
\n\r\
Se o texto original ou a alteração que menos se afasta desse texto recolherem a maioria dos votos, todas as alterações apresentadas para a mesma parte do texto caducam.\n\r\
\n\r\
4.   Caso sejam postas à votação alterações de compromisso, essas alterações são votadas prioritariamente.\n\r\
\n\r\
5.   Na votação de alterações de compromisso, não são admissíveis votações por partes.\n\r\
\n\r\
6.   Caso a comissão competente tenha apresentado uma série de alterações ao texto que é objeto do relatório, o Presidente põe-nas à votação em bloco, salvo se, relativamente a pontos específicos, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo tiverem requerido uma  votação  em  separado  ou  por  partes,  ou  se tiverem  sido  apresentadas  outras  alterações concorrentes.\n\r\
\n\r\
7.   O Presidente pode pôr à votação em bloco outras alterações, caso sejam complementares, salvo se um grupo político ou um número de deputados que atinja pelo menos o limiar baixo tiverem requerido uma votação em separado ou por partes. Os autores das alterações também podem propor uma votação em bloco, se as suas alterações forem complementares.\n\r\
\n\r\
8.   Na sequência da aprovação ou da rejeição de uma alteração, o Presidente pode decidir que outras alterações com conteúdo ou objetivos idênticos sejam postas à votação em bloco. O Presidente pode solicitar o acordo do Parlamento antes de o fazer.\n\r\
\n\r\
Essas séries de alterações podem estar relacionadas com diferentes partes do texto original.\n\r\
\n\r\
9.   Caso sejam apresentadas duas ou mais alterações idênticas por autores diferentes, são postas à votação como uma única alteração.\n\r\
\n\r\
10.   As alterações para as quais tenha sido requerida uma votação nominal são votadas separadamente."
},
{
'id': 175,
'title': 'Artigo 175.º : Filtragem em comissão das alterações apresentadas ao plenário',
'text': "Caso tenham sido apresentadas mais de 50 alterações ou pedidos de votação por partes ou em separado em relação a um texto apresentado por uma comissão para ser apreciado no Parlamento,  o  Presidente  pode  solicitar, após  consultar  o  presidente da comissão,  que  essa  comissão  se reúna para proceder à votação de cada uma dessas alterações e de cada um desses pedidos. As alterações e os pedidos de votação por partes ou em separado que não recolham, nessa fase, os votos favoráveis de um terço dos membros da comissão, não são postos à votação no Parlamento."
},
{
'id': 176,
'title': 'Artigo 176.º : Votação por partes',
'text': "1.   Se o texto a votar contiver várias disposições, se se referir a várias questões ou se puder ser dividido em várias partes com sentido e/ou valor normativo próprios, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem requerer uma votação por partes.\n\r\
\n\r\
2.   Esse pedido deve ser apresentado, o mais tardar, até ao final da tarde do dia que preceder a votação, salvo se o Presidente fixar outro prazo. O Presidente decide sobre o pedido."
},
{
'id': 177,
'title': 'Artigo 177.º : Direito de voto',
'text': "O direito de voto é um direito pessoal.\n\r\
\n\r\
Os deputados votam individual e pessoalmente.\n\r\
\n\r\
As infrações ao presente artigo são consideradas casos graves de perturbação da ordem, na aceção do artigo 166.º, n.º 1, e têm as consequências jurídicas previstas nesse artigo."
},
{
'id': 178,
'title': 'Artigo 178.º : Votação',
'text': "1.   O Parlamento vota normalmente por braços erguidos.\n\r\
\n\r\
Contudo, o Presidente pode decidir, a qualquer momento, que as votações se realizem através do sistema de votação eletrónica.\n\r\
\n\r\
2.   O Presidente declara a abertura e o encerramento de cada votação.\n\r\
\n\r\
A partir do momento em que o Presidente declarar aberta uma votação, e até ao momento em que a declarar encerrada, só o Presidente pode fazer intervenções.\n\r\
\n\r\
3.   Para decidir se um texto foi aprovado ou rejeitado, só entram no cálculo dos votos expressos os votos a favor ou contra, salvo nos casos em que os Tratados preveem uma maioria específica.\n\r\
\n\r\
4.   Se o Presidente decidir que o resultado de uma votação por braços erguidos é duvidoso, o Parlamento é consultado através do sistema de votação eletrónica. Se o sistema não funcionar, procede-se a nova votação por levantados e sentados.\n\r\
\n\r\
5.   O Presidente estabelece a contagem dos votos e proclama o resultado da votação.\n\r\
\n\r\
6.   O resultado da votação é registado."
},
{
'id': 179,
'title': 'Artigo 179.º : Votação final',
'text': "Quando deliberar com base num relatório, o Parlamento procede a uma votação única e/ou final por votação nominal, nos termos do artigo 180.º, n.º 3.\n\r\
\n\r\
O disposto no presente artigo sobre a votação nominal não se aplica aos relatórios previstos no artigo 8.º, n.º 2, e no artigo 9.º, n.ºs 4, 7 e 9, no âmbito dos procedimentos relativos à imunidade dos deputados.\n\r\
\n\r\
Artigo 179.º-A : Empate na votação\n\r\
\n\r\
1.   Em caso de empate numa votação nos termos do artigo 171.º, n.º 1, alíneas b) ou d), o texto é devolvido na íntegra à comissão. Aplica-se o mesmo procedimento no caso de votações nos termos dos artigos 3.º e 9.º.\n\r\
\n\r\
2.   Em caso de empate na votação de um texto posto à votação por partes nos termos do artigo 176.º, o texto posto à votação é considerado aprovado.\n\r\
\n\r\
3.   Em todos os outros casos de empate, sem prejuízo dos artigos que requerem maiorias qualificadas, o texto ou a proposta postos à votação são considerados rejeitados.\n\r\
\n\r\
O artigo 179.º-A, n.º 3, deve ser interpretado como significando que, caso se verifique um empate na votação de um projeto de recomendação nos termos do artigo 141.º, n.º 4, para não intervir num processo pendente no Tribunal de Justiça da União Europeia, esse empate não significa a aprovação de uma recomendação de acordo com a qual o Parlamento deveria intervir nesse processo. Nesse caso, deve considerar-se que a comissão competente não se pronunciou.\n\r\
\n\r\
O president pode participar na votação, mas não tem voto de qualidade."
},
{
'id': 180,
'title': 'Artigo 180.º : Votação nominal',
'text': "1.   Além dos casos previstos no Regimento, a votação é feita por votação nominal se um grupo político ou um número de deputados que atinja pelo menos o limiar baixo o requererem por escrito, o mais tardar, até ao final da tarde do dia que preceder a votação, salvo se o Presidente fixar um prazo diferente.\n\r\
\n\r\
O disposto no presente artigo sobre a votação nominal não se aplica aos relatórios previstos no artigo 8.º, n.º 2, e no artigo 9.º, n.ºs 4, 7 e 9, no âmbito dos procedimentos relativos à imunidade dos deputados.\n\r\
\n\r\
2.   Cada grupo político pode apresentar no máximo 100 pedidos de votação nominal em cada período de sessões.\n\r\
\n\r\
3.   A votação nominal é feita mediante o sistema de votação eletrónica.\n\r\
\n\r\
Se, por razões técnicas, for impossível utilizar o sistema eletrónico, a votação nominal pode fazer-se por ordem alfabética, a começar pelo nome de um deputado escolhido à sorte. O Presidente é o último a votar. A votação é feita oralmente e os votos são expressos por «sim», «não» ou «abstenção».\n\r\
\n\r\
4.   Os votos são registados na ata da sessão. A lista dos votantes é estabelecida por grupos políticos, seguindo a ordem alfabética dos nomes dos deputados. A lista indica o sentido do voto de cada deputado.\n\r\
\n\r\
Artigo 180.º-A : Votação por escrutínio secreto\n\r\
\n\r\
1.   No caso de nomeações, a votação é feita por escrutínio secreto, sem prejuízo do artigo 15.º, n.º 1, e do primeiro parágrafo do artigo 204.º, n.º 2.\n\r\
\n\r\
No cálculo dos votos expressos, só são tidos em conta os boletins que mencionem os nomes dos candidatos apresentados.\n\r\
\n\r\
2.   A votação pode realizar-se igualmente por escrutínio secreto a pedido de um número de deputados ou de um ou vários grupos políticos que atinjam pelo menos o limiar alto. Esses pedidos devem ser apresentados antes da abertura da votação.\n\r\
\n\r\
3.   Os pedidos de votação por escrutínio secreto têm prioridade sobre os pedidos de votação nominal.\n\r\
\n\r\
4.   Em caso de escrutínio secreto, a contagem dos votos é feita por dois a oito escrutinadores tirados à sorte entre os deputados, salvo em caso de votação eletróncia.\n\r\
\n\r\
No caso das votações nos termos do n.º 1, os candidatos não podem ser escrutinadores.\n\r\
\n\r\
Os nomes dos deputados que participem numa votação por escrutínio secreto são registados na ata da sessão em que a votação se tiver realizado."
},
{
'id': 181,
'title': 'Artigo 181.º : Votação eletrónica',
'text': "1.   As questões técnicas de utilização do sistema de votação eletrónica são regulamentadas por instruções da Mesa.\n\r\
\n\r\
2.   Se for utilizado o sistema de votação eletrónica, a não ser que se trate de uma votação nominal, só é registado o resultado numérico da votação.\n\r\
\n\r\
3.   O Presidente pode decidir a qualquer momento utilizar o sistema de votação eletrónica para verificar se um limiar foi alcançado."
},
{
'id': 182,
'title': 'Artigo 182.º : (suprimido)',
'text': "Artigo 182.º-A : Impugnação das votações\n\r\
\n\r\
1.   O Regimento pode ser invocado quanto à validade de uma votação depois de o Presidente ter declarado essa votação encerrada.\n\r\
\n\r\
2.   Depois de proclamado o resultado de uma votação por braços erguidos, os deputados podem pedir que o resultado seja verificado pelo sistema de votação eletrónica.\n\r\
\n\r\
3.   O Presidente decide da validade do resultado proclamado. Da decisão do Presidente não cabe recurso."
},
{
'id': 183,
'title': 'Artigo 183.º : Declarações de voto',
'text': '1.   Após o encerramento do período de votação, os deputados podem fazer uma declaração de voto oral, com a duração máxima de um minuto, relativa à votação única e/ou final ou a um ponto submetido à apreciação do Parlamento. Cada deputado pode fazer, no máximo, três declarações de voto orais em cada período de sessões.\n\r\
\n\r\
Os deputados podem fazer declarações de voto escritas, com o máximo de 200 palavras, que são incluídas na página de cada deputado no sítio web do Parlamento.\n\r\
\n\r\
Os grupos políticos dispõem de dois minutos, no máximo, para fazer declarações de voto.\n\r\
\n\r\
A partir do momento em que a primeira declaração de voto sobre o primeiro ponto tiver começado, não são admissíveis mais pedidos de declarações de voto.\n\r\
\n\r\
São admissíveis declarações de voto sobre a votação única e/ou final de qualquer ponto submetido à apreciação do Parlamento. Para efeitos do presente artigo, a expressão "votação final" não se refere ao tipo de votação, mas sim à última votação de qualquer ponto.\n\r\
\n\r\
2.   Não são permitidas declarações de voto nos casos de votação por escrutínio secreto ou de votação sobre questões processuais.\n\r\
\n\r\
3.   Se um ponto estiver inscrito na ordem do dia do Parlamento sem alterações ou sem debate, os deputados só podem apresentar declarações de voto escritas nos termos do n.º 1.\n\r\
\n\r\
As declarações de voto, orais ou escritas, devem ter uma relação direta com o ponto submetido à apreciação do Parlamento.'
},
{
'id': 184,
'title': 'Artigo 184.º : (suprimido)',
'text': "Artigo 184.º-A : Invocação do Regimento\n\r\
\n\r\
1.   Pode ser concedida a palavra aos deputados para chamarem a atenção do Presidente para qualquer incumprimento do Regimento. No início da sua exposição, os deputados devem indicar o artigo a que se referem.\n\r\
\n\r\
2.   Os pedidos de uso da palavra para invocação do Regimento têm prioridade sobre todos os outros pedidos de uso da palavra e sobre os pontos de ordem.\n\r\
\n\r\
3.   O tempo de uso da palavra não pode exceder um minuto.\n\r\
\n\r\
4.   O Presidente decide de imediato sobre todas as invocações do Regimento, com base nas disposições do Regimento, e anuncia a sua decisão imediatamente após a invocação do Regimento ter sido feita. A decisão do Presidente não é submetida a votação.\n\r\
\n\r\
5.   Excecionalmente, o Presidente pode declarar que anunciará a sua decisão ulteriormente, mas não o fará mais de 24 horas após a invocação do Regimento ter sido feita. O adiamento da decisão não implica o adiamento do debate em curso. O Presidente pode submeter a questão à comissão competente.\n\r\
\n\r\
Os pedidos de uso da palavra para invocação do Regimento devem incidir sobre o ponto da ordem do dia em discussão. O Presidente pode conceder a palavra para uma invocação do Regimento sobre outro assunto num momento oportuno como, por exemplo, após a conclusão do debate sobre o ponto da ordem do dia em questão, ou antes da interrupção da sessão."
},
{
'id': 185,
'title': 'Artigo 185.º : Pontos de ordem',
'text': "1.   Os pedidos de uso da palavra para os seguintes pontos de ordem:\n\r\
\n\r\
(a)   Colocar a questão prévia (artigo 187.º);\n\r\
\n\r\
(b)   Requerer a devolução à comissão (artigo 188.º);\n\r\
\n\r\
(c)   Requerer o encerramento do debate (artigo 189.º);\n\r\
\n\r\
(d)   Requerer o adiamento do debate e da votação (artigo 190.º); ou\n\r\
\n\r\
(e)   Requerer a interrupção ou a suspensão da sessão (artigo 191.º),\n\r\
\n\r\
têm prioridade sobre os outros pedidos de uso da palavra.\n\r\
\n\r\
Sobre estes pontos de ordem só podem usar da palavra, para além do respetivo autor, um orador contra e o presidente ou o relator da comissão competente.\n\r\
\n\r\
2.   O tempo de uso da palavra não pode exceder um minuto."
},
{
'id': 186,
'title': 'Artigo 186.º : (suprimido)',
'text': ""
},
{
'id': 187,
'title': 'Artigo 187.º : Questão prévia',
'text': "1.   No início do debate de um ponto específico da ordem do dia, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem apresentar um ponto de ordem para que o debate desse ponto seja declarado inadmissível. A votação desse ponto de ordem realiza-se imediatamente.\n\r\
\n\r\
A intenção de apresentar um ponto de ordem por motivos de inadmissibilidade deve ser notificada com a antecedência mínima de 24 horas ao Presidente. O Presidente informa imediatamente o Parlamento dessa notificação.\n\r\
\n\r\
2.   Se o ponto de ordem for aprovado, o Parlamento passa imediatamente ao ponto seguinte da ordem do dia."
},
{
'id': 188,
'title': 'Artigo 188.º : Devolução à comissão',
'text': "1.   Um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem requerer a devolução à comissão quando a ordem do dia for fixada, ou antes da abertura do debate.\n\r\
\n\r\
A intenção de apresentar um ponto de ordem para devolução à comissão deve ser notificada com a antecedência mínima de 24 horas ao Presidente. O Presidente informa imediatamente o Parlamento dessa notificação.\n\r\
\n\r\
2.   Um ponto de ordem para devolução à comissão pode ser igualmente apresentado por um grupo político ou por um número de deputados que atinja pelo menos o limiar baixo antes ou durante a votação. A votação desse ponto de ordem realiza-se imediatamente.\n\r\
\n\r\
3.   Um ponto de ordem para devolução à comissão só pode ser apresentado uma vez em cada uma das fases processuais a que se referem os n.ºs 1 e 2.\n\r\
\n\r\
4.   A devolução à comissão suspende a apreciação do ponto em questão.\n\r\
\n\r\
5.   O Parlamento pode fixar um prazo para a comissão apresentar as suas conclusões."
},
{
'id': 189,
'title': 'Artigo 189.º : Encerramento do debate',
'text': "1.   Um debate pode ser encerrado, sob proposta do Presidente ou a pedido de um grupo político ou de um número de deputados que atinja pelo menos o limiar baixo, antes de terem usado da palavra todos os oradores inscritos. A votação da proposta ou do pedido realiza-se imediatamente.\n\r\
\n\r\
2.   Se a proposta ou o pedido forem aprovados, só pode usar da palavra um membro de cada um dos grupos políticos que ainda não tenham participado no debate.\n\r\
\n\r\
3.   Após as  intervenções  a  que  se  refere  o  n.º  2,  o  debate  é  dado  por  encerrado  e  o Parlamento procede à votação do ponto em discussão, salvo se a votação tiver sido previamente fixada para um momento determinado.\n\r\
\n\r\
4.   Se a proposta ou o pedido forem rejeitados, não podem ser apresentados de novo durante o mesmo debate, exceto pelo Presidente."
},
{
'id': 190,
'title': 'Artigo 190.º : Adiamento do debate ou da votação',
'text': "1.   No início de um debate sobre um ponto da ordem do dia, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem apresentar um ponto de ordem para que o debate seja adiado para um dia e hora determinados.  A votação desse ponto de ordem realiza-se imediatamente.\n\r\
\n\r\
A intenção de apresentar um ponto de ordem para o adiamento de um debate deve ser notificada com a antecedência mínima de 24 horas ao Presidente. O Presidente informa imediatamente o Parlamento dessa notificação.\n\r\
\n\r\
2.   Se o ponto de ordem for aprovado, o Parlamento passa ao ponto seguinte da ordem do dia. O debate adiado é retomado no momento fixado.\n\r\
\n\r\
3.   Se o ponto de ordem for rejeitado, não pode ser apresentado de novo durante o mesmo período de sessões.\n\r\
\n\r\
4.   Antes ou durante uma votação, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo podem apresentar um ponto de ordem para que a votação seja adiada. A votação desse ponto de ordem realiza-se imediatamente."
},
{
'id': 191,
'title': 'Artigo 191.º : Interrupção ou suspensão da sessão',
'text': "O Parlamento pode decidir interromper ou suspender a sessão durante um debate ou uma votação sob proposta do Presidente ou a pedido de um número de deputados ou de um ou vários grupos políticos que atinjam pelo menos o limiar alto. A votação da proposta ou do pedido realiza-se imediatamente.\n\r\
\n\r\
Caso seja apresentado um pedido para interromper ou suspender a sessão, o processo de votação desse pedido deve ser iniciado sem demora. Devem ser utilizados os meios habituais para anunciar as votações no plenário e, de acordo com as práticas em vigor, deve ser dado tempo suficiente aos deputados para chegarem ao hemiciclo.\n\r\
\n\r\
Por analogia com o segundo parágrafo do artigo 149.º-A, n.º 2, se esse pedido for rejeitado, não pode ser apresentado outro pedido semelhante no mesmo dia. De acordo com o artigo 164.º-A, o Presidente tem o direito de fazer cessar o recurso excessivo a pedidos apresentados nos termos do presente artigo."
},
{
'id': 192,
'title': 'Artigo 192.º : Ata',
'text': "1.   A ata de cada sessão, que indica em pormenor o desenrolar dos trabalhos, os nomes dos oradores e as decisões do Parlamento, incluindo, se for caso disso, os resultados das votações de todas as alterações, é disponibilizada pelo menos meia hora antes do início do período da tarde da sessão seguinte.\n\r\
\n\r\
2.   Os documentos que servem de base aos debates e às decisões do Parlamento são publicados na ata.\n\r\
\n\r\
3.   No início do período da tarde de cada sessão, o Presidente submete a ata da sessão anterior à aprovação do Parlamento.\n\r\
\n\r\
4.   Se a ata for contestada, o Parlamento decide, se for caso disso, se as alterações requeridas devem ser tidas em conta. Nenhum deputado pode intervir sobre esta questão por mais de um minuto.\n\r\
\n\r\
5.   As atas são assinadas pelo Presidente e pelo Secretário-Geral e mantidas nos arquivos do Parlamento. São publicadas no Jornal Oficial da União Europeia."
},
{
'id': 193,
'title': 'Artigo 193.º : Textos aprovados',
'text': "1.   Os textos aprovados pelo Parlamento são publicados imediatamente após a votação. São submetidos à aprovação do Parlamento juntamente com a ata da sessão correspondente e mantidos nos arquivos do Parlamento.\n\r\
\n\r\
2.   Os textos aprovados pelo Parlamento são submetidos a finalização jurídico-linguística, sob a responsabilidade do Presidente. Caso sejam aprovados com base num acordo alcançado entre o Parlamento e o Conselho, a finalização desses textos é efetuada pelas duas instituições, em estreita cooperação e por mútuo acordo.\n\r\
\n\r\
3.   Caso, a fim de assegurar a coerência e a qualidade dos textos de acordo com a vontade expressa pelo Parlamento, seja necessário efetuar adaptações que não se limitem à correção de erros tipográficos ou às correções necessárias para assegurar a concordância de todas as versões linguísticas, bem como a sua correção linguística e a sua coerência terminológica, aplica-se o procedimento previsto no artigo 231.º.\n\r\
\n\r\
4.   As posições aprovadas pelo Parlamento pelo processo legislativo ordinário assumem a forma de textos consolidados. Se a votação no Parlamento não tiver por base um acordo com o Conselho, o texto consolidado identifica as alterações aprovadas.\n\r\
\n\r\
5.   Após a finalização, os textos aprovados são assinados pelo Presidente e pelo Secretário-Geral, e publicados no Jornal Oficial da União Europeia."
},
{
'id': 194,
'title': 'Artigo 194.º : Relato integral',
'text': "1.   É  redigido  um  relato  integral  dos  debates  de  cada  sessão,  sob  a  forma  de  um documento multilíngue em que todas as intervenções orais aparecem na língua oficial original.\n\r\
\n\r\
2.   Sem prejuízo dos seus outros poderes disciplinares, o Presidente pode mandar suprimir do relato integral as intervenções dos deputados aos quais não tenha sido concedida previamente a palavra ou cujas intervenções tenham ultrapassado o tempo que lhes foi concedido.\n\r\
\n\r\
3.   Os oradores podem fazer correções ao texto das suas intervenções orais no prazo de cinco dias úteis. As correções são enviadas ao Secretariado dentro desse prazo.\n\r\
\n\r\
4.   O relato integral multilíngue é publicado num anexo do Jornal Oficial da União Europeia e conservado nos arquivos do Parlamento.\n\r\
\n\r\
5.   A pedido dos deputados, são feitas traduções de extratos do relato integral para qualquer língua oficial da União. Se necessário, as traduções são realizadas num prazo curto."
},
{
'id': 195,
'title': 'Artigo 195.º : Gravação audiovisual dos debates',
'text': "1.   Os debates do Parlamento, nas línguas em que se realizarem, bem como a banda sonora multilíngue de todas as cabinas de interpretação ativas, são difundidos em direto no sítio web do Parlamento.\n\r\
\n\r\
2.   Imediatamente após cada sessão, uma gravação audiovisual indexada dos debates, bem como a banda sonora original multilíngue de todas as cabinas de interpretação ativas, é produzida e disponibilizada no sítio web do Parlamento até ao fim da legislatura em curso e durante a legislatura seguinte, após o que será conservada nos arquivos do Parlamento. Essa gravação audiovisual é ligada ao relato integral multilíngue dos debates logo que este esteja disponível."
},
{
'id': 196,
'title': 'Artigo 196.º : Criação das comissões permanentes(1)',
'text': "Sob proposta da Conferência dos Presidentes, o Parlamento cria comissões permanentes. As suas competências são definidas num anexo do Regimento(2). Esse anexo é aprovado pela maioria dos votos expressos. Os membros das comissões permanentes são eleitos durante o primeiro período de sessões subsequente à reeleição do Parlamento e, novamente, dois anos e meio mais tarde.\n\r\
\n\r\
As competências das comissões permanentes podem ser definidas em data diferente da sua criação.\n\r\
\n\r\
\n\r\
(1)	As alterações do artigo 196.º, aprovadas em 13 de dezembro de 2016 (P8_TA(2016)0484), relativas à composição das comissões, só se aplicam no início do primeiro período de sessões seguinte às eleições para o Parlamento que deverão realizar-se em 2019. Por conseguinte, não são reproduzidas na presente versão.\n\r\
(2)	Ver anexo V."
},
{
'id': 197,
'title': 'Artigo 197.º : Comissões especiais',
'text': "1.   Sob proposta da Conferência dos Presidentes, o Parlamento pode criar a qualquer momento comissões especiais. As suas responsabilidades, a sua composição e o seu mandato são definidos em simultâneo com a decisão da sua criação(1).\n\r\
\n\r\
2.   O mandato das comissões especiais não pode exceder 12 meses, exceto se o Parlamento o prorrogar antes do seu termo. Salvo decisão em contrário na decisão do Parlamento que cria uma comissão especial, o seu mandato começa a contar a partir da data da sua reunião constitutiva.\n\r\
\n\r\
3.   As comissões especiais não podem emitir pareceres dirigidos a outras comissões.\n\r\
\n\r\
\n\r\
(1)	As alterações do artigo 197.º, n.º 1, aprovadas em 13 de dezembro de 2016 (P8_TA(2016)0484), relativas à composição das comissões, só se aplicam no início do primeiro período de sessões seguinte às eleições para o Parlamento que deverão realizar-se em 2019. Por conseguinte, não são reproduzidas na presente versão."
},
{
'id': 198,
'title': 'Artigo 198.º : Comissões de inquérito',
'text': "1.   Nos termos do  artigo 226.º  do  Tratado  sobre  o  Funcionamento  da  União Europeia e do artigo 2.º da Decisão 95/167/CE, Euratom, CECA do Parlamento Europeu, do Conselho e da Comissão(1), o Parlamento pode criar, a pedido de um quarto dos membros que o compõem, comissões de inquérito para analisar alegações de infração ou de má administração na aplicação do direito da União, supostamente resultantes de atos de instituições ou órgãos da União Europeia, da administração pública de um Estado-Membro ou de pessoas incumbidas pelo direito da União da aplicação do mesmo.\n\r\
\n\r\
O objeto do inquérito, tal como definido por um quarto dos membros que compõem o Parlamento, e o prazo a que se refere o n.º 11 não podem ser objeto de alterações.\n\r\
\n\r\
2.   As decisões de criação das comissões de inquérito são publicadas no Jornal Oficial da União Europeia no prazo de um mês.\n\r\
\n\r\
3.   As formas de funcionamento das comissões de inquérito são regidas pelas disposições do Regimento relativas às comissões, sem prejuízo das disposições específicas previstas no presente artigo e na Decisão 95/167/CE, Euratom, CECA.\n\r\
\n\r\
4.   Os  pedidos  de  criação  das  comissões  de  inquérito  devem  definir  com precisão o  objeto  da investigação e incluir uma exposição pormenorizada dos motivos que a justificam. Sob proposta da Conferência dos Presidentes, o Parlamento toma uma decisão sobre a criação de uma comissão de inquérito e, caso decida criá-la, sobre a sua composição, nos termos do artigo 199.º(2).\n\r\
\n\r\
5.   As comissões de inquérito não podem emitir pareceres dirigidos a outras comissões.\n\r\
\n\r\
6.   Só têm direito de voto nas comissões de inquérito, em qualquer fase dos seus trabalhos, os membros titulares ou, na sua ausência, os seus substitutos.\n\r\
\n\r\
7.   As comissões de inquérito elegem o seu presidente e os seus vice-presidentes e nomeiam um ou vários relatores. Além disso, as comissões de inquérito podem confiar missões ou tarefas específicas aos seus membros, ou neles delegar competências; nesse caso estes devem informar pormenorizadamente a comissão.\n\r\
\n\r\
8.   Entre as reuniões, os coordenadores exercem, em caso de urgência ou de necessidade, os poderes da comissão de inquérito, sob reserva de ratificação na reunião seguinte.\n\r\
\n\r\
9.   No que se refere à utilização das línguas, as comissões de inquérito aplicam o disposto no artigo 158.º. Não obstante, a mesa das comissões de inquérito:\n\r\
\n\r\
-   pode restringir a interpretação às línguas oficiais dos membros da comissão que participam nos trabalhos, se o considerar necessário por razões de confidencialidade;\n\r\
\n\r\
-   decide sobre a tradução dos documentos recebidos de forma a assegurar que a comissão possa realizar os seus trabalhos com eficácia e rapidez, e que o segredo e a confidencialidade necessários sejam respeitados.\n\r\
\n\r\
10.   Caso alegadas contravenções ou casos de má administração na aplicação da legislação da União sugiram que um órgão ou uma autoridade de um Estado‑Membro possam ser responsáveis, a comissão de inquérito pode solicitar que o parlamento do Estado-Membro em causa coopere na investigação.\n\r\
\n\r\
11.   As comissões de inquérito concluem os seus trabalhos apresentando ao Parlamento um relatório sobre os resultados alcançados no prazo máximo de 12 meses após a sua reunião constituinte. O Parlamento pode decidir prorrogar duas vezes este prazo, por um período de três meses. O relatório pode incluir, se adequado, as opiniões minoritárias, nas condições previstas no artigo 52.º-A. O relatório é publicado.\n\r\
\n\r\
A pedido de uma comissão de inquérito, o Parlamento realiza um debate sobre o relatório no período de sessões seguinte à sua apresentação.\n\r\
\n\r\
12.   As comissões de inquérito podem apresentar também ao Parlamento projetos de recomendação dirigidos às instituições ou órgãos da União, ou aos Estados-Membros.\n\r\
\n\r\
13.   O Presidente encarrega a comissão competente nos termos do anexo V de verificar o seguimento dado aos resultados dos trabalhos das comissões de inquérito e, se adequado, de elaborar um relatório sobre a questão. O Presidente toma todas as medidas consideradas adequadas para assegurar a aplicação concreta das conclusões dos inquéritos.\n\r\
\n\r\
\n\r\
(1)	Decisão 95/167/CE, Euratom, CECA do Parlamento Europeu, do Conselho e da Comissão, de 19 de abril de 1995, relativa às formas de exercício do direito de inquérito do Parlamento Europeu (JO L 113 de 19.5.1995, p. 1).\n\r\
(2)	As alterações do artigo 198.º, n.º 3, aprovadas em 13 de dezembro de 2016 (P8_TA(2016)0484), relativas à composição das comissões, só se aplicam no início do primeiro período de sessões seguinte às eleições para o Parlamento que deverão realizar-se em 2019. Por conseguinte, não são reproduzidas na presente versão."
},
{
'id': 199,
'title': 'Artigo 199.º : Composição das comissões(1)',
'text': "1.   A eleição dos membros das comissões e das comissões de inquérito realiza-se após a apresentação de candidaturas pelos grupos políticos e pelos deputados não inscritos. A Conferência dos Presidentes apresenta propostas ao Parlamento. A composição das comissões deve refletir, tanto quanto possível, a composição do Parlamento.\n\r\
\n\r\
Quando os deputados mudarem de grupo político, continuarão a manter, até ao fim do seu mandato de dois anos e meio, os lugares que ocupam nas comissões parlamentares. No entanto, se essa mudança alterar a representação equitativa das diferentes tendências políticas numa comissão, a Conferência dos Presidentes faz, em conformidade com o procedimento a que se refere a segunda frase do n.º 1, novas propostas para a composição dessa comissão, de modo que os direitos do deputado em causa sejam garantidos.\n\r\
\n\r\
A proporcionalidade da distribuição de lugares nas comissões entre os grupos políticos não deve afastar-se do número inteiro adequado mais próximo. Se um grupo decidir não ocupar lugares numa comissão, esses lugares ficarão vagos e o número de membros da comissão será reduzido em consequência. Não são permitidas trocas de lugares entre os grupos políticos.\n\r\
\n\r\
2.   Só são admissíveis alterações às propostas da Conferência dos Presidentes se forem apresentadas pelo menos por 40  deputados. O Parlamento pronuncia-se sobre essas alterações por escrutínio secreto.\n\r\
\n\r\
3.    Consideram-se eleitos os deputados cujos nomes estejam incluídos nas propostas da Conferência dos Presidentes, eventualmente alteradas nos termos do n.º 2.\n\r\
\n\r\
4.   Se um grupo político não apresentar candidaturas a uma comissão de inquérito nos termos do n.º 1 no prazo fixado pela Conferência dos Presidentes, a Conferência dos Presidentes só apresenta ao Parlamento as candidaturas que lhe tiverem sido comunicadas dentro desse prazo.\n\r\
\n\r\
5.   A Conferência dos Presidentes pode decidir preencher provisoriamente as vagas abertas numa comissão, com o acordo dos deputados a nomear e tendo em conta o disposto no n.º 1.\n\r\
\n\r\
6.   Todas estas alterações são submetidas ao Parlamento, para ratificação, na sessão seguinte.\n\r\
\n\r\
\n\r\
(1)	As alterações do artigo 199.°, que foram aprovadas em 13 de dezembro de 2016 (P8_TA(2016)0484), só entrarão em vigor no início do primeiro período de sessões seguinte às eleições para o Parlamento que deverão realizar-se em 2019. Por conseguinte, não são reproduzidas na presente versão."
},
{
'id': 200,
'title': 'Artigo 200.º : Suplentes(1)',
'text': "1.   Os grupos políticos e os deputados não inscritos podem nomear para cada comissão um número de suplentes permanentes igual ao número de membros titulares que os representam nessa comissão. O Presidente deve ser informado dessas nomeações. Os suplentes permanentes podem participar nas reuniões da comissão, usar da palavra e, em caso de ausência do membro titular, participar nas votações.\n\r\
\n\r\
Caso vague um lugar de membro titular de uma comissão, um membro suplente permanente do mesmo grupo político pode substituí-lo na votação, a título temporário, até à substituição provisória do membro titular nos termos do artigo 199.°, n.° 5, ou, caso não se verifique essa substituição provisória, até à nomeação de um novo membro titular. Esta faculdade baseia-se na decisão do Parlamento sobre a composição numérica da comissão e visa garantir que possa participar na votação um número de membros do grupo político em causa igual ao que existia antes de o lugar ter ficado vago.\n\r\
\n\r\
2.   Além disso, na ausência do membro titular, e caso não tenham sido nomeados suplentes permanentes, ou na ausência destes, o membro titular pode fazer-se representar por outro membro do seu grupo político, com direito de voto. O nome deste suplente deve ser comunicado ao presidente da comissão antes do início da votação.\n\r\
\n\r\
O n.° 2 aplica-se, com as necessárias adaptações, aos deputados não inscritos.\n\r\
\n\r\
A comunicação prévia prevista na última frase do n.° 2 deve ser feita antes do final da discussão ou antes do início da votação do ponto ou dos pontos para os quais o membro titular se tenha feito representar.\n\r\
\n\r\
*\n\r\
*        *\n\r\
As disposições do presente artigo articulam-se em torno de duas ideias perfeitamente definidas neste texto:\n\r\
\n\r\
-   um grupo político não pode ter numa comissão mais suplentes permanentes do que membros titulares;\n\r\
\n\r\
-   só os grupos políticos podem nomear suplentes permanentes, desde que informem o Presidente.\n\r\
\n\r\
Concluindo:\n\r\
\n\r\
-    o estatuto de suplente permanente decorre exclusivamente da filiação num grupo político determinado;\n\r\
\n\r\
-   se o número de membros titulares de que um grupo político dispõe numa comissão for alterado, o número máximo de suplentes permanentes que o grupo pode nomear para essa comissão é alterado em consequência;\n\r\
\n\r\
-   os deputados que mudem de grupo político não podem conservar o estatuto de suplente permanente que tinham no seu grupo de origem;\n\r\
\n\r\
-    um membro de uma comissão não pode em caso algum ser suplente de um colega filiado noutro grupo político.\n\r\
\n\r\
\n\r\
(1)	A supressão do artigo 200.°, decidida em 13 de dezembro de 2016 (P8_TA(2016)0484), só entrará em vigor no início do primeiro período de sessões seguinte às eleições para o Parlamento que deverão realizar-se em 2019. Por conseguinte, este artigo é reproduzido nesta versão."
},
{
'id': 201,
'title': 'Artigo 201.º : Competência das comissões',
'text': "1.   As comissões permanentes examinam os assuntos que lhes sejam enviados pelo Parlamento ou, durante a interrupção da Sessão, pelo Presidente em nome da Conferência dos Presidentes.\n\r\
\n\r\
2.   Caso uma ou mais comissões permanentes sejam competentes para conhecer de um assunto, uma delas é designada comissão competente, e as outras comissões encarregadas de emitir parecer.\n\r\
\n\r\
No entanto, um assunto não pode ser atribuído simultaneamente a mais de três comissões, salvo se for decidida uma derrogação desta regra nas condições previstas no n.º 1.\n\r\
\n\r\
3.   Duas ou mais comissões ou subcomissões podem proceder em comum à análise de assuntos que se enquadrem nas suas esferas de competência, mas não podem tomar decisões comuns, exceto nos casos em que se aplique o artigo 55.º.\n\r\
\n\r\
4.   Com o acordo prévio dos  órgãos competentes do Parlamento, as comissões podem encarregar um ou vários dos seus membros de efetuar missões de estudo ou de informação.\n\r\
\n\r\
Artigo 201.º-A : Questões de competência\n\r\
\n\r\
1.   Se uma comissão permanente declarar que não é da sua competência examinar um determinado assunto, ou em caso de conflito de competências entre duas ou mais comissões permanentes, a questão da competência é submetida à Conferência dos Presidentes das Comissões no prazo de quatro semanas após o anúncio da atribuição do assunto a uma comissão no Parlamento.\n\r\
\n\r\
2.   A Conferência dos Presidentes toma uma decisão no prazo de seis semanas após a apresentação da questão com base numa recomendação da Conferência dos Presidentes das Comissões ou, na sua falta, do presidente desta última. Se a Conferência dos Presidentes não tomar uma decisão nesse prazo, a recomendação é considerada aprovada.\n\r\
\n\r\
3.   Os presidentes das comissões podem estabelecer acordos com outros presidentes de comissões sobre a atribuição de um assunto a uma comissão determinada, sob reserva, se necessário, da autorização de um processo de comissões associadas nos termos do artigo 54.º."
},
{
'id': 202,
'title': 'Artigo 202.º : (suprimido)',
'text': ""
},
{
'id': 203,
'title': 'Artigo 203.º : Subcomissões',
'text': "1.   As subcomissões podem ser criadas nos termos do artigo 196.º. As comissões permanentes ou especiais também podem, no interesse dos seus trabalhos e sob reserva da autorização prévia da Conferência  dos  Presidentes,  nomear  internamente  uma  ou  várias subcomissões, estabelecendo ao mesmo tempo a sua composição, nos termos das disposições relevantes previstas no artigo 199.º, e as suas áreas de competência, que devem enquadrar-se no âmbito das áreas de competência da comissão principal. As subcomissões respondem perante a sua comissão principal.\n\r\
\n\r\
2.   Salvo especificação em contrário do Regimento, aplica-se às subcomissões o procedimento adotado para as comissões.\n\r\
\n\r\
3.   Os membros titulares de uma subcomissão são escolhidos de entre os membros da comissão principal.\n\r\
\n\r\
4.   Os suplentes têm assento nas subcomissões nas mesmas condições previstas para as comissões.\n\r\
\n\r\
5.   O presidente da comissão principal pode envolver os presidentes das subcomissões nos trabalhos dos coordenadores ou permitir-lhes que presidam a debates na comissão principal sobre temas tratados especificamente pelas subcomissões em causa, desde que este modo de proceder seja submetido à apreciação da mesa da comissão e que esta dê o seu acordo."
},
{
'id': 204,
'title': 'Artigo 204.º : Mesa das comissões',
'text': "1.   Na primeira reunião de comissão subsequente à nomeação dos membros das comissões nos termos do artigo 199.º, a comissão elege de entre os seus membros titulares, por voltas de escrutínio separadas, o presidente e os vice-presidentes, que constituirão a Mesa. O número de vice-presidentes a eleger é determinado pelo Parlamento com base numa proposta da Conferência dos Presidentes. A diversidade do Parlamento deve ser refletida na composição da Mesa de cada comissão; não é permitido que uma Mesa seja exclusivamente feminina ou masculina, nem que todos os vice-presidentes sejam oriundos do mesmo Estado- Membro.\n\r\
\n\r\
2.   Se o número de candidatos corresponder ao número de lugares a preencher, a eleição faz-se por aclamação. No entanto, caso exista mais de um candidato para o mesmo lugar, ou se um número de deputados ou um ou vários grupos políticos que atinjam pelo menos o limiar alto na comissão tiverem solicitado uma votação, a eleição faz-se por escrutínio secreto.\n\r\
\n\r\
Se houver apenas um candidato, a eleição faz-se pela maioria absoluta dos votos expressos, a favor e contra.\n\r\
\n\r\
Se houver mais de uma candidatura, é eleito o candidato que obtiver a maioria absoluta dos votos expressos na primeira volta. Na segunda volta, é eleito o candidato que obtiver o maior número de votos. Em caso de empate, é eleito o candidato mais idoso.\n\r\
\n\r\
3.   Os artigos seguintes, relativos aos mandatos do Parlamento, aplicam-se, com as necessárias adaptações,  às  comissões:  artigo  14.º  (Presidência  interina),  artigo  15.º  (Candidaturas  e disposições gerais), artigo 16.º (Eleição do Presidente - discurso inaugural), artigo 19.º (Duração dos mandatos) e artigo 20.º (Abertura de vaga)."
},
{
'id': 205,
'title': 'Artigo 205.º : Coordenadores das comissões',
'text': "1.   Os grupos políticos podem designar um dos seus membros, em cada uma das comissões, como coordenador.\n\r\
\n\r\
2.   Se  necessário, o presidente  da comissão convoca uma reunião dos coordenadores das comissões para preparar as decisões a tomar pela comissão, nomeadamente relativas aos procedimentos e à nomeação dos relatores. A comissão pode delegar nos coordenadores a competência para tomar certas decisões, com exceção das decisões relativas à aprovação de relatórios, de propostas de resolução, de pareceres e de alterações.\n\r\
\n\r\
Os vice-presidentes podem ser convidados a participar nas reuniões dos coordenadores das comissões, a título consultivo.\n\r\
\n\r\
Se não for possível chegar a consenso, os coordenadores só podem deliberar se dispuserem de uma maioria que represente claramente uma ampla maioria dos membros da comissão, tendo em conta a dimensão respetiva dos diferentes grupos políticos.\n\r\
\n\r\
O presidente anuncia em comissão todas as decisões e recomendações dos coordenadores, as quais são consideradas aprovadas se não tiverem sido contestadas. As decisões e as recomendações dos coordenadores são devidamente mencionadas na ata da reunião da comissão.\n\r\
\n\r\
Os deputados não inscritos não constituem um grupo político na aceção do artigo 32.º e, por conseguinte, não podem nomear coordenadores, que são os únicos deputados que podem participar nas reuniões dos coordenadores.\n\r\
\n\r\
Seja como for, o direito de acesso à informação dos deputados não inscritos deve ser garantido, em conformidade com o princípio da não discriminação, mediante a transmissão de informações e a presença de um membro do secretariado dos deputados não inscritos nas reuniões dos coordenadores.\n\r\
\n\r\
Artigo 205.º-A : Relatores-sombra\n\r\
\n\r\
Os grupos políticos podem designar um relator-sombra para cada relatório, que acompanha o andamento do relatório em causa e procura alcançar compromissos em nome do grupo no seio da comissão. Os nomes dos relatores-sombra são comunicados ao presidente da comissão."
},
{
'id': 206,
'title': 'Artigo 206.º : Reuniões das comissões',
'text': "1.   As comissões reúnem-se por convocação do seu presidente ou por iniciativa do Presidente do Parlamento.\n\r\
\n\r\
Quando o presidente convoca uma reunião, apresenta o projeto de ordem do dia aos membros da comissão. A comissão pronuncia‑se sobre a ordem do dia no início da reunião.\n\r\
\n\r\
2.   A Comissão, o Conselho e outras instituições da União podem usar da palavra nas reuniões das comissões, a convite do presidente da comissão, feito em nome desta.\n\r\
\n\r\
Por decisão de uma comissão, qualquer outra pessoa pode ser convidada a assistir a uma reunião e a usar da palavra.\n\r\
\n\r\
A comissão competente pode organizar uma audição de peritos, com a aprovação da Mesa, se considerar que tal audição é essencial ao bom andamento dos trabalhos sobre qualquer assunto específico.\n\r\
\n\r\
3.   Sem prejuízo do artigo 53.º, n.º 8, e salvo decisão em contrário da comissão em causa, os deputados que assistirem a reuniões de comissões das quais não façam parte não podem participar nas suas deliberações.\n\r\
\n\r\
Podem, contudo, ser autorizados pela comissão a participar nas suas reuniões, a título consultivo.\n\r\
\n\r\
4.   O artigo 162.º, n.º 2, relativo à repartição do tempo de uso da palavra, aplica-se, com as necessárias adaptações, às comissões.\n\r\
\n\r\
5.   Caso seja redigido um relato integral, aplica-se, com as necessárias adaptações, o artigo 194.º, n.ºs 2, 3 e 5."
},
{
'id': 207,
'title': 'Artigo 207.º : Atas das reuniões das comissões',
'text': "As atas das reuniões das comissões são distribuídas a todos os membros, e submetidas à aprovação da comissão."
},
{
'id': 208,
'title': 'Artigo 208.º : Votações em comissão',
'text': "1.   Sem prejuízo do artigo 66.º, n.º 3, em segunda leitura, as alterações ou os projetos de propostas de rejeição apresentados para apreciação em comissão são sempre assinados por um membro titular ou por um membro suplente da comissão em causa, ou coassinados, pelo menos, por um desses membros.\n\r\
\n\r\
2.   Para que as votações em comissão sejam válidas, é necessária a presença efetiva de um quarto dos seus membros. No entanto, se um número de deputados ou um ou vários grupos políticos que atinjam pelo menos o limiar alto na comissão assim o tiverem requerido antes do início da votação, a votação só é válida se nela tiver participado a maioria dos seus membros.\n\r\
\n\r\
3.   As votações únicas e/ou finais dos relatórios ou dos pareceres em comissão são efetuadas por votação nominal, nos termos do artigo 180.º, n.ºs 3 e 4. A votação de alterações e outras votações são efetuadas por braço no ar, salvo se o presidente decidir proceder a uma votação eletrónica ou se um número de deputados ou um ou vários grupos políticos que atinjam pelo menos o limiar alto na comissão tiverem requerido uma votação nominal.\n\r\
\n\r\
O disposto no n.º 3 sobre a votação nominal não se aplica aos relatórios previstos no artigo 8.º, n.º 2, nem no artigo 9.º, n.ºs 4, 7 e 9, no âmbito dos procedimentos relativos à imunidade dos deputados.\n\r\
\n\r\
4.   Tendo em consideração as alterações propostas, em vez de proceder à votação, a comissão pode pedir que o relator apresente um novo projeto que tenha em conta o maior número possível de alterações. Nesse caso, é fixado um novo prazo para a apresentação de alterações."
},
{
'id': 209,
'title': 'Artigo 209.º : Disposições respeitantes à sessão plenária aplicáveis em comissão',
'text': "Os seguintes artigos, relativos às votações e a intervenções sobre questões processuais, aplicam-se, com as necessárias adaptações, às comissões: artigo 164.º-A (Prevenção da prática de obstrução), artigo 168.º-A (Limiares), artigo 169.º (Entrega e apresentação de alterações), artigo 170.º (Admissibilidade das alterações), artigo 171.º (Processo de votação), artigo 174.º (Ordem de votação das alterações), artigo 176.º, n.º 1 (Votação por partes), artigo 177.º (Direito de voto), artigo 178.º (Votação), artigo 179.º-A (Empate na votação), artigo 180.º, n.ºs 3  e  4 (Votação  nominal), artigo 180.º-A (Votação  por  escrutínio  secreto), artigo 181.º (Votação eletrónica), artigo 182.º-A (Impugnação das votações), artigo 184.º-A (Pontos de ordem), artigo 190.º (Adiamento do debate e da votação) e artigo 191.º (Interrupção ou suspensão da sessão)."
},
{
'id': 210,
'title': 'Artigo 210.º : Período de perguntas em comissão',
'text': 'Podem ter lugar períodos de perguntas nas reuniões das comissões, caso estas assim o decidam. Cada comissão estabelece as suas próprias regras para a organização dos períodos de perguntas.\n\r\
\n\r\
Artigo 210.º-A : Procedimento a aplicar na consulta, por uma comissão, de informações confidenciais recebidas pelo Parlamento\n\r\
\n\r\
1.   Quando o Parlamento receber informações que tenha a obrigação jurídica de tratar confidencialmente, o presidente da comissão competente aplica automaticamente o procedimento confidencial previsto no n.º 3.\n\r\
\n\r\
2.   Sem prejuízo do n.º 1, e caso não exista obrigação jurídica de tratar confidencialmente as informações recebidas, as comissões podem aplicar por iniciativa própria o procedimento confidencial previsto no n.º 3 a qualquer informação ou a qualquer documento indicados por um dos seus membros num pedido escrito ou oral. Nesse caso, para aprovar uma decisão de aplicar o procedimento confidencial é necessária a maioria de dois terços dos membros presentes.\n\r\
\n\r\
3.   Após o presidente da comissão ter declarado que se aplica o procedimento confidencial, só podem assistir à reunião os membros da comissão, e os funcionários e peritos previamente designados pelo presidente, cuja presença seja estritamente necessária.\n\r\
\n\r\
Os documentos são distribuídos no início da reunião e recolhidos no final. Os documentos são numerados. Não é permitido tomar notas nem fazer fotocópias.\n\r\
\n\r\
A ata da reunião não menciona a discussão do ponto tratado segundo o procedimento confidencial. Só pode figurar na ata a decisão, se a houver.\n\r\
\n\r\
4.   Um número de deputados ou um ou vários grupos políticos que atinjam pelo menos o limiar médio na comissão que tiver aplicado o procedimento confidencial, podem requerer a apreciação de um caso de violação do sigilo. Este pedido pode ser inscrito na ordem do dia da reunião seguinte da comissão. A comissão pode decidir, por maioria dos seus membros, apresentar a questão ao Presidente para apreciação mais circunstanciada, nos termos dos artigos 11.º e 166.º.'
},
{
'id': 211,
'title': 'Artigo 211.º : Audições públicas relativas a iniciativas de cidadania',
'text': "1.   Quando a Comissão tiver publicado uma iniciativa de cidadania no registo relevante, nos termos do artigo 10.º, n.º 1, alínea a), do Regulamento (UE) n.º 211/2011 do Parlamento Europeu e do  Conselho(1), o Presidente do Parlamento, sob proposta do Presidente da Conferência dos Presidentes das Comissões:\n\r\
\n\r\
(a)   Encarrega a comissão competente quanto à matéria de fundo, nos termos do anexo V do Regimento, de organizar a audição pública prevista no artigo 11.º do Regulamento (UE) n.º 211/2011; a comissão competente para as petições é automaticamente associada, nos termos do artigo 54.º do Regimento;\n\r\
\n\r\
(b)   Pode decidir organizar, caso duas ou mais iniciativas de cidadania publicadas no registo relevante nos termos do artigo 10.º, n.º 1, alínea a), do Regulamento (UE) n.º 211/2011 tenham um objeto similar, e após consultar os organizadores, uma audição pública conjunta em que todas as iniciativas de cidadania envolvidas sejam tratadas em condições de igualdade.\n\r\
\n\r\
2.   A comissão competente quanto à matéria de fundo:\n\r\
\n\r\
(a)   Certifica-se de que a Comissão recebeu os organizadores a um nível adequado, nos termos do artigo 10.º, n.º 1, alínea b), do Regulamento (UE) n.º 211/2011;\n\r\
\n\r\
(b)   Assegura, se necessário com o apoio da Conferência dos Presidentes das Comissões, que a Comissão seja devidamente envolvida na organização da audição pública e esteja representada a um nível adequado na audição.\n\r\
\n\r\
3.   O presidente da comissão competente quanto à matéria de fundo convoca a audição pública para uma data apropriada no prazo de três meses a contar da data de apresentação da iniciativa à Comissão, nos termos do artigo 9.º do Regulamento (UE) n.º 211/2011.\n\r\
\n\r\
4.   A comissão competente quanto à matéria de fundo organiza a audição pública no Parlamento, se adequado, juntamente com as outras instituições e órgãos da União que estejam interessados em participar. A comissão pode convidar outras partes interessadas em participar.\n\r\
\n\r\
A comissão competente quanto à matéria de fundo convida um grupo representativo de organizadores, que deve incluir pelo menos uma das pessoas de contacto referidas no segundo parágrafo do artigo 3.º, n.º 2, do Regulamento (UE) n.º 211/2011, para apresentar a iniciativa na audição.\n\r\
\n\r\
5.   A Mesa aprova, nos termos acordados com a Comissão, as regras relativas ao reembolso dos custos suportados.\n\r\
\n\r\
6.   O Presidente do Parlamento e o Presidente da Conferência dos Presidentes das Comissões podem delegar os seus poderes, nos termos do presente artigo, num vice-presidente e noutro presidente de comissão, respetivamente.\n\r\
\n\r\
7.   Se estiverem preenchidas as condições previstas nos artigos 54.º ou 55.º, essas disposições aplicam-se também, com as necessárias adaptações, a outras comissões. Aplicam-se também os artigos 201.º e 201.º‑A.\n\r\
\n\r\
O artigo 25.º, n.º 9, não se aplica às audições públicas relativas a iniciativas de cidadania.\n\r\
\n\r\
8.   Caso a Comissão não apresente uma proposta de ato jurídico sobre uma iniciativa de cidadania, que lhe tenha sido apresentada com êxito nos termos do artigo 9.º do Regulamento (UE) n.º 211/2011, no prazo de 12 meses após ter emitido o seu parecer favorável sobre a iniciativa e definido, numa comunicação, as medidas que tenciona tomar, a comissão competente quanto à matéria de fundo pode organizar uma audição em consulta com os organizadores da iniciativa de cidadania e, se necessário, pode ativar o procedimento previsto no artigo 46.º do Regimento, para efeitos do exercício do direito do Parlamento de solicitar que a Comissão apresente uma proposta adequada.\n\r\
\n\r\
\n\r\
(1)	Regulamento (UE) n.º 211/2011 do Parlamento Europeu e do  Conselho,  de  16 de  fevereiro  de  2011,  sobre  a  iniciativa  de  cidadania (JO L 65 de 11.3.2011, p. 1)."
},
{
'id': 212,
'title': 'Artigo 212.º : Constituição e funções das delegações interparlamentares(1)',
'text': "1.   Sob proposta da Conferência dos Presidentes, o  Parlamento  constitui  delegações interparlamentares permanentes e determina a natureza e o número dos seus membros em função das suas competências. Os membros das delegações são eleitos no primeiro ou no segundo período de sessões subsequente à reeleição do Parlamento, por um período igual ao da legislatura.\n\r\
\n\r\
2.   A eleição dos membros das delegações realiza-se após a Conferência dos Presidentes ter recebido as respetivas candidaturas, que deverão ser apresentadas pelos grupos políticos e pelos deputados não inscritos. A Conferência dos Presidentes submete ao Parlamento propostas destinadas a assegurar, tanto quanto possível, uma representação equitativa dos Estados-Membros e das diversas tendências políticas. Aplica-se o artigo 199.º, n.ºs 2, 3, 5 e 6.\n\r\
\n\r\
3.   Para a constituição das mesas das delegações aplica-se o procedimento previsto para as comissões permanentes, nos termos do artigo 204.º.\n\r\
\n\r\
4.   As competências gerais das diversas delegações são definidas pelo Parlamento. O Parlamento pode alargar ou reduzir essas competências a qualquer momento.\n\r\
\n\r\
5.   As disposições de execução necessárias para que as delegações possam realizar as suas atividades são aprovadas pela Conferência dos Presidentes, sob proposta da Conferência dos Presidentes das Delegações.\n\r\
\n\r\
6.   O presidente de cada delegação informa periodicamente a comissão competente para os assuntos externos sobre as atividades da delegação.\n\r\
\n\r\
7.   O presidente de uma delegação deve ter a possibilidade de ser ouvido por uma comissão quando um ponto inscrito na ordem do dia disser respeito ao âmbito de competências da delegação. Aplica-se o mesmo, nas reuniões de uma delegação, ao presidente ou ao relator dessa comissão.\n\r\
\n\r\
\n\r\
(1)	As alterações do artigo 212.°, n.ºs 1 e 2, que foram aprovadas em 13 de dezembro de 2016 (P8_TA(2016)0484), só entrarão em vigor para as delegações existentes na abertura da primeira sessão seguinte às eleições para o Parlamento Europeu que deverão realizar-se em 2019. Por conseguinte, não são reproduzidas nesta versão."
},
{
'id': 213,
'title': 'Artigo 213.º : (suprimido)',
'text': ""
},
{
'id': 214,
'title': 'Artigo 214.º : Comissões parlamentares mistas',
'text': "1.   O Parlamento Europeu pode constituir comissões parlamentares mistas com os parlamentos de Estados associados à União ou de Estados com os quais a União tenha iniciado negociações de adesão.\n\r\
\n\r\
Essas comissões podem formular recomendações aos parlamentos interessados. No caso do Parlamento Europeu, essas recomendações são enviadas à comissão competente, que apresenta propostas sobre o seguimento a dar-lhes.\n\r\
\n\r\
2.   As competências gerais das diferentes comissões parlamentares mistas são definidas pelo Parlamento Europeu, em conformidade com os acordos celebrados com os países terceiros em causa.\n\r\
\n\r\
3.   As comissões parlamentares mistas regem-se pelas normas processuais estabelecidas no acordo relevante. Essas normas baseiam-se no princípio de paridade entre a delegação do Parlamento Europeu e a delegação do parlamento homólogo.\n\r\
\n\r\
4.   As comissões parlamentares mistas aprovam o seu próprio regimento e apresentam-no para aprovação da Mesa do Parlamento Europeu e da instância competente do parlamento do país terceiro em causa.\n\r\
\n\r\
5.   A eleição dos membros das delegações do Parlamento Europeu às comissões parlamentares mistas e a constituição das mesas destas delegações regem-se pelo procedimento estabelecido para as delegações interparlamentares.\n\r\
\n\r\
Artigo 214.º-A : Cooperação com a Assembleia Parlamentar do Conselho da Europa\n\r\
\n\r\
1.   Os órgãos do Parlamento, e em particular  as  suas comissões,  cooperam  com  os  seus homólogos da Assembleia Parlamentar do Conselho da Europa em domínios de interesse comum, nomeadamente a fim de melhorar a eficácia dos seus trabalhos e de evitar duplicações de esforços.\n\r\
\n\r\
2.   A Conferência dos Presidentes define as formas dessa cooperação em comum acordo com as autoridades competentes da Assembleia Parlamentar do Conselho da Europa."
},
{
'id': 215,
'title': 'Artigo 215.º : Direito de petição',
'text': "1.   Nos termos do  artigo  227.º  do Tratado sobre o Funcionamento da União Europeia, qualquer cidadão da União Europeia e qualquer pessoa singular ou coletiva com residência ou sede social num Estado-Membro tem o direito de apresentar, a título individual ou em associação com outros cidadãos ou pessoas, petições ao Parlamento Europeu sobre assuntos compreendidos no âmbito das atividades da União Europeia que os afetem diretamente.\n\r\
\n\r\
2.   As petições devem mencionar o nome e o domicílio permanente de cada um dos peticionários.\n\r\
\n\r\
3.   As observações apresentadas ao Parlamento que não se destinem claramente a efeitos de petição não são registadas como tal; em vez disso, são transmitidas imediatamente ao serviço competente para tratamento posterior.\n\r\
\n\r\
4.   Quando uma petição for assinada por várias pessoas singulares ou coletivas, os signatários devem designar um representante e vários suplentes, que serão considerados como os peticionários para efeitos do presente título.\n\r\
\n\r\
Caso não tenham sido designados representantes, o primeiro signatário ou outra pessoa adequada será considerado como peticionário.\n\r\
\n\r\
5.   Os peticionários podem retirar a sua assinatura da petição em qualquer momento.\n\r\
\n\r\
Se todos os peticionários retirarem a sua assinatura, a petição é considerada nula e sem efeito.\n\r\
\n\r\
6.   As petições devem ser redigidas numa das línguas oficiais da União Europeia.\n\r\
\n\r\
As petições redigidas noutras línguas só serão tidas em consideração se o peticionário as tiver feito acompanhar de uma tradução numa língua oficial. Na sua correspondência com o peticionário, o Parlamento utiliza a língua oficial em que a tradução tiver sido redigida.\n\r\
\n\r\
A Mesa pode decidir que as petições e a correspondência com os peticionários possam ser redigidas noutras línguas que, de acordo com o ordenamento constitucional dos Estados-Membros em causa, gozem de estatuto oficial na totalidade ou em parte do seu território.\n\r\
\n\r\
7.   As petições podem ser enviadas por correio ou através do Portal das Petições, que é disponibilizado no sítio web do Parlamento e ajuda o peticionário a formular a sua petição de modo a cumprir o disposto nos n.ºs 1 e 2.\n\r\
\n\r\
8.   Se forem recebidas várias petições sobre um assunto similar, podem ser tratadas em conjunto.\n\r\
\n\r\
9.   As petições que preencherem as condições previstas no n.º 2 são inscritas num registo, por ordem de receção. As petições que não preencherem essas condições são arquivadas, e os seus autores são informados dos motivos para tal.\n\r\
\n\r\
10.   As petições inscritas no registo são enviadas pelo Presidente à comissão competente para as petições, que começa por determinar a admissibilidade da petição nos termos do artigo 227.º do Tratado sobre o Funcionamento da União Europeia.\n\r\
\n\r\
Se a comissão não chegar a consenso sobre a admissibilidade de uma petição, a petição é declarada admissível, a pedido de pelo menos um terço dos seus membros.\n\r\
\n\r\
11.   As  petições  que tiverem sido declaradas não admissíveis pela comissão são arquivadas. O peticionário é informado da decisão e dos motivos para tal. Na medida do possível, podem ser recomendadas vias de recurso alternativas.\n\r\
\n\r\
12.   Após terem sido registadas, as petições tornam-se documentos públicos e o nome do peticionário, de eventuais co-peticionários e de eventuais apoiantes, bem como o conteúdo da petição, podem ser publicados pelo Parlamento por razões de transparência. O peticionário, os co-peticionários e os apoiantes são informados em conformidade.\n\r\
\n\r\
13.   Sem prejuízo do n.º 12, o peticionário, um co-peticionário ou um apoiante podem solicitar a não divulgação do seu nome a fim de proteger o direito à sua vida privada; nesse caso, o Parlamento respeita o seu pedido.\n\r\
\n\r\
Quando, na sequência da queixa do peticionário, não for possível, por razões de anonimato do peticionário, realizar investigações, o peticionário será consultado sobre o seguimento a dar-lhe.\n\r\
\n\r\
14.   A fim de proteger os direitos de terceiros, o Parlamento pode, por iniciativa própria ou a pedido dos terceiros em causa, anonimizar uma petição e/ou outros dados constantes da mesma, se assim o entender.\n\r\
\n\r\
15.   As petições apresentadas ao Parlamento por pessoas singulares ou coletivas que não sejam cidadãos da União Europeia nem tenham a sua residência ou a sua sede social num Estado-Membro são registadas e classificadas separadamente. O Presidente envia todos os meses uma lista dessas petições recebidas no mês anterior, com a indicação do respetivo objeto, à comissão competente para as petições. A comissão pode pedir para tomar conhecimento das petições que considerar oportuno examinar."
},
{
'id': 216,
'title': 'Artigo 216.º : Apreciação das petições',
'text': "1.   As petições admissíveis são apreciadas pela comissão competente em matéria de petições no decurso da sua atividade normal, quer através de debate em reunião ordinária, quer mediante procedimento escrito. Os peticionários poderão ser convidados a participar em reuniões da comissão, se a respetiva petição for sujeita a debate, ou solicitar autorização para estar presentes. O direito ao uso da palavra será concedido aos peticionários à discrição do presidente.\n\r\
\n\r\
2.   Em relação a uma petição admissível, a comissão pode decidir apresentar uma breve proposta de resolução ao Parlamento, desde que a Conferência dos Presidentes das Comissões seja previamente informada e que a Conferência dos Presidentes não formule objeções. Essas propostas de resolução serão incluídas no projeto de ordem do dia de um período de sessões a realizar, o mais tardar, oito semanas após a aprovação dessas propostas de resolução em comissão. As propostas de resolução são submetidas a uma votação única. A Conferência dos Presidentes pode propor a aplicação do artigo 151.º; caso não o faça, as propostas de resolução são postas à votação sem debate.\n\r\
\n\r\
3.   Caso, em relação a uma petição admissível, a comissão pretenda elaborar nos termos do artigo 52.º, n.º 1, um relatório de iniciativa que aborde, em particular, a aplicação ou a interpretação do direito da União ou alterações propostas à legislação existente, a comissão competente quanto à matéria de fundo será associada, nos termos dos artigos 53.º e 54.º. A comissão aceita, sem votação, as sugestões para partes da proposta de resolução recebidas da comissão competente quanto à matéria de fundo, caso essas sugestões versem sobre a aplicação ou a interpretação do direito da União ou sobre alterações da legislação existente. Se a comissão não aceitar essas sugestões, a comissão competente quanto à matéria de fundo pode apresentá-las diretamente no plenário.\n\r\
\n\r\
4.   Os cidadãos podem manifestar ou retirar o seu apoio a uma petição admissível no Portal das Petições. Este portal é disponibilizado no sítio web do Parlamento.\n\r\
\n\r\
5.   A comissão pode solicitar a assistência da Comissão, em particular sob a forma de informações sobre a aplicação ou o respeito do direito da União, ou de informações ou documentos relevantes para a petição. São convidados a participar nas reuniões da comissão representantes da Comissão.\n\r\
\n\r\
6.   A comissão pode requerer que o Presidente transmita o seu parecer ou a sua recomendação à Comissão, ao Conselho ou às autoridades do Estado‑Membro em causa a fim de desencadear uma ação ou de obter uma resposta.\n\r\
\n\r\
7.   A comissão informa anualmente o Parlamento do resultado das suas deliberações e, se adequado, das medidas tomadas pelo Conselho ou pela Comissão sobre as petições que lhes foram enviadas pelo Parlamento.\n\r\
\n\r\
Uma vez concluído o exame de uma petição admissível, o exame é declarado encerrado por decisão da comissão.\n\r\
\n\r\
8.   O peticionário é informado de todas as decisões relevantes tomadas pela comissão e dos seus fundamentos.\n\r\
\n\r\
9.   Uma petição pode ser reaberta por decisão da comissão, se tiverem chegado ao seu conhecimento novos factos pertinentes relacionados com a petição e o peticionário assim o solicitar.\n\r\
\n\r\
10.   Por maioria dos membros que a compõem, a comissão aprova diretrizes para o tratamento das petições, em conformidade com o Regimento.\n\r\
\n\r\
Artigo 216.º-A : Missões de recolha de informações\n\r\
\n\r\
1.   No âmbito da apreciação de petições, do apuramento de factos ou da procura de soluções, a comissão pode organizar missões de informação ao Estado-Membro ou à região visados por petições declaradas admissíveis que já tenham sido objeto de debate em sede de comissão. Em regra geral, as missões de informação abrangem temas suscitados por várias petições. Aplica-se a regulamentação da Mesa relativa às missões das comissões parlamentares na União Europeia.\n\r\
\n\r\
2.   Os deputados eleitos pelo Estado‑Membro de destino não podem integrar a delegação, mas podem ser autorizados a acompanhar ex officio a visita de uma delegação que se desloque em missão de recolha de informações.\n\r\
\n\r\
3.   Após as visitas, os membros oficiais da delegação elaboram um relatório de missão. O chefe da delegação deve coordenar a elaboração do relatório e procurar obter um consenso sobre o respetivo conteúdo entre os membros oficiais da delegação, considerados em pé de igualdade. Na falta de consenso, o relatório da missão deve enunciar as divergências de avaliação.\n\r\
\n\r\
Os deputados que integrem a delegação ex officio não participam na elaboração do relatório.\n\r\
\n\r\
4.   O relatório da missão, incluindo eventuais recomendações, é submetido à apreciação da comissão. Os deputados podem apresentar alterações às recomendações, mas não às partes do relatório atinentes aos factos apurados pela delegação.\n\r\
\n\r\
A comissão vota em primeiro lugar sobre as alterações às recomendações, se as houver, e em seguida sobre o relatório da missão.\n\r\
\n\r\
Caso seja aprovado, o relatório da missão é transmitido ao Presidente, para conhecimento."
},
{
'id': 217,
'title': 'Artigo 217.º : Publicidade das petições',
'text': "1.   As petições inscritas no registo a que se refere o artigo 215.º, n.º 9, bem como as decisões mais importantes relativas ao processo de apreciação das mesmas, são comunicadas em sessão plenária. Estas comunicações constam da ata da sessão.\n\r\
\n\r\
2.   O título e uma síntese do texto das petições inscritas no registo, bem como os pareceres e as decisões mais importantes que acompanham o tratamento dado a cada petição, são disponibilizados ao  público no Portal das Petições, no sítio web do Parlamento."
},
{
'id': 218,
'title': 'Artigo 218.º : Iniciativa de cidadania',
'text': "1.   Se o Parlamento for informado de que a Comissão foi convidada a apresentar uma proposta de ato jurídico ao abrigo do artigo 11.º, n.º 4, do Tratado da União Europeia e nos termos do Regulamento (UE) n.º 211/2011, a comissão competente em matéria de petições verifica se isso é suscetível de influenciar os seus trabalhos e, se for caso disso, informa os peticionários que apresentaram petições sobre questões conexas.\n\r\
\n\r\
2.   As iniciativas de cidadania propostas, registadas nos termos do artigo 4.° do Regulamento (UE) n.º 211/2011, mas que não possam ser apresentadas à Comissão nos termos do artigo 9.º desse regulamento por não terem sido respeitados todos os procedimentos e condições pertinentes previstos, podem ser examinadas pela comissão competente em matéria de petições, caso esta considere adequado dar-lhes seguimento. Aplicam-se, com as necessárias adaptações, os artigos 215.º, 216.º, 216.º-A e 217.º."
},
{
'id': 219,
'title': 'Artigo 219.º : Eleição do Provedor de Justiça',
'text': "1.   No início de cada legislatura ou em caso de morte, de renúncia ou de destituição do Provedor de Justiça, o Presidente lança um convite à apresentação de candidaturas para a nomeação do Provedor de Justiça e fixa o prazo para a sua apresentação. Este convite é publicado no Jornal Oficial da União Europeia.\n\r\
\n\r\
2.   As candidaturas devem ter o apoio de um mínimo de 40 deputados, nacionais de pelo menos dois Estados-Membros.\n\r\
\n\r\
Cada deputado só pode apoiar uma candidatura.\n\r\
\n\r\
As candidaturas devem incluir todos os documentos comprovativos de que os candidatos preenchem as condições previstas no artigo 6.º, n.º 2, da Decisão 94/262/CECA, CE, Euratom do Parlamento  Europeu(1).\n\r\
\n\r\
3.   As candidaturas são transmitidas à comissão competente. A lista completa dos deputados que apoiaram os candidatos é tornada pública em tempo oportuno.\n\r\
\n\r\
4.   A comissão competente pode pedir para ouvir os candidatos. Essas audições são abertas a todos os deputados.\n\r\
\n\r\
5.   A lista alfabética das candidaturas admissíveis é em seguida posta à votação do Parlamento.\n\r\
\n\r\
6.   O Provedor de Justiça é eleito por maioria dos votos expressos.\n\r\
\n\r\
Se nenhum candidato for eleito após as duas primeiras voltas do escrutínio, só podem manter‑se os dois candidatos que tiverem obtido maior número de votos na segunda volta.\n\r\
\n\r\
Em caso de empate nas votações, é nomeado o candidato mais idoso.\n\r\
\n\r\
7.   Antes do início da votação, o Presidente certifica-se de que estão presentes pelo menos metade dos membros que compõem o Parlamento.\n\r\
\n\r\
8.   O Provedor de Justiça mantém-se no exercício das suas funções até à tomada de posse do seu sucessor, exceto em caso de morte ou destituição.\n\r\
\n\r\
\n\r\
(1)	Decisão 94/262/CECA, CE, Euratom do Parlamento  Europeu, de 9 de março de 1994,  relativa  ao  estatuto  e  às  condições  gerais  de  exercício  das  funções  de Provedor de Justiça Europeu (JO L 113 de 4.5.1994, p. 15)."
},
{
'id': 220,
'title': 'Artigo 220.º : Atividades do Provedor de Justiça',
'text': "1.   A comissão competente examina os casos de má administração que lhe tenham sido comunicados pelo Provedor de Justiça nos termos do artigo 3.º, n.ºs 6 e 7, da Decisão 94/262/CECA, CE, Euratom, após o que pode decidir elaborar um relatório nos termos do artigo 52.º do Regimento.\n\r\
\n\r\
A comissão competente examina o relatório apresentado pelo Provedor de Justiça, no fim de cada sessão anual, sobre os resultados dos seus inquéritos, nos termos do artigo 3.º, n.º 8, da Decisão 94/262/CECA, CE, Euratom. A comissão competente pode apresentar uma proposta de resolução ao Parlamento, caso considere que o Parlamento deve tomar posição sobre qualquer aspeto do relatório.\n\r\
\n\r\
2.   O Provedor de Justiça pode também prestar informações à comissão competente, se esta o solicitar, ou ser por ela ouvido por sua própria iniciativa."
},
{
'id': 221,
'title': 'Artigo 221.º : Destituição do Provedor de Justiça',
'text': "1.   Um décimo dos membros que compõem o Parlamento pode requerer a destituição do Provedor de Justiça, caso o titular deixe de preencher os requisitos necessários ao exercício das suas funções ou tenha cometido uma falta grave. Caso um tal pedido de destituição tenha sido aprovado nos dois meses precedentes, só pode ser apresentada uma nova proposta de destituição por um quinto dos membros que compõem o Parlamento.\n\r\
\n\r\
2.   O pedido é transmitido ao Provedor de Justiça e à comissão competente, a qual, se decidir, por maioria dos membros que a compõem, que os motivos invocados têm fundamento, apresenta um relatório ao Parlamento. A seu pedido, o Provedor de Justiça é ouvido antes da votação do relatório. O Parlamento toma a sua decisão, na sequência de um debate, por escrutínio secreto.\n\r\
\n\r\
3.   Antes de proceder à votação, o Presidente certifica-se de que estão presentes pelo menos metade dos membros que compõem o Parlamento.\n\r\
\n\r\
4.   Se a votação for favorável à demissão do Provedor de Justiça e o titular não se demitir, o Presidente, o mais tardar no período de sessões seguinte àquele em que a votação teve lugar, requer que o Tribunal de Justiça declare o Provedor de Justiça demissionário e solicita-lhe que se pronuncie com a maior brevidade possível.\n\r\
\n\r\
A demissão voluntária do Provedor de Justiça interrompe o processo."
},
{
'id': 222,
'title': 'Artigo 222.º : Secretariado do Parlamento',
'text': "1.   O Parlamento é apoiado por um Secretário-Geral nomeado pela Mesa.\n\r\
\n\r\
O Secretário-Geral assume perante a Mesa o compromisso solene de exercer as suas funções conscienciosamente e com total imparcialidade.\n\r\
\n\r\
2.   O Secretário-Geral chefia um Secretariado cuja composição e organização são determinadas pela Mesa.\n\r\
\n\r\
3.   A Mesa estabelece o organigrama do Secretariado do Parlamento e as regras relativas à situação administrativa e pecuniária dos funcionários e outros agentes.\n\r\
\n\r\
O Presidente do Parlamento faz as comunicações necessárias às instituições competentes da União."
},
{
'id': 223,
'title': 'Artigo 223.º : (suprimido)',
'text': "Artigo 223.º-A : Competências relativas aos partidos políticos europeus e às fundações políticas europeias(1)\n\r\
\n\r\
1.   Caso, nos termos do artigo 65.º, n.º 1, do Regulamento Financeiro, o Parlamento decida reservar-se o direito de autorizar a certas despesas, atua através da Mesa.\n\r\
\n\r\
Em conformidade, a Mesa é competente para aprovar decisões nos termos dos artigos 17.º, 18.º, 24.º, 27.º, n.º 3, e 30.º do Regulamento (UE, Euratom) n.º 1141/2014 do Parlamento Europeu e do Conselho(2).\n\r\
\n\r\
As decisões  aprovadas  pela  Mesa  com  base  no  presente  número  são assinadas pelo Presidente em nome da Mesa e notificadas ao requerente ou ao beneficiário nos termos do artigo 297.º do Tratado sobre o Funcionamento da União Europeia. Essas decisões devem indicar os fundamentos em que se baseiam, nos termos do segundo parágrafo do artigo 296.º desse Tratado.\n\r\
\n\r\
A Mesa pode consultar a Conferência dos Presidentes a qualquer momento.\n\r\
\n\r\
2.   A pedido de um quarto dos membros que compõem o Parlamento, e que representem, pelo menos, três grupos políticos, o Parlamento procede à votação da decisão de solicitar à Autoridade para os Partidos Políticos Europeus e as Fundações Políticas Europeias, nos termos do artigo 10.º, n.º 3, do Regulamento (UE, Euratom) n.º 1141/2014, que verifique se um partido político europeu registado ou uma fundação política europeia registada preenchem as condições previstas no artigo 3.º, n.º 1, alínea c), e n.º 2, alínea c), do Regulamento (UE, Euratom) n.º 1141/2014.\n\r\
\n\r\
3.   A pedido de um quarto dos membros que compõem o Parlamento, e que representem, pelo menos, três grupos políticos, o Parlamento procede à votação de uma proposta de decisão fundamentada para formular objeções, nos termos do artigo 10.º, n.º 4, do Regulamento (UE, Euratom) n.º 1141/2014, à decisão da Autoridade para os Partidos Políticos Europeus e as Fundações Políticas Europeias de cancelar o registo de um partido político europeu ou de uma fundação política europeia no prazo de três meses a contar da comunicação dessa decisão.\n\r\
\n\r\
A comissão competente apresenta uma proposta de decisão fundamentada. Caso a proposta seja rejeitada, a decisão contrária é considerada aprovada.\n\r\
\n\r\
4.   Com base numa proposta da comissão competente, a Conferência dos Presidentes nomeia dois membros do comité de personalidades eminentes independentes, nos termos do artigo 11.º, n.º 1, do Regulamento (UE, Euratom) n.º 1141/2014.\n\r\
\n\r\
\n\r\
(1)	O artigo 223.º-A do Regimento aplica-se apenas aos partidos políticos europeus e às fundações políticas europeias, na aceção do artigo 2.º, n.ºs 3 e 4, do Regulamento (UE, Euratom) n.º 1141/2014. Ver também as notas de rodapé dos artigos 224.º e 225.º do Regimento.\n\r\
(2)	Regulamento (UE, Euratom) n.º 1141/2014 do Parlamento Europeu e do Conselho, de 22 de outubro de 2014, relativo ao estatuto e ao financiamento dos partidos políticos europeus e das fundações políticas europeias (JO L 317 de 4.11.2014, p. 1)."
},
{
'id': 224,
'title': 'Artigo 224.º : Competências da Mesa (suprimido)(1)',
'text': "1.   A Mesa decide sobre os pedidos de financiamento apresentados pelos partidos políticos a nível europeu e sobre a repartição das dotações pelos partidos políticos beneficiários. A Mesa aprovará uma lista dos beneficiários e dos montantes concedidos.\n\r\
\n\r\
2.   A Mesa deliberará sobre a eventual suspensão ou redução dos financiamentos e sobre a eventual recuperação de verbas indevidamente recebidas.\n\r\
\n\r\
3.   Após o fim do exercício financeiro, a Mesa aprovará os relatórios finais de atividades e as demonstrações financeiras definitivas dos partidos políticos beneficiários.\n\r\
\n\r\
4.   Nas condições previstas no Regulamento (CE) n.º 2004/2003 do Parlamento Europeu e do Conselho, a Mesa pode prestar apoio técnico aos partidos políticos a nível europeu, segundo as propostas destes últimos. A Mesa pode delegar no Secretário-Geral certos tipos específicos de decisões para a prestação de apoio técnico.\n\r\
\n\r\
5.   Em todos os casos previstos nos n.°s 1 a 4, a Mesa atua com base numa proposta do Secretário-Geral. Exceto nos casos referidos nos n.ºs 1 e 4, antes de tomar uma decisão, a Mesa ouve os representantes do partido político em questão. A Mesa pode consultar a Conferência dos Presidentes a qualquer momento.\n\r\
\n\r\
6.   Se, após ter procedido a verificação, o Parlamento concluir que um partido político a nível europeu deixou de respeitar os princípios da liberdade, da democracia, do respeito dos direitos humanos, das liberdades fundamentais e do primado do direito, a Mesa determinará a exclusão desse partido político para efeitos de financiamento.\n\r\
\n\r\
\n\r\
(1)	O artigo 224.º do Regimento continuará a aplicar-se aos atos e aos compromissos relativos ao financiamento dos partidos políticos e das fundações políticas a nível europeu durante os exercícios financeiros de 2014, 2015, 2016 e 2017, os quais, nos termos do artigo 40.º do Regulamento (UE, Euratom) n.º 1141/2014, continuam a reger-se pelo Regulamento (CE) n.º 2004/2003 do Parlamento Europeu e do Conselho relativo ao estatuto e ao financiamento dos partidos políticos a nível europeu e pela regulamentação aplicável ao seu financiamento. Ver também as notas de rodapé dos artigos 223.º-A e 225.º do Regimento."
},
{
'id': 225,
'title': 'Artigo 225.º : Competências da comissão competente e da sessão plenária do Parlamento (suprimido)(1)',
'text': "1.   A pedido de um quarto dos membros que compõem o Parlamento, que representem pelo menos três grupos políticos, o Presidente, após ter procedido a uma troca de opiniões em Conferência dos Presidentes, pedirá à comissão competente que verifique se um partido político a nível europeu continua a respeitar, nomeadamente no seu programa e nas suas atividades, os princípios da liberdade, da democracia, do respeito dos direitos humanos, das liberdades fundamentais e do primado do direito.\n\r\
\n\r\
2.   Antes de apresentar uma proposta de decisão ao Parlamento, a comissão competente ouvirá os representantes do partido político em causa, Antes de apresentar uma proposta de decisão ao Parlamento, a comissão competente ouvirá os representantes do partido político em causa, e solicitará e examinará o parecer do comité de personalidades independentes previsto no Regulamento (CE) n.º 2004/2003 do Parlamento Europeu e do Conselho.\n\r\
\n\r\
3.   O Parlamento pronunciar-se-á por maioria dos votos expressos sobre a proposta de decisão pela qual verifica que o partido político em causa respeita os princípios enumerados no n.º 1 ou não os respeita. Não poderão ser apresentadas alterações. Em ambos os casos, se a proposta de decisão não obtiver a maioria, será considerada aprovada a decisão contrária.\n\r\
\n\r\
4.   A decisão do Parlamento produz efeitos a contar do dia em que o pedido referido no n.º 1 tiver sido apresentado.\n\r\
\n\r\
5.   O Presidente representa o Parlamento no comité de personalidades eminentes independentes.\n\r\
\n\r\
6.   A comissão competente elaborará o relatório previsto no Regulamento (CE) n.º 2004/2003 sobre a aplicação desse regulamento e sobre as atividades financiadas, e apresenta-o em sessão plenária.\n\r\
\n\r\
\n\r\
(1)	O artigo 225.º do Regimento continuará a aplicar-se aos partidos políticos e às fundações políticas a nível europeu, na aceção do artigo 2.º do Regulamento (CE) n.º 2004/2003, durante todo o período em que recebam financiamento no âmbito dos exercícios financeiros de 2014, 2015, 2016 e 2017, em aplicação do disposto nesse regulamento. Ver também as notas de rodapé dos artigos 223.º-A e 224.º do Regimento."
},
{
'id': 226,
'title': 'Artigo 226.º : Aplicação do Regimento',
'text': "1.   Em caso de dúvidas quanto à aplicação ou à interpretação do presente Regimento, o Presidente pode decidir enviar a questão à comissão competente para apreciação.\n\r\
\n\r\
Os presidentes das comissões podem agir do mesmo modo se surgirem dúvidas semelhantes durante os trabalhos em comissão, relacionadas com esses trabalhos.\n\r\
\n\r\
2.   A comissão competente decide da necessidade de propor uma alteração ao Regimento. Se for esse o caso, procede nos termos do artigo 227.º.\n\r\
\n\r\
3.   Se a comissão competente decidir que é suficiente uma interpretação do Regimento em vigor, transmite a sua interpretação ao Presidente, que informa do facto o Parlamento no período de sessões seguinte.\n\r\
\n\r\
4.   Se um grupo político ou um número de deputados que atinja pelo menos o limiar baixo se opuserem à interpretação da comissão competente  no  prazo  de  24 horas  a  contar  da  sua comunicação, o assunto é posto à votação no Parlamento. A aprovação do texto exige a maioria dos votos expressos, desde que esteja presente pelo menos um terço dos membros que compõem o Parlamento. Em caso de rejeição, o assunto é devolvido à comissão.\n\r\
\n\r\
5.   As interpretações que não forem objeto de oposição, bem como as que tiverem sido aprovadas pelo Parlamento, são acrescentadas em itálico sob a forma de notas explicativas referentes ao artigo ou artigos em questão.\n\r\
\n\r\
6.   As interpretações constituem precedentes para a aplicação e a interpretação futuras do artigo ou artigos em questão.\n\r\
\n\r\
7.   O Regimento e as interpretações são revistos periodicamente pela comissão competente.\n\r\
\n\r\
8.   Quando o Regimento conferir direitos a um número específico de deputados, esse número é automaticamente substituído pelo número inteiro mais próximo que represente a mesma percentagem de deputados ao Parlamento, caso o número total de deputados seja alterado, nomeadamente na sequência de um alargamento da União Europeia."
},
{
'id': 227,
'title': 'Artigo 227.º : Alteração do Regimento',
'text': '1.   Os deputados podem propor alterações ao Regimento e aos seus anexos, acompanhadas, se for caso disso, de uma breve justificação.\n\r\
\n\r\
A comissão competente examina as propostas de alteração e decide se as apresentará ao Parlamento.\n\r\
\n\r\
Para efeitos da aplicação dos artigos 169.º, 170.º e 174.º ao exame dessas propostas no Parlamento, as referências feitas nesses artigos ao "texto original" ou à proposta de ato juridicamente vinculativo são consideradas como remetendo para a disposição em vigor na data do referido exame.\n\r\
\n\r\
2.   Nos termos do artigo 232.º do Tratado sobre o Funcionamento da União Europeia, as alterações ao Regimento só serão aprovadas se recolherem os votos favoráveis da maioria dos membros que compõem o Parlamento.\n\r\
\n\r\
3.   Salvo especificação em contrário no momento da votação, as alterações ao Regimento e aos seus anexos entram em vigor no primeiro dia do período de sessões subsequente ao da sua aprovação.'
},
{
'id': 228,
'title': 'Artigo 228.º : Símbolos da União',
'text': '1.   O Parlamento reconhece e assume como seus os seguintes símbolos da União:\n\r\
\n\r\
-   a bandeira constituída por um círculo de doze estrelas douradas sobre fundo azul;\n\r\
\n\r\
-   o hino baseado no "Hino à Alegria" da Nona Sinfonia de Ludwig van Beethoven;\n\r\
\n\r\
-   o lema "Unida na diversidade".\n\r\
\n\r\
2.   O Parlamento comemora o Dia da Europa em 9 de maio.\n\r\
\n\r\
3.   A bandeira é hasteada em todos os edifícios do Parlamento e nos atos oficiais. A bandeira estará presente em todas as salas de reunião do Parlamento.\n\r\
\n\r\
4.   O hino é interpretado na abertura das sessões constitutivas e noutras sessões solenes, nomeadamente as que se destinam a dar as boas-vindas a chefes de Estado ou de Governo ou a saudar novos deputados na sequência de um alargamento.\n\r\
\n\r\
5.   O lema é reproduzido nos documentos oficiais do Parlamento.\n\r\
\n\r\
6.   A Mesa aprecia  outras  utilizações  possíveis  dos  símbolos  no  Parlamento.  A  Mesa estabelece as regras de execução para a aplicação do presente artigo.'
},
{
'id': 229,
'title': 'Artigo 229.º : Questões pendentes',
'text': "No final do último período de sessões antes das eleições, todas as questões pendentes no Parlamento são consideradas caducas, sob reserva do disposto no segundo parágrafo.\n\r\
\n\r\
No início de cada legislatura, a Conferência dos Presidentes delibera sobre os pedidos fundamentados das comissões parlamentares e de outras instituições para reiniciar ou prosseguir a apreciação dessas questões pendentes.\n\r\
\n\r\
As presentes disposições não se aplicam às petições nem aos textos que não exijam uma decisão."
},
{
'id': 230,
'title': 'Artigo 230.º : (suprimido)',
'text': ""
},
{
'id': 231,
'title': 'Artigo 231.º : Retificações',
'text': '1.   Se for detetado um erro num texto aprovado pelo Parlamento, o Presidente envia, se necessário, um projeto de retificação à comissão competente.\n\r\
\n\r\
2.   Se for detetado um erro num texto aprovado pelo Parlamento que tenha sido acordado com outras instituições, o Presidente procura obter o acordo dessas instituições quanto às correções necessárias, antes de proceder nos termos do n.º 1.\n\r\
\n\r\
3.   A comissão competente examina o projeto de retificação e apresenta-o ao Parlamento, caso considere que se trata de um erro suscetível de ser corrigido da forma proposta.\n\r\
\n\r\
4.   A retificação é anunciada no período de sessões seguinte. A retificação é considerada aprovada salvo se, no prazo de 24 horas a contar da sua comunicação, um grupo político ou um número de deputados que atinja pelo menos o limiar baixo requererem que seja posta à votação. Se a retificação não for aprovada, é devolvida à comissão competente. A comissão competente pode propor uma retificação alterada ou encerrar o processo.\n\r\
\n\r\
5.   As retificações aprovadas são publicadas da mesma forma que o texto a que se referem. Aplica-se, com as necessárias adaptações, o artigo 78.º.'
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





