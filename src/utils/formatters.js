//Formatação de CPF: 000.000.000-00
export const formatCPF = (value) => {
  if (!value) return ''
  const digits = value.replace(/\D/g, '').slice(0, 11); // GARANTE NO MÁXIMO 11 DIGITOS

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9, 11)}`;
};

// Formatação de Data: 00/00/0000
export const formatDate = (value) => {
  if (!value) return ''
  const digits = value.replace(/\D/g, '').slice(0, 8); // GARANTE NO MÁXIMO 8 DIGITOS

  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
};

// Formatação de Telefone: (00) 00000-0000
export const formatPhone = (value) => {
  if (!value) return ''
  const digits = value.replace(/\D/g, '').slice(0, 11); // GARANTE NO MÁXIMO 11 DIGITOS

  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
};