import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-addtech',
  templateUrl: './addtech.component.html',
  styleUrls: ['./addtech.component.css']
})
export class AddtechComponent implements OnInit {
  id:string
 
  Technology:string
  message : string

  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.http.get("http://localhost:3000/course/"+this.id).subscribe(
      (result) => {
       
        this.Technology = result['Technology'];
      
        // this.error_message = "Deleted"
        // this.users = [];
        console.log('testing')
       
        console.log(this.Technology);
        

        // this.get_user_list()
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )

  }

  submit_form_data(){
    
    console.log(" Technology: " +this.Technology);
   


    var body = "Technology=" +this.Technology
      
      
     
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.put("http://localhost:3000/course/"+this.id, body, 
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
