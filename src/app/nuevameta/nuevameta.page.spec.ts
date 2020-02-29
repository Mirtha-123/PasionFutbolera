import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevametaPage } from './nuevameta.page';

describe('NuevametaPage', () => {
  let component: NuevametaPage;
  let fixture: ComponentFixture<NuevametaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevametaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevametaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
