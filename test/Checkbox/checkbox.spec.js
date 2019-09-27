// /test/components/checkbox.test.js
const simulate = require('miniprogram-simulate')
const path = require('path');

test('Checkbox/checkbox', () => {
    const id = simulate.load(path.join(__dirname, '../src/Checkbox/checkbox'))
    // const comp = simulate.render(id)
    console.log(id)
})