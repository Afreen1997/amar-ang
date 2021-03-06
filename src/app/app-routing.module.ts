import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { MenupageComponent } from './menupage/menupage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { TrainerlistComponent } from './trainerlist/trainerlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { Trainer1profileComponent } from './trainer1profile/trainer1profile.component';
import { Trainer2profileComponent } from './trainer2profile/trainer2profile.component';
import { Trainer3profileComponent } from './trainer3profile/trainer3profile.component';
import { Trainer4profileComponent } from './trainer4profile/trainer4profile.component';
import { Trainer5profileComponent } from './trainer5profile/trainer5profile.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';
import { SearchComponent } from './search/search.component';
import { UsertrainersearchComponent } from './usertrainersearch/usertrainersearch.component';
import { MentorloginComponent } from './mentorlogin/mentorlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TrainerpageComponent } from './trainerpage/trainerpage.component';
import { CurrenttrainingtrainerComponent } from './currenttrainingtrainer/currenttrainingtrainer.component';
import { UsercurrenttrainingComponent } from './usercurrenttraining/usercurrenttraining.component';
import { UsercompletedtrainingComponent } from './usercompletedtraining/usercompletedtraining.component';
import { CompletedtrainingtrainerComponent } from './completedtrainingtrainer/completedtrainingtrainer.component';
import { EditskilltrainerComponent } from './editskilltrainer/editskilltrainer.component';
import { AdminComponent } from './admin/admin.component';
import { CommissionadminComponent } from './commissionadmin/commissionadmin.component';
import { PaymentadminComponent } from './paymentadmin/paymentadmin.component';
import { EdittechadminComponent } from './edittechadmin/edittechadmin.component';
import { AdmingrantpermuserComponent } from './admingrantpermuser/admingrantpermuser.component';
import { AdmingrantpermtrainerComponent } from './admingrantpermtrainer/admingrantpermtrainer.component';
import { UsereditComponent } from './useredit/useredit.component';
import { TrainereditComponent } from './traineredit/traineredit.component';
import { TrainernotificationComponent } from './trainernotification/trainernotification.component';
import { AddtechComponent } from './addtech/addtech.component';
import { EditcommissionComponent } from './editcommission/editcommission.component';

const routes: Routes = [
 
  {path:'',   component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'trainerlist',component:TrainerlistComponent},
  {path:'userpage',component:UserpageComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'trainernotification',component:TrainernotificationComponent},
  {path:'itemlist',component:ItemlistComponent},
  {path:'update_employee/:id',component:UsereditComponent, pathMatch: 'full'},
  {path:'update/:id',component:TrainereditComponent, pathMatch: 'full'},
  {path:'update_course/:id',component:AddtechComponent, pathMatch: 'full'},
  {path:'update_commission/:id',component:EditcommissionComponent, pathMatch: 'full'},
  {path:'pg1',component:Page1Component},
  {path:'pg2',component:Page2Component},
  {path:'pg3',component:Page3Component},
  {path:'pg4',component:Page4Component},
  {path:'ang',component:AppComponent},
  {path:'usercurrenttraining',component:UsercurrenttrainingComponent},
  {path:'usercompletedtraining',component:UsercompletedtrainingComponent},
  {path:'trainer1profile',component:Trainer1profileComponent},
  {path:'trainer2profile',component: Trainer2profileComponent},
  {path:'trainer3profile',component: Trainer3profileComponent},
  {path:'trainer4profile',component: Trainer4profileComponent},
  {path:'trainer5profile',component: Trainer5profileComponent},
  {path:'currenttrainingtrainer',component:CurrenttrainingtrainerComponent},
  {path:'completedtrainingtrainer',component:CompletedtrainingtrainerComponent},
  {path:'editskilltrainer',component:EditskilltrainerComponent},
  {path:'commissionadmin',component:CommissionadminComponent},
  {path:'paymentadmin',component:PaymentadminComponent},
  {path:'edittechadmin',component:EdittechadminComponent},
  {path:'admingrantpermuser',component: AdmingrantpermuserComponent},
  {path:'admingrantpermtrainer',component: AdmingrantpermtrainerComponent},
  {path:'trainerregister',component:TrainerregisterComponent},
  {path:'search',component:SearchComponent},
  {path:'mentorlogin',component:MentorloginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'homepage', component:HomepageComponent},
    {path:'admin', component:AdminComponent},
  {path:'trainerpage', component:TrainerpageComponent},

  {path:'usertrainersearch', component:UsertrainersearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
