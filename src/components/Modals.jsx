import useAssetStore from "../store/useAssetsStore";

export const DatasetsModal = () => {
  const getAsset = useAssetStore((state) => state.getAsset);

  const DatasetsSuenosTexto = getAsset("datasetsSueños");
  const datasetsSueños = getAsset("datasetsSueñosFull");
  const datasetIda = getAsset("datasetIda");
  const datasetDescription = getAsset("datasetDescription");
  const datasetImgTextosFull = getAsset("datasetImgTextosFull");
  const datasetsClusters = getAsset("datasetsClusters");

  return (
    <div className="flex flex-col gap-4 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Datasets</h1>

      {/* {DatasetsSuenosTexto && (
        <img
          className="w-full h-auto rounded-lg shadow-md"
          src={DatasetsSuenosTexto}
          alt="Datasets Overview"
        />
      )} */}

      <p className="text-base leading-relaxed">
        El punto de inicio del proyecto fue la creación de un dataset con textos
        de transcripciones de sueños, pero a lo largo del proyecto nunca dejé de
        crear datasets. Ya sea grabándome contando en voz alta mis sueños para
        generar la parte sonora, como también haciendo idas y vueltas entre la
        escritura de textos para guiar la generación de imagen y video, y el
        volcar en descripciones textuales las imágenes generadas.
      </p>
	  <p className="italic border-l-4 border-gray-300 pl-4 text-green-600 text-base leading-relaxed">
	<span className="text-blue-600">01_09_2017</span><span className="text-white"> # </span>Vale dejar anotado que la semana pasada tuve otro de estos sueños, pero en ese yo como que volaba sobre el piso y al llegar a la puerta ""caía"" adentro de mi cuerpo que estaba acostado, y de vez en cuando me despertaba dentro del sueño nuevamente... lo de volar era como que mis ojos eran los que se movían y se movían libremente por arriba.<br/>
		 Muy vertiginoso ese sueño porque me habré despertado dentro del mismo sueño como 8 veces - 12 veces.
	  </p>

      {/* {datasetsSueños && (
        <img
          className="w-full h-auto rounded-lg shadow-md"
          src={datasetsSueños}
          alt="datasetsSueños"
        />
      )} */}

      <p className="text-base leading-relaxed">
        El dataset original implicó digitalizar mis anotaciones de sueños, que
        estaban dispersas en decenas de cuadernos y bitácoras artísticas.
      </p>

	  <p className="font-mono px-2 py-1 rounded">
	.<br/>
	├── 14_11_2015.txt<br/>
	├── 01_09_2017.txt<br/>
	├── 03_12_2017.txt<br/>
	├── 02_01_2018.txt<br/>
	├── 02_05_2018.txt<br/>
	├── 08_09_2024.txt<br/>
	├── 12_08_2024.txt<br/>
	├── ...<br/>

	  </p>
      <p className="text-base leading-relaxed">
        En el proceso empecé a notar patrones y temáticas. Luego con
        metodologías de aprendizaje no supervisado, pude ahondar más en los
        temas que se repetían en distintos sueños. A partir de esto, encontré un
        “tipo de sueño” que vengo teniendo hace aproximadamente cinco años, en
        el cual sueño que despierto y me doy cuenta que estoy soñando, por lo
        que despierto nuevamente dentro de “otro sueño”, y así en bucles. 


	</p>
	  <p className="text-base leading-relaxed italic border-l-4 border-gray-300 pl-4 text-green-600">
		<span className="text-blue-600">07_09_2017</span><span className="text-white">#</span> Recuerdo otro de esos sueños , uno particularmente difícil, al final logré levantarme de la cama y abrí y cerré con gran fuerza las persianas de la ventana indicándole que se vaya.
	  </p>
	<p className="text-base leading-relaxed">
	  Ese
        tipo de sueño estaba muy relacionado con mi interés por las narrativas
        no lineales, por lo que utilicé esas transcripciones como prompts en
        gran parte de la generación a partir de texto. 
	</p>
	  <p className="font-mono px-2 py-1 rounded">
	   laying down on my bed, falling inside my own body <br/>
	   me trying to wake up. in my dreams i have seen this POV EYE
	  </p>
	<p className="text-base leading-relaxed">
	  Venía manteniendo otro
        tipo de archivo personal a partir de mandarme una nota de voz a mí misma
        en la cual contaba mi sueño al despertarme. Quise recuperar estas
        grabaciones y ampliarlas con lecturas de las transcripciones, generando
        un dataset de voz.
	  </p>

	<p className="text-base leading-relaxed">
	  Generando imágenes y videos con diferentes modelos,
        pude armar diferentes datasets a partir de utilizar modelos que realizan
        tareas de text inversion, perception-language y de prompt engineering.
        Esto se veía como una exponenciación de datos que tenía disponibles, ya
        que, por ejemplo, en un momento a partir de 3 minutos de video llegué a
        armar un dataset de descripciones textuales de 12k filas.
      </p>
	<p className="text-base leading-relaxed italic border-l-4 border-gray-300 pl-4 text-green-600">
	<span className="text-blue-600">0022.png</span>,"there are many yellow and black dots on the surface of the surface, fibanci background, by Paul Jacob Naftel, solarised, animation still screencap, oil on water, album artwork, in a rainy environment, panaormic, phobos, video still, olive oil, 2 d image","random probabilistic data sample from inside my dream, denoising-diffusion-probabilistic-models.csv"<br/>
	<span  className="text-blue-600">0025.png</span>,"brightly colored photograph of a city with a lot of buildings, dmt machine elves, made from million point clouds, film still from an cartoon, abstract nature landscape, underground scene, videogame screenshot, mit technology review, still from a music video, inflatable landscape with forest, by Joan Miró, expansive detailed layered city, large array, couches vibrating and melting, frostbite 3 rendered","random probabilistic data sample from inside my dream, denoising-diffusion-probabilistic-models.csv"<br/>
	<span  className="text-blue-600">0010.png</span>,"a close up of a picture of a rifle on a mountain, supercomputers text to images, trippy vibrant colors, in a mountain valley, scanned, by Xi Gang, old computer monitor, hellish landscape, 2dcg, you can see in the picture, scans from museum collection, nightvision, .ai, landslides","random probabilistic data sample from inside my dream, denoising-diffusion-probabilistic-models.csv"<br/>

	  </p>
      {/* {datasetIda && (
        <img
          className="w-full h-auto rounded-lg shadow-md"
          src={datasetIda}
          alt="datasets-ida-img"
        />
      )} */}

      <p className="text-base leading-relaxed">
        En estas tareas de perception-language me relacioné con diversos modelos
        indicándoles primero que describan las imágenes que componían los videos
        que iba armando, y luego que interpreten cada imagen como un sueño y que
        describan lo que sucedía en ese sueño. Otra cosa que les indiqué fue que
        transcriban el texto presente en la imagen - incluso si no había texto
        presente, induciendo alucinaciones del modelo.
      </p>
	  <p>
<div class="overflow-x-auto">
  <table class="min-w-full border border-gray-300 divide-y divide-gray-200">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ID</th>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Tarea</th>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Processed Text</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-4 py-2 text-sm text-gray-900">1216</td>
        <td class="px-4 py-2 text-sm text-gray-900">Describir objetivamente la imagen</td>
        <td class="px-4 py-2 text-sm text-gray-900">An image of two people standing in a doorway, one is looking out and the other is looking in.</td>
      </tr>
      <tr>
        <td class="px-4 py-2 text-sm text-gray-900">8480</td>
        <td class="px-4 py-2 text-sm text-gray-900">Extraer texto de la imagen</td>
        <td class="px-4 py-2 text-sm text-gray-900">The text present in the image says "The Future is Now" and features a man dancing in the clouds.</td>
      </tr>
      <tr>
        <td class="px-4 py-2 text-sm text-gray-900">11276</td>
        <td class="px-4 py-2 text-sm text-gray-900">Interpretar la imagen como un sueño</td>
        <td class="px-4 py-2 text-sm text-gray-900">This image represents a dream in which a man and a woman are lying in bed, their bodies are intertwined.</td>
      </tr>
    </tbody>
  </table>
</div>

	  </p>

      {/* {datasetDescription && (
        <img
          className="w-full h-auto rounded-lg shadow-md"
          src={datasetDescription}
          alt="datasets-description-img"
        />
      )}

      {datasetImgTextosFull && (
        <img
          className="w-full h-auto rounded-lg shadow-md"
          src={datasetImgTextosFull}
          alt="datasets-img-txt-full-img"
        />
      )} */}

      <p className="text-base leading-relaxed">
        Con estos textos fui generando diversos datasets, que usé para llevar a
        cabo tareas de Aprendizaje No Supervisado para poder encontrar más
        relaciones entre diversos videos, buscando potenciar posibilidades de
        montaje semántico, y para visualizar de manera indirecta relaciones
        entre distintos sueños que sucedieron a lo largo de muchos años.
      </p>
	  <p>
<div class="overflow-x-auto">
  <table class="min-w-full border border-gray-300 divide-y divide-gray-200">
    <thead class="bg-gray-100">
      <tr>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">ID</th>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Tarea</th>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Processed Text</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>
        <td class="px-4 py-2 text-sm text-gray-900">15972</td>
        <td class="px-4 py-2 text-sm text-gray-900">Extraer texto de la imagen</td>
        <td class="px-4 py-2 text-sm text-gray-900">The text present in the image says: "The world is a black hole. The black hole is the center of the universe."</td>
      </tr>
      <tr>
        <td class="px-4 py-2 text-sm text-gray-900">22710</td>
        <td class="px-4 py-2 text-sm text-gray-900">Extraer texto de la imagen</td>
        <td class="px-4 py-2 text-sm text-gray-900">The text present in the image says: "The world is a bed of roses, but we are the thorns."</td>
      </tr>
      <tr>
        <td class="px-4 py-2 text-sm text-gray-900">29369</td>
        <td class="px-4 py-2 text-sm text-gray-900">Interpretar la imagen como un sueño</td>
        <td class="px-4 py-2 text-sm text-gray-900">This image represents a dream in which a woman is lying on a bed with her head resting on her partner's chest.</td>
      </tr>
    </tbody>
  </table>
</div>

	  </p>

      {/* {datasetsClusters && (
        <img
          className="w-full h-auto rounded-lg shadow-md"
          src={datasetsClusters}
          alt="datasets-clusters-img"
        />
      )} */}
    </div>
  );
};

