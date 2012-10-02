Ext.define('ExtPOD.view.fornitura.Scheda', {
	extend: 'Ext.form.Panel',
	alias : 'widget.Scheda',

	requires: [
		'Ext.ux.GMapPanel'
	],
	
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
	],
	buttons: [
		{
			text   : 'Load test data',
			handler: function() {
				this.up('form').getForm().loadRecord(Ext.create('ExtPOD.model.Fornitura', {
					'cavo'    : 'abe@sencha.com',
					'pod'    : 'mr',
					'codice_cliente': 'Abraham',
					'particella' : 'Via',
					'toponimo': 'Nuova delle Brecce',
					'comune'  : '80147 Napoli',
					'ncivico'  : '38',
					'prov'  : 'NA',
					'valore_tensione'    : 7,
					'potenza'  : 15
				}));
			}
		},
		{
			text   : 'Save',
			handler: function() {
				var form = this.up('form').getForm(),
					s = '';
				
					Ext.iterate(form.getValues(), function(key, value) {
						s += Ext.util.Format.format("{0} = {1}<br />", key, value);
					}, this);
					
					z = 'ARGH!';
					
					z = form.findField("pod").getValue();

					Ext.Msg.alert('Form Values', z);
				
			}
		},

		{
			text   : 'Reset',
			handler: function() {
				this.up('form').getForm().reset();
			}
		},
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
							marker: {title: 'Sede Citelum'}
						}
					}
				});
			}
		}
		}		
	]	
});