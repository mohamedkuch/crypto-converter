import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OnePageComponent } from './onePage/onepage.component';
import { HeaderComponent } from './onePage/header/header.component';
import { TopCoverComponent } from './onePage/topcover/topcover.component';
import { AboutComponent } from './onePage/about/about.component';
import { ServicesComponent } from './onePage/services/services.component';
import { EventsComponent } from './onePage/events/events.component';
import { ProjectsComponent } from './onePage/projects/projects.component';
import { PartnersComponent } from './onePage/partners/partners.component';
import { ContactComponent } from './onePage/contact/contact.component';

// Admin imports
import { AdminComponent } from './admin/admin.component';
import { AdminEventsComponent } from './admin/admin-events/admin-events.component';
import { CreateEventComponent } from './admin/admin-events/create-event/create-event.component';
import { AdminListEventsComponent } from './admin/admin-events/list-event/list-event.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { MembersAdminComponent } from './admin/admin-members/admin-members.component';
import { CreateMemberComponent } from './admin/admin-members/create-member/create-member.component'
import { AdminProjectsComponent } from './admin/admin-projects/admin-projects.component';
import { AdminListProjectsComponent } from './admin/admin-projects/list-project/list-project.component';

import { PageNotFoundComponent } from './404/pagenotfound.component';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';
import { LoginComponent } from './admin/auth/login/login.component';
import { AuthInterceptor } from './admin/auth/auth-interceptor';
import { AdminMemberListComponent } from './admin/admin-members/list-members/list-members.component';
import { ErrorInterceptor } from './error-interceptor';
import { ErrorComponent } from './error/error.component';
import { AngularMaterialModule } from './angular-material.module';
import { CreateProjectComponent } from './admin/admin-projects/ceate-project/create-project.component';
@NgModule({
  declarations: [
    OnePageComponent,
    AppComponent,
    HeaderComponent ,
    TopCoverComponent,
    AboutComponent,
    ServicesComponent,
    EventsComponent,
    ProjectsComponent,
    MembersAdminComponent,
    PartnersComponent,
    ContactComponent,
    AdminComponent,
    CreateMemberComponent,
    AdminEventsComponent,
    AdminProjectsComponent,
    CreateProjectComponent,
    CreateEventComponent,
    AdminListEventsComponent,
    AdminListProjectsComponent,
    LoginComponent,
    AdminMemberListComponent,
    HeaderAdminComponent,
    ErrorComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMaterialModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide : HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {


 }
