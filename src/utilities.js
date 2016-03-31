'use strict';

var stripCssComments = require('strip-css-comments');

var Utilities = {
  stripNewLinesAndSemicolons: function(scssString) {
    return scssString.replace(/\n/g, '').replace(/\;/g, '');
  },

  stripSpaces: function(scssString) {
    return scssString.replace(/\s/g, '');
  },

  removeFlags: function(value) {
    return value.replace(/\!\w+/g, '');
  },

  removeInlineComments: function(value) {
    var transformedValue = value;
    transformedValue = value.replace(/^\/\/.*$/mg, '');

    return transformedValue;
  },

  removeComments: function (value) {
    var transformedValue = value;
    transformedValue = this.removeInlineComments(transformedValue);
    transformedValue = stripCssComments(value);

    return transformedValue;
  }
};

module.exports = Utilities;
