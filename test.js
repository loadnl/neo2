[rewrite_local]
^https?:\/\/surge-activation\.com\/ios/v\d/refresh$ url script-response-body https://raw.githubusercontent.com/loadnl/neo2/main/test.js

[mitm]
hostname = surge-activation.com

$request.url.includes("/ios/v3/refresh") ? ((responseBody = JSON.parse($response.body)).deviceID  = "63989092405B", responseBody.result.deviceID ="63989092405B” )$done({}), $done({ body: JSON.stringify(responseBody) });
