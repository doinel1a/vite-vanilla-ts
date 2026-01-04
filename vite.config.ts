import legacy from '@vitejs/plugin-legacy';

import _config from './_config.js';

const HOST = _config.server.host;
const PORT = _config.server.port;

export default {
  server: {
    host: HOST,
    port: PORT
  },
  plugins: [legacy()]
};
