/**
 *
 * @package    timecode
 * @version    Release: 1.0.0
 * @license    GPL3
 * @author     Ali YILMAZ <aliyilmaz.work@gmail.com>
 * @category   timecode tools.
 * @link       https://github.com/aliyilmaz/timecode
 *
 */

String.prototype.toHHMMSS = function () { 
    var seconds = parseInt(this, 10);
    var hours   = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    seconds = seconds - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}

String.prototype.toSeconds = function () { 
    let arr = this.split(":");
    if(arr.length < 2 ||  arr.length > 3){ return false; }
    if(arr.length == 2 ){ arr[2] = '00'; }
    const seconds = arr[0]*3600+arr[1]*60+(+arr[2]);
    return seconds;
}

function timecodeCompare(duration, timecode){
    var regExp = /(\d{1,2})\:(\d{1,2})\:(\d{1,2})/;
    if(duration.split(':').length < 2 ||  duration.split(':').length > 3){ return false; }
    if(timecode.split(':').length < 2 ||  timecode.split(':').length > 3){ return false; }
    if(duration.split(':').length == 2 ){ duration = duration+':00'; }
    if(timecode.split(':').length == 2 ){ timecode = timecode+':00'; }
    
    if(parseInt(duration.replace(regExp, "$1$2$3")) <= parseInt(timecode.replace(regExp, "$1$2$3"))){
        return true;
    }
    return false;
}