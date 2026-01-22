/**
 * ESTUN RCS2 机器人语言关键字悬停信息定义
 * 包含关键字、函数、数据类型等的详细说明
 */

export interface HoverInfo {
    name: string;
    description: string;
    syntax?: string;
    example?: string;
    parameters?: string;
}

/**
 * 控制流关键字悬停信息
 */
export const controlKeywords: Record<string, HoverInfo> = {
    'IF': {
        name: 'IF',
        description: '条件判断语句，用于根据条件执行不同的代码块',
        syntax: 'IF <condition> THEN',
        example: 'IF ( t_p.Input1.value == 1 ) THEN\n  CALL Process1\nENDIF'
    },
    'THEN': {
        name: 'THEN',
        description: '条件判断语句中的关键字，表示条件成立时执行的代码块开始',
        syntax: 'IF <condition> THEN',
        example: 'IF ( t_p.Input1.value == 1 ) THEN\n  CALL Process1\nENDIF'
    },
    'ELSE': {
        name: 'ELSE',
        description: '条件判断语句中的关键字，表示所有条件都不成立时执行的代码块',
        syntax: 'ELSE',
        example: 'IF ( t_p.Input1.value == 1 ) THEN\n  CALL Process1\nELSE\n  CALL Process2\nENDIF'
    },
    'ENDIF': {
        name: 'ENDIF',
        description: '条件判断语句的结束标记',
        syntax: 'ENDIF',
        example: 'IF ( t_p.Input1.value == 1 ) THEN\n  CALL Process1\nENDIF'
    },
    'GOTO': {
        name: 'GOTO',
        description: '跳转语句，用于跳转到指定的标签位置',
        syntax: 'GOTO <label>',
        example: 'GOTO Label1\nLabel1:'
    },
    'CALL': {
        name: 'CALL',
        description: '调用子程序语句，用于跳转到指定的子程序执行，子程序执行完成后会返回到CALL语句的下一行继续执行。子程序可以是同一文件中的标签，也可以是独立的程序文件。',
        syntax: 'CALL <program_name>',
        example: 'CALL Process1',
        parameters: 'program_name: 要调用的子程序名称，可以是标签名或程序文件名'
    },
    'RUN': {
        name: 'RUN',
        description: '运行指定程序，用于启动另一个程序文件的执行。与CALL不同，RUN会启动一个新的程序实例，不会等待被调用程序完成。常用于并行执行多个任务。',
        syntax: 'RUN <program_name>',
        example: 'RUN sub_program',
        parameters: 'program_name: 要运行的程序文件名'
    },
    'RETURN': {
        name: 'RETURN',
        description: '从子程序返回到调用点，用于结束当前子程序的执行并返回到CALL语句的下一行继续执行。如果不在子程序中使用，则结束整个程序。',
        syntax: 'RETURN',
        example: 'RETURN',
        parameters: '无参数'
    },
    'LABEL': {
        name: 'LABEL',
        description: '定义标签，用于GOTO跳转的目标位置',
        syntax: '<label_name>:',
        example: 'Label1:'
    },
    'WHILE': {
        name: 'WHILE',
        description: '循环语句，当条件为真时重复执行代码块',
        syntax: 'WHILE <condition> DO',
        example: 'WHILE ( t_p.INT0 < 10 ) DO\n  t_p.INT0 := t_p.INT0 + 1\nENDWHILE'
    },
    'ENDWHILE': {
        name: 'ENDWHILE',
        description: 'WHILE循环的结束标记',
        syntax: 'ENDWHILE',
        example: 'WHILE ( t_p.INT0 < 10 ) DO\n  t_p.INT0 := t_p.INT0 + 1\nENDWHILE'
    },
    'Start': {
        name: 'Start',
        description: '程序开始标记，标识程序的入口点',
        syntax: 'Start:',
        example: 'Start:\nSetRtInfo{msg="程序开始",eid=70001}\nSetPayload{PayLoad=t_g.PAYLOAD0}'
    },
    'End': {
        name: 'End',
        description: '程序结束标记，标识程序的结束点',
        syntax: 'End:',
        example: 'End:'
    },
    'and': {
        name: 'and',
        description: '逻辑与运算符，用于连接多个条件，所有条件都为真时结果为真',
        syntax: '<condition1> and <condition2>',
        example: 'IF ( t_p.Input1.value == 1 and t_p.Input2.value == 1 ) THEN'
    },
    'or': {
        name: 'or',
        description: '逻辑或运算符，用于连接多个条件，任一条件为真时结果为真',
        syntax: '<condition1> or <condition2>',
        example: 'IF ( t_p.Input1.value == 1 or t_p.Input2.value == 1 ) THEN'
    },
    'not': {
        name: 'not',
        description: '逻辑非运算符，用于取反条件',
        syntax: 'not <condition>',
        example: 'IF ( not ( t_p.Input1.value == 1 ) ) THEN'
    }
};

/**
 * 数据类型悬停信息
 */
