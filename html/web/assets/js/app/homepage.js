/**
 * The module loaded on the homepage
 */
define(['jquery', 'domReady!', 'app/modules/events_inline_edit'], function ($, doc, EventsEdit) {
    var eventsEdit = new EventsEdit($('.events'));
});
