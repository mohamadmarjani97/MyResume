import { achievementType, projectType } from "../types/allTypes";

export const biochapters: { title: string; desc: string }[] = [
  {
    title: "Chapter One: The Beginning",
    desc: "Mohamad Marjani was born on 11 December1996 in Golpayegan, Isfahan. His family is just like any other family in the world, with all the problems that a family might encounter. His schooling fluctuated so much that at one time he studied hard and at another time he was worried about skipping school. Two years before graduating from high school, he stumbled upon a book called Master of Love and was so impressed that he thought he might be able to influence others in the future."
  },
  {
    title: "Chapter Two: University",
    desc: "The formula for achieving dreams is hard work, and this helped Mohamad enter a university of Khajeh Nasir. Although he wasn't initially satisfied with the accepted major, as he became more familiar with the field of geomatics, his interest in its topics grew, especially in Geographic Information System (GIS) and Remote Sensing (RS). His interest in artificial intelligence grew throughout his bachelor's degree, and he attempted from the beginning to gain knowledge in the field of artificial intelligence and apply it to geomatics. Geomatics in Iran was a new field and only a few knowledge-based companies were available. Mohammad had always wished he could start a geomatics company in the future, yet Iran made it impossible to fulfill his dream."
  },
  {
    title: "Chapter Three: Research World",
    desc: "His first attempts to enter the world of research dates back to the last year of his bachelor's degree. At the time, because Mohammad had done a successful project in the course of the photogrammetry applications and was selected as the best project, Mohamad was encouraged to develop his undergraduate project in the field 3D change detection in point cloud data by his professor Dr. Hamid Ebadi(professor of photogrammetry applications course). A paper was published as a result of this project in the first national conference on data mining in earth sciences at Iran. Mohamad was inspired by the publication of this article to write an article on research in the future. In his field of interest, he has always found it fascinating to read articles written by different researchers and to get a sense of what they are thinking."
  },
  {
    title: "Chapter Four: To be continued",
    desc: "After completing his bachelor's degree, he entered the master's course without university entrance exam because he was 4th (4/40) ranked among B.S students of geomatic major, Khajeh Nasir university.  From the beginning of his master's degree, he tried finding a subject that would satisfy his desires, and his desires could only be met by artificial intelligence. Dr. Abolghasem Sadeghi Niaraki presented a course on advanced spatial analysis to students in the first year, after which the project Mohammad had done was selected as the best one and Mohammad was asked to present the results of the project as a scientific research paper.  Due to the research results, the Journal of Geomatic Science and Technology was chosen as a publication venue, and this article is currently undergoing a peer review process.As the second project, Mohamad participated in another project in the same course, and the results of this project were published in the Journal of Human Geography Research. After gaining experience in the field of research during the postgraduate course, he finally chose the topic of his thesis to: spread of forest fires using deep learning methods, and according to his background, he was able to graduate in the third semester. Write an article on the spread of forest fires using deep learning techniques that is currently being reviewed."
  
  },
];

// if you master in any of your skill you just need to set "perc" of that skill to 300. it will add an explosion effect to that skill
// and make sure you put that skill in the even row: 2,4,6,...

export const hardSkillList: {
  name: string;
  icon: string;
  perc: number;
  color: string;
}[] = [
  {
    name: "Python",
    icon: "python.png",
    perc: 90,
    color: "(97,218,251)",
  },
  {
    name: "ArcGIS",
    icon: "ArcGIS.png",
    perc: 300,
    color: "(118,212,207)",
  },
  {
    name: "Anaconda",
    icon: "anaconda.png",
    perc: 90,
    color: "(97,218,251)",
  },
  {
    name: "Jupyter Notebook",
    icon: "jupyter.png",
    perc: 90,
    color: "(97,218,251)",
  },
  {
    name: "Pycharm",
    icon: "Pycharm.png",
    perc: 90,
    color: "(97,218,251)",
  },
  {
    name: "Spyder",
    icon: "spyder.png",
    perc: 90,
    color: "(97,218,251)",
  },
  {
    name: "MATLAB",
    icon: "MATLAB.png",
    perc: 90,
    color: "(49,120,198)",
  },
 
  {
    name: "QGIS",
    icon: "Qgis.png",
    perc: 80,
    color: "(118,212,207)",
  },
  {
    name: "HTML",
    icon: "html.png",
    perc: 50,
    color: "(228,79,38)",
  },
  
  {
    name: "CSS",
    icon: "css.png",
    perc: 50,
    color: "(21,114,182)",
  },
  {
    name: "Javascript",
    icon: "javascript.png",
    perc: 75,
    color: "(247,223,30)",
  },
  {
    name: "C++",
    icon: "C++.png",
    perc: 50,
    color: "(6,182,212)",
  },
  {
    name: "Microsoft products",
    icon: "MS.png",
    perc: 90,
    color: "(90,164,38)",
  },
  {
    name: "Postqre",
    icon: "postgre.png",
    perc: 60,
    color: "(90,164,38)",
  },
  {
    name: "SQL server",
    icon: "SQL-Server.png",
    perc: 50,
    color: "(90,164,38)",
  },
  {
    name: "Envi",
    icon: "ENVI.png",
    perc: 70,
    color: "(90,164,38)",
  },
  {
    name: "R programing language",
    icon: "R.png",
    perc: 80,
    color: "(90,164,38)",
  },
  {
    name: "Geo Server",
    icon: "GeoServer.png",
    perc: 80,
    color: "(90,164,38)",
  },
  {
    name: "Keras",
    icon: "Keras.png",
    perc: 80,
    color: "(90,164,38)",
  },
  {
    name: "Tensorflow",
    icon: "tensorflow.png",
    perc: 80,
    color: "(90,164,38)",
  },
];
export const SoftSkillList: {
  name: string;
  icon: string;
  perc: number;
  color: string;
}[] = [
  {
    name: "Adaptability",
    icon: "adaptability.png",
    perc: 95,
    color: "(1,1,1)",
  },
  {
    name: "Creativity",
    icon: "creativity.png",
    perc: 300,
    color: "(242,183,7)",
  },
  {
    name: "comunication",
    icon: "comunication.png",
    perc: 90,
    color: "(37,185,84)",
  },
  {
    name: "Responsibility",
    icon: "responsibility.png",
    perc: 90,
    color: "(253,236,166)",
  },
  {
    name: "Self Motivation",
    icon: "selfmotivation.png",
    perc: 88,
    color: "(143,255,171)",
  },
  {
    name: "Team work",
    icon: "teamwork.png",
    perc: 88,
    color: "(62,135,200)",
  },
];

