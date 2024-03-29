import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersPage } from '../pages/users/users';
import { UserPage } from '../pages/user/user';
import { UserCreatePage } from '../pages/user-create/user-create';
import { UserEditPage } from '../pages/user-edit/user-edit';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    UserCreatePage,
    UserEditPage,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UsersPage,
    UserPage,
    UserCreatePage,
    UserEditPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
