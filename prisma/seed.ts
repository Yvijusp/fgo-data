import {
  mapAscension,
  mapCommands,
  mapFace,
  mapServantSkills,
  servantMapper,
} from './../app/utils/mapper'
import servants from '../app/data/nice_servant.json'
import { db } from '~/utils/db.server'

const servantResponse = servants as ServantResponse[]

const seedServants = async () => {
  const mapped = servantMapper(servantResponse)
  await db.servant.createMany({ data: mapped, skipDuplicates: true })
}

const seedAscension = async () => {
  const mapped = mapAscension(servantResponse)

  for (let data of mapped) {
    await db.ascension.createMany({ data, skipDuplicates: true })
  }
}

const seedFaces = async () => {
  const mapped = mapFace(servantResponse)

  for (let data of mapped) {
    await db.face.createMany({ data, skipDuplicates: true })
  }
}

const seedSkills = async () => {
  const mapped = mapServantSkills(servantResponse)
  for (let data of mapped) {
    await db.skills.createMany({ data, skipDuplicates: true })
  }
}

const seedCommands = async () => {
  const mapped = mapCommands(servantResponse)
  for (let data of mapped) {
    await db.commands.createMany({ data, skipDuplicates: true })
  }
}

export const seedCron = async () => {
  await seedServants()
  await seedAscension()
  await seedFaces()
  await seedSkills()
  await seedCommands()
  db.$disconnect()
}

const seed = async () => {
  await seedServants()
  await seedAscension()
  await seedFaces()
  await seedSkills()
  await seedCommands()
}

seed()
