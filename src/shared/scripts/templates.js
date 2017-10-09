module.exports = function(Handlebars) {

window["App"] = window["App"] || {};
window["App"]["Templates"] = window["App"]["Templates"] || {};

window["App"]["Templates"]["CSLIDER__CONTROLS"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "---\npublish: false\n---\n<button class=\"slider__control is-previous\" data-js-item=\"slider-prev\">\n	"
    + alias4(((helper = (helper = helpers.prev || (depth0 != null ? depth0.prev : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"prev","hash":{},"data":data}) : helper)))
    + "\n</button>\n<button class=\"slider__control is-next\" data-js-item=\"slider-next\">\n	"
    + alias4(((helper = (helper = helpers.next || (depth0 != null ? depth0.next : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"next","hash":{},"data":data}) : helper)))
    + "\n</button>";
},"useData":true});

window["App"]["Templates"]["CSLIDER__ITEM"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "<div class=\"slider__item\" data-js-item=\"slider-item\">\n	"
    + ((stack1 = ((helper = (helper = helpers["yield"] || (depth0 != null ? depth0["yield"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"yield","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n</div>";
},"useData":true});

window["App"]["Templates"]["CSLIDER__LIST"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " is-overflow";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "---\npublish: false\n---\n<div class=\"slider__list-wrapper"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.sliderOverflow : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\" data-js-item=\"slider-wrapper\">\n	<div class=\"slider__list\" data-js-item=\"slider-ribbon\">\n		"
    + ((stack1 = ((helper = (helper = helpers["yield"] || (depth0 != null ? depth0["yield"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"yield","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n	</div>\n</div>";
},"useData":true});

window["App"]["Templates"]["CSLIDER__PAGINATION"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "---\npublish: false\n---\n<ol class=\"slider__pagination-list\" data-js-item=\"slider-pagination-list\">\n</ol>";
},"useData":true});

window["App"]["Templates"]["CSLIDERUSAGE"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.wrapWith || (depth0 && depth0.wrapWith) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"c-slider__list",{"name":"wrapWith","hash":{"settings":(depth0 != null ? depth0.settings : depth0)},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.times || (depth0 && depth0.times) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),8,{"name":"times","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.wrapWith || (depth0 && depth0.wrapWith) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"c-slider__item",{"name":"wrapWith","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data) {
    return "				<img src=\"https://placehold.it/1920x800\" alt=\"test\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "---\ntype: component\nlayout: \"lyt-docs\"\ncontextData: \"slider-bp\"\npublish: true\ndisplayName: \"c-slider\"\njsFiles:\n- slider.js\nscssFiles:\n- _c-slider.scss\nsubTemplates:\n- c-slider\n- c-slider__item\n---\n\n"
    + ((stack1 = (helpers.wrapWith || (depth0 && depth0.wrapWith) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"c-slider",{"name":"wrapWith","hash":{"content":(depth0 != null ? depth0.content : depth0),"settings":(depth0 != null ? depth0.settings : depth0)},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

window["App"]["Templates"]["CSLIDER"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.sliderContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.sliderClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n     data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.sliderJsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"slider__controls-wrapper\" data-js-item=\"slider-actions\">\n"
    + ((stack1 = container.invokePartial(partials["c-slider__controls"],depth0,{"name":"c-slider__controls","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</div>\n";
},"11":function(container,depth0,helpers,partials,data) {
    return " is-container";
},"13":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<div class=\"slider__pagination-wrapper\" data-js-item=\"slider-pagination\">\n"
    + ((stack1 = container.invokePartial(partials["c-slider__pagination"],depth0,{"name":"c-slider__pagination","data":data,"indent":"\t\t\t","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "		</div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "---\npublish: false\n---\n<div class=\"c-slider"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.sliderContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.sliderClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-slider\"\n     data-js-module=\"slider\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.sliderJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n\n"
    + ((stack1 = helpers["with"].call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.content : stack1)) != null ? stack1.sliderButtons : stack1),{"name":"with","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\n	<div class=\"slider__content"
    + ((stack1 = helpers.unless.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.sliderInnerFullWidth : stack1),{"name":"unless","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\">\n		"
    + ((stack1 = ((helper = (helper = helpers["yield"] || (depth0 != null ? depth0["yield"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"yield","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n	</div>\n\n"
    + ((stack1 = helpers.unless.call(alias1,((stack1 = ((stack1 = (depth0 != null ? depth0.options : depth0)) != null ? stack1.settings : stack1)) != null ? stack1.sliderHidePagination : stack1),{"name":"unless","hash":{},"fn":container.program(13, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>";
},"usePartial":true,"useData":true});

window["App"]["Templates"]["CTESTING"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "--"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.testingContextClass : stack1), depth0));
},"3":function(container,depth0,helpers,partials,data) {
    return "--default";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.testingClasses : stack1), depth0));
},"7":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "\n     data-js-options='"
    + container.escapeExpression((helpers.stringify || (depth0 && depth0.stringify) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.testingJsOptions : stack1),{"name":"stringify","hash":{},"data":data}))
    + "'";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "\n<div class=\"c-testing"
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.testingContextClass : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.testingClasses : stack1),{"name":"if","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\"\n     data-css=\"c-testing\"\n     data-js-module=\"testing\""
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.settings : depth0)) != null ? stack1.testingJsOptions : stack1),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">\n     testing\n     \n</div>\n";
},"useData":true});

return window["App"]["Templates"];

};