const Joi = require('joi');

require('dotenv').config();

const envSchema = Joi.object({
    APPLICATION_ID: Joi.string().required(),
    API_KEY: Joi.string().required(),
    INDEX_NAME: Joi.string().required(),
})
    .unknown()
    .required();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    applicationID: envVars.APPLICATION_ID,
    apiKey: envVars.API_KEY,
    indexName: envVars.INDEX_NAME,
};

module.exports = config;
