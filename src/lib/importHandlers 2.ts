/**
 * Takes the context object and returns an array of routes
 * @param context All *.routes.ts files imported using webpack require.context
 */
export const importHandlers = context =>
  context.keys().map(key => context(key).default)
