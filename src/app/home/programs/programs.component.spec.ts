import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsComponent } from './programs.component';
import { ApiService } from 'src/app/services/api.service';
import { of } from 'rxjs';

describe('ProgramsComponent', () => {
  let component: ProgramsComponent;
  let fixture: ComponentFixture<ProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsComponent ],
      providers: [
        {provide: ApiService, useClass: ApiServiceStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class ApiServiceStub {
  getAllPrograms(){ 
    return of([]);
  }
}
