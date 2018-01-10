import { TestBed, inject } from '@angular/core/testing';

import { ColleguesService } from './collegues.service';

describe('ColleguesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ColleguesService]
    });
  });

  it('should be created', inject([ColleguesService], (service: ColleguesService) => {
    expect(service).toBeTruthy();
  }));
});
