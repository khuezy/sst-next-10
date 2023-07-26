import { StackContext, NextjsSite } from 'sst/constructs'

export function Default({ stack }: StackContext) {
  const site = new NextjsSite(stack, 'site', {
    path: 'packages/web',
    buildCommand: 'npm run openbuild',
  })
  stack.addOutputs({
    SiteUrl: site.url,
  })
}