export const EntrenamientoModal = () => {
  const getAsset = useAssetStore((state) => state.getAsset);

  const thing = getAsset("Thing");
  const audioEntrenamiento = getAsset("AudioEntrenamiento");
  return (
    <div className="flex flex-col gap-4 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center"> Entrenamiento</h1>
      {/* <img className="w-full h-auto rounded-lg shadow-md" src={thing} />
      <audio src={audioEntrenamiento} controls autoPlay /> */}
      <p className="text-base leading-relaxed">
        Usando el dataset de grabaciones de mi voz relatando sueños, realicé
        varios reentrenamientos parciales (fine-tuning) de modelos preentrenados
        multimodales libres que toman texto y devuelven sonido. Estos modelos
        estaban pensados para generar música, especializándose en música para
        comerciales, sonidos FX y cortinas publicitarias. Me relacioné con el
        concepto de "olvido catastrófico" para accionar sobre las capacidades
        generativas de estos modelos y obtener variedad en los modos en que los
        modelos aprenden a generar mi voz.
      </p>
	  <p className="font-mono rounded text-green-600 text-base leading-relaxed">
		.<br/>
		├── finetuning_dos_sueños_100epochs<br/>
		├── finetuning_dos_sueños_10epochs<br/>
		├── finetuning_dos_sueños_20epochs<br/>
		│   ├── collapse<br/>
		│   └── third try<br/>
		├── finetuning_sueño_2023-09-13<br/>
		│   └── resembleAI<br/>
		├── finetuning_20_sueños<br/>
		│   └── musicgen_trainer<br/>
		│       ├── collapse<br/>
		│       ├── first tries<br/>
		│       ├── second try<br/>
		│       └── third try<br/>
		├── resemble_outputs<br/>
		└── resemble_outputs_enh<br/>
		    ├── collapse<br/>
		    └── third try<br/>

	  </p>

	  <p className="italic border-l-4 border-green-300 pl-4 text-base leading-relaxed">
	  Que los modelos de Inteligencia Artificial generativos multimodales puedan ser
	  reentrenados parcialmente y con datasets pequeños (<span className="font-extrabold"> finetuning </span>) fue un descubrimiento
	  fortuito de sus características, y no una propiedad diseñada o modelada matemáticamente. El finetuning es
	  una gran fisura (fértil) de la IA generativa.
	  </p>
      <p className="text-base leading-relaxed">
        Por ejemplo, entrenando por poco tiempo (pocas <span className="italic"> epochs</span>), el modelo se vio obligado a 
        <span className="font-extrabold"> memorizar mi voz</span>. En este caso, al incluir en el prompt “kardaver”,
        podía reproducir exactamente algunas frases frecuentes de las
        grabaciones, como “soñé que” y “y después”. En el proceso, <span className="font-extrabold"> olvidó</span> todas
        las otras capacidades de generación, como su rango de estilos y géneros
        musicales, y su capacidad de generar sonidos FX, quedando un modelo que
        solo sabía reproducir mi voz, sin poder, por ejemplo, añadirle una
        percusión de fondo o modificar su tempo. 
	</p>
	<p> Al entrenar el modelo por más tiempo ( con
        muchas <span className="italic">epochs</span> ) y con una versión más grande del dataset de grabaciones de
        mi voz, el modelo buscó <span className="font-extrabold">generalizar</span>, y conservó sus capacidades previas.
        Sin embargo, al no haber sido entrenado previamente con ejemplos de la
        voz humana, asociaba “kardaver” a un ruido granular o un soplido
        ruidoso. Al conservar sus capacidades previas, "aprendió" parcialmente las características sonoras de este nuevo tipo de sonido.
	</p>
	<p> Realizando entrenamientos en puntos medios de este espectro
        pude obtener varios finetunings distintos, con los cuales producir la
        parte sonora de la obra.
      </p>
	  <p className="font-mono rounded text-green-600 text-base leading-relaxed">
	.<br/>
	├── finetuning_dos_sueños_100epochs<br/>
	│   ├── Hoy tuve un sue__o muy raro.wav<br/>
	│   ├── Despert__ dentro de mi sue__o.wav<br/>
	│   ├── kardaver retells her dream_ Hoy tuve.wav<br/>
	├── finetuning_dos_sueños_10epochs<br/>
	│   ├── Hoy tuve un sue__o muy raro.wav<br/>
	│   ├── Despert__ dentro de mi sue__o.wav<br/>
	│   ├── kardaver retells her dream_ Hoy tuve.wav<br/>
	│   ├── kardaver retells her dream then she stops and screams.wav<br/>
	│   ├── kardaver talks while she sleeps and tells her dream_.wav<br/>
	│   └── kardaver talks about her dream.wav<br/>
	├── ... <br/>
	▒▒▒░░░░░▒▒▒▒▒▒▒▒░░▒▒▒░░░░░░░░░░░░░░░░░<br/>
	▒▓▓▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓▓▒░░░░░░░░░░░░░░░░░<br/> 

	  </p>
    </div>
  );
};

