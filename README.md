# Pocetni projekat za Jest testiranje sa TypeScript i ES modulima
Glavni razlog ovog "template" je zato sto Jest koristi Node i Common module a ja zelim da koristim **typescript** i **ES** module.  
Posle "instaliranja" nedostajucih paketa ( citaj dalje zasto nisu u `package.json` ) sve sto vam treba je da kucate i testirate kod.  
Mozete prepraviti `package.json` po vasim potrebama oko pokretanja skripti itd.
## Instaliranje
1. Skinite `.zip` fajl, otpakujte i udjite u otpakovani folder.
    - Ako imate **git** iz terminala :
    ```bash
    git clone milan-micic/templateForJestAndTS
    ```
2. Potrebni su sledeci paketi :
    - “typescript”
    - “jest”
    - “ts-jest”
    - @types/jest 

>***NOTE :***      
    Ja imam sve pakete instalirano globalno,zato nisu u `package.json`

3. Instaliranje paketa:
    ```bash
    npm i -D jest typescript # moze globalno
    npm i -D ts-jest @types/jest
    ```
## Koriscenje

```bash
npm t  # pokrece Jest u watch rezimu (pokrece opet na promenu fajla)
npm run test # isto sto i `npm-t`
npm run testFile # testira fajlove u 'test` folderu
npm run testName # testira `Probni test` regex zadat po opisu ili nazivu testa u test fajlovima
```
Ja sam podesio `"test": "jest --watch"` koji izbacuje gresku ako nema `.hg/git`,sto nece izbacivati jer ste ovo skinuli sa GitHub-a,ali ako se resite tog foldera samo zamenite `--watch`  sa `--watchAll`.  