<script context="module">
  import createClient from '$lib/prismicClient';
  import * as prismicH from '@prismicio/helpers'

  export async function load({ url, params, fetch })  {
    const client = createClient(fetch)
    const response = await client.getByType('home')
    const entries = await client.getAllByType('beaches')

    return {
      props: {
        document: response.results[0],
        entries,
      }
    }
  }
</script>

<script>
  export let document, entries
</script>

{@html prismicH.asHTML(document.data.headline)}

<ul>
	{#each entries as entry}
    <li>
      <a href="{entry.url}">{entry.data.title[0].text}</a>
    </li>
	{/each}
</ul>

<pre>
  {JSON.stringify(document, null, 2)}
</pre>
