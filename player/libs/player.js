/* jshint strict: false */

var $body       = $('body'),
    $nowServing = $('.serving'),
    $TopBanner  = $('.TopBanner');

var backgrounds = [
    { src: 'images/img1.jpg', valign: 'top' },
    { src: 'images/img2.jpg', valign: 'top' },
    { src: 'images/img3.jpg', valign: 'top' },
    { src: 'images/img4.jpg', valign: 'top' },
    { src: 'images/img5.jpg', valign: 'top' },
    { src: 'images/img6.jpg', valign: 'top' },
];

$body.vegas({
        preload: true,
        transitionDuration: 4000,
        delay: 10000,
        slides: backgrounds,
        transition: [ 'fade', 'zoomOut', 'swirlLeft', 'swirlRight' ]
});
