var menuItems = {
  "mainMenu": "menu1",
  "menu1": [
    {"id":"1", "iconClass":"fa fa-map", "label": "Map", "route":"#/main", "active":"true"},
    {"id":"2", "iconClass":"fa fa-warning", "label": "Alerts", "route":"#/alerts", "active":"false"}
  ]
}; 

var headerItems = {
    "logo": "//cdn.rawgit.com/scriptrdotio/resources/02fa919a/multitech/images/logo%20multi-tech.png",
    "items": [],
    "logout": {"icon": "fa fa-sign-out", "label": "Logout", "route":"#/logout"}
};

var routingItems = {
  "params": [
    {"route": "main", "template": "/advancedapp/view/html/views/main/main.html", "controller": "mapCtrl as vm"},
    {"route": "rules", "template": "/advancedapp/view/html/views/main/rules.html","controller": "rulesCtrl as vm"},
    {"route": "dashboard", "template": "/advancedapp/view/html/views/main/dashboard.html","controller": "dashboardCtrl as vm"},
    {"route": "dashboard/deviceId/:deviceId*","template": "/advancedapp/view/html/views/main/dashboard.html","controller": "dashboardCtrl as vm"},
    {"route": "alerts", "template": "/advancedapp/view/html/views/alerts/alerts.html"},
    {"route": "logout", "template": "/advancedapp/view/html/logout.html"}
  ],
  "otherwiseOption" : {"template": "/advancedapp/view/html/views/main/main.html", "controller": "mapCtrl as vm"}
};
