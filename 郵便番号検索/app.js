$(function () {
    $("#serch_btn").click(function () {
        // 入力された値を取得
        var zipCode = $('#zipcode').val();
        // urlを設定
        // 送るデータを成形する
        // サーバーと通信(Ajax)
        $.ajax({
            url: "https://zipcloud.ibsnet.co.jp/api/search",
            type: "GET", 
            dataType: "jsonp",
            cache: false,
            data:{ zipcode: zipCode,}
        }).done(function (res) {
            if (res.status != 200) {
                // 通信には成功。APIの結果がエラー
                // エラー内容を表示
                $('#zip_result').html(res.message);
            } else {
                //住所を表示
                let prefCode = res.results[0].prefcode
                let prefecture = res.results[0].address1
                let town = res.results[0].address2
                let city = res.results[0].address3 
                let prefkana = res.results[0].kana1 
                let townkana = res.results[0].kana2 
                let citykana = res.results[0].kana3

                $('#prefCode').text(prefCode);
                $('#prefecture').text(prefecture);
                $('#city').text(town);
                $('#town').text(city);
                $('#prefkana').text(prefkana);
                $('#citykana').text(townkana);
                $('#townkana').text(citykana);
            }
        }).fail(function (error) {
            console.log(error);
            $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
        });
    });
});