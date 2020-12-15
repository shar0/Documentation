(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{372:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"naninovel-脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#naninovel-脚本"}},[a._v("#")]),a._v(" Naninovel 脚本")]),a._v(" "),s("p",[a._v("Naninovel脚本时文本文件 ("),s("code",[a._v(".nani")]),a._v(" 后缀扩展名) 用于控制场景种的事件发生。脚本创建使用 "),s("code",[a._v("Create -> Naninovel -> Naninovel Script")]),a._v(" 菜单。你可以使用"),s("a",{attrs:{href:"#%E5%86%85%E7%BD%AE%E5%8F%AF%E8%A7%86%E5%8C%96%E7%BC%96%E8%BE%91%E5%99%A8"}},[a._v("内置可视化编辑器")]),a._v(" 或外置文本编辑器, 比如 Notepad, TextEdit 或者 "),s("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("VS Code"),s("OutboundLink")],1),a._v(".")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/f552c2ef323f9ec1171eba72e0c55432.png",alt:""}})]),a._v(" "),s("p",[a._v("每行在Naninovel中都代表一句状态表现，包含，命令，普通文本，标签，注释。\n表达的类型由每行前面的前缀符号定义，如下所示：")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[a._v("前缀符号")]),a._v(" "),s("th",[a._v("表达类型")])])]),a._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("@")]),a._v(" "),s("td",[s("a",{attrs:{href:"#%E5%91%BD%E4%BB%A4%E8%A1%8C"}},[a._v("命令行")])])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v("#")]),a._v(" "),s("td",[s("a",{attrs:{href:"#%E6%A0%87%E7%AD%BE%E8%A1%8C"}},[a._v("标签行")])])]),a._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[a._v(";")]),a._v(" "),s("td",[s("a",{attrs:{href:"#%E6%B3%A8%E9%87%8A%E8%A1%8C"}},[a._v("注释行")])])])])]),a._v(" "),s("p",[a._v("当前缀没有任何符号的时候，就被视为"),s("a",{attrs:{href:"#%E6%99%AE%E9%80%9A%E5%86%85%E5%AE%B9%E6%96%87%E6%9C%AC%E8%A1%8C"}},[a._v("普通内容文本行")]),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"命令行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行"}},[a._v("#")]),a._v(" 命令行")]),a._v(" "),s("p",[s("code",[a._v("@")]),a._v("开头的一行，被视为命令行，代表单个操作，可以用于控制场景中的发生动作，\n比如：改变背景，移动人物，或者加载另一个naninovel脚本。")]),a._v(" "),s("h3",{attrs:{id:"命令别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令别名"}},[a._v("#")]),a._v(" 命令别名")]),a._v(" "),s("p",[a._v("在命令符号"),s("code",[a._v("@")]),a._v("之后应该跟一个命令名，命令名可以是生效的C#类名或者使用"),s("code",[a._v("CommandAlias")]),a._v("来注释的别名。")]),a._v(" "),s("p",[a._v("比如，"),s("a",{attrs:{href:"/api/#save",target:"_blank"}},[s("code",[a._v("@save")])]),a._v("（用于自动保存游戏的命令）是由C#类"),s("code",[a._v("AutoSave")]),a._v("来实际运行生效的，在该类前有用"),s("code",[a._v('[CommandAlias("save")]')]),a._v("方式注明，所以你就可以使用"),s("code",[a._v("@save")]),a._v("或者"),s("code",[a._v("@AutoSave")]),a._v("任一来调用该命令。")]),a._v(" "),s("p",[a._v("命令名不区分大小写，下列所示的表达式，都会调用相同的"),s("code",[a._v("AutoSave")]),a._v("自动保存命令：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@save")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@Save")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@AutoSave")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@autosave")])]),a._v("\n")])])]),s("h3",{attrs:{id:"命令参数及参数别名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令参数及参数别名"}},[a._v("#")]),a._v(" 命令参数及参数别名")]),a._v(" "),s("p",[a._v("许多命令都有很多参数，定义了命令产生的各种效果。参数是由参数名加("),s("code",[a._v(":")]),a._v(")组成。同样可以由生效命令类对应参数名字或"),s("code",[a._v("CommandParameter")]),a._v("注释的别名调用。")]),a._v(" "),s("p",[a._v("基本格式如下：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@commandId")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" paramId:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("paramValue")])]),s("span",{pre:!0,attrs:{class:"token whitespaces"}},[a._v(" ")])]),a._v("\n@命令名 参数名:参数值\n")])])]),s("p",[a._v("如"),s("a",{attrs:{href:"/api/#hidechars",target:"_blank"}},[s("code",[a._v("@hideChars")])]),a._v("命令，用于隐藏所有场景中可见角色，有如下使用方式：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@hideChars")])]),a._v("\n")])])]),s("p",[a._v("你可以使用"),s("code",[a._v("time")]),a._v("参数，小数控制在人物完全消失的渐隐时长如下：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@hideChars")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("5.5")])])]),a._v("\n")])])]),s("p",[a._v("上面所示效果，人物完全消失前有5.5秒的渐隐效果。")]),a._v(" "),s("p",[a._v("你可以使用"),s("code",[a._v("wait")]),a._v("布尔参数控制，下一句话是否立即执行，或是在当前命令执行完成后开始执行，如下：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@hideChars")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" time:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("5.5")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" wait:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@hidePrinter")])]),a._v("\n")])])]),s("p",[a._v("文本将在人物开始隐藏的时候立即消失，如果参数为"),s("code",[a._v("true")]),a._v("或者不设置，文本就会在"),s("a",{attrs:{href:"/api/#hidechars",target:"_blank"}},[s("code",[a._v("@hideChars")])]),a._v("执行完成后隐藏。")]),a._v(" "),s("h3",{attrs:{id:"参数值类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参数值类型"}},[a._v("#")]),a._v(" 参数值类型")]),a._v(" "),s("p",[a._v("Depending on the command parameter, it could expect one of the following value types:")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("类型")]),a._v(" "),s("th",[a._v("描述")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("String")]),a._v(" "),s("td",[a._v("简单string字符串类型， 如"),s("code",[a._v("LoremIpsum")]),a._v('，如果中间有空格，记得加双引号如：`"Lorem ipsum dolor sit amet."。')])]),a._v(" "),s("tr",[s("td",[a._v("Integer")]),a._v(" "),s("td",[a._v("整数类型,如："),s("code",[a._v("1")]),a._v(", "),s("code",[a._v("150")]),a._v(", "),s("code",[a._v("-25")]),a._v("。")])]),a._v(" "),s("tr",[s("td",[a._v("Decimal")]),a._v(" "),s("td",[a._v("浮点数类型，如："),s("code",[a._v("1.0")]),a._v(", "),s("code",[a._v("12.08")]),a._v(", "),s("code",[a._v("-0.005")]),a._v("。")])]),a._v(" "),s("tr",[s("td",[a._v("Boolean")]),a._v(" "),s("td",[a._v("布尔值，"),s("code",[a._v("true")]),a._v(" or "),s("code",[a._v("false")]),a._v("不分大小写。")])]),a._v(" "),s("tr",[s("td",[a._v("Named<>")]),a._v(" "),s("td",[a._v("一个名字和上述参数值类型组成的参数类型，，名字部分用点分开，比如： "),s("em",[a._v("Named<Integer>")]),a._v(": "),s("code",[a._v("foo.8")]),a._v(", "),s("code",[a._v("bar.-20")]),a._v("。")])]),a._v(" "),s("tr",[s("td",[a._v("List<>")]),a._v(" "),s("td",[a._v("上述参数值类型组成的参数列表型，由逗号分隔，比如： 字符串类型"),s("em",[a._v("List<String>")]),a._v(": "),s("code",[a._v('foo,bar,"Lorem ipsum."')]),a._v(", 小数类型，"),s("em",[a._v("List<Decimal>")]),a._v(": "),s("code",[a._v("12,-8,0.105,2")]),a._v("。")])])])]),a._v(" "),s("h3",{attrs:{id:"无名参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#无名参数"}},[a._v("#")]),a._v(" 无名参数")]),a._v(" "),s("p",[a._v("许多命令，都有无名参数，被视为无名参数的指不用指定参数名字的参数。")]),a._v(" "),s("p",[a._v("比如， "),s("a",{attrs:{href:"/api/#bgm",target:"_blank"}},[s("code",[a._v("@bgm")])]),a._v(" 命令，就有一个定义播放音轨的无名参数：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("PianoTheme")])])]),a._v("\n")])])]),s("p",[a._v('"PianoTheme" 在这里就是 "Bgm路径" 的'),s("em",[a._v("String")]),a._v(" 参数。")]),a._v(" "),s("p",[a._v("每个命令都只有一个无名参数，并且一定要定义在所有其他参数之前。")]),a._v(" "),s("h3",{attrs:{id:"可选和必需参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可选和必需参数"}},[a._v("#")]),a._v(" 可选和必需参数")]),a._v(" "),s("p",[a._v("大多数命令的参数都是"),s("em",[a._v("可选")]),a._v("的，这表示命令执行时，这个参数都有个预设值或者不需要任何值。比如，"),s("a",{attrs:{href:"/api/#resettext",target:"_blank"}},[s("code",[a._v("@resetText")])]),a._v(" 不定义任何参数时，它就会重置为默认的printer，但是你也可以定义printer的ID比如："),s("code",[a._v("@resetText printer:Dialogue")]),a._v("。")]),a._v(" "),s("p",[a._v("部分参数是命令执行所必需的，所以确保总是定义正确的。")]),a._v(" "),s("h3",{attrs:{id:"命令api参照"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令api参照"}},[a._v("#")]),a._v(" 命令API参照")]),a._v(" "),s("p",[a._v("当前可用命令，参数以及示例参考 "),s("RouterLink",{attrs:{to:"/zh/api/"}},[a._v("命令API参照")]),a._v(".")],1),a._v(" "),s("h2",{attrs:{id:"普通内容文本行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通内容文本行"}},[a._v("#")]),a._v(" 普通内容文本行")]),a._v(" "),s("p",[a._v("为了让写大量文本的时候更舒适，普通文本行会被自动应用。当一行文本前没有任何预设前缀符号的时候，这行话会被默认为普通文本行，如下：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),a._v("\n")])])]),s("p",[a._v("说话人的ID可以写在内容前面，用("),s("code",[a._v(":")]),a._v(")隔开，这样会自动关联"),s("RouterLink",{attrs:{to:"/zh/guide/characters.html"}},[a._v("人物元素")]),a._v("中定义的人物，如下：")],1),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Felix: Lorem ipsum dolor sit amet, consectetur adipiscing elit.")]),a._v("\n")])])]),s("p",[a._v("参照如下所示，在人物ID后面定义外观，可以同时改变人物的外观：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Felix.Happy: Lorem ipsum dolor sit amet.")]),a._v("\n")])])]),s("p",[a._v("上面两行所示和下面所示行的效果等效：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Felix.Happy")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" wait:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Felix: Lorem ipsum dolor sit amet.")]),a._v("\n")])])]),s("h3",{attrs:{id:"内联命令执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联命令执行"}},[a._v("#")]),a._v(" 内联命令执行")]),a._v(" "),s("p",[a._v("有时，你可能会想在文本显示的时候达到某些效果执行相应命令，比如在人物说某些话时，改变表情，或者播放音效，对应剧情中的某些事件发生，内联命令执行的这个特性就是用来解决此类问题。")]),a._v(" "),s("p",[a._v("所有命令，("),s("RouterLink",{attrs:{to:"/zh/api/"}},[a._v("内置命令")]),a._v(" 和 "),s("RouterLink",{attrs:{to:"/zh/guide/custom-commands.html"}},[a._v("用户自定义命令")]),a._v(") 都可以内联到普通文本执行，使用中括号隔开("),s("code",[a._v("[")]),a._v(","),s("code",[a._v("]")]),a._v(")，如下：")],1),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Felix: Lorem ipsum"),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("char")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Felix.Happy")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v("pos:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("0.75 ")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v("wait:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" dolor sit amet, consectetur adipiscing elit."),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("i")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" Aenean tempus eleifend ante, ac molestie metus condimentum quis."),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("i")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("br")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" Morbi nunc magna, consequat posuere consectetur in, dapibus consectetur lorem. Duis consectetur semper augue nec pharetra.")]),a._v("\n")])])]),s("p",[a._v("需要提醒都是，内联语句的语法都和普通语法相同，除了"),s("code",[a._v("@")]),a._v(" 被省略了，以及用中括号分割这两点。你可以内联使用任何命令，来得到想要的效果，唯一区别是，执行时机取决于普通文本中的哪个位置。")]),a._v(" "),s("p",[a._v("在内联使用时，普通文本行会被内联执行目录转化为独立的命令行执行，文本由"),s("a",{attrs:{href:"/zh/api/#print",target:"_blank"}},[s("code",[a._v("@print")])]),a._v("开始执行，比如如下naninovel脚本：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Lorem ipsum"),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("char")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Felix.Happy")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v("pos:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("75 ")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v("wait:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v(" dolor sit amet.")]),a._v("\n")])])]),s("p",[a._v("实际上，被引擎识别为一系列的独立命令：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@print")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Lorem ipsum"')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" waitInput:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@char")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Felix.Happy")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" pos:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("75")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" wait:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("false")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@print")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"dolor sit amet."')])])]),a._v("\n")])])]),s("p",[a._v("如果要在游戏中显示中括号，如下格式书写:")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Some text "),s("span",{pre:!0,attrs:{class:"token escaped-char"}},[a._v("\\[")]),a._v(" text inside brackets "),s("span",{pre:!0,attrs:{class:"token escaped-char"}},[a._v("\\]")])]),a._v("\n")])])]),s("p",[a._v('— 这样会在游戏中这样显示："Some text [ text inside brackets ]" 。')]),a._v(" "),s("h2",{attrs:{id:"标签行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#标签行"}},[a._v("#")]),a._v(" 标签行")]),a._v(" "),s("p",[a._v("标签是作为使用"),s("a",{attrs:{href:"/zh/api/#goto",target:"_blank"}},[s("code",[a._v("@goto")])]),a._v("命令跳转到相应位置时候的定位锚点，\n要使用标签，在文本行开头使用"),s("code",[a._v("#")]),a._v("紧接标签名字：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token label regex"}},[a._v("# Epilogue")]),a._v("\n")])])]),s("p",[a._v("你可以使用"),s("a",{attrs:{href:"/zh/api/#goto",target:"_blank"}},[s("code",[a._v("@goto")])]),a._v("命令跳转到上面这行，如下：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("ScriptName.Epilogue")])])]),a._v("\n")])])]),s("p",[a._v("在相同脚本中跳转的时候，可以省略脚本名字，如下：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".Epilogue")])])]),a._v("\n")])])]),s("h2",{attrs:{id:"注释行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释行"}},[a._v("#")]),a._v(" 注释行")]),a._v(" "),s("p",[a._v("由符号("),s("code",[a._v(";")]),a._v(") 开头的行为注释行，会被引擎完全忽略，不执行命令，\n你可以用来备注，或是为其他开发成员写注释（呵，为其他人写注释，不存在的）：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 如下命令会用于自动保存游戏")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@save")])]),a._v("\n")])])]),s("h2",{attrs:{id:"条件执行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#条件执行"}},[a._v("#")]),a._v(" 条件执行")]),a._v(" "),s("p",[a._v("虽然脚本是线性流程，你可以使用"),s("code",[a._v("if")]),a._v("参数改变执行结构，"),s("code",[a._v("if")]),a._v("能被所有命令使用：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 如果 `level` 值是数字，并且大于9000，添加该选项 。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"It\'s over 9000!"')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("level>9000")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 如果`dead` 变量值是布尔值，并且为`false`执行print命令。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@print")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" text:")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"I\'m still alive."')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("!dead")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 如果 `glitch` 变量值是布尔值，并且为 `true` ，或随机得到值大于5则执行`@spawn。")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@spawn")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("GlitchCamera")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"glitch || Random(1, 10) >= 5"')])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 如果 `score` 值在 7和13 之间或者`lucky` 布尔值为`true`则加载 `LuckyEnd` 脚本.")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("LuckyEnd")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"(score >= 7 && score <= 13) || lucky"')])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 你也可以在内联命令中使用条件判断")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Lorem sit amet. "),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("style")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("bold")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v("if:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("score>=10")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v("Consectetur elit."),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("style")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("default")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])])]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("; 当文本中使用了双引号，使用双斜杠注释掉，如下所示：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@print")]),s("span",{pre:!0,attrs:{class:"token whitespaces"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token expression selector"}},[a._v("{remark}")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" if:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("remark==")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Saying \\\\"')]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Stop ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("the")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('car\\\\"')]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("was")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("a")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v('mistake."')])])]),a._v("\n")])])]),s("p",[a._v("也可在多行，区块间使使用 "),s("a",{attrs:{href:"/zh/api/#if",target:"_blank"}},[s("code",[a._v("@if")])]),a._v(", "),s("a",{attrs:{href:"/zh/api/#else",target:"_blank"}},[s("code",[a._v("@else")])]),a._v(", "),s("a",{attrs:{href:"/zh/api/#elseif",target:"_blank"}},[s("code",[a._v("@elseif")])]),a._v(" 和 "),s("a",{attrs:{href:"/zh/api/#endif",target:"_blank"}},[s("code",[a._v("@endif")])]),a._v(" 命令：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@if")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("score>10")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\tGood job, you've passed the test!")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@bgm")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Victory")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@spawn")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("Fireworks")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@elseif")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("attempts>100")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\tYou're hopeless... Need help?")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"Yeah, please!"')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".GetHelp")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@choice")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token quoted-string operator"}},[a._v('"I\'ll keep trying."')]),s("span",{pre:!0,attrs:{class:"token command-param-id property"}},[a._v(" goto:")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".BeginTest")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@stop")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@else")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\tYou've failed. Try again!")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("\t")]),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@goto")]),s("span",{pre:!0,attrs:{class:"token command-params"}},[s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(".BeginTest")])])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[a._v("@endif")])]),a._v("\n")])])]),s("p",[a._v("提行分行只是为了方便阅读，普通文本也可使用：")]),a._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token generic-text punctuation"}},[a._v("Lorem ipsum dolor sit amet. "),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("if")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v(" ")]),s("span",{pre:!0,attrs:{class:"token command-param-value operator"}},[a._v("score>10")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v("Duis efficitur imperdiet nunc. "),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("else")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])]),a._v("Vestibulum sit amet dolor non dolor placerat vehicula."),s("span",{pre:!0,attrs:{class:"token inline-command function"}},[s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token command-param-name name"}},[a._v("endif")]),s("span",{pre:!0,attrs:{class:"token start-stop-char"}},[a._v("]")])])]),a._v("\n")])])]),s("p",[a._v("更多参考信息和格式操作等参考 "),s("RouterLink",{attrs:{to:"/zh/guide/script-expressions.html"}},[a._v("脚本表达式")]),a._v(" 。")],1),a._v(" "),s("h2",{attrs:{id:"可视化编辑器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可视化编辑器"}},[a._v("#")]),a._v(" 可视化编辑器")]),a._v(" "),s("p",[a._v("你可以使用内置可视化编辑器来编辑naninovel脚本，在资源文件中选中脚本是，属性面板会自动打开相应脚本。")]),a._v(" "),s("p",[s("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:"https://i.gyazo.com/ba57b9f78116e57408125325bdf66be9.mp4",type:"video/mp4"}})])]),a._v(" "),s("p",[a._v("在右侧编辑器内按右键insert或者Ctrl+Space以插入新行 (可以之后再输入配置菜单自定义快捷键) 然后选择想要的命令行，过直接输入左边的编号，或是直接拖拽来重新排序已有的行，在右侧编辑器内按右键remove移除已有行。")]),a._v(" "),s("p",[a._v("修改文件会有(*) 符号显示，按Ctrl+S 保存修改，未保存当前文件修改去改动其他脚本时会有提示询问是否保存。")]),a._v(" "),s("p",[a._v("使用其他编译器编译时候注意保存修改，内置编辑器会自动同步修改，所以你可以同时使用文本编辑器和内置可视化编辑器。如果自动同步没有工作，确保菜单中的"),s("code",[a._v("Edit -> Preferences -> General")]),a._v("中的"),s("code",[a._v("Auto Refresh")]),a._v("打开。")]),a._v(" "),s("p",[a._v("运行时，你可以通过可视化编辑器看到当前执行行，或者右击跳转到相应行。这个功能需要在资源管理菜单内配置的资源ID名字相同。")]),a._v(" "),s("p",[s("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:"https://i.gyazo.com/b6e04d664ce4b513296b378b7c25be03.mp4",type:"video/mp4"}})])]),a._v(" "),s("p",[a._v("当前执行的行，会有绿色高亮提示，当脚本执行到会需要等待玩家进行输入操作时，则为黄色提示。")]),a._v(" "),s("p",[a._v("你可以在编辑器菜单中调整其他设置，和视觉表现。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/4b4b2608e7662b02a61b00734910308c.png",alt:""}})]),a._v(" "),s("p"),s("div",{staticClass:"video-container"},[s("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/9UmccF9R9xI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),s("p"),a._v(" "),s("h2",{attrs:{id:"脚本可视化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本可视化"}},[a._v("#")]),a._v(" 脚本可视化")]),a._v(" "),s("p",[a._v("当在进行大量文本的非线性剧本开发时，有可视化表现故事流程会让开发流程变得简单，此时就需要用到可视化编程工具。")]),a._v(" "),s("p",[s("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:"https://i.gyazo.com/0dd3ec2393807fb03d501028e1526895.mp4",type:"video/mp4"}})])]),a._v(" "),s("p",[a._v("要使用该工具窗口，打开"),s("code",[a._v("Naninovel -> Script Graph")]),a._v(" ，你可以将该窗口嵌入任何面板。")]),a._v(" "),s("p",[a._v("该工具会为所有在 ("),s("code",[a._v("Naninovel -> Resources -> Scripts")]),a._v(") 绑定过的脚本（用节点表示），自动创建可视化流程表现，并在之间连接。")]),a._v(" "),s("p",[a._v("该工具的连线是根据"),s("a",{attrs:{href:"/zh/api/#goto",target:"_blank"}},[s("code",[a._v("@goto")])]),a._v("和"),s("a",{attrs:{href:"/zh/api/#gosub",target:"_blank"}},[s("code",[a._v("@gosub")])]),a._v("命令。如果命令中有条件判断 ("),s("code",[a._v("if")]),a._v(" 参数)，在相应位置鼠标悬停时会有黄色高亮提示。")]),a._v(" "),s("p",[a._v("你可以通过单击小窗口或单个节点打开脚本内置可视化编辑器。\n单击小窗口内置可视化编辑器会自动跳转到相应有label标签的地方（如果定义了label的）。")]),a._v(" "),s("p",[a._v('你可以根据需要重新排布节点，当退出该工具活着退出Unity时，都会自动保存相应修改。你也可以通过"Save"按钮手动保存，点击 "Auto Align"按钮重置小窗口位置。')]),a._v(" "),s("p",[a._v('当脚本修改后，或者添加了新脚本，点击"Rebuild Graph"来同步显示。')]),a._v(" "),s("h2",{attrs:{id:"热加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#热加载"}},[a._v("#")]),a._v(" 热加载")]),a._v(" "),s("p",[a._v("在运行时，可以实时应用修改（通过内置可视化编辑器或者外置编辑器），\n不需要重启运行，这个功能是在脚本配置菜单中"),s("code",[a._v("Hot Reload Scripts")]),a._v(" 属性控制，默认开启的。")]),a._v(" "),s("p",[a._v("当在当前执行行前面，修改，添加，删除某行时，会自动跳转到修改行开始执行， 避免前后的表现不一致。")]),a._v(" "),s("p",[a._v("如果热加载没工作，请确保，"),s("code",[a._v("Edit -> Preferences -> General")]),a._v(" 中的\n"),s("code",[a._v("Auto Refresh")]),a._v("启用，"),s("code",[a._v("Script Changes While Playing")]),a._v(" 是使用的"),s("code",[a._v("Recompile And Continue Playing")]),a._v("选项。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/5d433783e1a12531c79fe6be80c92da7.png",alt:""}})]),a._v(" "),s("p",[a._v("要手动加载要执行的脚本（比如，编辑脚本在Unity工程外），使用\n"),s("code",[a._v("reload")]),a._v(" "),s("RouterLink",{attrs:{to:"/zh/guide/development-console.html"}},[a._v("控制台命令")]),a._v("\n该命令只能在编辑器使用，不会在发布后生效。")],1),a._v(" "),s("h2",{attrs:{id:"ide支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ide支持"}},[a._v("#")]),a._v(" IDE支持")]),a._v(" "),s("p",[a._v("IDE特性，比如方法高亮，错误检查，自动补充，文本关联等，能够显著提升编码效率，我们已经提供了免费的开源"),s("a",{attrs:{href:"https://code.visualstudio.com",target:"_blank",rel:"noopener noreferrer"}},[a._v("VS Code"),s("OutboundLink")],1),a._v(" (支持Windows, MacOS 和 Linux)\n扩展，该插件为naninovel提供了关键的IDE特性支持。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/b1f5c6845c04d1b18b2196aa29ea6c19.png",alt:""}})]),a._v(" "),s("p",[a._v("参考以下视频教程，激活和使用该扩展。")]),a._v(" "),s("p"),s("div",{staticClass:"video-container"},[s("iframe",{attrs:{src:"https://www.youtube-nocookie.com/embed/y87wd5jHfFw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),s("p"),a._v(" "),s("p",[a._v("其他浏览器支持会在后续添加， 更多信息参考 "),s("a",{attrs:{href:"https://github.com/Naninovel/Documentation/issues/56#issuecomment-492987029",target:"_blank",rel:"noopener noreferrer"}},[a._v("the issue on GitHub"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("h2",{attrs:{id:"脚本debug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#脚本debug"}},[a._v("#")]),a._v(" 脚本Debug")]),a._v(" "),s("p",[a._v("当有大量脚本开发时，要查看脚本某部分的演出效果，从头开始演示肯定会很繁琐。")]),a._v(" "),s("p",[a._v("使用 "),s("RouterLink",{attrs:{to:"/zh/guide/development-console.html"}},[a._v("开发控制台")]),a._v(" 你可以连续回调到当前的脚本的任意位置：")],1),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("rewind 12\n")])])]),s("p",[a._v("—这会跳转到12行，你可以任意向前或者向后跳转，要在游戏时打开控制台，确保引擎配置中控制台为打开，然后按"),s("code",[a._v("~")]),a._v(" 键（可自行改键），或在触控设备使用多点触控（3点或更多同时点击）呼出。")]),a._v(" "),s("p",[a._v("要查看哪个是执行脚本，在debug窗口输入"),s("code",[a._v("debug")]),a._v("然后按"),s("code",[a._v("Enter")]),a._v("显示窗口。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/12772ecc7c14011bcde4a74c81e997b8.png",alt:"Scripts Debug"}})]),a._v(" "),s("p",[a._v("当前使用的脚本名，行号，内联脚本目录，都会显示在窗口标题上，当"),s("RouterLink",{attrs:{to:"/zh/guide/voicing.html#自动语音"}},[a._v("自动语音")]),a._v(' 打开时，播放的语音名字也会显示出来。可以点击标题拖拽窗口。 "Stop" 按钮会停止脚本执行，"Play"会重新开始执行，"Close"按钮关闭debug窗口。')],1),a._v(" "),s("p",[a._v("debug窗口在编辑器下和发布工程都可以使用。")])])}),[],!1,null,null,null);t.default=r.exports}}]);