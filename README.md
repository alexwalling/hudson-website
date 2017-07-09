# James Hudson Media Website
I created this website using react for my friend Hudson. He was really inspired by [Kraig Adams' Website](http://www.kraigadams.com/) so I used that as inspiration when building this website. It was a fun little project to do. Currently it's just a static react site running on heroku, but I have plans to continue working on it and building it out to possibly include express for the routing.

## Running on localhost to test
npm run start

## Heroku Setup
```
$ heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git
$ echo '{ "root": "build/" }' > static.json
$ sed '/build/d' .gitignore > .gitignore.new && mv .gitignore.new .gitignore
```

## Deploying
```
$ npm run build
$ git add .
$ git commit -m ''
$ git push heroku master
```
