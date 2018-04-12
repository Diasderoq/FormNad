function validateForm(form){
	
	var sequenceId = getValue("WKNumState");
	var proxativ = getValue("WKNextState");
	
	
	
	
	
	
	
	
	if(sequenceId == "7" && form.getValue ("TIPO") == "NADSemLaudo"){	
		
		if (form.getValue ("TxtAreaTeorDivergencia") == "" || form.getValue ("TxtAreaTeorDivergencia") == null){
			throw ("Teor da divergencia* é obrigatorio")
		}
		if (form.getValue ("ZoUnidade_C") == "" || form.getValue ("ZoUnidade_C") == null){
			throw ("Unidade* é obrigatorio")
		}
		
		if (form.getValue ("TxtNomePaciente_C") == "" || form.getValue ("TxtNomePaciente_C") == null){
			throw ("Nome do Paciente* é obrigatorio")
		}
		if (form.getValue ("TxtMatricula_C") == "" || form.getValue ("TxtMatricula_C") == null){
			throw ("Matricula* é obrigatorio")
		}
		if (form.getValue ("TxtExameAlteracao_C") == "" || form.getValue ("TxtExameAlteracao_C") == null){
			throw ("Exame com alteração* é obrigatorio")
		}
		if (form.getValue ("TxtDataExame_C") == "" || form.getValue ("TxtDataExame_C") == null){
			throw ("Data do Exame* é obrigatorio")
		}
		if (form.getValue ("TxtNomeSolicitante_C") == "" || form.getValue ("TxtNomeSolicitante_C") == null){
			throw ("Nome do solicitante* é obrigatorio")
		}
		
		
		
		
		
		
		
		
		
		
	}
		
		if(sequenceId == "7" && form.getValue ("TIPO") == "NCL"){			
			
			
			if (form.getValue ("TxtTelefoneUnidade") == "" || form.getValue ("TxtTelefoneUnidade") == null){
				throw ("Telefone é obrigatorio")
			}
			if (form.getValue ("TxtNotificanteName") == "" || form.getValue ("TxtNotificanteName") == null){
				throw ("Notificante é obrigatorio")
			}
			if (form.getValue ("ZoUnidadeBlocoB") == "" || form.getValue ("ZoUnidadeBlocoB") == null){
				throw ("Unidade é obrigatorio")
			}
			if (form.getValue ("TxtMatriculaExame_A") == "" || form.getValue ("TxtMatriculaExame_A") == null){
				throw ("Matrícula do Exame é obrigatorio")
			}
			if (form.getValue ("ZoModalidadeExame_A") == "" || form.getValue ("ZoModalidadeExame_A") == null){
				throw ("Modalidade do exame é obrigatorio")
			}
			if (form.getValue ("ZoExame_A") == "" || form.getValue ("ZoExame_A") == null){
				throw ("Exame é obrigatorio")
			}
			if (form.getValue ("TxtDataExame_A") == "" || form.getValue ("TxtDataExame_A") == null){
				throw ("Data do Exame é obrigatorio")
			}
			if (form.getValue ("ZoMedicos_A") == "" || form.getValue ("ZoMedicos_A") == null){
				throw ("Médico 1º Laudo é obrigatorio")
			}
			if (form.getValue ("TxtNomePaciente_A") == "" || form.getValue ("TxtNomePaciente_A") == null){
				throw ("Nome do paciente é obrigatorio")
			}
			
			
			
			
			
			
			
			
			
			
		}
		
		
		
		if(sequenceId == "7" && form.getValue ("TIPO") == "NADComLaudo"){
			
			
			if (form.getValue ("TxtNotificante") == "" || form.getValue ("TxtNotificante") == null){
				throw ("Notificante é obrigatorio")
			}
			if (form.getValue ("TxtRE") == "" || form.getValue ("TxtRE") == null){
				throw ("RE é obrigatorio")
			}
			if (form.getValue ("TxtTelefone") == "" || form.getValue ("TxtTelefone") == null){
				throw ("Telefone é obrigatorio")
			}
			if (form.getValue ("ZoUnidade") == "" || form.getValue ("ZoUnidade") == null){
				throw ("Unidade é obrigatorio")
			}
			if (form.getValue ("TxtMatriculaExame") == "" || form.getValue ("TxtMatriculaExame") == null){
				throw ("Matrícula do Exame é obrigatorio")
			}
			if (form.getValue ("ZoModalidadeExame") == "" || form.getValue ("ZoModalidadeExame") == null){
				throw ("Modalidade do exame é obrigatorio")
			}
			if (form.getValue ("ZoExame") == "" || form.getValue ("ZoExame") == null){
				throw ("Exame é obrigatorio")
			}
			if (form.getValue ("TxtDataExame") == "" || form.getValue ("TxtDataExame") == null){
				throw ("Data do Exame é obrigatorio")
			}
			if (form.getValue ("ZoMedicos") == "" || form.getValue ("ZoMedicos") == null){
				throw ("Médico 1º Laudo é obrigatorio")
			}
			if (form.getValue ("TxtNomePaciente") == "" || form.getValue ("TxtNomePaciente") == null){
				throw ("Nome do paciente")
			}
			
			if (form.getValue ("slcTeor") == "" || form.getValue ("slcTeor") == '0'){
				throw ("Teor da divergência é obrigatorio")
			
					
			
		}
		
			
		}
			
			
			
			
			
			
			
			
			
			
			
			
			
			if(proxativ == "21" && form.getValue ("TIPO") == "NADComLaudo"){
				
				
				if (form.getValue ("slcTeorNad1") == "" || form.getValue ("slcTeorNad1") == "0"){
					throw ("Status da solicitação NAD é obrigatorio")
				}
				if (form.getValue ("slcTeorNad") == "" || form.getValue ("slcTeorNad") == null){
					throw ("Teor do questionamento é obrigatorio")
				}
				if (form.getValue ("TxtMotivoNad") == "" || form.getValue ("TxtMotivoNad") == null){
					throw ("Motivo é obrigatorio")
				}
							
			
			
			
			}
			
			
			
		
			
			
			
			
			
			
			
			
			
		
		if(sequenceId == "19" &&  form.getValue ("TIPO") == "NADComLaudo" ){
			
			if (form.getValue ("slcTeorNad1") == "" || form.getValue ("slcTeorNad1") == '0'){
				throw ("Status da solicitação NAD é obrigatorio")
			}
			
			if (form.getValue ("slcTeorNad") == "" || form.getValue ("slcTeorNad") == '0'){
				throw ("Teor do questionamento  é obrigatorio")
			}
			
						
			if (form.getValue ("TxtMotivoNad") == "" || form.getValue ("TxtMotivoNad") == null){
			//	throw ("Motivo é obrigatorio")
			}
			
			
			
		}
		
		
		
		if(sequenceId == "18" && form.getValue ("TIPO") == "NCL" ){
			
			
			
			
		}
		
		
		
		
		
		
	}
	
	
	
		
	
	
