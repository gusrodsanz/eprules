angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$state', 'Languages', 'Rules_en', 'Rules_es', 'Rules_de', 'Rules_bg', 'Rules_cs', 'Rules_da', 'Rules_et', 'Rules_el', 'Rules_fr', 'Rules_ga', 'Rules_hr', 'Rules_it', 'Rules_lv', 'Rules_lt', 'Rules_hu', 'Rules_mt', 'Rules_nl', 'Rules_pl', 'Rules_pt', 'Rules_ro', 'Rules_sk', 'Rules_sl', 'Rules_fi', 'Rules_sv', function ($scope, $stateParams, $state, Languages, 
Rules_en, Rules_es, Rules_de, Rules_bg, Rules_cs, Rules_da,
Rules_et, Rules_el, Rules_fr, Rules_ga, Rules_hr, Rules_it, Rules_lv, Rules_lt, Rules_hu, 
Rules_mt, Rules_nl, Rules_pl, Rules_pt, Rules_ro, Rules_sk, Rules_sl, Rules_fi, Rules_sv) {

    var RULE_LIST_SIZE = Rules_en.listRulesLength;
    $scope.activeSelection = 1;
    $scope.activeROPrange = 1;
    
    $scope.listLanguages = Languages.list;
    $scope.listRules = Rules_en.list; 
    console.log('list rules first initialization ok ?' ); 
    
    
    $scope.data = {
        'language': $scope.listLanguages[7].id,
        'isLanguageActive': false,
        'keyword' : '' 
    }
    
    $scope.rule = {
        'id' : $scope.activeSelection,
        'title' : $scope.listRules[1].title,
        'text' : $scope.listRules[1].text
    }
    console.log('$stateParams lang : '+$stateParams.language ); 
  
  

    $scope.loadHome = function () {
        console.log('enter in loadHome()');
        console.log('$stateParams lang : '+$stateParams.language ); 
        // ep version 0.19.4
        if ( $stateParams.languague != ''   ){//|| $stateParams.languague == null ){
            //it comes from search page
            $scope.data.language = $stateParams.language;
            console.log('lang should be set as : '+$stateParams.language );
            $scope.changeLangList(); 
        }
        if ( $stateParams.rule_id > 0  ) { //|| $stateParams.rule_id == null ){
            //it comes from search page
            $scope.activeSelection = $stateParams.rule_id;
            console.log('$stateParams. rule id: '+$stateParams.rule_id ); 
        }    
    }    

    
    $scope.changeROPrange = function (value) {   
        console.log('enter in changeROPrange()');
        $scope.activeSelection = parseInt(value);
        $scope.activeROPrange = parseInt(value);
        console.log('$scope.activeSelection='+$scope.activeSelection);
        console.log('$scope.activeBtn='+$scope.activeBtn); 
    }


    $scope.changeBtn = function (btn) {   
        $scope.activeBtn = btn;
        console.log('$scope.activeSelection=' + $scope.activeSelection);
        console.log('$scope.activeBtn='+ $scope.activeBtn);

        console.log('RULE_LIST_SIZE='+ RULE_LIST_SIZE);

        if ( $scope.activeBtn == 2 && $scope.activeSelection > 1 )  {
            $scope.activeSelection = parseInt( $scope.activeSelection ) - 1;
            $scope.activeROPrange = parseInt( $scope.activeROPrange ) - 1;
            
            $scope.activeBtn = 2; // simply shows actived the btn.
            console.log('$scope.activeSelection - 1 ='+$scope.activeSelection );
        }// show TEXT 100 ( event inside paragrapth )
        else if ( $scope.activeBtn == 3 && $scope.activeSelection < RULE_LIST_SIZE )  {
            $scope.activeSelection =  parseInt( $scope.activeSelection ) + 1 ;
            $scope.activeROPrange =  parseInt( $scope.activeROPrange ) + 1;
             
            $scope.activeBtn = 3; // simply shows actived the btn.
            console.log('$scope.activeSelection ++ ='+$scope.activeSelection );
    
        }else if ( $scope.activeBtn == 4 )  {
            console.log('RULE_LIST_SIZE  =' +  RULE_LIST_SIZE   );
            $scope.activeSelection =  RULE_LIST_SIZE;
            $scope.activeROPrange =  RULE_LIST_SIZE;
            $scope.activeBtn = 4; // simply shows actived the btn.
    
        }else if ( $scope.activeBtn == 1 )  {
            $scope.activeROPrange = 1 ;
            $scope.activeSelection = 1 ;
            $scope.activeBtn = 1; // simply shows actived the btn.
            console.log('$scope.activeSelection + 1 ='+$scope.activeSelection );

        }
    
        console.log('AFTER $scope.activeSelection='+$scope.activeSelection);         
        console.log('AFTER $scope.activeROPrange='+$scope.activeROPrange);
        console.log('AFTER $scope.activeBtn='+$scope.activeBtn);
//console.log('AFTER b='+b);
        
    }
    
    $scope.changeLanguage = function () { 
        console.log(' changeLanguage data.language : ' + $scope.data.language  );    
        $scope.data.isLanguageActive = false; 
        $scope.rule.id = $scope.activeSelection;
        console.log(' changeLanguage 2: assigned rule id : '+$scope.activeSelection   );    

$scope.changeLangList();  
        
        console.log(' changeLanguage 3 id : '+$scope.rule.id   );
        //console.log(' changeLanguage 3 listRules[1] id ? : '+listRules[1].id   );    
        console.log("updateCurrentRuleToShow()   rule id:  "+ $scope.rule.id);
        console.log("updateCurrentRuleToShow()   rule title:  "+ $scope.rule.title);
        console.log("updateCurrentRuleToShow()   rule text:  "+ $scope.rule.text);              

    }   
   
    $scope.showLanguage = function () {  
        $scope.data.isLanguageActive = ! $scope.data.isLanguageActive ;
        console.log(' showlanguage .data.isLanguageActive: ' + $scope.data.isLanguageActive  );    
   }
   
    $scope.changeLangList = function () { 
        $scope.listRules  = Rules_en.list;
        if ($scope.data.language == 'es')  $scope.listRules  = Rules_es.list; 
        else
        if ($scope.data.language == 'en')  $scope.listRules  = Rules_en.list; 
        else
        if ($scope.data.language == 'de')  $scope.listRules  = Rules_de.list; 
         else
        if ($scope.data.language == 'fr')  $scope.listRules  = Rules_fr.list; 
        else
        if ($scope.data.language == 'it')  $scope.listRules  = Rules_it.list; 
         else
        if ($scope.data.language == 'nl')  $scope.listRules  = Rules_nl.list; 
        else
        if ($scope.data.language == 'mt')  $scope.listRules  = Rules_mt.list; 
         else
        if ($scope.data.language == 'bg')  $scope.listRules  = Rules_bg.list; 
        else
        if ($scope.data.language == 'cs')  $scope.listRules  = Rules_cs.list; 
         else
        if ($scope.data.language == 'da')  $scope.listRules  = Rules_da.list; 
        else
        if ($scope.data.language == 'el')  $scope.listRules  = Rules_el.list; 
         else
        if ($scope.data.language == 'et')  $scope.listRules  = Rules_et.list; 
        else
        if ($scope.data.language == 'hr')  $scope.listRules  = Rules_hr.list; 
         else
        if ($scope.data.language == 'lv')  $scope.listRules  = Rules_lv.list; 
        else
        if ($scope.data.language == 'hu')  $scope.listRules  = Rules_hu.list; 
         else
        if ($scope.data.language == 'pl')  $scope.listRules  = Rules_pl.list; 
        else
        if ($scope.data.language == 'pt')  $scope.listRules  = Rules_pt.list; 
         else
        if ($scope.data.language == 'ro')  $scope.listRules  = Rules_ro.list; 
        else
        if ($scope.data.language == 'sk')  $scope.listRules  = Rules_sk.list; 
        else
        if ($scope.data.language == 'sl')  $scope.listRules  = Rules_sl.list; 
        else
        if ($scope.data.language == 'fi')  $scope.listRules  = Rules_fi.list; 
        else
        if ($scope.data.language == 'sv')  $scope.listRules  = Rules_sv.list; 
        
    }   
   
   
}


])
   
