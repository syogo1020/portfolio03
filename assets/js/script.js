"use strict";

var swiper = new Swiper('.swiper-container', {
  slidesPerView: "auto",

  /* 表示枚数 */
  //slidesPerView: 1,/* 表示枚数 */
  loop: true,
  //loopedSlides: 1,
  //spaceBetween: 20, /* marginスペース */
  centeredSlides: false,

  /* １枚目のスライド中央位置 true中央 false左端 上端 */
  // false中央 true左端
  //width: 335,
  pagination: {
    el: '.swiper-pagination'
  },
  breakpoints: {
    768: {
      loop: true,
      //無限ループさせる
      speed: 400,
      //移動するスピード
      // loopAdditionalSlides: 5, //スライダーを複製してループを滑らかにする
      centeredSlides: false
      /* １枚目のスライド中央位置 true中央 false左端 上端 */
      // spaceBetween: 40, /* marginスペース */
      // width: 750,

    }
  }
});
$(function () {
  $('a[href^="#"]').click(function () {
    //スクロールのスピード
    var headerHeight = 66; //固定ヘッダーの高さを入れる

    var speed = 500; //リンク元を取得

    var href = $(this).attr("href"); //リンク先を取得

    var target = $(href == "#" || href == "" ? 'html' : href); //リンク先までの距離を取得

    var position = target.offset().top - headerHeight; // let position = jQuery(target).offset().top - header;
    //スムーススクロール

    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });
}); // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

$(document).on('click', 'a[href*="#"]', function () {
  var time = 400;
  var header = $('.header').innerHeight();
  var target = $(this.hash);
  if (!target.length) return;
  var targetY = target.offset().top - header;
  $('html,body').animate({
    scrollTop: targetY
  }, time, 'swing');
  return false;
}); // drawer

jQuery('.p-drawer__icon').on('click', function (e) {
  e.preventDefault();
  jQuery('.p-drawer__icon').toggleClass('is-active');
  jQuery('.p-drawer__texts').toggleClass('is-active');
  jQuery('.l-drawer').toggleClass('is-active');
  return false;
});
jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  var topBtn = $('#footer__scroll');
  topBtn.hide(); // ボタンの表示設定

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  }); // ボタンをクリックしたらスクロールして上に戻る

  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });
});
$(function () {
  var imgHeight = $('.p-header').outerHeight(); //画像の高さを取得。これがイベント発火位置になる。

  var header = $('.js-header'); //ヘッダーコンテンツ どこにクラスを付け足すか

  $(window).on('load scroll', function () {
    if ($(window).scrollTop() < imgHeight) {
      //メインビジュアル内にいるので、クラスを外す。
      header.removeClass('p-header__color');
    } else {
      //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
      header.addClass('p-header__color');
    }
  });
});
/*




*/