# Nettverksskisse
![Nettverksskisse](eksamen.drawio.png)



# Forklaring av nettverksskissen

Denne nettverksskissen viser hvordan nettverket i bedriften er bygget opp, og hvordan trafikk går fra internett og inn til de ulike bedriftene (VLAN).

## 1. Internett

Alt starter på internett.

## 2. ISP-modem

Internett går først inn i ISP-modemet.

- Dette er utstyret som kobler bedriften til internettleverandøren
- Uten dette får man ikke tilgang til internett

## 3. Brannmur

Etter modemet går trafikken til brannmuren.

Brannmuren har viktige oppgaver:

- Stopper uønsket trafikk fra internett
- Hindrer at bedrift A, B og C kan snakke fritt med hverandre
- Gjesterett kan ikke nå bedriftsnettverkene
- Ingen utenfra kan koble seg direkte inn i nettverket

## 4. Router

Routeren sender trafikken videre inn i det interne nettverket.

- Fordeler nettverkstrafikk riktig
- Sender data videre til switchen

## 5. Managed switch

Switchen kobler sammen alle enhetene i nettverket.

Den er delt inn i VLAN :

- **Bedrift A – VLAN 10**
- **Bedrift B – VLAN 20**
- **Bedrift C – VLAN 30**

## 6. VLAN (separerte nettverk)

Hver bedrift har sitt eget VLAN:

- De er helt adskilt fra hverandre
- De kan ikke se eller nå hverandres data
- Dette gir bedre sikkerhet

## Oppsummering

- Internett går inn via ISP-modem
- Brannmuren beskytter nettverket
- Routeren sender trafikken videre
- Switch fordeler nettverket
- VLAN deler nettverket i separate bedrifter

Dette gjør nettverket sikkert, ryddig og godt organisert.
