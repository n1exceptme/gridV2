var AnagraficaModel;
var FornitureDataStore;
var FornitureColumnModel;
var FornitureListingEditorGrid;

Ext.onReady(function(){

	Ext.QuickTips.init();
	
	//Definiamo il model per l'Anagrafica
	AnagraficaModel = Ext.define('AnagraficaModel', {
		extend: 'Ext.data.Model',
		
		fields: [
					{name: 'POD',type: 'string'},
					{name: 'Particella',type: 'string'},
					{name: 'Indirizzo_fornitura',type: 'string'},
					{name: 'Ncivico',type: 'string'},
					{name: 'Comune',type: 'string'},
					{name: 'Prov',type: 'string'},
					{name: 'SiglaQuadro',type: 'string'},
					{name: 'Settore',type: 'string'},
					{name: 'Dist',type: 'string'},
					{name: 'CodiceCliente',type: 'string'},
					{name: 'Tipo_app',type: 'string'},
					{name: 'Potenza_disp',type: 'float'},
					{name: 'Tipologia',type: 'string'},
					{name: 'ValoreTensione',type: 'int'},
					{name: 'Opzione_trasp',type: 'string'},
					{name: 'Consumi_KWh',type: 'float'},
					{name: 'Intestatario',type: 'string'},
					{name: 'Inizio_fornitura',type: 'date'},    			
				]
	});		

	
	var anaStore = Ext.create('Ext.data.Store', {
	
	model: anaModel,
	
 	storeId: 'anaStore',
		proxy:{ 
    		type: 'rest',
			method: 'POST',
    		url: 'php/rest.php',
    		afterRequest:function( request, success )
    		{
    			console.log( 'request ' + request );
    			console.log( 'success '  + success );
    		}
			
		},
		
		baseParams: { task: "LISTING" },
		
		// Parameter name to send filtering information in
		filterParam: 'POD',

		// The PHP script just use query=<whatever>
		encodeFilters: function(filters) {
			return filters[0].value;
		},
		
        remoteFilter: true,		
		
  		sorters: [{
			 property: 'POD',
			 direction: 'ASC'
		 }],

        autoLoad: false
		
	});


	
});