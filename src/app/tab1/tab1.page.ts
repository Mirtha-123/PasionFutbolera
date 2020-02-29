import { Component } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ModalController } from '@ionic/angular';
import {ModalesePageModule} from '../modalese/modalese.module'
import { NavController } from '@ionic/angular';
import { ApiService} from '../api/api.service'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
	id:number=0
	x:any=new Date()
	meta:any={}
  periodo:any
  elementos:any=[]
  constructor(private nativeStorage: NativeStorage,public modalController: ModalController, private api:ApiService, public nave:NavController) {}
  ionViewWillEnter() {
  	//
  	this.api.listaequipo().subscribe((data)=>{
  		console.log(data)
  	})
  	this.elementos=[]
  	var items:any=[]
  	 this.nativeStorage.keys()
	  .then(
	    data =>{
	    	console.log(data)
	     items = data 

	for (var i = items.length - 1; i >= 0; i--) {
		var iu=items[i]
		this.nativeStorage.getItem(items[i])
		  .then(
		    data => {
		    	var o =data
		    	o.papa=iu
		    	this.elementos.push(o)
		    	console.log(data)
		    },
		    error => console.error(error)
		  );
	}



	 },
	    error => console.error(error)
	  );
	

  
  }
  editar(x){
  	
  	var y:any= {
  		dato:x
  	}
  	this.nave.navigateForward(`editarmeta/${y.dato.nombre}`)
  }
  eliminar(){
  	this.nativeStorage.clear()
  }
  agregar(x){
  	console.log(x)
  	var y:any= {
  		dato:x
  	}
  	this.nave.navigateForward(`modalese/${y.dato.nombre}`)
  }
  nuevo(){
  	this.nave.navigateForward('nuevameta')
  }
  misreglas(x){
  	this.nave.navigateForward(`reglasmias/${x.nombre}`)
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalesePageModule
    });
    return await modal.present();
  }
 

}
