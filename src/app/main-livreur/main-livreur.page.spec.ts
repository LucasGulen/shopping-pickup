import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MainLivreurPage } from './main-livreur.page';

describe('MainLivreurPage', () => {
  let component: MainLivreurPage;
  let fixture: ComponentFixture<MainLivreurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLivreurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MainLivreurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
