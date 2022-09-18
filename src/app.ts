const pozdravi = (ime: string): string => {
  const rezultat: string = `Zdravo, ${ime}`
  console.log(rezultat)
  return rezultat
}

pozdravi('Tester')

export default pozdravi