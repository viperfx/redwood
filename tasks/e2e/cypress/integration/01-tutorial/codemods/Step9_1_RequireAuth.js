export default `
/**
 * Once you are ready to add authentication to your application
 * you'll build out requireAuth() with real functionality. For
 * now we just return true so that the beforeResolver() calls
 * in services have something to check against, simulating a logged
 * in user that is allowed to access that service.
 *
 * See https://redwoodjs.com/docs/authentication for more info.
 */

import { ForbiddenError } from '@redwoodjs/graphql-server'

export const requireAuth = () => {
  throw new ForbiddenError("I'm sorry, Dave. I'm afraid I can't do that.")
}
`
