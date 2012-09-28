Ext.define('ExtPOD.view.fornitura.Scheda', {
	extend: 'Ext.form.Panel',
	alias : 'widget.Scheda',

	title:'Scheda Dettagliata',
	
	style: 'background-color: #fff;',

	iconCls: 'icon-user',
	
	fieldDefaults: {
		anchor: '100%',
		labelAlign: 'left',
		allowBlank: false,
		combineErrors: true,
		msgTarget: 'side'
	},	
	
	collapsible: true,
	

	defaults: {
		padding: '5 5 5 5',
		disabled: true
	},

	items: [
		{
			xtype: 'textfield',
			name : 'id',
			fieldLabel: 'id',
			hidden:true
		},    
		{
			xtype: 'textfield',
			name : 'cavo',
			fieldLabel: 'Cavo'
		},
		{
			xtype: 'textfield',
			name : 'pod',
			fieldLabel: 'POD'
		},
		{
			xtype: 'textfield',
			name : 'codice_cliente',
			fieldLabel: 'Codice Cliente'
		},					
		{
			xtype: 'textfield',
			name : 'particella',
			fieldLabel: 'Particella'
		},
		{
			xtype: 'textfield',
			name : 'toponimo',
			fieldLabel: 'Toponimo'
		},    
		{
			xtype: 'textfield',
			name : 'ncivico',
			fieldLabel: 'N. Civico'
		},
		{
			xtype: 'textfield',
			name : 'comune',
			fieldLabel: 'Comune'
		},    
		{
			xtype: 'textfield',
			name : 'prov',
			fieldLabel: 'Prov'
		},    
		{
			xtype: 'textfield',
			name : 'posizione',
			fieldLabel: 'Posizione'
		},    
		{
			xtype: 'textfield',
			name : 'lettura',
			fieldLabel: 'Modalit&agrave<br>lettura'
		},    
		{
			xtype: 'textfield',
			name : 'accensione',
			fieldLabel: 'Modalit&agrave<br>accensione'
		},
		{
			xtype: 'numberfield',
			name : 'valore_tensione',
			fieldLabel: 'Valore Tensione'
		},  					
		{
			xtype: 'textfield',
			name : 'consegna',
			fieldLabel: 'Modalit&agrave<br>consegna'
		},    
		{
			xtype: 'textfield',
			name : 'contatore_elettrico',
			fieldLabel: 'Contatore Elettrico'
		},    
		{
			xtype: 'textfield',
			name : 'note',
			fieldLabel: 'Note',
			height: 100
		},
		{
			xtype: 'numberfield',
			name : 'punti_luce',
			fieldLabel: 'Punti Luce'
		},
		{
			xtype: 'numberfield',
			name : 'potenza',
			fieldLabel: 'Potenza'
		}
	]
});