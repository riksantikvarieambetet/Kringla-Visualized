//keywords, aus denen das html gerüst gebaut wird.
var keywords = [
    {"id":1,"value":137269,"name":"arkeologi"},
    {"id":2,"value":60388,"name":"östergötland"},
    {"id":3,"value":59033,"name":"järn"},
    {"id":4,"value":57815,"name":"etnografi"},
    {"id":5,"value":53006,"name":"uppland"},
    {"id":6,"value":49035,"name":"gotland"},
    {"id":7,"value":42817,"name":"västra tollstad"},
    {"id":8,"value":38373,"name":"alvastra kloster"},
    {"id":9,"value":37894,"name":"okänd fyndort"},
    {"id":10,"value":30998,"name":"östasien"},
    {"id":11,"value":29475,"name":"öland"},
    {"id":12,"value":26239,"name":"kärl"},
    {"id":13,"value":25518,"name":"pottery"},
    {"id":14,"value":24544,"name":"riksintressen"},
    {"id":15,"value":21518,"name":"ceramics"},
    {"id":16,"value":20601,"name":"gräsgård"},
    {"id":17,"value":20388,"name":"eketorps borg"},
    {"id":18,"value":20066,"name":"adelsö"},
    {"id":19,"value":18949,"name":"brons"},
    {"id":20,"value":18878,"name":"iron"},
    {"id":21,"value":18789,"name":"keramik"},
    {"id":22,"value":18458,"name":"södermanland"},
    {"id":23,"value":17989,"name":"vapen"},
    {"id":24,"value":17677,"name":"västergötland"},
    {"id":25,"value":16467,"name":"erland nordenskiöld"},
    {"id":26,"value":15943,"name":"dräkt"},
    {"id":27,"value":16076,"name":"skåne"},
    {"id":28,"value":15451,"name":"bronze"},
    {"id":29,"value":15291,"name":"uniform"},
    {"id":30,"value":14948,"name":"småland"},
    {"id":31,"value":14747,"name":"clay"},
    {"id":32,"value":14329,"name":"ceramic"},
    {"id":33,"value":12742,"name":"sven hedin"},
    {"id":34,"value":12691,"name":"yxa"},
    {"id":35,"value":12413,"name":"vessel"},
    {"id":36,"value":12360,"name":"heminredning"},
    {"id":37,"value":12196,"name":"förvaring"},
    {"id":38,"value":11827,"name":"spik"},
    {"id":39,"value":11759,"name":"redskap och verktyg (410)"},
    {"id":40,"value":11664,"name":"spänne"},
    {"id":41,"value":11529,"name":"earthenware"},
    {"id":42,"value":11443,"name":"burnt clay"},
    {"id":43,"value":11113,"name":"metal"},
    {"id":44,"value":11104,"name":"금속 金屬"},
    {"id":45,"value":10612,"name":"teknisk keramik"},
    {"id":46,"value":10163,"name":"도자기 陶磁器"},
    {"id":47,"value":10133,"name":"björkö, svarta jorden"},
    {"id":48,"value":10059,"name":"동제 銅製"},
    {"id":49,"value":9464,"name":"eric von rosen"},
    {"id":50,"value":9443,"name":"mode"},
    {"id":51,"value":9330,"name":"flinta"},
    {"id":52,"value":9180,"name":"von rosen, eric"},
    {"id":53,"value":9125,"name":"cu-leg"},
    {"id":54,"value":9099,"name":"beslag"},
    {"id":55,"value":9004,"name":"centralasien"},
    {"id":56,"value":8884,"name":"glas"},
    {"id":57,"value":8811,"name":"silver"},
    {"id":58,"value":8800,"name":"glass"},
    {"id":59,"value":8787,"name":"bergart"},
    {"id":60,"value":8786,"name":"vanadisexpeditionen"},
    {"id":61,"value":8623,"name":"nimuendaju, kurt"},
    {"id":62,"value":8623,"name":"unckel, curt"},
    {"id":63,"value":8600,"name":"utgrävningar i teotihuacan"},
    {"id":64,"value":8491,"name":"siren, osvald"},
    {"id":65,"value":8379,"name":"osvald siren"},
    {"id":66,"value":8067,"name":"man"},
    {"id":67,"value":8003,"name":"män"},
    {"id":68,"value":7887,"name":"chaco-cordiller-expeditionen"},
    {"id":69,"value":7800,"name":"vapentillbehör"},
    {"id":70,"value":7247,"name":"husgeråd"},
    {"id":71,"value":7475,"name":"bead"},
    {"id":72,"value":7473,"name":"huvudbonad"},
    {"id":73,"value":7449,"name":"kvinnor"},
    {"id":74,"value":7229,"name":"slag"},
    {"id":75,"value":7124,"name":"hemslöjd"},
    {"id":76,"value":7041,"name":"lappland"},
    {"id":77,"value":7027,"name":"ben"},
    {"id":78,"value":6989,"name":"mould"},
    {"id":79,"value":6851,"name":"h. r. wahlen"},
    {"id":80,"value":6682,"name":"redskap"},
    {"id":81,"value":6643,"name":"föremål"},
    {"id":82,"value":6617,"name":"nit"},
    {"id":83,"value":6565,"name":"kvinna"},
    {"id":84,"value":6551,"name":"stockholm"},
    {"id":85,"value":6539,"name":"samisk historia"},
    {"id":86,"value":6510,"name":"samfund : skolväsen : undervisningsmateriel"},
    {"id":87,"value":6502,"name":"flygbilder"},
    {"id":88,"value":6421,"name":"konst (530)"},
    {"id":89,"value":6293,"name":"postinventarier"},
    {"id":90,"value":6243,"name":"leksaker"},
    {"id":91,"value":6247,"name":"världsarv"},
    {"id":92,"value":6190,"name":"uniformstillbehör"},
    {"id":93,"value":6120,"name":"halland"},
    {"id":94,"value":6104,"name":"kniv"},
    {"id":95,"value":6044,"name":"undervisningsmateriel"},
    {"id":96,"value":5957,"name":"j. g. andersson"},
    {"id":97,"value":5957,"name":"kina-gunnar"},
    {"id":98,"value":5949,"name":"guld"},
    {"id":99,"value":5877,"name":"waste"},
    {"id":100,"value":5807,"name":"blankvapen"},
    {"id":101,"value":5749,"name":"vävning"},
    {"id":102,"value":5739,"name":"trä"},
    {"id":103,"value":5646,"name":"merimde (c.4800-c.4300 bc), predynastic period"},
    {"id":104,"value":5548,"name":"utbildning"},
    {"id":105,"value":5539,"name":"hus"},
    {"id":106,"value":5514,"name":"undervisningsväsen"},
    {"id":107,"value":5486,"name":"björkö, hemlanden"},
    {"id":108,"value":5456,"name":"handel"},
    {"id":109,"value":5424,"name":"bohuslän"},
    {"id":110,"value":5405,"name":"teaching - aids and devices@eng"},
    {"id":111,"value":5382,"name":"household utensil"},
    {"id":112,"value":5382,"name":"가정용구 家庭用具"},
    {"id":113,"value":5376,"name":"ten"},
    {"id":114,"value":5372,"name":"fälttecken"},
    {"id":115,"value":5342,"name":"clay-and-wattle"},
    {"id":116,"value":5300,"name":"barn"},
    {"id":117,"value":5274,"name":"hantverk och industri : guldsmed : möllenborgs verkstad"},
    {"id":118,"value":5271,"name":"pärla"},
    {"id":119,"value":5193,"name":"porträtt"},
    {"id":120,"value":5254,"name":"textil"},
    {"id":121,"value":5250,"name":"läromedel"},
    {"id":122,"value":5212,"name":"kroppens prydnande och vård (300)"},
    {"id":123,"value":5202,"name":"aashaug"},
    {"id":124,"value":5197,"name":"361 bebyggelsemönster"},
    {"id":125,"value":5158,"name":"rödgods"},
    {"id":126,"value":4367,"name":"konst"},
    {"id":127,"value":4944,"name":"runor"},
    {"id":128,"value":4926,"name":"trofé"},
    {"id":129,"value":4916,"name":"yngre rödgods"},
    {"id":130,"value":4317,"name":"möbler"},
    {"id":131,"value":4696,"name":"artifact"},
    {"id":132,"value":4674,"name":"betalningsmedel"},
    {"id":133,"value":4046,"name":"hantverk"},
    {"id":134,"value":4628,"name":"byggnadsminnen:statl"},
    {"id":135,"value":4626,"name":"ammunition"},
    {"id":136,"value":4599,"name":"byggnader"},
    {"id":137,"value":4595,"name":"smycken (301)"},
    {"id":138,"value":4576,"name":"lergods"},
    {"id":139,"value":4564,"name":"inhemsk keramik"},
    {"id":140,"value":4564,"name":"söderköping"},
    {"id":141,"value":4500,"name":"kärl och behållare (415)"},
    {"id":142,"value":4461,"name":"apotek"},
    {"id":143,"value":4376,"name":"bone"},
    {"id":144,"value":4355,"name":"konsthantverk"},
    {"id":145,"value":4227,"name":"vapen (411)"},
    {"id":146,"value":4187,"name":"topografi"},
    {"id":147,"value":4145,"name":"skjutvapen"},
    {"id":148,"value":4137,"name":"byggnadsminnen"},
    {"id":149,"value":4072,"name":"raä-fastigheter"},
    {"id":150,"value":4053,"name":"jordfynd"},
    {"id":151,"value":4048,"name":"livplagg"},
    {"id":152,"value":3558,"name":"hantverk och industri"},
    {"id":153,"value":3891,"name":"nål"},
    {"id":154,"value":3890,"name":"västmanland"},
    {"id":155,"value":3870,"name":"graphics"},
    {"id":156,"value":3870,"name":"시각예술 視角藝術"},
    {"id":157,"value":3864,"name":"flint"},
    {"id":158,"value":3858,"name":"fotografering"},
    {"id":159,"value":3745,"name":"fjärrstridsvapen"},
    {"id":160,"value":3741,"name":"hästskosöm"},
    {"id":161,"value":3728,"name":"bildkonst (532)"},
    {"id":162,"value":3699,"name":"importerad keramik"},
    {"id":163,"value":3687,"name":"equmeniakyrkan"},
    {"id":164,"value":3687,"name":"s. m. f."},
    {"id":165,"value":3687,"name":"s.m.f."},
    {"id":166,"value":3687,"name":"svenska missionskyrkan"},
    {"id":167,"value":3652,"name":"blekinge"},
    {"id":168,"value":3610,"name":"fiske"},
    {"id":169,"value":3607,"name":"interiör"},
    {"id":170,"value":3559,"name":"antler"},
    {"id":171,"value":3539,"name":"näsby"},
    {"id":172,"value":3521,"name":"edvin nilssons bildsamling"},
    {"id":173,"value":3512,"name":"textilier : spetsar"},
    {"id":174,"value":3475,"name":"samfund : skråväsen"},
    {"id":175,"value":3471,"name":"copper alloy"},
    {"id":176,"value":3468,"name":"kalmar"},
    {"id":177,"value":3459,"name":"ångermanland"},
    {"id":178,"value":3050,"name":"dräkttillbehör"},
    {"id":179,"value":3425,"name":"smycken"},
    {"id":180,"value":3428,"name":"fragment"},
    {"id":181,"value":3404,"name":"kvinnokläder"},
    {"id":182,"value":3396,"name":"skulptur"},
    {"id":183,"value":3378,"name":"hultaby borgruin"},
    {"id":184,"value":3352,"name":"ring"},
    {"id":185,"value":3323,"name":"visitkortsfotografier"},
    {"id":186,"value":3280,"name":"eldhandvapen"},
    {"id":187,"value":3257,"name":"födans servering : tallrikar"},
    {"id":188,"value":3172,"name":"spel"},
    {"id":189,"value":3143,"name":"gruppfoto"},
    {"id":190,"value":3106,"name":"kam"},
    {"id":191,"value":3102,"name":"slottsfjärden"},
    {"id":192,"value":3098,"name":"hemtextilier"},
    {"id":193,"value":3068,"name":"sölja"},
    {"id":194,"value":3061,"name":"kristian"},
    {"id":195,"value":3061,"name":"vallstena"},
    {"id":196,"value":3056,"name":"christian georg frederik pfaff"},
    {"id":197,"value":3052,"name":"byggnad"},
    {"id":198,"value":2978,"name":"avslag"},
    {"id":199,"value":2958,"name":"gruppbild"},
    {"id":200,"value":2953,"name":"uppsala"},
    {"id":201,"value":2945,"name":"visitkort"},
    {"id":202,"value":2942,"name":"kontorseffekter"},
    {"id":203,"value":2936,"name":"allmoge"},
    {"id":204,"value":2935,"name":"baltiska utställningen"},
    {"id":205,"value":2915,"name":"musikinstrument"},
    {"id":206,"value":2916,"name":"skrift"},
    {"id":207,"value":2904,"name":"trosföreställningar (770)"},
    {"id":208,"value":2872,"name":"mynt"},
    {"id":209,"value":2835,"name":"bildkonst"},
    {"id":210,"value":2796,"name":"textila tekniker"},
    {"id":211,"value":2804,"name":"skiffer"},
    {"id":212,"value":2791,"name":"belysning : ljusstakar"},
    {"id":213,"value":2790,"name":"gustav vi adolf"},
    {"id":214,"value":2779,"name":"hänge"},
    {"id":215,"value":2759,"name":"crucible"},
    {"id":216,"value":2757,"name":"nail"},
    {"id":217,"value":2744,"name":"hantverk och industri : guldsmed"},
    {"id":218,"value":2743,"name":"svärd"},
    {"id":219,"value":2712,"name":"verktyg"},
    {"id":220,"value":2715,"name":"adolf erik nordenskiöld"},
    {"id":221,"value":2715,"name":"adolf nordenskiöld"},
    {"id":222,"value":2712,"name":"vattendrag"},
    {"id":223,"value":2705,"name":"ben/horn"},
    {"id":224,"value":2704,"name":"lekar"},
    {"id":225,"value":2702,"name":"hantverk och industri : tryckeri"},
    {"id":226,"value":2682,"name":"skolundervisning"},
    {"id":227,"value":2665,"name":"djur"},
    {"id":228,"value":2659,"name":"reportage"},
    {"id":229,"value":2646,"name":"religonsutövning (780)"},
    {"id":230,"value":2642,"name":"kappa"},
    {"id":231,"value":2622,"name":"textil, skinn och fibrer (280)"},
    {"id":232,"value":2620,"name":"födans servering : fat"},
    {"id":233,"value":2617,"name":"sten"},
    {"id":234,"value":2611,"name":"personnamn"},
    {"id":235,"value":2602,"name":"redskap i allmänhet (412)"},
    {"id":236,"value":2596,"name":"åsele"},
    {"id":237,"value":2578,"name":"visby"},
    {"id":238,"value":2555,"name":"fågelsamling"},
    {"id":239,"value":2555,"name":"hantverk och industri : snickeri"},
    {"id":240,"value":2548,"name":"bräda"},
    {"id":241,"value":2539,"name":"porslin"},
    {"id":242,"value":2538,"name":"weapon"},
    {"id":243,"value":2536,"name":"rivet"},
    {"id":244,"value":2504,"name":"huvudbonader"},
    {"id":245,"value":2513,"name":"segmenterad"},
    {"id":246,"value":2507,"name":"kvarts"},
    {"id":247,"value":2503,"name":"fingerring"},
    {"id":248,"value":2499,"name":"sverige"},
    {"id":249,"value":2496,"name":"무기 武器"},
    {"id":250,"value":2463,"name":"reklam"},
    {"id":251,"value":2471,"name":"organic material"},
    {"id":252,"value":2459,"name":"stämplar, stampar, brevstämplingsmaskiner"},
    {"id":253,"value":2453,"name":"jämtland"},
    {"id":254,"value":1959,"name":"folkdräkter"},
    {"id":255,"value":2441,"name":"dräkttillbehör : knappar"},
    {"id":256,"value":2425,"name":"stockholm, historiska museets stora innergård"},
    {"id":257,"value":2424,"name":"nyckel"},
    {"id":258,"value":2386,"name":"behållare"},
    {"id":259,"value":2419,"name":"beklädnad"},
    {"id":260,"value":2405,"name":"textilier : prover : vävnader"},
    {"id":261,"value":2391,"name":"utrustning"},
    {"id":262,"value":2390,"name":"bryne"},
    {"id":263,"value":2387,"name":"weapons@eng"},
    {"id":264,"value":2365,"name":"213 tryckning"},
    {"id":265,"value":2362,"name":"amerika"},
    {"id":266,"value":2354,"name":"benkläder"},
    {"id":267,"value":2352,"name":"närke"},
    {"id":268,"value":2340,"name":"otterstad"},
    {"id":269,"value":2329,"name":"personliga föremål"},
    {"id":270,"value":2319,"name":"dräkt : huvudbonader : mössor"},
    {"id":271,"value":2319,"name":"heliga föremål och platser (778)"},
    {"id":272,"value":2302,"name":"dolk"},
    {"id":273,"value":2292,"name":"fönsterglas"},
    {"id":274,"value":2268,"name":"läckö slott"},
    {"id":275,"value":2261,"name":"ångermanälven, hälla, lokal 870"},
    {"id":276,"value":2253,"name":"nyköping"},
    {"id":277,"value":2252,"name":"möbler : sitt- och liggmöbler : stolar"},
    {"id":278,"value":2249,"name":"vadstena"},
    {"id":279,"value":2247,"name":"statens etnografiska museums expedition till mexico 1934-35."},
    {"id":280,"value":2245,"name":"spets"},
    {"id":281,"value":2243,"name":"mänskliga kvarlevor"},
    {"id":282,"value":2228,"name":"samhälle"},
    {"id":283,"value":2154,"name":"textilier"},
    {"id":284,"value":2222,"name":"edward laman"},
    {"id":285,"value":2218,"name":"träbearbetning"},
    {"id":286,"value":2206,"name":"klimat"},
    {"id":287,"value":2189,"name":"konst : tavlor : teckningar"},
    {"id":288,"value":2182,"name":"jesus"},
    {"id":289,"value":2181,"name":"blyglasyr"},
    {"id":290,"value":2181,"name":"väggdekoration"},
    {"id":291,"value":2178,"name":"dräkt (290)"},
    {"id":292,"value":2177,"name":"söm"},
    {"id":293,"value":2165,"name":"kristus"},
    {"id":294,"value":2159,"name":"hälsingland"},
    {"id":295,"value":2150,"name":"lera"},
    {"id":296,"value":2109,"name":"prydnadsföremål"},
    {"id":297,"value":2141,"name":"artilleri"},
    {"id":298,"value":2134,"name":"båtar"},
    {"id":299,"value":2121,"name":"rod"},
    {"id":300,"value":2115,"name":"navigation"},
    {"id":301,"value":2109,"name":"brev"},
    {"id":302,"value":2108,"name":"hantverk och industri : skomakeri"},
    {"id":303,"value":2087,"name":"dalarna"},
    {"id":304,"value":2083,"name":"skodon"},
    {"id":305,"value":2070,"name":"gästrikland"},
    {"id":306,"value":2068,"name":"natur"},
    {"id":307,"value":2068,"name":"smycke"},
    {"id":308,"value":2061,"name":"tortoise brooch"},
    {"id":309,"value":2059,"name":"porcelain"},
    {"id":310,"value":2058,"name":"textilhantverk"},
    {"id":311,"value":2058,"name":"백자 白磁"},
    {"id":312,"value":1894,"name":"belysning"},
    {"id":313,"value":2049,"name":"maczyńska juli-2015"},
    {"id":314,"value":2048,"name":"samlande, jakt och fiske (220)"},
    {"id":315,"value":2042,"name":"insida: blyglasyr"},
    {"id":316,"value":2009,"name":"c.a. i-ii."},
    {"id":317,"value":2000,"name":"broby, alvastra pålbyggnad"},
    {"id":318,"value":1997,"name":"lås"},
    {"id":319,"value":1994,"name":"pilspets"},
    {"id":320,"value":1989,"name":"detaljhandel"},
    {"id":321,"value":1989,"name":"kvinnoklädsel"},
    {"id":322,"value":1988,"name":"skrapa"},
    {"id":323,"value":1984,"name":"redskap och utrustning"},
    {"id":324,"value":1981,"name":"othem"},
    {"id":325,"value":1977,"name":"död (760)"},
    {"id":326,"value":1977,"name":"hertig larson"},
    {"id":327,"value":1973,"name":"fotbeklädnad"},
    {"id":328,"value":1973,"name":"knapp"},
    {"id":329,"value":1972,"name":"norrbotten"},
    {"id":330,"value":1966,"name":"artists@eng"},
    {"id":331,"value":1950,"name":"lekar och spel"},
    {"id":332,"value":1964,"name":"peking"},
    {"id":333,"value":1957,"name":"utmärkelsetecken"},
    {"id":334,"value":1947,"name":"cylindrisk ände"},
    {"id":335,"value":1945,"name":"konstnärer"},
    {"id":336,"value":1935,"name":"heminredning : förvaring : askar"},
    {"id":337,"value":1935,"name":"planka"},
    {"id":338,"value":1926,"name":"k. g. lindblom"},
    {"id":339,"value":1917,"name":"björkö, norr om borg"},
    {"id":340,"value":1916,"name":"bleck"},
    {"id":341,"value":1911,"name":"kvarteret biografen"},
    {"id":342,"value":1908,"name":"kvarteret biografen 3"},
    {"id":343,"value":1905,"name":"coprolite"},
    {"id":344,"value":1897,"name":"r. g. gayer-anderson"},
    {"id":345,"value":1884,"name":"bly"},
    {"id":346,"value":1875,"name":"båt"},
    {"id":347,"value":1874,"name":"kyrkor"},
    {"id":348,"value":1860,"name":"fjällnatur"},
    {"id":349,"value":1860,"name":"t. j. arne"},
    {"id":350,"value":1858,"name":"ture j. arne"},
    {"id":351,"value":1857,"name":"ekerö"},
    {"id":352,"value":1857,"name":"ture j:son arne"},
    {"id":353,"value":1850,"name":"dräkt : klänningar"},
    {"id":354,"value":1849,"name":"modell"},
    {"id":355,"value":1848,"name":"armring"},
    {"id":356,"value":1756,"name":"servering"},
    {"id":357,"value":1845,"name":"samfund : penning- och bankväsen : mynt"},
    {"id":358,"value":1833,"name":"fritid"},
    {"id":359,"value":1825,"name":"micro bead"},
    {"id":360,"value":1810,"name":"broderi"},
    {"id":361,"value":1806,"name":"hellvi"},
    {"id":362,"value":1793,"name":"arkeologi och historia (170)"},
    {"id":363,"value":1790,"name":"personer"},
    {"id":364,"value":1788,"name":"arkeologi (172)"},
    {"id":365,"value":1785,"name":"handel : förpackningar"},
    {"id":366,"value":1782,"name":"kyrka"},
    {"id":367,"value":1777,"name":"fåglar"},
    {"id":368,"value":1776,"name":"födans servering : skedar : bordsskedar"},
    {"id":369,"value":1769,"name":"metallhantverk"},
    {"id":370,"value":1767,"name":"heminredning : tapeter"},
    {"id":371,"value":1738,"name":"dräkt : huvudbonader : bindmössor"},
    {"id":372,"value":1736,"name":"utsmyckning och dekoration"},
    {"id":373,"value":1736,"name":"väskinde"},
    {"id":374,"value":1615,"name":"fat"},
    {"id":375,"value":1734,"name":"band"},
    {"id":376,"value":1733,"name":"värmland"},
    {"id":377,"value":1724,"name":"konst : tavlor : oljemålningar"},
    {"id":378,"value":1719,"name":"byggnadsdelar"},
    {"id":379,"value":1725,"name":"textile"},
    {"id":380,"value":1724,"name":"kvartsit"},
    {"id":381,"value":1171,"name":"snickeri"},
    {"id":382,"value":1712,"name":"krus"},
    {"id":383,"value":1711,"name":"transport, kommunikation : seldon : selkrokar"},
    {"id":384,"value":1709,"name":"flicka"},
    {"id":385,"value":1702,"name":"dräkt : förkläden"},
    {"id":386,"value":1702,"name":"plåt"},
    {"id":387,"value":1697,"name":"women's clothing@eng"},
    {"id":388,"value":1696,"name":"industriminnen"},
    {"id":389,"value":1690,"name":"jakt"},
    {"id":390,"value":1683,"name":"sandsten"},
    {"id":391,"value":1672,"name":"museer"},
    {"id":392,"value":1671,"name":"dräkt : kragar"},
    {"id":393,"value":1660,"name":"uppvärmning : kakel"},
    {"id":394,"value":1659,"name":"utrustning och skötsel av byggnader (350)"},
    {"id":395,"value":1652,"name":"band (textilier)"},
    {"id":396,"value":1642,"name":"stengods"},
    {"id":397,"value":1625,"name":"horn"},
    {"id":398,"value":1619,"name":"hantverk och industri : smide"},
    {"id":399,"value":1614,"name":"bostad"},
    {"id":400,"value":1611,"name":"dalsland"},
    {"id":401,"value":1607,"name":"whetstone"},
    {"id":402,"value":1602,"name":"manlig användare"},
    {"id":403,"value":1599,"name":"oscar trapps, samling"},
    {"id":404,"value":1590,"name":"ryssland"},
    {"id":405,"value":1588,"name":"accessoarer"},
    {"id":406,"value":1577,"name":"dräkt (291)"},
    {"id":407,"value":1568,"name":"hemse"},
    {"id":408,"value":1568,"name":"slate"},
    {"id":409,"value":1567,"name":"hantverk och industri : gjuteri"},
    {"id":410,"value":1557,"name":"leksaker : dockkläder"},
    {"id":411,"value":1555,"name":"garnering"},
    {"id":412,"value":1554,"name":"skrivdon : brev"},
    {"id":413,"value":1551,"name":"begravning (764)"},
    {"id":414,"value":1520,"name":"skrivdon"},
    {"id":415,"value":1550,"name":"hantverk och industri : övriga hantverk"},
    {"id":416,"value":1547,"name":"smycken : ringar"},
    {"id":417,"value":1547,"name":"uniformspersedlar"},
    {"id":418,"value":1546,"name":"jakt och fångst till lands (224)"},
    {"id":419,"value":1462,"name":"skomakeri"},
    {"id":420,"value":1542,"name":"textiliernas vård : kavling, mangling : kavelbräden"},
    {"id":421,"value":1540,"name":"532 bildkonst"},
    {"id":422,"value":1535,"name":"ljudarkivering"},
    {"id":423,"value":1534,"name":"textilier : bordet : dukar"},
    {"id":424,"value":1533,"name":"märke"},
    {"id":425,"value":1529,"name":"fiske : metoder och redskap : krokfiske"},
    {"id":426,"value":1522,"name":"loom weight"},
    {"id":427,"value":1516,"name":"konsthantverk och formgivning (531)"},
    {"id":428,"value":1515,"name":"grötlingbo"},
    {"id":429,"value":1504,"name":"drycker"},
    {"id":430,"value":1494,"name":"dräkt : huvudbonader : hattar"},
    {"id":431,"value":1494,"name":"norrköping"},
    {"id":432,"value":1490,"name":"159 levnadsbeskrivningar"},
    {"id":433,"value":1490,"name":"svenska biologiska expeditionen till australien"},
    {"id":434,"value":1487,"name":"leksak"},
    {"id":435,"value":1484,"name":"amber"},
    {"id":436,"value":1483,"name":"förtäring"},
    {"id":437,"value":1480,"name":"uniform och utrustning"},
    {"id":438,"value":1074,"name":"industri"},
    {"id":439,"value":1475,"name":"gryta"},
    {"id":440,"value":1473,"name":"shell"},
    {"id":441,"value":1468,"name":"spjut"},
    {"id":442,"value":1465,"name":"bränd lera"},
    {"id":443,"value":1463,"name":"531 konsthantverk och formgivning"},
    {"id":444,"value":1463,"name":"människor"},
    {"id":445,"value":1452,"name":"tobak"},
    {"id":446,"value":1453,"name":"bröllop"},
    {"id":447,"value":1453,"name":"köping"},
    {"id":448,"value":1450,"name":"fjärrvapen"},
    {"id":449,"value":1449,"name":"skanör m. falsterbo"},
    {"id":450,"value":1447,"name":"bärnsten"},
    {"id":451,"value":1446,"name":"mörner af morlanda, birger"},
    {"id":452,"value":1446,"name":"pojke"},
    {"id":453,"value":1387,"name":"matlagning"},
    {"id":454,"value":1444,"name":"textilier : prover"},
    {"id":455,"value":1441,"name":"hazelnut shell"},
    {"id":456,"value":1434,"name":"arbete"},
    {"id":457,"value":1428,"name":"skolväsen"},
    {"id":458,"value":1418,"name":"klänningar"},
    {"id":459,"value":1413,"name":"samfund : militärväsen : blankvapen"},
    {"id":460,"value":1409,"name":"bearbetning av råämnen (320)"},
    {"id":461,"value":1407,"name":"byggnadsutrustning"},
    {"id":462,"value":1403,"name":"skelett"},
    {"id":463,"value":1402,"name":"förvaringskärl"},
    {"id":464,"value":1396,"name":"falsterbohus"},
    {"id":465,"value":1395,"name":"grönsten"},
    {"id":466,"value":1395,"name":"turinge"},
    {"id":467,"value":1390,"name":"alvastra pålbyggnad"},
    {"id":468,"value":1389,"name":"spjutspets"},
    {"id":469,"value":1389,"name":"varnhem"},
    {"id":470,"value":1388,"name":"textilier : bädden : täcken"},
    {"id":471,"value":1385,"name":"mineralsamling"},
    {"id":472,"value":1381,"name":"slagg"},
    {"id":473,"value":1377,"name":"kvarteret bryggaren 1"},
    {"id":474,"value":1374,"name":"ek"},
    {"id":475,"value":1373,"name":"armbygel"},
    {"id":476,"value":1373,"name":"comb"},
    {"id":477,"value":1370,"name":"215 fotografering"},
    {"id":478,"value":1367,"name":"klimat: vinter"},
    {"id":479,"value":1364,"name":"födans förvaring, transport : flaskor"},
    {"id":480,"value":1364,"name":"läder"},
    {"id":481,"value":1361,"name":"lindh"},
    {"id":482,"value":1357,"name":"bauer, wilhelm"},
    {"id":483,"value":1357,"name":"wilhelm bauer"},
    {"id":484,"value":1355,"name":"maria"},
    {"id":485,"value":904,"name":"svenska dräkter"},
    {"id":486,"value":1348,"name":"modeller och övriga hjälpmedel för minnet"},
    {"id":487,"value":1347,"name":"drikker, nytelsesmidler og legemidler (no) (270)"},
    {"id":488,"value":1338,"name":"möbler : förvaringsmöbler : skåp"},
    {"id":489,"value":873,"name":"väskor"},
    {"id":490,"value":1325,"name":"pil"},
    {"id":491,"value":1320,"name":"ritual (788)"},
    {"id":492,"value":1319,"name":"ringspänne"},
    {"id":493,"value":1317,"name":"jordbrukslära"},
    {"id":494,"value":1313,"name":"vega"},
    {"id":495,"value":1309,"name":"halla"},
    {"id":496,"value":1307,"name":"livets högtider : bröllop"},
    {"id":497,"value":1304,"name":"underkläder"},
    {"id":498,"value":1303,"name":"spik/nit"},
    {"id":499,"value":1272,"name":"koppar"},
    {"id":500,"value":1296,"name":"sjukvård"}];


