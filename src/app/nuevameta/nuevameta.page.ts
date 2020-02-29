import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-nuevameta',
  templateUrl: './nuevameta.page.html',
  styleUrls: ['./nuevameta.page.scss'],
})
export class NuevametaPage implements OnInit {
	id:any
ayuda:any=new Date()
	x:any=new Date()
	meta:any={}
	 mas:number=0
  periodo:any
  constructor(private nativeStorage: NativeStorage,public nave:NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
  	this.x=new Date()
  	var items:any=[]
  	 this.nativeStorage.keys()
	  .then(
	    data =>{
	    	
	     items = data 
 for (var i = items.length - 1; i >= 0; i--) {
	     	var t = items[i].split('-')
	     	
	     	if (t[0]=='m') {
	     		this.mas++
	     	}
	     }


	     console.log(items.length)
	      if (this.mas>=1) {
	 	this.id=this.mas+1
	 }else{
	 	this.id=1
	 }
	

	 },
	    error => console.error(error)
	  );
	
	  
	 



 
  	this.x.setDate(parseFloat(this.x.getDate()) + 30);
  	this.periodo=this.x.getFullYear()  + '-' + ('0' + (this.x.getMonth()+1)).slice(-2) +
             '-' + ('0' + this.x.getDate()).slice(-2)
  
  }
  guardar(){
  	console.log(this.meta)
  	this.meta.fecha=this.ayuda
  	var u = 'm-'+String(this.id)
  	this.meta.nombre=u


  	






  	
  	this.nativeStorage.setItem(u, this.meta)
  .then(
    () => {
    	this.id=this.id+1
    	console.log('Guarde'+u)
    	this.nave.navigateForward('')
    },
    error => console.error('Error storing item', error)
  );
  	
  	this.nativeStorage.getItem(this.id)
  .then(
    data => console.log(data),
    error => console.error(error)
  );
 
  }

}
