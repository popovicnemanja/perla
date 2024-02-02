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
    title: "Kragna",
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
    title: "trudnički-pojas",
    image_url: "/assets/images/ortoze-pojasevi-mideri/trudnički-pojas.png",
    description:
      "Trudnički pojas predstavlja ortopedski dodatak namenjen trudnicama za pružanje podrške tokom trudnoće. Izrađen od elastičnih materijala prilagodljivih rastućem stomaku, ovaj pojas ima zadatak ublažavanja pritiska na donjem delu leđa, pružanja potpore trbušnim mišićima i poboljšanja opšteg komfora. Njegova pravilna upotreba, prema preporukama stručnjaka, može značajno doprineti smanjenju nelagodnosti tokom trudničkih meseci.",
    category: "pojasevi",
  },
  {
    id: 6,
    title: "Steznik-za-grudni-koš",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/steznik-za-grudni-koš.png",
    description:
      "Steznik za grudni koš je medicinsko pomagalo dizajnirano da pruži podršku i stabilnost grudnom košu. Koristi se u terapeutske svrhe, poput smanjenja pokreta tokom oporavka nakon povreda ili operacija na grudnom području. Ovi steznici obično imaju prilagodljiv dizajn i čvrstu konstrukciju kako bi održali stabilnost i podršku tokom procesa oporavka. Važno je koristiti ih prema preporukama medicinskog stručnjaka radi optimalnih terapijskih rezultata.",
    category: "mideri",
  },
  {
    id: 7,
    title: "lumbalni-mider",
    image_url: "/assets/images/ortoze-pojasevi-mideri/lumbalni-mider.png",
    description:
      "Lumbalni mider je ortopedsko pomagalo dizajnirano za pružanje podrške i stabilnosti u donjem delu leđa. Ovi pojasevi se obično nose oko struka i pružaju kompresiju kako bi smanjili opterećenje na lumbalnom delu kičme. Koriste se radi olakšavanja bolova, podrške pri rehabilitaciji ili održavanja pravilnog položaja kičme. Važno je koristiti lumbalni mider prema preporukama stručnjaka za postizanje najboljih terapijskih rezultata.",
    category: "mideri",
  },
  {
    id: 8,
    title: "Postoperativni-mider",
    image_url: "/assets/images/ortoze-pojasevi-mideri/postoperativni-mider.png",
    description:
      "Postoperativni mider je ortopedsko pomagalo koje pruža podršku, kompresiju i stabilnost nakon operacije. Nosite ga oko trbuha ili leđa kako biste ublažili otok i održali potrebnu podršku tokom procesa oporavka. Važno je koristiti mider prema preporukama stručnjaka radi optimalnog oporavka.",
    category: "mideri",
  },
  {
    id: 9,
    title: "torakolumbalni-mider",
    image_url: "/assets/images/ortoze-pojasevi-mideri/torakolumbalni-mider.png",
    description:
      "Torakolumbalni mider je ortopedsko pomagalo za podršku i stabilnost srednjeg i donjeg dela leđa. Nosite ga oko tela radi smanjenja bolova, olakšavanja rehabilitacije ili održavanja pravilnog položaja kičme. Važno je koristiti ga prema preporukama stručnjaka za optimalne terapijske rezultate.",
    category: "mideri",
  },
  {
    id: 10,
    title: "longeta-za-koleno",
    image_url: "/assets/images/ortoze-pojasevi-mideri/longeta-za-koleno.png",
    description:
      "Longeta za koleno je ortopedsko pomagalo koje pruža podršku i imobilizaciju kolena. Nosite je oko kolena kako biste ograničili pokrete, smanjili opterećenje ili stabilizovali zglob tokom oporavka nakon povreda ili operacije. Longeta pomaže u ublažavanju bolova, podržava pravilan položaj kolena i olakšava proces rehabilitacije. Važno je koristiti longetu prema preporukama stručnjaka za postizanje najboljih terapijskih rezultata.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 11,
    title: "Noćna-ortoza-za-čukljeve",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/noćna-ortoza-za-čukljeve.png",
    description:
      "Noćna ortoza za čukljeve je posebno ortopedsko pomagalo za nošenje tokom spavanja, namenjeno korekciji ili olakšavanju problema s čukljevima. Pruža udobnost, podršku i pomaže u ispravljanju položaja palca tokom noći, doprinoseći postizanju bolje strukture stopala.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 12,
    title: "Peronalna-ortoza",
    image_url: "/assets/images/ortoze-pojasevi-mideri/peronalna-ortoza.png",
    description:
      'Peronealna ortoza je plastično pomagalo namenjen podršci osobama sa "palim stopalom" uzrokovanom oštećenjem peronealnog nerva, često posledicom moždanog udara. Održava stopalo pod pravim uglom od 90 stepeni u odnosu na potkolenicu, sprečavajući nekontrolisano padanje stopala pri hodanju. Veličina ortoze se prilagođava veličini cipela korisnika i preporučuje se nošenje u čvršćoj i dubljoj obući.',
    category: "ortoze za koleno, zglob, stopalo",
  },

  {
    id: 13,
    title: "Ortoza-za-koleno-sa-podesivim-zglobovima",
    image_url: "/assets/images/ortoze-pojasevi-mideri/rehab-kolena.png",
    description:
      "Ortoza za koleno sa podesivim zglobovima pruža podršku i stabilnost uz mogućnost prilagođavanja pokreta prema potrebama. Pomaže u ograničavanju neprirodnih pokreta, podržava rehabilitaciju i smanjuje rizik od povreda koljena.",
    category: "ortoze za koleno, zglob, stopalo",
  },
  {
    id: 14,
    title: "Mitela",
    image_url: "/assets/images/ortoze-pojasevi-mideri/mitela.png",
    description:
      "Mitela je ortopedsko pomagalo koji imobilizuje i pruža podršku šaci, ručnom zglobu i delu podlaktice nakon povreda ili operacija radi bržeg ozdravljenja.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 15,
    title: "Ortoza-za-ručni-zgloba",
    image_url: "/assets/images/ortoze-pojasevi-mideri/ortoza-ručnog-zgloba.png",
    description:
      "Ortoza za ručni zglob pruža podršku, stabilnost i imobilizaciju nakon povreda ili operacija radi bržeg oporavka.",
    category: "ortoza za rame, lakat, ručni zglob",
  },
  {
    id: 16,
    title: "Ortoza-za-palac",
    image_url: "/assets/images/ortoze-pojasevi-mideri/ortoza-za-palac.png",
    description:
      "Ortoza za palac je ortopedsko pomagalo koje pruža podršku, stabilnost i imobilizaciju palca. Koristi se nakon povreda, operacija ili kod određenih medicinskih stanja kako bi se ograničila pokretljivost palca i olakšao proces ozdravljenja.",
    category: "ortoza za rame, lakat, ručni zglob",
  },

  {
    id: 17,
    title: "Steznik-za-pravilno-držanje-ramena",
    image_url:
      "/assets/images/ortoze-pojasevi-mideri/steznik-za-pravilno-držanje-ramena.png",
    description:
      "Ortoza za pravilno držanje ramena je ortopedsko pomagalo koje se koristi radi podrške i korekcije položaja ramena. Pomaže održavanju pravilnog držanja, smanjuje opterećenje na ramenima i vratu, te doprinosi očuvanju pravilne posturalne ravnoteže.",
    category: "ortoze za rame, lakat, ručni zglob",
  },
  {
    id: 18,
    title: "Steznik-za-ruku",
    image_url: "/assets/images/ortoze-pojasevi-mideri/steznik-za-ruku.png",
    description:
      "Steznik za ruku je ortopedsko pomagalo koje pruža potporu i kompresiju za ruku. Koristi se u rehabilitaciji, nakon povreda ili operacija, kako bi se smanjio otok, stabilizovala ruka i olakšao proces ozdravljenja. Steznik je obično napravljen od elastičnih materijala i često ima podesive trake radi prilagođavanja individualnim potrebama pacijenta.",
    category: "ortoze za rame, lakat, ručni zglob",
  },

  {
    id: 19,
    title: "3223-elektromotorna-kolica",
    image_url: "/assets/images/kolica/3223-elektromotorna-kolica.png",
    description:
      "Elektromotorna kolica su prevozna sredstva koja koriste električni pogon za kretanje. Ova kolica su opremljena elektromotornim sistemom koji omogućava korisniku da ih pokreće pomoću kontrolnih dugmadi ili ručica. Elektromotorna kolica pružaju mobilnost osobama s otežanim kretanjem ili invaliditetom, omogućavajući im samostalnost i nezavisnost u svakodnevnim aktivnostima.",
    category: "kolica",
  },
  {
    id: 20,
    title: "mehanička-kolica",
    image_url: "/assets/images/kolica/mehanička-kolica.png",
    description:
      "Mehanička kolica su prevozno sredstvo koja se pokreću ljudskom snagom, obično pomoću ručica i točkova. Ova kolica omogućavaju korisnicima da ih guraju ili povlače, pružajući osnovnu mobilnost. Mehanička kolica su često jednostavna za korišćenje i predstavljaju praktično rešenje za ljude koji žele ili moraju koristiti prevozno sredstvo koje ne zahteva električni pogon.",
    category: "kolica",
  },
  {
    id: 21,
    title: "1033-elektromotorna-kolica",
    image_url: "/assets/images/kolica/1033-elektromotorna-kolica.png",
    description:
      "Elektromotorna kolica su prevozna sredstva koja koriste električni motor za kretanje. Ova kolica omogućavaju korisnicima da se kreću uz pomoć električnog pogona, često upravljajući ih preko ručica ili drugih električnih kontrola. Elektromotorna kolica pružaju samostalnost i olakšavaju mobilnost osobama s otežanom pokretljivošću ili invaliditetom.",
    category: "kolica",
  },
  {
    id: 22,
    title: "kolica",
    image_url: "/assets/images/kolica/kolica.png",
    description:
      "Invalidska kolica su prevozna sredstva prilagođena osobama s otežanim kretanjem ili invaliditetom. Omogućavaju korisnicima udobnost i nezavisnost pri kretanju. Mogu biti ručna ili električna, pružajući mobilnost i olakšavajući pristup različitim mestima.",
    category: "kolica",
  },
  {
    id: 23,
    title: "aktivna-kolica",
    image_url: "/assets/images/kolica/laka-aktivna-kolica.png",
    description:
      "Laka aktivna mehanička kolica su prenosiva i prilagodljiva prevozna sredstva koja se pokreću snagom korisnika. Ova kolica su izrađena od laganih materijala, olakšavajući upravljanje i prenos.",
    category: "kolica",
  },

  {
    id: 24,
    title: "Aktivna-invalidska-kolica",
    image_url: "/assets/images/kolica/aktivna-invalidska-kolica.png",
    description:
      "Laka aktivna mehanička kolica napravljena od aluminijuma su prenosiva i prilagodljiva prevozna sredstva koja se pokreću snagom korisnika. Ova kolica omogućavaju lagano upravljanje i jednostavan prenos, čineći ih idealnim izborom za osobe koje žele očuvati mobilnost i aktivan način života.",
    category: "kolica",
  },

  {
    id: 25,
    title: "dečija-kolica",
    image_url: "/assets/images/kolica/dečija-kolica.png",
    description:
      "Elegantna dečija kolica, posebno dizajnirana za mališane koji ne mogu hodati ili sedeti u pravilnom položaju zbog povrede ili drugog medicinskog stanja. Ova specijalno prilagođena kolica pružaju udobnost, podršku i sigurnost kako bi mala srca uživala u mobilnosti, bez obzira na izazove koje donosi njihovo trenutno zdravstveno stanje.",
    category: "kolica",
  },
  {
    id: 26,
    title: "hodalica-podlaktna",
    image_url: "/assets/images/stake-hodalice/hodalica-podlaktna.png",
    description:
      "Podlaktna hodalica je pomagalo za podršku pri hodanju, postavljeno ispod podlaktice kako bi pružila stabilnost i olakšala kretanje osobama koje imaju smanjenu pokretljivost",
    category: "hodalice, štake",
  },
  {
    id: 27,
    title: "hodalica-sa-dva-točka",
    image_url: "/assets/images/stake-hodalice/hodalica-sa-dva-točka.png",
    description:
      "Hodalica sa dva točka je ortopedsko pomagalo za podršku pri hodanju. Sastoji se od dva točka koja olakšavaju pomicanje, pružajući stabilnost i podršku korisnicima tokom kretanja. Ova jednostavna hodalica je idealna za osobe koje žele dodatnu podršku, ali i zadržati određenu mobilnost.",
    category: "hodalice, štake",
  },
  {
    id: 28,
    title: "hodalica",
    image_url: "/assets/images/stake-hodalice/hodalica.png",
    description:
      "Hodalica je ortopedsko pomagalo koje pruža podršku pri hodanju. Sastoji se od čvrstog okvira s rukohvatima. Namenjena je osobama smanjene pokretljivosti kako bi im olakšala kretanje i pružila sigurnost tokom hodanja.",
    category: "hodalice, štake",
  },
  {
    id: 29,
    title: "štake-podlaktne",
    image_url: "/assets/images/stake-hodalice/štake-podlaktne.png",
    description:
      "Podlaktne štake su ortopedska pomagala koja se koriste za podršku pri kretanju. Postavljaju se ispod podlaktice pružajući stabilnost i olakšavaju hodanje. Ove štake su posebno dizajnirane da pruže udobnost i podršku osobama smanjene pokretljivosti ili povredama donjih ekstremiteta.",
    category: "hodalice, štake",
  },
  {
    id: 30,
    title: "štake-podpazušne",
    image_url: "/assets/images/stake-hodalice/štake-podpazusne.png",
    description:
      "Podpazušne štake su ortopedska pomagala koja pružaju podršku pri hodanju. Postavljaju se ispod pazuha, pružajući stabilnost i omogućavajući korisniku da ravnomerno rasporedi težinu tela. Ove štake su posebno dizajnirane za udobnost i koriste se kako bi se olakšalo kretanje osobama smanjene pokretljivosti ili onima koji se oporavljaju od povreda donjih ekstremiteta.",
    category: "hodalice, štake",
  },
  {
    id: 31,
    title: "štap-na-rasklapanje",
    image_url: "/assets/images/stake-hodalice/štap-sklopivi.png",
    description:
      "Štap na rasklapanje je praktično ortopedsko pomagalo koje se može lako presaviti radi jednostavnijeg nošenja i skladištenja. Namenjen je podršci pri hodanju i olakšava mobilnost korisnicima. Ovaj štap je idealan za situacije kada je potrebno brzo sklopiti ili otvoriti štap radi prilagođavanja različitim potrebama tokom dana.",
    category: "hodalice, štake",
  },
  {
    id: 32,
    title: "Nastavak-za-WC-sa-poklopcem",
    image_url: "/assets/images/toaletni-program/nastavak-sa-poklopcem.png",
    description:
      "Nastavak za WC sa poklopcem je praktičan dodatak koji se postavlja na standardni WC kako bi korisnicima pružio veću visinu i udobnost prilikom korišćenja. Ovaj ortopedski nastavak ima integrisani poklopac, pružajući higijensko i estetski prihvatljivo rešenje. Pomaže osobama smanjene pokretljivosti da lakše sede i ustaju sa WC šolje, čineći svakodnevne aktivnosti jednostavnijim i sigurnijim.",
    category: "toaletni program",
  },
  {
    id: 33,
    title: "Nastavak-za-wc",
    image_url: "/assets/images/toaletni-program/nastavak-za-wc.png",
    description:
      "Nastavak za WC je dodatak koji se postavlja na standardni WC kako bi povećao visinu i olakšao korišćenje osobama smanjene pokretljivosti. Ovaj ortopedski dodatak pruža podršku i omogućava korisnicima lakše sedenje i ustajanje sa WC šolje. Jednostavan je za instalaciju i doprinosi povećanoj udobnosti i samostalnosti tokom obavljanja osnovnih higijenskih aktivnosti.",
    category: "toaletni program",
  },
  {
    id: 34,
    title: "sediste-za-kadu-sa-naslonom",
    image_url:
      "/assets/images/toaletni-program/sedište-za-kadu-sa-naslonom.png",
    description:
      "Sedište za kadu sa naslonom je praktično i bezbedno ortopedsko rešenje koje se postavlja na kadu. Ovo sedište pruža korisnicima sigurno i udobno mesto za sedenje tokom kupanja, a naslon doprinosi dodatnoj podršci i komforu. Namenjeno je osobama sa smanjenom pokretljivošću kako bi im olakšalo higijenske aktivnosti u kadi, čineći ih lakšim i sigurnijim.",
    category: "toaletni program",
  },
  {
    id: 35,
    title: "Toaletna-kolica",
    image_url: "/assets/images/toaletni-program/toaletna-kolica.png",
    description:
      "Toaletna kolica su ortopedska pomagala namenjena olakšanju pristupa WC-u osobama smanjene pokretljivosti. Ova kolica omogućavaju korisnicima da se sigurno presele s jednog mesta na drugo, obezbeđujući udobnost i podršku tokom higijenskih aktivnosti. Njihov dizajn čini pristup WC-u praktičnim i omogućava korisnicima samostalnost i nezavisnost u svakodnevnim aktivnostima.",
    category: "toaletni program",
  },
  {
    id: 36,
    title: "Toaletna-stolica-sa-točkićima",
    image_url:
      "/assets/images/toaletni-program/toaletna-stolica-sa-točkićima.png",
    description:
      "Toaletna kolica sa točkićima su mobilna ortopedska pomagala dizajnirana za korisnike koji imaju potrebu za podrškom pri korišćenju WC-a. Ova kolica imaju ugrađene točkiće koji omogućavaju lakše manevrisanje u toaletu. Pružaju udobnost, stabilnost i olakšavaju pristup korisnicima sa smanjenom pokretljivošću, čineći higijenske aktivnosti lakšim i sigurnijim.",
    category: "toaletni program",
  },
  {
    id: 37,
    title: "Sedište-za-kadu",
    image_url: "/assets/images/toaletni-program/sedište-za-kadu.png",
    description: "Sedište za kadu je praktičan dodatak koji se postavlja na kadu kako bi omogućio udobno i sigurno sedenje tokom kupanja. Ovaj ortopedski uređaj pruža korisnicima podršku i olakšava higijenske aktivnosti u kadi. Namenjen je osobama smanjene pokretljivosti, čineći kupanje udobnijim i pristupačnijim. Jednostavan je za instalaciju i doprinosi povećanoj sigurnosti tokom boravka u kadi.",
    category: "toaletni program",
  },
  {
    id: 38,
    title: "perika-Alexandra",
    image_url: "/assets/images/perike/perika-alexandra.png",
    description: "Perika Alexandra",
    category: "perike",
  },
  {
    id: 39,
    title: "perika-Angelica",
    image_url: "/assets/images/perike/perika-angelica.png",
    description: "Perika Angelica",
    category: "perike",
  },
  {
    id: 40,
    title: "perika-April",
    image_url: "/assets/images/perike/perika-april.png",
    description: "Perika April",
    category: "perike",
  },
  {
    id: 41,
    title: "perika-Arabella",
    image_url: "/assets/images/perike/perika-arabella.png",
    description: "Perika Alexandra",
    category: "perike",
  },
  {
    id: 42,
    title: "perika-Catherina",
    image_url: "/assets/images/perike/perika-catherina.png",
    description: "Perika Catherina",
    category: "perike",
  },
  {
    id: 43,
    title: "perika-Christina",
    image_url: "/assets/images/perike/perika-christina.png",
    description: "Perika Christina",
    category: "perike",
  },
  {
    id: 44,
    title: "perika-Claire-life",
    image_url: "/assets/images/perike/perika-claire-life.png",
    description: "Perika Claire Life",
    category: "perike",
  },
  {
    id: 45,
    title: "perika-Evie",
    image_url: "/assets/images/perike/perika-evie.png",
    description: "Perika Evie",
    category: "perike",
  },
  {
    id: 46,
    title: "perika-Gabi",
    image_url: "/assets/images/perike/perika-gabi.png",
    description: "Perika Gabi",
    category: "perike",
  },
  {
    id: 47,
    title: "perika-Honora",
    image_url: "/assets/images/perike/perika-honora.png",
    description: "Perika Honora",
    category: "perike",
  },
  {
    id: 48,
    title: "perika-Jenifer",
    image_url: "/assets/images/perike/perika-jenifer.png",
    description: "Perika Jenifer",
    category: "perike",
  },
  {
    id: 49,
    title: "perika-Megan",
    image_url: "/assets/images/perike/perika-megan.png",
    description: "Perika Megan",
    category: "perike",
  },
  {
    id: 50,
    title: "perika-Montgomery",
    image_url: "/assets/images/perike/perika-montgomery.png",
    description: "Perika Montgomery",
    category: "perike",
  },
  {
    id: 51,
    title: "perika-Poppy",
    image_url: "/assets/images/perike/perika-poppy.png",
    description: "Perika Poppy",
    category: "perike",
  },
  {
    id: 52,
    title: "perika-Sandra",
    image_url: "/assets/images/perike/perika-sandra.png",
    description: "Perika Sandra",
    category: "perike",
  },
  {
    id: 53,
    title: "perika-Sonya-Life",
    image_url: "/assets/images/perike/perika-sonya-life.png",
    description: "Perika Sonya Life",
    category: "perike",
  },
  {
    id: 54,
    title: "perika-Tamsin",
    image_url: "/assets/images/perike/perika-tamsin.png",
    description: "Perika Tamsin",
    category: "perike",
  },
  {
    id: 55,
    title: "perika-tilly",
    image_url: "/assets/images/perike/perika-tilly.png",
    description: "Perika Tilly",
    category: "perike",
  },
  {
    id: 56,
    title: "perika-Tony-Life",
    image_url: "/assets/images/perike/perika-tony-life.png",
    description: "Perika Tony Life",
    category: "perike",
  },
  {
    id: 57,
    title: "perika-Winter",
    image_url: "/assets/images/perike/perika-winter.png",
    description: "Perika Winter",
    category: "perike",
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
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return filteredProducts;
};
