/**
* my-预约

**/

var body = $response.body;
var obj = JSON.parse('{"code":200,"msg":"","data":null,"paging":null,"attrMaps":{"serverTime":1716286607481},"success":true}');


obj.attrMaps.serverTime = Date.now();
body = JSON.stringify(obj);

$done({ body });