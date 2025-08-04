<template>
  <div class="flex flex-col gap-32 leading-loose">
    <div class="grid grid-cols-2 gap-8 items-center">
      <div class="flex flex-col gap-8">
        <p>
          Namaku <strong>Shabiq Ghazi Arkaan</strong>. Aku lahir dan tumbuh di
          Indonesia, dalam lingkungan yang penuh tantangan sekaligus pelajaran
          hidup. Sejak kecil, aku suka mengamati dengan tenang dan mencoba
          melihat hal-hal kecil yang sering luput dari perhatian banyak orang.
          Aku bukan orang yang cepat merasa nyaman di tengah keramaian, tapi aku
          selalu berusaha hadir dengan tulus untuk orang-orang di sekitarku.
        </p>
        <p>
          <strong>Belajar dan memahami banyak hal</strong> sudah jadi bagian
          dari hobiku. Saat kuliah dulu, aku belajar teknologi, tapi juga banyak
          belajar tentang <strong>nilai kemanusiaan dan prinsip hidup</strong>.
          Aku pernah memegang tanggung jawab di kampus, meski sering merasa
          belum cukup percaya diri. Dari situ aku belajar bahwa
          <strong>
            keberanian itu bukan berarti tanpa takut, tapi terus melangkah
            walaupun takut itu ada.
          </strong>
        </p>
      </div>
      <img :src="homeAbout" class="w-full aspect-[3/2] object-cover" alt="" />
    </div>

    <div class="grid grid-cols-2 gap-8 items-center">
      <img :src="wisuda" class="" alt="" />
      <div class="flex flex-col gap-8">
        <p>
          Sambil berkenalan dengan orang-orang dari berbagai latar belakang, aku
          <strong>belajar menjaga sikap dan berusaha tidak menghakimi</strong>.
          Aku ingin bisa berteman dengan siapa saja, sambil
          <strong>tetap memegang nilai-nilai yang penting bagi diriku.</strong>
        </p>

        <p>
          Bagi aku, proses belajar ini
          <strong>bukan sebuah beban atau tujuan besar</strong>, tapi lebih
          <strong>seperti hobi yang terus kujalani</strong>. Aku ingin terus
          belajar dan memperkaya diri dengan cara yang sederhana dan ikhlas,
          meski ada tantangan kecil di sepanjang jalan.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import wisuda from "~/assets/images/wisuda.jpg";
import homeAbout from "~/assets/images/home-about.jpeg";
</script>

<style></style>
