import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarmetaPage } from './editarmeta.page';

describe('EditarmetaPage', () => {
  let component: EditarmetaPage;
  let fixture: ComponentFixture<EditarmetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarmetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarmetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
