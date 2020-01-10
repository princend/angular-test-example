import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TwainService } from './twain.service';

describe('TwainService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [TwainService]
  }));

  it('should be created', () => {
    const service: TwainService = TestBed.get(TwainService);
    expect(service).toBeTruthy();
  });
});
