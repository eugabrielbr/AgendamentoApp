import { Request, Response } from "express";
import * as agendamentoService from "../services/agendamento.service"


export async function criarAgendamento(req: Request, res: Response) {

    const payload = req.body 

    try{
        
        const data = await agendamentoService.criarAgendamento(payload);

        if (data){
            
            res.status(201).json({
                message: "agendamento criado!",
                data
            });

        }else {

            res.status(500).json({
                message: "erro desconhecido"
            });
        }
    }catch (err: unknown) {
        
        handleError(err, res);{     
    }

    }
};

export async function ListarAgendamento(req: Request, res: Response) {
    
    try{
        
        const lista = await agendamentoService.listarAgendamentos();
        
        if (lista.length !== 0){
            res.status(200).json({
                message: "agendamentos encontrados!",
                lista
            });
        }else{

            res.status(404).json({
                message: "nao foi possivel encontrar nenhum agendamento"
            });
        }


   }catch (err: unknown) {
        
        handleError(err, res);{     
    }
   }

};

export async function excluirAgendamento(req: Request, res: Response) {
    
   try{
        const id = parseInt(req.params.id);
        
        if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });
        
        const deletado = await agendamentoService.deletarAgendamento(id);
        
        res.status(200).json({
                message: "agendamento deletado!",
                deletado
            });

   }catch (err: unknown) {
        
        handleError(err, res);{     
    }
   }
};


export function handleError(err: unknown, res: Response) {
  if (err instanceof Error) {
    res.status(400).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};
