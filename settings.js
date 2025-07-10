require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAMJO6loe7cDGUQQAAHAHAAAKAAAAY3JlZHMuanNvbpVV25KiSBD9l3odY+QiCEZ0xAKiomgj3tCNfSihgOJOVaHgRP*7Bvb0zDzszvbyVCQZmSdPnlN8A0WJKVqhDky+gYrgG2SoP7KuQmAC9CYMEQEDEEAGwQRYhs2bnqnuQ30ueOvXpU3rULCmxZdWmM29jVgSCUnNYZkrL+BtAKrmmmH*NwW39dkoPDcWtenSac8o2D6mO9GSFZG97uJu30Rn81FE9tVLX8BbXxFigovIrGKUIwKzFeociMnn4NfWqnKHaNRUwhJBy5yXq0tnSKOmGHJlbCj1QhZhcxIDk34OfpFTS8Dml9vwHElbDrV1vXHGiE6TxLvzWyPyD5GRuPZeV97hUxwVKLACVDDMuk*zvjOHK8mJLZXbHtoucbJEfa1bN8AuxOvQfiyWOje7jIjrWZ8D3qasULwNvJ52VolPFUzkehS5l0B9RcO6OaAg4vfYfbXx6FfgDvnQSvp*eN86hTfL9+lRebjbxAnd9fh4rPlD2S7coB6yOnbni7PD8d4ned*WYiI1uqG2+bnM5FlyC*zDwvEFQhyTPYi8z6NLumrTWfoTPmQN+R3KJbSzOMAQpuNUnJ0inOmRqDxWC3OotpWWMKRYXxJuFZOrIGRnlIqS68RVonR3E54faqPH9k5Yr4x6dc5vNcoXKImil+dEKeqsAEz4twEgKMKUEchwWTxj6ngAYHDbIZ8g9qQXOFNNnxezcJN0l+B6gjfqYD73l9NOPFejIhJFLNJEsR+a9gIGoCKljyhFwQJTVpJujSiFEaJg8udfA1Cglr0vrm8n8gMQYkLZoWiqrITBx1Y*PkLfL5uC7brCN*oDImDC*QwjxnAR0Z7HpoDEj*ENGTFkFExCmFH0Y0JEUAAmjDToh2uNMuiJl2f2XvJkDQxA*lwIDsAECKIojDiZG6mCOJGVP+jXe18WVtXXAjEwANkzTeJUSVIFRZAEWeb6xD7+9gNgXy9ADOKMggkwVqdEuWmGaaPrja7nc82MNCPqW38M9KGMd+bXx8uYP4T76titg+umeuDLYtUdYMSfceahe+dRJdibiSiMXv6hCJiA4HFf2k7qEcmPH62nu0eej6qNIp+TJZbvbWLgUYlzhGymp9MU7dbTJAu1qSSbG9Ezm1QN9vmUGdGep+HuMBz70DS0l75bgG7YR782u4dnY4V5Yo83DKJEttaNzzX8kHfrhieVdgzgdq1L1Ble5mhzvuev9a4pt7m2mIYi6y7N+na4XI*dYeyNR2JrruwbF3*X7NMz2fe7Cj*V1K+qfw0xelq*gP0C*3t178B7hXFvg19qfL9M*sWQ+n52QupxwclHP1mcHtAf5W5Hs3m5OVnVUaTrbOwsDq2lqg14e*trAKoMsrAkOZgAWASkxAEYAFI2vWStIix*08zQLUvfvk+eQcq0nzbY4xxRBvMKTPixJPAjXhgJ71kOKasFpPHzXyDq117SnVZVOwbZh6mA1j*rWQze*gZQSwECFAMUAAAICADCTupaHu3AxlEEAABwBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB5BAAAAAA=',
  
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
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '7160020423:AAGEK6eMoWPA0ofPsMrrdmXSAr0onisITRM',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
