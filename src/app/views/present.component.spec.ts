import { NO_ERRORS_SCHEMA } from "@angular/core";
import { PresentComponent } from "./present.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("PresentComponent", () => {

  let fixture: ComponentFixture<PresentComponent>;
  let component: PresentComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [PresentComponent]
    });

    fixture = TestBed.createComponent(PresentComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
