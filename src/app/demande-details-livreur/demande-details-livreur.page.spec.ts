import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DemandeDetailsLivreurPage } from './demande-details-livreur.page';

describe('DemandeDetailsLivreurPage', () => {
  let component: DemandeDetailsLivreurPage;
  let fixture: ComponentFixture<DemandeDetailsLivreurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDetailsLivreurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DemandeDetailsLivreurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
