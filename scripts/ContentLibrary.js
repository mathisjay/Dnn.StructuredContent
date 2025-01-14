﻿'use strict';
define(
    function () {

        return {
            init: function (wrapper, util, params, callback) {
                //console.log("init");
                // load angular and bootstrap first 
                require(
                    [
                        "https://ajax.googleapis.com/ajax/libs/angularjs/1.7.2/angular.min.js",
                        "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/plugins/bootstrap/js/bootstrap.bundle.min.js",
                        "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/plugins/pluralize/pluralize.js"
                    ],
                    function () {
                        //console.log("angular and bootstrap loaded");
                        // next load all the items that depend on angular
                        require([
                            "https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular-messages.min.js",
                            "https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular-animate.min.js",
                            "https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular-sanitize.min.js",
                            "https://ajax.googleapis.com/ajax/libs/angularjs/1.7.8/angular-cookies.min.js",
                            "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/plugins/angular-toastr/angular-toastr.tpls.min.js",
                            "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/plugins/ui.bootstrap/ui-bootstrap-tpls-2.5.0.min.js",
                            "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/plugins/angular-drap-and-drop-lists/angular-drap-and-drop-lists.min.js",
                            "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/plugins/ngMask/ngMask.js",                            
                            "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/plugins/ace/ace.js",
                            "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/app.js"


                        ], function () {
                            //console.log("app loaded");
                            //next load all the things that depends on the app                            
                            require([
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/plugins/ace/ui-ace.js",

                                // content-field-type-options
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/boolean/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/boolean/controller.js",  
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/choice/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/choice/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/date-time/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/date-time/controller.js",                                
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/email/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/email/controller.js",                                
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/number/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/number/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/phone-number/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/phone-number/controller.js",                                                                
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/static/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/static/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/text/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/text/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/url/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-type-options/url/controller.js",


                                // content-field-types
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/service.js",

                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/boolean/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/boolean/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/choice/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/choice/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/choice/edit/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/date-time/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/date-time/controller.js",                                
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/email/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/email/controller.js",                                
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/number/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/number/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/phone-number/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/phone-number/controller.js",                                
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/related-content-multiple/list/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/related-content-multiple/list/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/related-content-multiple/add/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/related-content-multiple/add/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/related-content-multiple/delete/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/related-content-multiple/delete/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/related-content-single/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/related-content-single/controller.js",                                
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/static/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/static/controller.js",                                
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/text/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/text/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/url/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-field-types/url/controller.js",

                                // content-types
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-types/service.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-types/list/directive.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-types/list/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-types/add/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-types/edit/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-types/delete/controller.js",


                                // content-fields
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-fields/service.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-fields/edit/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-fields/delete/controller.js",

                                // content-item
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-items/service.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-items/list/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-items/edit/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/content-items/delete/controller.js",

                                // relationship
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/relationships/service.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/relationships/edit/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/relationships/delete/controller.js",

                                // revision
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/revisions/service.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/revisions/detail/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/revisions/list/controller.js",

                                // visualizer-template
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/visualizer-templates/service.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/visualizer-templates/list/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/visualizer-templates/edit/controller.js",
                                "/DesktopModules/Admin/Dnn.PersonaBar/Modules/Dnn.StructuredContent/app/visualizer-templates/delete/controller.js"
                            ], function () {
                                //console.log('everything is loaded');
                                // manually bootstrap the angular app 

                                angular.element(function () {
                                    angular.bootstrap(document.getElementById('StructuredContent'), ['StructuredContent']);
                                });
                            });
                        });
                    }
                );
            },

            initMobile: function (wrapper, util, params, callback) {
                //console.log("init mobile");
            },

            load: function (params, callback) {
                //console.log("load");
            },

            loadMobile: function (params, callback) {
                //console.log("load mobile");
            }
        };
    }
);


