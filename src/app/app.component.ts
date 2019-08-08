import { Component } from '@angular/core';
import { CurrencyService } from './currency.service';
import { Insert } from './insert';
import { FormsModule,ReactiveFormsModule,FormGroup,FormBuilder ,Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public Curr = [];
  currencyForm:FormGroup;
 
  
  constructor(private formBuilder:FormBuilder, private _service:CurrencyService){
    _service.GetCurrency().subscribe(s=>this.Curr=s);
  }
  onFormSubmit(){
    let insert = this.currencyForm.value;
    this.createCurr(insert);
    this.currencyForm.reset();
    
  }
  datasave=true;
  createCurr(insert:Insert){
    this._service.Create(insert).subscribe(insert=>{this.datasave=true});
  }
  ngOnInit(){
  this.currencyForm = this.formBuilder.group({
    Id:['',Validators.required],
    Rate:['',Validators.required]

  });

  }

  Convert(c,c1){
    let result = c*c1;
  }
}
