import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 public name ='Khánh Toàn';
 public age = 25;
public traiCay = ['Cam','Quýt','Xoài','Nho'];
  constructor() { }

 public ngOnInit(): void {
    console.log('trai cay =',this.traiCay);
  }
  public resetName() :void{
    console.log('resetName');
    this.name='';
  }

}
