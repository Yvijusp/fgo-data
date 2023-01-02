-- CreateTable
CREATE TABLE "Servant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "className" TEXT NOT NULL,
    "rarity" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "attribute" TEXT NOT NULL,
    "starAbsorb" INTEGER NOT NULL,
    "starGen" INTEGER NOT NULL,
    "cards" TEXT[],
    "atkBase" INTEGER NOT NULL,
    "atkMax" INTEGER NOT NULL,
    "hpBase" INTEGER NOT NULL,
    "hpMax" INTEGER NOT NULL,
    "bondGrowth" INTEGER[],

    CONSTRAINT "Servant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ascension" (
    "id" SERIAL NOT NULL,
    "first" TEXT NOT NULL,
    "second" TEXT NOT NULL,
    "third" TEXT NOT NULL,
    "fourth" TEXT NOT NULL,
    "servantId" INTEGER NOT NULL,

    CONSTRAINT "Ascension_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Face" (
    "id" SERIAL NOT NULL,
    "first" TEXT NOT NULL,
    "second" TEXT NOT NULL,
    "third" TEXT NOT NULL,
    "fourth" TEXT NOT NULL,
    "servantId" INTEGER NOT NULL,

    CONSTRAINT "Face_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Traits" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "servantId" INTEGER NOT NULL,

    CONSTRAINT "Traits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AscensionMaterial" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "qp" INTEGER NOT NULL,
    "servantId" INTEGER NOT NULL,

    CONSTRAINT "AscensionMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "ascensionId" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "num" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "coolDown" INTEGER[],
    "servantId" INTEGER NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commands" (
    "id" SERIAL NOT NULL,
    "first" TEXT NOT NULL,
    "second" TEXT NOT NULL,
    "third" TEXT NOT NULL,
    "servantId" INTEGER NOT NULL,

    CONSTRAINT "Commands_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Servant_id_key" ON "Servant"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Ascension_id_key" ON "Ascension"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Face_id_key" ON "Face"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Traits_id_key" ON "Traits"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Traits_servantId_key" ON "Traits"("servantId");

-- CreateIndex
CREATE UNIQUE INDEX "AscensionMaterial_id_key" ON "AscensionMaterial"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Item_id_key" ON "Item"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Item_ascensionId_key" ON "Item"("ascensionId");

-- CreateIndex
CREATE UNIQUE INDEX "Skills_id_key" ON "Skills"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Commands_id_key" ON "Commands"("id");

-- AddForeignKey
ALTER TABLE "Ascension" ADD CONSTRAINT "Ascension_servantId_fkey" FOREIGN KEY ("servantId") REFERENCES "Servant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Face" ADD CONSTRAINT "Face_servantId_fkey" FOREIGN KEY ("servantId") REFERENCES "Servant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Traits" ADD CONSTRAINT "Traits_servantId_fkey" FOREIGN KEY ("servantId") REFERENCES "Servant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AscensionMaterial" ADD CONSTRAINT "AscensionMaterial_servantId_fkey" FOREIGN KEY ("servantId") REFERENCES "Servant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_ascensionId_fkey" FOREIGN KEY ("ascensionId") REFERENCES "AscensionMaterial"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_servantId_fkey" FOREIGN KEY ("servantId") REFERENCES "Servant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commands" ADD CONSTRAINT "Commands_servantId_fkey" FOREIGN KEY ("servantId") REFERENCES "Servant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
