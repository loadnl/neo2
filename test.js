[rewrite_local]
^https?:\/\/www\.surge-activation\.com\/ios/v\d/refresh$ url script-response-body https://raw.githubusercontent.com/loadnl/neo2/main/test.js

[mitm]
hostname = www.surge-activation.com

let responseBody = {};
$request.url.includes("/ios/v3/refresh") ? ((responseBody = JSON.parse($response.body)).deviceID = "63989092405B") : $done({}),
$done({
    body: JSON.stringify(responseBody)
});