export const dataTypes: Record<string, HoverInfo> = {
    'BOOL': {
        name: 'BOOL',
        description: '存储bool型数据。该变量支持在全局、工程、程序三大变量作用域中创建、删除、修改等操作',
        syntax: 'VAR BOOL <name> := <value>',
        example: 'VAR BOOL flag := TRUE',
        parameters: 'value: 变量值\nsaveflag: 掉电保存标记'
    },
    'INT': {
        name: 'INT',
        description: '存储整数。该变量支持在全局、工程、程序三大变量作用域中创建、删除、修改等操作',
        syntax: 'VAR INT <name> := <value>',
        example: 'VAR INT count := 0',
        parameters: 'value: 变量值\nsaveflag: 掉电保存标记'
    },
    'REAL': {
        name: 'REAL',
        description: '存储实数。该变量支持在全局、工程、程序三大变量作用域中创建、删除、修改等操作',
        syntax: 'VAR REAL <name> := <value>',
        example: 'VAR REAL value := 3.14',
        parameters: 'value: 变量值\nsaveflag: 掉电保存标记'
    },
    'STRING': {
        name: 'STRING',
        description: '存储字符串。该变量支持在全局、工程、程序三大变量作用域中创建、删除、修改等操作',
        syntax: 'VAR STRING <name> := <value>',
        example: 'VAR STRING msg := "Hello"',
        parameters: 'value: 变量值\nsaveflag: 掉电保存标记'
    },
    'BOOLONEARRAY': {
        name: 'BOOLONEARRAY',
        description: '存储bool型数组数据。该变量支持在全局、工程、程序三大变量作用域中创建、删除、修改等操作',
        syntax: 'VAR BOOLONEARRAY <name>[<count>] := <value>',
        example: 'VAR BOOLONEARRAY flags[10]',
        parameters: 'count: 数据个数\nvalue: 变量值'
    },
    'INTONEARRAY': {
        name: 'INTONEARRAY',
        description: '存储整数数组数据。该变量支持在全局、工程、程序三大变量作用域中创建、删除、修改等操作',
        syntax: 'VAR INTONEARRAY <name>[<count>] := <value>',
        example: 'VAR INTONEARRAY nums[10]',
        parameters: 'count: 数据个数\nvalue: 变量值'
    },
    'REALONEARRAY': {
        name: 'REALONEARRAY',
        description: '存储实数数组数据。该变量支持在全局、工程、程序三大变量作用域中创建、删除、修改等操作',
        syntax: 'VAR REALONEARRAY <name>[<count>] := <value>',
        example: 'VAR REALONEARRAY values[10]',
        parameters: 'count: 数据个数\nvalue: 变量值'
    },
    'APOS': {
        name: 'APOS',
        description: '存储关节空间下各个轴的坐标值。该变量可支持用户自主创建以及修改，也可在示教程序中进行赋值运算等操作。同时该变量支持在全局、工程、程序三大变量作用域中创建、删除、修改等操作',
        syntax: 'VAR APOS <name> := [<a1>, <a2>, <a3>, ...]',
        example: 'Home_Pos={_type="APOS",a1=42.350500,a2=-14.239100,a3=18.313800,a4=0.735600,a5=84.069100,a6=-47.007000,a7=-0.017600,note="原位"}',
        parameters: 'a1~a16: 关节1~16号轴的坐标值'
    },
    'CPOS': {
        name: 'CPOS',
        description: '笛卡尔位置数据类型，用于定义机器人的位置和姿态',
        syntax: 'VAR CPOS <name> := [[x, y, z], [rx, ry, rz, rw]]',
        example: 'Position1={_type="CPOS",x=-461.180700,y=-1626.905800,z=1363.489400,a=90.468200,b=0.452400,c=-179.444900,note="位置1"}'
    },
    'TOOL': {
        name: 'TOOL',
        description: '工具数据类型，用于定义工具坐标系和工具负载数据。系统预定义的TOOL变量包括nullTool',
        syntax: 'VAR TOOL <name> := [...]',
        example: 'TOOL0={_type="TOOL",x=0.0,y=0.0,z=100.0,a=0.0,b=0.0,c=0.0,mass=0.0,xc=0.0,yc=0.0,zc=0.0,ix=0.0,iy=0.0,iz=0.0,note="工具0"}'
    },
    'USERCOOR': {
        name: 'USERCOOR',
        description: '用户坐标系数据类型，用于定义自定义坐标系。系统预定义的USERCOORD变量包括World',
        syntax: 'VAR USERCOOR <name> := [...]',
        example: 'USERCOOR0={_type="USERCOOR",x=0.0,y=0.0,z=0.0,a=0.0,b=0.0,c=0.0,note="用户坐标系0"}'
    },
    'POSCFG': {
        name: 'POSCFG',
        description: '机器人在相同的笛卡尔空间位置下，可以具备多种关节位置组合（对应机器人逆解的多解）。该属性用于定义空间目标点对应的形态配置数据',
        syntax: 'VAR POSCFG <name> := <mode>',
        example: 'VAR POSCFG cfg1 := 0',
        parameters: 'mode: 模式\ncf1~cf6: 关节1~6号轴角度所在的象限取值'
    },
    'SPEED': {
        name: 'SPEED',
        description: '速度数据类型，用于定义机器人的运动速度。系统预定义的SPEED常量包括V5、V10、V30、V50、V60、V80、V100、V200、V300、V500、V800、V1000、V2000、V3000、V4000',
        syntax: 'VAR SPEED <name> := <value>',
        example: 'V1000={_type="SPEED",v_tcp=1000.0,v_ori=100.0,v_leax=100.0,v_reax=100.0,note="速度1000"}'
    },
    'ZONE': {
        name: 'ZONE',
        description: '区域数据类型，用于定义机器人的运动平滑区域。系统预定义的ZONE常量包括C0、C5、C10、C20、C30、C50、C60、C80、C100、C150、C200',
        syntax: 'VAR ZONE <name> := <value>',
        example: 'C100={_type="ZONE",pzone_tcp=100,pzone_ori=100,pzone_leax=100,pzone_reax=100,zone_ori=0,zone_leax=0,zone_reax=0,note="C100区域"}'
    },
    'AREA': {
        name: 'AREA',
        description: '区域数据类型，用于定义机器人的工作区域',
        syntax: 'VAR AREA <name> := [...]',
        example: 'AREA1={_type="AREA",x1=0.0,y1=0.0,z1=0.0,x2=1000.0,y2=1000.0,z2=1000.0,note="区域1"}'
    },
    'DI': {
        name: 'DI',
        description: '数字输入信号类型',
        syntax: 'VAR DI <name> := <signal_name>',
        example: 'Input1={_type="DI",id=1,note="输入1"}'
    },
    'DO': {
        name: 'DO',
        description: '数字输出信号类型',
        syntax: 'VAR DO <name> := <signal_name>',
        example: 'Output1={_type="DO",id=1,note="输出1"}'
    },
    'AI': {
        name: 'AI',
        description: '模拟输入信号类型',
        syntax: 'VAR AI <name> := <signal_name>',
        example: 'AI1={_type="AI",id=1,note="模拟输入1"}'
    },
    'AO': {
        name: 'AO',
        description: '模拟输出信号类型',
        syntax: 'VAR AO <name> := <signal_name>',
        example: 'AO1={_type="AO",id=1,note="模拟输出1"}'
    },
    'SimDI': {
        name: 'SimDI',
        description: '模拟数字输入信号类型',
        syntax: 'VAR SimDI <name> := <signal_name>',
        example: 'Input1={_type="DI",id=1,note="输入1"}'
    },
    'SimDO': {
        name: 'SimDO',
        description: '模拟数字输出信号类型',
        syntax: 'VAR SimDO <name> := <signal_name>',
        example: 'Output1={_type="DO",id=1,note="输出1"}'
    },
    'SimAI': {
        name: 'SimAI',
        description: '模拟模拟输入信号类型',
        syntax: 'VAR SimAI <name> := <signal_name>',
        example: 'AI1={_type="AI",id=1,note="模拟输入1"}'
    },
    'SimAO': {
        name: 'SimAO',
        description: '模拟模拟输出信号类型',
        syntax: 'VAR SimAO <name> := <signal_name>',
        example: 'AO1={_type="AO",id=1,note="模拟输出1"}'
    },
    'CLOCK': {
        name: 'CLOCK',
        description: '时钟数据类型，用于计时功能',
        syntax: 'VAR CLOCK <name>',
        example: 'VAR CLOCK clk1'
    },
    'PALLET': {
        name: 'PALLET',
        description: '码垛数据类型，用于定义码垛参数',
        syntax: 'VAR PALLET <name> := [...]',
        example: 'PALLET1={_type="PALLET",...}'
    },
    'WEAVE': {
        name: 'WEAVE',
        description: '摆动数据类型，用于定义摆动参数',
        syntax: 'VAR WEAVE <name> := [...]',
        example: 'WEAVE1={_type="WEAVE",...}'
    },
    'SOCKET': {
        name: 'SOCKET',
        description: 'Socket数据类型，用于网络通信',
        syntax: 'VAR SOCKET <name>',
        example: 'VAR SOCKET sock1'
    },
    'PLCREAL': {
        name: 'PLCREAL',
        description: 'PLC实数数据类型，用于与PLC通信',
        syntax: 'VAR PLCREAL <name> := <value>',
        example: 'VAR PLCREAL plc1 := 0.0'
    },
    'RET': {
        name: 'RET',
        description: '返回数据类型',
        syntax: 'VAR RET <name>',
        example: 'VAR RET ret1'
    },
    'World': {
        name: 'World',
        description: '系统预定义的用户坐标系，机器人的基础坐标系。x=0, y=0, z=0, a=0, b=0, c=0',
        syntax: 'World',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,B="FINE",Coord=t_g.World}'
    },
    'nullTool': {
        name: 'nullTool',
        description: '系统预定义的空工具，表示不使用任何工具。x=0, y=0, z=0, a=0, b=0, c=0',
        syntax: 'nullTool',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,B="FINE",Tool=t_s.nullTool}'
    }
};

