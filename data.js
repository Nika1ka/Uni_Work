var studentName = ["Богдан Пожар Михайлович", "Вінницький М.В.", "Кушнаренко Егор", "", "Макс Гаман Олександрович"];
var group = ["ІТУ-21-3", "ІТУ-20-2", "", "", ""];
var variant = ["13", "2", "6", "8", ""];

var dl_mail = ["bohdan.pozhar@nure.ua", "", "", "", ""];
var dl_pass = ["Gubk@bob2004", "", "", "", ""];

var work_list = [
    ["Софт скилл", "IT управління бізнес процесами", "ТРКС"],
    ["Інформационні системи менеджменту", "Менеджмент ІТ проектів", "Фронтенд"],
    ["Інформационні системи менеджменту", "Менеджмент ІТ проектів", "Фронтенд"],
    ["УІТІП"],
    ["Веб технології", "ОСТСП", "Python"]
];
var work_theme = [
    ["", "", "Мобільний додаток \"Світ Кіно\""],
    ["", "", ""],
    ["", "", ""],
    [""],
    ["", "", ""]
];
var pzCount = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0],
    [0, 0, 0]
];
var price = [
    [1000, 1000, 1000],
    [1000, 1000, 1000],
    [1000, 1000, 1000],
    [1200],
    [1000, 1000, 1000]
];

var work_metod_title_name = [
    "ТРКС", "ОСТСП", "Python", "Інформационні системи менеджменту", "УІТІП", "Софт скилл", "IT управління бізнес процесами", "Менеджмент ІТ проектів", "Фронтенд", "Веб технології"
];
var work_metod_title = [
    ["МУ_ПЗ_ТРКС.pdf"], ["1.pdf", "2.pdf", "3.pdf", "4.pdf", "5.pdf", "6.pdf", "7.pdf", "8.pdf", "Аccемблер.pdf"], ["Для пз 1.pdf", "ПЗ1 Python.doc.pdf"], 
    ["ПЗ  1.pdf", "ПЗ  3.pdf", "ПЗ  5.pdf", "ПЗ  7.pdf"], ["ПР У ІТ  ІП Ч 1(1_2_3).pdf", "ПР У ІТ ІП Ч2 (4_5_6).pdf"],
    [], [], ["ПЗ №1.pdf", "Практичне завдання № 2.pdf", "Практичне завдання № 3.pdf"], [], []
];

function createWorkList() {
    bodyObj = document.getElementById("main");
    for(i = 0; i < studentName.length; i++) {
        newStudent = addObj("student", "Студент №", i + 1, bodyObj);

        addObj("studentName", "ПІБ: ", studentName[i], newStudent);
        addObj("studentData", "Група: ", group[i], newStudent);
        addObj("studentData", "Варіант: ", variant[i], newStudent);
        addObj("studentData", "Пошта: ", dl_mail[i], newStudent);
        addObj("studentData", "Пароль: ", dl_pass[i], newStudent);

        studentWorkList = addObj("studentWorkList", "", "Перелік ПЗ", newStudent);
        for(j = 0; j < work_list[i].length; j++) {
            if(work_theme[i][j] == "")
                addObj("workName", "", work_list[i][j], studentWorkList);
            else
                addObj("workName", "", work_list[i][j] + "<br>Тема: " + work_theme[i][j], studentWorkList);
            addObj("pzCount", "Кількість ПЗ: ", pzCount[i][j], studentWorkList);
            addObj("pzPrice", "Вартість: ", price[i][j], studentWorkList);

            work_count = work_metod_title_name.indexOf(work_list[i][j]);
            if(work_count != -1)
                for(k = 0; k < work_metod_title[work_count].length; k++)
                    addLink("pzMelodLink", k + 1, work_metod_title_name[work_count] + "/" + work_metod_title[work_count][k], studentWorkList);
        }
    }
}
function addObj(classname, baseText, innerData, motherObj) {
    let newObj = document.createElement("div");
    newObj.className = classname;
    if(innerData == "")
        newObj.innerHTML = baseText + "???";
    else
        newObj.innerHTML = baseText + innerData;
    motherObj.append(newObj);
    return newObj;
}
function addLink(classname, baseText, pzLink, motherObj) {
    if(pzLink == "") 
        return;
    let newObj = document.createElement("a");
    newObj.className = classname;
    newObj.href = "Методичні/" + pzLink;
    newObj.target = "_blank";
    newObj.innerHTML = baseText + ". Методичні вказівки";
    motherObj.append(newObj);
    return newObj;
}
createWorkList();