import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trainerlist',
  templateUrl: './trainerlist.component.html',
  styleUrls: ['./trainerlist.component.css']
})
export class TrainerlistComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message='';
  mentors = [];
  get_trainer_list = function() {
    this.http.get("http://localhost:3000/mentor/").subscribe(
      (result : any[]) => {
        this.mentors = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_employee = function(id) {
    this.http.delete("http://localhost:3000/mentor/"+id).subscribe(
      (result) => {
        this.mentors = result;
        this.error_message = "Deleted"
        this.mentors =[];
        this.get_trainer_list()
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.get_trainer_list();
  }
  

}
