<script>
  import createClient from "$lib/prismicClient"
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"

  onMount(async () => {
    const client = createClient()
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token")
    const documentId = urlParams.get("documentId")
    const redirect = await client.resolvePreviewURL({defaultURL: "/"})
    await goto(redirect) // This does a client-side redirect to that URL
  })
</script>
