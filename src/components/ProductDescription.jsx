import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDescription.css';
import { Link } from 'react-router-dom';

const ProductDescription = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);

  const products = [
    {
      id: 1,
      title: 'Tree 1',
      subtitle: 'Three Leaf Clover, symbolizes good luck and fortune in many cultures.',
      image: '/image 1.png',
      careGuide: {
        water: 'Allow the soil to dry out completely before watering.',
        light: 'Bright indirect light environments.',
        tips: 'Gently insert a toothpick into the soil to determine if your plant needs watering.',
      },
      description: 'A caudiciform plant with reddish and green leaves. Interestingly, the leaves fold up in pairs during the evening. Keep away from children and pets. Plants images depicted are solely for illustration purposes only.',
    },
    {
      id: 2,
      title: 'Tree 2',
      subtitle: 'Sophora prostrata is a true symbol of lightness and unpretentious grace.',
      image: '/image 2.png',
      careGuide: {
        water: 'Intolerant to excessive water and dormant in cool winter months.',
        light: 'Afternoon shade is beneficial in summer months, avoid areas of excessive trapped heat.',
        tips: 'Leave about 2.5cm of the potting soil to dry out before watering again',
      },
      description: 'Sophora prostrata is a low-growing shrub, reaching a height of around 2 meters and is a medicinal plant used to treat fever, jaundice, ulcers, and many more.',
    },
    {
        id: 3,
        title: 'Tree 3',
        subtitle: 'Sophora prostrata is a true symbol of lightness and unpretentious grace.',
        image: '/image 3.png',
        careGuide: {
          water: 'Intolerant to excessive water and dormant in cool winter months.',
          light: 'Afternoon shade is beneficial in summer months, avoid areas of excessive trapped heat.',
          tips: 'Leave about 2.5cm of the potting soil to dry out before watering again',
        },
        description: 'Sophora prostrata is a low-growing shrub, reaching a height of around 2 meters and is a medicinal plant used to treat fever, jaundice, ulcers, and many more.',
      },
    {
        id: 4,
        title: 'Tree 4',
        subtitle: 'Croton is a striking,easy to grow houseplant known for its variegated foliage of gree,scarlet,orange,and yellow splotches.',
        image: '/image 4.png',
        careGuide: {
          water: 'Watering needs to be consistent,keeping the soil moist but not soggy.',
          light: 'They thrive in bright,indirect sunlight , mimicking the dappled light filtering through a rainforest canopy.',
          tips: 'When damaged,croton produces a milky sap that can irritate the skin too',
        },
        description: 'Croton plants are usually pest and disease-free.Croton leaves are dust magnets.',
      },
      {
        id: 5,
        title: 'Plant 1',
        subtitle: 'Pachypodium Gracilius is one of the most exotic caudex plants from Madagascar',
        image: '/image 5.png',
        careGuide: {
          water: 'Allow the soil to dry out completely before watering.',
          light: 'Bright direct and filtered light environments.',
          tips: 'Gently insert a toothpick into the soil to determine if your plant needs watering',
        },
        description: 'Its leaves grow out from a chubby spikey caudex and bloom bright yellow during the flowering season.',
      },
      {
        id: 6,
        title: 'Plant 2',
        subtitle: 'Monilaria moniliformis , also known as "Bunny Succulent"',
        image: '/image 6.png',
        careGuide: {
          water: 'Allow the soil to dry out completely before watering.',
          light: 'Bright indirect light environments.',
          tips: 'Keep away from pets and children as the plant is toxic when indigested.Use a wooden chopstick or your fingers to check the soil if it is dry. ',
        },
        description: 'It is a samll,green succulent with cylindrical,segmented stems resembling rabbit ears.',
      },
      {
        id: 7,
        title: 'Plant 3',
        subtitle: 'Golden Hinoki Bonsai is a slow-growing,evergreen tree native to Japan,valued for its fine-textured foliage,elegant form,and aromatic wood.',
        image: '/image 7.png',
        careGuide: {
          water: 'Water when the soil is 80%-90% dry.Gently water thoroughly and allow water to drain from the bottom.',
          light: 'They require as much direct sunlight as possible,placing them in the balcony or near the window would be ideal.',
          tips: 'This plant is mildly toxic for children and pets when ingested.',
        },
        description: 'This plant is grown as bonsai and requires minimal pruning.',
      },
      {
        id: 8,
        title: 'Plant 4',
        subtitle: 'Asparagus Ferns has a dainty and wispy foliage.',
        image: '/image 8.png',
        careGuide: {
          water: 'Water when 25% of the soil volume is dry.',
          light: 'This plant grows best in bright indirect light and dappled shade.',
          tips: 'This plant is mildly toxic for children and pets when ingested',
        },
        description: 'It creates a soft look for your interior,and fills up empty walls or spaces.',
      },
      {
      id: 9,
      title: 'Tray',
      subtitle: 'Versatile Tray: The perfect Stand for your Pots .',
      image: '/image 9.png',
      careGuide: {
        water: 'Clean the tray every week to prevent the buildup of dirt and water stains.',
        light: 'Place your tray in a spot that receives indirect or diffused light.',
        tips: 'Apply a protective sealant to wooden trays to prevent water damage and warping',
      },
      description: 'Designed to provide a stable and attractive base for your pots,this tray combines functionality with aesthetic appeal.',
    },
    {
        id: 10,
        title: 'Soil',
        subtitle: 'Enhance Plant health with light and airy soil .',
        image: '/image 10.png',
        careGuide: {
          water: 'Water slowly and evenly to ensure the entire root zone gets moisture.',
          light: 'Most plants grown in airy soil thrive in bright , indirect light.',
          tips: 'Use a blend of pertile, vermiculite,coarse sand and peat moss or coconut coir.',
        },
        description: 'Airy soil is a specially formulated potting mix designed to provide optimal aeration and drainage for plants.',
      },
      {
        id: 11,
        title: 'Soil 2',
        subtitle: 'Foundational soil for Reliable Growth and Versatility .',
        image: '/image 11.png',
        careGuide: {
          water: 'Basic soil retains moisture well, so avoid frequent watering.',
          light: 'Ideal for providing gentle,morning light,suitable for many houseplants.',
          tips: 'Rotate pots regularly to ensure even light exposure and prevent uneven growth.',
        },
        description: 'Basic soil  generally includes a combination of peat moss,perlite, and compost,offering good moisture retention and damage .',
      },
      {
        id: 12,
        title: 'Spade',
        subtitle: 'Efficient Spade for Digging and Soil Preparation .',
        image: '/image 12.png',
        careGuide: {
          water: 'Ensure the soil is adequately moist before digging.Water the area a day or two before using the spade.',
          light: 'Digging in the cooler parts of the day such as early morning can be beneficial.',
          tips: 'Hold the spade handle with both the hands for better control.',
        },
        description: 'Commonly used for tasks such as turning soil,planting , edging and lifting and moving materials.',
      },
      {
        id: 13,
        title: 'Duck 1',
        subtitle: 'Compact Duck Planters for Petite Plant Arrangements.',
        image: '/image 13.png',
        careGuide: {
          water: 'Be careful not to ovewater,as small pots retain less moisture.',
          light: 'Place the pots in a location where they receive indirect sunlight.',
          tips: 'Select plants with shallow root systems that thrive in small pots.',
        },
        description: 'Small-height pots are compact containers designed for growing containers dessigned for growing plants with shallow root systems.',
      },
      {
        id: 14,
        title: 'Duck 2',
        subtitle: 'Compact Duck Planters for Petite Plant Arrangements.',
        image: '/image 14-1.png',
        careGuide: {
          water: 'Be careful not to ovewater,as small pots retain less moisture.',
          light: 'Place the pots in a location where they receive indirect sunlight.',
          tips: 'Select plants with shallow root systems that thrive in small pots.',
        },
        description: 'Small-height pots are compact containers designed for growing containers dessigned for growing plants with shallow root systems.',
      },
      {
        id: 15,
        title: 'Duck 3',
        subtitle: 'Charming Heightened duck pots for Lush Plant Growth.',
        image: '/image 14.png',
        careGuide: {
          water: 'Be careful not to ovewater,Insert finger about an inch into the soil to check moisture levels.',
          light: 'Place the pots in a location where they receive indirect sunlight.',
          tips: 'Choose plants with root systems suited to the depth of the heightened pots.',
        },
        description: 'Designed to accomodate plants with deeper root systems.'
      },
      {
        id: 16,
        title: 'Duck 4',
        subtitle: 'Compact Duck Planters for Petite Plant Arrangements.',
        image: '/image 15.png',
        careGuide: {
          water: 'Be careful not to ovewater,as small pots retain less moisture.',
          light: 'Place the pots in a location where they receive indirect sunlight.',
          tips: 'Select plants with shallow root systems that thrive in small pots.',
        },
        description: 'Small-height pots are compact containers designed for growing containers dessigned for growing plants with shallow root systems.',
      },
      {
        id: 17,
        title: 'Pot 1',
        subtitle: 'Compact Duck Planters for Petite Plant Arrangements.',
        image: '/image 16.png',
        careGuide: {
          water: 'Be careful not to ovewater,as small pots retain less moisture.',
          light: 'Place the pots in a location where they receive indirect sunlight.',
          tips: 'Select plants with shallow root systems that thrive in small pots.',
        },
        description: 'Small-height pots are compact containers designed for growing containers dessigned for growing plants with shallow root systems.',
      },
      {
        id: 18,
        title: 'Pot 2',
        subtitle: 'Charming Heightened duck pots for Lush Plant Growth.',
        image: '/image 17.png',
        careGuide: {
          water: 'Be careful not to ovewater,Insert finger about an inch into the soil to check moisture levels.',
          light: 'Place the pots in a location where they receive indirect sunlight.',
          tips: 'Choose plants with root systems suited to the depth of the heightened pots.',
        },
        description: 'Designed to accomodate plants with deeper root systems.'
      },
      {
        id: 19,
        title: 'Pot 3',
        subtitle: 'Charming Heightened duck pots for Lush Plant Growth.',
        image: '/image 18.png',
        careGuide: {
          water: 'Be careful not to ovewater,Insert finger about an inch into the soil to check moisture levels.',
          light: 'Place the pots in a location where they receive indirect sunlight.',
          tips: 'Choose plants with root systems suited to the depth of the heightened pots.',
        },
        description: 'Designed to accomodate plants with deeper root systems.'
      },
      {
        id: 20,
        title: 'Pot 4',
        subtitle: 'Charming Heightened duck pots for Lush Plant Growth.',
        image: '/image 19.png',
        careGuide: {
          water: 'Be careful not to ovewater,Insert finger about an inch into the soil to check moisture levels.',
          light: 'Place the pots in a location where they receive indirect sunlight.',
          tips: 'Choose plants with root systems suited to the depth of the heightened pots.',
        },
        description: 'Designed to accomodate plants with deeper root systems.'
      },
  ];

  const product = products.find(p => p.id === productId);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className='Bck'>
        <h1 style={{marginLeft:'145px'}}>Description page</h1>
    <div className="description-container">
      <h1 className="brand-name">B.planet</h1>
      <Link to="/contactus" className="contact-us19">Contact Us</Link>
      <div className="description-content">
        <h2>{product.title}</h2>
        <p>{product.subtitle}</p>
        <img src={product.image} alt={product.title} />
        <div className="pltcnt">
          <h3>Plant Care Guide</h3>
          <ul>
            <li><strong >Water:</strong> {product.careGuide.water}</li>
            <li><strong>Light:</strong> {product.careGuide.light}</li>
            <li><strong>Tips:</strong> {product.careGuide.tips}</li>
          </ul>
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
</div>  );
};

export default ProductDescription;
