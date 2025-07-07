require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIACW451rs4dNKUwQAAHAHAAAKAAAAY3JlZHMuanNvbpVUTZOiSBD9L3XVGAQEgYiOWEAUW1FsUNSNORRQQPEtBQhO+N83sKdn+rA70cupyMrIfPnyvfoB8gITtEY9kH6AssItrNFwrPsSAQkoTRCgCoyBD2sIJCDMvXgvkh2Dmc5NfDS6HV5HI+KfJ3ofxseScmbTSRtWu3z6Ah5jUDZuir0*FAxMUTG7oC2SUVfADXsQ7cXV2KnWpjVWZyIqSya63Ld1eZdfwGOoCHGF81ArI5ShCqZr1JsQV1+Dn+h2NH81*IXwNj*vW85zZXtjcWr1pow4md4mjcOvtwYVJquvwTc2tkvK*XqJ+SIi+YzH3pYb9XmMKlXXBGq0uV4deZ1zvfYOn+AwR*7KR3mN6*7LvB9ekzB2OKhQV58l6p7u2m6k7BQnyOd6KpCyTogVkJXheF8Dbl5PjH8KRVppMuwtmHlf07SxfC09VKb4PPPwlLplG6yejM*AzepDK8n*4d1TFb5fX2RXb9x6g+9ecVq2uZBZMsz33CFqmM1ZxJkVpeRr8Hc3y+puIz0WFdlvwgC96VzApv6m04jsUfmcG+WL5TXR5p*gw7qp*oTyJtL++Xa1bPvaRPxWNmdxdzmvmR19JZaWxvFdgMIpKggm0wm8QTe*innlNAYs3XV76rtddL5T7SLjj3hnL1cabtt5+PKcKEH9ygcS*RiDCoWY1BWscZE*Y+x0DKDfWsirUP2kF0QXHZalMaO21rSE9mh+NkcOL7vaG2WvCtY5vu4bfE+o22j*AsagrAoPEYJ8HZO6qHoDEQJDRID09*cxyFFXvy9uaMfSYxDgitSHvCnTAvofW*24hJ5XNHlt9bmnDgdUAWnyO4zqGuchGXhsclh5EW6RGsGaACmAKUG*JkQV8oFUVw365Vq18AfiWe5CW0txAcYgey4E+0ACDMsy0wk*mYoMK*HsX+TbbSgLy*JbjmowBukzjZuIHCcyAsMxPD8ZEof44xfAoZ6PaohTAiSgrpex0MqqtlnGxDOWS9kIZTWUwe+BPpTxzrxxvMzoQ2CXx97w3W15xxd93R9gSJ9xekK3*kQE39Zilpm+*EsRIIGF0p08NlJMlzZt7USSI6UIfOR7RpJ41zOtXbV629RmcL9uGZ*ruXhnRNoK2dqSTPnFQg9V8Wpm3YQNzd697W7s2ZrLL0M3H7XYQ5+bMalN8+XN2gXx6Taf57tWcN6SXjcdIS63kdCtT5S*ne016kTt2tI6LNw4FQL3DPkyUx0lsqn9*KJ3vQG9mRhT1rR7U35q9umZ9OdbhZ9qGlY1*AYYPa2fwwx9ZXXvwAeFTR7jTzV+Pib*YUjFXjhIPOoT*ujFunOH3jR760m6LLbOqjyyxEhnpn7oVqLYgMfj+xiUKayDosqABGDuVwX2wRhURTNIdpUHxR+aqcpqpezfJ08hqeXfNrBxhkgNsxJI9IyjRUZkeOE9y6yKUockAhLIM1ZxB0n3cllaNaw*TAXk4XsVT+DxD1BLAQIUAxQAAAgIACW451rs4dNKUwQAAHAHAAAKAAAAAAAAAAAAAACAgQAAAABjcmVkcy5qc29uUEsFBgAAAAABAAEAOAAAAHsEAAAAAA==',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233240604923',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'kwesigh',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
