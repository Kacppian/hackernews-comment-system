import { TestBed, inject } from '@angular/core/testing';

import { RestCommentService } from './rest-comment.service';

describe('RestCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestCommentService]
    });
  });

  it('should be created', inject([RestCommentService], (service: RestCommentService) => {
    expect(service).toBeTruthy();
  }));
});
