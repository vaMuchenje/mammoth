$(document).ready(function() {
    function G() {
        if (C < E) {
            var a = C;
            a++, $(F).addClass("scrolling").scrollTo(".section:eq(" + a + ")", 600, {
                offset: 0,
                axis: "y",
                easing: "swing",
                onAfter: function() {
                    C = a, $(F).removeClass("scrolling")
                }
            })
        }
    }

    function H() {
        if (C > 0) {
            var a = C;
            a--, $(F).addClass("scrolling"), $(F).scrollTo(".section:eq(" + a + ")", 600, {
                offset: 0,
                axis: "y",
                easing: "swing",
                onAfter: function() {
                    C = a, $(F).removeClass("scrolling")
                }
            })
        }
    }

    function L(a, b) {
        K = b;
        var c = (new Date).getTime();
        return c - I < J + 1e3 ? void a.preventDefault() : (K < 0 ? G() : H(), void(I = c))
    }
    var a = $("#gallery"),
        l = ($("#gallerybond"), $("#gallerywt"), $("#galleryanomaly"), $("#galleryw22"), $("#gallerych"), $("#galleryandela"), $("#gallerynuts"), $("#gallerymadison"), $("#gallerysoho"), $("#gallerypav"), $("#neighborhood")),
        m = $("#design"),
        n = $("#quote2"),
        o = $("#design span.cover"),
        p = $("#materials"),
        q = $("#re"),
        r = $(".scroll"),
        t = ($("#collab"), $(".spot .toggle")),
        u = $("blockquote span"),
        v = $(".floor-select li"),
        w = $(".vid, .play"),
        x = $("#gallery"),
        y = $(".floors"),
        z = $(".wrap > section"),
        A = $(".wrap > section"),
        B = $(".fill");
    $(z).height($(window).height() + 2), $(B).height($(window).height() + 2), $(window).resize(function() {
        $(z).height($(window).height() + 2), $(B).height($(window).height() + 2)
    }), $(function() {
        var a = $("body");
        $(z).waypoint(function(b) {
            a.toggleClass(this.id + "-visible", "down" === b), $(this).addClass("init", "down" === b), $(this).toggleClass("active", "down" === b);
            var c = $('.wayfinding a[href="#' + this.id + '"]');
            c.toggleClass("active", "down" === b)
        }, {
            offset: "50%",
            context: ".frame"
        }).waypoint(function(b) {
            $(this).addClass("init", "up" === b), $(this).toggleClass("active", "up" === b);
            var c = $('.wayfinding a[href="#' + this.id + '"]');
            c.toggleClass("active", "up" === b), a.toggleClass(this.id + "-visible", "up" === b)
        }, {
            offset: "-50%",
            context: ".frame"
        })
    }), $(function() {
        $(A).waypoint(function(a) {
            $(this).toggleClass("visible", "down" === a)
        }, {
            offset: "80%",
            context: ".frame"
        }).waypoint(function(a) {
            $(this).toggleClass("visible", "up" === a)
        }, {
            offset: function() {
                return -$(this).height() + 100
            },
            context: ".frame"
        })
    });
    var C = 0,
        E = $(".section").size(),
        F = $(".frame");
    $(".wayfinding a").on("click", function(a) {
        var b = $(this).index();
        b = b++, $(F).scrollTo(".section:eq(" + b + ")", 600, {
            easing: "swing",
            offset: 0,
            axis: "y",
            onAfter: function() {
                C = b
            }
        }), a.preventDefault()
    }), $(document).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(a) {
        a.preventDefault();
        var b = a.originalEvent.wheelDelta || -a.originalEvent.detail;
        if (0 == b) var b = a.deltaY;
        L(a, b)
    });
    var I, K, J = 500;
    $(document.documentElement).keydown(function(a) {
        var b = null,
            c = a.keyCode ? a.keyCode : a.charCode;
        if (40 === c ? G() : 38 === c && H(), null !== b && G(), c >= 38 && c <= 40) return a.preventDefault(), !1
    }), $(".frame").scroll(function() {
        var b = $(this).scrollTop(),
            c = a.offset(),
            d = l.offset(),
            e = m.offset(),
            f = n.offset(),
            h = (p.offset(), q.offset());
        if (b > 0) {
            if ($(r).addClass("min"), a.hasClass("visible")) {
                var i = .5 * (b - c.top) + 0;
                $("html").hasClass("csstransforms3d") ? a.css({}) : a.css({
                    top: "" + i + "px"
                })
            }
            if (l.hasClass("visible")) {
                var j = .2 * (b - d.top) + 0;
                $("html").hasClass("csstransforms3d") ? l.find(".cover").css({}) : l.find(".cover").css({
                    top: "" + j + "px"
                })
            }
            if (m.hasClass("visible")) {
                var k = .5 * (b - e.top) + 0,
                    s = .9 * (b - e.top) * .01 - .1;
                $("html").hasClass("csstransforms3d") ? (m.find(".cover").css({}), o.css({
                    opacity: "" + s
                })) : m.find(".cover").css({
                    top: "" + k + "px"
                })
            }
            if (n.hasClass("visible")) {
                var t = .5 * (b - f.top) + 0;
                $("html").hasClass("csstransforms3d") ? n.find(".cover").css({}) : n.find(".cover").css({
                    top: "" + t + "px"
                })
            }
            if (q.hasClass("visible")) {
                var u = .5 * (b - h.top) + 0;
                $("html").hasClass("csstransforms3d") ? q.find(".cover").css({}) : q.find(".cover").css({
                    top: "" + u + "px"
                })
            }
        } else $(r).removeClass("min")
    }), $(t).click(function(a) {
        var b = $(this).closest(".spot");
        $(b).hasClass("open") ? $(b).removeClass("open") : $(b).addClass("open"), a.preventDefault()
    }), $(u).each(function() {
        var a = $(this).data("delay");
        $(this).css("-webkit-transition-delay", "" + a + "s")
    }), $(window).load(function() {
        $(x).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#details",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#details").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(window).load(function() {
        $(gallerybond).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#bond",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#bond").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(window).load(function() {
        $(gallerywt).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#wt",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#wt").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(window).load(function() {
        $(galleryanomaly).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#anomaly",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#anomaly").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(window).load(function() {
        $(galleryw22).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#w22",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#w22").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(window).load(function() {
        $(gallerych).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#ch",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#ch").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(window).load(function() {
        $(galleryandela).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#andela",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#andela").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(window).load(function() {
        $(gallerynuts).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#nuts",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#nuts").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(window).load(function() {
        $(gallerymadison).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#madison",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#madison").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(window).load(function() {
        $(gallerysoho).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#soho",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#soho").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(window).load(function() {
        $(gallerypav).flexslider({
            namespace: "g-",
            selector: ".slides > .slide",
            slideshow: !1,
            controlsContainer: "#pav",
            animationSpeed: "700",
            animation: "slide",
            before: function(a) {
                $("#pav").removeClass("wait"), a.removeClass("going-left going-right");
                var b = a.currentSlide,
                    c = a.animatingTo;
                b < c ? a.addClass("going-right") : a.addClass("going-left")
            }
        })
    }), $(w).click(function() {
        var a = $(this).children("video"),
            b = $(this).children(".play"),
            c = a.get(0);
        c.paused ? ($(a).parent().hasClass("ended") && ($(this).closest(".ended").removeClass("ended"), $(this).removeClass("active")), $(c).addClass("playing").removeClass("manual-pause"), c.play(), b.addClass("active")) : ($(c).removeClass("playing").addClass("manual-pause"), c.pause(), b.removeClass("active"))
    }), $(".play").click(function() {
        var a = $(this).prev("video"),
            b = $(this),
            c = a.get(0);
        $(this).closest(".vid").hasClass("ended") && (c.paused ? ($(a).parent().hasClass("ended") && ($(this).closest(".ended").removeClass("ended"), $(this).removeClass("active")), $(c).addClass("playing").removeClass("manual-pause"), c.play(), b.addClass("active")) : ($(c).removeClass("playing").addClass("manual-pause"), c.pause(), b.removeClass("active")))
    }), $(v).click(function() {
        var a = $(this).data("floor");
        a -= 1, $(v).removeClass("active"), $(this).addClass("active"), y.find("figure").removeClass("show"), y.find("figure:eq(" + a + ")").addClass("show")
    }), $("body").addClass("ready");
    var M = {
        full_bleed: function(a, b, c, d) {
            var e = c,
                f = d,
                g = f / e;
            return c = a, d = a * g, d < b && (d = b, c = d / g), {
                width: c,
                height: d
            }
        }
    };
    jQuery(document).ready(function(a) {
        function b() {
            var b = Math.round(a(window).height()),
                c = Math.round(a(window).width()),
                d = a(".fill");
            d.each(function() {
                var d = a(this).height(),
                    e = a(this).width(),
                    f = M.full_bleed(c, b, e, d);
                a(this).width(f.width).height(f.height).css("marginLeft", (c - f.width) / 2).css("marginTop", (b - f.height) / 2)
            })
        }
        b(), a(window).resize(function() {
            b()
        })
    }), $(r).on("click", function(a) {
        var b = $(".section.active").index();
        b = b++, $(F).scrollTo(".section:eq(" + b + ")", 600, {
            easing: "swing",
            offset: 0,
            axis: "y",
            onAfter: function() {
                C = b
            }
        }), a.preventDefault()
    })
});