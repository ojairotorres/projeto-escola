export interface Modalidade {
  id?: number; // O ID é opcional pois ele é gerado no backend
  nome: string;
  descricao?: string;
  modalidadeAtiva: boolean;
  valorMensalidade: number;
  duracaoAulaMinutos: number;
  idadeMinima: number;
  idadeMaxima: number;
  capacidadeMaximaAlunos: number;
  generoPermitido: 'MASCULINO' | 'FEMININO' | 'MISTO' | 'NAO_APLICAVEL';
  nivel: 'INICIANTE' | 'INTERMEDIARIO' | 'AVANCADO' | 'COMPETICAO' | 'RECREATIVO';
  dataCriacao: string;
}
