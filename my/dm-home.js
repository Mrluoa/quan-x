/**
 * dm
 * url /gw/mtop.damai.item.detail.getdetail/1.0
 */
var body = $response.body;
var obj = JSON.parse(body);

if (obj.data && obj.data.result) {
    var result = JSON.parse(obj.data.result);
    result.detailViewComponentMap.item.item = {
        "buyBtnStatus": "204",
        "buyBtnText": "立即购买",
        "buyBtnOrigin": "12",
    };
    obj.data.result = JSON.stringify(result);
}

body = JSON.stringify(obj);

$done({ body });