import { Component, OnInit } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService} from '../api/api.service'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-editarregla',
  templateUrl: './editarregla.page.html',
  styleUrls: ['./editarregla.page.scss'],
})
export class EditarreglaPage implements OnInit {
 pa:any
 edicion:any={}
 equipos1:any=[]
 futbolero:any
  constructor(private nativeStorage: NativeStorage,private rutaActiva: ActivatedRoute, private api:ApiService,public nave:NavController) { }

  ngOnInit() {

  	this.api.listaequipo().subscribe((data:any)=>{
  		console.log(data)
  		this.equipos1=data.teams
  	})
  		this.pa=this.rutaActiva.snapshot.paramMap.get("regla")
  		this.nativeStorage.getItem(this.pa)
  .then(
    data => {
    	this.edicion=data
      this.futbolero=data.nomequipo
    	console.log(data)
    },
    error => console.error(error)
  );
  }
   actualizar(){
     this.edicion.nomequipo=this.futbolero.shortName
     this.edicion.idequipo=this.futbolero.id
     console.log(this.edicion)
  	this.nativeStorage.setItem(this.pa,this.edicion)
  .then(
    () => {
    	
    	console.log('Actualizado')
    	this.nave.navigateForward('')
    },
    error => console.error('Error storing item', error)
  );
  }

}
