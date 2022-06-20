import mineira from '../../images/mineira.jpg';
import gaucha from '../../images/gaucha.jpg';
import nordeste from '../../images/nordeste.jpg';
import feijoada from '../../images/feijoada.jpg';
import churras from '../../images/churras.jpg';
import paodequeijo from '../../images/paodequeijo.jpg';
import carnedesol from '../../images/carnedesol.jpg';
import MG from '../../images/MG.png';
import RS from '../../images/RS.png';
import PE from '../../images/PE.png';

const mockRest = [
  {
    image: mineira,
    name: 'O Trem Baum Sô',
    description: 'Comida Mineira',
    flag: MG,
    rate: 5,
    time: '20-30min',
    delivery: 'R$ 4,99',
    foods: [
      {
        name: 'Feijoada',
        description: 'Feijoada Mineira',
        price: '16,99',
        image: feijoada,
      },
      {
        name: 'Pão de Queijo',
        description: 'Seis Pães de Queijo Mineiro',
        price: '19,99',
        image: paodequeijo,
      },
    ],
    drinks: [
      {
        name: 'Coca Cola',
        description: 'Coca Cola 600ml',
        price: '9,99',
        image: cocacola600,
      },
      {
        name: 'Cafezinho',
        description: 'Cafezinho Preto',
        price: '6,90',
        image: cafe,
      },
    ],
  },
  {
    image: gaucha,
    name: 'Churrsco Tchêê',
    description: 'Comida Gaucha',
    flag: RS,
    rate: 4.5,
    time: '40-50min',
    delivery: 'R$ 8,99',
    foods: [{
      name: 'Churrasco Gaúcho',
      description: 'Delicioso churrasco',
      price: '19,99',
      image: churras,
    }],
    drinks: [
      {
        name: 'Coca Cola',
        description: 'Coca Cola 600ml',
        price: '10,99',
        image: cocacola600,
      },
      {
        name: 'Chimarrão',
        description: 'Chimarraum Tchê',
        price: '8,90',
        image: chimarão,
      },
    ],
  },
  {
    image: nordeste,
    name: 'O Nordeste é Aqui',
    description: 'Comida Pernambucana',
    flag: PE,
    rate: 4.9,
    time: '30-40min',
    delivery: 'R$ 6,99',
    foods: [
      {
        name: 'Carne de Sol',
        description: 'Carne de Sol com Queijo Qualho',
        price: '16,99',
        image: carnedesol,
      },
    ],
    drinks: [
      {
        name: 'Coca Cola',
        description: 'Coca Cola 600ml',
        price: '8,99',
        image: cocacola600,
      },
      {
        name: 'Cerveja Heinekein',
        description: 'Heinekein 600ml',
        price: '13,90',
        image: cerveja,
      },
      {
        name: 'Água Mineral',
        description: 'Agua Mineral 500ml',
        price: '4,99',
        image: agua,
      },
    ],
  },
];

export default mockRest;
