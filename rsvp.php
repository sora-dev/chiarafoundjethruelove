<!DOCTYPE html>
<!--[if lt IE 7]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!-->
<html lang="en">
<!--<![endif]-->

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <!-- Page Title -->
    <title>#CHIARAfoundJETHruelove</title>

    <meta name="keywords" content="#CHIARAfoundJETHruelove, Wedding Website, RSVP" />
    <meta name="description" content="Design by Sora ッ" />
    <meta name="author" content="Sora ッ" />

    <!-- Mobile Meta Tag -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

    <!-- Fav and touch icons -->
    <link rel="icon" href="images/fav_touch_icons/favicon.ico" sizes="any" />
    <link rel="icon" href="images/fav_touch_icons/favicon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="images/fav_touch_icons/apple-touch-icon-180x180.png" />
    <link rel="manifest" href="images/fav_touch_icons/manifest.json" />

    <!-- Google Web Fonts -->
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" as="style"
        onload="this.onload=null;this.rel='stylesheet'" />
    <noscript>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"
            type="text/css" />
    </noscript>

    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet" />

    <!-- FontAwesome CSS -->
    <link href="css/fontawesome-all.min.css" rel="stylesheet" />

    <!-- Neela Icon Set CSS -->
    <link href="css/neela-icon-set.css" rel="stylesheet" />

    <!-- Template CSS -->
    <link href="css/style.css" rel="stylesheet" />

    <!-- Modernizr JS -->
    <script src="js/modernizr-3.6.0.min.js"></script>
</head>

