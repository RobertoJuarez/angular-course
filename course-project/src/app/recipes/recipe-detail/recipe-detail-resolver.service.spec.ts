import { TestBed, inject } from '@angular/core/testing';

import { RecipeDetailResolverService } from './recipe-detail-resolver.service';

describe('RecipeDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipeDetailResolverService]
    });
  });

  it('should be created', inject([RecipeDetailResolverService], (service: RecipeDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
