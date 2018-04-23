import { pet } from './../src/tama-pet.js';

describe('TamaPet', function() {
  let testPet = pet;
  it('should create a hungry pet', function() {
    expect(testPet.tummy).toEqual(0);
  });
});
