import { TestBed } from '@angular/core/testing';

import { ChannelResolverService } from './channel-resolver.service';

describe('ChannelResolverService', () => {
  let service: ChannelResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChannelResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
