import { Component, AfterViewInit, QueryList, ViewChildren, ElementRef } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"]
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('videoElement') videoElements!: QueryList<ElementRef<HTMLVideoElement>>;

  constructor() {}

  ngAfterViewInit() {
    this.playAllVideos();
  }

  playAllVideos() {
    this.videoElements.forEach((video) => {
      video.nativeElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    });
  }
}
