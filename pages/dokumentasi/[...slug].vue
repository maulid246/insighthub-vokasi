<template>
    <section class="px-16 py-10">
      <ContentDoc>
        <template v-slot="{ doc }">
          <h1 class="text-3xl font-semibold mb-4 text-white">{{ doc.title }}</h1>
          <span class="flex items-center gap-2">
            <Icon name="heroicons:calendar" size="1.2em" class="text-slate-400" />
            <span class="text-slate-400">{{ doc.date }}</span>
          </span>
          <div class="prose text-slate-400">
            <ContentRenderer :value="doc" />
          </div>
        </template>
        <template #not-found>
          Dokumentasi tidak ditemukan
        </template>
      </ContentDoc>
    </section>
  </template>
  
  <script setup lang="ts">
  const { path } = useRoute();
  const { data } = await useAsyncData(`content-${path}`, async () => {
    let article = queryContent('/dokumentasi').where({ _path: path }).findOne();
    return await article
  })
  
  useHead({
    title: data.value?.title
  })
  </script>