import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-paymentadmin',
  templateUrl: './paymentadmin.component.html',
  styleUrls: ['./paymentadmin.component.css']
})
export class PaymentadminComponent implements OnInit {
  constructor(private http: HttpClient) { }
  error_message='';
  payments = [];
  get_trainer_list = function() {
    this.http.get("http://localhost:3000/payment/").subscribe(
      (result : any[]) => {
        this.payments = result;
        this.error_message = ""
      },
      (error) => {
        this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )
  }

  delete_employee = function(id) {
    this.http.delete("http://localhost:3000/payment/"+id).subscribe(
      (result) => {
        this.payments = result;
        this.error_message = "Deleted"
        this.payments =[];
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

