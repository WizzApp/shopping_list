# Setup Cloudflare API access from GitHub

The [deployment action](../../.github/workflows/static.yml) needs access to Cloudflare to deploy
preview and production version of the app. For this, we need an API token from Cloudflare.

To create or update an API token, follow these steps:

1. Go to the [User API tokens](https://dash.cloudflare.com/profile/api-tokens) page on Cloudflare and create a new token with the following permissions: Account - Cloudflare Pages - Edit
2. Copy the token and go to the [Actions secrets and variables](https://github.com/WizzApp/shopping_list/settings/secrets/actions) page on GitHub.
3. Create or edit the secret named `CLOUDFLARE_API_TOKEN` and set its value to the value you copied in step 2.
