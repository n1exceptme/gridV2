/**
 * The main application viewport, which displays the whole application
 * @extends Ext.Viewport
 */
Ext.define('ExtPOD.view.Viewport', {
    extend: 'Ext.Viewport',    
    layout: 'fit',
    
    requires: [
        'ExtPOD.view.fornitura.Grid',
        'ExtPOD.view.fornitura.EditForm'
    ],
    
    initComponent: function() {
        var me = this;
        
        Ext.apply(me, {
            items: [
                {
                    xtype: 'FornitureGrid'
                }
            ]
        });
                
        me.callParent(arguments);
    }
});