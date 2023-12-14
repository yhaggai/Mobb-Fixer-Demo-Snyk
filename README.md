# GitHub Fixer Demo
### A test repo to demonstrate Mobb Fixer for GitHub
> [!NOTE]
> [Mobb Fixer](https://app.mobb.ai/github-fixer) is a GitHub app that monitors your pull requests for security issues and adds an accurate code fix suggestion on the spot.

To try Mobb Fixer, follow these instructions:
1. [Fork this repo](https://aaa.com/) to your GitHub account. Make sure to uncheck the `Copy the main branch only` checkbox.
2. [Start a pull request](/compare/main...introduce-new-security-issue) from branch `introduce-new-security-issue` to branch `main`
3. Once the PR is created, GitHub CodeQL will automatically start a security scan and report an issue
4. Mobb Fixer will immediately run and present a fix suggestion on the PR conversation tab

> [!TIP]
> To commit the suggested code fix, simply click on ***Commit fix***, and the changes will be commited to the PR.
