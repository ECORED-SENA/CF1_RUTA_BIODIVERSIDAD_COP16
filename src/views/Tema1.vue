<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 ¿Qué es la COP de Biodiversidad?
      
    .row.bg1.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center.align-items-center.mb-4
              .col.my-3.order-1 
                p(data-aos="fade-down").mb-0 La COP (Conferencia de las Partes) es la reunión más importante del Convenio sobre la Diversidad Biológica (CDB), adoptado en la Cumbre de la Tierra de Río de Janeiro en 1992 y que entró en vigor en 1993.                       
              .col-lg-auto.my-3.order-lg-2            
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')      

            .row.justify-content-center.align-items-center.mb-4
              .col-lg-5.my-3        
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')                 
              .col-lg-7.my-3
                .row.justify-content-center.align-items-center.bg2.p-3.brad.mb-4(data-aos="fade-left")
                  .col-lg-auto        
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.png', alt='')                 
                  .col.p-0.pt-md-4.pt-lg-0
                    p(data-aos="fade-down").mb-0 El objetivo es conservar la diversidad biológica, utilizarla de manera sostenible y garantizar la participación justa y equitativa de los beneficios derivados de la utilización de los recursos genéticos.

                .row.justify-content-center.align-items-center.mb-4
                  .col-lg-auto.d-none.d-lg-block          
                    img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/6.png', alt='')                 
                  .col.p-0.pt-md-4.pt-lg-0
                    p(data-aos="fade-down").mb-0 La COP se celebra cada dos años y reúne a más de 190 países miembros del convenio, así como a organizaciones intergubernamentales, organismos de las Naciones Unidas, sociedad civil y otros actores relevantes.

                p(data-aos="fade-down") La edición 16 de la COP se llevará a cabo entre el 21 de octubre y el 1 de noviembre de 2024 en Colombia, con la asistencia de 196 países miembros.                                                              
            p(data-aos="fade-down") Los extendemos una cordial invitación a visualizar el siguiente video, donde se brinda una explicación detallada sobre la importancia de la COP16, sus objetivos clave, y los temas que serán tratados en este evento internacional enfocado en la protección de la biodiversidad y la sostenibilidad global.

            .row.justify-content-center.align-items-center.mb-5           
              .col-lg-12(data-aos="fade-left")     
                figure
                  .video
                    iframe(width="560" height="315" src="https://www.youtube.com/embed/iwIHRRVD_l8?si=N5gRxlvv2od1CGbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)    

            .row.justify-content-start.mb-4
              .col-auto(data-aos="flip-down")
                .list
                  .list__item
                    .list__item__icon
                      img(src='@/assets/curso/temas/icon.svg', alt='')
                  .list__txt.bgicon.p-0.px-4
                    h3.mb-0 Ejes temáticos de la COP16 

            p(data-aos="fade-down").mb-5 Colombia, reconocida por su vasta biodiversidad y compromiso ambiental, se prepara para la decimosexta Conferencia de las Partes (COP16) sobre biodiversidad con expectativas y determinación. En un mundo cada vez más consciente de la urgencia de proteger y preservar los ecosistemas, Colombia asume un papel crucial al albergar este importante evento. #[b.t1 La COP16 ofrece a Colombia la oportunidad de destacar sus esfuerzos en la conservación de la biodiversidad y de contribuir activamente a las discusiones y decisiones que moldearán el futuro del medio ambiente a nivel global.] 

    .row.bg3.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12
            .row.justify-content-center
              .col-lg-4
                img.img-a.img-t.mov(data-aos="zoom-in")(src='@/assets/curso/temas/7.png', alt='')      
              .col-lg-8.my-4(data-aos="fade-left")    
                SlyderF.px-3.text-center(columnas="col-lg-6")
                  .tarjeta.bgw.bor.p-4
                    img.img-a.img-t.mb-2(src='@/assets/curso/temas/8.svg', alt='')
                    h5.text-center #[mark.bgtg.px-2 01]
                    h5 Paz con la naturaleza 
                    p.mb-0 Conflicto y biodiversidad. 
                  .tarjeta.bg4.bor.p-4
                    img.img-a.img-t.mb-2(src='@/assets/curso/temas/9.svg', alt='')
                    h5.text-center #[mark.bgtg.px-2 02]
                    h5 COP de la gente

                    p.mb-0 #[b Amplia movilización social], Pre-Cop Indígena y de Comunidades Locales (afrodescendientes, campesinos, etc.). 
                    
                  .tarjeta.bgw.bor.p-4
                    img.img-a.img-t.mb-2(src='@/assets/curso/temas/10.svg', alt='')
                    h5.text-center #[mark.bgtg.px-2 03]
                    h5 Naturaleza y cambio climático

                    p.mb-0 #[b Biodiversidad pilar de la acción climática], panel SG-ONU para los minerales de la transición energética. 

                  .tarjeta.bg4.bor.p-4
                    img.img-a.img-t.mb-2(src='@/assets/curso/temas/11.svg', alt='')
                    h5.text-center #[mark.bgtg.px-2 04]
                    h5 Convergencia regional

                    p.mb-0 Amazonía, CMAR, Caribe y sur global. 

                  .tarjeta.bgw.bor.p-4
                    img.img-a.img-t.mb-2(src='@/assets/curso/temas/12.svg', alt='')
                    h5.text-center #[mark.bgtg.px-2 05]
                    h5 Financiamiento para la implementación

                    p.mb-0 Mecanismos novedosos.

    .bgpod.p-4.borde-8.mb-4(data-aos="fade-up")
      .row.align-items-center 
        .col-lg-auto
          img.img-a.img-t(src="@/assets/curso/temas/icon_pod.png")
        .col.p-0.pt-md-4
          p.fw-bold.mb-2.t2(style="font-size: 20px;") Pódcast
          p.mb-3.text-white Se invita a escuchar el pódcast La aventura de la flor del Inírida en la COP16, un relato que explora la importancia de la biodiversidad y los esfuerzos globales para proteger el entorno natural. A través de las voces de Asusena y Don Campos, se presenta la historia de cómo la flor del Inírida asume una misión especial para enseñar a los más jóvenes sobre la COP16 y la relevancia de preservar la vida en todas sus formas.
          .row
            .col-auto
              TarjetaAudio.color-primario.tarjeta-audio-p-1.mb-3(
                texto="La Flor del Inírida y su misión especial"
                :audio="require('@/assets/componentes/audios/Capitulo_1_2.mp3')"
                )

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Proceso de toma de decisiones en la COP

    p(data-aos="fade-down").mb-5 El proceso de toma de decisiones en la COP sigue una estructura detallada que incluye varias fases: 

    .row.bg5.align-items-center.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-lg-12 
            .bgw.p-5.brad1.my-5(data-aos="fade-left")
              SlyderA(tipo="b")
                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Identificación y priorización de temas  
                    p Los temas a discutir se identifican y priorizan con hasta cuatro años de anticipación. Para la COP16 en Colombia, los temas clave son:
                    ol.lista-ol.fa-ul
                      li 
                        span.text-bold a) 
                        span Abordaje de la informalidad y contención de delitos ambientales.
                      li 
                        span.text-bold b) 
                        span Integración y coherencia territorial e intersectorial en la gestión de biodiversidad.
                      li 
                        span.text-bold c) 
                        span Impulso hacia la transformación productiva basada en la naturaleza.
                      li 
                        span.text-bold d) 
                        span Financiamiento para la gestión de territorios marino-costeros, dulceacuícolas y terrestres.
                      li 
                        span.text-bold e) 
                        span La Secretaría del CDB prepara documentos para la discusión sobre estos temas. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/15.png', alt='') 

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Primera plenaria  
                    p Se organiza la apertura de la COP y se inicia el proceso de negociación, donde los países forman grupos de trabajo para discutir los temas en detalle. 
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/16.png', alt='')

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Negociaciones en grupos de trabajo 
                    p Cada país presenta su postura y se debaten diferentes propuestas. Se busca el consenso y se redactan borradores de decisiones.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/17.png', alt='')

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Segunda y tercera plenaria  
                    p Se revisan los progresos de los grupos de trabajo y se ajustan las propuestas. Se prepara un segundo borrador de decisiones.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/18.png', alt='')

                .row.justify-content-center
                  .col-lg-6.my-2
                    h5.mb-4 Cuarta plenaria y cierre 
                    p En la última plenaria, se revisan y adoptan formalmente las decisiones finales. Se aprueba un documento con todas las decisiones adoptadas.
                  .col-lg-5.my-2 
                    img.img-a.img-t(src='@/assets/curso/temas/19.png', alt='')


    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Ejes temáticos de la COP16

    p(data-aos="fade-down") La COP incluye a los 196 países que han ratificado el CDB, quienes tienen derecho a votar y participar plenamente. Además, participan otros actores relevantes que, aunque no tienen derecho a voto, #[b.t1 cumplen un rol de observación y asesoría, tales como:]  

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-md-6.my-3
        .bg6.brad.h-100(data-aos="fade-up")
          .row.justify-content-center
            .col-auto.p-0        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/20.png', alt='')                 
            .col.j1
              .p-3
                p(data-aos="fade-down").mb-0 Países que no han ratificado el CDB.

      .col-lg-4.col-md-6.my-3
        .bg6.brad.h-100(data-aos="fade-up")
          .row.justify-content-center
            .col-auto.p-0        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')                 
            .col.j1
              .p-3
                p(data-aos="fade-down").mb-0 Organizaciones No Gubernamentales (ONG).

      .col-lg-4.col-md-6.my-3
        .bg6.brad.h-100(data-aos="fade-up")
          .row.justify-content-center
            .col-auto.p-0        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='')                 
            .col.j1
              .p-3
                p(data-aos="fade-down").mb-0 Organizaciones intergubernamentales.

      .col-lg-4.col-md-6.my-3
        .bg6.brad.h-100(data-aos="fade-up")
          .row.justify-content-center
            .col-auto.p-0        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/23.png', alt='')                 
            .col.j1
              .p-3
                p(data-aos="fade-down").mb-0 Organizaciones de las Naciones Unidas.

      .col-lg-4.col-md-6.my-3
        .bg6.brad.h-100(data-aos="fade-up")
          .row.justify-content-center
            .col-auto.p-0        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.png', alt='')                 
            .col.j1
              .p-3
                p(data-aos="fade-down").mb-0 Universidades y academias.

      .col-lg-4.col-md-6.my-3
        .bg6.brad.h-100(data-aos="fade-up")
          .row.justify-content-center
            .col-auto.p-0        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/25.png', alt='')                 
            .col.j1
              .p-3
                p(data-aos="fade-down").mb-0 Sector privado.

      .col-lg-4.col-md-6.my-3
        .bg6.brad.h-100(data-aos="fade-up")
          .row.justify-content-center
            .col-auto.p-0        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/26.png', alt='')                 
            .col.j1
              .p-3
                p(data-aos="fade-down").mb-0 Grupos de jóvenes.

      .col-lg-4.col-md-6.my-3
        .bg6.brad.h-100(data-aos="fade-up")
          .row.justify-content-center
            .col-auto.p-0        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/27.png', alt='')                 
            .col.j1
              .p-3
                p(data-aos="fade-down").mb-0 Pueblos indígenas y comunidades locales. 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Órganos de apoyo

    p(data-aos="fade-down") La COP cuenta con dos órganos subsidiarios que facilitan la toma de decisiones:   

    .row.justify-content-center.mb-4
      .col-lg-6.my-3.p-0(data-aos="fade-left")
        .bg7.p-lg-5.p-4.brad.h-100
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/29.png', alt='')                 
          h4.mb-4 #[mark.t3.px-3 SBSTTA]
          p(data-aos="fade-down") Órgano Subsidiario de Asesoramiento Científico, Técnico y Tecnológico, que proporciona evaluaciones y asesoría científica.           
      .col-lg-6.my-3.p-0(data-aos="fade-right")
        .bg8.p-lg-5.p-4.brad.h-100 
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/30.png', alt='')                 
          h4.mb-4 #[mark.t3.px-3 SBI]
          p(data-aos="fade-down") Órgano Subsidiario de Ejecución, que ayuda a implementar las decisiones y recomendaciones de la COP. 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Importancia del proceso de toma de decisiones

    p(data-aos="fade-down") La COP cuenta con dos órganos subsidiarios que facilitan la toma de decisiones: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.my-3        
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/31.png', alt='')                 
      .col-lg-7.my-3
        .row.justify-content-center.align-items-center.bg2.p-2.brad.mb-2(data-aos="fade-down")
          .col-lg-auto        
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/32.png', alt='')                 
          .col.p-0.pt-md-4.pt-lg-0
            p(data-aos="fade-down").mb-0 Proteger la biodiversidad y promover su uso sostenible.

        .row.justify-content-center.align-items-center.bg2.p-2.brad.mb-2(data-aos="fade-down")
          .col-lg-auto        
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/33.png', alt='')                 
          .col.p-0.pt-md-4.pt-lg-0
            p(data-aos="fade-down").mb-0 Coordinar esfuerzos globales para que todos los países trabajen hacia objetivos comunes.

        .row.justify-content-center.align-items-center.bg2.p-2.brad(data-aos="fade-down")
          .col-lg-auto        
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/34.png', alt='')                 
          .col.p-0.pt-md-4.pt-lg-0
            p(data-aos="fade-down").mb-0 Incluir a todos los sectores y aprovechar la experiencia de comunidades locales e indígenas, asegurando que las decisiones sean justas y equitativas.

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Marco Mundial de Biodiversidad de Kunming-Montreal

    p(data-aos="fade-down") Aprobado en diciembre de 2022, busca detener y revertir la pérdida de la naturaleza, en un contexto donde cada vez se potencializan los escenarios de amenaza a la supervivencia millones de especies y personas. El objetivo de este marco es proteger y emplear los servicios que ofrece la biodiversidad de manera sostenible.  

    .row.justify-content-center.mb-4
      .col-lg-7.my-3 
        .bg4.p-4.j1.h-100.brad1(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 El Marco Mundial de Biodiversidad de Kunming-Montreal, establece una visión transformadora para guiar y apoyar a los países en materia de biodiversidad mediante 4 objetivos y 23 metas. 
      .col-lg-5.my-3        
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')                 
              
    p(data-aos="fade-down") Entre sus principales objetivos para 2050 están:

    .bg9.p-4.mb-4  
      .row.justify-content-center.align-items-center
        .col-lg-4.my-3        
          img.img-mov(data-aos="zoom-in")(src='@/assets/curso/temas/75.png', alt='')                 
        .col-lg-7.my-3
          .row.justify-content-center.align-items-center.bg18.p-3(data-aos="fade-down")
            .col        
              h4.mb-0 Objetivos mundiales para 2050 
          .row.justify-content-center.align-items-center.bg16.p-3(data-aos="fade-down")
            .col-lg-auto        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png', alt='')                 
            .col.p-0.pt-md-4.pt-lg-0
              p(data-aos="fade-down").mb-0 Restablecer integridad, conectividad y resiliencia, ecosistemas y biodiversidad, se detiene la extinción de especies y se mantiene la diversidad genética.   

          .row.justify-content-center.align-items-center.bg15.p-3(data-aos="fade-down")
            .col-lg-auto        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/77.png', alt='')                 
            .col.p-0.pt-md-4.pt-lg-0
              p(data-aos="fade-down").mb-0 La biodiversidad se utiliza y gestiona de manera sostenible y las contribuciones de la naturaleza a las personas se valoran, se mantienen y se mejoran, restableciendo funciones y servicios ecosistémicos. 

          .row.justify-content-center.align-items-center.bg16.p-3(data-aos="fade-down")
            .col-lg-auto        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/79.png', alt='')                 
            .col.p-0.pt-md-4.pt-lg-0
              p(data-aos="fade-down").mb-0 Beneficios monetarios y no monetarios de la utilización de los recursos genéticos se comparten de manera justa y equitativa.

          .row.justify-content-center.align-items-center.bg15.p-3(data-aos="fade-down")
            .col-lg-auto        
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/78.png', alt='')                 
            .col.p-0.pt-md-4.pt-lg-0
              p(data-aos="fade-down").mb-0 Medios de implementación financieros y técnicos —creación de capacidad, cooperación científica y técnica y acceso a la tecnología y su transferencia—, para implementar el Marco Global de Biodiversidad.                              

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Recursos genéticos y su importancia

    p(data-aos="fade-down") Los recursos genéticos son la información genética contenida en plantas, animales y microorganismos. Estos recursos son valiosos porque permiten desarrollar nuevas variedades de cultivos más resistentes, medicamentos más efectivos y adaptaciones ante el cambio climático.
    .row.justify-content-center.mb-4
      .col-lg-5.my-3        
        img.img-a.img-t.brad1(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')     
      .col-lg-7.my-3 
        .bg10.p-4.j1.h-100.brad1(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 La protección de estos recursos es crucial para enfrentar la crisis climática y fomentar la innovación en sectores como la agricultura y la medicina.


    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Paz con la naturaleza: un enfoque clave de la COP16

    p(data-aos="fade-down") En la COP16, Colombia promoverá el concepto de #[b.t1 "Paz con la Naturaleza"], resaltando la interdependencia entre la paz y la conservación ambiental. La protección de la biodiversidad no solo es una herramienta para mitigar el cambio climático, sino también un camino para resolver conflictos y promover la estabilidad.
    .row.justify-content-center.mb-4
      .col-lg-5.my-3        
        img.img-a.img-t.brad1(data-aos="zoom-in")(src='@/assets/curso/temas/39.png', alt='')     
      .col-lg-7.my-3 
        .bg4.p-4.j1.h-100.brad1(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 El principal esfuerzo común debe ser evitar guerras y, al mismo tiempo, invertir en acciones para enfrentar la crisis climática y la pérdida de biodiversidad. Colombia pone la naturaleza en el centro de este esfuerzo como pilar para la paz.           

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Innovación y tecnología en pro de la biodiversidad                       

    .row.justify-content-center.align-items-center.mb-4
      .col.my-3.order-1 
        p(data-aos="fade-down").mb-0 La tecnología juega un papel crucial en la conservación de la biodiversidad. Herramientas como el monitoreo satelital, drones y análisis de datos permiten un seguimiento eficiente de los ecosistemas. En Colombia, proyectos como el monitoreo de la deforestación en la Amazonía y la bioprospección en el Chocó han destacado por su innovación.
      .col-lg-auto.my-3.order-lg-2            
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40_1.png', alt='') 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Acciones ciudadanas

    .row.justify-content-center.mb-4
      .col-lg-5.my-3        
        img.img-a.img-t.brad1(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')     
      .col-lg-7.my-3
        p(data-aos="fade-down").mb-4 Los ciudadanos pueden contribuir participando en iniciativas locales de conservación, educándose y educando a otros sobre la importancia de la biodiversidad y sus desafíos, como la minería ilegal, el cambio climático y la deforestación. Además, pueden abogar por políticas que protejan el medio ambiente y fomenten la sostenibilidad. 
        .bg10.p-4.j1.brad1(data-aos="fade-left")
          h5(data-aos="fade-down") #[mark.t4.px-3 COP de la gente]
          p(data-aos="fade-down").mb-0 La COP16 en Cali será una "COP de la gente", donde se dará un espacio prioritario a la participación activa de las juventudes, pueblos originarios y mujeres de todas las naciones. Cali se convertirá en una gran aula ambiental, donde la población afectada por la crisis climática alzará su voz en las negociaciones.

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Compromisos de Colombia en la COP16

    p(data-aos="fade-down") Como futura presidencia de la CDB, Colombia asumirá varios compromisos importantes:  

    .row.justify-content-center.align-items-center.mb-4              
      .col-lg-7.my-3
        .row.justify-content-center.align-items-center.bg4.p-2.brad.mb-2(data-aos="fade-down")
          .col-lg-auto        
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='')                 
          .col.p-0.pt-md-4.pt-lg-0
            p(data-aos="fade-down").mb-0 Establecer un marco justo para el acceso y beneficios de los recursos genéticos digitalizados.

        .row.justify-content-center.align-items-center.bg4.p-2.brad.mb-2(data-aos="fade-down")
          .col-lg-auto        
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/43.png', alt='')                 
          .col.p-0.pt-md-4.pt-lg-0
            p(data-aos="fade-down").mb-0 Proponer una evaluación conjunta del plan de acción global con respecto a las metas del Marco de Kunming-Montreal. 

        .row.justify-content-center.align-items-center.bg4.p-2.brad.mb-2(data-aos="fade-down")
          .col-lg-auto        
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/44.png', alt='')                 
          .col.p-0.pt-md-4.pt-lg-0
            p(data-aos="fade-down").mb-0 Adoptar programas que reconozcan el papel de los pueblos indígenas y las comunidades locales en la conservación de la biodiversidad.

        .row.justify-content-center.align-items-center.bg4.p-2.brad.mb-2(data-aos="fade-down")
          .col-lg-auto        
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/45.png', alt='')                 
          .col.p-0.pt-md-4.pt-lg-0
            p(data-aos="fade-down").mb-0 Promover un pacto financiero internacional para enfrentar la triple crisis planetaria: biodiversidad, cambio climático y contaminación.

      .col-lg-5.my-3        
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/46.png', alt='')

    .row.justify-content-start.mb-4
      .col-auto(data-aos="flip-down")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/icon.svg', alt='')
          .list__txt.bgicon.p-0.px-4
            h3.mb-0 Metas para 2030

    p(data-aos="fade-down").mb-5 Entre las principales metas para 2030, la COP busca:

    .row.justify-content-center.mb-5
      .col-auto(data-aos="flip-down")
        .bg15.text-white.brad.p-3.px-4
          h4.mb-0 23 Metas mundiales para el 2030

    .row.justify-content-center
      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 1
          p Planificación integrada terrestre y marina.

      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 2
          p 30 % de los ecosistemas restaurados.

      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 3
          p 30 % de las zonas terrestres y marinas conservadas.

      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 4
          p Recuperar y conservar especies y diversidad genética.
    
    .row.justify-content-center
      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 5
          p Prevenir el comercio ilegal de fauna silvestre.

      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 6
          p Gestionar las especies invasoras.

      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 7
          p Reducir la contaminación de todas las fuentes.

      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 8
          p Minimizar el impacto del cambio climático.   

    .row.justify-content-center
      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 9
          p Garantizar los beneficios de especies silvestres y su sostenibilidad.

      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 10
          p Garantizar la gestión sostenible de las superficies.

      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 11
          p Restaurar, mantener y mejorar las contribuciones de la naturaleza a las personas.

      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 12
          p Aumentar el acceso a los espacios verdes en las ciudades.
    
    .row.justify-content-center
      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 13
          p Acceso a nivel mundial de recursos genéticos.

      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 14
          p Integrar diversidad biológica en las políticas, normas y planificación.

      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 15
          p Gestionar la implementación de reportes a las empresas y su impacto con la biodiversidad.

      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 16
          p Promover comportamientos de consumo sostenible.

    .row.justify-content-center
      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 17
          p Establecer y aplicar medidas de seguridad de la biotecnología.

      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 18
          p Desincentivar los servicios perjudiciales para la biodiversidad.

      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 19
          p Aumentar los recursos financieros para la biodiversidad.

      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 20
          p Fortalecer e implementar desarrollo tecnológico para la conservación de la biodiversidad.
    
    .row.justify-content-center.mb-5
      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 21
          p Garantizar acceso a la información, proceso informativo e incorporación de conocimientos tradicionales.

      .col-md-5.col-lg-3.my-3(data-aos="fade-left")
        .tarjeta-numerada.color-primario.bg13.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero
            .h2 22
          p Garantizar la participación en la toma de decisiones de las comunidades indígenas y locales.

      .col-md-5.col-lg-3.my-3(data-aos="fade-right")
        .tarjeta-numerada.color-primario.bg14.h-100.p-4.ps-5.pb-1.j1
          .tarjeta-numerada__numero.num-b
            .h2 23
          p Garantizar la igualdad de género (mujeres y niñas).

    p(data-aos="fade-down") La COP de Biodiversidad #[b.t1 es una plataforma global fundamental para la toma de decisiones que impactan la conservación de la biodiversidad]. A través de la participación de países, comunidades locales e instituciones, se busca implementar acciones efectivas para proteger los ecosistemas, reducir la crisis climática y promover un desarrollo sostenible basado en la equidad y la innovación. 


    .row.justify-content-center
      .col-lg-5.my-3        
        img.img-a.img-t.brad1(data-aos="zoom-in")(src='@/assets/curso/temas/48.png', alt='')       
      .col-lg-7.my-3 
        .bg2.p-4.j1.h-100.brad1(data-aos="fade-left")
          p(data-aos="fade-down").mb-0 Con una planificación integral y objetivos claros para 2030, la COP16 representa un esfuerzo conjunto para asegurar un futuro más sostenible y respetuoso con la naturaleza.

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
