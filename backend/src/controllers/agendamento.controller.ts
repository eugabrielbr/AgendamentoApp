import { Request, Response } from "express";


export async function criarAgendamento(req: Request, res: Response) {
    
    const payload = req.body; 

    try{

        if (payload.nome && payload.servico && payload.dataHora){
            
            res.status(200).json({
                message: "recebido com sucesso!",
                payload
            })
        
        }else{

            res.status(500).json({
                message: "erro inesperado"
            })
        }

    }catch(err: unknown) {
       
        handleError(err,res);
        
    };

};


function handleError(err: unknown, res: Response) {
  if (err instanceof Error) {
    res.status(400).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Erro interno no servidor." });
  }
};
