import { atom } from "jotai";
import { WidgetScreen } from "../types";

export const screenAtom = atom<WidgetScreen>("auth"); // Possible values: 'loading', 'chat', 'feedback', 'closed'
