import { db } from './db.server'

export const updateAscension = async (
  stage: string,
  servantName: string,
  servantId?: string
) => {
  await db.ascension.updateMany({
    where: {
      NOT: {
        [stage as keyof Ascension]: {
          contains: servantName,
        },
      },
      servantId: Number(servantId ?? 0),
    },
    data: {
      [stage as keyof Ascension]: `/images/servants/${servantName}.png`,
    },
  })
}
