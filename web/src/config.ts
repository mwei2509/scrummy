const CONFIG_DEV = {
  api_url: process.env.REACT_APP_API_URL_DEV
};

const CONFIG_PROD = {
  api_url: process.env.REACT_APP_API_URL_PROD
};

const config = window.location.hostname.indexOf('location') > -1 ? CONFIG_DEV : CONFIG_PROD;

export default config;