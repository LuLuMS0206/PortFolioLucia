import { Component, OnInit, HostListener, QueryList, ViewChildren, ElementRef } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements OnInit {
  @ViewChildren('videoElement') videoElements!: QueryList<ElementRef<HTMLVideoElement>>;

  constructor() {}

  ngOnInit() {
    this.checkVisibility();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.checkVisibility();
  }

  checkVisibility() {
    const cards = document.querySelectorAll('.card');
    const triggerPoint = window.innerHeight * 0.85;

    cards.forEach((card, index) => {
      const cardPosition = card.getBoundingClientRect().top;

      if (cardPosition < triggerPoint) {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 300);
      }
    });
  }

  playVideo(video: HTMLVideoElement) {
    video.play();
  }


  pauseVideo(video: HTMLVideoElement) {
    video.pause();
    video.currentTime = 0; 
  }
}
