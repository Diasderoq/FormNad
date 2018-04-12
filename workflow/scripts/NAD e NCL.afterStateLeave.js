function afterStateLeave(sequenceId){
	
		
	var currentUser = getValue("WKUser");
	var proximaAtividade = getValue("WKNextState");
	var Atividadeatual = getValue("WKNumState");
	
	hAPI.setCardValue("TxtResponsavel_Ncl",currentUser);
	hAPI.setCardValue("AtivAtual",Atividadeatual);
    hAPI.setCardValue("AtivDest",proximaAtividade);
   
	
	
	//log.info(disparo_email + "*** verificando se a var recebeu o valor convertido em booleanos")
	//log.warn(disparo_email + "*** verificando se a var recebeu o valor convertido em booleanos")
	
	/*
	let cMedico = hAPI.getCardValue("ZoMedicos");
	let cTipo = hAPI.getCardValue("TIPO");
	let cUnidade = hAPI.getCardValue("ZoUnidade");
	let cExame = hAPI.getCardValue("ZoExame");
	let cMatricula = hAPI.getCardValue("TxtMatriculaExame");
	let dData = hAPI.getCardValue("TxtDataExame");
	let cDivergencia = hAPI.getCardValue("slcTeor");
	let cClassificacao = hAPI.getCardValue("SlcClassificaSolicitacao");
	let cAnalise = hAPI.getCardValue("TxtAnaliseNad");
	
	log.info(disparo_email + "*** Verificando as lets" + cMedico + cTipo+ cUnidade)
	
	
    try{
		//Monta mapa com parâmetros do template
		var parametros = new java.util.HashMap();
		parametros.put("Logo", "logo.png");
		parametros.put("medico", cMedico);
		parametros.put("tipo", cTipo);
		parametros.put("unidade", cUnidade);
		parametros.put("exame", cExame);
		parametros.put("matricula", cMatricula);
		parametros.put("data", dData);
		parametros.put("divergencia", cDivergencia);
		parametros.put("classificacao", cClassificacao);
		parametros.put("analise", cAnalise);
	 
		//Este parâmetro é obrigatório e representa o assunto do e-mail
		parametros.put("subject", "teste");
	 
		//Monta lista de destinatários
		var destinatarios = new java.util.ArrayList();
		destinatarios.add("roberto.oliveira.dias@hotmail.com");
		destinatarios.add("93350");
	 
		//Envia e-mail
		notifier.notify("93350", "tpl_nad_ncl", parametros, destinatarios, "text/html");
	 
	} catch(e){
		log.info(e);
	}
	
    
    */


    
		
	
}