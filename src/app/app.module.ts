import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomepageComponent } from './homepage/homepage.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TrainersearchComponent } from './trainersearch/trainersearch.component';
import { Trainer1profileComponent } from './trainer1profile/trainer1profile.component';
import { Trainer2profileComponent } from './trainer2profile/trainer2profile.component';
import { Trainer3profileComponent } from './trainer3profile/trainer3profile.component';
import { Trainer4profileComponent } from './trainer4profile/trainer4profile.component';
import { Trainer5profileComponent } from './trainer5profile/trainer5profile.component';
import { TrainerpageComponent } from './trainerpage/trainerpage.component';

import { AdminComponent } from './admin/admin.component';
import { AdmingrantpermtrainerComponent } from './admingrantpermtrainer/admingrantpermtrainer.component';
import { AdmingrantpermuserComponent } from './admingrantpermuser/admingrantpermuser.component';
import { CommissionadminComponent } from './commissionadmin/commissionadmin.component';
import { CompletedtrainingtrainerComponent } from './completedtrainingtrainer/completedtrainingtrainer.component';
import { CurrenttrainingtrainerComponent } from './currenttrainingtrainer/currenttrainingtrainer.component';
import { EditskilltrainerComponent } from './editskilltrainer/editskilltrainer.component';
import { EdittechadminComponent } from './edittechadmin/edittechadmin.component';
import { PaymentadminComponent } from './paymentadmin/paymentadmin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { TrainerheaderComponent } from './trainerheader/trainerheader.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { UserpageComponent } from './userpage/userpage.component';
import { UsercurrenttrainingComponent } from './usercurrenttraining/usercurrenttraining.component';
import { UsercompletedtrainingComponent } from './usercompletedtraining/usercompletedtraining.component';
import { UsertrainersearchComponent } from './usertrainersearch/usertrainersearch.component';
import { SearchComponent } from './search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    
    HomepageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Pagenotfound404Component,
    Page4Component,
    RegisterComponent,
    UserlistComponent,
    UserloginComponent,
    ItemlistComponent,
    TrainerregisterComponent,
    MentorloginComponent,
    AdminloginComponent,
    TrainersearchComponent,
    Trainer1profileComponent,
    Trainer2profileComponent,
    Trainer3profileComponent,
    Trainer4profileComponent,
    Trainer5profileComponent,
    TrainerpageComponent,
   
    AdminComponent,
    AdmingrantpermtrainerComponent,
    AdmingrantpermuserComponent,
    CommissionadminComponent,
    CompletedtrainingtrainerComponent,
    CurrenttrainingtrainerComponent,
    EditskilltrainerComponent,
    EdittechadminComponent,
    PaymentadminComponent,
    HeaderComponent,
    FooterComponent,
    AdminheaderComponent,
    TrainerheaderComponent,
    UserheaderComponent,
    UserpageComponent,
    UsercurrenttrainingComponent,
    UsercompletedtrainingComponent,
    UsertrainersearchComponent,
    SearchComponent    
  ],
  imports: [
    BrowserModule,Ng2SearchPipeModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
