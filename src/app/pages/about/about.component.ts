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
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule, MatToolbarModule, MatButtonModule, MatCardModule, CommonModule, CarouselModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
