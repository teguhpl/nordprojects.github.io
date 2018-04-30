var responseStyleElements = $('[data-mobile-style], [data-desktop-style], [data-big-desktop-style]');

responseStyleElements.each(function (i, el) {
    var $el = $(el);
    $el.data('original-style', $el.attr('style') || '');
});

function updateStyle() {
    responseStyleElements.each(function (i, el) {
        var $el = $(el);
        var windowWidth = window.innerWidth;

        if (windowWidth < 768) {
            var mobileStyle = $el.data('mobile-style') || '';
            $el.attr('style', $el.data('original-style')+';'+mobileStyle);
        } else if (windowWidth < 1200) {
            var desktopStyle = $el.data('desktop-style') || '';
            $el.attr('style', $el.data('original-style')+';'+desktopStyle);
        } else {
            var desktopStyle = $el.data('desktop-style') || '';
            var bigDesktopStyle = $el.data('big-desktop-style') || '';
            $el.attr('style', $el.data('original-style')+';'+desktopStyle+';'+bigDesktopStyle);
        }
    })
}

$(window).resize(function () {
    updateStyle();
})

updateStyle();
