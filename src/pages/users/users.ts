import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  Refresher } from 'ionic-angular';

import { User } from '../../models/user/user';
import { UserProvider } from '../../providers/user/user';
import { UserPage } from '../user/user';
import { UserCreatePage } from '../user-create/user-create';


/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  public users: User[];
  private loader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    private loadingCtrl: LoadingController
  ) {
  }



  ionViewDidLoad() {
    console.log(this.getUsers());
  }

  public doRefresh(refresher: Refresher): void {

    this.userProvider.getUsers().subscribe(
      (response:any)=>{
        this.users = response.users;
        refresher.complete();
      }
    );

    setTimeout(
      ()=>{
        refresher.complete();
      },
      20000
    );
  }

  public getUsers(): void {
    this.presentLoader();

    this.userProvider.getUsers().subscribe(
      (response:any)=>{
        this.users = response.users;
        this.loader.dismiss();
            }
    );
  }


  private presentLoader(): void{
    this.loader = this.loadingCtrl.create({
      content: 'Retrieving through the tubes of the Interwebs'
    });

    this.loader.present();
  }

  public toUser(id: string): void {
    this.navCtrl.push(UserPage, { id: id });
  }

  public toCreateUser(): void{
    this.navCtrl.push(UserCreatePage);
  }

}
