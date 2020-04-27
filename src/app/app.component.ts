import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  names = [10, 7, 12];
  names2 = ['sam', 'ff', 'zzz'];
  contacts= [
    { 
      name: 'Rasheed', 
      phone: '23525', 
      photo: 'https://www.wallpaperup.com/uploads/wallpapers/2014/05/04/349162/8d661276bec81ad58ad5140bf91aad04.jpg'
    },
    { 
      name: 'Samer', 
      phone: '55555', 
      photo: 'https://www.wallpaperup.com/uploads/wallpapers/2014/05/04/349162/8d661276bec81ad58ad5140bf91aad04.jpg'
    },
    { 
      name: 'Jasem', 
      phone: '888888', 
      photo: 'https://www.wallpaperup.com/uploads/wallpapers/2014/05/04/349162/8d661276bec81ad58ad5140bf91aad04.jpg'
    },
    { 
      name: 'Jasem', 
      phone: '888888', 
      photo: 'https://www.wallpaperup.com/uploads/wallpapers/2014/05/04/349162/8d661276bec81ad58ad5140bf91aad04.jpg'
    },
    { 
      name: 'Jasem', 
      phone: '888888', 
      photo: 'https://www.wallpaperup.com/uploads/wallpapers/2014/05/04/349162/8d661276bec81ad58ad5140bf91aad04.jpg'
    },
    { 
      name: 'Jasem', 
      phone: '888888', 
      photo: 'https://www.wallpaperup.com/uploads/wallpapers/2014/05/04/349162/8d661276bec81ad58ad5140bf91aad04.jpg'
    },
    { 
      name: 'Jasem', 
      phone: '888888', 
      photo: 'https://www.wallpaperup.com/uploads/wallpapers/2014/05/04/349162/8d661276bec81ad58ad5140bf91aad04.jpg'
    }
  ];
  

  ngOnInit() {
  }

  change() {
  }

  


    


}
