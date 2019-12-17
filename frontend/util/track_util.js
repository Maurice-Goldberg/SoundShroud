export const formatTime = (sqlTime) => {
  let timeOfCreation = new Date(sqlTime);
  let currentTime = new Date();

  let yearsAgo = currentTime.getFullYear() - timeOfCreation.getFullYear();
  let monthsAgo = currentTime.getMonth() - timeOfCreation.getMonth();
  let weeksAgo = currentTime.getDate()/7 - timeOfCreation.getDate()/7;
  let daysAgo = currentTime.getDate() - timeOfCreation.getDate();
  let hoursAgo = currentTime.getHours() - timeOfCreation.getHours();
  let minutesAgo = currentTime.getMinutes() - timeOfCreation.getMinutes();
  let secondsAgo = currentTime.getSeconds() - timeOfCreation.getSeconds();

  if(yearsAgo >= 1) {
    return `${yearsAgo} years ago`;
  } else if (monthsAgo >= 1) {
    return `${monthsAgo} months ago`;
  } else if (weeksAgo >= 1) {
    return `${weeksAgo} weeks ago`;
  } else if (daysAgo >= 1) {
    return `${daysAgo} days ago`;
  } else if (hoursAgo >= 1) {
    return `${hoursAgo} hours ago`;
  } else if (minutesAgo >= 1) {
    return `${minutesAgo} minutes ago`;
  } else {
    return `${secondsAgo} ago`;
  }
}