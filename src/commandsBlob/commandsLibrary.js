/**
 * @file commandsLibrary.js
 * @module commandsLibrary
 * @description Contains all of the plugin defined commands as a map between function names and function calls.
 * @requires module:pluginThreeCommands
 * @requires module:plugin.command.constants
 * @requires module:plugin.constants
 * @requires module:pluginData
 * @requires {@link https://www.npmjs.com/package/@haystacks/constants|@haystacks/constants}
 * @requires {@link https://www.npmjs.com/package/path|path}
 * @author Seth Hollingsead
 * @date 2023/01/26
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import pluginThreeCommands from './commands/pluginThreeCommands.js';
import * as plg_cmd from '../constants/plugin.command.constants.js';
import * as plg from '../constants/plugin.constants.js';
import D from '../structures/pluginData.js';
// External imports
import hayConst from '@haystacks/constants';
import path from 'path';

const {bas, msg, sys, wrd} = hayConst;
const baseFileName = path.basename(import.meta.url, path.extname(import.meta.url));
// plugins.plugin-three.commandsBlob.commandsLibrary.
const namespacePrefix = wrd.cplugins + bas.cDot + plg.cpluginName + bas.cDot + sys.ccommandsBlob + bas.cDot + baseFileName + bas.cDot;

/**
 * @function initPluginCommandsLibrary
 * @description Initializes an object map of plugin commands and plugin function calls and returns them.
 * @return {object} A JSON object that contains an array of function objects that map function name to function call for all of the commands.
 * @author Seth Hollingsead
 * @date 2023/01/26
 * @NOTE Please be aware that the Commands and BusinessRules data fields in the
 * D-data structure are going to display as empty when printing out the D-data structure even when using JSON.stringify().
 * This is because the functions cannot really be serialized in any way. It actually kind of makes sense,
 * but could be really confusing if you are struggling, trying to debug commands or business rules that do not appear to exist.
 */
const initPluginCommandLibrary = function() {
  // let functionName = initPluginCommandLibrary.name;
  // console.log(`BEGIN ${namespacePrefix}${functionName} function`);
  let returnData = {};
  returnData[wrd.ccommands] = {};
  returnData[wrd.ccommands] = {
    // Commands
    // ***********************************************************************
    // BEGIN pluginThree category
    // ***********************************************************************
    [plg_cmd.cpluginThreeCommand01]: (inputData, inputMetaData) => pluginThreeCommands.pluginThreeCommand01(inputData, inputMetaData),
    [plg_cmd.cpluginThreeCommand02]: (inputData, inputMetaData) => pluginThreeCommands.pluginThreeCommand02(inputData, inputMetaData)
    // ***********************************************************************
    // END pluginThree category
    // ***********************************************************************
  };
  // console.log(`returnData is: ${JSON.stringify(returnData)}`);
  // console.log(`END ${namespacePrefix}${functionName} function`);
  return returnData;
}

export default {
  initPluginCommandLibrary
};