.controller('searchRulesCtrl', ['$scope', '$stateParams', '$state', 'Rules_en', 'Rules_es', 'Rules_de', 'Rules_bg', 'Rules_cs', 'Rules_da', 'Rules_et', 'Rules_el', 'Rules_fr', 'Rules_ga', 'Rules_hr', 'Rules_it', 'Rules_lv', 'Rules_lt', 'Rules_hu', 'Rules_mt', 'Rules_nl', 'Rules_pl', 'Rules_pt', 'Rules_ro', 'Rules_sk', 'Rules_sl', 'Rules_fi', 'Rules_sv', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, 
Rules_en, Rules_es, Rules_de, Rules_bg, Rules_cs, Rules_da,
Rules_et, Rules_el, Rules_fr, Rules_ga, Rules_hr, Rules_it, Rules_lv, Rules_lt, Rules_hu, 
Rules_mt, Rules_nl, Rules_pl, Rules_pt, Rules_ro, Rules_sk, Rules_sl, Rules_fi, Rules_sv ) {

    $scope.data = {
        'language': $stateParams.language,
        'isLanguageActive': false,
        'keyword': $stateParams.keyword,
        'rule_id': parseInt($stateParams.rule_id)  //ep version 19.04
    }
    
    $scope.currentList  = Rules_en.list;
    $scope.narrowed_rules = Rules_en.list;
    console.log('i have just set narrow rules to EN');

    $scope.dataRuleInput = {
        search: ''
    }
    
/*    $scope.loadSearch = function () {
        console.log('enter in loadSearch()');
        console.log('$stateParams lang : '+$stateParams.language ); 
        if ( $stateParams.languague != ''   ){//|| $stateParams.languague == null ){
            console.log('lang : '+$stateParams.language );
            $scope.changeLangCurrentList(); 
        }
    }  
    
    
    $scope.changeLangCurrentList = function () { 
        $scope.currentList  = Rules_en.list;
        if ($scope.data.language == 'es')  $scope.currentList  = Rules_es.list; 
        else
        if ($scope.data.language == 'en')  $scope.currentList  = Rules_en.list; 
        else
        if ($scope.data.language == 'de')  $scope.currentList  = Rules_de.list; 
         else
        if ($scope.data.language == 'fr')  $scope.currentList  = Rules_fr.list; 
        else
        if ($scope.data.language == 'it')  $scope.currentList  = Rules_it.list; 
         else
        if ($scope.data.language == 'nl')  $scope.currentList  = Rules_nl.list; 
        else
        if ($scope.data.language == 'mt')  $scope.currentList  = Rules_mt.list; 
         else
        if ($scope.data.language == 'bg')  $scope.currentList  = Rules_bg.list; 
        else
        if ($scope.data.language == 'cs')  $scope.currentList  = Rules_cs.list; 
         else
        if ($scope.data.language == 'da')  $scope.currentList  = Rules_da.list; 
        else
        if ($scope.data.language == 'el')  $scope.currentList  = Rules_el.list; 
         else
        if ($scope.data.language == 'et')  $scope.currentList  = Rules_et.list; 
        else
        if ($scope.data.language == 'hr')  $scope.currentList  = Rules_hr.list; 
         else
        if ($scope.data.language == 'lv')  $scope.currentList  = Rules_lv.list; 
        else
        if ($scope.data.language == 'hu')  $scope.currentList  = Rules_hu.list; 
         else
        if ($scope.data.language == 'pl')  $scope.currentList  = Rules_pl.list; 
        else
        if ($scope.data.language == 'pt')  $scope.currentList  = Rules_pt.list; 
         else
        if ($scope.data.language == 'ro')  $scope.currentList  = Rules_ro.list; 
        else
        if ($scope.data.language == 'sk')  $scope.currentList  = Rules_sk.list; 
        else
        if ($scope.data.language == 'sl')  $scope.currentList  = Rules_sl.list; 
        else
        if ($scope.data.language == 'fi')  $scope.currentList  = Rules_fi.list; 
        else
        if ($scope.data.language == 'sv')  $scope.currentList  = Rules_sv.list; 
        
    }   
*/
    
    $scope.search = function() {
        console.log('enter in search function ');
        var s = $scope.dataRuleInput.search.toLowerCase();
        if (s == ''){
            $scope.changeLangNarrowList();  //$scope.narrowed_rules = Rules_en.list;
            
            return;
        }
        
        $scope.narrowed_rules = $scope.currentList.filter(function( rule ){
            if ( rule.title.toLowerCase().indexOf(s) > -1 || 
                 rule.text.toLowerCase().indexOf(s) > -1 ){
                return true;
            }
            return false;
            
        });
        
    }
    

    $scope.showRuleSelected = function( rule ){
        console.log("showRuleSelected rule id: "+rule.id);
        //console.log("showRuleSelected rule id: "+ $scope.data.rule_id+"  "+rule_id);
        $scope.data.rule_id = parseInt(rule.id);

        console.log("showRuleSelected rule id: "+ $scope.data.rule_id+"  "+rule.id);
        console.log("showRuleSelected lang: "+ $scope.data.lang+"  "+$scope.data.language);        
        
        $state.go('home', $scope.data);
    }
    
    $scope.changeLangNarrowList = function () { 
        console.log("inside changeLangNarrowList ");
        console.log(" lang: "+$scope.data.language);        

        if ($scope.data.language == 'es')  $scope.currentList  = Rules_es.list; 
        else if ($scope.data.language == 'en')  $scope.currentList  = Rules_en.list; 
        else if ($scope.data.language == 'de')  $scope.currentList  = Rules_de.list; 
        else if ($scope.data.language == 'bg')  $scope.currentList  = Rules_bg.list; 
        else if ($scope.data.language == 'cs')  $scope.currentList  = Rules_cs.list; 
        else if ($scope.data.language == 'da')  $scope.currentList  = Rules_da.list; 
        else if ($scope.data.language == 'et')  $scope.currentList  = Rules_et.list; 
        else if ($scope.data.language == 'el')  $scope.currentList  = Rules_el.list; 
        else if ($scope.data.language == 'fr')  $scope.currentList  = Rules_fr.list; 
        else if ($scope.data.language == 'ga')  $scope.currentList  = Rules_ga.list; 
        else if ($scope.data.language == 'hr')  $scope.currentList  = Rules_hr.list; 
        else if ($scope.data.language == 'it')  $scope.currentList  = Rules_it.list; 
        else if ($scope.data.language == 'lv')  $scope.currentList  = Rules_lv.list; 
        else if ($scope.data.language == 'it')  $scope.currentList  = Rules_it.list; 
        else if ($scope.data.language == 'hu')  $scope.currentList  = Rules_hu.list; 
        else if ($scope.data.language == 'mt')  $scope.currentList  = Rules_mt.list; 
        else if ($scope.data.language == 'nl')  $scope.currentList  = Rules_nl.list; 
        else if ($scope.data.language == 'pl')  $scope.currentList  = Rules_pl.list; 
        else if ($scope.data.language == 'pt')  $scope.currentList  = Rules_pt.list; 
        else if ($scope.data.language == 'ro')  $scope.currentList  = Rules_ro.list; 
        else if ($scope.data.language == 'sk')  $scope.currentList  = Rules_sk.list; 
        else if ($scope.data.language == 'sl')  $scope.currentList  = Rules_sl.list; 
        else if ($scope.data.language == 'fi')  $scope.currentList  = Rules_fi.list; 
        else if ($scope.data.language == 'sv')  $scope.currentList  = Rules_sv.list; 
        
        $scope.narrowed_rules =  $scope.currentList;
    }      
    
}])
   
