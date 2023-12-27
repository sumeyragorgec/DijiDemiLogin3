

    < !DOCTYPE html >
    <html class="loading" lang="en" data-textdirection="ltr">
        <!-- BEGIN: Head-->
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui" />
                <meta name="description" content="Giriş Sayfası" />
                <meta name="keywords" content="okul, uzaktan eğitim, öğrenci, öğretmen, sınav, ödev, eğitim platformu, eğitim, içerik, çözümlü soru, soru çöz" />
                <meta name="author" content="İM PARK" />
                <title>Giriş Sayfası</title>
                <link rel="apple-touch-icon" href="/apple-icon-120.png">
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta name="google-signin-scope" content="profile email" />
                    <meta name="google-signin-client_id" content="1085644987716-gpn8a2aps4ns22045722oli3p6v8ctmq.apps.googleusercontent.com" />

                    <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600" rel="stylesheet">

                        <link href="/Content/app-assets/vendors/css/vendors.min.css" rel="stylesheet" />
                        <link href="/Content/app-assets/css/imstyleV12.css" rel="stylesheet" />
                        <link href="/Content/app-assets/css/imstyle_harici.css" rel="stylesheet" />
                        <link href="/Content/imTheme.css" rel="stylesheet" />

                        <link href="/Content/app-assets/css/pages/authentication.css" rel="stylesheet" />




                    </head>
                    <!-- END: Head-->
                    <!-- BEGIN: Body-->

                    <body class="vertical-layout vertical-menu-modern 1-column  navbar-floating footer-static bg-full-screen-image  blank-page blank-page" data-open="click" data-menu="vertical-menu-modern" data-col="1-column">
                        <div class="uyeliktalepalert alert alert-warning d-none">
                            Sisteme Üye olmak için "<span class="Link1Ad1"></span>" na tıklayıp ilgili formu doldurmanız gerekmektedir.
                            <br />
                            Talebiniz onaylandığında sisteme üye olarak giriş yapabileceksiniz.
                        </div>

                        <!-- BEGIN: Content-->
                        <div class="app-content content">
                            <div class="content-overlay"></div>
                            <div class="header-navbar-shadow"></div>
                            <div class="content-wrapper">
                                <div class="content-header row">
                                </div>
                                <div class="content-body">
                                    <section class="row flexbox-container">
                                        <div class="col-xl-8 col-11 d-flex justify-content-center">
                                            <div class="card bg-authentication rounded-0 mb-0">
                                                <div class="row m-0">
                                                    <div class="col-lg-6 text-center align-self-center px-1 py-0 brand-logo">
                                                        <a href="javascript:" id="logolink">
                                                            <img class="img-fluid" id="logo" src="/Content/img/blank.png" />
                                                        </a>
                                                    </div>
                                                    <div class="col-lg-6 col-12 p-0">
                                                        <div class="card rounded-0 mb-0 px-2">
                                                            <div class="card-header pb-1">
                                                                <div class="card-title">
                                                                    <h4 class="mb-0">Giriş Ekranı</h4>
                                                                </div>
                                                            </div>
                                                            <p class="px-2">Hoşgeldiniz, hesabınızla giriş yapabilirsiniz.</p>
                                                            <div class="card-content">
                                                                <div class="card-body pt-1">
                                                                    <form id="frmLogin" action="javascript:;">
                                                                        <fieldset class="form-label-group form-group position-relative has-icon-left">
                                                                            <input type="text" class="form-control" id="txtUserName" placeholder="Kullanıcı Adı" required />
                                                                            <div class="form-control-position">
                                                                                <i class="feather icon-user"></i>
                                                                            </div>
                                                                            <label for="user-name">Kullanıcı Adı</label>
                                                                        </fieldset>

                                                                        <fieldset class="form-label-group position-relative has-icon-left">
                                                                            <input type="password" class="form-control" id="txtPassword" placeholder="Parola" required />
                                                                            <div class="form-control-position">
                                                                                <i class="feather icon-lock"></i>
                                                                            </div>
                                                                            <label for="user-password">Parola</label>
                                                                        </fieldset>
                                                                        <div class="form-group d-flex justify-content-between align-items-center">
                                                                            <div class="text-left">
                                                                                <fieldset class="checkbox">
                                                                                    <div class="vs-checkbox-con vs-checkbox-primary">
                                                                                        <input type="checkbox" id="beniHatirla">
                                                                                            <span class="vs-checkbox">
                                                                                                <span class="vs-checkbox--check">
                                                                                                    <i class="vs-icon feather icon-check"></i>
                                                                                                </span>
                                                                                            </span>
                                                                                            <span class="">Beni Hatırla</span>
                                                                                    </div>
                                                                                </fieldset>
                                                                            </div>
                                                                            <div class="text-right d-none" id="Link2">
                                                                                <a href="" class="card-link Link2Ad"></a>
                                                                            </div>
                                                                        </div>
                                                                        <a href="" class="btn btn-outline-primary float-left btn-inline waves-effect waves-light d-none" id="Link1Ad"></a>
                                                                        <a href="javascript:;" class="btn btn-primary float-right btn-inline login_btn" id="btnLogin">Giriş Yap</a>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div class="login-footer mb-1">
                                                                <div class="islemSonuc"></div>
                                                                <div class="divider">
                                                                    <div class="divider-text"> &bull; </div>
                                                                </div>
                                                                <div class="footer-btn d-flex d-inline px-4 font-small-2 text-bold-300">
                                                                    <div id="footertext" class="mr-auto">
                                                                        <img src="/Uploads/logo/impark-logo.png" /> &nbsp; tarafından geliştirilmiştir.
                                                                    </div>
                                                                    <div id="footertext2" class=""></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </div>
                            </div>
                        </div>
                        <!-- END: Content-->

                        <div class="modal fade" id="largeModal" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-body" id="modal-body">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal fade" id="loginMessage" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title">Giriş Bilgilendirme</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Kapat</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <script src="/Content/app-assets/vendors/js/vendors.minV12.js"></script>
                        <script src="/Content/app-assets/js/imscriptV12.js"></script>
                        <script src="/Content/impark/imframeV12.js"></script>
                        <script src="/Content/ViewScripts/General.scriptsV12.js"></script>


                        <script type="text/javascript">
                            ____loadMethodsCall();
                        </script>

                        <script>
                            $(document).ready(function () {




                                $("input").keypress(function (event) {
                                    if (event.which == 13) {
                                        event.preventDefault();
                                        $("#btnLogin").click();
                                    }
                                });

                            function getRandomArbitrary(min, max) {
                    return Math.random() * (max - min) + min;
                }

                            function checkForm() {
                    const username = $('#txtUserName').val() || "";
                            const password = $('#txtPassword').val() || "";

                            if (username == "" || password == "") {
                                $(".islemSonuc").html('<div class="alert alert-danger"> <strong>Hata!</strong><br>Kullanıcı adı ve/veya Şifrenizi girmeniz gerekmektedir.</div>');
                            return false;
                    } else {
                        return true;
                    }
                }

                            $("#btnLogin").on("click", function () {
                    if (!checkForm())
                            return false;
                            else {
                                $.ajax({
                                    url: "/Login/CokluKullaniciKontrol",
                                    data: {
                                        userName: $('#txtUserName').val(),
                                        password: $('#txtPassword').val()
                                    },
                                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                    success: function (data) {
                                        if (data.UserId != "00000000-0000-0000-0000-000000000000") {
                                            debugger;
                                            $.ajax({
                                                url: "/Login/GetEntegrasyonKullanicilari",
                                                data: {
                                                    userId: data.UserId,
                                                    fromCms: '0',
                                                    rememberMe: $('#beniHatirla').prop('checked')
                                                },
                                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                                success: function (data) {
                                                    $("#modal-body").html(data);
                                                    $('#largeModal').modal('show');
                                                },
                                                error: function (err) {
                                                    UserLogin();
                                                }
                                            });
                                        }
                                        else {
                                            UserLogin();
                                        }
                                    },
                                    error: function (err) {
                                        UserLogin();
                                    }
                                });
                    }
                });

                            function UserLogin() {
                    var $btn = $("#btnLogin");
                            var btnText = $btn.html();
                            $btn.attr("data-btntext", btnText);
                            $btn.html("Giriş Yapılıyor <i class='fa fa-spinner fa-spin'></i>");
                            $btn.addClass("disabled");
                            $(".islemSonuc").html('');
                            var sub = window.location.hostname;
                            $.ajax({
                                url: "/Login/UserLogin?vs=" + getRandomArbitrary(1, 9999),
                            data: {
                                userName: $('#txtUserName').val(),
                            password: $('#txtPassword').val(),
                            fromCms: '0',
                            rememberMe: $('#beniHatirla').prop('checked')
                        },
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            success: function (data) {
                            if (data.success) {
                                $btn.html("Yönlendiriliyorsunuz <i class='fa fa-spinner fa-spin'></i>")
                                $(".islemSonuc").html('<div class="alert alert-success" style="margin:5px;"> <strong>Başarılı!</strong> Giriş sayfasına yönlendiriliyorsunuz, lütfen bekleyiniz... <i class="fa fa-spinner fa-spin"></i>');
                                if (data.redirectUrl != "" && '' != "/") {

                                    window.location = data.redirectUrl;
                                }
                                else {
                                    window.location = "/Lms/Index";
                                }
                            }
                                else {
                                    $(".islemSonuc").html('<div class="alert alert-danger"> <strong>Hata!</strong><br>' + data.message + '</div>');
                                $btn.html(btnText);
                                $btn.removeClass("disabled");
                            }
                        },
                                error: function (err) {
                                    $(".loadBtn").each(function () {
                                        $btn.html(btnText);
                                        $btn.removeClass("disabled");
                                    })
                                }
                    });
                }

                                function getLoginProfile() {
                    var $btn = $("#btnLogin");

                                $.ajax({
                                    url: "/Login/GetDomainProfile",
                                data: { },
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                success: function (data) {
                            if (data.success) {
                                if (data.Redirect) {
                                    $btn.addClass("disabled");
                                $btn.html("Yönlendiriliyorsunuz <i class='fa fa-spinner fa-spin'></i>");

                                window.location = data.Url;
                                }
                                else if (data.Login) {
                                    $btn.addClass("disabled");
                                $btn.html("Yönlendiriliyorsunuz <i class='fa fa-spinner fa-spin'></i>");

                                window.location = "/Lms/Index";
                                }
                                else if (data.Profile) {
                                    $(document).attr("title", data.Profile.Ayarlar.Title);
                                $("<style>" + data.Profile.Ayarlar.OzelCSS + "</style>").appendTo("head");

                                if (data.Profile.Ayarlar.Logo != "") {
                                    $('#logo').prop('src', data.Profile.Ayarlar.Logo);
                                    }

                                if (data.Profile.Ayarlar.Link1Url != "") {
                                    $('#Link1Ad').removeClass('d-none').addClass('d-flex').html(data.Profile.Ayarlar.Link1Ad);
                                $('#Link1Ad').prop("href", data.Profile.Ayarlar.Link1Url);
                                    }

                                if (data.Profile.Ayarlar.Link2Ad != "") {
                                    $('#Link2').removeClass('d-none');
                                $('.Link2Ad').html(data.Profile.Ayarlar.Link2Ad);
                                $('.Link2Ad').prop('href', data.Profile.Ayarlar.Link2Url);
                                    }

                                if (data.Profile.Ayarlar.LogoLink != null) {
                                    $('#logolink').attr('href', data.Profile.Ayarlar.LogoLink)
                                }


                                if (data.Profile.Ayarlar.FooterText != null) {
                                    $('#footertext').removeClass('d-none').addClass('d-flex');

                                if (data.Profile.Ayarlar.FooterText != "") {
                                    $('#footertext img').prop('src', data.Profile.Ayarlar.FooterText);
                                        }

                                if (data.Profile.Ayarlar.Id == 715) {
                                    $('#footertext img').width("35px");
                                        }
                                    }

                                if (data.Profile.Ayarlar.FooterText2 != null) {
                                    $('#footertext2').html('<img class="img-fluid" src="' + data.Profile.Ayarlar.FooterText2 + '" />');
                                    }

                                if (data.Profile.Ayarlar.Zemin != "" && data.Profile.Ayarlar.Zemin != "/Content/Images/bg.png") {
                                    $('body').css('background-image', 'url("' + data.Profile.Ayarlar.Zemin + '")');
                                    }
                                }
                            }
                                else {
                                }
                        }
                    });
                                $.ajax({
                                    url: "/Login/GetUserProfile",
                                data: { },
                                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                                success: function (data) {
                            if (data.success) {
                                if (data.Remember && data.Remember.RememberMe) {
                                    $('#txtUserName').val(data.Remember.UserName);
                                $('#txtPassword').val(data.Remember.Password);
                                $('#beniHatirla').prop('checked', true);
                                }
                            }
                        }
                    });
                }
                                getLoginProfile();
            });
                        </script>
                    </body>
                </html>

