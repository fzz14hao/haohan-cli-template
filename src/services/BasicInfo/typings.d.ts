declare namespace API {
  type ApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: any;
  };

  type APIStatusCode = 1 | 2 | 3 | 5 | 333;

  type BaBillToDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 客户Id */
    customerId?: string;
    /** 客户编号 */
    customerCode?: string;
    /** 客户名称 */
    customerName?: string;
    /** 集团编号 */
    groupCode?: string;
    /** 集团名称 */
    groupName?: string;
    billingType?: string;
    billToCode?: string;
    billToName?: string;
    /** 国家的Id */
    countryId?: string;
    /** 国家简码 */
    country?: string;
    /** 国家的名称 */
    countryName?: string;
    /** 省/州 */
    state?: string;
    /** 城市 */
    city?: string;
    /** 邮编 */
    zip?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    contactId?: number;
    /** 销售员姓名;手工输入 */
    salesPersonName?: string;
    /** SAP Bill To  Code */
    sapBillToCode?: string;
    /** CC Expr. Date */
    ccExpirationDate?: string;
    ccNumber1?: string;
    ccNumber2?: string;
    /** Security Code */
    scSecuiryCode?: string;
    /** Pack List Form */
    packform?: string;
    /** Invoice Form */
    invoiceForm?: string;
    /** 是否启用. true - 启用；false - 禁用 */
    activeFlag?: boolean;
    /** Vat税号 */
    vatNumber?: string;
    /** 付款方式 id */
    payTermId?: string;
    /** 付款方式编号 */
    payTermCode?: string;
    /** 付款方式名称 */
    payTermDesc?: string;
  };

  type BaBillToDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaBillToDto;
    queryCount?: number;
  };

  type BaBillToDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaBillToDto[];
    queryCount?: number;
  };

  type BaBillToQueryCondition = {
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
    customerId?: string;
  };

  type BaCommonOperateType = 0 | 1 | 2 | 3 | 4 | 5;

  type BaCustomerBatchOperateResponseDto = {
    /** 记录 数 */
    qty?: number;
    /** 校验不通过的数量 */
    errorQty?: number;
    traceId?: string;
    /** 错误校验结果 */
    validateList?: BaCustomerValidateItemDto[];
  };

  type BaCustomerBatchOperateResponseDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaCustomerBatchOperateResponseDto;
    queryCount?: number;
  };

  type BaCustomerBatchUpdateStatusRequestDto = {
    datas?: BaCustomerValidateItemDto[];
    operateType?: BaCommonOperateType;
    /** 驳回/撤审批原因 id */
    reasonId?: string;
    reasonCode?: string;
    reasonContent?: string;
    /** 驳回/撤审批原因 */
    reason?: string;
  };

  type BaCustomerDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 集团编码 */
    groupCode?: string;
    /** 集团的名字 */
    groupName?: string;
    /** 公司Id;从公司信息表选择的客户信息有值，如果是用户自己输入，默认为0 */
    companyId?: string;
    /** 公司编码 */
    companyCode?: string;
    /** 公司名称 */
    companyName?: string;
    /** 客户编码;从公司信息表选择的客户信息，使用公司表的编号，一般以 1 开头。如果是用户自己输入的客户信息，以6开头创建 6 位的流水号。 */
    customer?: string;
    /** 客户名称 */
    customerName?: string;
    /** 客户类型 */
    customerType?: string;
    /** 上级客户编码;[冗余]兼容旧数据使用 */
    parentCustomer?: string;
    /** 国家Id */
    countryId?: string;
    /** 国家简码 */
    country?: string;
    /** 国家名称 */
    countryName?: string;
    /** 省/州 */
    state?: string;
    /** 城市 */
    city?: string;
    /** 邮编 */
    zip?: string;
    /** 地址1 */
    address1?: string;
    /** 地址2 */
    address2?: string;
    /** 地址3 */
    address3?: string;
    /** 地址4 */
    address4?: string;
    /** 别名 */
    doingBusinessAs?: string;
    contactAttention?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 传真 */
    contactFax?: string;
    /** Email */
    contactEmail?: string;
    custOpenDate?: string;
    /** 溢装率（0 ~ 1 ） */
    overage?: number;
    shortage?: number;
    arCustomer?: string;
    /** 是否启用 */
    activeFlag?: number;
    /** Vat税号 */
    vatNumber?: string;
    /** 状态;[0]待提审, [1]启用, [2]待审核, [3]拒绝 */
    status?: number;
    /** 状态的中文 */
    statusCn?: string;
    /** 默认品牌商Id */
    brandShopId?: number;
    /** 品牌商编号 */
    brandShopCode?: string;
    /** 品牌商名称 */
    brandShopName?: string;
    /** 默认品牌Id */
    brandId?: number;
    /** 品牌编号 */
    brandCode?: string;
    /** 品牌名称 */
    brandName?: string;
    orderCancelDaysToStartDate?: number;
    /** 付款方 */
    billToList?: BaBillToDto[];
    /** 交货地址 */
    storeList?: BaStoreDto[];
  };

  type BaCustomerDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaCustomerDto;
    queryCount?: number;
  };

  type BaCustomerDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaCustomerDto[];
    queryCount?: number;
  };

  type BaCustomerFactoryDto = {
    id?: string;
    /** 最后修改时间 */
    timeLastMod?: string;
    /** 集团Id */
    groupId?: string;
    /** 集团编码 */
    groupCode?: string;
    /** 集团的名字 */
    groupName?: string;
    factoryId?: string;
    /** 工厂编码 */
    ftyCode?: string;
    /** 工厂名称 */
    ftyName?: string;
    /** 客户Id，不选设置为 0 */
    customerId?: string;
    /** 客户编码 */
    customerCode?: string;
    /** 客户名称 */
    customerName?: string;
    /** 客户仓库Id，不选设置为 0 */
    dcStoreId?: string;
    /** 客户到货仓库编码 */
    storeCode?: string;
    /** 客户到货仓库名称 */
    storeName?: string;
    daysToStartDate?: number;
    pmcQuotation?: boolean;
    fabricBOMReq?: boolean;
    trimBOMReq?: boolean;
    cmRreq?: boolean;
  };

  type BaCustomerFactoryDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaCustomerFactoryDto;
    queryCount?: number;
  };

  type BaCustomerFactoryDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaCustomerFactoryDto[];
    queryCount?: number;
  };

  type BaCustomerFactoryQueryCondition = {
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
    /** 客户id */
    customerId?: string;
    /** 客户到货仓id */
    dcStoreId?: string;
    customerIdList?: string[];
    factoryIdList?: string[];
    dcStoreIdList?: string[];
  };

  type BaCustomerFactorySettingDto = {
    id?: string;
    timeLastMod?: string;
    groupId?: string;
    groupCode?: string;
    groupName?: string;
    factoryId?: string;
    ftyCode?: string;
    ftyName?: string;
    customerId?: string;
    customerCode?: string;
    customerName?: string;
    needPackFlag?: boolean;
  };

  type BaCustomerFactorySettingDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaCustomerFactorySettingDto;
    queryCount?: number;
  };

  type BaCustomerFactorySettingDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaCustomerFactorySettingDto[];
    queryCount?: number;
  };

  type BaCustomerFactorySettingQueryCondition = {
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
    customerId?: string;
    customerIdList?: string[];
    factoryIdList?: string[];
    needPackFlag?: boolean;
  };

  type BaCustomerQueryCondition = {
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
    countryIdList?: string[];
    /** 状态 */
    status?: number;
    /** 客户id */
    customerIds?: string[];
    /** 客户编号。末尾加“ * ”，模糊查询；“ / ” 分割多个查询，没有特殊符号，精确查询；没有特殊符号，精确查询 */
    customerCodes?: string;
    /** 客户编号 */
    customerCodeList?: string[];
    /** 客户名称。末尾加“ * ”，模糊查询，“ / ” 分割多个查询，没有特殊符号，精确查询 */
    customerNames?: string;
    createDateRange?: QueryDateRange;
  };

  type BaCustomerValidateItemDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 集团编码 */
    groupCode?: string;
    /** 集团的名字 */
    groupName?: string;
    /** 公司Id;从公司信息表选择的客户信息有值，如果是用户自己输入，默认为0 */
    companyId?: string;
    /** 公司编码 */
    companyCode?: string;
    /** 公司名称 */
    companyName?: string;
    /** 客户编码;从公司信息表选择的客户信息，使用公司表的编号，一般以 1 开头。如果是用户自己输入的客户信息，以6开头创建 6 位的流水号。 */
    customer?: string;
    /** 客户名称 */
    customerName?: string;
    /** 客户类型 */
    customerType?: string;
    /** 上级客户编码;[冗余]兼容旧数据使用 */
    parentCustomer?: string;
    /** 国家Id */
    countryId?: string;
    /** 国家简码 */
    country?: string;
    /** 国家名称 */
    countryName?: string;
    /** 省/州 */
    state?: string;
    /** 城市 */
    city?: string;
    /** 邮编 */
    zip?: string;
    /** 地址1 */
    address1?: string;
    /** 地址2 */
    address2?: string;
    /** 地址3 */
    address3?: string;
    /** 地址4 */
    address4?: string;
    /** 别名 */
    doingBusinessAs?: string;
    contactAttention?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 传真 */
    contactFax?: string;
    /** Email */
    contactEmail?: string;
    custOpenDate?: string;
    /** 溢装率（0 ~ 1 ） */
    overage?: number;
    shortage?: number;
    arCustomer?: string;
    /** 是否启用 */
    activeFlag?: number;
    /** Vat税号 */
    vatNumber?: string;
    /** 状态;[0]待提审, [1]启用, [2]待审核, [3]拒绝 */
    status?: number;
    /** 状态的中文 */
    statusCn?: string;
    /** 默认品牌商Id */
    brandShopId?: number;
    /** 品牌商编号 */
    brandShopCode?: string;
    /** 品牌商名称 */
    brandShopName?: string;
    /** 默认品牌Id */
    brandId?: number;
    /** 品牌编号 */
    brandCode?: string;
    /** 品牌名称 */
    brandName?: string;
    orderCancelDaysToStartDate?: number;
    /** 付款方 */
    billToList?: BaBillToDto[];
    /** 交货地址 */
    storeList?: BaStoreDto[];
    /** 是否错误 */
    isError?: boolean;
    /** 错误信息 */
    errorMsg?: string;
  };

  type BaFabricTypeDto = {
    id?: string;
    /** 面料类型Code */
    fabricTypeCode?: string;
    /** 面料类型名称 */
    fabricTypeName?: string;
    /** 启用/禁用 */
    activeFlag?: number;
  };

  type BaFabricTypeDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaFabricTypeDto[];
    queryCount?: number;
  };

  type BaFactoryOrderSchemeCondition = {
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
    /** 客户id */
    customerId?: string;
    /** 品牌商ID */
    brandShopId?: string;
    /** 品牌ID */
    brandId?: string;
    /** 客户到货仓id */
    dcStoreId?: string;
    customerIdList?: string[];
    factoryIdList?: string[];
    brandShopIdList?: string[];
    brandIdList?: string[];
    dcStoreIdList?: string[];
  };

  type BaFactoryOrderSchemeDto = {
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
    ftyCode?: string;
    factoryName?: string;
    /** 客户ID */
    customerId?: string;
    /** 客户编码 */
    customerCode?: string;
    /** 客户名称 */
    customerName?: string;
    /** 品牌商ID */
    brandShopId?: string;
    /** 品牌商编码 */
    brandShopCode?: string;
    /** 品牌商名称 */
    brandShopName?: string;
    /** 品牌ID */
    brandId?: string;
    /** 品牌编码 */
    brandCode?: string;
    /** 品牌名称 */
    brandName?: string;
    /** 客户仓库ID */
    dcStoreId?: string;
    /** 客户仓库编码 */
    dcStoreCode?: string;
    /** 客户仓库名称 */
    dcStoreName?: string;
    /** 默认品牌商ID */
    defaultBrandShopId?: string;
    /** 默认品牌商编码 */
    defaultBrandShopCode?: string;
    /** 默认品牌商名称 */
    defaultBrandShopName?: string;
    /** 默认品牌ID */
    defaultBrandId?: string;
    /** 默认品牌编码 */
    defaultBrandCode?: string;
    /** 默认品牌名称 */
    defaultBrandName?: string;
    /** 默认客户仓库ID */
    defaultDCStoreId?: string;
    /** 默认客户仓库编码 */
    defaultDCStoreCode?: string;
    /** 默认客户仓库名称 */
    defaultDCStoreName?: string;
    /** 币种ID */
    currencyId?: string;
    /** 币种编号 */
    currencyCode?: string;
    /** 币种名称 */
    currencyName?: string;
    /** 销售团队Id */
    salesTeamId?: string;
    salesTeamCode?: string;
    salesTeamName?: string;
    /** 销售人ID */
    salesManId?: string;
    salesManCode?: string;
    salesManName?: string;
    /** 支付方式ID */
    payTermId?: string;
    payTermCode?: string;
    payTermDesc?: string;
    /** 运输方式ID */
    deliveryTermId?: string;
    deliveryTermCode?: string;
    deliveryTermDesc?: string;
    fob?: string;
    label?: string;
    /** 集团编号 */
    groupCode?: string;
    /** 集团名称 */
    groupName?: string;
  };

  type BaFactoryOrderSchemeDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaFactoryOrderSchemeDto;
    queryCount?: number;
  };

  type BaFactoryOrderSchemeDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaFactoryOrderSchemeDto[];
    queryCount?: number;
  };

  type BaReasonDto = {
    id?: string;
    /** 集团Id */
    groupId?: string;
    /** 集团编号 */
    groupCode?: string;
    /** 集团名称 */
    groupName?: string;
    reasonType?: ReasonType;
    /** 原因编号 */
    reasonCode?: string;
    /** 原因 */
    reasonContent?: string;
  };

  type BaReasonDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaReasonDto;
    queryCount?: number;
  };

  type BaReasonDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaReasonDto[];
    queryCount?: number;
  };

  type BaReasonQueryCondition = {
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
    /** 原因类型 */
    reasonType?: number;
  };

  type BaRMUseTypeDto = {
    id?: string;
    /** 集团Id */
    groupId?: string;
    /** 集团编号 */
    groupCode?: string;
    /** 集团名称 */
    groupName?: string;
    /** 界面展示 : UseType */
    rmUseTypeCode?: string;
    /** UseType的描述 */
    rmUseTypeDesc?: string;
    rmUseColumn1?: string;
    rmUseColumn2?: string;
    rmUseColumn3?: string;
    rmUseColumn4?: string;
  };

  type BaRMUseTypeDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaRMUseTypeDto;
    queryCount?: number;
  };

  type BaRMUseTypeDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaRMUseTypeDto[];
    queryCount?: number;
  };

  type BaRMUseTypeQueryCondition = {
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
    /** 用途id */
    rmUseTypeIdList?: string[];
    /** 用途编号。末尾加“ * ”，模糊查询；“ / ” 分割多个查询，没有特殊符号，精确查询；没有特殊符号，精确查询 */
    rmUseTypeCodes?: string;
    /** 用途编号 */
    rmUseTypeCodeList?: string[];
    /** 用途名称。末尾加“ * ”，模糊查询；“ / ” 分割多个查询，没有特殊符号，精确查询；没有特殊符号，精确查询 */
    rmUseTypeDescs?: string;
  };

  type BaStoreDto = {
    id?: string;
    /** 客户Id */
    customerId?: string;
    /** 集团Id;[冗余] */
    groupId?: string;
    /** 付款方Id（BA_BillTo表的Id） */
    billToId?: string;
    /** 付款方编码 */
    billToCode?: string;
    /** 付款方名称 */
    billToName?: string;
    storeCode?: string;
    storeName?: string;
    /** 国家的Id */
    countryId?: string;
    /** 国家简码 */
    country?: string;
    /** 国家的名称 */
    countryName?: string;
    /** 省/州 */
    state?: string;
    /** 城市 */
    city?: string;
    /** 邮编 */
    zip?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    /** 交付方式 */
    deliveryMode?: string;
    /** 交付地点 */
    deliveryLocation?: string;
    /** 是否启用. true - 启用；false - 禁用 */
    activeFlag?: boolean;
    /** 走地 */
    label?: string;
    /** 联系电话 */
    contactPhone?: string;
    /** 联系人 */
    contactPerson?: string;
  };

  type BaStoreDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStoreDto[];
    queryCount?: number;
  };

  type BaStoreQueryCondition = {
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
    customerId?: string;
    storeCodeList?: string[];
  };

  type BaStyleAddFromOdpOrderItemRto = {
    designId?: string;
    styleId?: string;
    styleCode?: string;
  };

  type BaStyleAddFromOdpOrderRto = {
    groupId?: string;
    customerId?: string;
    traceId?: string;
    items?: BaStyleAddFromOdpOrderItemRto[];
  };

  type BaStyleAddOrUpdateDto = {
    id?: string;
    /** 集团Id */
    groupId?: string;
    /** 款型的Id */
    designBaseId?: string;
    /** 款型编码 */
    designBaseCode?: string;
    /** 客户Id */
    customerId?: string;
    /** 品牌商Id */
    brandShopId?: string;
    /** 品牌商编码 */
    brandShopCode?: string;
    /** 品牌商名字 */
    brandShopName?: string;
    /** 品牌Id */
    brandId?: string;
    /** 品牌编码 */
    brandCode?: string;
    /** 品牌名字 */
    brandName?: string;
    /** 款式编码 */
    customerStyle?: string;
    /** 款式名称 */
    custStyleName?: string;
    /** 款式描述 */
    custStyleDesc?: string;
    /** 设计款的款号 */
    design?: string;
    /** 尺码组Id */
    sizeRangeId?: string;
    /** 分类;来源于ODP的MatType表。[GMT]成衣（款式），[FA]面料，[TR]辅料 */
    matTypeCode?: string;
    /** 物料小类 */
    matGroupId?: string;
    /** 物料小类Code */
    matGroupCode?: string;
    /** 季节 */
    seasonId?: string;
    /** 季节 */
    seasonCode?: string;
    /** 库存单位的Id */
    baseUOMId?: string;
    baseUOM?: string;
    /** 默认单位的Id */
    uomDefaultId?: string;
    /** 默认单位 */
    uomDefault?: string;
    /** 采购单位的Id */
    purchaseUOMId?: string;
    /** 采购单位 */
    purchaseUOM?: string;
    /** 工艺单位的Id */
    artUOMId?: string;
    /** 工艺单位 */
    artUOM?: string;
    /** 单位转换系数 */
    uomFactor?: number;
    /** 采购单位转换系数 */
    purchaseUOMFactor?: number;
    /** 物料价格等级 */
    rmPriceLevel?: string;
    /** 辅料一定要选。其他类型默认 0 */
    useTypeId?: string;
    /** 面料分类;[1] 针织, [2] 梭织, [3] 皮革 */
    fabricTypeId?: string;
    /** 产线 id */
    productLineId?: string;
    /** 产线编码 */
    productLineCode?: string;
    /** 产品分类id */
    productCategoryId?: string;
    /** 产品分类编码 */
    productCategoryCode?: string;
    /** 备注 */
    comment?: string;
    /** 状态;[0] Obsolete 作废, [1] Active 有效 */
    styleStatus?: number;
    /** 面料 Quantity Std */
    faQualityStd?: string;
    /** Old RM No */
    oldStyleNo?: string;
    /** 界面显示：Cust Nominated，对应 Simparel：StyleUDF2Flag */
    customerNominatedFlag?: boolean;
    /** 界面显示：Cust Supplied */
    customerSuppliedFlag?: boolean;
    /** Case/ Roll Flag */
    caseRollFlag?: boolean;
    /** 面料的组织 */
    construction?: string;
    matchingStandard?: string;
    matchingDirection?: string;
    matchingComment?: string;
    dyeingProcess?: string;
    /** 面料的宽度编码;界面显示 : FabricWidth, 从下拉列表选择 */
    fabricWidthCode?: string;
    /** 成分编码 */
    constructionCode?: string;
    /** 梭织类型 */
    weavingTypeCode?: string;
    finishingCode?: string;
    /** Yarn Count */
    yarnCount?: string;
    /** 生产周期（天） */
    leadTime?: number;
    /** 采购天数 */
    transitDays?: number;
    /** 最小采购量 */
    minPoQty?: number;
    /** 采购倍数 */
    poMultipleQty?: number;
    /** 最低采购描述 */
    moqDesc?: string;
    /** 供应商Id */
    vendorId?: string;
    /** Ref Style */
    refStyle?: string;
    /** 损耗率% */
    rmWastePerc?: number;
    /** Vendor Ref# */
    vendorRef?: string;
    /** Customer Ref# */
    customerRef?: string;
    /** Quality */
    quality?: string;
    /** Finishing */
    finishing?: string;
    /** Shape */
    shape?: string;
    /** 辅料的成分 */
    trimComposition?: string;
    /** 来源国 */
    countryOfOrigin?: string;
    /** Shrinkage % */
    rmShrinkageAllow?: number;
    /** 备注2 */
    styleComment?: string;
    /** 是否实验 */
    experimentalFlag?: boolean;
    /** 磅/码 */
    styleWeightYards?: number;
    /** 克/平方米 */
    styleWeightGrams?: number;
    /** 包装Id */
    warpId?: string;
    /** 是否纱燃;界面展示：Yarn Dye */
    yarnDyeFlag?: boolean;
    fill?: string;
    /** 纤维的成分;界面展示：Fiber Overall Content */
    fiberContentdesc?: string;
    /** 面料的备注 */
    fabricComment?: string;
    styleCountEnds?: number;
    styleCountPics?: number;
    verifyType?: MaterialVerifiyType;
    /** 图片 */
    baStyleImages?: BaStyleImageDto[];
    /** 配色 */
    baStyleColors?: BaStyleColorAddOrUpdateDto[];
    /** sku/详情 */
    baStyleItems?: BaStyleItemAddOrUpdateDto[];
    baStylePurchaseCosts?: BaStylePurchaseCostDto[];
  };

  type BaStyleBaseInfoDto = {
    id?: string;
    styleCode?: string;
    styleName?: string;
  };

  type BaStyleBaseInfoDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleBaseInfoDto;
    queryCount?: number;
  };

  type BaStyleColorAddOrUpdateDto = {
    id?: string;
    styleId?: string;
    /** 客户的颜色编码;界面展示：颜色编码。ERP系统直接使用客户的颜色编码。 */
    customerColorCode?: string;
    /** 客户的颜色描述 */
    customerColorDesc?: string;
    /** 色组 */
    colorGroup?: string;
    /** 图片 URL */
    imagePath?: string;
    /** 图片描述 */
    imageDesc?: string;
  };

  type BaStyleColorDto = {
    id?: string;
    styleId?: string;
    /** 客户的颜色编码;界面展示：颜色编码。ERP系统直接使用客户的颜色编码。 */
    customerColorCode?: string;
    /** 客户的颜色描述 */
    customerColorDesc?: string;
    /** 色组 */
    colorGroup?: string;
    /** 是否启用 */
    activeFlag?: number;
    image?: BaStyleImageDto;
    /** 图片路径;图片的url */
    imagePath?: string;
    /** 图片的描述 */
    imageDesc?: string;
    /** 是否新增 */
    isAdd?: boolean;
  };

  type BaStyleColorSelectDto = {
    id?: string;
    styleId?: string;
    matTypeCode?: string;
    styleCode?: string;
    styleName?: string;
    colorCode?: string;
    colorName?: string;
    designBaseId?: string;
    designBaseCode?: string;
    designBaseName?: string;
    imagePath?: string;
    uomDefaultId?: string;
    uomDefault?: string;
    styleItemList?: BaStyleItemSelectDto[];
  };

  type BaStyleColorSelectDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleColorSelectDto[];
    queryCount?: number;
  };

  type BaStyleColorSelectQueryCondition = {
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
    matTypeCode?: string;
    styleIdList?: string[];
    styleColorIdList?: string[];
    includeImage?: boolean;
    includeColorSize?: boolean;
  };

  type BaStyleDetailDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 集团编码 */
    groupCode?: string;
    /** 集团的名字 */
    groupName?: string;
    /** 集团全名（eg: ST-盛泰,仅用于展示） */
    groupFullName?: string;
    /** 客户Id */
    customerId?: string;
    /** 客户编码;从公司信息表选择的客户信息，使用公司表的编号，一般以 1 开头。如果是用户自己输入的客户信息，以6开头创建 6 位的流水号。 */
    customerCode?: string;
    /** 客户名称 */
    customerName?: string;
    /** 品牌商Id */
    brandShopId?: string;
    /** 品牌商编码 */
    brandShopCode?: string;
    /** 品牌商名字 */
    brandShopName?: string;
    /** 品牌Id */
    brandId?: string;
    /** 品牌编码 */
    brandCode?: string;
    /** 品牌名字 */
    brandName?: string;
    /** 客户款式编码 */
    customerStyle?: string;
    /** 客户款式名称 */
    custStyleName?: string;
    /** 客户款式描述 */
    custStyleDesc?: string;
    /** 设计款的款号 */
    design?: string;
    /** 尺码组Id */
    sizeRangeId?: string;
    /** 尺码组Code */
    srCode?: string;
    /** 尺码组名称 */
    srName?: string;
    /** 分类;来源于ODP的MatType表。[GMT]成衣（款式），[FA]面料，[TR]辅料 */
    matTypeCode?: string;
    /** 物料小类 */
    matGroupId?: string;
    /** 物料小类Code */
    matGroupCode?: string;
    /** 物料小类名称 */
    matGroupName?: string;
    /** 季节 */
    seasonId?: string;
    seasonCode?: string;
    seasonName?: string;
    /** 默认单位的Id */
    uomDefaultId?: string;
    /** 默认单位编码 */
    uomDefault?: string;
    /** 默认单位编码 */
    uomDefaultCode?: string;
    /** 默认单位描述 */
    uomDefaultDesc?: string;
    /** 默认单位描述 */
    uomDefaultName?: string;
    /** 采购单位的Id */
    purchaseUOMId?: string;
    /** 采购单位编号 */
    purchaseUOM?: string;
    /** 采购单位编号 */
    purchaseUOMCode?: string;
    /** 采购单位描述 */
    purchaseUOMDesc?: string;
    /** 采购单位描述 */
    purchaseUOMName?: string;
    /** 工艺单位的Id */
    artUOMId?: string;
    /** 工艺单位 */
    artUOM?: string;
    /** 工艺单位描述 */
    artUOMDesc?: string;
    /** 库存单位的Id */
    baseUOMId?: string;
    /** 库存单位 */
    baseUOM?: string;
    /** 库存单位描述 */
    baseUOMDesc?: string;
    /** 单位转换系数 */
    uomFactor?: number;
    /** 采购单位转换系统 */
    purchaseUOMFactor?: number;
    /** 面料分类;[1] 针织, [2] 梭织, [3] 皮革 */
    fabricTypeId?: string;
    /** 面料类型Code */
    fabricTypeCode?: string;
    /** 面料类型名称 */
    fabricTypeName?: string;
    /** 备注 */
    comment?: string;
    /** 面料的组织 */
    construction?: string;
    /** 是否实验 */
    experimentalFlag?: number;
    /** 磅/码 */
    styleWeightYards?: number;
    /** 克/平方米 */
    styleWeightGrams?: number;
    /** 包装Id */
    warpId?: string;
    /** 是否纱燃;界面展示：Yarn Dye */
    yarnDyeFlag?: number;
    /** 物料价格等级 */
    rmPriceLevel?: string;
    /** 辅料一定要选。其他类型默认 0 */
    useTypeId?: string;
    /** 界面展示 : UseType */
    rmUseTypeCode?: string;
    /** UseType的描述 */
    rmUseTypeDesc?: string;
    /** 胚面/英寸 */
    styleCountEnds?: number;
    /** 胚面/英寸 X */
    styleCountPics?: number;
    fill?: string;
    /** 纤维的成分;界面展示：Fiber Overall Content */
    fiberContentdesc?: string;
    /** 面料的备注 */
    fabricComment?: string;
    /** 状态;[0] None, [1] Active 有效，[2] Obsolete 作废 */
    styleStatus?: number;
    /** 面料 Quantity Std */
    faQualityStd?: string;
    /** Old RM No */
    oldStyleNo?: string;
    /** 界面显示：Cust Nominated，对应 Simparel：StyleUDF2Flag */
    customerNominatedFlag?: boolean;
    /** 界面显示：Cust Supplied */
    customerSuppliedFlag?: boolean;
    /** Case/ Roll Flag */
    caseRollFlag?: boolean;
    /** Shrinkage % */
    rmShrinkageAllow?: number;
    matchingStandard?: string;
    matchingDirection?: string;
    matchingComment?: string;
    dyeingProcess?: string;
    /** 面料的宽度编码;界面显示 : FabricWidth, 从下拉列表选择 */
    fabricWidthCode?: string;
    /** 成分编码 */
    constructionCode?: string;
    /** 梭织类型 */
    weavingTypeCode?: string;
    finishingCode?: string;
    garmentFinishing?: string;
    /** 备用字段01 */
    styleUDF01?: string;
    /** 备用字段02 */
    styleUDF02?: string;
    /** 备用字段03 */
    styleUDF03?: string;
    /** 备用字段04 */
    styleUDF04?: string;
    /** 备用字段05 */
    styleUDF05?: string;
    /** 备用字段06 */
    styleUDF06?: string;
    /** 产线 id */
    productLineId?: string;
    /** 产线编码 */
    productLineCode?: string;
    /** Product Line */
    productLineName?: string;
    /** 产品分类id */
    productCategoryId?: string;
    /** 产品分类编码 */
    productCategoryCode?: string;
    /** 产品分类 */
    productCategoryName?: string;
    /** Yarn Count */
    yarnCount?: string;
    /** 生产周期（天） */
    leadTime?: number;
    /** 采购天数 */
    transitDays?: number;
    /** 最小采购量 */
    minPoQty?: number;
    /** 采购倍数 */
    poMultipleQty?: number;
    /** 最低采购描述 */
    moqDesc?: string;
    /** 供应商Id */
    vendorId?: string;
    /** 供应商编码 */
    vendorCode?: string;
    /** 供应商名称 */
    vendorName?: string;
    /** Ref Style【作废】 */
    refStyle?: string;
    /** 供应商物料编码，Vendor Ref# */
    vendorRef?: string;
    /** 供应商物料名称 */
    venderRefName?: string;
    /** Customer Ref#【作废】 */
    customerRef?: string;
    /** Quality【作废】 */
    quality?: string;
    /** Finishing【作废】 */
    finishing?: string;
    /** Shape */
    shape?: string;
    /** 辅料的成分 */
    trimComposition?: string;
    /** 来源国 */
    countryOfOrigin?: string;
    /** 备注2 */
    styleComment?: string;
    /** 报废率 */
    rmWastePerc?: number;
    /** 款式的Id */
    designBaseId?: string;
    /** 款型编码 */
    designBaseCode?: string;
    /** 款型描述 */
    designBaseDesc?: string;
    verifyType?: MaterialVerifiyType;
    /** 首图的Url */
    imagePath?: string;
    /** 首图的url */
    mainImagePath?: string;
    /** 预计成本 */
    stdCost?: number;
    /** 配色 */
    baStyleColors?: BaStyleColorDto[];
    /** Sku / 详情 */
    baStyleItems?: BaStyleItemDto[];
    /** 图片 */
    baStyleImages?: BaStyleImageDto[];
    /** 采购成本 */
    baStylePurchaseCosts?: BaStylePurchaseCostDto[];
  };

  type BaStyleDetailDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleDetailDto;
    queryCount?: number;
  };

  type BaStyleDetailDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleDetailDto[];
    queryCount?: number;
  };

  type BaStyleForOrderRto = {
    id?: string;
    groupId?: string;
    customerId?: string;
    sizeRangeId?: string;
    srCode?: string;
    srName?: string;
    customerStyle?: string;
    designBaseId?: string;
    designBaseCode?: string;
    designBaseName?: string;
    brandShopId?: string;
    brandId?: string;
    uomDefaultId?: string;
    uomDefault?: string;
    purchaseUOMId?: string;
    purchaseUOM?: string;
    artUOMId?: string;
    artUOM?: string;
    baseUOMId?: string;
    baseUOM?: string;
    verifyType?: MaterialVerifiyType;
    styleItemList?: BaStyleItemForOrderRto[];
  };

  type BaStyleForOrderRtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleForOrderRto[];
    queryCount?: number;
  };

  type BaStyleImageDto = {
    id?: string;
    /** StyleId */
    styleId?: number;
    /** StyleItemId或者StyleColorId，根据StyleImageType判断 */
    styleEntityId?: number;
    /** 图片的类型：[0]Style级别的图片;[1]Color级别的图片;[2]Item级别的图片; */
    styleImageType?: number;
    /** 序号 */
    sequence?: number;
    /** 图片路径;图片的url */
    imagePath?: string;
    /** 图片的描述 */
    imageDesc?: string;
    /** 是否主图 */
    isMainImage?: boolean;
  };

  type BaStyleImageUploadDto = {
    /** 新增传 0 或者不传 */
    id?: string;
    /** StyleId */
    styleId?: string;
    /** StyleItemId或者StyleColorId，根据StyleImageType判断 */
    styleEntityId?: string;
    /** 图片的类型：[0]Style级别的图片;[1]Color级别的图片;[2]Item级别的图片; */
    styleImageType?: number;
    /** 图片路径 */
    imagePath?: string;
    /** 图片的描述 */
    imageDesc?: string;
    /** 排序 */
    sequenct?: number;
  };

  type BaStyleImageUploadDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleImageUploadDto;
    queryCount?: number;
  };

  type BaStyleItemAddOrUpdateDto = {
    id?: string;
    /** 是否新增 */
    isAdd?: boolean;
    /** 颜色编号;ERP系统使用客户的颜色编号 */
    colorCode?: string;
    /** 颜色描述;ERP系统使用客户的颜色描述 */
    colorDesc?: string;
    /** 色组 */
    colorGroup?: string;
    /** 尺码 */
    size?: string;
    /** 尺码的描述 */
    sizeDesc?: string;
    /** UPC/EAN 码 */
    upcNo?: string;
    /** 门幅 */
    finishedWidth?: string;
    /** 面料花纹 */
    fabricPattern?: string;
    /** style item  库存单位id */
    uomBaseId?: string;
    /** style item  库存单位编号 */
    uomBase?: string;
    /** Stock/Art 转换系数;界面显示：库存单位转换系数 */
    stockBOMFactor?: number;
    /** 样板号 */
    sampleNo?: string;
    /** 重量KG */
    weightKG?: number;
    /** style item 的重复单位的Id */
    repeatUOMId?: string;
    /** 重复单位 */
    repeatUOM?: string;
    /** 重复的长度 */
    repeatLength?: number;
    /** 重复的宽度 */
    repeatWidth?: number;
    /** 成本模板id */
    costTemplateId?: string;
    /** 备注 */
    styleComment?: string;
    /** 是否启用 */
    activeFlag?: boolean;
    verifyType?: MaterialVerifiyType;
  };

  type BaStyleItemDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** SKU / 面料，辅料 明细的 Item No */
    itemNo?: string;
    styleId?: string;
    /** Item的序号 */
    itemSequence?: number;
    sizeSeq?: number;
    /** 客户的款号;[冗余] */
    customerStyle?: string;
    /** 款色才会有值，其他类型默认0 */
    styleColorId?: string;
    /** 颜色编号;ERP系统使用客户的颜色编号 */
    colorCode?: string;
    /** 颜色描述;ERP系统使用客户的颜色描述 */
    colorDesc?: string;
    /** 色组 */
    colorGroup?: string;
    /** 尺码 */
    size?: string;
    /** 尺码的描述 */
    sizeDesc?: string;
    /** 是否启用 */
    activeFlag?: number;
    /** 门幅 */
    finishedWidth?: string;
    /** 物料供应商Id */
    vendorId?: string;
    /** 样板号 */
    sampleNo?: string;
    /** 重量LB */
    weightLB?: number;
    /** 重量KG */
    weightKG?: number;
    /** 面料花纹 */
    fabricPattern?: string;
    /** 重复的长度 */
    repeatLength?: number;
    /** 重复的宽度 */
    repeatWidth?: number;
    /** 成本模板id */
    costTemplateId?: string;
    /** 成本模板编码 */
    costTemplateCode?: string;
    /** 成本模板名称 */
    costTemplateName?: string;
    /** 备注 */
    styleComment?: string;
    /** 是否重用 */
    reusableFlag?: boolean;
    /** UPC/EAN 码 */
    upcNo?: string;
    custStyleName?: string;
    customerName?: string;
    factoryName?: string;
    brandName?: string;
    /** 季节id */
    seasonId?: string;
    /** 季节编号 */
    seasonCode?: string;
    /** 季节编号 */
    season?: string;
    /** 分类;来源于ODP的MatType表。[GMT]成衣（款式），[FA]面料，[TR]辅料 */
    matTypeCode?: string;
    /** style item 的默认单位的Id */
    uomId?: string;
    /** style item 的默认单位编号 */
    uomDefault?: string;
    /** style item 的默认单位的名称 */
    uomName?: string;
    /** style item 的重复单位的Id */
    repeatUOMId?: string;
    /** style item 的重复单位编号 */
    repeatUOM?: string;
    /** style item 的重复单位的名称 */
    repeatUOMName?: string;
    /** style item  库存单位id */
    uomBaseId?: string;
    /** style item  库存单位编号 */
    uomBase?: string;
    /** style item 的库存单位的名称 */
    uomBaseName?: string;
    /** style 的 库存单位id */
    styleBaseUOMId?: string;
    /** style 的 库存单位的编号 */
    styleBaseUOM?: string;
    /** style 的  库存单位的名称 */
    styleBaseUOMName?: string;
    /** 有效的库存单位的Id */
    baseUOMId?: string;
    /** 有效的库存单位编号 */
    baseUOM?: string;
    /** 有效的库存单位的名称 */
    baseUOMName?: string;
    purchaseUOMId?: string;
    purchaseUOM?: string;
    purchaseUOMName?: string;
    artUOMId?: string;
    /** 工艺单位/使用 */
    artUOM?: string;
    artUOMName?: string;
    /** style 的单位转换系数 */
    uomFactor?: number;
    /** style 的采购单位转换系数 */
    purchaseUOMFactor?: number;
    /** Stock/Art 转换系数;界面显示：库存单位转换系数 */
    stockBOMFactor?: number;
    /** 有效的单位转换系数 */
    acitveUOMFactor?: number;
    verifyType?: MaterialVerifiyType;
    /** 是否新增 */
    isAdd?: boolean;
  };

  type BaStyleItemDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleItemDto;
    queryCount?: number;
  };

  type BaStyleItemDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleItemDto[];
    queryCount?: number;
  };

  type BaStyleItemForOrderRto = {
    id?: string;
    styleId?: string;
    styleColorId?: string;
    colorCode?: string;
    size?: string;
    itemSequence?: number;
    sizeSeq?: number;
    uomBase?: string;
    uomDefault?: string;
    verifyType?: MaterialVerifiyType;
  };

  type BaStyleItemSelectDto = {
    id?: string;
    itemNo?: string;
    customerId?: string;
    styleId?: string;
    styleCode?: string;
    styleName?: string;
    styleColorId?: string;
    colorCode?: string;
    colorName?: string;
    size?: string;
    sizeDesc?: string;
    sizeSeq?: number;
    itemSequence?: number;
    matTypeCode?: string;
    styleBaseUOMId?: string;
    styleBaseUOM?: string;
    styleBaseUOMName?: string;
    styleArtUOMId?: string;
    styleArtUOM?: string;
    styleArtUOMName?: string;
    stylePurchaseUOMId?: string;
    stylePurchaseUOM?: string;
    stylePurchaseUOMName?: string;
    styleArtToBaseUOMFactor?: number;
    stylePurchaseUOMFactor?: number;
    styleItemBaseUOMId?: string;
    styleItemBaseUOM?: string;
    styleItemBaseUOMName?: string;
    styleItemArtToBaseUOMFactor?: number;
    rmWastePerc?: number;
    baseUOMId?: string;
    baseUOM?: string;
    baseUOMName?: string;
    artToBaseUOMFactor?: number;
  };

  type BaStyleItemSelectDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleItemSelectDto[];
    queryCount?: number;
  };

  type BaStyleItemSelectQueryCondition = {
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
    matTypeCode?: string;
    styleIdList?: string[];
    styleCodeList?: string[];
    styleColorIdList?: string[];
    colorList?: string[];
    styleItemIdList?: string[];
  };

  type BaStyleItemSetUPCDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** UPC/EAN 码 */
    upcNo?: string;
  };

  type BaStylePurchaseCostBatchGetActiveRequestDto = {
    datas?: BaStylePurchaseCostGetActiveRequestDto[];
    includeFactors?: boolean;
  };

  type BaStylePurchaseCostBatchOperateResponseDto = {
    /** 记录 数 */
    qty?: number;
    /** 校验不通过的数量 */
    errorQty?: number;
    traceId?: string;
    /** 错误校验结果 */
    validateList?: BaStylePurchaseCostValidateItemDto[];
  };

  type BaStylePurchaseCostBatchOperateResponseDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStylePurchaseCostBatchOperateResponseDto;
    queryCount?: number;
  };

  type BaStylePurchaseCostBatchUpdateStatusRequestDto = {
    datas?: BaStylePurchaseCostValidateItemDto[];
    operateType?: StylePurchaseCostRatifyOperateType;
    /** 驳回/撤审批原因 id */
    reasonId?: string;
    reasonCode?: string;
    reasonContent?: string;
    /** 驳回/撤审批原因 */
    reason?: string;
  };

  type BaStylePurchaseCostDetailDto = {
    purchaseCostData?: BaStylePurchaseCostDto;
    baStyleItem?: BaStyleItemSelectDto;
    /** 有效的库存单位 id */
    activeBaseUOMId?: string;
    /** 有效的库存单位 */
    activeBaseUOM?: string;
    /** 有效的库存单位 */
    activeBaseUOMName?: string;
    /** 物料的库存单位转换系数 */
    activeArtToBaseUOMFactor?: number;
    factorList?: UnitFactor[];
  };

  type BaStylePurchaseCostDetailDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStylePurchaseCostDetailDto[];
    queryCount?: number;
  };

  type BaStylePurchaseCostDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 分类;来源于ODP的MatType表。[GMT]成衣（款式），[FA]面料，[TR]辅料 */
    matTypeCode?: string;
    styleId?: string;
    /** 物料编码 */
    styleCode?: string;
    /** 物料名称 */
    styleName?: string;
    /** 颜色的编号 */
    colorCode?: string;
    /** 尺码 */
    size?: string;
    /** 供应商Id */
    vendorId?: string;
    /** 供应商code */
    vendorCode?: string;
    /** 供应商code */
    vendorName?: string;
    /** 仓库的Id */
    warehouseId?: string;
    /** 开始日期 */
    fromDate?: string;
    /** 结束日期 */
    toDate?: string;
    /** 是否 Void */
    voidFlag?: boolean;
    /** 界面显示：Only */
    sampleOnlyFlag?: boolean;
    /** 采购的工厂;Simparel ：Purch Fty / Fty */
    purchaseFactoryId?: string;
    /** 采购工厂的编号 */
    purchaseFactoryCode?: string;
    /** 采购工厂的名称 */
    purchaseFactoryName?: string;
    /** 税码 */
    taxCodeId?: string;
    /** 税码 */
    taxCode?: string;
    /** 税描述 */
    taxDesc?: string;
    /** 币种 id */
    currencyId?: string;
    /** 币种编码 */
    currency?: string;
    /** 币种名称 */
    currencyName?: string;
    purchaseUOMId?: string;
    /** 采购单位 */
    purchaseUOMCode?: string;
    /** 采购单位名称 */
    purchaseUOMName?: string;
    /** 交付地点 */
    deliveryLocation?: string;
    /** 交付方式 */
    deliveryMode?: string;
    /** 生产周期（天） */
    leadTime?: number;
    /** 采购天数 */
    transitDays?: number;
    /** 预计成本 */
    stdCost?: number;
    /** 最小采购量 */
    minPoQty?: number;
    /** 采购倍数 */
    poMultipleQty?: number;
    /** By Item */
    moqByItem?: boolean;
    /** 备注 */
    shortComment?: string;
    /** Default 1 */
    defaultPoCostFlag01?: boolean;
    /** 采购数量 1 */
    purchaseQty01?: number;
    /** 采购单价 1 */
    purchaseCost01?: number;
    /** Default 2 */
    defaultPoCostFlag02?: boolean;
    /** 采购数量 2 */
    purchaseQty02?: number;
    /** 采购单价 2 */
    purchaseCost02?: number;
    /** Default 3 */
    defaultPoCostFlag03?: boolean;
    /** 采购数量 3 */
    purchaseQty03?: number;
    /** 采购单价 3 */
    purchaseCost03?: number;
    /** Default 4 */
    defaultPoCostFlag04?: boolean;
    /** 采购数量 4 */
    purchaseQty04?: number;
    /** 采购单价 4 */
    purchaseCost04?: number;
    /** Default 5 */
    defaultPoCostFlag05?: boolean;
    /** 采购数量 5 */
    purchaseQty05?: number;
    /** 采购单价 5 */
    purchaseCost05?: number;
    /** Default 6 */
    defaultPoCostFlag06?: boolean;
    /** 采购数量 6 */
    purchaseQty06?: number;
    /** 采购单价 6 */
    purchaseCost06?: number;
    /** Default 7 */
    defaultPoCostFlag07?: boolean;
    /** 采购数量 7 */
    purchaseQty07?: number;
    /** 采购单价 7 */
    purchaseCost07?: number;
    /** Default 8 */
    defaultPoCostFlag08?: boolean;
    /** 采购数量 8 */
    purchaseQty08?: number;
    /** 采购单价 8 */
    purchaseCost08?: number;
    /** 附加费的原因 1 */
    extracharge1?: string;
    /** 附加费的最小数量 1 */
    extrachargeMinQty1?: number;
    /** 附加费的金额 1 */
    extrachargeAmt1?: number;
    /** 附加费的原因 2 */
    extracharge2?: string;
    /** 附加费的最小数量 2 */
    extrachargeMinQty2?: number;
    /** 附加费的金额 2 */
    extrachargeAmt2?: number;
    /** 启用/禁用 */
    activeFlag?: boolean;
    /** 审核状态, [0] 待审核 */
    costAppStatus?: number;
    /** 物料的库存单位 id */
    styleBaseUOMId?: string;
    /** 物料的库存单位 */
    styleBaseUOM?: string;
    /** 物料的库存单位 */
    styleBaseUOMName?: string;
    /** 物料的工艺单位 id */
    styleArtUOMId?: string;
    /** 物料的工艺单位 */
    styleArtUOM?: string;
    /** 物料的工艺单位 */
    styleArtUOMName?: string;
    /** 物料的采购单位 */
    stylePurchaseUOMId?: string;
    /** 物料的采购单位 */
    stylePurchaseUOM?: string;
    /** 物料的采购单位 */
    stylePurchaseUOMName?: string;
    /** 物料的库存单位转换系数 */
    styleArtToBaseUOMFactor?: number;
    /** 物料的采购单位转换系数 */
    stylePurchaseUOMFactor?: number;
    /** 有效的采购单位id */
    activePurchaseUOMId?: string;
    /** 有效的采购单位 */
    activePurchaseUOMCode?: string;
    /** 有效的采购单位名称 */
    activePurchaseUOMName?: string;
  };

  type BaStylePurchaseCostDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStylePurchaseCostDto;
    queryCount?: number;
  };

  type BaStylePurchaseCostDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStylePurchaseCostDto[];
    queryCount?: number;
  };

  type BaStylePurchaseCostGetActiveRequestDto = {
    styleId?: string;
    vendorId?: string;
    factoryId?: string;
    styleItemId?: string;
  };

  type BaStylePurchaseCostQueryCondition = {
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
    styleId?: string;
    styleIdList?: string[];
    /** 审核状态：0 - 待提交; 1 - 待审批; 2 - 已审批 */
    costAppStatus?: number;
    /** 物料分类;[GMT]成衣（款式），[FA]面料，[TR]辅料 */
    matTypeCode?: string;
    /** 供应商Id */
    vendorId?: string;
    vendorIdList?: string[];
    /** 采购的工厂;Simparel ：Purch Fty / Fty */
    purchaseFactoryId?: string;
    purchaseFactoryIdList?: string[];
    /** 是否停用 */
    voidFlag?: boolean;
    createDateRange?: QueryDateRange;
  };

  type BaStylePurchaseCostRequestDto = {
    /** 辅料ID */
    styleId?: string;
    /** 工厂Id */
    purchaseFactoryId?: string;
  };

  type BaStylePurchaseCostReturnDto = {
    styleId?: string;
    /** 采购的工厂;Simparel ：Purch Fty / Fty */
    purchaseFactoryId?: string;
    /** 采购工厂的编号 */
    purchaseFactoryCode?: string;
    /** 采购工厂的名称 */
    purchaseFactoryName?: string;
    /** 采购成本 */
    stdCost?: number;
  };

  type BaStylePurchaseCostReturnDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStylePurchaseCostReturnDto;
    queryCount?: number;
  };

  type BaStylePurchaseCostValidateItemDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 分类;来源于ODP的MatType表。[GMT]成衣（款式），[FA]面料，[TR]辅料 */
    matTypeCode?: string;
    styleId?: string;
    /** 物料编码 */
    styleCode?: string;
    /** 物料名称 */
    styleName?: string;
    /** 颜色的编号 */
    colorCode?: string;
    /** 尺码 */
    size?: string;
    /** 供应商Id */
    vendorId?: string;
    /** 供应商code */
    vendorCode?: string;
    /** 供应商code */
    vendorName?: string;
    /** 仓库的Id */
    warehouseId?: string;
    /** 开始日期 */
    fromDate?: string;
    /** 结束日期 */
    toDate?: string;
    /** 是否 Void */
    voidFlag?: boolean;
    /** 界面显示：Only */
    sampleOnlyFlag?: boolean;
    /** 采购的工厂;Simparel ：Purch Fty / Fty */
    purchaseFactoryId?: string;
    /** 采购工厂的编号 */
    purchaseFactoryCode?: string;
    /** 采购工厂的名称 */
    purchaseFactoryName?: string;
    /** 税码 */
    taxCodeId?: string;
    /** 税码 */
    taxCode?: string;
    /** 税描述 */
    taxDesc?: string;
    /** 币种 id */
    currencyId?: string;
    /** 币种编码 */
    currency?: string;
    /** 币种名称 */
    currencyName?: string;
    purchaseUOMId?: string;
    /** 采购单位 */
    purchaseUOMCode?: string;
    /** 采购单位名称 */
    purchaseUOMName?: string;
    /** 交付地点 */
    deliveryLocation?: string;
    /** 交付方式 */
    deliveryMode?: string;
    /** 生产周期（天） */
    leadTime?: number;
    /** 采购天数 */
    transitDays?: number;
    /** 预计成本 */
    stdCost?: number;
    /** 最小采购量 */
    minPoQty?: number;
    /** 采购倍数 */
    poMultipleQty?: number;
    /** By Item */
    moqByItem?: boolean;
    /** 备注 */
    shortComment?: string;
    /** Default 1 */
    defaultPoCostFlag01?: boolean;
    /** 采购数量 1 */
    purchaseQty01?: number;
    /** 采购单价 1 */
    purchaseCost01?: number;
    /** Default 2 */
    defaultPoCostFlag02?: boolean;
    /** 采购数量 2 */
    purchaseQty02?: number;
    /** 采购单价 2 */
    purchaseCost02?: number;
    /** Default 3 */
    defaultPoCostFlag03?: boolean;
    /** 采购数量 3 */
    purchaseQty03?: number;
    /** 采购单价 3 */
    purchaseCost03?: number;
    /** Default 4 */
    defaultPoCostFlag04?: boolean;
    /** 采购数量 4 */
    purchaseQty04?: number;
    /** 采购单价 4 */
    purchaseCost04?: number;
    /** Default 5 */
    defaultPoCostFlag05?: boolean;
    /** 采购数量 5 */
    purchaseQty05?: number;
    /** 采购单价 5 */
    purchaseCost05?: number;
    /** Default 6 */
    defaultPoCostFlag06?: boolean;
    /** 采购数量 6 */
    purchaseQty06?: number;
    /** 采购单价 6 */
    purchaseCost06?: number;
    /** Default 7 */
    defaultPoCostFlag07?: boolean;
    /** 采购数量 7 */
    purchaseQty07?: number;
    /** 采购单价 7 */
    purchaseCost07?: number;
    /** Default 8 */
    defaultPoCostFlag08?: boolean;
    /** 采购数量 8 */
    purchaseQty08?: number;
    /** 采购单价 8 */
    purchaseCost08?: number;
    /** 附加费的原因 1 */
    extracharge1?: string;
    /** 附加费的最小数量 1 */
    extrachargeMinQty1?: number;
    /** 附加费的金额 1 */
    extrachargeAmt1?: number;
    /** 附加费的原因 2 */
    extracharge2?: string;
    /** 附加费的最小数量 2 */
    extrachargeMinQty2?: number;
    /** 附加费的金额 2 */
    extrachargeAmt2?: number;
    /** 启用/禁用 */
    activeFlag?: boolean;
    /** 审核状态, [0] 待审核 */
    costAppStatus?: number;
    /** 物料的库存单位 id */
    styleBaseUOMId?: string;
    /** 物料的库存单位 */
    styleBaseUOM?: string;
    /** 物料的库存单位 */
    styleBaseUOMName?: string;
    /** 物料的工艺单位 id */
    styleArtUOMId?: string;
    /** 物料的工艺单位 */
    styleArtUOM?: string;
    /** 物料的工艺单位 */
    styleArtUOMName?: string;
    /** 物料的采购单位 */
    stylePurchaseUOMId?: string;
    /** 物料的采购单位 */
    stylePurchaseUOM?: string;
    /** 物料的采购单位 */
    stylePurchaseUOMName?: string;
    /** 物料的库存单位转换系数 */
    styleArtToBaseUOMFactor?: number;
    /** 物料的采购单位转换系数 */
    stylePurchaseUOMFactor?: number;
    /** 有效的采购单位id */
    activePurchaseUOMId?: string;
    /** 有效的采购单位 */
    activePurchaseUOMCode?: string;
    /** 有效的采购单位名称 */
    activePurchaseUOMName?: string;
    /** 是否错误 */
    isError?: boolean;
    /** 错误信息 */
    errorMsg?: string;
  };

  type BaStyleQueryCondition = {
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
    /** 物料分类;[GMT]成衣（款式），[FA]面料，[TR]辅料 */
    matTypeCode?: string;
    /** 客户Id */
    customerId?: string;
    /** 供应商 */
    vendorId?: string;
    /** 品牌 */
    brandId?: string;
    /** 款型 */
    designBaseId?: string;
    /** 季节 */
    seasonId?: string;
    /** 物料小类 */
    matGroupId?: string;
    /** 面料类型 */
    fabricTypeId?: string;
    /** 用途 */
    useTypeId?: string;
    /** 核算类型 */
    verifyType?: number;
    /** 物料编号。末尾加“ * ”，模糊查询；“ / ” 分割多个查询，没有特殊符号，精确查询；没有特殊符号，精确查询 */
    styleCodes?: string;
    /** 物料编号 */
    styleCodeList?: string[];
    /** 物料名称。末尾加“ * ”，模糊查询，“ / ” 分割多个查询，没有特殊符号，精确查询 */
    styleNames?: string;
    /** 物料id */
    styleIdList?: string[];
    createDateRange?: QueryDateRange;
  };

  type BaStyleSaveResponseDto = {
    id?: string;
    /** 分类;来源于ODP的MatType表。[GMT]成衣（款式），[FA]面料，[TR]辅料 */
    matTypeCode?: string;
    /** 集团Id */
    groupId?: string;
  };

  type BaStyleSaveResponseDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleSaveResponseDto;
    queryCount?: number;
  };

  type BaStyleSelectDto = {
    id?: string;
    matTypeCode?: string;
    customerStyle?: string;
    custStyleName?: string;
    custStyleDesc?: string;
    styleCode?: string;
    styleName?: string;
    customerId?: string;
    brandShopId?: string;
    brandId?: string;
    imagePath?: string;
    baseUOMId?: string;
    baseUOM?: string;
    baseUOMDesc?: string;
    uomDefaultId?: string;
    uomDefault?: string;
    purchaseUOMId?: string;
    purchaseUOM?: string;
    purchaseUOMDesc?: string;
    designBaseId?: string;
    designBaseCode?: string;
    designBaseName?: string;
    styleColorList?: BaStyleColorSelectDto[];
  };

  type BaStyleSelectDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStyleSelectDto[];
    queryCount?: number;
  };

  type BaStyleSelectQueryCondition = {
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
    matTypeCode?: string;
    brandIdList?: string[];
    customerIdList?: string[];
    styleIdList?: string[];
    includeImage?: boolean;
    includeColor?: boolean;
    includeColorSize?: boolean;
  };

  type BaStypeItemUPCDto = {
    id?: string;
    itemNo?: string;
    /** 物料款式编码 */
    styleCode?: string;
    /** 物料款式名称 */
    styleName?: string;
    /** 颜色编号;ERP系统使用客户的颜色编号 */
    colorCode?: string;
    /** 颜色描述;ERP系统使用客户的颜色描述 */
    colorDesc?: string;
    /** 尺码 */
    size?: string;
    /** UPC/EAN 码 */
    upcNo?: string;
    /** 是否启用 */
    activeFlag?: boolean;
  };

  type BaStypeItemUPCDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaStypeItemUPCDto[];
    queryCount?: number;
  };

  type BaTaxCodeDto = {
    id?: string;
    /** 最后修改时间 */
    timeLastMod?: string;
    /** 集团Id */
    groupId?: string;
    /** 集团编码 */
    groupCode?: string;
    /** 集团的名字 */
    groupName?: string;
    /** 税编码 */
    taxCode?: string;
    /** 税描述 */
    taxDesc?: string;
    /** 税率 */
    taxPerc?: number;
    /** 是否启用 */
    activeFlag?: boolean;
    /** 税编码 1 */
    taxCode1?: string;
    /** 税率 1 */
    taxPerc1?: number;
    /** 含税 1 */
    taxInclude1?: boolean;
    /** 税编码 2 */
    taxCode2?: string;
    /** 税率 2 */
    taxPerc2?: number;
    /** 含税 2 */
    taxInclude2?: boolean;
  };

  type BaTaxCodeDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaTaxCodeDto;
    queryCount?: number;
  };

  type BaTaxCodeDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaTaxCodeDto[];
    queryCount?: number;
  };

  type BaTaxCodeQueryCondition = {
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
    /** 是否有效 */
    activeFlag?: boolean;
    /** 税编码id */
    taxCodeIdList?: string[];
    /** 税编码。末尾加“ * ”，模糊查询；“ / ” 分割多个查询，没有特殊符号，精确查询；没有特殊符号，精确查询 */
    taxCodes?: string;
    /** 税编码 */
    taxCodeList?: string[];
    /** 税描述。末尾加“ * ”，模糊查询；“ / ” 分割多个查询，没有特殊符号，精确查询；没有特殊符号，精确查询 */
    taxDescs?: string;
  };

  type BatchGetStyleForOrderItemRto = {
    customerId?: string;
    styleCodes?: string[];
  };

  type BatchGetStyleForOrderRequestRto = {
    groupId?: string;
    items?: BatchGetStyleForOrderItemRto[];
  };

  type BatchSetActiveDto = {
    /** 启用/禁用。[0]禁用，[1]启用 */
    activeFlag?: number;
    /** Ids */
    ids?: string[];
  };

  type BaVendorBatchOperateResponseDto = {
    /** 记录 数 */
    qty?: number;
    /** 校验不通过的数量 */
    errorQty?: number;
    traceId?: string;
    /** 错误校验结果 */
    validateList?: BaVendorValidateItemDto[];
  };

  type BaVendorBatchOperateResponseDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaVendorBatchOperateResponseDto;
    queryCount?: number;
  };

  type BaVendorBatchUpdateStatusRequestDto = {
    datas?: BaVendorValidateItemDto[];
    operateType?: BaCommonOperateType;
    /** 驳回/撤审批原因 id */
    reasonId?: string;
    reasonCode?: string;
    reasonContent?: string;
    /** 驳回/撤审批原因 */
    reason?: string;
  };

  type BaVendorCategoryDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: number;
    companyCode?: string;
    vendorCategory?: string;
    vendorCategorydesc?: string;
    groupCode?: string;
    groupName?: string;
    companyId?: string;
    companyName?: string;
  };

  type BaVendorCategoryDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaVendorCategoryDto;
    queryCount?: number;
  };

  type BaVendorCategoryDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaVendorCategoryDto[];
    queryCount?: number;
  };

  type BaVendorCategoryQueryCondition = {
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
  };

  type BaVendorDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 供应商编号 */
    vendor?: string;
    /** 供应商名称 */
    vendorName?: string;
    /** 供应商类型;[0] Vendor，[1] Factory, [2] Agent, [3] Misc */
    vendorType?: number;
    /** 供应商分类Id */
    vendorCategoryId?: string;
    /** 国家简码 */
    country?: string;
    /** 省/州 */
    state?: string;
    /** 城市 */
    city?: string;
    /** 邮编 */
    zip?: string;
    /** Address1 */
    address1?: string;
    /** Address2 */
    address2?: string;
    /** Address3 */
    address3?: string;
    /** Address4 */
    address4?: string;
    /** ProdTerms */
    prodTerms?: string;
    /** 币种 */
    currency?: string;
    /** 公司Id */
    companyId?: string;
    /** 公司编码 */
    companyCode?: string;
    /** 仓库Id */
    warehouseId?: string;
    /** 客户Id */
    customerId?: string;
    /** 税号 */
    taxNo?: string;
    /** 税号 2 */
    taxNo02?: string;
    /** 税码 */
    taxCode?: string;
    /** VAT税号 */
    vatNumber?: string;
    /** 银行名称 */
    bankName?: string;
    /** 银行账号 */
    bankAccountNo?: string;
    /** 银行地址1 */
    bankAddress1?: string;
    /** 银行地址2 */
    bankAddress2?: string;
    /** 代理率 */
    agentRate?: number;
    /** 生产周期（天数） */
    leadTime?: number;
    /** 采购天数 */
    transitDays?: number;
    /** 折扣率 */
    discountRate?: number;
    /** 是否启用 */
    activeFlag?: boolean;
    shippingPort?: string;
    freightCollect?: string;
    agent?: string;
    /** 付款方式 id */
    payTermId?: string;
    /** 付款方式编号 */
    payTermCode?: string;
    /** 付款方式名称 */
    payTermDesc?: string;
    /** 交付方式id */
    deliveryTermId?: string;
    /** 交付方式编码 */
    deliveryTermCode?: string;
    /** 交付方式描述 */
    deliveryTermDesc?: string;
    /** 交付地点 */
    deliveryLocation?: string;
    shortage?: number;
    /** 状态;[0]待提审, [1]启用, [2]待审核, [3]拒绝 */
    status?: number;
    /** 状态的中文 */
    statusCn?: string;
    /** PO收货超收比率 */
    poOverpaymentRatio?: number;
    vendorCategoryCode?: string;
    vendorCategoryName?: string;
    groupCode?: string;
    groupName?: string;
    warehouseCode?: string;
    warehouseName?: string;
    customerCode?: string;
    customerName?: string;
    countryId?: string;
    countryName?: string;
    currencyId?: string;
    currencyName?: string;
  };

  type BaVendorDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaVendorDto;
    queryCount?: number;
  };

  type BaVendorDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BaVendorDto[];
    queryCount?: number;
  };

  type BaVendorQueryCondition = {
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
    /** 国家id */
    countryIdList?: string[];
    /** 状态 */
    status?: number;
    /** 供应商分类Id */
    vendorCategoryId?: string;
    /** 供应商类型;[0] Vendor，[1] Factory, [2] Agent, [3] Misc */
    vendorType?: number;
    /** 供应商id */
    vendorIds?: string[];
    /** 供应商编号。末尾加“ * ”，模糊查询；“ / ” 分割多个查询，没有特殊符号，精确查询；没有特殊符号，精确查询 */
    vendorCodes?: string;
    /** 供应商编号 */
    vendorCodeList?: string[];
    /** 供应商名称。末尾加“ * ”，模糊查询，“ / ” 分割多个查询，没有特殊符号，精确查询 */
    vendoNames?: string;
    createDateRange?: QueryDateRange;
  };

  type BaVendorValidateItemDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 供应商编号 */
    vendor?: string;
    /** 供应商名称 */
    vendorName?: string;
    /** 供应商类型;[0] Vendor，[1] Factory, [2] Agent, [3] Misc */
    vendorType?: number;
    /** 供应商分类Id */
    vendorCategoryId?: string;
    /** 国家简码 */
    country?: string;
    /** 省/州 */
    state?: string;
    /** 城市 */
    city?: string;
    /** 邮编 */
    zip?: string;
    /** Address1 */
    address1?: string;
    /** Address2 */
    address2?: string;
    /** Address3 */
    address3?: string;
    /** Address4 */
    address4?: string;
    /** ProdTerms */
    prodTerms?: string;
    /** 币种 */
    currency?: string;
    /** 公司Id */
    companyId?: string;
    /** 公司编码 */
    companyCode?: string;
    /** 仓库Id */
    warehouseId?: string;
    /** 客户Id */
    customerId?: string;
    /** 税号 */
    taxNo?: string;
    /** 税号 2 */
    taxNo02?: string;
    /** 税码 */
    taxCode?: string;
    /** VAT税号 */
    vatNumber?: string;
    /** 银行名称 */
    bankName?: string;
    /** 银行账号 */
    bankAccountNo?: string;
    /** 银行地址1 */
    bankAddress1?: string;
    /** 银行地址2 */
    bankAddress2?: string;
    /** 代理率 */
    agentRate?: number;
    /** 生产周期（天数） */
    leadTime?: number;
    /** 采购天数 */
    transitDays?: number;
    /** 折扣率 */
    discountRate?: number;
    /** 是否启用 */
    activeFlag?: boolean;
    shippingPort?: string;
    freightCollect?: string;
    agent?: string;
    /** 付款方式 id */
    payTermId?: string;
    /** 付款方式编号 */
    payTermCode?: string;
    /** 付款方式名称 */
    payTermDesc?: string;
    /** 交付方式id */
    deliveryTermId?: string;
    /** 交付方式编码 */
    deliveryTermCode?: string;
    /** 交付方式描述 */
    deliveryTermDesc?: string;
    /** 交付地点 */
    deliveryLocation?: string;
    shortage?: number;
    /** 状态;[0]待提审, [1]启用, [2]待审核, [3]拒绝 */
    status?: number;
    /** 状态的中文 */
    statusCn?: string;
    /** PO收货超收比率 */
    poOverpaymentRatio?: number;
    vendorCategoryCode?: string;
    vendorCategoryName?: string;
    groupCode?: string;
    groupName?: string;
    warehouseCode?: string;
    warehouseName?: string;
    customerCode?: string;
    customerName?: string;
    countryId?: string;
    countryName?: string;
    currencyId?: string;
    currencyName?: string;
    /** 是否错误 */
    isError?: boolean;
    /** 错误信息 */
    errorMsg?: string;
  };

  type BillNoRuleMappingDto = {
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
    /** 序列规则Id */
    seqRulesId?: string;
    /** 业务单据 */
    billCode?: string;
    billName?: string;
    /** 序列编码 */
    seqNo?: string;
    factoryCode?: string;
    factoryName?: string;
    rulesCode?: string;
    rulesName?: string;
  };

  type BillNoRuleMappingDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BillNoRuleMappingDto;
    queryCount?: number;
  };

  type BillNoRuleMappingDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BillNoRuleMappingDto[];
    queryCount?: number;
  };

  type BillNoType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;

  type BillTypeDto = {
    id?: string;
    billCode?: string;
    billName?: string;
  };

  type BillTypeDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BillTypeDto[];
    queryCount?: number;
  };

  type BooleanApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: boolean;
    queryCount?: number;
  };

  type BrandDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 品牌ID */
    brandCode?: string;
    /** 品牌商ID */
    brandDesc?: string;
    brandName?: string;
    /** ImageSource */
    imageSource?: string;
    /** 品牌商 */
    brandShopId?: string;
    /** 品牌商编码 */
    brandShopCode?: string;
    /** 品牌商名称 */
    brandShopName?: string;
    /** 是否企业服装 Y：是 N：否 */
    isCorporateClothing?: string;
    /** 是否VIP客户 */
    isVIP?: string;
    /** 图片base64编码 */
    imageBase64?: string;
    /** 图片文件名,前端指定,例子 test.png */
    imageFileName?: string;
    /** 品牌商显示，前端专用 */
    brandShopShow?: string;
  };

  type BrandDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BrandDto;
    queryCount?: number;
  };

  type BrandDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BrandDto[];
    queryCount?: number;
  };

  type BrandQueryCondition = {
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
    brandShopId?: string;
    brandShopCode?: string;
  };

  type BrandShopDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 品牌商编码 */
    code?: string;
    /** 品牌商名称 */
    name?: string;
    /** 域名 */
    domain?: string;
    /** ImageSource */
    imageSource?: string;
    /** 图片base64编码 */
    imageBase64?: string;
    /** 图片文件名,前端指定,例子 test.png */
    imageFileName?: string;
  };

  type BrandShopDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BrandShopDto;
    queryCount?: number;
  };

  type BrandShopDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BrandShopDto[];
    queryCount?: number;
  };

  type BrandShopUserAddOrUpdateDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 用户ID */
    sysUserId?: string;
    /** 角色ID */
    sysRoleId?: string;
    /** 角色编码 */
    sysRoleCode?: string;
    /** 品牌商ID */
    brandShopId: string;
  };

  type BrandShopUserOutputDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 用户ID */
    sysUserId?: string;
    /** 用户名称 */
    loginName?: string;
    /** 用户名称 */
    displayName?: string;
    /** 状态 0-启用；1-禁用 */
    userStatus?: number;
    /** 品牌商ID */
    brandShopId?: string;
    /** 品牌商编码 */
    brandShopCode?: string;
    /** 品牌商名称 */
    brandShopName?: string;
    /** 角色ID */
    sysRoleId?: string;
    /** 角色编码 */
    sysRoleCode?: string;
    /** 角色名称 */
    sysRoleName?: string;
  };

  type BrandShopUserOutputDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BrandShopUserOutputDto[];
    queryCount?: number;
  };

  type BrandShopUserQueryDto = {
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
    /** 品牌商ID */
    brandShopId?: string;
  };

  type ChannelDto = {
    /** Id */
    id?: string;
    /** 客户 */
    channelAlias?: string;
    /** 客户名 */
    channelName?: string;
    changeCode?: string;
    /** 客户全名 */
    fullName?: string;
    /** 客户货币 */
    currency?: string;
    /** 客户货币 */
    currencyName?: string;
    /** ChannelComm */
    channelComm?: number;
    /** 信用额度金额 */
    limitAmt?: number;
    /** 已使用金额 */
    usedAmt?: number;
    /** 剩余额度 */
    leftAmt?: number;
    /** ImageSource */
    imageSource?: string;
    /** 图片base64编码 */
    imageBase64?: string;
    /** 图片文件名,前端指定,例子 test.png */
    imageFileName?: string;
    /** 未审核订单单数 */
    orderCnt?: number;
    /** 未审核订单金额 */
    orderAmt?: number;
    paymentMethod?: ChannelPaymentMethod;
    /** 付款方式 0：个人预收 1：客户预收 2：客户额度 */
    paymentMethodDesc?: string;
  };

  type ChannelDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ChannelDto;
    queryCount?: number;
  };

  type ChannelDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ChannelDto[];
    queryCount?: number;
  };

  type ChannelPaymentMethod = 0 | 1 | 2;

  type CheckBillToUsedRequestDto = {
    /** bill to id */
    ids?: string[];
  };

  type CheckDCStoreUsedRequestDto = {
    /** dc store id */
    ids?: string[];
  };

  type CheckStyleItemUsedRequestDto = {
    styleItemIds?: string[];
  };

  type CloudCosDto = {
    bucket?: string;
    region?: string;
    expiredTime?: number;
    startTime?: number;
    token?: string;
    tmpSecretKey?: string;
    tmpSecretId?: string;
  };

  type CloudCosDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CloudCosDto;
    queryCount?: number;
  };

  type CompanyDto = {
    id?: string;
    /** 公司编号 */
    companyCode?: string;
    /** 公司名称 */
    companyName?: string;
    usedCompanyName?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    /** 城市 */
    city?: string;
    /** 省/州 */
    state?: string;
    /** 国家Id */
    countryId?: string;
    /** 国家编号 */
    country?: string;
    /** 国家名称 */
    countryName?: string;
    zip?: string;
    registerCountry?: string;
    registerState?: string;
    registerCity?: string;
    payTerm?: number;
    contactPhone?: string;
    contactPerson?: string;
    taxCode?: string;
    bank?: string;
    bankAccount?: string;
    companyType?: number;
    /** 集团Id */
    groupId?: string;
  };

  type CompanyDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CompanyDto[];
    queryCount?: number;
  };

  type CompanyQueryCondition = {
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
  };

  type CountryDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 国家Code */
    cnCode?: string;
    /** 国家名称 */
    cnName?: string;
    /** 编码 */
    unCode?: string;
  };

  type CountryDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CountryDto;
    queryCount?: number;
  };

  type CountryDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CountryDto[];
    queryCount?: number;
  };

  type CurrencyDto = {
    id?: string;
    /** 货币Code */
    crCode?: string;
    /** 货币名称 */
    crName?: string;
    /** 货币符号 */
    crSymbol?: string;
    /** 汇率 */
    exchangeRatio?: number;
  };

  type CurrencyDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CurrencyDto;
    queryCount?: number;
  };

  type CurrencyDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CurrencyDto[];
    queryCount?: number;
  };

  type CustomerBaseDto = {
    /** 客户Id */
    id?: string;
    /** 集团Id */
    groupId?: string;
    /** 客户编号 */
    customerCode?: string;
    /** 客户名称 */
    customerName?: string;
  };

  type CustomerBaseDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CustomerBaseDto;
    queryCount?: number;
  };

  type CustomerBaseDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CustomerBaseDto[];
    queryCount?: number;
  };

  type CustWHDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 客户ID */
    custCode?: string;
    /** 客户名称 */
    custName?: string;
    /** 仓库ID */
    custWHCode?: string;
    /** 仓库名称 */
    custWHName?: string;
    /** 仓库地址 */
    custWHAddress?: string;
    /** 区 */
    custWHDistrict?: string;
    /** 市 */
    custWHCity?: string;
    /** 省 */
    custWHState?: string;
    /** 国家 */
    custWHCountry?: string;
    /** 电话 */
    contactPhone?: string;
    /** 联系人 */
    contactPerson?: string;
    /** 备注 */
    remark?: string;
  };

  type CustWHDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CustWHDto;
    queryCount?: number;
  };

  type CustWHDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CustWHDto[];
    queryCount?: number;
  };

  type DeliveryTermDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 条款码 */
    termCode?: string;
    /** 条款说明 */
    termDesc?: string;
    /** 条款类型 */
    termType?: string;
    grpCode?: string;
  };

  type DeliveryTermDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: DeliveryTermDto;
    queryCount?: number;
  };

  type DeliveryTermDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: DeliveryTermDto[];
    queryCount?: number;
  };

  type DepartmentDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 上级部门 */
    parentId?: string;
    /** 名称 */
    name?: string;
    /** 编码 */
    code?: string;
    /** 描述 */
    description?: string;
    /** 工厂编码 */
    ftyCode?: string;
    /** 名称 */
    ftyName?: string;
    /** 部门类型 */
    deptType?: string;
  };

  type DepartmentDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: DepartmentDto;
    queryCount?: number;
  };

  type DepartmentDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: DepartmentDto[];
    queryCount?: number;
  };

  type DesignBaseDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 工厂款型编码 */
    designCode?: string;
    /** 款型类型 0：定制商品  1：普通商品 */
    designType?: number;
    /** 款型描述 */
    designDesc?: string;
    /** 图片地址 */
    imageSource?: string;
    imageName?: string;
    /** 分类ID */
    classifyId?: string;
    /** 款型功能描述 */
    styleFunction?: string;
    /** 性别 */
    gender?: string;
  };

  type DesignBaseDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: DesignBaseDto;
    queryCount?: number;
  };

  type DesignBaseDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: DesignBaseDto[];
    queryCount?: number;
  };

  type DicDetailDto = {
    id?: string;
    dicInfoId?: string;
    /** 编码 */
    dicInfoCode?: string;
    /** 名称 */
    dicInfoName?: string;
    dicDetailCode?: string;
    dicDetailName?: string;
    dicDetailType?: string;
  };

  type DicDetailDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: DicDetailDto[];
    queryCount?: number;
  };

  type DicDetailQueryCondition = {
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
    dicInfoId?: string;
    dicInfoCode?: string;
    dicDetailType?: string;
  };

  type DiscountTermDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 折扣政策编码 */
    termCode?: string;
    /** 折扣政策说明 */
    termDesc?: string;
    /** 折扣政策类型 */
    termType?: string;
    colorGrpCode?: string;
  };

  type DiscountTermDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: DiscountTermDto;
    queryCount?: number;
  };

  type DiscountTermDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: DiscountTermDto[];
    queryCount?: number;
  };

  type ExchangeRateDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 本币 */
    localCurrencyId?: string;
    localCurrencyCode?: string;
    localCurrencyName?: string;
    localCurrencySymbol?: string;
    /** 起始日期 */
    starDate?: string;
    /** 兑换币 */
    exchangeCurrencyId?: string;
    exchangeCurrencyCode?: string;
    exchangeCurrencyName?: string;
    exchangeCurrencySymbol?: string;
    /** 兑换率 */
    exchangeRatio?: number;
    /** 是否生效 */
    isState?: boolean;
  };

  type ExchangeRateDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ExchangeRateDto;
    queryCount?: number;
  };

  type ExchangeRateDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ExchangeRateDto[];
    queryCount?: number;
  };

  type FabricAddOrUpdateDto = {
    /** id */
    id?: string;
    /** 面料颜色 */
    fabricColor?: string;
    /** 面料颜色编码 */
    fabricColorCode?: string;
    /** 前端专用 */
    fabricColorShow?: string;
    /** 图片地址 */
    imageSource?: string;
    /** 图片哈希 */
    imageHash?: string;
    /** 是否编辑 */
    isEdit?: number;
    /** 活动状态 */
    active?: number;
  };

  type FactoryByFtyCodeRequestDto = {
    /** ftyCode */
    ftyCode?: string;
    /** 平台标识 */
    platformFlag?: string;
  };

  type FactoryByFtyCodeResponeDto = {
    /** 工厂Id标识 */
    id?: number;
    /** ftyCode */
    ftyCode?: string;
    /** 工厂名称 */
    factoryName?: string;
    spsCode?: string;
    /** 集团Id */
    groupId?: string;
    /** 集团编码 */
    groupCode?: string;
    groupName?: string;
    /** 集团名称 */
    groupDesc?: string;
    /** 平台Id */
    platformFlag?: string;
  };

  type FactoryByFtyCodeResponeDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: FactoryByFtyCodeResponeDto;
    queryCount?: number;
  };

  type FactoryByFtyCodeResponeDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: FactoryByFtyCodeResponeDto[];
    queryCount?: number;
  };

  type FactoryDto = {
    /** 主键Id */
    id?: string;
    /** 跟Id值一样 前端专用 */
    ftyId?: string;
    /** 工厂编号 */
    ftyCode?: string;
    /** 工厂名称 */
    factoryName?: string;
    /** 地址 */
    address?: string;
    /** 城市 */
    city?: string;
    /** 县区 */
    village?: string;
    /** 省份 */
    province?: string;
    /** 国家 */
    country?: string;
    /** 国家 */
    countryName?: string;
    /** 邮编 */
    zip?: string;
    /** 活动状态 */
    active?: number;
    /** 工厂税号 */
    taxId?: string;
    /** 币种 */
    currency?: string;
    /** 客户货币 */
    currencyName?: string;
    /** 图片地址 */
    imageSource?: string;
    /** 图片base64编码 */
    imageBase64?: string;
    /** 图片文件名,前端指定,例子 test.png */
    imageFileName?: string;
    /** 简称 */
    ftyShortName?: string;
    /** 自动排产锁定天数 */
    lockDays?: number;
    isAutoSplitWo?: number;
    localCurrencyId?: string;
    localCurrencyName?: string;
    localCurrencyCode?: string;
    /** 集团名称 */
    groupName?: string;
    /** 集团code */
    groupCode?: string;
    groupId?: string;
    /** 过帐日期 */
    postingDate?: string;
    /** 会计帐期、财务帐期 */
    financialDate?: string;
    /** 会计年份 */
    financialYear?: number;
    /** 会计月份 */
    financialMonth?: number;
  };

  type FactoryDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: FactoryDto;
    queryCount?: number;
  };

  type FactoryDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: FactoryDto[];
    queryCount?: number;
  };

  type FactoryQueryCondition = {
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
    /** 集团Id */
    groupId?: string;
    platformFlag?: string;
  };

  type GetBaseByCodesRequestDto = {
    /** 集团id */
    groupId?: string;
    /** 客户编号 */
    customerCodes?: string[];
  };

  type GetFatoryByCodesRequestDto = {
    /** 集团id */
    groupId?: string;
    /** 工厂编号 */
    codes?: string[];
    /** 工厂名称 */
    names?: string[];
  };

  type GetStyleBaseRequestDto = {
    /** 集团Id */
    groupId?: string;
    /** 客户Id */
    customerId?: string;
    /** 物料编号 */
    styleCode?: string;
    /** 分类;来源于ODP的MatType表。[GMT]成衣（款式），[FA]面料，[TR]辅料 */
    matTypeCode?: string;
  };

  type GroupDto = {
    id?: string;
    groupCode?: string;
    groupName?: string;
    groupDesc?: string;
  };

  type GroupDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: GroupDto;
    queryCount?: number;
  };

  type GroupDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: GroupDto[];
    queryCount?: number;
  };

  type GroupInfoForDropDownListDto = {
    /** 集团Id */
    id?: string;
    /** 集团编码 */
    groupCode?: string;
    /** 集团名称 */
    groupName?: string;
  };

  type GroupInfoForDropDownListDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: GroupInfoForDropDownListDto[];
    queryCount?: number;
  };

  type ImagePath = {
    /** 路劲 */
    path?: string;
  };

  type Int32ApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: number;
    queryCount?: number;
  };

  type LogEntityType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

  type MainFabricOutputDto = {
    /** 跟主键Id一样，旧属性暂不移除,因为前端之前已用到 */
    id?: string;
    /** 面料名称 */
    fabricName?: string;
    /** 面料颜色 */
    fabricColor?: string;
    /** 面料编码 */
    fabricCode?: string;
    /** 库存数量 */
    sizeStock?: number;
    /** 可用数量 */
    sizeStockAvailable?: number;
    /** 使用数量 */
    sizeStockUse?: number;
    /** 图片地址 */
    imageSource?: string;
    /** 图片base64编码 */
    imageBase64?: string;
    /** 图片文件名,前端指定,例子 test.png */
    imageFileName?: string;
    /** 规格 */
    construction?: string;
    /** 活动状态 */
    active?: number;
    /** 成分 */
    fabricContentCN?: string;
    /** 成分_英语 */
    fabricContentUS?: string;
    /** 门幅 */
    fabricWidth?: string;
    /** 整理方式 */
    finishing?: string;
    /** 手感 */
    handFeel?: string;
    /** 面料类型 */
    fabricType?: string;
    /** 面料类型描述 */
    fabricTypeDesc?: string;
    /** 面料来源(Stock:库存 Standing:常备 SelfProvide:客户自备) */
    fabricSource?: string;
    /** 面料颜色编码 */
    fabricColorCode?: string;
    /** 花型(Clear：净色 Stripe：条纹 Lattice：格子) */
    pattern?: string;
    /** 重复 */
    repeat?: string;
    /** 底色 */
    baseColor?: string;
    /** 面料库存 */
    stock?: number;
    /** 预警库存 */
    stockWarn?: number;
    /** 初始库存 */
    initialStock?: string;
    /** 初始库存 */
    onTheWayQty?: number;
    /** 图片哈希 */
    imageHash?: string;
    /** 销售数量 (热卖查询用) */
    saleQty?: number;
    /** 颜色明细 */
    selectColorList?: FabricAddOrUpdateDto[];
    /** 成本明细 */
    selectCostsList?: ProcurementCostsAddOrUpdateDto[];
    /** 计量单位 */
    unitCode?: string;
    /** 物料小类 */
    fabricsSmallClass?: string;
    /** 物料类型 */
    matTypeCode?: string;
    /** 备注 */
    remark?: string;
    /** 加工工艺 */
    process?: string;
    /** 功能说明 */
    functionalSpecifications?: string;
    /** 克重 */
    gHeavy?: string;
    /** 密度 */
    density?: string;
    /** 采购单位 */
    purchasingUnit?: string;
    /** 品牌商 */
    brandShopCode?: string;
    /** 品牌商显示，前端专用 */
    brandShopShow?: string;
    /** 品牌商名称 */
    brandShopName?: string;
    /** 物料类别 */
    materialsCategory?: string;
    /** 开发单价 */
    developPrice?: number;
    /** 删除FTP服务器上的图片路径 */
    delImageUrl?: ImagePath[];
  };

  type MainFabricOutputDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MainFabricOutputDto[];
    queryCount?: number;
  };

  type MainFabricQueryDto = {
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
    /** ID */
    id?: string;
    /** 状态 */
    active?: number;
  };

  type MaterialVerifiyType = 0 | 1 | 2 | 3;

  type MatGroupDto = {
    id?: string;
    /** 物料小类编码 */
    matGroupCode?: string;
    /** 物料小类名称 */
    matGroupName?: string;
    /** 物料分类 */
    matTypeCode?: string;
    /** 单位 */
    uom?: string;
  };

  type MatGroupDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MatGroupDto[];
    queryCount?: number;
  };

  type MatGroupPrecision = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 工厂id */
    factoryId?: number;
    /** 小类id */
    matGroupId?: number;
    /** 保留精度位数 */
    precision?: number;
    unitId?: number;
    /** 工厂编码 */
    factoryCode?: string;
    /** 工厂名称 */
    factoryName?: string;
    /** 小类编码 */
    matGroupCode?: string;
    /** 小类名称 */
    matGroupName?: string;
    /** 类型 */
    matTypeCode?: string;
    /** 单位编码 */
    unitCode?: string;
    /** 单位名称 */
    unitName?: string;
  };

  type MatGroupPrecisionApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MatGroupPrecision;
    queryCount?: number;
  };

  type MatGroupPrecisionCondition = {
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
    /** 物料类型.GMT:款式;FA:面料;TR:辅料 */
    matTypeCode?: string;
    /** 小类id */
    matGroupId?: number;
    ftyCode?: string;
    styleItemId?: number;
  };

  type MatGroupPrecisionListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MatGroupPrecision[];
    queryCount?: number;
  };

  type MatGroupQueryCondition = {
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
    /** 物料类型.GMT:款式;FA:面料;TR:辅料 */
    matTypeCode?: string;
  };

  type NewOrderReqDto = {
    orderId?: string;
    userId?: string;
    amount?: number;
    total?: number;
  };

  type NewOrderRespDto = {
    orderId?: string;
    userId?: string;
    amount?: number;
    total?: number;
    status?: string;
  };

  type NlogQueryParamDto = {
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
    fromDate?: string;
    toDate?: string;
    level?: string;
    message?: string;
    processID?: number;
  };

  type NumberRulesDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 关联工厂 */
    factoryId?: string;
    factoryCode?: string;
    factoryName?: string;
    /** 规则名称 */
    ruleName?: string;
    /** 规则编码 */
    ruleCode?: string;
    /** 关联Seq */
    seqNo?: string;
    /** 起始值 */
    minValue?: string;
    /** 最大值 */
    maxValue?: string;
    /** 参数1 */
    var1?: string;
    /** 参数2 */
    var2?: string;
    /** 参数3 */
    var3?: string;
    /** 参数4 */
    var4?: string;
    /** 是否循环 */
    isLoop?: boolean;
    /** 编码公式 */
    formatCode?: string;
    currentSeqNo?: string;
  };

  type NumberRulesDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: NumberRulesDto;
    queryCount?: number;
  };

  type NumberRulesDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: NumberRulesDto[];
    queryCount?: number;
  };

  type ObjectApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: any;
    queryCount?: number;
  };

  type OperateLogDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    /** 集团Id */
    groupId?: string;
    /** trace id */
    traceId?: string;
    /** 操作人姓名 */
    userName?: string;
    /** 发生时间 */
    timeHappened?: string;
    entityType?: LogEntityType;
    /** 关联订单Id，PickOrderId 或 ShipmentId */
    entityId?: number;
    /** [冗余] */
    entityCode?: string;
    additionId?: number;
    /** [冗余] */
    additionCode?: string;
    /** 操作行为（英文） */
    operateName: string;
    /** 操作行为中文 */
    operateCn?: string;
    /** 操作备注 */
    operateDesc?: string;
    requestParams?: string;
    requestBody?: string;
    /** 原数据 */
    oralEntity?: string;
    /** 更新后的数据 */
    finalEntity?: string;
    /** 触发操作的事件 */
    sourceOperate?: string;
  };

  type OperateLogQueryCondition = {
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
    entityId?: string;
    additionId?: string;
  };

  type OperateLogViewDto = {
    id?: string;
    /** 创建时间 */
    timeCreated?: string;
    /** 发生时间 */
    timeHappened?: string;
    /** 添加操作人id */
    userIdCreated?: string;
    /** 操作人姓名 */
    userName?: string;
    /** 关联订单Id，PickOrderId 或 ShipmentId */
    entityId?: number;
    additionId?: number;
    /** 操作行为中文 */
    operateCn?: string;
    /** 操作备注 */
    operateDesc?: string;
  };

  type OperateLogViewDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: OperateLogViewDto[];
    queryCount?: number;
  };

  type OrderNumberDto = {
    orderNumber?: string;
  };

  type OrderNumberDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: OrderNumberDto;
    queryCount?: number;
  };

  type PayTermDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 条款 */
    termCode?: string;
    /** 条款说明 */
    termDesc?: string;
    /** 条款类型 */
    termType?: string;
    grpCode?: string;
  };

  type PayTermDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: PayTermDto;
    queryCount?: number;
  };

  type PayTermDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: PayTermDto[];
    queryCount?: number;
  };

  type ProcurementCostsAddOrUpdateDto = {
    /** id */
    id?: string;
    /** 开始日期 */
    startDate?: string;
    /** 结束日期 */
    endDate?: string;
    /** 是否弃用 */
    isEnable?: string;
    /** 采购公司 */
    companyCode?: string;
    /** 采购公司名 */
    companyName?: string;
    /** 供应商 */
    vendor?: string;
    /** 供应商名 */
    vendorName?: string;
    /** 币种 */
    currencyCode?: string;
    /** 币种名 */
    currencyName?: string;
    /** 币种名 */
    crName?: string;
    /** 单价 */
    price?: string;
    /** 生产周期 */
    productionCycle?: string;
    /** 运输周期 */
    transportCycle?: string;
    /** 是否编辑 */
    isEdit?: number;
    /** 类型：1：面料 2：辅料 */
    type?: number;
    /** 前端专用 */
    companyShow?: string;
    /** 前端专用 */
    vendorShow?: string;
    /** 前端专用 */
    currencyShow?: string;
  };

  type QueryDateRange = {
    /** 开始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
  };

  type QueryField = {
    fieldName?: string;
    fieldValue?: string;
  };

  type QueryFieldDto = {
    fieldName?: string;
    fieldValue?: string;
  };

  type QueryParam = {
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

  type QueryTermsParmDto = {
    /** 参数名 */
    parmName?: string;
    /** 参数值 */
    parmValue?: string;
    /** 比较运算符 = > <  <= >= */
    comparisonOperator?: string;
  };

  type ReasonType =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19;

  type SalesManDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 销售员id */
    salesTeamId?: string;
    /** 销售员编码 */
    salesCode?: string;
    /** 销售员名称 */
    salesName?: string;
    addr1?: string;
    /** 地址2 */
    addr2?: string;
    /** 城市 */
    city?: string;
    st?: string;
    /** 邮编 */
    zip?: string;
    /** 国家id */
    countryId?: string;
    /** 国家 */
    country?: string;
    /** 国家名称 */
    countryName?: string;
  };

  type SalesManDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SalesManDto;
    queryCount?: number;
  };

  type SalesManDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SalesManDto[];
    queryCount?: number;
  };

  type SalesManDtoPageResult = {
    data?: SalesManDto[];
    queryCount?: number;
    pageIndex?: number;
    pageSize?: number;
  };

  type SalesManDtoPageResultApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SalesManDtoPageResult;
    queryCount?: number;
  };

  type SalesManQueryCondition = {
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
    /** 销售组 id */
    salesTeamId?: string;
    /** 销售组 id */
    salesTeamIdList?: string[];
    /** 销售员 id */
    salesManIdList?: string[];
    /** 销售员编码 */
    salesCodeList?: string[];
  };

  type SalesTeamDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 销售团队编码 */
    teamCode?: string;
    /** 销售团队名称 */
    teamName?: string;
    /** 主要销售成员 */
    primarySalesManId?: string;
    primarySalesManName?: string;
    primarySalesManCode?: string;
    /** 团队人数 */
    salesMansCount?: string;
    /** 区域 */
    territory?: string;
  };

  type SalesTeamDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SalesTeamDto;
    queryCount?: number;
  };

  type SalesTeamDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SalesTeamDto[];
    queryCount?: number;
  };

  type SalesTeamDtoPageResult = {
    data?: SalesTeamDto[];
    queryCount?: number;
    pageIndex?: number;
    pageSize?: number;
  };

  type SalesTeamDtoPageResultApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SalesTeamDtoPageResult;
    queryCount?: number;
  };

  type SalesTeamQueryCondition = {
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
    /** 销售组code */
    teamCodeList?: string[];
  };

  type SearchBrandRequestDto = {
    /** 是否企业服装 Y：是 N：否 */
    isCorporateClothing?: string;
  };

  type SeasonDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 品牌商Id */
    brandShopId?: string;
    /** 品牌商编码 */
    brandShopCode?: string;
    /** 品牌商名字 */
    brandShopName?: string;
    /** 客户编码 */
    custCode?: string;
    /** 名称 */
    custName?: string;
    /** 事业部ID */
    divCode?: string;
    /** 事业部名称 */
    divName?: string;
    /** 季节编码 */
    seasonCode?: string;
    /** 季节名称 */
    seasonName?: string;
    /** 年份 */
    seasonYear?: number;
    /** 开始日期 */
    seasonStartDate?: string;
    /** 结束日期 */
    seasonEndDate?: string;
  };

  type SeasonDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SeasonDto;
    queryCount?: number;
  };

  type SeasonDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SeasonDto[];
    queryCount?: number;
  };

  type SeasonQueryCondition = {
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
    /** 年度 */
    seasonYear?: number;
    codeList?: string[];
    brandShopId?: string;
    brandShopIdList?: string[];
  };

  type SEQRulesDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 规则名称 */
    ruleName?: string;
    /** 规则编码 */
    ruleCode?: string;
    /** 是否系统内置 */
    isSystem?: boolean;
    /** 序列最小值 */
    minValue?: string;
    /** 序列最大值 */
    maxValue?: string;
    /** 自定义参数1 */
    var1?: string;
    var2?: string;
    var3?: string;
    var4?: string;
    /** 是否循环 */
    isLoop?: boolean;
    /** 单号拼接规则 */
    formatCode?: string;
  };

  type SEQRulesDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SEQRulesDto;
    queryCount?: number;
  };

  type SEQRulesDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SEQRulesDto[];
    queryCount?: number;
  };

  type ShippingPortDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    port?: string;
    portDesc?: string;
    sciKey?: number;
    country?: string;
    companyCode?: string;
  };

  type ShippingPortDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ShippingPortDto;
    queryCount?: number;
  };

  type ShippingPortDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ShippingPortDto[];
    queryCount?: number;
  };

  type ShipViaDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 编码 */
    shipViaCode?: string;
    /** 名称 */
    shipViaName?: string;
    /** 类型 */
    shipType?: string;
    /** 分组 */
    grpCode?: string;
  };

  type ShipViaDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ShipViaDto;
    queryCount?: number;
  };

  type ShipViaDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ShipViaDto[];
    queryCount?: number;
  };

  type SizeRangeBatchOperateRequestDto = {
    datas?: SizeRangeValidateItemDto[];
  };

  type SizeRangeBatchOperateResponseDto = {
    /** 记录 数 */
    qty?: number;
    /** 校验不通过的数量 */
    errorQty?: number;
    traceId?: string;
    /** 错误校验结果 */
    validateList?: SizeRangeValidateItemDto[];
  };

  type SizeRangeBatchOperateResponseDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SizeRangeBatchOperateResponseDto;
    queryCount?: number;
  };

  type SizeRangeDetailDto = {
    id?: string;
    /** 集团Id */
    groupId?: string;
    /** 创建时间 */
    timeCreated?: string;
    /** 添加操作人id */
    userIdCreated?: string;
    /** 最后修改时间 */
    timeLastMod?: string;
    /** 最后修改操作人id */
    userIdLastMod?: string;
    sizeRangeId?: string;
    /** 尺码组编码 */
    srCode?: string;
    /** 排序 */
    sizeSeq?: number;
    /** 尺码Id */
    size?: string;
    active?: number;
  };

  type SizeRangeDto = {
    id?: string;
    /** 集团Id */
    groupId?: string;
    /** 创建时间 */
    timeCreated?: string;
    /** 添加操作人id */
    userIdCreated?: string;
    /** 最后修改时间 */
    timeLastMod?: string;
    /** 最后修改操作人id */
    userIdLastMod?: string;
    brandShopId?: string;
    bShopCode?: string;
    bShopName?: string;
    divCode?: string;
    divName?: string;
    srCode?: string;
    srName?: string;
    applyGender?: string;
    applyGmtType?: string;
    prodTypeCode?: string;
    sizeList?: string;
    details?: SizeRangeDetailDto[];
  };

  type SizeRangeDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SizeRangeDto;
    queryCount?: number;
  };

  type SizeRangeDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SizeRangeDto[];
    queryCount?: number;
  };

  type SizeRangeQueryCondition = {
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
    brandShopId?: string;
    /** 尺码组 */
    sizeRangeIdList?: string[];
  };

  type SizeRangeValidateItemDto = {
    id?: string;
    /** 集团Id */
    groupId?: string;
    /** 创建时间 */
    timeCreated?: string;
    /** 添加操作人id */
    userIdCreated?: string;
    /** 最后修改时间 */
    timeLastMod?: string;
    /** 最后修改操作人id */
    userIdLastMod?: string;
    brandShopId?: string;
    bShopCode?: string;
    bShopName?: string;
    divCode?: string;
    divName?: string;
    srCode?: string;
    srName?: string;
    applyGender?: string;
    applyGmtType?: string;
    prodTypeCode?: string;
    sizeList?: string;
    details?: SizeRangeDetailDto[];
    /** 是否错误 */
    isError?: boolean;
    /** 错误信息 */
    errorMsg?: string;
  };

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

  type StyleItemCondition = {
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
    styleId?: string;
    isSearchMaterial?: boolean;
    /** 物料编号 */
    styleCodeList?: string[];
  };

  type StylePurchaseCostRatifyOperateType = 0 | 1 | 2 | 3 | 4 | 5;

  type SysQueryConfigDto = {
    /** 应用平台Id */
    appId?: string;
    /** 用户id */
    userId?: string;
    /** 表单信息 */
    tableId?: string;
    /** 页面Url */
    url?: string;
    /** 配置信息 */
    configData?: string;
    /** 平台标识 */
    clientId?: string;
  };

  type SysQueryConfigDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysQueryConfigDto;
    queryCount?: number;
  };

  type SysQueryConfigQueryDto = {
    /** 用户id */
    userId?: string;
    /** 表单信息 */
    tableId?: string;
    /** 配置信息 */
    configData?: string;
    /** 页面Url */
    url?: string;
    /** 平台标识 */
    clientId?: string;
  };

  type SysTableConfigDto = {
    /** 应用标识 */
    appId?: string;
    /** 用户登录ID */
    userId?: string;
    /** 表单信息 */
    tableId?: string;
    /** 页面Url */
    url?: string;
    /** 排序 */
    sort?: string;
    /** 配置信息 */
    configData?: string;
    /** 平台标识 */
    clientId?: string;
    /** 是否系统默认 1为是 */
    isSysDefault?: number;
  };

  type SysTableConfigDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysTableConfigDto;
    queryCount?: number;
  };

  type SysTableConfigDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysTableConfigDto[];
    queryCount?: number;
  };

  type SysTableConfigQueryDto = {
    /** 应用类型 */
    appId?: string;
    /** 用户编码 */
    userId?: string;
    /** 表单编号 */
    tableId?: string;
    /** 页面地址 */
    url?: string;
    /** 租户id */
    clientId?: string;
  };

  type SysDictDataDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 编码 */
    code?: string;
    /** 说明 */
    name?: string;
    /** 值 */
    dictValue?: string;
    /** 关联Sys_DictType.Id */
    dictTypeId?: string;
    /** 排序 */
    sortBy?: number;
    /** 是否默认值 */
    isDefault?: string;
    /** 备注 */
    remark?: string;
    /** 状态;(0.启用，1.禁用) */
    status?: number;
  };

  type SysDictDataDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysDictDataDto;
    queryCount?: number;
  };

  type SysDictTypeDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    dictName?: string;
    dictType?: string;
    /** 状态;(0.启用，1.禁用) */
    status?: number;
    sysDictDataDtos?: SysDictDataDto[];
  };

  type SysDictTypeDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysDictTypeDto;
    queryCount?: number;
  };

  type SysDictTypeDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysDictTypeDto[];
    queryCount?: number;
  };

  type SysNloglog = {
    id?: string;
    date?: string;
    level?: string;
    message?: string;
    logger?: string;
    exception?: string;
    threadID?: number;
    threadName?: string;
    processID?: number;
    processName?: string;
    properties?: SysNloglogProperty;
  };

  type SysNloglogApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysNloglog;
    queryCount?: number;
  };

  type SysNloglogListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysNloglog[];
    queryCount?: number;
  };

  type SysNloglogProperty = {
    traceIdentifier?: string;
    connectionId?: string;
    eventId_Id?: string;
    eventId_Name?: string;
    eventId?: string;
    remoteIpAddress?: string;
    baseDir?: string;
    queryUrl?: string;
    requestMethod?: string;
    controller?: string;
    method?: string;
    formContent?: string;
    queryContent?: string;
  };

  type UnitDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    uom?: string;
    uomDesc?: string;
  };

  type UnitDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: UnitDto;
    queryCount?: number;
  };

  type UnitDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: UnitDto[];
    queryCount?: number;
  };

  type UnitFactor = {
    fromUnitId?: string;
    toUnitId?: string;
    factor?: number;
  };

  type VendorDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    vendor1?: string;
    vendorName?: string;
    address1?: string;
    address2?: string;
    address3?: string;
    address4?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    prodTerms?: string;
    vendorType?: string;
    shipVia?: string;
    currency?: string;
    uom?: string;
    wareHouse?: string;
    companyCode?: string;
    actStatus?: string;
  };

  type VendorDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: VendorDto;
    queryCount?: number;
  };

  type VendorDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: VendorDto[];
    queryCount?: number;
  };

  type BaCustomerGetCurrentGroupParams = {
    groupId: string;
  };

  type BaCustomerGetByIdParams = {
    id?: string;
  };

  type BaCustomerGetBaseByCodeParams = {
    customerCode?: string;
  };

  type BaCustomerBillToGetByIdParams = {
    id?: string;
  };

  type BaCustomerFactoryGetByIdParams = {
    id: string;
  };

  type BaCustomerFactoryDeleteParams = {
    id?: string;
  };

  type BaCustomerFactorySettingGetByIdParams = {
    id: string;
  };

  type BaCustomerFactorySettingDeleteParams = {
    id?: string;
  };

  type BaCustomerSchemeGetByIdParams = {
    Id?: string;
  };

  type BaCustomerSchemeDeleteParams = {
    Id?: string;
  };

  type BaReasonGetByIdParams = {
    id: string;
  };

  type BaReasonDeleteParams = {
    id?: string;
  };

  type BaRMUseTypeGetByIdParams = {
    id: string;
  };

  type BaRMUseTypeDeleteParams = {
    id?: string;
  };

  type BaStyleGetPageListByParmParams = {
    /** Style类型. GMT:款式;FA:面料;TR:辅料 */
    matTypeCode: string;
  };

  type BaStyleGetDetailParams = {
    /** style 的 id。当 id = 0 或 null 时，会报错 */
    id?: string;
  };

  type BaStyleGetByIdParams = {
    /** 物料类型.GMT:款式;FA:面料;TR:辅料 */
    matTypeCode: string;
    /** style 的 id。当 id = 0 时，返回该用户的默认配置 */
    id: string;
  };

  type BaStyleGetUPCParams = {
    /** style的Id */
    id: string;
  };

  type BaStyleExportUPCExcelParams = {
    id?: string;
  };

  type BaStyleUploadUPCParams = {
    styleId?: string;
  };

  type BaStyleImageDeleteParams = {
    id: string;
  };

  type BaStyleItemGetByIdParams = {
    id: string;
  };

  type BaStyleItemGetByCodeParams = {
    styleCode: string;
  };

  type BaStylePurchaseCostGetByIdParams = {
    id: string;
  };

  type BaTaxCodeGetByIdParams = {
    id: string;
  };

  type BaTaxCodeGetByCodeParams = {
    taxCode: string;
  };

  type BaVendorGetListByGroupParams = {
    groupId: string;
  };

  type BaVendorGetByIdParams = {
    id: string;
  };

  type BaVendorCategoryGetByIdParams = {
    id: string;
  };

  type BaVendorCategoryDeleteParams = {
    id: string;
  };

  type BillNoRuleGetByIdParams = {
    id?: string;
  };

  type BillNoRuleGetCurrentBillNoParams = {
    /** 单据类型 */
    billNoType?: BillNoType;
    /** 工厂 */
    factoryCode?: string;
  };

  type BillNoRuleDeleteParams = {
    id?: string;
  };

  type BrandGetModelByBrandShopIdParams = {
    BrandShopId?: string;
  };

  type BrandGetByIdParams = {
    id?: string;
  };

  type BrandGetByCodeParams = {
    code?: string;
  };

  type BrandShopGetByIdParams = {
    bShopId?: string;
  };

  type BrandShopUserDeleteBrandShopUserParams = {
    Id?: string;
  };

  type ChannelGetBannerListByLoginNameParams = {
    loginName?: string;
  };

  type ChannelDeleteParams = {
    id?: string;
  };

  type ChannelGetByIdParams = {
    id?: string;
  };

  type ChannelGetChannelAliasParams = {
    loginName?: string;
  };

  type CompanyMatchCompanyParams = {
    groupId: string;
  };

  type CountryGetByIdParams = {
    Id?: string;
  };

  type CountryDeleteParams = {
    Id?: string;
  };

  type CurrencyGetByIdParams = {
    Id?: string;
  };

  type CurrencyGetByCodeParams = {
    code?: string;
  };

  type CurrencyDeleteParams = {
    Id?: string;
  };

  type DepartmentGetByIdParams = {
    Id?: string;
  };

  type DepartmentGetByCodeParams = {
    code?: string;
    factoryCode?: string;
  };

  type DepartmentGetListByFactoryParams = {
    FactoryId?: string;
  };

  type ExchangeRateGetByIdParams = {
    Id?: string;
  };

  type ExchangeRateGetListByIdParams = {
    LocalCurrencyId?: string;
    ExchangeCurrencyId?: string;
  };

  type ExchangeRateGetCurrencyPairParams = {
    sellCurrency: string;
    buyCurrency: string;
  };

  type ExchangeRateGetExchangeRateByIdParams = {
    LocalCurrencyId?: string;
    ExchangeCurrencyId?: string;
  };

  type ExchangeRateGetActiveExchangeRateParams = {
    exchangeCurrencyId?: string;
  };

  type ExchangeRateGetActiveLocalExchangeRateParams = {
    localCurrencyId?: string;
  };

  type FactoryGetFactoryCodePermissionParams = {
    LoginName?: string;
  };

  type FactoryGetByIdParams = {
    factoryId?: string;
  };

  type FactoryGetByCodeParams = {
    factoryCode?: string;
  };

  type GroupGetByIdParams = {
    id?: string;
  };

  type GroupGetByCodeParams = {
    groupCode?: string;
  };

  type MatGroupPrecisionGetByIdParams = {
    id: number;
  };

  type MatGroupPrecisionDeleteParams = {
    ids?: number[];
  };

  type NlogMongoGetByIdParams = {
    id: string;
  };

  type NumberRulesGetByIdParams = {
    Id?: string;
  };

  type NumberRulesGetBySeqCodeParams = {
    seqCode?: string;
  };

  type OperateLogGetByEntityIdParams = {
    entityId?: string;
  };

  type OrdNumberGetOrderNumberParams = {
    factoryId?: string;
  };

  type OrdNumberGetNumberParams = {
    sequencesName?: string;
  };

  type SalesManGetListByIdParams = {
    Id?: string;
  };

  type SalesTeamGetByIdParams = {
    Id?: string;
  };

  type SeqRulesGetByIdParams = {
    id?: string;
  };

  type SeqRulesDeleteParams = {
    id?: string;
  };

  type ShippingPortGetByIdParams = {
    Id?: string;
  };

  type ShipViaGetByIdParams = {
    Id?: string;
  };

  type SizeRangeGetAllParams = {
    ListQField?: QueryField[];
    PageIndex?: number;
    PageSize?: number;
    Keyword?: string;
    OrderBy?: string;
    SortBy?: string;
    SortType?: string;
    FactoryIds?: string;
    FactoryId?: string;
    FactoryCodes?: string;
    ChannelCodes?: string;
    ChannelIds?: string;
    ChanneChangeCodes?: string;
    BrandShopIds?: string;
    BrandShopCodes?: string;
    ProdNo?: string;
    GroupId?: string;
    TransactionType?: number;
    RelationNo?: string;
  };

  type SizeRangeGetByIdParams = {
    id?: string;
  };

  type SizeRangeCheckSizeRangeUsedParams = {
    id?: string;
  };

  type SysDictDataGetByDictTypeCodeParams = {
    DictTypeCode?: string;
  };

  type SysDictDataGetByDictTypeIdParams = {
    DictTypeId?: string;
  };

  type SysDictDataGetDictDataByCodeParams = {
    DictTypeCode?: string;
    DictDataCode?: string;
  };

  type SysDictDataGetDictDataByIdParams = {
    dictDataId?: string;
  };

  type UnitGetByIdParams = {
    Id?: string;
  };

  type UnitGetByCodeParams = {
    code: string;
  };

  type VendorGetByIdParams = {
    Id?: string;
  };
}
