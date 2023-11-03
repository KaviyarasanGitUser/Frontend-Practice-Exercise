console.log(checkSpeed(72));

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  const maxPoints = 12;

  if (speed < speedLimit + kmPerPoint) return "Ok";

  const overSpeed = speed - speedLimit;
  const point = Math.floor(overSpeed / kmPerPoint);

  if (point < maxPoints) return `Points ${point}`;
  else return "License suspended";
}
