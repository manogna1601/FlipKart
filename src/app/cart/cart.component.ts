import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  items: any;
  activeItem: any;
  isFlipkart: boolean = true;
  ngOnInit() {
    this.items = [
        { label: 'Flipkart'},
        { label: 'Grocery'}
    ];
    this.activeItem = this.items[0];
  }

  onActiveItemChange(event: any){
    this.activeItem = event;
    if(this.activeItem.label == 'Flipkart'){
      this.isFlipkart = true;
      var display = document.getElementById("price-details");
      var menu = document.getElementById("menu-bar")
      if(display){
        display.style.display ="block";
      }
      if(menu){
        menu.style.width = "45%";
      }
    }
    else{
      this.isFlipkart = false;
      var display = document.getElementById("price-details");
      var menu = document.getElementById("menu-bar")
      if(display){
        display.style.display ="none";
      }
      if(menu){
        menu.style.width = "60%";
      }
    }
    if(!this.isFlipkart){
      
    }
  }
}
