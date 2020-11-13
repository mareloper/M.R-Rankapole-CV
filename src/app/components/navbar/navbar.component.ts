import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo (to: string) {
    switch (to) {
      case 'home':
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;

      case 'category':
        document.querySelector('.homepage__body').scrollIntoView({
          behavior: 'smooth',
        });
        break;

      default:
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        break;
    }
  }
}
