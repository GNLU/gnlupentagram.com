var SCROLLING_SPEED = 700;

function updateViewportDimensions() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    return {
        width: x,
        height: y
    };
}
var viewport = updateViewportDimensions();
var waitForFinalEvent = (function() {
    var timers = {};
    return function(callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();
var timeToWaitForLast = 100;

function drawSVG(name, path) {
    var snap = Snap("#svg" + name);
    var myPath = snap.path(path);
    var len = myPath.getTotalLength();
    myPath.attr({
        stroke: '#fff',
        strokeWidth: 3,
        fill: 'none',
        "stroke-dasharray": len + " " + len,
        "stroke-dashoffset": len
    }).animate({
        "stroke-dashoffset": 0
    }, 750, mina.easeinout);
}
jQuery(document).ready(function($) {
    $('.m-cta').click(function() {
        setTimeout(function() {
            $(window).trigger('scroll');
        }, 50);
    });
    $(window).on('scroll load mousewheel', function() {
        return false;
    });
    var activateSVGcheck = function() {
        if ($('#tickets').hasClass('active')) {
            ticketsSVGDrawn = true;
            var path = "M31.7,114.5l-1.7-8l-8.7,7.8l-4.8-8.1l-5.3,7.8l-4.8-8.2l-5.3,7.8l-4.8-8.2l-5.4,8l-1.6-91.1H1.7    c0,5.5,4.4,9.9,9.9,9.9s9.9-4.4,9.9-9.9h7.3L3,103.4l-0.4,1.3l7.9-5.5l2,9.3l7.7-5.7l2.1,9.4l7.7-5.7l2,9.4l7.7-5.7l2,7.8    l30.5-85.6l-11.7-4c-1.7,5.2-7.3,8-12.5,6.2s-8-7.4-6.2-12.6l-11.7-4L2.6,104.7L5.3,96l1-3.4l2.9-7.6l39.1,13.3l14.5-39.5    l-41-14.5l-1.9,6.1H-9.5";
            setTimeout(function() {
                drawSVG('Tickets', path);
            }, 0);
        }
        if ($('#playlist').hasClass('active')) {
            playlistSVGDrawn = true;
            var path2 = "M129.24,80.38L0.001,80.38L8.357,0L120.884,0L129.24,80.38L129.24,80.38L129.24,100L0.001,100L0,80    M16,39a38,28 0 1,0 76,0a38,28 0 1,0 -76,0   M49.8,39a4.2,3.2 0 1,0 8.4,0a4.2,3.2 0 1,0 -8.4,0   M103,17a4.2,3.2 0 1,0 8.4,0a4.2,3.2 0 1,0 -8.4,0   M109.873,54.843L111.152,67.144   M107.569,32.678L108.506,41.686   M69.634,32.678L107.568,16.793";
            setTimeout(function() {
                drawSVG('Playlist', path2);
            }, 0);
        }
        if ($('#faq').hasClass('active')) {
            faqSVGDrawn = true;
            var path3 = "M0,68.532L1.399,58.042L68.532,58.042L69.93,68.532L0,68.532l0,31l69.932,0l0,-31   M34.965,12.588L34.965,12.588c-17.38,0-31.469,14.089-31.469,31.469v13.986h62.938V44.057 C66.434,26.677,52.345,12.588,34.965,12.588z   M34.965,41.364L34.965,41.364c-4.635,0-8.392,3.757-8.392,8.392v8.391h16.785v-8.391C43.358,45.121,39.6,41.364,34.965,41.364z   M44.197,45.333l6.631,11.691l15.672,1.02V45.455V31.469C66.5,14.089,52.38,0,34.999,0C17.62,0,3.5,14.089,3.5,31.469V58   M27.465,34.07a7.5,7.5 0 1,0 15,0a7.5,7.5 0 1,0 -15,0   M15.469,33.913L26.573,47.252   M10.145,77.284L34.965,77.284   M43.357,77.284L47.495,77.284";
            setTimeout(function() {
                drawSVG('Faq', path3);
            }, 0);
        }
        if ($('#downloads').hasClass('active')) {
            downloadsSVGDrawn = true;
            var path4 = "M1,50a50,50 0 1,0 100,0a50,50 0 1,0 -100,0M 15.112,26.608c4.491-6.685,10.854-12.009,18.337-15.221 M8,50c0-5.481,1.05-10.716,2.959-15.517 M50,25 L50,25 50,75 L67.677,57.322 L50,75 32.322,57.322";
            setTimeout(function() {
                drawSVG('Downloads', path4);
            }, 0);
        }
    };
    var svgsToClear = [$('#svgDownloads'), $('#svgTickets'), $('#svgFaq'), $('#svgPlaylist')];
    var clearSVGs = function() {
        for (var i = 0; i < svgsToClear.length; i++) {
            svgsToClear[i].empty();
        }
    }
    $('#fullpage').fullpage({
        anchors: ['landing-section', 'artists-section', 'tickets-section', 'downloads-section', 'playlist-section', 'sponsors-section', 'faq-section', 'outtro-section'],
        sectionSelector: '.l-screen',
        slideSelector: '.l-slide',
        scrollOverflow: true,
        css3: true,
        controlArrows: false,
        easing: 'ease',
        easingcss3: 'ease',
        afterLoad: function(anchorLink, idx) {
            activateSVGcheck();
            $(window).trigger('scroll');
        },
        onLeave: function() {
            $('#faq').removeClass('showing-answer');
            $('.m-answers__answer').removeClass('active');
            $('.m-answers').removeClass('active');
            setTimeout(function() {
                clearSVGs();
                if ($('#artists').hasClass('active') || $('#faq').hasClass('active')) {
                    $('.m-navbar').addClass('artists-active');
                } else {
                    $('.m-navbar').removeClass('artists-active');
                }
            }, 400);
            $(window).trigger('scroll');
        },
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
            var thisAnimLeaving;
            $(window).trigger('scroll');
            if (anchorLink == "artists-section") {
                var thisAnimClass = 'is-loading';
                if (nextSlideIndex === 0) {
                    var thisAnimLeaving = 'is-grid';
                } else {
                    var thisAnimLeaving = 'is-fadein';
                }
                $('.m-loader--large').eq(slideIndex).addClass(thisAnimClass);
                $('.l-slide').eq(slideIndex).addClass('is-leaving');
                var delay = 1250;
                setTimeout(function() {
                    var secondDelay = 2000;
                    $('.m-loader--large').eq(slideIndex).removeClass(thisAnimClass);
                    $('.m-loader--large').eq(nextSlideIndex).addClass(thisAnimLeaving);
                    setTimeout(function() {
                        $('.m-loader--large').eq(nextSlideIndex).removeClass(thisAnimLeaving);
                        $('.l-slide').eq(slideIndex).removeClass('is-leaving');
                    }, secondDelay);
                }, delay);
            }
        },
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            if (anchorLink == "artists-section") {
                $('.fp-section').find('.fp-slidesContainer').css({
                    'opacity': 1
                });
                setTimeout(function() {
                    if (slideIndex !== 0) {
                        $('.m-artists__header').addClass('is-visible');
                    } else if ($('.m-artists__header').hasClass('is-visible')) {
                        $('.m-artists__header').removeClass('is-visible');
                    }
                }, 1500);
            }
        },
    });
    $(document).on('touchmove', function() {
        $(window).trigger('scroll');
    });
    $('m-artists__h-title').click(function() {
        $.fn.fullpage.moveTo('artists-section', 0);
    });
    setTimeout(function() {
        $('.preload-section .m-logo').addClass('active');
    }, 100);
    setTimeout(function() {
        $('.preload-section .m-loader--small').addClass('active');
    }, 600);
    $(window).load(function() {
        $(window).on('resize', function() {
            $.fn.fullpage.reBuild();
        });
        setTimeout(function() {
            $('body').addClass('is-loaded');
        }, 1000);
        setTimeout(function() {
            $('.landing-section').addClass('background-active');
        }, 1100);
        $(window).off('scroll load resize mousewheel');
        new MainNav();
        $(window).trigger('scroll');
        $('.m-artist-slide__control--prev').click(function() {
            $.fn.fullpage.moveSlideLeft();
        });
        $('.m-artist-slide__control--next').click(function() {
            $.fn.fullpage.moveSlideRight();
        });
    });
    var ticketsSVGDrawn = false;
    var playlistSVGDrawn = false;
    var faqSVGDrawn = false;
    var downloadsSVGDrawn = false;
    var artistContainerHeight = $('.artists-section .fp-slides ul').height();
    var windowHeight = $(window).height();
    var replaceAnswer = function(text, title) {
        $('.m-answers__inner').removeClass('active');
        setTimeout(function() {
            $('.m-answers .m-answers__answer').html(text);
            $('.m-answers .m-answers__inner h3').html(title);
            $('.m-answers__inner').addClass('active');
            $.fn.fullpage.reBuild();
        }, 650);
    };
    var questionNumber = 1;
    var questionCount = $('.m-questions__question').length;
    $('a.m-questions__question').on('click', function() {
        questionNumber = $(this).data('question-number');
        replaceAnswer($(this).find('.m-questions__answer-text').html(), $(this).find('span').html());
        $('#faq').toggleClass('showing-answer');
        $('.m-answers').addClass('active');
        questionNumber = $(this).attr('data-question-number');
    });
    $('a.m-answers__close-button').on('click', function() {
        $('#faq').toggleClass('showing-answer');
        $('.m-answers__answer').removeClass('active');
        $('.m-answers').removeClass('active');
    });
    $('a.m-answers__prev-button').on('click', function() {
        if (questionNumber !== 1) {
            questionNumber = parseInt(questionNumber, 10) - 1;
        } else {
            questionNumber = questionCount;
        }
        replaceAnswer($('.m-questions').find('[data-answer-number="' + (questionNumber) + '"]').html(), $('.m-questions').find('[data-question-number="' + (questionNumber) + '"] span').html());
    });
    $('a.m-answers__next-button').on('click', function() {
        if (questionNumber !== questionCount) {
            questionNumber = parseInt(questionNumber, 10) + 1;
        } else {
            questionNumber = 1;
        }
        replaceAnswer($('.m-questions').find('[data-answer-number="' + (questionNumber) + '"]').html(), $('.m-questions').find('[data-question-number="' + (questionNumber) + '"] span').html());
    });
});
(function($) {
    MainNav = function() {
        this.$mainHeader = $('header.l-main-header');
        this.$mainHeaderNav = this.$mainHeader.find('nav');
        this.$hamburgerOuter = this.$mainHeader.find('.m-hamburger');
        this.$hamburger = this.$mainHeader.find('.m-hamburger__icon');
        this.$navSlideAnimDesktop = this.$mainHeader.find('.m-nav-anim--desktop');
        this.$navSlideAnimMobile = this.$mainHeader.find('.m-nav-anim--mobile');
        this.mainHeaderHeight = this.$mainHeader.outerHeight();
        this.mainNavWidth = this.$mainHeaderNav.outerWidth();
        this.windowHeight = $(window).height();
        this.mobile = 768;
        this.tablet = 992;
        this.desktop = 1200;
        this.currentBP = '';
        this.hamOffsetClosed = 0;
        this.hamOffsetOpen = 0;
        this.scrollPos = 0;
        this.animDuration = 200;
        this.init = function() {
            var self = this;
            if (!this.$mainHeaderNav.length) return this;
            this.setCurrentBP();
            self.getHamOffsetClosed();
            self.getHamOffsetOpen();
            $(window).on('resize load', function() {
                self.mainHeaderHeight = self.$mainHeader.outerHeight();
                self.mainNavWidth = self.$mainHeaderNav.outerWidth();
                self.windowHeight = $(window).height();
                self.getHamOffsetClosed();
                self.getHamOffsetOpen();
                self.navClosedCSS();
                self.setTopToActive();
            });
            this.windowScrollPos();
            this.toggleNav();
            this.setTopToActive();
            return this;
        };
        this.windowScrollPos = function() {
            var self = this;
            $(window).on('scroll load resize mousewheel', function() {
                self.scrollPos = $(document).scrollTop();
                var navIsOpen = self.$mainHeaderNav.hasClass('is-open');
                if ($('#landing').hasClass('active')) {
                    self.$mainHeader.find('.m-navbar').css({
                        'transform': 'translateY(' + (self.windowHeight - 50) + 'px)',
                        '-webkit-transform': 'translateY(' + (self.windowHeight - 50) + 'px)'
                    });
                    if (navIsOpen) {
                        self.$hamburgerOuter.css({
                            'transform': 'translateY(-' + self.hamOffsetOpen + 'px)',
                            '-webkit-transform': 'translateY(-' + self.hamOffsetOpen + 'px)'
                        });
                    } else {
                        self.$hamburgerOuter.css({
                            'transform': 'translateY(' + (self.windowHeight - 30) + 'px)',
                            '-webkit-transform': 'translateY(' + (self.windowHeight - 30) + 'px)'
                        });
                    }
                } else {
                    self.$mainHeader.find('.m-navbar').css({
                        'transform': 'translateY(0px)',
                        '-webkit-transform': 'translateY(0px)'
                    });
                    self.$hamburgerOuter.css({
                        'transform': 'translateY(' + self.hamOffsetOpen + 'px)',
                        '-webkit-transform': 'translateY(' + self.hamOffsetOpen + 'px)'
                    });
                }
                self.$mainHeader.fadeIn();
                self.$hamburgerOuter.fadeIn();
                if (navIsOpen) {
                    self.$hamburgerOuter.trigger('click');
                }
                self.$mainHeader.find('.is-active').removeClass('is-active');
                self.$mainHeader.find('' + window.location.hash.split('-section')[0] + '-nav').addClass('is-active');
                self.setTopToActive();
            });
            return this;
        };
        this.$mainHeader.find('li').click(function() {
            var self = $(this);
            setTimeout(function() {
                $(window).trigger('scroll');
            }, 500);
        });
        this.toggleNav = function() {
            var self = this;
            self.$hamburgerOuter.click(function(e) {
                e.preventDefault();
                var navIsOpen = self.$mainHeaderNav.hasClass('is-open');
                self.$mainHeaderNav.toggleClass('is-open');
                self.$hamburger.toggleClass('is-open');
                var navRightNum = navIsOpen ? (self.currentBP == 'mobile') ? '-100%' : '-' + self.mainNavWidth + 'px' : '0px';
                self.$mainHeaderNav.animate({
                    right: navRightNum
                }, self.animDuration, function() {});
                var thisTopNum = '';
                var thisBottomNum = 'auto'
                if ((!navIsOpen && (self.scrollPos <= (self.windowHeight - self.mainHeaderHeight))) || (navIsOpen && !$('#landing').hasClass('active')) || (!navIsOpen && (self.scrollPos > (self.windowHeight - self.mainHeaderHeight)))) {
                    thisTopNum = self.hamOffsetOpen + 'px';
                } else {
                    if (navIsOpen && (self.scrollPos <= (self.windowHeight - self.mainHeaderHeight))) {
                        thisTopNum = (self.windowHeight - 30) + 'px';
                    } else {
                        thisTopNum = (self.windowHeight - self.hamOffsetClosed) - self.scrollPos + 30 + 'px';
                    }
                }
                $(this).css({
                    transform: 'translateY(' + thisTopNum + ')',
                    '-webkit-transform': 'translateY(' + thisTopNum + ')'
                });
                self.setTopToActive();
                self.$navSlideAnimDesktop.find('span').toggleClass('run-anim');
                self.$navSlideAnimMobile.find('span').toggleClass('run-anim');
            });
            return this;
        };
        this.navSlideHover = function() {
            var self = this;
            self.setTopToActive();
            self.$mainHeaderNav.find('ul a').on('mouseenter', function() {
                var index = $(this).parent().index();
                var lineHeight = self.$mainHeaderNav.find('ul a').css('line-height');
                self.$navSlideAnimDesktop.css('top', (parseInt(lineHeight) * index * 2) + 'px');
                self.$navSlideAnimMobile.css('top', (parseInt(lineHeight) * index * 2) + 'px');
            });
            return this;
        };
        this.setTopToActive = function() {
            var self = this;
            var initIndex = self.$mainHeaderNav.find('ul > li.is-active').index();
            var lineHeight = self.$mainHeaderNav.find('ul a').css('line-height');
            if (window.location.hash === '#outtro-section') {
                self.$navSlideAnimDesktop.css('top', -100 + '%');
                self.$navSlideAnimMobile.css('top', -100 + '%');
            } else if (!initIndex || initIndex === -1) {
                self.$navSlideAnimDesktop.css('top', 0 + 'px');
                self.$navSlideAnimMobile.css('top', 0 + 'px');
            } else {
                self.$navSlideAnimDesktop.css('top', (parseInt(lineHeight) * initIndex * 2) + 'px');
                self.$navSlideAnimMobile.css('top', (parseInt(lineHeight) * initIndex * 2) + 'px');
            }
            return this;
        };
        this.navClosedCSS = function() {
            var self = this;
            var navIsOpen = self.$mainHeaderNav.hasClass('is-open');
            if (!navIsOpen) {
                var navRightNum = (self.currentBP == 'mobile') ? '-100%' : '-' + self.mainNavWidth + 'px';
                self.$mainHeaderNav.css('right', navRightNum);
            }
            return this;
        };
        this.setCurrentBP = function() {
            var self = this;
            $(window).on('resize load', function() {
                var windowWidth = $(window).width();
                if (windowWidth < self.mobile) {
                    self.currentBP = 'mobile';
                } else if (windowWidth >= self.mobile && windowWidth < self.desktop) {
                    self.currentBP = 'tablet';
                } else if (windowWidth >= self.desktop) {
                    self.currentBP = 'desktop';
                }
            });
            return this;
        };
        this.getHamOffsetClosed = function() {
            this.hamOffsetClosed = (this.currentBP == 'mobile') ? 40 : 75;
        };
        this.getHamOffsetOpen = function() {
            this.hamOffsetOpen = (this.currentBP == 'mobile') ? 20 : 17;
        };
        return this.init();
    };
})(jQuery);