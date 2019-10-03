import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-usercompletedtraining',
  templateUrl: './usercompletedtraining.component.html',
  styleUrls: ['./usercompletedtraining.component.css']
})
export class UsercompletedtrainingComponent implements OnInit {
  constructor(private http: HttpClient) { }
  error_message='';
  completedtrainings = [];
  get_user_list = function() {
    this.http.get("http://localhost:3000/completedtraining/").subscribe(
      (result : any[]) => {
        this.completedtrainings = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_employee = function(id) {
    this.http.delete("http://localhost:3000/completedtraining/"+id).subscribe(
      (result) => {
        //this.courses = result;
        this.error_message = "Deleted"
        this.completedtrainings =[];
        this.get_user_list()
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  ngOnInit() {
    this.get_user_list();
  }

}


