function takeANumber(line, name) {
  return `Welcome, ${name}. You are ${line.length} in line.`
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served";
  } else {
    return katzDeliLine.shift();
  }
}