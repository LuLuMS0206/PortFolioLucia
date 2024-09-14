import { NO_ERRORS_SCHEMA } from "@angular/core";
import { AboutMeComponent } from "./aboutMe.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("AboutMeComponent", () => {

  let fixture: ComponentFixture<AboutMeComponent>;
  let component: AboutMeComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [AboutMeComponent]
    });

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
