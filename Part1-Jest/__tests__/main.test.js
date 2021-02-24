const formatVolumeIconPath = require('../assets/scripts/main');

describe('My Icon Level', () => {
    test('Sound Value > 66', () => {
        expect(formatVolumeIconPath(67)).toMatch(/volume-level-3/);
    });
    test('Sound Value > 33 and <= 66', () => {
        expect(formatVolumeIconPath(55)).toMatch(/volume-level-2/);
    });
    test('Sound Value > 0 and <= 33', () => {
        expect(formatVolumeIconPath(22)).toMatch(/volume-level-1/);
    });
    test('Sound Value <= 0', () => {
        expect(formatVolumeIconPath(-100)).toMatch(/volume-level-0/);
    });
});