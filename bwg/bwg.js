/**
* 国家博物馆-预约

QuantumultX:

[rewrite_local]
^https?:\/\/wapticket\.chnmuseum\.cn\/prod-api\/basesetting\/HallSetting\/gainAllSystemConfigLogin https://raw.githubusercontent.com/Mrluoa/quan-x/main/bwg/bwg.js
[mitm]
hostname = wapticket.chnmuseum.cn
**/

var body = $response.body;
var obj = JSON.parse(body);


obj.data.calendarTicketPoolsByDate.forEach(item => {
    item.status = 4;
    item.ticketPool = 100;
    item.hallTicketPoolVOS = [{
        "saleMode": 1,
        "openPerson": 1,
        "status": 4,
        "ticketPool": 150,
        "currentDate": item.currentDate,
        "seasonType": null,
        "hallType": 4,
        "hallTicketPoolVOS": null,
        "today": 0,
        "hallId": 1,
        "name": "基本陈列展",
        "images": "",
        "imagesPc": "",
        "content": "",
        "ruleContent": "<p>暂无余票，无法预约</p>",
        "closeContent": "<p>展览闭馆，无法预约</p>",
        "scheduleTicketPoolVOS": [
            {
                "saleMode": 1,
                "openPerson": 1,
                "status": 4,
                "ticketPool": 50,
                "currentDate": item.currentDate,
                "seasonType": null,
                "hallType": 4,
                "hallTicketPoolVOS": null,
                "today": 0,
                "hallId": 1,
                "name": "基本陈列展",
                "images": null,
                "imagesPc": null,
                "content": null,
                "ruleContent": null,
                "closeContent": null,
                "scheduleTicketPoolVOS": null,
                "hallScheduleId": 1,
                "scheduleName": "09:00-11:00",
                "cinemaTime": null,
                "filmLength": null,
                "filmPrice": null,
                "beginTime": "09:00",
                "filmPic": null,
                "endTime": "11:00",
                "address": null,
                "chooseMode": null,
                "description": null,
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
                "video": null
            },
            {
                "saleMode": 1,
                "openPerson": 1,
                "status": 3,
                "ticketPool": 50,
                "currentDate": item.currentDate,
                "seasonType": null,
                "hallType": 4,
                "hallTicketPoolVOS": null,
                "today": 0,
                "hallId": 1,
                "name": "基本陈列展",
                "images": null,
                "imagesPc": null,
                "content": null,
                "ruleContent": null,
                "closeContent": null,
                "scheduleTicketPoolVOS": null,
                "hallScheduleId": 2,
                "scheduleName": "11:00-13:30",
                "cinemaTime": null,
                "filmLength": null,
                "filmPrice": null,
                "beginTime": "11:00",
                "filmPic": null,
                "endTime": "13:30",
                "address": null,
                "chooseMode": null,
                "description": null,
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
                "video": null
            },
            {
                "saleMode": 1,
                "openPerson": 1,
                "status": 4,
                "ticketPool": 50,
                "currentDate": item.currentDate,
                "seasonType": null,
                "hallType": 4,
                "hallTicketPoolVOS": null,
                "today": 0,
                "hallId": 1,
                "name": "基本陈列展",
                "images": null,
                "imagesPc": null,
                "content": null,
                "ruleContent": null,
                "closeContent": null,
                "scheduleTicketPoolVOS": null,
                "hallScheduleId": 3,
                "scheduleName": "13:30-16:00",
                "cinemaTime": null,
                "filmLength": null,
                "filmPrice": null,
                "beginTime": "13:30",
                "filmPic": null,
                "endTime": "16:00",
                "address": null,
                "chooseMode": null,
                "description": null,
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
                "video": null
            }
        ]
    }];
});
body = JSON.stringify(obj);

$done({ body });