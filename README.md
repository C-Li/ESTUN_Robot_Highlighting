# ESTUN RCS2 Robot Language Syntax Highlighting for VSCode

这个VSCode扩展为埃斯顿（ESTUN）RCS2机器人控制编程语言（.erd和.erp文件）提供语法高亮支持。

## 关于ESTUN RCS2机器人编程语言

ESTUN RCS2机器人编程语言是埃斯顿机器人公司开发的专用于工业机器人控制的领域特定语言（DSL），主要用于：

- 工业机器人运动控制
- I/O信号处理
- 任务流程管理
- 工业自动化场景应用

### 语言特点

1. **双文件系统**：
   - `.erd` (Extended Robot Data) 文件：数据定义文件，包含变量、位置点、区域、工具等定义
   - `.erp` (Extended Robot Program) 文件：程序执行文件，包含控制逻辑和运动指令

2. **丰富的数据类型**：
   - 位置和坐标：APOS, CPOS, DAPOS, DCPOS
   - 工具和负载：TOOL, PAYLOAD
   - 区域和坐标系：AREA, USERCOOR
   - I/O信号：SimDI, SimDO, SimAI, SimAO

3. **强大的控制指令**：
   - 运动控制：MovL（直线运动）, MovJ（关节运动）
   - 流程控制：IF/THEN/ELSE/ENDIF, GOTO, CALL
   - 信号处理：SetSimDO, WaitSimDI, WaitCondition

## 安装方法

### 方法1：手动安装

1. 在VSCode中，按下 `Ctrl+Shift+P` 打开命令面板
2. 输入 `Extensions: Install Extensions` 并选择
3. 点击右上角的 "..." 图标，选择 "Install from VSIX..."
4. 选择打包好的 `.vsix` 文件（需要先打包扩展）

### 方法2：开发模式安装

1. 克隆或下载此扩展文件夹
2. 在VSCode中，按下 `Ctrl+Shift+P` 打开命令面板
3. 输入 `Developer: Reload Window` 重新加载窗口

## 功能特性

- **语法高亮**：支持埃斯顿RCS2机器人编程语言的 .erd 和 .erp 文件
- **悬停提示**：鼠标悬停在关键字上时显示详细的文档说明，包括：
  - 关键字描述
  - 语法格式
  - 使用示例
  - 参数说明
- 高亮显示关键字、数据类型、函数、变量等
- 支持单行注释（//）和多行注释（/* */）
- 识别变量前缀（t_p., t_s., t_l., t_g.）
- 高亮显示数字和字符串
- 支持标签和运算符高亮

## 支持的语法元素

### 数据类型
- **位置和坐标**：APOS, CPOS, DAPOS, DCPOS
- **工具和负载**：TOOL, PAYLOAD, LoadDyn, CenterPos, InertiaTensor
- **区域和坐标系**：AREA, USERCOOR, ZONE
- **I/O信号**：SimDI, SimDO, SimAI, SimAO
- **配置和保留**：POSCFG, RESERVED, INT

### 控制流关键字
- **条件语句**：IF, THEN, ELSE, ENDIF
- **循环语句**：WHILE, DO, ENDWHILE
- **流程控制**：GOTO, CALL, RUN, RETURN, Start, End
- **标签**：支持任意标签名的识别和悬停提示（如Label1:, Process1:, aaa:等）

