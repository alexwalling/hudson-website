
## Setup
heroku buildpacks:set https://github.com/heroku/heroku-buildpack-static.git
echo '{ "root": "build/" }' > static.json
sed '/build/d' .gitignore > .gitignore.new && mv .gitignore.new .gitignore

##Deploying
npm run build
git add .
git commit -m ''
git push heroku master
