$(document).ready(function() {
	/*
	Bloco de Teste
	*/

	$('#TxtTelefoneUnidade').on('change', function() {
		var cTelefone =  $('#TxtTelefoneUnidade').val();
		console.log("NCL - Telefone - Valor" + cTelefone)
		var cTelefone =  $('#TxtTelefoneUnidade').prop();

		if(cTelefone != ""){
			console.log("Entrou no if")	
		} else{
			console.log("Entrou no else")
		}
	});



	$('#optionsRadios1').on('change', function() {
		if ($('#optionsRadios1').prop("checked",true)){
			$("#HouveTrocadeImagem").val("sim");
		} 
				
	});
	
	$('#optionsRadios2').on('change', function() {
		if ($('#optionsRadios2').prop("checked",true)){
			$("#HouveTrocadeImagem").val("nao");
		} 
				
	});
	
	////////////////////
	
	
	$('#RdSetorAdm_C').on('change', function() {
		if ($('#RdSetorAdm_C').prop("checked",true)){
			$("#SetorH").val("adm");
		} 
				
	});
	
	$('#RdSetorEnf_C').on('change', function() {
		if ($('#RdSetorEnf_C').prop("checked",true)){
			$("#SetorH").val("enf");
		} 
				
	});
	
	$('#RdSetorTec_C').on('change', function() {
		if ($('#RdSetorTec_C').prop("checked",true)){
			$("#SetorH").val("tec");
		} 
				
	});
	
	$('#RdSetorMed_C').on('change', function() {
		if ($('#RdSetorMed_C').prop("checked",true)){
			$("#SetorH").val("med");
		} 
				
	});
	
	
	
	
	$('#RdExamejaPossuiLaudoSim').on('change', function() {
		if ($('#RdExamejaPossuiLaudoSim').prop("checked",true)){
			$("#2").show();
			$("#C").hide();
			$("#A").hide();
			$("#B").hide();
			$("#D").hide();
			$("#E").hide();
			$("#TIPO").val("");
			
		} 
				
	});
	
	//NAD sem Laudo
	$('#RdExamejaPossuiLaudoNao').on('change', function() {
		if ($('#RdExamejaPossuiLaudoNao').prop("checked",true)){
			$("#C").show();
			
			
			$("#2").hide();
			$("#A").hide();
			$("#B").hide();
			$("#E").hide();
			
			$("#RdLaudoJaFoiVistoSim").prop("checked",false);
			$("#RdLaudoJaFoiVistoNao").prop("checked",false);
			
			$("#TIPO").val("NADSemLaudo");
			
			
		} 
				
	});
	
	//NCL
	$('#RdLaudoJaFoiVistoSim').on('change', function() {
		if ($('#RdLaudoJaFoiVistoSim').prop("checked",true)){
			$("#B").show();
			
			$("#A").hide();
			$("#C").hide();
			$("#D").hide();
			
			$("#TIPO").val("NCL");
			
			
		} 
				
	});
	
	
	//NAD Com Laudo
	$('#RdLaudoJaFoiVistoNao').on('change', function() {
		if ($('#RdLaudoJaFoiVistoNao').prop("checked",true)){
			$("#A").show();
			
			
			
			$("#B").hide();
			$("#C").hide();
			$("#E").hide();
			
			$("#TIPO").val("NADComLaudo");
			
			
		} 
				
	});
	
	
	
	$('#optionsRadios1').on('change', function() {
		if ($('#optionsRadios1').prop("checked",true)){
			$("#CrmMedico").show();
			$("#RgNotificante").hide();
			$("#RgPaciente").hide();
			$('#optionsRadios2').prop("checked",false);
			$('#optionsRadios3').prop("checked",false);
			$('#optionsRadios4').prop("checked",false);
			$('#optionsRadios5').prop("checked",false);
			
		} 
				
	});
	
	
	
	$('#optionsRadios2').on('change', function() {
		if ($('#optionsRadios2').prop("checked",true)){
			$("#RgPaciente").show();
			$("#CrmMedico").hide();
			$("#RgNotificante").hide();
			$('#optionsRadios1').prop("checked",false);
			$('#optionsRadios3').prop("checked",false);
			$('#optionsRadios4').prop("checked",false);
			$('#optionsRadios5').prop("checked",false);			
			
		} 
				
	});
	
	
	$('#optionsRadios3').on('change', function() {
		if ($('#optionsRadios3').prop("checked",true)){
			$("#RgNotificante").show();
			$("#CrmMedico").hide();
			$("#RgPaciente").hide();
			$('#optionsRadios2').prop("checked",false);
			$('#optionsRadios1').prop("checked",false);
			$('#optionsRadios4').prop("checked",false);
			$('#optionsRadios5').prop("checked",false);			
			
		} 
				
	});
	
	
	$('#optionsRadios4').on('change', function() {
		if ($('#optionsRadios4').prop("checked",true)){
			$("#RgNotificante").show();
			$("#CrmMedico").hide();
			$("#RgPaciente").hide();
			$('#optionsRadios2').prop("checked",false);
			$('#optionsRadios3').prop("checked",false);
			$('#optionsRadios1').prop("checked",false);
			$('#optionsRadios5').prop("checked",false);
						
		} 
				
	});
	
	$('#optionsRadios5').on('change', function() {
		if ($('#optionsRadios5').prop("checked",true)){
			$("#RgNotificante").hide();
			$("#CrmMedico").hide();
			$("#RgPaciente").hide();
			$('#optionsRadios2').prop("checked",false);
			$('#optionsRadios3').prop("checked",false);
			$('#optionsRadios1').prop("checked",false);
			$('#optionsRadios4').prop("checked",false);
			
			
		} 
				
	});
	
	
	var dataAtual = new Date();
	var txtData = (dataAtual.getDate()<10?"0"+dataAtual.getDate():dataAtual.getDate()) + "/" + ((dataAtual.getMonth()+1)<10?"0"+(dataAtual.getMonth()+1):(dataAtual.getMonth()+1)) + "/" + dataAtual.getFullYear();
	
	var mySimpleCalendar = FLUIGC.calendar('#TxtDataExame',{
		
		maxDate: txtData,
	})
	
	var mySimpleCalendarB = FLUIGC.calendar('#TxtDataExame_A',{
		
		maxDate: txtData,
	})
	
	
	var mySimpleCalendarCC = FLUIGC.calendar('#TxtDataExame_C',{
			
			maxDate: txtData,
			pickTime: true
		}
		
	
	);
	
	
})


