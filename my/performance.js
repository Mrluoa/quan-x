/**
* my-预约

**/

var body = $response.body;
var obj = JSON.parse(body);


obj.data.ticketStatus = 2;
obj.data.saleRemindVO.onSaleTime = Date.now();
obj.data.saleRemindVO.onSaleStatus = 2;
obj.data.saleRemindVO.needCountDown = true;
obj.data.saleStatus = 2;

// obj.data.saleRemindVO.countdownTime = obj.data.saleRemindVO.onSaleTime;

body = JSON.stringify(obj);
$done({ body });