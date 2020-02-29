import { Component ,OnInit} from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ModalController } from '@ionic/angular';
import {ModalesePageModule} from '../modalese/modalese.module'
import { NavController } from '@ionic/angular';
import { ApiService} from '../api/api.service'
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-reglasmias',
  templateUrl: './reglasmias.page.html',
  styleUrls: ['./reglasmias.page.scss'],
})
export class ReglasmiasPage implements OnInit {
id:number=0
	x:any=new Date()
	meta:any={}
  periodo:any
  elementos:any=[]
  pa:any
  reglas:any=[]
  constructor(private nativeStorage: NativeStorage,private rutaActiva: ActivatedRoute,public modalController: ModalController, private api:ApiService, public nave:NavController) { }

  ref(){
  	console.log(this.reglas)
  }
  editar(x){
  	console.log(x)
  	this.nave.navigateForward(`editarregla/${x.miregla}`)
  }
  ngOnInit() {
  	this.pa=this.rutaActiva.snapshot.paramMap.get("dame")
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
    	console.log(data.meta)
    	console.log(this.pa)
    	if (data.meta==this.pa) {
    		console.log('entro')
    		this.reglas.push(data)
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
	
  }

}
