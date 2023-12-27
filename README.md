# GitHub Fixer Demo
### A demo repo to experience Mobb Fixer for GitHub

[Mobb Fixer](https://app.mobb.ai/github-fixer) monitors your pull requests for security issues and produces accurate code fix suggestions on the spot.

To see an automated fix on PR, follow these instructions:
1. [Start a pull request](/../../compare/main...introduce-new-security-issue) from branch `introduce-new-security-issue` to branch `main`
2. Once the PR is created, GitHub CodeQL will automatically start a security scan and report an issue
3. Mobb Fixer will immediately run and present a fix suggestion on the PR conversation tab

> [!TIP]
> To commit the suggested code fix, simply click on ***Commit fix***, and the changes will be commited to the same PR.
>
> <video>
