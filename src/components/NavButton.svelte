<script>
    let { title, label, slug } = $props()
</script>

<a class="rounded p-4" href={slug}>
    <p>{label}</p>
    <h4 class="text-xl font-bold">{title}</h4>
</a>

<style>
    a {
        color: var(--color-base-content);
        border: 1px solid var(--color-border);
        transition: all 0.3s ease-in-out;
    }

    a:hover {
        background-color: var(--color-base-200);
        border: 1px solid var(--color-base-200);
    }

    a:active {
        background-color: var(--color-base-300);
        border: 1px solid var(--color-base-300);
    }
</style>