export const langList: {
  name: string;
  icon: string;
  perc: number;
  color: string;
}[] = [
  {
    name: "Persian",
    icon: "farsi.png",
    perc: 90,
    color: "(192,192,192)",
  },
  {
    name: "English",
    icon: "english.png",
    perc: 70,
    color: "(192,192,192)",
  }
];

export const eduSkillList: string[] = [
  "Deep Learning",
  "Simulation",
  "Advance Deep Learning",
  "Artificial neural network",
  "Recurrent neural network",
  "Computer Vision",
  "Time Series Modeling",
  "Genetic Algorithm",
  "Ant Colony Algorithm",
  "Bee colony Algorithm",
  "PSO Algorithm",
  "Image Segmentation",
  "Optimization",
  "Spatial Analysis",
  "Geospatial Data Analysis",
  "Satellite Images Classification",
  "Network Analysis",
  "Lidar",
  "DTM",
  "programming language(C++)",
  "Advanced programming language(Python)",
  "Cellular Automata",
  "Agent based modeling",
  "Fozzy Logic",
  "Multi criteria decision making",
  "Metaheuristic Algorithms",
  "Advanced GIS",
  "Database",
  "Environment modeling",
  "Advanced spatial Analysis",
  "WebGIS",
  "Change detection",
  "Pattern recognition",
  "Remote sensing",
  "Image Processing",
  "Spatial Analysis",
  "Photogrammetry",
  "Spatial Planning",
  "Graph Theory",
  "Close Range Photogrammetry",
  "Geodesy",
  "SDI",

];

// image must be png format in media/logos/
export const eduData: {
  name: string;
  field: string;
  about: string;
  image: string;
}[] = [
  {
    name: "Khaje Nasir Toosi University Of Technology",
    field: "(2016-2020) Bachelor Degree - Geodesy and Geomatic Engineering",
    about:
      "K. N. Toosi University of Technology, made up of eleven academic faculties, opens doors to top talents of engineering and science. It brings together all levels of education and offers innovative training to its 7000|+ students.",
    image: "kntu",
  },
  {
    name: "Khaje Nasir Toosi University Of Technology",
    field: "(2020-present) Master of Engineering - GIS",
    about:
    "K. N. Toosi University of Technology, made up of eleven academic faculties, opens doors to top talents of engineering and science. It brings together all levels of education and offers innovative training to its 7000|+ students.",
    image: "kntu",
  },
];

export const contactList: {
  site: string;
  username: string;
  logo: string;
  link: string;
}[] = [
  {
    site: "LinkedIn",
    username: "mohamad-marjani",
    logo: "linkedin",
    link: "https://www.linkedin.com/in/mohamad-marjani-727547206/",
  },
  {
    site: "ResearchGate",
    username: "Mohamad-Marjani",
    logo: "rg",
    link: "https://www.researchgate.net/profile/Mohamad-Marjani",
  },
  {
    site: "Gmail",
    username: "MohamadMarjani97",
    logo: "gmail",
    link: "mailto:MohamadMarjani97@gmail.com",
  },
  {
    site: "Telegram",
    username: "Mohamad_Marjanii",
    logo: "telegram",
    link: "https://t.me/Mohamad_Marjanii",
  },
  {
    site: "WhatsApp",
    username: "",
    logo: "whatsapp",
    link: "https://wa.me/989211872482?text=Hello%20Mohamad!%20I've%20reached%20you%20through%20your%20personal%20website.",
  },
  {
    site: "Instagram",
    username: "mohamad_marjanii",
    logo: "instagram",
    link: "https://www.instagram.com/mohamad_marjanii/",
  },
];

