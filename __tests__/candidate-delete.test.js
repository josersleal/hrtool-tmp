'use strict';

// tests for candidate-delete
// Generated by serverless-jest-plugin

const mod = require('./..\functions\candidates\delete');

const jestPlugin = require('serverless-jest-plugin');
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'handler' });

describe('candidate-delete', () => {
  beforeAll((done) => {
//  lambdaWrapper.init(liveFunction); // Run the deployed lambda

    done();
  });

  it('implement tests here', () => {
    return wrapped.run({}).then((response) => {
      expect(response).toBeDefined();
    });
  });
});
