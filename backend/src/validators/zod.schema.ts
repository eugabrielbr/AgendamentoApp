import { z } from "zod";

// Validações básicas
const nameValid = z
  .string()
  .nonempty({ message: "Nome é obrigatório" })
  .min(3, { message: "Nome deve ter ao menos 3 caracteres" })
  .regex(/^[a-zA-ZÀ-ÿ\s]+$/, { message: "Nome não pode conter números ou símbolos" });

const serviceValid = z
  .string()
  .nonempty({ message: "Serviço é obrigatório" })
  .min(3, { message: "Serviço deve ter ao menos 3 caracteres" });

// Validação DateTime ISO 8601
const dateTimeValid = z
  .string()
  .nonempty({ message: "Data e hora são obrigatórias" })
  .refine((val) => !isNaN(Date.parse(val)), {
    message: "Data e hora inválidas, use formato ISO 8601 (ex: 2025-11-19T14:00:00Z)",
  });


// Schema completo do agendamento
export const agendamentoValid = z.object({
  nome: nameValid,
  servico: serviceValid,
  dataHora: dateTimeValid, // use um único campo combinando data e hora
});


// Tipo TypeScript inferido
export type AgendamentoInput = z.infer<typeof agendamentoValid>;
