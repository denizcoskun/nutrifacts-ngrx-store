import { TestBed, inject } from '@angular/core/testing';

import { NutrionService } from './nutrition.service';

describe('NutrionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutritionService]
    });
  });

  it('should ...', inject([NutritionService], (service: NutrionService) => {
    expect(service).toBeTruthy();
  }));
});
