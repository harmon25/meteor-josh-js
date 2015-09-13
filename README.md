# meteor-josh-js
[Josh.js](https://sdether.github.io/josh.js/) (Java Online-Shell) Meteor Package
* Many thanks to [sdether](https://github.com/sdether/josh.js) for creating josh.js :)

# Usage
* Provides Josh object to client globablly

## Blaze Template
### Encapsulate Josh within a blaze template 
```html
<template name="JoshTemplate">
<!--atts template helper needs to be created -->
	<div id="{{atts.panelid}}" class="shell-panel" >
		<div id="{{atts.viewid}}" class="shell-view">
		</div>
	</div>
</template>
```
### Initialize Josh 
```javascript
Template.JoshTemplate.onCreated(function(){
  var history = Josh.History();
  var killring = new Josh.KillRing();
  var readline = new Josh.ReadLine({history: history, killring: killring });
  var jShellConfig = {readline: readline,
                  history: history,
                  shell_view_id: this.data.viewid,
                  shell_panel_id: this.data.panelid,
                  prompt: this.data.prompt
                  }
   jShell = new Josh.Shell(jShellConfig);
   
   // Set commandHandlers & optionally configure pathhandler(s)
   ...
   ...

});

```

## Create blaze attribute helper 
```javascript
Template.JoshTemplate.helpers({
  atts: function JoshTplAtts() {
    var val, Attributes = {}, context = this;
    for (var prop in context) {
      val = context[prop];
          if (!_.isArray(val) && !_.isObject(val)) {
             Attributes[prop] = val;
          }
        }
      return Attributes;
    }
});
```

### Activate josh
```javascript
Template.JoshTemplate.onRendered(function(){
  jShell.activate()
});

```

### Use blaze template anywhere
```html
{{> JoshTemplate viewid="shell-view" panelid="shell-panel" prompt="jsh$"}}
```