declare namespace API {
  type APIStatusCode = 1 | 2 | 3 | 5 | 333;

  type ARPeriodCondition = {
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
    /** 账期 */
    period?: number;
    /** 会计年份 */
    financialYear?: number;
    /** 会计月份 */
    financialMonth?: number;
  };

  type ARPeriodDto = {
    id?: number;
    /** 账期类型[ALL,SALES,CASH,INVTR,MDOC,A/P] */
    periodType?: string;
    /** 集团 */
    groupId?: number;
    factoryId?: number;
    /** 账期 */
    period?: number;
    /** 会计年份 */
    financialYear?: number;
    /** 会计月份 */
    financialMonth?: number;
    /** 会计帐期 */
    financialDate?: string;
    /** 过帐日期 */
    postingDate?: string;
    /** 报工 */
    isWork?: boolean;
    /** 发票确认 */
    isInvoice?: boolean;
    /** 是否关闭账单 */
    isCloseBill?: boolean;
    /** 是否关闭 */
    isClose?: boolean;
    /** 关账日期 */
    closeFinancial?: string;
    /** 关账人 */
    closeUser?: string;
    factoryCode?: string;
    factoryName?: string;
    /** 明细 */
    details?: ARPeriodDto[];
    /** 创建时间 */
    timeCreated?: string;
    /** 添加操作人id */
    userIdCreated?: string;
    /** 最后修改时间 */
    timeLastMod?: string;
    /** 最后修改操作人id */
    userIdLastMod?: string;
  };

