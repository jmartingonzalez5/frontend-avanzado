import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesComponent } from './heroes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('h2 con el texto "My Heroes"', () => {
    expect(fixture.nativeElement.querySelector('h2').textContent).toEqual('My Heroes');
  });

  // PROBAR
  it('button click invoca al metodo add', async(() => {
    spyOn(component, 'add');

    let button = fixture.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.add).toHaveBeenCalled();
    });
  }));

});
