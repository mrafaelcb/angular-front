import { TestBed } from '@angular/core/testing';

import { UsuarioClientService } from './usuario-client.service';

describe('UsuarioClientService', () => {
  let service: UsuarioClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
