import {Component} from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Router } from '@angular/router';
import {RentaltypesComponent} from "../rentaltypes/rentaltypes.component";
import {BookCarComponent} from "../book-car/book-car.component";


@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NavbarComponent, CarouselModule, ButtonModule, TagModule, RentaltypesComponent, BookCarComponent],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {

  responsiveOptions: any[] | undefined;

  constructor(private route: Router){

      this.responsiveOptions = [
        {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
        },
        {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
        }
      ];
    }

  // carasoulBtn = false;
  //
  // activeBtn(){
  //   this.carasoulBtn = !this.carasoulBtn;
  // }



  images = [
    {
      image: "assets/slider/11.jpg",
    },
    {
      image: "assets/slider/9.jpg",
    },
    {
      image: "assets/slider/14.jpg",
    },
  ]

  goto(){
    this.route.navigateByUrl('book-car');
  }

}
