# 更新日志

本项目的所有重要变更都将记录在此文件中。

## [1.1.1]

### 移除
- 移除虚构的指令定义，确保与ER系列RCS2指令系统手册V1.2保持一致
- 移除SyncMoveOff、SyncMoveOn、SyncMoveSupervise同步运动相关虚构指令
- 移除StartLoad、StopLoad、Supervise监控相关虚构指令
- 移除PoseVect位姿向量虚构指令
- 移除Connect、Disconnect连接断开相关虚构指令
- 移除SetRtInfo系统指令虚构定义

### 新增
- 支持标签识别和悬停提示，可以识别任意标签名（如Label1:, Process1:, aaa:等）
- 支持速度变量（V5-V4000）的悬停提示，显示详细的速度参数（关节速度百分比、TCP线速度、空间旋转速度、外部轴线速度、外部轴角速度）
- 支持ZONE变量（C0-C200）的悬停提示，显示详细的转弯区参数（转弯区百分比、转弯区距离、转弯区速度恒定）
- 新增RUN指令的悬停提示，说明与CALL的区别
- 新增RETURN指令的悬停提示，详细说明返回机制
- 新增SetRtToErr系统指令的悬停提示
- 新增WHILE/DO/ENDWHILE循环语句的悬停提示

### 改进
- 增强CALL指令的悬停提示，详细说明子程序调用机制和返回流程
- 增强RUN指令的悬停提示，说明异步启动和并行执行的特点
- 增强RETURN指令的悬停提示，说明从子程序返回和结束整个程序的区别
- 更新README.md，添加标签、速度变量、ZONE变量的悬停提示说明
- 更新README.md，添加CALL、RUN、RETURN指令的详细悬停提示示例
- 更新README.md，添加WHILE/DO/ENDWHILE循环语句的说明
- 更新README.md，添加SetRtToErr系统指令的说明
- 更新syntaxes/robot-language.tmLanguage.json，移除虚构指令的语法高亮
- 更新README.md，移除已删除的虚构指令列表

### 修复
- 修复标签无法识别的问题，现在可以正确识别任意标签名并显示悬停提示
- 修复悬停提示中部分关键字注释不够详细的问题
- 修复与官方手册不符的指令定义问题

## [1.1.0]

### 新增
- 添加悬停提示功能，支持鼠标悬停显示关键字文档
- 支持数据类型悬停提示（BOOL、INT、REAL、STRING、APOS、CPOS、TOOL、PAYLOAD、AREA、USERCOOR等）
- 支持运动指令悬停提示（MovJ、MovL、MovC、MovE、MovLW、MovCW、MovJSearch、MovLSearch、EMovL、EMovC等）
- 支持控制指令悬停提示（IF、WHILE、GOTO、CALL、Start、End等）
- 支持I/O指令悬停提示（SetDO、SetAO、SetGO、WaitDI、WaitAI、WaitGI等）
- 支持系统指令悬停提示（SetSpeed、SetZone、SetTool、SetPayload、SetOvrd、ResetOvrd等）
- 支持数学函数悬停提示（Abs、Sqrt、Sin、Cos、Tan、ASin、ACos、ATan、ATan2、Round、Trunc等）

### 改进
- 更新 README.md，添加悬停提示功能说明
- 添加开发文档，说明如何修改悬停提示数据
- 添加 TypeScript 编译和打包说明

### 技术变更
- 添加 TypeScript 源文件：
  - `src/extension.ts` - 扩展入口点
  - `src/hoverProvider.ts` - 悬停提示提供者实现
  - `src/hoverData.ts` - 悬停提示数据
- 添加 `tsconfig.json` - TypeScript 编译配置
- 更新 `package.json` - 添加激活事件和开发依赖
- 更新 `.vscodeignore` - 确保正确打包扩展

## [1.0.0] - 初始版本

### 功能
- 语法高亮支持埃斯顿RCS2机器人编程语言的 .erd 和 .erp 文件
- 高亮显示关键字、数据类型、函数、变量等
- 支持单行注释（//）和多行注释（/* */）
- 识别变量前缀（t_p., t_s., t_l., t_g.）
- 高亮显示数字和字符串
- 支持标签和运算符高亮
- 支持丰富的数据类型：APOS、CPOS、DAPOS、DCPOS、TOOL、PAYLOAD、AREA、USERCOOR、SimDI、SimDO、SimAI、SimAO等
- 支持控制流关键字：IF、THEN、ELSIF、ELSE、ENDIF、GOTO、CALL、Start、End
- 支持运动控制指令：MovL、MovJ、Circle、MoveC、MoveAbsJ、MoveJDO、MoveLDO等
- 支持搜索和触发指令：SearchL、SearchC、TriggL、TriggJ、TriggIO等
- 支持位置获取函数：GetCurAPos、GetCurCPos等
- 支持系统设置函数：SetPayload、SetTool、SetZone、SetSpeed、SetAccel、SetOvrd、ResetOvrd、SetCoord等
- 支持信号处理函数：SetSimDO、WaitSimDI、SetDO、SetAO、SetGO等
- 支持信息显示函数：SetRtInfo、SetRtToErr、TPWrite、TPShow等
- 支持等待功能：WaitCondition、Wait、WaitTime、WaitUntil、WaitDI、WaitDO、WaitAI、WaitAO等
- 支持数学函数：Abs、Sqrt、Sin、Cos、Tan、ASin、ACos、ATan、ATan2、Distance、Round、Trunc等
- 支持位姿运算函数：Offs、RelTool、CRobT、CPos、EOffs、EulerZYX、OrientZYX、RobTarget、TransPose、PoseAdd、PoseInv、PoseMult等
- 支持向量运算函数：VectAdd、VectSub、VectMult、VectDiv、VectToMat、MatToVect、CrossProd、DotProd等
- 支持IO操作函数：DOutput、DInput、AOutput、AInput、GOutput、GInput、IGroup、ISignalAI、ISignalAO、ISignalDI、ISignalDO、ISignalGI、ISignalGO、IOReset等
- 支持位操作函数：BitSet、BitClear、BitTest等
- 提供示例文件：sample.erp 和 sample.erd
