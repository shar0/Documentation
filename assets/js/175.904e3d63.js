(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{374:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"整合设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#整合设置"}},[t._v("#")]),t._v(" 整合设置")]),t._v(" "),s("p",[t._v("尽管Naninovel专注于传统视觉小说游戏，引擎仍然可以与现有项目集成。如果你在制作3D冒险游戏，RPG或任何其他类型的游戏，你仍然可以将Naninovel引入用作嵌入式对话（长篇文字）系统。")]),t._v(" "),s("p",[s("video",{staticClass:"video",attrs:{loop:"",autoplay:"",muted:""},domProps:{muted:!0}},[s("source",{attrs:{src:"https://i.gyazo.com/b1b6042db4a91b3a8cee74236b33c17c.mp4",type:"video/mp4"}})])]),t._v(" "),s("p",[t._v("有多种方式可以将Naninovel整合到你的工程，取决于你想要通过Naninovel实现什么样的效果。在之后的文档中，我们会展示多种配置选项和API来保证Naninovel和一个游戏的匹配。在你开始前，请先参考"),s("RouterLink",{attrs:{to:"/zh/guide/engine-architecture.html"}},[t._v("引擎设计")]),t._v(" 来更好理解引擎如何在设计概念上实现这些。")],1),t._v(" "),s("div",{staticClass:"custom-block example"},[s("p",{staticClass:"custom-block-title"},[t._v("例")]),t._v(" "),s("p",[t._v("参考"),s("RouterLink",{attrs:{to:"/zh/guide/integration-options.html#示例工程"}},[t._v("示例工程")]),t._v("， 在此项目中，Nnianovel有作为嵌入对话系统和可切换的独立小说模式使用。")],1)]),t._v(" "),s("h2",{attrs:{id:"手动初始化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#手动初始化"}},[t._v("#")]),t._v(" 手动初始化")]),t._v(" "),s("p",[t._v("第一个需要做的事情是，关闭引擎配置菜单内的 "),s("code",[t._v("Initialize On Application Load")]),t._v(" 选项。\nThe first thing you'll probably want to change is disable "),s("code",[t._v("Initialize On Application Load")]),t._v(" option in the engine configuration menu.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/f58a8af9f2f6d71286061e55fc228896.png",alt:""}})]),t._v(" "),s("p",[t._v("该选项开启时，引擎服务会在应用启动时就开始初始化。除非你想在小说模式下开始你的游戏，否则请在需要使用该引擎的时候进行初始化。")]),t._v(" "),s("p",[t._v("使用静态异步 "),s("code",[t._v("RuntimeInitializer.InitializeAsync()")]),t._v(" 方法（或自己的脚本），来在运行时使用任何内置API前初始化引擎。可以通过"),s("code",[t._v("Engine.Initialized")]),t._v(" 查看当前引擎是否已经初始化。 "),s("code",[t._v("Engine.OnInitialized")]),t._v(" 用来监听初始化完成事件。")]),t._v(" "),s("p",[t._v("要重置引擎服务（或释放大多数已加载资源），使用 "),s("code",[t._v("IStateManager")]),t._v(" 服务下"),s("code",[t._v("ResetStateAsync()")]),t._v(" 方法；在你暂时切换至其他游戏模式的时候这会很有用，不需要在再次使用时，重新初始化引擎。")]),t._v(" "),s("p",[t._v("要从内存完全销毁引擎相关服务，使用"),s("code",[t._v("Engine.Destroy()")]),t._v(" 静态方法。")]),t._v(" "),s("h2",{attrs:{id:"运行naninova脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行naninova脚本"}},[t._v("#")]),t._v(" 运行Naninova脚本")]),t._v(" "),s("p",[t._v("要预加载并运行特定Naninovel脚本，使用 "),s("code",[t._v("IScriptPlayer")]),t._v(" 下的"),s("code",[t._v("PreloadAndPlayAsync(ScriptName)")]),t._v(" 方法。要获取引擎服务，使用 "),s("code",[t._v("Engine.GetService<TService>()")]),t._v(" 静态方法，"),s("code",[t._v("TService")]),t._v(' 指服务使用的接口类型。比如，以下代码会获取脚本执行服务，预加载并执行名为"Script001"的脚本：')]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" player "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IScriptPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" player"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PreloadAndPlayAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Script001"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("当退出小说模式并饭回主游戏模式时，你可能想卸载所有Naninovel使用的资源和服务。可以使用"),s("code",[t._v("IStateManager")]),t._v(" 下的 "),s("code",[t._v("ResetStateAsync()")]),t._v(" 方法：")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" stateManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IStateManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" stateManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ResetStateAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"关闭标题菜单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭标题菜单"}},[t._v("#")]),t._v(" 关闭标题菜单")]),t._v(" "),s("p",[t._v("内置标题菜单，会在初始化时自动显示，即使多数情况下你会在自己项目中有标题菜单。你可以通过"),s("RouterLink",{attrs:{to:"/zh/guide/user-interface.html#UI自定义"}},[t._v("UI自定义特性")]),t._v(" 来定制或时完全替代内置标题菜单，或是在引擎配置菜单直接关闭 "),s("code",[t._v("Show Title UI")]),t._v(" 。")],1),t._v(" "),s("h2",{attrs:{id:"引擎物体层级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引擎物体层级"}},[t._v("#")]),t._v(" 引擎物体层级")]),t._v(" "),s("p",[t._v("你可以通过配置菜单为所有除UI相关的引擎物体配置一个特殊"),s("a",{attrs:{href:"https://docs.unity3d.com/Manual/Layers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("层级"),s("OutboundLink")],1),t._v(" 。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/8642fe37ddc45b8514b9f01d70277fbd.png",alt:""}})]),t._v(" "),s("p",[t._v("这会让引擎使用"),s("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/Camera-cullingMask.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("遮挡剔除"),s("OutboundLink")],1),t._v("  并只会渲染特定层级的物体。")]),t._v(" "),s("p",[t._v("要改变UI物体的使用层级，在UI配置菜单中修改"),s("code",[t._v("Objects Layer")]),t._v("选项。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/56d863bef96bf72c1fed9ae646db4746.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"渲染到贴图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染到贴图"}},[t._v("#")]),t._v(" 渲染到贴图")]),t._v(" "),s("p",[t._v("通过在摄像机配置菜单中分配自定义摄像机预制，可以让引擎相机渲染到自定义的"),s("a",{attrs:{href:"https://docs.unity3d.com/ScriptReference/RenderTexture.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("渲染贴图"),s("OutboundLink")],1),t._v(" 上而不是屏幕（并更改其他与摄像机相关的设置）。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.gyazo.com/1b7116fa1bd170d3753b4cdbd27afcf3.png",alt:""}})]),t._v(" "),s("h2",{attrs:{id:"切换模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#切换模式"}},[t._v("#")]),t._v(" 切换模式")]),t._v(" "),s("p",[t._v("尽管它很大程度上取决于项目，以下是一个抽象示例（基于前面提到的整合设置），来展示如何通过自定义命令来切换“普通冒险”和“小说”模式。")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommandAlias")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"novel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwitchToNovelMode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringParameter")]),t._v(" ScriptName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringParameter")]),t._v(" Label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("UniTask")]),t._v(" ExecuteAsync "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CancellationToken")]),t._v(" cancellationToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. Disable character control.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" controller "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindObjectOfType")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CharacterController3D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsInputBlocked "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. Switch cameras.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" advCamera "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GameObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AdventureModeCamera"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetComponent")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        advCamera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enabled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" naniCamera "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ICameraManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        naniCamera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enabled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. Load and play specified script (if assigned).")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Assigned")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScriptName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" scriptPlayer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IScriptPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" scriptPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PreloadAndPlayAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ScriptName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token named-parameter punctuation"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. Enable Naninovel input.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" inputManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IInputManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        inputManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProcessInput "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token attribute"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CommandAlias")]),s("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"adventure"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwitchToAdventureMode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token type-list"}},[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Command")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("override")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("UniTask")]),t._v(" ExecuteAsync "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CancellationToken")]),t._v(" cancellationToken "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. Disable Naninovel input.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" inputManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IInputManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        inputManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProcessInput "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. Stop script player.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" scriptPlayer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IScriptPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        scriptPlayer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. Reset state.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" stateManager "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("IStateManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" stateManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ResetStateAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. Switch cameras.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" advCamera "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" GameObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AdventureModeCamera"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetComponent")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        advCamera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enabled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" naniCamera "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Engine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetService")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ICameraManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Camera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        naniCamera"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("enabled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5. Enable character control.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" controller "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token generic-method"}},[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindObjectOfType")]),s("span",{pre:!0,attrs:{class:"token generic class-name"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("CharacterController3D"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        controller"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("IsInputBlocked "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("然后可以在naninovel脚本中使用以下命令：")]),t._v(" "),s("div",{staticClass:"language-nani extra-class"},[s("pre",{pre:!0,attrs:{class:"language-nani"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("; Switch to adventure mode.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token command function"}},[s("span",{pre:!0,attrs:{class:"token command-name"}},[t._v("@adventure")])]),t._v("\n")])])]),s("p",[t._v("— 或直接在C＃中（例如，在Unity的 "),s("code",[t._v("OnTrigger")]),t._v(" 事件）：")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")])]),t._v(" OnTriggerEnter "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Collider")]),t._v(" other"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" switchCommand "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("SwitchToNovelMode")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ScriptName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Script001"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tswitchCommand"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ExecuteAsync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Forget")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"其他选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他选项"}},[t._v("#")]),t._v(" 其他选项")]),t._v(" "),s("p",[t._v("还有许多其他功能（状态开放，服务重写，自定义序列化，资源和配置加载器等），这些都在整合另一个系统的时候非常有用。参考剩余部分教程获取更多信息。同时参考"),s("RouterLink",{attrs:{to:"/zh/guide/configuration.html"}},[t._v("配置选项")]),t._v("。 部分特性或许教程没有提及，但是对整合来说仍然很有用。")],1),t._v(" "),s("p",[t._v("如果你觉得API扩展性不足，或是需要源码修改来整合，可以"),s("RouterLink",{attrs:{to:"/zh/support/#开发支持"}},[t._v("联系支持")]),t._v(" — 我们会考虑改进。")],1),t._v(" "),s("h2",{attrs:{id:"示例工程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例工程"}},[t._v("#")]),t._v(" 示例工程")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/Naninovel/IntegrationExample",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub上"),s("OutboundLink")],1),t._v(" 提供了一个示例项目，其中Naninovel用作3D冒险游戏的直接对话和可切换的独立小说模式。您可以使用Git客户端"),s("a",{attrs:{href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository",target:"_blank",rel:"noopener noreferrer"}},[t._v("克隆存储库"),s("OutboundLink")],1),t._v("， 也可以将其"),s("a",{attrs:{href:"https://github.com/Naninovel/IntegrationExample/archive/master.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载为zip存档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("div",{staticClass:"custom-block warn"},[s("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),s("p",[t._v("Naninovel软件包未包含在内，因此，首次打开该工程会产生编译错误；从资源商店导入Naninovel以解决问题。")])]),t._v(" "),s("p",[t._v("所有示例脚本都存储在 "),s("code",[t._v("Assets/Runtime")]),t._v(" 目录。")]),t._v(" "),s("p",[t._v("Naninovel初始化时由"),s("code",[t._v("MainScene")]),t._v("场景中"),s("code",[t._v("SetupGame")]),t._v("游戏物体上的 "),s("code",[t._v("Runtime/SetupGame.cs")]),t._v(" 脚本手动执行（引擎配置菜单中禁用了自动初始化）。")]),t._v(" "),s("p",[t._v("当玩家触发到相应碰撞盒，"),s("code",[t._v("Runtime/DialogueTrigger.cs")]),t._v("作为组件来触发切换到对话模式。")]),t._v(" "),s("p",[s("code",[t._v("Runtime/SwitchToNovelMode.cs")]),t._v("的自定义命令，用于从C#或是naninovel脚本切换到小说模式。")]),t._v(" "),s("p",[s("code",[t._v("Runtime/SwitchToAdventureMode.cs")]),t._v("的自定义命令，用于从小说模式切换到冒险模式。")])])}),[],!1,null,null,null);a.default=e.exports}}]);