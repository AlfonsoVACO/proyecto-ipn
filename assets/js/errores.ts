//import $ from "jquery";
let values = [];
let arraylst = [];
let stylenormal = {};
let styleerror =  {};
let type =  false;
let mailmesage = { "confemail": true };

class Validacion{

	constructor(){}

	getType(){
		let i = 0;
		const operations = new OperationsValidation();

		for (let datoItem of arraylst) {
	    	switch( $("#" + datoItem ).get(0).nodeName ){
		    	case "INPUT":{
		    		switch( $("#" + datoItem ).attr("type") ){
				    	case "email": {
				    		values[i] = operations.getIEmail( datoItem, type, mailmesage.confemail );
				    	}break;
				        case "text":{
				        	values[i] = operations.getValueText( datoItem, type );
				        }break;
		    		}
		    	}break;
		    	case "TEXTAREA":{
		    		values[i] = operations.getValueText( datoItem, type );
		    	}break;
		    	case "SELECT":{
		    		values[i] = operations.getValueSelect( datoItem, type );
		    	}break;
		    	default:
		            break;
		    }
	    }
			let desition = values.filter((item)=>{
				return item == false;
			});
			return desition.length > 0 ? false :  true;
	}

}

const errors = (objectConfg: any) =>{
	if( objectConfg != undefined ){
		arraylst = objectConfg.valid != undefined ? objectConfg.valid : [];
		stylenormal = objectConfg.normalstyle != undefined ? objectConfg.normalstyle : {"border":"1px solid #eee"};
		type = objectConfg.errors !== undefined ? objectConfg.errors : false;
		styleerror = objectConfg.errorstyle != undefined ? objectConfg.errorstyle : {"border":"1px solid red"};
		mailmesage = objectConfg.otherconf != undefined ? objectConfg.otherconf : { "confemail": true };

		for (let valoritem of arraylst) {
			$("#" + valoritem ).css( stylenormal );
			if( type ){ $("#err" + valoritem ).hide("slow"); }
			if( mailmesage.confemail ){ $("#err-email-" + valoritem).hide("slow"); }
		}
		let validationes = new Validacion();
		return validationes.getType();
	}
	return false;
};

class OperationsValidation {
	constructor(){}

	getIEmail(datoItem: string, type:boolean, confemail: boolean){
		let valoritem = $("#" + datoItem ).val();
		if( valoritem === ""){
			$("#" + datoItem ).css( styleerror );
			if(type){$("#err" + datoItem).show("slow");}
			return false;
		}
		if( this.getExpresion( valoritem, "c" ) === false){
			$("#" + datoItem ).css( styleerror );
			if(confemail){
				$("#err-email-" + datoItem).show("slow");
			}else{
				if(type){$("#err" + datoItem).show("slow");}
			}
			return false;
		}
		return true;
	}

	getExpresion(texto: string, type: string) {
	    if($.trim(type) === "n"){
	        if(!/^([1-9])*$/.exec(texto)){ return true; }
	        return false;
	    }else if($.trim(type) === "d"){
	        if(!/^[1-9]+([.])?([0-9]+)?$/.exec(texto)){ return true; }
	        return false;
	    }else if($.trim(type) === "c" ){
				if(!/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/.exec(texto)) {return false; }
	        return true;
	    }
	}

	getValueText( item: string, type:boolean ){
		let valoritem = $("#" + item ).val();
		if( valoritem === "" ){
			$("#" + item ).css( styleerror );
			if(type){ $("#err" + item).show( "slow" ); }
			return false;
		}
		return true;
	}

	getValueSelect( item, type ){
		var valoritem = $("#" + item ).val();
		if( valoritem === "" || valoritem === "0" || valoritem === undefined ){
			$("#" + item ).css( styleerror );
			if(type){ $("#err" + item).show( "slow" ); }
			return false;
		}
		return true;
	}

}

var clear = function( arraylst: string[] ){
	for (let itemClear of arraylst){
		switch( $("#" + itemClear ).get(0).nodeName ){
			case "INPUT": $("#" + itemClear ).val(""); break;
			case "SELECT": $("#" + itemClear )[0].selectedIndex = 0; break;
			case "TEXTAREA": $("#" + itemClear ).val(""); break;
		}
	}
};

$(".data-numeric").keypress( function () {
	const operations = new OperationsValidation();
	if(operations.getExpresion ( $(".data-numeric").val() , "n" ) ){
		$(".data-numeric").val("");
	}
});

$(".data-decimal").keypress( function () {
	const operations = new OperationsValidation();
	if(operations.getExpresion ( $(".data-decimal").val() , "n" ) ){
		$(".data-decimal").val("");
	}
});
