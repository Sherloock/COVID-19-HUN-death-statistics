class Deaths {
  static dataCheck() {
    console.log('DATA CHECK');

    let data = Deaths.data.sort(Deaths.compareSorsz);
    let count = Deaths.getCount();

    for (let i = 0; i < data.length; i++) {
      const row = data[i];
      if (row['Sorszám'] !== i + 1) {
        throw new Error(
          'Something worng with your dataset after "Sorszám: ' +
            data[i - 1]['Sorszám'] +
            '"\n\nOK ROW:\n' +
            JSON.stringify(data[i - 1]) +
            '\n\nFAILED ROW\n' +
            JSON.stringify(data[i]) +
            '\n'
        );
      }
    }
    console.log('DATASET OK');
    console.log({ deathCount: count, dataset: data });
  }

  static getCount() {
    return Deaths.data.length;
  }

  static compareSorsz(a, b) {
    return a.Sorszám - b.Sorszám;
  }

  static data = [
    {
      Sorszám: 573,
      Nem: 'Férfi',
      Kor: 100,
      Alapbetegségek: 'szív és érrendszeri, daganatos betegségek',
    },
    {
      Sorszám: 572,
      Nem: 'Férfi',
      Kor: 94,
      Alapbetegségek:
        'szívelégtelenség, magas vérnyomás, vérképző rendszeri zavarok',
    },
    {
      Sorszám: 571,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'magas vérnyomás, inzulinos cukorbetegség, krónikus vesebetegség',
    },
    {
      Sorszám: 570,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek: 'szívelégtelenség, magas vérnyomás',
    },
    {
      Sorszám: 569,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'alkoholizmus, béldaganat',
    },
    {
      Sorszám: 568,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek: 'magas vérnyomás, érelmeszesedés, nyombélfekély',
    },
    {
      Sorszám: 567,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek:
        'magas-vérnyomás, cukorbetegség, krónikus obstruktív tüdőbetegség, emlőrák, iszkémiás szívbetegség, szívelégtelenség',
    },
    {
      Sorszám: 566,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek:
        'szívelégtelenség, magas vérnyomás, pitvari fibrilláció, anémia, gyomorfekély heveny vérzéssel',
    },
    {
      Sorszám: 565,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek:
        'krónikus tüdőbetegség, bélelzáródás és légzési elégtelenség',
    },
    {
      Sorszám: 564,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek:
        'magas vérnyomás, demencia, pitvar fibrilláció, általános érelmeszesedés',
    },
    {
      Sorszám: 563,
      Nem: 'Nő',
      Kor: 101,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, COPD tüdőbetegség, neurológiai betegségek, veseelégtelenség, csontritkulás',
    },
    {
      Sorszám: 562,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek:
        'magas vérnyomás, krónikus obstruktív tüdőbetegség, pitvarfibrilláció',
    },
    {
      Sorszám: 561,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, szívelégtelenség',
    },
    {
      Sorszám: 560,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'Alzheimer-kór, magas vérnyomás, vastagbéldaganat',
    },
    {
      Sorszám: 559,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'stroke, magas vérnyomás, cukorbetegség, iszkémiás szívbetegség, érszűkület',
    },
    {
      Sorszám: 558,
      Nem: 'Férfi',
      Kor: 43,
      Alapbetegségek: 'nyirokcsomórák, agydaganat, krónikus veseelégtelenség',
    },
    {
      Sorszám: 557,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek:
        'magas vérnyomás, depresszió, pitvarfibrilláció, demencia',
    },
    {
      Sorszám: 556,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek: 'cukorbetegség, májkárosodás',
    },
    {
      Sorszám: 555,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek:
        'prosztata rosszindulatú daganata, anémia, pajzsmirigy krónikusgyulladása (HT)',
    },
    {
      Sorszám: 554,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'vastagbél daganat, 1-es típusú cukorbetegség, szívelégtelenség, pajzsmirigy krónikus gyulladás (HT), krónikus gyomor gyulladás, septicaemia',
    },
    {
      Sorszám: 553,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'vírusos tüdőgyulladás, légzési elégtelenség, demencia',
    },
    {
      Sorszám: 552,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'magas vérnyomás, demencia, pitvarfibrilláció, bal oldali combnyaktörés',
    },
    {
      Sorszám: 551,
      Nem: 'Férfi',
      Kor: 37,
      Alapbetegségek: 'nem ismert',
    },
    {
      Sorszám: 550,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség epilepszia,krónikus obstruktív tüdőbetegség , pitvari fibrillatio és flutter',
    },
    {
      Sorszám: 549,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, 2-es típusú cukorbetegség, demencia, akut koronária szindróma ACS',
    },
    {
      Sorszám: 548,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek:
        'magas vérnyomás, demencia, iszkémiás szívbetegség, cukorbetegség',
    },
    {
      Sorszám: 547,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek: 'demencia, magas vérnyomás',
    },
    {
      Sorszám: 546,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'szívbetegség, érszűkület, cukorbetegség',
    },
    {
      Sorszám: 545,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'Pajzsmirigy alulműködés, magas vérnyomás, időskori cukorbetegség, chronicus cholecystitis, GERD, krónikus veseelégtelenség, anaemia, iszkémiás szívbetegség, nem szignifikáns aortastenosis,  pitvarfibrilláció  és cardialis decompensatio',
    },
    {
      Sorszám: 544,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek:
        'magas vérnyomás, aorto-femoralis bypass, aethylismus, máj- és veseelégtelenség',
    },
    {
      Sorszám: 543,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'súlyos Alzheimer demencia, magas vérnyomás',
    },
    {
      Sorszám: 542,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek: 'magas vérnyomás, pajzsmirigy-alulműködés, petefészekrák',
    },
    {
      Sorszám: 541,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'szívritmuszavar, magas vérnyomás, elhízás, demencia',
    },
    {
      Sorszám: 540,
      Nem: 'Nő',
      Kor: 47,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás, krónikus vesegyulladás',
    },
    {
      Sorszám: 539,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek:
        'magas vérnyomás, szívbetegség, szívelégtelenség, vesekárosodás',
    },
    {
      Sorszám: 538,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek:
        'magas vérnyomás, krónikus veseelégtelenség, kitágulásos szívizom-elfajulás, szívbetegség',
    },
    {
      Sorszám: 537,
      Nem: 'Férfi',
      Kor: 59,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás, perifériás érbetegség',
    },
    {
      Sorszám: 536,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek:
        'magas vérnyomás, Parkinson- kór, szívritmuszavar, TBC, bal alsó végtag amputáció',
    },
    {
      Sorszám: 535,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek:
        'magas vérnyomás, tüdőtumor, mellékvese és pancreas áttétek, multiplex agyi áttétek',
    },
    {
      Sorszám: 534,
      Nem: 'Nő',
      Kor: 52,
      Alapbetegségek:
        'Fábry-szindróma, asztma, magas vérnyomás, krónikus etilizmus, COPD tüdőbetegség, krónikus anémia',
    },
    {
      Sorszám: 533,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'hypertonia, DM, Chron betegség',
    },
    {
      Sorszám: 532,
      Nem: 'Férfi',
      Kor: 91,
      Alapbetegségek: 'magas vérnyomás, érelmeszesedés',
    },
    {
      Sorszám: 531,
      Nem: 'Férfi',
      Kor: 70,
      Alapbetegségek: 'magas vérnyomás, koszorúér betegség, tumor',
    },
    {
      Sorszám: 530,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'acut has diagnózis',
    },
    {
      Sorszám: 529,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'magas vérnyomás, veseelégtelenség',
    },
    {
      Sorszám: 528,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek: 'tüdőgyulladás, magas vérnyomás, demencia',
    },
    {
      Sorszám: 527,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek:
        'emlő rosszindulatú daganata, magas vérnyomás, a hónalj és felső végtag nyirokcsomóinak rosszindulatú daganata, a máj másodlagos rosszindulatú daganata, decubitus fekély',
    },
    {
      Sorszám: 526,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás, szívbetegség',
    },
    {
      Sorszám: 525,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek: 'általános érelmeszesedés, magas vérnyomás, demencia',
    },
    {
      Sorszám: 524,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek: 'Stroke, veseelégtelenség, csontvelőrák',
    },
    {
      Sorszám: 523,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'COPD, miokardinális infarktus, veseelégtelenség',
    },
    {
      Sorszám: 522,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'Cukorbetegség, magas vérnyomás',
    },
    {
      Sorszám: 521,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek: 'magas vérnyomás, koponyazúzódás, szívelégtelenség',
    },
    {
      Sorszám: 520,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek: 'COPD, iszkémiás szívbetegség, szívelégtelenség',
    },
    {
      Sorszám: 519,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, pitvarfibrilláció, prosztata megnagyobbodás, subdurális és subarachnoidális vérömleny',
    },
    {
      Sorszám: 518,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek: 'magas vérnyomás, pajzsmirigy alulműködés, demencia',
    },
    {
      Sorszám: 517,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, izületi gyulladás',
    },
    {
      Sorszám: 516,
      Nem: 'Nő',
      Kor: 95,
      Alapbetegségek: 'magas vérnyomás, demencia, Alzheimer kór',
    },
    {
      Sorszám: 515,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek: 'Magas vérnyomás, pajzsmirigy alulműködés',
    },
    {
      Sorszám: 514,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek:
        'szívelégtelenség, vírusos tüdőgyulladás, légzési elégtelenség,magas vérnyomás, billentyűelégtelenség, érelmeszesedés, cukorbetegség, agysorvadás, májbetegség',
    },
    {
      Sorszám: 513,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, krónikus veseelégtelenség,cukorbetegség, B-sejtes lymphoma',
    },
    {
      Sorszám: 512,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek:
        'magas vérnyomás, szívelégtelenség,szívritmuszavar, krónikus obstruktív tüdőbetegség, korábban mélyvénás thrombosis',
    },
    {
      Sorszám: 511,
      Nem: 'Férfi',
      Kor: 37,
      Alapbetegségek: 'Little-kór',
    },
    {
      Sorszám: 510,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'iszkémiás szívbetegség, pitvarfibrillatio, korábbi stroke, vírusos tüdőgyulladás',
    },
    {
      Sorszám: 509,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, szívizom betegség',
    },
    {
      Sorszám: 508,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek:
        'veseelégtelenség, magas vérnyomás szívbetegség, cukorbetegség',
    },
    {
      Sorszám: 507,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek: 'magas vérnyomás, veseelégtelenség, szívelégtelenség',
    },
    {
      Sorszám: 506,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, jobb szívfélelégtelenség, mellüregi folyadék, pitvarremegés, heveny veseelégtelenség',
    },
    {
      Sorszám: 505,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek:
        'magas vérnyomás, Alzheimer-kór, demencia, szívbillentyű-működési zavar',
    },
    {
      Sorszám: 504,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek: 'emlőrák mellkasfali és bőr áttétekkel',
    },
    {
      Sorszám: 503,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek: 'csontritkulás, magas vérnyomás',
    },
    {
      Sorszám: 502,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'szívbetegség, pajzsmirigygyulladás',
    },
    {
      Sorszám: 501,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek: 'emlőrák, szívritmuszavar, csontvelőgyulladás',
    },
    {
      Sorszám: 500,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek:
        'magas vérnyomás, krónikus veseelégtelenség, cukorbetegség, érszűkület, szívritmuszavar',
    },
    {
      Sorszám: 499,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek:
        'magas vérnyomás, szívritmuszavar, agyérbetegség, szívkoszorú érkeringési zavar',
    },
    {
      Sorszám: 498,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'tüdőgyulladás,agyi érelmeszesedés, demencia, demenciához társuló delírium, refluxbetegség, felfekvés',
    },
    {
      Sorszám: 497,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek:
        'magas vérnyomás, veseelégtelenség, cukorbetegség, légzési-és keringési elégtelenség',
    },
    {
      Sorszám: 496,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek:
        'tüdőgyulladás, hörghurut, agyi érszűkület, iszkémiás szívbetegség, ACM területi iszkémiás stroke, agysorvadás, magas vérnyomás, mentális retardáció, idült alkoholizmus',
    },
    {
      Sorszám: 495,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'pangásos szívelégtelenség, cukorbetegség, magas vérnyomás,idült iszkémiás szívbetegség,krónikus veseelégtelenség',
    },
    {
      Sorszám: 494,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek:
        'tüdőgyulladás, idült obstruktív tüdőbetegség, krónikus szívbetegség',
    },
    {
      Sorszám: 493,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'tüdőgyulladás, iszkémiás szívbetegség, tüdőtágulat, vastagbél tumor, magas vérnyomás',
    },
    {
      Sorszám: 492,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek:
        'jobb oldali vesetumor tüdő és hasűri áttétekkel, szívelégtelenség',
    },
    {
      Sorszám: 491,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek:
        'magas vérnyomás, tüdő daganat, csontok és csontvelő rosszindulatú daganata',
    },
    {
      Sorszám: 490,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'érrendszeri és keringési rendellenesség',
    },
    {
      Sorszám: 489,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek: 'szívbetegség, vese elégtelenség, magas vérnyomás',
    },
    {
      Sorszám: 488,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek: 'szívbetegség, magas vérnyomás',
    },
    {
      Sorszám: 487,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek:
        'krónikus autoimmun betegség, tüdőgyulladás, légzési elégtelenség',
    },
    {
      Sorszám: 486,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'magas vérnyomás, szívelégtelenség, stroke',
    },
    {
      Sorszám: 485,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'magas vérnyomás, szívelégtelenség, demencia',
    },
    {
      Sorszám: 484,
      Nem: 'Nő',
      Kor: 56,
      Alapbetegségek: 'Down-szindróma, epilepszia',
    },
    {
      Sorszám: 483,
      Nem: 'Férfi',
      Kor: 57,
      Alapbetegségek: 'magas vérnyomás, stroke, krónikus veseelégtelenség',
    },
    {
      Sorszám: 482,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, pangásos szívelégtelenség',
    },
    {
      Sorszám: 481,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek:
        'az agy kóros elváltozása, agyzsugorodás, pajzsmirigy túlműködése, rekesz alatti tályog',
    },
    {
      Sorszám: 480,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'szívelégtelenség, veseelégtelenség, magas vérnyomás',
    },
    {
      Sorszám: 479,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'hörgő/ tüdő rosszindulatú daganat',
    },
    {
      Sorszám: 478,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, pitvarfibrilláció, fekélyes nyelőcsőgyulladás, krónikus gyomorgyulladás, kétoldali látásvesztés',
    },
    {
      Sorszám: 477,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'általános érelmeszesedés, magas vérnyomás, veseelégtelenség, szívelégtelenség',
    },
    {
      Sorszám: 476,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek:
        'vérszegénység, magas vérnyomás, iszkémiás szívbetegség, pitvarfibrilláció',
    },
    {
      Sorszám: 475,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, keringési elégtelenség',
    },
    {
      Sorszám: 474,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'magas vérnyomás, stroke, demencia',
    },
    {
      Sorszám: 473,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'cukorbetegség, combnyaktörés, demencia',
    },
    {
      Sorszám: 472,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'emlőtumor, májáttét',
    },
    {
      Sorszám: 471,
      Nem: 'Férfi',
      Kor: 61,
      Alapbetegségek: 'nyelőcső rák',
    },
    {
      Sorszám: 470,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek:
        'magas vérnyomás, veseelégtelenség, vastagbélrák májáttéttel',
    },
    {
      Sorszám: 469,
      Nem: 'Férfi',
      Kor: 61,
      Alapbetegségek: 'cukorbetegség',
    },
    {
      Sorszám: 468,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek:
        'tüdőgyulladás, bakteriális enteritis, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 467,
      Nem: 'Nő',
      Kor: 66,
      Alapbetegségek:
        'petefészek daganat, mellhártyagyulladás, másodlagos mellhártyadaganat',
    },
    {
      Sorszám: 466,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'veseelégtelenség, vesepótló kezelés, vérmérgezés',
    },
    {
      Sorszám: 465,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'hasnyálmirigy-daganat, érelmeszesedés, vérszegénység',
    },
    {
      Sorszám: 464,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'vészes soványság, kiszáradás, agyi vérellátási zavar',
    },
    {
      Sorszám: 463,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek:
        'magas vérnyomás, pitvarfibrilláció, stroke, mellüregi folyadék',
    },
    {
      Sorszám: 462,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek:
        'magas vérnyomás, köszvény, tüdő rosszindulatú daganata, multiplex májáttét',
    },
    {
      Sorszám: 461,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek:
        'magas vérnyomás, végbélrák, pajzsmirigy alulműködés, iszkémiás szívbetegség',
    },
    {
      Sorszám: 460,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek:
        'érszűkület, demencia, szívelégtelenség, reflux, krónikus obstruktív tüdőbetegség, combnyaktörés',
    },
    {
      Sorszám: 459,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'Alzheimer-kór, magas vérnyomás',
    },
    {
      Sorszám: 458,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'magas vérnyomás, pitvarfibrilláció, cukorbetegség',
    },
    {
      Sorszám: 457,
      Nem: 'Férfi',
      Kor: 51,
      Alapbetegségek:
        'hasnyálmirigy daganat, korábban leukémia miatt csontvelő transzplantáció',
    },
    {
      Sorszám: 456,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek: 'veseelégtelenség, demencia',
    },
    {
      Sorszám: 455,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek: 'magas vérnyomás, krónikus veseelégtelenség, demencia',
    },
    {
      Sorszám: 454,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'magas vérnyomás, pitvarfibrilláció, pajzsmirigy alulműködés',
    },
    {
      Sorszám: 453,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek:
        'krónikus vesebetegség, magas vérnyomás, 2-es típusú cukorbetegség',
    },
    {
      Sorszám: 452,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek:
        'Iszkémiás szívbetegség, demencia, pajzsmirigy alulműködés',
    },
    {
      Sorszám: 451,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 450,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'daganatos megbetegedés, cukorbetegség',
    },
    {
      Sorszám: 449,
      Nem: 'Férfi',
      Kor: 95,
      Alapbetegségek: 'stroke, demencia',
    },
    {
      Sorszám: 448,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'általános érelmeszesedés, koszorúérelmeszesedés, krónikus szívelégtelenség',
    },
    {
      Sorszám: 447,
      Nem: 'Férfi',
      Kor: 93,
      Alapbetegségek:
        'magas vérnyomás, 2-es típusú cukorbetegség, urológiai műtét',
    },
    {
      Sorszám: 446,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'vesegörcsök, cukorbetegség, magas vérnyomás, iszkémiás szívbetegség, bélgyulladás, szívizomgyulladás',
    },
    {
      Sorszám: 445,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'gyomorvérzés, anaemia, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 444,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'szívelégtelenség, többszöri szívinfarktus, COPD, Epilepszia, prosztata daganat',
    },
    {
      Sorszám: 443,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'magas vérnyomás, agyér megbetegedés, demencia',
    },
    {
      Sorszám: 442,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, agyalapi artériás vérzés',
    },
    {
      Sorszám: 441,
      Nem: 'Nő',
      Kor: 61,
      Alapbetegségek:
        'krónikus veseelégtelenség, epilepszia, dementia, agyérszűkület',
    },
    {
      Sorszám: 440,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek:
        'demencia, cukorbetegség, tüdőgyulladás, krónikus veseelégtelenség',
    },
    {
      Sorszám: 439,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek: 'tüdőgyulladás, pitvari fibrilláció',
    },
    {
      Sorszám: 438,
      Nem: 'Nő',
      Kor: 73,
      Alapbetegségek: 'magas vérnyomás, stroke, cukorbetegség',
    },
    {
      Sorszám: 437,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, krónikus veseelégtelenség, iszkémiás szívbetegség',
    },
    {
      Sorszám: 436,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek:
        'magas vérnyomás, agyi vérellátási probléma, krónikus veseelégtelenség, mélyvénás trombózis',
    },
    {
      Sorszám: 435,
      Nem: 'Férfi',
      Kor: 58,
      Alapbetegségek: 'fekélyes vastagbélgyulladás, sok szervi elégtelenség',
    },
    {
      Sorszám: 434,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek: 'magas vérnyomás, érszűkület, üszkösödés',
    },
    {
      Sorszám: 433,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek: 'demencia, poszttraumás stressz',
    },
    {
      Sorszám: 432,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek:
        'demencia, Alzheimer-kór, iszkémiás szívbetegség, pitvarfibrilláció, stroke, érelmeszesedés',
    },
    {
      Sorszám: 431,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek: 'idiopathiás tüdőfibrózis, vesebetegség, magas vérnyomás',
    },
    {
      Sorszám: 430,
      Nem: 'Férfi',
      Kor: 95,
      Alapbetegségek: 'tüdőtágulat, magas vérnyomás, krónikus arcüreggyulladás',
    },
    {
      Sorszám: 429,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek:
        'daganatos betegség, magas vérnyomás, krónikus hasnyálmirigy gyulladás, májzsugor',
    },
    {
      Sorszám: 428,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'demencia, érelmeszesedés, szívbetegség',
    },
    {
      Sorszám: 427,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'szívizomelégtelenség, érelmeszesedés, demencia',
    },
    {
      Sorszám: 426,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 425,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'szívelégtelenség, tüdőgyulladás, csontritkulás, iszkémiás szívbetegség, demencia',
    },
    {
      Sorszám: 424,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek: 'demencia',
    },
    {
      Sorszám: 423,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, csípőízületi betegség, szívelégtelenség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 422,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, szívritmuszavar, koszorúér-meszesedés, stroke utáni szindróma',
    },
    {
      Sorszám: 421,
      Nem: 'Férfi',
      Kor: 51,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, pitvarfibrilláció, krónikus veseelégtelenség, májzsugorodás, szívelégtelenség',
    },
    {
      Sorszám: 420,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'hólyagtumor, nyaki csigolya elváltozás, magas vérnyomás',
    },
    {
      Sorszám: 419,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        '2-es típusú cukorbetegség, magas vérnyomás, agyi érbetegség, szívelégtelenség',
    },
    {
      Sorszám: 418,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek: 'krónikus májbetegség, Parkinson kór',
    },
    {
      Sorszám: 417,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'iszkémiás szívbetegség, magas vérnyomás, demencia',
    },
    {
      Sorszám: 416,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek:
        'Magas vérnyomás, általános érszűkület, hólyagtumor, agyi érbetegség, alkoholizmus',
    },
    {
      Sorszám: 415,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek:
        'magas vérnyomás, Parkinson-kór, szív- és érrendszeri betegség',
    },
    {
      Sorszám: 414,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'magas vérnyomás, szívbetegség, szívritmuszavar',
    },
    {
      Sorszám: 413,
      Nem: 'Férfi',
      Kor: 70,
      Alapbetegségek: 'vesetumor, magas vérnyomás, dializált beteg',
    },
    {
      Sorszám: 412,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'daganatos betegség',
    },
    {
      Sorszám: 411,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'Alzheimer-kór',
    },
    {
      Sorszám: 410,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'pajzsmirigy alulműködés, jobb szívfél-elégtelenség, pitvarfibrilláció',
    },
    {
      Sorszám: 409,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'magas vérnyomás, demencia, szívkoszorúér betegség',
    },
    {
      Sorszám: 408,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'általános verőér elmeszesedés, pitvarfibrilláció, cukorbetegség, demencia',
    },
    {
      Sorszám: 407,
      Nem: 'Nő',
      Kor: 73,
      Alapbetegségek:
        '2-es típusú cukorbetegség, magas vérnyomás, szívritmuszavar',
    },
    {
      Sorszám: 406,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, Alzheimer-kór',
    },
    {
      Sorszám: 405,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, szívbetegség, gyomorfekély, agyi vérkeringési zavar',
    },
    {
      Sorszám: 404,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek: 'krónikus tüdőbetegség',
    },
    {
      Sorszám: 403,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'gyomorfekély',
    },
    {
      Sorszám: 402,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'combcsonttörés, felfekvés, pajzsmirigy-túlműködés, érelmeszesedés',
    },
    {
      Sorszám: 401,
      Nem: 'Nő',
      Kor: 47,
      Alapbetegségek: 'mentális retardáció, epilepszia',
    },
    {
      Sorszám: 400,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'tüdőgyulladás, jobb szívfél-elégtelenség, prosztata tumor, köszvény, érelmeszesedés',
    },
    {
      Sorszám: 399,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek:
        'magas vérnyomás, krónikus alkoholfüggőség, érelmeszesedés, szívbetegség, veseelégtelenség',
    },
    {
      Sorszám: 398,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, pacemaker beültetés, amputált combcsont',
    },
    {
      Sorszám: 397,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek: 'demencia, csípőtáji törés',
    },
    {
      Sorszám: 396,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek:
        'ízületi gyulladás, epekő, krónikus obstruktív tüdőbetegség, magas vérnyomás',
    },
    {
      Sorszám: 395,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'hörgő - tüdő rosszindulatú daganat',
    },
    {
      Sorszám: 394,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek: 'magas vérnyomás, Alzheimer-kór',
    },
    {
      Sorszám: 393,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek: 'nincs adat',
    },
    {
      Sorszám: 392,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'szívelégtelenség, veseelégtelenség, cukorbetegség',
    },
    {
      Sorszám: 391,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'magas vérnyomás, szívelégtelenség, pitvarfibrilláció',
    },
    {
      Sorszám: 390,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek: 'demencia, depresszió',
    },
    {
      Sorszám: 389,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'asztma, szívelégtelenség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 388,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek: 'prosztatarák, szívbetegség',
    },
    {
      Sorszám: 387,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek: 'pangásos szívelégtelenség, magas vérnyomás, demencia',
    },
    {
      Sorszám: 386,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'veseelégtelenség, medencetörés',
    },
    {
      Sorszám: 385,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek: 'végbélrák',
    },
    {
      Sorszám: 384,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek: 'pangásos szívelégtelenség, pitvarfibrilláció',
    },
    {
      Sorszám: 383,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek:
        'kétoldali tüdőgyulladás, kétoldali mellkasi folyadékgyülem, heveny veseelégtelenség',
    },
    {
      Sorszám: 382,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek:
        'magas vérnyomás, demencia, Alzheimer-kór, csípőizületi kopás',
    },
    {
      Sorszám: 381,
      Nem: 'Nő',
      Kor: 72,
      Alapbetegségek: 'magas vérnyomás, szívizombetegség',
    },
    {
      Sorszám: 380,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek:
        'érelmeszesedés, szívelégtelenség, iszkémiás szívbetegség. magas vérnyomás',
    },
    {
      Sorszám: 379,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek: 'szívelégtelenség, magas vérnyomás',
    },
    {
      Sorszám: 378,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'stroke',
    },
    {
      Sorszám: 377,
      Nem: 'Férfi',
      Kor: 83,
      Alapbetegségek:
        'HIV-fertőzés, HCV- fertőzés, cukorbetegség, májzsugorodás',
    },
    {
      Sorszám: 376,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'hasnyálmirigy daganat, májdaganat',
    },
    {
      Sorszám: 375,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'szívelégtelenség',
    },
    {
      Sorszám: 374,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'magas vérnyomás, demencia, pajzsmirigy-alulműködés',
    },
    {
      Sorszám: 373,
      Nem: 'Férfi',
      Kor: 58,
      Alapbetegségek:
        'magas vérnyomás, reflux, pikkelysömör, pajzsmirigy-alulműködés, szívbetegség, érelmeszesedés',
    },
    {
      Sorszám: 372,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'magas vérnyomás, pangásos szívelégtelenség, szívbetegség, szívritmuszavar',
    },
    {
      Sorszám: 371,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek: 'dementia, hallucinózis',
    },
    {
      Sorszám: 370,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek: 'áttételes bőrdaganat',
    },
    {
      Sorszám: 369,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás, veseelégtelenség',
    },
    {
      Sorszám: 368,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek: 'tüdőgyulladás, prosztatarák, magas vérnyomás',
    },
    {
      Sorszám: 367,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek:
        'érelmeszesedés, asztma, szívritmuszavar, agyi érelmeszesedés',
    },
    {
      Sorszám: 366,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek:
        'érelmeszesedés, magas vérnyomás, iszkémiás szívbetegség, fekélyes vastagbélgyulladás, Alzheimer-kór',
    },
    {
      Sorszám: 365,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek: 'stroke',
    },
    {
      Sorszám: 364,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'iszkémiás szívbetegség, pitvarfibrilláció',
    },
    {
      Sorszám: 363,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, agyi infarktus',
    },
    {
      Sorszám: 362,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek: 'magas vérnyomás, érelmeszesedés, demencia',
    },
    {
      Sorszám: 361,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás, érelmeszesedés, demencia, felfekvés',
    },
    {
      Sorszám: 360,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek: 'vérszegénység, pangásos szívelégtelenség, cukorbetegség',
    },
    {
      Sorszám: 359,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'magas vérnyomás, pangásos szívelégtelenség, krónikus gyomorgyulladás, mélyvénás trombózis',
    },
    {
      Sorszám: 358,
      Nem: 'Nő',
      Kor: 72,
      Alapbetegségek: 'magas vérnyomás, érelmeszesedés',
    },
    {
      Sorszám: 357,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek: 'Parkinson-kór',
    },
    {
      Sorszám: 356,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'stroke',
    },
    {
      Sorszám: 355,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 354,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek: 'krónikus demencia',
    },
    {
      Sorszám: 353,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek: 'érelmeszesedés',
    },
    {
      Sorszám: 352,
      Nem: 'Férfi',
      Kor: 58,
      Alapbetegségek: 'gyermekkori agyi bénulás',
    },
    {
      Sorszám: 351,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek: 'magas vérnyomás, epeútdaganat',
    },
    {
      Sorszám: 350,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'szívizom elégtelenség, krónikus veseelégtelenség, magas vérnyomás, Alzheimer-kór, dementia',
    },
    {
      Sorszám: 349,
      Nem: 'Nő',
      Kor: 95,
      Alapbetegségek:
        'veseelégtelenség, krónikus gyomorgyulladás, májbetegség, kóros soványság, vérszegénység',
    },
    {
      Sorszám: 348,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'nincs',
    },
    {
      Sorszám: 347,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, magas koleszterin, szívbetegség',
    },
    {
      Sorszám: 346,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, veseelégtelenség',
    },
    {
      Sorszám: 345,
      Nem: 'Férfi',
      Kor: 95,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, veseelégtelenség',
    },
    {
      Sorszám: 344,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'magas vérnyomás, szívbillentyű elégtelenség, szívritmuszavar, pajzsmirigybetegség',
    },
    {
      Sorszám: 343,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'krónikus veseelégtelenség, pitvarfibrilláció',
    },
    {
      Sorszám: 342,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek: 'magas vérnyomás, szívelégtelenség, pitvarfibrilláció',
    },
    {
      Sorszám: 341,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek: 'magasvérnyomás, szívritmuszavar, szívelégtelenség',
    },
    {
      Sorszám: 340,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'krónikus obstruktív tüdőbetegség, tüdőgyulladás, krónikus veseelégtelenség, nikotinmérgezés, agyi érelmeszesedés, combnyaktörés',
    },
    {
      Sorszám: 339,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, agyi érelmeszesedés, májzsugorodás',
    },
    {
      Sorszám: 338,
      Nem: 'Nő',
      Kor: 63,
      Alapbetegségek: 'krónikus tüdőbetegség, rosszindulatú tüdődaganat',
    },
    {
      Sorszám: 337,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'szívbillentyű elégtelenség',
    },
    {
      Sorszám: 336,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'Parkinson-kór, cukorbetegség, magas vérnyomás',
    },
    {
      Sorszám: 335,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek: 'COPD, tüdőrák',
    },
    {
      Sorszám: 334,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, szívbetegség, veseelégtelenség',
    },
    {
      Sorszám: 333,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, érelmeszesedés',
    },
    {
      Sorszám: 332,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'autoimmun betegség, stroke',
    },
    {
      Sorszám: 331,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek: 'autoimmun betegség, átmeneti agyi keringészavar',
    },
    {
      Sorszám: 330,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek: 'érelmeszesedés, magas koleszterin, magas húgysavszint',
    },
    {
      Sorszám: 329,
      Nem: 'Férfi',
      Kor: 33,
      Alapbetegségek: 'hasnyálmirigy- és májgyulladás',
    },
    {
      Sorszám: 328,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'szívritmus zavar, demencia',
    },
    {
      Sorszám: 327,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'demencia, mélyvénás trombózis',
    },
    {
      Sorszám: 326,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'iszkémiás szívbetegség, magas vérnyomás',
    },
    {
      Sorszám: 325,
      Nem: 'Férfi',
      Kor: 52,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 324,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'cukorbetegség, szívelégtelenség',
    },
    {
      Sorszám: 323,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek: 'érelmeszesedés, vastagbéldaganat, csontritkulás',
    },
    {
      Sorszám: 322,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, gyomortumor',
    },
    {
      Sorszám: 321,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek: 'nyaki verőér szűkület, prosztatadaganat, stroke',
    },
    {
      Sorszám: 320,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'magas vérnyomás, érszűkület',
    },
    {
      Sorszám: 319,
      Nem: 'Nő',
      Kor: 54,
      Alapbetegségek: 'májzsugor, vérszegénység',
    },
    {
      Sorszám: 318,
      Nem: 'Férfi',
      Kor: 92,
      Alapbetegségek: 'érelmeszesedés',
    },
    {
      Sorszám: 317,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, mélyvénás trombózis, vastagbéldaganat',
    },
    {
      Sorszám: 316,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'májzsugor, krónikus májgyulladás, magas vérnyomás',
    },
    {
      Sorszám: 315,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 314,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek:
        'magas vérnyomás, porckorong-sorvadás, vízfejűség, agysorvadás, érelmeszesedés',
    },
    {
      Sorszám: 313,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek:
        'prosztatarák, többszörös csontáttét, hasi nyirokcsomó áttét, krónikus veseelégtelenség, demencia, combnyaktörés',
    },
    {
      Sorszám: 312,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'magas vérnyomás, 2-es típusú cukorbetegség, végbéldaganat csontáttéttel',
    },
    {
      Sorszám: 311,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'Alzheimer-kór, idült iszkémiás szívbetegség',
    },
    {
      Sorszám: 310,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek:
        'magas vérnyomás, időskori demencia, pitvarfibrilláció, 2-es típusú cukorbetegség, idült iszkémiás szívbetegség',
    },
    {
      Sorszám: 309,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'méhnyálkahártya rosszindulatú daganata, magas vérnyomás, pangásos szívelégtelenség',
    },
    {
      Sorszám: 308,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'agyi érelmeszesedés, magas vérnyomás betegség, 2-es típusú cukorbetegség, Parkinson-kór',
    },
    {
      Sorszám: 307,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek:
        'cukorbetegség, magas vérnyomás, szív és keringési betegség, demencia, veseelégtelenség, vérszegénység, érelmeszesedés, agyi leépülés',
    },
    {
      Sorszám: 306,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'krónikus pajzsmirigygyulladás, érelmeszesedés',
    },
    {
      Sorszám: 305,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, szív és érrendszeri betegség',
    },
    {
      Sorszám: 304,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek:
        'iszkémiás szívbetegség, pitvarfibrilláció, krónikus pajzsmirigygyulladás',
    },
    {
      Sorszám: 303,
      Nem: 'Férfi',
      Kor: 90,
      Alapbetegségek: 'demencia',
    },
    {
      Sorszám: 302,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek: 'magas vérnyomás, demencia',
    },
    {
      Sorszám: 301,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'idült légzőszervi megbetegedés, magas vérnyomás, közepes fokú aorta szűkület',
    },
    {
      Sorszám: 300,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'végstádiumú veseelégtelenség',
    },
    {
      Sorszám: 299,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'combnyaktörés, pitvarfibrilláció',
    },
    {
      Sorszám: 298,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek:
        'cukorbetegség, magas vérnyomás, krónikus veseelégtelenség',
    },
    {
      Sorszám: 297,
      Nem: 'Nő',
      Kor: 44,
      Alapbetegségek: 'magas vérnyomás, asztma, hepatitis C',
    },
    {
      Sorszám: 296,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'általános érelmeszesedés, magas vérnyomás',
    },
    {
      Sorszám: 295,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'általános érelmeszesedés, magas vérnyomás',
    },
    {
      Sorszám: 294,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'idült légzőszervi megbetegedés, gyomorfekély',
    },
    {
      Sorszám: 293,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek:
        'magas vérnyomás, krónikus veseelégtelenség, vérszegénység',
    },
    {
      Sorszám: 292,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek: '2-es típusú cukorbetegség, magas vérnyomás',
    },
    {
      Sorszám: 291,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'magas vérnyomás, demencia, sokidegbántalom',
    },
    {
      Sorszám: 290,
      Nem: 'Férfi',
      Kor: 56,
      Alapbetegségek:
        'extrém elhízás, magas vérnyomás, beszűkült vesefunkciók, jobbszívfél-elégtelenség',
    },
    {
      Sorszám: 289,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek:
        'magas vérnyomás, agyvérzés, alkoholizmus, pitvarfibrilláció',
    },
    {
      Sorszám: 288,
      Nem: 'Nő',
      Kor: 96,
      Alapbetegségek:
        'magas vérnyomás, idült hasnyálmirigy gyulladás, asztma, pitvarfibrilláció, gyomorfekély',
    },
    {
      Sorszám: 287,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek: 'krónikus veseelégtelenség, magas vérnyomás',
    },
    {
      Sorszám: 286,
      Nem: 'Férfi',
      Kor: 83,
      Alapbetegségek: 'tüdőtágulás',
    },
    {
      Sorszám: 285,
      Nem: 'Férfi',
      Kor: 59,
      Alapbetegségek:
        'májelégtelenség, szívmegállás, cukorbetegség, magas vérnyomás',
    },
    {
      Sorszám: 284,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'mellkasi gennygyülem',
    },
    {
      Sorszám: 283,
      Nem: 'Nő',
      Kor: 63,
      Alapbetegségek: 'krónikus veseelégtelenség, szívelégtelenség',
    },
    {
      Sorszám: 282,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek: 'leukémia, általános érelmeszesedés, magas vérnyomás',
    },
    {
      Sorszám: 281,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek:
        'gyomorhiány, agyi infarktus, cukorbetegség, demencia, magas vérnyomás, ISZB',
    },
    {
      Sorszám: 280,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'krónikus obstruktív tüdőbetegség, Parkinson-kór, stroke',
    },
    {
      Sorszám: 279,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'keringési elégtelenség, pangásos szívelégtelenség',
    },
    {
      Sorszám: 278,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek:
        'magas vérnyomás, érelmeszesedés, agylágyulás, tüdőgyulladás',
    },
    {
      Sorszám: 277,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'daganatos megbetegedés',
    },
    {
      Sorszám: 276,
      Nem: 'Nő',
      Kor: 63,
      Alapbetegségek:
        'agyvérzés, vírusos tüdőgyulladás, cukorbetegség, féloldali bénulás, stroke',
    },
    {
      Sorszám: 275,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'dementia, paranoiditás',
    },
    {
      Sorszám: 274,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek:
        'gyengeség, rossz általános állapot, nyelési nehézség, krónikus alkoholizmus',
    },
    {
      Sorszám: 273,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek:
        'magas vérnyomás, krónikus obstruktív tüdőbetegség, pitvarfibrilláció, reflux',
    },
    {
      Sorszám: 272,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek: 'vérszegénység',
    },
    {
      Sorszám: 271,
      Nem: 'Nő',
      Kor: 37,
      Alapbetegségek: 'extrém elhízás',
    },
    {
      Sorszám: 270,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek: 'magas vérnyomás, hólyagtumor, szívizomelhalás',
    },
    {
      Sorszám: 269,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek:
        'szívbetegség, autoimmun betegség, kettes típusú cukorbetegség, pszichiátriai kezelés',
    },
    {
      Sorszám: 268,
      Nem: 'Férfi',
      Kor: 58,
      Alapbetegségek:
        'iszkémiás szívbetegség, szívelégtelenség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 267,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek: 'iszkémiás szívbetegség, pitvarfibrilláció',
    },
    {
      Sorszám: 266,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 265,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'magas vérnyomás, pajzsmirigy betegség, iszkémiás szívbetegség, reflux',
    },
    {
      Sorszám: 264,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek: 'cukorbetegség, szívizombántalom',
    },
    {
      Sorszám: 263,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'tüdőrák, cukorbetegség, veseelégtelenség',
    },
    {
      Sorszám: 262,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, szívbetegség',
    },
    {
      Sorszám: 261,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek:
        'magas vérnyomás, ízületi gyulladás, pajzsmirigy alulműködés',
    },
    {
      Sorszám: 260,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek: 'szenilitás, érelmeszesedés',
    },
    {
      Sorszám: 259,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek:
        'magas vérnyomás, demencia, szívkoszorúér betegség, autoimmun betegség',
    },
    {
      Sorszám: 258,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'magas vérnyomás, leépülés, iszkémiás szívbetegség',
    },
    {
      Sorszám: 257,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek: 'szívkoszorúér betegség, pitvar fribrilláció',
    },
    {
      Sorszám: 256,
      Nem: 'Férfi',
      Kor: 41,
      Alapbetegségek: 'súlyos bakteriális fertőzés, vérmérgezés, bélgyulladás',
    },
    {
      Sorszám: 255,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás, epilepszia, szívbetegség',
    },
    {
      Sorszám: 254,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek: 'méhnyakrák többszörös áttéttel',
    },
    {
      Sorszám: 253,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'koponyaűri vérzés',
    },
    {
      Sorszám: 252,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek: 'heveny veseelégtelenség, szívbetegség, vérszegénység',
    },
    {
      Sorszám: 251,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek:
        'magas vérnyomás, általános érelmeszesedés, szívelégtelenség',
    },
    {
      Sorszám: 250,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek:
        'magas vérnyomás, általános érelmeszesedés, szívelégtelenség',
    },
    {
      Sorszám: 249,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek:
        'emlőtumor, petefészek tumor, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 248,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek: 'tüdő tumor, pajzsmirigy-alulműködés, autoimmun betegség',
    },
    {
      Sorszám: 247,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek: 'magas vérnyomás, érrendszeri megbetegedés',
    },
    {
      Sorszám: 246,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'magas vérnyomás, demencia',
    },
    {
      Sorszám: 245,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek: 'magas vérnyomás, szívbetegség, szívaneurizma',
    },
    {
      Sorszám: 244,
      Nem: 'Nő',
      Kor: 95,
      Alapbetegségek: 'magas vérnyomás, koleszterin, bőrdaganat',
    },
    {
      Sorszám: 243,
      Nem: 'Férfi',
      Kor: 61,
      Alapbetegségek: 'májtályog',
    },
    {
      Sorszám: 242,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás, szívritmuszavar, béltumor, tüdőáttét',
    },
    {
      Sorszám: 241,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek: 'veseelégtelenség, embólia, trombozis, vesegyulladás',
    },
    {
      Sorszám: 240,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'szívbetegség, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 239,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek:
        'érelmeszesedés, csontritkulás, demencia, légzési és keringési elégtelenség',
    },
    {
      Sorszám: 238,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'prosztata daganat',
    },
    {
      Sorszám: 237,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'heveny légzési elégtelenség',
    },
    {
      Sorszám: 236,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek: 'heveny légzési elégtelenség',
    },
    {
      Sorszám: 235,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'iszkémiás szívbetegség, cukorbetegség, veseelégtelenség',
    },
    {
      Sorszám: 234,
      Nem: 'Férfi',
      Kor: 93,
      Alapbetegségek:
        'vérmérgezés, cukorbetegség, magas vérnyomás, pacemaker, iszkémiás szívbetegség',
    },
    {
      Sorszám: 233,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek: 'magas vérnyomás, pangásos szívelégtelenség',
    },
    {
      Sorszám: 232,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek:
        'demencia, magas vérnyomás, pangásos szívelégtelenség, veseelégtelenség, hosszantartó alkoholizmus',
    },
    {
      Sorszám: 231,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek:
        'magas vérnyomás, IBSZ, Alzheimer-kór, érelmeszesedés, porckorong elváltozás, iszkémiás szívbetegség',
    },
    {
      Sorszám: 230,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'magas vérnyomás, rosszindulatú daganatok',
    },
    {
      Sorszám: 229,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'stroke',
    },
    {
      Sorszám: 228,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'keringési problémák',
    },
    {
      Sorszám: 227,
      Nem: 'Nő',
      Kor: 99,
      Alapbetegségek: 'csontritkulás, demencia',
    },
    {
      Sorszám: 226,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek:
        'magas vérnyomás, idült májelégtelenség,  pajzsmirigy alulműködés',
    },
    // {
    //   Sorszám: 225,
    //   Nem: 'Férfi',
    //   Kor: 73,
    //   Alapbetegségek: 'dementia, anémia',
    // },
    {
      Sorszám: 225,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek: 'dementia, anémia',
    },
    {
      Sorszám: 224,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek:
        'magas vérnyomás, dilatativ cardiomyopathia, iszkémiás szívbetegség, pitvarfibrillatio',
    },
    {
      Sorszám: 223,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek:
        'Hepato-splenomegalia (máj-lépbetegség), CLL, ascites, lympadenomegalia',
    },
    {
      Sorszám: 222,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'vascularis dementia',
    },
    {
      Sorszám: 221,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek:
        '2-es típusú cukorbetegség, veseelégtelenség, koszorúér betegség',
    },
    {
      Sorszám: 220,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'érelmeszesedés, magas vérnyomás',
    },
    {
      Sorszám: 219,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'magas vérnyomás, köszvény',
    },
    {
      Sorszám: 218,
      Nem: 'Nő',
      Kor: 96,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 217,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás, hepatitis',
    },
    {
      Sorszám: 216,
      Nem: 'Férfi',
      Kor: 93,
      Alapbetegségek: 'demencia, Anderson-Tawil szindróma',
    },
    {
      Sorszám: 215,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'asztma, krónikus obstruktív tüdőbetegség',
    },
    {
      Sorszám: 214,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek:
        'szívritmuszavar, szívizom elégtelenség, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 213,
      Nem: 'Nő',
      Kor: 73,
      Alapbetegségek: 'krónikus obstruktív tüdőbetegség',
    },
    {
      Sorszám: 212,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'daganatos betegség, anyagcsere betegség',
    },
    {
      Sorszám: 211,
      Nem: 'Nő',
      Kor: 63,
      Alapbetegségek:
        'magas vérnyomás, krónikus veseelégtelenség, krónikus obstruktív tüdőgyulladás, mellhártyagyulladás',
    },
    {
      Sorszám: 210,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'pitvarfibrilláció, szívelégtelenség',
    },
    {
      Sorszám: 209,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'magas vérnyomás, szívelégtelenség, demencia, Parkinson-kór,',
    },
    {
      Sorszám: 208,
      Nem: 'Nő',
      Kor: 60,
      Alapbetegségek: 'az adat feltölés alatt',
    },
    {
      Sorszám: 207,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek: '2-es típusú cukorbetegség, magas vérnyomás,reflux',
    },
    {
      Sorszám: 206,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'érelmeszesedés, magas vérnyomás',
    },
    {
      Sorszám: 205,
      Nem: 'Nő',
      Kor: 66,
      Alapbetegségek: 'stroke, epekő, magas vérnyomás,reflux,',
    },
    {
      Sorszám: 204,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek: 'idült nyirokkeringési zavar, magas vérnyomás',
    },
    {
      Sorszám: 203,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'pitvarfibrilláció, cukorbetegség, magas vérnyomás, szívbetegség, demencia, epilepsia',
    },
    {
      Sorszám: 202,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek: 'cukorbetegség',
    },
    {
      Sorszám: 201,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek:
        'általános érelmeszesedés, magas vérnyomás, iremiás szívbetegség, veseelégtelenség, dementia',
    },
    {
      Sorszám: 200,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'krónikus obstruktív tüdőbetegség, pitvari fibrilláció, pangásos szívelégtelenség, inzulinfüggő cukorbetegség, magas vérnyomás',
    },
    {
      Sorszám: 199,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek:
        'többszörös ideggyulladás, kitágult szívizomgyulladás, pitvarfribliláció, agyhártya daganat, többszörös érfalsérülés',
    },
    {
      Sorszám: 198,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek:
        'HT - autoimmun betegség, rheumatoid arthritis, veseelégtelenség',
    },
    {
      Sorszám: 197,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek: 'általános  érelmeszesedés',
    },
    {
      Sorszám: 196,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek: 'magas vérnyomás, cukorbeteg, agyi keringési zavar',
    },
    {
      Sorszám: 195,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek: 'asztma, stroke, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 194,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 193,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek: 'magas vérnyomás, agyi keringési zavar',
    },
    {
      Sorszám: 192,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'cukorbetegség, daganat, szívelégtelenség',
    },
    {
      Sorszám: 191,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'magas vérnyomás, demencia',
    },
    {
      Sorszám: 190,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek: 'magas vérnyomás, stroke',
    },
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
      Alapbetegségek:
        'cukorbetegség, autoimmun betegség, iszkémiás szívbetegség',
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
      Alapbetegségek:
        'művese kezelés, magas vérnyomás, cukorbetegség, pacemaker',
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
      Alapbetegségek:
        'magas vérnyomás, stroke, dementia, pajzsmirigy túlműködés',
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
      Alapbetegségek:
        'légzési elégtelenség, tüdőgyulladás, verőér elmeszesedés',
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
      Alapbetegségek:
        'daganatos betegség, sclerosis multiplex, magas vérnyomás',
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
      Alapbetegségek:
        'magas vérnyomás, daganatos betegség, anyagcsere betegség',
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
      Alapbetegségek:
        'aorta stenosis, ISzB, magas vérnyomás, pitvarfibrilláció',
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
}
