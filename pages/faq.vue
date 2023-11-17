<template>
    <section class="px-16 py-10 space-y-10">
      <div>
        <h1 class="text-4xl font-bold text-white">FAQ</h1>
        <p class="text-base md:text-lg max-w-2xl">
          Beberapa pertanyaan yang sering ditanyakan oleh pengguna. Jika Anda tidak menemukan jawaban yang Anda cari, silakan hubungi tim dukungan kami di <NuxtLink  class="text-white hover:text-sky-400" href="mailto:support@insighthub.com"> support@insighthub.com</NuxtLink>.
        </p>
      </div>
      <div class="space-y-4">
        <div 
          v-for="(item, index) in items"
          :key="index"
          class="rounded-lg shadow-md p-6 border border-slate-800 cursor-pointer hover:bg-slate-800 transition select-none" 
          @click="openedIndexFaq = openedIndexFaq === index ? null : index"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-lg font-bold text-white">{{ item.question }}</h3>
            <button class="focus:outline-none">
              <Icon
                :name="openedIndexFaq === index ? 'heroicons:chevron-up' : 'heroicons:chevron-down'"
                
                size="1.5em"
              />
            </button>
          </div>
          <p v-if="openedIndexFaq === index" class="mt-4">{{ item.answer }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: 'FAQ'
  })
  const openedIndexFaq = ref<number | null>(null)
  const items = [
    {
      "question": "Bagaimana cara saya mengakses InsightHub?",
      "answer": "Anda dapat mengakses InsightHub melalui situs web resmi kami di [alamat website]."
    },
    {
      "question": "Apakah InsightHub dapat diakses melalui perangkat seluler?",
      "answer": "Ya, InsightHub dirancang agar dapat diakses dengan mudah melalui berbagai perangkat, termasuk perangkat seluler."
    },
    {
      "question": "Bagaimana cara saya membuat survei baru?",
      "answer": "Setelah masuk ke akun Anda, navigasi ke bagian \"Buat Survei\" dan ikuti langkah-langkah yang ditampilkan untuk membuat survei baru."
    },
    {
      "question": "Apakah survei saya dapat diedit setelah dipublikasikan?",
      "answer": "Ya, Anda dapat mengedit survei setelah dipublikasikan. Namun, perubahan tersebut mungkin mempengaruhi data yang sudah terkumpul."
    },
    {
      "question": "Berapa lama waktu yang diperlukan untuk melihat hasil survei?",
      "answer": "Hasil survei akan tersedia secara real-time setelah responden mulai mengisi. Anda dapat memantau dan menganalisis data kapan saja."
    },
    {
      "question": "Apakah InsightHub memiliki dukungan pelanggan?",
      "answer": "Ya, kami menyediakan dukungan pelanggan. Silakan hubungi tim dukungan kami di [email atau nomor telepon] untuk bantuan lebih lanjut."
    },
    {
      "question": "Bagaimana cara menjaga keamanan data survei saya?",
      "answer": "InsightHub melibatkan langkah-langkah keamanan yang ketat. Kami melindungi data survei sesuai dengan regulasi privasi yang berlaku."
    },
    {
      "question": "Apakah ada batasan jumlah responden untuk satu survei?",
      "answer": "Tidak ada batasan jumlah responden untuk satu survei di InsightHub."
    },
    {
      "question": "Bagaimana cara berhenti berlangganan layanan InsightHub?",
      "answer": "Anda dapat membatalkan langganan dengan masuk ke akun Anda dan mengikuti petunjuk pembatalan di pengaturan langganan."
    },
    {
      "question": "Apakah InsightHub mendukung integrasi dengan aplikasi lain?",
      "answer": "Ya, InsightHub mendukung integrasi dengan beberapa aplikasi populer untuk memfasilitasi analisis data dan manajemen informasi. Silakan lihat dokumentasi kami untuk informasi lebih lanjut."
    }
  ]
  </script>