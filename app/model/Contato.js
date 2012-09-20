Ext.define('ExtMVC.model.Contato', {
    extend: 'Ext.data.Model',
    fields: [
			{name: 'POD',type: 'string'},
			{name: 'Particella',type: 'string'},
			{name: 'Indirizzo_fornitura',type: 'string'},
			{name: 'Ncivico',type: 'string'},
			{name: 'Comune',type: 'string'},
			{name: 'Prov',type: 'string'},
			{name: 'SiglaQuadro',type: 'string'},
			{name: 'Settore',type: 'string'},
			{name: 'Dist',type: 'string'},
			{name: 'CodiceCliente',type: 'string'},
			{name: 'Tipo_app',type: 'string'},
			{name: 'Potenza_disp',type: 'float'},
			{name: 'Tipologia',type: 'string'},
			{name: 'ValoreTensione',type: 'int'},
			{name: 'Opzione_trasp',type: 'string'},
			{name: 'Consumi_KWh',type: 'float'},
			{name: 'Intestatario',type: 'string'},
			{name: 'Inizio_fornitura',type: 'date'}   	
	
	
	]
});