function ZoomUnidade() {

	
		window.open(
				"/webdesk/zoom.jsp?datasetId=Unidades&dataFields=Nome,Unidade"
								+ "&resultFields=Nome,Medicos&type=tyunidade&title=tlunidade",
						"zoom",
						"status , scrollbars=no ,width=600, height=350 ,left="
								+ (screen.width - 600) / 2 + ",top="
								+ (screen.height - 350) / 4);
		
}



function Medicos() {
	
	
	window.open(
			"/webdesk/zoom.jsp?datasetId=DataSet_corporerm_medicos&dataFields=NOME, Medico"
								+ "&resultFields=NOME, Medico,EMAIL, Email,&type=tymedico&title=tlmedico",
					"zoom",
					"status , scrollbars=no ,width=600, height=350 ,left="
							+ (screen.width - 600) / 2 + ",top="
							+ (screen.height - 350) / 4);
	
	
	
	
}



function Medicos2() {
	
	
	window.open(
			"/webdesk/zoom.jsp?datasetId=DataSet_corporerm_medicos&dataFields=NOME, Medico"
								+ "&resultFields=NOME, Medico&type=tymedico2&title=tlmedico2",
					"zoom",
					"status , scrollbars=no ,width=600, height=350 ,left="
							+ (screen.width - 600) / 2 + ",top="
							+ (screen.height - 350) / 4);
	
	
	
	
}




