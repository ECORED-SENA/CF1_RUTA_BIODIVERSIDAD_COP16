(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tema3"],{"20ce":function(a,t,s){a.exports=s.p+"img/71.1cad4ef8.svg"},2137:function(a,t,s){a.exports=s.p+"img/85.7fff90ef.png"},"36a0":function(a,t,s){a.exports=s.p+"img/70.1a4b5920.png"},"477f":function(a,t,s){a.exports=s.p+"img/81_1.384efa0e.png"},"4bd3":function(a,t,s){a.exports=s.p+"media/Capitulo_4.76b234e6.mp3"},"4dcc":function(a,t,s){a.exports=s.p+"img/86.d657b3a7.png"},"5cb7":function(a,t,s){"use strict";var i=function(){var a=this,t=a._self._c;return t("div",{staticClass:"tarjeta-audio pe-4"},[t("div",{staticClass:"row align-items-center mb-4"},[t("div",{staticClass:"col"},[t("div",{staticClass:"tarjeta-audio__texto h5 mb-0",domProps:{innerHTML:a._s(a.texto)}})]),t("div",{staticClass:"col-auto ps-0"},[t("div",{staticClass:"audio position-relative",on:{"~mouseover":function(t){return a.$emit("audio-hover")}}},[a._t("default"),a.audioCanPlay?"pause"===a.state?t("button",{staticClass:"audio__btn",on:{click:a.play}},[t("img",{attrs:{src:s("5ccd")}})]):t("button",{staticClass:"audio__btn",on:{click:a.pause}},[t("img",{attrs:{src:s("f034")}})]):t("div",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[t("span",{staticClass:"visually-hidden"},[a._v("Loading..")])])],2)])]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[a.noBarra?a._e():t("div",{staticClass:"tarjeta-audio__input mt-2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.sliderVal,expression:"sliderVal"}],ref:"sliderElement",style:{"background-size":this.sliderVal+"% 100%"},attrs:{type:"range",max:"100"},domProps:{value:a.sliderVal},on:{input:a.onSliderMove,__r:function(t){a.sliderVal=t.target.value}}}),t("div",{staticClass:"d-flex justify-content-between pt-1"},[t("span",[a._v(a._s(a.audioRepFormat))]),t("span",[a._v(a._s(a.audioDurationFormat))])])])])])])},e=[],o={props:{audio:{type:String,default:""}},data:()=>({audioElement:null,audioCanPlay:!1,state:"pause"}),computed:{audioDuration(){if(!this.audioElement)return;const a=this.audioElement.buffered;return a.end(a.length-1)}},mounted(){this.audioElement=this.createAudioElement(),this.audioElement.oncanplay=()=>{this.audioCanPlay=!0},this.audioElement.onloadedmetadata=()=>{this.audioCanPlay=!0},this.audioElement.onended=()=>{this.audioElement.currentTime=0,this.state="pause"}},beforeDestroy(){this.audioElement.remove()},methods:{createAudioElement(){const a=document.createElement("audio");return a.setAttribute("preload","metadata"),a.setAttribute("src",this.audio),document.body.appendChild(a),a},play(){this.state="play",this.audioElement.play()},pause(){this.state="pause",this.audioElement.pause()},stop(){this.state="pause",this.audioElement.pause(),this.audioElement.currentTime=0}}},l={name:"TarjetaAudioPersonalizada",mixins:[o],props:{texto:{type:String,required:!0},noBarra:{type:Boolean,default:!1}},data:()=>({sliderVal:0,audioRepFormat:"0:00",audioDurationFormat:"0:00"}),mounted(){this.noBarra||(this.audioElement.ontimeupdate=()=>{const a=this.audioElement.currentTime,t=Math.floor(a/60),s=Math.floor(a%60),i=s<10?"0"+s:s,e=`${t}:${i}`;this.audioRepFormat=e,this.sliderVal=this.audioElement.currentTime/this.audioDuration*100},this.audioElement.onloadedmetadata=()=>{const a=this.audioDuration,t=Math.floor(a/60),s=Math.floor(a%60),i=s<10?"0"+s:s,e=`${t}:${i}`;this.audioDurationFormat=e})},methods:{onSliderMove(){this.audioElement.currentTime=this.sliderVal/100*this.audioDuration}}},c=l,n=s("2877"),r=Object(n["a"])(c,i,e,!1,null,null,null);t["a"]=r.exports},"5ccd":function(a,t,s){a.exports=s.p+"img/audio.058779f0.svg"},"64ab":function(a,t,s){a.exports=s.p+"img/81.4282517a.png"},"75f5":function(a,t,s){a.exports=s.p+"img/icon_pod.ac933019.png"},"7bbb":function(a,t,s){a.exports=s.p+"img/67.86964e8b.png"},"885f":function(a,t,s){a.exports=s.p+"img/82.df6441e2.png"},"95f3":function(a,t,s){a.exports=s.p+"img/80.896d8a24.png"},b676:function(a,t,s){a.exports=s.p+"img/icon.7ec10384.svg"},be9d:function(a,t,s){a.exports=s.p+"img/84.c907ee0a.png"},cccf:function(a,t,s){a.exports=s.p+"img/72.348ee4a3.svg"},d01b:function(a,t,s){a.exports=s.p+"img/83.20e579d0.png"},dc77:function(a,t,s){a.exports=s.p+"img/87.e739c3e7.png"},e8f4:function(a,t,s){a.exports=s.p+"img/69.6be1254e.png"},eb46:function(a,t,s){"use strict";s.r(t);var i=function(){var a=this,t=a._self._c;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno"),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},[a._m(0),t("div",{staticClass:"row bg11 align-items-center"},[t("div",{staticClass:"col-lg-12 col-12 px-lg-5 px-4"},[t("div",{staticClass:"row justify-content-center align-items-center"},[t("div",{staticClass:"col-lg-12"},[a._m(1),a._m(2),t("div",{staticClass:"bgpod p-4 borde-8 mb-4",attrs:{"data-aos":"fade-up"}},[t("div",{staticClass:"row align-items-center"},[a._m(3),t("div",{staticClass:"col p-0 pt-md-4"},[a._m(4),a._m(5),t("div",{staticClass:"row"},[t("div",{staticClass:"col-auto"},[t("TarjetaAudio",{staticClass:"color-primario tarjeta-audio-p-1 mb-3",attrs:{texto:"La COP16 es muy importante para Colombia",audio:s("4bd3")}})],1)])])])]),t("Separador"),a._m(6),t("p",{attrs:{"data-aos":"fade-down"}},[a._v("Las metas en las que se agrupa el reto son: ")])],1)])])]),a._m(7),t("p",{attrs:{"data-aos":"fade-down"}},[a._v("Detener la extinción de especies, proteger la diversidad genética y gestionar los conflictos entre los seres humanos y las especies silvestres.")]),t("div",{staticClass:"row justify-content-center"},[a._m(8),t("div",{staticClass:"col-lg-9 my-3"},[t("AcordionA",{attrs:{tipo:"a","clase-tarjeta":"tarjeta bg17"}},[t("div",{attrs:{titulo:"Desafíos"}},[t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Emplear herramientas tecnológicas para promover información y registro de información en tiempo real, a fin de fortalecer las acciones sobre las especies amenazadas.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Los procesos para conservar mamíferos acuáticos, como la ballena jorobada en las aguas del Pacífico, los delfines de río y las tortugas marinas.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Fortalecimiento de iniciativas de monitoreo comunitario. ")])])])]),t("div",{attrs:{titulo:"Regulación de la calidad del aire"}},[t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Generar información y consolidar las ideas existentes, de manera eficiente y colaborativa, sobre la situación de las poblaciones de especies silvestres.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Lograr planes de acción para la gestión integrada y la resolución de conflictos entre los seres humanos y las especies silvestres.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Contar con una legislación clara y eficaz para frenar el comercio de especies amenazadas y prevenir los conflictos, junto con la cooperación interinstitucional.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Promover la diversidad de enfoques en la implementación de políticas, que sean apropiados para las condiciones específicas de las áreas de conservación. ")])])])])])],1)]),a._m(9),t("p",{attrs:{"data-aos":"fade-down"}},[a._v("Garantizar que la recolección y el comercio de especies silvestres sean sostenibles, seguros y lícitos. ")]),t("TabsB",{staticClass:"color-acento-contenido mb-5",attrs:{"data-aos":"fade-right"}},[t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Oportunidades",icono:s("20ce")}},[t("div",{staticClass:"row justify-content-center px-4"},[t("div",{staticClass:"col-lg-5 mb-4 mb-md-0"},[t("h4",[a._v("Oportunidades ")]),t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Fortalecer procesos internacionales orientados a especies como las ballenas en el Pacífico, delfines de río en la Amazonía y otras especies amenazadas.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Incorporar criterios en los Certificados de Aprovechamiento de Fauna (CAF), el uso de buenas prácticas, así como el manejo adecuado en el comercio legal de estas especies.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Participación activa de las comunidades locales y fortalecimiento de iniciativas comunitarias en el manejo y conservación de especies silvestres. ")])])])]),t("div",{staticClass:"col-lg-6"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("95f3"),alt:""}})])])]),t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Desafíos",icono:s("cccf")}},[t("div",{staticClass:"row justify-content-center px-4"},[t("div",{staticClass:"col-lg-5 mb-4 mb-md-0"},[t("h4",[a._v("Desafíos ")]),t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Fortalecer los mecanismos de control para evitar el comercio ilegal de especies silvestres.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Generar un registro automatizado y actualizado sobre la información de quienes actúan contra las especies. ")])])])]),t("div",{staticClass:"col-lg-6"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("64ab"),alt:""}})])])])]),t("Separador"),a._m(10),t("p",{attrs:{"data-aos":"fade-down"}},[a._v("Las metas en las que se agrupa el reto son: ")]),a._m(11),t("p",{staticClass:"mb-5",attrs:{"data-aos":"fade-down"}},[a._v("Mejorar la biodiversidad y la sostenibilidad en la agricultura, la acuicultura, la pesca y la silvicultura.")]),t("TabsA",{staticClass:"color-acento-botones mb-5",attrs:{"data-aos":"zoom-in"}},[t("div",{staticClass:"tarjeta color-acento-botones--borde p-4",attrs:{titulo:"Oportunidades"}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-7 my-3"},[t("h5",{staticClass:"mb-4"},[a._v("Oportunidades ")]),t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Diversificar acciones transformadoras que contemplen los factores sociales en estas actividades.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Desarrollar normativas sobre actividades extractivas, como la Ley de Agroecología (PL 0075 de 2022). ")])])])]),t("div",{staticClass:"col-lg-5 my-3"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("885f"),alt:""}})])])]),t("div",{staticClass:"tarjeta color-acento-botones--borde p-4",attrs:{titulo:"Desafíos"}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-7 my-3"},[t("h5",{staticClass:"mb-4"},[a._v("Desafíos")]),t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Mejorar la gobernanza en territorios que se comprometan con la implementación de la sostenibilidad en la pesca, la acuicultura y la agricultura.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Disminuir la informalidad e ilegalidad en la producción. ")])])])]),t("div",{staticClass:"col-lg-5 my-3"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("d01b"),alt:""}})])])])]),a._m(12),t("p",{attrs:{"data-aos":"fade-down"}},[a._v("Aumentar los espacios verdes y mejorar la planificación urbana para el bienestar humano y la biodiversidad. ")]),t("TabsB",{staticClass:"color-acento-contenido mb-5",attrs:{"data-aos":"fade-right"}},[t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Oportunidades",icono:s("20ce")}},[t("div",{staticClass:"row justify-content-center px-4"},[t("div",{staticClass:"col-lg-5 mb-4 mb-md-0"},[t("h4",[a._v("Oportunidades ")]),t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Avanzar en la integración de la biodiversidad en algunos instrumentos de planificación.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Fortalecer iniciativas de participación ciudadana en proyectos de planificación urbana.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Revertir la pérdida de espacio urbano.")])])])]),t("div",{staticClass:"col-lg-6"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("fe9e"),alt:""}})])])]),t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Desafíos",icono:s("cccf")}},[t("div",{staticClass:"row justify-content-center px-4"},[t("div",{staticClass:"col-lg-5 mb-4 mb-md-0"},[t("h4",[a._v("Desafíos ")]),t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Llevar a cabo la gestión integral del manejo de las Otras Medidas Efectivas de Conservación Basadas en Áreas (OMEC) municipales.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Incluir en los procesos de planificación urbana los estudios y normativas actuales sobre indicadores ambientales.")])])])]),t("div",{staticClass:"col-lg-6"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("477f"),alt:""}})])])])]),t("Separador"),a._m(13),t("p",{attrs:{"data-aos":"fade-down"}},[a._v("Las metas en las que se agrupa el reto son: ")]),a._m(14),t("p",{attrs:{"data-aos":"fade-down"}},[a._v("Opciones de consumo sostenibles para reducir el desperdicio y el consumo excesivo. ")]),t("div",{staticClass:"row bg5 align-items-center mb-5"},[t("div",{staticClass:"col-lg-12 col-12 px-lg-5 px-4"},[t("div",{staticClass:"row justify-content-center align-items-center"},[t("div",{staticClass:"col-lg-12"},[t("div",{staticClass:"bgw p-5 brad1 my-5",attrs:{"data-aos":"fade-left"}},[t("SlyderA",{attrs:{tipo:"b"}},[t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-6 my-2"},[t("h5",{staticClass:"mb-4"},[a._v("Oportunidades")]),t("p",[a._v("Generar relaciones con operaciones de economía circular y decrecimiento y mostrar sus beneficios en la vida cotidiana.")])]),t("div",{staticClass:"col-lg-5 my-2"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("be9d"),alt:""}})])]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-lg-6 my-2"},[t("h5",{staticClass:"mb-4"},[a._v("Desafíos")]),t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Incluir medidas de reducción de pérdidas y desperdicio del sistema alimentario.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Promover medidas de control y monitoreo, marcadas por la implementación de la Ley 1990 de 2019 y el Decreto 375 de 2022.")])])])]),t("div",{staticClass:"col-lg-5 my-2"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("2137"),alt:""}})])])])],1)])])])]),a._m(15),t("p",{attrs:{"data-aos":"fade-down"}},[a._v("Garantizar la disponibilidad y accesibilidad de los conocimientos para orientar las acciones en materia de biodiversidad.")]),t("TabsB",{staticClass:"color-acento-contenido",attrs:{"data-aos":"fade-right"}},[t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Oportunidades",icono:s("20ce")}},[t("div",{staticClass:"row justify-content-center px-4"},[t("div",{staticClass:"col-lg-5 mb-4 mb-md-0"},[t("h4",[a._v("Oportunidades ")]),t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Implementar el Acuerdo de Escazú.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Adelantar campañas desde el Gobierno Nacional y también desde ONG. ")])])])]),t("div",{staticClass:"col-lg-6"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("4dcc"),alt:""}})])])]),t("div",{staticClass:"py-4 py-md-5",attrs:{titulo:"Desafíos",icono:s("cccf")}},[t("div",{staticClass:"row justify-content-center px-4"},[t("div",{staticClass:"col-lg-5 mb-4 mb-md-0"},[t("h4",[a._v("Desafíos ")]),t("ul",{staticClass:"lista-ul fa-ul"},[t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Fortalecer el Acuerdo de Escazú por parte de la Corte Constitucional de Colombia.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Mejorar la financiación y asignación de recursos para implementar el acuerdo.")])]),t("li",[t("i",{staticClass:"fas fa-feather-alt t5"}),t("span",[a._v("Contar con un enfoque educativo alineado en el acceso y la difusión de información sobre biodiversidad. ")])])])]),t("div",{staticClass:"col-lg-6"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("dc77"),alt:""}})])])])])],1)],1)},e=[function(){var a=this,t=a._self._c;return t("div",{staticClass:"titulo-principal color-acento-contenido",attrs:{"data-aos":"zoom-in-left"}},[t("div",{staticClass:"titulo-principal__numero"},[t("span",[a._v("3")])]),t("h1",[a._v("Retos y oportunidades en Colombia")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"row justify-content-center align-items-center mb-4"},[t("div",{staticClass:"col my-3 order-1"},[t("p",{staticClass:"mb-0",attrs:{"data-aos":"fade-down"}},[a._v("Recordando que el Marco Global de Biodiversidad Kunming-Montreal (MGB) es un acuerdo internacional que se originó en las conferencias de la Convención sobre la Diversidad Biológica (CDB), llevadas a cabo en Kunming, China, y Montreal, Canadá, en el 2022. Este acuerdo tiene como propósito la protección de la diversidad biológica y busca lograr un equilibrio entre la conservación del entorno natural y el desarrollo sostenible. ")])]),t("div",{staticClass:"col-lg-auto my-3 order-lg-2"},[t("img",{staticClass:"img-a img-t",attrs:{"data-aos":"zoom-in",src:s("7bbb"),alt:""}})])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"row justify-content-center mb-4"},[t("div",{staticClass:"col-lg-5 my-3"},[t("img",{staticClass:"img-a img-t brad1",attrs:{"data-aos":"zoom-in",src:s("f45e"),alt:""}})]),t("div",{staticClass:"col-lg-7 my-3"},[t("div",{staticClass:"bg2 p-3 brad h-100 j1"},[t("div",{staticClass:"row justify-content-center align-items-center",attrs:{"data-aos":"fade-left"}},[t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"img-a img-t",attrs:{"data-aos":"zoom-in",src:s("e8f4"),alt:""}})]),t("div",{staticClass:"col p-0 pt-md-4 pt-lg-0"},[t("p",{staticClass:"mb-0",attrs:{"data-aos":"fade-down"}},[a._v("El MGB establece un plan de acción para el 2030, que incluye 23 metas diseñadas para alcanzar cuatro grandes objetivos en 2050. Dichas metas se organizan en tres retos principales, y promueven la participación activa, la buena gobernanza y el carácter público y colectivo de las decisiones relacionadas con la biodiversidad, adoptando un enfoque socioecológico. ")])])])])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"col-lg-auto"},[t("img",{staticClass:"img-a img-t",attrs:{src:s("75f5")}})])},function(){var a=this,t=a._self._c;return t("p",{staticClass:"fw-bold mb-2 t2",staticStyle:{"font-size":"20px"}},[t("i",[a._v("Pódcast")])])},function(){var a=this,t=a._self._c;return t("p",{staticClass:"mb-3 text-white"},[a._v("Se extiende una cordial invitación a escuchar el "),t("i",[a._v("pódcast")]),a._v(" La COP16 es muy importante para Colombia, acá se destaca la riqueza natural de Colombia y su papel en la protección de la biodiversidad en el marco de la COP16. A través de los personajes de Asusena y Don Campos, se explora cómo el país enfrenta desafíos globales como el cambio climático, la deforestación y la contaminación, todo con un enfoque poético y educativo.")])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_1","data-aos":"zoom-in-left"}},[t("h2",[a._v("3.1 Reto 1. Reducir las amenazas a la biodiversidad ")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"row justify-content-start mb-4"},[t("div",{staticClass:"col-auto",attrs:{"data-aos":"flip-down"}},[t("div",{staticClass:"list"},[t("div",{staticClass:"list__item"},[t("div",{staticClass:"list__item__icon"},[t("img",{attrs:{src:s("b676"),alt:""}})])]),t("div",{staticClass:"list__txt bgicon p-0 px-4"},[t("h3",{staticClass:"mb-0"},[a._v("Meta 4")])])])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"col-lg-3 my-3"},[t("img",{staticClass:"img-a img-t",attrs:{"data-aos":"zoom-in",src:s("36a0"),alt:""}})])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"row justify-content-start mb-4"},[t("div",{staticClass:"col-auto",attrs:{"data-aos":"flip-down"}},[t("div",{staticClass:"list"},[t("div",{staticClass:"list__item"},[t("div",{staticClass:"list__item__icon"},[t("img",{attrs:{src:s("b676"),alt:""}})])]),t("div",{staticClass:"list__txt bgicon p-0 px-4"},[t("h3",{staticClass:"mb-0"},[a._v("Meta 5")])])])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_2","data-aos":"zoom-in-left"}},[t("h2",[a._v("3.2 Reto 2. Satisfacer las necesidades de las personas ")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"row justify-content-start mb-4"},[t("div",{staticClass:"col-auto",attrs:{"data-aos":"flip-down"}},[t("div",{staticClass:"list"},[t("div",{staticClass:"list__item"},[t("div",{staticClass:"list__item__icon"},[t("img",{attrs:{src:s("b676"),alt:""}})])]),t("div",{staticClass:"list__txt bgicon p-0 px-4"},[t("h3",{staticClass:"mb-0"},[a._v("Meta 10")])])])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"row justify-content-start mb-4"},[t("div",{staticClass:"col-auto",attrs:{"data-aos":"flip-down"}},[t("div",{staticClass:"list"},[t("div",{staticClass:"list__item"},[t("div",{staticClass:"list__item__icon"},[t("img",{attrs:{src:s("b676"),alt:""}})])]),t("div",{staticClass:"list__txt bgicon p-0 px-4"},[t("h3",{staticClass:"mb-0"},[a._v("Meta 12")])])])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"titulo-segundo color-acento-contenido",attrs:{id:"t_3_3","data-aos":"zoom-in-left"}},[t("h2",[a._v("3.3 Reto 3. Herramientas y soluciones para la implementación y la integridad")])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"row justify-content-start mb-4"},[t("div",{staticClass:"col-auto",attrs:{"data-aos":"flip-down"}},[t("div",{staticClass:"list"},[t("div",{staticClass:"list__item"},[t("div",{staticClass:"list__item__icon"},[t("img",{attrs:{src:s("b676"),alt:""}})])]),t("div",{staticClass:"list__txt bgicon p-0 px-4"},[t("h3",{staticClass:"mb-0"},[a._v("Meta 16")])])])])])},function(){var a=this,t=a._self._c;return t("div",{staticClass:"row justify-content-start mb-4"},[t("div",{staticClass:"col-auto",attrs:{"data-aos":"flip-down"}},[t("div",{staticClass:"list"},[t("div",{staticClass:"list__item"},[t("div",{staticClass:"list__item__icon"},[t("img",{attrs:{src:s("b676"),alt:""}})])]),t("div",{staticClass:"list__txt bgicon p-0 px-4"},[t("h3",{staticClass:"mb-0"},[a._v("Meta 21")])])])])])}],o=s("5cb7"),l={name:"Tema1",components:{TarjetaAudioPersonalizada:o["a"]},data:()=>({}),mounted(){this.$nextTick(()=>{this.$aosRefresh()})},updated(){this.$aosRefresh()}},c=l,n=s("2877"),r=Object(n["a"])(c,i,e,!1,null,null,null);t["default"]=r.exports},f034:function(a,t,s){a.exports=s.p+"img/pause.8df843e4.svg"},f45e:function(a,t,s){a.exports=s.p+"img/68.7ba98cb5.png"},fe9e:function(a,t,s){a.exports=s.p+"img/80_1.11dd7651.png"}}]);
//# sourceMappingURL=tema3.4303cb00.js.map