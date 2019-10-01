import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-commissionadmin',
  templateUrl: './commissionadmin.component.html',
  styleUrls: ['./commissionadmin.component.css']
})
export class CommissionadminComponent implements OnInit {

  constructor(private http: HttpClient) { }
  error_message='';
  commissions = [];
  get_trainer_list = function() {
    this.http.get("http://localhost:3000/commission/").subscribe(
      (result : any[]) => {
        this.commissions = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_employee = function(id) {
    this.http.delete("http://localhost:3000/commission/"+id).subscribe(
      (result) => {
        this.commissions = result;
        this.error_message = "Deleted"
        this.commissions =[];
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
