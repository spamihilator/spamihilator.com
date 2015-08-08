$(document).ready(function() {
    //enable smooth scrolling
    //$('a').smoothScroll({ speed: 'auto' });
    
    //enable smooth scrolling with back button support
    $('a[href*="#"]:not(.cc_more_info):not(.cc_btn)').live('click', function() {
      if (this.hash) {
        var tgt = this.hash.slice(1);
        $.bbq.pushState('#/' + tgt);
        if (document.getElementById(tgt)) {
          $.smoothScroll({scrollTarget: '#' + tgt});
        }
        return false;
      }
    });

    $(window).bind('hashchange', function(event) {
      var tgt = location.hash.replace(/^#\/?/, '');
      if (document.getElementById(tgt)) {
        $.smoothScroll({scrollTarget: '#' + tgt});
      }
    });

    $(window).trigger('hashchange');
});
