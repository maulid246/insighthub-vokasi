<template>
    <div id="fitur" class="pt-10 md:pt-20">
      <div class="px-16 space-y-12">
        <div class="text-center">
          <h1 class="text-white text-xl md:text-2xl font-bold">Fitur</h1>
          <p class="max-w-2xl mx-auto">
            Fitur-fitur yang membuat InsightHub menjadi platform survei yang tepat untuk kebutuhan Anda.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="(item, index) in items" :key="index" class="p-4 rounded space-y-2 border border-slate-800 hover:bg-slate-800 transition text-center">
            <Icon :name="item.icon" size="3em" class="text-white" />
            <h2 class="text-lg md:text-xl text-white font-bold">{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const items = [
    {
      icon: 'heroicons:academic-cap',
      title: 'Modul Survei Mahasiswa',
      description: 'Pengembangan survei khusus untuk evaluasi pengalaman akademik mahasiswa dan peningkatan kualitas pendidikan.'
    },
    {
      icon: 'heroicons:users',
      title: 'Survei Kepuasan Tenaga Kependidikan',
      description: 'Survei khusus untuk evaluasi kinerja tenaga kependidikan dan pemeliharaan hubungan positif dengan lingkungan kerja.'
    },
    {
      icon: 'heroicons:user-group',
      title: 'Mekanisme Survei Kepuasan Dosen',
      description: 'Mekanisme survei khusus untuk evaluasi kualitas lulusan dan kolaborasi dengan industri, memandu perbaikan kurikulum dan pelatihan.'
    },
    {
      icon: 'heroicons:rocket-launch',
      title: 'Integrasi Data dan Analisis Canggih',
      description: 'Integrasi data survei dalam sistem terpusat untuk pengambilan keputusan yang lebih baik dan analisis data canggih.'
    },
    {
      icon: 'heroicons:star',
      title: 'Aplikasi User-Friendly',
      description: 'Aplikasi survei mudah digunakan di semua platform dengan pembaruan berkelanjutan berdasarkan umpan balik.'
    },
    {
      icon: 'heroicons:lock-closed',
      title: 'Keamanan Data dan Kepatuhan Privasi',
      description: 'Perlindungan ketat terhadap data survei dengan audit keamanan rutin untuk mematuhi regulasi privasi dan menjaga integritas data.'
    }
  ]
  </script>