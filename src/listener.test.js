const listener = require('./listener');

test('should call log with app', () => {
    const port = 3000;
    const log = jest.fn();
    listener(log, port);
    expect(log.mock.calls).toHaveLength(1);
    expect(log.mock.calls[0][0]).toBe(`App listening on port: ${port}`);
});