<body>
    <!-- BEGIN PRELOADER -->
    <div id="preloader">
        <div class="loading-heart">
            <svg viewBox="0 0 512 512" width="100">
                <path
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
            </svg>
            <div class="preloader-title">
                Jethro<br />
                <small>&</small><br />
                Chiara
            </div>
        </div>
    </div>
    <!-- END PRELOADER -->

    <!-- BEGIN WRAPPER -->
    <div id="wrapper">
        <!-- BEGIN HEADER -->
        <header id="header">
            <div class="nav-section">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <a href="index.html" class="nav-logo">
                                <h4 class="logo-title-pages">#CHIARAfoundJETHruelove</h4>
                            </a>

                            <!-- BEGIN MAIN MENU -->
                            <nav class="navbar">
                                <ul class="nav navbar-nav">
                                    <li><a href="https://chiarafoundjethruelove.vercel.app/index.html">Home</a></li>

                                    <li><a href="https://chiarafoundjethruelove.vercel.app/wedding-details.html">Wedding
                                            Details</a></li>

                                    <li><a class="active" href="#">RSVP</a></li>
                                </ul>

                                <button id="nav-mobile-btn">
                                    <i class="fas fa-bars"></i></button><!-- Mobile menu button -->
                            </nav>
                            <!-- END MAIN MENU -->
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- END HEADER -->

        <!-- BEGIN PAGE HEADER -->
        <div class="page-header section-divider-bottom-1 section-divider-bg-color">
            <div class="container">
                <div class="row">
                    <div class="col center">
                        <h1 class="page-title">RSVP</h1>
                    </div>
                </div>
            </div>
        </div>
        <!-- END PAGE HEADER -->

        <!-- BEGIN PAGE CONTENT -->
        <div class="page-content no-padding rsvp">
            <!-- BEGIN MAIN CONTENT -->
            <main class="main">
                <!-- BEGIN CONTACT FORM SECTION -->
                <section class="section-bg-color overflow-content-over rsvp-page">
                    <div class="side-flowers"></div>

                    <div class="container">
                        <div class="row gx-6">
                            <div class="col-xl-6 col-lg-5 overflow-image-wrapper center">
                                <h2 class="title">We're getting married !</h2>
                                <p>
                                    Please join us for our special day. For more details, please
                                    see the image below
                                </p>

                                <img src="images/page2.webp" alt="RSVP" />
                            </div>

                            <!-- BEGIN CONTACT FORM -->
                            <div class="col-xl-6 col-lg-7">
                                <div class="form-wrapper no-shadow overflow neela-style">
                                    <h2 class="section-title">Will you Attend?</h2>
                                    <p>
                                        <i><b>Kindly submit one registration per person.</b></i>
                                    </p>
                                    <form id="form-rsvp" method="post"
                                        action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"
                                        onsubmit="return submitForm(this);">
                                        <div class="form-floating">
                                            <input type="text" name="Name" id="name" placeholder="Your Name (Required)"
                                                class="form-control required fromName" />
                                            <label for="name">Your Name (Required)</label>
                                        </div>

                                        <div class="form-check-wrapper">
                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input required" type="radio"
                                                    name="Attend_wedding" id="attend_wedding_yes"
                                                    value="Yes, I will attend." />
                                                <label for="attend_wedding_yes">Yes, I will attend.</label>
                                            </div>

                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input required" type="radio"
                                                    name="Attend_wedding" id="attend_wedding_no"
                                                    value="Sorry, I can't come." />
                                                <label for="attend_wedding_no">Sorry, I can't come.</label>
                                            </div>
                                        </div>

                                        <div class="form-floating">
                                            <textarea id="message" name="Message" placeholder="Message"
                                                class="form-control" rows="4"></textarea>
                                            <label for="message">Message</label>
                                        </div>

                                        <div class="form_status_message"></div>

                                        <div class="center">
                                            <button type="submit" class="btn btn-primary submit_form">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <!-- END CONTACT FORM -->
                            <div class="contact-bottom">
                                <div class="quote">
                                    <blockquote class="neela-quote small extra-margin">
                                        Please, confirm your attendance<br />on or before 20th of
                                        May 2024.
                                    </blockquote>
                                </div>

                                <div class="rsvp-info">
                                    <p>
                                        If you can't register through the form, you can contact us
                                        directly via:
                                    </p>
                                    <ul class="contact-info">
                                        <li>
                                            <span>Mobile Number:</span>
                                            <a href="tel:09487637264">0948 763 7264</a>
                                        </li>
                                        <li>
                                            <span>E-mail:</span>
                                            <a href="mailto:jethro.sora@gmail.com">jethro.sora@gmail.com</a>
                                        </li>
                                    </ul>
                                    <ul class="sn-icons">
                                        <li>
                                            <a
                                                href="https://www.instagram.com/chiaracalub/?igsh=MTl3dHlocDhubWI3Yg%3D%3D&utm_source=qr&fbclid=IwAR3XIHLCh-1WOPGQpHPo9cZqRMV8Ypvlzu6qozkMvoTvAU_eBUbpoCwOnYs"><i
                                                    class="fab fa-instagram-square"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.messenger.com/t/7279892938767925/"><i
                                                    class="fab fa-facebook-messenger"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://wa.me/+639487637264"><i class="fab fa-whatsapp"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- END CONTACT FORM SECTION -->

                <!-- BEGIN WEDDING LOCATION SECTION -->
                <div id="location">
                    <div class="map_pins_full">
                        <ul class="pins">
                            <li><i class="icon-big-church"></i></li>
                            <li><i class="icon-champagne-glasses"></i></li>
                            <li><i class="icon-diamond-ring"></i></li>
                            <li><i class="icon-honeymoon"></i></li>
                            <li><i class="icon-two-hearts"></i></li>
                            <li><i class="icon-wedding"></i></li>
                            <li><i class="icon-wedding-day"></i></li>
                            <li><i class="icon-photo-camera"></i></li>
                        </ul>
                    </div>
                    <div class="gmap" id="map_canvas_full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2275.7891474730186!2d120.59526228593299!3d16.404200621344767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a16af1a2e4f9%3A0xa68584d6ad3762ca!2sCrown%20Legacy%20Hotel!5e0!3m2!1sen!2sph!4v1714903562201!5m2!1sen!2sph"
                            width="100%" height="100%" style="border: 0" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <!-- END WEDDING LOCATION SECTION -->
            </main>
            <!-- END MAIN CONTENT -->
        </div>
        <!-- END PAGE CONTENT -->

        <!-- BEGIN FOOTER -->
        <footer id="footer">
            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            &copy; 2024 Created by
                            <a href="https://sora-sepia.vercel.app/">Sora</a> with
                            <span class="heart">&#x2764;</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- END FOOTER -->
    </div>
    <!-- END WRAPPER -->

    <!-- Libs -->
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/jquery-migrate-3.3.2.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.placeholder.min.js"></script>
    <script src="js/ismobile.js"></script>
    <script src="js/retina.min.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/waypoints-sticky.min.js"></script>

    <!-- Template Scripts -->
    <script src="js/variables.js"></script>
    <script src="js/scripts.js"></script>

    <!-- email handler -->
    <script src="js/formHandler.js"></script>
    <script src="js/emailSender.js"></script>

    <!-- Google reCaptcha API -->
    <!-- <script src="https://www.google.com/recaptcha/api.js" async defer></script> -->
    <!-- 
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-7JZLG63NQZ");
    </script> -->
</body>

</html>