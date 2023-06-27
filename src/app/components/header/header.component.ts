import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobileView = false;
  isMenuOpen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkView();
  }

  ngOnInit() {
    this.checkView();
  }

  checkView() {
    this.isMobileView = window.innerWidth <= 375;
  }


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}