import { TestBed } from '@angular/core/testing';

import { ChefsRepositoryService } from './chefs-repository.service';

describe('ChefsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChefsRepositoryService = TestBed.get(ChefsRepositoryService);
    expect(service).toBeTruthy();
  });
});
