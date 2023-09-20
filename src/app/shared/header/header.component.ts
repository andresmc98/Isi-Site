import {
  Component,
  ElementRef,
  ViewChild,
  Renderer2,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @ViewChild('navbarButton', { static: true }) navbarButton!: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.renderer.listen('document', 'click', (event: Event) => {
      if (!this.navbarButton.nativeElement.contains(event.target)) {
        let navbar = document.getElementById('navbar');
        if (navbar) {
          navbar.style.display = 'none';
        }
      }
    });
  }
  onElementClick(event: Event) {
    let navbar = document.getElementById('navbar');
    if (navbar) {
      navbar.style.display = 'block';
    }
  }
}
