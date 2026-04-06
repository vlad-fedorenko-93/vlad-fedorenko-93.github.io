<script>
    let { title, slug, description, date, children } = $props();
    import DateFormater from "./DateFormater.svelte";
</script>

<a class="card min-h-40 flex items-center p-8" href={slug}>
    <div class="title p-6 w-full">
        <DateFormater className="mb-4 text-[var(--color-base-content-muted)]" date={date} />
        <h4 class="text-4xl font-bold mb-4">{title}</h4>
        <p class="text-lg">{description}</p>
    </div>
    <div class="thumbnail">
        {@render children()}
    </div>
</a>

<style>
    h4 {
        color: var(--color-base-content);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
    }

    p {
        color: var(--color-base-content-muted);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    a {
        transition: all 0.3s ease-in-out;
    }

    a:hover {
        background-color: oklch(from var(--color-base-100) calc(l - 0.05) c h);
        z-index: 1;
        border-radius: 12px;
    }

    .thumbnail {
        width: 500px;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 8px;
        scale: 1;
        transition: all 0.3s ease-in-out;
    }

    @media (max-width: 900px) {
        .card {
            flex-direction: column;
            gap: 2rem;
            padding: 0;
            margin: 2rem 0;
        }

        .card .title {
            padding: 0;
        }

        .card .thumbnail {
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }
</style>