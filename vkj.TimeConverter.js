/*
	* FUNCTION DATE: 16-10-2018
	* WRITTEN BY: VIJAYENDRA K
	* PURPOSE: TO CONVERT SECONDS TO HOURS/MINUTES FORMAT
*/
function GetDuration(t, type , datetimestamppart,delimiter) {
  var RemainderSeconds = 0;
  var TotalDays = 0;
  var TotalHours = 0;
  var TotalMinutes = 0;
  var FTimeStamp = 0;

  if (type === 'short' && datetimestamppart === 'hourmin') {
    RemainderSeconds = t;
   
    TotalDays = Math.floor(RemainderSeconds / 86400);
   
    RemainderSeconds = RemainderSeconds - (TotalDays * 86400);
    
    TotalHours = Math.floor(RemainderSeconds / 3600);
   
    RemainderSeconds = RemainderSeconds - (TotalHours * 3600);
  
    TotalMinutes = RemainderSeconds / 60;
   
    FTimeStamp = (((('' + TotalHours).length < 2 ? '0' : '') + TotalHours.toFixed(2)) + delimiter +
      ((('' + TotalMinutes).length < 2 ? '0' : '') + TotalMinutes.toFixed(2)) + delimiter +
      ((('' + RemainderSeconds).length < 2 ? '0' : '') + RemainderSeconds.toFixed(2)));
  } 
  else if (type === 'short' && datetimestamppart === 'houronly') {
    RemainderSeconds = t;
   
    TotalDays = Math.floor(RemainderSeconds / 86400);

    RemainderSeconds = RemainderSeconds - (TotalDays * 86400);

    TotalHours = TotalDays * 24;
	
    FTimeStamp = (((('' + TotalHours).length < 2 ? '0' : '') + TotalHours.toFixed(2)));

  } 
  else if (type === 'short' && datetimestamppart === 'minonly') {
    RemainderSeconds = t;
	
    TotalDays = Math.floor(RemainderSeconds / 86400);

    TotalHours = TotalDays * 24;

    TotalMinutes = TotalHours * 60;
   
    FTimeStamp = (((('' + TotalMinutes).length < 2 ? '0' : '') + TotalMinutes.toFixed(2)));
  } 
  else if (type === 'long' && datetimestamppart === 'all') {
    RemainderSeconds = t;

    TotalDays = Math.floor(RemainderSeconds / 86400);

    RemainderSeconds = RemainderSeconds - (TotalDays * 86400);

    TotalHours = Math.floor(RemainderSeconds / 3600);

    RemainderSeconds = RemainderSeconds - (TotalHours * 3600);

    TotalMinutes = RemainderSeconds / 60;
	
    FTimeStamp = (((('' + TotalDays).length < 2 ? '0' : '') + TotalDays.toFixed(2)) + ' Days ' +
      ((('' + TotalHours).length < 2 ? '0' : '') + TotalHours.toFixed(2)) + ' Hours ' +
      ((('' + TotalMinutes).length < 2 ? '0' : '') + TotalMinutes.toFixed(2)) + ' Minutes ' +
      ((('' + RemainderSeconds).length < 2 ? '0' : '') + RemainderSeconds.toFixed(2)) + ' Seconds ');
  } 
  else  if (type === 'semi' && datetimestamppart === 'all') {
    RemainderSeconds = t;

    TotalDays = Math.floor(RemainderSeconds / 86400);

    RemainderSeconds = RemainderSeconds - (TotalDays * 86400);

    TotalHours = Math.floor(RemainderSeconds / 3600);

    RemainderSeconds = RemainderSeconds - (TotalHours * 3600);

    TotalMinutes = RemainderSeconds / 60;
 
    FTimeStamp = (((('' + TotalDays).length < 2 ? '0' : '') + TotalDays.toFixed(2)) + delimiter +
      ((('' + TotalHours).length < 2 ? '0' : '') + TotalHours.toFixed(2)) + delimiter +
      ((('' + TotalMinutes).length < 2 ? '0' : '') + TotalMinutes.toFixed(2)) + delimiter +
      ((('' + RemainderSeconds).length < 2 ? '0' : '') + RemainderSeconds.toFixed(2)));
  }
  
  return FTimeStamp;
}
