<script context="module">
  import createClient from '$lib/prismicClient.js'
  import * as prismicH from '@prismicio/helpers'

  export async function load({ url, params, fetch })  {
    const { uid } = params
    const client = createClient(fetch)
    const document = await client.getByUID('beaches', uid)

    return {
      props: {
        document
      }
    }
  }
</script>

<script>
  export let document
</script>

{@html prismicH.asHTML(document.data.title)}

<a href="/">back to home</a>

<img src="{document.data.image.url}" alt="">

<pre>
  {JSON.stringify(document, null, 2)}
</pre>
