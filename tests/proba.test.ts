import pozdravi from "../src/app";

describe("Probni test", ()=>{
  it("Pozdravlja uneto ime",()=>{

    // arrange
    let ime = "Milan"

    // act
    const rezultat = pozdravi(ime)

    // assert
    expect(rezultat).toBe("Zdravo, Milan")
  })

  it(`Funkcija ${pozdravi.name}(svete!) vraca vrednost "Zdravo, svete!"`,()=>{
    // arrange
    let ime = "svete!"
    // act
    const rezultat = pozdravi(ime)
    // assert
    expect(rezultat).toBe("Zdravo, svete!")
  })
})