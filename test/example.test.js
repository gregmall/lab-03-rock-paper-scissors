// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow } from '../r-p-g.js';

const test = QUnit.test;

test('should randomly return one of 3 different strings', (assert) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(expected, actual === 'rock' || actual === 'paper' || actual === 'scissors');
    
});
