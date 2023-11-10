/**
* jtxh，10点5折页面

QuantumultX:

[rewrite_local]
^https?:\/\/creditcardapp\.bankcomm\.com\/redweb\/2023redFirstHalf\/detail url script-response-body https://raw.githubusercontent.com/Mrluoa/quan-x/main/jtyh/jtyh-10-html.js

[mitm]
hostname = creditcardapp.bankcomm.com
**/

// 替换当前时间
var timeReplace_str = 'var currentTm = "10:00:00";'
var flgReplace_str = 'var previewFlg = "1";'

var body = $response.body;

body = body.replace(/^var currentTm = "\d{1,2}:\d{1,2}:\d{1,2}";/g, timeReplace_str)
    .replace(/^var currentTm = "";/g, timeReplace_str)
    .replace(/^var previewFlg = "2";/g, flgReplace_str);

$done({ body: body });