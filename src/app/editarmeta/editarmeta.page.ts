import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService} from '../api/api.service'
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-editarmeta',
  templateUrl: './editarmeta.page.html',
  styleUrls: ['./editarmeta.page.scss'],
})
export class EditarmetaPage implements OnInit {
 pa:any
 edicion:any={}
  constructor(private nativeStorage: NativeStorage,private rutaActiva: ActivatedRoute, private api:ApiService,public nave:NavController) { }

  ngOnInit() {
  	console.log(this.rutaActiva.snapshot.paramMap.get("papi"))
  	this.pa=this.rutaActiva.snapshot.paramMap.get("papi")
  		this.nativeStorage.getItem(this.pa)
  .then(
    data => {
    	this.edicion=data
    	
    },
    error => console.error(error)
  );
  	

  }
  actualizar(){
  	console.log(this.edicion)
  	this.nativeStorage.setItem(this.pa, this.edicion)
  .then(
    () => {
    	
    	console.log('Actualizado')
    	this.nave.navigateForward('')
    },
    error => console.error('Error storing item', error)
  );
  }

}
