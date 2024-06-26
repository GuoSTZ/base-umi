/** 两层 */
export const treeData_2_level = [
  {
    id: 1,
    name: '父节点1',
    children: [
      {
        id: 2,
        name: '子节点1',
      },
      {
        id: 3,
        name: '子节点2',
      },
    ],
  },
  {
    id: 4,
    name: '父节点2',
    children: [
      {
        id: 5,
        name: '子节点3',
      },
      {
        id: 6,
        name: '子节点4',
      },
    ],
  },
  {
    id: 7,
    name: '独立节点',
  },
];

/** 三层 */
export const treeData_3_level = [
  {
    id: 1,
    name: '父节点1',
    children: [
      {
        id: 2,
        name: '子节点1',
        children: [
          {
            id: 3,
            name: '子节点2',
          },
          {
            id: 4,
            name: '子节点3',
          },
        ],
      },
      {
        id: 5,
        name: '子节点4',
        children: [
          {
            id: 6,
            name: '子节点5',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: '父节点2',
    children: [
      {
        id: 8,
        name: '子节点6',
      },
      {
        id: 9,
        name: '子节点7',
      },
    ],
  },
  {
    id: 10,
    name: '独立节点',
  },
];

/** 四层 */
export const treeData_4_level = [
  {
    id: 1,
    name: '父节点1',
    children: [
      {
        id: 2,
        name: '子节点1',
        children: [
          {
            id: 3,
            name: '子节点2',
            children: [
              {
                id: 4,
                name: '子节点3',
              },
              {
                id: 5,
                name: '子节点4',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: '父节点2',
    children: [
      {
        id: 7,
        name: '子节点5',
        children: [
          {
            id: 8,
            name: '子节点6',
            children: [
              {
                id: 9,
                name: '子节点7',
              },
              {
                id: 10,
                name: '子节点8',
              },
              {
                id: 11,
                name: '子节点9',
              },
            ],
          },
        ],
      },
      {
        id: 12,
        name: '子节点10',
        children: [
          {
            id: 13,
            name: '子节点11',
            children: [
              {
                id: 14,
                name: '子节点12',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: '独立节点',
  },
];

/** 四层，子数据字段为child */
export const treeData_4_level_child = [
  {
    id: 1,
    name: '父节点1',
    checkable: false,
    child: [
      {
        id: 2,
        name: '子节点1',
        child: [
          {
            id: 3,
            name: '子节点2',
            child: [
              {
                id: 4,
                name: '子节点3',
              },
              {
                id: 5,
                name: '子节点4',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: '父节点2',
    checkable: false,
    child: [
      {
        id: 7,
        name: '子节点5',
        child: [
          {
            id: 8,
            name: '子节点6',
            child: [
              {
                id: 9,
                name: '子节点7',
              },
              {
                id: 10,
                name: '子节点8',
              },
              {
                id: 11,
                name: '子节点9',
              },
            ],
          },
        ],
      },
      {
        id: 12,
        name: '子节点10',
        child: [
          {
            id: 13,
            name: '子节点11',
            child: [
              {
                id: 14,
                name: '子节点12',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: '独立节点',
  },
];

/** 身份相关数据 */
export const identit_data = [
  {
    id: -1,
    name: '人',
    status: 'active',
    type: 'parentGroup',
    child: [
      {
        id: '1',
        name: '员工',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '2',
        name: '合作伙伴',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '3',
        name: '客户',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '4',
        name: '临时访客',
        status: 'active',
        type: 'group',
        child: [],
      },
    ],
  },
  {
    id: -2,
    name: '应用程序',
    status: 'active',
    type: 'parentGroup',
    child: [
      {
        id: '5',
        name: '业务处理系统',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '6',
        name: 'SQL工具',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '7',
        name: '交换机',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '8',
        name: '运维',
        status: 'active',
        type: 'group',
        child: [],
      },
    ],
  },
  {
    id: -3,
    name: '终端设备',
    status: 'active',
    type: 'parentGroup',
    child: [
      {
        id: '9',
        name: '业务终端',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '10',
        name: '办公终端',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '11',
        name: '运维终端',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '12',
        name: '服务器',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '13',
        name: '网关跳板',
        status: 'active',
        type: 'group',
        child: [],
      },
    ],
  },
  {
    id: -4,
    name: '账户',
    status: 'active',
    type: 'parentGroup',
    child: [
      {
        id: '14',
        name: '数据库管理员账户',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '15',
        name: '高权限账户',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '16',
        name: '敏感数据账户',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '17',
        name: '业务账号',
        status: 'active',
        type: 'group',
        child: [],
      },
      {
        id: '18',
        name: '运维账号',
        status: 'active',
        type: 'group',
        child: [],
      },
    ],
  },
];

/** 资产相关数据 */
export const asset_data = [
  {
    id: '1',
    name: '数据库名称1',
    dbName: '数据库名称1',
    children: [
      {
        id: '1-1',
        name: '默认资产集合组ORCLE',
        dbName: '数据库名称1',
        assetGroupName: '默认资产集合组ORCLE',
        children: [],
      },
      {
        id: '1-2',
        name: '资产集合组21',
        dbName: '数据库名称1',
        assetGroupName: '资产集合组21',
        children: [
          {
            id: '1-2-1',
            name: '资产集合2',
            dbName: '数据库名称1',
            assetGroupName: '资产集合组21',
            assetName: '资产集合2',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: '数据库名称3',
    dbName: '数据库名称3',
    children: [
      {
        id: '2-1',
        name: '默认资产集合组MySQL',
        dbName: '数据库名称3',
        assetGroupName: '默认资产集合组MySQL',
        children: [],
      },
      {
        id: '2-2',
        name: '资产集合组222',
        dbName: '数据库名称3',
        assetGroupName: '资产集合组222',
        children: [
          {
            id: '2-2-1',
            name: '资产集合2221',
            dbName: '数据库名称3',
            assetGroupName: '资产集合组222',
            assetName: '资产集合2221',
          },
          {
            id: '2-2-2',
            name: '资产集合2222',
            dbName: '数据库名称3',
            assetGroupName: '资产集合组222',
            assetName: '资产集合2222',
          },
          {
            id: '2-2-3',
            name: '资产集合2223',
            dbName: '数据库名称3',
            assetGroupName: '资产集合组222',
            assetName: '资产集合2223',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: '数据库名称2',
    dbName: '数据库名称2',
    children: [
      {
        id: '3-1',
        name: '默认资产集合组MySQL2',
        dbName: '数据库名称2',
        assetGroupName: '默认资产集合组MySQL2',
        children: [
          {
            id: '3-1-1',
            name: '资产集合mysql201',
            dbName: '数据库名称2',
            assetGroupName: '默认资产集合组MySQL2',
            assetName: '资产集合mysql201',
          },
        ],
      },
      {
        id: '3-2',
        name: '资产集合组666',
        dbName: '数据库名称2',
        assetGroupName: '资产集合组666',
        children: [
          {
            id: '3-2-1',
            name: '资产集合6661',
            dbName: '数据库名称2',
            assetGroupName: '资产集合组666',
            assetName: '资产集合6661',
          },
          {
            id: '3-2-2',
            name: '资产集合6662',
            dbName: '数据库名称2',
            assetGroupName: '资产集合组224',
            assetName: '资产集合6662',
          },
        ],
      },
    ],
  },
];
