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
      Sorszám: 1305,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'szívelégtelenség',
    },
    {
      Sorszám: 1304,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek: 'krónikus veseelégtelenség, pangásos szívelégtelenség',
    },
    {
      Sorszám: 1303,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 1302,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'feltöltés alatt',
    },
    {
      Sorszám: 1301,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'szívelégtelenség',
    },
    {
      Sorszám: 1300,
      Nem: 'Nő',
      Kor: 97,
      Alapbetegségek: 'szívelégtelenség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 1299,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'magas vérnyomás, Alzheimer-kór',
    },
    {
      Sorszám: 1298,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek: 'tüdő tumor',
    },
    {
      Sorszám: 1297,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek: 'tüdő tumor, légzőszervi megbetegedés',
    },
    {
      Sorszám: 1296,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'magas vérnyomás, szíveleégtelenség, extrém elhízás',
    },
    {
      Sorszám: 1295,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'szívelégtelenség',
    },
    {
      Sorszám: 1294,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek: 'feltöltés alatt',
    },
    {
      Sorszám: 1293,
      Nem: 'Nő',
      Kor: 71,
      Alapbetegségek: 'autoimmun betegség, asztma',
    },
    {
      Sorszám: 1292,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'krónikus veseelégtelenség, agyi infarktus',
    },
    {
      Sorszám: 1291,
      Nem: 'Nő',
      Kor: 57,
      Alapbetegségek: 'autoimmun betegség, magas koleszterin',
    },
    {
      Sorszám: 1290,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 1289,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'szívműködési zavar, végbél tumor',
    },
    {
      Sorszám: 1288,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek: 'szívműködési zavar',
    },
    {
      Sorszám: 1287,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'pangásos szívelégtelenség, Parkinson-kór',
    },
    {
      Sorszám: 1286,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek: 'gyomor tumor, szívkoszorúér betegség, cukorbetegség',
    },
    {
      Sorszám: 1285,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás, szívműködési zavar',
    },
    {
      Sorszám: 1284,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek:
        'veseelégtelenség, pajzsmirigy alulműködés, érelmeszesedés',
    },
    {
      Sorszám: 1283,
      Nem: 'Férfi',
      Kor: 83,
      Alapbetegségek: 'hörgő- és tüdőgyulladás',
    },
    {
      Sorszám: 1282,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'magas vérnyomás, szívműködési zavar',
    },
    {
      Sorszám: 1281,
      Nem: 'Nő',
      Kor: 95,
      Alapbetegségek:
        'bal oldali combnyaktörés, hyposmolaritás és hyponatraemia',
    },
    {
      Sorszám: 1280,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'szívműködési zavar',
    },
    {
      Sorszám: 1279,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'gyomor rosszindulatú daganata',
    },
    {
      Sorszám: 1278,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'Parkinson kór, koszorúér stentelés, lumbágó',
    },
    {
      Sorszám: 1277,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'kisérbetegség, magas vérnyomás',
    },
    {
      Sorszám: 1276,
      Nem: 'Férfi',
      Kor: 70,
      Alapbetegségek: 'hólyagtumor',
    },
    {
      Sorszám: 1275,
      Nem: 'Nő',
      Kor: 95,
      Alapbetegségek: 'tüdőembólia, magas vérnyomás',
    },
    {
      Sorszám: 1274,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'magasvérnyomás-betegség, cukorbetegség',
    },
    {
      Sorszám: 1273,
      Nem: 'Nő',
      Kor: 73,
      Alapbetegségek: 'Huntington-kór, demencia',
    },
    {
      Sorszám: 1272,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek: 'feltöltés alatt',
    },
    {
      Sorszám: 1271,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'magas vérnyomás, zöld hályog, csontritkulás',
    },
    {
      Sorszám: 1270,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek: 'tüdő betegség, magas vérnyomás',
    },
    {
      Sorszám: 1269,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek: 'magas vérnyomás,prosztata tumor',
    },
    {
      Sorszám: 1268,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek: 'feltöltés alatt',
    },
    {
      Sorszám: 1267,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'magas vérnyomás, tüdőtuberkulózis',
    },
    {
      Sorszám: 1266,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek:
        'idült szívbetegség, pangásos szívelégtelenség, magasvérnyomás-betegség, cukorbetegség, magas koleszterinszint',
    },
    {
      Sorszám: 1265,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek: 'feltöltés alatt',
    },
    {
      Sorszám: 1264,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'autoimmun pajzsmirigy betegség, cukorbetegség',
    },
    {
      Sorszám: 1263,
      Nem: 'Férfi',
      Kor: 56,
      Alapbetegségek: 'glutealis tályog, cukorbetegség, magas vérnyomás',
    },
    {
      Sorszám: 1262,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek: 'szívelégtelenség, magas vérnyomás',
    },
    {
      Sorszám: 1261,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek: 'pajzsmirigygyulladás, stroke, tüdőembólia',
    },
    {
      Sorszám: 1260,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'szívizom elégtelenség, cukorbetegség, hasnyálmirigyrák',
    },
    {
      Sorszám: 1259,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek:
        'hörgő rosszindulatú daganata, magas vérnyomás, tüdőgyulladás, cukorbetegség',
    },
    {
      Sorszám: 1258,
      Nem: 'Férfi',
      Kor: 94,
      Alapbetegségek:
        'magas vérnyomás, szívritmuszavar, átmeneti agyi vérellátási zavar, kopásos mozgásszervi betegség',
    },
    {
      Sorszám: 1257,
      Nem: 'Férfi',
      Kor: 45,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 1256,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek:
        'iszkémiás szívbetegség, Parkinson-kór, aorta billentyű szűkület',
    },
    {
      Sorszám: 1255,
      Nem: 'Nő',
      Kor: 71,
      Alapbetegségek:
        'bakteriális tüdőgyulladás, pangásos, szívelégtelenség, érelzáródás a végtagon',
    },
    {
      Sorszám: 1254,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'prosztatarák, tüdőrák, érszűkület',
    },
    {
      Sorszám: 1253,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'magas vérnyomás, szívizombetegség, cukorbetegség',
    },
    {
      Sorszám: 1252,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek: 'magas vérnyomás, pitvarfibrilláció, veseelégtelenség',
    },
    {
      Sorszám: 1251,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'hasnyálmirigy rosszindulatú daganata',
    },
    {
      Sorszám: 1250,
      Nem: 'Férfi',
      Kor: 90,
      Alapbetegségek: 'cukorbetegség, krónikus veseelégtelenség, asthma',
    },
    {
      Sorszám: 1249,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek:
        'cukorbetegség, magas vérnyomás, pajzsmirigy túlműködés, idegbántalom',
    },
    {
      Sorszám: 1248,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek:
        'leukémia, magas vérnyomás, iszkémiás szívbetegség, agyvérzés',
    },
    {
      Sorszám: 1247,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'szív- és érrendszeri betegségek, demencia',
    },
    {
      Sorszám: 1246,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek:
        'cukorbetegség, magas vérnyomás, szív- és érrendszeri betegség, parkinson-kór',
    },
    {
      Sorszám: 1245,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, szívizom betegség, asztma, cukorbetegség, szív- és érrendszeri betegség, májkárosodás',
    },
    {
      Sorszám: 1244,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'iszkémiás szívbetegség, magas vérnyomás, szívelégtelenség, cukorbetegség, agyi infarktus',
    },
    {
      Sorszám: 1243,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'krónikus veseelégtelenség, magasvérnyomás-betegség, szívbetegség',
    },
    {
      Sorszám: 1242,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, gyomor jóindulatú daganata, szívizom gyengeség, szívelégtelenség, szívritmuszavar, autoimmun pajzsmirigy betegség',
    },
    {
      Sorszám: 1241,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, pitvarfibrilláció, mélyvénás trombózis',
    },
    {
      Sorszám: 1240,
      Nem: 'Nő',
      Kor: 66,
      Alapbetegségek:
        'tüdő rosszindulatú daganata nyirokcsomó áttétekkel, nyelőcsőbe terjedéssel',
    },
    {
      Sorszám: 1239,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek:
        'cukorbetegség, prosztatarák, magas vérnyomás, demencia, vérmérgezés',
    },
    {
      Sorszám: 1238,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek:
        'krónikus tüdőbetegség, magas vérnyomás, vese elégtelenség, cukorbetegség, agyi infarktus',
    },
    {
      Sorszám: 1237,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, idült dependens cukorbetegség, szívritmuszavar, agyi infarktus',
    },
    {
      Sorszám: 1236,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'vastagbélrák, hasfali tumor, eltávolított vese',
    },
    {
      Sorszám: 1235,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek:
        'magas vérnyomás, nem inzulin dependens cukorbetegség, demencia',
    },
    {
      Sorszám: 1234,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek: 'magas vérnyomás, demencia',
    },
    {
      Sorszám: 1233,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'szívritmus-zavar, magas vérnyomás, időskori leépülés',
    },
    {
      Sorszám: 1232,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás betegség, cukorbetegség, szívbetegség',
    },
    {
      Sorszám: 1231,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek: 'vérmérgezés, szívritmuszavar',
    },
    {
      Sorszám: 1230,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, pitvarfibrilláció',
    },
    {
      Sorszám: 1229,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'általános érelmeszesedés',
    },
    {
      Sorszám: 1228,
      Nem: 'Férfi',
      Kor: 91,
      Alapbetegségek:
        'iszkémiás szívbetegség, magas vérnyomás, szívelégtelenség',
    },
    {
      Sorszám: 1227,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'magas vérnyomás, iszkémiás szívbetegség, cukorbetegség',
    },
    {
      Sorszám: 1226,
      Nem: 'Nő',
      Kor: 72,
      Alapbetegségek:
        'magas vérnyomás, pajzsmirigy alulműködés, tüdőbetegség, szívritmuszavar',
    },
    {
      Sorszám: 1225,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'rosszindulatú pajzsmirigy daganat',
    },
    {
      Sorszám: 1224,
      Nem: 'Nő',
      Kor: 73,
      Alapbetegségek:
        'egész testet érintő érelmeszesedés, depresszió, paranoia, alultápláltság',
    },
    {
      Sorszám: 1223,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek: 'kétoldali tüdőgyulladás',
    },
    {
      Sorszám: 1222,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek:
        'krónikus magasvérnyomás-betegség, idült tüdőbetegség, szívizom betegség',
    },
    {
      Sorszám: 1221,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek: 'magas vérnyomás, demencia',
    },
    {
      Sorszám: 1220,
      Nem: 'Férfi',
      Kor: 58,
      Alapbetegségek: 'pajzsmirigy megnagyobbodás, infarktus',
    },
    {
      Sorszám: 1219,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek:
        'magas vérnyomás, asthma, veseelégtelenség, iszkémiás szívbetegség, krónikus hepatitis B fertőzés, vesetranszplantáció',
    },
    {
      Sorszám: 1218,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'magas vérnyomás betegség, vese transzplantáció, szívbetegség, pajzsmirigy alulműködés',
    },
    {
      Sorszám: 1217,
      Nem: 'Férfi',
      Kor: 70,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás, vesebetegség, agyvérzés',
    },
    {
      Sorszám: 1216,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'veseelégtelenség, magas vérnyomás, szívbetegség',
    },
    {
      Sorszám: 1215,
      Nem: 'Férfi',
      Kor: 83,
      Alapbetegségek:
        'pitvarfibrilláció érszűkület, pajzsmirigy alulműködés, cukorbetegség',
    },
    {
      Sorszám: 1214,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek:
        'krónikus tüdőbetegség, pangásos szívelégtelenség, magas vérnyomás',
    },
    {
      Sorszám: 1213,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'rosszindulatú áttétes daganatos betegség',
    },
    {
      Sorszám: 1212,
      Nem: 'Nő',
      Kor: 57,
      Alapbetegségek:
        'hörgőasztma, vesebetegség, cukorbetegség, krónikus tüdőbetegség',
    },
    {
      Sorszám: 1211,
      Nem: 'Férfi',
      Kor: 70,
      Alapbetegségek:
        'magasvérnyomás-betegség, cukorbetegség, iszkémiás szívbetegség',
    },
    {
      Sorszám: 1210,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'tüdőgyulladás, szívizom betegség, magasvérnyomás-betegség, krónikus veseelégtelenség, pitvarfibrilláció',
    },
    {
      Sorszám: 1209,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek: 'kétoldali tüdőgyulladás',
    },
    {
      Sorszám: 1208,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'magasvérnyomás-betegség súlyos mentális hanyatlás',
    },
    {
      Sorszám: 1207,
      Nem: 'Nő',
      Kor: 61,
      Alapbetegségek: 'magasvérnyomás-betegség, cukorbetegség, elhízás',
    },
    {
      Sorszám: 1206,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'pangásos szívelégtelenség, süllyedéses tüdőgyulladás, pitvarfibrilláció, idült légzési elégtelenség, mellűri folyadékképződés, magasvérnyomás-betegség, demencia',
    },
    {
      Sorszám: 1205,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'obstruktív tüdőbetegség',
    },
    {
      Sorszám: 1204,
      Nem: 'Nő',
      Kor: 59,
      Alapbetegségek: 'iszkémiás szívbetegség',
    },
    {
      Sorszám: 1203,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek:
        'magasvérnyomás-betegség, cukorbetegség, időskori távollátás, demencia',
    },
    {
      Sorszám: 1202,
      Nem: 'Nő',
      Kor: 71,
      Alapbetegségek:
        'mentális retardáció, epilepszia miatti kezelés, magas vérnyomás',
    },
    {
      Sorszám: 1201,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'magasvérnyomás-betegség, ízületi gyulladás, iszkémiás szívbetegség, pitvarfibrilláció, bipoláris zavar',
    },
    {
      Sorszám: 1200,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'magasvérnyomás-betegség, cukorbetegség, érszűkület',
    },
    {
      Sorszám: 1199,
      Nem: 'Férfi',
      Kor: 70,
      Alapbetegségek: 'magasvérnyomás-betegség, agyi térfoglaló elváltozás',
    },
    {
      Sorszám: 1198,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek:
        'magasvérnyomás-betegség, cukorbetegség, bronchitis, iszkémiás szívbetegségek',
    },
    {
      Sorszám: 1197,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek:
        'idült iszkémiás szívbetegség, pangásos szívelégtelenség, magasvérnyomás-betegség, cukorbetegség.',
    },
    {
      Sorszám: 1196,
      Nem: 'Férfi',
      Kor: 50,
      Alapbetegségek:
        'vírusos tüdőgyulladás, magasvérnyomás-betegség, szívbetegség, cukorbetegség',
    },
    {
      Sorszám: 1195,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek: 'magasvérnyomás-betegség, szívbetegség',
    },
    {
      Sorszám: 1194,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek:
        'magasvérnyomás-betegség, demencia, elhízás, húgyhólyag gyulladás',
    },
    {
      Sorszám: 1193,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'Alzheimer kór, magas vérnyomás',
    },
    {
      Sorszám: 1192,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek: 'csontvelőrák',
    },
    {
      Sorszám: 1191,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'magasvérnyomás-betegség, szívritmus zavar, porcbetegség',
    },
    {
      Sorszám: 1190,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek: 'krónikus obstruktív tüdőbetegség, stroke',
    },
    {
      Sorszám: 1189,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek: 'krónikus obstruktív tüdőbetegség',
    },
    {
      Sorszám: 1188,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'Alzheimer-dementia, organikus psychosyndroma',
    },
    {
      Sorszám: 1187,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek: 'magasvérnyomás-betegség, cukorbetegség',
    },
    {
      Sorszám: 1186,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek:
        'agykárosodás, vaszkulári demencia, organikus személyiségzavar',
    },
    {
      Sorszám: 1185,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek:
        'pajzsmirigy betegség, nem-meghatározott vaszkuláris demencia',
    },
    {
      Sorszám: 1184,
      Nem: 'Nő',
      Kor: 40,
      Alapbetegségek: 'születési sérülés, epilepzsia, mentalis retardáció',
    },
    {
      Sorszám: 1183,
      Nem: 'Nő',
      Kor: 99,
      Alapbetegségek: 'magasvérnyomás-betegség, agyi erek betegsége, demencia',
    },
    {
      Sorszám: 1182,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek: 'pajzsmirigy megnagyobbodás, infarktus',
    },
    {
      Sorszám: 1181,
      Nem: 'Férfi',
      Kor: 63,
      Alapbetegségek:
        'magasvérnyomás-betegség, iszkémiás szívbetegség, cukorbetegség',
    },
    {
      Sorszám: 1180,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'stroke, magasvérnyomás-betegség',
    },
    {
      Sorszám: 1179,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek: 'nem ismert',
    },
    {
      Sorszám: 1178,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek:
        'magasvérnyomás-betegség, demencia (pszichiátriai kezelés), iszkémiás szívbetegség, szigmabél daganat',
    },
    {
      Sorszám: 1177,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'hasnyálmirigy daganat, magas vérnyomás',
    },
    {
      Sorszám: 1176,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek:
        'heveny veseelégtelenség, érelmeszesedés, magas vérnyomás',
    },
    {
      Sorszám: 1175,
      Nem: 'Férfi',
      Kor: 98,
      Alapbetegségek: 'magasvérnyomás-betegség, gyomorfekély',
    },
    {
      Sorszám: 1174,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'magasvérnyomás-betegség, krónikus szénanátha',
    },
    {
      Sorszám: 1173,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek:
        'pangásos szívelégtelenség, krónikus veseelégtelenség, krónikus légzési elégtelenség, Alzheimer-kór',
    },
    {
      Sorszám: 1172,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek: 'magasvérnyomás-betegség, érelmeszesedés, demencia',
    },
    {
      Sorszám: 1171,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek:
        'vírusos tüdőgyulladás, hypertenzív szívbetegség szívelégtelenség nélkül, magasvérnyomás-betegség',
    },
    {
      Sorszám: 1170,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek:
        'iszkémiás szívbetegség, infarktus, koronária szklerózis, pitvarfibrilláció, aortaszűkület',
    },
    {
      Sorszám: 1169,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek: 'magasvérnyomás-betegség, cukorbetegség',
    },
    {
      Sorszám: 1168,
      Nem: 'Férfi',
      Kor: 39,
      Alapbetegségek: 'májzsugorodás, májelégtelenség',
    },
    {
      Sorszám: 1167,
      Nem: 'Férfi',
      Kor: 94,
      Alapbetegségek:
        'magasvérnyomás-betegség, cukorbetegség, agysorvadás, pitvarfibrilláció',
    },
    {
      Sorszám: 1166,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek:
        'epekő, magasvérnyomás-betegség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 1165,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'magasvérnyomás-betegség',
    },
    {
      Sorszám: 1164,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek: 'magasvérnyomás-betegség, cukorbetegség',
    },
    {
      Sorszám: 1163,
      Nem: 'Férfi',
      Kor: 90,
      Alapbetegségek:
        'magasvérnyomás-betegség, iszkémiás szívbetegség, idegrendszeri betegség, cukorbetegség',
    },
    {
      Sorszám: 1162,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'Parkinson-kór, stroke',
    },
    {
      Sorszám: 1161,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek:
        'magasvérnyomás-betegség, cukorbetegség, stroke, szívelégtelenség',
    },
    {
      Sorszám: 1160,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek:
        'magasvérnyomás-betegség, cukorbetegség, pitvarfibrilláció',
    },
    {
      Sorszám: 1159,
      Nem: 'Nő',
      Kor: 95,
      Alapbetegségek: 'pitvarfibrilláció, szívelégtelenség',
    },
    {
      Sorszám: 1158,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'Parkinson-kór, pajzsmirigy alulműködés',
    },
    {
      Sorszám: 1157,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'magasvérnyomás-betegség, krónikus veseelégtelenség, leukémia',
    },
    {
      Sorszám: 1156,
      Nem: 'Nő',
      Kor: 49,
      Alapbetegségek:
        'jóindulatú érdaganat, talpi sarkantyú miatti sugárkezelés, lumbalis gerincpanaszok, pajzsmirigy-alulműködés, krónikus alkoholizmus',
    },
    {
      Sorszám: 1155,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek: 'iszkémiás szívbetegség, cukorbetegség',
    },
    {
      Sorszám: 1154,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek:
        'magasvérnyomás-betegség, Parkinson-kór, cukorbetegség, szeméremcsonttörés',
    },
    {
      Sorszám: 1153,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek:
        'extrém elhízás, COPD, az aorta szűkülete, szívtágulás, pangásos szívelégtelenség, műbillentyű a szívben',
    },
    {
      Sorszám: 1152,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'vírusos tüdőgyulladás, szívelégtelenség, magasvérnyomás-betegség, cukorbetegség, húgyhólyag daganat',
    },
    {
      Sorszám: 1151,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'magasvérnyomás-betegség, cukorbetegség',
    },
    {
      Sorszám: 1150,
      Nem: 'Nő',
      Kor: 63,
      Alapbetegségek:
        'pangásos szívelégtelenség, pulmonalis szívbetegség, tüdőembólia heveny pulmonalis szívbetegség említésével, magasvérnyomás-betegség, idiopathiás tüdőfibrosis',
    },
    {
      Sorszám: 1149,
      Nem: 'Nő',
      Kor: 62,
      Alapbetegségek: 'magasvérnyomás-betegség, asztma, májgyulladás',
    },
    {
      Sorszám: 1148,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek:
        'magasvérnyomás-betegség, érelmeszesedés, szívbetegség, tüdőembólia',
    },
    {
      Sorszám: 1147,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek:
        'vírusos tüdőgyulladás, magasvérnyomás-betegség, vaszkuláris demencia, agyi infarktusok utáni állapot',
    },
    {
      Sorszám: 1146,
      Nem: 'Férfi',
      Kor: 63,
      Alapbetegségek:
        'magasvérnyomás-betegség, érszűkület , végstádiumú veseelégtelenség, cukorbetegség',
    },
    {
      Sorszám: 1145,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'szívbetegség, érszűkület, magasvérnyomás-betegség',
    },
    {
      Sorszám: 1144,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek:
        'magasvérnyomás-betegség, érelmeszesedés, demencia, vérszegénység',
    },
    {
      Sorszám: 1143,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'demencia, érelmeszesedés',
    },
    {
      Sorszám: 1142,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'ízületi betegség, magas vérnyomás',
    },
    {
      Sorszám: 1141,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'stroke, magas vérnyomás, tüdőgyulladás',
    },
    {
      Sorszám: 1140,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'stroke, szívbetegség, epilepszia, agydaganat',
    },
    {
      Sorszám: 1139,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek: 'szívbetegség, cukorbetegség, háromérbetegség',
    },
    {
      Sorszám: 1138,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'akut mieloid leukémia, szívelégtelenség',
    },
    {
      Sorszám: 1137,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek:
        'magas vérnyomás, szívelégtelenség, billentyűelégtelenség',
    },
    {
      Sorszám: 1136,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, agyi infarktus',
    },
    {
      Sorszám: 1135,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek:
        'szívelégtelenség, szívinfarktus utáni állapot, koszorúér szűkület miatti műtét',
    },
    {
      Sorszám: 1134,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek:
        'légzési és keringési elégtelenség, szívelégtelenség, pitvarfibrilláció',
    },
    {
      Sorszám: 1133,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 1132,
      Nem: 'Nő',
      Kor: 71,
      Alapbetegségek: 'szívritmuszavar, tüdőgyulladás',
    },
    {
      Sorszám: 1131,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'reuma, Parkinson-kór, epilepszia',
    },
    {
      Sorszám: 1130,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'kétoldali tüdőgyulladás',
    },
    {
      Sorszám: 1129,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'nem-meghatározott demencia, epilepszia',
    },
    {
      Sorszám: 1128,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek: 'agyi infarktus, heveny veseelégtelenség, érelmeszesedés',
    },
    {
      Sorszám: 1127,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek:
        'magas vérnyomás, gyomorhurut, általános és agyi érszűkület, hasnyálmirigy gyulladás',
    },
    {
      Sorszám: 1126,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, szívelégtelenség',
    },
    {
      Sorszám: 1125,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 1124,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'magas vérnyomás, COPD tüdőbetegség',
    },
    {
      Sorszám: 1123,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, tüdőgyulladás, COPD tüdőbetegség, elhízás, zöldhályog, veseelégtelenség',
    },
    {
      Sorszám: 1122,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek:
        'szívizom elégtelenség, csontritkulás, magas vérnyomás, pitvarfibrilláció, COPD tüdőbetegség',
    },
    {
      Sorszám: 1121,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek:
        'magas vérnyomás, heveny légzési elégtelenség, vesekő, pitvarfibrilláció',
    },
    {
      Sorszám: 1120,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek: 'magas vérnyomás, hörgőasztma',
    },
    {
      Sorszám: 1119,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek:
        'magas vérnyomás, tüdőgyulladás, légzési elégtelenség, krónikus veseelégtelenség, agyi infarktus',
    },
    {
      Sorszám: 1118,
      Nem: 'Férfi',
      Kor: 57,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 1117,
      Nem: 'Férfi',
      Kor: 56,
      Alapbetegségek:
        'alkohol okozta szindróma, májzsugorodás, idült hasnyálmirigy gyulladás',
    },
    {
      Sorszám: 1116,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek:
        'alkoholos májzsugorodás, pitvarfibrilláció, tüdőgyulladás, magas vérnyomás',
    },
    {
      Sorszám: 1115,
      Nem: 'Nő',
      Kor: 72,
      Alapbetegségek: 'demencia, skizofrénia, aortabillentyű rendellenesség',
    },
    {
      Sorszám: 1114,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, hasfali sérv',
    },
    {
      Sorszám: 1113,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek: 'magas vérnyomás, pitvarfibrilláció, veseelégtelenség',
    },
    {
      Sorszám: 1112,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek: 'magas vérnyomás, agyi infarktus, pitvarfibrilláció',
    },
    {
      Sorszám: 1111,
      Nem: 'Férfi',
      Kor: 83,
      Alapbetegségek:
        'szív-és érrendszeri betegség, demencia, szívelégtelenség',
    },
    {
      Sorszám: 1110,
      Nem: 'Férfi',
      Kor: 50,
      Alapbetegségek: 'szívelégtelenség, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 1109,
      Nem: 'Férfi',
      Kor: 92,
      Alapbetegségek: 'csípőtörés, demencia, skizofrénia',
    },
    {
      Sorszám: 1108,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek: 'magas vérnyomás, demencia',
    },
    {
      Sorszám: 1107,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'magas vérnyomás, szívizom elégtelenség, cukorbetegség',
    },
    {
      Sorszám: 1106,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek:
        'agyi keringési zavar, arcüreg gyulladás, magas vérnyomás, krónikus szívelégtelenség',
    },
    {
      Sorszám: 1105,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'szív-érrendszeri elégtelenség, krónikus vese elégtelenség, baloldali tüdőgyulladás',
    },
    {
      Sorszám: 1104,
      Nem: 'Nő',
      Kor: 57,
      Alapbetegségek:
        'magas vérnyomás, májzsugor,máj elégtelenség, krónikus vérszegénység',
    },
    {
      Sorszám: 1103,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás, agyi infarktus',
    },
    {
      Sorszám: 1102,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'magas vérnyomás, idült szívbetegség',
    },
    {
      Sorszám: 1101,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek: 'magas vérnyomás, szívelégtelenség, magas vércukorszint',
    },
    {
      Sorszám: 1100,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, agytumor, agyvérzés, vesebetegség',
    },
    {
      Sorszám: 1099,
      Nem: 'Férfi',
      Kor: 92,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, prosztata megnagyobbodás',
    },
    {
      Sorszám: 1098,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'jelenleg nem áll rendelkezésre adat',
    },
    {
      Sorszám: 1097,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'vírusos tüdőgyulladás, vérképzőrendszeri daganat, krónikus veseelégtelenség, érelmeszesedés',
    },
    {
      Sorszám: 1096,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'szívbetegség, veseciszta',
    },
    {
      Sorszám: 1095,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek:
        'nagyon alacsony testhőmérséklet, iszkémiás szívbetegség, krónikus tüdőbetegség',
    },
    {
      Sorszám: 1094,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'jelenleg nem áll rendelkezésre adat',
    },
    {
      Sorszám: 1093,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek: 'közúti balesetet követő mozgáskorlátozottság',
    },
    {
      Sorszám: 1092,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'magas vérnyomás, demencia, Parkinson-kór, jóindulatú prosztata megnagyobbodás',
    },
    {
      Sorszám: 1091,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek:
        'epilepszia, szívelégtelenség, demencia, kóros soványság, szívritmuszavar',
    },
    {
      Sorszám: 1090,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, Alzheimer-kór, agyi és általános érelmeszesedés',
    },
    {
      Sorszám: 1089,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, iszkémiás szívbetegség, kóros elhízás, pikkelysömör',
    },
    {
      Sorszám: 1088,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, heveny veseelégtelenség',
    },
    {
      Sorszám: 1087,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek: 'magas vérnyomás, vérmérgezés, agysorvadás',
    },
    {
      Sorszám: 1086,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek:
        'cukorbetegség, magas vérnyomás, rosszindulatú daganat, agyi infarktus',
    },
    {
      Sorszám: 1085,
      Nem: 'Férfi',
      Kor: 20,
      Alapbetegségek: 'csontvelő-transzplantáció, kóros elhízás, vérszegénység',
    },
    {
      Sorszám: 1084,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'demencia, nyomási fekély, pangásos tüdőgyulladás',
    },
    {
      Sorszám: 1083,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek: 'cukorbetegség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 1082,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'magas vérnyomás, tüdőgyulladás',
    },
    {
      Sorszám: 1081,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek: 'magas vérnyomás, demencia, szívritmuszavar',
    },
    {
      Sorszám: 1080,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek:
        'magas vérnyomás, krónikus veseelégtelenség, leukémia, cukorbetegség',
    },
    {
      Sorszám: 1079,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 1078,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 1077,
      Nem: 'Nő',
      Kor: 63,
      Alapbetegségek:
        'Alzheimer-kór, demencia, pangásos szívelégtelenség, tüdőembólia',
    },
    {
      Sorszám: 1076,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek:
        'magas vérnyomás, tüdőgyulladás, veseelégtelenség, vérszegénység',
    },
    {
      Sorszám: 1075,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek: 'magas vérnyomás, légzési elégtelenség',
    },
    {
      Sorszám: 1074,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek:
        'Parkinson-kór, egyéb, akut és átmeneti pszihotikus zavar, tüdőgyulladás',
    },
    {
      Sorszám: 1073,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'kétoldali tüdőgyulladás, veseelégtelenség',
    },
    {
      Sorszám: 1072,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek:
        'toxikus májbetegség, veseelégtelenség, magas vérnyomás, tüdőgyulladás',
    },
    {
      Sorszám: 1071,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek:
        'demencia, epilepszia, általános érelmeszesedés, agysorvadás',
    },
    {
      Sorszám: 1070,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek:
        'tüdőgyulladás, cukorbetegség, vastagbél rák, veseelégtelenség',
    },
    {
      Sorszám: 1069,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'vérszegénység, gyomorfekély, magas vérnyomás, csontritkulás',
    },
    {
      Sorszám: 1068,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, Parkinson-kór, demencia',
    },
    {
      Sorszám: 1067,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek:
        'magas vérnyomás, demencia, légzési elégtelenség, Parkinson-kór',
    },
    {
      Sorszám: 1066,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek:
        'magas vérnyomás, érelmeszesedés, szívizomelhalás, szívelégtelenség',
    },
    {
      Sorszám: 1065,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'magas vérnyomás, általános érelmeszesedés',
    },
    {
      Sorszám: 1064,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'krónikus veseelégtelenség, agyi infarktus, magas vérnyomás, tüdőgyulladás',
    },
    {
      Sorszám: 1063,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek: 'adat feltöltés alatt',
    },
    {
      Sorszám: 1062,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek:
        'tüdőgyulladás, demencia, pangásos szívelégtelenség, alkoholos zsírmáj',
    },
    {
      Sorszám: 1061,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek:
        'magas vérnyomás, agyi infarktus, szorongás depressziós zavar',
    },
    {
      Sorszám: 1060,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'szívelégtelenség, akut veseelégtelenség',
    },
    {
      Sorszám: 1059,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek: 'CD-30 pozitív nagysejtes limfóma',
    },
    {
      Sorszám: 1058,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek:
        'magas vérnyomás, heveny szívizomelhalás, idült hasnyálmirigy-gyulladás, szívelégtelenség',
    },
    {
      Sorszám: 1057,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'leukémia',
    },
    {
      Sorszám: 1056,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek:
        'skizofrénia, mentális retardáció, érszűkület, húgyhólyagdaganat',
    },
    {
      Sorszám: 1055,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek: 'magas vérnyomás, agyi infarktus, tüdőgyulladás',
    },
    {
      Sorszám: 1054,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'szívbetegség, stroke, agyérelmeszesedés',
    },
    {
      Sorszám: 1053,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'magas vérnyomás, tüdőbetegség',
    },
    {
      Sorszám: 1052,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek:
        'veseelégtelenség, cukorbetegség, szívelégtelenség, elhízás, koszorúér-elmeszesedés',
    },
    {
      Sorszám: 1051,
      Nem: 'Nő',
      Kor: 62,
      Alapbetegségek: 'tüdőgyulladás, heveny szívelégtelenség',
    },
    {
      Sorszám: 1050,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'szívérelmeszesedés',
    },
    {
      Sorszám: 1049,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'veseelégtelenség, magasvérnyomás-betegség, fekély, cukorbetegség',
    },
    {
      Sorszám: 1048,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'magasvérnyomás-betegség, cukorbetegség',
    },
    {
      Sorszám: 1047,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'orbánc, magasvérnyomás-betegség, szívbetegség',
    },
    {
      Sorszám: 1046,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'magasvérnyomás-betegség, demencia, fekélyes vastagbélgyulladás',
    },
    {
      Sorszám: 1045,
      Nem: 'Nő',
      Kor: 60,
      Alapbetegségek:
        'heveny veseelégtelenség, májelégtelenség, epilepszia, végtagfekély',
    },
    {
      Sorszám: 1044,
      Nem: 'Nő',
      Kor: 62,
      Alapbetegségek:
        'tüdőgyulladás, magasvérnyomás-betegség, szívbetegség, parkinson-kór, demencia',
    },
    {
      Sorszám: 1043,
      Nem: 'Férfi',
      Kor: 97,
      Alapbetegségek:
        'általános érelmeszesedés, légzési és keringési elégtelenség, vérszegénység, demencia',
    },
    {
      Sorszám: 1042,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek:
        'demencia, magasvérnyomás-betegség, szívbetegség, légzési és keringési elégtelenség',
    },
    {
      Sorszám: 1041,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'magasvérnyomás-betegség, tüdőgyulladás',
    },
    {
      Sorszám: 1040,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'kiszáradás, veseelégtelenség, cukorbetegség',
    },
    {
      Sorszám: 1039,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek:
        'szívbetegség, érelmeszesedés, magasvérnyomás-betegség, krónikus veseelégtelenség, agyi infarktus',
    },
    {
      Sorszám: 1038,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'nem ismert',
    },
    {
      Sorszám: 1037,
      Nem: 'Nő',
      Kor: 60,
      Alapbetegségek: 'vírusos tüdőgyulladás, idült tüdőbetegség',
    },
    {
      Sorszám: 1036,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'vérszegénység, magas vérnyomás',
    },
    {
      Sorszám: 1035,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek:
        'tüdőgyulladás, szívmegállás, pangásos szívelégtelenség, magasvérnyomás-betegség, cukorbetegség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 1034,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek:
        'cukorbetegség, szívritmuszavar, magas vérnyomás betegség, húgyhólyag daganat',
    },
    {
      Sorszám: 1033,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek: 'magas vérnyomás, krónikus veseelégtelenség',
    },
    {
      Sorszám: 1032,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'magas vérnyomás, szívbetegség',
    },
    {
      Sorszám: 1031,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'magas vérnyomás, pajzsmirigy túlműködés, tüdőgyulladás',
    },
    {
      Sorszám: 1030,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 1029,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek: 'pajzsmirigy alulműködés, szívritmuszavar',
    },
    {
      Sorszám: 1028,
      Nem: 'Nő',
      Kor: 71,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 1027,
      Nem: 'Nő',
      Kor: 62,
      Alapbetegségek: 'hasnyálmirigyrák májáttétel',
    },
    {
      Sorszám: 1026,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek: 'magas vérnyomás, demencia, szívbetegség',
    },
    {
      Sorszám: 1025,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek: 'magas vérnyomás, idült légzési elégtelenség',
    },
    {
      Sorszám: 1024,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'magas vérnyomás, tüdőbetegség, demencia',
    },
    {
      Sorszám: 1023,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'lezajlott szívinfarktus',
    },
    {
      Sorszám: 1022,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'szívbetegség, érszűkület,agyi infarktus, demencia',
    },
    {
      Sorszám: 1021,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek:
        'vese rosszindulatú daganata máj és tüdő áttéttel, szívbetegség, kóros soványság',
    },
    {
      Sorszám: 1020,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek:
        'idült obstruktív tüdőbetegség heveny fellánggolással, szívelégtelenség, krónikus veseelégtelenség, Parkinson-kór',
    },
    {
      Sorszám: 1019,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek:
        'idült obstruktív tüdőbetegség, krónikus hörghurut, magasvérnyomás-betegség, demencia',
    },
    {
      Sorszám: 1018,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek: 'magasvérnyomás-betegség',
    },
    {
      Sorszám: 1017,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'magasvérnyomás-betegség, Alzheimer-kór, légzési elégtelenség, szívelégtelenség',
    },
    {
      Sorszám: 1016,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek:
        'tüdőgyulladás, magasvérnyomás-betegség, nem-meghatározott demencia, prosztata túltengés',
    },
    {
      Sorszám: 1015,
      Nem: 'Nő',
      Kor: 73,
      Alapbetegségek:
        'baktérium okozta fertőzés, tüdőgyulladás, krónikus veseelégtelenség, keringési elégtelenség',
    },
    {
      Sorszám: 1014,
      Nem: 'Férfi',
      Kor: 92,
      Alapbetegségek:
        'magas vérnyomás betegség, prosztata jóindulatú daganata, rekeszsérv, nem-meghatározott demencia',
    },
    {
      Sorszám: 1013,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'rekeszsérv, reflux, tüdőtágulat, Alzheimer-kór',
    },
    {
      Sorszám: 1012,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek: 'magas vérnyomás, reflux, arcizombénulás',
    },
    {
      Sorszám: 1011,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek:
        'idült obstruktív tüdőbetegség, krónikus veseelégtelenség, szívelégtelenség',
    },
    {
      Sorszám: 1010,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'magas vérnyomás, tüdőgyulladás, szívritmuszavar',
    },
    {
      Sorszám: 1009,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'demencia, tüdőgyulladás, Parkinson-kór',
    },
    {
      Sorszám: 1008,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 1007,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek:
        'magas vérnyomás, csontritkulás, Parkinson-kór, Alzheimer-kór',
    },
    {
      Sorszám: 1006,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek: 'magasvérnyomás-betegség, érelmeszesedés, tüdőgyulladás',
    },
    {
      Sorszám: 1005,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek:
        'krónikus veseelégtelenség, általános érelmeszesedés, ischaemiás szívbetegség, magasvérnyomás-betegség, szívritmuszavar, kóros soványság, kiszáradás',
    },
    {
      Sorszám: 1004,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'magas vérnyomás, prosztata-megnagyobbodás, zöldhályog',
    },
    {
      Sorszám: 1003,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek: 'magasvérnyomás-betegség, szívelégtelenség',
    },
    {
      Sorszám: 1002,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'vírusos tüdőgyulladás, idült obstruktív tüdőbetegség, Parkinson-kór, pitvarfibrilláció, általánosult érelmeszesedés',
    },
    {
      Sorszám: 1001,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek:
        'vírusos tüdőgyulladás, krónikus veseelégtelenség, pitvarfibrilláció, szívinfarktus utáni állapot, agyi infarktus utáni állapot, általánosult érelmeszesedés',
    },
    {
      Sorszám: 1000,
      Nem: 'Nő',
      Kor: 66,
      Alapbetegségek:
        'hörgő- és tüdő átfedő daganata áttétekkel, légzési elégtelenség, magas vérnyomás, nem inzulin-dependens cukorbetegség, általánosult érelmeszesedés',
    },
    {
      Sorszám: 999,
      Nem: 'Férfi',
      Kor: 94,
      Alapbetegségek:
        'krónikus veseelégtelenség, érelmeszesedés, kevert organikus psychoszindróma',
    },
    {
      Sorszám: 998,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek:
        'szívkoszorúér-elzáródás, szívműködés zavar, demencia, magas vérnyomás, csontritkulás',
    },
    {
      Sorszám: 997,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'Alzheimer-kór',
    },
    {
      Sorszám: 996,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 995,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'tüdőgyulladás, emlőtumor, magas vérnyomás',
    },
    {
      Sorszám: 994,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek:
        'szívelégtelenség, magas vérnyomás, demencia, csontritkulás',
    },
    {
      Sorszám: 993,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek: 'magas vérnyomás, köszvény',
    },
    {
      Sorszám: 992,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'jelenleg nincs adat',
    },
    {
      Sorszám: 991,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'szívelégtelenség',
    },
    {
      Sorszám: 990,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, gyomorhurut',
    },
    {
      Sorszám: 989,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 988,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'hólyagtumor, veseelégtelenség, cukorbetegség, magas vérnyomás',
    },
    {
      Sorszám: 987,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek: 'magas vérnyomás, agysorvadás',
    },
    {
      Sorszám: 986,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'jelenleg nincs adat',
    },
    {
      Sorszám: 985,
      Nem: 'Férfi',
      Kor: 83,
      Alapbetegségek: 'demencia',
    },
    {
      Sorszám: 984,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek: 'jelenleg nincs adat',
    },
    {
      Sorszám: 983,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek: 'szívelégtelenség',
    },
    {
      Sorszám: 982,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'rekeszsérv',
    },
    {
      Sorszám: 981,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek: 'vérszegénység, májzsugorodás',
    },
    {
      Sorszám: 980,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás',
    },
    {
      Sorszám: 979,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek:
        'érelmeszesedés, cukorbetegség, gyomorfekély, magas vérnyomás',
    },
    {
      Sorszám: 978,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'magas vérnyomás, szívelégtelenség, veseelégtelenség, demencia, érelmeszesedés',
    },
    {
      Sorszám: 977,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek: 'izomsorvadás',
    },
    {
      Sorszám: 976,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'krónikus veseelégtelenség, gyomorfekély, szívbetegség, cukorbetegség',
    },
    {
      Sorszám: 975,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'autoimmun pajzsmirigybetegség',
    },
    {
      Sorszám: 974,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 973,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek: 'autoimmun pajzsmirigybetegség',
    },
    {
      Sorszám: 972,
      Nem: 'Férfi',
      Kor: 55,
      Alapbetegségek: 'magas vérnyomás, szívbetegség, cukorbetegség',
    },
    {
      Sorszám: 971,
      Nem: 'Nő',
      Kor: 71,
      Alapbetegségek: 'magas vérnyomás, szívizomelégtelenség, csontritkulás',
    },
    {
      Sorszám: 970,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'pajzsmirigy alulműködés',
    },
    {
      Sorszám: 969,
      Nem: 'Nő',
      Kor: 61,
      Alapbetegségek: 'magas vérnyomás, pajzsmirigy alulműködés',
    },
    {
      Sorszám: 968,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'magas vérnyomás, tüdőgyulladás',
    },
    {
      Sorszám: 967,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek:
        'szívizom elégtelen vérellátása, magas vérnyomás, csontritkulás',
    },
    {
      Sorszám: 966,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek: 'pajzsmirigy betegség',
    },
    {
      Sorszám: 965,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'prosztata rendellenesség, magas vérnyomás',
    },
    {
      Sorszám: 964,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek:
        'magas vérnyomás, pangásos szívelégtelenség, stroke, prosztata rendellenesség',
    },
    {
      Sorszám: 963,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek:
        'magas vérnyomás, szívizom elégtelen vérellátása, végstádiumú veseelégtelenség, depresszió, szívizomsejt-elhalás',
    },
    {
      Sorszám: 962,
      Nem: 'Nő',
      Kor: 61,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 961,
      Nem: 'Férfi',
      Kor: 63,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás, köszvény',
    },
    {
      Sorszám: 960,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek:
        'szívizom elégtelen vérellátása, magas vérnyomás, aorta szűkület, műbillentyű',
    },
    {
      Sorszám: 959,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'magas vérnyomás, szívizom elégtelen vérellátása, végstádiumú veseelégtelenség, depresszió, szívizomsejt-elhalás',
    },
    {
      Sorszám: 958,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'idült légzési elégtelenség, szívelégtelenség, érelmeszesedés, krónikus vese elégtelenség',
    },
    {
      Sorszám: 957,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek: 'tüdőgyulladás',
    },
    {
      Sorszám: 956,
      Nem: 'Férfi',
      Kor: 55,
      Alapbetegségek: 'magas vérnyomás, demencia',
    },
    //TODO:
    {
      Sorszám: 955,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'tüdőhegedés, szívizom elégtelen vérellátása',
    },
    {
      Sorszám: 954,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'Bélelzáródás, demencia, hashártya összenövés',
    },
    {
      Sorszám: 953,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'Magas vérnyomás, fiatalkori cukorbetegség, iszkémiás szívbetegség, elhízás',
    },
    {
      Sorszám: 952,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek:
        'Magas vérnyomás, hörgőasztma, COPD, pulmonális embólia, érbetegség',
    },
    {
      Sorszám: 951,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek:
        'Magas vérnyomás, iszkémiás szívbetegség, cukorbetegség, pajzsmirigy alulműködés, többszörös idegkárosodás',
    },
    {
      Sorszám: 950,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek:
        'Tüdőgyulladás,  hörgőasztma., magas vérnyomás, cukorbetegség, reuma, pajzsmirigy alulműködés',
    },
    {
      Sorszám: 949,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'Magas vérnyomás betegség, krónikus veseelégtelenség, elhízás, agyi infarktus, érszűkület, hasfali sérv',
    },
    {
      Sorszám: 948,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek: 'Magas vérnyomás, extrém elhízás, COPD',
    },
    {
      Sorszám: 947,
      Nem: 'Nő',
      Kor: 96,
      Alapbetegségek: 'Magas-vérnyomás betegség, COPD, szívelégtelenség',
    },
    {
      Sorszám: 946,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'Magas vérnyomás., Alzheimer-kór',
    },
    {
      Sorszám: 945,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'Magas vérnyomás, veseelégtelenség',
    },
    {
      Sorszám: 944,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek: 'Iszkémiás szívbetegség, végbél daganat',
    },
    {
      Sorszám: 943,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'Magas-vérnyomás betegség, demencia, cukorbetegség',
    },
    {
      Sorszám: 942,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek: 'Magas-vérnyomás betegség, iszkémiás szívbetegség',
    },
    {
      Sorszám: 941,
      Nem: 'Férfi',
      Kor: 43,
      Alapbetegségek: 'Tüdőnagyobbodás, jobb oldali tüdőtályog, lépnagyobbodás',
    },
    {
      Sorszám: 940,
      Nem: 'Férfi',
      Kor: 63,
      Alapbetegségek: 'Szívelégtelenség, inzulin-dependens cukorbetegség',
    },
    {
      Sorszám: 939,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek: 'Szívritmus zavar',
    },
    {
      Sorszám: 938,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek: 'Tüdődaganat, mellhártya daganat',
    },
    {
      Sorszám: 937,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek: 'Magas vérnyomás, tüdőtágulat, csontritkulás',
    },
    {
      Sorszám: 936,
      Nem: 'Férfi',
      Kor: 94,
      Alapbetegségek:
        'Eltávolított epehólyag, iszkémiás szívbetegség, szívritmuszavar',
    },
    {
      Sorszám: 935,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'Agyi érszűkület, iszkémiás szívbetegség',
    },
    {
      Sorszám: 934,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek: 'Magas vérnyomás, leukémia, stroke, cukorbetegség',
    },
    {
      Sorszám: 933,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'végbéldaganat,máj és tüdő metastasis, prosztatadaganat',
    },
    {
      Sorszám: 932,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, általános érelmeszesedés, pangásos szívelégtelenség, szívinfarktus, vascularis demencia',
    },
    {
      Sorszám: 931,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, általános érelmeszesedés, vascularis encephalopathia',
    },
    {
      Sorszám: 930,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'magas vérnyomás pitvarfibrilláció, szívelégtelenség',
    },
    {
      Sorszám: 929,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'övsömör, magas vérnyomás, cukorbetegség,  osteoporosis',
    },
    {
      Sorszám: 928,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'magas vérnyomás, krónikus obstuktív tüdőbetegség, polyneuropathia,  kevert hyperlipidaemia,  érelmeszesedéses szívbetegség,  pitvari fibrilláció és flutter,  ütőérszűkület',
    },
    {
      Sorszám: 927,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'krónikus obstruktív tüdőbetegség',
    },
    {
      Sorszám: 926,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'paranoid skrizofénia, krónikus obstruktív tüdőbetegség, iszkémiás szívbetegség, Parkinson-kór, mentális retardáció, depresszió',
    },
    {
      Sorszám: 925,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek:
        'magas vérnyomás, hasi sérv, cephalalgia (időskori fejfájás), kompressziós csigolyatörés, reflux',
    },
    {
      Sorszám: 924,
      Nem: 'Nő',
      Kor: 62,
      Alapbetegségek:
        'cukorbetegség, pajzsmirigybetegség, carotis meszesedés, agyi infarktus, vascularis encephalopathia, polyneuropathia, glaucoma, pikkelysömör',
    },
    {
      Sorszám: 923,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'magas vérnyomás, tüdőtumor',
    },
    {
      Sorszám: 922,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'nincs adat',
    },
    {
      Sorszám: 921,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek:
        'cukorbetegség, asztma, magas vérnyomás, retinopathia, nephropathia, polyneuropathia, uterus exstirpatio, agyi infarktus,veseelégtelenség ás számos kísérő betegség',
    },
    {
      Sorszám: 920,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 919,
      Nem: 'Férfi',
      Kor: 83,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, glaucoma',
    },
    {
      Sorszám: 918,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, demencia',
    },
    {
      Sorszám: 917,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek: 'iszkémiás szívbetegség, cukorbetegség, méhnyakrák',
    },
    {
      Sorszám: 916,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek: 'magas vérnyomás, Parkinson-kór, septicaemia',
    },
    {
      Sorszám: 915,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek:
        'magas vérnyomás, kóros elhízás, koszorúérbetegség, nephrosclerosis talaján kialakult III/B st. Uraemia',
    },
    {
      Sorszám: 914,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, krónikus vesebetegség',
    },
    {
      Sorszám: 913,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, szívelégtelenség, iszkémiás szívbetegség, szívinfarktus, szívelégtelenség, magas koleszterinszint, érelmeszesedés, Parkinson-kór, krónikus veseelégtelenség',
    },
    {
      Sorszám: 912,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'cukorbetegség',
    },
    {
      Sorszám: 911,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek:
        'tüdőgyulladás, magas vérnyomás, szív és érrendszeri megbetegedés, szívgyengeség',
    },
    {
      Sorszám: 910,
      Nem: 'Nő',
      Kor: 91,
      Alapbetegségek:
        'tüdőgyulladás, szív és érrendszeri megbetegedés, veseelégtelenség',
    },
    {
      Sorszám: 909,
      Nem: 'Férfi',
      Kor: 92,
      Alapbetegségek: 'idős korhoz társuló szívelégtelenség',
    },
    {
      Sorszám: 908,
      Nem: 'Férfi',
      Kor: 39,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 907,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek: 'tüdőgyulladás, szívelégtelenség, magas vérnyomás',
    },
    {
      Sorszám: 906,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek: 'szívelégtelenség, cukorbetegség',
    },
    {
      Sorszám: 905,
      Nem: 'Férfi',
      Kor: 57,
      Alapbetegségek: 'tüdőembólia,heveny szívbetegség',
    },
    {
      Sorszám: 904,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek:
        'magas vérnyomás, vérszegénység, veseelégtelenség, csontritkulás, aorta billentyű gyulladás',
    },
    {
      Sorszám: 903,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 902,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'hipertónia, krónikus veseelégtelenség',
    },
    {
      Sorszám: 901,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'hasnyálmirigytumor, májzsugor, pitvarfibrilláció',
    },
    {
      Sorszám: 900,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'vírusos tüdőgyulladás',
    },
    {
      Sorszám: 899,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek: 'vírusos tüdőgyulladás, stroke',
    },
    {
      Sorszám: 898,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'magasvérnyomás, demencia, stroke, tüdőgyulladás',
    },
    {
      Sorszám: 897,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'magas vérnyomás, krónikus tüdőműködési zavar(COPD)',
    },
    {
      Sorszám: 896,
      Nem: 'Férfi',
      Kor: 46,
      Alapbetegségek:
        'krónikus veseelégtelenség, veseátültetés után lévő személy',
    },
    {
      Sorszám: 895,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek:
        'asthma bronchiale, hypertonia, tüdő fibrosis, autonóm pajzsmirigy adenoma, pitvarfibrillatio',
    },
    {
      Sorszám: 894,
      Nem: 'Férfi',
      Kor: 37,
      Alapbetegségek:
        'magasvérnyomás-betegség, agyi infarktus, súlyos mentális retardáció, féloldali spasticus bénulás, veseelégtelenség',
    },
    {
      Sorszám: 893,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'magasvérnyomás, cukorbetegség',
    },
    {
      Sorszám: 892,
      Nem: 'Férfi',
      Kor: 63,
      Alapbetegségek:
        'pitvarfibrillatio, iszkémiás szívbetegség, magas vérnyomás, Mitralis és Tricuspidalis insuff',
    },
    {
      Sorszám: 891,
      Nem: 'Nő',
      Kor: 65,
      Alapbetegségek: 'Crohn-betegség, egyéb bipoláris affektív zavar',
    },
    {
      Sorszám: 890,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás, biliaris pancreatitis, cholecystitis',
    },
    {
      Sorszám: 889,
      Nem: 'Férfi',
      Kor: 92,
      Alapbetegségek:
        'pitvari fibrillatio és flutter, prosztata túltengés, általános  atherosclerosis',
    },
    {
      Sorszám: 888,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek: 'pitvarfibrilláció, érszűkület',
    },
    {
      Sorszám: 887,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'tüdőgyulladás, légzési elégtelenség',
    },
    {
      Sorszám: 886,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'légzési elégtelenség, veseelégtelenség',
    },
    {
      Sorszám: 885,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek: 'cukorbetegség, magarvérnyomás-betegség, demencia',
    },
    {
      Sorszám: 884,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek: 'leukémia',
    },
    {
      Sorszám: 883,
      Nem: 'Férfi',
      Kor: 54,
      Alapbetegségek: 'lymphoid leukémia',
    },
    {
      Sorszám: 882,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'neurofibromatozis, stroke, onkológiai GIST gondozott, GAVE',
    },
    {
      Sorszám: 881,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'nincs adat',
    },
    {
      Sorszám: 880,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, Iszkémiás szívbetegség, pitvarfibrilláció',
    },
    {
      Sorszám: 879,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, májparenchima laesio, óriássejtes arteritis, depresszió, krónikus veseelégtelenség, myelodisplasiás sy. miatti kezelés, haematológiai gondozás, hólyag tumor, radiotherápia',
    },
    {
      Sorszám: 878,
      Nem: 'Nő',
      Kor: 73,
      Alapbetegségek:
        'magas vérnyomás, II. diabetes mellitus, obesitas, alsó végtagi verőér stenosis miatti PTA, microcysta ren l.d., proteinuria miatti nephrologiai gondozás, chr.veseelégtelenség és EPO kezelés, cardialis decompensatio, 2015-ben diverticulosis, fundus polypus hyperplasticus ventriculi, regularis hemodialízis, secunder anaemia, 2019-ben pneumonia miatti kezelés, atrophia cerebri, bal oldali corona radiata állományában  vascularis laesio',
    },
    {
      Sorszám: 877,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, alzheimer demencia, cukorbetegség',
    },
    {
      Sorszám: 876,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek:
        'Akut myeloid leukémia, pitvarfibrilláció, kisagyi infarktus, generalizált artéria elmeszesedés',
    },
    {
      Sorszám: 875,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek: 'Az adat feltöltés alatt',
    },
    {
      Sorszám: 874,
      Nem: 'Nő',
      Kor: 21,
      Alapbetegségek: 'súlyos trombocitopénia, agyállományi vérzés',
    },
    {
      Sorszám: 873,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'Az adat feltöltés alatt',
    },
    {
      Sorszám: 872,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 871,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'epehólyag eltávolítás, 2-es típusú cukorbetegség, hiperkoleszterinémia, magas vérnyomás, GERD, szorongás, posterior AMI, CABG',
    },
    {
      Sorszám: 870,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'szívbillentyű elégtelensége',
    },
    {
      Sorszám: 869,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'krónikus veseelégtelenség, magas vérnyomás, elzáródással járó artéria keményedés, pitvarfibrilláció, cukorbetegség, vérszegénység, iszkémiás szívbetegség, St. p. CABG, amputáció',
    },
    {
      Sorszám: 868,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'Az adat feltöltés alatt',
    },
    {
      Sorszám: 867,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'magas vérnyomás, pitvarfibrilláció',
    },
    {
      Sorszám: 866,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'tüdőgyulladás, légzési elégtelenség, magas vérnyomás, combcsonttörés, reuma',
    },
    {
      Sorszám: 865,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás, prosztata műtét',
    },
    {
      Sorszám: 864,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, cukorbetegség, szívműködési zavar',
    },
    {
      Sorszám: 863,
      Nem: 'Férfi',
      Kor: 59,
      Alapbetegségek:
        'magas vérnyomás, kóros elhízás, cukorbetegség, krónikus tüdőműködési zavar (COPD)',
    },
    {
      Sorszám: 862,
      Nem: 'Nő',
      Kor: 59,
      Alapbetegségek: 'tüdőgyulladás, magas vérnyomás, asztma',
    },
    {
      Sorszám: 861,
      Nem: 'Nő',
      Kor: 73,
      Alapbetegségek: '1-es típusú diabétesz, iszkémiás szívbetegség, elhízás',
    },
    {
      Sorszám: 860,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek:
        'magas vérnyomás, pajzsmirigy alulműködés, pitvarfibrilláció',
    },
    {
      Sorszám: 859,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'magas vérnyomás, tüdőtágulat, szívelégtelenség, prosztata daganat',
    },
    {
      Sorszám: 858,
      Nem: 'Férfi',
      Kor: 52,
      Alapbetegségek: 'Az adat feltöltés alatt',
    },
    {
      Sorszám: 857,
      Nem: 'Nő',
      Kor: 56,
      Alapbetegségek: 'fehérvérsejt szaporulat, vérképzőszervi daganat',
    },
    {
      Sorszám: 856,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'vérszegénység, vérmérgezés, agykárosodás',
    },
    {
      Sorszám: 855,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek:
        'magas vérnyomás, érelmeszesedés, szívelégtelenség, tüdőgyulladás',
    },
    {
      Sorszám: 854,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 853,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, általános érelmeszesedés',
    },
    {
      Sorszám: 852,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek:
        'magas vérnyomás, általános érelmeszesedés, depresszió, csípőízületi kopás',
    },
    {
      Sorszám: 851,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek:
        'magas vérnyomás, általános érelmeszesedés, krónikus veseelégtelenség, inzulin-dependens cukorbetegség veseszövődményekkel',
    },
    {
      Sorszám: 850,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'érelmeszesedés, magas vérnyomás, iszkémiás szívbetegség',
    },
    {
      Sorszám: 849,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek: 'magas vérnyomás, toxikus májbetegség',
    },
    {
      Sorszám: 848,
      Nem: 'Férfi',
      Kor: 53,
      Alapbetegségek:
        'cukorbetegség, alkoholos májbetegség, krónikus szívbetegség, érelmeszesedés',
    },
    {
      Sorszám: 847,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek:
        'időskori elbutulás, magas vérnyomás, cukorbetegség, agyvérzés utáni állapot',
    },
    {
      Sorszám: 846,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek:
        'magas vérnyomás, légzési elégtelenség, bőrrák, szívritmuszavar',
    },
    {
      Sorszám: 845,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek:
        'magas vérnyomás, szívritmuszavar, idült tüdőtágulat, légúti szűkület',
    },
    {
      Sorszám: 844,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'idült iszkémiás szívbetegség, aggkori agyi elfajulás, szívritmuszavar, vastagbél tágulat',
    },
    {
      Sorszám: 843,
      Nem: 'Férfi',
      Kor: 92,
      Alapbetegségek: 'magas vérnyomás, pangásos szívelégtelenség',
    },
    {
      Sorszám: 842,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'krónikus tüdőbetegség, vérszegénység',
    },
    {
      Sorszám: 841,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, szívelégtelenség, állandósult pitvarfibrilláció',
    },
    {
      Sorszám: 840,
      Nem: 'Férfi',
      Kor: 44,
      Alapbetegségek: 'jelenleg nincs krónikus alapbetegségről adat',
    },
    {
      Sorszám: 839,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, rákos folyamat, áttétek a mellnyálkahártyában',
    },
    {
      Sorszám: 838,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek:
        'krónikus veseelégtelenség, cukorbetegség, pajzsmirigy alul működés',
    },
    {
      Sorszám: 837,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek:
        'mentális retardáció, cukorbetegség, epilepszia, iszkémiás szívbetegség',
    },
    {
      Sorszám: 836,
      Nem: 'Nő',
      Kor: 66,
      Alapbetegségek:
        'magas vérnyomás, alkalmazkodási zavar, 2-es típusú cukorbetegség, epilepszia, iszkémiás szívbetegség, régi szívizomelhalás, ritmusszabályzóval élő személy',
    },
    {
      Sorszám: 835,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek:
        'magas vérnyomás, agyi infarktus következményei, pangásos szívelégtelenség',
    },
    {
      Sorszám: 834,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek:
        'magas vérnyomás, enteritis (bélhurut) , szívizom-fibrállás, általános érelmeszesedés',
    },
    {
      Sorszám: 833,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek: 'Pitvarfibrilláció, magas vérnyomás',
    },
    {
      Sorszám: 832,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'Parox pitvarfibrilláció,  diszlipidémia',
    },
    {
      Sorszám: 831,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek: 'magas vérnyomás, szívizom gyulladás',
    },
    {
      Sorszám: 830,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek: 'magas vérnyomás, göbös pajzsmirigy',
    },
    {
      Sorszám: 829,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'magas vérnyomás, vastagbél rosszindulatú daganata, agyi infarktus',
    },
    {
      Sorszám: 828,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek: 'Adat feltöltés alatt',
    },
    {
      Sorszám: 827,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek:
        'cukorbetegség, magas vérnyomás, koszorúér betegség, szívelégtelenség, vérszegénység',
    },
    {
      Sorszám: 826,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek:
        'vírusos tüdőgyulladás, iszkémiás szívbetegség, szívritmuszavar, magas vérnyomás, cukorbetegség, szívinfarktus utáni állapot',
    },
    {
      Sorszám: 825,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek: 'COPD, magas vérnyomás, pitvarfibrilláció',
    },
    {
      Sorszám: 824,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek:
        'légzési rendellenesség, heveny veseelégtelenség, felnőttkori légzési distress szindróma',
    },
    {
      Sorszám: 823,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'magas vérnyomás, elhízás, nyaki verőér szűkület, stent trombózis',
    },
    {
      Sorszám: 822,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'az adat feltöltés alatt',
    },
    {
      Sorszám: 821,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'kóros elhízás, iszkémiás szívbetegség, magas vérnyomás',
    },
    {
      Sorszám: 820,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek: 'krónikus veseelégtelenség, magas vérnyomás, COPD',
    },
    {
      Sorszám: 819,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, csontritkulás, gerinc meszesedés',
    },
    {
      Sorszám: 818,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek: 'szívbillentyű gyulladás, stroke',
    },
    {
      Sorszám: 817,
      Nem: 'Férfi',
      Kor: 70,
      Alapbetegségek:
        'tüdőrák, cukorbetegség, szív- és érrendszeri megbetegedés',
    },
    {
      Sorszám: 816,
      Nem: 'Nő',
      Kor: 80,
      Alapbetegségek: 'veseelégtelenség, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 815,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'szívizomgyengeség, magas vérnyomás',
    },
    {
      Sorszám: 814,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'kóros elhízás, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 813,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'magas vérnyomás, reflux',
    },
    {
      Sorszám: 812,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek: 'magas vérnyomás, gerincferdülés',
    },
    {
      Sorszám: 811,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek: 'magas vérnyomás, májelégtelenség',
    },
    {
      Sorszám: 810,
      Nem: 'Férfi',
      Kor: 61,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 809,
      Nem: 'Nő',
      Kor: 65,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, vérszegénység, bélelzáródás',
    },
    {
      Sorszám: 808,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek: 'diabétesz, magas vérnyomás, érelmeszesedés, nyelészavar',
    },
    {
      Sorszám: 807,
      Nem: 'Nő',
      Kor: 56,
      Alapbetegségek: 'diabétesz',
    },
    {
      Sorszám: 806,
      Nem: 'Nő',
      Kor: 72,
      Alapbetegségek: 'magas vérnyomás, diabétesz',
    },
    {
      Sorszám: 805,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'magas vérnyomás, diabétesz',
    },
    {
      Sorszám: 804,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 803,
      Nem: 'Férfi',
      Kor: 55,
      Alapbetegségek: 'kisfejűség, epilepszia, mentális retardáció',
    },
    {
      Sorszám: 802,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'combnyaktörés, magas vérnyomás,cukorbetegség, tüdőtágulat, iszkémiás szívbetegség',
    },
    {
      Sorszám: 801,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek:
        'cukorbetegség, súlyos demencia, paranoid zavar, csigolyatörés',
    },
    {
      Sorszám: 800,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek: 'demencia, Parkinson kór, prosztata megnagyobbodás',
    },
    {
      Sorszám: 799,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'magas vérnyomás, szívritmuszavar, érelmeszesedés, mélyvénás trombózis, melanoma, iszkémiás szívbetegség',
    },
    {
      Sorszám: 798,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 797,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'magas vérnyomás, asthma, cukorbetegség',
    },
    {
      Sorszám: 796,
      Nem: 'Nő',
      Kor: 96,
      Alapbetegségek: 'veseelégtelenség, magas vérnyomás',
    },
    {
      Sorszám: 795,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek:
        'magas vérnyomás, pajzsmirigy alulműködés, mozgásszervi panaszok, alvászavar',
    },
    {
      Sorszám: 794,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, zsákvese, pitvarfibrilláció, középső agyi artériás stroke',
    },
    {
      Sorszám: 793,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'Az adat feltöltés alatt',
    },
    {
      Sorszám: 792,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek: 'gasztrointesztinális vérzés',
    },
    {
      Sorszám: 791,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek: 'kiterjedt jobb féltekei stroke',
    },
    {
      Sorszám: 790,
      Nem: 'Nő',
      Kor: 95,
      Alapbetegségek: 'általános érelmeszesedés, vese elégtelenség',
    },
    {
      Sorszám: 789,
      Nem: 'Nő',
      Kor: 72,
      Alapbetegségek:
        'magas vérnyomás, idült pajzsmirigy gyulladás, refluxbetegség, csigolyatörés',
    },
    {
      Sorszám: 788,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek:
        'magas vérnyomás, idült iszkémiás szívbetegség, idült hasnyálmirigy-gyulladás',
    },
    {
      Sorszám: 787,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 786,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek: 'magas vérnyomás, szívelégtelenség',
    },
    {
      Sorszám: 785,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás, agyi infarktus, tüdőgyulladás',
    },
    {
      Sorszám: 784,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 783,
      Nem: 'Nő',
      Kor: 61,
      Alapbetegségek:
        'magas vérnyomás, COPD, cukorbetegség, mellitus, 1 éve krónikus veseelégtelenség',
    },
    {
      Sorszám: 782,
      Nem: 'Férfi',
      Kor: 57,
      Alapbetegségek: 'cukorbetegség, magasvérnyomás-betegség, agyi infarktus',
    },
    {
      Sorszám: 781,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'magas vérnyomás, demencia, artériás értágulat, nyelőcső reflux',
    },
    {
      Sorszám: 780,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'magas vérnyomás, demencia, az aorta (billentyű) szűkülete, öregkori szürkehályog, vastagbél diverticulosis, átfúródás vagy tályog nélkül',
    },
    {
      Sorszám: 779,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 778,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek: 'légzési elégtelenség, vírusos tüdőgyulladás',
    },
    {
      Sorszám: 777,
      Nem: 'Nő',
      Kor: 74,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 776,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'melanoma (bőrdaganat)',
    },
    {
      Sorszám: 775,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'mellrák',
    },
    {
      Sorszám: 774,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek:
        'Magasvérnyomás, cukorbetegség, Parkinson-kór, aranyér, és egyéb krónikus betegségek',
    },
    {
      Sorszám: 773,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'artéria (verőér) betegsége, koszorúverőr-betegségek, egyéb krónikus betegségek',
    },
    {
      Sorszám: 772,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek:
        'krónikus obstruktív tüdőbetegség, tüdő tályog, tüdőembólia, magas vérnyomás, alsó végtagi  verőérszűkület, hasi aorta aneurysmája.',
    },
    {
      Sorszám: 771,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek:
        'Magas vérnyomás, szívelégtelenség, cukorbetegség és egyéb krónikus betegségek',
    },
    {
      Sorszám: 770,
      Nem: 'Férfi',
      Kor: 48,
      Alapbetegségek: 'agydaganat, epilepszia',
    },
    {
      Sorszám: 769,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, veseelégtelenség, jóindulatú prosztata megnagyobbodás',
    },
    {
      Sorszám: 768,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek: 'szívritmuszavar',
    },
    {
      Sorszám: 767,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'Szívelégtelenség, iszkémiás szívbetegség,  magas vérnyomás,  krónikus obstruktív tüdőbetegség, encephalopathia (agyi működés zavar)',
    },
    {
      Sorszám: 766,
      Nem: 'Férfi',
      Kor: 44,
      Alapbetegségek:
        'Magas vérnyomás,májzsugor, encephalopathia (agyi működés zavara) anémia (vérszegénység) és egyéb betegségek',
    },
    {
      Sorszám: 765,
      Nem: 'Nő',
      Kor: 73,
      Alapbetegségek:
        'krónikus veseelégtelenség, vírusos tüdőgyulladás, pajzsmirigy-túlműködés',
    },
    {
      Sorszám: 764,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'krónikus veseelégtelenség, COPD, régi szívinfarktus, szívelégtelenség',
    },
    {
      Sorszám: 763,
      Nem: 'Férfi',
      Kor: 54,
      Alapbetegségek:
        'mentális retardáció, cukorbetegség, epilepszia, iszkémiás szívbetegség (koszorúér-betegség)',
    },
    {
      Sorszám: 762,
      Nem: 'Nő',
      Kor: 55,
      Alapbetegségek: 'magas vérnyomás, petefészek tumor',
    },
    {
      Sorszám: 761,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek:
        'magas vérnyomás, stroke, prosztata rosszindulatú daganata',
    },
    {
      Sorszám: 760,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'Az adat feltöltés alatt (jelenleg nincs információ krónikus alapbetegségről)',
    },
    {
      Sorszám: 759,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'magas vérnyomás, parkinson betegség, véralvadási defektus',
    },
    {
      Sorszám: 758,
      Nem: 'Férfi',
      Kor: 61,
      Alapbetegségek:
        'epilepszia, magas vérnyomás, cukorbetegség, kóros vérzsírszint',
    },
    {
      Sorszám: 757,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, tüdőelégtelenség',
    },
    {
      Sorszám: 756,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek:
        'magas vérnyomás, érelmeszesedés, májmegnagyobbodás, májbetegség, hasnyálmirigy gyulladás, cukorbetegség, ízületi gyulladás',
    },
    {
      Sorszám: 755,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'demencia, érelmeszesedés',
    },
    {
      Sorszám: 754,
      Nem: 'Nő',
      Kor: 69,
      Alapbetegségek:
        'heveny légzési elégtelenség, magasvérnyomás-betegség, vérszegénység',
    },
    {
      Sorszám: 753,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek:
        'magasvérnyomás-betegség, cukorbetegség, pitvarfibrilláció',
    },
    {
      Sorszám: 752,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'szív-érrendszeri betegség, daganatos betegség',
    },
    {
      Sorszám: 751,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek:
        'Veseelégtelenség, cukorbetegség, magasvérnyomás-betegség, hashártyagyulladás',
    },
    {
      Sorszám: 750,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek: 'Az adat feltöltés alatt',
    },
    {
      Sorszám: 749,
      Nem: 'Férfi',
      Kor: 89,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 748,
      Nem: 'Nő',
      Kor: 65,
      Alapbetegségek: 'nem ismert',
    },
    {
      Sorszám: 747,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás, koszorúér elmeszesedés',
    },
    {
      Sorszám: 746,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek:
        'magas vérnyomás, szívizombántalom, pitvarfibrilláció, oxigénhiányos szívbetegség, veseelégtelenség, szívinfarktus utáni állapot',
    },
    {
      Sorszám: 745,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek: 'isémiás szívbetegség, szívfibrilláció',
    },
    {
      Sorszám: 744,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 743,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek:
        'veseelégtelenség, szívelégtelenség, időskori elbutulás, szívritmuszavar, magas vérnyomás, vérszegénység',
    },
    {
      Sorszám: 742,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek:
        'magas vérnyomás, magas vérnyomáson alapuló szívbetegség, Parkinson-kór',
    },
    {
      Sorszám: 741,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás, tüdőgyulladás',
    },
    {
      Sorszám: 740,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek:
        'érelmeszesedés, magas vérnyomás, központi idegrendszeri működési zavar',
    },
    {
      Sorszám: 739,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás, immunhiányos állapot',
    },
    {
      Sorszám: 738,
      Nem: 'Férfi',
      Kor: 54,
      Alapbetegségek: 'non-Hodgkin limfóma, krónikus vesebetegség',
    },
    {
      Sorszám: 737,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'Nem ismert',
    },
    {
      Sorszám: 736,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek: 'Epehólyag rosszindulatú daganat, cukorbetegség',
    },
    {
      Sorszám: 735,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek:
        'Általános érelmeszesedés,agykéreg sorvadás, magas vérnyomás, depresszió, szívinfarktus',
    },
    {
      Sorszám: 734,
      Nem: 'Férfi',
      Kor: 92,
      Alapbetegségek: 'Parkinson-kór, agyérelmeszesedés, magas vérnyomás',
    },
    {
      Sorszám: 733,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek: 'magas vérnyomás, vesekárosodás',
    },
    {
      Sorszám: 732,
      Nem: 'Férfi',
      Kor: 70,
      Alapbetegségek: 'pajzsmirigy alulműködés, prosztatagyulladás',
    },
    {
      Sorszám: 731,
      Nem: 'Férfi',
      Kor: 30,
      Alapbetegségek: 'szívbillentyű elégtelenség',
    },
    {
      Sorszám: 730,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek: 'krónikus veseelégtelenség, szívbetegség',
    },
    {
      Sorszám: 729,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek:
        'magas vérnyomás, légzési elégtelenség, érelmeszesedés, májmegnagyobbodás, szívbetegség',
    },
    {
      Sorszám: 728,
      Nem: 'Férfi',
      Kor: 75,
      Alapbetegségek:
        'magas vérnyomás, érelmeszesedés, májmegnagyobbodás, májbetegség, hasnyálmirigy gyulladás, cukorbetegség, ízületi gyulladás',
    },
    {
      Sorszám: 727,
      Nem: 'Nő',
      Kor: 84,
      Alapbetegségek: 'demencia, érelmeszesedés',
    },
    {
      Sorszám: 726,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek:
        'asthma, szénanátha, bőrrák, magas vérnyomás, csontvelőrák',
    },
    {
      Sorszám: 725,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, krónikus veseelégtelenség, szívelégtelenség, szívritmuszavar',
    },
    {
      Sorszám: 724,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek:
        'magas vérnyomás, szívritmus zavar, többszervi elégtelenség',
    },
    {
      Sorszám: 723,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek:
        'magas vérnyomás, krónikus veseelégtelenség, cukorbetegség',
    },
    {
      Sorszám: 722,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'magas vérnyomás, epilepsia',
    },
    {
      Sorszám: 721,
      Nem: 'Férfi',
      Kor: 52,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 720,
      Nem: 'Férfi',
      Kor: 47,
      Alapbetegségek: 'Az adat feltöltés alatt',
    },
    {
      Sorszám: 719,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek:
        'magas vérnyomás, Ischaemiás szívbetegség, koszorúér szűkület, szívinfarktus',
    },
    {
      Sorszám: 718,
      Nem: 'Férfi',
      Kor: 83,
      Alapbetegségek: 'Prosztata daganat, Parkinson-kór, magasvérnyomás',
    },
    {
      Sorszám: 717,
      Nem: 'Nő',
      Kor: 71,
      Alapbetegségek:
        'Hipertónia, iszkémiás szívbetegség, III fokú AV blokk, Krónikus veseelégtelenség',
    },
    {
      Sorszám: 716,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'vastagbélrák',
    },
    {
      Sorszám: 715,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek: 'magasvérnyomás, nyelőcsővisszér, hasvízkór',
    },
    {
      Sorszám: 714,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek:
        'Az adat feltöltés alatt ( jelenleg nincs információ krónikus alapbetegségről)',
    },
    {
      Sorszám: 713,
      Nem: 'Férfi',
      Kor: 57,
      Alapbetegségek:
        'Az adat feltöltés alatt ( jelenleg nincs információ krónikus alapbetegségről)',
    },
    {
      Sorszám: 712,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'Magasvérnyomás-betegség, nem-insulin-dependens cukorbetegség, vérszegénység, daganatos megbetegedés',
    },
    {
      Sorszám: 711,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'vesesejtes daganat áttétekkel',
    },
    {
      Sorszám: 710,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'áttétes daganat',
    },
    {
      Sorszám: 709,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek: 'Alzheimer-kór, demencia, légmell',
    },
    {
      Sorszám: 708,
      Nem: 'Férfi',
      Kor: 76,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, aorta billentyű szűkülete',
    },
    {
      Sorszám: 707,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, akut miokardiális infarktus',
    },
    {
      Sorszám: 706,
      Nem: 'Férfi',
      Kor: 40,
      Alapbetegségek: 'trombózis, vérmérgezés',
    },
    {
      Sorszám: 705,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'magas vérnyomás, pajzsmirigy alulműködés, cukorbetegség',
    },
    {
      Sorszám: 704,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek:
        'általános izomgyengeség, krónikus légcsőhurut, magas vérnyomás',
    },
    {
      Sorszám: 703,
      Nem: 'Nő',
      Kor: 66,
      Alapbetegségek: 'tüdőgyulladás, vérmérgezés',
    },
    {
      Sorszám: 702,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek:
        'mérsékelt elhízás, 2-es típusú, inzulinnal kezelt cukorbetegség, magas vérnyomás, koszorúérbetegség',
    },
    {
      Sorszám: 701,
      Nem: 'Nő',
      Kor: 61,
      Alapbetegségek:
        'csigolyák gyermekkori csontosodási zavara, krónikus hörgőgyulladás, asztma, méh izomdaganat, magas vérnyomás, középsúlyos demencia, jobb emlő tumor',
    },
    {
      Sorszám: 700,
      Nem: 'Férfi',
      Kor: 63,
      Alapbetegségek:
        'cukorbetegség, diabéteszes neuropátia, részleges bénulás',
    },
    {
      Sorszám: 699,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek:
        'alkoholos májzsugor; nyelőcső vénatágulat vérzés nélkül; sárgaság',
    },
    {
      Sorszám: 698,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'magas vérnyomás, veseelégtelenség, végbél tályog',
    },
    {
      Sorszám: 697,
      Nem: 'Férfi',
      Kor: 48,
      Alapbetegségek:
        'vírusos tüdőgyulladás, veseelégtelenség, iszkémiás szívbetegség, infarktus utáni állapot, kóros elhízás, inzulindependens cukorbetegség',
    },
    {
      Sorszám: 696,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek:
        'magas vérnyomás, szívizomelhalás, tüdőgyulladás, cukorbetegség',
    },
    {
      Sorszám: 695,
      Nem: 'Férfi',
      Kor: 62,
      Alapbetegségek:
        'magas vérnyomás, légzési zavar, tüdőgyulladás, vese ciszta, májelégtelenség',
    },
    {
      Sorszám: 694,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, pajzsmirigy alulműködés',
    },
    {
      Sorszám: 693,
      Nem: 'Férfi',
      Kor: 94,
      Alapbetegségek: 'veseelégtelenség, magas vérnyomás, agyi infarktus',
    },
    {
      Sorszám: 692,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, tüdőgyulladás, vérmérgezés',
    },
    {
      Sorszám: 691,
      Nem: 'Férfi',
      Kor: 51,
      Alapbetegségek: 'cukorbetegség, kóros elhízás',
    },
    {
      Sorszám: 690,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek: 'magasvérnyomás, nyombélfekély',
    },
    {
      Sorszám: 689,
      Nem: 'Nő',
      Kor: 37,
      Alapbetegségek: 'akut leukémia',
    },
    {
      Sorszám: 688,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'magasvérnyomás, krónikus hörgőgyulladás',
    },
    {
      Sorszám: 687,
      Nem: 'Férfi',
      Kor: 54,
      Alapbetegségek: 'magasvérnyomás, cukorbetegség',
    },
    {
      Sorszám: 686,
      Nem: 'Férfi',
      Kor: 58,
      Alapbetegségek:
        'magas vérnyomás, Inzulin-dependens cukorbetegség, vírusos tüdőgyulladás',
    },
    {
      Sorszám: 685,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 684,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek: 'pitvarfibrilláció - szívritmuszavar',
    },

    {
      Sorszám: 683,
      Nem: 'Férfi',
      Kor: 63,
      Alapbetegségek:
        'Iszkémiás szívbetegség, dilatativ cardiomiopathia, cardialis decompensatio, szívritmusszabályozóval élő személy, pitvarfibrilláció, koszorúérbe vagy helyére beépített implantátum jelenléte, Generaizált érbetegség, Diabetes Mellitus, Mindkét láb amputáció utáni állapota',
    },
    {
      Sorszám: 682,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek:
        'Iszkémiás szívbetegség, aorta vitium, magas vérmyomás, NIDDM',
    },
    {
      Sorszám: 681,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek:
        'Az adat feltöltés alatt ( jelenleg nincs információ krónikus alapbetegségről).',
    },
    {
      Sorszám: 680,
      Nem: 'Férfi',
      Kor: 83,
      Alapbetegségek:
        'Iszkémiás szívbetegség, magas vérnyomás, TIA, cukorbetegség, AMI, Hyperlipideamia,  Parkinson-kór',
    },
    {
      Sorszám: 679,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'alkohol függőség, Subduralis empyema',
    },
    {
      Sorszám: 678,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek:
        'Az adat feltöltés alatt (jelenleg nincs információ krónikus alapbetegségről)',
    },
    {
      Sorszám: 677,
      Nem: 'Nő',
      Kor: 53,
      Alapbetegségek:
        'Magas vérnyomás, cukorbetegség, Cushing kór, Thyreoiditis',
    },
    {
      Sorszám: 676,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek:
        'Magas vérnyomás, cukorbetegség, hyperlipidaemia, inferior AMI, JTSZB, irritábilis bél syndroma, vascularis enchephalopathia, tonsillectomia, cholecystectomia, porckorongsérv miatt op., alvási apnoe',
    },
    {
      Sorszám: 675,
      Nem: 'Nő',
      Kor: 70,
      Alapbetegségek: 'szívelégtelenség, cukorbetegség',
    },
    {
      Sorszám: 674,
      Nem: 'Nő',
      Kor: 73,
      Alapbetegségek: 'cukorbetegség',
    },
    {
      Sorszám: 673,
      Nem: 'Nő',
      Kor: 65,
      Alapbetegségek: 'szklerózis multiplex',
    },
    {
      Sorszám: 672,
      Nem: 'Férfi',
      Kor: 55,
      Alapbetegségek:
        'keringési-, légzési elégtelenség, tüdőgyulladás, máj és vesekárosodás, szívizom károsodás, agyvelőgyulladás',
    },
    {
      Sorszám: 671,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek:
        'krónikus tüdőbetegség, veseelégtelenség, szívritmuszavar, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 670,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'végbéltumor, májelégtelenség, hólyagtumor májáttétekkel, krónikus vérszegénység, demencia',
    },
    {
      Sorszám: 669,
      Nem: 'Férfi',
      Kor: 69,
      Alapbetegségek: 'cukorbetegség, veseelégtelenség, magas vérnyomás',
    },
    {
      Sorszám: 668,
      Nem: 'Férfi',
      Kor: 87,
      Alapbetegségek:
        'magas vérnyomás, epe eltávolítás, permanens pitvarfibrilláció',
    },
    {
      Sorszám: 667,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'cukorbetegség, demencia, veseerek szűkülete, combnyaktörés utáni állapot',
    },
    {
      Sorszám: 666,
      Nem: 'Nő',
      Kor: 76,
      Alapbetegségek:
        'cukorbetegség, magas vérnyomás, szívelégtelenség, COPD, érszűkület, retinopathia, végstádiumú veseelégtelenség, pitvarfibrilláció',
    },
    {
      Sorszám: 665,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek: 'szívelégtelenség',
    },
    {
      Sorszám: 664,
      Nem: 'Férfi',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, tüdőgyulladás',
    },
    {
      Sorszám: 663,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek: 'hólyagdaganat',
    },
    {
      Sorszám: 662,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek:
        'tüdőgyulladás, stroke, magasvérnyomás-betegség, általános  atherosclerosis, idült ischaemiás szívbetegség',
    },
    {
      Sorszám: 661,
      Nem: 'Férfi',
      Kor: 86,
      Alapbetegségek: 'Parkinson-kór, cukorbetegség, aenemia',
    },
    {
      Sorszám: 660,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek:
        'magas vérnyomás betegség; krónikus veseelégtelenség; ritmusszabályzóval élő személy',
    },
    {
      Sorszám: 659,
      Nem: 'Nő',
      Kor: 72,
      Alapbetegségek: 'COPD  krónikus obtruktív tüdőbetegség',
    },
    {
      Sorszám: 658,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek: 'Alzheimer-kór, emlőrák',
    },
    {
      Sorszám: 657,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek:
        'Parkinson-kór, magas vérnyomás, csontritkulás, reflux, aorta műbillentyű',
    },
    {
      Sorszám: 656,
      Nem: 'Férfi',
      Kor: 42,
      Alapbetegségek: 'dentális eredetű fekélyes gyulladás',
    },
    {
      Sorszám: 655,
      Nem: 'Nő',
      Kor: 81,
      Alapbetegségek: 'cukorbetegség, magas vérnyomás,',
    },
    {
      Sorszám: 654,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 653,
      Nem: 'Nő',
      Kor: 71,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 652,
      Nem: 'Férfi',
      Kor: 88,
      Alapbetegségek: 'demencia',
    },
    {
      Sorszám: 651,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 650,
      Nem: 'Férfi',
      Kor: 60,
      Alapbetegségek: 'cukorbetegség',
    },
    {
      Sorszám: 649,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek:
        'pánik syndroma, depresszió és bipoláris affektív zavar, cukorbetegség, magas vérnyomás',
    },
    {
      Sorszám: 648,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek: 'agyvérzés, magas vérnyomás',
    },
    {
      Sorszám: 647,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek: 'magas vérnyomás, krónikus veseelégtelenség',
    },
    {
      Sorszám: 646,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek:
        'Vírusos tüdőgyulladás, időskori érelmeszesedés,  időskori szívizombántalom',
    },
    {
      Sorszám: 645,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'Vírusos tüdőgyulladás, légzési elégtelenség,  szívnagyobbodás',
    },
    {
      Sorszám: 644,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek: 'Cukorbetegség, depresszió, tüdőbetegség, stroke',
    },
    {
      Sorszám: 643,
      Nem: 'Nő',
      Kor: 71,
      Alapbetegségek: 'Parkinson kór, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 642,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'Magasa vérnyomás, cukorbetegség,  Insuff.ren.chr.',
    },
    {
      Sorszám: 641,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek: 'krónikus veseelégtelenség',
    },
    {
      Sorszám: 640,
      Nem: 'Férfi',
      Kor: 63,
      Alapbetegségek:
        'Tüdőgyulladás, magas vérnyomás,D.M., Insuff.ren.chr.,Aaemia sec.,Insuff.circ.,Hyperlipidaemia, Hyperuricaemia',
    },
    {
      Sorszám: 639,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek: 'Az adat feltöltés alatt',
    },
    {
      Sorszám: 638,
      Nem: 'Nő',
      Kor: 88,
      Alapbetegségek: 'magas vérnyomás, iszkémiás szívbetegség',
    },
    {
      Sorszám: 637,
      Nem: 'Férfi',
      Kor: 52,
      Alapbetegségek:
        'közepes fokú ált. érelmeszesedés, krónikus obstruktív tüdőbetegség, elhízás',
    },
    {
      Sorszám: 636,
      Nem: 'Nő',
      Kor: 67,
      Alapbetegségek:
        'nyirokcsomó rosszindulatú daganata, légzési elégtelenség, bőrrák, magas vérnyomás, szívbillentyű elégtelenség',
    },
    {
      Sorszám: 635,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek: 'szívelégtelenség, iszkémiás szívbetegség',
    },
    {
      Sorszám: 634,
      Nem: 'Nő',
      Kor: 90,
      Alapbetegségek:
        'csökkent pajzsmirigyműködés, szívritmus zavar, 1-es típusú cukorbetegség és szívelégtelenség',
    },
    {
      Sorszám: 633,
      Nem: 'Férfi',
      Kor: 70,
      Alapbetegségek: 'Heveny veseelégtelenség',
    },
    {
      Sorszám: 632,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'demencia, vaszkuláris enkefalopátia, székrekedés, magas vérnyomás, érelmeszesedés',
    },
    {
      Sorszám: 631,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek: 'pitvarfibrilláció',
    },
    {
      Sorszám: 630,
      Nem: 'Férfi',
      Kor: 84,
      Alapbetegségek: 'végbéldaganat, tüdőáttét',
    },
    {
      Sorszám: 629,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek:
        'krónikus pitvarfibrilláció, kardiális dekompenzáció, uterus térfoglalás, infektív bélgyulladás, húgyúti infekció',
    },
    {
      Sorszám: 628,
      Nem: 'Férfi',
      Kor: 72,
      Alapbetegségek:
        'tüdőbetegség, szívbillentyű elégtelenség, NYHA III-IV. DM, vesebaj, fibr, art cordis',
    },
    {
      Sorszám: 627,
      Nem: 'Férfi',
      Kor: 103,
      Alapbetegségek: 'vastagbél divertikulózis',
    },
    {
      Sorszám: 626,
      Nem: 'Férfi',
      Kor: 81,
      Alapbetegségek:
        'magas vérnyomás, szívritmuszavar, pajzsmirigy működési zavar',
    },
    {
      Sorszám: 625,
      Nem: 'Férfi',
      Kor: 58,
      Alapbetegségek:
        'gége rosszindulatú daganata, nyaki nyirokcsomó megnagyobbodás',
    },
    {
      Sorszám: 624,
      Nem: 'Férfi',
      Kor: 59,
      Alapbetegségek: 'légzési elégtelenség, tüdődaganat, agyi metatázis',
    },
    {
      Sorszám: 623,
      Nem: 'Nő',
      Kor: 92,
      Alapbetegségek:
        'magas vérnyomás, légzési és keringési elégtelenség, heveny veseelégtelenség',
    },
    {
      Sorszám: 622,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'magas vérnyomás, gerinc deformálódás, csontvelő és vérképző szervek abnormálisan működtek, krónikus veseelégtelenség',
    },
    {
      Sorszám: 621,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek:
        'epehólyagrák, magas vérnyomás, tüdőrák, gerincmeszesedés',
    },
    {
      Sorszám: 620,
      Nem: 'Nő',
      Kor: 78,
      Alapbetegségek: 'iszkémiás szívbetegség, demencia, magas vérnyomás',
    },

    {
      Sorszám: 619,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'tüdődaganat csont és máj áttétekkel, gyomorfekély',
    },
    {
      Sorszám: 618,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek:
        'magas vérnyomás, keringési elégtelenség, koleszterin betegség,érszűkület',
    },
    {
      Sorszám: 617,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'stroke, dementia, szívelégtelenség',
    },
    {
      Sorszám: 616,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: '2-es típusú cukorbetegség',
    },
    {
      Sorszám: 615,
      Nem: 'Férfi',
      Kor: 68,
      Alapbetegségek: 'alapbetegsége eddigi információk szerint nem ismert',
    },
    {
      Sorszám: 614,
      Nem: 'Nő',
      Kor: 94,
      Alapbetegségek: 'Magas vérnyomás, szívinfarktus, reflux',
    },
    {
      Sorszám: 613,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, átmeneti agyi keringészavar, tüdőembólia, pajzsmirigy alul működés',
    },
    {
      Sorszám: 612,
      Nem: 'Nő',
      Kor: 85,
      Alapbetegségek:
        'tüdőrák, heveny vese elégtelenség, vérmérgezés, koponyaűri vérzés, magas vérnyomás, vaszkuláris demencia és szívelégtelenség',
    },
    {
      Sorszám: 611,
      Nem: 'Nő',
      Kor: 83,
      Alapbetegségek: 'több szervi elégtelenség',
    },
    {
      Sorszám: 610,
      Nem: 'Férfi',
      Kor: 66,
      Alapbetegségek: 'daganat',
    },
    {
      Sorszám: 609,
      Nem: 'Férfi',
      Kor: 77,
      Alapbetegségek: 'magas vérnyomás,cukorbetegség, agysorvadás',
    },
    {
      Sorszám: 608,
      Nem: 'Férfi',
      Kor: 82,
      Alapbetegségek: 'magas vérnyomás,cukorbetegség, Alzheimer kór',
    },
    {
      Sorszám: 607,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 606,
      Nem: 'Nő',
      Kor: 82,
      Alapbetegségek:
        'magas vérnyomás, cukorbetegség, agyi infarktus, alvadási zavar, szívritmuszavar, krónikus vese elégtelenség, vérszegénység',
    },
    {
      Sorszám: 605,
      Nem: 'Férfi',
      Kor: 78,
      Alapbetegségek: 'depresszió, magas vérnyomás, I. fokú AV block',
    },
    {
      Sorszám: 604,
      Nem: 'Férfi',
      Kor: 55,
      Alapbetegségek:
        'magas vérnyomás, veseelégtelenség, cukorbetegség, iszkémiás szívbetegség, inkomplett patkóvese, jobb vese funkcionális károsodása, Bell-féle bénulás, elhízás',
    },
    {
      Sorszám: 603,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek: 'tumoros beteg',
    },
    {
      Sorszám: 602,
      Nem: 'Férfi',
      Kor: 67,
      Alapbetegségek:
        'Magas vérnyomás, iszkémiás szívbetegség, STEMI-koszorúérbetegség, húgyhólyagtumor',
    },
    {
      Sorszám: 601,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'Magas vérnyomás',
    },
    {
      Sorszám: 600,
      Nem: 'Férfi',
      Kor: 65,
      Alapbetegségek: 'COPD (krónikus obstruktív tüdőbetegség)',
    },
    {
      Sorszám: 599,
      Nem: 'Férfi',
      Kor: 85,
      Alapbetegségek: 'pangásos szívelégtelenség',
    },
    {
      Sorszám: 598,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek:
        'demencia, pajzsmirigy-alulműködés, vérszegénység, kiszáradás',
    },
    {
      Sorszám: 597,
      Nem: 'Férfi',
      Kor: 50,
      Alapbetegségek:
        'tüdő rosszindulatú daganata,  tüdőtágulat, cachexia, carcinoma neuroendocrinicum',
    },
    {
      Sorszám: 596,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, cukorbetegség, agyvérzés',
    },
    {
      Sorszám: 595,
      Nem: 'Férfi',
      Kor: 74,
      Alapbetegségek: 'pitvarfibrilláció, pangásos szívelégtelenség',
    },
    {
      Sorszám: 594,
      Nem: 'Férfi',
      Kor: 73,
      Alapbetegségek:
        'jobb láb égési sérülése utáni szeptikus állapot, magas vérnyomás, cukorbetegség',
    },
    {
      Sorszám: 593,
      Nem: 'Nő',
      Kor: 68,
      Alapbetegségek:
        'magas vérnyomás, cirrhosis hepatis, hepatitis, krónikus veseelégtelenség, haemodialysis',
    },
    {
      Sorszám: 592,
      Nem: 'Férfi',
      Kor: 83,
      Alapbetegségek:
        'AMI, magas vérnyomás, hepatitis C, inop.májkapu tumor, iszkémiás szívbetegség, decubitus, EBSL termelő E.coli fertőzés',
    },
    {
      Sorszám: 591,
      Nem: 'Nő',
      Kor: 72,
      Alapbetegségek:
        'iszkémiás szívbetegség, miokardinális infarktus, cukorbetegség, szívelégtelenség,  pitvarfibrilláció, magas vérnyomás, vesebetegség, krónikus uraemia, elhízás',
    },
    {
      Sorszám: 590,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, elhízás, vérszegénység',
    },
    {
      Sorszám: 589,
      Nem: 'Férfi',
      Kor: 51,
      Alapbetegségek: 'magas vérnyomás',
    },
    {
      Sorszám: 588,
      Nem: 'Nő',
      Kor: 72,
      Alapbetegségek:
        'szívizom elégtelenség, koszorúér keringési zavar, cukorbetegség, magas vérnyomás, krónikus veseelégtelenség, szívritmuszavar',
    },
    {
      Sorszám: 587,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'szívritmuszavar',
    },
    {
      Sorszám: 586,
      Nem: 'Férfi',
      Kor: 80,
      Alapbetegségek:
        'magas vérnyomás, vastagbélrák, szívbillentyű hibák, depresszió',
    },
    {
      Sorszám: 585,
      Nem: 'Nő',
      Kor: 87,
      Alapbetegségek:
        'hasnyálmirigy-daganat, cukorbetegség, szívelégtelenség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 584,
      Nem: 'Nő',
      Kor: 86,
      Alapbetegségek: 'magas vérnyomás, gyomorműtét',
    },
    {
      Sorszám: 583,
      Nem: 'Nő',
      Kor: 93,
      Alapbetegségek:
        'magas vérnyomás, demencia, csípőprotézis műtét, agyi érszűkület',
    },
    {
      Sorszám: 582,
      Nem: 'Férfi',
      Kor: 71,
      Alapbetegségek: 'depresszió, demencia, táplálkozási negativizmus',
    },
    {
      Sorszám: 581,
      Nem: 'Nő',
      Kor: 77,
      Alapbetegségek:
        'véralkotósejt betegség, krónikus veseelégtelenség, aorta műbillentyű, szívelégtelenség',
    },
    {
      Sorszám: 580,
      Nem: 'Férfi',
      Kor: 64,
      Alapbetegségek: 'depresszió, heresérv',
    },
    {
      Sorszám: 579,
      Nem: 'Nő',
      Kor: 89,
      Alapbetegségek: 'magas vérnyomás, tüdőgyulladás',
    },
    {
      Sorszám: 578,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek: 'magas vérnyomás, anaemia, obesitas',
    },
    {
      Sorszám: 577,
      Nem: 'Férfi',
      Kor: 39,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, krónikus veseelégtelenség',
    },
    {
      Sorszám: 576,
      Nem: 'Nő',
      Kor: 75,
      Alapbetegségek:
        'magas vérnyomás, iszkémiás szívbetegség, stroke, endometrium adenocarcinoma',
    },
    {
      Sorszám: 575,
      Nem: 'Férfi',
      Kor: 56,
      Alapbetegségek:
        'toxikus májbetegség májzsugorral, májkóma, légzési elégtelenség, magas vérnyomás, iszkémiás szívbetegség',
    },
    {
      Sorszám: 574,
      Nem: 'Nő',
      Kor: 79,
      Alapbetegségek:
        'magas vérnyomás cukorbetegség, stroke, aorta stenosis, iszkémiás szívbetegség, aorta műbillentyű, szívelégtelenség',
    },
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
