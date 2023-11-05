"use client";

import React, { useRef } from "react";
import store from "../store/store";
import { setContentAll } from "../features/contentSlice";

//
interface Props {
  data: any;
}
export default function PreLoaded({ data }: Props) {
  const loaded = useRef(false);
  if (!loaded.current) {
    store.dispatch(setContentAll(data));
    loaded.current = true;
  }
  return null;
}
