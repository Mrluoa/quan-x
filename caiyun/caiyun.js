/*************************************

项目名称：彩云天气 解锁SVIP
下载地址：https://t.cn/A66d95hV
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️

**************************************

[rewrite_local]

^https:\/\/biz\.(caiyunapp|cyapi)\.(com|cn) url script-response-body https://gitee.com/mrluoa/quan-x/raw/master/caiyun/caiyun.js

^https:\/\/ad\.caiyunapp\.com\/ url reject

[mitm]

hostname = *.cyapi.cn, *.caiyunapp.com

*************************************/


var Lucky = JSON.parse($response.body);
const user = '/user';
const yza = '/visitors';

if ($request.url.indexOf(user) != -1) {
    Lucky.result.device_id = "78B61F3B-706F-44E8-9E4D-F68BDA1BA896";
    Lucky.result._id = "6358cb93e7a295001482d9aa";
    Lucky.result.svip_given = 365;
    Lucky.result.ranking_above = 91;
    Lucky.result.is_visitor = false;
    Lucky.result.is_phone_verified = true;
    Lucky.result.hasBeenInvited = true;
    Lucky.result.is_xy_vip = true;
    Lucky.result.vip_expired_at = 4092599349;
    Lucky.result.is_vip = true;
    Lucky.result.xy_svip_expire = 4092599349;
    Lucky.result.third_party_ids = [
        "63592fa7e7a295001888256b",
        "639ac02db1839300133031c0"
    ];
    Lucky.result.wt.vip = {
        "is_auto_renewal": false,
        "enabled": true,
        "svip_auto_renewal_type": "",
        "expired_at": 4092599349,
        "auto_renewal_type": "",
        "svip_expired_at": 4092599349
    };
    Lucky.result.wt.svip_given = 365;
    Lucky.result.wt.ranking_above = 91;
    Lucky.result.name = "Lucky";
    Lucky.result.avatar = "https://thirdwx.qlogo.cn/mmopen/vi_32/glMH9jUOFSibfCcYvoBkibF7icVrPzDJPjdoIW7EYPHHswkTJQRcmdu8gHfmP0F2QIWuy4Ua6n7VJ1UkicctjLpzeA/132";
    Lucky.result.phone_num = "13145200000";
    Lucky.result.vip_take_effect = 1;
    Lucky.result.is_auto_renewal = false;
    Lucky.result.is_primary = true;
    Lucky.result.xy_vip_expire = 0;
    Lucky.result.platform_id = "o3rJ_t00r0mxqS6GCVWMaVtEFLUk";
    Lucky.result.svip_expired_at = 4092599349;
    Lucky.result.svip_take_effect = 1;
    Lucky.result.vip_type = "s";
    Lucky.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    Lucky.result.bound_status.qq = {
        "id": "63592fa7e7a295001888256b",
        "username": "Lucky",
        "is_bound": true
    };
    Lucky.result.bound_status.weixin = {
        "id": "639ac02db1839300133031c0",
        "username": "Lucky",
        "is_bound": true
    };
    Lucky.result.bound_statuscaiyun = {
        "id": "6358cb93e7a295001482d9aa",
        "username": "",
        "is_bound": true
    };
}

if ($request.url.indexOf(yza) != -1) {
    Lucky.result.device_id = "78B61F3B-706F-44E8-9E4D-F68BDA1BA896";
    Lucky.result._id = "6358cb93e7a295001482d9aa";
    Lucky.result.svip_given = 365;
    Lucky.result.ranking_above = 91;
    Lucky.result.is_visitor = false;
    Lucky.result.is_phone_verified = true;
    Lucky.result.hasBeenInvited = true;
    Lucky.result.is_xy_vip = true;
    Lucky.result.vip_expired_at = 4092599349;
    Lucky.result.is_vip = true;
    Lucky.result.xy_svip_expire = 4092599349;
    Lucky.result.third_party_ids = [
        "63592fa7e7a295001888256b",
        "639ac02db1839300133031c0"
    ];
    Lucky.result.wt.vip = {
        "is_auto_renewal": false,
        "enabled": true,
        "svip_auto_renewal_type": "",
        "expired_at": 4092599349,
        "auto_renewal_type": "",
        "svip_expired_at": 4092599349
    };
    Lucky.result.wt.svip_given = 365;
    Lucky.result.wt.ranking_above = 91;
    Lucky.result.name = "Lucky";
    Lucky.result.avatar = "https://thirdwx.qlogo.cn/mmopen/vi_32/glMH9jUOFSibfCcYvoBkibF7icVrPzDJPjdoIW7EYPHHswkTJQRcmdu8gHfmP0F2QIWuy4Ua6n7VJ1UkicctjLpzeA/132";
    Lucky.result.phone_num = "13145200000";
    Lucky.result.vip_take_effect = 1;
    Lucky.result.is_auto_renewal = false;
    Lucky.result.is_primary = true;
    Lucky.result.xy_vip_expire = 0;
    Lucky.result.platform_id = "o3rJ_t00r0mxqS6GCVWMaVtEFLUk";
    Lucky.result.svip_expired_at = 4092599349;
    Lucky.result.svip_take_effect = 1;
    Lucky.result.vip_type = "s";
    Lucky.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    Lucky.result.bound_status.qq = {
        "id": "63592fa7e7a295001888256b",
        "username": "Lucky",
        "is_bound": true
    };
    Lucky.result.bound_status.weixin = {
        "id": "639ac02db1839300133031c0",
        "username": "Lucky",
        "is_bound": true
    };
    Lucky.result.bound_statuscaiyun = {
        "id": "6358cb93e7a295001482d9aa",
        "username": "",
        "is_bound": true
    };
}

$done({ body: JSON.stringify(Lucky) });