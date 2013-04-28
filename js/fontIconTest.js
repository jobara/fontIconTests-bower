var fontTest = {};

(function ($) {
    fontTest.initLangSelect = function () {
        $(".languageSelect").change(function (event) {
            var val = $(event.target).val();
            $(".testSection").attr("lang", val);
        });
    };
    
    fontTest.preventDefaultClick = function (sel) {
        $(sel, ".testSection").click(function (event) {
            event.preventDefault();
        });
    };
    
    fontTest.radioSet = function (sel, callback) {
        $(sel).change(function (event) {
            callback($(event.target).val());
        });
    };
    
    var fontTypeOpts = {
        pua: {
            content: "&#xe000;",
            className: "icon-smiley",
            dataIconAlt: "&#xe002;"
        },
        ligature: {
            content: "spade",
            className: "icon-spades",
            dataIconAlt: "club"
        }
    }
    
    var encodeText = function (text) {
        return $("<div></div>").html(text).text(); // encodes entity values
    };
    
    fontTest.changeFontType = function (fontType) {
        var toRem = fontType === "pua" ? fontTypeOpts["ligature"] : fontTypeOpts["pua"];
        var toAdd = fontTypeOpts[fontType];
        var elms = $("." + toRem.className);
        
        $.each(elms, function (idx, elm) {
            var elm = $(elm);
            var newContent = encodeText(toAdd.content);
            var oldContent = encodeText(toRem.content);
            var altContent = encodeText(toAdd.dataIconAlt);
            elm.removeClass(toRem.className);
            elm.addClass(toAdd.className);
            elm.attr("data-icon", newContent);
            
            if (elm.attr("data-iconAlt")) {
                elm.attr("data-iconAlt", toAdd.dataIconAlt);
            }
            
            // if (elm.attr("data-iconAlt")) {
            //     elm.attr("data-iconAlt", altContent);
            // }
            if (elm.html()) {
                elm.html(elm.html().replace(oldContent, toAdd.content));
            };
            if (elm.val()) {
                elm.val(elm.val().replace(oldContent, newContent));
            }
            // if (elm.text()) {
            //                 elm.text(elm.text().replace(oldContent, newContent));
            //             }
            //             if (elm.val()) {
            //                 elm.val(elm.val().replace(oldContent, newContent));
            //             }
        });
    };
    
    var methodToggles = {
        "useClass": "dataIcon",
        "dataIcon": "useClass"
    };
    
    fontTest.changeMethod = function (className) {
        $(".testSection").addClass(className).removeClass(methodToggles[className]);
    };
})(jQuery);
