import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText;
  heroes = [
    {Trainer_Name:'AASHISH',Years_of_Experience:'5 years', Completed_Training: '3',Fee_Charged:'50,000/-',Time_Slot:'2pm-5pm', Specializations: 'Java,Mongodb,Python' },
    {Trainer_Name:'VINOTH',Years_of_Experience:'6 years', Completed_Training: '2',Fee_Charged:'70,000/-',Time_Slot:'9am-6pm', Specializations: 'Node.js,Javascript,MEAN stack' },
    {Trainer_Name:'PRAKASH',Years_of_Experience:'10 years', Completed_Training: '5',Fee_Charged:'40,000/-',Time_Slot:'4pm-7pm', Specializations: 'Agile,Scrum,Full stack' },
    {Trainer_Name:'SHAMIM',Years_of_Experience:'2 years', Completed_Training: '10',Fee_Charged:'60,000/-',Time_Slot:'11am-7pm', Specializations: '.Net,React,MEAN stack' },
    {Trainer_Name:'GOWTHAM',Years_of_Experience:'4 years', Completed_Training: '4',Fee_Charged:'50,000/-',Time_Slot:'12pm-5pm', Specializations: '.Net,React,Mongodb' }
   
  ];
  constructor() { }

  ngOnInit() {
  }

}
