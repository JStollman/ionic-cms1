import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


import { User } from '../../models/user/user';
import { UserPage } from '../user/user';
import { UserProvider } from '../../providers/user/user';



@IonicPage()
@Component({
  selector: 'page-user-edit',
  templateUrl: 'user-edit.html',
  styles: ['user-create-scss']
})

export class UserEditPage {
  
  public myUser: User;
  public user : FormGroup;
  public errors: Array<any> = [];
  public errorMessage: string;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private formBuilder: FormBuilder
  ) {
    this.user = this.formBuilder.group({
      _id:[],
      username: [],
      email: [],
      first_name: [],
      last_name: []
   });
  
  
    this.getUser(this.navParams.data.id);
  }


  private getUser(id: string): void {
    this.userProvider.getUser(id).subscribe(
      (response: any)=>{
        this.myUser = response.user;

        }
      );
  }
  response(response: any): void{
    console.log(response);
    if(response.success === false){
      this.errors = response.error.errors;
      this.errorMessage = response.error._message;
    }

    if(response.success === true){    console.log(response);

      this.navCtrl.push(UserPage, {id: response.user._id});
    }
  }

  public editUser(): void{console.log(456);
    this.userProvider.editUser(this.user.value).subscribe(
      (response:any)=>{console.log(789);
        this.response(response);
      }
    );
  }

}
