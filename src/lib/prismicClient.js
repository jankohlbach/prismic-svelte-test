import * as prismic from '@prismicio/client'

const repoName = `prismic-svelte-test` // Fill in your repository name
const accessToken = `` // If your repo is private, add an access token
const endpoint = prismic.getEndpoint(repoName)

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
  {
    type: 'home',
    path: '/',
  },
  {
    type: 'beaches',
    path: '/:uid',
  },
]

const createClient = (fetch) => {
  const clientOptions = {
    fetch,
    accessToken,
    routes,
  }
  const client = prismic.createClient(endpoint, clientOptions)
  return client
}

export default createClient
