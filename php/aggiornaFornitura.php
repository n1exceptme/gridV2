<?php

	include("connetti.php");

	$info = $_POST['forniture'];

	$data = json_decode(stripslashes($info));

	$POD = $data->POD;
	$Particella = $data->Particella;
	$Indirizzo_fornitura = $data->Indirizzo_fornitura;
	$Ncivico = $data->Ncivico;
	$Comune = $data->Comune;
	$Prov = $data->Prov;
	$SiglaQuadro = $data->SiglaQuadro;
	$Settore = $data->Settore;
	$Dist = $data->Dist;
	$CodiceCliente = $data->CodiceCliente;
	$Tipo_app = $data->Tipo_app;
	$Potenza_disp = $data->Potenza_disp;
	$Tipologia = $data->Tipologia;
	$ValoreTensione = $data->ValoreTensione;
	$Opzione_trasp = $data->Opzione_trasp;
	$Consumi_KWh = $data->Consumi_KWh;
	$Intestatario = $data->Intestatario;
	$Inizio_fornitura = $data->Inizio_fornitura;
	$id = $data->id;

	//consulta sql
	$query = sprintf("UPDATE `anagrafica2` SET 
						POD = '%s', 
						Particella = '%s', 
						Indirizzo_fornitura = '%s', 
						Ncivico = '%s',
						Comune = '%s', 
						Prov = '%s',
						SiglaQuadro = '%s',	
						Settore = '%s', 
						Dist = '%s',
						CodiceCliente = '%s', 
						Tipo_app = '%s', 
						Potenza_disp = '%d', 
						Tipologia = '%s',
						ValoreTensione = '%d', 
						Opzione_trasp = '%s', 
						Consumi_KWh = '%d', 
						Intestatario = '%s', 
						Inizio_fornitura = '%s',
						WHERE id= '$id'",
						mysql_real_escape_string($POD),	
						mysql_real_escape_string($Particella),
						mysql_real_escape_string($Indirizzo_fornitura),
						mysql_real_escape_string($Ncivico),
						mysql_real_escape_string($Comune),
						mysql_real_escape_string($Prov),
						mysql_real_escape_string($SiglaQuadro),
						mysql_real_escape_string($Settore),
						mysql_real_escape_string($Dist),
						mysql_real_escape_string($CodiceCliente),
						mysql_real_escape_string($Tipo_app),
						mysql_real_escape_string($Potenza_disp),
						mysql_real_escape_string($Tipologia),
						mysql_real_escape_string($ValoreTensione),
						mysql_real_escape_string($Opzione_trasp),
						mysql_real_escape_string($Consumi_KWh),
						mysql_real_escape_string($Intestatario),
						mysql_real_escape_string($Inizio_fornitura));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno(),
		"forniture" => array(
			"id" => $id,
			"POD" => $POD,
			"Particella" => $Particella,
			"Indirizzo_fornitura" => $Indirizzo_fornitura,
			"Ncivico" => $Ncivico,
			"Comune" => $Comune,
			"Prov" => $Prov,
			"SiglaQuadro" => $SiglaQuadro,
			"Settore" => $Settore,
			"Dist" => $Dist,
			"CodiceCliente" => $CodiceCliente,
			"Tipo_app" => $Tipo_app,
			"Potenza_disp" => $Potenza_disp,
			"Tipologia" => $Tipologia,
			"ValoreTensione" => $ValoreTensione,
			"Opzione_trasp" => $Opzione_trasp,
			"Consumi_KWh" => $Consumi_KWh,
			"Intestatario" => $Intestatario,
			"Inizio_fornitura" => $Inizio_fornitura
		)
	));
?>