### 函数/指令
- **运动控制**：MovJ（关节空间插补运动）, MovL（直线插补运动）, MovC（圆弧插补运动）, MovJSearch（关节空间搜索运动）, MovLSearch（直线搜索运动）, MovE（外部轴运动）, MovLW（直线摆动运动）, MovCW（圆弧摆动运动）, EMovL（外部直线运动）, EMovC（外部圆弧运动）, MovArch（拱形运动）, RefRobotAxis（参考机器人轴运动）
- **位置获取与转换**：GetCurAPos（获取当前轴位置）, GetCurCPos（获取当前位置）, APosToCPos（轴位置转笛卡尔位置）, CPosToAPos（笛卡尔位置转轴位置）, CPosToCPos（转换工件坐标系）
- **系统设置**：SetCartDyn（设置笛卡尔动态参数）, SetJointDyn（设置关节动态参数）, GetCamPos（获取视觉位置）, SetCoord（设置坐标系）, SetTool（设置工具坐标系）, SetPayload（设置负载数据）, SetMotionMode（设置运动模式）, GetCurOverRide（获取当前速度倍率）, SetOverRide（设置速度倍率）
- **IO控制**：SetDO（设置数字输出）, SetAO（设置模拟输出）, SetSimDO（设置模拟数字输出）, SetSimAO（设置模拟模拟输出）, WaitDI（等待数字输入）, WaitAI（等待模拟输入）, WaitSimDI（等待模拟数字输入）, WaitSimAI（等待模拟模拟输入）, CompareAI（比较模拟输入）, CompareSimAI（比较模拟模拟输入）, GetSimDIToVar（获取模拟数字输入到变量）, SetSimDOByVar（通过变量设置模拟数字输出）, GetSimAIToVar（获取模拟模拟输入到变量）, SetSimAOByVar（通过变量设置模拟模拟输出）, PulseOut（脉冲输出）, PulseSimOut（模拟脉冲输出）, SetDIEdge（设置数字输入边沿）, SetSimDIEdge（设置模拟数字输入边沿）, GetDI8421（获取数字输入8421）, SetDO8421（设置数字输出8421）
- **等待与控制**：Stop（停止运动）, TrigCam（触发相机）, WaitFinishCAM（等待相机完成）, Wait（等待时间）, Waitfinish（等待完成）, WaitCondition（等待条件）
- **跟踪功能**：GetTrackId（获取跟踪ID）, Tracking（跟踪）
- **时钟功能**：CLKStart（时钟开始）, CLKStop（时钟停止）, CLKRead（时钟读取）, CLKReset（时钟复位）
- **码垛功能**：PalletToPut（码垛放置）, PalletFromPut（码垛从放置点取）, PalletToGet（码垛获取）, PalletFromGet（码垛从获取点放）, PalletReset（码垛复位）, OnDistance（按距离）, OnParameter（按参数）
- **位运算**：BitAnd（位与）, BitNeg（位非）, BitOr（位或）, BitXOr（位异或）, BitLSH（位左移）, BitRSH（位右移）
- **Socket通信**：SocketCreate（创建Socket）, SocketClose（关闭Socket）, SocketSendStr（发送字符串）, SocketReadReal（读取实数）, SocketReadInt（读取整数）, SocketReadStr（读取字符串）
- **软浮动**：SoftFloatStart（开始软浮动）, SoftFloatStop（停止软浮动）
- **消息设置**：SendMessage（发送消息）, SetRtInfo（设置运行时信息）, SetRtToErr（设置运行时错误）

### 变量前缀
- **t_p.**：程序变量
- **t_s.**：系统变量
- **t_l.**：局部变量
- **t_g.**：全局变量

### 速度变量
支持V5-V4000速度变量，悬停提示显示详细的速度参数：
- **V5, V10, V30, V50, V60, V80, V100, V200, V300, V500, V800, V1000, V2000, V3000, V4000**
- 每个速度变量包含：关节速度百分比(per)、TCP线速度(tcp)、空间旋转速度(ori)、外部轴线速度(exj_l)、外部轴角速度(exj_r)

### ZONE变量
支持C0-C200转弯区变量，悬停提示显示详细的转弯区参数：
- **C0, C5, C10, C20, C30, C50, C60, C80, C100, C150, C200**
- 每个ZONE变量包含：转弯区百分比(per)、转弯区距离(dis)、转弯区速度恒定(vConst)

### 运算符
- **比较运算符**：==, >=, <=, >, <, !=
- **逻辑运算符**：and, or, not
- **赋值运算符**：=
- **算术运算符**：+, -, *, /, %

## 悬停提示功能

本扩展提供了强大的悬停提示功能，当您将鼠标悬停在关键字上时，会显示详细的文档信息。

