var FileSaver = require('file-saver');

/**
 * Not exporting default, so we can spyOn
 * @param {Object} taskBundle
 */
export function writeJsonFile(taskBundle) {
  const writeable = {
    date: taskBundle.date,
    WorkUnit: taskBundle.WorkUnit[0][0].tasks,
  }
  window.console.log('writeable', writeable)
  let json = JSON.stringify(writeable);
  let blob = new Blob([json], { type: 'application/json' });
  let fileName = 'time-logs_' + taskBundle.date + '.json';
  FileSaver.saveAs(blob, fileName);
}
