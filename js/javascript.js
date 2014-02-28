"use strict";

(function ($) {
    var fadeTimeInMillis = 1000,
        presentationTimeInMillis = 1000,
        $textbox = $("#textbox"),
        // magic texts should probably be retrieved from any external service / repository
        magicTexts = [
            'Geh du alter Esel! Hole Fische!',
            'Kuno fand beim Essen Astern des Gesandten Cäsar.',
            'Ein Neger mit Gazelle zagt im Regen nie.'
        ],
        magicTextsLength = magicTexts.length;

    // Executes the fade in fade out cycles including text population
    function nextCycle(i) {
        // put text in text box
        $textbox.text(magicTexts[i]);

        $textbox.fadeIn(fadeTimeInMillis);

        // schedule fade out
        setTimeout(function () {
            $textbox.fadeOut(fadeTimeInMillis);
        }, presentationTimeInMillis + fadeTimeInMillis);

        // schedule next cycle if further text is available
        setTimeout(function () {
            if (i + 1 < magicTextsLength) {
                nextCycle(i + 1)
            } else {
                // called at the end of the cycles
                $(".enlightened").fadeIn(5000);
                $(".resistance").fadeOut(5000);
            }
        }, presentationTimeInMillis + 2 * fadeTimeInMillis);
    }

    if (magicTextsLength > 0) {
        // Go for gold ;-)
        nextCycle(0);
    }
})(jQuery);
