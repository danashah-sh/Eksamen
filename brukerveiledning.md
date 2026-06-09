# Brukerveiledning – Active Directory

Active Directory (AD) brukes til å lage brukere og styre hvem som har tilgang til mapper og filer.

## Opprette en ny bruker

Når en ny ansatt begynner, må du lage en bruker.

### Slik gjør du det

1. Klikk på **Start**.
2. Skriv `dsa.msc` og åpne programmet.
3. Finn riktig mappe, for eksempel **BedriftA**.
4. Høyreklikk på mappen og velg **New → User**.
5. Skriv inn:
   - Fornavn
   - Etternavn
   - Brukernavn (for eksempel `o.nordmann`)
6. Klikk **Next**.
7. Skriv et midlertidig passord.
8. Kryss av for **User must change password at next logon**.
9. Klikk **Next** og **Finish**.

> **Tips:** Alle ansatte skal ha sin egen bruker. Det gjør systemet tryggere og enklere å holde orden.

## Gi tilgang til en mappe

Du bestemmer hvem som kan bruke en mappe.

### Slik gjør du det

1. Finn mappen i **Windows Utforsker**.
2. Høyreklikk og velg **Egenskaper**.
3. Gå til fanen **Sikkerhet**.
4. Klikk **Rediger** og deretter **Legg til**.
5. Skriv inn gruppen, for eksempel `BedriftA-Ansatte`.
6. Klikk **Sjekk navn** og deretter **OK**.
7. Velg tilgang:

| Tilgang | Betydning |
|----------|----------|
| **Lese** | Kan åpne og se filer |
| **Endre** | Kan åpne, lage og endre filer |
| **Full kontroll** | Kan gjøre alt |

8. Klikk **Bruk** og **OK**.

> **Viktig:** Vanlige ansatte skal ikke ha **Full kontroll**.

## Gi tilgang til en fil

Noen filer skal bare noen få personer ha tilgang til, for eksempel lønn.

### Slik gjør du det

1. Høyreklikk på filen og velg **Egenskaper**.
2. Gå til **Sikkerhet**.
3. Klikk **Avansert**.
4. Velg **Deaktiver arving**.
5. Velg **Konverter arvede tillatelser**.
6. Fjern de som ikke skal ha tilgang.
7. Klikk **Legg til**.
8. Velg hvem som skal ha tilgang.
9. Velg tilgangsnivå.
10. Klikk **OK** og **Bruk**.

> **Hva er arving?**

> Filer får vanligvis tilgang fra mappen de ligger i. Når du slår av dette, kan du sette egne regler for filen.

## Vanlige feil

| Problem | Løsning |
|----------|----------|
| Ingen tilgang | Logg ut og inn igjen |
| Finner ikke gruppe | Sjekk skrivemåte |
| Kan ikke logge inn | Sjekk at brukeren er aktiv |
| Endringer virker ikke | Vent litt eller start PC på nytt |

## Oppsummering

Med Active Directory kan du:

- Lage brukere
- Styre tilgang til mapper
- Styre tilgang til filer
- Ha kontroll på brukere i nettverket
