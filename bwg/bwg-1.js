/**
* 国家博物馆-预约

QuantumultX:

[rewrite_local]
^https?:\/\/wapticket\.chnmuseum\.cn\/prod-api\/pool\/ingore\/getPriceByScheduleId https://raw.githubusercontent.com/Mrluoa/quan-x/main/bwg/bwg-1.js

[mitm]
hostname = wapticket.chnmuseum.cn
**/

var body = $response.body;
var obj = JSON.parse(body);

obj.data = [{
    "saleMode": null,
    "openPerson": null,
    "status": 4,
    "ticketPool": 150,
    "currentDate": null,
    "seasonType": null,
    "hallType": 4,
    "hallTicketPoolVOS": null,
    "today": 0,
    "hallId": 1,
    "name": null,
    "images": "",
    "imagesPc": null,
    "content": null,
    "ruleContent": null,
    "closeContent": null,
    "scheduleTicketPoolVOS": null,
    "hallScheduleId": 3,
    "priceId": 8,
    "priceName": "免费参观凭证",
    "price": "0.00",
    "ageRange": "0-105",
    "ageMin": "0",
    "ageMax": "105",
    "notRecommendPrice": false,
    "child": false,
    "tourEscort": false,
    "adult": true,
    "recommendAgeMin": "0",
    "recommendAgeMax": "105",
    "certificateVOS": [
        {
            "id": 1,
            "name": "身份证"
        },
        {
            "id": 2,
            "name": "护照"
        },
        {
            "id": 3,
            "name": "港澳居民来往内地通行证"
        },
        {
            "id": 4,
            "name": "台湾居民来往大陆通行证"
        },
        {
            "id": 6,
            "name": "外国人永久居留身份证"
        },
        {
            "id": 7,
            "name": "港澳台居民居住证"
        }
    ],
    "ticketSetAmountFlag": false,
    "document": null,
    "showDocument": 0,
    "showOrder": 2,
    "priceNameForCalendar": "免费参观凭证0.00元/张",
    "introduction": "基本陈列展免费参观凭证",
    "student": false
}]
body = JSON.stringify(obj);

$done({ body });