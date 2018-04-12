function afterProcessCreate(processId){
	
	
	 	var dataAtual = new Date();
		var txtData = (dataAtual.getDate()<10?"0"+dataAtual.getDate():dataAtual.getDate()) + "/" + ((dataAtual.getMonth()+1)<10?"0"+(dataAtual.getMonth()+1):(dataAtual.getMonth()+1)) + "/" + dataAtual.getFullYear();
		var txtHora = dataAtual.getHours() + ":" + dataAtual.getMinutes();
		hAPI.setCardValue("TxtDataSolic_C",txtData + " " + txtHora);
	
	
	
	
	
	var currentUser = getValue("WKUser");
	
		
	hAPI.setCardValue("Requerente",currentUser);
	
	var currentUser = getValue("WKUser");
	var proximaAtividade = getValue("WKNextState");
	var Atividadeatual = getValue("WKNumState");
	
	
	
	hAPI.setCardValue("TxtResponsavel_Ncl",currentUser);
	hAPI.setCardValue("AtivAtual",Atividadeatual);
    hAPI.setCardValue("AtivDest",proximaAtividade);
   
	
	
	
}