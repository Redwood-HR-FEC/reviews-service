
import React from 'react';
import { shallow } from 'enzyme';
import sum from '../client/components/Sum';

describe('Unit Tests', () => {
  describe('Dummy Tests', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sum(1, 2)).toBe(3);
    });
  });
});
