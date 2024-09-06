/**
 * dm
 * url /gw/mtop.alibaba.detail.subpage.getdetail/2.0
 */
var body = $response.body;
var obj = JSON.parse(body);

if (obj.data && obj.data.result) {
    var result = JSON.parse(obj.data.result);

    result.actionControl.renderingControl = {
        "renderingType": "1"
    };

    result.itemBuyBtn.btnStatus = "204";
    result.itemBuyBtn.btnText = "立即购买";
    result.itemBuyBtn.btnOrigin = "12";

    if (result.perform) {
        result.perform.saleForm = "1";

        result.perform.presale = "false";

        result.perform.skuList.forEach(item => {
            item.frontEndStatus = "1";
            item.mq = "6";
            item.salableQuantity = result.perform.limitQuantity;
            item.skuSalable = "true";
            item.tags = [];
            item.status = "1";
            item.mktPromotionTips = "";

            //delete item.mktPromotionTips;
            delete item.followRelationTargetType;
            delete item.otherTag;
            delete item.tips;
        })
    }

    if (result.performCalendar) {
        result.performCalendar.performViews.forEach(item => {
            item.buyPermission = "true";
            item.salable = "true";
            item.clickable = "true";
            item.checked = "true";
            item.tags = [];
            delete item.otherTag;
        })
    }

    obj.data.result = JSON.stringify(result);

}
console.log("修改数据")
body = JSON.stringify(obj);

$done({ body });