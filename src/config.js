const config = {
  google_client_id: "826165205387-b4u0mtq8diena38nabgqrd667kefjnfr.apps.googleusercontent.com",
  api_host: "https://www.fsconference.co.uk/api/",
  slack_webhook_url: "https://hooks.slack.com/services/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",
  // login_redirect_uri: 'http://localhost:3000/login/callback',
  login_redirect_uri: 'https://conferoo-web-client.herokuapp.com/login/callback',
  // login_redirect_uri: 'https://fsconference.co.uk/login/callback',
  themes: [
    "Cybersecurity",
    "Diversity",
    "Documentation",
    "Materialism",
    "Astral Projection"
  ],
  venues: [
    'Big Room',
    'Little Room A',
    'Little Room B'
  ]
 }

export default config;
