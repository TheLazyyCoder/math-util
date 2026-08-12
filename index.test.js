const assert = require('assert');
const { add, subtract } = require('./index');

console.log('Running sample package tests...');

try {
  // Test addition
  assert.strictEqual(add(2, 3), 5, '2 + 3 should equal 5');
  
  // Test subtraction
  assert.strictEqual(subtract(10, 4), 6, '10 - 4 should equal 6');
  
  console.log('✅ All tests passed successfully!');
  process.exit(0);
} catch (error) {
  console.error('❌ Test failed:', error.message);
  process.exit(1);
}
