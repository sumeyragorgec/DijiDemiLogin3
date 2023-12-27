//LMS jQuery kütüphanesi 2014
//REV: 2021 : Ali ÖZCAN

var userLang = navigator.language || navigator.userLanguage;

if (userLang == "tr" || userLang == "tr-TR") {
    var _LANGUAGE = {
        KAYIT_BILGILERI: "Kayıt Bilgileri",
        KAYDET: "Kaydet",
        GUNCELLE: "Güncelle",
        KAPAT: "Kapat",
        IPTAL: "İptal",
        BIR_HATA_OLUSTU: "Bir hata oluştu!",
        UYARI: "Uyarı!",
        TOPLAM: "Toplam",
        KAYIT: "Kayıt",
        SECILENLERISIL: "Seçilenleri Sil"
    }
}
else if (userLang == "en-US") {
    var _LANGUAGE = {
        KAYIT_BILGILERI: "Registration Information",
        KAYDET: "Save",
        GUNCELLE: "Update",
        KAPAT: "Close",
        IPTAL: "Cancel",
        BIR_HATA_OLUSTU: "Something went wrong!",
        UYARI: "Warning!",
        TOPLAM: "Total",
        KAYIT: "Records",
        SECILENLERISIL: "Remove Selected"
    }
} else {
    var _LANGUAGE = {
        KAYIT_BILGILERI: "Kayıt Bilgileri",
        KAYDET: "Kaydet",
        GUNCELLE: "Güncelle",
        KAPAT: "Kapat",
        IPTAL: "İptal",
        BIR_HATA_OLUSTU: "Bir hata oluştu!",
        UYARI: "Uyarı!",
        TOPLAM: "Toplam",
        KAYIT: "Kayıt",
        SECILENLERISIL: "Seçilenleri Sil"
    }
}

/*  sayfalarda belirtilen load metodları bu değişkende saklanmaktadır  */
var ____imframeOnloadMethodsList = [];
var ____multiselectControls = [];
var LANGUAGE = {};

/* imframe kütüphanemiz tanımlanıyor */
var imframe = {
    load: function (f) {
        ____imframeOnloadMethodsList.push(f);
        LANGUAGE = jQuery.extend({}, _LANGUAGE, LANGUAGE);
    }
};

/*  sayfaya çalışma anında client üzerinde script dosyası eklemek için kullanacağımız fonksiyonu tanımlıyoruz   */
var ____includeScriptFile = function (url, onSuccess) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.charset = 'windows-1254';
    if (onSuccess != null) {
        if (!isNaN(script.onload))
            script.onload = onSuccess;
        else {
            script.onreadystatechange = function () {
                if (this.readyState == 'complete' || this.readyState == 'loaded') onSuccess();
            }
        }
    }
    head.appendChild(script);
}

var ____loadMethodsCall = function () {
    /* load metodları çalıştırılıyor */

    imframe("form").each(function () { imframe(this).createValidate(); });

    imframe("body").each(function () { imframe(this).createMasks(); });


    for (var i = 0; i < ____imframeOnloadMethodsList.length; i++) {
        ____imframeOnloadMethodsList[i]();
    }

    /*  çalıştırılan metodlar siliniyor  */
    ____imframeOnloadMethodsList = [];
}

