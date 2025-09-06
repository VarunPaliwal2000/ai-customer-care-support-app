import { mutation, query } from "./_generated/server";

export const getMay = query({
  args: {},
  handler: async (ctx) => {
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

export const addUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    const orgId = identity?.orgId as string;
    if (identity === null) {
      throw new Error("Not authenticated");
    }
    if (!orgId) {
      throw new Error("Organization ID is missing");
    }
    const userId = await ctx.db.insert("users", { name: "May" });
    return userId;
  },
});
