'use strict';
import { config } from "../App/Infrastructure/Config";
const port = config.port || 4000;
import { Command } from "commander";
const program = new Command();
import logger from '../App/Infrastructure/Logger/logger';
import app from '../Http/App';

program
.command("start")
.action(() => {
  app.listen(port, () => {
    logger.info(`Running On Port ${port}`);
  });
  
});
program.parse(process.argv);
