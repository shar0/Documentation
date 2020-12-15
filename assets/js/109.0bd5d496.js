(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{406:function(a,t,s){"use strict";s.r(t);var e=s(42),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"выборы"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#выборы"}},[a._v("#")]),a._v(" Выборы")]),a._v(" "),s("p",[a._v("Данная функция позволяет предоставить пользователю несколько вариантов выбора и перенаправить выполнение сценария в зависимости от того, какой выбор делает пользователь.")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/023502e43b35caa706c88fd9ab32003d.png",alt:"Выборы"}})]),a._v(" "),s("p",[a._v("Используйте команды "),s("a",{attrs:{href:"/api/#choice",target:"_blank"}},[s("code",[a._v("@choice")])]),a._v(", за которыми следует список выборов и (необязательно) путь "),s("code",[a._v("goto")]),a._v(", чтобы добавить варианты из сценариев Naninovel:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Вывести текст, затем сразу же показать варианты и остановите выполнение сценария.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Продолжить выполнение этого сценария или загрузить другой?"),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("skipInput")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Продолжить со следующей строки"')])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Продолжить с указанной отметки"')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Labelname")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Загрузить другой с начала"')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("AnotherScript")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Загрузить другой с указанного отметки"')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("AnotherScript.LabelName")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n")])])]),s("p",[a._v("Значение параметра "),s("code",[a._v("goto")]),a._v(" – это путь для перемаршрутизации после того, как пользователь сделает соответствующий выбор. Он задается в следующем формате: "),s("em",[a._v("имя скрипта")]),a._v("."),s("em",[a._v("имя отметки")]),a._v(". Если имя отметки опущено, то указанный сценарий будет воспроизведен с самого начала; если имя сценария опущено, то ссылка будет сделана на метку в воспроизводимом в данный момент сценарии:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Загружает и начинает воспроизводить сценарий Naninovel с именем `Script001` с самого начала")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("goto:Script001")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; То же самое, что и выше, но начинает воспроизводить с отметки `AfterStorm`")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("goto:Script001.AfterStorm")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; Переводит воспроизведение на отметку `Epilogue` в воспроизводимом в данный момент сценарии")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("goto:.Epilogue")]),a._v("\n")])])]),s("p",[a._v("Если параметр "),s("code",[a._v("goto")]),a._v(" не указан, выполнение текущего сценария продолжится со следующей строки.")]),a._v(" "),s("p",[a._v("Акторы обработчика выбора используются для обработки команд "),s("a",{attrs:{href:"/api/#choice",target:"_blank"}},[s("code",[a._v("@choice")])]),a._v(". Вы можете добавлять, редактировать и удалять обработчики выборов с помощью диспетчера выборов, доступного через контекстное меню "),s("code",[a._v("Naninovel -> Resources -> Choice Handlers")]),a._v(".")]),a._v(" "),s("p",[a._v("Поведение обработчиков выборов можно настроить с помощью контекстного меню "),s("code",[a._v("Naninovel -> Configuration -> Choice Handlers")]),a._v("; доступные параметры см. в "),s("RouterLink",{attrs:{to:"/ru/guide/configuration.html#кнопки-выбор"}},[a._v("руководстве по конфигурации")]),a._v(".")],1),a._v(" "),s("h2",{attrs:{id:"кнопки-выбора"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#кнопки-выбора"}},[a._v("#")]),a._v(" Кнопки выбора")]),a._v(" "),s("p",[a._v("Команда "),s("a",{attrs:{href:"/ru/api/#choice",target:"_blank"}},[s("code",[a._v("@choice")])]),a._v(" принимает опциональный параметр "),s("code",[a._v("button")]),a._v(', указывающий путь (относительно папки "Resources") к пользовательскому префабу, представляющей объект варианта выбора.')]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" handler:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ButtonArea")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" button:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("MapButtons/Home")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("-300,-300")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".HomeScene")])])]),a._v("\n")])])]),s("p",[a._v("– здесь мы используем обработчик выбора, поддерживающий позиционирование, чтобы представить интересующую нас точку на импровизированной карте, где параметр "),s("code",[a._v("button")]),a._v(" указывает на префаб, состоящий из кнопки, наложенной поверх изображения. Префаб хранится здесь: "),s("code",[a._v("Assets/Resources/MapButtons/Home.prefab")]),a._v(".")]),a._v(" "),s("p",[a._v("Чтобы создать сборную кнопку выбора из шаблона, используйте контекстное меню ассетов "),s("code",[a._v("Create -> Naninovel -> Choice Button")]),a._v(".")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/c2bd4abaa0275f7cdd37c56fd2ff0dec.png",alt:""}})]),a._v(" "),s("p",[a._v("Не забывайте "),s("strong",[a._v('хранить пользовательские кнопки выбора в папке "Resources"')]),a._v(", иначе они не смогут загружаться по запросу.")]),a._v(" "),s("p",[a._v("Если параметр "),s("code",[a._v("button")]),a._v(" команды "),s("a",{attrs:{href:"/ru/api/#choice",target:"_blank"}},[s("code",[a._v("@choice")])]),a._v(" не задан, используется префаб кнопки по умолчанию.")]),a._v(" "),s("p",[a._v("Чтобы использовать другой текстовый компонент (например, TMPro) для текста выбора, используйте "),s("code",[a._v("On Summary TextChanged")]),a._v(" "),s("a",{attrs:{href:"https://docs.unity3d.com/Manual/UnityEvents",target:"_blank",rel:"noopener noreferrer"}},[a._v("(событие Unity"),s("OutboundLink")],1),a._v(" компонента кнопки выбора).")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/8810c51b336bfd653efcde591fe1c41f.png",alt:""}})]),a._v(" "),s("h2",{attrs:{id:"списочный-обработчик-выбора"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#списочный-обработчик-выбора"}},[a._v("#")]),a._v(" Списочный обработчик выбора")]),a._v(" "),s("p",[a._v("Обработчик списка используется по умолчанию. Он располагает кнопки выбора внутри горизонтальной панели компоновки и игнорирует параметр "),s("code",[a._v("pos")]),a._v(" команды "),s("a",{attrs:{href:"/ru/api/#choice",target:"_blank"}},[s("code",[a._v("@choice")])]),a._v(".")]),a._v(" "),s("h2",{attrs:{id:"обработчик-выбора-по-обnасти"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#обработчик-выбора-по-обnасти"}},[a._v("#")]),a._v(" Обработчик выбора по области")]),a._v(" "),s("p",[a._v("В отличие от списочного обработчика, областной не навязывает какой-либо конкретный макет и позволяет вручную устанавливать позиции добавленных кнопок выбора с помощью параметра "),s("code",[a._v("pos")]),a._v(". Например, вот один из способов создания интерактивной карты с командами выбора и обработчиком областей:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# Map")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Map")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@hidePrinter")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" handler:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ButtonArea")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" button:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("MapButtons/Home")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("-300,-300")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".HomeScene")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" handler:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ButtonArea")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" button:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("MapButtons/Shop")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("300,200")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".ShopScene")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# HomeScene")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Home")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Home, sweet home!")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Map")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# ShopScene")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@back")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Shop")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Don't forget about cucumbers!")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Map")])])]),a._v("\n")])])]),s("p"),s("div",{staticClass:"video-container"},[s("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/cNRNgk5HhKQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),s("p"),a._v(" "),s("h2",{attrs:{id:"добавnение-поnьзоватеnьских-обработчиков-выбора"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#добавnение-поnьзоватеnьских-обработчиков-выбора"}},[a._v("#")]),a._v(" Добавление пользовательских обработчиков выбора")]),a._v(" "),s("p",[a._v("Вы можете добавить пользовательские обработчики выбора на основе встроенных шаблонов или создать новые обработчики с нуля. Например, давайте настроим встроенный шаблон "),s("code",[a._v("ButtonArea")]),a._v(".")]),a._v(" "),s("p",[a._v("Используйте контекстное меню ассетов "),s("code",[a._v("Create -> Naninovel -> Choice Handler -> ButtonArea")]),a._v(", чтобы создать префаб обработчика кнопки на за пределами пакета Naninovel, например, в папке "),s("code",[a._v("Assets/ChoiceHandlers")]),a._v(".")]),a._v(" "),s("p",[a._v("Отредактируйте обработчик: измените шрифт, текстуры, добавьте анимацию и т.д. Дополнительные сведения о доступных инструментах редактирования пользовательского интерфейса см. в "),s("a",{attrs:{href:"https://docs.unity3d.com/Packages/com.unity.ugui@latest",target:"_blank",rel:"noopener noreferrer"}},[a._v("документации Unity"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[a._v("Сделайте обработчик доступным для ресурсов движка с помощью графического менеджера обработчиков выбора, к которому можно обратиться через контекстное меню редактора "),s("code",[a._v("Naninovel -> Resources -> Choice Handlers")]),a._v(". Добавьте новую запись с помощью кнопки "),s("code",[a._v("+")]),a._v(" (плюс), введите ID актора (может отличаться от имени префаба) и дважды щелкните запись, чтобы открыть настройки актора. Перетащите префаб обработчика в поле "),s("code",[a._v("Resource")]),a._v(".")]),a._v(" "),s("p",[s("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:"https://i.gyazo.com/cb3a0ff7f22b22cec6546acb388719fc.mp4",type:"video/mp4"}})])]),a._v(" "),s("p",[a._v("Теперь вы можете использовать новый обработчик выбора, указав его ID в параметре "),s("code",[a._v("handler")]),a._v(" команд "),s("a",{attrs:{href:"/ru/api/#choice",target:"_blank"}},[s("code",[a._v("@choice")])]),a._v(".")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Текст выбора"')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" handler:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("MyNewHandler")])])]),a._v("\n")])])]),s("p",[a._v("Кроме того, можно создать обработчик выбора с нуля, вручную реализовав интерфейс "),s("code",[a._v("IChoiceHandlerActor")]),a._v(". См. руководство по "),s("RouterLink",{attrs:{to:"/ru/guide/custom-actor-implementations.html"}},[a._v("реализации пользовательских акторов")]),a._v(" для получения дополнительной информации.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);