var onLmsLoaded = function () {
    var _temp = imframe.load;
    imframe = jQuery;
    imframe.load = _temp;

    var ____onScriptsLoaded = function () {

        /*
        * LMS Yükleme Kontrolü
        */
        imframe._____________________load = true;

        /*
         * Grid Tanımlama Bölümü
         */
        imframe.fn.grid = function (settings) {
            /*    grid için belirtilen varsayılan değerler bu bölümde tanımlanıyor    */
            var defaultSettings = {
                url: "",
                model: "",
                columns: {},
                title: "",
                pageSize: [10, 20, 50, 100],
                height: null,
                className: "",
                resizable: false,
                usepager: true,
                buttons: null
            }
            var defaultColumnsSettings = {
                displayText: 'Pk',
                name: 'PK',
                width: 1,
                align: 'center',
                visibility: true,
                sortable: false,
                columnType: { type: 'span' },
                calculated: false
            }
            /*   belirtilmeyen özellikler varsayılan ayarlara göre düzenleniyor   */
            var ___settings = jQuery.extend({}, defaultSettings, settings);


            if (!settings.showTitle || settings.showTitle == false)
                ___settings.title = false;

            var _c = ___settings.columns;
            ___settings.columns = [];
            jQuery(_c).each(function () {
                var _tempC = jQuery.extend({}, defaultColumnsSettings, this);
                ___settings.columns.push({
                    display: _tempC.displayText,
                    name: _tempC.name,
                    width: _tempC.width,
                    align: _tempC.align,
                    hide: _tempC.visibility == false,
                    sortable: _tempC.sortable,
                    columnType: _tempC.columnType,
                    calculated: _tempC.calculated
                });
            });
            imframe(this).flexigrid({
                colModel: ___settings.columns,
                searchitems: ___settings.searchitems,
                showToggleBtn: false,
                nowrap: false,
                autoload: true,
                buttons: true,
                model: ___settings.model,
                buttons: ___settings.buttons,
                usepager: ___settings.usepager,
                outof: '/',
                title: ___settings.title,
                useRp: true,
                rp: 20,
                rpOptions: ___settings.pageSize,
                height: ___settings.height,
                url: ___settings.url,
                dataType: 'json',
                width: ___settings.width,
                colMove: false,
                resizable: ___settings.resizable,
                visibility: ___settings.visibility
            });
        }

        /*
         * Accordion Tanımlama Bölümü
         */
        imframe.fn.accordion = function (settings) {
            /*    acordion için belirtilen varsayılan değerler bu bölümde tanımlanıyor    */
            var defaultSettings = {
                enumerateSlides: false,
                containerWidth: 850,
                slideSpeed: 200,
                rounded: true,
                activateOn: 'mouseover'
            }

            /*   belirtilmeyen özellikler varsayılan ayarlara göre düzenleniyor   */
            var ___settings = jQuery.extend({}, defaultSettings, settings);

            jQuery(this).liteAccordion(___settings);
        }

        // Edited by: Uğur T.
        // Edited at: 25.03.2015
        // Desc: Tablolara sayfalama eklemek için kullanılır. Controller ve repository yapısının uygun yazılması gerekir.
        imframe.DataTablePaging = function (settings) {

            var defaultSettings = {
                tableClass: "dataTableContent",
                pageId: "",
                removeAction: "",
                pageCount: 20,
                activePage: 1,
                controller: "Home",
                view: "Index",
                totalCount: 100,
                searchArea: "",
                searchKeyword: "",
                userType: 0,
                sortCol: "",
                sortType: "",
                seviyeId: "0",
                yilId: "",
                extraValue: "",
                subeOgrenci: "",
                kullanici: "",
                birim: "",
                kelime: "",
                t1: "",
                t2: "",
                odemeDurumu: "99",
                aktif: true
            }


            var ___settings = imframe.extend({}, defaultSettings, settings);

            imframe("#aranacakAlan option[value='" + ___settings.searchArea + "']").attr("selected", "selected");

            imframe("#adayOgrenciDurum option[value='" + ___settings.aktif + "']").attr("selected", "selected");

            var durum = $("#adayOgrenciDurum").val();

            imframe('#dataTablePasifBtn').css("display", "");
            imframe('#dataTableAktivBtn').css("display", "");

            //if (durum == 'True') {
            //    imframe('#dataTablePasifBtn').css("display", "");
            //    imframe('#dataTableAktivBtn').css("display", "none");
            //}
            //else {
            //    imframe('#dataTablePasifBtn').css("display", "none");
            //    imframe('#dataTableAktivBtn').css("display", "");
            //}


            imframe("#ogrenciListeSubeOgrenci option[value='" + ___settings.subeOgrenci + "']").attr("selected", "selected");

            imframe("#extraField option[value='" + ___settings.extraValue + "']").attr("selected", "selected");

            imframe("." + ___settings.tableClass + " .table-responsive").before("<div class='page-row-count'> </div>");
            imframe("." + ___settings.tableClass + " .table-responsive").after("<div id='tableDetails'> <div class='silbtn'></div> <div class='paging'></div>  <div class='details'></div></div>");

            // Mevcut değerler hidden lar üzerimde saklanmalı
            var hiddenText = "";
            hiddenText += "<input type='hidden' id='data-table-hidden' data-odemedurumu='" + ___settings.odemeDurumu + "' data-t1='" + ___settings.t1 + "' data-t2='" + ___settings.t2 + "' data-kelime='" + ___settings.kelime + "' data-birim='" + ___settings.birim + "' data-kullanici='" + ___settings.kullanici + "'  data-subeogrenci='" + ___settings.subeOgrenci + "' data-seviyeid='" + ___settings.seviyeId + "' data-sortcol='" + ___settings.sortCol + "' data-sorttype='" + ___settings.sortType + "' data-usertype='" + ___settings.userType + "' data-searchkeyword='" + ___settings.searchKeyword + "' data-searcharea='" + ___settings.searchArea + "' data-totalcount='" + ___settings.totalCount + "' data-view='" + ___settings.view + "' data-controller='" + ___settings.controller + "' data-activepage='" + ___settings.activePage + "' data-pagecount='" + ___settings.pageCount + "' data-detailclass='" + ___settings.detailClass + "' data-divclass='" + ___settings.divClass + "' data-pageid='" + ___settings.pageId + "' />";


            imframe("." + ___settings.tableClass).append(hiddenText);



            var totalPage = parseInt(___settings.totalCount) / ___settings.pageCount;
            totalPage = Math.ceil(totalPage);

            var on = "";
            var yirmi = "";
            var elli = "";
            var yuz = "";
            var ikiyuzelli = "";
            var bin = "";
            var besyuz = "";

            switch (___settings.pageCount) {
                default:
                    elli = "selected='selected'";
                    break;
                case "10":
                    on = "selected='selected'";
                    break;
                case "20":
                    yirmi = "selected='selected'";
                    break;
                case "50":
                    elli = "selected='selected'";
                    break;
                case "100":
                    yuz = "selected='selected'";
                    break;
                case "250":
                    ikiyuzelli = "selected='selected'";
                    break;
                case "500":
                    besyuz = "selected='selected'";
                    break;
                case "1000":
                    bin = "selected='selected'";
                    break;
            }

            if (___settings.totalCount > 10) {
                imframe("." + ___settings.tableClass + " table thead th:first").html("<select  class='form-control input-xsmall input-inline'      data-type='DataTable'  > <option " + on + " value='10' > 10 </option> <option " + yirmi + " value='20'  > 20 </option> <option " + elli + " value='50' > 50 </option> <option " + yuz + " value='100' > 100 </option> <option " + ikiyuzelli + " value='250' > 250 </option>  <option " + besyuz + " value='500' > 500 </option>  <option " + bin + " value='1000' > 1000 </option> </select>");
            }

            var paging = "";


            if (totalPage > 1) {

                if (parseInt(___settings.totalCount) < ___settings.pageCount || totalPage + 1 < 3 || parseInt(___settings.activePage) == 1) {
                    paging += "<div class='dataTables_paginate paging_bootstrap'><ul class='pagination' style='visibility: visible;'><li class='prev disabled'><a href='#'><i class='fa fa-chevron-left'></i></a></li>";
                }
                else {

                    paging += "<div class='dataTables_paginate paging_bootstrap'><ul class='pagination' style='visibility: visible;'><li class='prev'><a class='btn btn-white btn-mini' data-sorttype='" + ___settings.sortType + "' data-sortcol='" + ___settings.sortCol + "' data-activepage='" + (parseInt(___settings.activePage) - 1) + "' data-pagecount='" + ___settings.pageCount + "' data-usertype='" + ___settings.userType + "' data-searchkeyword='" + ___settings.searchKeyword + "' data-searcharea='" + ___settings.searchArea + "' href='#' data-controller='" + ___settings.controller + "' data-view='" + ___settings.view + "'   data-type='DataTable' data-div='" + ___settings.pageId + "'  title='Prev'><i class='fa fa-chevron-left'></i></a></li> ";
                }

                for (var i = 1; i < totalPage + 1; i++) {

                    if (i > parseInt(___settings.activePage) - 10 && i < parseInt(___settings.activePage) + 10) {
                        var cls = "";
                        if (parseInt(___settings.activePage) == i) {
                            cls = "active";
                        }

                        paging += "<li class='" + cls + "'><a data-sorttype='" + ___settings.sortType + "'   data-sortcol='" + ___settings.sortCol + "' data-activepage='" + i + "' data-pagecount='" + ___settings.pageCount + "' data-usertype='" + ___settings.userType + "'   data-searchkeyword='" + ___settings.searchKeyword + "' data-searcharea='" + ___settings.searchArea + "'  class='Paging' data-page='" + i + "' href='#' data-controller= '" + ___settings.controller + "' data-view='" + ___settings.view + "'   data-type='DataTable' data-div='" + ___settings.pageId + "' >" + i + " </a></li>";
                    }
                }
                var ilkDeger = 0;
                var sonDeger = 0;
                if (parseInt(___settings.totalCount) < ___settings.pageCount || parseInt(___settings.totalPage) + 1 < 3 || parseInt(___settings.activePage) == totalPage) {
                    ilkDeger = 0;
                    sonDeger = ___settings.totalCount;
                    paging += "<li class='next disabled'><a  href='#'  title='Next'><i class='fa fa-chevron-right'></i></a></li> ";
                }
                else {
                    ilkDeger = (___settings.totalCount / totalPage) * ___settings.activePage;
                    sonDeger = (___settings.totalCount / totalPage) * (___settings.activePage + 1);
                    paging += "<li class='next'><a href='#' data-sorttype='" + ___settings.sortType + "' data-sortcol='" + ___settings.sortCol + "' data-activepage='" + (parseInt(___settings.activePage) + 1) + "' data-pagecount='" + ___settings.pageCount + "' data-usertype='" + ___settings.userType + "'   data-searchkeyword='" + ___settings.searchKeyword + "' data-searchArea='" + ___settings.searchArea + "' href='#' data-controller='" + ___settings.controller + "' data-view='" + ___settings.view + "' data-type='DataTable' data-div='" + ___settings.pageId + "' title='Next'><i class='fa fa-chevron-right'></i></a></li> ";
                }

                imframe(".paging").empty();
                imframe(".paging").append(paging);
            }

            imframe(".silbtn").html("<div class='col-md-12' style='margin:0px; padding:15px 0;'>  <a href='#' class='btn btn-danger btnDataTableSil' data-controller='Kullanicilar' data-action='" + ___settings.removeAction + "'> " + LANGUAGE.SECILENLERISIL + " </a>  <form class='silinecekKayitlar' style='display:none;'></form>  </div>");
            imframe(".details").html("<div>" + LANGUAGE.TOPLAM + " : " + ___settings.totalCount + " " + LANGUAGE.KAYIT + "</div>")
        }

        // Edited by: Uğur T.
        // Edited at: 08.06.2014
        // Desc: Toastr eklentisi ile uyarı göstermeyi sağlar.
        imframe.Uyari = function (settings) {
            var defaultSettings = {
                "closeButton": true,
                "debug": false,
                "positionClass": "toast-top-full-width",
                "onclick": null,
                "showDuration": "1000",
                "hideDuration": "1000",
                "timeOut": "5000",
                "extendedTimeOut": "5000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut",
                "progressBar": true,
                type: "alert",
                title: "Uyarı",
                message: ""
            }
            var ___settings = imframe.extend({}, defaultSettings, settings);
            var dialogContent = ___settings.headerText;

            toastr.options.positionClass = ___settings.positionClass;
            toastr.options.closeButton = ___settings.closeButton;

            if (___settings.type == "info") {
                toastr.info(___settings.message, ___settings.title);
            }
            else if (___settings.type == "warning") {
                toastr.warning(___settings.message, ___settings.title);
            }
            else if (___settings.type == "success") {
                toastr.success(___settings.message, ___settings.title);
            }
            else if (___settings.type == "error") {
                toastr.error(___settings.message, ___settings.title);
            }
        }

        // Author: Cem G.
        // Edited at: 26.04.2022 - Ali Özcan
        // Description: Bootstrap Modal eklentisi ile modal oluşturmayı sağlar.
        // Description Edit: Backdrop gibi eklentiler eklendi. Modal oluştuktan sonra {scroll area - menü - swipper} gibi kısımları güncelledik.
        imframe.ModalOlustur = function (settings) {
            // Default Settings
            var defaultSettings = {
                modal_id: "",
                modal_header_title: LANGUAGE.KAYIT_BILGILERI,
                url: "",
                data: {},
                size: '', // modal-lg, modal-sm
                style: '', // width:1200px; gibi
                buttons: '2', // 0: Gizli 1: İptal 2: İptal/Kaydet|Güncelle
                closebutton: true,
                backdrop: true,
                keyboard: true
            }
            var ___settings = imframe.extend({}, defaultSettings, settings);



            // Buttons
            var modal_buttons = '';
            var modal_standart_buttons = '<button type="button" class="btn btn-danger" data-dismiss="modal"><i class="feather icon-x"></i> ' + LANGUAGE.KAPAT + '</button>';
            if (___settings.data) {
                if (typeof ___settings.data.id == "undefined" || ___settings.data.id == 0)
                    modal_buttons = '<button type="button" class="btn btn-primary" id="btn_' + ___settings.modal_id + '_kaydet"><i class="feather icon-save"></i> ' + LANGUAGE.KAYDET + '</button>';
                else if (___settings.data.id > 0)
                    modal_buttons = '<button type="button" class="btn btn-primary" id="btn_' + ___settings.modal_id + '_guncelle"><i class="feather icon-save"></i> ' + LANGUAGE.GUNCELLE + '</button>';
            }
            if (___settings.buttons == 0) {
                modal_standart_buttons = '';
                modal_buttons = '';
            } else if (___settings.buttons == 1) {
                modal_buttons = '';
            }

            // Size
            var modal_size = '';
            if (___settings.size != "") {
                modal_size = ___settings.size;
            }

            var modal_style = '';
            if (___settings.style != "") {
                modal_style = ___settings.style;
            }

            var modal_type = '';
            if (___settings.data.ModalType != undefined) modal_type = ___settings.data.ModalType;

            var _closebutton = '';
            if (___settings.closebutton)
                _closebutton = '<button  type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>';

            var _backdrop = '';
            if (___settings.backdrop)
                _backdrop = 'static';

            var _scrollContent = '';
            if (___settings.scrool_content)
                _srollContent = 'modal-dialog-scrollable';

            if ($("#" + ___settings.modal_id).length == 0) {
                imframe("body").append('<div class="modal fade ' + (___settings.backdrop ? "" : "backdrop") + '" id="' + ___settings.modal_id + '" data-keyboard="' + ___settings.keyboard + '" data-backdrop="' + ___settings.backdrop + '" ><div class="modal-dialog modal-dialog-centered ' + (___settings.scrool_content ? _scrollContent + ' ' : '') + modal_size + '" style=' + modal_style + '><div class="modal-content"></div></div></div>');
                imframe("#" + ___settings.modal_id + " .modal-content").append('<div class="modal-header">' + _closebutton + '<h4 class="modal-title">' + ___settings.modal_header_title + '</h4></div>');
                imframe("#" + ___settings.modal_id + " .modal-content").append('<div class="modal-body">Yükleniyor...</div>');
                imframe("#" + ___settings.modal_id + " .modal-content").append('<div class="modal-footer"></div>');
            }

            imframe("#" + ___settings.modal_id + " .modal-footer").html(modal_standart_buttons + modal_buttons);

            // Load
            if (___settings.url != "") {
                imframe("#" + ___settings.modal_id + ' .modal-body').loadView({
                    url: ___settings.url,
                    data: ___settings.data,
                    success: ___settings.success
                });
            }

            if (___settings.html != "") {
                imframe("#" + ___settings.modal_id + ' .modal-body').html('');
                imframe("#" + ___settings.modal_id + ' .modal-body').append(___settings.html);
            }

            $('.scroll-area:not(.activated)').each(function (index, _this) {
                var scroll = new PerfectScrollbar(_this, {
                    wheelSpeed: .5,
                    wheelPropagation: true,
                    minScrollbarLength: 20
                });
                scroll.update();
                $(_this).addClass('activated');
            });

            if ($('.nav-menu-main').is(":visible")) {
                if ($('.nav-menu-main').hasClass('is-active')) {
                    $('a.nav-menu-main').click();
                }
            }

            $('.menuswiper').each(function (index, _this) {
                var dersMenuSwiper = new Swiper(_this, {
                    slidesPerView: 'auto',
                    autoHeight: false,
                    grabCursor: true,
                    freeMode: true
                });
                dersMenuSwiper.update();
            });

            $('[data-toggle="tooltip"]').each(function (index, _this) {
                $(_this).tooltip();
            });


            // Show
            imframe("#" + ___settings.modal_id).modal('show');
            $('body').addClass('modal-open');

            // Close And Remove
            $("#" + ___settings.modal_id).on('hidden.bs.modal', function (e) {
                $("#" + ___settings.modal_id).remove();
                if ($('body .modal:not(.noautomatic)').length > 1) {
                    $('body').addClass('modal-open');
                }
            });
        }

        /**/
        imframe.showMessage = function (settings) {

            var defaultSettings = {
                closeAfterMilliSeconds: 0,
                closeFunction: null,
                resizable: false,
                draggable: false,
                modal: true,
                height: 220,
                width: 350,
                position: {
                    my: 'center',
                    at: 'center'
                },
                buttons: null,
                open: null,
                onYesButtonClick: null,
                onNoButtonClick: function () { imframe(this).dialog("close") },
                onOKButtonClick: function () { imframe(this).dialog("close") },
                headerText: "Emin misiniz?",
                title: "Uyarı",
                type: "alert",
                typeKind: null,
                containerId: null,
                url: "",
                data: {},
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                type: "POST",
                success: null,
                error: null,
                messageDiv: null,
                loadingObjectName: "pageLoading",
                closeOnEscape: false,
                dialogClass: null
            }

            var ___settings = imframe.extend({}, defaultSettings, settings);
            var dialogContent = ___settings.headerText;

            var imagePath = "";

            if (___settings.typeKind != null) {
                dialogContent = "<table><tr><td style='border:none; vertical-align:top; padding:10px;'><img src='/Content/Images/" +
                    ___settings.typeKind + ".png' width='50px'/></td><td style='border:none; vertical-align:top; padding:10px; padding-left:5px;'>" +
                    ___settings.headerText + "</td></tr></table>"
            }

            //**************************************************

            if (___settings.type == "alert") {
                if (___settings.buttons == null && ___settings.typeKind != "success" && ___settings.closeAfterMilliSeconds == 0)
                    ___settings.buttons = {
                        "Tamam": ___settings.onOKButtonClick
                    }
                var a = imframe('<div title="' + ___settings.title + '" id="dvDialog"/>').html(dialogContent).dialog(___settings);

                if (___settings.closeAfterMilliSeconds > 0) {
                    setTimeout(function () {
                        $(a).dialog("close");
                        ___settings.closeFunction();
                    }, ___settings.closeAfterMilliSeconds);
                }

            }

            //*****************************************************

            else if (___settings.type == "confirm") {
                if (___settings.buttons == null)
                    ___settings.buttons = {
                        "Evet": ___settings.onYesButtonClick,
                        "Hayır": ___settings.onNoButtonClick
                    }
                imframe('<div title="' + ___settings.title + '"/>').html(dialogContent).dialog(___settings);
            }

            else if (___settings.type == "pageModal") {
                //imframe("#" + ___settings.messageDiv).html("");
                imframe("#" + ___settings.messageDiv).html(
                    imframe("#" + ___settings.messageDiv).loadView({
                        url: ___settings.url,
                        data: ___settings.data
                    })).dialog(___settings);
            }
        }

        /*
        *
        */
        imframe.confirmBox = function (settings) {
            var defaultSettings = {
                resizable: false,
                modal: true,
                height: 175,
                width: 350,
                position: {
                    my: 'center',
                    at: 'center'
                    //of: this
                },
                buttons: {
                    "Hayır": function () {
                        imframe(this).dialog("close");
                    },
                    "Evet": null
                },
                headerText: "Emin misiniz?",
                title: "Uyarı"
            }

            var ___settings = jQuery.extend({}, defaultSettings, settings);

            imframe('<div title="' + ___settings.title + '"/>').html(___settings.headerText).dialog(___settings);
        }

        /*
        * javascript ile anlık kontrol oluşturma
        */
        imframe.fn.createClientControl = function (settings, obj) {
            var defaultSettings = {
                ajax: null,
                source: null,
                data: "",
                height: null,
                width: null,
                multiselect: null,
                className: "",
                onChange: null,
                onClick: null,
                onLoad: null,
                onLoading: null,
                onKeypress: null,
                disabled: null,
                type: "text",
                obj: null,
                disabled: null,
                hide: null,
                //multiselect: { multiple: false, selectedList: 1 },
                customAttribute: []
            }

            var _insertedContainer = false;

            var ___settings = jQuery.extend({}, defaultSettings, settings);
            if (obj) {
                ___settings.obj = obj;
            }
            if (___settings.onLoading) {
                ___settings.onLoading(___settings.obj);
            }
            var container = imframe(this);
            var control;
            switch (___settings.type) {
                case 'select': {
                    control = imframe("<select/>").addClass(___settings.className);
                    if (___settings.source) {
                        for (var _i in ___settings.source) {

                            var _option = imframe("<option value='" + ___settings.source[_i].Id + "'  >" + ___settings.source[_i].Deger + "</option>");
                            if (___settings.source[_i].Id == ___settings.data) {
                                _option.attr("selected", "true");
                            }
                            control.append(_option)
                        }
                        container.append(control);
                        control.multiselect(___settings.multiselect);
                    } else {
                        if (___settings.ajax) {
                            var defaultAjaxSettings = {
                                hasReturnValue: true,
                                loadingObjectName: "________inputselectcontrol__________"
                            }
                            var ___ajaxSettings = jQuery.extend({}, defaultAjaxSettings, ___settings.ajax);
                            imframe.callMethod(___ajaxSettings,
                                function (___source) {
                                    for (var _i in ___source) {
                                        var _option = imframe("<option value='" + ___source[_i].Id + "'  >" + ___source[_i].Deger + "</option>");
                                        if (___source[_i].Id == ___settings.data) {
                                            _option.attr("selected", "true");
                                        }
                                        control.append(_option)
                                    }
                                    container.append(control);
                                    control.multiselect(___settings.multiselect);
                                }, null);
                        }
                    }
                    _insertedContainer = true;
                    break;
                }
                case 'check': {
                    control = imframe("<input type='checkbox'/>").addClass(___settings.className);
                    if (___settings.data == true) {
                        control.attr("checked", "true");
                    } else {
                        control.removeAttr("checked");
                    }
                    break;
                }
                case 'text': {
                    control = imframe("<input type='text'/>").addClass(___settings.className).val(___settings.data);;


                    break;
                }
                case 'link': {
                    control = imframe("<a href='#'/>").addClass(___settings.className).html(___settings.data);
                    break;
                }
                case 'button': {
                    control = imframe("<button />");

                    if (___settings.className.length == 0) {
                        if (___settings.data == 'Ekle') {
                            control.html('<i class="fa fa-plus"></i>');
                            control.addClass('btn yellow');
                        }
                        else if (___settings.data == 'Güncelle') {
                            control.html('<i class="fa fa-edit"></i>');
                            control.addClass('btn green');
                        }
                        else if (___settings.data == 'Sil') {
                            control.html('<i class="fa fa-times"></i>');
                            control.addClass('btn red');
                        }
                        else if (___settings.data == 'ExportToExcel') {
                            control.addClass('gridBtnExcel');
                        }
                        else if (___settings.data == 'ExportToPdf') {
                            control.addClass('gridBtnPdf');
                        }
                        else {
                            control.addClass(___settings.className).val(___settings.data);
                        }
                    }
                    else
                        control.addClass(___settings.className).val(___settings.data);

                    break;
                }
                case 'imagelink': {
                    control = imframe("<img alt='' src='" + ___settings.data + "'/>").addClass(___settings.className);
                    break;
                }
                default: {
                    control = imframe("<span/>").addClass(___settings.className).html(___settings.data);
                    break;
                }
            }

            if (___settings.hide) {
                control.css("display", "none");
            }

            if (___settings.disabled)
                control.attr("disabled", "disabled");

            if (___settings.width) {
                control.width(___settings.width);
            }
            if (___settings.height) {
                control.height(___settings.height);
            }
            if (___settings.onChange) {
                control.change(function () {
                    ___settings.onChange(imframe(this), ___settings.obj);
                });
            }
            if (___settings.onClick) {
                control.click(function () {
                    ___settings.onClick(imframe(this), ___settings.obj);
                });
            }
            if (___settings.onKeypress) {
                control.keypress(function () {
                    ___settings.onKeypress(imframe(this), ___settings.obj);
                });
            }
            if (___settings.onKeyup) {
                control.keyup(function () {
                    ___settings.onKeyup(imframe(this), ___settings.obj);
                });
            }
            for (var _item in ___settings.customAttribute) {
                control.attr(___settings.customAttribute[_item].name, ___settings.customAttribute[_item].value);
            }
            if (!_insertedContainer)
                container.append(control);
            if (___settings.onLoad) {
                ___settings.onLoad(control, ___settings.obj);
            }
            return control;
        }

        /*
        * Alert Tanımlama Bölümü
        */
        imframe.alert = function (alertMessage) {
            alert(alertMessage);
        }

        /*
        * Ajax Tanımlama Bölümü
        */
        imframe.ajax1 = jQuery.ajax;

        //imframe.ajax = function (settings) {
        //    //imframe.alert("Hatalı Kullanım Lütfen imframe.callMethod fonksiyonunu kullanınız");
        //    var defaultSettings = {
        //        hasReturnValue: false
        //    }
        //    var ___settings = jQuery.extend({}, defaultSettings, settings);
        //    imframe.callMethod(___settings);
        //};

        imframe.callMethod = function (settings, success, error) {

            var defaultSettings = {
                hasReturnValue: true,
                type: "POST",
                url: "",
                data: {},
                dataType: "json",
                cache: false,
                contentType: "application/json; charset=UTF-8",
                success: null,
                connectionError: null,
                serviceError: null,
                loadingObjectName: "pageLoading"
            }

            var ___settings = jQuery.extend({}, defaultSettings, settings);

            if (!success) {
                success = ___settings.success;
            }

            if (error) {
                ___settings.error = error;
            }

            ___settings.error = function (err) {
                imframe("html").css("overflow", "");
                imframe("#" + ___settings.loadingObjectName).hide();

                if (___settings.connectionError) {
                    ___settings.connectionError(err);
                }
                else if (err.status == 302) {

                    imframe.Uyari({
                        type: "error",
                        title: _LANGUAGE.UYARI,
                        message: 'Oturum sonlandı. Giriş sayfasına yönlendirileceksiniz'
                    });

                    window.location = location.origin + location.pathname;
                }
                else if (err.status == 400) {

                    var errmessage = "";

                    var response = imframe.JSONparse(err.responseText);

                    imframe.each(response, function (i, val) {
                        imframe.each(val.errors, function (j, value) {
                            errmessage += "- " + value + "<br>"
                        });
                    });

                    if (errmessage == "") errmessage = err.responseText;

                    imframe.Uyari({
                        type: "error",
                        title: _LANGUAGE.UYARI,
                        message: errmessage
                    });
                }
                else if (err.status == 500) {

                    var errmessage = "Sistemsel bir hata oluştu!";

                    var response = imframe.JSONparse(err.responseText);

                    imframe.Uyari({
                        type: "error",
                        title: _LANGUAGE.UYARI,
                        message: errmessage
                    });
                }
                else if (err.status == 403) {
                    var errormessage = "Sayfaya Erişim Yetkiniz Bulunmamaktadır.";
                    if (imframe.JSONparse(err.responseText).Error != undefined) {
                        errormessage = imframe.JSONparse(err.responseText).Error;
                    }
                    imframe.Uyari({
                        type: "error",
                        title: _LANGUAGE.UYARI,
                        message: errormessage
                    });
                }
                else {
                    imframe.Uyari({
                        type: "error",
                        title: _LANGUAGE.UYARI,
                        message: 'Sunucu ile bağlantı kurulamadı'
                    });
                }
            }

            ___settings.success = function (data) {
                imframe("html").css("overflow", "");
                imframe("#" + ___settings.loadingObjectName).hide();
                if (data != null && data != undefined) {
                    if (data.____exception) {
                        if (___settings.serviceError) {
                            ___settings.serviceError(data);
                        } else {
                            var m = data.Message;
                            if (data.Data)
                                m = m + "\n" + data.Data

                            imframe.Uyari({
                                type: "error",
                                title: _LANGUAGE.UYARI,
                                message: m
                            });
                        }
                    } else {
                        if (success) {
                            success(data);
                        } else {
                            if (___settings.hasReturnValue) {
                                imframe.Uyari({
                                    type: "error",
                                    title: _LANGUAGE.UYARI,
                                    message: 'Sunucudan veri alındı fakat veri işleyecek fonksiyon bulunamadı'
                                });
                            }
                        }
                    }
                } else {
                    if (___settings.hasReturnValue)
                        imframe.Uyari({
                            type: "error",
                            title: _LANGUAGE.UYARI,
                            message: 'Sunucudan Veri Alınamadı'
                        });
                }
            }

            if (___settings.url == "") {
                imframe.Uyari({
                    type: "error",
                    title: _LANGUAGE.UYARI,
                    message: 'İstek yapılacak URL adresi belirtilmedi'
                });
                return;
            }
            imframe("html").css("overflow", "hidden");
            imframe("#" + ___settings.loadingObjectName).show();
            imframe.ajax1(___settings);
        }

        /*
        * View Loading
        */
        imframe.fn.loadView = function (settings) {
            var container = imframe(this);
            var defaultSettings = {
                containerId: null,
                url: "",
                data: {},
                dataType: "json",
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                type: "POST",
                success: null,
                error: null,
                loadingObjectName: "pageLoading"
            }
            var ___settings = jQuery.extend({}, defaultSettings, settings);

            imframe.callMethod({
                isReturnValue: true,
                type: ___settings.type,
                url: (___settings.url.indexOf('?') > -1) ? ___settings.url + "&___layout" : ___settings.url + "?___layout",
                data: ___settings.data,
                dataType: "html",
                contentType: ___settings.contentType,
                connectionError: ___settings.error,
                loadingObjectName: ___settings.loadingObjectName,
                success: function (data) {
                    container.html(imframe("<html/>").html(data).html());
                    ____loadMethodsCall();

                    $('.scroll-area:not(.activated)').each(function (index, _this) {
                        var scroll = new PerfectScrollbar(_this, {
                            wheelSpeed: .5,
                            wheelPropagation: true,
                            minScrollbarLength: 20
                        });

                        scroll.update();
                        $(_this).addClass('activated');
                    });

                    if ($('.nav-menu-main').is(":visible")) {
                        if ($('.nav-menu-main').hasClass('is-active')) {
                            $('a.nav-menu-main').click();
                        }
                    }

                    $('.menuswiper').each(function (index, _this) {
                        var dersMenuSwiper = new Swiper(_this, {
                            slidesPerView: 'auto',
                            autoHeight: false,
                            grabCursor: true,
                            freeMode: true
                        });
                        dersMenuSwiper.update();
                    });

                    $('[data-toggle="tooltip"]').each(function (index, _this) {
                        $(_this).tooltip();
                    });

                    if ($('body .modal:not(.noautomatic)').length == 0) {
                        $('body').removeClass('modal-open');
                    }

                    if (___settings.data.title !== undefined) {
                        document.title = ___settings.data.title;
                    }

                    if (___settings.success != null)
                        ___settings.success();
                }
            });

            return container;
        }

        /*
        * View Multi Loading
        */
        imframe.fn.loadMultiView = function (settings) {
            var container = imframe(this);
            var defaultSettings = {
                items: {},
                loadingObjectName: "pageLoading"
            }
            var ___settings = jQuery.extend({}, defaultSettings, settings);

            ___settings.items.each(function () {

                loadView();

                $('.scroll-area:not(.activated)').each(function (index, _this) {
                    var scroll = new PerfectScrollbar(_this, {
                        wheelSpeed: .5,
                        wheelPropagation: true,
                        minScrollbarLength: 20
                    });

                    scroll.update();
                    $(_this).addClass('activated');
                });

                if ($('.nav-menu-main').is(":visible")) {
                    if ($('.nav-menu-main').hasClass('is-active')) {
                        $('a.nav-menu-main').click();
                    }
                }

                $('.menuswiper').each(function (index, _this) {
                    var dersMenuSwiper = new Swiper(_this, {
                        slidesPerView: 'auto',
                        autoHeight: false,
                        grabCursor: true,
                        freeMode: true
                    });

                    dersMenuSwiper.update();
                });

                if ($('body .modal:not(.noautomatic)').length == 0) {
                    $('body').removeClass('modal-open');
                }

                $('[data-toggle="tooltip"]').each(function (index, _this) {
                    $(_this).tooltip();
                });
            });

            return container;
        }

        /*
        * Menü efektlerinin tanımlandığı ayarlandığı script bölümü
        */
        imframe.fn.menuEffect = function () {
            var menuContainer = imframe(this);

            menuContainer.find("ul.menu-ul ul").hide();

            menuContainer.find("ul.menu-ul>li.menu-item>a").click(function () {
                var clickedObject = imframe(this);
                clickedObject.next("ul").slideToggle();
            });
        }

        imframe.fn.tabs = function () {
            var childTabs = imframe(imframe(this).selector + ">div");
            var container = imframe(this);

            //container.html("");
            imframe("<ul class='tab-ul'/>").insertBefore(imframe(container.children()[0]));

            //container.append(childTabs);
            var ulArea = imframe(container.selector + ">ul.tab-ul");

            var i = 0;
            childTabs.each(function () {
                var li = imframe("<li/>").click(function () {
                    var myDiv = imframe("div#" + imframe(this).attr("id"));
                    imframe(this).parent().parent().find(">div").hide();
                    myDiv.show();
                    if (myDiv.attr("onload").length > 0) {
                        eval(myDiv.attr("onload"))(myDiv);
                    }
                    var lis = imframe(this).parent().find("li");
                    lis.removeClass("tab-ul-li-active tab-ul-li");
                    lis.addClass("tab-ul-li");
                    imframe(this).addClass("tab-ul-li-active tab-ul-li");
                });
                li.attr("id", imframe(this).attr("id"));
                li.attr("onLoad", imframe(this).attr("onload"));
                li.html("<span class='tab-ul-li-span'>" + imframe(this).attr("title") + "</span>");

                if (i != 0) {
                    imframe(this).hide();
                    li.addClass("tab-ul-li");
                }
                else {
                    li.addClass("tab-ul-li-active tab-ul-li");
                    if (imframe(this).attr("onload").length > 0) {
                        eval(imframe(this).attr("onload"))(imframe(this));
                    }
                }
                i++;
                ulArea.append(li);
            });

        }

        imframe.fn.date = function (settings, minDate, maxDate) {
            var min = imframe(this).attr("minValue");
            var max = imframe(this).attr("maxValue");
            var defaultSettings = {
                defaultDate: "+1w",
                showOn: "button",
                buttonImage: "/Content/images/calendar.gif",
                buttonImageOnly: true,
                changeMonth: true,
                numberOfMonths: 1,
                onClose: null,
                minDate: null,
                maxDate: null
            }

            /*   belirtilmeyen özellikler varsayılan ayarlara göre düzenleniyor   */
            var ___settings = jQuery.extend({}, defaultSettings, settings);

            jQuery(this).datepicker(___settings);

            if (min)
                jQuery(this).datepicker("option", "minDate", minDate);

            if (max)
                jQuery(this).datepicker("option", "maxDate", maxDate);

            if (minDate)
                jQuery(this).datepicker("option", "minDate", minDate);

            if (maxDate)
                jQuery(this).datepicker("option", "maxDate", maxDate);

        }


        /*
        *Attribute göre control arama metodu geriye list döner
        */
        imframe.fn.findByAttr = function (name, value) {
            var _res = [];
            imframe(this).each(function () {
                if (imframe(this).attr(name) == value) {
                    _res.push(this);
                }
            });
            return imframe(_res);
        }

        imframe.fn.createMask = function () {
            var _ctrl = imframe(this);
            var clientType = _ctrl.attr("clientType");
            var mask = _ctrl.attr("maskoptions");
            var settings = imframe(this).getMaskSettings(clientType, mask);

            if (clientType == 2) {
                _ctrl.dateMask("Dd.Mm.Yyyy");
            } else if (clientType == 5) {
                _ctrl.numeric({ negative: false, decimal: false }, numberInvalid);
            } else {
                _ctrl.autoNumeric('init', settings);
            }

        }

        function numberInvalid() {
            imframe(this).val("");
        }

        imframe.fn.getMaskSettings = function (clientType, useroptions) {

            var defaults = {};
            var options;

            if (clientType == 4)
                defaults = { vMax: '2147483647', vMin: '-2147483648', mDec: '0', aSep: '.', aDec: ',', aNeg: '-' };
            else if (clientType == 11)
                defaults = { vMax: '2147483647', vMin: '0', mDec: '0', aSep: '.', aDec: ',', aNeg: '' };
            //else if (clientType == 5)
            //    defaults = {  mDec: '0', aSep: '' };
            else if (clientType == 7) {
                defaults = { mDec: '2', aSep: '.', aDec: ',', aNeg: '-', vMin: '-79228162514264337593543950335' };
            }
            else if (clientType == 9) {
                defaults = { mDec: '2', aSep: '.', aDec: ',', aNeg: '', vMin: '0' };
            }

            if (!useroptions || useroptions == null)
                return defaults;

            try {
                options = JSON.parse(useroptions);
            } catch (e) {
                console.log(e);
            }

            var settings = imframe(this).extend({}, defaults, options);

            return settings;
        }


        imframe.fn.createMasks = function () {

            var body = imframe(this);
            var controls = body.find("input,textarea");

            imframe.each(controls, function () {
                var _ctrl = imframe(this);

                var name = _ctrl.attr("name");

                if (name) {

                    var clienttype = _ctrl.attr("clienttype");

                    switch (parseInt(clienttype)) {
                        //TCKimlik                
                        case 4: {
                            _ctrl.createMask();
                            break;
                        }
                        case 7: {
                            _ctrl.createMask();
                            break;
                        }
                        case 9: {
                            _ctrl.createMask();
                            break;
                        }
                    }
                }
            });

        }

        imframe.fn.createValidate = function () {

            var form = imframe(this);
            var controls = form.find("input,textarea,select");
            var validate = {
                rules: {
                }
            }
            var validateString = "";
            imframe.each(controls, function () {
                var _ctrl = imframe(this);
                var name = _ctrl.attr("name");
                var required = _ctrl.attr("required");
                var defaultValue = _ctrl.attr("defaultvalue");
                var minValue = _ctrl.attr("minValue");
                var maxValue = _ctrl.attr("maxValue");
                var selectedDate = _ctrl.attr("selectedDate");
                var minLength = _ctrl.attr("minlength");
                var MaxLength = _ctrl.attr("maxlength");
                var RemoteValidate = _ctrl.attr("remotevalidate");
                var ClientValidate = _ctrl.attr("clientvalidate");
                var EqualTo = _ctrl.attr("equalto");
                if (name) {

                    var clienttype = _ctrl.attr("clienttype");
                    validateString += "\"" + name + "\" : { ";
                    if (required) {
                        validateString += " \"required\" : true ";
                    } else {
                        validateString += " \"required\" : false ";
                    }
                    if (parseInt(clienttype) != 2) {
                        if (minValue) {
                            validateString += ", \"min\" : \"" + minValue + "\" ";
                        }
                        if (maxValue) {
                            validateString += ", \"max\" : \"" + maxValue + "\" ";
                        }
                    }
                    if (minLength) {
                        validateString += ", \"minlength\" : " + minLength + " ";
                    }

                    if (MaxLength) {
                        validateString += ", \"maxlength\" : " + MaxLength + " ";
                    }
                    if (RemoteValidate) {
                        validateString += ", \"remote\" : \"" + RemoteValidate + "\" ";
                    }
                    if (ClientValidate) {
                        validateString += ", \"client\" : \"" + ClientValidate + "\" ";
                    }
                    if (EqualTo) {
                        validateString += ", \"equalTo\" : \"#" + EqualTo + "\" ";
                    }


                    switch (parseInt(clienttype)) {
                        //TCKimlik
                        case 0: {
                            validateString += ", \"digits\" : true ";
                            validateString += ", \"tckimlik\" : true";
                            //pattern.maxlength = true;
                            //_ctrl.mask('ddddddddddd', pattern).attr("maxlength", 11);
                            break;
                        }
                        //Telefon
                        case 1: {
                            validateString += ", \"phoneUS\" : true ";
                            _ctrl.inputmask("mask", {
                                "mask": "(999) 999-99-99"
                            });
                            break;
                        }
                        //Tarih
                        case 2: {
                            var _dtSettings = {
                                maxDate: "+10Y",
                                minDate: "-100Y",
                                dateFormat: "dd.mm.yy",
                                showOn: "button",
                                yearRange: "-100:+10",
                                buttonImage: "/Content/images/calendar.gif",
                                buttonImageOnly: true,
                                changeMonth: true,
                                changeYear: true,
                                onClose: function () {
                                    imframe(this).valid();
                                }

                            };

                            if (minValue) {
                                _dtSettings.minDate = new Date(minValue.split("-")[0], parseInt(minValue.split("-")[1]) - 1, minValue.split("-")[2]);
                            }
                            if (maxValue) {
                                _dtSettings.maxDate = new Date(maxValue.split("-")[0], parseInt(maxValue.split("-")[1]) - 1, maxValue.split("-")[2]);
                            }

                            _ctrl.attr("readOnly", "true");

                            var hasDefaultValue = _ctrl.attr("hasDefaultValue");

                            _ctrl.datepicker(_dtSettings);


                            if (_ctrl.attr("disabled"))
                                _ctrl.datepicker('disable');

                            if (!_ctrl.val() && (!hasDefaultValue || hasDefaultValue == "true") && selectedDate)
                                _ctrl.datepicker("setDate", new Date(Date.parse(selectedDate.replace("-", "/"))));

                            validateString += ", \"dateISO\" : true ";

                            break;
                        }
                        //Metin
                        case 3: {
                            //_ctrl.mask('k', pattern);
                            break;
                        }
                        //Sayı
                        case 4: {
                            validateString += ", \"number\" : true ";

                            break;
                        }
                        case 11: {
                            validateString += ", \"positivenumber\" : true ";
                            break;
                        }
                        //Rakam
                        case 5: {
                            validateString += ", \"digits\" : true ";
                            //_ctrl.createMask();
                            //_ctrl.mask('ed', pattern);
                            _ctrl.inputmask({
                                "mask": "9",
                                "repeat": MaxLength,
                                "greedy": false
                            });
                            if (minValue)
                                _ctrl.attr('min', minValue);
                            if (maxValue)
                                _ctrl.attr('max', maxValue);
                            break;
                        }
                        //Url
                        case 6: {
                            validateString += ", \"url\" : true ";
                            //_ctrl.mask('http://k', pattern);
                            break;
                        }
                        //Para
                        case 7: {
                            validateString += ", \"money\" : true ";
                            //;
                            //_ctrl.createMask();

                            //_ctrl.mask('#.##0.00', pattern);
                            break;
                        }
                        //Email
                        case 8: {
                            validateString += ", \"email\" : true ";
                            //_ctrl.mask('#.##0.00', pattern);
                            break;
                        }
                        case 9: {
                            validateString += ", \"money\" : true ";

                            //_ctrl.createMask();
                            break;
                        }
                        // Custom
                        case 10: {
                            break;
                        }
                    }

                    validateString += " },";


                }
            });

            validate.rules = JSON.parse("{" + validateString.substr(0, validateString.length - 1) + "}");
            form.validate(validate);
        }

        function isValidDate(date) {
            var bits = date.split('.');
            var d = new Date(bits[2], bits[1] - 1, bits[0]);
            return d && (d.getMonth() + 1) == bits[1] && d.getDate() == Number(bits[0]);
        }


        $.validator.addMethod('money', function (value, element) {

            return this.optional(element) || imframe(element).data('autoNumeric').numRegAutoStrip.test(value);
        }, 'Geçerli bir değer giriniz.');

        jQuery.validator.addMethod('positivenumber', function (value, element) {

            return this.optional(element) || imframe(element).data('autoNumeric').numRegAutoStrip.test(value);
        }, 'Geçerli bir değer giriniz.');

        jQuery.validator.addMethod('imframeDateISO', function (value, element) {

            if (value == "__.__.____" || !value) {
                return true;
            }
            var _ctrl = imframe(element);

            if (!isValidDate(value)) {
                imframe(element).val("");
                return false;
            }

            var minValue = _ctrl.attr("minValue");
            var maxValue = _ctrl.attr("maxValue");
            if (minValue) {
                var minDate = new Date(minValue.split("-")[0], parseInt(minValue.split("-")[1]) - 1, minValue.split("-")[2]);
                var curDate = new Date(value.split(".")[2], parseInt(value.split(".")[1]) - 1, value.split(".")[0]);
                if (curDate.getTime() < minDate.getTime()) {
                    imframe(element).val("");
                    return false;
                }
            }

            if (maxValue) {
                var maxDate = new Date(maxValue.split("-")[0], parseInt(maxValue.split("-")[1]) - 1, maxValue.split("-")[2]);
                var curDate = new Date(value.split(".")[2], parseInt(value.split(".")[1]) - 1, value.split(".")[0]);
                if (curDate.getTime() > maxDate.getTime()) {
                    imframe(element).val("");
                    return false;
                }
            }

            return this.optional(element) || /(\d{2}\.\d{2}\.\d{4})/g.test(value) || /(\d{1}\.\d{1}\.\d{4})/g.test(value);

        }, 'Geçerli bir tarih girmelisiniz.');

        jQuery.validator.setDefaults({
            errorPlacement: function (error, element) {

                if (element.attr("clientType") && parseInt(element.attr("clientType")) == 2) {
                    error.insertAfter(element.next());
                } else {
                    error.insertAfter(element);
                }
            },

        });

        imframe.fn.checkValidate = function () {
            var _ctrl = imframe(this);
            switch (parseInt(_ctrl.attr("clienttype"))) {
                //TCKimlik
                case 0: {
                    _ctrl.removeAttr("validate");
                    imframe.callMethod({
                        url: "/home/IsTcKimlik/" + imframe(this).val(),
                        contentType: "json",
                        success: function (data) {
                            if (data == true) {
                                _ctrl.attr("validate", "true");
                            } else {
                                _ctrl.attr("validate", "false");
                            }
                        }
                    });
                    break;
                }
                //Telefon
                case 1: {
                    break;
                }
                //Tarih
                case 2: {
                    break;
                }
                //Metin
                case 3: {
                    break;
                }
                //Sayı
                case 4: {
                    break;
                }
            }

        }

        /*
        * Formu serialize etmek için kullanılır geriye string data döner
        */
        imframe.fn.serializeForm = function () {
            var _cValue = [];
            //form içerisindeki input ve select kontrollerini seçiyoruz
            var _c = imframe(this).find("input,select,textarea");
            imframe(this).createValidate();
            var formselector = imframe(this);
            var nameList = [];
            var validationControls = true;
            //controllerin name attributelarını bir lsitede topluyoruz

            imframe(_c).each(function (item) {
                //imframe(_c[item]).change();
                // IE7 de desteklenmiyor IndexOF
                //if (nameList.indexOf(imframe(_c[item]).attr("name")) < 0 && imframe(_c[item]).attr("name") != undefined) {
                if (jQuery.inArray(imframe(_c[item]).attr("name"), nameList) < 0 && imframe(_c[item]).attr("name") != undefined) {

                    nameList.push(imframe(_c[item]).attr("name"));
                }
                if (imframe(_c[item]).not(':hidden').length > 0 && imframe(_c[item]).valid() == 0) {
                    validationControls = false;
                }
            });
            if (validationControls == true) {
                //elimizdeki control isimleri için tek tek değerleri topluyoruz
                for (var item in nameList) {
                    //eğer isim sonunda "_multiselect" ifadesi yer alıyorsa bu kontrol multi select oluşturulmuştur.
                    //o sebeple dikkate alınmıyor çünkü multi select değerlerini hidden üzerinde tutuyor ayrıca o değer hidden kontrolünden alınacak
                    //detaylı bilgi için multi select fonksiyonunu inceleyiniz
                    if (nameList[item].indexOf("_multiselect") < 0) {
                        //nesne için property modeli oluşturuyoruz
                        var _cVal = { name: nameList[item], value: "" };
                        //bu isme ait değeri okuyup modele yerleştiriyoruz
                        var htmlObj = imframe('#' + formselector[0].id + " *[name='" + nameList[item] + "']");


                        //var chkbox = htmlObj.attr("checkbox");
                        //debugger;
                        //if (chkbox == undefined) chkbox.attr("checked", false);
                        //debugger;

                        var multiple = htmlObj.attr("multiple");

                        if (multiple != undefined)
                            _cVal.isMultiselect = true;

                        _cVal.value = imframe(htmlObj[0]).getValue();
                        _cValue.push(_cVal);
                    }
                }
                var result = imframe(_cValue).serializeObject()
                return JSON.stringify(result);
            } else {
                return null;
            }
            return result;
        }

        imframe.Stringify = function (obj) {
            try {
                return JSON.stringify(obj);
            } catch (err) {
                return obj;
            }
        }

        imframe.JSONparse = function (obj) {
            try {
                return JSON.parse(obj);
            } catch (err) {
                return obj;
            }
        }

        imframe.Extend = function (defaultValue, Value) {
            return jQuery.extend({}, defaultValue, Value);
        }

        imframe.fn.getValue = function () {

            switch (this[0].tagName) {
                case "TEXTAREA": {
                    if (imframe(this).attr("imframetexteditor") == "true") {

                        var res = tinyMCE.get(imframe(this).attr("id")).getContent({ format: 'text' });
                        return res;
                        break;
                    }
                    var res = imframe(this).val();

                    return res;

                    break;
                }
                case "SELECT": {
                    //var res = imframe(this).multiselect("getChecked");
                    //if (imframe(this).multiselect("multiple") == true) {
                    //    var _resArray = [];
                    //    imframe(res).each(function () {
                    //        _resArray.push(imframe.JSONparse(this.value));
                    //    });
                    //    return _resArray;
                    //}
                    //return res.val();
                    var res = imframe(this).val();
                    return res;
                    break;
                }
                case "INPUT": {
                    switch (imframe(this).attr("type")) {
                        case "checkbox": {
                            var res = imframe("*[name='" + imframe(this).attr("name") + "']");
                            if (res.length == 1) {
                                var checkedVal = imframe.JSONparse(this[0].checked); //[];
                                return checkedVal;
                                break;
                            }
                            else {
                                var checkedVal = [];
                                imframe(res).each(function () {
                                    if (this.checked) {
                                        checkedVal.push(imframe.JSONparse(this.value));
                                    }
                                });
                                return checkedVal;
                                break;
                            }


                        }
                        case "radio": {
                            var res = imframe("*[name='" + imframe(this).attr("name") + "']");
                            var optVal = "";
                            imframe(res).each(function () {
                                if (this.checked) {
                                    optVal = this.value;
                                    return;
                                }
                            });
                            return imframe.JSONparse(optVal);
                            break;
                        }
                        default: {
                            var clientType = imframe(this).attr("clientType")

                            if (clientType != null && clientType != undefined && (clientType == "4" || clientType == "11" || clientType == "7" || clientType == "9")) {
                                var val = imframe(this).autoNumeric('get');
                                // geçersiz değerler gelmesi durumu için yapıldı
                                if (val == 0 && (clientType == "7" || clientType == "9"))
                                    imframe(this).autoNumeric('set', 0);

                                return val == '' ? 0 : val;

                            }
                            else
                                return imframe.JSONparse(imframe(this).val());
                            break;
                        }
                    }
                    break;
                }
                default: {
                    return imframe.JSONparse(imframe(this).val());
                    break;
                }
            }
        }

        imframe.fn.setValue = function (attr) {
            if (this[0].tagName == "SELECT") {
                if (imframe(this).prop("multiple") == true) {
                    imframe(attr).each(function () {
                        imframe(this).val(this);
                    });
                }
                else {
                    imframe(this).val(attr);
                }
                imframe(this).multiselect("refresh");
            }
            else if (this[0].tagName == "INPUT") {
                var clientType = imframe(this).attr("clientType")

                if (clientType != null && clientType != undefined && (clientType == "4" || clientType == "11" || clientType == "7" || clientType == "9")) {

                    imframe(this).autoNumeric('set', attr)
                }
                //if(type == null || type )
            }
        }

        imframe.fn.serializeObject = function (arr) {

            if (!arr) {
                arr = {}
            }
            var root = this;
            imframe.each(root, function () {
                var names = this.name.split('.');
                if (names.length > 1) {
                    arr[names[0]] = imframe(root).getListByName(names[0]).serializeObject({});
                } else {
                    if (this.isMultiselect) {
                        arr[this.name] = (this.value != undefined) ? this.value : null;
                    }
                    else
                        arr[this.name] = ((this.value != undefined) && (this.value != null)) ? this.value : '';
                }
            });
            return arr;
        };

        imframe.fn.getListByName = function (name) {
            var resList = [];
            var thisList = this;
            for (var i = 0; i < thisList.length; i++) {
                if (thisList[i].name.split('.')[0] == name) {
                    var temp = { name: thisList[i].name.replace(name + '.', ''), value: thisList[i].value, isMultiselect: thisList[i].isMultiselect };
                    resList.push(temp);
                }
            }
            return jQuery(resList);
        };

        imframe.fn.clearForm = function () {
            imframe(this).find("input,select,textarea").each(function () {
                var defaultValue = jQuery(this).attr("defaultValue");
                if (!defaultValue || defaultValue != undefined || defaultValue == null) {
                    defaultValue = "";
                }
                switch (this.tagName) {
                    case "input":
                        {
                            switch (imframe(this).attr("type")) {
                                case "checkbox": {
                                    jQuery(this).removeAttr("checked");
                                    if (defaultValue != "") {
                                        if (imframe(this).val() == defaultValue) {
                                            imframe(this).prop("checked", true);
                                        }
                                    }
                                    break;
                                }
                                case "radio": {
                                    jQuery(this).removeAttr("checked");
                                    if (defaultValue != "") {
                                        if (imframe(this).val() == defaultValue) {
                                            imframe(this).prop("checked", true);
                                        }
                                    }
                                    break;
                                }
                                case "button": {
                                    jQuery(this).val(defaultValue);
                                    break;
                                }
                            }
                            break;
                        }
                    case "SELECT": {
                        imframe(this).each(function () {
                            imframe(this).select2('val', '')
                        });
                        break;
                    }
                    default: {
                        if (imframe(this).attr("type") != "button") {
                            jQuery(this).val(defaultValue);
                        }
                        break;
                    }
                }
            });
        };

        ____loadMethodsCall();
    }

    ____onScriptsLoaded();
}

onLmsLoaded();