var overlay = {};
var selectedKeywordID = 0;
//kommas zu punkten
function formatNumber (number) {
    var reg = new RegExp(",", 'g');
    return d3.format(",")(number).replace(reg, ".");
}

//hilfe button overlay
function generateOverlay () {
    
    overlay
    .style("display", "inline")
    .style("width", $(window).width)
    .selectAll("*").remove();    
//klicke automatisch die ID-4 an (Fotos)
    if (selectedKeywordID != 4){ 
        var e = document.createEvent('UIEvents');
        e.initUIEvent('click', true, true, window, 1);
        d3.select("#t4").node().dispatchEvent(e);
   }
    var infos = 
        [
            { x: 105, y: 190, text: "Valt sökord, klicka igen för att avbryta urvalet", r: 30},
            { x: 920, y: 200, text: "Många gemensamma poster är röda", r: 20},
            { x: 240, y: 445, text: "Få gemensamma poster är gråa", r: 15},
            { x: 670, y: 310, text: "Inga gemensamma poster är svarta", r: 10},
            { x: 270, y: 35, text: "Länk till kringla.nu", r: 20}
        ];

//wieder magie mit mathe
    overlay
    .selectAll("g")
    .data(infos)
      .enter()
        .append("g")
        .attr("class", "infoField")
        .attr("transform", function(d){ return "translate("+d.x+","+d.y+"), rotate(10)"; })
        .transition()
        .delay(function(d,i){ return i*50; })
        .each("end",function(d){
          var infoTip = d3.select(this);
          var p = d.x > $("body").width()/2;

          infoTip.append("circle").attr("r", function(d){ return d.r; })
          infoTip.append("line").attr("x1", 0).attr("y1", 0).attr("x2", p ? -5 : 5).attr("y2", 5)

          var background = infoTip.append("rect")
          var text = infoTip.append("text").text(function(d){ return d.text; })
          var bb = text.node().getBBox();

          text.attr("transform", "translate("+(p ? (-bb.width-8) : (4+4))+","+15+")");

          background
            .attr("width", bb.width+(4*2))
            .attr("height", bb.height).attr("transform", "translate("+(p ? (-bb.width-12) : 4)+","+(15-(bb.height)+4)+")");
          infoTip.transition().attr("transform", function(d){ return "translate("+d.x+","+d.y+"), rotate(0)";});
    })
}


