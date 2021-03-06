/**
 * Created by macquest on 1/7/15.
 */

(function () {
    'use strict';

    var currentItem = {};

    $(document).on('pageinit', '#detail-page', function () {
        $('.item-title', this).text(currentItem.title);
        $('.item-desc', this).text(currentItem.desc);
        $('.item-label', this).text(currentItem.label);
    });

    $(document).on('pageinit', '#list-page', function () {
        $('.item', this).on('click', function () {
            currentItem = {
                title: $('.item-title', this).text(),
                desc: $('.item-desc', this).text(),
                label: $('.item-label', this).text()
            };

            app.navi.pushPage('detail.html');
        });
    });



})();


