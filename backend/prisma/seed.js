import { PrismaClient } from '@prisma/client'
import md5 from 'md5'

const prisma = new PrismaClient()
const secretPassword = md5("123Fred")

const userData = [
  {
    email: 'fred@graodireto.com.br',
    password: secretPassword,
  },
]

const restaurantData = [
  {
    address: 'Rua inconfidentes, Interior de Minas, 399',
    delivery: 'R$ 4,99',
    description: 'Comida Mineira',
    flag: "http://localhost:3001/images/MG.png",
    url_image: "http://localhost:3001/images/mineira.jpg",
    name: 'O Trem Baum Sô',
    phone: '31999995555',
    rate: 5,
    time: '20-30min',
  },
  {
    address: 'Rua dos Gauchos, Sem Numero',
    delivery: 'R$ 8,99',
    description: 'Comida Gaucha',
    flag: "http://localhost:3001/images/RS.png",
    url_image: "http://localhost:3001/images/gaucha.jpg",
    name: 'Churrasco Tchêê',
    phone: '51999995555',
    rate: 4.5,
    time: '40-50min',
  },
  {
    address: 'Rua Pernambuco, 882',
    delivery: 'R$ 6,99',
    description: 'Comida Pernambucana',
    flag: "http://localhost:3001/images/PE.png",
    url_image: "http://localhost:3001/images/nordeste.jpg",
    name: 'O Nordeste é Aqui',
    phone: '81999998888',
    rate: 4.9,
    time: '30-40min',
  },
]



const menuFood = [
  {
    name: "Feijoada",
    description: "Arroz, Feijoada, Couve, Laranja",
    price: "R$ 19,90",
    restaurantId: 1,
    url_image: "http://localhost:3001/images/feijoada.jpg"
  },
  {
    name: "Pão de Queijo",
    description: "Doze pães de queijo",
    price: "R$ 16,90",
    restaurantId: 1,
    url_image: "http://localhost:3001/images/paodequeijo.jpg"
  },
  {
    name: "Churrascada",
    description: "Arroz, Churrasco, Vinagrete",
    price: "R$ 25,90",
    restaurantId: 2,
    url_image: "http://localhost:3001/images/churrasco.jpg"
  },
  {
    name: "Carne de Sol",
    description: "Arroz, Carnde de Sol, Feijão Branco",
    price: "R$ 22,90",
    restaurantId: 3,
    url_image: "http://localhost:3001/images/carnedesol.jpg"
  },
]

const menuDrink = [
  {
    name: "Coca Cola",
    description: "Refrigerante Coca Cola 600ml",
    price: "R$ 9,90",
    restaurantId: 1,
    url_image: "http://localhost:3001/images/cocacola.jpg"
  },
  {
    name: "Água Mineral",
    description: "Água Mineral 500ml",
    price: "R$ 4,90",
    restaurantId: 1,
    url_image: "http://localhost:3001/images/agua.jpg"
  },
  {
    name: "Suco de Laranja",
    description: "Suco Natural de Laranja",
    price: "R$ 6,90",
    restaurantId: 1,
    url_image: "http://localhost:3001/images/laranja.png"
  },
  {
    name: "Cafezinho",
    description: "Café expresso pequeno",
    price: "R$ 6,90",
    restaurantId: 1,
    url_image: "http://localhost:3001/images/cafe.jpg"
  },
  {
    name: "Coca Cola",
    description: "Refrigerante Coca Cola 600ml",
    price: "R$ 9,90",
    restaurantId: 2,
    url_image: "http://localhost:3001/images/cocacola.jpg"
  },
  {
    name: "Água Mineral",
    description: "Água Mineral 500ml",
    price: "R$ 5,30",
    restaurantId: 2,
    url_image: "http://localhost:3001/images/agua.jpg"
  },
  {
    name: "Suco de Laranja",
    description: "Suco Natural de Laranja",
    price: "R$ 7,90",
    restaurantId: 2,
    url_image: "http://localhost:3001/images/laranja.png"
  },
  {
    name: "Cafezinho",
    description: "Café expresso pequeno",
    price: "R$ 7,90",
    restaurantId: 2,
    url_image: "http://localhost:3001/images/cafe.jpg"
  },
  {
    name: "Coca Cola",
    description: "Refrigerante Coca Cola 600ml",
    price: "R$ 8,50",
    restaurantId: 3,
    url_image: "http://localhost:3001/images/cocacola.jpg"
  },
  {
    name: "Água Mineral",
    description: "Água Mineral 500ml",
    price: "R$ 2,90",
    restaurantId: 3,
    url_image: "http://localhost:3001/images/agua.jpg"
  },
  {
    name: "Suco de Laranja",
    description: "Suco Natural de Laranja",
    price: "R$ 5,50",
    restaurantId: 3,
    url_image: "http://localhost:3001/images/laranja.png"
  },
  {
    name: "Cafezinho",
    description: "Café expresso pequeno",
    price: "R$ 3,90",
    restaurantId: 3,
    url_image: "http://localhost:3001/images/cafe.jpg"
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  for (const r of restaurantData) {
    const restaurant = await prisma.restaurant.create({
      data: r,
    })
    console.log(`Created restaurant with id: ${restaurant.id}`)
  }
  for (const mf of menuFood) {
    const menuFood = await prisma.menuFood.create({
      data: mf,
    })
    console.log(`Created menu food with id: ${menuFood.id}`)
  }
  for (const md of menuDrink) {
    const menuDrink = await prisma.menuDrink.create({
      data: md,
    })
    console.log(`Created menu drink with id: ${menuDrink.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })