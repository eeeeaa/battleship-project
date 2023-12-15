import { delayWrapper } from "../util/util";

const pushQueue = [];

export function pushToEventLog(message) {
  const eventLog = document.querySelector(".event-log");

  const event = document.createElement("div");
  event.classList.toggle("event");
  event.textContent = message;

  pushQueue.push(event);
  showNotification(eventLog);
}

async function showNotification(eventLog) {
  const event = pushQueue.shift();
  eventLog.append(event);
  eventLog.scrollTo(0, eventLog.scrollHeight);
  await delayWrapper(100);
}
