$(function () {
    $(".openbtn1").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $("#navi").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    });

    $("#navi a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
        $(".navi").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去

    });
});