export const projectList: projectType[] = [
  {
    name: "A novel hyrid deep learning model for predicting spread of wildfire",
    desc: "The use of deep learning for predicting wildfire spread began in 2006, when researchers at Stanford University developed a system that could predict the movement of a fire based on its location, size, and wind speed. Since then, research into this area has continued apace, with new advances being made all the time. In particular, recent work has focused on using machine learning techniques to improve predictions about how fires will behave under different conditions.",
    url: "https://www.researchgate.net/publication/359336826_A_novel_hybrid_deep_learning_model_for_predicting_spread_of_wildfire",
    gitHub: "https://www.researchgate.net/publication/359336826_A_novel_hybrid_deep_learning_model_for_predicting_spread_of_wildfire",
    image: "1.png",
    techs: [
      { name: "Deep Learning", color: "#61D9FA" },
      { name: "Wildfire", color: "#081722" },
      { name: "Forest Fire", color: "#06B6D4" },
      { name: "CNN", color: "#EC00C1" },
      { name: "LSTM", color: "#DD3A0A" },
    ],
    fullText: <>  
    <p>In this study, a hybrid deep learning model was developed based on real fire data and meteorological factors to predict wildfire spreading. We implemented a fully connected convolutional neural network long short term memory (FC-CNN-LSTM) model to predict the forest fire spread in the coming days by using an appropriate cost function. The FC-CNN-LSTM model was trained by using a set of related variables, including climate data, daily fire data, landcover data and topographic data.</p>
    <img src="/media/projects/1.png" />
    <p>Our proposed model compared to other deep learning models such as fully connected convolutional recurrent neural network (FCCRNN), neural network(NN), recurrent neural network(RNN),has higher accuracy, F1 score, precision and recall in predicting fire spread. According to our results deciduous shrubland can significantly Influence a fire's spread. To determine the effects of a variable on fire spread, correlation analysis is used. Almost in most days of the fire, meteorological variables are inversely related to fire activity. Topographic factors often play a positive role in the spread of fire days and the intensity effect has increased with passing time.</p>
    <img src="/media/projects/2.png" />
    <img src="/media/projects/3.png" />

 </>,
  },
  {
    name: "Simulating forest fire spread with cellular automata",
    desc: "A cellular automaton is a discrete model of computation in which each cell in an array is updated according to a set of rules that take into account the state of neighboring cells. Cellular automata have been used for many purposes, including modeling physical systems and creating art. In this project, we will use cellular automata to model forest fires.",
    url: "https://drive.google.com/file/d/1Uil8jxiy7QsMVdgyClaJaDYZs6pR1m_Y/view?usp=sharing",
    gitHub: "https://drive.google.com/file/d/1Uil8jxiy7QsMVdgyClaJaDYZs6pR1m_Y/view?usp=sharing",
    image: "GIF1_new.gif",
    techs: [
      { name: "Simulation", color: "#61D9FA" },
      { name: "Agent", color: "#290BA0" },
      { name: "Cellular Automata", color: "#06B6D4" },
      { name: "Forest Fire", color: "#EC00C1" },
      { name: "Wildfire", color: "#7BB651" },
      { name: "Python", color: "#F7DF1E" },
    ],
    fullText: (
      <>
        <p>
        In our simulation, each cell represents an area of land that can be on fire, not on fire or burned.
        The states on fire,burned and not on fire are represented by three different colors: red for on fire,
        brown for burned and green for not on fire. The simulation starts with some areas of land already
        burning (represented by red cells), and then fire spreads throughout the grid according to specific rules.
        </p>
        <img src="/media/projects/GIF1_new.gif" />
      </>
    ),
  },

  {
    name: "Simulation of forest fire spread and firefighter agents action in new isolation forest using cellular automata",
    desc: "Forest fires can be extremely dangerous and destructive. They can spread quickly, and the smoke and heat can be deadly. In order to fight forest fires, firefighters use simulation software to create a model of the fire. This allows them to plan their attack strategy before they even reach the scene of the fire. One such simulation software is cellular automata (CA). CA is a type of computer program that simulates the behavior of objects in a grid-like or lattice-like structure. It has been used to model everything from traffic congestion to climate change",
    url: "https://drive.google.com/file/d/1Z9NfxXBQnFvjg65kSAdjfJJ7mY8gFuYK/view?usp=sharing",
    gitHub: "https://drive.google.com/file/d/1Z9NfxXBQnFvjg65kSAdjfJJ7mY8gFuYK/view?usp=sharing",
    image: "GIF2_new.gif",
    techs: [
      { name: "Simulation", color: "#61D9FA" },
      { name: "Agent", color: "#290BA0" },
      { name: "Cellular Automata", color: "#06B6D4" },
      { name: "Forest Fire", color: "#EC00C1" },
      { name: "Wildfire", color: "#7BB651" },
      { name: "Python", color: "#F7DF1E" },
    ],
    fullText: (
      <>
        <p>
        Forest fires can be extremely dangerous and destructive. They can spread quickly,
         and the smoke and heat can be deadly. In order to fight forest fires, firefighters
        use simulation software to create a model of the fire. This allows them to plan their
          attack strategy before they even reach the scene of the fire. One such simulation software
          is cellular automata (CA). CA is a type of computer program that simulates the behavior of
           objects in a grid-like or lattice-like structure. It has been used to model everything from traffic
          congestion to climate change
        </p>
        <img src="/media/projects/GIF3_new.gif" />
        <img src="/media/projects/GIF2_new.gif" />
      </>
    ),
  },

  {
    name: "Earthquake risk assessment using integrated artificial neural network and machine learning with analytic hierarchy process(case study: Khuzestan province, Iran)",
    desc: "From the beginning of human life on Earth, natural disasters have always been a threat to human life. Every year, earthquakes take the lives of many people around the world and cause devastating changes in the environment. Since earthquake prevention is impossible, it is important to consider immunization and pre-crisis management methods. In previous research to assess the risk of earthquakes, most methods based on artificial intelligence have been used independently. In this research, it is tried to use methods based on artificial intelligence in conjunction with expert knowledge. For this purpose, a combined method based on artificial neural network(ANN) and hierarchical analysis (AHP) has been proposed to prepare an earthquake risk assessment of Khuzestan province of Iran. The neural network model was used probability mapping of earthquake and the hierarchical analysis method was used to map the vulnerability. Then the output of these two methods were combined to obtain an estimate of the earthquake earthquake risk assessment.",
    url: "https://drive.google.com/file/d/1ltnJJCbE21oEovAM66S0DgPOufuayD8i/view?usp=sharing",
    gitHub: "https://drive.google.com/file/d/1ltnJJCbE21oEovAM66S0DgPOufuayD8i/view?usp=sharing",
    image: "4.png",
    techs: [
      { name: "Earthquake", color: "#61D9FA" },
      { name: "Risk Assesment", color: "#290BA0" },
      { name: "AHP", color: "#06B6D4" },
      { name: "Machine Learning", color: "#EC00C1" },
      { name: "Neural Networks", color: "#7BB651" },
    ],
    fullText: (
      <>
        <p>
        From the beginning of human life on Earth, natural disasters have always been a threat to human life.
         Every year, earthquakes take the lives of many people around the world and cause devastating changes
        in the environment. Since earthquake prevention is impossible, it is important to consider immunization
          and pre-crisis management methods. In previous research to assess the risk of earthquakes, most methods
          based on artificial intelligence have been used independently. In this research, it is tried to use methods
            based on artificial intelligence in conjunction with expert knowledge. For this purpose, a combined method
            based on artificial neural network(ANN) and hierarchical analysis (AHP) has been proposed to prepare an earthquake
              risk assessment of Khuzestan province of Iran. The neural network model was used probability mapping of earthquake 
            and the hierarchical analysis method was used to map the vulnerability. Then the output of these two methods were
              combined to obtain an estimate of the earthquake earthquake risk assessment. 393 training data were used to train
              the neural network and calculate the network parameters. Due to the lack of training data and to prevent over-fitting
            of the model, three techniques have been used. In the first technique, doup out at rate of 0.2 was performed, in the 
            second technique, the l2 regularization method with a value of 0.001 was used, and in the third technique, the k-fold 
            cross validation method with eight folds was used. To produce a map of earthquake vulnerability using hierarchical 
            analysis method, the criteria were selected through the study of past literature and selected the criteria of
            infrastructure density, building density, population density, access to water resources, access to hospitals and
              Access to fire stations. In the hierarchical analysis process, after determining the criteria, the criteria are 
              placed in the row and column of the pairwise comparison matrix and are compared in pairs, and the elements of 
              the pairwise comparison matrix are filled based on expert opinions. Then the weight of the layers is obtained
              using the eigen-vector method. After calculating the weight by the special vector eigen-vector method, the degree 
              of compatibility of the pairwise comparison matrix is determined and if the pairwise comparison matrix is
                compatible, the weights obtained by the eigen-vector method are confirmed. Various methods have been propose to 
                integrate information layers in GIS. Some of these methods are optimistic and some are pessimistic. Pessimistic 
                methods are usually more severe. In this research, the strict method of layer multiplication has been used. 
                In addition, earthquake probability mapping is calculated using four methods of machine learning support vector
                  regression, random forest, decision tree and k nearest neighbor. These models are a spatial analysis based on 
                  a spatial information system that is useful for the city scale. The results obtained from this study show that
                  the neural network model with a root mean error of 0.35 squared has better accuracy compared to machine learning 
                  methods. Considering the influential factors in earthquake risk assessment, urban areas of Khuzestan province can
                    have several earthquake risk patterns. The findings also show that geological factors have the greatest impact on
                    measuring the probability mapping of earthquake, while social factors such as population density have the largest 
                    share in assessing the vulnerability of Khuzestan province.
        </p>
        <img src="/media/projects/4.png" />
     
      </>
    ),
  },

  {
    name: "Develop an image processing GUI in python",
    desc: " A simple GUI was developed which was abled to covered basic concepts in image processing.",
    url: "https://drive.google.com/file/d/1XHdNdXiI4T3hJWahsH6PZ1CS0irnLLDv/view?usp=sharing",
    gitHub: "https://drive.google.com/file/d/1XHdNdXiI4T3hJWahsH6PZ1CS0irnLLDv/view?usp=sharing",
    image: "5.png",
    techs: [
      { name: "GUI", color: "#61D9FA" },
      { name: "Image Processing", color: "#290BA0" },
      { name: "Python", color: "#06B6D4" },
      { name: "Tkinter", color: "#EC00C1" },
      { name: "OpenCV", color: "#7BB651" },
    ],
    fullText: (
      <>
        <p>
        Image processing is the process of manipulating digital images using a computer.
         It is used to improve or correct image quality, change its appearance, and extract 
         useful information from it. There are many different types of image processing algorithms,
          and they can be divided into two main categories: geometric transforms and filters
        </p>
        <img src="/media/projects/5.png" />
     
      </>
    ),
  },


  {
    name: "3D change detection in urban point cloud based on the developed Octree method using variance index",
    desc: " A statistical index was developed base on octree space to detect the changes in points cloud.",
    url: "https://drive.google.com/file/d/1zrIGDRN9jfTwjd0oaX9IP0rdjLcyTDkX/view?usp=sharing",
    gitHub: "https://drive.google.com/file/d/1zrIGDRN9jfTwjd0oaX9IP0rdjLcyTDkX/view?usp=sharing",
    image: "6.png",
    techs: [
      { name: "Change detection", color: "#61D9FA" },
      { name: "Points cloud", color: "#290BA0" },
      { name: "Octree", color: "#06B6D4" },
      { name: "Variance Index", color: "#EC00C1" },
      { name: "MATLAB", color: "#7BB651" },
    ],
    fullText: (
      <>
        <p>
        One of the most important and new research fields in photogrammetry and remote sensing is 3D change detection
         in point cloud data, which has various applications such as crisis management and updating geographic information
          systems. Research has been done in this field and has led to the presentation of methods with high accuracy. One
           of these methods is based on the structure of Octree. In this method, 3ِِD changes are detected by fitting planes 
           to the points of each section and calculating the angle between these planes. The purpose of this study is to evaluate
            and develop the Octree method for 3D change detection. In the suggested method, first in the preprocessing stage,
             the data are prepared to enter the algorithm and the variance index of points of each section is calculated,
              then by calculating the similarity of the data and applying a suitable threshold on it, 3D changes are detected.
               In this method, two point clouds data obtained from mobile mapping in two different years have been used. 
               The obtained results show the superiority of the proposed method in terms of detection accuracy
        </p>
        <img src="/media/projects/6.png" />
        <img src="/media/projects/7.png" />
        <img src="/media/projects/8.png" />
        <img src="/media/projects/9.png" />
     
      </>
    ),
  },


  {
    name: "Spatio-temporal prediction of crime occurrence using the deep gated recurrent unit network",
    desc: " Crimes and violations are a threat to justice that affects the quality of life and well-being of residents and must be controlled. Accurate foresight and future trends can also help increase the safety of metropolitan areas.The ability to predict the time and place of a crime is helping prevent it, and is done by organizing police patrols, but there is still a need for accurate predicting algorithms that lead police patrols to criminal activities. In previous studies, data from various fields such as demography, economics and education have been used. In this study, crime time series data, distance from police stations and holidays in New York City were used, and the study area was considered as a 10-by-10 grid, then a gated recurent unit architecture was used. After network training, the model was evaluated with test data and the mean squared error criterion and reached an error of 0.027. To study the developed model in more detail, two multilayer perceptron architectures and a simple return network were used. After training, these two networks obtained errors of 0.048 and 0.033, respectively, which had more errors compared to the proposed model. This study found that networks with memory will perform better than simple architectures, and if the time step in the data is large, the use of architectures that prevent gradient explosions will be much more successful.",
    url: "https://drive.google.com/file/d/1KRX9LL--EfSwEnSiysFSKTLdRl4I7Yzl/view?usp=sharing",
    gitHub: "https://drive.google.com/file/d/1KRX9LL--EfSwEnSiysFSKTLdRl4I7Yzl/view?usp=sharing",
    image: "10.png",
    techs: [
      { name: "Crime Analysis", color: "#61D9FA" },
      { name: "Time Series", color: "#290BA0" },
      { name: "GRU", color: "#06B6D4" },
      { name: "Neural Networks", color: "#EC00C1" },
      { name: "Python", color: "#7BB651" },
    ],
    fullText: (
      <>
        <p>
        Crimes and violations are a threat to justice that affects the quality of life and well-being of residents
         and must be controlled. Accurate foresight and future trends can also help increase the safety of metropolitan
          areas.The ability to predict the time and place of a crime is helping prevent it, and is done by organizing 
          police patrols, but there is still a need for accurate predicting algorithms that lead police patrols to criminal 
          activities. In previous studies, data from various fields such as demography, economics and education have been used.
           In this study, crime time series data, distance from police stations and holidays in New York City were used, and 
           the study area was considered as a 10-by-10 grid, then a gated recurent unit architecture was used. After network
            training, the model was evaluated with test data and the mean squared error criterion and reached an error of 0.027.
             To study the developed model in more detail, two multilayer perceptron architectures and a simple return network were
              used. After training, these two networks obtained errors of 0.048 and 0.033, respectively, which had more errors compared
               to the proposed model. This study found that networks with memory will perform better than simple architectures, and if
                the time step in the data is large, the use of architectures that prevent gradient explosions will be much more successful.
        </p>
        <img src="/media/projects/10.png" />
        

     
      </>
    ),
  },

  {
    name: "Performance comparison of the of multilayer perceptron network, recurrent neural network, neural network and long short-term memory in spatio-temporal prediction of taxi demand",
    desc: "Accurate  taxi demand prediction allows drivers to find passengers quickly and reduces waiting time. With the increasing popularity of internet taxi services, a lot of data on taxi demand has become available. How to use this data to improve taxi demand predictiong is one of the most important issues in the world today. Recent advances in deep learning have shown that they are more efficient than traditional methods in learning complex features and correlations. However, this is challenging due to the complex spatial and temporal dependencies on taxi demand. In this study, data on taxi demand in Tehran, published by Tepsi Company in a period of one hour per hour, has been used. To predict taxi demand in Tehran, three multilayer perceptron networks, recurrent neural network and long short-term memory have been used to predict taxi demand. Finally, these three methods are compared and the multilayer perceptron network with an average absolute error of 0.052 on the test data has the best performance.",
    url: "https://drive.google.com/file/d/1nztJeqcIlHfLtLtE2UWDfLMvUiMEVdY9/view?usp=sharing",
    gitHub: "https://drive.google.com/file/d/1nztJeqcIlHfLtLtE2UWDfLMvUiMEVdY9/view?usp=sharing",
    image: "11.png",
    techs: [
      { name: "Taxi Demand", color: "#61D9FA" },
      { name: "Time Series", color: "#290BA0" },
      { name: "Neural networks", color: "#06B6D4" },
      { name: "LSTM", color: "#EC00C1" },
      { name: "RNN", color: "#7BB651" },
    ],
    fullText: (
      <>
        <p>
        Accurate  taxi demand prediction allows drivers to find passengers quickly and reduces waiting time. With the increasing
         popularity of internet taxi services, a lot of data on taxi demand has become available. How to use this data to improve
          taxi demand predictiong is one of the most important issues in the world today. Recent advances in deep learning have shown
           that they are more efficient than traditional methods in learning complex features and correlations. However, this is
            challenging due to the complex spatial and temporal dependencies on taxi demand. In this study, data on taxi demand in 
            Tehran, published by Tepsi Company in a period of one hour per hour, has been used. To predict taxi demand in Tehran,
             three multilayer perceptron networks, recurrent neural network and long short-term memory have been used to predict taxi
              demand. Finally, these three methods are compared and the multilayer perceptron network with an average absolute error 
              of 0.052 on the test data has the best performance.
        </p>
        <img src="/media/projects/11.png" />
        

     
      </>
    ),
  },


  {
    name: "Using genetic algorithms to optimize the selection of hyper image features",
    desc: "Genetic algorithm was used to select optimize features of a hyperspectral satellite image.",
    url: "https://drive.google.com/file/d/19ndY0a3fVbH8fqemnxwNPfiTlfz_-HOI/view?usp=sharing",
    gitHub: "https://drive.google.com/file/d/19ndY0a3fVbH8fqemnxwNPfiTlfz_-HOI/view?usp=sharing",
    image: "12.png",
    techs: [
      { name: "Genetic Algorithm", color: "#61D9FA" },
      { name: "Feature Selection", color: "#290BA0" },
      { name: "Metaheuristic Algorithm", color: "#06B6D4" },
      { name: "Hyper Image", color: "#EC00C1" },
      { name: "Python", color: "#7BB651" },
    ],
    fullText: (
      <>
        <p>
        Feature selection is a critical step in machine learning, and is especially important when working with high-dimensional data.
         A genetic algorithm can be used to select the best features for satellite image classification. The algorithm begins by 
         randomly selecting a set of features from the data set. It then evaluates each feature using a measure of fitness, such as
          accuracy or precision. The fittest features are then selected and used to train the model. This process is repeated until 
          all of the features have been evaluated or the desired number of iterations has been reached.
        </p>
        <img src="/media/projects/12.png" />
        

     
      </>
    ),
  },

  {
    name: "Monitoring forest changes in northern Iran using remote sensing technology",
    desc: "Remote sensing technology is being increasingly used to monitor forest changes in northern Iran. This technology allows for the collection of data on a large scale, which can then be used to identify areas that are experiencing deforestation or forest degradation. By using this information, policymakers and scientists can develop strategies to protect these valuable ecosystems.",
    url: "https://drive.google.com/file/d/1y9bwS9D2fhy10pIOQuQcaNWjZJiUzhzS/view?usp=sharing",
    gitHub: "https://drive.google.com/file/d/1y9bwS9D2fhy10pIOQuQcaNWjZJiUzhzS/view?usp=sharing",
    image: "13.png",
    techs: [
      { name: "Change Detection", color: "#61D9FA" },
      { name: "Forest Changes", color: "#290BA0" },
      { name: "Remote Sensing", color: "#06B6D4" },
      { name: "Landsat8", color: "#EC00C1" },
      { name: "Machine Learning", color: "#7BB651" },
    ],
    fullText: (
      <>
        <p>
        Remote sensing technology is being increasingly used to monitor forest changes in northern Iran. This technology allows for the
         collection of data on a large scale, which can then be used to identify areas that are experiencing deforestation or forest
          degradation. By using this information, policymakers and scientists can develop strategies to protect these valuable 
          ecosystems.
        </p>
        <img src="/media/projects/13.png" />
        

     
      </>
    ),
  },

  {
    name: "Using space-time analysis to evaluate the relationship between cultural, social and economic indicators and corona mortality rate using comparison of Iran and other countries",
    desc: "Throughout the development of human society, infectious diseases have been a public health problem that can not be ignored. In late 2019, the Wuhan Municipal Health Committee reported an unexplained pneumonia, which was later named by the World Health Organization as a new disease of the coronavirus. The virus spreads very fast, which is why the virus has spread rapidly around the world, and by the time of this study, 222 countries have been infected with the disease. Since the first outbreak was confirmed, more than 4 million people have died from the virus, and the world is suffering at a high cost in terms of human casualties, economic consequences and increasing poverty due to the epidemic, Iran has not been an exception to this rule. The coronavirus is spread through close contact and respiratory droplets, which should be controlled immediately to limit the number of deaths, as previous epidemic experiences has shown that focusing on treating patients is insufficient. Geographical Information System in many respects such as monitoring and tracking of coronavirus cases has played an important role. In this study, to compare the situation of Iran with other countries in the world, space time analysis including space time cube and clustering have been used. In the second part of the study, the relationship between cultural, social and economic indicators including education, employment, GDP per capita, life expectancy, human development index and Internet users with the Corona virus mortality rate has been investigated.",
    url: "https://drive.google.com/file/d/128pKqNTg1JPAdg8ub3cjL7-GaSmWPJMd/view?usp=sharing",
    gitHub: "https://drive.google.com/file/d/128pKqNTg1JPAdg8ub3cjL7-GaSmWPJMd/view?usp=sharing",
    image: "14.png",
    techs: [
      { name: "Space-Time Analysis", color: "#61D9FA" },
      { name: "Kmeans", color: "#290BA0" },
      { name: "Corona Virus", color: "#06B6D4" },
    ],
    fullText: (
      <>
        <p>
        The space time cube is a three dimensional visual form of a geographical phenomenon that the horizontal axis of the cube
         shows the location and the vertical axis of the cube shows the time, and the cube consists of a number of bins. Each bin
          has a fixed position in space and time, the columns have the same position and show a time series in that space, and the
           number of points in each bin shows the number of times a phenomenon occurs at that particular time and place. This cube
            helps users understand spatio temporal patterns. Using this model, the behavior of diseases can be studied. Monitoring
             the transmission of the corona virus is crucial, so with this model, areas that need serious treatment can be identified,
              and with this monitoring, the corona virus is expected to be managed effectively and efficiently.
        </p>
        <p>
        Clustering is a data mining method in which similar data are placed in related or homogeneous groups without any advanced 
        information about group definitions, each group is called a cluster. A special type of clustering is time series clustering. 
        Time series databases contain valuable information that can be obtained through pattern recognition. Clustering is a common
         solution used to discover these patterns in time series datasets and to analyze datasets. In this research, the Kmeans++ 
         clustering method has been used. In this method, the center of the first cluster is selected randomly, then the distance 
         of all data to this center is calculated. The center of the next cluster is also selected randomly, with the difference that 
         each data has a weight to be selected, in fact for each data, the distance to the nearest center of the existing clusters is 
         considered as the chance of selection. Also in this research, Pearson correlation coefficient is used for clustering, which 
         shows the degree of dependence between two datasets.The elbow method was used to determine the number of optimal classes for 
         clustering. The elbow method explains the percentage of variance as a function of the number of clusters. This method is based
          on the idea that a number of clusters should be selected so that adding another cluster does not model the data better. 
          The percentage of variance explained by the clusters is plotted against the number of clusters. The first clusters will add a
           lot of information, but in some places the marginal profit will be significantly reduced and give the chart an angle.
        </p>

        <p>
        In this study, Pearson correlation coefficient is used for clustering, which shows the degree of dependence between the data of 
        the two countries. In fact, Pearson correlation coefficient between the data of Iran and other countries has been calculated and
         these coefficients have been used to divide countries into three clusters. Thus, countries in which the mortality rate is similar
          to Iran have been extracted, the results show that Armenia is the most similar to Iran. In the second part of the study, the 
          relationship between cultural, social and economic indicators including education, employment, GDP per capita, life expectancy, 
          human development and Internet users with the spread of Corona virus has been investigated. For this purpose, the countries of 
          the world have been divided into three clusters based on their similarity to Iran in these indicators, and these clusters have 
          been compared with clusters related to corona death data. The results show that the GDP per capita index has a direct relationship
           with the mortality rate caused by the corona virus. The most similar country to Iran in terms of GDP per capita is Azerbaijan,
            which is very similar to Iran in terms of corona mortality rate.
        </p>

        <p>
        The countries of the world were divided into three clusters in terms of similarity to Iran in the rate of death due to corona
         and the mentioned indicators. These clusters were compared and the results show that the GDP index has the highest correlation
          with the death rate due to the corona. In fact, countries with similar GDP to Iran have similar deaths to Iran. The most 
          similar country to Iran in terms of GDP per capita is Azerbaijan, which is very similar to Iran in terms of corona mortality
           rate. It is noteworthy that this study was conducted before the start of the fifth corona peak in Iran.
        </p>
        

     
      </>
    ),
  },

];

