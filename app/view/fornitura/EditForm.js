Ext.define('ExtPOD.view.fornitura.EditForm', {
    extend: 'Ext.window.Window',
    alias : 'widget.EditForm',

    requires: ['Ext.form.Panel','Ext.form.field.Text'],

    title : 'Editare/Creare Fornitura',
    layout: 'fit',
    autoShow: true,
    width: 280,
    
    iconCls: 'icon-user',

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
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
                        name : 'POD',
                        fieldLabel: 'POD'
                    },
                    {
                        xtype: 'textfield',
                        name : 'Particella',
                        fieldLabel: 'Particella'
                    },
                    {
                        xtype: 'textfield',
                        name : 'Indirizzo_fornitura',
                        fieldLabel: 'Indirizzo_fornitura'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'Ncivico',
                        fieldLabel: 'Ncivico'
                    },
                    {
                        xtype: 'textfield',
                        name : 'Comune',
                        fieldLabel: 'Comune'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'Prov',
                        fieldLabel: 'Prov'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'SiglaQuadro',
                        fieldLabel: 'SiglaQuadro'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'Settore',
                        fieldLabel: 'Settore'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'Dist',
                        fieldLabel: 'Dist'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'CodiceCliente',
                        fieldLabel: 'CodiceCliente'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'Tipo_app',
                        fieldLabel: 'Tipo_app'
                    },    
                    {
                        xtype: 'numberfield',
                        name : 'Potenza_disp',
                        fieldLabel: 'Potenza_disp'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'Tipologia',
                        fieldLabel: 'Tipologia'
                    },    
                    {
                        xtype: 'numberfield',
                        name : 'ValoreTensione',
                        fieldLabel: 'ValoreTensione'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'Opzione_trasp',
                        fieldLabel: 'Opzione_trasp'
                    },    
                    {
                        xtype: 'numberfield',
                        name : 'Consumi_KWh',
                        fieldLabel: 'Consumi_KWh'
                    },    
                    {
                        xtype: 'textfield',
                        name : 'Intestatario',
                        fieldLabel: 'Intestatario'
                    },    
                    {
                        xtype: 'datefield',
                        name : 'Inizio_fornitura',
                        fieldLabel: 'Inizio_fornitura'
                    }
                ]
            }
        ];
        
        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'bottom',
            id:'buttons',
            ui: 'footer',
            items: ['->', {
                iconCls: 'icon-save',
                text: 'Salva',
                action: 'save'
            },{
                iconCls: 'icon-reset',
                text: 'Annulla',
                scope: this,
                handler: this.close
            }]
        }];

        this.callParent(arguments);
    }
});
