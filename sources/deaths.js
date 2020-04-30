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
