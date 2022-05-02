/**
 *
 * @package    timecode
 * @version    Release: 1.0.1
 * @license    GPL3
 * @author     Ali YILMAZ <aliyilmaz.work@gmail.com>
 * @category   timecode tools.
 * @link       https://github.com/aliyilmaz/timecode
 *
 */

String.prototype.toSeconds = function () { 
    let arr = this.split(":");
    if (arr.length < 2) { return false; }
    if (arr.length == 2) { arr[2] = '00'; }
    if (arr[1] > 59 || arr[2] > 59) { return false; }
    return parseInt(arr[0]) * 3600 + parseInt(arr[1]) * 60 + parseInt(arr[2]);
}

String.prototype.toTime = function () { 
    var secs = parseInt(this);
    var hours   = Math.floor(secs / 3600);
    var mins = Math.floor((secs - (hours * 3600)) / 60);
    secs = secs - (hours * 3600) - (mins * 60);

    if (hours < 10) { hours = "0"+hours;}
    if (mins  < 10) { mins  = "0"+mins;}
    if (secs  < 10) { secs  = "0"+ secs;}
    return hours+':'+mins+':'+secs;
}


function timecodeCompare(duration, timecode){
    
    duration = duration.toSeconds();
    timecode = timecode.toSeconds();

    if (typeof (duration) != 'number' || typeof (timecode) != 'number') { return false; }
    if (duration <= timecode) { return true; }
    
    return false;
}