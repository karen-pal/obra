import datasetsSueños from "../assets/dataset_suenos.png";
export const Modal1 = () => (
  <>
    <h1> MODAL DATASET</h1>
    <h1 className="text-xl text-red-500">test zustand</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem
      praesentium nulla nisi provident eveniet, veritatis dolor doloribus
      nostrum dolores iure sint! Nam eveniet voluptatibus sunt, optio explicabo
      possimus provident.
    </p>
  </>
);

export const Modal2 = () => (
  <>
    <h1> Title 2</h1>
    <h1 className="text-xl text-red-500">test zustand</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem
      praesentium nulla nisi provident eveniet, veritatis dolor doloribus
      nostrum dolores iure sint! Nam eveniet voluptatibus sunt, optio explicabo
      possimus provident.
    </p>
  </>
);

export const Modal3 = () => (
  <>
    <h1> MODAL 3 </h1>
    <h1 className="text-xl text-red-500">test zustand</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam autem
      praesentium nulla nisi provident eveniet, veritatis dolor doloribus
      nostrum dolores iure sint! Nam eveniet voluptatibus sunt, optio explicabo
      possimus provident.
    </p>
  </>
);

export const DatasetsModal = () => (
  <>
    <h1> Datasets</h1>

    <p>
      El dataset original implicó digitalizar mis anotaciones de sueños, que
      estaban dispersas en decenas de cuadernos y bitácoras artísticas.
    </p>
    <img src={datasetsSueños} alt="datasetsSueños" />

    <p>
      En el proceso empecé a notar patrones y temáticas. Luego con metodologías
      de aprendizaje no supervisado, pude ahondar más en los temas que se
      repetían en distintos sueños. A partir de esto, encontré un “tipo de
      sueño” que vengo teniendo hace aproximadamente cinco años, en el cual
      sueño que despierto y me doy cuenta que estoy soñando, por lo que
      despierto nuevamente dentro de “otro sueño”, y así en bucles. Ese tipo de
      sueño estaba muy relacionado con mi interés por las narrativas no
      lineales, por lo que utilicé esas transcripciones como prompts en gran
      parte de la generación a partir de texto.
    </p>
    <p>
      Otro tipo de archivo personal que venía manteniendo era, al despertarme,
      mandarme una nota de voz a mí misma en la cual contaba mi sueño. Quise
      recuperar estas grabaciones y ampliarlas con lecturas de las
      transcripciones, generando un dataset de voz. Generando imágenes y videos
      con diferentes modelos, pude armar diferentes datasets a partir de
      utilizar modelos que realizan tareas de perception-language y de prompt
      engineering. Esto se veía como una exponenciación de datos disponibles, ya
      que, por ejemplo, en un momento a partir de 3 minutos de video llegué a
      armar un dataset de descripciones textuales de 12k filas.
    </p>
    <p>
      En estas tareas de perception-language me relacioné con diversos modelos
      indicándoles que interpreten de a un frame de un video como un sueño y que
      describan lo que sucedía en él. Otra cosa que les indiqué fue que
      transcriban el texto presente en la imagen - incluso si no había texto
      presente, induciendo alucinaciones del modelo. Con estos textos fui
      generando diversos datasets, que luego usé para llevar a cabo tareas de
      aprendizaje no supervisado para poder encontrar más relaciones entre
      diversos videos que nacen que generar a partir de diversos sueños.
    </p>
  </>
);
