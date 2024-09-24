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

            .bgpod.p-4.borde-8.mb-4(data-aos="fade-up")
              .row.align-items-center 
                .col-lg-auto
                  img.img-a.img-t(src="@/assets/curso/temas/icon_pod.png")
                .col.p-0.pt-md-4
                  p.fw-bold.mb-2.t2(style="font-size: 20px;") Pódcast
                  p.mb-3.text-white Se extiende una cordial invitación a escuchar el pódcast La aventura de la flor del Inírida en la COP16, acá se destaca la riqueza natural de Colombia y su papel en la protección de la biodiversidad en el marco de la COP16. A través de los personajes de Asusena y Don Campos, se explora cómo el país enfrenta desafíos globales como el cambio climático, la deforestación y la contaminación, todo con un enfoque poético y educativo.
                  .row
                    .col-auto
                      TarjetaAudio.color-primario.tarjeta-audio-p-1.mb-3(
                        texto="La aventura de la flor del Inírida en la COP16"
                        :audio="require('@/assets/componentes/audios/Capitulo_4.mp3')"
                        )   

            Separador 
            #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
              h2 3.1 Reto 1. Reducir las amenazas a la biodiversidad  

            p(data-aos="fade-down") Las metas en las que se agrupa el reto son: 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Meta 4

    p(data-aos="fade-down") Detener la extinción de especies, proteger la diversidad genética y gestionar los conflictos entre los seres humanos y las especies silvestres.


    .row.justify-content-center
      .col-lg-3.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/70.png', alt='')     
      .col-lg-9.my-3 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg17")
          div(titulo="Desafíos")
            ul.lista-ul.fa-ul          
              li 
                i.fas.fa-feather-alt.t5
                span Emplear herramientas tecnológicas para promover información y registro de información en tiempo real, a fin de fortalecer las acciones sobre las especies amenazadas.
              li 
                i.fas.fa-feather-alt.t5
                span Los procesos para conservar mamíferos acuáticos, como la ballena jorobada en las aguas del Pacífico, los delfines de río y las tortugas marinas.
              li 
                i.fas.fa-feather-alt.t5
                span Fortalecimiento de iniciativas de monitoreo comunitario. 
          div(titulo="Regulación de la calidad del aire")
            ul.lista-ul.fa-ul          
              li 
                i.fas.fa-feather-alt.t5
                span Generar información y consolidar las ideas existentes, de manera eficiente y colaborativa, sobre la situación de las poblaciones de especies silvestres.
              li 
                i.fas.fa-feather-alt.t5
                span Lograr planes de acción para la gestión integrada y la resolución de conflictos entre los seres humanos y las especies silvestres.
              li 
                i.fas.fa-feather-alt.t5
                span Contar con una legislación clara y eficaz para frenar el comercio de especies amenazadas y prevenir los conflictos, junto con la cooperación interinstitucional.
              li 
                i.fas.fa-feather-alt.t5
                span Promover la diversidad de enfoques en la implementación de políticas, que sean apropiados para las condiciones específicas de las áreas de conservación. 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Meta 5

    p(data-aos="fade-down") Garantizar que la recolección y el comercio de especies silvestres sean sostenibles, seguros y lícitos. 
    TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-4.py-md-5(titulo="Oportunidades" :icono="require('@/assets/curso/temas/71.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 Oportunidades 
            ul.lista-ul.fa-ul          
              li 
                i.fas.fa-feather-alt.t5
                span Fortalecer procesos internacionales orientados a especies como las ballenas en el Pacífico, delfines de río en la Amazonía y otras especies amenazadas.
              li 
                i.fas.fa-feather-alt.t5
                span Incorporar criterios en los Certificados de Aprovechamiento de Fauna (CAF), el uso de buenas prácticas, así como el manejo adecuado en el comercio legal de estas especies.
              li 
                i.fas.fa-feather-alt.t5
                span Participación activa de las comunidades locales y fortalecimiento de iniciativas comunitarias en el manejo y conservación de especies silvestres.                                                    
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/80.png', alt='')    

      .py-4.py-md-5(titulo="Desafíos" :icono="require('@/assets/curso/temas/72.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 Desafíos 
            ul.lista-ul.fa-ul          
              li 
                i.fas.fa-feather-alt.t5
                span Fortalecer los mecanismos de control para evitar el comercio ilegal de especies silvestres.
              li 
                i.fas.fa-feather-alt.t5
                span Generar un registro automatizado y actualizado sobre la información de quienes actúan contra las especies.                                                    
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/81.png', alt='')    

    Separador 
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.2 Reto 2. Satisfacer las necesidades de las personas 

    p(data-aos="fade-down") Las metas en las que se agrupa el reto son: 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Meta 10

    p(data-aos="fade-down").mb-5 Mejorar la biodiversidad y la sostenibilidad en la agricultura, la acuicultura, la pesca y la silvicultura.

    TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Oportunidades")
        .row.justify-content-center
          .col-lg-7.my-3
            h5.mb-4 Oportunidades 
            ul.lista-ul.fa-ul          
              li 
                i.fas.fa-feather-alt.t5
                span Diversificar acciones transformadoras que contemplen los factores sociales en estas actividades.
              li 
                i.fas.fa-feather-alt.t5
                span Desarrollar normativas sobre actividades extractivas, como la Ley de Agroecología (PL 0075 de 2022).                    
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/82.png', alt='')     

      .tarjeta.color-acento-botones--borde.p-4(titulo="Desafíos")
        .row.justify-content-center
          .col-lg-7.my-3
            h5.mb-4 Desafíos
            ul.lista-ul.fa-ul          
              li 
                i.fas.fa-feather-alt.t5
                span Mejorar la gobernanza en territorios que se comprometan con la implementación de la sostenibilidad en la pesca, la acuicultura y la agricultura.
              li 
                i.fas.fa-feather-alt.t5
                span Disminuir la informalidad e ilegalidad en la producción.                    
          .col-lg-5.my-3
            img.img-a.img-t(src='@/assets/curso/temas/83.png', alt='')  

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Meta 12

    p(data-aos="fade-down") Aumentar los espacios verdes y mejorar la planificación urbana para el bienestar humano y la biodiversidad.    

    TabsB.color-acento-contenido.mb-5(data-aos="fade-right")
      .py-4.py-md-5(titulo="Oportunidades" :icono="require('@/assets/curso/temas/71.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 Oportunidades 
            ul.lista-ul.fa-ul          
              li 
                i.fas.fa-feather-alt.t5
                span Avanzar en la integración de la biodiversidad en algunos instrumentos de planificación.
              li 
                i.fas.fa-feather-alt.t5
                span Fortalecer iniciativas de participación ciudadana en proyectos de planificación urbana.
              li 
                i.fas.fa-feather-alt.t5
                span Revertir la pérdida de espacio urbano.
                                                   
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/80.png', alt='')    

      .py-4.py-md-5(titulo="Desafíos" :icono="require('@/assets/curso/temas/72.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 Desafíos 
            ul.lista-ul.fa-ul          
              li 
                i.fas.fa-feather-alt.t5
                span Llevar a cabo la gestión integral del manejo de las Otras Medidas Efectivas de Conservación Basadas en Áreas (OMEC) municipales.
              li 
                i.fas.fa-feather-alt.t5
                span Incluir en los procesos de planificación urbana los estudios y normativas actuales sobre indicadores ambientales.
                                                    
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/81.png', alt='')              

    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-left")
      h2 3.3 Reto 3. Herramientas y soluciones para la implementación y la integridad

    p(data-aos="fade-down") Las metas en las que se agrupa el reto son: 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Meta 16

    p(data-aos="fade-down") Opciones de consumo sostenibles para reducir el desperdicio y el consumo excesivo.   


    .row.bg5.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .bgw.p-5.brad1.my-5(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Oportunidades
                    p Generar relaciones con operaciones de economía circular y decrecimiento y mostrar sus beneficios en la vida cotidiana.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/84.png', alt='')      

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Desafíos
                    ul.lista-ul.fa-ul          
                      li 
                        i.fas.fa-feather-alt.t5
                        span Incluir medidas de reducción de pérdidas y desperdicio del sistema alimentario.
                      li 
                        i.fas.fa-feather-alt.t5
                        span Promover medidas de control y monitoreo, marcadas por la implementación de la Ley 1990 de 2019 y el Decreto 375 de 2022.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/85.png', alt='') 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Meta 21

    p(data-aos="fade-down") Garantizar la disponibilidad y accesibilidad de los conocimientos para orientar las acciones en materia de biodiversidad.
    TabsB.color-acento-contenido(data-aos="fade-right")
      .py-4.py-md-5(titulo="Oportunidades" :icono="require('@/assets/curso/temas/71.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 Oportunidades 
            ul.lista-ul.fa-ul          
              li 
                i.fas.fa-feather-alt.t5
                span Implementar el Acuerdo de Escazú.
              li 
                i.fas.fa-feather-alt.t5
                span Adelantar campañas desde el Gobierno Nacional y también desde ONG.                                                   
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/86.png', alt='')    

      .py-4.py-md-5(titulo="Desafíos" :icono="require('@/assets/curso/temas/72.svg')")
        .row.justify-content-center.px-4
          .col-lg-5.mb-4.mb-md-0
            h4 Desafíos 
            ul.lista-ul.fa-ul          
              li 
                i.fas.fa-feather-alt.t5
                span Fortalecer el Acuerdo de Escazú por parte de la Corte Constitucional de Colombia.
              li 
                i.fas.fa-feather-alt.t5
                span Mejorar la financiación y asignación de recursos para implementar el acuerdo.
              li 
                i.fas.fa-feather-alt.t5
                span Contar con un enfoque educativo alineado en el acceso y la difusión de información sobre biodiversidad.                                                  
          .col-lg-6
            img.img-a.img-t(src='@/assets/curso/temas/87.png', alt='')                                           

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
