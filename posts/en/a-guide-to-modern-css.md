---
title: A Guide to Modern CSS with Tailwind
author: John Smith
date: 2024-07-18
tags: CSS, Tailwind, Design
readingTime: 5
excerpt: Explore the utility-first approach of Tailwind CSS and learn how it can speed up your development process and help you build consistent, responsive designs.
---

### What is Utility-First CSS?

Unlike traditional CSS frameworks like Bootstrap that provide pre-styled components, Tailwind CSS provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.

### The Core Concepts

- **Utility Classes:** Each class has a single purpose, like `p-4` for padding or `text-lg` for large text.
- **Responsive Design:** Use prefixes like `md:` or `lg:` to apply styles at different breakpoints. `md:flex` applies `display: flex` on medium screens and up.
- **State Variants:** Use prefixes for states like `hover:`, `focus:`, and `active:` to style elements based on user interaction.

### Example: Building a Card Component

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <img class="w-full" src="https://picsum.photos/400/200" alt="Sunset in the mountains">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
  </div>
</div>
```

This approach keeps your styles co-located with your markup, which can significantly improve developer experience on large projects.
