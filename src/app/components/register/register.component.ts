import { Component } from '@angular/core';
import { findIndex } from 'rxjs';
import { Register } from 'src/app/Models/register';
import { __values } from 'tslib';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  personname?:string  = " ";
  phn?:number = 0 ;
  email?:string = " ";
  Details:Register[] = [];
  editid:number=0;
  editBtnRef:string = "Add Details";

  show:boolean = false;

  addDetails = () => {
    if(this.editid === 0) {
      let detail:Register = {id:this.Details.length +1, name:this.personname , phn:this.phn , email: this.email};
      this.Details.push(detail);
    } else {
      let editDetail = this.Details.find((e) => e.id === this.editid ) ;
      this.Details = this.Details.map((t) => {

        if (t.id === this.editid) return { ...t, name: this.personname , phn:this.phn , emai:this.email };

        else return t;

    });
    }

    
    this.personname = " ";
    this.phn = 0;
    this.email = " ";
    this.editBtnRef= "Add Details";
    
    return this.Details;
    

    // console.log(this.Details);

  }

  editDetail = (id:number) => {
    this.editid = id;
 
    let newDetail = this.Details.filter((d) => d.id !== id);
    console.log(newDetail);
    
    if(newDetail) {
      console.log(newDetail);
      let editDetail = this.Details.find((e) => e.id === id ) ;
      console.log(editDetail);
      
      this.personname = editDetail?.name;
      this.phn = editDetail?.phn;
      this.email = editDetail?.email;
      this.editBtnRef = "Update Details";
      
    }
    // this.Details.push({id:id, name:this.personname , phn: this.phn , email: this.email});
  
    
    

  }

  deleteDetail = (id:number) => {
    this.Details = this.Details.filter((d) => d.id !== id);
  }

}
