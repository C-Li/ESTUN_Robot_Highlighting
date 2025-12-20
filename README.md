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
   - 流程控制：IF/THEN/ELSIF/ELSE/ENDIF, GOTO, CALL
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

- 语法高亮支持埃斯顿RCS2机器人编程语言的 .erd 和 .erp 文件
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
- **条件语句**：IF, THEN, ELSIF, ELSE, ENDIF
- **流程控制**：GOTO, CALL, Start, End

### 函数/指令
- **基础运动控制**：MovL（直线运动）, MovJ（关节运动）
- **高级运动控制**：Circle（圆弧运动）, MoveC（圆弧运动）, MoveAbsJ（绝对关节运动）, MoveJDO（带输出的关节运动）, MoveLDO（带输出的直线运动）
- **搜索和触发**：SearchL（线性搜索）, SearchC（圆弧搜索）, TriggL（直线触发）, TriggJ（关节触发）, TriggIO（IO触发）
- **位置获取**：GetCurAPos（获取当前关节位置）, GetCurCPos（获取当前笛卡尔位置）
- **系统设置**：SetPayload（设置负载）, SetTool（设置工具）, SetZone（设置区域）, SetSpeed（设置速度）, SetAccel（设置加速度）, SetOvrd（设置覆盖）, ResetOvrd（重置覆盖）, SetCoord（设置坐标系）
- **信号处理**：SetSimDO（设置数字输出）, WaitSimDI（等待数字输入）, SetDO（设置数字输出）, SetAO（设置模拟输出）, SetGO（设置组输出）
- **信息显示**：SetRtInfo（设置运行时信息）, SetRtToErr（设置运行时错误）, TPWrite（示教器写入）, TPShow（示教器显示）
- **等待功能**：WaitCondition（等待条件）, Wait（等待时间）, WaitTime（等待时间）, WaitUntil（等待直到）, WaitDI（等待数字输入）, WaitDO（等待数字输出）, WaitAI（等待模拟输入）, WaitAO（等待模拟输出）
- **同步和监控**：SyncMoveOff（关闭同步移动）, SyncMoveOn（开启同步移动）, SyncMoveSupervise（同步移动监控）, StartLoad（开始负载）, StopLoad（停止负载）, Supervise（监控）
- **数学函数**：Abs（绝对值）, Sqrt（平方根）, Sin（正弦）, Cos（余弦）, Tan（正切）, ASin（反正弦）, ACos（反余弦）, ATan（反正切）, ATan2（两点反正切）, Distance（距离）, Round（四舍五入）, Trunc（截断）
- **位姿运算**：Offs（偏移）, RelTool（相对工具）, CRobT（机器人位姿）, CPos（笛卡尔位姿）, EOffs（外部偏移）, EulerZYX（欧拉角ZYX）, OrientZYX（方向ZYX）, RobTarget（机器人目标）, TransPose（变换位姿）, PoseAdd（位姿加法）, PoseInv（位姿反演）, PoseMult（位姿乘法）, PoseVect（位姿向量）
- **向量运算**：VectAdd（向量加法）, VectSub（向量减法）, VectMult（向量乘法）, VectDiv（向量除法）, VectToMat（向量转矩阵）, MatToVect（矩阵转向量）, CrossProd（叉积）, DotProd（点积）
- **IO操作**：DOutput（数字输出）, DInput（数字输入）, AOutput（模拟输出）, AInput（模拟输入）, GOutput（组输出）, GInput（组输入）, IGroup（输入组）, ISignalAI（模拟输入信号）, ISignalAO（模拟输出信号）, ISignalDI（数字输入信号）, ISignalDO（数字输出信号）, ISignalGI（组输入信号）, ISignalGO（组输出信号）, Connect（连接）, Disconnect（断开）, IOReset（IO复位）
- **位操作**：BitSet（位设置）, BitClear（位清除）, BitTest（位测试）

### 变量前缀
- **t_p.**：程序变量
- **t_s.**：系统变量
- **t_l.**：局部变量
- **t_g.**：全局变量

