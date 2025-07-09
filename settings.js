require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIALxo6VpxcOVWVwQAAHAHAAAKAAAAY3JlZHMuanNvbpVUTZOiSBD9L3XVGAEBhYiOWMAPkFYRQcSNOZRQYCkUSBUoTvjfJ+ienpnD7mwvpyIrI*Pley*rGyAFpshGLVC*gbLCDWSoO7K2REAFep0kqAJ9EEMGgQqi1+2mUNb7+7S05CRa6b5V+BXlbb1lq8H+RKzAaDZNXmbWC3j2QVkfMxz9oeBclErFWgW2zAcBkoeTm75WesSF2b09DZgn3RNjPrwejEB8Ac+uIsQVJum0PKEcVTCzUetAXH0OvjzbcDA5TTSeGMuZGZYzbSRftC27lntxNEqCkZiOLvmJI5fPwZ8MyLhtsl7QDmBoTh7r4y0uh0VqPKyNuC+4iK9sL8u1hea*w6c4JSi2YkQYZu2nea8XiymKc22DMntwml8h5VzPXmarsvYax7Yux*DuryXH9z*Je+GtwzZ2ba4w*TZ0trtECcme1DxP4EWM7jf*uB5ni9jUo9+BO9WHVy7*h*fICUXuMbInrhDK*sPHtzlf4cYZhoGtu+ZxfKOv10VoTLLwc*BnV6QcRj6fBkpVyj28wmZ6qy*heiK4ksOC9pDLpu7NHhn9BR+yuvoTytPltrwvNodw1*Oc11vPdLxyGe6bxHysBufTOJjzj*OZWQunJ7j++ezQxiduvROd6UmJzz3U2x7S6+t0JPtagKRDHsWvhvbyNtEFtVYMVP7ZBxVKMWUVZLggXUyQhD6AcbNFUYXYG71gvp1f15y+phubDZKkNa5zc7flI8E*3O94fJlV+Yorh+M1Tl9AH5RVESFKUWxiyoqqXSJKYYooUP*+2gcE3dm7cF27Id8HCa4o80ldZgWMP1T9uIRRVNSEbVsSGd0BVUDlfoURY5iktOOxJrCKTrhBxgkyCtQEZhT9nBBVKAYqq2r0c2uNIu6IXyryyJsuNdAH+ZsgOAYqEIZDQeRkTlSEoSrLf9Evt64sLMsvBDHQB9lbmsQpkqQIY0ESZJnrErv48yfArl6MGMQZBSow7O153GjG1B5t62g5n2vTVDPSrvXHQB*OeGd+uTuMeD*xyl27jI+r8oEPpt36MOVDnO3Rrd3TcexNz0NBfPmHIkAFU4XyaKBDQQwlSS4m3tS16k3Ia6XkvNIbjD3x2gqwdXN2Nem9R*SMD9dDf9562nQnu9GZCyZXs2nRycb+io1xftU2L123GDU4Qr83yyx+PMPV*UHcq7Ny7xNrMqBI2W*sIlusLjK01mKDxnK6TSO03bQZEU6Pce7JWbU*XiS+0fhQH9O5f3dJOYC2yF1uk9u7Z992JvvxVuE3N3VSdb8JRm+rT2An4H9L9w68cxj37P9W48dj8i8LqXuzACk7k5N30dkMHjASc7el2bxYBVa5G9JlNnJM*24pSg2ez699UGaQJUWVAxVAElcFjkEfVEXdWdYiSfGHZoZuWfrmffIMUqb9WgMP54gymJdA5UeSwMnyUBLfs5yqKE1IT0AFJB*qx87SrVaWWwbZx1IBrfuWsxg8vwNQSwECFAMUAAAICAC8aOlacXDlVlcEAABwBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB*BAAAAAA=',
  
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
