import { TestBed } from '@angular/core/testing';

import { UserNameService } from './username.service';

describe('UsernameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserNameService = TestBed.get(UserNameService);
    expect(service).toBeTruthy();
  });
});
