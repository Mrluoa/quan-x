/**
* my-预约

QuantumultX:

[rewrite_local]
^https?:\/\/wapticket\.chnmuseum\.cn\/prod-api\/basesetting\/HallSetting\/gainAllSystemConfigLogin https://raw.githubusercontent.com/Mrluoa/quan-x/main/bwg/bwg.js
[mitm]
hostname = wapticket.chnmuseum.cn
**/

var body = $response.body;
var obj = JSON.parse(body);


obj.data.forEach(item => {
    item.remainingStock = 100;
    item.showStatus = 0;
});
body = JSON.stringify(obj);

$done({ body });