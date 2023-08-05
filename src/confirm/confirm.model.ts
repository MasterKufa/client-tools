import { createEvent, createStore, sample } from "effector";
import { PayloadType } from "./types";

export const $currentConfirm = createStore<PayloadType | null>(null);

export const show = createEvent<PayloadType>();
export const close = createEvent();

sample({
  clock: show,
  target: $currentConfirm,
});

$currentConfirm.reset(close);
