import { logger } from "../logger.js";
import { settings } from "../settings.js";

export function register_helper()
{
  logger.info(`Registering DND5E Helpers`);
  /*
    Override
  */

  //???
}

export function sheetHooks()
{
  const renderSheets = {
  };
  const renderedSheets = {
  };

  return { render : renderSheets, rendered : renderedSheets };
}


