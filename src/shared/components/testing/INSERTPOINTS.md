## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: testing, @tag: component-partial }}
{{#with testing-bp}}
	{{> c-testing}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V2
``` js
// @INSERT :: START @tag: js-init-v2 //
/**
 * Init Testing
 */
Helpers.loadModule({
	el: '[data-js-module="testing"]',
	module: Testing,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V3
``` js
// @INSERT :: START @tag: js-init-v3 //
/**
 * Init Testing
 */
Helpers.loadModule({
	domName: 'testing',
	module: Testing,
	context: context
});
// @INSERT :: END
```

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
	,
	{
// Init Testing
		namespace: 'testing',
		module: Testing
	}
	// @INSERT :: END
```

#### Custom Events
``` js
// @INSERT :: START @tag: js-events //
/**
 * Events for Testing
 */
EVENTS.testing = {
	eventName: 'testing:eventName'
};
// @INSERT :: END
```
