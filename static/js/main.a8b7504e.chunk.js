(this["webpackJsonpeudcc-validator"]=this["webpackJsonpeudcc-validator"]||[]).push([[0],{152:function(e,t,i){"use strict";(function(e){var n=i(16),a=i.n(n),o=i(56),c=i(86),r=i.n(c),s=i(153),d=i.n(s),l=i(154),u=i(155),C=i.n(u),h=i(156),g=i(45),A=i.n(g),p=i(300),O=null,v=function(){var t=Object(o.a)(a.a.mark((function t(i){var n,o,c,s,u,g,v,m,f,S,I,R,b,j,T,D,V,y,x,B,L;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(O){t.next=11;break}if("undefined"===typeof window){t.next=10;break}return t.next=4,fetch("public_keys.json");case 4:return n=t.sent,t.next=7,n.json();case 7:O=t.sent,t.next=11;break;case 10:O=JSON.parse(r.a.readFileSync("public/public_keys.json"));case 11:if(i.startsWith("HC1")&&(i=i.substring(3)).startsWith(":")&&(i=i.substring(1)),120===(i=d.a.decode(i))[0]&&(i=l.a.inflate(i)),o=p.decode(i),c=p.decode(o.value[0]),s=o.value[1],u=p.decode(o.value[2]),g=c.get(4)||s.get(4),v=g.toString("base64"),m=!1,!(v in O.eu_keys)){t.next=36;break}return f=O.eu_keys[v][0].subjectPk,S=h.PublicKey.fromPEM("-----BEGIN PUBLIC KEY-----\n"+f+"\n-----END PUBLIC KEY-----"),I=e.from(S.keyRaw.slice(1,33)),R=e.from(S.keyRaw.slice(33,65)),b={key:{x:I,y:R,kid:g}},t.prev=27,t.next=30,C.a.sign.verify(i,b);case 30:t.sent.equals(o.value[2])&&(m=!0),t.next=36;break;case 34:t.prev=34,t.t0=t.catch(27);case 36:return j=u.get(-260).get(1),T={valid:m,issuer:A.a.getName(u.get(1)),issuedAt:u.get(6),expiresAt:u.get(4),version:j.ver,givenName:j.nam.gn,familyName:j.nam.fn,dateOfBirth:j.dob.split("T")[0]},"v"in j&&Array.isArray(j.v)&&j.v.length>0&&(D={1119349007:"SARS-CoV-2 mRNA vaccine",1119305005:"SARS-CoV-2 antigen vaccine",J07BX03:"covid-19 vaccines"},V={"EU/1/20/1528":"Comirnaty","EU/1/20/1507":"COVID-19 Vaccine Moderna","EU/1/21/1529":"Vaxzevria","EU/1/20/1525":"COVID-19 Vaccine Janssen"},y={"ORG-100001699":"AstraZeneca AB","ORG-100030215":"Biontech Manufacturing GmbH","ORG-100001417":"Janssen-Cilag International","ORG-100031184":"Moderna Biotech Spain S.L.","ORG-100006270":"Curevac AG","ORG-100013793":"CanSino Biologics","ORG-100020693":"China Sinopharm International Corp. - Beijing location","ORG-100010771":"Sinopharm Weiqida Europe Pharmaceutical s.r.o. - Prague location","ORG-100024420":"Sinopharm Zhijun (Shenzhen) Pharmaceutical Co. Ltd. - Shenzhen location","ORG-100032020":"Novavax CZ AS"},T.vaccination={disease:"840539006"===j.v[0].tg?"COVID-19":j.v.tg,vaccineType:j.v[0].vp in D?D[j.v[0].vp]:j.v[0].vp,vaccineProduct:j.v[0].mp in V?V[j.v[0].mp]:j.v[0].mp,vaccineManufacturer:j.v[0].ma in y?y[j.v[0].ma]:j.v[0].ma,doseNumber:j.v[0].dn,totalDoses:j.v[0].sd,date:j.v[0].dt.split("T")[0],country:A.a.getName(j.v[0].co),issuer:j.v[0].is,certificateId:j.v[0].ci}),"t"in j&&Array.isArray(j.t)&&j.t.length>0&&(x={"LP6464-4":"Nucleic acid amplification with probe detection","LP217198-3":"Rapid immunoassay"},B={1833:"AAZ-LMB, COVID-VIRO",1232:"Abbott Rapid Diagnostics, Panbio COVID-19 Ag Rapid Test",1468:"ACON Laboratories, Inc, Flowflex SARS-CoV-2 Antigen rapid test",1304:"AMEDA Labordiagnostik GmbH, AMP Rapid Test SARS-CoV-2 Ag",1822:"Anbio (Xiamen) Biotechnology Co., Ltd, Rapid COVID-19 Antigen Test(Colloidal Gold)",1815:"Anhui Deep Blue Medical Technology Co., Ltd, COVID-19 (SARS-CoV-2) Antigen Test Kit (Colloidal Gold) - Nasal Swab",1736:"Anhui Deep Blue Medical Technology Co., Ltd, COVID-19 (SARS-CoV-2) Antigen Test Kit(Colloidal Gold)",768:"ArcDia International Ltd, mariPOC SARS-CoV-2",1654:"Asan Pharmaceutical CO., LTD, Asan Easy Test COVID-19 Ag",2010:"Atlas Link Technology Co., Ltd., NOVA Test\xae SARS-CoV-2 Antigen Rapid Test Kit (Colloidal Gold Immunochromatography)",1906:"Azure Biotech Inc, COVID-19 Antigen Rapid Test Device",1870:"Beijing Hotgen Biotech Co., Ltd, Novel Coronavirus 2019-nCoV Antigen Test (Colloidal Gold)",1331:"Beijing Lepu Medical Technology Co., Ltd, SARS-CoV-2 Antigen Rapid Test Kit",1484:"Beijing Wantai Biological Pharmacy Enterprise Co., Ltd, Wantai SARS-CoV-2 Ag Rapid Test (FIA)",1223:"BIOSYNEX S.A., BIOSYNEX COVID-19 Ag BSS",1236:"BTNX Inc, Rapid Response COVID-19 Antigen Rapid Test",1173:"CerTest Biotec, CerTest SARS-CoV-2 Card test",1919:"Core Technology Co., Ltd, Coretests COVID-19 Ag Test",1225:"DDS DIAGNOSTIC, Test Rapid Covid-19 Antigen (tampon nazofaringian)",1375:"DIALAB GmbH, DIAQUICK COVID-19 Ag Cassette",1244:"GenBody, Inc, Genbody COVID-19 Ag Test",1253:"GenSure Biotech Inc, GenSure COVID-19 Antigen Rapid Kit (REF: P2004)",1144:"Green Cross Medical Science Corp., GENEDIA W COVID-19 Ag",1747:"Guangdong Hecin Scientific, Inc., 2019-nCoV Antigen Test Kit (colloidal gold method)",1360:"Guangdong Wesail Biotech Co., Ltd, COVID-19 Ag Test Kit",1437:"Guangzhou Wondfo Biotech Co., Ltd, Wondfo 2019-nCoV Antigen Test (Lateral Flow Method)",1256:"Hangzhou AllTest Biotech Co., Ltd, COVID-19 and Influenza A+B Antigen Combo Rapid Test",1363:"Hangzhou Clongene Biotech Co., Ltd, Covid-19 Antigen Rapid Test Kit",1365:"Hangzhou Clongene Biotech Co., Ltd, COVID-19/Influenza A+B Antigen Combo Rapid Test",1844:"Hangzhou Immuno Biotech Co.,Ltd, Immunobio SARS-CoV-2 Antigen ANTERIOR NASAL Rapid Test Kit (minimal invasive)",1215:"Hangzhou Laihe Biotech Co., Ltd, LYHER Novel Coronavirus (COVID-19) Antigen Test Kit(Colloidal Gold)",1392:"Hangzhou Testsea Biotechnology Co., Ltd, COVID-19 Antigen Test Cassette",1767:"Healgen Scientific, Coronavirus Ag Rapid Test Cassette",1263:"Humasis, Humasis COVID-19 Ag Test",1333:"Joinstar Biomedical Technology Co., Ltd, COVID-19 Rapid Antigen Test (Colloidal Gold)",1764:"JOYSBIO (Tianjin) Biotechnology Co., Ltd, SARS-CoV-2 Antigen Rapid Test Kit (Colloidal Gold)",1266:"Labnovation Technologies Inc, SARS-CoV-2 Antigen Rapid Test Kit",1267:"LumiQuick Diagnostics Inc, QuickProfile COVID-19 Antigen Test",1268:"LumiraDX, LumiraDx SARS-CoV-2 Ag Test",1180:"MEDsan GmbH, MEDsan SARS-CoV-2 Antigen Rapid Test",1190:"m\xf6Lab, COVID-19 Rapid Antigen Test",1481:"MP Biomedicals, Rapid SARS-CoV-2 Antigen Test Card",1162:"Nal von minden GmbH, NADAL COVID-19 Ag Test",1420:"NanoEntek, FREND COVID-19 Ag",1199:"Oncosem Onkolojik Sistemler San. ve Tic. A.S., CAT",308:"PCL Inc, PCL COVID19 Ag Rapid FIA",1271:"Precision Biosensor, Inc, Exdia COVID-19 Ag",1341:"Qingdao Hightop Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test (Immunochromatography)",1097:"Quidel Corporation, Sofia SARS Antigen FIA",1606:"RapiGEN Inc, BIOCREDIT COVID-19 Ag - SARS-CoV 2 Antigen test",1604:"Roche (SD BIOSENSOR), SARS-CoV-2 Antigen Rapid Test",1489:"Safecare Biotech (Hangzhou) Co. Ltd, COVID-19 Antigen Rapid Test Kit (Swab)",1490:"Safecare Biotech (Hangzhou) Co. Ltd, Multi-Respiratory Virus Antigen Test Kit(Swab)  (Influenza A+B/ COVID-19)",344:"SD BIOSENSOR Inc, STANDARD F COVID-19 Ag FIA",345:"SD BIOSENSOR Inc, STANDARD Q COVID-19 Ag Test",1319:"SGA Medikal, V-Chek SARS-CoV-2 Ag Rapid Test Kit (Colloidal Gold)",2017:"Shenzhen Ultra-Diagnostics Biotec.Co.,Ltd, SARS-CoV-2 Antigen Test Kit",1246:"VivaChek Biotech (Hangzhou) Co., Ltd, Vivadiag SARS CoV 2 Ag Rapid Test",1763:"Xiamen AmonMed Biotechnology Co., Ltd, COVID-19 Antigen Rapid Test Kit (Colloidal Gold)",1278:"Xiamen Boson Biotech Co. Ltd, Rapid SARS-CoV-2 Antigen Test Card",1456:"Xiamen Wiz Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test",1884:"Xiamen Wiz Biotech Co., Ltd, SARS-CoV-2 Antigen Rapid Test (Colloidal Gold)",1296:"Zhejiang Anji Saianfu Biotech Co., Ltd, AndLucky COVID-19 Antigen Rapid Test",1295:"Zhejiang Anji Saianfu Biotech Co., Ltd, reOpenTest COVID-19 Antigen Rapid Test",1343:"Zhezhiang Orient Gene Biotech Co., Ltd, Coronavirus Ag Rapid Test Cassette (Swab)"},L={260415e3:"Not detected",260373001:"Detected"},T.test={disease:"840539006"===j.t[0].tg?"COVID-19":j.t.tg,testType:j.t[0].tt in x?x[j.t[0].tt]:j.t[0].tt,testName:j.t[0].nm||"",testManufacturer:j.t[0].ma in B?B[j.t[0].ma]:j.t[0].ma,testDate:j.t[0].sc.replace("T"," ").replace("Z","+00"),testResult:j.t[0].tr in L?L[j.t[0].tr]:j.t[0].tr,testCenter:j.t[0].tc,country:A.a.getName(j.t[0].co),issuer:j.t[0].is,certificateId:j.t[0].ci}),"r"in j&&Array.isArray(j.r)&&j.r.length>0&&(T.recovery={disease:"840539006"===j.r[0].tg?"COVID-19":j.r.tg,firstPositiveTest:j.r[0].fr.split("T")[0],country:A.a.getName(j.r[0].co),issuer:j.r[0].is,validFrom:j.r[0].df.split("T")[0],validUntil:j.r[0].du.split("T")[0],certificateId:j.r[0].ci}),t.abrupt("return",T);case 42:case"end":return t.stop()}}),t,null,[[27,34]])})));return function(e){return t.apply(this,arguments)}}();t.a=v}).call(this,i(3).Buffer)},164:function(e,t,i){},165:function(e,t,i){},182:function(e,t){},184:function(e,t){},194:function(e,t){},205:function(e,t){},207:function(e,t){},235:function(e,t){},236:function(e,t){},241:function(e,t){},243:function(e,t){},250:function(e,t){},269:function(e,t){},295:function(e,t){},311:function(e,t,i){"use strict";i.r(t);var n=i(4),a=i.n(n),o=i(149),c=i.n(o),r=(i(163),i(164),i(165),i(312)),s=i(16),d=i.n(s),l=i(56),u=i(157),C=i(313),h=i(150),g=i.n(h),A=i(87),p=i(152),O=i(0);var v=function(){var e=a.a.useState(void 0),t=Object(u.a)(e,2),i=t[0],n=t[1],o=function(e){var t=[["Health Certificate",[["Signature",e.valid?"Validated":"Not Validated"],["Issued by",e.issuer],["Issue Date",A.DateTime.fromMillis(1e3*e.issuedAt).toISODate()],["Expiration",A.DateTime.fromMillis(1e3*e.expiresAt).toISODate(),1e3*e.expiresAt<Date.now()?"Expired":"OK"],["Certificate Version",e.version]]],["Personal Information",[["Name","".concat(e.givenName," ").concat(e.familyName)],["Date of Birth",e.dateOfBirth]]]];return e.vaccination&&t.push(["Vaccination Record",[["Disease",e.vaccination.disease],["Vaccine Type",e.vaccination.vaccineType],["Product",e.vaccination.vaccineProduct],["Manufacturer",e.vaccination.vaccineManufacturer],["Dose","".concat(e.vaccination.doseNumber," of ").concat(e.vaccination.totalDoses)],["Date Given",e.vaccination.date],["Country",e.vaccination.country],["Issuer",e.vaccination.issuer],["Certificate ID",e.vaccination.certificateId]]]),e.test&&t.push(["Test Record",[["Disease",e.test.disease],["Test Type",e.test.testType],["Test Name",e.test.testName],["Test Manufacturer",e.test.testManufacturer],["Test Date",e.test.testDate],["Test Result",e.test.testResult],["Test Center",e.test.testCenter],["Country",e.test.country],["Issuer",e.test.issuer],["Certificate ID",e.test.certificateId]]]),e.recovery&&t.push(["Recovery Record",[["Disease",e.recovery.disease],["First Positive Test",e.recovery.firstPositiveTest],["Country",e.recovery.country],["Issuer",e.recovery.issuer],["Valid From",e.recovery.validFrom],["Valid Until",e.recovery.validUntil],["Certificate ID",e.recovery.certificateId]]]),t},c=function(){var e=Object(l.a)(d.a.mark((function e(t){var i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=13;break}return e.prev=1,e.t0=o,e.next=5,Object(p.a)(t);case 5:e.t1=e.sent,i=(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),i=[["Could not read QR Code",[["Error",e.t2.toString()]]]];case 12:n(i);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),r=function(){n(null)};return Object(O.jsx)(O.Fragment,{children:i?Object(O.jsxs)("div",{id:"info",children:[i.map((function(e,t){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:e[0]}),Object(O.jsx)("table",{children:e[1].map((function(e,i){return Object(O.jsx)(O.Fragment,{children:"Signature"===e[0]?Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Signature"}),Object(O.jsx)("td",{children:Object(O.jsx)("span",{className:e[1].replace(" ",""),children:e[1]})})]}):Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:e[0]}),Object(O.jsxs)("td",{children:[e[1]," ",e.length>2&&Object(O.jsx)("span",{className:e[2].replace(" ",""),children:e[2]})]})]},"".concat(t,"-").concat(i))})}))})]})})),Object(O.jsx)(C.a,{variant:"primary",size:"lg",onClick:r,children:"Scan Another QR Code"})]}):Object(O.jsx)(O.Fragment,{children:void 0===i?Object(O.jsxs)("div",{id:"intro",children:[Object(O.jsx)("h1",{children:"EU Digital COVID Certificate Decoder"}),Object(O.jsx)("p",{children:"Scan your EUDCC QR Code to find out what information is stored inside!"}),Object(O.jsx)(C.a,{variant:"primary",size:"lg",onClick:r,children:"Scan QR Code"}),Object(O.jsxs)("div",{className:"faq",children:[Object(O.jsx)("h2",{children:"Frequently Asked Questions"}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Will my COVID certificate be shared or stored after I scan it?"}),Object(O.jsx)("br",{}),"No. This application runs entirely in your browser, no information is transmitted anywhere."]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"Is this legal? How are you able to decode my COVID certificate?"}),Object(O.jsx)("br",{}),"The information is stored in the QR Code, without encryption. The EU released ",Object(O.jsx)("a",{href:"https://github.com/eu-digital-green-certificates",children:"documentation"})," on how to extract information out of the QR Codes to allow any person or organization to develop a decoder."]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"What information does my COVID certificate has about me?"}),Object(O.jsx)("br",{}),"The certificate includes your name, your date of birth, and details of your vaccination, test result, or recovery from the disease."]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"How is the information in my COVID certificate verified?"}),Object(O.jsx)("br",{}),"Each COVID certificate includes a cryptographic signature that confirms that the information is authentic. This application will also attempt to validate the signature in your certificate."]})]})]}):Object(O.jsx)("div",{id:"qrcode",children:Object(O.jsx)(g.a,{onScan:c,onError:function(e){console.log(e)}})})})})};var m=function(){return Object(O.jsx)(r.a,{children:Object(O.jsx)("div",{id:"scan",children:Object(O.jsx)(v,{})})})};c.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root"))}},[[311,1,2]]]);
//# sourceMappingURL=main.a8b7504e.chunk.js.map