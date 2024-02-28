const products = [
  {
    id: 1,
    title: "štitnik-za-nos",
    image_url: "/assets/images/ortoze-pojasevi-mideri/štitnik-za-nos.png",
    description:
      "Štitnik za lice i nos je napravljen od plastike sa mekanim unutrašnjim slojem koji pristaje uz lice. Pruža zaštitu od preloma i povreda kostiju lica i nosa. Zahvaljujući trakama, lako se postavlja i skida, idealan je za sportske aktivnosti jer ne sužava vidno polje i ne smeta pri dinamičnim pokretima.",
    category: "ortoze za vrat i glavu",
  },
  {
    id: 2,
    title: "kragna-Tomas",
    image_url: "/assets/images/ortoze-pojasevi-mideri/kragna-tomas.png",
    description:
      "Ortoza za vrat je ortopedsko pomagalo koje pruža podršku vratnoj kičmi. Izrađena je od tvrdog materijala poput plastike ili metala, postavlja se oko vrata radi imobilizacije i stabilizacije. Koristi se nakon povreda vrata, u lečenju problema s vratnom kičmom ili nakon operacija kako bi ograničila pokrete i pružilo podršku tokom rehabilitacije. Važno je koristiti ortozu prema preporukama stručnjaka za postizanje najboljih terapijskih rezultata.",
    category: "ortoze za vrat i glavu",
  },
  {
    id: 3,
    title: "Kragna Filadelfija",
    image_url: "/assets/images/ortoze-pojasevi-mideri/kragna.png",
    description:
      "Ortoza za vrat je specijalizovano ortopedsko pomagalo namenjeno pružanju potpore vratnoj kičmi. Napravljena od čvrstog materijala poput plastike ili metala, postavlja se oko vrata radi imobilizacije i stabilizacije. Često se koristi posle povreda vrata ili operacija kako bi ograničila pokrete i doprinelo bržem oporavku. Pravilna upotreba kragne, prema preporukama stručnjaka, ključna je za postizanje optimalnih terapijskih rezultata.",
    category: "ortoze za vrat i glavu",
  },
  {
    id: 4,
    title: "Meka-kragna",
    image_url: "/assets/images/ortoze-pojasevi-mideri/meka-kragna.png",
    description:
      "Meka kragna za vrat je lagano ortopedsko pomagalo izrađeno od mekih materijala poput pene ili pamuka. Namenjena je pružanju blage potpore i udobnosti vratu. Ova vrsta kragni često se koristi kod blažih bolova u vratu ili napetosti mišića. Nudi nežnu podršku i može se koristiti za ublažavanje nelagodnosti bez potrebe za potpunom imobilizacijom. Važno je koristiti meku kragnu prema preporukama stručnjaka radi postizanja najboljih rezultata.",
    category: "ortoze za vrat i glavu",
  },
  {
    id: 5,
    title: "Ortoza-za-stabilizaciju-lumbalne-kičme-AO-62",
    image_url: "/assets/images/ortoze-pojasevi-mideri/AO-62.png",
    description:
      "Ortoza za lumbalnu kičmu pruža podršku i stabilnost u donjem delu leđa. Namenjena je održavanju pravilnog položaja kičme, smanjenju pokreta i olakšavanju bola. Korisna je kod problema s leđima i povreda, pomažući u poboljšanju držanja tela.",
    category: "ortoze za kičmu",
  },
  {
    id: 6,
    title: "Ortoza-za-stabilizaciju-lumbalne-kičme-AO-63",
    image_url: "/assets/images/ortoze-pojasevi-mideri/AO-63.png",
    description:
      "Ortoza za lumbalnu kičmu pruža stabilnost donjem delu leđa. Održava pravilan položaj, smanjuje pokrete i ublažava bol. Korisna je kod problema s kičmom, pomažući u očuvanju držanja tela.",
    category: "ortoze za kičmu",
  },
  {
    id: 7,
    title: "TLS-ortoza-za-stabilizaciju-kičme-A091A",
    image_url: "/assets/images/ortoze-pojasevi-mideri/AO-91A.png",
    description:
      "TLS ortoza je ortopedsko pomagalo koje pruža podršku i stabilnost kičmi. Namenjena je održavanju pravilnog položaja, smanjenju pokreta i ublažavanju bola. Idealna je za situacije kada je potrebna dodatna podrška i stabilizacija kičme tokom oporavka od povreda ili kod problema sa držanjem tela.",
    category: "ortoze za kičmu",
  },
  {
    id: 8,
    title: "Mitela",
    image_url: "/assets/images/ortoze-pojasevi-mideri/mitela.png",
    description:
      "Mitela je ortopedsko pomagalo koji imobilizuje i pruža podršku šaci, ručnom zglobu i delu podlaktice nakon povreda ili operacija radi bržeg ozdravljenja.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 9,
    title: "Steznik-za-pravilno-držanje-ramena",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/steznik-za-pravilno-držanje-ramena.png",
    description:
      "Ortoza za pravilno držanje ramena je ortopedsko pomagalo koje se koristi radi podrške i korekcije položaja ramena. Pomaže održavanju pravilnog držanja, smanjuje opterećenje na ramenima i vratu, te doprinosi očuvanju pravilne posturalne ravnoteže.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 10,
    title: "Ortoza-za-ručni-zglob",
    image_url: "/assets/images/ortoze-pojasevi-mideri/ortoza-ručnog-zgloba.png",
    description:
      "Ortoza za ručni zglob pruža podršku, stabilnost i imobilizaciju nakon povreda ili operacija radi bržeg oporavka.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 11,
    title: "Ortoza-za-palac",
    image_url: "/assets/images/ortoze-pojasevi-mideri/ortoza-za-palac.png",
    description:
      "Ortoza za palac je ortopedsko pomagalo koje pruža podršku, stabilnost i imobilizaciju palca. Koristi se nakon povreda, operacija ili kod određenih medicinskih stanja kako bi se ograničila pokretljivost palca i olakšao proces ozdravljenja.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 12,
    title: "Ortoza-za-teniski-lakat",
    image_url: "/assets/images/ortoze-pojasevi-mideri/308.png",
    description:
      "Ortoza za teniski lakat je medicinski uređaj dizajniran za podršku i smanjenje stresa na području lakta. Postavljena oko podlaktice, ova ortoza pruža kompresiju i stabilnost, pomažući u ublažavanju bola i smanjenju rizika od povreda tetiva. Posebno je korisna kod teniskog lakta, pružajući podršku tokom aktivnosti koje mogu uzrokovati prekomernu napetost u tom području.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 13,
    title: "Steznik-za-ruku",
    image_url: "/assets/images/ortoze-pojasevi-mideri/steznik-za-ruku.png",
    description:
      "Steznik za ruku je ortopedsko pomagalo koje pruža potporu i kompresiju za ruku. Koristi se u rehabilitaciji, nakon povreda ili operacija, kako bi se smanjio otok, stabilizovala ruka i olakšao proces ozdravljenja. Steznik je obično napravljen od elastičnih materijala i često ima podesive trake radi prilagođavanja individualnim potrebama pacijenta.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 14,
    title: "bandazer-za-palac",
    image_url: "/assets/images/ortoze-pojasevi-mideri/bandazer-za-palac.jpeg",
    description:
      "Bandžer za palac je ortopedsko pomagalo koji se stavlja na palac radi podrške, stabilizacije i zaštite. Napravljen od elastičnih materijala koji pružaju udobno prijanjanje uz palac. Koristi se za smanjenje bolova, ublažavanje upale, kao i za sprečavanje povreda tokom aktivnosti koje opterećuju palac. Bandžeri za palac su često korišćeni kod povreda tetiva ili zglobova palca, kao i kod stanja poput artritisa ili prekomernog opterećenja tokom sportskih aktivnosti.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 15,
    title: "HB-5324-ortoza-za-ruku",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/HB-5324-ortoza-za-ruku.jpeg",
    description:
      "Ortoza za ručni zglob je ortopedsko pomagalo koje se koristi za podršku, stabilizaciju i zaštitu ručnog zgloba. Obično je napravljena od čvrstih materijala poput plastike ili metala, a postavlja se oko ručnog zgloba radi smanjenja pokreta i ublažavanja bolova. Ova ortoza pomaže u održavanju stabilnosti i pravilnog položaja zgloba tokom aktivnosti, što može biti posebno korisno kod povreda, preopterećenja ili stanja poput artritisa.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 16,
    title: "ortoza-za-humerus-humeral-fracture-brace",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/medi-humeral-fracture-brace.jpeg",
    description:
      "Ortoza za humerus je ortopedsko pomagalo koje se koristi za podršku, stabilizaciju i zaštitu nadlaktične kosti (humerusa). Ova ortoza se obično postavlja oko nadlaktice i ramenog zgloba kako bi ograničila pokrete i pružila potporu tokom oporavka od povrede ili operacije na humerusu. Cilj ortoze za humerus je smanjenje bola, sprečavanje daljih povreda i olakšavanje procesa ozdravljenja.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 17,
    title: "HB-5410-mitela",
    image_url: "/assets/images/ortoze-pojasevi-mideri/HB-5410-mitela.jpeg",
    description:
      "Mitela je ortopedsko pomagalo koji se koristi za imobilizaciju i podršku povređene ili oslabljene šake, ručnog zgloba i podlaktice. Obično je napravljen od čvrstih materijala poput plastike ili metala, a postavlja se oko ruke i podlaktice.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 18,
    title: "longeta-za-koleno",
    image_url: "/assets/images/ortoze-pojasevi-mideri/longeta-za-koleno.png",
    description:
      "Longeta za koleno je ortopedsko pomagalo koje pruža podršku i imobilizaciju kolena. Nosite je oko kolena kako biste ograničili pokrete, smanjili opterećenje ili stabilizovali zglob tokom oporavka nakon povreda ili operacije. Longeta pomaže u ublažavanju bolova, podržava pravilan položaj kolena i olakšava proces rehabilitacije. Važno je koristiti longetu prema preporukama stručnjaka za postizanje najboljih terapijskih rezultata.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 19,
    title: "genu-steznik-za-koleno",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/genu-steznik-za-koleno.jpeg",
    description:
      "Steznik za koleno je ortopedski uređaj koji se nosi oko kolena radi podrške, stabilizacije i zaštite. Napravljen je od elastičnih materijala koji pružaju čvrsto prijanjanje uz koleno. Koristi se za smanjenje bolova, ublažavanje upale, ograničavanje pokreta radi oporavka od povrede ili rehabilitacije, kao i za sprečavanje novih povreda tokom aktivnosti koje opterećuju koleno. Steznik za koleno je često korišćen kod povreda ligamenata, mišića ili hrskavice, kao i kod stanja kao što su artritis ili nestabilnost kolena.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 20,
    title: "genumedi-steznik-kolena",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/genumedi-steznik-kolena.jpeg",
    description:
      "Genumedi steznik za koleno je ortopedsko pomagalo koje se koristi za podršku, stabilizaciju i zaštitu kolena. Namenjen je smanjenju bolova, olakšavanju kretanja i sprečavanju daljih povreda. Ovaj steznik se obično nosi tokom aktivnosti koje opterećuju koleno ili tokom oporavka od povrede.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 21,
    title: "HB-5106-traka-za-koleno",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/HB-5106-traka-za-koleno.jpeg",
    description:
      "Traka za koleno je ortopedsko pomagalo koje se koristi za podršku i stabilizaciju kolena. Obično se sastoji od elastične trake koja se nosi oko kolena radi smanjenja pritiska, ublažavanja bolova i poboljšanja stabilnosti zgloba. Ova traka pruža dodatnu podršku tokom aktivnosti koje opterećuju koleno, poput trčanja ili skakanja, te pomaže u održavanju pravilnog položaja zgloba.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 22,
    title: "medi-classic-tutor-za-koleno",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/medi-classic-tutor-za-koleno.jpeg",
    description:
      "Tutor ortoza za imobilizaciju kolena je ortopedsko pomagalo koje se koristi za stabilizaciju i ograničavanje pokreta kolena. Ova ortoza se obično sastoji od čvrste konstrukcije koja se postavlja oko kolena kako bi ga imobilizovala i pružila podršku tokom oporavka od povrede ili operacije. Glavna svrha tutor ortoze za imobilizaciju kolena je da smanji pokrete, olakša ozdravljenje i spreči dodatne povrede tokom perioda oporavka.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 23,
    title: "steznik-za-ahilovu-tetivu",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/steznik-za-ahilovu-tetivu.jpeg",
    description:
      "Steznik za Ahilovu tetivu je ortopedsko pomagalo koje se koristi za podršku i stabilizaciju Ahilove tetive, koja se nalazi na zadnjoj strani potkolenice. Ovaj steznik obično obuhvata petu i donji deo potkolenice, pružajući kompresiju i podršku tetivi. Koristi se za smanjenje bola, olakšavanje pokreta i ubrzavanje procesa oporavka nakon povrede Ahilove tetive.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 24,
    title: "Steznik-za-koleno-100",
    image_url: "/assets/images/ortoze-pojasevi-mideri/100.png",
    description:
      "Steznik za koleno od neoprena je ortopedsko pomagalo napravljen od specifičnog materijala - neoprena. Ovaj steznik pruža kompresiju i podršku kolenu, pomažući u stabilizaciji i održavanju toplote na tom području. Neoprenski materijal omogućava fleksibilnost, udobnost i zadržavanje toplote, što je posebno korisno za ublažavanje bola, smanjenje otoka i olakšavanje oporavka od povreda ili oštećenja kolena.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 25,
    title: "Patelarna-traka-110A",
    image_url: "/assets/images/ortoze-pojasevi-mideri/110A.png",
    description:
      "Patelarna traka je ortopedska podrška za koleno, fokusirana na patelu. Pruža kompresiju i stabilnost, pomažući u ublažavanju bola i smanjenju pritiska na patelu. Često se koristi u sportu i rehabilitaciji.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 26,
    title: "Aktivni-steznik-114U",
    image_url: "/assets/images/ortoze-pojasevi-mideri/114U.png",
    description:
      "Aktivni steznik je ortopedsko pomagalo za podršku tokom aktivnosti. Pruža dinamičku podršku i kompresiju, omogućavajući slobodno kretanje. Idealan je za sportske aktivnosti radi smanjenja rizika od povreda i poboljšanja performansi.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 27,
    title: "Aktivni-steznik-116U",
    image_url: "/assets/images/ortoze-pojasevi-mideri/116U.png",
    description:
      "Aktivni steznik pruža podršku tokom pokreta. Nudi dinamičku kompresiju za stabilnost mišića i zglobova, čineći ga idealnim za sportske aktivnosti. Olakšava kretanje i smanjuje rizik od povreda.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 28,
    title: "Aktivni-steznik-120",
    image_url: "/assets/images/ortoze-pojasevi-mideri/120.png",
    description:
      "Aktivni steznik za koleno pruža dinamičku podršku i stabilnost tokom aktivnosti. Namenjen je očuvanju optimalnog položaja kolena, smanjenju rizika od povreda i olakšavanju oporavka.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 29,
    title: "Noćna-ortoza-za-čukljeve",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/noćna-ortoza-za-čukljeve.png",
    description:
      "Noćna ortoza za čukljeve je posebno ortopedsko pomagalo za nošenje tokom spavanja, namenjeno korekciji ili olakšavanju problema s čukljevima. Pruža udobnost, podršku i pomaže u ispravljanju položaja palca tokom noći, doprinoseći postizanju bolje strukture stopala.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 30,
    title: "Peronealna-ortoza",
    image_url: "/assets/images/ortoze-pojasevi-mideri/peronealna-ortoza.png",
    description:
      'Peronealna ortoza je plastično pomagalo namenjen podršci osobama sa "palim stopalom" uzrokovanom oštećenjem peronealnog nerva, često posledicom moždanog udara. Održava stopalo pod pravim uglom od 90 stepeni u odnosu na potkolenicu, sprečavajući nekontrolisano padanje stopala pri hodanju. Veličina ortoze se prilagođava veličini cipela korisnika i preporučuje se nošenje u čvršćoj i dubljoj obući.',
    category: "ortoze za koleno, zglob, stopalo",
  },

  {
    id: 31,
    title: "Ortoza-za-koleno-sa-podesivim-zglobovima",
    image_url: "/assets/images/ortoze-pojasevi-mideri/rehab-kolena.png",
    description:
      "Ortoza za koleno sa podesivim zglobovima pruža podršku i stabilnost uz mogućnost prilagođavanja pokreta prema potrebama. Pomaže u ograničavanju neprirodnih pokreta, podržava rehabilitaciju i smanjuje rizik od povreda koljena.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 32,
    title: "Steznik-za-grudni-koš",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/steznik-za-grudni-koš.png",
    description:
      "Steznik za grudni koš je medicinsko pomagalo dizajnirano da pruži podršku i stabilnost grudnom košu. Koristi se u terapeutske svrhe, poput smanjenja pokreta tokom oporavka nakon povreda ili operacija na grudnom području. Ovi steznici obično imaju prilagodljiv dizajn i čvrstu konstrukciju kako bi održali stabilnost i podršku tokom procesa oporavka. Važno je koristiti ih prema preporukama medicinskog stručnjaka radi optimalnih terapijskih rezultata.",
    category: "mideri",
  },
  {
    id: 33,
    title: "lumbalni-mider",
    image_url: "/assets/images/ortoze-pojasevi-mideri/lumbalni-mider.png",
    description:
      "Lumbalni mider je ortopedsko pomagalo dizajnirano za pružanje podrške i stabilnosti u donjem delu leđa. Ovi pojasevi se obično nose oko struka i pružaju kompresiju kako bi smanjili opterećenje na lumbalnom delu kičme. Koriste se radi olakšavanja bolova, podrške pri rehabilitaciji ili održavanja pravilnog položaja kičme. Važno je koristiti lumbalni mider prema preporukama stručnjaka za postizanje najboljih terapijskih rezultata.",
    category: "mideri",
  },
  {
    id: 34,
    title: "Postoperativni-mider",
    image_url: "/assets/images/ortoze-pojasevi-mideri/postoperativni-mider.png",
    description:
      "Postoperativni mider je ortopedsko pomagalo koje pruža podršku, kompresiju i stabilnost nakon operacije. Nosite ga oko trbuha ili leđa kako biste ublažili otok i održali potrebnu podršku tokom procesa oporavka. Važno je koristiti mider prema preporukama stručnjaka radi optimalnog oporavka.",
    category: "mideri",
  },
  {
    id: 35,
    title: "torakolumbalni-mider",
    image_url: "/assets/images/ortoze-pojasevi-mideri/torakolumbalni-mider.png",
    description:
      "Torakolumbalni mider je ortopedsko pomagalo za podršku i stabilnost srednjeg i donjeg dela leđa. Nosite ga oko tela radi smanjenja bolova, olakšavanja rehabilitacije ili održavanja pravilnog položaja kičme. Važno je koristiti ga prema preporukama stručnjaka za optimalne terapijske rezultate.",
    category: "mideri",
  },
  {
    id: 36,
    title: "trudnički-pojas",
    image_url: "/assets/images/ortoze-pojasevi-mideri/trudnički-pojas.png",
    description:
      "Trudnički pojas predstavlja ortopedski dodatak namenjen trudnicama za pružanje podrške tokom trudnoće. Izrađen od elastičnih materijala prilagodljivih rastućem stomaku, ovaj pojas ima zadatak ublažavanja pritiska na donjem delu leđa, pružanja potpore trbušnim mišićima i poboljšanja opšteg komfora. Njegova pravilna upotreba, prema preporukama stručnjaka, može značajno doprineti smanjenju nelagodnosti tokom trudničkih meseci.",
    category: "pojasevi",
  },
  {
    id: 37,
    title: "protect-abdominal-support-front",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/protect-abdominal-support-front.jpeg",
    description:
      "Abdominalni pojas je ortopedsko pomagalo koji pruža podršku i stabilnost trbušnom ili grudnom delu tela. Koristi se radi ublažavanja bolova, poboljšanja držanja tela i olakšavanja svakodnevnih aktivnosti. Ovi uređaji mogu biti izrađeni od različitih materijala i oblika, prilagođeni individualnim potrebama korisnika kako bi im pružili optimalnu podršku i udobnost.",
    category: "pojasevi",
  },
  {
    id: 38,
    title: "HB-pojas-za-kičmu",
    image_url: "/assets/images/ortoze-pojasevi-mideri/HB-pojas-za-kicmu.jpeg",
    description:
      "Elastični pojas za korekciju držanja je ortopedsko pomagalo koji se nosi oko tela radi poboljšanja držanja tela. Napravljen je od elastičnih materijala sa plastičnim ojačanjima i koristi se kako bi podržao kičmu i održavao pravilno držanje, smanjujući napetost i nelagodnost u leđima. Ovaj pojas podstiče pravilan položaj tela i pomaže u prevenciji lošeg držanja i problema sa leđima.",
    category: "pojasevi",
  },
  {
    id: 39,
    title: "Traka-bandaža-za-skočni-zglob-406 ",
    image_url: "/assets/images/ortoze-pojasevi-mideri/406.png",
    description:
      "Bandaž traka za skočni zglob je ortopedska podrška koja se koristi za stabilizaciju i podršku skočnom zglobu. Ova traka pruža kompresiju i ograničava pokrete, pomažući u smanjenju otoka, ublažavanju bola i olakšavanju oporavka od povreda ili naprezanja skočnog zgloba. Namenjena je očuvanju stabilnosti i mobilnosti tokom aktivnosti.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 40,
    title: "OKM-ortoza-podkoleno-nadkolena",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/okm-sistem/okm-ortoza-podkoleno-nadkolena.jpeg",
    description:
      "OKM SISTEM je individualno prilagodljiv sistem za imobilizaciju koji se sastoji od 100% pamučne elastične tkanine i vrste poliuretanske pene. Omogućava preciznu kopiju dela tela koji se imobiliše. Prednosti sistema su brzina i lakoća aplikacije, a osnovna karakteristika je njegova mala težina.Potpuna je zamena za gips.",
    category: "okm sistem",
  },
  {
    id: 41,
    title: "OKM-LSO-mider",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/okm-sistem/okm-lso-mider.jpg",
    description:
      "OKM SISTEM je individualno prilagodljiv sistem za imobilizaciju koji se sastoji od 100% pamučne elastične tkanine i vrste poliuretanske pene. Omogućava preciznu kopiju dela tela koji se imobiliše. Prednosti sistema su brzina i lakoća aplikacije, a osnovna karakteristika je njegova mala težina.Potpuna je zamena za gips.",
    category: "okm sistem",
  },
  {
    id: 42,
    title: "OKM-ortoza-nadlaktice",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/okm-sistem/okm-ortoza-nadlaktice.jpg",
    description:
      "OKM SISTEM je individualno prilagodljiv sistem za imobilizaciju koji se sastoji od 100% pamučne elastične tkanine i vrste poliuretanske pene. Omogućava preciznu kopiju dela tela koji se imobiliše. Prednosti sistema su brzina i lakoća aplikacije, a osnovna karakteristika je njegova mala težina.Potpuna je zamena za gips.",
    category: "okm sistem",
  },
  {
    id: 43,
    title: "OKM-ortoza-ručnog-zgloba",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/okm-sistem/okm-ortoza-ručnog-zgloba.jpg",
    description:
      "OKM SISTEM je individualno prilagodljiv sistem za imobilizaciju koji se sastoji od 100% pamučne elastične tkanine i vrste poliuretanske pene. Omogućava preciznu kopiju dela tela koji se imobiliše. Prednosti sistema su brzina i lakoća aplikacije, a osnovna karakteristika je njegova mala težina.Potpuna je zamena za gips.",
    category: "okm sistem",
  },
  {
    id: 44,
    title: "OKM-TLSO-mider",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/okm-sistem/okm-tlso-mider.jpg",
    description:
      "OKM SISTEM je individualno prilagodljiv sistem za imobilizaciju koji se sastoji od 100% pamučne elastične tkanine i vrste poliuretanske pene. Omogućava preciznu kopiju dela tela koji se imobiliše. Prednosti sistema su brzina i lakoća aplikacije, a osnovna karakteristika je njegova mala težina.Potpuna je zamena za gips.",
    category: "okm sistem",
  },
  {
    id: 45,
    title: "Silikonski-ulošci-za-obuću",
    image_url: "/assets/images/ortopedski-ulosci-obuca/806.png",
    description:
      "Silikonski ulošci za obuću pružaju dodatnu udobnost i podršku stopalu. Izrađeni od mekanog silikonskog materijala, apsorbuju udarce i ublažavaju pritisak na stopalu, čineći hodanje ugodnijim. Namenjeni su poboljšanju udobnosti i smanjenju nelagodnosti pri nošenju obuće.",
    category: "ulošci i obuća",
  },
  {
    id: 46,
    title: "Silikonski-ulošci-za-decu",
    image_url:
      "/assets/images/ortopedski-ulosci-obuca/dečiji-silikonski-ulošci.png",
    description:
      "Silikonski ulošci za decu su anatomski oblikovani ulošci od silikonskog materijala, namenjeni za udobnost i podršku stopalima. Pružaju podršku lukovima stopala, ublažavaju pritisak tokom hodanja i smanjuju umor stopala. Ulošci su lagani, fleksibilni i izdržljivi, čineći ih idealnim za svakodnevnu upotrebu. Korisni su za decu s problemima kao što su ravna stopala ili bolovi u stopalima.",
    category: "ulošci i obuća",
  },
  {
    id: 47,
    title: "Perforirani-petni-podmetač",
    image_url:
      "/assets/images/ortopedski-ulosci-obuca/perforirani-petni-podmetac.png",
    description:
      "Perforirani petni podmetači su lagani ulošci za obuću, obično od silikona ili gela, koji pružaju udobnost i podršku petama. Omogućavaju bolju cirkulaciju vazduha, sprečavajući znojenje stopala, i ublažavaju pritisak na petama. Idealni su za ljude koji imaju bolove u petama ili druge probleme sa stopalima.",
    category: "ulošci i obuća",
  },
  {
    id: 48,
    title: "Petni-podmetači",
    image_url: "/assets/images/ortopedski-ulosci-obuca/petni-podmetaci.png",
    description:
      "Petni podmetači od silikona ili gela su mali ulošci za obuću koji se postavljaju ispod pete radi dodatne udobnosti i podrške stopalima. Pružaju olakšanje od pritiska na peti, smanjujući nelagodnost i poboljšavajući udobnost tokom hodanja ili stajanja. Ovi podmetači su korisni za osobe koje imaju bolove u petama ili druge probleme sa stopalima.",
    category: "ulošci i obuća",
  },
  {
    id: 49,
    title: "Silikonski-ulošci-za-odrasle",
    image_url:
      "/assets/images/ortopedski-ulosci-obuca/silikonski-ulosci-za-odrasle.png",
    description:
      "Silikonski ulošci za odrasle su anatomski oblikovani ulošci od silikonskog materijala, dizajnirani za dodatnu udobnost i podršku stopalima, smanjujući pritisak i olakšavajući hodanje.",
    category: "ulošci i obuća",
  },
  {
    id: 50,
    title: "Tročetvrtinski-ulošci",
    image_url:
      "/assets/images/ortopedski-ulosci-obuca/trocetvrtinski-ulosci.png",
    description:
      "Tročetvrtinski ulošci za obuću pokrivaju petu i deo stopala do oko tri četvrtine dužine stopala. Namenjeni su pružanju podrške, udobnosti i stabilnosti tokom hodanja ili stajanja. Pomažu u ublažavanju pritiska na peti i prednjem delu stopala, čineći ih idealnim za osobe koje traže dodatnu amortizaciju u tim delovima stopala ili imaju problema s bolovima u tim oblastima.",
    category: "ulošci i obuća",
  },
  {
    id: 51,
    title: "perika-Alexandra",
    image_url: "/assets/images/perike/perika-alexandra.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 52,
    title: "perika-Angelica",
    image_url: "/assets/images/perike/perika-angelica.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 53,
    title: "perika-April",
    image_url: "/assets/images/perike/perika-april.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 54,
    title: "perika-Arabella",
    image_url: "/assets/images/perike/perika-arabella.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 55,
    title: "perika-Catherina",
    image_url: "/assets/images/perike/perika-catherina.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 56,
    title: "perika-Christina",
    image_url: "/assets/images/perike/perika-christina.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 57,
    title: "perika-Claire-life",
    image_url: "/assets/images/perike/perika-claire-life.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 58,
    title: "perika-Evie",
    image_url: "/assets/images/perike/perika-evie.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 59,
    title: "perika-Gabi",
    image_url: "/assets/images/perike/perika-gabi.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 60,
    title: "perika-Honora",
    image_url: "/assets/images/perike/perika-honora.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 61,
    title: "perika-Jenifer",
    image_url: "/assets/images/perike/perika-jenifer.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 62,
    title: "perika-Megan",
    image_url: "/assets/images/perike/perika-megan.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 63,
    title: "perika-Montgomery",
    image_url: "/assets/images/perike/perika-montgomery.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 64,
    title: "perika-Poppy",
    image_url: "/assets/images/perike/perika-poppy.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 65,
    title: "perika-Sandra",
    image_url: "/assets/images/perike/perika-sandra.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 66,
    title: "perika-Sonya-Life",
    image_url: "/assets/images/perike/perika-sonya-life.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 67,
    title: "perika-Tamsin",
    image_url: "/assets/images/perike/perika-tamsin.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 68,
    title: "perika-tilly",
    image_url: "/assets/images/perike/perika-tilly.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 69,
    title: "perika-Tony-Life",
    image_url: "/assets/images/perike/perika-tony-life.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 70,
    title: "perika-Winter",
    image_url: "/assets/images/perike/perika-winter.png",
    description: "Medicinska perika",
    category: "perike",
  },
  {
    id: 71,
    title: "3223-elektromotorna-kolica",
    image_url: "/assets/images/kolica/3223-elektromotorna-kolica.png",
    description:
      "Elektromotorna kolica su prevozna sredstva koja koriste električni pogon za kretanje. Ova kolica su opremljena elektromotornim sistemom koji omogućava korisniku da ih pokreće pomoću kontrolnih dugmadi ili ručica. Elektromotorna kolica pružaju mobilnost osobama s otežanim kretanjem ili invaliditetom, omogućavajući im samostalnost i nezavisnost u svakodnevnim aktivnostima.",
    category: "kolica",
  },
  {
    id: 72,
    title: "mehanička-kolica",
    image_url: "/assets/images/kolica/mehanička-kolica.png",
    description:
      "Mehanička kolica su prevozno sredstvo koja se pokreću ljudskom snagom, obično pomoću ručica i točkova. Ova kolica omogućavaju korisnicima da ih guraju ili povlače, pružajući osnovnu mobilnost. Mehanička kolica su često jednostavna za korišćenje i predstavljaju praktično rešenje za ljude koji žele ili moraju koristiti prevozno sredstvo koje ne zahteva električni pogon.",
    category: "kolica",
  },
  {
    id: 73,
    title: "1033-elektromotorna-kolica",
    image_url: "/assets/images/kolica/1033-elektromotorna-kolica.png",
    description:
      "Elektromotorna kolica su prevozna sredstva koja koriste električni motor za kretanje. Ova kolica omogućavaju korisnicima da se kreću uz pomoć električnog pogona, često upravljajući ih preko ručica ili drugih električnih kontrola. Elektromotorna kolica pružaju samostalnost i olakšavaju mobilnost osobama s otežanom pokretljivošću ili invaliditetom.",
    category: "kolica",
  },
  {
    id: 74,
    title: "kolica",
    image_url: "/assets/images/kolica/kolica.png",
    description:
      "Invalidska kolica su prevozna sredstva prilagođena osobama s otežanim kretanjem ili invaliditetom. Omogućavaju korisnicima udobnost i nezavisnost pri kretanju. Mogu biti ručna ili električna, pružajući mobilnost i olakšavajući pristup različitim mestima.",
    category: "kolica",
  },
  {
    id: 75,
    title: "aktivna-kolica",
    image_url: "/assets/images/kolica/laka-aktivna-kolica.png",
    description:
      "Laka aktivna mehanička kolica su prenosiva i prilagodljiva prevozna sredstva koja se pokreću snagom korisnika. Ova kolica su izrađena od laganih materijala, olakšavajući upravljanje i prenos.",
    category: "kolica",
  },
  {
    id: 76,
    title: "Aktivna-invalidska-kolica",
    image_url: "/assets/images/kolica/aktivna-invalidska-kolica.png",
    description:
      "Laka aktivna mehanička kolica napravljena od aluminijuma su prenosiva i prilagodljiva prevozna sredstva koja se pokreću snagom korisnika. Ova kolica omogućavaju lagano upravljanje i jednostavan prenos, čineći ih idealnim izborom za osobe koje žele očuvati mobilnost i aktivan način života.",
    category: "kolica",
  },
  {
    id: 77,
    title: "dečija-kolica",
    image_url: "/assets/images/kolica/dečija-kolica.png",
    description:
      "Elegantna dečija kolica, posebno dizajnirana za mališane koji ne mogu hodati ili sedeti u pravilnom položaju zbog povrede ili drugog medicinskog stanja. Ova specijalno prilagođena kolica pružaju udobnost, podršku i sigurnost kako bi mala srca uživala u mobilnosti, bez obzira na izazove koje donosi njihovo trenutno zdravstveno stanje.",
    category: "kolica",
  },
  {
    id: 78,
    title: "hodalica-podlaktna",
    image_url: "/assets/images/stake-hodalice/hodalica-podlaktna.png",
    description:
      "Podlaktna hodalica je pomagalo za podršku pri hodanju, postavljeno ispod podlaktice kako bi pružila stabilnost i olakšala kretanje osobama koje imaju smanjenu pokretljivost",
    category: "hodalice, štake",
  },
  {
    id: 79,
    title: "hodalica-sa-dva-točka",
    image_url: "/assets/images/stake-hodalice/hodalica-sa-dva-točka.png",
    description:
      "Hodalica sa dva točka je ortopedsko pomagalo za podršku pri hodanju. Sastoji se od dva točka koja olakšavaju pomicanje, pružajući stabilnost i podršku korisnicima tokom kretanja. Ova jednostavna hodalica je idealna za osobe koje žele dodatnu podršku, ali i zadržati određenu mobilnost.",
    category: "hodalice, štake",
  },
  {
    id: 80,
    title: "hodalica",
    image_url: "/assets/images/stake-hodalice/hodalica.png",
    description:
      "Hodalica je ortopedsko pomagalo koje pruža podršku pri hodanju. Sastoji se od čvrstog okvira s rukohvatima. Namenjena je osobama smanjene pokretljivosti kako bi im olakšala kretanje i pružila sigurnost tokom hodanja.",
    category: "hodalice, štake",
  },
  {
    id: 81,
    title: "štake-podlaktne",
    image_url: "/assets/images/stake-hodalice/štake-podlaktne.png",
    description:
      "Podlaktne štake su ortopedska pomagala koja se koriste za podršku pri kretanju. Postavljaju se ispod podlaktice pružajući stabilnost i olakšavaju hodanje. Ove štake su posebno dizajnirane da pruže udobnost i podršku osobama smanjene pokretljivosti ili povredama donjih ekstremiteta.",
    category: "hodalice, štake",
  },
  {
    id: 82,
    title: "štake-podpazušne",
    image_url: "/assets/images/stake-hodalice/štake-podpazusne.png",
    description:
      "Podpazušne štake su ortopedska pomagala koja pružaju podršku pri hodanju. Postavljaju se ispod pazuha, pružajući stabilnost i omogućavajući korisniku da ravnomerno rasporedi težinu tela. Ove štake su posebno dizajnirane za udobnost i koriste se kako bi se olakšalo kretanje osobama smanjene pokretljivosti ili onima koji se oporavljaju od povreda donjih ekstremiteta.",
    category: "hodalice, štake",
  },
  {
    id: 83,
    title: "štap-na-rasklapanje",
    image_url: "/assets/images/stake-hodalice/štap-sklopivi.png",
    description:
      "Štap na rasklapanje je praktično ortopedsko pomagalo koje se može lako presaviti radi jednostavnijeg nošenja i skladištenja. Namenjen je podršci pri hodanju i olakšava mobilnost korisnicima. Ovaj štap je idealan za situacije kada je potrebno brzo sklopiti ili otvoriti štap radi prilagođavanja različitim potrebama tokom dana.",
    category: "hodalice, štake",
  },
  {
    id: 84,
    title: "Nastavak-za-WC-sa-poklopcem",
    image_url: "/assets/images/toaletni-program/nastavak-sa-poklopcem.png",
    description:
      "Nastavak za WC sa poklopcem je praktičan dodatak koji se postavlja na standardni WC kako bi korisnicima pružio veću visinu i udobnost prilikom korišćenja. Ovaj ortopedski nastavak ima integrisani poklopac, pružajući higijensko i estetski prihvatljivo rešenje. Pomaže osobama smanjene pokretljivosti da lakše sede i ustaju sa WC šolje, čineći svakodnevne aktivnosti jednostavnijim i sigurnijim.",
    category: "toaletni program",
  },
  {
    id: 85,
    title: "Nastavak-za-wc",
    image_url: "/assets/images/toaletni-program/nastavak-za-wc.png",
    description:
      "Nastavak za WC je dodatak koji se postavlja na standardni WC kako bi povećao visinu i olakšao korišćenje osobama smanjene pokretljivosti. Ovaj ortopedski dodatak pruža podršku i omogućava korisnicima lakše sedenje i ustajanje sa WC šolje. Jednostavan je za instalaciju i doprinosi povećanoj udobnosti i samostalnosti tokom obavljanja osnovnih higijenskih aktivnosti.",
    category: "toaletni program",
  },
  {
    id: 86,
    title: "sedište-za-kadu-sa-naslonom",
    image_url:
      "/assets/images/toaletni-program/sedište-za-kadu-sa-naslonom.png",
    description:
      "Sedište za kadu sa naslonom je praktično i bezbedno ortopedsko rešenje koje se postavlja na kadu. Ovo sedište pruža korisnicima sigurno i udobno mesto za sedenje tokom kupanja, a naslon doprinosi dodatnoj podršci i komforu. Namenjeno je osobama sa smanjenom pokretljivošću kako bi im olakšalo higijenske aktivnosti u kadi, čineći ih lakšim i sigurnijim.",
    category: "toaletni program",
  },
  {
    id: 87,
    title: "Toaletna-kolica",
    image_url: "/assets/images/toaletni-program/toaletna-kolica.png",
    description:
      "Toaletna kolica su ortopedska pomagala namenjena olakšanju pristupa WC-u osobama smanjene pokretljivosti. Ova kolica omogućavaju korisnicima da se sigurno presele s jednog mesta na drugo, obezbeđujući udobnost i podršku tokom higijenskih aktivnosti. Njihov dizajn čini pristup WC-u praktičnim i omogućava korisnicima samostalnost i nezavisnost u svakodnevnim aktivnostima.",
    category: "toaletni program",
  },
  {
    id: 88,
    title: "Toaletna-stolica-sa-točkićima",
    image_url:
      "/assets/images/toaletni-program/toaletna-stolica-sa-točkićima.png",
    description:
      "Toaletna kolica sa točkićima su mobilna ortopedska pomagala dizajnirana za korisnike koji imaju potrebu za podrškom pri korišćenju WC-a. Ova kolica imaju ugrađene točkiće koji omogućavaju lakše manevrisanje u toaletu. Pružaju udobnost, stabilnost i olakšavaju pristup korisnicima sa smanjenom pokretljivošću, čineći higijenske aktivnosti lakšim i sigurnijim.",
    category: "toaletni program",
  },
  {
    id: 89,
    title: "Sedište-za-kadu",
    image_url: "/assets/images/toaletni-program/sedište-za-kadu.png",
    description:
      "Sedište za kadu je praktičan dodatak koji se postavlja na kadu kako bi omogućio udobno i sigurno sedenje tokom kupanja. Ovaj ortopedski uređaj pruža korisnicima podršku i olakšava higijenske aktivnosti u kadi. Namenjen je osobama smanjene pokretljivosti, čineći kupanje udobnijim i pristupačnijim. Jednostavan je za instalaciju i doprinosi povećanoj sigurnosti tokom boravka u kadi.",
    category: "toaletni program",
  },
  {
    id: 90,
    title: "ritasb-2004",
    image_url: "/assets/images/grudnjaci-proteze-dojke/ritasb-2004.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 91,
    title: "1151-nancy-sb-light-sand",
    image_url:
      "/assets/images/grudnjaci-proteze-dojke/1151-nancy-sb-light-sand.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 92,
    title: "2004-rita-sb-black",
    image_url: "/assets/images/grudnjaci-proteze-dojke/2004-rita-sb-black.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 93,
    title: "2004-rita-sb-sand",
    image_url: "/assets/images/grudnjaci-proteze-dojke/2004-rita-sb-sand.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 94,
    title: "2128-frances-sb-FC-black",
    image_url:
      "/assets/images/grudnjaci-proteze-dojke/2128-frances-sb-FC-black.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 95,
    title: "44480-1151-44807-44417-44024-nancy-SB",
    image_url:
      "/assets/images/grudnjaci-proteze-dojke/44480-1151-44807-44417-44024-nancy-SB.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 96,
    title: "44534-mara-sbp-off-white",
    image_url:
      "/assets/images/grudnjaci-proteze-dojke/44534-mara-sbp-off-white.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 97,
    title: "44801-tessa-sb-blush",
    image_url:
      "/assets/images/grudnjaci-proteze-dojke/44801-tessa-sb-blush.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 98,
    title: "frances-sb-2128-white",
    image_url:
      "/assets/images/grudnjaci-proteze-dojke/frances-sb-2128-white.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 99,
    title: "frances-sb-2128",
    image_url: "/assets/images/grudnjaci-proteze-dojke/frances-sb-2128.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 100,
    title: "isabel-sb-beli-ortopedski-grudnjak-za-karcinom-dojke",
    image_url:
      "/assets/images/grudnjaci-proteze-dojke/isabelsb-beli-ortopedski-grudnjak-za-karcinom-dojke.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 101,
    title: "Isabelsb-crni_ortopedski-grudnjak-za-karcinom-dojke",
    image_url:
      "/assets/images/grudnjaci-proteze-dojke/Isabelsb-crni_ortopedski-grudnjak-za-karcinom-dojke.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 102,
    title: "nancy-1151-lightnude",
    image_url:
      "/assets/images/grudnjaci-proteze-dojke/nancy-1151-lightnude.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
  {
    id: 103,
    title: "nancy-sb-black-44870",
    image_url:
      "/assets/images/grudnjaci-proteze-dojke/nancy-sb-black-44870.png",
    description: "Ortopedski grudnjak",
    category: "proteze dojke i ortopedski grudnjaci",
  },
];

export const getProducts = () => {
  return products;
};

export const getProduct = async (title) => {
  const decodedTitle = decodeURIComponent(title);
  return products.find((product) => product.title === decodedTitle);
};

export const searchProducts = async (searchValue) => {
  const searchWords = searchValue.toLowerCase().split(" ");
  const filteredProducts = products.filter((product) =>
    searchWords.every((word) => product.title.toLowerCase().includes(word))
  );
  return filteredProducts;
};