export const ActivityChartData: string[] = [
  "https://wakatime.com/share/@aly3n/28c1bd08-d655-4249-a17e-a985ff32f4d9.svg",
  "https://wakatime.com/share/@aly3n/d6968611-fd97-4c0d-8ba1-1fd7e69ba510.svg",
];

// GLOBAL
// GLOBAL
// GLOBAL
export const careerHeaderImage: { src: string; alt: string } = {
  src: "/media/Mamad1.jpg",
  alt: "Mohamad Marjani GIS",
};

export const topLogo: string = "Mohamad Marjani";

// for changing the color palete just go to root/tailwind.config.js and edit the primary and secondary colors...
// ...you also need to change the gray color cause I used it for background colors

// META DATA
export const gateMeta: {
  title: string;
  description: string;
  keywords: string;
  author: string;
  preload: string[];
} = {
  title: "Mohamad Marjani - GIS",
  description:
    "Mohamad is a GIS student and he is interested in applications of AI in geospatial data.",
  keywords:
    "GIS, Mohamad Marjani, Deep Learing, Neural networks, machine learning, data science, Geospatial data, Forest Fire, Wildfire, DL, Remote Sensing, محمد مرجانی, سیستم اطلاعات مکانی, نقشه برداری, خواجه نصیر",
  author: "Mohamad Marjani",
  preload: [
    "/media/Mamad1.jpg",
  ],
};
export const careerMeta: {
  title: string;
  description: string;
  keywords: string;
  author: string;
  preload: string[];
} = {
  title: "Mohamad Marjani - GIS",
  description:
    "Mohamad is a GIS student and he is interested in applications of AI in geospatial data.",
  keywords:
    "GIS, Mohamad Marjani, Deep Learing, Neural networks, machine learning, data science, Geospatial data, Forest Fire, Wildfire, DL, Remote Sensing, محمد مرجانی, سیستم اطلاعات مکانی, نقشه برداری, خواجه نصیر",
  author: "Mohamad Marjani",
  preload: [
    "/media/Mamad1.jpg",
  ],
};
export const projectMeta: {
  title: string;
  description: string;
  keywords: string;
  author: string;
  preload: string[];
} = {
  title: "Mohamad Marjani - GIS",
  description:
    "Mohamad is a GIS student and he is interested in applications of AI in geospatial data.",
  keywords:
    "GIS, Mohamad Marjani, Deep Learing, Neural networks, machine learning, data science, Geospatial data, Forest Fire, Wildfire, DL, Remote Sensing, محمد مرجانی, سیستم اطلاعات مکانی, نقشه برداری, خواجه نصیر",
  author: "Mohamad Marjani",
  preload: [
    "/media/Mamad1.jpg",
  ],
};

