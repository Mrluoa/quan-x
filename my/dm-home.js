/**
 * dm
 * url /gw/mtop.damai.item.detail.getdetail/1.0
 */
var body = $response.body;
var obj = JSON.parse(body);

if (obj.data && obj.data.legacy) {
    var result = JSON.parse(obj.data.legacy);
    result.detailViewComponentMap.item.item.buyBtnStatus = "204";
    result.detailViewComponentMap.item.item.buyBtnText = "立即购买";
    result.detailViewComponentMap.item.item.buyBtnOrigin = "12";
    result.detailViewComponentMap.item.item.sellStartTime = Date.now();

    delete result.detailViewComponentMap.item.staticData.ticketPurchasesGuidePage;
    result.detailViewComponentMap.item.staticData.itemBase.isHotProject = true;
    result.detailViewComponentMap.item.staticData.itemBase.isShowGrabTicketGuide = false;
    result.detailViewComponentMap.item.dynamicExtData.subFlag = false;

    obj.data.legacy = JSON.stringify(result);

}

body = JSON.stringify(obj);

$done({ body });