import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefinded', () => {
    const sut = createSut();
    expect(sut.sendMessage('Teste')).toBeUndefined();
  });

  it('should call console.log with "Message:" and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    const msg = 'Teste';
    sut.sendMessage(msg);
    expect(consoleSpy).toHaveBeenCalledWith('Message:', msg);
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('Teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
