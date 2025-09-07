"use client";

import { useAtomValue } from "jotai";
import { screenAtom } from "../../atoms/widget-atoms";
import { WidgetAuthScreen } from "../screens/widget-auth-screen";

interface Props {
  organizationId?: string;
}

export const WidgetView = ({ organizationId }: Props) => {
  const screen = useAtomValue(screenAtom);
  const screenComponents = {
    error: <p>TODO: ERROR</p>,
    loading: <p>TODO: LOADING</p>,
    chat: <p>TODO: CHAT</p>,
    selection: <p>TODO: SELECTION</p>,
    voice: <p>TODO: VOICE</p>,
    auth: <WidgetAuthScreen />,
    inbox: <p>TODO: INBOX</p>,
    contact: <p>TODO: CONTACT</p>,
  };
  return (
    <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl border bg-muted">
      {screenComponents[screen]}
    </main>
  );
};
