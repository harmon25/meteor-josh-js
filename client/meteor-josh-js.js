// Write your package code here!

var history = Josh.History();
var killring = new Josh.KillRing();
var readline = new Josh.ReadLine({history: history, killring: killring });

Shell = Josh.Shell({readline:readline, history: history});

Shell.onNewPrompt(function(callback) {
    callback("msfWeb > ");
});

// Setup the `Underscore` template for displaying items in the `KillRing`.
var killringItemTemplate = _.template('<div><% _.each(items, function(item, i) { %><div><%- i %>&nbsp;<%- item %></div><% }); %></div>');

// Create a the command `killring` which will display all text currently in the `KillRing`, by attaching
// a handler to the `Shell`.
Shell.setCommandHandler("killring", {

  // We don't implement any completion for the `killring` command, so we only provide an `exec` handler, and no `completion` handler.
  exec: function(cmd, args, callback) {

    // `killring` takes one optional argument **-c** which clears the killring (just like **history -c**).
    if(args[0] == "-c") {
      killring.clear();

      // The callback of an `exec` handler expects the html to display as result of executing the command. Clearing the
      // killing has no output, so we just call the callback and exit the handler.
      callback();
      return;
    }

    // Return the output of feeding all items from the killring into our template.
    callback(killringItemTemplate({items: killring.items()}));
  }
});

Shell.setCommandHandler("show", {
    exec: function(cmd, args, callback) {
        var arg = args[0] || '';
        var response = "who is this " + arg + " you are talking to?";
        if(arg === 'josh') {
            response = 'pleased to meet you.';
        } else if(arg === 'world') {
            response = 'world says hi.'
        } else if(!arg) {
            response = 'who are you saying hello to?';
        }
        callback(response);
    },
    completion: function(cmd, arg, line, callback) {
        callback(Shell.bestMatch(arg, ['exploits', 'payloads', 'auxiliary']))
    }
});

Shell.setCommandHandler("exploit", {
    exec: function(cmd, args, callback) {
        var arg = args[0] || '';
        var response = "who is this " + arg + " you are talking to?";
        if(arg === 'josh') {
            response = 'pleased to meet you.';
        } else if(arg === 'world') {
            response = 'world says hi.'
        } else if(!arg) {
            response = 'who are you saying hello to?';
        }
        callback(response);
    },
    completion: function(cmd, arg, line, callback) {
        callback(Shell.bestMatch(arg, ['exploits', 'payloads', 'auxiliary']))
    }
});


Shell.setCommandHandler("sessions", {
    exec: function(cmd, args, callback) {
        var arg = args[0] || '';
        var response = "who is this " + arg + " you are talking to?";
        if(arg === 'josh') {
            response = 'pleased to meet you.';
        } else if(arg === 'world') {
            response = 'world says hi.'
        } else if(!arg) {
            response = 'who are you saying hello to?';
        }
        callback(response);
    },
    completion: function(cmd, arg, line, callback) {
        callback(Shell.bestMatch(arg, ['exploits', 'payloads', 'auxiliary']))
    }
});