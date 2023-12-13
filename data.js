var studentName = ["Богдан Пожар Михайлович", "Вінницький М.В.", "Кушнаренко Егор", "Лаптев", "Макс Гаман Олександрович", "Тікус І.Є.", "", "", ""];
var group = ["ІТУ-21-3", "ІТУ-20-2", "", "", "", "ІТУ-21-2", "", "", ""];
var variant = ["13", "2", "6", "8", "4", "", "", "7", ""];

var dl_mail = ["bohdan.pozhar@nure.ua", "", "", "", "", "", "", "", ""];
var dl_pass = ["Gubk@bob2004", "", "", "", "", "", "", "", ""];

var work_list = [
    ["Софт скилл", "IT управління бізнес процесами", "ТРКС"],
    ["Інформационні системи менеджменту", "Менеджмент ІТ проектів", "Веб технології"],
    ["Інформационні системи менеджменту", "Менеджмент ІТ проектів"],
    ["УІТІП"],
    ["Веб технології", "ОСТСП", "Python", "Теорія ймовірностей"],
    ["ТРКС"],
    ["Cloud"],
    ["Менеджмент ІТ проектів"],
    ["ТРКС"]
];
var additional_info = [
    ["", "", "Мобільний додаток \"Світ Кіно\""],
    ["", "", ""],
    ["", ""],
    [""],
    ["", "", "Всього 4 роботи", "Всього 7 робіт"],
    ["Мобільний додаток для перегляду спортивних подій \"Sport TV\""],
    ["ІІ ОСНОВИ КОНТЕЙНЕРИЗАЦІЇ"],
    ["Робити ПЗ 2-3"],
    ["Інтернет магазин \"Comfy\""]
];
var ready_status = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 1],
    [1],
    [1, 1, 0, 0],
    [1],
    [1],
    [1],
    [1]
];
var price = [
    [1000, 1000, 1000],
    [1000, 1000, 1000],
    [1000, 1000, 1000],
    [1200],
    [1000, 1000, 1000, 1200],
    [800],
    [500],
    [400],
    [1000]
];

var work_metod_title_name = [
    "ТРКС", "ОСТСП", "Python", "Інформационні системи менеджменту", "УІТІП", "Софт скилл", "IT управління бізнес процесами", "Менеджмент ІТ проектів", "Веб технології", "Cloud", "Теорія ймовірностей"
];
var work_metod_title = [
    ["МУ_ПЗ_ТРКС"], ["1", "2", "3", "4", "5", "6", "7", "8", "Аccемблер"], ["Для пз 1", "ПЗ1 Python", "Для пз 2", "ПЗ2 Python"], 
    ["ПЗ  1", "ПЗ  3", "ПЗ  5", "ПЗ  7"], ["ПР У ІТ  ІП Ч 1(1_2_3)", "ПР У ІТ ІП Ч2 (4_5_6)"], ["1 Soft skills", "2", "3"],
    ["ПЗ  1-2", "ПЗ  3-4", "ПЗ  5-6", "ПЗ  7-8"], ["ПЗ №1", "Практичне завдання № 2", "Практичне завдання № 3"], ["Перелік_завдань_Загальний_опис_2023_1", "Метод_WTTJS_ПЗ_2023"],
    ["МВ_ПЗ_Технології_Cloud_Систем"], ["Таблиці ТЙЙПіМС", "Тема 1", "Тема_2", "Тема_3", "Тема 4"]
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
            if(additional_info[i][j] == "")
                addObj("workName", "", work_list[i][j], studentWorkList, ready_status[i][j]);
            else
                addObj("workName", "", work_list[i][j] + "<br>" + additional_info[i][j], studentWorkList, ready_status[i][j]);
            addObj("pzPrice", "Вартість: ", price[i][j], studentWorkList, ready_status[i][j]);

            work_count = work_metod_title_name.indexOf(work_list[i][j]);
            if(work_count != -1)
                for(k = 0; k < work_metod_title[work_count].length; k++)
                    addLink("pzMelodLink", k + 1, work_metod_title_name[work_count] + "/" + work_metod_title[work_count][k] + ".pdf", studentWorkList, ready_status[i][j]);
        }
    }
}
function addObj(classname, baseText, innerData, motherObj, is_ready = false) {
    let newObj = document.createElement("div");
    newObj.className = classname;
    if(innerData == "")
        newObj.innerHTML = baseText + "???";
    else
        newObj.innerHTML = baseText + innerData;
    if(is_ready)
        newObj.style.backgroundColor = "rgb(235, 123, 123)";
    motherObj.append(newObj);
    return newObj;
}
function addLink(classname, baseText, pzLink, motherObj, is_ready = false) {
    if(pzLink == "") 
        return;
    let newObj = document.createElement("a");
    newObj.className = classname;
    newObj.href = "Методичні/" + pzLink;
    newObj.target = "_blank";
    newObj.innerHTML = baseText + ". Методичні вказівки";
    if(is_ready)
        newObj.style.backgroundColor = "rgb(235, 123, 123)";
    motherObj.append(newObj);
    return newObj;
}
createWorkList();