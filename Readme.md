$env:DEBUG="app:*" use krte hbe
ex:
$env:DEBUG="app:*"
npx nodemon app.js

config/abcd
$env:NODE_ENV="abcd"  ---> zei name config e file set krte hbe sei name use krte hbe



✅ Best cross-platform solution (recommended)
Install cross-env so you don’t deal with OS differences:
npm install cross-env
Then update your script in package.json:
"scripts": {
  "dev": "cross-env DEBUG=app:* nodemon app.js"
}
Run:
npm run dev
Works on Windows, Linux, macOS the same way.