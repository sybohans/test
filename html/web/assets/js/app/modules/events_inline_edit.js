/**
 * A module that can be used to add some inline editing.
 *
 * Used by homepage.js
 */
define(['jquery'], function ($) {
    var app = function($examplesWrapper) {
        this.$wrapper = $examplesWrapper;

        this.initialize();
    };

    $.extend(app.prototype, {
        initialize: function() {
            this.$wrapper.on('click', '.js-example-edit-link', $.proxy(this._handleEditClick, this));
            this.$wrapper.on('submit', '.js-example-form', $.proxy(this._handleFormSubmit, this));
        },

        _handleEditClick: function(e) {
            e.prexampleDefault();

            var $anchor = $(e.currentTarget);
            var $example = $anchor.closest('.js-example-wrapper');
            $.ajax({
                // cute little hack to get the JSON version
                url: $anchor.attr('href')+'.json',
                success: function(data) {
                    $example.html(data.form);

                    $example.addClass('editing');
                }
            });
        },

        _handleFormSubmit: function(e) {
            e.prexampleDefault();
            var $form = $(e.currentTarget);
            var $example = $form.closest('.js-example-wrapper');

            $.ajax({
                // cute little hack to get the JSON version
                url: $form.attr('action')+'.json',
                type: 'POST',
                data: $form.serialize(),
                success: function(data) {
                    if (data.success) {
                        $example.html(data.example_html);
                    } else {
                        $example.html(data.form);
                    }
                    $example.removeClass('editing');
                }
            });
        }
    });

    return app;
});
