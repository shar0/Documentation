(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{543:function(t,a,s){"use strict";s.r(a);var e=s(42),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"консоnь-разработчика"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#консоnь-разработчика"}},[t._v("#")]),t._v(" Консоль разработчика")]),t._v(" "),s("p",[t._v("Консоль разработчика используется для выполнения статических методов C# с помощью внутриигрового UI.")]),t._v(" "),s("p",[t._v("Чтобы отобразить UI консоли во время работы игры, убедитесь, что консоль разработчика включена в конфигурации движка, и нажмите клавишу "),s("code",[t._v("~")]),t._v(" (тильда). Если у вас возникли проблемы с использованием клавиши по умолчанию (например, в редакторе Unity на Mac OS), вы можете изменить его с помощью свойства "),s("code",[t._v("Toggle Console Key")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/bc56a837c03d198e2d8141bdebc2e696.png",alt:"Конфигурация движка"}})]),t._v(" "),s("p",[t._v("Чтобы предоставить методу C# консоли, добавьте атрибут "),s("code",[t._v("ConsoleCommand")]),t._v(" к статическому методу. Атрибут имеет необязательный строковый аргумент, позволяющий задать короткую ссылку:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConsoleCommand")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" ToggleDebugInfo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" UI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DebugInfoGUI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Toggle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("В консоли введите полное имя метода или короткую ссылку (если она применяется) и нажмите клавишу "),s("code",[t._v("Enter")]),t._v(" для выполнения метода.")]),t._v(" "),s("p",[s("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:"https://i.gyazo.com/bd41a9a8fff91eb575b235a6b641dcce.mp4",type:"video/mp4"}})])]),t._v(" "),s("p",[t._v("Следующие команды доступны на данный момент:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Команда")]),t._v(" "),s("th",[t._v("Описание")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("nav")]),t._v(" "),s("td",[t._v("Переключает UI навигатора сценариев Naninovel.")])]),t._v(" "),s("tr",[s("td",[t._v("debug")]),t._v(" "),s("td",[t._v("Переключает окно "),s("RouterLink",{attrs:{to:"/ru/guide/naninovel-scripts.html#отладка-сценариев"}},[t._v("отладки сценариев Naninovel")]),t._v(".")],1)]),t._v(" "),s("tr",[s("td",[t._v("var")]),t._v(" "),s("td",[t._v("Переключает окно"),s("RouterLink",{attrs:{to:"/ru/guide/custom-variables.html#отладка-переменных"}},[t._v("редактора пользовательских переменных")]),t._v(".")],1)]),t._v(" "),s("tr",[s("td",[t._v("purge")]),t._v(" "),s("td",[t._v("Сбрасывает кэш загруженных ресурсов, когда используется провайдер "),s("RouterLink",{attrs:{to:"/ru/guide/resource-providers.html#google-drive"}},[t._v("Google Drive")]),t._v(".")],1)]),t._v(" "),s("tr",[s("td",[t._v("play")]),t._v(" "),s("td",[t._v("Начинает исполнять загруженный в данный момент сценарий Naninovel.")])]),t._v(" "),s("tr",[s("td",[t._v("stop")]),t._v(" "),s("td",[t._v("Останавливает исполнение загруженного в данный момент сценарая Naninovel.")])]),t._v(" "),s("tr",[s("td",[t._v("rewind (int)")]),t._v(" "),s("td",[t._v("Откатывает загруженный в данный момент сценарий Naninovel к строке с заданным индексом. Строка должна быть либо командой, либо универсальным текстом. При перемотке назад строка должна существовать в стеке отката.")])]),t._v(" "),s("tr",[s("td",[t._v("reload")]),t._v(" "),s("td",[t._v("Исполняет "),s("RouterLink",{attrs:{to:"/ru/guide/naninovel-scripts.html#горячая-перезагрузка"}},[t._v("горячую перезагрузку")]),t._v(" проигрываемого в данный момент сценарая Naninovel. Работает только в редакторе Unity.")],1)])])]),t._v(" "),s("h2",{attrs:{id:"испоnнение-команд"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#испоnнение-команд"}},[t._v("#")]),t._v(" Исполнение команд")]),t._v(" "),s("p",[t._v("Вы можете вызвать команды сценария через консоль разработчика. Введите командную строку точно так же, как вы это делаете в сценариях Naninovel, и она будет немедленно выполнена. Помимо прочего, это может быть полезно для отладки пользовательских переменных состояния. Например, вы можете вывести текущее значение любой пользовательской переменной:")]),t._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@print")]),s("span",{pre:!0,attrs:{class:"token whitespaces"}},[t._v(" ")]),s("span",{pre:!0,attrs:{class:"token expression selector"}},[t._v("{VariableName}")])]),t._v("\n")])])]),s("p",[t._v("— выведет значение переменной "),s("code",[t._v("VariableName")]),t._v(" в стандартном принтере.")]),t._v(" "),s("p"),s("div",{staticClass:"video-container"},[s("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/wcgTGro0_SE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),s("p")])}),[],!1,null,null,null);a.default=n.exports}}]);