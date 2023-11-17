<template>
    <section class="py-10 md:py-20">
      <div class="px-16">
        <div class="bg-slate-800 p-6 md:p-10 rounded-xl space-y-6 text-center">
          <Icon name="heroicons:question-mark-circle" size="5em" class="text-white" />
          <p>
            Apakah Anda kesulitan untuk menggunakan InsightHub?
          </p>
          <p>
            Jangan khawatir, kami
            telah menyiapkan beberapa pertanyaan yang sering ditanyakan oleh pengguna
            dihalaman FAQ. Anda juga bisa melihat halaman Dokumentasi untuk
            mempelajari lebih lanjut tentang InsightHub.
          </p>
          <div class="flex justify-center gap-4">
            <NuxtLink to="/faq" class="px-4 h-9 md:px-6 md:h-11 flex whitespace-nowrap items-center text-sm rounded-lg bg-white hover:bg-sky-400 transition text-slate-900 font-semibold">Lihat FAQ</NuxtLink>
            <NuxtLink to="/dokumentasi" class="px-4 h-9 md:px-6 md:h-11 flex whitespace-nowrap items-center text-sm rounded-lg  transition text-white hover:bg-white hover:text-slate-900 font-semibold border border-slate-600">Lihat Dokumentasi</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </template>