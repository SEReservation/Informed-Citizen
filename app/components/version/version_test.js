'use strict';

describe('informedCitizen.version module', function() {
  beforeEach(module('informedCitizen.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
