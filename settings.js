require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAPZJ6Voj7Y+mhwQAAPYHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3pdYwQERCM6YhG5SeMdFTf2oaQKqZZLWRQoTvjvG2j3zETM7GwvT0VSZJ6TefJ8BXlBSuzhBgy*AspIDTluj7yhGAzBqIpjzEAHIMghGILSPiOF8omgRNVhmcyKAfd1C+qXUumb2m5Zc22JTJ3b9ukF3DuAVoeURL9JOF+Ye8knNx03qEkdTV8ebvwm4hDreSClYXBaad7haqCl*ALubUZIGMmPJk1whhlMPdzMIWGfg+95viEvBMlewszidh*6jLiL2WmdJwG+bFzfOKNFJM3C7eVz8I+1f+4K4dkrten2olgwUN3NDeFVHMrTZnLgI7IKYq+oDPcJvyTHHCMX4ZwT3ny67zN*mTjLri68CvZE3CWJU8XjLpIdlY5lPununIMzMbUrFaLPAUfiNLaouriwgcWW0TSdXcMZxfmAqoftvv8mB8XgdQLDcRD9CHzOPrRy+j99N+bi6*pwqpOlILH9WerNJTmenbqVVVClFi7NcX+Udn4gSZ+EX1frPzLToptqbMVSvXTH7ngaxfsFrT3LpBdN0TU*MFfW5vIdPuQV+x1KJ5*BcJZPjQizxFMmJxlP40PSG3dlLSkPykLXpkpd30iOisyq91trnpy8G91ktVFlN8JDYbwbZMcwQ4lqXA7Vm8rfji8PRifcuAgMxXsHMHwkJWeQkyJvY7LcARDVKxwxzB*dBT3WbDddEq4u9hWtsMuF6yiQi90s3szNubdjC1pcumZ2sLUX0AGUFREuS4wcUvKCNT4uS3jEJRj+9RhUy5nhrOB4QhAYAqnXk2RBFeSB1Puz*HJJIC8hpV9yzEEHxKzIfAyGnFW4Ax4*9ETL1MyRpiqKPFAkXRsIZt8QdV0bKaIijFqG2bPommS45DCjYCj2FUlQJEVW7n93QI6v*CmflnRP7ICYsJIHeUXTAqIPbX18hFFUVDlfNXlktAfMwPCHMOac5MeyZVblkEUJqbHR8gDDGKYl*tZnzDD64PLuHUaB2vG*rsS+6Nk90GJvE*3Um6Gq*Nye9HFNEQaKMpA0SZFUVWgvtvH7N4BtPoQ5JGnZ6t+bvWm1bpivLKt837Z186gbRx18J*Shz6cA*M2+Lwbxmm4aHx2m9Eb2jtcE8CiGJN3hS7MrNbQ233qS*PKLJK2xVqlxS6JNpgWJHTE*6MkkrFJpntuFEqVSX3b1a7mghqYk51PWLE57stgOthiO*EkPxmM17qLoNZnIyWbn3JTzuBsal5e2GsI1ifCPxZJeteViPO87RqYvzemkO5bjS6ltBypeOJwtpbw4RKiIp6XcKBLV1n5MVXdGvePmLIiuM81DvNzZ+ai4vqESFYIfEv25OY*NTd8dk7yLmjxeY4IfBpTDdoD*Pbon8FZhwr3zQ453S*sXWxitrS0ebBxB3URvzvYGIzlbNmVqF9OtSze90k*7cye4uoNBBe6t1GkKeVywDAwBzBErCAIdwIqqlaybx8XvnHLkuqPFk3kKS65*X4NfbZb4vDVnBXVgmYAhyLPe6NBKutEpXXHIP5YK6O3jWwjc*wFQSwECFAMUAAAICAD2SelaI+2PpocEAAD2BwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAACvBAAAAAA=',
  
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
