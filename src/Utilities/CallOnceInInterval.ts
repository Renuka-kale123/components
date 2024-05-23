import ConsoleLog from './ConsoleLog';
let enableClickedAction = true;
let clearTimeSetOut: any;

export function callOnceInInterval(func: any, screeName?: any) {
  ConsoleLog.printConsoleLog('---callOnceInInterval at', screeName);

  if (enableClickedAction) {
    func();
    enableClickedAction = false;
    if (clearTimeSetOut) {
      clearTimeout(clearTimeSetOut);
    }
    clearTimeSetOut = setTimeout(() => {
      enableClickedAction = true;
    }, 500);
  }
}
