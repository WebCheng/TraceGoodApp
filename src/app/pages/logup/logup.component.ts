import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-logup',
  templateUrl: './logup.component.html',
  styleUrls: ['./logup.component.css']
})
export class LogupComponent implements OnInit {

  logupForm: FormGroup;
  submitted = false;
  
  constructor( 
  	private formBuilder: FormBuilder
  	
  	) 
  {     
  
  }

  ngOnInit() {

  	this.logupForm = this.formBuilder.group({
      email:['', Validators.compose([Validators.required])],
     
    });
  }


  onSubmit() {
    this.submitted = true;

    }

}








// export class SignUpComponent implements OnInit {
//   signupForm: FormGroup;
//   result = false;
//   invalidsignup = false;
//   submitted = false;


//   ngOnInit() {
//   }

//   onSubmit() {
//     this.submitted = true;

//     if (this.signupForm.invalid) {
//       console.log(this.signupForm.value);
//       return;
//     }

//     this.userService.signup(this.signupForm.value).pipe(first()).subscribe(
//       data=>{data.toString();
//       if(data) {
//         this.router.navigate(['/login']);
//       };
//       if(!data){
//         this.invalidsignup = true;
//       };
//       },
//       error => {console.log('error')}
//       );
//   }
// }