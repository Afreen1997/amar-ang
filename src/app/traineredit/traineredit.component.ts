import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-traineredit',
  templateUrl: './traineredit.component.html',
  styleUrls: ['./traineredit.component.css']
})
export class TrainereditComponent implements OnInit {
  id:string
  user_name:string
  email_id:string
  exp:string
  linkedin_url:string
  mob_num:string
  timezone:string
  Technology:string
  Facilities:string
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

    this.http.get("http://localhost:3000/mentor/"+this.id).subscribe(
      (result) => {
        this.user_name = result['user_name'];
        this.email_id = result['email_id'];
        this.exp = result['exp'];
        this.linkedin_url = result['linkedin_url'];
        this.mob_num = result['mob_num'];
        this.timezone = result['timezone'];
        this.Technology = result['Technology'];
        this.Facilities = result['Facilities'];
        this.pass_word = result['pass_word'];
        // this.error_message = "Deleted"
        // this.users = [];
        console.log('testing')
        console.log(this.user_name)
        console.log(this.email_id)
        console.log(this.exp);
        console.log( this.linkedin_url);
        console.log(this.mob_num);
        console.log(this.timezone);
        console.log(this. Technology);
        console.log(this. Facilities);
        console.log(this.pass_word);
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
    console.log("exp: " + this.exp);
    console.log("linkedin_url: " + this.linkedin_url);
    console.log("mob_num: " + this.mob_num);
    console.log("timezone: " + this.timezone);
    console.log(" Technology: " + this. Technology);
    console.log("Facilities: " + this. Facilities);
    console.log("pass_word : " + this.pass_word);


    var body = "user_name=" + this.user_name 
        + "&email_id=" + this.email_id 
        + "&exp=" + this.exp
        + "&linkedin_url=" + this.linkedin_url
        + "&mob_num=" + this.mob_num
        + "&timezone=" + this.timezone
        + "&Technology=" + this.Technology
        + "&Facilities=" + this.Facilities
       
        + "&pass_word=" + this.pass_word;
	
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    this.http.put("http://localhost:3000/mentor/"+this.id, body, 
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
