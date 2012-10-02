Ext.define('ExtPOD.view.fornitura.Scheda', {
	extend: 'Ext.form.Panel',
	alias : 'widget.Scheda',

	requires: [
		'Ext.ux.GMapPanel'
	],
	
	title:'Scheda Dettagliata',
	
	style: 'background-color: #fff;',

	iconCls: 'icon-scheda',
	
	fieldDefaults: {
		anchor: '100%',
		labelAlign: 'left',
		allowBlank: false,
		combineErrors: true,
		msgTarget: 'side',
		editable: false
	},	
	
	collapsible: true,
	collapsed: true,

	defaults: {
		padding: '5 5 5 5',
		disabled: false
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
	],
	buttons: [
		{
		iconCls: 'icon-maps',
		itemId: 'maps',
		text: 'Localizza',
		width: 70,
		border: 1,
		style: {
			borderColor: 'gray'
			},				
//		action: 'localize'
		handler: function() {
			var form = this.up('form').getForm(),
			indirizzo = '';
			
			indirizzo = form.findField("ncivico").getValue() + " ";
			indirizzo += form.findField("particella").getValue() + " ";
			indirizzo += form.findField("toponimo").getValue();
			indirizzo += ", 80147 " + form.findField("comune").getValue();

			//Ext.Msg.alert('Form Values', indirizzo);		
		
			if(form.findField("toponimo").getValue()) {
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
							geoCodeAddr: indirizzo,
							marker: {
									title: "POD: " + form.findField("pod").getValue(),
									listeners: {
												click: function(e){
													Ext.Msg.alert('POD', indirizzo);
													}
												}
									}
								}
					}
				});
			}
		}
		}		
	]	
});