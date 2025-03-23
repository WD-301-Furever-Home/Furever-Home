import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AfterViewInit, ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatCardModule, CommonModule, CarouselModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  images = [
    { name: "Buddy", image: "/assets/images/gold-ret.jpg" },
    { name: "Luna", image: "/assets/images/buddy.jpg" },
    { name: "Charlie", image: "/assets/images/blue-cat-dog.jpg" },
    { name: "Buddy", image: "/assets/images/shih-tzu.jpg" },
    { name: "Luna", image: "/assets/images/bengal.jpg" },
  

  ];
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    items: 1,
    navText: ['<', '>'],
    autoplay: true,
    autoplayTimeout: 3000,
    
  };
  constructor(private cdr: ChangeDetectorRef) {}

  nngAfterViewInit() {
    setTimeout(() => {
      this.cdr.detectChanges();
    }, 100); 
  }
  
}

