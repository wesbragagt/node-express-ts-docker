/**
 * Takes the context object and returns an array of routes
 * @param context All *.schema.ts files imported using webpack require.context
 */
export const importAllRoutes = context =>
  context.keys().map(key => context(key).default)