(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{543:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"java-线程池"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-线程池"}},[s._v("#")]),s._v(" Java 线程池")]),s._v(" "),t("h3",{attrs:{id:"线程池的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池的作用"}},[s._v("#")]),s._v(" 线程池的作用")]),s._v(" "),t("ul",[t("li",[s._v("减低资源消耗：防止每次创建线程带来的系统开销。")]),s._v(" "),t("li",[s._v("提高效率：线程池维护核心线程，新来任务能够在空闲时候直接执行步，不必创建新线程。")]),s._v(" "),t("li",[s._v("可控性：对线程数以及线程统一分配，监控线程运行")])]),s._v(" "),t("h3",{attrs:{id:"线程池构造器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池构造器"}},[s._v("#")]),s._v(" 线程池构造器")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractExecutorService")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 核心线程数，最大线程数，存活时间，时间单位，阻塞队列")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maximumPoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" keepAliveTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" workQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对比上 增加了线程工厂")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maximumPoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" keepAliveTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" workQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadFactory")]),s._v(" threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 对比上增加了 任务拒绝策略")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maximumPoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" keepAliveTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" workQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RejectedExecutionHandler")]),s._v(" handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//  全部参数")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadPoolExecutor")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" corePoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("int")]),s._v(" maximumPoolSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" keepAliveTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("TimeUnit")]),s._v(" unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BlockingQueue")]),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Runnable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" workQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ThreadFactory")]),s._v(" threadFactory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RejectedExecutionHandler")]),s._v(" handler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("参数说明：\ncorePoolSize： 核心线程数的大小，默认是0个线程当来任务会去创建一个新线程执行，当数目大于corePoolSzie 会放到任务队列中。"),t("br"),s._v("\nmaximumPoolSize： 线程池允许创建的最大线程数，当线程数达到该数值后，后续的新任务将会阻塞。 "),t("br"),s._v("\nkeepAliveTime： 线程存活超时时长。当非核心线程超过存活时间后就会被回收，核心线程也可以通过allowCoreThreadTimeOut() 设置是否回收核心直到。"),t("br"),s._v("\nunit： 指定 keepAliveTime 的时间单位，eg:TimeUnit.SECONDS（秒）。\nworkQueue： 任务队列，常见是现实阻塞队列，存放等待执行的任务。"),t("br"),s._v("\nthreadFactory： 线程工厂。用于指定为线程池创建新线程的方式；\nhandler： 拒绝策略。当达到最大线程数时需要执行的拒绝策略。")])]),s._v(" "),t("li",[t("p",[s._v("任务队列：")]),s._v(" "),t("p",[s._v("ArrayBlockingQueue：数组阻塞队列，初始化指定容量。"),t("br")]),s._v(" "),t("p",[s._v("SynchronousQueue： 消费者队列，在take 时候如果没有任务会阻塞直到有新任务进来。"),t("br")]),s._v(" "),t("p",[s._v("LinkedBlockingDeque： 链表双端队列，俩边可以进出。")])]),s._v(" "),t("li",[t("p",[s._v("拒绝策略（Excutors类提供的）：")]),s._v(" "),t("p",[s._v("AbortPolicy：默认策略，直接爬出异常（RejectedExecutionException）\nDiscardPolicy：丢弃任务，但是不抛出异常。\nDiscardOldestPolicy：丢弃队列最前面的任务，然后重新尝试执行任务\nCallerRunsPolicy：由调用线程处理该任务")])]),s._v(" "),t("li",[t("p",[s._v("Excutors 常见创建线程池方法")]),s._v(" "),t("p",[s._v("newFixedThreadPool：定长线程池，核心线程数等于最大，使用LinkedBlockingDeque作为工作任务，没限制队列长度，容易堆积任务造成OOM\n"),t("br"),s._v("\nnewSingleThreadExecutor：单线程，同上比较不过是把线程数变成1，还会有OOM问题\n"),t("br"),s._v("\nCachedThreadPool：缓存线程池，无限制的创建线程，使用SynchronousQueue作为队列（不存储元素），创建大量的线程容易OOM\n"),t("BR"),t("br"),s._v("\nnewScheduledThreadPool：定时及周期性执行任务的线程池。\nEG:")],1),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(' ScheduledExecutorService service = Executors.newScheduledThreadPool(4);\n  // delay 延时执行\n  service.schedule(()->Syetem.out.println("123"),6,TimeUnit.SECONDS);\n\n  // 延时后 周期执行\n  service.scheduleAtFixedRate(()->Syetem.out.println("123"),2,5,TimeUnit.SECONDS)\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);