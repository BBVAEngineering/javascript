# Avoid aborting the transition on Ember route hooks (no-transition-abort-in-routes)

Aborting the first transition of an Ember application can make the page unresponsive. Instead of just aborting, check if it's the first transition and decide whether to abort it or redirect the user to a more suited landing route.

## Rule Details

Examples of **incorrect** code for this rule:

```js
import Route from '@ember/routing/route';

export default Route.extend({

  model(params, transition) {
    transition.abort();
  }
});
```

Examples of **correct** code for this rule:

```js
import Route from '@ember/routing/route';

export default Route.extend({

  model(params, transition) {
    abortIfNotFirst(transition);
  }
});
```

## Known limitations

This rule only checks for certain hooks (`beforeModel`, `model`, `afterModel`, `redirect`) in files which might contain Ember route logic (files named `route.js` or whose path contains `routes`, `mixins` or `reopens`), but the active transition can always be accessed by retrieving the internal routing service state and that cannot be easily detected.
