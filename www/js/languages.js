/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('languages', [])


.service('Languages', [function(){
    
    // var listLanguagesAvailables 
    // ['bg','es','cs','da','de','et','el','en','fr','ga','hr','it','lv','lt','hu','mt','nl','pl','pt','ro','sk','sl','fi','sv'];

    var listLanguages = [
        {
            'id': 'bg',
            'label': 'български'
        },
        {
            'id': 'es',
            'label': 'español'
        },        
        {
            'id': 'cs',
            'label': 'čeština'
        },
        {
            'id': 'da',
            'label': 'dansk'
        },       
        {
            'id': 'de',
            'label': 'deutsch'
        },        
        {
            'id': 'et',
            'label': 'eesti keel'
        },        
        {
            'id': 'el',
            'label': 'ελληνικά'
        },         
        {
            'id': 'en',
            'label': 'English'
        },
        {
            'id': 'fr',
            'label': 'français'
        },         
        {
            'id': 'ga',
            'label': 'Gaeilge'
        },        
        {
            'id': 'hr',
            'label': 'hrvatski'
        }, 
        {
            'id': 'it',
            'label': 'italiano'
        },         
        {
            'id': 'lv',
            'label': 'latviešu valoda'
        },        
        {
            'id': 'lt',
            'label': 'lietuvių kalba'
        },         
        {
            'id': 'hu',
            'label': 'magyar'
        },         
        {
            'id': 'mt',
            'label': 'malti'
        },        
        {
            'id': 'nl',
            'label': 'nederlands'
        }, 
        {
            'id': 'pl',
            'label': 'polski'
        },         
        {
            'id': 'pt',
            'label': 'português'
        },        
        {
            'id': 'ro',
            'label': 'română'
        }, 
        {
            'id': 'sk',
            'label': 'slovenčina'
        }, 
        {
            'id': 'sl',
            'label': 'slovenščina'
        },         
        {
            'id': 'fi',
            'label': 'suomi'
        },        
        {
            'id': 'sv',
            'label': 'svenska'
        } 

    ];
 
      
     
    return {
        list: listLanguages
        //,ids: listLanguages_ids
        
        // ,listLanguagesAvailables
    }
    
    

}]);


