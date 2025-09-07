"use client";
import { OrganizationSwitcher, SignInButton, UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";

export default function Page() {
  const users = useQuery(api.user.getMay);
  const addUser = useMutation(api.user.addUser);

  return (
    <div>
      <UserButton />
      <OrganizationSwitcher hidePersonal />
      <Button onClick={() => addUser()}> ADD </Button>
      <p>app/web</p>
      {/* {JSON.stringify(users)} */}
    </div>
  );
}