export const achievementData: achievementType[] = [
  {
    id: "000",
    title: "4th (4/40) ranked among B.S students of geomatic major, Khajeh Nasir university(2016-2020)",
    desc: "I was accepted to the master's program as the 4th (4/40) ranked among B.S students of geomatic major in Khajeh Nasir university",
  },
  {
    id: "001",
    title: "Second (2/21) ranked among M.S students of GIS major, Khajeh Nasir university(2020-Present)",
    desc: "After s Semesters I ranked as the second student among M.S students of GIS major in Khajeh Nasir university",
  },
  {
    id: "002",
    title: "Sequence, time series and prediction",
    desc: "I participated in a course that was published by DeepLearning.AI, coursera and I passed all quizes, exams and assignments and and received certificate.",
  },
  {
    id: "003",
    title:
      "Advanced computer vision",
    desc: "I participated in a course that was published by DeepLearning.AI, coursera and I passed all quizes, exams and assignments and and received certificate.",
  },
  {
    id: "004",

    title: "Structuring Machine Learning Projects",
    desc: "I participated in a course that was published by DeepLearning.AI, coursera and I passed all quizes, exams and assignments and and received certificate.",
  },
  {
    id: "005",

    title: "Simulation and modeling of natural processes",
    desc: "I participated in a course that was published by University of Genev, coursera and I passed all quizes, exams and assignments and and received certificate.",
  },
  {
    id: "006",

    title: "Spatial Analysis & Geospatial data science",
    desc: "I participated in a course that was published by Shan Singh, Udemy and I passed all quizes, exams and assignments and and received certificate.",
  },
  {
    id: "007",

    title: "Tensorflow 2.0 | Recurrent Neural Networks, LSTMs, GRUs",
    desc: "I participated in a course that was published by Jad Slim, Udemy and I passed all quizes, exams and assignments and and received certificate.",
  },
  
];