### 支持悬停提示的元素

#### 数据类型
- **BOOL**：布尔型变量
- **INT**：整型变量
- **REAL**：实型变量
- **STRING**：字符串变量
- **APOS**：关节位置数据
- **CPOS**：笛卡尔位置数据
- **TOOL**：工具数据
- **PAYLOAD**：负载数据
- **AREA**：区域数据
- **USERCOOR**：用户坐标系数据

#### 运动指令
- **MovJ**：关节空间插补运动
- **MovL**：直线插补运动
- **MovC**：圆弧插补运动
- **MovE**：外部轴运动
- **MovLW**：直线运动（带等待）
- **MovCW**：圆弧运动（带等待）
- **MovJSearch**：关节搜索运动
- **MovLSearch**：直线搜索运动
- **EMovL**：外部直线运动
- **EMovC**：外部圆弧运动

#### 控制指令
- **IF/THEN/ELSE/ENDIF**：条件判断
- **WHILE/DO/ENDWHILE**：循环控制
- **GOTO**：跳转指令
- **CALL**：程序调用（同步调用，等待子程序完成）
- **RUN**：程序运行（异步启动，不等待程序完成）
- **RETURN**：从子程序返回
- **Start/End**：程序开始/结束
- **标签**：任意标签名（如Label1:, Process1:等）

#### I/O指令
- **SetDO**：设置数字输出
- **SetAO**：设置模拟输出
- **SetGO**：设置组输出
- **WaitDI**：等待数字输入
- **WaitAI**：等待模拟输入
- **WaitGI**：等待组输入

#### 系统指令
- **SetPayload**：设置负载
- **ResetOvrd**：重置速度覆盖
- **SetRtInfo**：设置运行时信息
- **SetRtToErr**：设置运行时错误

#### 数学函数
- **Abs**：绝对值
- **Sqrt**：平方根
- **Sin**：正弦
- **Cos**：余弦
- **Tan**：正切
- **ASin**：反正弦
- **ACos**：反余弦
- **ATan**：反正切
- **ATan2**：两点反正切
- **Round**：四舍五入
- **Trunc**：截断

### 使用方法

1. 打开 .erd 或 .erp 文件
2. 将鼠标悬停在任意支持的关键字上
3. 等待片刻，悬停提示框会自动显示
4. 提示框包含以下信息：
   - **关键字名称**：高亮显示的关键字
   - **描述**：关键字的功能说明
   - **语法**：使用语法格式
   - **示例**：实际使用示例
   - **参数**：参数说明（如果有）

### 悬停提示示例

当您悬停在 `CALL` 指令上时，会显示：

```
CALL

调用子程序语句，用于跳转到指定的子程序执行，子程序执行完成后会返回到CALL语句的下一行继续执行。子程序可以是同一文件中的标签，也可以是独立的程序文件。

语法：
CALL <program_name>

示例：
CALL InitSingal
CALL Process1

参数：
program_name: 要调用的子程序名称，可以是标签名或程序文件名
```

当您悬停在 `RUN` 指令上时，会显示：

```
RUN

运行指定程序，用于启动另一个程序文件的执行。与CALL不同，RUN会启动一个新的程序实例，不会等待被调用程序完成。常用于并行执行多个任务。

语法：
RUN <program_name>

示例：
RUN sub_program

参数：
program_name: 要运行的程序文件名
```

当您悬停在 `RETURN` 指令上时，会显示：

```
RETURN

从子程序返回到调用点，用于结束当前子程序的执行并返回到CALL语句的下一行继续执行。如果不在子程序中使用，则结束整个程序。

语法：
RETURN

示例：
Process1:
  SetRtInfo{msg="处理完成",eid=70003}
  RETURN

参数：
无参数
```

当您悬停在标签（如 `Label1:`）上时，会显示：

```
Label1

程序标签，用于GOTO跳转的目标位置。

语法：
<label_name>:

示例：
Label1:
GOTO Label1
```

