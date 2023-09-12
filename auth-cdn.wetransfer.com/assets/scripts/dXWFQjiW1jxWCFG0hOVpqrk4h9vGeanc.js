(function() { var cdnUrl = window.origin.replace('auth', 'auth-cdn'); var fontsStylesheet = document.createElement('link'); fontsStylesheet.href = cdnUrl + '/assets/styles/fonts.css'; fontsStylesheet.rel = 'stylesheet'; fontsStylesheet.type = 'text/css'; document.head.appendChild(fontsStylesheet); var faviconLinkTag = document.createElement('link'); faviconLinkTag.href = cdnUrl + '/assets/images/favicon.ico'; faviconLinkTag.rel = 'icon'; faviconLinkTag.type = 'image/x-icon'; document.head.appendChild(faviconLinkTag); var productStylesheet = document.createElement('link'); productStylesheet.href = cdnUrl + '/assets/styles/transfer_login_styles.css?v=b296d64161783cd2284cf36923756df1'; productStylesheet.rel = 'stylesheet'; productStylesheet.type = 'text/css'; productStylesheet.onload = function() { if (!window.WT_PAGE_CONFIG.proBundle) { document.getElementById('wt-product-feature-pane-loader').style.setProperty('display', 'none'); document.getElementById('wt-product-feature-pane').style.removeProperty('display'); } }; document.body.prepend(productStylesheet); document.querySelector('title').innerText = 'WeTransfer account | WeTransfer'; window.LockConfiguration = { allowSignUp: true, productLogoUrl: 'data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMjAwIDU2IiB3aWR0aD0iMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGQ9Im05IDE1aDE4MS44NTh2MjZoLTE4MS44NTh6Ii8+PC9jbGlwUGF0aD48ZyBjbGlwLXBhdGg9InVybCgjYSkiIGZpbGw9IiMwMDAiPjxwYXRoIGQ9Im00NS43NzQzIDE2LjAzNTJjLTEuMzg0MSAxLjQyMTItMS43OTMxIDIuMTc4Mi0yLjc4NCA0LjMyNTZsLTkuMTM4NSAyMC42MzkzLTYuNDY0Ni0xNC40NTk5LTYuMzg2IDE0LjQ1OTktOS4yMTcyLTIwLjYyMzljLS45NDM3LTIuMTQ3My0xLjM2ODQtMi44NDI1LTIuNzg0LTQuMzQxaDExLjY4NjZjLS44ODA4LjcyNi0xLjMzNjkgMS42Njg0LTEuMzM2OSAyLjg0MjUgMCAuODM0Mi4xNDE1IDEuNDIxMy41OTc3IDIuNTAyN2wzLjQ5MTggOC4xODc3IDIuNTc5NS02LjEwMjItMS40NDctMy4zMDZjLS44NDk0LTEuOTAwMS0xLjQ0NzEtMy4wODk3LTIuMjk2NS00LjEyNDdoMTEuNjg2N2MtMS4xMzI1LjcyNi0xLjY5ODggMS42Njg0LTEuNjk4OCAyLjg0MjUgMCAuODM0Mi4xNDE2IDEuNDIxMy41OTc3IDIuNTAyN2wzLjU3MDUgOC4xODc3IDMuNTIzMy04LjE4NzdjLjQ1NjEtMS4wODE0LjYyOTItMS42Njg1LjYyOTItMi40NTY0IDAtMS4wMzUtLjczOTMtMi4yODYzLTEuNTg4Ny0yLjg3MzRoNi43NzkyeiIvPjxwYXRoIGQ9Im01Ny45MTc1IDM0LjQxOWMtMS4xMzI1IDQuODItMy44NTM2IDYuNDExMi03LjgwMTYgNi40MTEyLTQuNTE0MiAwLTguNzQ1My0zLjIyODgtOC43NDUzLTkuMjg0NiAwLTUuODI0MSAzLjc0MzUtOS45NDg5IDguNjUwOS05Ljk0ODkgMy4yMDg3IDAgNy43MjMgMS42MjIxIDcuNzIzIDguNDk2N2gtMTAuNjY0M2MuNzM5MyAzLjY3NjggMy4xNzczIDUuNTc3IDYuNTU5IDUuNTc3IDEuNzMwMi0uMDE1NSAyLjk0MTMtLjMyNDUgNC4yNzgzLTEuMjUxNHptLTExLjA0MTgtNi43MzU2di40NDhoNC42NTU4YzAtMy40NjA0LS43NzA3LTQuNTQxOS0yLjI2NS00LjU0MTktMS41MDk5IDAtMi4zOTA4IDEuNDk4Ni0yLjM5MDggNC4wOTM5eiIvPjxwYXRoIGQ9Im03OS4zMDg0IDIyLjMwNzJjLTIuOTI1Ni0yLjczNDQtNS44MTk4LTQuMTU1Ny04LjA1MzMtNC4xNTU3djE1LjI5NDFjMCAzLjA4OTguODE3OSA0Ljk1OSAyLjk1NzEgNi44NTkyaC0xMy4zMzgyYzIuMTU0OS0xLjkwMDIgMi45NTcxLTMuNzg0OSAyLjk1NzEtNi44NTkydi0xNS4yOTQxYy0yLjIxNzggMC01LjI1MzUgMS40MjEzLTguMDUzMyA0LjE1NTdsMS40MTU2LTcuMzA3MmMuOTU5NS43MjYxIDIuNzIxMiAxLjAzNTEgNC42ODczIDEuMDM1MWgxMS4yOTM0YzEuOTgxOCAwIDMuNzQzNS0uMzA5IDQuNjg3Mi0xLjAzNTF6Ii8+PHBhdGggZD0ibTg3LjQyNDYgNDAuMzA0OGgtMTEuMjMwNWMxLjM4NDItMS41OTEyIDEuOTgxOS0yLjY0MTggMS45ODE5LTUuMTU5OXYtNS42MjMzYzAtMS45Nzc0LS4yODMyLTIuOTA0My0xLjYyMDEtNC4xMjQ3bC0uNzcwNy0uNjk1MiA4LjQ3NzktMy4xMjA2djQuMzI1NmMuODE3OS0yLjUwMjcgMi4wNzYyLTQuMzI1NiA0LjE2ODItNC4zMjU2IDEuNjk4NyAwIDIuNzg0IDEuMTc0IDIuNzg0IDIuOTA0MyAwIDEuODM4NC0xLjE2NCAzLjEyMDYtMi43ODQgMy4xMjA2LS4zNDYxLS44MDMzLTEuMTk1NC0xLjE3NDEtMS45ODE5LTEuMTc0MS0uNjI5MiAwLTEuMjQyNi4xNy0xLjU1NzIuNDc4OXY4LjAxNzhjLS4wMTU3IDIuNjcyNy40NDA0IDMuMzk4NyAyLjUzMjQgNS4zNzYyeiIvPjxwYXRoIGQ9Im0xMTAuNjA5IDM3LjEyMjVjLS40MjUgMi4xNzgzLTIuMjY1IDMuNzA3Ny00Ljc2NiAzLjcwNzctMi4xMjMgMC0zLjc0My0xLjI1MTMtNC4yMzEtMi42NzI2LTEuMDU0IDEuODY5My0zLjAzNTcgMi42NzI2LTUuMTU5MSAyLjY3MjYtMi45MjU2IDAtNC45MDc1LTEuOTAwMi00LjkwNzUtNC41MTEgMC0zLjA0MzQgMi4yMTc4LTUuMTU5OCA3LjM0NTQtNi4zODAzbDIuMzU5Mi0uNTU2MXYtMy4xMjA2YzAtMS45NDY2LS42NzYtMi43MzQ0LTEuODcxNi0yLjczNDQtMS4xMzI0IDAtMS44NzE3LjcyNi0xLjg3MTcgMS43MzAyIDAgLjg2NTEuNDI0NyAxLjQyMTMgMS4xNjM5IDIuMTE2NSAwIDEuMTEyMy0xLjc2MTYgMi4yNTU1LTMuNjAxOSAyLjI1NTUtMS43OTMxIDAtMy4wNjcxLTEuMzU5NS0zLjA2NzEtMy4wMTI1IDAtMi45NTA3IDMuMzE4OC01LjAyMDggOC4xOTQ0LTUuMDIwOCA1LjA4MSAwIDcuNzcgMi4xMTY0IDcuNzcgNi44MjgzdjcuNDQ2MmMwIC45NDI0LjU2NyAxLjU2MDMgMS40NDggMS41NjAzLjUxOSAwIC45MTItLjEwODEgMS4xOTUtLjMwOXptLTkuMzU5LS41MjUydi01LjU3N2wtLjQ1Ni4xMzkxYy0xLjUwOTkuNDQ4LTIuNTQ4IDEuNDIxMi0yLjU0OCAzLjM2NzggMCAxLjY2ODQuNjc2MyAyLjY3MjYgMS43NjIgMi42NzI2LjU4Mi0uMDE1NSAxLjAzOC0uMTg1NCAxLjI0Mi0uNjAyNXoiLz48cGF0aCBkPSJtMTIwLjE3MiA0MC4zMDQ4aC05LjVjLjk5MS0uOTQyNCAxLjYyLTIuMzE3MyAxLjYyLTUuMTU5OXYtNS42MjMzYzAtMS45MDAxLS4yNTItMi44NzM0LTEuNDE1LTMuOTU0OGwtLjgxOC0uNzI2MSA4Ljc0NS0zLjI1OTZ2Mi43MDM1YzEuMDIyLTEuNjY4NSAzLjE3Ny0yLjcwMzUgNS4zMzItMi43MDM1IDMuMzgyIDAgNS4yNTQgMS44MDc0IDUuMjU0IDUuMDIwOHY5LjcxNzFjMCAxLjk3NzQuNTM0IDMuMTgyNCAxLjM4NCAzLjk4NThoLTkuMjQ5Yy45MTItLjg2NTIgMS4xNjQtMi4wMzkzIDEuMTY0LTIuOTgxNnYtOS45MThjMC0xLjQ1MjItLjQ4OC0yLjE3ODMtMS44NzItMi4xNzgzLS43NzEgMC0xLjQxNS4yNzgxLTEuODQuNjk1MnYxMS40MDExYy4wMzEuOTQyMy4yNjcgMi4wODU1IDEuMTk1IDIuOTgxNnoiLz48cGF0aCBkPSJtMTMyLjUxOSAzOS4zMDA1di01LjkzMjNjMi41NDggMy4yNTk3IDUuMTkxIDUuMDY3MSA3LjY2IDUuMDY3MSAxLjE5NiAwIDEuNzYyLS42MTc5IDEuNzYyLTEuNDgzIDAtLjgzNDItLjQ1Ni0xLjMxMzItMS4yNzQtMS42MjIxbC00LjA5LTEuNDgzMWMtMy4xNDUtMS4xNDMyLTQuNTQ1LTMuMDQzNC00LjU0NS01Ljg4NTkgMC0zLjY3NjggMy4wNjctNi4zNDk0IDcuNDQtNi4zNDk0IDIuMzU5IDAgNC45Ny42NjQzIDYuMjc1IDEuNTkxMnY1LjA2NzJjLTEuNjItMi44MTE3LTQuMjc4LTQuMzcyLTYuODQyLTQuMzcyLTEuMzA1IDAtMS45ODIuNDE3MS0xLjk4MiAxLjIyMDQgMCAuODAzNC40ODggMS4xMTIzIDEuNTg5IDEuNTYwNGw0Ljg0NSAxLjkxNTZjMi40MzguOTczMiAzLjUyMyAzLjAxMjUgMy41MjMgNS40ODQyIDAgNC4wNjMtMy4wMDQgNi43NjY1LTcuNTE5IDYuNzY2NS0yLjI0OS0uMDE1NC00LjU3Ny0uNTA5OC02Ljg0Mi0xLjU0NDh6Ii8+PHBhdGggZD0ibTE0Ny41ODggMjMuODM2NiAyLjA0NS0zLjA4OTdjMi42MTEtMy44Nzc2IDQuNzAzLTUuNzQ2OSA4LjIyNi01Ljc0NjkgMi43NTMgMCA0LjUxNCAxLjE3NDEgNC41MTQgMi45NTA3IDAgMS41Mjk0LTEuMjc0IDIuNjQxNy0zLjk0OCAyLjY0MTcgMC0yLjE0NzQtMS4yNDItMi45NTA3LTIuNDY5LTIuOTUwNy0xLjI0MyAwLTIuMTg2Ljg2NTEtMi4xODYgMi4yODY0IDAgLjk3MzMuNTM0IDEuOTQ2NSAyLjE1NCAyLjE3ODNoMy45MTdsLTEuNDE2IDEuNzMwMmgtMi40MDZ2MTAuMjg4OGMwIDEuOTQ2NS4zMTQgMy42NzY3IDIuMzU5IDUuNDM3OWwuODQ5LjcyNjFoLTEyLjE3NGMxLjQxNi0xLjM5MDQgMi4yNjUtMy4wODk4IDIuMjY1LTUuNTc3di0xMC44NzU4eiIvPjxwYXRoIGQ9Im0xNzUuMjU1IDM0LjQxOWMtMS4xMzIgNC44Mi0zLjg1MyA2LjQxMTItNy44MDEgNi40MTEyLTQuNTE0IDAtOC43NDYtMy4yMjg4LTguNzQ2LTkuMjg0NiAwLTUuODI0MSAzLjc0NC05Ljk0ODkgOC42NTEtOS45NDg5IDMuMjA5IDAgNy43MjMgMS42MjIxIDcuNzIzIDguNDk2N2gtMTAuNjY0Yy43MzkgMy42NzY4IDMuMTc3IDUuNTc3IDYuNTU5IDUuNTc3IDEuNzQ2LS4wMTU1IDIuOTQxLS4zMjQ1IDQuMjc4LTEuMjUxNHptLTExLjA0MS02LjczNTZ2LjQ0OGg0LjY1NWMwLTMuNDYwNC0uNzctNC41NDE4LTIuMjY1LTQuNTQxOC0xLjUxIDAtMi4zOSAxLjQ5ODUtMi4zOSA0LjA5Mzh6Ii8+PHBhdGggZD0ibTE4Ny4wODMgNDAuMzA0OGgtMTEuMjNjMS4zODQtMS41OTEyIDEuOTgyLTIuNjQxOCAxLjk4Mi01LjE1OTl2LTUuNjIzM2MwLTEuOTc3NC0uMjgzLTIuOTA0My0xLjYyLTQuMTI0N2wtLjc3MS0uNjk1MiA4LjQ3OC0zLjEyMDZ2NC4zMjU2Yy44MTgtMi41MDI3IDIuMDc2LTQuMzI1NiA0LjE2OC00LjMyNTYgMS42OTkgMCAyLjc4NCAxLjE3NCAyLjc4NCAyLjkwNDMgMCAxLjgzODQtMS4xNjQgMy4xMjA2LTIuNzg0IDMuMTIwNi0uMzQ2LS44MDMzLTEuMTk1LTEuMTc0MS0xLjk4Mi0xLjE3NDEtLjYyOSAwLTEuMjQzLjE3LTEuNTU3LjQ3ODl2OC4wMTc4Yy0uMDE2IDIuNjcyNy40NCAzLjM5ODcgMi41MzIgNS4zNzYyeiIvPjwvZz48L3N2Zz4=', cdnUrl, }; if (window.WT_PAGE_CONFIG.proBundle) { var proSsoLoaderScript = document.createElement('script'); proSsoLoaderScript.setAttribute('id', 'pro-sso-loader-js'); proSsoLoaderScript.setAttribute('src', cdnUrl + '/assets/scripts/pro_sso_loader.js?v=b296d64161783cd2284cf36923756df1'); document.body.appendChild(proSsoLoaderScript); } else { document.getElementById('wt-product-header-line').innerHTML = 'The simplest way to share <span class="wt-product-header__header--strong">big ideas</span>'; document.getElementById('wt-product-subheader-line').innerHTML = 'Send files on your terms with WeTransfer'; document.getElementById('wt-product-feature-wrapper').innerHTML = '<img class="wt-product-feature__image" src="' + cdnUrl + '/assets/images/wetransfer-pane.png">'; } })();