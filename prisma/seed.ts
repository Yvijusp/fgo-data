// import {
//   mapAscension,
//   mapFace,
//   mapServantSkills,
//   servantMapper,
// } from './../app/utils/mapper'
// import { PrismaClient } from '@prisma/client'
// import servants from '../app/data/nice_servant_lang_en.json'

// const prisma = new PrismaClient()

// const seedServants = async () => {
//   const mapped = servantMapper(servants)
//   await prisma.servant.createMany({ data: mapped })
// }

// const seedAscension = async () => {
//   const mapped = mapAscension(servants)

//   for (let data of mapped) {
//     await prisma.ascension.createMany({ data })
//   }
// }

// const seedFaces = async () => {
//   const mapped = mapFace(servants)

//   for (let data of mapped) {
//     await prisma.face.createMany({ data })
//   }
// }

// const seedSkills = async () => {
//   const mapped = mapServantSkills(servants)
//   for (let data of mapped) {
//     await prisma.skills.createMany({ data })
//   }
// }

// const seed = async () => {
//   await seedServants()
//   await seedAscension()
//   await seedFaces()
//   await seedSkills()
// }

// seed()

export {}
