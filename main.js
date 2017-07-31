window.$ = window.jQuery;
jQuery = $

import { foundation } from 'foundation-sites'
import { magnificPopup } from 'magnific-popup'
import { slick } from 'slick-carousel'
import { mmenu } from 'jquery.mmenu'

import { readmore } from 'readmore-js'
import 'shariff'

import 'shariff/build/shariff.min.css'



import 'magnific-popup/src/css/main.scss'
import 'slick-carousel/slick/slick.scss'
import 'jquery.mmenu/src/core/oncanvas/jquery.mmenu.oncanvas.scss'
import 'jquery.mmenu/src/core/offcanvas/jquery.mmenu.offcanvas.scss'

import 'font-awesome/scss/font-awesome.scss'



require('./test.scss')

__webpack_public_path__ = "http://localhost/";

$(document).foundation()
$(document).ready(function() {
    $('.popup').magnificPopup({
        type: 'iframe'
    })

    $('.slider').slick({
        fade: false
    });

    $('.readmore').readmore({
        collapsedHeight: 50
    })

    $('#mmenu').mmenu();

    //   Get the API
    var API = $("#mmenu").data( "mmenu" );

    $(".menu-button").click(function() {
        API.open();
    });
})

