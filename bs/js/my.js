$(document).ready(function () {
    $("#b").click(function () {
        var msg = $("#dizhi").val(), crc = "1001", encoded = new Array();
        var m = msg.length, n = crc.length;
        for (var i = 0; i < msg.length; i++)
            encoded.push(msg[i]);
        for (var i = 1; i <= n - 1; i++)
            encoded.push("0");
        for (var i = 0; i <= encoded.length - n;) {
            for (var j = 0; j < n; j++) {
                if (encoded[i + j] == crc[j]) {
                    encoded[i + j] = "0"
                }
                else {
                    encoded[i + j] = "1";
                }
            }
            for (; i < encoded.length && encoded[i] != '1'; i++) {
                ;
            }
        }
        console.log(encoded.slice(encoded.length - n + 1).toString());
    });
});