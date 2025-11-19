-- CreateTable
CREATE TABLE "Agendamento" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "servico" TEXT NOT NULL,
    "dataHora" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id")
);
