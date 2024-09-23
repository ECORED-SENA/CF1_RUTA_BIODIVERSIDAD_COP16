<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Retos y oportunidades en Colombia

    .row.bg11.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center.mb-4
              .col.my-3.order-1 
                p(data-aos="fade-down").mb-0 Recordando que el Marco Global de Biodiversidad Kunming-Montreal (MGB) es un acuerdo internacional que se originó en las conferencias de la Convención sobre la Diversidad Biológica (CDB), llevadas a cabo en Kunming, China, y Montreal, Canadá, en el 2022. Este acuerdo tiene como propósito la protección de la diversidad biológica y busca lograr un equilibrio entre la conservación del entorno natural y el desarrollo sostenible.                    
              .col-lg-auto.my-3.order-lg-2            
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.png', alt='') 
            .row.justify-content-center.mb-4
              .col-lg-5.my-3        
                img.img-a.img-t.brad1(data-aos="zoom-in")(src='@/assets/curso/temas/68.png', alt='')       
              .col-lg-7.my-3
                .bg2.p-3.brad.h-100.j1 
                  .row.justify-content-center.align-items-center(data-aos="fade-left")
                    .col-lg-auto        
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/69.png', alt='')                 
                    .col.p-0.pt-md-4.pt-lg-0
                      p(data-aos="fade-down").mb-0 El MGB establece un plan de acción para el 2030, que incluye 23 metas diseñadas para alcanzar cuatro grandes objetivos en 2050. Dichas metas se organizan en tres retos principales, y promueven la participación activa, la buena gobernanza y el carácter público y colectivo de las decisiones relacionadas con la biodiversidad, adoptando un enfoque socioecológico. 

                                          


</template>

<script>
import TarjetaAudioPersonalizada from '@/components/TarjetaAudioPersonalizada.vue'
export default {
  name: 'Tema1',
  components: {
    TarjetaAudioPersonalizada,
  },
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
