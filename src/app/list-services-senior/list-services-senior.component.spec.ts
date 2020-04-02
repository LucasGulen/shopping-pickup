import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListServicesSeniorComponent } from './list-services-senior.component';

describe('ListServicesSeniorComponent', () => {
  let component: ListServicesSeniorComponent;
  let fixture: ComponentFixture<ListServicesSeniorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServicesSeniorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListServicesSeniorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
