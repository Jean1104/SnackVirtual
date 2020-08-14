import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InduccionPage } from './induccion.page';

describe('InduccionPage', () => {
  let component: InduccionPage;
  let fixture: ComponentFixture<InduccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InduccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InduccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
