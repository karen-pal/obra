import Thing from "../assets/thing.jpg";
import AudioEntrenamiento from "../assets/kardaver-speaks-no-background-noise.wav";
import inferenciaGif from "../assets/inferencia.gif";
export const TooltipContentOne = () => (
  <>
    <h1>DATASET</h1>
    <p>Lorem ipsum</p>
    <h1 className="text-xl text-red-500">test zustand</h1>
  </>
);

export const TooltipContentTwo = () => (
  <div>
    <h1>Title 2</h1>
    <p>Description for the second MarchingCube</p>
    <video controls>
      <source src="video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export const TooltipContentThree = () => (
  <div>
    <h1>Title 3</h1>
    <p>Some additional information here</p>
    <img src="image2.png" alt="Image 2" />
  </div>
);

export const DatasetTooltip = () => (
  <div className="flex gap-2 flex-col">
    <h1 className="text-lg">Datasets</h1>
    <p>
      El punto de inicio del proyecto fue la creación de un dataset con textos
      de transcripciones de sueños, pero a lo largo del proyecto nunca dejé de
      crear datasets. Ya sea grabándome contando en voz alta mis sueños para
      generar la parte sonora, como también haciendo idas y vueltas entre la
      escritura de textos para guiar la generación de imagen y video, y el
      volcar en descripciones textuales las imágenes generadas.
    </p>
  </div>
);

export const EntrenamientoTooltip = () => (
  <div className="flex gap-2 flex-col">
    <h1 className="text-lg">Entrenamiento</h1>
    <img src={Thing} />
    <audio
      src={AudioEntrenamiento}
      controls
      autoPlay
      //preload="auto"
    />
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
  </div>
);

export const InferenciaTooltip = () => (
  <div className="flex gap-2 flex-col">
    <h1 className="text-lg">Inferencia</h1>
    <img src={inferenciaGif} alt="inferencia-gif" />
    <p>
      Ya que diferentes modelos de generación de imagen y video tienen una
      característica gráfica particular, usé una gran variedad de modelos.
      Empecé a partir de traducir algunos sueños particulares al inglés y
      usándolos como prompts para generar videos. Luego, a partir de generar
      datasets en donde usaba CLIP interrogator para obtener los prompts que me
      llevarían a generar los frames de los videos, fui modificando mi estilo de
      prompteo sabiendo a qué marcas gráficas la arquitectura de stable
      diffusion asocia a los textos de mis sueños.
    </p>
  </div>
);

export const BuclesTooltip = () => (
  <div className="flex gap-2 flex-col">
    <h1 className="text-lg">Bucles</h1>
    <p>
      Uno de los ejes de Lenguaje Frontera es poder crear flujos complejos que
      interrelacionen modelos entre sí y conmigo, para la generación de
      circuitería híbrida human in the loop. Para esto cada output de cada
      modelo lo tomé como un potencial input de otros.
    </p>
  </div>
);
