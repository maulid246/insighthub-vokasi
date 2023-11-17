<template>
    <div id="tentang" class="pt-10 md:pt-20">
      <div class="px-16 space-y-12">
        <div class="text-center">
          <h1 class="text-white text-xl md:text-2xl font-bold">Tentang InsightHub</h1>
          <p class="max-w-2xl mx-auto">Sebuah aplikasi survei kepuasan yang dapat digunakan oleh civitas akademika fakultas Vokasi untuk mengukur kepuasan mahasiswa, tenaga kependidikan, dan dosen fakultas Vokasi Universitas Brawijaya.</p>
        </div>
        <div class="flex gap-8 md:gap-10 md:flex-row flex-col-reverse">
          <div class="w-full md:w-2/3 space-y-4">
            <div v-for="(item, index) in items" :key="index" class="p-4 rounded space-y-2 border border-slate-800 hover:bg-slate-800 transition">
              <h2 class="text-lg md:text-xl text-white font-bold">{{ item.title }}</h2>
              <p>{{ item.description }}</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 space-y-4">
            <img src="~/assets/images/preview.png" alt="Preview" class="rounded-lg shadow-lg" />
            
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const items = [
    {
      title: 'Mengukur Kepuasan Mahasiswa',
      description: 'Memungkinkan mahasiswa memberikan umpan balik terkait pengalaman akademik, dengan analisis hasil survei untuk perbaikan layanan pendidikan dan lingkungan kampus. Tujuannya adalah meningkatkan kualitas pendidikan, termasuk kurikulum, fasilitas, dan dukungan mahasiswa.'
    },
    {
      title: 'Mengukur Kepuasan Tenaga Kependidikan',
      description: 'Survei khusus untuk mengevaluasi kinerja dan sistem pelayanan tenaga kependidikan, mendeteksi masalah yang perlu diperbaiki untuk menjaga hubungan positif di lingkungan kerja.'
    },
    {
      title: 'Mengukur Kepuasan Dosen',
      description: 'Mekanisme survei khusus untuk evaluasi kualitas lulusan dan kolaborasi dengan mitra industri. Hasil survei digunakan untuk meningkatkan kualitas kurikulum dan pelatihan yang relevan bagi civitas akademik.'
    }
  ]
  </script>