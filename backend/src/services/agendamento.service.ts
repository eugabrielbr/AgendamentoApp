import { prisma_client } from "../lib/prisma";
import { Prisma } from "@prisma/client";

export async function criarAgendamento(data: { nome: string; servico: string; dataHora: string }) {
  
    try {
    const agendamento = await prisma_client.agendamento.create({
      data: {
        nome: data.nome,
        servico: data.servico,
        dataHora: new Date(data.dataHora),
      },
    });

    return agendamento
    
  
} catch (err: unknown) {
   
    throw new Error("Não foi possível criar o agendamento.");
  }
}

export async function deletarAgendamento(id: number) {
    
    try{

        const deletado = await prisma_client.agendamento.delete({
            where: { id }
        });

        return deletado; 
    }
    catch (err: unknown) {
        
        if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') { //caso nao encontre o prisma lanca esse erro teoricamente
        throw new Error("Agendamento não encontrado.");
    
    }
    
    throw new Error("Não foi possível deletar o agendamento.");
  
}
}

export async function listarAgendamentos() {
    
    try {
        const results = await prisma_client.agendamento.findMany();
        return results;
  } catch (error) {
        
        throw new Error("Não foi possível buscar os registros.");
  }
}