  type ARPeriodDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ARPeriodDto;
    queryCount?: number;
  };

  type ARPeriodDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ARPeriodDto[];
    queryCount?: number;
  };

  type BooleanApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: boolean;
    queryCount?: number;
  };

  type BusinessArea = {
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
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
  };

  type BusinessAreaApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BusinessArea;
    queryCount?: number;
  };

  type BusinessAreaListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BusinessArea[];
    queryCount?: number;
  };

  type CostCenter = {
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
    /** 财务 */
    businessAreaId?: number;
    /** 部门 */
    departmentId?: number;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 工厂编号 */
    factoryCode?: string;
    /** 工厂名称 */
    factoryName?: string;
    /** 财务编号 */
    businessAreaCode?: string;
    /** 财务名称 */
    businessAreaName?: string;
    /** 部门编号 */
    departmentCode?: string;
    /** 部门名称 */
    departmentName?: string;
  };

  type CostCenterApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CostCenter;
    queryCount?: number;
  };

  type CostCenterCondition = {
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

  type CostCenterListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CostCenter[];
    queryCount?: number;
  };

  type CostExpenseCondition = {
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

  type CostParamDto = {
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
    /** 成本中心id */
    costCenterId?: string;
    /** 部门Id */
    departmentId?: string;
    /** 账期id */
    periodId?: string;
    /** 分摊成本 */
    extCost?: number;
    /** 币种 */
    currencyId?: string;
    /** 实际分摊金额 */
    amtCost?: number;
    /** 成本项 */
    costItemId?: string;
    status?: CostSharingEnum;
  };

  type CostSharingDetailDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    costSharingId?: string;
    /** 工单信息 */
    prodOrderId?: string;
    prodOrderNo?: string;
    factoryId?: string;
    factoryName?: string;
    factoryCode?: string;
    departmentId?: string;
    departmentName?: string;
    departmentCode?: string;
    /** 款式信息 */
    styleId?: string;
    styleCode?: string;
    styleName?: string;
    /** 币种信息 */
    currencyId?: string;
    currencyName?: string;
    currencyCode?: string;
    /** 账期 */
    periodId?: string;
    periodCode?: string;
    /** 工单数量 */
    prodOrderQty?: number;
    /** 总sam */
    totalSAM?: number;
    /** 成本 */
    amtCost?: number;
    /** 单价 */
    price?: number;
    /** 报工日期 */
    transDate?: string;
    /** 成本中心 */
    costCenter?: string;
    /** 成本中心id */
    costCenterId?: string;
    costItemId?: string;
    costItemCode?: string;
    costItemName?: string;
    financialDate?: string;
  };

  type CostSharingDetailDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CostSharingDetailDto[];
    queryCount?: number;
  };

  type CostSharingDto = {
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
    factoryCode?: string;
    factoryName?: string;
    /** 成本中心id */
    costCenterId?: string;
    /** 部门 */
    departmentId?: string;
    departmentCode?: string;
    departmentName?: string;
    /** 账期 */
    periodId?: string;
    /** 账期 */
    periodCode?: string;
    financialDate?: string;
    /** 成本项 */
    costItemId?: string;
    costCenterCode?: string;
    costCenterName?: string;
    /** 币种 */
    currencyId?: string;
    currencyName?: string;
    currencyCode?: string;
    /** 分摊成本 */
    extCost?: number;
    /** 实际分摊成本 */
    amtCost?: number;
    /** 分摊人 */
    postedUser?: string;
    /** 分摊时间 */
    postedDate?: string;
    status?: CostSharingEnum;
    costItemCode?: string;
    costItemName?: string;
    periodMonth?: number;
    periodYear?: number;
    details?: CostSharingDetailDto[];
  };

  type CostSharingDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CostSharingDto;
    queryCount?: number;
  };

  type CostSharingDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CostSharingDto[];
    queryCount?: number;
  };

  type CostSharingEnum = 0 | 1;

  type CostSharProdOrderCostDetailDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 成本明细Id */
    costSharingDetailId?: string;
    /** 工单id */
    prodOrderId?: string;
    /** 工单号 */
    prodOrderNo?: string;
    /** 工厂信息 */
    factoryId?: string;
    /** 部门信息 */
    departmentId?: string;
    /** 成本中心 */
    costCenter?: string;
    /** 成本中心 */
    costCenterId?: string;
    /** 款式 */
    styleId?: string;
    /** 颜色 */
    colorId?: string;
    /** 工单数量 */
    prodOrderQty?: number;
    /** 交易日期 */
    transDate?: string;
    /** 报工记录Id */
    prodOrderCostId?: string;
    teamId?: string;
    /** sam */
    sam?: number;
    /** sam */
    totalSAM?: number;
    /** 账期 */
    periodId?: string;
    /** 成本 */
    amtCost?: number;
    /** 成本中心 */
    costCenterCode?: string;
    /** 工厂 */
    factoryCode?: string;
    factoryName?: string;
    /** 部门 */
    departmentCode?: string;
    departmentName?: string;
    /** 账期 */
    financialDate?: string;
    styleCode?: string;
    styleName?: string;
    colorCode?: string;
    colorName?: string;
    periodMonth?: number;
    periodYear?: number;
  };

  type CostSharProdOrderCostDetailDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CostSharProdOrderCostDetailDto[];
    queryCount?: number;
  };

  type QueryField = {
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

  type SysDictDataRto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    code?: string;
    name?: string;
    dictValue?: string;
    dictTypeId?: string;
    sortBy?: number;
    isDefault?: string;
    remark?: string;
    status?: number;
  };

  type SysDictTypeRto = {
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
    status?: number;
    sysDictDataDtos?: SysDictDataRto[];
  };

  type SysDictTypeRtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysDictTypeRto;
    queryCount?: number;
  };

  type ARPeriodGetByIdParams = {
    id: string;
  };

  type ARPeriodDeleteParams = {
    id: number;
  };

  type ARPeriodClosePeriodParams = {
    id: number;
  };

  type ARPeriodOpenPeriodParams = {
    factoryId: string;
  };

  type ARPeriodCurrentPeriodParams = {
    factoryId: string;
  };

  type ARPeriodCurrentActivatParams = {
    factoryId: string;
  };

  type ARPeriodGetByFinancialDateParams = {
    factoryId: number;
    financialDate: string;
  };

  type BusinessAreaGetByIdParams = {
    id: number;
  };

  type BusinessAreaDeleteParams = {
    ids?: number[];
  };

  type CostCenterGetByIdParams = {
    id: number;
  };

  type CostCenterDeleteParams = {
    id: number;
  };

  type CostCenterGetByCodeParams = {
    code?: string;
    factoryId?: string;
    departmentId?: string;
  };

  type CostSharingGetListByCostSharingDetailParams = {
    detailId?: string;
  };

  type CostSharingCostExpenseParams = {
    id?: string;
  };

  type CostSharingCancelCostExpenseParams = {
    id?: string;
  };

  type CostSharingGetByIdParams = {
    id: number;
  };

  type CostSharingDeleteParams = {
    ids?: number[];
  };
}
