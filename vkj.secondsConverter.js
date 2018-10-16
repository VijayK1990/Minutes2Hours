/*
	* FUNCTION DATE: 04-10-2018
	* WRITTEN BY: VIJAYENDRA K
	* PURPOSE: TO CONVERT MINUTES TO HOURS FORMAT
*/
function GetDuration(t) {            
	var hours = Math.floor(parseInt(t) / 60);
	var minutes = (parseInt(t) % 60);
	var conv = ((('' + hours).length < 2 ? '0' : '') + hours) + ':' + ((('' + minutes).length < 2 ? '0' : '') + minutes);
	return conv;
}