/**
 * 函数悬停信息
 */
export const functions: Record<string, HoverInfo> = {
    'MovJ': {
        name: 'MovJ',
        description: '关节空间插补运动指令，使机器人各轴同时运动到目标位置，路径不一定是直线',
        syntax: 'MovJ{P=<position>,V=<velocity>,B=<blend>,C=<corner>,Tool=<tool>,Coord=<coord>}',
        example: 'MovJ{P=t_p.Position1,V=t_s.V1000,B="RELATIVE",C=t_s.C100,Tool=t_s.TOOL0,Coord=t_g.USERCOOR0}',
        parameters: 'P: 目标位置\nV: 运动速度\nB: 过渡模式\nC: 转角参数\nTool: 工具坐标系\nCoord: 工件坐标系'
    },
    'MovL': {
        name: 'MovL',
        description: '直线插补运动指令，使机器人沿直线路径移动到目标位置',
        syntax: 'MovL{P=<position>,V=<velocity>,B=<blend>,C=<corner>,Tool=<tool>,Coord=<coord>}',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,B="FINE",Coord=t_g.USERCOOR0}',
        parameters: 'P: 目标位置\nV: 运动速度\nB: 过渡模式\nC: 转角参数\nTool: 工具坐标系\nCoord: 工件坐标系'
    },
    'MovC': {
        name: 'MovC',
        description: '圆弧插补运动指令，使机器人沿圆弧路径移动到目标位置',
        syntax: 'MovC{P1=<via_point>,P2=<to_point>,V=<velocity>,B=<blend>,Tool=<tool>,Coord=<coord>}',
        example: 'MovC{P1=t_p.Position2,P2=t_p.Position3,V=t_s.V500,B="FINE",Coord=t_g.USERCOOR0}',
        parameters: 'P1: 中间点\nP2: 目标位置\nV: 运动速度\nB: 过渡模式\nTool: 工具坐标系\nCoord: 工件坐标系'
    },
    'MovJSearch': {
        name: 'MovJSearch',
        description: '关节空间搜索运动指令，用于搜索目标位置',
        syntax: 'MovJSearch{P=<position>,V=<velocity>,B=<blend>,C=<corner>,Tool=<tool>,Coord=<coord>}',
        example: 'MovJSearch{P=t_p.Position1,V=t_s.V500,B="FINE",Coord=t_g.USERCOOR0}'
    },
    'MovLSearch': {
        name: 'MovLSearch',
        description: '直线搜索运动指令，用于搜索目标位置',
        syntax: 'MovLSearch{P=<position>,V=<velocity>,B=<blend>,C=<corner>,Tool=<tool>,Coord=<coord>}',
        example: 'MovLSearch{P=t_p.Position1,V=t_s.V500,B="FINE",Coord=t_g.USERCOOR0}'
    },
    'MovE': {
        name: 'MovE',
        description: '外部轴运动指令',
        syntax: 'MovE{P=<position>,V=<velocity>,B=<blend>,C=<corner>}',
        example: 'MovE{P=t_p.Position1,V=t_s.V500,B="FINE"}'
    },
    'MovLW': {
        name: 'MovLW',
        description: '直线摆动运动指令',
        syntax: 'MovLW{P=<position>,V=<velocity>,B=<blend>,C=<corner>,Tool=<tool>,Coord=<coord>}',
        example: 'MovLW{P=t_p.Position1,V=t_s.V500,B="FINE",Coord=t_g.USERCOOR0}'
    },
    'MovCW': {
        name: 'MovCW',
        description: '圆弧摆动运动指令',
        syntax: 'MovCW{P1=<via_point>,P2=<to_point>,V=<velocity>,B=<blend>,Tool=<tool>,Coord=<coord>}',
        example: 'MovCW{P1=t_p.Position1,P2=t_p.Position2,V=t_s.V500,B="FINE",Coord=t_g.USERCOOR0}'
    },
    'EMovL': {
        name: 'EMovL',
        description: '外部直线运动指令',
        syntax: 'EMovL{P=<position>,V=<velocity>,B=<blend>,C=<corner>}',
        example: 'EMovL{P=t_p.Position1,V=t_s.V500,B="FINE"}'
    },
    'EMovC': {
        name: 'EMovC',
        description: '外部圆弧运动指令',
        syntax: 'EMovC{P1=<via_point>,P2=<to_point>,V=<velocity>,B=<blend>}',
        example: 'EMovC{P1=t_p.Position1,P2=t_p.Position2,V=t_s.V500,B="FINE"}'
    },
    'MovArch': {
        name: 'MovArch',
        description: '拱形运动指令',
        syntax: 'MovArch{P=<position>,V=<velocity>,B=<blend>,C=<corner>,Tool=<tool>,Coord=<coord>}',
        example: 'MovArch{P=t_p.Position1,V=t_s.V500,B="FINE",Coord=t_g.USERCOOR0}'
    },
    'RefRobotAxis': {
        name: 'RefRobotAxis',
        description: '参考机器人轴运动指令',
        syntax: 'RefRobotAxis <axis>, <angle>',
        example: 'RefRobotAxis 1, 90'
    },
    'GetCurAPos': {
        name: 'GetCurAPos',
        description: '获取当前轴位置',
        syntax: 'GetCurAPos()',
        example: 'VAR APOS curAPos := GetCurAPos()'
    },
    'GetCurCPos': {
        name: 'GetCurCPos',
        description: '获取当前位置',
        syntax: 'GetCurCPos()',
        example: 'VAR CPOS curCPos := GetCurCPos()'
    },
    'APosToCPos': {
        name: 'APosToCPos',
        description: '轴位置转笛卡尔位置',
        syntax: 'APosToCPos()',
        example: 'VAR CPOS cpos := APosToCPos(apos1)'
    },
    'CPosToAPos': {
        name: 'CPosToAPos',
        description: '笛卡尔位置转轴位置',
        syntax: 'CPosToAPos()',
        example: 'VAR APOS apos := CPosToAPos(cpos1)'
    },
    'CPosToCPos': {
        name: 'CPosToCPos',
        description: '转换工件坐标系',
        syntax: 'CPosToCPos{InPos=<position>,InCoord=<coord>,OutCoord=<coord>}',
        example: 'VAR CPOS newpos := CPosToCPos{InPos=t_p.Pos1,InCoord=t_g.USERCOOR1,OutCoord=t_g.USERCOOR2}'
    },
    'SetCartDyn': {
        name: 'SetCartDyn',
        description: '设置笛卡尔动态参数',
        syntax: 'SetCartDyn{Load=<load>,Mass=<mass>,Tool=<tool>,Coord=<coord>,J1=<j1>,J2=<j2>,J3=<j3>,J4=<j4>,J5=<j5>,J6=<j6>}',
        example: 'SetCartDyn{Load=10.0,Mass=5.0,Tool=t_s.TOOL0,Coord=t_g.USERCOOR0,J1=0,J2=0,J3=0,J4=0,J5=0,J6=0}'
    },
    'SetJointDyn': {
        name: 'SetJointDyn',
        description: '设置关节动态参数',
        syntax: 'SetJointDyn{Axis=<axis>,DynParam=<param>}',
        example: 'SetJointDyn{Axis=1,DynParam=100}'
    },
    'GetCamPos': {
        name: 'GetCamPos',
        description: '获取视觉位置',
        syntax: 'GetCamPos{Cam=<camera>,ID=<id>,Coord=<coord>}',
        example: 'VAR CPOS pos := GetCamPos{Cam="Camera1",ID=1,Coord=t_g.USERCOOR0}'
    },
    'SetCoord': {
        name: 'SetCoord',
        description: '设置坐标系',
        syntax: 'SetCoord{Coord=<coord>,P1=<position>,P2=<position>,P3=<position>}',
        example: 'SetCoord{Coord=t_g.USERCOOR1,P1=t_p.Pos1,P2=t_p.Pos2,P3=t_p.Pos3}'
    },
    'SetTool': {
        name: 'SetTool',
        description: '设置工具坐标系',
        syntax: 'SetTool <tool_data>',
        example: 'SetTool tool1'
    },
    'SetPayload': {
        name: 'SetPayload',
        description: '设置负载数据',
        syntax: 'SetPayload{PayLoad=<payload_data>}',
        example: 'SetPayload{PayLoad=t_g.PAYLOAD0}',
        parameters: 'PayLoad: 负载数据'
    },
    'SetMotionMode': {
        name: 'SetMotionMode',
        description: '设置运动模式',
        syntax: 'SetMotionMode <mode>',
        example: 'SetMotionMode 1'
    },
    'GetCurOverRide': {
        name: 'GetCurOverRide',
        description: '获取当前速度倍率',
        syntax: 'GetCurOverRide()',
        example: 'VAR INT ovrd := GetCurOverRide()'
    },
    'SetOverRide': {
        name: 'SetOverRide',
        description: '设置速度倍率',
        syntax: 'SetOverRide <percentage>',
        example: 'SetOverRide 50'
    },
    'Stop': {
        name: 'Stop',
        description: '停止机器人运动',
        syntax: 'Stop',
        example: 'Stop'
    },
    'TrigCam': {
        name: 'TrigCam',
        description: '触发相机拍照',
        syntax: 'TrigCam <cam_id>',
        example: 'TrigCam 1'
    },
    'WaitFinishCAM': {
        name: 'WaitFinishCAM',
        description: '等待相机拍照完成',
        syntax: 'WaitFinishCAM <max_time>',
        example: 'WaitFinishCAM 10'
    },
    'Wait': {
        name: 'Wait',
        description: '等待指定时间（秒）',
        syntax: 'Wait <time>',
        example: 'Wait 2.0'
    },
    'Waitfinish': {
        name: 'Waitfinish',
        description: '等待运动完成，指定等待百分比，如50%表示执行到50%位置时预进下一步',
        syntax: 'Waitfinish{Percent=<percent>}',
        example: 'Waitfinish{Percent=90}'
    },
    'WaitCondition': {
        name: 'WaitCondition',
        description: '等待条件满足',
        syntax: 'WaitCondition{JudgeCondi=<condition>,T=<max_time>,InterEnable=<enable>,Ret=<ret>}',
        example: 'WaitCondition{JudgeCondi="0 > 1",T=0,InterEnable=0,Ret=t_l.INT0}',
        parameters: 'JudgeCondi: 判断条件\nT: 最大等待时间\nInterEnable: 中断使能\nRet: 返回值'
    },
    'SetDO': {
        name: 'SetDO',
        description: '设置数字输出信号的值',
        syntax: 'SetDO <signal>, <value>',
        example: 'SetDO do1, 1'
    },
    'SetAO': {
        name: 'SetAO',
        description: '设置模拟输出信号的值',
        syntax: 'SetAO <signal>, <value>',
        example: 'SetAO ao1, 5.0'
    },
    'SetSimDO': {
        name: 'SetSimDO',
        description: '设置模拟数字输出信号的值',
        syntax: 'SetSimDO <signal>, <value>',
        example: 'SetSimDO do1, 1'
    },
    'SetSimAO': {
        name: 'SetSimAO',
        description: '设置模拟模拟输出信号的值',
        syntax: 'SetSimAO <signal>, <value>',
        example: 'SetSimAO ao1, 5.0'
    },
    'WaitDI': {
        name: 'WaitDI',
        description: '等待数字输入信号达到指定状态',
        syntax: 'WaitSimDI{SimIO=<signal>,Val=<value>,T=<max_time>,InterEnable=<enable>,Ret=<ret>}',
        example: 'WaitSimDI{SimIO=t_p.Input1,Val=1,T=0,InterEnable=1,Ret=t_p.INT0}',
        parameters: 'SimIO: 数字输入信号\nVal: 期望值\nT: 最大等待时间\nInterEnable: 中断使能\nRet: 返回值'
    },
    'WaitAI': {
        name: 'WaitAI',
        description: '等待模拟输入信号达到指定值',
        syntax: 'WaitAI <signal>, <value>, <tolerance>, <max_time>',
        example: 'WaitAI ai1, 5.0, 0.1, 10'
    },
    'WaitSimDI': {
        name: 'WaitSimDI',
        description: '等待模拟数字输入信号达到指定状态',
        syntax: 'WaitSimDI{SimIO=<signal>,Val=<value>,T=<max_time>,InterEnable=<enable>,Ret=<ret>}',
        example: 'WaitSimDI{SimIO=t_p.Input1,Val=1,T=0,InterEnable=1,Ret=t_p.INT0}',
        parameters: 'SimIO: 数字输入信号\nVal: 期望值\nT: 最大等待时间\nInterEnable: 中断使能\nRet: 返回值'
    },
    'WaitSimAI': {
        name: 'WaitSimAI',
        description: '等待模拟模拟输入信号达到指定值',
        syntax: 'WaitSimAI <signal>, <value>, <tolerance>, <max_time>',
        example: 'WaitSimAI ai1, 5.0, 0.1, 10'
    },
    'CompareAI': {
        name: 'CompareAI',
        description: '比较模拟输入信号值',
        syntax: 'CompareAI <signal>, <value>, <tolerance>',
        example: 'IF CompareAI(ai1, 5.0, 0.1) THEN'
    },
    'CompareSimAI': {
        name: 'CompareSimAI',
        description: '比较模拟模拟输入信号值',
        syntax: 'CompareSimAI <signal>, <value>, <tolerance>',
        example: 'IF CompareSimAI(ai1, 5.0, 0.1) THEN'
    },
    'GetSimDIToVar': {
        name: 'GetSimDIToVar',
        description: '获取模拟数字输入信号值到变量',
        syntax: 'GetSimDIToVar <signal>, <var>',
        example: 'GetSimDIToVar di1, var1'
    },
    'SetSimDOByVar': {
        name: 'SetSimDOByVar',
        description: '通过变量设置模拟数字输出信号',
        syntax: 'SetSimDOByVar <signal>, <var>',
        example: 'SetSimDOByVar do1, var1'
    },
    'GetSimAIToVar': {
        name: 'GetSimAIToVar',
        description: '获取模拟模拟输入信号值到变量',
        syntax: 'GetSimAIToVar <signal>, <var>',
        example: 'GetSimAIToVar ai1, var1'
    },
    'SetSimAOByVar': {
        name: 'SetSimAOByVar',
        description: '通过变量设置模拟模拟输出信号',
        syntax: 'SetSimAOByVar <signal>, <var>',
        example: 'SetSimAOByVar ao1, var1'
    },
    'PulseOut': {
        name: 'PulseOut',
        description: '脉冲输出',
        syntax: 'PulseOut <signal>, <duration>',
        example: 'PulseOut do1, 0.5'
    },
    'PulseSimOut': {
        name: 'PulseSimOut',
        description: '模拟脉冲输出',
        syntax: 'PulseSimOut <signal>, <duration>',
        example: 'PulseSimOut do1, 0.5'
    },
    'SetDIEdge': {
        name: 'SetDIEdge',
        description: '设置数字输入信号边沿检测',
        syntax: 'SetDIEdge <signal>, <edge>',
        example: 'SetDIEdge di1, 1'
    },
    'SetSimDIEdge': {
        name: 'SetSimDIEdge',
        description: '设置模拟数字输入信号边沿检测',
        syntax: 'SetSimDIEdge <signal>, <edge>',
        example: 'SetSimDIEdge di1, 1'
    },
    'GetDI8421': {
        name: 'GetDI8421',
        description: '获取8421编码的数字输入信号',
        syntax: 'GetDI8421 <signal1>, <signal2>, <signal3>, <signal4>',
        example: 'VAR INT val := GetDI8421(di1, di2, di3, di4);'
    },
    'SetDO8421': {
        name: 'SetDO8421',
        description: '设置8421编码的数字输出信号',
        syntax: 'SetDO8421 <value>, <signal1>, <signal2>, <signal3>, <signal4>',
        example: 'SetDO8421 5, do1, do2, do3, do4'
    },
    'GetTrackId': {
        name: 'GetTrackId',
        description: '获取跟踪ID',
        syntax: 'GetTrackId()',
        example: 'VAR INT trackId := GetTrackId()'
    },
    'Tracking': {
        name: 'Tracking',
        description: '跟踪指令',
        syntax: 'Tracking <track_id>',
        example: 'Tracking 1'
    },
    'CLKStart': {
        name: 'CLKStart',
        description: '启动时钟',
        syntax: 'CLKStart <clock>',
        example: 'CLKStart clk1'
    },
    'CLKStop': {
        name: 'CLKStop',
        description: '停止时钟',
        syntax: 'CLKStop <clock>',
        example: 'CLKStop clk1'
    },
    'CLKRead': {
        name: 'CLKRead',
        description: '读取时钟值',
        syntax: 'CLKRead <clock>',
        example: 'VAR REAL time := CLKRead(clk1)'
    },
    'CLKReset': {
        name: 'CLKReset',
        description: '重置时钟',
        syntax: 'CLKReset <clock>',
        example: 'CLKReset clk1'
    },
    'PalletToPut': {
        name: 'PalletToPut',
        description: '码垛放置指令',
        syntax: 'PalletToPut <pallet>, <index>',
        example: 'PalletToPut pal1, 1'
    },
    'PalletFromPut': {
        name: 'PalletFromPut',
        description: '码垛取放指令',
        syntax: 'PalletFromPut <pallet>, <index>',
        example: 'PalletFromPut pal1, 1'
    },
    'PalletToGet': {
        name: 'PalletToGet',
        description: '码垛获取指令',
        syntax: 'PalletToGet <pallet>, <index>',
        example: 'PalletToGet pal1, 1'
    },
    'PalletFromGet': {
        name: 'PalletFromGet',
        description: '码垛取取指令',
        syntax: 'PalletFromGet <pallet>, <index>',
        example: 'PalletFromGet pal1, 1'
    },
    'PalletReset': {
        name: 'PalletReset',
        description: '重置码垛',
        syntax: 'PalletReset <pallet>',
        example: 'PalletReset pal1'
    },
    'OnDistance': {
        name: 'OnDistance',
        description: '距离检测指令',
        syntax: 'OnDistance <distance>',
        example: 'OnDistance 10'
    },
    'OnParameter': {
        name: 'OnParameter',
        description: '参数检测指令',
        syntax: 'OnParameter <param>',
        example: 'OnParameter 1'
    },
    'BitAnd': {
        name: 'BitAnd',
        description: '按位与运算',
        syntax: 'BitAnd <value1>, <value2>',
        example: 'VAR INT result := BitAnd(5, 3)'
    },
    'BitNeg': {
        name: 'BitNeg',
        description: '按位取反运算',
        syntax: 'BitNeg <value>',
        example: 'VAR INT result := BitNeg(5);'
    },
    'BitOr': {
        name: 'BitOr',
        description: '按位或运算',
        syntax: 'BitOr <value1>, <value2>',
        example: 'VAR INT result := BitOr(5, 3)'
    },
    'BitXOr': {
        name: 'BitXOr',
        description: '按位异或运算',
        syntax: 'BitXOr <value1>, <value2>',
        example: 'VAR INT result := BitXOr(5, 3)'
    },
    'BitLSH': {
        name: 'BitLSH',
        description: '按位左移运算',
        syntax: 'BitLSH <value>, <shift>',
        example: 'VAR INT result := BitLSH(5, 2)'
    },
    'BitRSH': {
        name: 'BitRSH',
        description: '按位右移运算',
        syntax: 'BitRSH <value>, <shift>',
        example: 'VAR INT result := BitRSH(5, 2)'
    },
    'SocketCreate': {
        name: 'SocketCreate',
        description: '创建Socket连接',
        syntax: 'SocketCreate <socket>, <ip>, <port>',
        example: 'SocketCreate sock1, "192.168.1.1", 8080'
    },
    'SocketClose': {
        name: 'SocketClose',
        description: '关闭Socket连接',
        syntax: 'SocketClose <socket>',
        example: 'SocketClose sock1'
    },
    'SocketSendStr': {
        name: 'SocketSendStr',
        description: '通过Socket发送字符串',
        syntax: 'SocketSendStr <socket>, <string>',
        example: 'SocketSendStr sock1, "Hello"'
    },
    'SocketReadReal': {
        name: 'SocketReadReal',
        description: '通过Socket读取实数',
        syntax: 'SocketReadReal <socket>, <var>',
        example: 'SocketReadReal sock1, var1'
    },
    'SocketReadInt': {
        name: 'SocketReadInt',
        description: '通过Socket读取整数',
        syntax: 'SocketReadInt <socket>, <var>',
        example: 'SocketReadInt sock1, var1'
    },
    'SocketReadStr': {
        name: 'SocketReadStr',
        description: '通过Socket读取字符串',
        syntax: 'SocketReadStr <socket>, <var>',
        example: 'SocketReadStr sock1, var1'
    },
    'SoftFloatStart': {
        name: 'SoftFloatStart',
        description: '启动软浮动',
        syntax: 'SoftFloatStart',
        example: 'SoftFloatStart'
    },
    'SoftFloatStop': {
        name: 'SoftFloatStop',
        description: '停止软浮动',
        syntax: 'SoftFloatStop',
        example: 'SoftFloatStop'
    },
    'SendMessage': {
        name: 'SendMessage',
        description: '发送消息',
        syntax: 'SendMessage <message>',
        example: 'SendMessage "Hello World"'
    },
    'SetRtInfo': {
        name: 'SetRtInfo',
        description: '设置实时信息',
        syntax: 'SetRtInfo <info>',
        example: 'SetRtInfo "Info"'
    },
    'SetRtToErr': {
        name: 'SetRtToErr',
        description: '设置实时信息为错误',
        syntax: 'SetRtToErr{msg=<message>,eid=<error_id>}',
        example: 'SetRtToErr{msg="Error occurred",eid=70002}'
    }
};

