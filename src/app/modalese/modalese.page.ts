import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService} from '../api/api.service'
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-modalese',
  templateUrl: './modalese.page.html',
  styleUrls: ['./modalese.page.scss'],
})
export class ModalesePage implements OnInit {
id:any
	x:any=new Date()

  periodo:any
  mas:number=0
  equipos1:any=[]
  regla:any={}
  fut:any
   reglas:any=[]
    pa:any
    cuantas:number=0
  constructor(private nativeStorage: NativeStorage,public alertController: AlertController,private rutaActiva: ActivatedRoute, private api:ApiService,public nave:NavController) { }

  ngOnInit() {
  	
  
  	
  	this.api.listaequipo().subscribe((data:any)=>{
  		
  		this.equipos1=data.teams
  	})
  }
  verificar(){
    var items:any=[]
     this.nativeStorage.keys()
    .then(
      data =>{
        


       items = data 
       var numero=0
 for (var i = items.length - 1; i >= 0; i--) {
         var t = items[i].split('-')
         
         if (t[0]=='r') {
           this.nativeStorage.getItem(items[i])
  .then(
    data => {
      console.log(this.fut)
      console.log(data)
      if (this.fut.id==data.idequipo && this.regla.evento==data.evento) {
         this.presentAlert()
         console.log("esta chocando")

      }
     
    },
    error => console.error(error)
  );
         }
       }



  

   },
      error => console.error(error)
    );
  }
  ionViewWillEnter() {
this.pa=this.rutaActiva.snapshot.paramMap.get("papa")
console.log(this.pa)
var items:any=[]
     this.nativeStorage.keys()
    .then(
      data =>{
        
       items = data 
 for (var i = items.length - 1; i >= 0; i--) {
         var t = items[i].split('-')
         
         if (t[0]=='r') {
           this.nativeStorage.getItem(items[i])
  .then(
    data => {
      
      if (data.meta==this.pa) {
        this.cuantas=this.cuantas+1
      }
      if (this.cuantas>=5) {
          this.nave.navigateForward('')
      }
      console.log(this.cuantas)
    },
    error => console.error(error)
  );
         }
       }


  

   },
      error => console.error(error)
    );






  	var items:any=[]
  	 this.nativeStorage.keys()
	  .then(
	    data =>{
	    	
	     items = data 
	     for (var i = items.length - 1; i >= 0; i--) {
	     	var t = items[i].split('-')
	     	
	     	if (t[0]=='r') {
	     		this.mas++
	     	}
	     }
	     if (this.mas>=1) {
	 	this.id=this.mas+1
	 }else{
	 	this.id=1
	 }
	 },
	    error => console.error(error)
	  );
	 
	  





 
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ya no puede agregar',
      subHeader: 'Evento o Equipo',
      message: 'Ya existente.',
      buttons: ['OK']
    });

    await alert.present();
  }
  guardar(){

  	var o = 'r-'+this.id
  	var x = this.regla
  	x.idequipo=this.fut.id
  	x.nomequipo=this.fut.shortName
  	x.meta=this.rutaActiva.snapshot.paramMap.get("papa")
  	x.miregla=o


  /*var items:any=[]
  	 this.nativeStorage.keys()
	  .then(
	    data =>{
	    	


	     items = data 
	     var numero=0
 for (var i = items.length - 1; i >= 0; i--) {
	     	var t = items[i].split('-')
	     	
	     	if (t[0]=='r') {
	     		this.nativeStorage.getItem(items[i])
  .then(
    data => {
    	
    	if (x.idequipo==data.idequipo && x.evento==data.evento) {
    		 this.presentAlert()
    		 

    	}
    	console.log(data)
    },
    error => console.error(error)
  );
	     	}
	     }



	

	 },
	    error => console.error(error)
	  );

*/













  	this.nativeStorage.setItem(o, x)
  .then(
    () => {
    	this.id=this.id+1
    	
    	this.nave.navigateForward('')
    },
    error => console.error('Error storing item', error)
  );
 
  }

}
