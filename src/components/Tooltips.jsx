import useAssetStore from "../store/useAssetsStore";

export const DatasetTooltip = () => {
  const getAsset = useAssetStore((state) => state.getAsset);
  const DatasetsSuenosTexto = getAsset("DatasetsSuenosTexto");

  return (
    <div className="flex gap-2 flex-col">
      <h1 className="text-lg">Datasets</h1>
      {/* <img src={DatasetsSuenosTexto} alt="Datasets Sueños" /> */}
      <p>
        El punto de inicio del proyecto fue la creación de un dataset con textos
        de transcripciones de sueños, pero a lo largo del proyecto nunca dejé de
        crear datasets. Ya sea grabándome contando en voz alta mis sueños para
        generar la parte sonora, como también haciendo idas y vueltas entre la
        escritura de textos para guiar la generación de imagen y video, y el
        volcar en descripciones textuales las imágenes generadas.
      </p>
	  <br/>
	  <p className="italic border-l-4 border-gray-300 pl-4 text-green-600 text-base leading-relaxed">
	<span className="text-blue-600">01_09_2017</span><span className="text-white"> # </span>Vale dejar anotado que la semana pasada tuve otro de estos sueños, pero en ese yo como que volaba sobre el piso y al llegar a la puerta ""caía"" adentro de mi cuerpo que estaba acostado, y de vez en cuando me despertaba dentro del sueño nuevamente... lo de volar era como que mis ojos eran los que se movían y se movían libremente por arriba. <br/>
		 Muy vertiginoso ese sueño porque me habré despertado dentro del mismo sueño como 8 veces - 12 veces.
	  </p>
    </div>
  );
};

export const EntrenamientoTooltip = () => {
  const getAsset = useAssetStore((state) => state.getAsset);

  const thing = getAsset("Thing");
  const audioEntrenamiento = getAsset("AudioEntrenamiento");

  return (
    <div className="flex gap-2 flex-col">
      <h1 className="text-lg">Entrenamiento</h1>

      {/* {thing && <img src={thing} alt="Thing" />}

      {audioEntrenamiento && (
        <audio src={audioEntrenamiento} controls autoPlay />
      )} */}

      <p>
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
    </div>
  );
};

export const InferenciaTooltip = () => {
  const getAsset = useAssetStore((state) => state.getAsset);
  const inferenciaGif = getAsset("inferenciaGif");

  return (
    <div className="flex gap-2 flex-col">
      <h1 className="text-lg">Generar</h1>
      {/* <img src={inferenciaGif} alt="inferencia-gif" /> */}
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
      <p>
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
    </div>
  );
};

export const BuclesTooltip = () => {
  const getAsset = useAssetStore((state) => state.getAsset);
  const BuclesImg = getAsset("BuclesImg");

  return (
    <div className="flex gap-2 flex-col">
      <h1 className="text-lg">Bucles</h1>
      {/* <img src={BuclesImg} alt="bucles-img" /> */}

      <p>
        Uno de los ejes de Lenguaje Frontera es poder crear flujos complejos que
        interrelacionen modelos entre sí y conmigo, para la generación de
        circuitería híbrida human in the loop. Para esto cada output de cada
        modelo lo tomé como un potencial input de otros a partir de la idea de
        semiosis infinita y montaje semántico.
      </p>
    </div>
  );
};
