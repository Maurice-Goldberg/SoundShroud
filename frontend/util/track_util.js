export const formatUploadTime = (sqlTime) => {
  let timeOfCreation = new Date(sqlTime);
  let currentTime = new Date();

  let yearsAgo = currentTime.getFullYear() - timeOfCreation.getFullYear();
  let monthsAgo = currentTime.getMonth() - timeOfCreation.getMonth();
  let weeksAgo = Math.floor(currentTime.getDate()/7 - timeOfCreation.getDate()/7);
  let daysAgo = currentTime.getDate() - timeOfCreation.getDate();
  let hoursAgo = currentTime.getHours() - timeOfCreation.getHours();
  let minutesAgo = currentTime.getMinutes() - timeOfCreation.getMinutes();
  let secondsAgo = currentTime.getSeconds() - timeOfCreation.getSeconds();

  if(yearsAgo > 1) {
    return `${yearsAgo} years ago`;
  } else if (yearsAgo === 1) {
    return "1 year ago";
  } else if (monthsAgo > 1) {
    return `${monthsAgo} months ago`;
  } else if (monthsAgo === 1) {
    return "1 month ago";
  } else if (weeksAgo > 1) {
    return `${weeksAgo} weeks ago`;
  } else if (weeksAgo === 1) {
    return "1 week ago";
  } else if (daysAgo > 1) {
    return `${daysAgo} days ago`;
  } else if (daysAgo === 1) {
    return "1 day ago";
  } else if (hoursAgo > 1) {
    return `${hoursAgo} hours ago`;
  } else if (hoursAgo === 1) {
    return "1 hour ago";
  } else if (minutesAgo > 1) {
    return `${minutesAgo} minutes ago`;
  } else if (minutesAgo === 1) {
    return "1 minute ago";
  } else {
    return `${secondsAgo} seconds ago`;
  }
}

export const formatTrackTime = (seconds) => {
  if(!seconds && seconds !== 0) {
    return ""
  }
  let secs = Math.ceil(parseFloat(seconds));
  let mins = Math.floor(secs / 60);
  secs -= mins * 60;
  
  if(secs < 10) {
    secs = `0${secs}`;
  } else {
    secs = `${secs}`;
  }
  return `${mins}:${secs}`;
}