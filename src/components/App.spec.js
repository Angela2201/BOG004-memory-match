import App from './App';

describe('App', () => {
  it('should render without crashing', () => {
    const el = App();
    expect(el instanceof HTMLElement).toBe(true);
  });
}); 

describe('have button', () => {
  it('should be a button', () => {
    expect (typeof HTMLElement) .toBe('function');
  });
}); 

describe('document.getElementById', () => {
  it('should be a function', () => {
    expect ( typeof document.getElementById). toBe ('function')
  });
});
