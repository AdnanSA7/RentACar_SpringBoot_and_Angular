import {Component} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, CarouselModule, ButtonModule, TagModule],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

  constructor(private route: Router){}

  // carasoulBtn = false;
  //
  // activeBtn(){
  //   this.carasoulBtn = !this.carasoulBtn;
  // }



  // images = [
  //   {
  //     image: "assets/slider/11.jpg",
  //   },
  //   {
  //     image: "assets/slider/9.jpg",
  //   },
  //   {
  //     image: "assets/slider/14.jpg",
  //   },
  // ]

  goto(){
    this.route.navigateByUrl('book-car');
  }

}
