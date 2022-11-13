const ENV = process.env.NODE_ENV;

const getUrl = ({env})=> {
  let adminUrl;
  if(ENV === 'local-dev'){
    adminUrl = "/admin";
  }
  if(ENV === 'local' || ENV === "production"){
    adminUrl = env("ADMIN_URL");
  }
  console.log("Admin Url :" +adminUrl);
  return adminUrl;
};

module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  autoOpen: false,
  serveAdminPanel: ENV === 'local-dev',
  url: getUrl({env})
});