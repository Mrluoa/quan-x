/**
* jtxh，10点5折页面

QuantumultX:

[rewrite_local]
^https?:\/\/creditcardapp\.bankcomm\.com\/redweb\/2023redFirstHalf\/detail url script-response-body https://raw.githubusercontent.com/Mrluoa/quan-x/main/jtyh/jtyh-jyj.js

[mitm]
hostname = creditcardapp.bankcomm.com
**/

// 替换当前时间
const timeRegex = 'var currentTm = "\d{1,2}:\d{1,2}:\d{1,2}";';
const timeEmpRegex = 'var currentTm = "";';
const timeReplace_str = 'var currentTm = "9:50:00";'

const flgRegex = 'var previewFlg = "2";';
const flgReplace_str = 'var previewFlg = "1";'

var body = $response.body;

body = body.replace(timeRegex, timeReplace_str).replace(timeEmpRegex, timeReplace_str).replace(flgRegex, flgReplace_str);

$done({ body: body });