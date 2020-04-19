const deaths = [
  {
    Sorszám: 189,
    Nem: 'Nő',
    Kor: 81,
    Alapbetegségek: 'szívritmus zavar',
  },
  {
    Sorszám: 188,
    Nem: 'Nő',
    Kor: 77,
    Alapbetegségek:
      'magas vérnyomás, cukorbetegség, iszkémiás szívbetegség, pacemaker, pajzsmirigy-alulműködés',
  },
  {
    Sorszám: 187,
    Nem: 'Nő',
    Kor: 83,
    Alapbetegségek: 'magas vérnyomás, cukorbetegség, daganatos megbetegedés',
  },
  {
    Sorszám: 186,
    Nem: 'Férfi',
    Kor: 65,
    Alapbetegségek: 'cukorbetegség, autoimmun betegség, iszkémiás szívbetegség',
  },
  {
    Sorszám: 185,
    Nem: 'Nő',
    Kor: 72,
    Alapbetegségek: 'magas vérnyomás, cukorbetegség, dagantos megbetegedés',
  },
  {
    Sorszám: 184,
    Nem: 'Nő',
    Kor: 88,
    Alapbetegségek: 'magas vérnyomás, érszűkület, szívelégtelenség',
  },
  {
    Sorszám: 183,
    Nem: 'Nő',
    Kor: 72,
    Alapbetegségek: 'magas vérnyomás, stroke',
  },
  {
    Sorszám: 182,
    Nem: 'Férfi',
    Kor: 73,
    Alapbetegségek:
      'alkoholizmus okozta depresszió, demencia, reziduális zavarok, epilepszia, tüdőtumor',
  },
  {
    Sorszám: 181,
    Nem: 'Férfi',
    Kor: 83,
    Alapbetegségek:
      'magas vérnyomás, pitvarfibrilláció, daganatos megbetegedés, krónikus veseelégtelenség',
  },
  {
    Sorszám: 180,
    Nem: 'Férfi',
    Kor: 77,
    Alapbetegségek: 'cukorbetegség, elhízás, csontrendellenesség',
  },
  {
    Sorszám: 179,
    Nem: 'Férfi',
    Kor: 85,
    Alapbetegségek: 'nem ismert',
  },
  {
    Sorszám: 178,
    Nem: 'Nő',
    Kor: 78,
    Alapbetegségek: 'magas vérnyomás, Alzheimer-kór',
  },
  {
    Sorszám: 177,
    Nem: 'Nő',
    Kor: 87,
    Alapbetegségek: 'pitvarfibrilláció, iszkémiás szívbetegség',
  },
  {
    Sorszám: 176,
    Nem: 'Férfi',
    Kor: 59,
    Alapbetegségek: 'magas vérnyomás, pacemaker, cukorbetegség',
  },
  {
    Sorszám: 175,
    Nem: 'Nő',
    Kor: 81,
    Alapbetegségek: 'érelmeszesedés, demencia',
  },
  {
    Sorszám: 174,
    Nem: 'Férfi',
    Kor: 67,
    Alapbetegségek:
      'érelmeszesedés, cukorbetegség, szívizombetegség, amputált alsóvégtag',
  },
  {
    Sorszám: 173,
    Nem: 'Férfi',
    Kor: 65,
    Alapbetegségek: 'magas vérnyomás, szívbetegség, szívelégtelenség',
  },
  {
    Sorszám: 172,
    Nem: 'Nő',
    Kor: 42,
    Alapbetegségek:
      'pneumonia hypostatica l.d. in obs., Urocystitis, Huntington kór',
  },
  {
    Sorszám: 171,
    Nem: 'Férfi',
    Kor: 82,
    Alapbetegségek: 'magas vérnyomás, cukorbetegség',
  },
  {
    Sorszám: 170,
    Nem: 'Nő',
    Kor: 90,
    Alapbetegségek:
      'magas vérnyomás, szívelégtelenség, veseelégtelenség, anyagcsere rendellenesség,',
  },
  {
    Sorszám: 169,
    Nem: 'Nő',
    Kor: 78,
    Alapbetegségek:
      'krónikus obstruktív tüdőbetegség, magas vérnyomás, daganatos betegség',
  },
  {
    Sorszám: 168,
    Nem: 'Nő',
    Kor: 80,
    Alapbetegségek: 'magas vérnyomás, általános érelmeszesedés',
  },
  {
    Sorszám: 167,
    Nem: 'Nő',
    Kor: 79,
    Alapbetegségek:
      'alapbetegség: érelmeszesédés, Motoneuron betegség Kísérobetegség: ISZB, M. hypertonicus, Mitr. et ao. insuff. valv., Hyperthyreosis, Fibr. auric. St.p. cholecytectomiam',
  },
  {
    Sorszám: 166,
    Nem: 'Férfi',
    Kor: 90,
    Alapbetegségek: 'szívbetegség, magas vérnyomás',
  },
  {
    Sorszám: 165,
    Nem: 'Férfi',
    Kor: 70,
    Alapbetegségek: 'általános érelmeszesedés, idegrendszeri betegség',
  },
  {
    Sorszám: 164,
    Nem: 'Férfi',
    Kor: 82,
    Alapbetegségek: 'magas vérnyomás, endokrin betegség, agyi érbetegség',
  },
  {
    Sorszám: 163,
    Nem: 'Nő',
    Kor: 88,
    Alapbetegségek: 'magas vérnyomás, szív és agyi erek meszesedése',
  },
  {
    Sorszám: 162,
    Nem: 'Nő',
    Kor: 88,
    Alapbetegségek: 'művese kezelés, magas vérnyomás, cukorbetegség, pacemaker',
  },
  {
    Sorszám: 161,
    Nem: 'Nő',
    Kor: 92,
    Alapbetegségek:
      'általános érelmeszesedés, daganatos betegség, magas vérnyomás',
  },
  {
    Sorszám: 160,
    Nem: 'Nő',
    Kor: 77,
    Alapbetegségek: 'veseelégtelenség, tüdőembolia, tüdőgyulladás',
  },
  {
    Sorszám: 159,
    Nem: 'Nő',
    Kor: 76,
    Alapbetegségek:
      'magas vérnyomás, krónikus májbetegség, atrophia cer., LC cholecystect., cataracta műtét, portalis encephalopathia',
  },
  {
    Sorszám: 158,
    Nem: 'Nő',
    Kor: 94,
    Alapbetegségek:
      'magas vérnyomás, anyagcsere betegség, szív-és érrendszeri betegség',
  },
  {
    Sorszám: 157,
    Nem: 'Férfi',
    Kor: 81,
    Alapbetegségek:
      'magas vérnyomás, krónikus veseelégtelenség, csontvelői kóros vérképzés tünetegyüttes',
  },
  {
    Sorszám: 156,
    Nem: 'Nő',
    Kor: 94,
    Alapbetegségek:
      'magas vérnyomás, cukorbetegség, érszűkület, szívritmuszavar, pajzsmirigy elégtelenség',
  },
  {
    Sorszám: 155,
    Nem: 'Férfi',
    Kor: 84,
    Alapbetegségek: 'magas vérnyomás, érszűkület',
  },
  {
    Sorszám: 154,
    Nem: 'Férfi',
    Kor: 76,
    Alapbetegségek:
      'magas vérnyomás, szívelégtelenség, verőérbetegség, végstádiumú vesebetegség, krónikus obstruktív tüdőbetegség',
  },
  {
    Sorszám: 153,
    Nem: 'Férfi',
    Kor: 91,
    Alapbetegségek:
      'magas vérnyomás, generalizált agyi, szív-és érrendszeri érelmeszesedés',
  },
  {
    Sorszám: 152,
    Nem: 'Férfi',
    Kor: 84,
    Alapbetegségek: 'magas vérnyomás,vastagbélrák, krónikus veseelégtelenség',
  },
  {
    Sorszám: 151,
    Nem: 'Férfi',
    Kor: 78,
    Alapbetegségek: 'magas vérnyomás',
  },
  {
    Sorszám: 150,
    Nem: 'Férfi',
    Kor: 71,
    Alapbetegségek: 'Parkinsor-kór, agyérelmeszesedés',
  },
  {
    Sorszám: 149,
    Nem: 'Nő',
    Kor: 93,
    Alapbetegségek:
      'magas vérnyomás, koszorúér-betegség, agyérelmeszedés, hólyagtumor',
  },
  {
    Sorszám: 148,
    Nem: 'Férfi',
    Kor: 73,
    Alapbetegségek:
      'magas vérnyomás,idült szívizom elégtelenség,krónikus obstruktív tüdőbetegség, tüdőgyulladás, tüdőtágulat, stroke következményei, érszűkület',
  },
  {
    Sorszám: 147,
    Nem: 'Nő',
    Kor: 76,
    Alapbetegségek:
      'magas vérnyomás, májzsugor, májeredetű agyvelő bántalom, epeműtét utáni állapot',
  },
  {
    Sorszám: 146,
    Nem: 'Nő',
    Kor: 67,
    Alapbetegségek:
      'szövődményes diabetes mellitus (cukorbetegség), maior amputáció, agyi keringési zavar, magas vérnyomás,veseelégtelenség',
  },
  {
    Sorszám: 145,
    Nem: 'Férfi',
    Kor: 83,
    Alapbetegségek:
      'krónikus veseelégtelenség, magas vérnyomás, légzési elégtelenség, agyérelmeszesedés, encephalopathia (agykárosodás)',
  },
  {
    Sorszám: 144,
    Nem: 'Nő',
    Kor: 69,
    Alapbetegségek:
      'Parkinson-kór, PEG táplálás, cachexia, magasvérnyomás, érelmeszesedés',
  },
  {
    Sorszám: 143,
    Nem: 'Férfi',
    Kor: 81,
    Alapbetegségek: 'Alzheimer-kór, organikus hangulatzavar, inkontinencia',
  },
  {
    Sorszám: 142,
    Nem: 'Férfi',
    Kor: 53,
    Alapbetegségek: 'adat feltöltés alatt',
  },
  {
    Sorszám: 141,
    Nem: 'Férfi',
    Kor: 82,
    Alapbetegségek: 'magas vérnyomás, stroke, dementia, pajzsmirigy túlműködés',
  },
  {
    Sorszám: 140,
    Nem: 'Nő',
    Kor: 65,
    Alapbetegségek:
      'magas vérnyomás,idült légzőszervi megbetegedés, tüdőgyulladás',
  },
  {
    Sorszám: 139,
    Nem: 'Férfi',
    Kor: 82,
    Alapbetegségek:
      'cukorbetegség, magas vérnyomás, érelmeszesedés, májelégtelenség,',
  },
  {
    Sorszám: 138,
    Nem: 'Nő',
    Kor: 78,
    Alapbetegségek:
      'idült obstruktív tüdőbetegség, bakteriális tüdőgyulladás, magas vérnyomás',
  },
  {
    Sorszám: 137,
    Nem: 'Nő',
    Kor: 90,
    Alapbetegségek:
      'szívelégtelenség, pitvarfibrilláció, leukaemia, veseelégtelenség, magas vérnyomás, pajzsmirigy alulműködés',
  },
  {
    Sorszám: 136,
    Nem: 'Nő',
    Kor: 80,
    Alapbetegségek: 'térd arthrosis, kompressziós csigolyatörés',
  },
  {
    Sorszám: 135,
    Nem: 'Férfi',
    Kor: 81,
    Alapbetegségek:
      'magas vérnyomás, veseelégtelenség, vesetranszplantáció, myelodysplasia, pitvarfibrilláció, vérszegénység',
  },
  {
    Sorszám: 134,
    Nem: 'Férfi',
    Kor: 68,
    Alapbetegségek: 'szív- és érrendszeri betegség, daganatos betegség',
  },
  {
    Sorszám: 133,
    Nem: 'Nő',
    Kor: 64,
    Alapbetegségek: 'magas vérnyomás, krónikus veseelégtelenség',
  },
  {
    Sorszám: 132,
    Nem: 'Férfi',
    Kor: 67,
    Alapbetegségek: 'stroke',
  },
  {
    Sorszám: 131,
    Nem: 'Férfi',
    Kor: 81,
    Alapbetegségek: 'Insuff.circ. Hydrothorax l.u.St.p. AMI',
  },
  {
    Sorszám: 130,
    Nem: 'Nő',
    Kor: 86,
    Alapbetegségek: 'krónikus veseelégtelenség, szívritmus zavar',
  },
  {
    Sorszám: 129,
    Nem: 'Férfi',
    Kor: 89,
    Alapbetegségek: 'szív- és érrendszeri betegség',
  },
  {
    Sorszám: 128,
    Nem: 'Férfi',
    Kor: 65,
    Alapbetegségek: 'cukorbetegség',
  },
  {
    Sorszám: 127,
    Nem: 'Férfi',
    Kor: 81,
    Alapbetegségek: 'magas vérnyomás, érelmeszesedés',
  },
  {
    Sorszám: 126,
    Nem: 'Nő',
    Kor: 78,
    Alapbetegségek: 'magas vérnyomás, szívbetegség, mélyvénás trombózis',
  },
  {
    Sorszám: 125,
    Nem: 'Nő',
    Kor: 81,
    Alapbetegségek: 'veseelégtelenség, cukorbetegség, szívelégtelenség',
  },
  {
    Sorszám: 124,
    Nem: 'Férfi',
    Kor: 76,
    Alapbetegségek: 'adat feltöltés alatt',
  },
  {
    Sorszám: 123,
    Nem: 'Nő',
    Kor: 88,
    Alapbetegségek: 'magas vérnyomás, stroke',
  },
  {
    Sorszám: 122,
    Nem: 'Nő',
    Kor: 75,
    Alapbetegségek: 'epilepszia, pszichiátriai kezelés, struma',
  },
  {
    Sorszám: 121,
    Nem: 'Férfi',
    Kor: 73,
    Alapbetegségek: 'magas vérnyomás, cukorbetegség',
  },
  {
    Sorszám: 120,
    Nem: 'Férfi',
    Kor: 96,
    Alapbetegségek: 'érszűkület, vese elégtelenség',
  },
  {
    Sorszám: 119,
    Nem: 'Férfi',
    Kor: 78,
    Alapbetegségek: 'szívelégtelenség, tumor, érszűkület',
  },
  {
    Sorszám: 118,
    Nem: 'Nő',
    Kor: 88,
    Alapbetegségek: 'szívizomelégtelenség, vese problémák',
  },
  {
    Sorszám: 117,
    Nem: 'Nő',
    Kor: 65,
    Alapbetegségek: 'cukorbetegség',
  },
  {
    Sorszám: 116,
    Nem: 'Nő',
    Kor: 80,
    Alapbetegségek:
      'stroke, ISZB, COPD, rheumatoid arthritis, hepatitis B fertőzés',
  },
  {
    Sorszám: 115,
    Nem: 'Nő',
    Kor: 97,
    Alapbetegségek: 'tartós légcsőkanül, magas vérnyomás, pitvarfibrilláció',
  },
  {
    Sorszám: 114,
    Nem: 'Férfi',
    Kor: 78,
    Alapbetegségek:
      'cukorbetegség, szívelégtelenség, magas vérnyomás, pacemaker, COPD',
  },
  {
    Sorszám: 113,
    Nem: 'Férfi',
    Kor: 89,
    Alapbetegségek:
      'magas vérnyomás, szívelégtelenség, krónikus veseelégtelenség',
  },
  {
    Sorszám: 112,
    Nem: 'Férfi',
    Kor: 89,
    Alapbetegségek: 'magas vérnyomás, általános leépülés, érelmeszesedés',
  },
  {
    Sorszám: 111,
    Nem: 'Férfi',
    Kor: 63,
    Alapbetegségek: 'veseelégtelenség',
  },
  {
    Sorszám: 110,
    Nem: 'Nő',
    Kor: 85,
    Alapbetegségek: 'magas vérnyomás, anyagcsere betegség',
  },
  {
    Sorszám: 109,
    Nem: 'Nő',
    Kor: 75,
    Alapbetegségek: 'adat feltöltés alatt',
  },
  {
    Sorszám: 108,
    Nem: 'Nő',
    Kor: 89,
    Alapbetegségek:
      'magas vérnyomás, pajzsmirigy túlműködés, hasnyálmirigy gyulladás, daganatos megbetegedés',
  },
  {
    Sorszám: 107,
    Nem: 'Nő',
    Kor: 66,
    Alapbetegségek: 'magas vérnyomás, érelmeszesedés',
  },
  {
    Sorszám: 106,
    Nem: 'Férfi',
    Kor: 46,
    Alapbetegségek:
      'krónikus veseelégtelenség, szívelégtelenség, pitvarfibrilláció, pajzsmirigy betegség',
  },
  {
    Sorszám: 105,
    Nem: 'Nő',
    Kor: 75,
    Alapbetegségek:
      'cukorbetegség, magas vérnyomás, idült obstruktív tüdőbetegség',
  },
  {
    Sorszám: 104,
    Nem: 'Nő',
    Kor: 83,
    Alapbetegségek: 'magas vérnyomás, szív-és érrendszeri betegség, dementia',
  },
  {
    Sorszám: 103,
    Nem: 'Férfi',
    Kor: 76,
    Alapbetegségek: 'adat feltöltés alatt',
  },
  {
    Sorszám: 102,
    Nem: 'Nő',
    Kor: 92,
    Alapbetegségek:
      'magas vérnyomás, szívritmus zavar, érelmeszesedés, krónikus veseelégtelenség',
  },
  {
    Sorszám: 101,
    Nem: 'Nő',
    Kor: 80,
    Alapbetegségek: 'tüdő fibrózis, vérszegénység, epekövesség',
  },
  {
    Sorszám: 100,
    Nem: 'Férfi',
    Kor: 66,
    Alapbetegségek: 'krónikus veseelégtelenség, daganatos betegség',
  },
  {
    Sorszám: 99,
    Nem: 'Férfi',
    Kor: 92,
    Alapbetegségek:
      'krónikus obstuktív tüdőbetegség, magasvérnyomás, anyagcsere rendellenesség',
  },
  {
    Sorszám: 98,
    Nem: 'Férfi',
    Kor: 78,
    Alapbetegségek: 'szívritmuszavar, magas vérnyomás, stroke',
  },
  {
    Sorszám: 97,
    Nem: 'Férfi',
    Kor: 86,
    Alapbetegségek: 'daganatos betegség, szív- és érrendszeri betegség',
  },
  {
    Sorszám: 96,
    Nem: 'Nő',
    Kor: 90,
    Alapbetegségek:
      'magas vérnyomás, krónikus obstruktív tüdőbetegség, kiterjedt érbetegség',
  },
  {
    Sorszám: 95,
    Nem: 'Nő',
    Kor: 78,
    Alapbetegségek:
      'szívbetegség, magasvérnyomás, csont-izomrendszer és kötőszövet betegsége',
  },
  {
    Sorszám: 94,
    Nem: 'Férfi',
    Kor: 70,
    Alapbetegségek:
      'tüdőrák, szívritmus zavar, iszkémiás szívbetegség, krónikus obstruktív tüdőbetegség, magas vérnyomás',
  },
  {
    Sorszám: 93,
    Nem: 'Nő',
    Kor: 84,
    Alapbetegségek: 'magas vérnyomás, anyagcsere betegség',
  },
  {
    Sorszám: 92,
    Nem: 'Férfi',
    Kor: 85,
    Alapbetegségek: 'daganatos betegség miatt kialakult veseelégtelenség',
  },
  {
    Sorszám: 91,
    Nem: 'Nő',
    Kor: 78,
    Alapbetegségek: 'magas vérnyomás, izületi gyulladás',
  },
  {
    Sorszám: 90,
    Nem: 'Férfi',
    Kor: 77,
    Alapbetegségek: 'Crohn betegség',
  },
  {
    Sorszám: 89,
    Nem: 'Férfi',
    Kor: 89,
    Alapbetegségek:
      'szívritmuszavar, pajzsmirigy alulműködés, magas vérnyomás, krónikus obstruktív tüdőbetegség',
  },
  {
    Sorszám: 88,
    Nem: 'Férfi',
    Kor: 93,
    Alapbetegségek:
      'szívritmuszavar, pajzsmirigy alulműködés, magas vérnyomás, krónikus obstruktív tüdőbetegség',
  },
  {
    Sorszám: 87,
    Nem: 'Nő',
    Kor: 89,
    Alapbetegségek: 'dementia, combnyaktörés utáni állapot',
  },
  {
    Sorszám: 86,
    Nem: 'Férfi',
    Kor: 77,
    Alapbetegségek:
      'magas vérnyomás, krónikus obstruktív tüdőbetegség, anyagcsere betegség',
  },
  {
    Sorszám: 85,
    Nem: 'Férfi',
    Kor: 59,
    Alapbetegségek: 'adatok feltöltés alatt',
  },
  {
    Sorszám: 84,
    Nem: 'Nő',
    Kor: 90,
    Alapbetegségek: 'légzési elégtelenség, tüdőgyulladás, verőér elmeszesedés',
  },
  {
    Sorszám: 83,
    Nem: 'Nő',
    Kor: 81,
    Alapbetegségek:
      'légzési elégtelenség, tüdőgyulladás, szív- és veseelégtelenség',
  },
  {
    Sorszám: 82,
    Nem: 'Férfi',
    Kor: 84,
    Alapbetegségek: 'daganatos megbetegedés, szívelégtelenség',
  },
  {
    Sorszám: 81,
    Nem: 'Férfi',
    Kor: 62,
    Alapbetegségek: 'HT, súlyos depresszió',
  },
  {
    Sorszám: 80,
    Nem: 'Nő',
    Kor: 91,
    Alapbetegségek: 'magas vérnyomás, daganatos megbetegedés',
  },
  {
    Sorszám: 79,
    Nem: 'Férfi',
    Kor: 85,
    Alapbetegségek:
      'szívelégtelenség, beszűkült vesefunkció, daganatos megbetegedés',
  },
  {
    Sorszám: 78,
    Nem: 'Férfi',
    Kor: 60,
    Alapbetegségek:
      'krónikus veseelégtelenség, cukorbetegség, magas vérnyomás, szívizom elégtelenség, krónikus keringési elégtelenség',
  },
  {
    Sorszám: 77,
    Nem: 'Nő',
    Kor: 74,
    Alapbetegségek: 'magas vérnyomás, szívbetegség, immun betegség',
  },
  {
    Sorszám: 76,
    Nem: 'Férfi',
    Kor: 85,
    Alapbetegségek: 'magas vérnyomás, emésztőrendszeri betegség',
  },
  {
    Sorszám: 75,
    Nem: 'Férfi',
    Kor: 76,
    Alapbetegségek:
      'krónikus májbetegség, daganatos betegség, anyagcsere betegség',
  },
  {
    Sorszám: 74,
    Nem: 'Nő',
    Kor: 73,
    Alapbetegségek: 'anyagcsere betegség, érrendszeri betegség',
  },
  {
    Sorszám: 73,
    Nem: 'Férfi',
    Kor: 58,
    Alapbetegségek: 'magas vérnyomás, daganatos betegség',
  },
  {
    Sorszám: 72,
    Nem: 'Nő',
    Kor: 89,
    Alapbetegségek: 'szívelégtelenség, krónikus veseelégtelenség',
  },
  {
    Sorszám: 71,
    Nem: 'Férfi',
    Kor: 65,
    Alapbetegségek:
      'magas vérnyomás, agyi érbetegség, anyagcsere rendellenesség, krónikus veseelégtelenség',
  },
  {
    Sorszám: 70,
    Nem: 'Férfi',
    Kor: 64,
    Alapbetegségek: 'krónikus obstruktív tüdőbetegség, magas vérnyomás',
  },
  {
    Sorszám: 69,
    Nem: 'Férfi',
    Kor: 85,
    Alapbetegségek: 'szív- és érrendszeri betegség, magas vérnyomás',
  },
  {
    Sorszám: 68,
    Nem: 'Nő',
    Kor: 66,
    Alapbetegségek: 'szív és érrendszeri betegség',
  },
  {
    Sorszám: 67,
    Nem: 'Férfi',
    Kor: 78,
    Alapbetegségek:
      'krónikus obstruktív tüdőbetegség, szív- és érrendszeri betegség',
  },
  {
    Sorszám: 66,
    Nem: 'Nő',
    Kor: 71,
    Alapbetegségek: 'krónikus vesebetegség',
  },
  {
    Sorszám: 65,
    Nem: 'Férfi',
    Kor: 89,
    Alapbetegségek:
      'daganatos betegség, magas vérnyomás, krónikus veseelégtelenség',
  },
  {
    Sorszám: 64,
    Nem: 'Nő',
    Kor: 86,
    Alapbetegségek: 'magas vérnyomás, anyagcsere rendellenesség',
  },
  {
    Sorszám: 63,
    Nem: 'Nő',
    Kor: 93,
    Alapbetegségek: 'szív és érrendszeri betegség',
  },
  {
    Sorszám: 62,
    Nem: 'Nő',
    Kor: 77,
    Alapbetegségek:
      'magas vérnyomás, krónikus veseelégtelenség, szív és érrendszeri betegség',
  },
  {
    Sorszám: 61,
    Nem: 'Nő',
    Kor: 48,
    Alapbetegségek:
      'krónikus veseelégtelenség, anyagcsere betegség, magas vérnyomás',
  },
  {
    Sorszám: 60,
    Nem: 'Nő',
    Kor: 76,
    Alapbetegségek: 'adatok feltöltés alatt',
  },
  {
    Sorszám: 59,
    Nem: 'Férfi',
    Kor: 67,
    Alapbetegségek: 'krónikus obstruktív tüdőbetegség',
  },
  {
    Sorszám: 58,
    Nem: 'Nő',
    Kor: 82,
    Alapbetegségek: 'adatok feltöltés alatt',
  },
  {
    Sorszám: 57,
    Nem: 'Férfi',
    Kor: 89,
    Alapbetegségek: 'magasvérnyomás, agyi érbetegség',
  },
  {
    Sorszám: 56,
    Nem: 'Férfi',
    Kor: 73,
    Alapbetegségek: 'magasvérnyomás, anyagcsere betegség',
  },
  {
    Sorszám: 55,
    Nem: 'Nő',
    Kor: 67,
    Alapbetegségek:
      'magasvérnyomás, krónikus májbetegség, krónikus veseelégtelenség',
  },
  {
    Sorszám: 54,
    Nem: 'Férfi',
    Kor: 79,
    Alapbetegségek: 'idült reumás szívbetegség',
  },
  {
    Sorszám: 53,
    Nem: 'Férfi',
    Kor: 49,
    Alapbetegségek: 'magas vérnyomás, anyagcsere betegség',
  },
  {
    Sorszám: 52,
    Nem: 'Férfi',
    Kor: 71,
    Alapbetegségek:
      'krónikus veseelégtelenség, anyagcsere betegség, magasvérnyomás',
  },
  {
    Sorszám: 51,
    Nem: 'Nő',
    Kor: 78,
    Alapbetegségek:
      'szív és érrendszeri megbetegedés, krónikus veseelégtelenség',
  },
  {
    Sorszám: 50,
    Nem: 'Férfi',
    Kor: 67,
    Alapbetegségek: 'anyagcsere betegség',
  },
  {
    Sorszám: 49,
    Nem: 'Nő',
    Kor: 79,
    Alapbetegségek: 'magas vérnyomás, cukorbetegség',
  },
  {
    Sorszám: 48,
    Nem: 'Férfi',
    Kor: 74,
    Alapbetegségek: 'magas vérnyomás betegség, szívbetegség',
  },
  {
    Sorszám: 47,
    Nem: 'Férfi',
    Kor: 92,
    Alapbetegségek:
      'anyagcsere betegség, krónikus veseelégtelenség, daganatos betegség, szív- és érrendszeri betegség',
  },
  {
    Sorszám: 46,
    Nem: 'Férfi',
    Kor: 84,
    Alapbetegségek: 'magas vérnyomás, traumás fejsérülés',
  },
  {
    Sorszám: 45,
    Nem: 'Férfi',
    Kor: 82,
    Alapbetegségek: 'magas vérnyomás, combnyaktörés',
  },
  {
    Sorszám: 44,
    Nem: 'Nő',
    Kor: 77,
    Alapbetegségek:
      'magas vérnyomás, szív- és érrendszeri betegség, nyirokrendszeri betegség, autoimmun betegség',
  },
  {
    Sorszám: 43,
    Nem: 'Férfi',
    Kor: 65,
    Alapbetegségek: 'krónikus obstuktív tüdőbetegség',
  },
  {
    Sorszám: 42,
    Nem: 'Férfi',
    Kor: 72,
    Alapbetegségek: 'krónikus obstruktív tüdőbetegség, érelmeszesedés',
  },
  {
    Sorszám: 41,
    Nem: 'Férfi',
    Kor: 84,
    Alapbetegségek:
      'magas vérnyomás, krónikus tüdőbetegség, krónikus veseelégtelenség',
  },
  {
    Sorszám: 40,
    Nem: 'Nő',
    Kor: 67,
    Alapbetegségek: 'daganatos betegség, sclerosis multiplex, magas vérnyomás',
  },
  {
    Sorszám: 39,
    Nem: 'Nő',
    Kor: 61,
    Alapbetegségek:
      'krónikus veseelégtelenség, anyagcsere és daganatos betegség',
  },
  {
    Sorszám: 38,
    Nem: 'Férfi',
    Kor: 78,
    Alapbetegségek: 'magas vérnyomás, krónikus légzőszervi betegség',
  },
  {
    Sorszám: 37,
    Nem: 'Férfi',
    Kor: 73,
    Alapbetegségek: 'szív- és érrendszeri betegség',
  },
  {
    Sorszám: 36,
    Nem: 'Nő',
    Kor: 94,
    Alapbetegségek:
      'magas vérnyomás, szív- és érrendszeri betegség, krónikus veseelégtelenség',
  },
  {
    Sorszám: 35,
    Nem: 'Férfi',
    Kor: 61,
    Alapbetegségek:
      'daganatos betegség, veleszületett genetikai rendellenesség, idegrendszeri betegség',
  },
  {
    Sorszám: 34,
    Nem: 'Férfi',
    Kor: 86,
    Alapbetegségek: 'csontrendszeri elváltozás',
  },
  {
    Sorszám: 33,
    Nem: 'Férfi',
    Kor: 80,
    Alapbetegségek: 'daganatos betegség',
  },
  {
    Sorszám: 32,
    Nem: 'Férfi',
    Kor: 85,
    Alapbetegségek: 'szív- és érrendszeri betegség',
  },
  {
    Sorszám: 31,
    Nem: 'Férfi',
    Kor: 78,
    Alapbetegségek: 'magas vérnyomás, daganatos betegség, anyagcsere betegség',
  },
  {
    Sorszám: 30,
    Nem: 'Nő',
    Kor: 85,
    Alapbetegségek: 'magas vérnyomás, anyagcsere betegség',
  },
  {
    Sorszám: 29,
    Nem: 'Férfi',
    Kor: 84,
    Alapbetegségek: 'daganatos betegség, érrendszeri betegség',
  },
  {
    Sorszám: 28,
    Nem: 'Nő',
    Kor: 77,
    Alapbetegségek:
      'magasvérnyomás betegség, szív- és érrendszeri betegség, krónikus anyagcsere betegség',
  },
  {
    Sorszám: 27,
    Nem: 'Nő',
    Kor: 54,
    Alapbetegségek:
      'krónikus légzőszervi betegség, szív- és érrendszeri betegség',
  },
  {
    Sorszám: 26,
    Nem: 'Férfi',
    Kor: 80,
    Alapbetegségek: 'magas vérnyomás, szívelégtelenség, cukorbetegség',
  },
  {
    Sorszám: 25,
    Nem: 'Nő',
    Kor: 86,
    Alapbetegségek: 'veseelégtelenség, magas vérnyomás',
  },
  {
    Sorszám: 24,
    Nem: 'Férfi',
    Kor: 79,
    Alapbetegségek:
      'magas vérnyomás, COPD krónikus tüdőbetegség, érszűkület, veseelégtelenség, szív -és érrendszeri megbetegedés',
  },
  {
    Sorszám: 23,
    Nem: 'Nő',
    Kor: 81,
    Alapbetegségek: 'magas vérnyomás, agyi infarktus',
  },
  {
    Sorszám: 22,
    Nem: 'Férfi',
    Kor: 89,
    Alapbetegségek: 'post TBC, mellhártya összenövés, prosztata-betegség',
  },
  {
    Sorszám: 21,
    Nem: 'Férfi',
    Kor: 70,
    Alapbetegségek:
      'Ischaemiás szívbetegség ( koszorúér-betegség), anyagcsere-betegség',
  },
  {
    Sorszám: 20,
    Nem: 'Férfi',
    Kor: 91,
    Alapbetegségek:
      'szív- és érrendszeri megbetegedés, magas vérnyomás, idült reumás szívbetegség, agyi érbetegség',
  },
  {
    Sorszám: 19,
    Nem: 'Férfi',
    Kor: 66,
    Alapbetegségek:
      'szív- és érrendszeri megbetegedés, idült reumás szívbetegség, degenaratív („kopásos”) gerincbetegség',
  },
  {
    Sorszám: 18,
    Nem: 'Nő',
    Kor: 67,
    Alapbetegségek: 'ISZB, magas vérnyomás',
  },
  {
    Sorszám: 17,
    Nem: 'Nő',
    Kor: 86,
    Alapbetegségek: 'magas vérnyomás',
  },
  {
    Sorszám: 16,
    Nem: 'Nő',
    Kor: 59,
    Alapbetegségek:
      'Vesetranszplantált, cukorbeteg, COPD, ISZB, magas vérnyomás',
  },
  {
    Sorszám: 15,
    Nem: 'Férfi',
    Kor: 94,
    Alapbetegségek: 'COPD',
  },
  {
    Sorszám: 14,
    Nem: 'Férfi',
    Kor: 92,
    Alapbetegségek: 'Allergiás asthma, stroke, pacemaker',
  },
  {
    Sorszám: 13,
    Nem: 'Nő',
    Kor: 86,
    Alapbetegségek: 'TBC,LC,PE,HT,DM,diab. polyneuropathia,MVT,',
  },
  {
    Sorszám: 12,
    Nem: 'Férfi',
    Kor: 73,
    Alapbetegségek:
      'ISZB, encephalopathia, hepatopathia, érszűkület, hypothyreosis',
  },
  {
    Sorszám: 11,
    Nem: 'Férfi',
    Kor: 80,
    Alapbetegségek: 'nincs adat',
  },
  {
    Sorszám: 10,
    Nem: 'Férfi',
    Kor: 75,
    Alapbetegségek: 'magas vérnyomás',
  },
  {
    Sorszám: 9,
    Nem: 'Nő',
    Kor: 90,
    Alapbetegségek: 'aorta stenosis, ISzB, magas vérnyomás, pitvarfibrilláció',
  },
  {
    Sorszám: 8,
    Nem: 'Férfi',
    Kor: 53,
    Alapbetegségek: 'szív és érrendszeri',
  },
  {
    Sorszám: 7,
    Nem: 'Férfi',
    Kor: 38,
    Alapbetegségek: 'krónikus pancreatitis, alkoholos májkárosodás',
  },
  {
    Sorszám: 6,
    Nem: 'Nő',
    Kor: 41,
    Alapbetegségek: 'magas vérnyomás',
  },
  {
    Sorszám: 5,
    Nem: 'Férfi',
    Kor: 68,
    Alapbetegségek: 'szív és érrendszeri',
  },
  {
    Sorszám: 4,
    Nem: 'Férfi',
    Kor: 79,
    Alapbetegségek: 'szív és érrendszeri',
  },
  {
    Sorszám: 3,
    Nem: 'Férfi',
    Kor: 74,
    Alapbetegségek: 'szív és érrendszeri',
  },
  {
    Sorszám: 2,
    Nem: 'Nő',
    Kor: 65,
    Alapbetegségek: 'rosszindulatú daganat',
  },
  {
    Sorszám: 1,
    Nem: 'Nő',
    Kor: 76,
    Alapbetegségek: 'szív és érrendszeri',
  },
];