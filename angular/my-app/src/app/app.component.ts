import { Component } from '@angular/core';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  
  export class AppComponent {
    title = 'my-app';
    items = ["Bananas","Milk","Cat Food"];
    
    newitem = "Enter New Item";
    onClickSubmit() {
    console.log(this);
    console.log(this.newitem);
    this.items.push(this.newitem);
    
      <li *ngFor="let item of items">
    {{ items }}
</li>
  }
}