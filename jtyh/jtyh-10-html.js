/**
* jtxh，10点5折页面

QuantumultX:

[rewrite_local]
^https?:\/\/creditcardapp\.bankcomm\.com\/redweb\/2023redFirstHalf\/detail url script-response-body https://raw.githubusercontent.com/Mrluoa/quan-x/main/jtyh/jtyh-jyj.js

[mitm]
hostname = creditcardapp.bankcomm.com
**/

// 替换当前时间
var timeRegex = /^var currentTm = "\d{1,2}:\d{1,2}:\d{1,2}";/g;
var timeEmpRegex = /^var currentTm = "";/g;
var timeReplace_str = 'var currentTm = "10:00:00";'

var flgRegex = 'var previewFlg = "2";';
var flgReplace_str = 'var previewFlg = "1";'

var body = $response.body;

console.log("时间匹配：" + body.replace(timeRegex, timeReplace_str));

body = body.replace(timeRegex, timeReplace_str).replace(timeEmpRegex, timeReplace_str).replace(flgRegex, flgReplace_str);

$done({ body: body });