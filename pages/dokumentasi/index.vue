<template>
    <section class="px-16 py-10">
      <h1 class="text-4xl font-bold text-white">Dokumentasi</h1>
      <p class="text-base md:text-lg max-w-3xl">Dokumentasi untuk menggunakan InsightHub. Anda dapat mempelajari cara menggunakan InsightHub dengan melihat dokumentasi yang telah kami sediakan.</p>
      <ContentList path="/dokumentasi" v-slot="{ list }">
        <div class="flex flex-col py-10 gap-6">
          <NuxtLink
            v-for="article in list"
            :key="article._path"
            :to="article._path"
            
          >
            <h2 class="text-white text-lg hover:text-sky-400 transition">{{ article.title }}</h2>
            <span class="text-xs flex items-center gap-2">
              <Icon name="heroicons:calendar" size="1.2em" class="text-slate-400" />
              <span class="text-slate-400">{{ article.date }}</span>
            </span>
          </NuxtLink>
        </div>
      </ContentList>
    </section>
  </template>