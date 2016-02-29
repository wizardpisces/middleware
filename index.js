var noop = function(){};
var compose = function() {    
    return (this.composed = this.middlewares.reduceRight(function(prevFn, curFn) {
            return curFn(prevFn);
        },noop));
};
var MiddlewareTool = function() {
    this.middlewares = [];
    this.composed = noop;
};

MiddlewareTool.prototype.use = function(middleware) {
    var that = this;

    return this.middlewares.push(function(next) {
        return function() {
            middleware.call(that, next);
        };
    });

};

MiddlewareTool.prototype.reboot = function() {
    return compose.call(this)();
};

MiddlewareTool.prototype.boot = function() {
    return this.composed.call(this);
};

module.exports = MiddlewareTool;