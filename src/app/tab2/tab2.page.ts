import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ApiService} from '../api/api.service'
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
id:any
ayuda:any=new Date()
	x:any=new Date()
	meta:any={}
  periodo:any
  partidos:any=[]
  reglasuma:any=[]
  jugados:any=[]
  ganados:any=[]
  goleados:any=[]
  constructor(private nativeStorage: NativeStorage, private api:ApiService) { }

  ngOnInit() {
  	
  	this.api.listadepartidos().subscribe((data:any)=>{
  		console.log(data)

  		this.partidos=data.matches
  		for (var i = this.partidos.length - 1; i >= 0; i--) {
  			if (this.partidos[i].homeTeam.id==102) {
  				
  				console.log(this.partidos[i])
  			}
  			if (this.partidos[i].awayTeam.id==102) {
  				console.log(this.partidos[i])
  			}
  		}
  		//
  		var items:any=[]
  	 this.nativeStorage.keys()
	  .then(
	    data =>{
	    	console.log(data)
	     items = data 
for (var i = items.length - 1; i >= 0; i--) {
	     	var t = items[i].split('-')
	     	
	     	if (t[0]=='r') {
	     		this.nativeStorage.getItem(items[i])
  .then(
    data => {
    	
    	var porjugar:any=0
    	var activacion:any=0
    	var goles:any=0
    	

    	for (var ia = this.partidos.length - 1; ia >= 0; ia--) {
    		var cuentas:any=0
    		if (this.partidos[ia].homeTeam.id==data.idequipo) {
    			switch (data.evento) {
    				case "9":
    					var juguito=0 
    					activacion=activacion+1
    					porjugar=parseFloat(porjugar)+parseFloat(data.monto) 
    					juguito=parseFloat(data.monto) 
    					var h1={
    						ahorrado:juguito,
    						contra:this.partidos[ia].awayTeam.name,
    						fecha:this.partidos[ia].utcDate
    					}
    					this.jugados.push(h1)
    					break;
    				case "8":
    					if (this.partidos[ia].score.winner=='HOME_TEAM') {
    						var gana:any=0
    						activacion=activacion+1
    						porjugar=parseFloat(porjugar)+parseFloat(data.monto) 
    						gana=parseFloat(data.monto) 
    						var h2={
    						ahorrado:gana,
    						contra:this.partidos[ia].awayTeam.name,
    						fecha:this.partidos[ia].utcDate
	    					}
	    					this.ganados.push(h2)
    					}
    					// code...
    					break;
    				case "7":
    					var golesillo:any=0
    					var mimo:any=0
    					golesillo=golesillo+parseFloat(this.partidos[ia].score.fullTime.homeTeam) +parseFloat(this.partidos[ia].score.fullTime.homeTeam)
    					cuentas=cuentas+parseFloat(this.partidos[ia].score.fullTime.homeTeam) 
    					cuentas=cuentas+parseFloat(this.partidos[ia].score.fullTime.homeTeam) 
    					
    					if(this.partidos[ia].score.extraTime.homeTeam!=null){
    						golesillo=golesillo+parseFloat(this.partidos[ia].score.extraTime.homeTeam)
    						cuentas=cuentas+parseFloat(this.partidos[ia].score.extraTime.homeTeam) 
    					}
    					porjugar=parseFloat(porjugar)+(parseFloat(cuentas)*parseFloat(data.monto))
    					mimo=(parseFloat(golesillo)*parseFloat(data.monto))
    					var  xz={
    						ahorrado:mimo,
    						contra:this.partidos[ia].awayTeam.name,
    						fecha:this.partidos[ia].utcDate,
    						goles:golesillo
	    					}
	    					this.goleados.push(xz)
    					break;		
    				
    				default:
    					// code...
    					break;
    			}
    		}
    		if (this.partidos[ia].awayTeam.id==data.idequipo) {
    			switch (data.evento) {
    				case "9":
    				var juguito1=0
    				activacion=activacion+1
    					porjugar=parseFloat(porjugar)+parseFloat(data.monto) 
    					juguito1=parseFloat(data.monto) 
    					var h3={
    						ahorrado:juguito1,
    						contra:this.partidos[ia].homeTeam.name,
    						fecha:this.partidos[ia].utcDate
    					}
    					this.jugados.push(h3)
    					break;
    				case "8":
    					if (this.partidos[ia].score.winner=='AWAY_TEAM') {
    						var gana1:any=0
    						activacion=activacion+1
    						porjugar=parseFloat(porjugar)+parseFloat(data.monto) 
    						gana=parseFloat(data.monto) 
    						var h4={
    						ahorrado:gana,
    						contra:this.partidos[ia].awayTeam.name,
    						fecha:this.partidos[ia].utcDate
	    					}
	    					this.ganados.push(h4)
    					}
    					break;
    				case "7":
						var golesillo1:any=0
						var mimo1:any=0
						mimo1=mimo1+(parseFloat(golesillo)*parseFloat(data.monto))
    					golesillo1=golesillo1+parseFloat(this.partidos[ia].score.fullTime.awayTeam) +parseFloat(this.partidos[ia].score.fullTime.awayTeam)
    					
    					cuentas=cuentas+parseFloat(this.partidos[ia].score.fullTime.awayTeam) 
    					cuentas=cuentas+parseFloat(this.partidos[ia].score.fullTime.awayTeam) 
    					
    					if(this.partidos[ia].score.extraTime.awayTeam!=null){
    						golesillo1=golesillo1+parseFloat(this.partidos[ia].score.extraTime.homeTeam)
    						cuentas=cuentas+parseFloat(this.partidos[ia].score.extraTime.awayTeam) 
    					}
    					mimo1=(parseFloat(golesillo1)*parseFloat(data.monto))
    					porjugar=parseFloat(porjugar)+(parseFloat(cuentas)*parseFloat(data.monto))


    					var  qw={
    						ahorrado:mimo1,
    						contra:this.partidos[ia].homeTeam.name,
    						fecha:this.partidos[ia].utcDate,
    						goles:cuentas
	    					}
	    					this.goleados.push(qw)
    					break;		
    				
    				default:
    					// code...
    					break;
    			}
    		}
    		if (data.evento=='7') {
    			activacion=activacion+cuentas
    		}
    	}

    	var er={
    		jugar:porjugar,
    		regla:data.miregla,
    		activacion:activacion
    	}
    	this.reglasuma.push(er)
    	console.log(this.reglasuma)
    	console.log(this.goleados)
    },
    error => console.error(error)
  );
	     	}
	     }


	 },
	    error => console.error(error)
	  );





  	})
  }
  
  

}
