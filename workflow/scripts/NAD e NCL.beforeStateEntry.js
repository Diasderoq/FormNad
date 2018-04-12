function beforeStateEntry(sequenceId){
	
	var cProxAtividadeFim = getValue("WKNextState");
	var cConfirmarEnvioEmailNadCom = hAPI.getCardValue("RdEmailNad");
	var cConfirmarEnvioEmailNcl = hAPI.getCardValue("RdEmailNcl");
	//log.info("cConfirmarEnvioEmailNcl &&&&" + cConfirmarEnvioEmailNcl);
	
	if (cProxAtividadeFim == 23 && (cConfirmarEnvioEmailNadCom == "2" || cConfirmarEnvioEmailNcl == "2")){
		// Resp tarefa Coordenacao Medica
		var cCoordenacaoMedica = getValue("WKUser");

		//Destinatario
		var cMedicoEmailNadCom = hAPI.getCardValue("HddMedicoEmailNcl");
		var cMedicoEmailNcl = hAPI.getCardValue("HddMedicoEmailNadCom");
		//{medico}
		var cMedicoNadCom = hAPI.getCardValue("ZoMedicos");
		var cMedicoNcl = hAPI.getCardValue("ZoMedicos_A");
		//{tipo}
		var cTipo = hAPI.getCardValue("TIPO");
		if(cTipo == "NADComLaudo"){cTipo = "Nad"}
		if(cTipo == "NCL"){cTipo = "Ncl"}
		//{unidade}
		var cUnidadeNadCom = hAPI.getCardValue("ZoUnidade");
		var cUnidadeNcl = hAPI.getCardValue("ZoUnidadeBlocoB");
		//{exame}
		var cExameNadCom = hAPI.getCardValue("ZoExame");
		var cExameNcl= hAPI.getCardValue("ZoExame_A");
		//{matricula}
		var cMatriculaNadCom = hAPI.getCardValue("TxtMatriculaExame");
		var cMatriculaNcl = hAPI.getCardValue("TxtMatriculaExame_A");
		//{data}
		var dDataNadCom = hAPI.getCardValue("TxtDataExame");
		var dDataNcl = hAPI.getCardValue("TxtDataExame_A");
		//{divergencia}
		var cDivergenciaNadCom = hAPI.getCardValue("slcTeor");
		if (cDivergenciaNadCom == "1"){ cDivergenciaNadCom = "Erro no cadastro" }
		if (cDivergenciaNadCom == "2"){ cDivergenciaNadCom = "Falta conclusão / Opinião" }
		if (cDivergenciaNadCom == "3"){ cDivergenciaNadCom = "Falta de assinatura médica" }
		if (cDivergenciaNadCom == "4"){ cDivergenciaNadCom = "Falta de comparativo" }
		if (cDivergenciaNadCom == "5"){ cDivergenciaNadCom = "Falta titulo / titulo inadequado" }
		if (cDivergenciaNadCom == "6"){ cDivergenciaNadCom = "Frases duplicadas" }
		if (cDivergenciaNadCom == "7"){ cDivergenciaNadCom = "Informação de contraste discrepante" }
		if (cDivergenciaNadCom == "8"){ cDivergenciaNadCom = "Lateralidade" }
		if (cDivergenciaNadCom == "9"){ cDivergenciaNadCom = "Mamografia liberada como 80" }
		if (cDivergenciaNadCom == "10"){ cDivergenciaNadCom = "Prostata em paciente feminino" }
		if (cDivergenciaNadCom == "11"){ cDivergenciaNadCom = "Relatorio em branco" }
		if (cDivergenciaNadCom == "12"){ cDivergenciaNadCom = "Titulo diferente do pedido" }
		if (cDivergenciaNadCom == "13"){ cDivergenciaNadCom = "Utero em paciente masculino" }
		if (cDivergenciaNadCom == "0"){ cDivergenciaNadCom = "" }
		//{classificacao}
		var cClassificacaoNadCom = hAPI.getCardValue("SlcClassificaSolicitacao");
		if (cClassificacaoNadCom == "1"){ cClassificacaoNadCom = "Alteração conceitual" }
		if (cClassificacaoNadCom == "2"){ cClassificacaoNadCom = "Alteração de digitação" }
		if (cClassificacaoNadCom == "3"){ cClassificacaoNadCom = "Alteração de expressão" }
		if (cClassificacaoNadCom == "4"){ cClassificacaoNadCom = "Alteração de lateralidade" }
		if (cClassificacaoNadCom == "5"){ cClassificacaoNadCom = "Alteração de mascara" }
		if (cClassificacaoNadCom == "6"){ cClassificacaoNadCom = "Erro da unidade" }
		if (cClassificacaoNadCom == "7"){ cClassificacaoNadCom = "Não procedente" }
		if (cClassificacaoNadCom == "8"){ cClassificacaoNadCom = "Sem Classificação" }
		if (cClassificacaoNadCom == "9"){ cClassificacaoNadCom = "Sem erro" }
		if (cClassificacaoNadCom == "12"){ cClassificacaoNadCom = "Outro" }
		if (cClassificacaoNadCom == "0"){ cClassificacaoNadCom = "" }
		var cClassificacaoNcl = hAPI.getCardValue("SlcClassificaSolicitacaoNcl");
		if (cClassificacaoNcl == "1"){ cClassificacaoNcl = "Alteração conceitual" }
		if (cClassificacaoNcl == "2"){ cClassificacaoNcl = "Alteração de digitação" }
		if (cClassificacaoNcl == "3"){ cClassificacaoNcl = "Alteração de expressão" }
		if (cClassificacaoNcl == "4"){ cClassificacaoNcl = "Alteração de lateralidade" }
		if (cClassificacaoNcl == "5"){ cClassificacaoNcl = "Alteração de mascara" }
		if (cClassificacaoNcl == "6"){ cClassificacaoNcl = "Erro da unidade" }
		if (cClassificacaoNcl == "7"){ cClassificacaoNcl = "Não procedente" }
		if (cClassificacaoNcl == "8"){ cClassificacaoNcl = "Sem Classificação" }
		if (cClassificacaoNcl == "9"){ cClassificacaoNcl = "Sem erro" }
		if (cClassificacaoNcl == "12"){ cClassificacaoNcl = "Outro" }
		if (cClassificacaoNcl == "0"){ cClassificacaoNcl = "" }
		//{analise}
		var cAnaliseNadCom = hAPI.getCardValue("TxtAnaliseNad");
		var cAnaliseNcl = hAPI.getCardValue("TxtAnaliseNcl");
	
	 try{
		 
		 log.info("entrou no try ###");
			//Monta mapa com parâmetros do template
		 	var parametros = new java.util.HashMap();
			parametros.put("Logo", "http://www.fidi.org.br/download/fidi_logo_azul.png");
			parametros.put("medico", cMedicoNadCom + cMedicoNcl);
			parametros.put("tipo", cTipo);
			parametros.put("unidade", cUnidadeNadCom + cUnidadeNcl);
			parametros.put("exame", cExameNadCom + cExameNcl);
			parametros.put("matricula", cMatriculaNadCom + cMatriculaNcl);
			parametros.put("data", dDataNadCom + dDataNcl);
			parametros.put("divergencia", cDivergenciaNadCom );
			parametros.put("classificacao", cClassificacaoNadCom + cClassificacaoNcl);
			parametros.put("analise", cAnaliseNadCom + cAnaliseNcl);
			parametros.put("SERVER_URL", "http://172.18.200.22:8090");
		 
			//Este parâmetro é obrigatório e representa o assunto do e-mail
			parametros.put("subject", "Não-conformidade de laudo - FIDI");
		 
			//Monta lista de destinatários
			var destinatarios = new java.util.ArrayList();
			destinatarios.add("roberto.oliveira.dias@hotmail.com");
			//destinatarios.add(cMedicoEmailNadCom);
			//destinatarios.add(cMedicoEmailNcl);
			//destinatarios.add("94373");
			//destinatarios.add("93350");
			//destinatarios.add(cCoordenacaoMedica);

		 
			//Envia e-mail
			notifier.notify("admin", "tpl_nad_ncl", parametros, destinatarios, "text/html");
		 
		} catch(e){
			log.info(e);
		}
		
	}
	
}