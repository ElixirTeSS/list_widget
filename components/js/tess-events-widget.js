'use strict';
var TessApi = require('tess_json_api');
var TessWidget = require('./tess-widget.js');

var defaultRenderers = {
    FacetedTable: require('./renderers/faceted-table-renderer.js'),
    SimpleList: require('./renderers/simple-list-renderer.js'),
    DropdownTable: require('./renderers/dropdown-table-renderer.js'),
    GoogleMap: require('./renderers/google-map-renderer.js')
};

/**
 * A TeSS events widget.
 *
 * @constructor
 * @param {Object} element - The HTML element to contain the widget
 * @param {defaultRenderers|Object} renderer - The renderer that determines how the widget is displayed.
 *                                             The following pre-defined renderers are available:
 *                                             "FacetedTable", "DropdownTable", "SimpleList", "GoogleMap"
 * @param {Object} options
 * @param {Object} options.opts - Options to pass through to the renderer.
 * @param {Object} options.params - Pre-applied filters to the set of events from TeSS.
 */
function TessEventsWidget(element, renderer, options) {
    if (!renderer)
        renderer = 'FacetedTable';

    if (typeof renderer === 'string' || renderer instanceof String)
        renderer = defaultRenderers[renderer];

    TessWidget.call(this, element, renderer, options);
    this.api = new TessApi.EventsApi();
    this.endpoint = 'eventsGet';
}

TessEventsWidget.prototype = Object.create(TessWidget.prototype);
TessEventsWidget.prototype.constructor = TessEventsWidget;

module.exports = TessEventsWidget;