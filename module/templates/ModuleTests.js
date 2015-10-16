jest.dontMock('../<%= moduleName %>Page');

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTestUtils = require('react-addons-test-utils');
var <%= moduleName %>Page = require('../<%= moduleName %>Page');
var testingComponent;

describe('<%= moduleName %>Page', function() {
  beforeEach(function() {
    testingComponent = ReactTestUtils.renderIntoDocument(<<%= moduleName %>Page />);
  });

  it('should render the <%= moduleName %>Page', function() {
    testingComponent = ReactDOM.findDOMNode(testingComponent);

    expect(ReactTestUtils.isDOMComponent(testingComponent)).toBeTruthy();
  });

});
