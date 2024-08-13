/**
 * dm
 * url /gw/mtop.alibaba.detail.subpage.getdetail/2.0
 */
var body = $response.body;
var obj = JSON.parse(body);

if (obj.data && obj.data.result) {
    var result = JSON.parse(obj.data.result);
    result.itemBuyBtn = {
        "btnStatus": "204",
        "btnText": "立即购买",
        "btnOrigin": "12"
    };
    if (result.perform) {
        //result.perform.saleForm = "1";

        result.perform.skuList.forEach(item => {
            item.frontEndStatus = "1";
            item.mq = "6";
            item.salableQuantity = "6";
            item.skuSalable = "true";
            item.tags = [];
            item.mktPromotionTips = "";

            delete item.followRelationTargetType;
            delete item.otherTag;
            delete item.tips;
        })
    }

    if (result.performCalendar) {
        result.performCalendar.performViews.forEach(item => {
            item.buyPermission = true;
            item.salable = true;
            item.clickable = true;
            item.tags = [];
            delete item.otherTag;
        })
    }

    obj.data.result = JSON.stringify(result);
}

body = JSON.stringify(obj);

$done({ body });