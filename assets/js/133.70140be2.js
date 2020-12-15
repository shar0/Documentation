(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{532:function(a,e,t){"use strict";t.r(e);var n=t(42),r=Object(n.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"playmaker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#playmaker"}},[a._v("#")]),a._v(" Playmaker")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://assetstore.unity.com/packages/tools/visual-scripting/playmaker-368",target:"_blank",rel:"noopener noreferrer"}},[a._v("PlayMaker"),t("OutboundLink")],1),a._v(" – популярный визуальный сценарный инструмент Unity, специально разработанный для удобства работы пользователей, не являющихся программистами.")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/0a5b219b059fd61c85d225e903d77857.png",alt:""}})]),a._v(" "),t("p",[a._v("Имейте в виду, что в отличие от Bolt, где все C# API Naninovel доступны по умолчанию, PlayMaker требует создания специального класса C# для каждого действия. Это означает, что только ограниченное подмножество API движка доступно из коробки при использовании PlayMaker. Доступные пользовательские действия также могут нарушиться в случае изменения API Naninovel.")]),a._v(" "),t("h2",{attrs:{id:"установка"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#установка"}},[a._v("#")]),a._v(" Установка")]),a._v(" "),t("p",[a._v("Установите PlayMaker, следуя инструкциям из "),t("a",{attrs:{href:"https://hutonggames.fogbugz.com/default.asp?W11",target:"_blank",rel:"noopener noreferrer"}},[a._v("официального руководства"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v("Скачайте и импортируйте "),t("a",{attrs:{href:"https://github.com/Naninovel/PlayMaker/raw/master/NaninovelPlayMaker.unitypackage",target:"_blank",rel:"noopener noreferrer"}},[a._v("пакет расширения PlayMaker"),t("OutboundLink")],1),a._v(".")]),a._v(" "),t("p",[a._v('Пользовательские действия Naninovel должны появиться в браузере действий PlayMaker в категории "Naninovel".')]),a._v(" "),t("p",[t("img",{attrs:{src:"https://i.gyazo.com/a40b0b7b21c73d3b5f64b005085198ea.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"испоnьзование"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#испоnьзование"}},[a._v("#")]),a._v(" Использование")]),a._v(" "),t("p",[a._v("В следующем видео демонстрируется использование FSM PlayMaker (finite state machine) для инициализации движка Naninovel, предварительной загрузки и воспроизведения сценария.")]),a._v(" "),t("p"),t("div",{staticClass:"video-container"},[t("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/N856vi18XVU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),t("p"),a._v(" "),t("h3",{attrs:{id:"события"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#события"}},[a._v("#")]),a._v(" События")]),a._v(" "),t("p",[a._v("Некоторые из основных событий Naninovel могут быть автоматически перенаправлены в FSM PlayMaker. Для этого создайте глобальное "),t("a",{attrs:{href:"https://hutonggames.fogbugz.com/default.asp?W148",target:"_blank",rel:"noopener noreferrer"}},[a._v("пользовательское событие"),t("OutboundLink")],1),a._v(" с соответствующим именем и используйте его внутри FSM. Ниже приведены доступные имена событий:")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("Naninovel/Engine/OnInitialized")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/ScriptPlayer/OnPlay")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/ScriptPlayer/OnStop")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/StateManager/OnGameSaveStarted")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/StateManager/OnGameSaveFinished")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/StateManager/OnGameLoadStarted")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/StateManager/OnGameLoadFinished")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/TextPrinterManager/OnPrintTextStarted")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/TextPrinterManager/OnPrintTextFinished")])]),a._v(" "),t("li",[t("code",[a._v("Naninovel/LocalizationManager/OnLocaleChanged")])])]),a._v(" "),t("p",[a._v("Кроме того, можно транслировать пользовательские события PlayMaker из сценариев Naninovel с помощью команды "),t("code",[a._v("@playmaker")]),a._v(":")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@playmaker")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("EventName")])])]),a._v("\n")])])]),t("p",[a._v('— вызовет глобальное пользовательское событие с именем "EventName" во всех активных FSM в сцене.')]),a._v(" "),t("p",[a._v("Команда также позволяет отправлять события в определенные FSM с помощью параметров "),t("code",[a._v("fsm")]),a._v(" и "),t("code",[a._v("object")]),a._v(". Первый параметр позволяет указать имена FSM, которые должны принимать событие, например:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@playmaker")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("EventName")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" fsm:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Fsm1,Fsm2")])])]),a._v("\n")])])]),t("p",[a._v('— вызовет событие с именем "EventName" для FSM с именами "Fsm1" и "Fsm2".')]),a._v(" "),t("p",[a._v("Когда параметр "),t("code",[a._v("object")]),a._v(" задан, событие будет отправлено только в те FSM, которые применяются к игровым объектам, имеющим соответствующие имена, например:")]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@playmaker")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("EventName")]),t("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" object:")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Obj1,Obj2")])])]),a._v("\n")])])]),t("p",[a._v('— вызовет событие с именем "EventName" для всех FSM, которые прикреплены к игровым объектам с именами "Obj1" и "Obj2".')]),a._v(" "),t("p",[a._v("Вы также можете объединить параметры "),t("code",[a._v("fsm")]),a._v(" и "),t("code",[a._v("object")]),a._v(" для дальнейшей фильтрации FSM, которые должны получить событие.")]),a._v(" "),t("h3",{attrs:{id:"гnобаnьные-переменные"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#гnобаnьные-переменные"}},[a._v("#")]),a._v(" Глобальные переменные")]),a._v(" "),t("p",[a._v("В сценариях Naninovel можно получить доступ к глобальной переменной PlayMaker со следующими пользовательскими "),t("RouterLink",{attrs:{to:"/ru/guide/script-expressions.html#expression-functions"}},[a._v("выражениями функций")]),a._v(", доступными в пакете расширений:")],1),a._v(" "),t("ul",[t("li",[t("code",[a._v('GetPlayMakerGlobalVariable("variableName")')]),a._v(' — возвращает переменную простого типа (int, float, строка, и т.д.) c именем "variableName"')]),a._v(" "),t("li",[t("code",[a._v('GetPlayMakerGlobalArray("variableName", arrayIndex)')]),a._v(' — возвращает значение, хранящееся в индексе "arrayIndex" массива переменной с именем "variableName"')])]),a._v(" "),t("p",[a._v('К примеру, у вас есть целое число "Score" и глобальные переменные PlayMaker булева массива "FinishedRoutes" – вы можете использовать их в сценариях Naninovel следующим образом:')]),a._v(" "),t("div",{staticClass:"language-nani extra-class"},[t("pre",{pre:!0,attrs:{class:"language-nani"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Felix: My score is "),t("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v('{GetPlayMakerGlobalVariable("Score")}')]),a._v(".")]),a._v("\n\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@if")]),t("span",{pre:!0,attrs:{class:"token command-params"}},[t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),t("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('GetPlayMakerGlobalArray("FinishedRoutes",2)')])])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("    Third route (second array index) is completed.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@else")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("    Not yet.")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token command function"}},[t("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@endif")])]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);