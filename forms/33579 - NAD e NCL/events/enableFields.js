function enableFields(form){ 
	
	var sequenceId = getValue("WKNumState");
	
	
	if(sequenceId == "19" && form.getValue ("TIPO") == "NADSemLaudo"){
	
	
		form.setEnabled('RdTrocaImagem', false);
		form.setEnabled('TxtAreaTeorDivergencia', false);
		form.setEnabled('ZoUnidade_C', false);
		form.setEnabled('TxtDataSolic_C', false);
		form.setEnabled('TxtNomePaciente_C', false);
		form.setEnabled('TxtMatricula_C', false);
		form.setEnabled('TxtExameAlteracao_C', false);
		form.setEnabled('TxtDataExame_C', false);
		form.setEnabled('TxtNomeSolicitante_C', false);
		form.setEnabled('RdSetor_C', false);
		form.setEnabled('RdExamejaPossuiLaudo', false);
		
		//form.setEnabled('slcTeorNad1', false);
		
		
	
	}
	if(sequenceId == "19" && form.getValue ("TIPO") == "NCL"){
		
		form.setEnabled('RdExamejaPossuiLaudo', false);
		form.setEnabled('RdLaudoJaFoiVisto', false);
		form.setEnabled('RdNotificante', false);
		form.setEnabled('TxtTelefoneUnidade', false);
		form.setEnabled('TxtNotificanteName', false);
		form.setEnabled('ZoUnidadeBlocoB', false);
		form.setEnabled('TxtMatriculaExame_A', false);
		form.setEnabled('ZoModalidadeExame_A', false);
		form.setEnabled('ZoExame_A', false);
		form.setEnabled('TxtDataExame_A', false);
		form.setEnabled('ZoMedicos_A', false);
		form.setEnabled('TxtNomePaciente_A', false);
		form.setEnabled('TxtObs2', false);

		form.setEnabled('optionsRadios1', false);
		form.setEnabled('optionsRadios2', false);
		form.setEnabled('_optionsRadios3', false);
		form.setEnabled('_optionsRadios4', false);
		form.setEnabled('_optionsRadios5', false);
				
		
		
	}
	if(sequenceId == "19" && form.getValue ("TIPO") == "NADComLaudo"){
		
		form.setEnabled('RdExamejaPossuiLaudo', false);
		form.setEnabled('RdLaudoJaFoiVisto', false);
		form.setEnabled('TxtNotificante', false);
		form.setEnabled('TxtRE', false);
		form.setEnabled('TxtTelefone', false);
		form.setEnabled('ZoUnidade', false);
		form.setEnabled('TxtMatriculaExame', false);
		form.setEnabled('ZoModalidadeExame', false);
		form.setEnabled('ZoExame', false);
		form.setEnabled('TxtDataExame', false);
		form.setEnabled('ZoMedicos', false);
		form.setEnabled('slcTeor', false);
		form.setEnabled('TxtNomePaciente', false);
		
		
		
	}
	if(sequenceId == "18" && form.getValue ("TIPO") == "NCL"){
			
			form.setEnabled('RdExamejaPossuiLaudo', false);
			form.setEnabled('RdLaudoJaFoiVisto', false);
			form.setEnabled('RdNotificante', false);
			form.setEnabled('TxtTelefoneUnidade', false);
			form.setEnabled('TxtNotificanteName', false);
			form.setEnabled('ZoUnidadeBlocoB', false);
			form.setEnabled('TxtMatriculaExame_A', false);
			form.setEnabled('ZoModalidadeExame_A', false);
			form.setEnabled('ZoExame_A', false);
			form.setEnabled('TxtDataExame_A', false);
			form.setEnabled('ZoMedicos_A', false);

			form.setEnabled('TxtResponsavel_Ncl', false);
			form.setEnabled('SlcStatusNcl', false);
			form.setEnabled('ZoMedicos_Ncl', false);
			form.setEnabled('TxtNomePaciente_A', false);
					
			
			
		}
	
	if(sequenceId == "18" && form.getValue ("TIPO") == "NADComLaudo"){
			
			form.setEnabled('RdExamejaPossuiLaudo', false);
			form.setEnabled('RdLaudoJaFoiVisto', false);
			form.setEnabled('TxtNotificante', false);
			form.setEnabled('TxtRE', false);
			form.setEnabled('TxtTelefone', false);
			form.setEnabled('ZoUnidade', false);
			form.setEnabled('TxtMatriculaExame', false);
			form.setEnabled('ZoModalidadeExame', false);
			form.setEnabled('ZoExame', false);
			form.setEnabled('TxtDataExame', false);
			form.setEnabled('ZoMedicos', false);
			form.setEnabled('slcTeor', false);
			
			form.setEnabled('TxtResponsavel_Nad', false);
			form.setEnabled('slcTeorNad', false);
			form.setEnabled('slcTeorNad', false);
			form.setEnabled('ZoMedicos_Nad', false);
			form.setEnabled('TxtMotivoNad', false);
			
			
		}
	
		if(sequenceId == "18" && form.getValue ("TIPO") == "NADSemLaudo"){
		
			
			form.setEnabled('RdTrocaImagem', false);
			form.setEnabled('TxtAreaTeorDivergencia', false);
			form.setEnabled('ZoUnidade_C', false);
			form.setEnabled('TxtDataSolic_C', false);
			form.setEnabled('TxtNomePaciente_C', false);
			form.setEnabled('TxtMatricula_C', false);
			form.setEnabled('TxtExameAlteracao_C', false);
			form.setEnabled('TxtDataExame_C', false);
			form.setEnabled('TxtNomeSolicitante_C', false);
			form.setEnabled('RdSetor_C', false);
			form.setEnabled('RdExamejaPossuiLaudo', false);
			
			form.setEnabled('TxtResponsavel_Nad', false);
			form.setEnabled('slcTeorNad', false);
			form.setEnabled('slcTeorNad', false);
			form.setEnabled('ZoMedicos_Nad', false);
			form.setEnabled('TxtMotivoNad', false);
			
			
		
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
			
		
		
		
		
		
		
		
		
		
	
	
	
	
	
	
	
		
	
	
	
	
	
	
	
	
	
	
	
	
	
}