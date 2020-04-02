import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListServicesSeniorPage } from './list-services-senior.page';

describe('ListServicesSeniorPage', () => {
  let component: ListServicesSeniorPage;
  let fixture: ComponentFixture<ListServicesSeniorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListServicesSeniorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListServicesSeniorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
