import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
id:any
	x:any=new Date()
	meta:any={}
  periodo:any
  constructor(private nativeStorage: NativeStorage) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
  	var items:any=[]
  	 this.nativeStorage.keys()
	  .then(
	    data =>{
	    	console.log(data)
	     items = data },
	    error => console.error(error)
	  );
	 if (items.length>=1) {
	 	this.id=items.length+1
	 }else{
	 	this.id=1
	 }
	  





 
  	this.x.setDate(parseFloat(this.x.getDate()) + 30);
  	this.periodo=this.x.getFullYear()  + '-' + ('0' + (this.x.getMonth()+1)).slice(-2) +
             '-' + ('0' + this.x.getDate()).slice(-2)
  
  }
  guardar(){
  	this.nativeStorage.setItem(this.id, this.meta)
  .then(
    () => console.log('Stored item!'),
    error => console.error('Error storing item', error)
  );
  	
  	this.nativeStorage.getItem(this.id)
  .then(
    data => console.log(data),
    error => console.error(error)
  );
 
  }

}
