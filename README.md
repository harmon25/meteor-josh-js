# meteor-josh-js
[Josh.js](https://sdether.github.io/josh.js/) (Java Online-Shell) Meteor Package
* Thanks to [sdether](https://github.com/sdether/josh.js) for creating josh.js

## Usage
* Provides Josh object to client Globablly

## Blaze Template
* Can encapsulate josh within a blaze template 

```
<template name="JoshTemplate">
	<div id="{{atts.panelid}}" class="shell-panel" >
		<div id="{{atts.viewid}}" class="shell-view">
		</div>
	</div>
</template>
```
###Initialize josh 
```
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
   ....
});

```

### Activate josh
```
Template.JoshTemplate.onRendered(function(){
  jShell.activate()
});

```

### Use blaze template anywhere
```
{{> JoshTemplate viewid="shell-view" panelid="shell-panel" prompt="jsh$"}}
```