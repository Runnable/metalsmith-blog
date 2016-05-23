---
title: Runnable & metalsmith post
template: posts.hbt
date: 2016-05-20
description: Very second post
author: Anton
tags: metalsmith, nodejs, javascript
---

## Hello

Vivamus sollicitudin lacinia placerat. Phasellus euismod erat eu nulla hendrerit, sed dictum erat dapibus. Vestibulum risus tortor, faucibus non ante sed, rhoncus ornare augue. Phasellus eget nulla et nulla pulvinar pharetra. Nulla ut lectus eget nisl consectetur condimentum id quis elit. Pellentesque mattis dui nec est ullamcorper pretium. Morbi viverra venenatis ex sit amet blandit. Phasellus fringilla pretium tempor. Proin tortor enim, placerat sit amet tortor nec, ullamcorper pulvinar magna.

Nunc eget velit pharetra, tempor massa a, interdum justo. Pellentesque pulvinar ex nec euismod sollicitudin. Fusce quis porta massa. Duis lacus arcu, ultrices et convallis ac, placerat id sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec id lacinia erat, iaculis porta diam. Morbi ultricies nunc vitae enim posuere vulputate. Quisque non mattis erat, vitae condimentum lorem. Integer condimentum arcu vitae nulla mollis euismod at vel massa. Pellentesque hendrerit erat et tortor sollicitudin molestie. Nunc ipsum risus, varius sed diam in, viverra gravida lacus. Phasellus metus quam, fringilla non iaculis ac, fermentum sit amet lacus. Phasellus nec magna vel tellus posuere rutrum.



```custom

// server.js

...

app.configure(function() {

  // set up our express application
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.bodyParser());

  app.set('view engine', 'ejs');

  // required for passport
  app.use(express.session({ secret: 'mysecret' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

});

...

```
