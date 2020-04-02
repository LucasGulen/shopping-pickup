import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainSeniorPage } from './main-senior.page';

describe('MainSeniorPage', () => {
  let component: MainSeniorPage;
  let fixture: ComponentFixture<MainSeniorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainSeniorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainSeniorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
