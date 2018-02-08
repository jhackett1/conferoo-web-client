const config = {
  google_client_id: "826165205387-b4u0mtq8diena38nabgqrd667kefjnfr.apps.googleusercontent.com",
  api_host: "https://www.fsconference.co.uk/api/",
  slack_webhook_url: "https://hooks.slack.com/services/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",
  // login_redirect_uri: 'http://localhost:3000/login/callback',
  // login_redirect_uri: 'https://conferoo-web-client.herokuapp.com/login/callback',
  login_redirect_uri: 'https://app.fsconference.co.uk/login/callback',
  themes: [
    "Understanding the UK",
    "Policy and public engagement",
    "Data and technology"
  ],
  venues: [
    'C3', 'C8/9', 'C11', 'C20', 'C6/34'
  ],
  // Extra events to put in the timetable
  decoration: [{
    title: "Registration",
    time: "09:00"
  },{
    title: "Coffee break",
    time: "11:45"
  },{
    title: "Lunch break",
    time: "12:55"
  },{
    title: "Coffee break",
    time: "15:35"
  },{
    title: "Networking",
    time: "17:00"
  }]
 }

export default config;
