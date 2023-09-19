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

  ngAfterViewInit() {
    this.navbarButton.nativeElement.addEventListener('click', () => {
      let navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.style.display = 'block';
      }
    });
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    let navbar = document.getElementById('navbar');
    // Verifica si el elemento en el que se hizo clic está fuera de tu componente
    if (!this.elRef.nativeElement.contains(event.target)) {
      // Realiza la lógica que desees cuando se haga clic fuera del elemento
      // thisnavbar.style.display = 'none';
      if (navbar) {
        navbar.style.display = 'none';
      }
    }
  }
}
