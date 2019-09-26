import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText;
  heroes = [
    {Trainer_Name:'AASHISH', Completed_Training: '3', Specializations: 'Java,Mongodb,Python' },
    {Trainer_Name:'VINOTH', Completed_Training: '2', Specializations: 'Node.js,Javascript,MEAN stack' },
    {Trainer_Name:'PRAKASH', Completed_Training: '5', Specializations: 'Agile,Scrum,Full stack' },
    {Trainer_Name:'SHAMIM', Completed_Training: '10', Specializations: '.Net,React,MEAN stack' },
    {Trainer_Name:'GOWTHAM', Completed_Training: '4', Specializations: '.Net,React,Mongo db' }
   
  ];
  constructor() { }

  ngOnInit() {
  }

}
