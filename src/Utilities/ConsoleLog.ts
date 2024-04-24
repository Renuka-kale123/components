/**
 * ConsoleLog.printConsoleLog('Message',true);
 */
export default class ConsoleLog {
  static printConsoleLog(
    consoleMessage?: any,
    consoleData?: any,
    consoleData1?: any
  ) {
    if (__DEV__) {
      console.log(' \n \n ====>  ', consoleMessage, consoleData, consoleData1);
    }
  }
}
