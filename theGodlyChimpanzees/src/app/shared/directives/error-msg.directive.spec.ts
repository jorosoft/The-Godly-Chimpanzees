import { ElementRef } from '@angular/core';
import { ErrorMsgDirective } from './error-msg.directive';

describe('ErrorMsgDirective', () => {
  it('should create an instance', () => {
    const el = {
        nativeElement: {
            style: {
                backgroundColor: ''
            }
        }
      };
    const directive = new ErrorMsgDirective(el);
    expect(directive).toBeTruthy();
  });
});
