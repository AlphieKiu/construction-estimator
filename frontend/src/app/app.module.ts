import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateProjectComponent } from './project/create-project/create-project.component';
import { HeaderComponent } from './header/header.component';
import { ProjectDetailsComponent } from './project/project-details/project-details.component';
import { ProjectListComponent } from './project/project-list/project-list.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { RegisterComponent } from './register/register.component';
import { EditUserProfileComponent } from './user/edit-user-profile/edit-user-profile.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateProjectComponent,
    HeaderComponent,
    ProjectDetailsComponent,
    ProjectListComponent,
    UserProfileComponent,
    EditProjectComponent,
    RegisterComponent,
    EditUserProfileComponent,
    LoginComponent,
    AboutComponent,
    PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule // brings over info from app-routing.module.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
