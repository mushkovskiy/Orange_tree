// const OrangeTree = require('../orange-tree');

// Test-Driven Development
describe('OrangeTree', () => {
  let tree;

  beforeEach(() => {
    tree = new OrangeTree(13, 5);
  });

  describe('age', () => {
    test('has an age', () => {
     expect(tree.age).toBe(13)
    });
  });

  describe('height', () => {
    test('has a height', () => {
    expect(tree.height).toBe(5)
    });
  });

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  describe('passGrowingSeason', () => {
    beforeEach(() => {
      tree = new OrangeTree(13, 5);
      // tree.passGrowingSeason()
    });
    test('should change the tree age', () => {
      tree.passGrowingSeason()
      expect(tree.age).toBe(14)
    });

    test('should make the tree grow', () => {
      // This should be more explicit. How much should the tree grow?
      tree.passGrowingSeason()
      expect(tree.height).toBe(7.5)
    });
    // If the tree is old enough to bear fruit
    test('should cause the tree to produce oranges', () => {
      tree.passGrowingSeason()
      expect(tree.oranges.length > 0).toBeTruthy()
    });
  });

  describe('isMature', () => {
    test('returns true if tree is old enough to bear fruit', () => {
      tree = new OrangeTree(13, 5)
      expect(tree.isMature()).toBeTruthy()
    });
    test('returns false if tree is not old enough to bear fruit', () => {
      tree = new OrangeTree(1, 5)
      expect(tree.isMature()).toBeFalsy()
    });
  });

  describe('isDead', () => {
    test('should return false for an alive tree', () => {
      tree = new OrangeTree(103, 5)
    expect(tree.isDead()).toBeFalsy()
    });
    test('should return true for a dead tree', () => {
      tree = new OrangeTree(13, 5)
      expect(tree.isDead()).toBeTruthy()
    });
  });

  describe('hasOranges', () => {
    test('should return true if oranges are on the tree', () => {
      tree = new OrangeTree(10, 5)
      tree.passGrowingSeason()
      expect(tree.hasOranges()).toBeTruthy()
    });

    test('should return false if the tree has no oranges', () => {
      tree = new OrangeTree(1, 5)
      tree.passGrowingSeason()
      expect(tree.hasOranges()).toBeFalsy()
    });
  });

  describe('pickAnOrange', () => {
    test('should return an orange from the tree', () => {
      tree = new OrangeTree(7, 5)
      tree.passGrowingSeason()
      expect(oranges.pop()).toBe()
    });
    test('the returned orange should no longer be on the tree', () => {

      expect().toBe()
    });
    test('should raise an error if the tree has no oranges', () => {

      expect().toBe()
    });
  });
});
