/*!
 * uCalc v1.0.1 (http://ucalc.icitrine.com)
 * jQuery calculator widget
 * Written by Temitope Ogunniyi (2019)
 * Licensed under GNU GPLv3 (https://github.com/iCitrine/uCalc/blob/master/LICENSE)
 */

$( function() {
    
    $.widget( "icitrine.ucalc", {
        /** Default options for the calculator widget
            @property [type="sta"] {string} Specify the type of calculator
            "sta" for standard calculator, 
            "sci" for scientific calculator.
            @property [lock=false] {boolean} Specify whether the calculator should be restricted,
            <code>false</code> to allow switching between calculator type,
            <code>true</code> to restrict to selected calculator type.
            @property [xpos=10] {number} Absolute position in pixels from the left relative to browser window.
            @property [ypos=10] {number} Absolute position in pixels from the top relative to browser window.
        */
        options: {
            type: "sta",
            lock: true,
            xpos: 10,
            ypos: 10
        },

        // Constructor
        _create: function() {
            this.element
                // Add class for theming
                .addClass( "ucalc-opened" );
        },

        // Clean up
        _destroy: function() {
            this.element
                .removeClass( "ucalc-opened" );
        }
    });
    // end of widget
});