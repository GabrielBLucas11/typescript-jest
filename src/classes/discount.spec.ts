import {
  Discount,
  FiftyPercenteDiscount,
  NoDiscount,
  TenPercenteDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);
    expect(sut.calculateDiscount(10.99)).toBe(10.99);
  });

  it('should apply 50% discount', () => {
    const sut = createSut(FiftyPercenteDiscount);
    expect(sut.calculateDiscount(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount', () => {
    const sut = createSut(TenPercenteDiscount);
    expect(sut.calculateDiscount(109.9)).toBeCloseTo(98.91);
  });
});
