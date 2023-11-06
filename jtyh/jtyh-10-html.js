/**
* 交通银行，10点5折页面

QuantumultX:

[rewrite_local]
^https?:\/\/creditcardapp\.bankcomm\.com\/redweb\/2023redFirstHalf\/detail url script-response-body https://gitee.com/mrluoa/quan-x/raw/master/jtyh/jtyh-jyj.js

[mitm]
hostname = creditcardapp.bankcomm.com
**/

// 替换当前时间
const timeRegex = 'var currentTm \= \"\d{2}:\d{2}:\d{2}"\;';
const timeReplace_str = 'var currentTm = \"10:00:00\";'

const flgRegex = 'var previewFlg = "2";';
const flgReplace_str = 'var previewFlg = "1";'

var body = $response.body;

body = body.replace(timeRegex, timeReplace_str).replace(flgRegex, flgReplace_str);

$done({ body: body });