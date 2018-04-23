import { pet } from './../src/tama-pet.js';

describe('TamaPet', function() {
  let testPet = pet;

  beforeEach(function() {
    jasmine.clock().install();
    testPet.hunger();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
    testPet.hunger();
  });

  it('should create an initial pet', function() {
    expect(testPet.tummy).toEqual(10);
  });
  it('should die', function() {
    jasmine.clock().tick(10001);
    expect(testPet.tummy).toEqual(0);
  });
  it('should die and sting is returned', function() {
    jasmine.clock().tick(10001);
    expect(testPet.petCemetery()).toEqual(true);
  });
});
