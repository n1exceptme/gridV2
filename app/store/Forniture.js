/*
* Store per l'anagrafica complessiva della fornitura
*/

Ext.define('ExtPOD.store.Forniture', {
    extend: 'Ext.data.Store',
    model: 'ExtPOD.model.Fornitura',
    autoLoad: true,
    pageSize: 20,
    autoLoad: {start: 0, limit: 20},
    
    proxy: {
        type: 'ajax',
        api: {
        	read: 'php/elencaForniture.php',
			// create: 'php/criaContato.php', 
            // update: 'php/atualizaContato.php',
            // destroy: 'php/deletaContato.php'
        },
        reader: {
            type: 'json',
            root: 'forniture',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'forniture'
        }
    }
});