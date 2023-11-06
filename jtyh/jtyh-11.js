/**
* jtxh，11点加油卷下单解锁

QuantumultX:

[rewrite_local]
^https?:\/\/creditcardapp\.bankcomm\.com\/catering\/api\/product\/detail\.json url script-response-body https://raw.githubusercontent.com/Mrluoa/quan-x/main/jtyh/jtyh-jyj.js

[mitm]
hostname = creditcardapp.bankcomm.com
**/

var body = $response.body;
var obj = JSON.parse(body);

obj.data.hasBuy = true;
obj.data.buttonType = "02";
obj.data.maxOrderProductCount = "1";

body = JSON.stringify(obj);

$done({ body });