import HeaderButton from "./HeaderButton.astro";

<Fragment>
<header class="py-8 px-4 mx-auto max-w-xl lg:py-16 lg:px-6">
<div class="mx-auto text-center mb-8 lg:mb-16">
<h2 class="mb-4 text-5xl tracking-tight font-extrabold text-white">
SpaceX Launches
</h2>
<p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
All the information about SpaceX launches
</p>
</div>

<nav class="flex flex-col items-center justify-between w-full text-center md:flex-row">
<HeaderButton class="text-white" href="/">
<svg slot="before" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" {...{ "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }}>
<path stroke="none" d="M0 0h24v24H0z" fill="none" />
<path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3" /><path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3" /><path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
</svg>
Last Launches
</HeaderButton>
<HeaderButton class="text-white" href="/about">
<svg slot="before" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" {...{ "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }}>
<path stroke="none" d="M0 0h24v24H0z" fill="none" />
<path d="M12.802 2.165l5.575 2.389c.48 .206 .863 .589 1.07 1.07l2.388 5.574c.22 .512 .22 1.092 0 1.604l-2.389 5.575c-.206 .48 -.589 .863 -1.07 1.07l-5.574 2.388c-.512 .22 -1.092 .22 -1.604 0l-5.575 -2.389a2.036 2.036 0 0 1 -1.07 -1.07l-2.388 -5.574a2.036 2.036 0 0 1 0 -1.604l2.389 -5.575c.206 -.48 .589 -.863 1.07 -1.07l5.574 -2.388a2.036 2.036 0 0 1 1.604 0z" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>

About the project
</HeaderButton>
<HeaderButton class="text-white" href="/oldest">
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hourglass-low" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" {...{ "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }}>
<path stroke="none" d="M0 0h24v24H0z" fill="none" />
<path d="M6.5 17h11" />
<path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" /><path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
</svg>
Oldest Launches
</HeaderButton>
</nav>
</header>
</Fragment>;