### 运算符
- **比较运算符**：==, >=, <=, >, <, !=
- **逻辑运算符**：and, or, not
- **赋值运算符**：=
- **算术运算符**：+, -, *, /, %

## 示例代码

在 `examples` 文件夹中提供了两个示例文件，展示了ESTUN机器人编程语言的语法：

- `sample.erp` - 程序控制示例，展示条件判断、循环和函数调用
- `sample.erd` - 数据定义示例，展示位置点、I/O信号和区域的定义

### .erd文件示例（数据定义）
```
// 位置点定义
Home_Pos={_type="APOS",a1=42.350500,a2=-14.239100,a3=18.313800,a4=0.735600,a5=84.069100,a6=-47.007000,a7=-0.017600,note="原位"}
Position1={_type="CPOS",x=-461.180700,y=-1626.905800,z=1363.489400,a=90.468200,b=0.452400,c=-179.444900,note="位置1"}

// 数字输入输出定义
Input1={_type="SimDI",port=53,value=0,note="输入信号1"}
Output1={_type="SimDO",port=53,value=0,note="输出信号1"}

// 模拟输入输出定义
AnalogInput1={_type="SimAI",port=10,value=0.0,note="模拟输入1"}
AnalogOutput1={_type="SimAO",port=10,value=0.0,note="模拟输出1"}

// 用户坐标系定义
USERCOOR0={_type="USERCOOR",id=1,x=1808.508300,y=344.722300,z=1286.494400,a=71.000000,b=0.000000,c=0.000000,note="用户坐标系0"}

// 负载定义
PAYLOAD0={_type="PAYLOAD",id=2,dyn={_type="LoadDyn",M=162.680000,pos={_type="CenterPos",Mx=-2.340000,My=-218.460000,Mz=175.660000},tensor={_type="InertiaTensor",Ixx=0.000000,Iyy=0.000000,Izz=0.000000,Ixy=0.000000,Iyz=0.000000,Ixz=0.000000}},note="负载0"}

// 速度和区域定义
V1000={_type="SPEED",v_tcp=1000.0,v_ori=100.0,v_leax=100.0,v_reax=100.0,note="速度1000"}
ZONE_FINE={_type="ZONE",pzone_tcp=0,pzone_ori=0,pzone_leax=0,pzone_reax=0,zone_ori=0,zone_leax=0,zone_reax=0,note="FINE区域"}

// 工具定义
TOOL0={_type="TOOL",id=0,tframe={_type="POSCFG",x=0.0,y=0.0,z=0.0,q1=1.0,q2=0.0,q3=0.0,q4=0.0},payload={_type="PAYLOAD",id=1,dyn={_type="LoadDyn",M=5.0,pos={_type="CenterPos",Mx=0.0,My=0.0,Mz=50.0},tensor={_type="InertiaTensor",Ixx=0.1,Iyy=0.1,Izz=0.1,Ixy=0.0,Iyz=0.0,Ixz=0.0}}},note="工具0"}
```

### .erp文件示例（程序控制）
```
// InstParseVersion: V1.02
Start:
SetRtInfo{msg="程序开始",eid=70001}
IF t_p.Input1.value == 0 THEN
    SetRtToErr{msg="错误信息",eid=90001}
    WaitCondition{JudgeCondi="0 > 1",T=0,InterEnable=0,Ret=t_l.INT0}
ENDIF

/*运动控制*/
MovJ{P=t_p.Position1,V=t_s.V1000,B="RELATIVE",C=t_s.C100}
MovL{P=t_p.Position2,V=t_s.V500,B="FINE",Coord=t_g.USERCOOR0}
SetSimDO{SimIO=t_p.Output1,Val=1}
WaitSimDI{SimIO=t_p.Input1,Val=1,T=0,InterEnable=1,Ret=t_p.INT0}

End;
```

## 开发

如果您想修改或扩展此语法高亮规则，可以编辑以下文件：

- `syntaxes/robot-language.tmLanguage.json` - 语法高亮规则
- `language-configuration.json` - 语言配置（注释、括号等）
- `package.json` - 扩展配置

修改后，需要重新加载VSCode窗口以查看更改。

## 许可证

MIT License