import { criarAgendamento, ListarAgendamento, excluirAgendamento } from "../../src/controllers/agendamento.controller";
import * as agendamentoService from "../../src/services/agendamento.service";
import { handleError } from "../../src/controllers/agendamento.controller";


jest.mock("../../src/services/agendamento.service"); // importa e transforma tudo em mock

function mockResponse() {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
}

function mockRequest(body = {}, params = {}) {
  return { body, params } as any;
}


describe("criarAgendamento", () => {
  it("deve criar um agendamento (201)", async () => {
    const req = mockRequest({ nome: "João", servico: "Corte", datetime: "2025-01-01T10:00" });
    const res = mockResponse();

    (agendamentoService.criarAgendamento as jest.Mock).mockResolvedValue({ id: 1 });

    await criarAgendamento(req, res);

    expect(agendamentoService.criarAgendamento).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "agendamento criado!",
      data: { id: 1 }
    });
  });

  it("deve retornar erro desconhecido (500)", async () => {
    const req = mockRequest({ });
    const res = mockResponse();

    (agendamentoService.criarAgendamento as jest.Mock).mockResolvedValue(null);

    await criarAgendamento(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "erro desconhecido"
    });
  });

  it("deve tratar erro no catch (400)", async () => {
    const req = mockRequest({});
    const res = mockResponse();

    (agendamentoService.criarAgendamento as jest.Mock).mockRejectedValue(new Error("erro no service"));

    await criarAgendamento(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "erro no service" });
  });
});

describe("ListarAgendamento", () => {
  it("deve retornar lista de agendamentos (200)", async () => {
    const req = mockRequest();
    const res = mockResponse();

    (agendamentoService.listarAgendamentos as jest.Mock).mockResolvedValue([{ id: 1 }]);

    await ListarAgendamento(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "agendamentos encontrados!",
      lista: [{ id: 1 }]
    });
  });

  it("deve retornar 404 caso lista esteja vazia", async () => {
    const req = mockRequest();
    const res = mockResponse();

    (agendamentoService.listarAgendamentos as jest.Mock).mockResolvedValue([]);

    await ListarAgendamento(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      message: "nao foi possivel encontrar nenhum agendamento"
    });
  });

  it("deve tratar erro no catch", async () => {
    const req = mockRequest();
    const res = mockResponse();

    (agendamentoService.listarAgendamentos as jest.Mock).mockRejectedValue(new Error("falha"));

    await ListarAgendamento(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "falha" });
  });
});


describe("excluirAgendamento", () => {
  it("deve excluir um agendamento (200)", async () => {
    const req = mockRequest({}, { id: "5" });
    const res = mockResponse();

    (agendamentoService.deletarAgendamento as jest.Mock).mockResolvedValue(true);

    await excluirAgendamento(req, res);

    expect(agendamentoService.deletarAgendamento).toHaveBeenCalledWith(5);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "agendamento deletado!",
      deletado: true
    });
  });

  it("deve retornar erro 400 se id é inválido", async () => {
    const req = mockRequest({}, { id: "abc" });
    const res = mockResponse();

    await excluirAgendamento(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "ID inválido" });
  });

  it("deve tratar erro no catch", async () => {
    const req = mockRequest({}, { id: "3" });
    const res = mockResponse();

    (agendamentoService.deletarAgendamento as jest.Mock).mockRejectedValue(new Error("erro"));

    await excluirAgendamento(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "erro" });
  });
});


describe("handleError", () => {
  const res = mockResponse();

  it("deve retornar erro 400 com mensagem de erro", () => {
    handleError(new Error("falha"), res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: "falha" });
  });

  it("deve retornar erro 500 para erros desconhecidos", () => {
    handleError("texto qualquer", res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Erro interno no servidor." });
  });
});



