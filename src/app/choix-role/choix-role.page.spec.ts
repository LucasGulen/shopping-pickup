import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChoixRolePage } from './choix-role.page';

describe('ChoixRolePage', () => {
  let component: ChoixRolePage;
  let fixture: ComponentFixture<ChoixRolePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixRolePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChoixRolePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
