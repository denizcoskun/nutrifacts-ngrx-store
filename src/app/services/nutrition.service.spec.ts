import { TestBed, inject } from '@angular/core/testing';

import { NutritionService } from './nutrition.service';

describe('NutrionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NutritionService]
    });
  });

  it('should ...', inject([NutritionService], (service: NutritionService) => {
    expect(service).toBeTruthy();
  }));
});
