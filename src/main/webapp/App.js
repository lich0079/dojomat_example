define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojomat/Application",
    "dojomat/populateRouter",
    "dojo/domReady!"
], function(
    declare,
    lang,
    Application,
    populateRouter
) {
    return declare([Application], {
        constructor: function () {
            populateRouter(this, {
                home: {
                    schema: '/demo/',
                    widget: "my/SomeWidget"
                },
                productIndex: {
                    schema: '/products',
                    widget: "my/SomeWidget"
                }
            });
            this.run();
        }
    });
});