import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AfterViewInit, ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatToolbarModule, MatButtonModule, MatCardModule, CommonModule, CarouselModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images = [
    { name: "Buddy", image: "/assets/images/buddy.jpg" },
    { name: "Luna", image: "/assets/images/luna.jpg" },
    { name: "Charlie", image: "/assets/images/charlie.jpg" }
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
