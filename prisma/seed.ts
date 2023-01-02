import {
  mapAscension,
  mapCommands,
  mapFace,
  mapServantSkills,
  servantMapper,
} from './../app/utils/mapper'
import { PrismaClient } from '@prisma/client'
import servants from '../app/data/nice_servant.json'
import { db } from '~/utils/db.server'

const prisma = new PrismaClient()

const servantResponse = servants as ServantResponse[]

const seedServants = async () => {
  const mapped = servantMapper(servantResponse)
  await prisma.servant.createMany({ data: mapped, skipDuplicates: true })
}

const seedAscension = async () => {
  const mapped = mapAscension(servantResponse)

  for (let data of mapped) {
    await prisma.ascension.createMany({ data, skipDuplicates: true })
  }
}

const seedFaces = async () => {
  const mapped = mapFace(servantResponse)

  for (let data of mapped) {
    await prisma.face.createMany({ data, skipDuplicates: true })
  }
}

const seedSkills = async () => {
  const mapped = mapServantSkills(servantResponse)
  for (let data of mapped) {
    await prisma.skills.createMany({ data, skipDuplicates: true })
  }
}

const seedCommands = async () => {
  const mapped = mapCommands(servantResponse)
  for (let data of mapped) {
    await prisma.commands.createMany({ data, skipDuplicates: true })
  }
}

export const seed = async () => {
  await seedServants()
  await seedAscension()
  await seedFaces()
  await seedSkills()
  await seedCommands()
  await db.$disconnect()
}

seed()