/**
 * 常量悬停信息
 */
export const constants: Record<string, HoverInfo> = {
    'FINE': {
        name: 'FINE',
        description: '精确停止模式，机器人在到达目标点时完全停止，不进行过渡',
        syntax: 'FINE',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,B="FINE",Tool=t_s.TOOL0}'
    },
    'RELATIVE': {
        name: 'RELATIVE',
        description: '相对运动模式',
        syntax: 'RELATIVE',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,B="RELATIVE",Tool=t_s.TOOL0}'
    },
    'USERCOOR0': {
        name: 'USERCOOR0',
        description: '默认用户坐标系',
        syntax: 'USERCOOR0',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,B="FINE",Coord=t_g.USERCOOR0}'
    },
    'V5': {
        name: 'V5',
        description: '速度常量\n关节速度百分比: 1%\nTCP线速度: 5mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V5',
        example: 'MovL{P=t_p.Position1,V=t_s.V5,B="FINE",Tool=t_s.TOOL0}'
    },
    'V10': {
        name: 'V10',
        description: '速度常量\n关节速度百分比: 2%\nTCP线速度: 10mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V10',
        example: 'MovL{P=t_p.Position1,V=t_s.V10,B="FINE",Tool=t_s.TOOL0}'
    },
    'V30': {
        name: 'V30',
        description: '速度常量\n关节速度百分比: 3%\nTCP线速度: 30mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V30',
        example: 'MovL{P=t_p.Position1,V=t_s.V30,B="FINE",Tool=t_s.TOOL0}'
    },
    'V50': {
        name: 'V50',
        description: '速度常量\n关节速度百分比: 5%\nTCP线速度: 50mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V50',
        example: 'MovL{P=t_p.Position1,V=t_s.V50,B="FINE",Tool=t_s.TOOL0}'
    },
    'V60': {
        name: 'V60',
        description: '速度常量\n关节速度百分比: 6%\nTCP线速度: 60mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V60',
        example: 'MovL{P=t_p.Position1,V=t_s.V60,B="FINE",Tool=t_s.TOOL0}'
    },
    'V80': {
        name: 'V80',
        description: '速度常量\n关节速度百分比: 8%\nTCP线速度: 80mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V80',
        example: 'MovL{P=t_p.Position1,V=t_s.V80,B="FINE",Tool=t_s.TOOL0}'
    },
    'V100': {
        name: 'V100',
        description: '速度常量\n关节速度百分比: 10%\nTCP线速度: 100mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V100',
        example: 'MovL{P=t_p.Position1,V=t_s.V100,B="FINE",Tool=t_s.TOOL0}'
    },
    'V200': {
        name: 'V200',
        description: '速度常量\n关节速度百分比: 20%\nTCP线速度: 200mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V200',
        example: 'MovL{P=t_p.Position1,V=t_s.V200,B="FINE",Tool=t_s.TOOL0}'
    },
    'V300': {
        name: 'V300',
        description: '速度常量\n关节速度百分比: 30%\nTCP线速度: 300mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V300',
        example: 'MovL{P=t_p.Position1,V=t_s.V300,B="FINE",Tool=t_s.TOOL0}'
    },
    'V500': {
        name: 'V500',
        description: '速度常量\n关节速度百分比: 50%\nTCP线速度: 500mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V500',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,B="FINE",Tool=t_s.TOOL0}'
    },
    'V800': {
        name: 'V800',
        description: '速度常量\n关节速度百分比: 80%\nTCP线速度: 800mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V800',
        example: 'MovL{P=t_p.Position1,V=t_s.V800,B="FINE",Tool=t_s.TOOL0}'
    },
    'V1000': {
        name: 'V1000',
        description: '速度常量\n关节速度百分比: 100%\nTCP线速度: 1000mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V1000',
        example: 'MovL{P=t_p.Position1,V=t_s.V1000,B="FINE",Tool=t_s.TOOL0}'
    },
    'V2000': {
        name: 'V2000',
        description: '速度常量\n关节速度百分比: 100%\nTCP线速度: 2000mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V2000',
        example: 'MovL{P=t_p.Position1,V=t_s.V2000,B="FINE",Tool=t_s.TOOL0}'
    },
    'V3000': {
        name: 'V3000',
        description: '速度常量\n关节速度百分比: 100%\nTCP线速度: 3000mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V3000',
        example: 'MovL{P=t_p.Position1,V=t_s.V3000,B="FINE",Tool=t_s.TOOL0}'
    },
    'V4000': {
        name: 'V4000',
        description: '速度常量\n关节速度百分比: 100%\nTCP线速度: 4000mm/s\n空间旋转速度: 360deg/s\n外部轴线速度: 360mm/s\n外部轴角速度: 180deg/s',
        syntax: 'V4000',
        example: 'MovL{P=t_p.Position1,V=t_s.V4000,B="FINE",Tool=t_s.TOOL0}'
    },
    'C0': {
        name: 'C0',
        description: '转弯区常量\n转弯区百分比: 0%\n转弯区距离: 0mm\n转弯区速度恒定: 0',
        syntax: 'C0',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C0,Tool=t_s.TOOL0}'
    },
    'C5': {
        name: 'C5',
        description: '转弯区常量\n转弯区百分比: 5%\n转弯区距离: 5mm\n转弯区速度恒定: 0',
        syntax: 'C5',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C5,Tool=t_s.TOOL0}'
    },
    'C10': {
        name: 'C10',
        description: '转弯区常量\n转弯区百分比: 10%\n转弯区距离: 10mm\n转弯区速度恒定: 0',
        syntax: 'C10',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C10,Tool=t_s.TOOL0}'
    },
    'C20': {
        name: 'C20',
        description: '转弯区常量\n转弯区百分比: 20%\n转弯区距离: 20mm\n转弯区速度恒定: 0',
        syntax: 'C20',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C20,Tool=t_s.TOOL0}'
    },
    'C30': {
        name: 'C30',
        description: '转弯区常量\n转弯区百分比: 30%\n转弯区距离: 30mm\n转弯区速度恒定: 0',
        syntax: 'C30',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C30,Tool=t_s.TOOL0}'
    },
    'C50': {
        name: 'C50',
        description: '转弯区常量\n转弯区百分比: 50%\n转弯区距离: 50mm\n转弯区速度恒定: 0',
        syntax: 'C50',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C50,Tool=t_s.TOOL0}'
    },
    'C60': {
        name: 'C60',
        description: '转弯区常量\n转弯区百分比: 60%\n转弯区距离: 60mm\n转弯区速度恒定: 0',
        syntax: 'C60',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C60,Tool=t_s.TOOL0}'
    },
    'C80': {
        name: 'C80',
        description: '转弯区常量\n转弯区百分比: 80%\n转弯区距离: 80mm\n转弯区速度恒定: 0',
        syntax: 'C80',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C80,Tool=t_s.TOOL0}'
    },
    'C100': {
        name: 'C100',
        description: '转弯区常量\n转弯区百分比: 100%\n转弯区距离: 100mm\n转弯区速度恒定: 0',
        syntax: 'C100',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C100,Tool=t_s.TOOL0}'
    },
    'C150': {
        name: 'C150',
        description: '转弯区常量\n转弯区百分比: 100%\n转弯区距离: 150mm\n转弯区速度恒定: 0',
        syntax: 'C150',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C150,Tool=t_s.TOOL0}'
    },
    'C200': {
        name: 'C200',
        description: '转弯区常量\n转弯区百分比: 100%\n转弯区距离: 200mm\n转弯区速度恒定: 0',
        syntax: 'C200',
        example: 'MovL{P=t_p.Position1,V=t_s.V500,C=t_s.C200,Tool=t_s.TOOL0}'
    },
    'true': {
        name: 'true',
        description: '布尔值真',
        syntax: 'true',
        example: 'IF ( t_p.flag == true ) THEN'
    },
    'false': {
        name: 'false',
        description: '布尔值假',
        syntax: 'false',
        example: 'IF ( t_p.flag == false ) THEN'
    }
};

/**
 * 变量前缀悬停信息
 */
export const variablePrefixes: Record<string, HoverInfo> = {
    't_p.': {
        name: 't_p.',
        description: '工程变量前缀，用于访问工程作用域内的变量',
        syntax: 't_p.<variable_name>',
        example: 't_p.Position1'
    },
    't_s.': {
        name: 't_s.',
        description: '系统变量前缀，用于访问系统预定义的变量和常量',
        syntax: 't_s.<variable_name>',
        example: 't_s.V1000, t_s.TOOL0, t_s.ZONE_FINE'
    },
    't_l.': {
        name: 't_l.',
        description: '程序变量前缀，用于访问程序作用域内的变量',
        syntax: 't_l.<variable_name>',
        example: 't_l.INT0'
    },
    't_g.': {
        name: 't_g.',
        description: '全局变量前缀，用于访问全局作用域内的变量',
        syntax: 't_g.<variable_name>',
        example: 't_g.USERCOOR0, t_g.PAYLOAD0'
    }
};

/**
 * 合并所有悬停信息
 */
export const allHoverInfo: Record<string, HoverInfo> = {
    ...controlKeywords,
    ...dataTypes,
    ...functions,
    ...constants,
    ...variablePrefixes
};
