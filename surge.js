hostname = surge-activation.com
^https?:\/\/surge-activation\.com\/ios/v\d/refresh url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/caiyun_json.js

let responseBody={};$request.url.includes("/ios/v3/refresh") ? ((responseBody = JSON.parse($response.body)).deviceID  = "63989092405B", responseBody.result.deviceID ="63989092405B” )$done({}), $done({ body: JSON.stringify(responseBody) });
