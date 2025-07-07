require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAFRV51q9zWAbUQQAAHAHAAAKAAAAY3JlZHMuanNvbpVVaY+jOBD9L*6aaMKRcERqaQlNDhLIfa72gwMGzGET20kgo*z3Fd3T0yOtdraXT6YoVb2q9575DgjFHE1RDfrfQcnwDQrUHEVdItAHg2sUIQbaIIQCgj6YT9NTtURMOKZqLW*BOYlPj8sCM+MmWHdd0o3wq5kxxdvjC3i2QXk95zj4TUEdZZaAvrk90PQkdQ5iZtZqTwQseBTVLJiKocm847gmFX0Bz6YixAyT2CkTVCAG8ymqFxCzr8G*zFdRNnVlbxvMsOu7SutwLvS48hJ9eb8Vh4E9jER0dcaZ8TX4xGVzPpgfjn7R8o8L3R3RJLnUa5UukN7brOSz77BL2JoVP+BzHBMUTkJEBBb1l*eOFwLlTlSdT*XwsnPWxIG4MPXWw0xpxqStVz1Gl2RIJaX7NeD3g9TLNL67bebccKjuW9I+osJO5wQOpWxGl9Esfp2S8ab7K*AF+9BK9n*2XnurU88+1N30ZpIqMqp1fVNbu*EGK9WiLMlKKxQa6x16+KJsBpuOL9+s6cjNnKUbXEdb6ehrKQ+c186DMe28TXm96BBbMT7hQ3Flv0OZjAY+DMRllVoda6vbr0mL6GvXDluPaZ3dWGGcd5sTWdOlgcVrdDAGpCNHRwmr80symV3cEFMub+8B1vZOpZr3VW8Z31*eJspQPQlBX362AUMx5oJBgSlpYooktQEMb2sUMCTe1gtQj*kSqdcr91YU6*G5mhz9LB5Yc1HrWbHW7ZUSz0wt0+fSC2iDktEAcY7CMeaCstpDnMMYcdD*8682IKgS78Q17VS5DSLMuNiSa5lTGH6w+vERBgG9ErGuSWA3B8RAX*oMIyEwiXmzxyuBLEjwDdkJFBz0I5hz9HNCxFAI+oJd0U*X2jRsFj*aeK+n4dQDbVC8EYJD0AeKqipdSZO6pqL2NeUP*u3elIVl+Y0gAdogf0vrSWavZyqG0lM0TWoSm*jzJ8CmXogExDkHfWBPR6lxs2zHJS7j3mhkTWLLji3wOdCHMt437+1OuryNNuWu9sKzXz7waTyttzCWjzg*oHt94Ea4cVK1cdo*i4A+WEZeftoPaVfWj6uFeu60jGh8V++rfS7gnhSO1q3uQYemcH0cGpa*iua6mQt727GJUfmpUdeTyTxWuZzs5LQY7yB07Pil6RaiGw7Qr83mixgrrywPJk6QzaGkbek1vnQX8L6MWgddxLa7V8PWwDkN1Vk0WyaaMLos98yRhqSeMZhMRwq0N7ZVqBVVYDIb0WNqvWv2zTP5j7sKv6mpoap5jTB6sz6BDYH*Td078EZh0rP9S40fl8m*uny4R+ZuLGm7IB3vHzDoFqua5yPq7yflTuVeri*G22pimlfwfP7VBmUORURZAfoAkpBRHII2YPTaSHZCIvqbZvZgMhks3yfPIRfWpw02uEBcwKIEfVnvyYbRNXv6e9aC0XIMedL8Cwp1cG4kXVtluRZQfJgKWM3jmgfw*BtQSwECFAMUAAAICABUVedavc1gG1EEAABwBwAACgAAAAAAAAAAAAAApIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254712345678',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || '',
  
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
