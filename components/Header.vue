<!-- Header component, include brand on the left and others menu on the right, I'm using Nuxtjs 3-->
<template>
  <header class="py-4 border-b border-slate-800">
    <div class="px-16 flex items-center justify-between ">
      <NuxtLink to="/" class="font-bold text-white hover:text-sky-600 transition">InsightHub</NuxtLink>
      <nav class="hidden md:flex items-center gap-10 text-sm">
        <NuxtLink to="/#tentang" class="hover:text-white transition">Tentang</NuxtLink>
        <NuxtLink to="/#fitur" class="hover:text-white transition">Fitur</NuxtLink>
        <NuxtLink to="/faq" class="hover:text-white transition">FAQ</NuxtLink>
        <NuxtLink to="/dokumentasi" class="hover:text-white transition">Dokumentasi</NuxtLink>
        <NuxtLink to="#" class="px-6 py-2 rounded-lg bg-sky-600 hover:bg-sky-400 transition text-white font-semibold">Isi Survei</NuxtLink>
      </nav>
      <button class="md:hidden">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </header>
</template>