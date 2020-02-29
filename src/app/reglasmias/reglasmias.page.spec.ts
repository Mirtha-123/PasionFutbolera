import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReglasmiasPage } from './reglasmias.page';

describe('ReglasmiasPage', () => {
  let component: ReglasmiasPage;
  let fixture: ComponentFixture<ReglasmiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglasmiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReglasmiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
