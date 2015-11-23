var wdo = require('./wdo.js'); var wdo_modules = {};
var Router = function(){
var args = Array.prototype.slice.call(arguments);
var data = require('./data/chinese_history.js');
this.data = {handler: {data: data,current: data.history,history: []},home: null};
}
Router.prototype = Object.create(wdo.wdo_object.prototype);
Router.prototype.serve = function(req, res){
var accept = req.headers.accept;
if(/text\/css/.test(accept)){
wdo.loadFile('.'+req.url, function(err, data){;
if(!err){
;
res.writeHead(200, {"Content-Type": "text/css"});
res.end(data);
} else {
;
res.end();
};
});
} else if(/text\/html/.test(accept)){
;
this.handler(req, res);
} else {
;
res.end();
};
;
}
Router.prototype.handler = function(req, res){
var _ = require('lodash');
var main = wdo.loadText('./templates/main.html');
var view = null;
if(!this.data["handler"].history.length){
view = wdo.renderView(main, { data: this.data["handler"].current });
this.data["handler"].history.push({ data: this.data["handler"].current, template: view });
res.end(view);
} else {
;
var tag = req.url.split('/')[1];
var data = _.findWhere(this.data["handler"].current.children, {tag: tag});
if(data === undefined){
;
this.data["handler"].history.pop();
if(!this.data["handler"].history.length){
;
view = wdo.renderView(main, { data: this.data["handler"].data.history });
this.data["handler"].history.push({ data: this.data["handler"].data.history, template: view });
res.end(view);
} else {
;
this.data["handler"].current = this.data["handler"].history[this.data["handler"].history.length-1].data;
res.end(this.data["handler"].history[this.data["handler"].history.length-1].template);
};
} else {
;
view = wdo.renderView(main, { data: data });
this.data["handler"].current = data;
this.data["handler"].history.push({ data: data, template: view});
res.end(view);
};
};
;
}
wdo_modules.Router = Router;
var router = new wdo_modules.Router();
var eoco_event = function(request, response){
router.serve(request, response);
}
var http = require('http');
var server = http.createServer(eoco_event);
var PORT = process.env.PORT || 3000;
server.listen(PORT);
console.log("http server listening on port "+PORT);