.controller('ePRULESCtrl', ['$scope', '$stateParams', 'UsefulInfo', 'Languages', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, UsefulInfo, Languages) {
    
    //ng-init  changeLangList()
    $scope.info = {
        'id': '',
        'code': '',
        'title' : '',
        'text' : '',
        'lastUpdated' : '',
        'legalNotice' : ''
    }
    var index = 7;
    var lang = $stateParams.language;
    console.log('$stateParams language - '+lang );
    

    $scope.changeLangList = function () { 

        if (lang == 'bg')  index = 0;
        else if (lang == 'es')  index = 1 ;
        else if (lang == 'cs')  index = 2 ;
        else if (lang == 'da')  index = 3 ;
        else if (lang == 'de')  index = 4 ;
        else if (lang == 'et')  index = 5 ;
        else if (lang == 'el')  index = 6 ;
        else if (lang == 'en')  index = 7 ;
        
        else if (lang == 'fr')  index = 8 ;
        else if (lang == 'ga')  index = 9 ;
        else if (lang == 'hr')  index = 10 ;
        else if (lang == 'it')  index = 11 ;
        else if (lang == 'lv')  index = 12 ;
        else if (lang == 'lt')  index = 13 ;
        else if (lang == 'hu')  index = 14 ;
        else if (lang == 'mt')  index = 15 ;
        else if (lang == 'nl')  index = 16 ;
        else if (lang == 'pl')  index = 17 ;
        else if (lang == 'pt')  index = 18 ;
        else if (lang == 'ro')  index = 19 ;
        else if (lang == 'sk')  index = 20 ;
        else if (lang == 'sl')  index = 21 ;
        else if (lang == 'fi')  index = 22 ;
        else if (lang == 'sv')  index = 23 ;

        console.log('index '+ index);

        $scope.info.title  = UsefulInfo.list[ index ].title;
        $scope.info.text  = UsefulInfo.list[ index ].text;
        $scope.info.lastUpdated  = UsefulInfo.list[ index ].lastUpdated;
        $scope.info.legalNotice  = UsefulInfo.list[ index ].legalNotice;
        console.log('title '+ $scope.info.title);
        console.log('text  '+ $scope.info.text );
        console.log('lastUpdated '+ $scope.info.lastUpdated);     
        console.log('legalNotice '+ $scope.info.legalNotice);     
       //$scope.info = UsefulInfo.list[ index ];
       
        
    }  
    
    
}])
 