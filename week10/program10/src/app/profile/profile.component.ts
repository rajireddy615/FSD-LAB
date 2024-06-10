import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
constructor(private http:HttpClient){

}
data:any;
getData(){
  this.http.get('https://jsonplaceholder.typicode.com/users/1')
  .subscribe((data)=>{
this.data=data;
  })
}
}
