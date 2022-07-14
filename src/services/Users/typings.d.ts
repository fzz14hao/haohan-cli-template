declare namespace API {
  type AddWeixinUserDto = {
    wxOpenId?: string;
    unionid?: string;
    nickName?: string;
    headimgurl?: string;
    loginName?: string;
  };

  type AddWeixinUserManageRequestVo = {
    /** 微信用户id */
    weixinUserId: string;
    platform?: WeixinUserManagePlatform;
    /** 车间编号（sps使用） */
    wsId?: string;
    /** 真实姓名 */
    name: string;
    /** 手机 */
    mobilePhone: string;
    /** 是否激活 false：未激活 true：激活 */
    isActive?: boolean;
    role?: WeixinUserManageRole;
  };

  type ApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: any;
  };

  type APIStatusCode = 1 | 2 | 3 | 5 | 333;

  type BindWxRequest = {
    /** Code */
    code: string;
    platform?: WeixinUserManagePlatform;
    /** AppId */
    appId?: string;
    /** 真实姓名 */
    name?: string;
    /** 手机 */
    mobilePhone?: string;
    /** 是否激活 false：未激活 true：激活 */
    isActive?: boolean;
    role?: WeixinUserManageRole;
    /** 车间编号（sps使用） */
    wsId?: string;
  };

  type BooleanApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: boolean;
    queryCount?: number;
  };

  type CopyRoleParamDto = {
    /** 角色Id */
    id?: string;
    /** 角色名称 */
    name?: string;
    /** 描述 */
    description?: string;
    status?: UserStatusEnum;
    /** 是否内置角色 */
    isBuiltin?: number;
    /** 角色编码 */
    actionCode?: string;
    /** 平台Id */
    appId?: string;
  };

  type CustomerDataPermission = {
    /** 客户ID */
    customerId?: string;
    /** 客户编码 */
    customerCode?: string;
    /** 编辑权限 */
    isEdit?: boolean;
    /** 查看权限 */
    isRead?: boolean;
  };

  type DepartmentDataPermission = {
    /** 部门ID */
    departmentId?: string;
    /** 部门编码 */
    departmentCode?: string;
    /** 工厂编码 */
    factoryCode?: string;
    /** 工厂ID */
    factoryId?: string;
    /** 编辑权限 */
    isEdit?: boolean;
    /** 查看权限 */
    isRead?: boolean;
  };

  type FactoryDataPermission = {
    /** 工厂ID */
    factoryId?: string;
    /** 工厂编码 */
    factoryCode?: string;
    /** 编辑权限 */
    isEdit?: boolean;
    /** 查看权限 */
    isRead?: boolean;
  };

  type FactoryDataQueryDto = {
    /** 工厂Id */
    factoryId?: string;
    /** 类型;0为部门，1为仓库 */
    type?: number;
    userId?: string;
  };

  type FindListByUserDto = {
    assignedRoles?: string[];
    roles?: FindListByUserRole[];
  };

  type FindListByUserDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: FindListByUserDto;
    queryCount?: number;
  };

  type FindListByUserRole = {
    label?: string;
    key?: string;
  };

  type GetWeixinUserManageByCodeRequestDto = {
    /** Code */
    code: string;
    platform?: WeixinUserManagePlatform;
    /** AppId */
    appId?: string;
  };

  type Group = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 集团编码 */
    groupCode?: string;
    /** 集团描述 */
    groupDesc?: string;
    /** 集团名称 */
    groupName?: string;
  };

  type GroupApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: Group;
    queryCount?: number;
  };

  type GroupListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: Group[];
    queryCount?: number;
  };

  type Int64ApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: number;
    queryCount?: number;
  };

  type MenuDto = {
    /** 菜单名称 */
    id?: number;
    /** 菜单名称 */
    menuName: string;
    /** 父级id */
    parentId?: string;
    /** 图标 */
    iconic?: string;
    /** 地址 */
    url: string;
    /** 状态 */
    state?: number;
    /** 排序 */
    sort?: number;
    /** 备注描述 */
    remark?: string;
    /** 所属模块 */
    appId: string;
    /** 权限id */
    permissionId?: number;
    /** 版本 */
    version?: string;
    /** 集团Id */
    groupId?: number;
    /** 创建时间 */
    timeCreated?: string;
    /** 添加操作人id */
    userIdCreated?: string;
    /** 最后修改时间 */
    timeLastMod?: string;
    /** 最后修改操作人id */
    userIdLastMod?: string;
    /** 租户Id */
    clientId?: number;
    /** 子节点 */
    childrens?: MenuDto[];
  };

  type MenuDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MenuDto;
    queryCount?: number;
  };

  type MenuDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MenuDto[];
    queryCount?: number;
  };

  type MenuSort = {
    /** 向上移动id */
    id?: number;
    /** 向上排序值 */
    sort?: number;
    /** 向下id */
    downId?: number;
    /** 向下排序值 */
    downSort?: number;
  };

  type PermissionDto = {
    id?: number;
    /** 名称 */
    name: string;
    /** 编码 */
    actionCode: string;
    /** 描述 */
    description?: string;
    status?: Status;
    type?: PermissionType;
    /** 父级Id */
    parentId?: number;
    /** 排序 */
    sort?: number;
    /** 所属模块 */
    appId: string;
    /** 树子节点 */
    children?: PermissionDto[];
  };

  type PermissionDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: PermissionDto;
    queryCount?: number;
  };

  type PermissionDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: PermissionDto[];
    queryCount?: number;
  };

  type PermissionMenuDto = {
    /** 该角色拥有的权限Id */
    selectedPermissions?: string[];
    /** 权限树 */
    permissionTree?: PermissionTreeDto[];
  };

  type PermissionMenuDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: PermissionMenuDto;
    queryCount?: number;
  };

  type PermissionTreeDto = {
    /** 权限名称 */
    title?: string;
    /** 子节点 */
    children?: PermissionTreeDto[];
  };

  type PermissionType = 0 | 1;

  type PostModel = {
    signature?: string;
    msg_Signature?: string;
    timestamp?: string;
    nonce?: string;
    token?: string;
    encodingAESKey?: string;
    domainId?: string;
    appId?: string;
  };

  type QueryField = {
    fieldName?: string;
    fieldValue?: string;
  };

  type QueryFieldDto = {
    fieldName?: string;
    fieldValue?: string;
  };

  type QueryParamDto = {
    listQField?: QueryFieldDto[];
    keyword?: string;
    pageIndex?: number;
    pageSize?: number;
    orderBy?: string;
    factoryIds?: string;
    factoryId?: string;
    factoryCodes?: string;
    channelCodes?: string;
    channelIds?: string;
    roleId?: string;
    type?: string;
    transactionType?: number;
    relationNo?: string;
  };

  type RoleDto = {
    id?: number;
    /** 角色名称 */
    name: string;
    /** 描述 */
    description?: string;
    status?: Status;
    /** 是否内置角色 */
    isBuiltin?: number;
    /** 角色编码 */
    actionCode: string;
    /** 所属模块 */
    appId: string;
    /** 用户 */
    userIds?: number[];
    /** 角色类型[Factory:工厂 BrandShop：品牌商 Channel：客户] */
    roleType?: string[];
  };

  type RoleDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: RoleDto;
    queryCount?: number;
  };

  type RoleDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: RoleDto[];
    queryCount?: number;
  };

  type RolePermissionParamDto = {
    /** 角色Id */
    roleId?: string;
    /** 保存的权限列表 */
    permissionIds?: string[];
  };

  type SaveWeixinUserManageDto = {
    /** 微信用户管理id */
    id?: string;
    /** 真实姓名 */
    name?: string;
    /** 手机 */
    mobilePhone?: string;
    /** 是否激活 false：未激活 true：激活 */
    isActive?: boolean;
    role?: WeixinUserManageRole;
    /** 车间编号（sps使用） */
    wsId?: string;
  };

  type SendCodeDto = {
    type?: string;
    phoneNum?: string;
    appID?: string;
    sendTime?: string;
    token?: string;
    countryCode?: string;
    emailAddress?: string;
  };

  type Status = 0 | 1 | 2 | 3;

  type StringApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: string;
    queryCount?: number;
  };

  type StringListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: string[];
    queryCount?: number;
  };

  type SysLangDict = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 语言类型 */
    langKey?: string;
    /** 原语义 */
    wordKey?: string;
    /** 翻译词 */
    wordValue?: string;
  };

  type SysLangDictApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysLangDict;
    queryCount?: number;
  };

  type SysLangDictDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 语言类型 */
    langKey?: string;
    /** 原语义 */
    wordKey?: string;
    /** 翻译词 */
    wordValue?: string;
  };

  type SysLangDictDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysLangDictDto[];
    queryCount?: number;
  };

  type SysLangDictListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysLangDict[];
    queryCount?: number;
  };

  type SysTenant = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 客户名称 */
    clientName?: string;
    /** 检查 */
    simpleName?: string;
    /** 图标 */
    companyName?: string;
    /** 备注 */
    remark?: string;
    /** 表字段集 */
    users?: SysUser[];
  };

  type SysUser = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 账号 */
    loginName: string;
    /** 名称 */
    displayName?: string;
    /** 密码 */
    password: string;
    userType?: UserType;
    status?: Status;
    /** 邮箱 */
    emailAddress?: string;
    /** 性别 */
    sex?: number;
    /** 年龄 */
    age?: number;
    /** 手机号 */
    mobile?: string;
    /** 微信OpenId */
    wechatOpenId?: string;
    /** 微信全局Unionid */
    wechatUnionid?: string;
    /** 微信用户id */
    wechatUserId?: string;
    /** 微信昵称 */
    wechatNickName?: string;
    /** 微信头像 */
    avatar?: string;
    /** 是否微信 */
    isWechat?: boolean;
    /** 是否激活 */
    isActive?: boolean;
    /** 是否管理员 */
    isAdmin?: boolean;
    /** 手机app注册id */
    registrationId?: string;
    /** spsAppId */
    spsOpenId?: string;
    /** 极光账号 */
    imAccount?: string;
    /** 极光密码 */
    imPwd?: string;
    /** 工作流id */
    workFlowOpenId?: number;
    /** 报表关联id */
    mergReportOpenId?: number;
    /** 平台 */
    platform?: string;
    /** 车间id */
    wsId?: string;
    /** 试图编码 */
    viewCode?: string;
    /** 是否更新用户信息 */
    isUpdateUserData?: boolean;
    /** 入职时间 */
    entryDate?: string;
    /** 最后登录时间 */
    loginTime?: string;
    /** 登出时间 */
    logoutTime?: string;
    /** 组织架构id */
    orgsId?: string;
    /** 转款组Id */
    transferGroupId?: string;
    /** 来源 */
    source?: string;
    /** 描述 */
    description?: string;
    /** 是否拥有角色 */
    hasRole?: boolean;
    /** 用户所属租户 */
    tenantName?: string;
    /** 用户角色 */
    roleName?: string;
  };

  type SysLangDictQueryCondition = {
    listQField?: QueryField[];
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    orderBy?: string;
    sortBy?: string;
    sortType?: string;
    factoryIds?: string;
    factoryId?: string;
    factoryCodes?: string;
    channelCodes?: string;
    channelIds?: string;
    channeChangeCodes?: string;
    brandShopIds?: string;
    brandShopCodes?: string;
    prodNo?: string;
    groupId?: string;
    transactionType?: number;
    relationNo?: string;
    /** 语言类型 */
    langKey?: string;
  };

  type UpdatePassWordDto = {
    appID?: string;
    sendTime?: string;
    token?: string;
    phone?: string;
    verifyCode?: string;
    password?: string;
  };

  type UserChangeDto = {
    id?: number;
    isFreeze?: boolean;
    password?: string;
  };

  type UserCondition = {
    listQField?: QueryField[];
    pageIndex?: number;
    pageSize?: number;
    keyword?: string;
    orderBy?: string;
    sortBy?: string;
    sortType?: string;
    factoryIds?: string;
    factoryId?: string;
    factoryCodes?: string;
    channelCodes?: string;
    channelIds?: string;
    channeChangeCodes?: string;
    brandShopIds?: string;
    brandShopCodes?: string;
    prodNo?: string;
    groupId?: string;
    transactionType?: number;
    relationNo?: string;
    /** 分配类型 0全部 1未分配 2 已分配 */
    type?: number;
    /** 角色id */
    roleId?: number;
    /** 用户角色 */
    roleIds?: number[];
    /** 邮箱 */
    email?: string;
    /** 昵称 */
    displayName?: string;
    /** 用户类型[0: 超级管理员 1 管理员: 2 一般用户] */
    userType?: number;
    /** 状态[0:正常 1 禁用  2 删除 3冻结] */
    status?: number;
    /** 是否绑定微信 0：否 1：是 */
    hasWechat?: number;
    /** 应用类型id */
    appId?: string;
    /** 是否带集团 */
    isGroup?: boolean;
    /** 是否管理员 */
    isAdminUser?: boolean;
  };

  type UserCustomerDataMappingDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 工厂Id */
    factoryId?: string;
    /** 用户Id */
    userId?: string;
    /** 客户Id */
    customerId?: string;
    /** 编辑权限;默认0为否，1为是 */
    isEdit?: boolean;
    /** 查看权限;默认0为否，1为是 */
    isRead?: boolean;
    /** 应用标识 */
    appId?: string;
    customerCode?: string;
    customerName?: string;
  };

  type UserCustomerDataMappingDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: UserCustomerDataMappingDto[];
    queryCount?: number;
  };

  type UserDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 账号 */
    loginName?: string;
    /** 名称 */
    displayName?: string;
    /** 密码 */
    password?: string;
    userType?: UserType;
    status?: Status;
    /** 邮箱 */
    emailAddress?: string;
    /** 性别 0 女 1 男 */
    sex?: number;
    /** 年龄 */
    age?: number;
    /** 手机号 */
    mobile?: string;
    /** 微信OpenId */
    wechatOpenId?: string;
    /** 微信全局Unionid */
    wechatUnionid?: string;
    /** 微信用户id */
    wechatUserId?: string;
    /** 微信昵称 */
    wechatNickName?: string;
    /** 微信头像 */
    avatar?: string;
    /** 是否微信 */
    isWechat?: boolean;
    /** 是否激活 */
    isActive?: boolean;
    /** 是否管理员 */
    isAdmin?: boolean;
    /** 手机app注册id */
    registrationId?: string;
    /** spsAppId */
    spsOpenId?: string;
    /** 极光账号 */
    imAccount?: string;
    /** 极光密码 */
    imPwd?: string;
    /** 工作流id */
    workFlowOpenId?: number;
    /** 报表关联id */
    mergReportOpenId?: number;
    /** 平台 */
    platform?: string;
    /** 车间id */
    wsId?: string;
    /** 试图编码 */
    viewCode?: string;
    /** 是否更新用户信息 */
    isUpdateUserData?: boolean;
    /** 入职时间 */
    entryDate?: string;
    /** 最后登录时间 */
    loginTime?: string;
    /** 登出时间 */
    logoutTime?: string;
    /** 组织架构id */
    orgsId?: string;
    /** 转款组Id */
    transferGroupId?: string;
    /** 来源 */
    source?: string;
    /** 是否拥有角色 */
    hasRole?: boolean;
    /** 用户所属租户 */
    tenantName?: string;
    /** 用户角色 */
    roleName?: string;
    currentGroupId?: string;
    currentGroupCode?: string;
    description?: string;
    /** 是否接纳 true 是，false 否 */
    isAccept?: boolean;
  };

  type UserDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: UserDto;
    queryCount?: number;
  };

  type UserDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: UserDto[];
    queryCount?: number;
  };

  type UserFactoryDataMappingDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 用户Id */
    userId?: string;
    /** 类型;0为部门，1为仓库 */
    type?: number;
    /** 查看权限;默认0为否，1为是 */
    isRead?: boolean;
    /** 编辑权限;默认0为否，1为是 */
    isEdit?: boolean;
    /** 关联Id;类型为部门保存部门Id，类型为仓库保存仓库Id */
    relationId?: string;
    /** 平台Id */
    appId?: string;
    /** 工厂Id */
    factoryId?: string;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 仓库名称 */
    warehouseName?: string;
    warehouseId?: string;
    /** 工厂编码 */
    factoryCode?: string;
    /** 工厂名称 */
    factoryName?: string;
    /** 部门编码 */
    departmentCode?: string;
    departmentId?: string;
    /** 部门名称 */
    departmentName?: string;
  };

  type UserFactoryDataMappingDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: UserFactoryDataMappingDto[];
    queryCount?: number;
  };

  type UserLoginDto = {
    /** 账户 */
    account?: string;
    /** 密码 */
    password?: string;
    /** 验证模式 */
    grantType?: string;
    /** 客户端id */
    clientId?: string;
    /** 客户端秘钥 */
    clientSecret?: string;
  };

  type UserLoginTokenDto = {
    access_token?: string;
    expires_in?: number;
    token_type?: string;
  };

  type UserLoginTokenDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: UserLoginTokenDto;
    queryCount?: number;
  };

  type UserNewProfileDto = {
    /** 用户角色编码 */
    roleCodes?: string[];
    /** 用户权限编码 */
    permissionCodes?: string[];
    id?: string;
    /** 登录名 */
    loginName?: string;
    /** 显示名 */
    displayName?: string;
    /** 头像 */
    avatar?: string;
    userType?: UserType;
    status?: Status;
    /** 用户描述信息 */
    description?: string;
    /** 租户Id */
    clientId?: string;
    /** 当前集团Id */
    currentGroupId?: string;
    currentGroupName?: string;
    currentGroupCode?: string;
    tenant?: SysTenant;
    userGroups?: Group[];
    /** 权限客户 */
    ownChannelCodes?: string[];
    /** 权限工厂 */
    ownFactoryCodes?: string[];
    /** 手机 */
    mobile?: string;
    /** 是否已绑定微信 */
    isBindWeiXin?: boolean;
  };

  type UserNewProfileDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: UserNewProfileDto;
    queryCount?: number;
  };

  type UserPermissionDataDto = {
    /** 用户ID */
    userId?: string;
    /** 已授权工厂列表 */
    factoryPermission?: FactoryDataPermission[];
    /** 已授权客户列表 */
    customerPermission?: CustomerDataPermission[];
    /** 已授权仓库列表 */
    warehousePermission?: WarehouseDataPermission[];
    /** 已授权部门列表 */
    departmentPermission?: DepartmentDataPermission[];
  };

  type UserPermissionDataDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: UserPermissionDataDto;
    queryCount?: number;
  };

  type UserRegisterDto = {
    phoneNum?: string;
    appID?: string;
    sendTime?: string;
    token?: string;
    /** 登录名 */
    loginName: string;
    /** 显示名 */
    displayName: string;
    /** 密码 */
    password: string;
    /** 头像 */
    avatar?: string;
    userType?: UserType;
    /** 邮箱地址 */
    emailAddress?: string;
    /** 用户描述信息 */
    description?: string;
    /** 手机号 */
    phone?: string;
    /** 性别 man,woman,unknown */
    sex?: string;
    /** 年龄 */
    age?: number;
    /** 手机验证码 */
    verifyCode: string;
    openId?: string;
    unionId?: string;
    /** 来源[pc/weixin,Android] */
    source?: string;
    /** 平台 */
    platform?: string;
    /** 注册类型，手机注册邮箱注册  phone , email */
    type: string;
  };

  type UserStatusEnum = 0 | 1 | 2 | 3;

  type UserType = 0 | 1 | 2;

  type WarehouseDataPermission = {
    /** 仓库ID */
    warehouseId?: string;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 工厂ID */
    factoryId?: string;
    /** 工厂编码 */
    factoryCode?: string;
    /** 编辑权限 */
    isEdit?: boolean;
    /** 查看权限 */
    isRead?: boolean;
  };

  type WeChatAccountDto = {
    /** 应用唯一标识，在微信开放平台提交应用审核通过后获得 */
    appId?: string;
    /** 应用授权作用域，拥有多个作用域用逗号（,）分隔，网页应用目前仅填写snsapi_login即可 */
    scope?: string;
    /** 用于保持请求和回调的状态，授权请求后原样带回给第三方。该参数可用于防止 csrf 攻击（跨站请求伪造攻击），建议第三方带上该参数，可设置为简单的随机数加 session 进行校验 */
    state?: string;
    /** 重定向地址，需要进行UrlEncode */
    redirect_Uri?: string;
  };

  type WeChatAccountDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: WeChatAccountDto;
    queryCount?: number;
  };

  type WeChatInfoMiniDto = {
    access_token?: string;
    expires_in?: number;
    token_type?: string;
    userInfo?: UserNewProfileDto;
  };

  type WeChatInfoMiniDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: WeChatInfoMiniDto;
    queryCount?: number;
  };

  type WeiXinLoginDto = {
    /** 手机号 */
    phone?: string;
    /** 密码 */
    pwd?: string;
    identityServerApiUrl?: string;
    erpPlatformApiUrl?: string;
    openId?: string;
    unionId?: string;
    hasWechat?: boolean;
    /** 票据 */
    authorization?: Record<string, any>;
  };

  type WeixinUser = {
    id?: string;
    groupId?: number;
    version?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 微信公众号OpenId */
    wxOpenId?: string;
    /** 微信开放平台SpsOpenId */
    spsOpenId?: string;
    /** 微信开放平台工作流OpenId */
    workFlowOpenId?: string;
    /** 微信开放平台合并报表MergReportOpenId */
    mergReportOpenId?: string;
    /** Unionid */
    unionid?: string;
    /** 微信昵称 */
    nickName?: string;
    /** 微信头像 */
    headimgurl?: string;
    loginName?: string;
  };

  type WeixinUserListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: WeixinUser[];
    queryCount?: number;
  };

  type WeixinUserManageDetailDto = {
    /** 微信用户管理id */
    id?: string;
    /** 微信昵称 */
    nickName?: string;
    /** 微信用户id */
    weixinUserId?: string;
    /** 真实姓名 */
    name?: string;
    /** 手机 */
    mobilePhone?: string;
    /** 是否激活 false：未激活 true：激活 */
    isActive?: boolean;
    role?: WeixinUserManageRole;
    platform?: WeixinUserManagePlatform;
    /** 车间编号（sps使用） */
    wsId?: string;
  };

  type WeixinUserManageDetailDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: WeixinUserManageDetailDto;
    queryCount?: number;
  };

  type WeixinUserManageDto = {
    /** 微信用户管理id */
    id?: string;
    /** 微信公众号OpenId */
    wxOpenId?: string;
    /** 微信开放平台SpsOpenId */
    spsOpenId?: string;
    /** 微信开放平台工作流OpenId */
    workFlowOpenId?: string;
    /** 微信开放平台合并报表MergReportOpenId */
    mergReportOpenId?: string;
    /** Unionid */
    unionid?: string;
    /** 微信昵称 */
    nickName?: string;
    /** 微信头像 */
    headimgurl?: string;
    /** 微信用户id */
    weixinUserId?: string;
    /** 真实姓名 */
    name?: string;
    /** 手机 */
    mobilePhone?: string;
    /** 是否激活 false：未激活 true：激活 */
    isActive?: boolean;
    role?: WeixinUserManageRole;
    platform?: WeixinUserManagePlatform;
    /** 车间编号（sps使用） */
    wsId?: string;
  };

  type WeixinUserManageDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: WeixinUserManageDto;
    queryCount?: number;
  };

  type WeixinUserManageListDto = {
    /** 微信用户管理id */
    id?: string;
    /** 微信昵称 */
    nickName?: string;
    /** 微信用户id */
    weixinUserId?: string;
    /** 真实姓名 */
    name?: string;
    /** 手机 */
    mobilePhone?: string;
    /** 是否激活 false：未激活 true：激活 */
    isActive?: boolean;
    role?: WeixinUserManageRole;
    platform?: WeixinUserManagePlatform;
    /** 车间编号（sps使用） */
    wsId?: string;
  };

  type WeixinUserManageListDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: WeixinUserManageListDto[];
    queryCount?: number;
  };

  type WeixinUserManagePlatform = 0 | 1 | 2 | 3 | 4;

  type WeixinUserManageRole = 0 | 1 | 2 | 3;

  type AccountChangeGroupParams = {
    groupId: number;
  };

  type AccountGetUserAppMenusParams = {
    /** 所在的功能模块，如：ERP,ODP */
    AppId?: string;
  };

  type AccountExistAccountParams = {
    account: string;
  };

  type DataPermissionGetCustomerDataListByUserIdParams = {
    userId?: string;
  };

  type DataPermissionDeleteFactoryMappingParams = {
    id?: string;
  };

  type DataPermissionDeleteCustomerMappingParams = {
    id?: string;
  };

  type DataPermissionDeleteFactoryMappingAllParams = {
    userId?: string;
  };

  type DataPermissionDeleteCustomerMappingAllParams = {
    userId?: string;
  };

  type DataPermissionGetPermissionByUserIdParams = {
    /** 用户ID */
    userId?: string;
    /** 应用程序ID */
    appId?: string;
  };

  type GroupGetByIdParams = {
    id: number;
  };

  type GroupDeleteParams = {
    id: number;
  };

  type GroupGetByUserIdParams = {
    userId: number;
  };

  type LangDictGetParams = {
    id?: string;
  };

  type MenuGetMenuTreeParams = {
    appId: string;
  };

  type MenuGetByIdParams = {
    id: number;
  };

  type MenuDeleteParams = {
    id: number;
  };

  type MenuSetEnableParams = {
    id: number;
    /** true 禁止，false 启用 */
    isEnable: boolean;
  };

  type MenuExportParams = {
    appId: string;
  };

  type PermissionGetPermissionTreeParams = {
    appId: string;
  };

  type PermissionGetByIdParams = {
    id: number;
  };

  type PermissionDeleteParams = {
    id: number;
  };

  type RoleGetByIdParams = {
    id: number;
  };

  type RoleFindListByUserParams = {
    /** 用户id */
    userId: number;
    /** 应用id */
    appId: string;
  };

  type RoleMapUsersParams = {
    roleId: number;
  };

  type RoleGetListByAppIdParams = {
    appId: string;
  };

  type RoleGetPermissionTreeParams = {
    roleId?: string;
  };

  type UserGetByIdParams = {
    id: number;
  };

  type UserGetSysUserByLoginNameParams = {
    loginname: string;
  };

  type UserDistributionGroupParams = {
    id: number;
  };

  type UserDistributionRolesParams = {
    /** 用户id */
    id: number;
  };

  type UserGetListByRoleIdParams = {
    roleId: number;
  };

  type UserQueryByLoginNameParams = {
    userName: string;
  };

  type UserAcceptParams = {
    /** 用户id */
    id: number;
    /** true 接纳 false 取消接纳 */
    isAccept: boolean;
  };

  type UserGetCurrenUserPermissionsParams = {
    userId: number;
    permissions?: string[];
  };

  type WeixinGetParams = {
    signature?: string;
    timestamp?: string;
    nonce?: string;
    echostr?: string;
  };

  type WeixinLoginParams = {
    /** 应用唯一标识，在微信开放平台提交应用审核通过后获得 */
    AppId?: string;
    /** 秘钥 */
    Secret?: string;
    /** 重定向地址 */
    Redirect_Uri?: string;
    /** 是否post请求回调 */
    IsPost?: boolean;
  };

  type WeixinOauthParams = {
    /** 应用唯一标识，在微信开放平台提交应用审核通过后获得 */
    AppId?: string;
    /** 秘钥 */
    Secret?: string;
    /** 重定向地址 */
    Redirect_Uri?: string;
    /** 是否post请求回调 */
    IsPost?: boolean;
  };

  type WeixinLoginCallbackParams = {
    code?: string;
    state?: string;
  };

  type WeixinWxPcOAuthHHOrderExternalParams = {
    okUrl?: string;
  };

  type WeixinWxPcOAuthHHOrderExternalBackParams = {
    code?: string;
    state?: string;
  };

  type WeixinWechatTokenParams = {
    wechat_redirect?: string;
  };

  type WeixinBindWeiXinParams = {
    userName?: string;
  };

  type WeixinBindWeiXinInfoParams = {
    userName?: string;
    code?: string;
    state?: string;
  };

  type WeixinWeChatAppletParams = {
    unionid: string;
  };

  type WeixinCheckWeiXinLoginPhoneParams = {
    phone?: string;
  };

  type WeixinUserGetWeixinUserManageParams = {
    /** 微信用户id */
    weixinUserId: string;
    /** 平台类型 0：sps 1：手机端工作流 */
    platform: WeixinUserManagePlatform;
  };

  type WeixinUserGetWeixinUserManageDetailParams = {
    /** 微信用户管理id */
    id?: string;
  };
}
