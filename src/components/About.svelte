<section class="bg-[var(--color-base-100)]">
    <div class="w-3/4 m-auto grid grid-cols-2 gap-8 content py-40">
        <div class="flex flex-col justify-center items-center">
            <h1 class="mb-8 text-5xl text-[var(--color-base-content)]">
                I'm a Front-end Developer with UI/UX Designer background.
                Passionate to create interactive digital products.
            </h1>
            <p class="text-xl mb-4 text-[var(--color-base-content-muted)]">
                With 7+ years of my career path, I have been involved with
                crafting digital experiences that captivate and engage. During
                my work process I focus on motion design, visual aesthetic and
                and usability.
            </p>
            <p class="text-xl text-[var(--color-base-content-muted)]">
                I genuinely relish bringing ideas to life, transforming them
                into bespoke, user-friendly and stunning websites.
            </p>
        </div>
        <div class="p-8 bg-[var(--color-base-200)] rounded-lg">
            <h3 class="text-3xl mb-6 text-[var(--color-base-content)]">
                My Services include
            </h3>
            <h4 class="text-xl mb-2 text-[var(--color-base-content)]">
                UI/UX Design
            </h4>
            <p class="text-lg text-[var(--color-base-content-muted)]">
                Designing intuitive interfaces and user journeys focused on
                clarity, usability, and visual consistency — from wireframes to
                polished UI and design systems.
            </p>
            <hr class="my-4" />
            <h4 class="text-xl mb-2 text-[var(--color-base-content)]">
                Front-end Development
            </h4>
            <p class="text-lg text-[var(--color-base-content-muted)]">
                Building responsive, accessible, and performant websites using
                clean, maintainable code that brings designs to life in the
                browser.
            </p>
            <hr class="my-4" />
            <h4 class="text-xl mb-2 text-[var(--color-base-content)]">
                Motion Design
            </h4>
            <p class="text-lg text-[var(--color-base-content-muted)]">
                Enhancing user experience through purposeful animations using
                CSS and GSAP — adding feedback, rhythm, and personality to
                digital products.
            </p>
        </div>
    </div>
</section>

<style>
    h1 {
        line-height: 1.1;
        text-wrap: balance;
    }

    hr {
        border-color: var(--color-border);
    }

    @media (max-width: 900px) {
        .content {
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr;
        }

        .content div h1 {
            font-size: 2.5rem;
        }
    }
</style>
