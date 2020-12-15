(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{534:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"видеороnики"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#видеороnики"}},[e._v("#")]),e._v(" Видеоролики")]),e._v(" "),a("p",[e._v("Видеоролики – это видео, воспроизводимое поверх сцены с помощью пользовательского интерфейса "),a("code",[e._v("IMovieUI")]),e._v(", останавливающее выполнение скрипта и обработку пользовательского ввода во время воспроизведения.")]),e._v(" "),a("p",[e._v("Перед началом воспроизведения ролика выполняется переход к указанной текстуре затухания (по умолчанию сплошная черная). Когда воспроизведение завершено, выполняется переход от текстуры затухания к содержимому сцены.")]),e._v(" "),a("p",[e._v("Игрок может пропустить воспроизведение ролика с помощью ввода "),a("code",[e._v("Cancel")]),e._v(" ("),a("code",[e._v("Esc")]),e._v(" по умолчанию для автономного модуля ввода); привязка может быть изменена в меню конфигурации ввода.")]),e._v(" "),a("p",[e._v("Для добавления, редактирования и удаления ресурсов видеороликов используйте менеджер роликов, доступный через контекстное меню "),a("code",[e._v("Naninovel -> Resources -> Movies")]),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/aace59f30f42245fc3ba714d10815d46.png",alt:"Управление роликами"}})]),e._v(" "),a("p",[e._v("Вы можете использовать любые видеоформаты, "),a("a",{attrs:{href:"https://docs.unity3d.com/Manual/VideoSources-FileCompatibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("поддерживаемые Unity"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Поведение воспроизведения роликов можно настроить с помощью контекстного меню "),a("code",[e._v("Naninovel -> Configuration -> Movies")]),e._v("; доступные параметры см. в "),a("RouterLink",{attrs:{to:"/ru/guide/configuration.html#видеороликиs"}},[e._v("руководстве по конфигурации")]),e._v(".")],1),e._v(" "),a("p",[e._v("Используйте команду "),a("a",{attrs:{href:"/ru/api/#movie",target:"_blank"}},[a("code",[e._v("@movie")])]),e._v(", а следом за ней имя клипа для проигрывания ролика в сценариях Naninovel:")]),e._v(" "),a("div",{staticClass:"language-nani extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nani"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('; Дан клип "Opening", добавленный в ресурсы видеороликов, проиграть его')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token command function"}},[a("span",{pre:!0,attrs:{class:"token command-name"}},[e._v("@movie")]),a("span",{pre:!0,attrs:{class:"token command-params"}},[a("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v(" ")]),a("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[e._v("Opening")])])]),e._v("\n")])])]),a("p",[e._v("По умолчанию воспроизводимое видео имеет соотношение сторон 16:9, чтобы предотвратить растягивание. Вы можете изменить это поведение с помощью "),a("RouterLink",{attrs:{to:"/ru/guide/user-interface.html#ui-customization"}},[e._v("переопределения")]),e._v(" интерфейса "),a("code",[e._v("IMovieUI")]),e._v(". Компонент  "),a("code",[e._v("Aspect Ratio Fitter")]),e._v(", прикрепленный к игровому объекту "),a("code",[e._v("MovieImage")]),e._v(", управляет поведением подгонки.")],1),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.gyazo.com/38e8b1fc220d5fedd50f62ab855b2e92.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"ограничения-webgl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ограничения-webgl"}},[e._v("#")]),e._v(" Ограничения WebGL")]),e._v(" "),a("p",[e._v("Из-за ограничений платформы воспроизведение видео на WebGL возможно только в потоковом режиме URI. При создании плеера WebGL все ресурсы видео будут автоматически скопированы в каталог "),a("code",[e._v("Assets/StreamingAssets")]),e._v(". Убедитесь, что ваш веб-хостинг настроен так, чтобы предоставлять доступ к локальным файлам из каталога сборки плеера.")])])}),[],!1,null,null,null);t.default=n.exports}}]);