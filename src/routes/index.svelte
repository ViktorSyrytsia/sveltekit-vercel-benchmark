<script lang="ts">
  import { set_svg_attributes } from "svelte/internal";

  // @ts-nocheck
  export let businesses;
  export let start: number;
</script>

<h1>Welcome to {Date.now() - start}ms</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
