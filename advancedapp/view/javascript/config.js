var login = {
   redirectTarget: "/advancedapp/view/html/index.html",
   expiry:6,
   loginTarget: "/advancedapp/view/html/login.html",
   loginApi: "/advancedapp/api/login/login",
   validateTokenApi: "/advancedapp/api/login/validateToken"
};

var wssConfig = ["wsClientProvider",function (wsClientProvider) {
    wsClientProvider.setPublishChannel("requestChannel");
    wsClientProvider.setSubscribeChannel("responseChannel");
}];

var httpsConfig = ["httpClientProvider",function (httpClientProvider) {
}]
