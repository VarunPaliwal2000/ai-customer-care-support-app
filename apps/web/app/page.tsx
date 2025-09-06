"use client";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";
export default function Page() {
  const users = useQuery(api.user.getMay);
  const addUser = useMutation(api.user.addUser);

  return (
    <div className="flex items-center justify-center min-h-svh">
      <Button onClick={() => addUser()}> ADD </Button>
      <p>app/web</p>
      {JSON.stringify(users)}
    </div>
  );
}
