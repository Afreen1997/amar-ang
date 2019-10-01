import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-editcommission',
  templateUrl: './editcommission.component.html',
  styleUrls: ['./editcommission.component.css']
})
export class EditcommissionComponent implements OnInit {

  id:string
  training_fee:string
  commission_percentage:string
  received_pending:string
  message:string;

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.http.get("http://localhost:3000/commission/"+this.id).subscribe(
      (result) => {
        this.training_fee= result['training_fee'];
        this.commission_percentage = result['commission_percentage'];
        this.received_pending= result['received_pending'];
        // this.error_message = "Deleted"
        // this.users = [];
        console.log('testing')
        console.log(this.training_fee )
        console.log(this.commission_percentage)
        console.log(this.received_pending)

        // this.get_user_list()
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )

  }

  submit_form_data(){
    console.log("commission_percentage: " + this.commission_percentage );
 


    var body = "commission_percentage =" + this.commission_percentage  
       
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.put("http://localhost:3000/commission/"+this.id, body, 
                  {headers: headers, responseType:'text'}).subscribe(
      (result) => {
        console.log(result)
        this.message = "Congratulations, You had successfully Updated"
      },
      (error) => {
        console.log(error)
        this.message = "Error : Backend is running? or any other error";
      }
    )
  }

}

