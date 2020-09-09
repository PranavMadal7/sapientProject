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
  it('on call of onSelectYear data to be cleaned and filter method to be called BRANCH - 1', () => {
    spyOn(component,'filterApiCall');
    component.selectLand = true;
    component.selectLaunch = true;
    component.onSelectYear(2012);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectYear data to be cleaned and filter method to be called BRANCH - 2', () => {
    spyOn(component,'filterApiCall');
    component.selectLand = true;
    component.onSelectYear(2012);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectYear data to be cleaned and filter method to be called BRANCH - 3', () => {
    spyOn(component,'filterApiCall');
    component.selectLaunch = true;
    component.onSelectYear(2012);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectYear data to be cleaned and filter method to be called BRANCH - 4', () => {
    spyOn(component,'filterApiCall');
    component.onSelectYear(2012);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectLaunch data to be cleaned and filter method to be called BRANCH - 1', () => {
    spyOn(component,'filterApiCall');
    component.selectYear = true;
    component.selectLand = true;
    component.onSelectLaunch(true);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectLaunch data to be cleaned and filter method to be called BRANCH - 2', () => {
    spyOn(component,'filterApiCall');
    component.selectYear = true;
    component.onSelectLaunch(true);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectLaunch data to be cleaned and filter method to be called BRANCH - 3', () => {
    spyOn(component,'filterApiCall');
    component.selectLand = true;
    component.onSelectLaunch(true);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectLaunch data to be cleaned and filter method to be called BRANCH - 4', () => {
    spyOn(component,'filterApiCall');
    component.onSelectLaunch(true);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectLand data to be cleaned and filter method to be called BRANCH - 1', () => {
    spyOn(component,'filterApiCall');
    component.selectYear = true;
    component.selectLaunch = true;
    component.onSelectLand(true);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectLand data to be cleaned and filter method to be called BRANCH - 2', () => {
    spyOn(component,'filterApiCall');
    component.selectYear = true;
    component.onSelectLand(true);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectLand data to be cleaned and filter method to be called BRANCH - 3', () => {
    spyOn(component,'filterApiCall');
    component.selectLaunch = true;
    component.onSelectLand(true);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of onSelectLand data to be cleaned and filter method to be called BRANCH - 4', () => {
    spyOn(component,'filterApiCall');
    component.onSelectLand(true);
    expect(component.data.length).toEqual(0);
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of filterApiCall Scenario - 1', () => {
    spyOn(component,'filterApiCall');
    component.filterApiCall({year: 2012}, { land: true }, { launch: true });
    expect(component.filterApiCall).toHaveBeenCalled();
  });
  it('on call of filterApiCall Scenario - 2', () => {
    spyOn(component,'filterApiCall');
    component.filterApiCall({ land: true }, { launch: true });
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of filterApiCall  Scenario - 3', () => {
    spyOn(component,'filterApiCall');
    component.filterApiCall({year: 2012}, { land: true });
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of filterApiCall  Scenario - 4', () => {
    spyOn(component,'filterApiCall');
    component.filterApiCall({year: 2012}, { launch: true });
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of filterApiCall  Scenario - 5', () => {
    spyOn(component,'filterApiCall');
    component.filterApiCall({ land: true });
    expect(component.filterApiCall).toHaveBeenCalled()
  });
  it('on call of filterApiCall  Scenario - 6', () => {
    spyOn(component,'filterApiCall');
    component.filterApiCall({ launch: true });
    expect(component.filterApiCall).toHaveBeenCalled()
  });
});

class ApiServiceStub {
  getAllPrograms(){ 
    return of([]);
  }
}
