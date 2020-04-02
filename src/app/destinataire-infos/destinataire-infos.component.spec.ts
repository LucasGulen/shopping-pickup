import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DestinataireInfosComponent } from './destinataire-infos.component';

describe('DestinataireInfosComponent', () => {
  let component: DestinataireInfosComponent;
  let fixture: ComponentFixture<DestinataireInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinataireInfosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DestinataireInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
