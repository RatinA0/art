set -e

npm run build

cd dist

git init
git add -A
git commit -m 'Deploy'
git push -f git@github.com:ratina0/art.git master:gh-pages

cd -