var csvData = [];

$(document).ready( function() {

    //overlay generieren, wenn man auf den help button klickt        
     overlay = d3.select("#overlay svg");     
        
      d3.select('.help')
        .selectAll("img")
        .data([{active:false}])
        .enter()
        .append("img")
        .attr("src", "icons/info.svg")
        .on("click", function(d){
            d.active = !d.active;
            d3.select(this).classed("active", d.active);
            if(d.active) generateOverlay();
            
        });
        //overlay ausblenden + ID 4 abwählen        
        $("#overlay svg").click(function(){
            
            var e = document.createEvent('UIEvents');
                e.initUIEvent('click', true, true, window, 1);
                d3.select("#t4").node().dispatchEvent(e);
                d3.select(".help img")
                    .classed("active", false)
                overlay.style("display", "none")
                
        });
        //vorher erstellter tip ausblenden
        $("#tip").css("opacity", 0);

        // lade die CSV-datei und pack sie in csvDATA
        d3.csv("../keywords/data/data-tags.csv")
            .row(function(d) { return d; })
            .get(function(error, rows) {
                csvData = rows;
            });
        
    
        
        
        // erzeuge die colorscale
        var colorScale = d3.scale.linear()
            .domain([0, 1])
            .range(["rgb(75, 75, 75)", "rgb(201, 74, 24)"]);

        // verknüpfe LI-elemente mit daten 
        var keywordsSelection = d3
            .select(".main")
            .append("div")
            .selectAll("div#keywords span");
        
    
        selectedKeywordID = 0;
        
        var max = 137269;
        var min = 1296;
        var valueScale = d3.scale.sqrt().domain([min, max]).range([115, 650]);
        
         // i dont' know what this is all about, but the tip is involved…      
        function customTip(d, position) {
            
            var hoveredKeywordData = csvData.filter( function (k) { return (
                k.current_facet_id == selectedKeywordID && 
                k.facet_id == d.id);})[0];
            
            if (hoveredKeywordData != undefined) {
                // wenn man über aktive hovert
                if (selectedKeywordID == d.id) {
                    $("#tip").css("opacity", 1.0);
                    
                    var tag = $("#t"+d.id);

                    $("#tip p").text(formatNumber(hoveredKeywordData.c)+" poster. Klicka igen för att avbryta valet."); 
                    $("#tip").css({
                                "top": 
                                    tag.offset().top
                                   -parseInt(tag.css('font-size'))/3
                                   -$("#tip").height(), 
                                "left":
                                    tag.offset().left
                                    - parseInt(tag.css('padding-right'))
                                    + tag.width()/2
                                    - $("#tip").width()/2 
                                      });
                }
                // wenn worte hovert die eingefärbt sind ungleich 0
                else if (selectedKeywordID != 0) {
                    
                    $("#tip").css("opacity", 1.0);
                    
                    var tag = $("#t"+d.id);

                    $("#tip p").text(formatNumber(hoveredKeywordData.c)+" gemensamma poster");
                    $("#tip").css({
                                "top": 
                                    tag.offset().top
                                   -parseInt(tag.css('font-size'))/3
                                   -$("#tip").height(), 
                                "left":
                                    tag.offset().left
                                    - parseInt(tag.css('padding-right'))
                                    + tag.width()/2
                                    - $("#tip").width()/2 
                                      });


                } 
                // alles andere, also 0
                else {
                    var tag = $("#t"+d.id);
                    $("#tip p").text("0"); 
                    $("#tip").css({
                                "top": 
                                    tag.offset().top
                                   -parseInt(tag.css('font-size'))/3
                                   -$("#tip").height(), 
                                "left":
                                    tag.offset().left
                                    - parseInt(tag.css('padding-right'))
                                    + tag.width()/2
                                    - $("#tip").width()/2 
                                  });

                }
                    
            }
                         
        }
        

         // füge für jede zeile in den daten ein LI ein
        keywordsSelection
            .data(keywords)
            .enter()
            .append("span")
            .attr("id", function (d) { return "t"+d.id; })
            .style("font-size", function(d) { return valueScale(d.value) + "em"; })
            .text( function (d) { return d.name; })
            .style("background-color", "#FBFBFB")
            .style("color", "#3A3A3A")
            .style("opacity", 1)
            .on("mouseover", function(d)  { customTip(d, 200) })
            .on("click", function (d) {

                       $("#tip").css("opacity", 0);

                    // hole aus scvData alle Zeilen raus bei denen die current_facet_id mit der id des aktuellen wortes übereinstimmt
                    // und sortiere diese nach vorkommen
                        d3.select("#top")
                            .attr("class", "op2");

                
                    keywordCount = csvData
                        .filter( function (k) { return (k.current_facet_id == d.id);} )
                        .sort(function (a, b) { return (b.c-a.c);} );
                
                
                        colorMax = keywordCount[1].c; // zweitgrößte anzahl
                        colorMin = keywordCount[keywordCount.length-1].c;
                        
                        
                    // falls es für das aktuelle wort überhaupt einträge gibt…
                    if (keywordCount.length>0) {

                        
                        // voll toller reset
                       d3.selectAll(".main span")
                            .transition()
                            .duration(350)
                            .attr("class", "kickMe")
                            .style("color", "#181818")
                            .style("background-color", "#FBFBFB");
                        
                        d3.selectAll("#value")
                            .remove();
                            
                        // geht durch alle keywords
                        for(var i=0; i<keywordCount.length; i++) {
                            
                            // aktulles keyword ist nicht das keyword des aktuellen LI-elements
                            if (keywordCount[i].facet_id != d.id){

                                // färbs es nach der scale ein
                                d3.select("#t" + keywordCount[i].facet_id)
                                    .transition()
                                    .duration(350)
                                    .attr("class", "kickMe")
                                    .style("background-color", "#FBFBFB")
                                    .style("color", colorScale.domain([colorMin, colorMax])(keywordCount[i].c))
                                
                                
                            } else {
                                
                                // merke dir die ID des ausgewählten keywords 
                                selectedKeywordID = keywordCount[i].facet_id;
                                                                
                                // oh, es sit doch das akteuelle LI… FÄRBE ES WHITE!!!
                                d3.select("#t" + keywordCount[i].facet_id)
                                    .transition()
                                    .duration(350)
                                    .attr("class", "active")
                                    .style("color", "#FFF")
                                    .style("background-color", "#DADADA")
                                    .style("background-clip", "content-box");
                                
                                d3.select(".subheader .container h1 span")
                                    .remove("class", "blankHL");
                                
                                d3.select(".subheader .container h1")
                                    .append("span")
                                    .attr("class", "activeSmall")
                                    .attr("id", "value")
                                    .text( function (d) { return "Nyckelord: "+keywordCount[i].value+" hat "})
                                    .append("a")
                                    .attr("href", "http://www.kringla.nu/kringla/sok?text="+keywordCount[i].value)
                                    .on("click", function (d, i) { } )
                                    .attr("target", "_blank")
                                    .attr("class", "activeLink")
                                    .text(function (d){return formatNumber(keywordCount[i].c)+" poster";});

                        }
                        }
                    } else {
                        // keine keywords in der aktuellen liste 
                        d3.selectAll(".main span")
                            .transition()
                            .duration(350)
                            .attr("class", "kickMe")
                            .style("color", "#3A3A3A")
                            .style("background-color", "#FBFBFB");
                        

                    }
                
                   if($(this).hasClass('active'))  {
                        d3.selectAll(".main span")
                            .transition()
                            .duration(350)
                            .attr("class", "kickMe")
                            .style("color", "#3A3A3A")
                            .style("background-color", "#FBFBFB");
                       
                        selectedKeywordID = 0;

                        d3.selectAll("#value")
                            .remove();

                        d3.select(".subheader .container h1")
                            .append("span")
                            .attr("class", "blankHL")
                            .text("Nyckelord");

                    }
                    else {
                    }

                }
            );
        // beim seiten-start wird animation abgespielt.
        d3.select(".main")
            .style("opacity", 0)
            .transition()
            .ease("exp-in-out")
            .duration(1500)
            .style("opacity", 1);

});

        