Ext.define('ExtPOD.view.fornitura.Scheda', {
	extend: 'Ext.form.Panel',
	alias : 'widget.Scheda',
	
    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },

	collapsible: true,
	bodyPadding: 5,
	
	flex: 1,
	title:'Scheda Dettagliata',
	defaults: {
		width: 240,
		labelWidth: 90,
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
			fieldLabel: 'N° Civico'
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
			fieldLabel: 'Modalità<br>lettura'
		},    
		{
			xtype: 'textfield',
			name : 'accensione',
			fieldLabel: 'Modalità<br>accensione'
		},
		{
			xtype: 'numberfield',
			name : 'valore_tensione',
			fieldLabel: 'Valore Tensione'
		},  					
		{
			xtype: 'textfield',
			name : 'consegna',
			fieldLabel: 'Modalità<br>consegna'
		},    
		{
			xtype: 'textfield',
			name : 'contatore_elettrico',
			fieldLabel: 'Contatore Elettrico'
		},    
		{
			xtype: 'textfield',
			name : 'note',
			fieldLabel: 'Note'
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