export const InferenciaModal = ({}) => {
  const getAsset = useAssetStore((state) => state.getAsset);
  const inferenciaGif = getAsset("inferenciaGif");
  const inferenciaDeep = getAsset("inferenciaDeep");
  const inferenciaFilters = getAsset("inferenciaFilters");
  const inferenciaTwoImg = getAsset("inferenciaTwoImg");

  return (
    <div className="flex flex-col gap-4 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Generar</h1>
      {/* <img
        src={inferenciaGif}
        alt="inferencia-gif"
        className="w-full h-auto rounded-lg shadow-md"
      /> */}
	  <p className="text-xs text-center">
	  <pre>
@@@@@@@@@@@@@%%%%%@@@@@@@@@<br/>
@@@@@%*+++==-------#@@@@@@@<br/>
@@@@@%++==---:::::-#@@@@@@@<br/>
@@@@@%+==---:::::::*@@@@@@@<br/>
@@@@@#==---::::::::**@@@@@@<br/>
@@@@@#==--:::....::**@@@@@@<br/>
@@@@@#=--:::.......**@@@@@@<br/>
@@@@@#=--::-=-.....**@@@@@@<br/>
@@@@@#=--:-+=+=....**@@@@@@<br/>
@@@@@#=--:=*@+*....**@@@@@@<br/>
@@@@@#=----+*++....**@@@@@@<br/>
@@@@@#==------:...:**@@@@@@<br/>
@@@@@%+=--:::...:::**@@@@@@<br/>
@@@@@%+==--::::::::#@@@@@@@<br/>
@@@@@%*+===---:::--#@@@@@@@<br/>
@@@@@@@@@@@@%%%%%%@@@@@@@@@<br/>
	  </pre>
	  </p>
      <p className="text-base leading-relaxed">
        Ya que diferentes modelos de generación de imagen y video tienen una
        característica gráfica particular, usé una gran variedad de modelos.
        Empecé a partir de traducir algunos sueños particulares al inglés y
        usándolos como prompts para generar videos. Luego, a partir de generar
        datasets en donde usaba distintas metodologías de text inversion para
        obtener los prompts que me llevarían a generar los frames de los videos,
        fui modificando mi estilo de prompteo sabiendo a qué marcas gráficas la
        arquitectura de stable diffusion asocia a los textos de mis sueños.
        Además, fui creando flujos que me permitan dar como entrada de un modelo
        la salida de otro.
      </p>
      <p className="text-base leading-relaxed">
        En general los modelos stable diffusion 1.5 para abajo, al hablar de mis
        sueños más frecuentes se encontraban ante el caso de un prompt realmente
        Out-of-Distribution (OOD) y generaban su versión de ruido/glitch:
        motivos geométricos simples con patrones repetitivos, muy parecidos a
        los que se podían observar en las primeras layers de la arquitectura de
        Deep Dream. Me pareció muy interesante explorar el mantener la
        generación en un estado de generación al límite - OOD, así como explicar
        o relatar un sueño nos mantiene al límite de lo decible. El poder
        relacionarlo con la tradición gráfica de las redes neuronales fue una
        serendipia muy bienvenida - previamente a la visualizaciones de las
        primeras layers de Deep Dream, estas componentes gráficas de patrones
        geométricos simples habían sido un punto de ruptura en campo de computer
        vision al encontrar una semántica simbólica en los filtros aprendidos
        por arquictecturas AlexNet (2012) y VGG (2014).
      </p>
	  <p className="text-xs text-center" >
	  <pre>
	  @@@@@@@@@@@@@@@%%%@@@@@@@@@@@@@@@@@<br/>
          #******##%#*#**###*#**###*####%%##%<br/>
          #+++************++++++++++******++*<br/>
   	  ****+****++************##********+*<br/>
          *+****+++++++++++++++******++*****#<br/>
          #+*****++++*++*+******+++++++*****#<br/>
          *=+*++*********+****++****++++****#<br/>
          #++******+++**+++****+==+********+#<br/>
          *+++****++*****+++***********+****#<br/>
          #*****++++**+**#**+++++++***+*****#<br/>
          #**+*++++****++++++++*+++*********#<br/>
          #*****++++*++++++++++++++*******++#<br/>
          #*++++++*******+++++++++++++++++++#<br/>
          #***++*+++*****++**+++******+***++#<br/>
          #****+*+++++*++**#****++*****++++=*<br/>
          #***#####%%#*##**#########***#****%<br/>

	  </pre>
	  </p>

	  <p className="text-xs text-center">
	  <pre>
	#************#*###*****************<br/>
	+===================++++++++++++++*<br/>
	+==================+++***********+*<br/>
	*==========+++++*******************<br/>
	*++++++***+***##***************#**#<br/>
	*****####************++++++++++=++*<br/>
	#**###********++++===============++<br/>
	#*#*#********+=======-=======+++++*<br/>
	***+*+=================+++++++++++*<br/>
	+==============+++++++++++++++++++*<br/>
	+========++++++++++++++++++*****++*<br/>
	*+++++++++++++++++**********#******<br/>
	*+******************************###<br/>
	******************************+****<br/>
	********************+*+*+*+=======+<br/>
	*+===++++++++=++++++=+++===+++++==*<br/>
	  </pre>
	  </p>
      <p className="text-base leading-relaxed">
        De hecho, usando CLIP interrogator, el mismo modelo CLIP que usa por
        debajo Stable Diffusion, asocia las imágenes que genera a partir de
        prompts extremadamente OOD con los tokens “Deep Neural Networks” y “Deep
        Dream”, “Deep Learning”, y “denoising-diffusion-probabilistic-models”.
      </p>
	  <p className="text-s text-center">
	  <pre>

	.:::..:+==-::. :==-::-=-----::::.  <br/>
	.+*+..:+++--:..-++-::-=-------*#+. <br/>
	.#%#---::----=+===---::::::-==%@#. <br/>
	.%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%. <br/>
	.+++===========================--. <br/>
	 ...              ..:------------. <br/>
	 ...............::=##@@@@@@@@@@@@: <br/>
	.%@@@@@@@@@@@@@@@@@@@@@@@@@@@@%*+. <br/>
	 :----------------------------:..  <br/>
	 -==--===========================. <br/>
	.%@@@@@@@@@@@@@@@@@@@@@@@%%%%%@@%. <br/>
	.#@@@@@@@@@@@@@@@@@@@%%#....  .:.  <br/>
	.#%#+++==============---...-==+*+. <br/>
	.*#+..:------::---::::::===+**%%#. <br/>
	 ---++#@@@@@@@@@@@@@@#**#%%+----:  <br/>
	 .........::....:::..............  <br/>
	</pre>
	  </p>
      <p className="text-base leading-relaxed">
        Por ejemplo, a partir de una imagen generada a partir de un sueño CLIP
        interrogator devolvió: “a close up of a blue and white wall with a
        pattern of wavy lines, 8 k time - lapse functions, heavy impasto
        technique, half submerged in water, deep dream, made of paperclips,
        super slowmotion”.
      </p>
<p>

    <div class="container ">
        <table class="min-w-full table-auto bg-white rounded-lg shadow-md">
            <thead class="bg-gray-200">
                <tr>
                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-600">ID</th>
                    <th class="px-4 py-2 text-left text-sm font-medium text-gray-600">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-t border-gray-300">
                    <td class="px-4 py-2 text-sm text-gray-800">6:144</td>
                    <td class="px-4 py-2 text-sm text-gray-800">a close up of a blue and white wall with a pattern of wavy lines, 8 k time-lapse functions, heavy impasto technique, half submerged in water, deep dream, made of paperclips, super slowmoti.png</td>
                </tr>
                <tr class="border-t border-gray-300">
                    <td class="px-4 py-2 text-sm text-gray-800">4:0010</td>
                    <td class="px-4 py-2 text-sm text-gray-800">a close up of a picture of a rifle on a mountain, supercomputers text to images, trippy vibrant colors, in a mountain valley, scanned, by Xi Gang, old computer monitor, hellish landscape, 2dcg, you can see in the picture, scans from museum collection, nightvision, .ai, landslides</td>
                </tr>
                <tr class="border-t border-gray-300">
                    <td class="px-4 py-2 text-sm text-gray-800">13:0024</td>
                    <td class="px-4 py-2 text-sm text-gray-800">painting of a dolphin with a colorful background and a black and yellow tail, film still from movie dune-2021, fractalpunk, 2 0 1 5 live music video, david rudnick, slimy fluid liquid blobs, supercomputers text to images, highly turbulent, nebulous, aspect ratio 16:9, galactic waterfalls, turbulent</td>
                </tr>
                <tr class="border-t border-gray-300">
                    <td class="px-4 py-2 text-sm text-gray-800">26:0014</td>
                    <td class="px-4 py-2 text-sm text-gray-800">a close up of a television screen with a lot of different pictures, melting spaceships!, supercomputers text to images, by Akira Toriyama, discord pfp, 1997, formula 1, dichromatism, scan, trending on artstatioin, russia, old internet art, super storm, bomberman, sea of milk</td>
                </tr>
            </tbody>
        </table>
    </div>
	  </p>
      {/* <img
        className="w-full h-auto rounded-lg shadow-md"
        src={inferenciaDeep}
        alt="inferencia-deep-img"
      />
      <img
        className="w-full h-auto rounded-lg shadow-md"
        src={inferenciaFilters}
        alt="inferencia-filters-alexnet-img"
      />
      <img
        className="w-full h-auto rounded-lg shadow-md"
        src={inferenciaTwoImg}
        alt="inferencia-filters-alexnet-img"
      /> */}
    </div>
  );
};

