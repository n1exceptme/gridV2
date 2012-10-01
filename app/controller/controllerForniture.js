Ext.define('ExtPOD.controller.ControllerForniture', {
    extend: 'Ext.app.Controller',

    stores: ['Forniture'],

    models: ['Fornitura'],

    views: [
		'fornitura.EditForm', 
		'fornitura.FornitureGrid', 
		'fornitura.Scheda',
		'chart.ConsumiBar'
		],

    refs: [
		{
            ref: 'fornituraPanel',
            selector: 'panel'
        },
		{
            ref: 'fornitureGrid',
            selector: 'grid'
        }
    ],

    init: function() {
        this.control({
			'ConsumiBar': {
                afterrender: function (chart,o) {
                
                    var series = chart.series.getAt(0);
                    series.listeners = {
                        itemmouseup: function(item) {                            
                           
                            var series = Ext.ComponentQuery.query('ConsumiBar')[0].series.get(0);
                            var index = Ext.Array.indexOf(series.items, item);
                            var selectionModel = Ext.ComponentQuery.query('FornitureGrid')[0].getSelectionModel();
                     
                            var selectedStoreItem = item.storeItem;
                            selectionModel.select(index);
                        }
                    }
                },
                beforerefresh: this.beforerefresh
            },
			
			
            'FornitureGrid dataview': {
                itemdblclick: this.modificaFornitura
            },
            'FornitureGrid button[action=add]': {
            	click: this.modificaFornitura
            },
            'FornitureGrid button[action=edit]': {
            	click: this.modificaFornitura
            },			
            'FornitureGrid button[action=delete]': {
                click: this.eliminaFornitura
            },
            'FornitureGrid button[action=localize]': {
                click: this.localizzaFornitura
            },			
            'EditForm button[action=save]': {
                click: this.aggiornaFornitura
            }
        });
    },

    modificaFornitura: function(grid, record) {
        var edit = Ext.create('ExtPOD.view.fornitura.EditForm').show();
        
        if(record){
        	edit.down('form').loadRecord(record);
        }
    },
    
    aggiornaFornitura: function(button) {
        var win    = button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        var nuovo = false;
        
		if (values.id > 0){
			record.set(values);
		} else{
			record = Ext.create('ExtPOD.model.Fornitura');
			record.set(values);
			this.getFornitureStore().add(record);
            nuovo = true;
		}
        
		win.close();
        this.getFornitureStore().sync();

        if (nuovo){ //faz reload para atualziar
            this.getFornitureStore().load();
        }
    },
    
    eliminaFornitura: function(button) {
    	
    	var grid = this.getFornitureGrid(),
    	record = grid.getSelectionModel().getSelection(), 
        store = this.getFornitureStore();

	    store.remove(record);
	    this.getFornitureStore().sync();

        //faz reload para atualziar
        this.getFornitureStore().load();
    },
	
	localizzaFornitura: function(button) {

		Ext.create('Ext.window.Window', {
                autoShow: true,
                layout: 'fit',
                title: 'Google Maps',
                closeAction: 'hide',
                width:450,
                height:450,
                border: false,
                x: 40,
                y: 60,
                items: {
                    xtype: 'gmappanel',
                    center: {
                        geoCodeAddr: '38 Via Nuova Brecce, 80147 Napoli',
                        marker: {title: 'Sede Citelum'}
                    }
                }
            });
	

    }
});
