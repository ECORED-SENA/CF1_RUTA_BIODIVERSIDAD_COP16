<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bg1.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center.mb-4
              .col.my-3.order-1 
                p(data-aos="fade-down").mb-0 La Conferencia de las Partes (COP) sobre biodiversidad es el evento más importante a nivel global para discutir y tomar decisiones sobre la conservación de la diversidad biológica. En su edición número 16, que se llevará a cabo en Colombia, se reunirán 196 países con el fin de establecer compromisos y acciones conjuntas para mitigar la crisis ambiental actual.                      
              .col-lg-auto.my-3.order-lg-2            
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/88.png', alt='')      

            .row.justify-content-center.align-items-center.mb-4
              .col-lg-5.my-3        
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/89.png', alt='')                 
              .col-lg-7.my-3
                .row.justify-content-center.align-items-center.bg2.p-3.brad.mb-4(data-aos="fade-left")
                  .col-lg-auto        
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/90.png', alt='')                 
                  .col.p-0.pt-md-4.pt-lg-0
                    p(data-aos="fade-down").mb-0 Colombia, reconocida por su riqueza natural, tendrá la oportunidad de destacar sus esfuerzos en la protección de ecosistemas y liderar importantes discusiones. Los ejes temáticos de la COP16 incluyen la lucha contra los delitos ambientales, la gestión intersectorial de territorios y la transformación productiva basada en la naturaleza, temas fundamentales en la agenda global de sostenibilidad.

                .row.justify-content-center.align-items-center.mb-4
                  .col-lg-auto.d-none.d-lg-block          
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/91.png', alt='')                 
                  .col.p-0.pt-md-4.pt-lg-0
                    p(data-aos="fade-down").mb-0 A través de un enfoque en la innovación tecnológica, como el monitoreo satelital y la bioprospección, se busca mejorar la gestión de la biodiversidad. Además, la participación ciudadana y los compromisos internacionales desempeñarán un rol crucial para alcanzar las metas de conservación planteadas para 2030, asegurando un futuro más sostenible para todos.    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
