/**
* jtxh，10点5折

QuantumultX:

[rewrite_local]
^https?:\/\/creditcardapp\.bankcomm\.com\/redweb\/2023redFirstHalf\/getQuaAndSts url script-response-body https://raw.githubusercontent.com/Mrluoa/quan-x/main/jtyh/jtyh-jyj.js

[mitm]
hostname = creditcardapp.bankcomm.com
**/

var body = $response.body;
var obj = JSON.parse(body);

obj.currentTm = "10:00:00";

// 00：未开始，01：去抢购，02：已抢购，03：资格用完 04：已抢完

obj.secondSession.prizeList[0].prizeSts = "01";
obj.secondSession.prizeList[1].prizeSts = "01";
obj.firstSession.prizeList[0].prizeSts = "01";
obj.firstSession.prizeList[1].prizeSts = "01";

body = JSON.stringify(obj);

$done({ body });