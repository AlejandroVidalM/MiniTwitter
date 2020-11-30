import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTweetComponent } from './all-tweet/all-tweet.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"registro", component:RegisterComponent},
  {path:"allTweet", component:AllTweetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
