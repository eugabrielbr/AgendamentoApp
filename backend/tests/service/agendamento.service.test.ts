import * as service from "../../src/services/agendamento.service";
import { prisma_client } from "../../src/lib/prisma";
import { Prisma } from "@prisma/client";

jest.mock("../../src/lib/prisma", () => ({
  prisma_client: {
    agendamento: {
      create: jest.fn(),
      delete: jest.fn(),
      findMany: jest.fn(),
    },
  },
}));

describe("Testes do agendamento.service.ts", () => {

  it("deve criar um agendamento", async () => {
    const mockInput = {
      nome: "João",
      servico: "Corte",
      dataHora: "2025-01-01T10:00:00Z",
    };

    const mockOutput = {
      id: 1,
      ...mockInput,
    };

    (prisma_client.agendamento.create as jest.Mock).mockResolvedValue(mockOutput);

    const result = await service.criarAgendamento(mockInput);

    expect(result).toEqual(mockOutput);
    expect(prisma_client.agendamento.create).toHaveBeenCalledTimes(1);
  });


  it("deve deletar um agendamento", async () => {
    const mockOutput = { id: 1 };

    (prisma_client.agendamento.delete as jest.Mock).mockResolvedValue(mockOutput);

    const result = await service.deletarAgendamento(1);

    expect(result).toEqual(mockOutput);
    expect(prisma_client.agendamento.delete).toHaveBeenCalledTimes(1);
  });

  it("deve lançar erro quando o registro não existe (P2025)", async () => {
    const error = new Prisma.PrismaClientKnownRequestError("not found", {
      code: "P2025",
      clientVersion: "5.0.0",
    });

    (prisma_client.agendamento.delete as jest.Mock).mockRejectedValue(error);

    await expect(service.deletarAgendamento(999)).rejects.toThrow("Agendamento não encontrado.");
  });

  it("deve listar todos os agendamentos", async () => {
    const mockOutput = [{ id: 1, nome: "João", servico: "Corte" }];

    (prisma_client.agendamento.findMany as jest.Mock).mockResolvedValue(mockOutput);

    const result = await service.listarAgendamentos();

    expect(result).toEqual(mockOutput);
    expect(prisma_client.agendamento.findMany).toHaveBeenCalledTimes(1);
  });

  it("deve lançar erro ao buscar registros", async () => {
    (prisma_client.agendamento.findMany as jest.Mock).mockRejectedValue(new Error());

    await expect(service.listarAgendamentos()).rejects.toThrow(
      "Não foi possível buscar os registros."
    );
  });
});
