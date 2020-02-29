import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalesePage } from './modalese.page';

describe('ModalesePage', () => {
  let component: ModalesePage;
  let fixture: ComponentFixture<ModalesePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalesePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalesePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
