"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

const getClientDate = () =>
  new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

const getServerDate = () => "";

export default function TodayDate() {
  const today = useSyncExternalStore(subscribe, getClientDate, getServerDate);

  return <span>{today}</span>;
}