export const publicationsData: string[] = [
  "  Marjani, M., Ebadi, H. & Ghorbani, F. (2020, December). 3D change detection in urban point cloud based on the developed Octree method using variance index. In 2020 1st National Conference on Data Mining in Earth Sciences in Iran.",
  "Yarmohamadi, M. & Marjani, M. (2021, September). Performance comparison of the multi layer perceptron network, recurrent neural network and long-short term memory in spatio-temporal prediction of taxi demand. In 2021 the second National Conference on Data Mining in Earth Sciences in Iran.",
  "Yarmohamadi, M., Marjani, M. & Sadeghi-Niaraki, A (2021, September)Using space-time analysis to evaluate the relationship between cultural, social and economic indicators and Corona mortality rate using comparison of Iran and other countries.;Human Geography Research (under review).",
  "Marjani, M., Mesgari, M. & Yarmohamadi, M. (2021, October)Spatio-temporal prediction of crime based on a deep network gated recurrent unit. In 2021 the second National Conference on Data Mining in Earth Sciences in Iran.",
  "Marjani, M., Yarmohamadi, M. & Sadeghi-Niaraki, A. (2021, October). Earthquake risk assessment using integrated artificial neural network and machine learning with analytic hierarchy process(case study: Khuzestan province, Iran).;Journal of Geomatics Science and Technology (under review)",
  "Marjani, M. & Mesgari, M. (2022, March). A novel hybrid deep learning model for predicting spread of wildfire.;Environmental Modelling & Software (under review)",
];
