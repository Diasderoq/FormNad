function displayFields(form,customHTML){

	var sequenceId = getValue("WKNumState");
	var user = getValue("WKUser");
	var radio = form.getChildrenIndexes("RdNotificante");
	
	
	
	if(user == '4508' || user == '4506' || user == '4504' || user == '4510' || user == '4512' || user == '4514' 
		
			|| user == '91736' 
			|| user == '94449' 
			|| user == '94569'
			|| user == '91371'
			|| user == '93063'
			|| user == '93380'
			|| user == '91822'
			|| user == '91533'
			|| user == '92743'
			|| user == '91924'
			|| user == '94111'
			|| user == '028.708.056-08'
			|| user == '91182'
			|| user == '91328'
			|| user == '91732'
			|| user == '91839'
			|| user == '91335'
			|| user == '94271'
			|| user == '91736'
			|| user == '94270'
			|| user == '94180'
			|| user == '91474'
			|| user == '873.993.931-68'
			|| user == '91363'
			|| user == '91838'
			|| user == '91923'
			|| user == '9445'
			|| user == '94411'
			|| user == '94441'
			|| user == '94446'
			|| user == '94449'
			|| user == '91180'
			|| user == '91381'
			|| user == '91894'
			|| user == '91906'
			|| user == '91904'
			|| user == '91892'
			|| user == '93058'
			|| user == '93729'
			|| user == '91932'
			|| user == '91207'
					
	
	){
			
			
		form.setEnabled("optionsRadios5", true);
		
		
	}else {
		form.setEnabled("optionsRadios5", false);
		
	}
	
	if(user == '4628'){
		
		form.setEnabled("optionsRadios3", true);
	}else{
		form.setEnabled("optionsRadios3", false);
		
	}
	
	if(user == '4402'){
		
		form.setEnabled("optionsRadios4", true);
		
	}else{
		
		form.setEnabled("optionsRadios4", false);
		
	}
	
	

	customHTML.append("<script>");
	//customHTML.append("$('#1').hide();");
	customHTML.append("$('#2').hide();");
	customHTML.append("$('#A').hide();");
	customHTML.append("$('#B').hide();");
	customHTML.append("$('#C').hide();");
	
	//Bloco Area Medica
	customHTML.append("$('#D').hide();");
	customHTML.append("$('#E').hide();");
	
	//Bloco Coordenação Medica
	customHTML.append("$('#F').hide();");
	customHTML.append("$('#G').hide();");
	customHTML.append("$('#RgPaciente').hide();");
	customHTML.append("$('#RgNotificante').hide();");
	customHTML.append("$('#CrmMedico').hide();");
	
	
	customHTML.append("</script>");
	
	
	
	
	
	/* INICIO DO WORKFLOW */
	if(sequenceId == '7' &&  form.getValue ("TIPO") == "NADSemLaudo" ){
		customHTML.append("<script>");
		customHTML.append("$('#C').show();");

		customHTML.append("$('#D').hide();");
		customHTML.append("$('#A').hide();");
		customHTML.append("$('#B').hide();");
		customHTML.append("$('#E').hide();");
		customHTML.append("</script>");
	}
	if(sequenceId == '7' &&  form.getValue ("TIPO") == "NCL" ){
		customHTML.append("<script>");
		customHTML.append("$('#B').show();");

		customHTML.append("$('#E').hide();");
		customHTML.append("$('#2').hide();");
		customHTML.append("$('#A').hide();");
		customHTML.append("$('#C').hide();");
		customHTML.append("$('#D').hide();");
		customHTML.append("</script>");
	}
	if(sequenceId == '7' &&  form.getValue ("TIPO") == "NADComLaudo" ){
		customHTML.append("<script>");
		customHTML.append("$('#A').show();");
		
		customHTML.append("$('#D').hide();");
		customHTML.append("$('#2').hide();");
		customHTML.append("$('#B').hide();");
		customHTML.append("$('#C').hide();");
		customHTML.append("$('#E').hide();");
		customHTML.append("</script>");
	}
	
	

	/* ETAPA AREA MEDICA */
	if(sequenceId == "19" && form.getValue ("TIPO") == "NADSemLaudo" ){
		
		customHTML.append("<script>");
		customHTML.append("$('#C').show();");
		customHTML.append("$('#D').show();");
		customHTML.append("$('#A').hide();");
		customHTML.append("$('#B').hide();");
		customHTML.append("$('#E').hide();");
		customHTML.append("</script>");
		
	}
	
	
	if(sequenceId == "19" && form.getValue ("TIPO") == "NCL" ){
		
		customHTML.append("<script>");
		customHTML.append("$('#B').show();");
		customHTML.append("$('#E').show();");
		customHTML.append("$('#2').show();");
		customHTML.append("$('#A').hide();");
		customHTML.append("$('#C').hide();");
		customHTML.append("$('#D').hide();");
		customHTML.append("</script>");
	
		
	}
	
	if(sequenceId == "19" && form.getValue ("TIPO") == "NADComLaudo" ){
			
			customHTML.append("<script>");
			customHTML.append("$('#A').show();");
			customHTML.append("$('#D').show();");
			customHTML.append("$('#2').show();");
			customHTML.append("$('#B').hide();");
			customHTML.append("$('#C').hide();");
			customHTML.append("$('#E').hide();");
			customHTML.append("</script>");
					
			
		}
	

/* FIM DO WORKFLOW */
	if(sequenceId == "18" && form.getValue ("TIPO") == "NADComLaudo" ){
		
		customHTML.append("<script>");
		customHTML.append("$('#A').show();");
		customHTML.append("$('#D').show();");
		customHTML.append("$('#F').show();");
		customHTML.append("$('#2').show();");
		customHTML.append("$('#B').hide();");
		customHTML.append("$('#C').hide();");
		customHTML.append("$('#E').hide();");
		customHTML.append("</script>");
	
	}
	
	if(sequenceId == "18" && form.getValue ("TIPO") == "NCL" ){
			
			customHTML.append("<script>");
			customHTML.append("$('#B').show();");
			customHTML.append("$('#E').show();");
			customHTML.append("$('#G').show();");
			customHTML.append("$('#2').show();");
			
			customHTML.append("$('#A').hide();");
			customHTML.append("$('#C').hide();");
			customHTML.append("$('#D').hide();");
			customHTML.append("</script>");
		
			
	}
	
/* FIM DO WORKFLOW */
	if (sequenceId == '23' && form.getValue("TIPO") == "NADSemLaudo") {
		customHTML.append("<script>");
		customHTML.append("$('#C').show();");
		customHTML.append("$('#D').hide();");
		customHTML.append("$('#A').hide();");
		customHTML.append("$('#B').hide();");
		customHTML.append("$('#E').hide();");
		customHTML.append("</script>");
	}
	if (sequenceId == '23' && form.getValue("TIPO") == "NCL") {
		customHTML.append("<script>");
		customHTML.append("$('#B').show();");
		customHTML.append("$('#E').hide();");
		customHTML.append("$('#2').hide();");
		customHTML.append("$('#A').hide();");
		customHTML.append("$('#C').hide();");
		customHTML.append("$('#D').hide();");
		customHTML.append("</script>");
	}
	if (sequenceId == '23' && form.getValue("TIPO") == "NADComLaudo") {
		customHTML.append("<script>");
		customHTML.append("$('#A').show();");
		customHTML.append("$('#D').hide();");
		customHTML.append("$('#2').hide();");
		customHTML.append("$('#B').hide();");
		customHTML.append("$('#C').hide();");
		customHTML.append("$('#E').hide();");
		customHTML.append("</script>");
	}


	
}