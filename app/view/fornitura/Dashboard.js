Ext.define('ExtPOD.view.fornitura.Dashboard', {
	extend: 'Ext.form.Panel',
	alias : 'widget.Dashboard',

	requires: [
        'ExtPOD.view.fornitura.FornitureGrid',
		'ExtPOD.view.fornitura.Scheda'
		//'ExtPOD.view.chart.ConsumiBar'
	],

	title: 'Anagrafica POD',
    frame: true,
    bodyPadding: 5,
    //width: 870,
    //height: 720,

    fieldDefaults: {
        labelAlign: 'left',
        msgTarget: 'side'
    },

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    
    items: [
        {
        
        layout: {type: 'border', align: 'stretch'},
        flex: 3,
        border: false,
        bodyStyle: 'background-color: transparent',
        
        items: [
			{
			height: 500,
			region: 'center',
        	xtype: 'FornitureGrid'
			}, 
			{
			region: 'east',
            width: 300,
            margin: '0 0 0 5',
			xtype: 'Scheda'
			}
		]
        },
		{
			split: true,
			margin: '5 0 0 0',
			items: [{ xtype: 'textfield'}]
		}	
	]
});