function Exame() {
	
	
	window.open(
			"/webdesk/zoom.jsp?datasetId=DtMedica0001NAD&dataFields=Nome_Exame, Exame, Modalidade_Exame,Modalidade"
								+ "&resultFields=Nome_Exame, Exame, Modalidade_Exame,Modalidade,Subgrupo, Subgrupo&type=tyexame&title=tyexame",
					"zoom",
					"status , scrollbars=no ,width=600, height=350 ,left="
							+ (screen.width - 600) / 2 + ",top="
							+ (screen.height - 350) / 4);
	
	
	
	
}

function setSelectedZoomItem(selectedItem) {

	if(selectedItem.inputId == "ZoExame"){
		$('#' + "ZoModalidadeExame").val(selectedItem["Modld_Sigla"])
		
	}  else{}
	if(selectedItem.inputId == "ZoExame_A"){
		$('#' + "ZoModalidadeExame_A").val(selectedItem["Modld_Sigla"])
		
	} 

	let cMedicoNcl = "ZoMedicos_A";
	let cMedicoNadCom = "ZoMedicos";

	let FIELD = selectedItem.inputId;
	
	if (selectedItem.inputId == cMedicoNcl) {
		let c0 = selectedItem["NOME"]
		let c1 = DatasetFactory.createConstraint("NOME", c0, c0, ConstraintType.MUST);
		let constraints   = new Array(c1)
		var fields = new Array("EMAIL")
		var dataset = DatasetFactory.getDataset("ds_Medico",fields,constraints,null); 
		$('#HddMedicoEmailNcl').val(dataset.values[0].EMAIL)
	
	}

	if (selectedItem.inputId == cMedicoNadCom) {
		let c0 = selectedItem["NOME"]
		let c1 = DatasetFactory.createConstraint("NOME", c0, c0, ConstraintType.MUST);
		let constraints   = new Array(c1)
		var fields = new Array("EMAIL")
		var dataset = DatasetFactory.getDataset("ds_Medico",fields,constraints,null); 
		$('#HddMedicoEmailNadCom').val(dataset.values[0].EMAIL)
	
	}



}

function removedZoomItem(removedItem) {
	if (removedItem.inputId === "ZoExame") {
		$('#' + "ZoModalidadeExame").val("")
	} else{}
	if (removedItem.inputId === "ZoExame_A") {
		$('#' + "ZoModalidadeExame_A").val("")
	}
}

/*

function setSelectedZoomItem(selectedObj) {
	if (selectedObj.type == "tyunidade") {
		$("#ZoUnidade").val(selectedObj.Nome);
		$("#ZoUnidadeBlocoB").val(selectedObj.Nome);
		$("#ZoUnidade_C").val(selectedObj.Nome);
		

	}if (selectedObj.type == "tymedico") {
		$("#ZoMedicos").val(selectedObj.NOME);
		$("#ZoMedicos_A").val(selectedObj.NOME);
		$("#mail").val(selectedObj.EMAIL);
		
		
		

	}if (selectedObj.type == "tymedico2") {
		$("#ZoMedicos_Nad").val(selectedObj.NOME);
		$("#ZoMedicos_Ncl").val(selectedObj.NOME);
		
		
		ZoMedicos_Nad

	}
	if (selectedObj.type == "tyexame") {
		$("#ZoExame").val(selectedObj.Nome_Exame);
		$("#ZoModalidadeExame").val(selectedObj.Modalidade_Exame);
		
		$("#SubCategoriaExame").val(selectedObj.Subgrupo);
		
		$("#ZoExame_A").val(selectedObj.Nome_Exame);
		$("#ZoModalidadeExame_A").val(selectedObj.Modalidade_Exame);
		

	}
	
	
	
	
}*/
