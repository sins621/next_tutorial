// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://259f8627496d28035387fa117b596085@o4509372595568640.ingest.de.sentry.io/4509372603301968",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
