function ValidaAnexo(){
	
	
	
	if(hAPI.getCardValue("TIPO") == "NADComLaudo"){
		
		var docs = hAPI.listAttachments();
		log.info("[validarAnexo] docs.size:" + docs.size());
		if(docs.size() < 1   ){
			throw "Necessário anexar laudo";
		}
		
		}
	
	
	if(hAPI.getCardValue("TIPO") == "NCL"){
			
			var docs = hAPI.listAttachments();
			log.info("[validarAnexo] docs.size:" + docs.size());
			if(docs.size() < 2   ){
				throw "Necessário anexar laudo e Carta do Medico";
			}
			
			}
	
	
	
	
	
	
		return false;
	
	
	
	
}