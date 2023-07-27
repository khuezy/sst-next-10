# Reproduction

There are 2 issues:

# First issue:

Modal interception with a single \[dynamic\] route does not work

1. cd packages/web
2. npm i
3. npm run dev
4. go to [locahost:3000](http://localhost:3000)
5. follow instructions on page

# Second issue:

Standalone modal interception does not work.

1. cd packages/web
2. npm i
3. npm run build
4. cd .next/standalone/packages/web
5. node server.js
6. Go to [locahost:3000](http://localhost:3000)
7. /fotos no longer intercepts like it did in dev mode
