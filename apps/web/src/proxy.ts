import { clerkMiddleware } from "@clerk/nextjs/server";

const clerkHandler = clerkMiddleware();

export function proxy(
  request: Parameters<typeof clerkHandler>[0],
  event: Parameters<typeof clerkHandler>[1]
) {
  return clerkHandler(request, event);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};