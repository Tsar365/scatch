To enable manually log:
$env:DEBUG="app:*" (use krte hbe log krar jnno)
example:
$env:DEBUG="app:*"
npx nodemon app.js
To disable manually log:
$env:DEBUG=""
npx nodemon app.js

****************What it does******************
It logs messages only when you want them, not always.
Why not just console.log()?
Because:
console.log() → always prints
debug() → prints only when enabled

*********************Why this is useful*************************
In real apps:
You don’t want logs in production
You want detailed logs in development
👉 debug gives you control without changing code



Show me a clean setup where I never manually set DEBUG again using npm scripts
✅ Step 1: Install cross-env (required)
npm i cross-env
✅ Step 2: Update package.json
"scripts": {
  "dev": "cross-env DEBUG=app:* nodemon app.js",
  "dev:silent": "cross-env nodemon app.js"
}
✅ Step 3: Run your app (NO manual env needed)
Run with debug:
npm run dev
Run without debug:
npm run dev:silent





Show me a clean setup where I never manually set NODE_ENV again using npm scripts
✅ Step 1: Install cross-env
npm i cross-env
✅ Step 2: Update package.json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development nodemon app.js",
    "start": "cross-env NODE_ENV=production node app.js"
  }
}
✅ Step 3: Run your app (NO manual env setup needed)
Development mode:
npm run dev
Production mode:
npm start

[config/abcd
$env:NODE_ENV="abcd"  ---> zei name config e file set krte hbe sei name use krte hbe]



✅ Correct final version
"scripts": {
  "start": "cross-env NODE_ENV=production node app.js",
  "dev": "cross-env NODE_ENV=development DEBUG=app:* nodemon app.js",
  "dev:silent": "cross-env NODE_ENV=development nodemon app.js"
}
🚀 Production
npm start
🛠️ Development (with logs)
npm run dev
🤫 Development (silent logs)
npm run dev:silent





.connect(${config.get("MONGODB_URI")}/scatch) -------->

config.get() comes from the node-config package, and it simply means:
“Give me the value of this setting from my config files.”
What happens here step by step:
config reads your config files (like development.json)
It looks for a key called "MONGODB_URI"
It returns its value
That value is used to connect MongoDB

Think of config.get() like:
“Go to my config file and fetch this value for me.”






if (process.env.NODE_ENV === "development")
এটা check করে আপনার app এখন কোন mode এ চলছে।
process.env
Node.js এ environment variables access করার জন্য use হয়।

NODE_ENV
এটা একটা special environment variable।

সাধারণত ৩টা mode বেশি use হয়:

development
production
test

if (process.env.NODE_ENV === "development")
মানে:
👉 যদি app development mode এ চলে, তাহলে নিচের code run হবে।

router.post("/create", async function (req, res)
এই route শুধু development এ available।
মানে production এ গেলে কেউ owner create করতে পারবে না।
এটা security purpose এ করা হয়।

Example
আপনি run করলেন:
NODE_ENV=development nodemon app.js
তখন:
process.env.NODE_ENV
এর value হবে:
development
তাই create route কাজ করবে।

কিন্তু যদি production হয়?
NODE_ENV=production node app.js
তখন:
process.env.NODE_ENV === "development"
হবে:
false
তাই route create-ই হবে না।

সহজভাবে
এটা দিয়ে app কে different behavior দেওয়া যায়।
যেমন:
Mode        	: Use
development  	: coding/testing
production  	: live server
test        	: automated testing


Real World Example
Development এ:
console.log(errors);
Production এ:
show simple error message
কারণ live server এ sensitive info দেখানো dangerous।

একটা example দেখুন
if (process.env.NODE_ENV === "development") {
  console.log("Developer Mode");
}
Environment variable কোথায় থাকে?

সাধারণত:
.env
file এ।
যেমন:

NODE_ENV=development
PORT=3000
JWT_SECRET=abc123
Access করবেন এভাবে
process.env.PORT
process.env.JWT_SECRET