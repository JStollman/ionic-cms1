import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';


import { User } from '../../models/user/user';
import { UserPage } from '../user/user';
import { UserProvider } from '../../providers/user/user';




@IonicPage()
@Component({
  selector: 'page-user-create',
  templateUrl: 'user-create.html',
})
export class UserCreatePage {

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
      username: [],
      email: [],
      first_name: [],
      last_name: []
    });
  }

  response(response: any): void{
    console.log(response);
    if(response.success === false){
      this.errors = response.error.errors;
      this.errorMessage = response.error._message;
    }

    if(response.success === true){
      this.navCtrl.push(UserPage, {id: response.user_id});
    }
  }

  public createUser(): void{
    this.userProvider.createUser(this.user.value).subscribe(
      (response:any)=>{
        this.response(response);
      }
    );
  }

}
