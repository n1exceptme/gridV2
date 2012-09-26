Ext.define('ExtPOD.view.fornitura.FornitureGrid' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.FornitureGrid',
    
    requires: [
		'Ext.toolbar.Paging'
	],
    
    iconCls: 'icon-grid',

    title : 'Forniture',
    store: 'Forniture',
	
	columns: [
				{
				xtype: 'rownumberer',
				width: 35,
				align: 'left',
				locked: true,
				sortable: false
				},
				{
				text: 'POD', 
				dataIndex: 'pod',   
				width:110, 
				align:'center',
				editor: 'textfield',
				locked: true,
				sortable: true
				},
				{text: 'Cavo', dataIndex: 'cavo',  width:40, align:'center', sortable: true},				
				{text: 'Codice Cliente', dataIndex: 'codice_cliente',  width:80, align:'center', sortable: true},						
				{text: 'Indirizzo di furnitura', 
				 sortable: false,
				 	columns: [
								{text: 'Part.', dataIndex: 'particella',  sortable: true, width: 70}, 
								{text: 'Toponimo', dataIndex: 'toponimo', sortable: true, width:150},
								{text: 'N.', dataIndex: 'ncivico', sortable: false, width:40, align:'center'},
								{text: 'Comune', dataIndex: 'comune', sortable: true, align:'center', width:60, locked: true},
								{text: 'Prov', dataIndex: 'prov', align:'center', sortable: true, hidden: true, width:35}
					]
				},
				{text: 'Posizione', dataIndex: 'posizione', hidden: true, sortable: true, width:120, align:'center'},
				{text: 'Modalit�<br>di lettura', dataIndex: 'lettura', hidden: true, sortable: true, width:120, align:'center'},
				{text: 'Modalit�<br>accensione', dataIndex: 'accensione', hidden: true, sortable: true, width:120, align:'center'},
				{
				text: 'Valore<br>Tensione', 
				dataIndex: 'valore_tensione', 
				width:60, 
				hidden: true,
				sortable: true,				
				align:'center', 
				//renderer : formatt_numeri_int
				},
				{text: 'Modalit�<br>consegna', dataIndex: 'consegna', hidden: true, sortable: true, width:120, align:'center'},				
				{text: 'Contatore<br>elettrico', dataIndex: 'contatore_elettrico', hidden: true, sortable: true, width:75, align:'center'},
				{text: 'Note', dataIndex: 'note', hidden: true, width:120, align:'center' },
				{text: 'Punti<br>Luce', dataIndex: 'punti_luce',  width:55, align:'center', sortable: true},
				{
				text: 'Potenza<br>(KWh)', 
				dataIndex: 'potenza',  
				type: 'float', 
				width:70, 
				align:'right', 
				sortable: true
				//renderer : formatt_numeri_float
				}				
	],
	
	initComponent: function() {
		this.listeners = [ {
				sortchange: function(){
					var grid = Ext.ComponentQuery.query('FornitureGrid')[0];
					grid.getStore().loadPage(1);
				}
				}];
	
	
		
		this.dockedItems = [
			{
            xtype: 'toolbar',
            items: [
				{
                iconCls: 'icon-save',
                itemId: 'add',
                text: 'Nuova',
                action: 'add'
				},
				{
                iconCls: 'icon-delete',
                text: 'Elimina',
                action: 'delete'
				},'->',
				{
					fieldLabel: 'Ricerca',
					xtype     : 'combo',
					store     : ['POD', 'Codice Cliente', 'Toponimo'],
					anchor    : '100%'
				},				
				{
				xtype: 'textfield',
				id: 'searchfield'
				},
				{
				xtype: 'button',
				text:'Search',
				handler:function(){
					
					var grid = Ext.ComponentQuery.query('FornitureGrid')[0];
					var store = grid.getStore();
					store.clearFilter();
					var searchValue = Ext.getCmp("searchfield").getValue();
					store.load().filter('pod', searchValue);

					}                   

				}     				
				]
			},
			{
			xtype: 'pagingtoolbar',
			dock:'top',
			store: 'Forniture',
			displayInfo: true,
			displayMsg: 'Forniture {0} - {1} de {2}',
			emptyMsg: "Nessuna fornitura trovata."
			}
			];
		
		this.callParent(arguments);
	}
});
/* 
function formatt_numeri_float(val) {
	if (val > 0) {
		return '<span style="color:blue;">' + val.toFixed(2) + '</span>';
	} else if (val <= 0) {
		return '<span style="color:red;">' + val.toFixed(2) + '</span>';
	}
	return val;
};

function formatt_numeri_int(val) {
	if (val > 0) {
		return '<span style="color:blue;">' + val + '</span>';
	} else if (val <= 0) {
		return '<span style="color:red;">' + val + '</span>';
	}
	return val;
}; */