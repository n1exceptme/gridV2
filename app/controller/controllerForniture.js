Ext.define('ExtPOD.controller.ControllerForniture', {
    extend: 'Ext.app.Controller',

    stores: ['Forniture'],

    models: ['Fornitura'],

    views: ['fornitura.EditForm', 'fornitura.FornitureGrid'],

    refs: [{
            ref: 'fornituraPanel',
            selector: 'panel'
        },{
            ref: 'fornitureGrid',
            selector: 'grid'
        }
    ],

    init: function() {
        this.control({
            'FornitureGrid dataview': {
                itemdblclick: this.modificaFornitura
            },
            'FornitureGrid button[action=add]': {
            	click: this.modificaFornitura
            },
            'FornitureGrid button[action=delete]': {
                click: this.eliminaFornitura
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
    }
});
