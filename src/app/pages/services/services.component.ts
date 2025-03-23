import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatToolbarModule, CarouselModule], 
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements AfterViewInit {
  pets = [
    { name: 'Snowball', breed: 'Siamese Mix', image: 'assets/images/siames-mix.jpg' },
    { name: 'Tiger', breed: 'Tabby', image: 'assets/images/tabby.jpg' },
    { name: 'Whiskers', breed: 'Maine Coon', image: 'assets/images/maine-coon.jpg' },
    { name: 'Shadow', breed: 'Persian', image: 'assets/images/persian.jpg' },
    { name: 'Mittens', breed: 'Ragdoll', image: 'assets/images/ragdoll.jpg' },
    { name: 'Whiskers', breed: 'Sphynx', image: 'assets/images/sphynx.jpg' },
    { name: 'Shadow', breed: 'British Shorthair', image: 'assets/images/brit-short.jpg' },
    
  ];

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  ngAfterViewInit() {
    if (!this.carousel) {
      console.error("Carousel not initialized");
    }

    setTimeout(() => {
      this.cdr.detectChanges();
    }, 100); 
  }

  prevSlide() {
    console.log("Left button clicked");
    this.carousel.nativeElement.scrollBy({ left: -220, behavior: 'smooth' });
  }

  nextSlide() {
    console.log("Right button clicked");
    this.carousel.nativeElement.scrollBy({ left: 220, behavior: 'smooth' });
  }

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
  
}
