export function validatePassword(password: string) {
  const errors = {
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
    length: false,
  };
  if (password.match(/[A-Z]/g)) errors.upperCase = true;
  if (password.match(/[a-z]/g)) errors.lowerCase = true;
  if (password.match(/\d/g)) errors.number = true;
  if (password.match(/[!@#$%^&*()_+?|[\]{};:><,'"]/g))
    errors.specialChar = true;
  if (password.length > 8) errors.length = true;
  const { upperCase, lowerCase, number, specialChar, length } = errors;
  return {
    upperCase,
    lowerCase,
    number,
    specialChar,
    length,
  };
}

export function getMessageErrorsPassoword(password: string) {
  const errors = validatePassword(password);
  if (!errors.upperCase) {
    return 'Sua senha precisa ter pelo menos uma letra maiúscula.';
  }
  if (!errors.lowerCase) {
    return 'Sua senha precisa ter pelo menos uma letra minuscula.';
  }
  if (!errors.number) {
    return 'Sua senha precisa ter pelo menos um número.';
  }
  if (!errors.specialChar) {
    return 'Sua senha precisa ter pelo menos um caractere especial.';
  }
  if (!errors.length) return 'Sua senha precisa ter mais de 8 caracteres.';
  return '';
}

export const ValidadeCPF = (strCPF: string) => {
  let Soma;
  let Resto;
  let i;
  Soma = 0;
  const newstrCPF = strCPF.replace(/[^\d]+/g, '');
  if (newstrCPF === '00000000000') return false;

  for (i = 1; i <= 9; i += 1)
    Soma += Number(newstrCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== Number(newstrCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i += 1)
    Soma += Number(newstrCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== Number(newstrCPF.substring(10, 11))) return false;

  let count = 1;
  for (i = 1; i < 11; i += 1) {
    if (newstrCPF[i - 1] === newstrCPF[i]) count += 1;
  }
  if (count === 11) return false;
  return true;
};
