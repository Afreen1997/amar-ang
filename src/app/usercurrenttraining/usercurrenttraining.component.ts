import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-usercurrenttraining',
  templateUrl: './usercurrenttraining.component.html',
  styleUrls: ['./usercurrenttraining.component.css']
})
export class UsercurrenttrainingComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message='';
  currenttrainings = [];
  get_user_list = function() {
    this.http.get("http://localhost:3000/currenttraining/").subscribe(
      (result : any[]) => {
        this.currenttrainings = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_employee = function(id) {
    this.http.delete("http://localhost:3000/currenttraining/"+id).subscribe(
      (result) => {
        //this.courses = result;
        this.error_message = "Deleted"
        this.currenttrainings =[];
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



