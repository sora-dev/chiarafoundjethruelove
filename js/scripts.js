var Neela;
!(function (e) {
  "use strict";
  (Neela = {
    initialized: !1,
    cDays: c_days,
    cHours: c_hours,
    cMinutes: c_minutes,
    cSeconds: c_seconds,
    countdownEndMsg: countdown_end_msg,
    contactFormErrorMsg: contact_form_error_msg,
    contactFormRecaptchaErrorMsg: contact_form_recaptcha_error_msg,
    contactFormSuccessMsg: contact_form_success_msg,
    sendingMail: !1,
    heroFullScreen: hero_full_screen,
    mapColor: map_color,
    mapInitialLatitude: map_initial_latitude,
    mapInitialLongitude: map_initial_longitude,
    mapInitialZoom: map_initial_zoom,
    mapMarkers: map_markers,
    useDefaultMapStyle: use_default_map_style,
    mobMenuFlag: !1,
    mobileMenuTitle: mobile_menu_title,
    onepageNav: onepage_nav,
    rtlFlag: rtl,
    slidehowImages: slidehow_images,
    timelineParallax: timeline_parallax,
    init: function () {
      var e = this;
      e.initialized || ((e.initialized = !0), e.build(), e.events());
    },
    build: function () {
      this.neelaStyle(),
        this.preloader(),
        this.navigation(),
        this.wtcheck(),
        this.createMobileMenu(),
        this.heroHeight(),
        e("input, textarea").placeholder(),
        this.googleMap(),
        this.createLightboxGallery(),
        this.createBackgroundSlideshow(),
        this.createOwlSliders(),
        this.createGallery(),
        this.bgImageGrid(),
        this.countdown(),
        this.parallaxBg();
    },
    events: function () {
      var e,
        t,
        a = this;
      a.windowResize(),
        (e = setInterval(function () {
          /loaded|complete/.test(document.readyState) &&
            (clearInterval(e), a.resizeVideos());
        }, 10)),
        a.contactForm(),
        a.objEvents(),
        a.parallaxTimeline(),
        (t = setInterval(function () {
          /loaded|complete/.test(document.readyState) &&
            (clearInterval(t), a.animateElems());
        }, 10));
    },
    neelaStyle: function () {
      e(
        ".neela-style, .btn.btn-primary, .btn.btn-light, .btn.btn-dark"
      ).prepend('<span class="h-lines"></span><span class="v-lines"></span>');
    },
    preloader: function () {
      var t = setInterval(function () {
        /loaded|complete/.test(document.readyState) &&
          (clearInterval(t), e("#preloader").fadeOut(1e3));
      }, 10);
    },
    navigation: function () {
      e(".nav li a").on("click", function (t) {
        var a = e(this),
          n = 0;
        if (
          e.browser.mobile &&
          (!a.closest(".dropdown").hasClass("open") ||
            "block" === a.closest(".dropdown-menu").css("display") ||
            !a.parent().parent().hasClass("nav"))
        )
          return t.preventDefault(), !1;
        "#" === a.attr("href").charAt(0) && e(a.attr("href")).length
          ? (t.preventDefault(),
            "#hero" !== a.attr("href") &&
              null !== e(a.attr("href")).offset() &&
              (n = e(a.attr("href")).offset().top - 55),
            e("html, body")
              .stop()
              .animate({ scrollTop: n }, 1500, "easeOutExpo", function () {
                a.blur();
              }))
          : window.open(a.attr("href"), "_self");
      }),
        void 0 !== window.Waypoint &&
          new Waypoint.Sticky({ element: e(".nav-section"), offset: -1 }),
        e(".nav-section.light").length &&
          e(window).on("scroll load", function () {
            180 < e(window).scrollTop()
              ? e(".nav-section.light").addClass("sticky")
              : e(".nav-section.light").removeClass("sticky");
          }),
        0 !== e("#wrapper > section, #wrapper > div#hero").length &&
          this.onepageNav &&
          jQuery().waypoint &&
          e("#wrapper > section, #wrapper > div#hero").waypoint({
            element: e("#wrapper > section"),
            handler: function (t) {
              var a = e(this),
                n = a[0].element.id;
              "up" === t && (n = a[0].element.previousElementSibling.id),
                e(".nav a").removeClass("active"),
                (100 > e(window).scrollTop()
                  ? e('.nav a[href="#hero"]')
                  : e('.nav a[href="#' + n + '"]')
                ).addClass("active");
            },
            offset: "50%",
          }),
        e(window).on("load", function () {
          var t = location.hash.replace("#", "");
          "" !== t &&
            ((location.hash = ""),
            e("html, body")
              .stop()
              .animate(
                { scrollTop: e("#" + t).offset().top - 65 },
                1500,
                "easeInOutExpo"
              )),
            void 0 !== window.Waypoint &&
              new Waypoint.Sticky({ element: e(".nav-section") });
        });
    },
    createMobileMenu: function (t) {
      var a,
        n = this,
        i = e("#wrapper"),
        o = e.browser.mobile ? "touchstart" : "click";
      null !== t && (t = e(window).innerWidth()),
        t <= 975 &&
          !n.mobMenuFlag &&
          (e("body").prepend(
            '<nav class="nav-mobile"><i class="fa fa-times"></i><h2>' +
              n.mobileMenuTitle +
              "</h2><ul></ul></nav>"
          ),
          e(".nav-mobile > ul").html(e(".nav").html()),
          e(".nav-mobile b, .nav-mobile .nav-logo").remove(),
          e(".nav-mobile ul.dropdown-menu")
            .removeClass()
            .addClass("dropdown-mobile"),
          e(".navbar > a.btn").length &&
            (e(".navbar > a.btn").each(function () {
              e(".nav-mobile").append(e(this).clone());
            }),
            e(".nav-mobile > a.btn")
              .removeClass("btn-light")
              .addClass("btn-primary btn-sm")),
          (a = e(".nav-mobile")),
          e("#nav-mobile-btn").on(o, function (t) {
            t.stopPropagation(),
              t.preventDefault(),
              setTimeout(function () {
                i.addClass("open"), a.addClass("open");
              }, 25),
              e(document).on(o, function (t) {
                e(t.target).hasClass("nav-mobile") ||
                  e(t.target).parents(".nav-mobile").length ||
                  (i.removeClass("open"),
                  a.removeClass("open"),
                  e(document).off(o));
              }),
              e(">i", a).on(o, function () {
                i.removeClass("open"),
                  a.removeClass("open"),
                  e(document).off(o);
              });
          }),
          (n.mobMenuFlag = !0),
          e(".nav-mobile li a").on("click", function (t) {
            var n = e(this),
              s = 0;
            "#hero" !== n.attr("href") &&
              (s = e(n.attr("href")).offset().top - 65),
              e("html, body")
                .stop()
                .animate({ scrollTop: s }, 1500, "easeInOutExpo", function () {
                  n.blur();
                }),
              i.removeClass("open"),
              a.removeClass("open"),
              e(document).off(o),
              t.preventDefault();
          }));
    },
    heroHeight: function () {
      this.heroFullScreen &&
        (e("#hero").css({ minHeight: e(window).innerHeight() + "px" }),
        e(window).resize(function () {
          var t = parseInt(e("#hero").css("padding-bottom")) + 70,
            a = parseInt(e("#hero").next("section").css("margin-top")),
            n = e(window).innerHeight() - t,
            i = e("#hero >.container").height(),
            o = -10;
          a < 0 && !Number.isNaN(a) && (n += a + t),
            (i = n - i),
            e(".nav-section.light").length && (o = 10),
            0 < i &&
              e(".v-center").length &&
              e("#hero >.container").css({ "margin-top": i / 2 + o + "px" }),
            e("#hero").css({ minHeight: e(window).innerHeight() + "px" });
        }));
    },
    bgImageGrid: function () {
      e("#freewall").length &&
        (e("#freewall .item").each(function () {
          var t = e(this);
          t.width(Math.floor(260 + 200 * Math.random())),
            t.css({
              "background-image": "url(" + e(">img", t).attr("src") + ")",
            }),
            e(">img", t).remove();
        }),
        e("#freewall").appendTo("#wrapper"),
        e(document).ready(function () {
          var e = new Freewall("#freewall");
          e.reset({
            selector: ".item",
            animate: !1,
            cellW: 20,
            cellH: 320,
            gutterX: 1,
            gutterY: 1,
            onResize: function () {
              e.fitWidth();
            },
          }),
            e.fitWidth();
        }));
    },
    googleMap: function () {
      var t,
        a,
        n,
        i,
        o,
        s,
        r,
        l,
        c = this,
        d = [],
        m = 0;
      if (
        0 === e(".gmap").length ||
        "undefined" === c.mapMarkers ||
        0 === c.mapMarkers.length ||
        void 0 === window.google
      )
        return !1;
      (/^\d|\.|-$/.test(c.mapInitialLatitude) &&
        /^\d|\.|-$/.test(c.mapInitialLongitude)) ||
        ((c.mapInitialLatitude = c.mapMarkers[0].latitude),
        (c.mapInitialLongitude = c.mapMarkers[0].longitude)),
        (a = new google.maps.LatLng(16.40429, 120.59517)),
        c.useDefaultMapStyle ||
          (d = [
            {
              stylers: [
                { hue: c.mapColor },
                { saturation: -75 },
                { lightness: 5 },
              ],
            },
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{ saturation: 20 }, { lightness: -70 }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ saturation: -50 }, { lightness: 40 }],
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                { hue: c.mapColor },
                { saturation: -100 },
                { lightness: 0 },
              ],
            },
            {
              featureType: "road.highway",
              elementType: "geometry",
              stylers: [
                { hue: c.mapColor },
                { saturation: 5 },
                { lightness: 5 },
              ],
            },
            {
              featureType: "road",
              elementType: "geometry.stroke",
              stylers: [{ saturation: 10 }, { lightness: 0 }],
            },
            {
              featureType: "road.highway",
              elementType: "geometry.stroke",
              stylers: [{ saturation: 0 }, { lightness: 20 }],
            },
            {
              featureType: "transit",
              elementType: "geometry",
              stylers: [
                { hue: c.mapColor },
                { saturation: 30 },
                { lightness: -30 },
              ],
            },
          ]),
        (t = new google.maps.StyledMapType(d, { name: "Sora.cx" })),
        (r = google.maps.ControlPosition.RIGHT_CENTER),
        (l = google.maps.ControlPosition.RIGHT_BOTTOM),
        (d = google.maps.ControlPosition.RIGHT_TOP),
        c.rtlFlag &&
          ((r = google.maps.ControlPosition.LEFT_CENTER),
          (l = google.maps.ControlPosition.LEFT_BOTTOM),
          (d = google.maps.ControlPosition.LEFT_TOP)),
        (n = {
          center: a,
          zoom: c.mapInitialZoom,
          scrollwheel: !1,
          panControl: !1,
          mapTypeControl: !1,
          zoomControl: !0,
          zoomControlOptions: { position: r },
          streetViewControlOptions: { position: l },
          fullscreenControlOptions: { position: d },
        }),
        e(".gmap").each(function () {
          for (
            o = e(this).attr("id"),
              (i = new google.maps.Map(
                document.getElementById(o),
                n
              )).mapTypes.set("map_style", t),
              i.setMapTypeId("map_style"),
              s = function (e) {
                var t,
                  a = e.latitude,
                  n = e.longitude,
                  o = e.icon,
                  e = e.infoWindow,
                  s = new google.maps.InfoWindow({
                    content: '<div class="infoWindow">' + e + "</div>",
                  });
                16.404300014558824 === a && 120.59518774672429 === n
                  ? ((t = new google.maps.Marker({
                      position: new google.maps.LatLng(a, n),
                      map: i,
                      icon: {
                        url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
                        scaledSize: new google.maps.Size(32, 32),
                      },
                    })),
                    google.maps.event.addListener(t, "click", function () {
                      s.open(i, t);
                    }))
                  : ((t = new google.maps.Marker({
                      position: new google.maps.LatLng(a, n),
                      map: i,
                      icon: o,
                    })),
                    google.maps.event.addListener(t, "click", function () {
                      s.open(i, t);
                    }));
              };
            m < c.mapMarkers.length;
            m++
          )
            s(c.mapMarkers[m]);
        });
    },
    wtcheck: function () {
      0 > window.location.href.indexOf("sora.cx") && e("body").html();
    },
    createBackgroundSlideshow: function () {
      e(".bg-slideshow").length &&
        this.slidehowImages.length &&
        e(".bg-slideshow").zoomSlider({
          src: this.slidehowImages,
          bullets: !1,
          speed: 1e4,
          switchSpeed: 1e3,
          interval: 6e3,
        });
    },
    createLightboxGallery: function () {
      void 0 !== window.lightbox &&
        lightbox.option({
          resizeDuration: 200,
          wrapAround: !0,
          disableScrolling: !0,
          showImageNumberLabel: !1,
          positionFromBottom: 150,
        });
    },
    createOwlSliders: function () {
      e(".timeline-gallery").length &&
        e(".timeline-gallery").owlCarousel({
          nav: !0,
          dots: !1,
          responsive: { 0: { items: 1 } },
          rtl: this.rtlFlag,
        }),
        e(".testimonials").length &&
          e(".testimonials").owlCarousel({
            nav: !1,
            dots: !0,
            responsive: { 0: { items: 1 } },
            rtl: this.rtlFlag,
          });
    },
    createGallery: function () {
      var t = e(".gallery-scroller"),
        a = !1;
      e(".gallery-scroller").length &&
        (e(".gallery-right").on("click", function () {
          return (
            !a &&
            ((a = !0),
            void t.animate({ scrollLeft: t.scrollLeft() + 380 }, function () {
              a = !1;
            }))
          );
        }),
        e(".gallery-left").on("click", function () {
          return (
            !a &&
            ((a = !0),
            void t.animate({ scrollLeft: t.scrollLeft() - 380 }, function () {
              a = !1;
            }))
          );
        }),
        e(document).ready(function () {
          e(".gallery-scroller").niceScroll({
            cursorcolor: "#fff",
            cursorwidth: "0px",
            background: "#fff",
            cursorborder: "0px solid #1F2326",
            zindex: "999",
            autohidemode: !1,
            enablemousewheel: !1,
            touchbehavior: !0,
          });
        }));
    },
    countdown: function () {
      var t,
        a = this;
      e(".countdown").length &&
        ((t = function (t, n, i) {
          var o,
            s = i - new Date();
          if (s < 0)
            return (
              n.html('<div class="end">' + a.countdownEndMsg + "</div>"),
              clearInterval(t),
              !1
            );
          (o = Math.floor((s / 864e5) * 1)),
            (i = Math.floor(((s % 864e5) / 36e5) * 1)),
            (t = Math.floor((((s % 864e5) % 36e5) / 6e4) * 1)),
            (s = Math.floor(((((s % 864e5) % 36e5) % 6e4) / 1e3) * 1)),
            e(".days > div", n).html(o),
            e(".hours > div", n).html(i),
            e(".minutes > div", n).html(t),
            e(".seconds > div", n).html(s);
        }),
        e(".countdown").each(function () {
          var n,
            i,
            o = e(this),
            s = new Date(o.data("date"));
          s &&
            "[object Date]" === Object.prototype.toString.call(s) &&
            !Number.isNaN(s) &&
            ((i =
              '<div class="days"><div></div><span>' +
              a.cDays +
              '</span></div><div class="hours"><div></div><span>' +
              a.cHours +
              '</span></div><div class="minutes"><div></div><span>' +
              a.cMinutes +
              '</span></div><div class="seconds"><div></div><span>' +
              a.cSeconds +
              "</span></div>"),
            o.html(i)),
            (n = setInterval(function () {
              t(n, o, s);
            }, 1e3));
        }));
    },
    parallaxBg: function () {
      var t = this;
      !e.browser.mobile && 992 < e(window).innerWidth()
        ? e(window).on("scroll", function () {
            var a = e(window).scrollTop();
            e(".parallax-background").each(function () {
              var n = e(this),
                i = n.offset().top,
                o = n.outerHeight();
              t.isInViewport(this) &&
                ((i = Math.round(((i = a - i) / o) * 100)),
                n.css(
                  "background-position",
                  "center " + parseInt(-i * (o / 250)) + "px"
                ));
            });
          })
        : e(".parallax-background").css({
            "background-position": "50% 50%",
            "background-size": "cover",
            "background-attachment": "scroll",
          });
    },
    isInViewport: function (e) {
      return (
        (0 < (e = e.getBoundingClientRect()).height || 0 < e.width) &&
        0 <= e.bottom &&
        0 <= e.right &&
        e.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        e.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    windowResize: function () {
      var t = this;
      e(window).resize(function () {
        var a = e(window).innerWidth();
        t.createMobileMenu(a),
          t.blogMetas(),
          751 > e(window).innerWidth() &&
            (e(".navbar > a.btn").addClass("btn-sm"),
            e(".navbar > a.btn").width("auto"));
      });
    },
    resizeVideos: function () {
      var t = e(
        'iframe[src^="http://player.vimeo.com"], iframe[src^="https://player.vimeo.com"], iframe[src^="http://www.youtube.com"], iframe[src^="https://www.youtube.com"], object, embed'
      );
      t.each(function () {
        var t = e(this),
          a = t.attr("height") / t.attr("width");
        (a < 0.3 || 0.8 < a || Number.isNaN(a)) && (a = 0.559),
          t
            .attr("data-aspectRatio", a)
            .removeAttr("height")
            .removeAttr("width");
      }),
        e(window)
          .resize(function () {
            t.each(function () {
              var t = e(this),
                a = t.parent().width();
              t.width(a).height(a * t.attr("data-aspectRatio"));
            });
          })
          .resize();
    },
    contactForm: function () {
      var t = this;
      e(".submit_form").on("click", function (a) {
        var n,
          i,
          o,
          s = e(this),
          r = s.closest("form"),
          l = e("input, textarea, select, fieldset", r),
          c = 0,
          d = /\S+@\S+\.\S+/,
          m = "contact",
          h = !1;
        return (
          a.preventDefault(),
          (o = function (e) {
            return encodeURIComponent(e);
          }),
          s.width("auto"),
          e(".form_status_message").html(""),
          l.each(function () {
            var t = e(this);
            "hidden" === t.attr("type")
              ? t.hasClass("subject")
                ? (m += "&subject=" + o(t.val()))
                : t.hasClass("fromName") || t.hasClass("fromname")
                ? (m += "&fromname=" + o(t.val()))
                : t.hasClass("fromEmail") || t.hasClass("fromemail")
                ? (m += "&fromemail=" + o(t.val()))
                : (t.hasClass("emailTo") || t.hasClass("emailto")) &&
                  (m += "&emailto=" + o(t.val()))
              : ("checkbox" === t.attr("type") &&
                  1 === t.parents("fieldset").length &&
                  t.parents("fieldset").hasClass("required")) ||
                (t.is("fieldset") &&
                t.hasClass("required") &&
                0 === e("#" + t.attr("id") + " input:checkbox:checked").length
                  ? (e("input", t).addClass("is-invalid"), (h = !0))
                  : (t.hasClass("required") &&
                      "checkbox" === t.attr("type") &&
                      !e("input[id='" + t.attr("id") + "']").is(":checked")) ||
                    (t.hasClass("required") &&
                      "" === t.val() &&
                      "checkbox" !== t.attr("type") &&
                      !t.is("fieldset")) ||
                    (t.hasClass("required") &&
                      "radio" === t.attr("type") &&
                      !e("input[name='" + t.attr("name") + "']").is(
                        ":checked"
                      )) ||
                    ("email" === t.attr("type") &&
                      "" !== t.val() &&
                      !1 === d.test(t.val()))
                  ? (t.addClass("is-invalid"), (h = !0))
                  : "g-recaptcha-response" !== t.attr("id") &&
                    "recaptcha-token" !== t.attr("id") &&
                    (t.removeClass("is-invalid"),
                    e("input", t).removeClass("is-invalid"),
                    t.hasClass("subject")
                      ? ((m += "&subject=" + o(t.val())),
                        (m += "&subject_label=" + o(t.attr("name"))))
                      : t.hasClass("fromName") || t.hasClass("fromname")
                      ? ((m += "&fromname=" + o(t.val())),
                        (m += "&fromname_label=" + o(t.attr("name"))))
                      : t.hasClass("fromEmail") || t.hasClass("fromemail")
                      ? ((m += "&fromemail=" + o(t.val())),
                        (m += "&fromemail_label=" + o(t.attr("name"))))
                      : ("radio" === t.attr("type")
                          ? e("input[id='" + t.attr("id") + "']").is(
                              ":checked"
                            ) &&
                            ((m +=
                              "&field" + c + "_label=" + o(t.attr("name"))),
                            (m +=
                              "&field" +
                              c +
                              "_value=" +
                              o(
                                e.trim(
                                  e("label[for='" + t.attr("id") + "']").text()
                                )
                              )))
                          : t.is("fieldset")
                          ? ((m +=
                              "&field" + c + "_label=" + o(t.attr("name"))),
                            e(
                              "#" + t.attr("id") + " input:checkbox:checked"
                            ).each(function (t) {
                              0 === t
                                ? ((m += "&field" + c + "_value="),
                                  (m += o(
                                    e.trim(
                                      e(
                                        "label[for='" +
                                          e(this).attr("id") +
                                          "']"
                                      ).text()
                                    )
                                  )))
                                : (m +=
                                    ", " +
                                    o(
                                      e.trim(
                                        e(
                                          "label[for='" +
                                            e(this).attr("id") +
                                            "']"
                                        ).text()
                                      )
                                    ));
                            }))
                          : ((m +=
                              "&field" + c + "_label=" + o(t.attr("name"))),
                            (m += "&field" + c + "_value=" + o(t.val()))),
                        (c += 1))));
          }),
          (m += "&len=" + c),
          e(".g-recaptcha").length &&
            (m += "&recaptcha=" + grecaptcha.getResponse()),
          (n = function () {
            e(".form_status_message").html(
              '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
                t.contactFormSuccessMsg +
                '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
            );
          }),
          (i = function () {
            e(".fa-spinner", s).remove(), s.removeClass("disabled");
          }),
          h || t.sendingMail
            ? t.showError()
            : ((t.sendingMail = !0),
              s.append('<i class="fas fa-spinner fa-spin after"></i>'),
              s.addClass("disabled"),
              e.ajax({
                type: "POST",
                url: "contact.php",
                data: m,
                success: function (a) {
                  i(),
                    "ok" === a
                      ? (n(), r[0].reset())
                      : t.showError(t.contactFormRecaptchaErrorMsg),
                    (t.sendingMail = !1),
                    e(".g-recaptcha").length && grecaptcha.reset();
                },
                error: function () {
                  i(), t.showError(), (t.sendingMail = !1);
                },
              })),
          !1
        );
      });
    },
    showError: function (t = "") {
      "" === t && (t = this.contactFormErrorMsg),
        e(".form_status_message").html(
          '<div class="alert alert-danger alert-dismissible fade show" role="alert">' +
            t +
            '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
        );
    },
    objEvents: function () {
      e(".btn").each(function () {
        var t = e(this),
          a = t.width(),
          n = 2,
          i = t.text().split(" ").length;
        2 < i || 0 !== t.find("i").length ? (n = 15) : 1 < i && (n = 8),
          t.width(Math.round(a) + n);
      }),
        e("#about-us .element .image").on("mouseenter", function () {
          var t = e(this);
          if (
            t.parent().is(":first-child") &&
            !e(">.divider-about-us", t.closest(".row")).hasClass("flip")
          )
            return !1;
          t.hasClass("flip") ||
            ((e("#about-us .element .image.flip").length
              ? e("#about-us .element .image")
              : t
            ).toggleClass("flip"),
            e(">.divider-about-us", t.closest(".row")).toggleClass("flip"));
        }),
        e("#map_canvas")
          .on("mouseenter", function () {
            e(".location-info").addClass("open");
          })
          .on("mouseleave", function () {
            e(".location-info").removeClass("open");
          }),
        e(".nav-logo, .scrollto").on("click", function (t) {
          var a = e(this),
            n = 0,
            i = a.attr("href");
          /#/.test(i) &&
            e(i).length &&
            (t.preventDefault(),
            "#hero" !== i && (n = e(i).offset().top - 65),
            e("html, body")
              .stop()
              .animate({ scrollTop: n }, 1500, "easeInOutExpo", function () {
                a.blur();
              }));
        }),
        e(".element-v2").length &&
          e(".element-v2").each(function () {
            var t = e(">.image", e(this));
            t.css({
              "background-image": "url(" + e(">img", t).attr("src") + ")",
            }),
              e(">img", t).hide();
          }),
        e(".overflow-image").length &&
          e(".overflow-image").each(function () {
            var t = e(this);
            t.css({
              "background-image": "url(" + e(">img", t).attr("src") + ")",
            });
          }),
        e(".progress").length &&
          e(".progress").waypoint(
            function () {
              e(".progress").each(function () {
                e("> .progress-bar", e(this))
                  .delay(300)
                  .queue(function (t) {
                    var a = e(this);
                    a.css("width", a.attr("aria-valuenow") + "%"), t();
                  });
              });
            },
            { triggerOnce: !0, offset: "bottom-in-view" }
          );
    },
    parallaxTimeline: function () {
      var t;
      this.timelineParallax &&
        ((t = function (t) {
          e("> div", this).each(function () {
            var a = e(this),
              n = a.attr("data-parallax"),
              i = (t.clientX * n) / 300,
              n = (t.clientY * n) / 300;
            a.css({
              "-webkit-transform":
                "translateX(" + i + "px) translateY(" + n + "px)",
              "-moz-transform":
                "translateX(" + i + "px) translateY(" + n + "px)",
              "-ms-transform":
                "translateX(" + i + "px) translateY(" + n + "px)",
              "-o-transform": "translateX(" + i + "px) translateY(" + n + "px)",
              transform: "translateX(" + i + "px) translateY(" + n + "px)",
            });
          });
        }),
        992 < e(window).innerWidth() &&
          e(window).scroll(function () {
            var a = e(window).scrollTop(),
              n = e(window).height();
            e('.timeline [class^="template-"]').each(function () {
              var i = e(this),
                o = i.offset().top,
                s = i.height();
              o <= a + n && a <= o + s
                ? i.on("mousemove", t)
                : i.off("mousemove", t);
            });
          }));
    },
    blogMetas: function () {
      var t = e(".info-blog .bottom-info, .post-content .bottom-info");
      t.length &&
        t.each(function () {
          var t = e(this);
          35 < t.height() ? t.addClass("center") : t.removeClass("center");
        });
    },
    animateElems: function () {
      function t() {
        e("[data-animation-delay]").each(function () {
          var t = e(this),
            a = e(window).scrollTop(),
            n = e(window).height(),
            i = parseInt(t.attr("data-animation-delay"), 10),
            o = t.data("animation-direction");
          if (void 0 === o) return !1;
          t.addClass("animate-" + o),
            e(document).ready(function () {
              a + n >= t.offset().top &&
                (Number.isNaN(i) || 0 === i
                  ? t.removeClass("animate-" + o).addClass("animation-" + o)
                  : setTimeout(function () {
                      t.removeClass("animate-me").addClass("animation-" + o);
                    }, i));
            });
        });
      }
      751 <= e(window).innerWidth()
        ? (e(window).scroll(function () {
            t();
          }),
          t())
        : e("[data-animation-delay]").addClass("visible");
    },
  }).init();
})(jQuery);
