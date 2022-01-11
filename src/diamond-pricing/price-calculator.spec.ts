import { PriceCalculator } from './price-calculator';


describe('PriceCalculator', () => {
  
  const sut = new PriceCalculator(); 
  
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  it('should be defined', () => {
    expect(sut).toBeDefined();
  });

  // that's me just testing my Math.random mock to be relaxed :) 
  it('math.random() should be mocked correctly and return 0.5', () => {
    expect(Math.random()).toBe(0.5);
  });

  it('calculate should return 0 when carat is <=0', () => {
    expect(sut.calculate(0,1,1,1)).toBe(0);
    expect(sut.calculate(-1,1,1,1)).toBe(0);
  });

  it('calculate should return 0 when shapeId is 0', () => {
    expect(sut.calculate(1,0,1,1)).toBe(0);
    expect(sut.calculate(1,-1,1,1)).toBe(0);
  });

  it('calculate should return 0 when colorId is 0', () => {
    expect(sut.calculate(1,1,0,1)).toBe(0);
    expect(sut.calculate(1,1,-1,1)).toBe(0);
  });

  it('calculate should return 0 when clarityId is 0', () => {
    expect(sut.calculate(1,1,1,0)).toBe(0);
    expect(sut.calculate(1,1,1,-1)).toBe(0);
  });

  it('calculate should return 1600 when all are 1', () => {
    expect(sut.calculate(1,1,1,1)).toBe(1600);
  });

  it('calculate should return 4400 when all are 2', () => {
    expect(sut.calculate(2,2,2,2)).toBe(4400);
  });

  it('calculate should match when carat is > 5 and all other are the same', () => {
    expect(sut.calculate(5,1,1,1)).toEqual(sut.calculate(100,1,1,1));
  });

});
