import { Component, OnInit, HostListener } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // Llama a esta función al cargar la página para asegurarse de que las cards visibles se animen al cargar.
    this.checkVisibility();
  }

  // Escucha el evento de scroll
  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.checkVisibility();
  }

  // Verifica si las cards son visibles en el viewport
  checkVisibility() {
    const cards = document.querySelectorAll('.card');
    const triggerPoint = window.innerHeight * 0.85; // Cuándo quieres que el efecto se inicie

    cards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;
      
      if (cardPosition < triggerPoint) {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 300); // Delay entre cada card
      }
    });
  }
}