当您悬停在速度变量（如 `V1000`）上时，会显示：

```
V1000

速度变量，定义机器人的运动速度参数。

参数：
- 关节速度百分比(per): 100%
- TCP线速度(tcp): 1000 mm/s
- 空间旋转速度(ori): 360 deg/s
- 外部轴线速度(exj_l): 360 mm/s
- 外部轴角速度(exj_r): 180 deg/s
```

当您悬停在ZONE变量（如 `C100`）上时，会显示：

```
C100

转弯区变量，定义机器人运动时的转弯区域参数。

参数：
- 转弯区百分比(per): 100%
- 转弯区距离(dis): 100 mm
- 转弯区速度恒定(vConst): 0
```

当您悬停在 `MovJ` 指令上时，会显示：

```
MovJ

关节空间插补运动指令，使机器人各轴同时运动到目标位置，路径不一定是直线。

语法：
MovJ{P=<position>,V=<velocity>,B=<blend>,C=<corner>,Tool=<tool>,Coord=<coord>}

示例：
MovJ{P=t_p.Position1,V=t_s.V1000,B="RELATIVE",C=t_s.C100,Tool=t_s.TOOL0,Coord=t_g.USERCOOR0}

参数：
P: 目标位置
V: 运动速度
B: 过渡模式
C: 转角参数
Tool: 工具坐标系
Coord: 工件坐标系
```

当您悬停在 `MovL` 指令上时，会显示：

```
MovL

直线插补运动指令，使机器人沿直线路径移动到目标位置。

语法：
MovL{P=<position>,V=<velocity>,B=<blend>,Tool=<tool>,Coord=<coord>}

示例：
MovL{P=t_p.Position2,V=t_s.V500,B="FINE",Coord=t_g.USERCOOR0}

参数：
P: 目标位置
V: 运动速度
B: 过渡模式
Tool: 工具坐标系
Coord: 工件坐标系
```

当您悬停在 `SetSimDO` 指令上时，会显示：

```
SetSimDO

设置模拟数字输出信号的值。

语法：
SetSimDO{SimIO=<signal>,Val=<value>}

示例：
SetSimDO{SimIO=t_p.Output1,Val=1}

参数：
SimIO: 数字输出信号
Val: 输出值
```

当您悬停在 `WaitSimDI` 指令上时，会显示：

```
WaitSimDI

等待模拟数字输入信号达到指定状态。

语法：
WaitSimDI{SimIO=<signal>,Val=<value>,T=<max_time>,InterEnable=<enable>,Ret=<ret>}

示例：
WaitSimDI{SimIO=t_p.Input1,Val=1,T=0,InterEnable=1,Ret=t_p.INT0}

参数：
SimIO: 数字输入信号
Val: 期望值
T: 最大等待时间
InterEnable: 中断使能
Ret: 返回值
```

## 开发

如果您想修改或扩展此扩展，可以编辑以下文件：

- `syntaxes/robot-language.tmLanguage.json` - 语法高亮规则
- `language-configuration.json` - 语言配置（注释、括号等）
- `package.json` - 扩展配置
- `src/hoverData.ts` - 悬停提示数据（关键字文档）
- `src/hoverProvider.ts` - 悬停提示提供者实现
- `src/extension.ts` - 扩展入口点

### 修改悬停提示数据

要添加或修改关键字的悬停提示信息，请编辑 `src/hoverData.ts` 文件。该文件包含所有关键字的文档信息，格式如下：

```typescript
'KEYWORD': {
    name: 'KEYWORD',
    description: '关键字的功能描述',
    syntax: '语法格式',
    example: '使用示例',
    parameters: '参数说明'
}
```

### 编译 TypeScript

修改 TypeScript 源文件后，需要编译为 JavaScript：

```bash
npm run compile
```

或者使用监视模式自动编译：

```bash
npm run watch
```

### 打包扩展

要打包扩展为 .vsix 文件：

```bash
npm run vscode:prepublish
vsce package
```

修改后，需要重新加载VSCode窗口以查看更改。

## 许可证

MIT License