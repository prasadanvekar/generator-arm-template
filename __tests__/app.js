'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-arm-template:app', () => {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app')).withPrompts({
      rgName: 'rgNameTest',
      region: 'regionTest'
    });
  });

  it('creates files', () => {
    assert.file(['Deploy-AzureResourceGroup.ps1']);
    assert.file(['azuredeploy.json']);
    assert.file(['azuredeploy.parameters.json']);
    assert.file(['.vscode/launch.json']);
  });
});
