const ENV = process.env.NODE_ENV;

const getUrl = ({env})=> {
  let serverUrl;
  if(ENV === 'local-dev'){
    serverUrl = `http://${env("HOST")}:${env("PORT")}`;
  }
  if(ENV === 'local' || ENV === "production"){
    serverUrl =`${env("SERVER_URL")}/${env("STAGE")}`;
  }
  console.log("Server Url: " + serverUrl);
  return serverUrl;
};

module.exports = ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: getUrl({env})
});