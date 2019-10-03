import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  constructor(private http: HttpClient) { }
  
  error_message='';
  searchText;
  trainers = [];
  get_user_list = function() {
    this.http.get("http://localhost:3000/trainer/").subscribe(
      (result : any[]) => {
        this.trainers = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_employee = function(id) {
    this.http.delete("http://localhost:3000/trainer/"+id).subscribe(
      (result) => {
        //this.courses = result;
        this.error_message = "Deleted"
        this.trainers =[];
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




