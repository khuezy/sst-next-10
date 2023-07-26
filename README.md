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

I think this introduced the issue: https://github.com/vercel/next.js/pull/52746
Nextjs now adds the "next-url" headers to the vary header. This breaks modal interception on CloudFront apps.

1. Configure .aws/credentiasl w/ valid AWS creds
2. pnpm install
3. npx sst deploy --stage repo
4. click on /fotos
5. modal does not work
