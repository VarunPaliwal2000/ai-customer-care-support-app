"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Provider } from "jotai";
import * as React from "react";

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
if (!convexUrl) {
  throw new Error("Missing NEXT_PUBLIC_CONVEX_URL for Convex client.");
}
const convex = new ConvexReactClient(convexUrl);
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <Provider>{children}</Provider>
    </ConvexProvider>
  );
}
