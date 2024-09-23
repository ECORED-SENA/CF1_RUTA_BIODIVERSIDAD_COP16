<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Explorando la biodiversidad',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los principales acuerdos y desafíos de la COP16 relacionados con la biodiversidad. ',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es uno de los ejes temáticos de la COP16?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Financiamiento para la educación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Delitos ambientales y gestión territorial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Protección de especies en peligro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Política de comercio internacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuántas metas establece el Marco Mundial de Biodiversidad Kunming-Montreal para detener la pérdida de biodiversidad?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '10 metas.', esCorrecta: false },
            { id: 'b', texto: '15 metas.', esCorrecta: false },
            { id: 'c', texto: '20 metas.', esCorrecta: false },
            { id: 'd', texto: '23 metas.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué herramientas de tecnología se utilizan en la innovación y biodiversidad en la COP16?',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Tecnologías agrícolas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Monitoreo satelital y drones.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Energía solar.', esCorrecta: false },
            { id: 'd', texto: 'Redes de internet.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Cuál es uno de los compromisos de Colombia en la COP16?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Invertir en recursos energéticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desarrollar infraestructura urbana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asumir la presidencia del CDB y promover la biodiversidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Implementar políticas agrícolas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes es un nivel de biodiversidad mencionado en la COP16?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Genes.', esCorrecta: true },
            { id: 'b', texto: 'Mares.', esCorrecta: false },
            { id: 'c', texto: 'Clima.', esCorrecta: false },
            { id: 'd', texto: 'Viento.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'El Marco Mundial de Biodiversidad Kunming-Montreal fue aprobado en 2020.',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'La COP16 incluye la innovación en biodiversidad a través de la reforestación.',
          imagen: require('@/assets/actividad/3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Los ecosistemas son uno de los niveles de biodiversidad destacados en la COP16.',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            'El monitoreo satelital es parte de las tecnologías mencionadas para proteger los ecosistemas en la COP16.',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: false },
            { id: 'b', texto: 'Verdadero', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'La COP16 tiene como objetivo principal mitigar los efectos del cambio climático sin considerar los impactos en la biodiversidad.',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso', esCorrecta: true },
            { id: 'b', texto: 'Verdadero', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
