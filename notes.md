# Google stitch
- vibe designovaci appka
- muzu klinknout na modify a pak to upravovat
- generuje to design obrazky pres nano banana
- dá se tam nahrát design appky, aby se to okopírovalo
- pripravi mi design system, co pak muzu pouzit
- abych to rozbehl, tak si musim udelat slozku treba .vscode/.antigravity a hodin tam tu konfiguraci z stitche

# Dev background tasks - neco, ze mu muzu dat pristup cist si chyby a on to rovnou opravi

# Principy dulezity v kazdym repu
- prvni krok s jakymkoli agentem, kdyz prijdu k repu, takze potrebuju vygenerovat agents.md soubor (claude.md)
- je to soubor, co obsahuje nejdulezitejsi info o projektu - co to dela, jak to funguje, jak to rozbehnout, jak to testovat, jak to deployovat, atd.
- setri to tokeny a vylepsuje to vystup
- jak ho vygenerovat

- v claude je na to prikaz /init - ten ma nejakej prompt, co si projde codebase a nejak ji zmapuje 
- drzet ho do 500 radku 
- lepsi zpusob, jak to delat, je na to mit vlastni prompt - protoze zname vlastni prompt
- update-docs.md

- jak si prikaz ulozit a pak ho znovu pouzit

muzu tam referencovat soubory pres @ v tom claude.md treba - to mi muzes snizit tokeny i o 20%

Je nutny mu rikat, aby si updatoval CLAUDE/AGENTS.md a my ho o to musime pozadat nebo to mame ve vlastnim prikazu, jak jsme pouzili. Casto je problem, ze se kod rozchazi od dokumentace, to pak pali hromady tokenu na vic a dorucuje spatny reseni treba a tak, chytrejsi modely jsou v tym obezretnejsi

Kdyz otevru novou session s tim agentem
- vezme si ty veci k agentovi
- pak veci,c o ma nalinkovany (CLAUDE.md) - to bud esoucast toho kontextu a veskera komunikace s tim mozkem pak probiha s timto 
- ty mozky na serveru pracuji tak, ze nemaji zadnej stav - my mu neco dame, on nam neco vyplyvne 

Co je to ten token? je to měna, datový jednotka, token je text převedený na token, mozek komunikuje v tokenech, takze treba 50 slov, 408 charakteru je 136 tokenu, ale to zalezi taky model od modelu

Pri komunikaci se pouziva markdown - je to efektvni jazyk pro komunikaci - dokazeme toho hodne znazornit za malo tokenu (html nebo css by tam dalsi veci a udelalo by to drazsi komunikaci)


# Máme agenty na vývoj a agenty na udrzovani behu appky
## Agenti na vývoj
- spustit nad tema slozkama, aby videl vsechny slozky
- agent na review code muze bezet jenom v githubu jenom nad pull requestama

# Lepší výsledky s agenty
- dáme první command at prohleda codebase
- nebo si dame plan mode - je to typ agenta, co nema pravo sahat na kod, jen prohledavat a analyzovat

# Budoucnu nebude tak dulezity, jak ten kod vypada, ale co je v plánu, kontextu a jak efektivní to je
- Plán se udělá přes opus, pak to udělá sonnet

# jsou ruzny metody jako dsahnout designu ze stitche v kodu
- tak mu napisu, ze to nesedi a mzu mu dat obrazek

# Vzdy dodrzovat nejdriv planovat, pak implementovat - budou lepsi vysledky

# MCP
- pripojovani k chybovejm hlaskam pres MCP, aby si sbiral chyby a logy a rovnou si je opravoval

má tam takovej zajímavej příkaz ![Image] a https k obrazku

# OpenClaw - osobní asitent - je to jenom wrapper
- je to agent zamceny na serveru (na pc, cloudu), je to jenom wrapper nad jinym agentem (claude, atd.) a my s nim muzeme komunikovat treba pres telegram, whatsapp atd. a tim ze zije na serveru a komuniujem es nim pres chat, tak komunikuje 24/7
- on si zamcel claude coda na server k nemu domu a on se pres termninal v telefonu pres SSH se pripojil pres VPN k tomu serveru a muze si s nim psat skrz telefon. Ten server nemusi byt nutne pocitac, muze to byt VPS (Hetzner) treba za 3 eura mesice, muze tam bezet claude code, pak je claude dispatch - bude toho ale vic a vic, protoze je to trend

# Generování AI promptů s AI chatem
- zlepsuje to vysledky - bud muzu overpromptovat (hodne detailu jak to udelat) - vic predikovatelnej vysledek, underprompt - nezadam jakou technologii atd.