(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{388:function(a,t,e){"use strict";e.r(t);var s=e(42),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"локаnизация"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#локаnизация"}},[a._v("#")]),a._v(" Локализация")]),a._v(" "),e("p",[a._v("Все игровые ресурсы (сценарии, аудио, озвучка, фоны и т.д.) могут быть локализованы для разных языков.")]),a._v(" "),e("p",[a._v("По умолчанию все ресурсы, хранящиеся в проекте, используются при запуске игры под "),e("em",[a._v("исходной локалью")]),a._v(". Например, представьте, что вы изначально создаёте игру на английском языке: все оригинальные (исходные) Naninovel скрипты, UI, знаки на фонах и т.д. вы создаёте на английском языке; это означает, что "),e("em",[a._v("исходной локалью")]),a._v(" будет "),e("code",[a._v("en")]),a._v(" (or "),e("code",[a._v("en-GB")]),a._v(" / "),e("code",[a._v("en-US")]),a._v(" / и т.д. в случае, если вы хотите использовать отдельные локали для конкретных регионов).")]),a._v(" "),e("p",[e("em",[a._v("Исходная локаль")]),a._v(" может быть изменена в меню "),e("code",[a._v("Naninovel -> Configuration -> Localization")]),a._v(" с помощью свойства "),e("code",[a._v("Source Locale")]),a._v(". Свойство "),e("code",[a._v("Source Locale")]),a._v(' определяет только имя (ID) локали, связанной с исходными ресурсами проекта, и используется в выпадающем меню настроек "Language" и связанных API-интерфейсах движка для определения локали.')]),a._v(" "),e("p",[a._v("Вы можете настроить дополнительные локали, создав подпапку внутри папки "),e("code",[a._v("Resources/Naninovel/Localization")]),a._v(" (так называемый "),e("em",[a._v("корень ресурсов локализации")]),a._v(") с именем, равным одному из языковых тегов "),e("a",{attrs:{href:"https://gist.github.com/Elringus/db90d9c74f13c00fa35131e61d1b73cb",target:"_blank",rel:"noopener noreferrer"}},[a._v("RFC5646"),e("OutboundLink")],1),a._v(", для которых вы хотите добавить локализацию. Например, чтобы добавить немецкий язык, создайте папку "),e("code",[a._v("Resources/Naninovel/Localization/de")]),a._v('. Выпадающий список "Language" в стандартном UI настроек игры автоматически включает в себя все добавленные локали.')]),a._v(" "),e("p",[a._v("Имейте в виду, что вам не нужно создавать подпапку в "),e("em",[a._v("корне ресурсов локализации")]),a._v(" для "),e("em",[a._v("исходной локали")]),a._v(". Все ресурсы проекта, хранящиеся вне "),e("em",[a._v("корня ресурсов локализации")]),a._v(", по умолчанию принадлежат "),e("em",[a._v("исходной локали")]),a._v(".")]),a._v(" "),e("p",[a._v("Конкретный путь "),e("em",[a._v("корня ресурсов локализации")]),a._v(" можно изменить в меню конфигурации локализации с помощью свойства "),e("code",[a._v("Loader > Path Prefix")]),a._v('. Обратите внимание, что настроенный путь относится к папке "Resources" (а не к папке "Assets"). Папки ресурсов Unity '),e("a",{attrs:{href:"https://docs.unity3d.com/Manual/LoadingResourcesatRuntime.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("обрабатывает особым образом"),e("OutboundLink")],1),a._v("; вы можете иметь несколько таких папок, хранящихся в любом месте внутри ассетов проекта для организационных целей.")]),a._v(" "),e("p",[a._v("Вы можете установить, какая локаль будет выбрана по умолчанию, когда игрок впервые запускает игру, с помощью свойства "),e("code",[a._v("Default Locale")]),a._v(" в меню конфигурации локализации. Если свойство не указано, то игра будет запускаться в "),e("em",[a._v("исходной локали")]),a._v(" по умолчанию.")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/fb50a8c5f5fa6624105f8eeca6a7523e.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"локаnизация-ресурсов"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#локаnизация-ресурсов"}},[a._v("#")]),a._v(" Локализация ресурсов")]),a._v(" "),e("p",[a._v("Внутри "),e("em",[a._v("корня ресурсов локализации")]),a._v(" храните ресурсы, которые будут использоваться вместо исходных при выборе соответствующей локализации в настройках игры.")]),a._v(" "),e("p",[a._v('Например, если вы хотите заменить спрайт внешности "City" основного фона (фонового актора с ID "MainBackground") на другой, когда выбрана локаль '),e("code",[a._v("ja-JP")]),a._v(", поместите локализованную версию по следующему пути:"),e("code",[a._v("Resources/Naninovel/Localization/ja-JP/Backgrounds/MainBackground/City")]),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"локаnизация-сценариев"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#локаnизация-сценариев"}},[a._v("#")]),a._v(" Локализация сценариев")]),a._v(" "),e("p",[a._v("Описанная выше схема локализации ресурсов работает со всеми типами ресурсов, кроме сценариев Naninovel и управляемых текстовых документов. Для этих типов ресурсов используйте инструмент локализации, доступный через "),e("code",[a._v("Naninovel -> Tools -> Localization")]),a._v(":")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://i.gyazo.com/5c6b023cbf4617f44102593f13131571.png",alt:"Инструмент локализации"}})]),a._v(" "),e("p",[a._v("Во-первых, выберите путь к папке локали, в которой будут храниться созданные ресурсы локализации. Убедитесь, что вы выбрали фактическую папку локали (например, "),e("code",[a._v("Resources/Naninovel/Localization/ja-JP")]),a._v("), а не "),e("em",[a._v("корень ресурсов локализации")]),a._v(". Метка под полем свойства будет указывать, когда выбрана допустимая папка локали вывода, отображая имя выбранного целевого объекта локализации.")]),a._v(" "),e("p",[a._v('Включение свойства "Try update" будет пытаться сохранить все существующие в данный момент ресурсы локализации; при отключении этого свойства все существующие ресурсы локализации по указанному пути будут потеряны.')]),a._v(" "),e("p",[a._v('Включение функции "Localize text" также создаст '),e("RouterLink",{attrs:{to:"/ru/guide/managed-text.html"}},[a._v("управляемые текстовые")]),a._v(' документы локализации. При включении появится свойство "Text Folder", позволяющее указать путь к исходным управляемым текстовым документам (по умолчанию '),e("code",[a._v("Assets/Resources/Naninovel/Text")]),a._v("). Можно задать путь к папке, содержащей локализованную версию текстовых документов, чтобы создать вариант локализации, использующий не исходный язык.")],1),a._v(" "),e("p",[a._v('Нажмите кнопку "Generate", чтобы создать (обновить) ресурсы локализации.')]),a._v(" "),e("p",[a._v("Скрипт локализации документов состоит из операторов в следующем формате:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# ID")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Исходный текст")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Переведнный текст")]),a._v("\n")])])]),e("p",[e("code",[a._v("# ID")]),a._v(" строка – это уникальный ID исходного оператора в сценарии Naninovel, вы не должны его изменять.")]),a._v(" "),e("p",[e("code",[a._v("; Source text")]),a._v(" строка – это исходный текст, который вы должны перевести. Это просто комментарий, поэтому изменение этой строки не будет иметь никакого эффекта; это предусмотрено для удобства.")]),a._v(" "),e("p",[a._v("Вы должны поместить актуальный перевод сразу после строки комментария с исходным текстом. Вы можете использовать любое количество строк для перевода, просто убедитесь, что они расположены перед следующей строкой "),e("code",[a._v("# ID")]),a._v(".")]),a._v(" "),e("p",[a._v("Вот пример перевода обычной текстовой строки:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# f63f03ea")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Yuko: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ultricies enim, id venenatis arcu. Nullam rhoncus eros eu ante vulputate tempus.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Yuko: Все известные астероиды имеют прямое движение, при этом весеннее равноденствие отражает гейзер. Уравнение времени однократно. Большая Медведица, оценивая блеск освещенного металлического шарика, пространственно притягивает первоначальный метеорный дождь.")]),a._v("\n")])])]),e("p",[a._v("Если перевод занимает слишком много места, вы можете разбить его на отдельные команды:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# f63f03ea")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Yuko: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ultricies enim, id venenatis arcu. Nullam rhoncus eros eu ante vulputate tempus.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Yuko: Все известные астероиды имеют прямое движение, при этом весеннее равноденствие отражает гейзер. Уравнение времени однократно.")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Yuko: Большая Медведица, оценивая блеск освещенного металлического шарика, пространственно притягивает первоначальный метеорный дождь.")]),a._v("\n")])])]),e("p",[a._v("Для соответствия стоит включить в перевод любые вписанные в строки команды, присутствующие в исходном операторе:")]),a._v(" "),e("div",{staticClass:"language-nani extra-class"},[e("pre",{pre:!0,attrs:{class:"language-nani"}},[e("code",[e("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# b53b395d")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Kohaku: Qui ante molestie sit tempor felis.[br 2][char Kohaku.Casual/Angry][style #ff0000,bold,45]Adipiscing elit?[style default][br][skipInput]")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Kohaku: Противостояние вызывает кислый метеорный дождь."),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("br")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("2")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("char")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Kohaku.Casual/Angry")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("style")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("#ff0000,bold,45")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v("Меандр разрушаем?"),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("style")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),e("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("default")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("br")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),e("span",{pre:!0,attrs:{class:"token inline-command function"}},[e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("skipInput")]),e("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])])]),a._v("\n")])])]),e("div",{staticClass:"custom-block warn"},[e("p",{staticClass:"custom-block-title"},[a._v("ВНИМАНИЕ")]),a._v(" "),e("p",[a._v("Вы "),e("strong",[a._v("не должны переводить ID персонажей")]),a._v(" (или любые другие ID акторов). Если вы сделаете это, некоторые функции (например, подсветка персонажей и синхронизация губ) будут сломаны. Если вы хотите перевести имена авторов, отображаемые в текстовых принтерах, используйте вместо этого функцию "),e("RouterLink",{attrs:{to:"/ru/guide/characters.html#display-names"}},[a._v("отображаемых имён")]),a._v(".")],1)]),a._v(" "),e("p",[a._v("Общее количество слов, содержащихся в сгенерированных документах локализации (за исключением хэш-строк), отображается в окне инструмента локализации после завершения процедуры генерации.")]),a._v(" "),e("p",[a._v('По умолчанию сгенерированные документы будут содержать текст для перевода, взятый из исходного сценария Naninovel. Если вы хотите вместо этого взять текст из уже сгенерированных документов локализации, выберите путь "Script Folder", чтобы указать на папку, содержащую сгенерированные документы локализации для другой локали. Например, предположим, что ваша исходная локаль выполнена на испанском. По умолчанию документы локализации будут содержать исходный текст на испанском языке. Но что делать, если у вас уже есть испанский -> английский перевод, и теперь вам нужно создать английские -> русские документы? Просто укажите "Script Folder" на папку, в которой хранятся английские документы; сгенерированные документы будут содержать исходный текст, взятый из английского перевода.')]),a._v(" "),e("div",{staticClass:"custom-block example"},[e("p",{staticClass:"custom-block-title"},[a._v("ПРИМЕР")]),a._v(" "),e("p",[a._v("Пример настройки локализации вы можете найти в "),e("RouterLink",{attrs:{to:"/ru/guide/getting-started.html#demo-project"}},[a._v("демонстрационном проекте")]),a._v(". Вы можете использовать его в качестве примера в случае возникновения проблем с настройкой локализации в вашем собственном проекте.")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);