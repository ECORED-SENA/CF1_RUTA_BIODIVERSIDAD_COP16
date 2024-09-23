<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.   

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-5.brad
        figure
          img.img-a.img-t(data-aos="zoom-in")(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta la Introducción a la COP16 y la biodiversidad. Se menciona la COP16 como la reunión internacional sobre biodiversidad. Los temas clave son: ejes temáticos como delitos ambientales y gestión territorial, el Marco de Biodiversidad Kunming-Montreal, innovación en biodiversidad con uso de tecnología, compromisos de Colombia, niveles de biodiversidad (genes, especies, ecosistemas) y los retos para reducir amenazas y fortalecer la conservación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
