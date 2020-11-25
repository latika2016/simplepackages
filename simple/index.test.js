const { simpleMsg } = require('./index');

describe('Simple package test suite', () => {
    it('prints the message', () => {
        expect(simpleMsg()).toEqual('This is a message from simple package');
    })
});
