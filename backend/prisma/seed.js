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
    price: "19,90",
    restaurantId: 1,
  },
  {
    name: "Churrascada",
    description: "Arroz, Churrasco, Vinagrete",
    price: "25,90",
    restaurantId: 2,
  },
  {
    name: "Carne de Sol com Queijo Qualho",
    description: "Arroz, Carnde de Sol, Feijão Branco",
    price: "22,90",
    restaurantId: 3,
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
  for (const m of menuFood) {
    const menuFood = await prisma.menuFood.create({
      data: m,
    })
    console.log(`Created menu food with id: ${menuFood.id}`)
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