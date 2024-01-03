# Tap18 / fastify Repro

In order to start the repro : 

```sh
nvm use
npm i
make
```


Info: 

```
tap: 18.6.1
"@tapjs/config": 2.4.14
"@tapjs/core": 1.4.6
"@tapjs/run": 1.4.16
"@tapjs/stack": 1.2.7
"@tapjs/test": 1.3.17
tap-parser: 15.3.1
tap-yaml: 2.2.1
tcompare: 6.4.5
plugins:
  "@tapjs/after": 1.1.17
  "@tapjs/after-each": 1.1.17
  "@tapjs/asserts": 1.1.17
  "@tapjs/before": 1.1.17
  "@tapjs/before-each": 1.1.17
  "@tapjs/filter": 1.2.17
  "@tapjs/fixture": 1.2.17
  "@tapjs/intercept": 1.2.17
  "@tapjs/mock": 1.2.15
  "@tapjs/node-serialize": 1.2.6
  "@tapjs/snapshot": 1.2.17
  "@tapjs/spawn": 1.1.17
  "@tapjs/stdin": 1.1.17
  "@tapjs/typescript": 1.3.6
  "@tapjs/worker": 1.1.17
# vim: set filetype=yaml :

# from package.json
allow-incomplete-coverage: true

# env, cli, and defaults
color: true
coverage-report:
  - text
exclude:
  - "**/@(fixture*(s)|dist)/**"
include:
  - "**/@(test?(s)|__test?(s)__)/**/*.@(js|cjs|mjs|tap|cts|jsx|mts|ts|tsx)"
  - "**/*.@(test?(s)|spec).@(js|cjs|mjs|tap|cts|jsx|mts|ts|tsx)"
  - "**/test?(s).@(js|cjs|mjs|tap|cts|jsx|mts|ts|tsx)"
jobs: 6
reporter: base
snapshot-clean-cwd: true
timeout: 30
@tapjs/after
@tapjs/after-each
@tapjs/asserts
@tapjs/before
@tapjs/before-each
@tapjs/filter
@tapjs/fixture
@tapjs/intercept
@tapjs/mock
@tapjs/node-serialize
@tapjs/snapshot
@tapjs/spawn
@tapjs/stdin
@tapjs/typescript
@tapjs/worker
```