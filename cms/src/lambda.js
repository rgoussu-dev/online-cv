const serverless = require("serverless-http");
const Strapi = require("@strapi/strapi/lib/index.js");


const startStrapi = async (strapi) => {
    try {
        if (!strapi.isLoaded) {
            await strapi.load();
        }
        await strapi.postListen();
        strapi.server.mount();
        return strapi;
    } catch (error) {
        return strapi.stopWithError(error);
    }
};

module.exports.strapi = async (event, context) => {
    console.log(JSON.stringify(Object.keys(event)));

    let workingDir = process.cwd();
    if (process.env.LAMBDA_TASK_ROOT && process.env.IS_OFFLINE !== "true") {
        workingDir = process.env.LAMBDA_TASK_ROOT;
    }
    if (!global.strapi) {
        console.info("Cold starting Strapi");
        Strapi({ dir: workingDir });
    }
    if (!global.strapi.isLoaded) {
        await startStrapi(global.strapi);
    }
    const handler = serverless(global.strapi.server.app);
    return handler(event, context);
};