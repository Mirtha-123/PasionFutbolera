import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarreglaPage } from './editarregla.page';

describe('EditarreglaPage', () => {
  let component: EditarreglaPage;
  let fixture: ComponentFixture<EditarreglaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarreglaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarreglaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
