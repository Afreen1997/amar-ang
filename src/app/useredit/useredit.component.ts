import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.css']
})
export class UsereditComponent implements OnInit {
  id:string
  user_name:string
  email_id:string
  pass_word:string
  message:string
  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.http.get("http://localhost:3000/user/"+this.id).subscribe(
      (result) => {
        this.user_name = result['user_name'];
        this.email_id = result['email_id'];
        this.pass_word = result['pass_word'];
        // this.error_message = "Deleted"
        // this.users = [];
        console.log('testing')
        console.log(this.user_name)
        console.log(this.email_id)
        console.log(this.pass_word)
        // this.get_user_list()
      },
      (error) => {
        //this.error_message = "Error occured, check whether Backend is running!";
        console.log(error)
      }
    )

  }

  submit_form_data(){
    console.log("user_name : " + this.user_name);
    console.log("email_id : " + this.email_id);
    console.log("pass_word : " + this.pass_word);

    var body = "user_name=" + this.user_name 
        + "&email_id=" + this.email_id 
        + "&pass_word=" + this.pass_word;
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.put("http://localhost:3000/user/"+this.id, body, 
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
