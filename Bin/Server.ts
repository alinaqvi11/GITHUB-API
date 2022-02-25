import app from "../Http/App";
import { config } from "../App/Infrastructure/Config";
import logger from "../logger";
const port = config.port || 4000;


app.listen(port, () => {
  logger.info(`Running on port ${port}`);
});
