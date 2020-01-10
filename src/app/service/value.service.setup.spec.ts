import { MasterService } from "./master.service";

function setup() {
    const valueServiceSpy =
      jasmine.createSpyObj('ValueService', ['getValue']);
    const stubValue = 'stub value';
    const masterService = new MasterService(valueServiceSpy);
  
    valueServiceSpy.getValue.and.returnValue(stubValue);
    return { masterService, stubValue, valueServiceSpy };
  }

  it('#getValue should return stubbed value from a spy', () => {
    const { masterService, stubValue, valueServiceSpy } = setup();
    expect(masterService.getValue())
      .toBe(stubValue, 'service returned stub value');
    expect(valueServiceSpy.getValue.calls.count())
      .toBe(1, 'spy method was called once');
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue)
      .toBe(stubValue);
  });