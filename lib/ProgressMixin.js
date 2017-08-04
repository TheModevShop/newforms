'use strict';

var is = require('isomorph/is')
var React = require('react')
var PropTypes = require('proptypes')

var ProgressMixin = {
  propTypes: {
    progress: PropTypes.any // Component or function to render async progress
  },

  renderProgress:function() {
    if (!this.props.progress) {
      return React.createElement("progress", null, "Validating...")
    }
    if (is.Function(this.props.progress)) {
      return this.props.progress()
    }
    return React.createElement(this.props.progress, null)
  }
}

module.exports = ProgressMixin