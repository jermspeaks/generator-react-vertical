import React, { Component, PropTypes } from 'react';
import styles from './<%= moduleName %>Page.scss';
import <%= moduleName %>Store from '../../stores/<%= moduleName %>Store';
<% if (services) { %>import <%= moduleName %>Service from '../../stores/<%= moduleName %>Service';<% } %>

class <%= moduleName %>Page extends Component {

  // Include Context Types
  static contextTypes = {};

  // Include Property Types
  static propTypes = {};

  // Include Default Properties
  static defaultProps = {};

  constructor(props) {
    super(props);

    // Set State
  }

  componentWillMount() {
    // Mounting: called before the render method is executed
  }

  componentDidMount() {
    // Mounting: called after the render method is executed
  }

  componentWillReceiveProps() {
    // Props Change: only called when the props have changed and when this is not an initial rendering.
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Props or State Change: called before the render method and enables to define if a re-rendering is needed or can be skipped
    // @return boolean
  }

  componentWillUpdate() {
    // Props or State Change: called before the render method
  }

  componentDidUpdate() {
    // Props or State Change: called after the render method
  }

  componentWillUnmount() {
    // Unmounting: called before the component is removed from the DOM
    // Place cleanup operations here
  }

  render() {
    // Component HTML in JSX Syntax
    return (
      <div className='<%= moduleName %>Page'>
        <div className='<%= moduleName %>Page-container'></div>
      </div>
    );
  }

}

export default <%= moduleName %>Page;
