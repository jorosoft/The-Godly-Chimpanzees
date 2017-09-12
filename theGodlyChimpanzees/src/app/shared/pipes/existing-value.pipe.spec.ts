import { ExistingValuePipe } from './existing-value.pipe';

describe('ExistingValuePipe', () => {
  it('create an instance', () => {
    const pipe = new ExistingValuePipe();
    expect(pipe).toBeTruthy();
  });
});