export const BuclesModal = ({}) => {
  const getAsset = useAssetStore((state) => state.getAsset);
  const BuclesImg = getAsset("BuclesImg");
  const buclesProcLengConZocalo = getAsset("buclesProcLengConZocalo");
  const buclesFlujoCompl = getAsset("buclesFlujoCompl");
  const bucleImg = getAsset("bucleImg");
  const bucleMiniflujo5 = getAsset("bucleMiniflujo5");
  const bucleMiniflujo1 = getAsset("bucleMiniflujo1");
  const bucleMiniflujo4 = getAsset("bucleMiniflujo4");
  const bucleMiniflujo2 = getAsset("bucleMiniflujo2");
  return (
    <div className="flex flex-col gap-4 p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Bucles</h1>
      {/* <img
        className="w-full h-auto rounded-lg shadow-md"
        src={BuclesImg}
        alt="bucles-img"
      /> */}
<p className="text-s">
	  <pre>
+-------------------------------------------------------------------+<br/>
|                                                                   |<br/>
|         text2img          img2vid                                 |<br/>
| texto------------>imágenes------>videos--->(texto,[entities])     |<br/>
| sueños                                              |             |<br/>
|                                                     |             |<br/>
|                                                     |tSNE         |<br/>
|                                                     |             |<br/>
|                                                     |             |<br/>
|                                                     v             |<br/>
|                                              clusters+ngramas     |<br/>
|                                                     /\            |<br/>
|                                                   /-  -\          |<br/>
|                                                 /-      \         |<br/>
|                                                v         v        |<br/>
|                                            video1 ....  video30   |<br/>
|                                                                   |<br/>
+-------------------------------------------------------------------+<br/>
	  </pre>
	  </p>
      <p className="text-base leading-relaxed">
        Uno de los ejes de Lenguaje Frontera es poder crear flujos complejos que
        interrelacionen modelos entre sí y conmigo, para la generación de
        circuitería híbrida human in the loop. Para esto cada output de cada
        modelo lo tomé como un potencial input de otros a partir de la idea de
        semiosis infinita y montaje semántico.
      </p>
      {/* <img src={buclesProcLengConZocalo} alt="bucles-proc-lenguaje-gif" /> */}
      <p className="text-base leading-relaxed">
        Por un lado establecí bucles de manera horizontal , interconectando
        modelos de distintas modalidades, y haciendo idas y vueltas entre texto,
        imagen, video, etc.
      </p>
		  <p className="text-s text-center">
		  <pre>
+------------------------------------------------------------------+<br/>
|                                                                  |<br/>
|                                                                  |<br/>
|                                                                  |<br/>
|                             inversión                            |<br/>
|          text2img           textual         text2img             |<br/>
|             |                  |               |                 |<br/>
|             V                  V               V                 |<br/>
|   texto----------->imágen --------->texto  --------->imágen      |<br/>
|   sueño            generada         (prompt)         nueva-      |<br/>
|                                         ^-            /-         |<br/>
|                                           \-        /-           |<br/>
|                                             \-    /-             |<br/>
|                                               \---               |<br/>
|                                             inversión            |<br/>
|                                             textual              |<br/>
|                                                                  |<br/>
|                                                                  |<br/>
+------------------------------------------------------------------+<br/>
                                                                   </pre>
	  </p>
                                                                    
                                                                    
                                                                    
      {/* <img src={buclesFlujoCompl} alt="bucles-flujo-completo-img" /> */}
      {/* <img
        className="w-full h-auto rounded-lg shadow-md"
        src={bucleImg}
        alt="bucles-img"
      />
      <img
        className="w-full h-auto rounded-lg shadow-md"
        src={bucleMiniflujo5}
        alt="bucles-miniflujo-5-img"
      />
      <img
        className="w-full h-auto rounded-lg shadow-md"
        src={bucleMiniflujo1}
        alt="bucles-miniflujo-1-img"
      /> */}

      <p className="text-base leading-relaxed">
        Por otro lado también establecí bucles verticales, centrándome en una
        modalidad. Interconecté en tiempo de inferencia diferentes modelos text
        2 image a partir de realizar image conditioning, o usando una imagen
        generada por un modelo como máscara para el próximo. Ciertos modelos
        siempre generan un tipo de estética, que a otros les cuesta, y cada uno
        tiene un glitch diferente.
      </p>
	  <p className="text-s text-center">
	  <pre>
+----------------------------------+<br/>
|                    /-            |<br/>
|                 /--              |<br/>
|              /----               |<br/>
|           /--                    |<br/>
|         V-                       |<br/>
|     VQGan ----------> StyleGAN   |<br/>
|                       /--        |<br/>
|                  /----           |<br/>
|             /----                |<br/>
|          V--                     |<br/>
|     SD Deforum ----->ModelScope  |<br/>
|                      /--         |<br/>
|                 /----            |<br/>
|            /----                 |<br/>
|         V--                      |<br/>
|    AnimateDiff ------>Gen2       |<br/>
|                   /---           |<br/>
|            /------               |<br/>
|        V---                      |<br/>
|     SD Video                     |<br/>
|         \                        |<br/>
|          -\                      |<br/>
|            -\                    |<br/>
|              -\                  |<br/>
|                V                 |<br/>
+----------------------------------+<br/>
	  </pre>
	  </p>
      {/* <img
        className="w-full h-auto rounded-lg shadow-md"
        src={bucleMiniflujo4}
        alt="bucles-miniflujo-4-img"
      />
      <img
        className="w-full h-auto rounded-lg shadow-md"
        src={bucleMiniflujo2}
        alt="bucles-miniflujo-2-img"
      /> */}

      <p className="text-base leading-relaxed">
        Buscaba en esto romper los moldes estéticos con los cuales fueron
        pensados, para lograr mantenerme en la zona límite/frontera Out of
        Distribution (OOD).
      </p>
      {/* <h2 className="text-2xl mb-4">Cluster Visualization</h2>
      <div className="w-full h-[75vh]">
        <iframe
          src="https://karen-pal.github.io/semantic_explore/interactive_plot_with_clusters_and_3grams_perplexity_50_FULL.html"
          className="w-full h-full border-none"
          title="Cluster Plot"
        />
      </div> */}
    </div>
  );
};
