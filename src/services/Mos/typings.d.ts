declare namespace API {
  type ActionType = 0 | 1;

  type APIStatusCode = 1 | 2 | 3 | 5 | 333;

  type ApplyDetail = {
    itemSkuId?: string;
    addiInfo?: string;
    demandQty?: number;
    prodOrderDemandQty?: number;
  };

  type ApplySaveParamDto = {
    sendApplyId?: number;
    details?: ApplyDetail[];
  };

  type BomCompDetailSaveDto = {
    /** 部位Id */
    componentId?: number;
    label?: string;
    colorId?: number;
    size?: string;
    byLabel?: boolean;
    byColor?: boolean;
    bySize?: boolean;
    comment?: string;
  };

  type BomDetailDto = {
    /** bomdetailid */
    id?: string;
    /** 物料Id */
    itemId?: string;
    /** 物料color */
    itemColorCode?: string;
    /** 物料size */
    itemColorSize?: string;
    /** 用量 */
    quantity?: number;
    /** 备注 */
    comment?: string;
    /** 附加信息 */
    addiInfo?: string;
    /** 成本价 */
    costPrice?: number;
    /** 损耗 */
    rmWastePerc?: number;
  };

  type BomDetailUpdateDto = {
    mpsBomId?: string;
    bomDetail?: BomDetailDto[];
    bomDtlDeleteIds?: string[];
  };

  type BomReportDetail = {
    /** 序号 */
    index?: string;
    component?: string;
    label?: string;
    color?: string;
    size?: string;
    itemCode?: string;
    itemName?: string;
    mainImagePath?: string;
    itemColorCode?: string;
    itemColorName?: string;
    itemSizeCode?: string;
    itemSizeName?: string;
    quantity?: number;
    uom?: string;
    uomDesc?: string;
    rmWastePerc?: number;
    costPrice?: number;
  };

  type BomReportHeader = {
    itemType?: number;
    mpsNo?: string;
    /** 客户 */
    customerCode?: string;
    /** 客户 */
    customerName?: string;
    /** 工厂 */
    factoryCode?: string;
    /** 工厂 */
    factoryName?: string;
    styleCode?: string;
    styleName?: string;
    currencyCode?: string;
    currencyName?: string;
  };

  type BomReportPrintDto = {
    id?: string;
    header?: BomReportHeader;
    details?: BomReportDetail[];
  };

  type BomReportPrintDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: BomReportPrintDto;
    queryCount?: number;
  };

  type BooleanApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: boolean;
    queryCount?: number;
  };

  type CheckStyleItemUsedRequestDto = {
    styleItemIds?: string[];
  };

  type ComponentDesignBaseDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 关联MOS_Component.Id */
    componentId?: string;
    /** 关联DesignBase.Id */
    designBaseId?: string;
    /** 编码 */
    componentCode?: string;
    /** 名称 */
    componentName?: string;
    /** 分类 */
    className?: string;
    styleCode?: string;
    styleName?: string;
    styleId?: string;
    /** 工序 */
    prodProcess?: number;
    /** 最小用量 */
    minUsage?: number;
    /** 最大用量 */
    maxUsage?: number;
    /** 用量单位 */
    usageUnitId?: string;
    usageUnitName?: string;
    usageUnitCode?: string;
    componentMatDetails?: ComponentMatDetailDto[];
    matGroupList?: MatGroupDto[];
  };

  type ComponentDesignBaseDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ComponentDesignBaseDto;
    queryCount?: number;
  };

  type ComponentDesignBaseDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ComponentDesignBaseDto[];
    queryCount?: number;
  };

  type ComponentDto = {
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
    componentCode?: string;
    /** 名称 */
    componentName?: string;
    /** 分类 */
    className?: string;
    styleCode?: string;
    styleName?: string;
    styleId?: string;
    /** 工序 */
    prodProcess?: number;
    componentId?: number;
    designBaseId?: number;
    minUsage?: number;
    maxUsage?: number;
    usageUnitId?: number;
    usageUnitCode?: string;
    usageUnitName?: string;
    matDetails?: ComponentMatDetailDto[];
  };

  type ComponentDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ComponentDto;
    queryCount?: number;
  };

  type ComponentDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ComponentDto[];
    queryCount?: number;
  };

  type ComponentMatDetailDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 关联MOS_ComponentDesignBase */
    compDesignBaseId?: string;
    /** 关联MatGroup */
    matGroupId?: string;
    matGrpName?: string;
    matGrpCode?: string;
  };

  type CompoQueryParamDto = {
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
    styleId?: string;
    className?: string;
  };

  type CostItemQueryParamDto = {
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
    /** 描述 */
    costType?: string;
  };

  type CostSheetQueryParamDto = {
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

  type CostShetGetStyleListDto = {
    prodOrderId?: number;
    mpsId?: number;
    productNo?: string;
    mpsNo?: string;
    styleId?: number;
    styleCode?: string;
    styleName?: string;
    colorCode?: string;
    label?: string;
    factoryCode?: string;
    factoryName?: string;
    currency?: string;
    warehouseId?: number;
    warehouseCode?: string;
    warehouseName?: string;
  };

  type CostShetGetStyleListDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: CostShetGetStyleListDto[];
    queryCount?: number;
  };

  type CostShetGetStyleParamDto = {
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

  type CostTempletQueryParamDto = {
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

  type FtyOrderReportHeader = {
    /** 客户单号 */
    po?: string;
    /** 销售单号 */
    so?: string;
    /** 创建时间 */
    timeCreated?: string;
    /** 仓库 */
    warehouseCode?: string;
    /** 仓库 */
    warehouseName?: string;
    /** 结算方式 */
    payTermCode?: string;
    payTermName?: string;
    /** 交货方式 */
    deliveryTermCode?: string;
    /** 交货方式 */
    deliveryTermName?: string;
    /** 出厂日期 */
    extFtyDate?: string;
    /** 溢装率 */
    overage?: string;
  };

  type Int64ApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: number;
    queryCount?: number;
  };

  type ItemOtherMpsQtyParam = {
    mpsId?: string;
    itemSkuId?: string;
    addiInfo?: string;
  };

  type MasterProdScheduleDetailDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 所属生产计划;关联MOS_MasterProdSchedule.Id */
    masterProdScheduleId?: string;
    /** 订单明细ID;关联FactoryOrderDetail.Id */
    factoryOrderDetailId?: string;
    /** 款式ID;关联Design.Id */
    styleId?: string;
    /** 款号 */
    styleCode?: string;
    /** 颜色 */
    color?: string;
    /** 单位 */
    unitId?: string;
    unitCode?: string;
    unitName?: string;
    /** 尺码 */
    size?: string;
    price?: string;
    /** 已收数量 */
    receiveQty?: number;
    /** 订单数量 */
    orderQty?: number;
    styleDesc?: string;
    designId?: string;
    fabricId?: string;
    /** 走地 */
    label?: string;
  };

  type MasterProdScheduleDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 生产计划编号 */
    mpsNo?: string;
    /** 季节ID;关联Season.Id */
    seasonId?: string;
    /** 工厂ID;关联Factory.Id */
    factoryId?: string;
    /** 仓库ID;关联Wh_WareHouse.Id */
    warehouseId?: string;
    /** 客户ID;关联Channel.Id */
    customerId?: string;
    /** 入库日期 */
    dueDate?: string;
    /** 计划开始日期 */
    plannedStartDate?: string;
    /** 计划结束日期 */
    plannedEndDate?: string;
    status?: MpsStatus;
    /** 审核时间 */
    timeCheck?: string;
    /** 审核人 */
    userIdCheck?: string;
    /** 作废时间 */
    timeCancel?: string;
    /** 作废人 */
    userIdCancel?: string;
    /** 反审核时间 */
    timeUnCheck?: string;
    /** 反审核人 */
    userIdUnCheck?: string;
    /** 明细 */
    mpsDetailCombineDto?: MpsDetailCombineDto[];
    /** 工单明细 */
    productionOrdersDto?: ProdOrderDetailsCombineDto[];
    /** 物料Bom明细 */
    materialsBomDto?: MpsDetailBomDto[];
    /** 辅料Bom明细 */
    accessoryBomDto?: MpsDetailBomDto[];
    /** 集团编码 */
    groupCode?: string;
    /** 集团名称 */
    groupName?: string;
    /** 季节 */
    seasonCode?: string;
    seasonName?: string;
    /** 工厂 */
    factoryName?: string;
    factoryCode?: string;
    /** 仓库 */
    warehouseCode?: string;
    warehouseName?: string;
    /** 客户 */
    customerCode?: string;
    customerName?: string;
    currencyId?: string;
    currencyCode?: string;
    currencyName?: string;
  };

  type MasterProdScheduleDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MasterProdScheduleDto;
    queryCount?: number;
  };

  type MasterProdScheduleDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MasterProdScheduleDto[];
    queryCount?: number;
  };

  type MaterialApplyStatus = 0 | 1 | 3 | -3 | -1;

  type MaterialSendApplyDetail = {
    itemCode?: string;
    itemName?: string;
    colorCode?: string;
    colorName?: string;
    sizeCode?: string;
    addiInfo?: string;
    sizeName?: string;
    /** 单位 */
    uomDesc?: string;
    uom?: string;
    /** 已发数量 */
    issuedQty?: number;
    /** 需求量 */
    demandQty?: number;
    /** 净需求量 */
    netRequest?: number;
    /** 说明 */
    remarks?: string;
    /** MPS库存（原 已分配） */
    availQty?: number;
    requestQty?: number;
  };

  type MaterialSendApplyHeader = {
    /** 申请单号 */
    materialSendApplyNo?: string;
    /** mps编号 */
    mpsNo?: string;
    /** 创建日期 */
    timeCreated?: string;
    /** 提交人 */
    userIdCreated?: string;
    /** 工单编号 */
    productNo?: string;
    /** 款式编码 */
    styleCode?: string;
    /** 款式名称 */
    styleName?: string;
    /** 客户名称 */
    customerName?: string;
    /** 客户编码 */
    customerCode?: string;
    /** 仓库 */
    warehouseName?: string;
    warehouseCode?: string;
    /** 交期 */
    duDate?: string;
    /** 说明 */
    remarks?: string;
  };

  type MaterialSendApplyOperationLogDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** MaterialSendApply ID */
    materialSendApplyId?: string;
    /** 操作类型 */
    operateType?: string;
    /** 修改前内容 */
    content?: string;
    /** 备注 */
    remark?: string;
  };

  type MaterialSendApplyOperationLogDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MaterialSendApplyOperationLogDto[];
    queryCount?: number;
  };

  type MaterialSendApplyPrintDto = {
    id?: string;
    header?: MaterialSendApplyHeader;
    details?: MaterialSendApplyDetail[];
  };

  type MaterialSendApplyPrintDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MaterialSendApplyPrintDto[];
    queryCount?: number;
  };

  type MaterialSendDetailDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** MaterialSend.Id;关联MaterialSend.Id */
    materialSendId?: string;
    /** 部位ID */
    componentId?: string;
    /** 物料Id;关联BA_StyleItem.Id */
    itemId?: string;
    itemSkuId?: string;
    /** 颜色 */
    colorCode?: string;
    /** 颜色名称 */
    colorName?: string;
    /** 尺码 */
    sizeCode?: string;
    /** 尺码 */
    sizeName?: string;
    /** 申请的订单数量 */
    sendQty?: number;
    /** 来自BOM的用量 */
    usageQty?: number;
    /** 发放订单数量 */
    issueOrderQty?: number;
    /** 审核时间 */
    timeCheck?: string;
    /** 审核人 */
    userIdCheck?: string;
    /** 作废时间 */
    timeCancel?: string;
    /** 作废人 */
    userIdCancel?: string;
    /** 反审核时间 */
    timeUnCheck?: string;
    /** 反审核人 */
    userIdUnCheck?: string;
    itemCode?: string;
    itemName?: string;
    uomId?: number;
    uom?: string;
    uomDesc?: string;
    mpsBomComponentId?: number;
    className?: string;
    prodProcess?: number;
    componentCode?: string;
    componentName?: string;
    customerId?: string;
    customerName?: string;
    customerCode?: string;
    totalQty?: number;
    addiInfo?: string;
    productNo?: string;
    /** 总需求 */
    demandQty?: number;
    /** 库存 */
    mpsqoh?: number;
    /** 库存 */
    availQty?: number;
    /** 损耗 */
    waste?: number;
    /** 净需求 */
    netReqedQty?: number;
    /** 发料成本 */
    itemCost?: number;
  };

  type MaterialSendDetailSaveDto = {
    detailId?: string;
    sendQty?: number;
  };

  type MaterialSendDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 发料单号 */
    materialSendNo?: string;
    /** 通知单ID;关联MOS_ProdRMConsumption.Id */
    materialSendApplyId?: string;
    /** 物料发货仓库ID */
    warehouseId?: string;
    /** 工单ID */
    prodOrderId?: string;
    /** 备注 */
    remark?: string;
    /** 审核时间 */
    timeCheck?: string;
    /** 审核人 */
    userIdCheck?: string;
    /** 作废时间 */
    timeCancel?: string;
    /** 作废人 */
    userIdCancel?: string;
    /** 反审核时间 */
    timeUnCheck?: string;
    /** 反审核人 */
    userIdUnCheck?: string;
    status?: MaterialSendStatus;
    materialSendApplyNo?: string;
    factoryCode?: string;
    factoryName?: string;
    warehouseCode?: string;
    warehouseName?: string;
    productNo?: string;
    styleCode?: string;
    styleName?: string;
    mpsNo?: string;
    customerId?: number;
    customerCode?: string;
    customerName?: string;
    currencyCode?: string;
    currencyName?: string;
    /** 交易记录单ID */
    trxId?: string;
    /** 交易记录单编码 */
    trxCode?: string;
    /** code */
    periondCode?: string;
    /** 账期年份 202204 */
    periondYear?: string;
    /** 账期月份 202204 */
    periondMorth?: string;
    /** 账期 2022-04 */
    periondDate?: string;
    /** 交易日期 */
    trxDate?: string;
    relationNo?: string;
    details?: MaterialSendDetailDto[];
    /** 操作日志 */
    operationLogs?: MaterialSendOperationLogDto[];
  };

  type MaterialSendDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MaterialSendDto;
    queryCount?: number;
  };

  type MaterialSendDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MaterialSendDto[];
    queryCount?: number;
  };

  type MaterialSendOperationLogDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** MaterialSend ID */
    materialSendId?: string;
    /** 操作类型 */
    operateType?: string;
    /** 修改前内容 */
    content?: string;
    /** 备注 */
    remark?: string;
  };

  type MaterialSendOperationLogDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MaterialSendOperationLogDto[];
    queryCount?: number;
  };

  type MaterialSendQueryParam = {
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
    startCreateDate?: string;
    endCreateDate?: string;
    warehouseId?: string;
    status?: SendStatus;
  };

  type MaterialSendSaveDto = {
    materialSendNoticeId?: string;
    warehouseId?: string;
    /** 发货单Id */
    materialSendId?: string;
    remark?: string;
    detailDtos?: MaterialSendDetailSaveDto[];
  };

  type MaterialSendStatus = 0 | 1 | 2 | 3 | 4 | 5;

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

  type MOSCostItem = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 项目编号 */
    costCode?: string;
    /** 类型 */
    costType?: string;
    calSource?: string;
    /** 公式 */
    sysFormula?: string;
    /** 描述 */
    description?: string;
  };

  type MOSCostItemApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSCostItem;
    queryCount?: number;
  };

  type MOSCostItemListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSCostItem[];
    queryCount?: number;
  };

  type MOSCostSheet = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 款ID */
    styleId?: number;
    /** 颜色 */
    styleColorId?: number;
    /** 走地 */
    label?: string;
    /** MpsId */
    mpsId?: number;
    /** 仓库ID */
    warehouseId?: number;
    /** 工单ID */
    prodOrderId?: number;
    /** 模板ID */
    templetId?: number;
    /** 面料成本 */
    fabCost?: number;
    /** 辅料成本 */
    trimCost?: number;
    /** 加工成本 */
    cmCost?: number;
    /** 标准成本 */
    stdCost?: number;
    /** 状态;(0.未审核,1.已审核,2.反审核,3.已作废) */
    status?: number;
    remark?: string;
    /** 是否激活 */
    isActivate?: boolean;
    details?: MOSCostSheetDetail[];
    /** 款号 */
    styleCode?: string;
    styleName?: string;
    colorCode?: string;
    colorName?: string;
    factoryId?: number;
    factoryCode?: string;
    factoryName?: string;
    warehouseCode?: string;
    warehouseName?: string;
    currencyCode?: string;
    mpsNo?: string;
    templetCode?: string;
    templetName?: string;
    /** 工单号 */
    prodNo?: string;
    styleItemId?: number;
    unitId?: string;
  };

  type MOSCostSheetApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSCostSheet;
    queryCount?: number;
  };

  type MOSCostSheetDetail = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    costSheetId?: number;
    /** 关联MOS_CostItem.Id */
    costItemId?: number;
    /** 顺序 */
    orderBy?: number;
    stdCost?: number;
    samPerPiece?: number;
    fsCost?: number;
    comment?: string;
    costItemCode?: string;
    costType?: string;
    calSource?: string;
    sysFormula?: string;
    description?: string;
    exclude?: boolean;
  };

  type MOSCostSheetListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSCostSheet[];
    queryCount?: number;
  };

  type MOSCostTemplet = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    templetCode?: string;
    /** 描述 */
    description?: string;
    /** 状态;(0.未审核,1.已审核,2.反审核,3.已作废) */
    status?: number;
    details?: MOSCostTempletDetail[];
  };

  type MOSCostTempletApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSCostTemplet;
    queryCount?: number;
  };

  type MOSCostTempletDetail = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    costItemId?: number;
    /** 关联MOS_CodeTemplet.Id */
    templetId?: number;
    /** 公式 */
    customFormula?: string;
    /** 是否排除 */
    exclude?: boolean;
    /** 顺序 */
    orderBy?: number;
    costItemCode?: string;
    costType?: string;
    calSource?: string;
    /** 公式 */
    sysFormula?: string;
    /** 公式 */
    itemSysFormula?: string;
    /** 描述 */
    description?: string;
  };

  type MOSCostTempletListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSCostTemplet[];
    queryCount?: number;
  };

  type MOSReceive = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 收货单号 */
    receiveNo?: string;
    /** 收货日期 */
    receiveDate?: string;
    /** 工单ID */
    prodOrderId?: number;
    /** Pick ID */
    pickId?: number;
    /** 仓库ID */
    warehouseId?: number;
    /** 备注 */
    remark?: string;
    /** 审核时间 */
    timeCheck?: string;
    /** 审核人 */
    userIdCheck?: string;
    /** 作废时间 */
    timeCancel?: string;
    /** 作废人 */
    userIdCancel?: string;
    /** 反审核时间 */
    timeUnCheck?: string;
    /** 反审核人 */
    userIdUnCheck?: string;
    /** 状态;(0.未审核,1.已审核,2.反审核,3.已作废) */
    status?: number;
    /** 仓库编号 */
    warehouseCode?: string;
    /** 仓库 */
    warehouseName?: string;
    /** 工单号 */
    prodOrderNo?: string;
    pickNo?: string;
    details?: MOSReceiveDetail[];
    /** 收货数量 */
    qty?: number;
    /** 工厂 */
    ftyCode?: string;
    factoryCode?: string;
    factoryId?: string;
    /** 工厂名称 */
    factoryName?: string;
    /** 打印人 */
    printUser?: string;
    /** 款id */
    styleId?: number;
    /** 款id */
    styleColorId?: number;
    /** 是否冲消 */
    isOff?: boolean;
    actionType?: ActionType;
    /** 原收货订单id */
    origHeaderId?: number;
    /** 原收货订单id */
    origOrderNo?: string;
    /** 过账日期 */
    postingDate?: string;
    /** 账期 */
    financialDate?: string;
    /** 过账年份 */
    financialYear?: number;
    /** 过账月份 */
    financialMonth?: number;
    /** 交易流水 */
    transactionNo?: string;
    /** 交易id */
    stockTransactionId?: number;
  };

  type MOSReceiveApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSReceive;
    queryCount?: number;
  };

  type MOSReceiveDetail = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 款式ID */
    styleId?: number;
    /** Label */
    label?: string;
    styleColorId?: number;
    /** 颜色ID */
    color?: string;
    /** 尺码ID */
    size?: string;
    styleItemId?: number;
    /** 收货数量 */
    qty?: number;
    receiveId?: number;
    prodOrderId?: number;
    styleCode?: string;
    styleName?: string;
    colorName?: string;
    /** 未收数量 */
    notReceivedQty?: number;
    prodOrderNo?: string;
  };

  type MOSReceiveListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSReceive[];
    queryCount?: number;
  };

  type MOSStdCostRate = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 工厂ID */
    factoryId?: number;
    /** 生效日期 */
    effectiveDate?: string;
    costType?: string;
    currency?: string;
    /** 折旧率(小时) */
    deprHourlyRate?: number;
    /** 其它费率(小时) */
    mohHourlyRate?: number;
    /** 水电气费率(小时) */
    utitityHourlyRate?: number;
    /** 总生产率(小时) */
    totalHoulyCmRate?: number;
    /** 平均效率 */
    avgEfficiencyPercent?: number;
    status?: MosStatus;
    factoryCode?: string;
    factoryName?: string;
    costTypeName?: string;
  };

  type MOSStdCostRateApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSStdCostRate;
    queryCount?: number;
  };

  type MOSStdCostRateListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSStdCostRate[];
    queryCount?: number;
  };

  type MOSWaste = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 工厂ID;关联Factory.Id */
    factoryId?: number;
    /** 客户ID;关联BA_Customer.Id */
    customerId?: number;
    /** 部位ID;关联MOS_Component.Id */
    componentId?: number;
    /** 生效日期 */
    effectiveDate?: string;
    factoryCode?: string;
    factoryName?: string;
    customerCode?: string;
    customerName?: string;
    componentCode?: string;
    componentName?: string;
    rangeList?: MOSWasteRange[];
  };

  type MOSWasteApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSWaste;
    queryCount?: number;
  };

  type MOSWasteListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MOSWaste[];
    queryCount?: number;
  };

  type MOSWasteRange = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 工厂ID;关联 MOS_Waste.Id */
    wasteId?: number;
    /** 客户ID */
    startValue?: number;
    /** 部位ID */
    endValue?: number;
    /** 损耗% */
    wastePercent?: number;
  };

  type MosStatus = 0 | 1 | 2 | 5 | -2 | -1;

  type MpsBomChildDetailDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    mpsBomDetailId?: number;
    seq?: number;
    componentId?: number;
    componentCode?: string;
    componentName?: string;
    mpsBomComponentId?: string;
    component?: string;
    /** 订单数量 */
    orderQty?: number;
    prodProcess?: number;
    label?: string;
    colorId?: number;
    color?: string;
    colorName?: string;
    size?: string;
    /** 默认用量 */
    defaultUsage?: number;
    itemId?: number;
    itemCode?: string;
    itemName?: string;
    itemColorId?: number;
    itemColorCode?: string;
    itemColor?: string;
    itemColorName?: string;
    itemSizeCode?: string;
    itemSizeName?: string;
    comment?: string;
    bySize?: boolean;
    byLabel?: boolean;
    byColor?: boolean;
    quantity?: number;
    /** 总用量 */
    demandQty?: number;
    /** 用量汇总 */
    totalQuantity?: number;
    /** 单位 */
    uom?: string;
    uomDesc?: string;
    /** 损耗率 */
    rmWastePerc?: number;
    /** styleItemNo */
    itemNo?: string;
    addiInfo?: string;
    status?: MosStatus;
    children?: MpsBomChildDetailDto[];
    index?: string;
    parentSeq?: number;
    mainImagePath?: string;
    /** 成本总价 */
    itemCost?: number;
    /** 成本价 */
    costPrice?: number;
    /** 物料色码明细(用于下拉列表选择颜色) */
    itemColorList?: MpsBomItemColorDto[];
    itemSizeList?: MpsBomItemSizeDto[];
  };

  type MpsBomDelCompParamDto = {
    mpsBomId?: string;
    mpsBomComponentIds?: string[];
  };

  type MpsBomDetailDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    mpsBomDetailId?: number;
    seq?: number;
    componentId?: number;
    componentCode?: string;
    componentName?: string;
    mpsBomComponentId?: string;
    component?: string;
    /** 订单数量 */
    orderQty?: number;
    prodProcess?: number;
    label?: string;
    colorId?: number;
    color?: string;
    colorName?: string;
    size?: string;
    /** 默认用量 */
    defaultUsage?: number;
    itemId?: number;
    itemCode?: string;
    itemName?: string;
    itemColorId?: number;
    itemColorCode?: string;
    itemColor?: string;
    itemColorName?: string;
    itemSizeCode?: string;
    itemSizeName?: string;
    comment?: string;
    bySize?: boolean;
    byLabel?: boolean;
    byColor?: boolean;
    quantity?: number;
    /** 总用量 */
    demandQty?: number;
    /** 用量汇总 */
    totalQuantity?: number;
    /** 单位 */
    uom?: string;
    uomDesc?: string;
    /** 损耗率 */
    rmWastePerc?: number;
    /** styleItemNo */
    itemNo?: string;
    addiInfo?: string;
    status?: MosStatus;
    index?: string;
    children?: MpsBomChildDetailDto[];
  };

  type MpsBomDetailDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsBomDetailDto[];
    queryCount?: number;
  };

  type MpsBomDetailSaveDto = {
    /** MpsBomDetailId (没值时添加，有值时更新) */
    mpsBomDetailId?: number;
    /** 部位Id */
    label?: string;
    colorId?: number;
    size?: string;
    /** 物料ID */
    itemId?: number;
    /** 物料颜色 */
    itemColorCode?: string;
    itemColorName?: string;
    itemSkuId?: string;
    /** 物料尺码 */
    itemSizeCode?: string;
    itemSizeName?: string;
    /** 用量 */
    quantity?: number;
    comment?: string;
  };

  type MpsBomDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    mpsId?: number;
    styleId?: number;
    styleCode?: string;
    styleName?: string;
    mpsNo?: string;
    mpsBomId?: number;
    /** 0物料，1面料 */
    itemType?: number;
    /** 季节 */
    seasonCode?: string;
    seasonName?: string;
    /** 工厂 */
    factoryName?: string;
    factoryCode?: string;
    /** 仓库 */
    warehouseCode?: string;
    warehouseName?: string;
    /** 客户 */
    customerCode?: string;
    customerName?: string;
    /** 出厂日期 */
    dueDate?: string;
    /** 计划开始日期 */
    plannedStartDate?: string;
    /** 计划结束日期 */
    plannedEndDate?: string;
    /** 集团ID */
    groupId?: string;
    /** 集团编码 */
    groupCode?: string;
    /** 集团名称 */
    groupName?: string;
    currencyCode?: string;
    currencyId?: string;
    currencyName?: string;
    /** BOM明细 */
    details?: MpsBomDetailDto[];
    /** 款的明细 */
    designDetails?: MpsDesignDetailDto[];
  };

  type MpsBomDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsBomDto;
    queryCount?: number;
  };

  type MpsBomItemColorDto = {
    itemColorCode?: string;
    itemColorName?: string;
  };

  type MpsBomItemSizeDto = {
    itemSizeCode?: string;
    itemSizeName?: string;
  };

  type MpsBomOperationLogDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    mpsId?: string;
    /** MpsBomId */
    mpsBomId?: string;
    /** 操作类型 */
    operateType?: string;
    /** 修改前内容 */
    content?: string;
    /** 备注 */
    remark?: string;
  };

  type MpsBomOperationLogDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsBomOperationLogDto[];
    queryCount?: number;
  };

  type MpsBomSaveCompDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** MPS Bom ID (没有时添加，有时修改) */
    mpsBomId?: number;
    /** Mps ID */
    mpsId?: number;
    /** 款式ID */
    styleId?: number;
    /** 物料类型 0辅料，1面料 */
    itemType?: number;
    myProperty?: number;
    details?: BomCompDetailSaveDto[];
  };

  type MpsBomSaveDto = {
    /** MPS Bom ID (没有时添加，有时修改) */
    mpsBomId?: number;
    /** Mps ID */
    mpsId?: number;
    /** 款式ID */
    styleId?: number;
    /** 物料类型 0辅料，1面料 */
    itemType?: number;
    details?: MpsBomDetailSaveDto[];
  };

  type MPSCheckParamDto = {
    /** 审核Id列表 */
    ids?: string[];
    status?: MPSStatus;
    /** 备注 */
    comment?: string;
  };

  type MpsDesignDetailDto = {
    label?: string;
    fabricCode?: string;
    fabricId?: number;
    size?: string;
  };

  type MpsDetailBomDto = {
    /** 序号 */
    seq?: number;
    mpsNo?: string;
    /** 款式 */
    styleCode?: string;
    styleName?: string;
    /** Id */
    styleId?: string;
    /** 部件数量 */
    compQty?: number;
    /** 类型 */
    itemType?: number;
    mpsBomId?: string;
  };

  type MpsDetailBomDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsDetailBomDto[];
    queryCount?: number;
  };

  type MpsDetailCombineDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    lineSEQ?: number;
    /** 所属生产计划;关联MOS_MasterProdSchedule.Id */
    masterProdScheduleId?: string;
    /** 订单明细ID;关联FactoryOrderDetail.Id */
    factoryOrderDetailId?: string;
    factoryOrderId?: string;
    /** 款式ID;关联Design.Id */
    styleId?: string;
    /** 款号 */
    styleCode?: string;
    /** 颜色 */
    colorCode?: string;
    colorName?: string;
    /** 单位 */
    unitId?: string;
    unitCode?: string;
    unitName?: string;
    /** 尺码 */
    size?: string;
    exFtyDate?: string;
    price?: number;
    /** 已收数量 */
    receiveQty?: number;
    orderNo?: string;
    /** 订单数量 */
    orderQty?: number;
    styleDesc?: string;
    label?: string;
    poNo?: string;
    cusReqDate?: string;
    dcStoreCode?: string;
    dcStoreName?: string;
    contractNo?: string;
    dcStore?: string;
    /** 尺码明细 */
    orderDetailDtos?: MasterProdScheduleDetailDto[];
  };

  type MpsDetailUpdateDto = {
    /** MpsId */
    masterProdScheduleId?: number;
    orderLineSeqList?: Record<string, any>;
  };

  type MpsFtyOrderReportPrintDto = {
    id?: string;
    orderHeader?: FtyOrderReportHeader;
    orderDetails?: MpsReportDetailDto[];
  };

  type MpsInventoryParamDto = {
    ids?: string[];
    /** 备注 */
    remark?: string;
  };

  type MpsInventoryStatus = 1 | 2 | 3 | -1;

  type MpsItemPurchaseCostDetailDto = {
    index?: number;
    itemCode?: string;
    itemName?: string;
    itemSkuId?: string;
    itemColorCode?: string;
    itemColorName?: string;
    itemSizeCode?: string;
    itemSizeName?: string;
    addiInfo?: string;
    unitCode?: string;
    unitName?: string;
    itemType?: string;
    prNo?: string;
    poNo?: string;
    /** 新需求量 */
    newDemandQty?: number;
    /** 在途数量 */
    prodLineQty?: number;
    /** 收货数量 */
    receiveQty?: number;
    /** 收货成本 */
    receiveCost?: number;
    /** 回用数量 */
    reuseQty?: number;
    /** 回用成本 */
    reuseCost?: number;
    /** 不含税价 */
    netPrice?: number;
    /** 税码 */
    taxCode?: string;
    /** 不含税总价 */
    netCostPrice?: number;
    /** 含税总价 */
    costPrice?: number;
    /** 含税单价 */
    price?: number;
    /** 税率 */
    taxRate?: number;
  };

  type MpsItemPurchaseCostDto = {
    index?: number;
    itemType?: string;
    children?: MpsItemPurchaseCostDetailDto[];
    demandQty?: number;
    prodLineQty?: number;
    netCostPrice?: number;
    costPrice?: number;
    reuseCost?: number;
  };

  type MpsItemPurchaseCostDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsItemPurchaseCostDto[];
    queryCount?: number;
  };

  type MpsItemVo = {
    itemSkuId?: number;
    itemCode?: string;
    itemName?: string;
    itemColorCode?: string;
    itemColorName?: string;
    itemSizeCode?: string;
    itemSizeName?: string;
    unitCode?: string;
    addiInfo?: string;
    warehouseId?: string;
    mpsId?: number;
    /** 多余数量 */
    oeveBuy?: number;
    mpsNo?: string;
  };

  type MpsItemVoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsItemVo[];
    queryCount?: number;
  };

  type MpslockDto = {
    itemSkuId?: string;
    itemId?: string;
    itemCode?: string;
    itemName?: string;
    itemColorCode?: string;
    itemColorName?: string;
    itemSizeCode?: string;
    itemSizeName?: string;
    addiInfo?: string;
    unitCode?: string;
    unitName?: string;
    componentCode?: string;
    componentName?: string;
    itemType?: string;
    /** 库存 */
    availQty?: number;
    /** 在途 */
    prodLineWIP?: number;
    /** 上次总用量 */
    beforeDemandQty?: number;
    /** 当前总用量 */
    currentDemandQty?: number;
    /** 索赔数量 */
    claimQty?: number;
    /** 需采购数量 */
    netReqedQty?: number;
    overBuy?: number;
    /** 已采购数量 */
    purchaseQty?: number;
  };

  type MpslockDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpslockDto[];
    queryCount?: number;
  };

  type MpsQueryParamDto = {
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
    /** 起始时间 */
    startTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 入库开始日期 */
    startDueDate?: string;
    /** 入库结束日期 */
    endDueDate?: string;
    /** 客户Id */
    customerId?: string;
    status?: MpsStatus;
  };

  type MpsReportDetailDto = {
    index?: number;
    /** 款式编码 */
    styleCode?: string;
    /** 款式名称 */
    styleName?: string;
    /** 走地 */
    label?: string;
    /** 颜色 */
    colorCode?: string;
    colorName?: string;
    /** 尺码 */
    size?: string;
    /** 数量 */
    qty?: number;
  };

  type MpsReportHeaderDto = {
    timeCreated?: string;
    /** 季节 */
    seasonCode?: string;
    /** 季节 */
    seasonName?: string;
    /** 客户 */
    customerCode?: string;
    /** 客户 */
    customerName?: string;
    /** 工厂 */
    factoryCode?: string;
    /** 工厂 */
    factoryName?: string;
    /** 说明 */
    description?: string;
    /** 订单日期 */
    orderDate?: string;
    mpsNo?: string;
    /** 品牌 */
    brandCode?: string;
    /** 品牌 */
    brandName?: string;
    /** 创建人 */
    userIdCreated?: string;
    /** 入库日期 */
    dueDate?: string;
    plannedEndDate?: string;
    plannedStartDate?: string;
    /** 款式名称，多款式用逗号分割 */
    styleName?: string;
  };

  type MpsReportPrintDto = {
    id?: string;
    header?: MpsReportHeaderDto;
    details?: MpsReportDetailDto[];
    /** 工厂订单数据 */
    orderData?: MpsFtyOrderReportPrintDto[];
  };

  type MpsReportPrintDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsReportPrintDto[];
    queryCount?: number;
  };

  type MpsRMAddiInfoDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** Mps Id */
    mpsId?: string;
    /** Item Sku Id;关联BA_StyleItem.Id */
    itemSkuId?: string;
    /** 附加信息 */
    addiInfo?: string;
    /** 额外数量 */
    addOnQty?: number;
    /** 额外原因 */
    addOnReason?: string;
  };

  type MpsRMAddiInfoDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsRMAddiInfoDto[];
    queryCount?: number;
  };

  type MpsRMAddiInfoQueryParam = {
    mpsId?: string;
    rmList?: RMAddiInfoUsageDto[];
  };

  type MpsRMAddiInfoSaveDto = {
    mpsId?: string;
    /** 规格Id */
    itemSkuId?: string;
    addiInfo?: string;
    /** 物料Id */
    itemId?: string;
    unitCode?: string;
    addOnQty?: number;
    addOnReason?: string;
    /** 附加至 { 0 同物料  1同规格 2同附加信息} */
    addiInfoTo?: number;
  };

  type MpsRMAddOnQtyDto = {
    mpsId?: string;
    itemSkuId?: string;
    addiInfo?: string;
    addOnQty?: number;
    addOnReason?: string;
  };

  type MpsRMDetailDto = {
    /** Mps ID */
    mpsId?: string;
    /** 工单数量 */
    prodLineQty?: number;
    /** 物料ID;关联BA_Style.Id */
    itemId?: string;
    itemCode?: string;
    itemName?: string;
    /** 物料 SKU ID */
    itemSkuId?: string;
    itemColorCode?: string;
    itemColorName?: string;
    itemSizeCode?: string;
    itemSizeName?: string;
    /** 额外需求量 */
    addOnQty?: number;
    addiInfo?: string;
    /** 原因 */
    addOnReason?: string;
    /** 总用量 */
    demandQty?: number;
    /** 单位 */
    unitCode?: string;
  };

  type MpsRMDetailDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsRMDetailDto[];
    queryCount?: number;
  };

  type MpsRMInventoryParamDto = {
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
    /** 状态 */
    status?: number;
    /** 仓库Id */
    wareHouseId?: string;
    /** 申请开始时间 */
    applyStartDate?: string;
    /** 申请结束时间 */
    applyEndDate?: string;
  };

  type MpsRMInventoryTransferDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    fromMpsId?: string;
    toMpsId?: string;
    itemSkuId?: string;
    /** 附加信息 */
    addiInfo?: string;
    /** 仓库ID */
    wareHouseId?: string;
    /** 类型;0仓库分配，-1仓库取消分配，1mps分配 -2mps取消分配 */
    type?: number;
    /** 备注 */
    remark?: string;
    qty?: number;
    prodLineWIP?: number;
    status?: MpsInventoryStatus;
    /** 申请人 */
    userIdApply?: string;
    /** 申请时间 */
    timeApply?: string;
    /** 审核人 */
    userIdApprove?: string;
    /** 审核时间 */
    timeApprove?: string;
    /** 确认人 */
    userIdConfirm?: string;
    /** 确认时间 */
    timeConfirm?: string;
    /** 取消时间 */
    timeCancel?: string;
    /** 申请确认时间 */
    timeApplyConfirm?: string;
    /** 取消人 */
    userIdCancel?: string;
    /** 工厂 */
    factoryId?: string;
    /** 仓库编码 */
    warehouseCode?: string;
    /** 仓库名称 */
    warehouseName?: string;
    factoryCode?: string;
    factoryName?: string;
    toMpsNo?: string;
    fromMpsNo?: string;
    itemColorCode?: string;
    itemColorName?: string;
    itemSizeCode?: string;
    itemSizeName?: string;
    itemCode?: string;
    itemName?: string;
    uom?: string;
    rmWarehouses?: RMWarehouse[];
  };

  type MpsRMInventoryTransferDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsRMInventoryTransferDto;
    queryCount?: number;
  };

  type MpsRMInventoryTransferDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsRMInventoryTransferDto[];
    queryCount?: number;
  };

  type MpsRMInventoryWHParamDto = {
    /** 分配记录ID */
    id?: string;
    /** 分配仓库Id */
    warehouseId?: string;
  };

  type MpsRMStatusDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** Mps ID */
    mpsId?: string;
    /** 工单数量 */
    prodLineQty?: number;
    /** BOM Detail ID;关联MOS_MpsBomDetail.Id */
    bomDetailId?: string;
    /** 物料ID;关联BA_Style.Id */
    itemId?: string;
    itemCode?: string;
    itemName?: string;
    /** 物料 SKU ID */
    itemSkuId?: string;
    /** RM Type;FA/TR */
    itemType?: string;
    itemColorCode?: string;
    itemColorName?: string;
    itemSizeCode?: string;
    itemSizeName?: string;
    itemDueDate?: string;
    newPODue?: string;
    lastPODue?: string;
    itemVendor?: string;
    itemVendorName?: string;
    addiInfo?: string;
    itemUOM?: string;
    /** 需求数量 */
    demandQty?: number;
    /** 已发料数量 */
    issuedQty?: number;
    /** 已发物料的成本 */
    issuedCost?: number;
    /** 额外需求量 */
    addOnQty?: number;
    /** 已发料额外需求数量 */
    issuedAddOn?: number;
    /** 冻解数量 */
    freezeQty?: number;
    holdQty?: number;
    activeDemandQty?: number;
    /** 已入库的库存成本 */
    availQOHCost?: number;
    availQty?: number;
    /** 已分配成本 */
    availCost?: number;
    prodLineWIP?: number;
    reserveQty?: number;
    availFreeQOH?: number;
    mpsqoh?: number;
    netReqedQty?: number;
    overBuy?: number;
    addOnReason?: string;
    lastPONO?: string;
    lastPOShip?: string;
    lastPOVendor?: string;
    lastPOWip?: number;
    useType?: string;
    /** 部位 */
    compType?: string;
    /** 单位用量 */
    usage?: number;
    /** 损耗 */
    waste?: number;
    /** 用量 */
    effUsage?: number;
    weightGramsAfWash?: number;
    weightGramsBfWash?: number;
    fabricWidth?: number;
    tdcShrinkage?: number;
    slanting?: string;
    /** 状态 */
    status?: number;
    /** 库存基本单位 */
    baseUOM?: string;
    componentId?: number;
    componentCode?: string;
    componentName?: string;
    label?: string;
    colorCode?: string;
    colorName?: string;
    sizeCode?: string;
    sizeName?: string;
    styleCode?: string;
    styleName?: string;
    styleId?: string;
    orderNo?: string;
    otherMpsQty?: number;
    stockInventoryQty?: number;
  };

  type MpsRMStatusDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsRMStatusDto[];
    queryCount?: number;
  };

  type MpsRMStockParamDto = {
    /** 备注说明 */
    remark?: string;
    /** 仓库信息 */
    warehouse?: MpsRMInventoryWHParamDto[];
  };

  type MpsRMWHStockDto = {
    /** 仓库Id */
    warehouseId?: string;
    warehouseName?: string;
    warehouseCode?: string;
    factoryId?: string;
    factoryCode?: string;
    factoryName?: string;
    /** 物料Id 等同于ItemSkuId */
    styleItemId?: string;
    styleItemCode?: string;
    styleItemName?: string;
    /** 库存数量 */
    stockQty?: number;
    /** 超买数量 */
    overBuyQty?: number;
    unitNo?: string;
    /** 库存成本 */
    stockCost?: number;
    /** 库存单价 */
    stockPrice?: number;
  };

  type MpsRMWHStockDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: MpsRMWHStockDto[];
    queryCount?: number;
  };

  type MpsStatus = 0 | 1;

  type MPSStatus = 0 | 1 | 2 | 3 | 4 | 5;

  type MpsStockLockDto = {
    /** 物料id */
    itemSkuId?: string;
    /** //类型; 0仓库分配，-1仓库取消分配，1 mps分配 -2取消mps分配 */
    type?: number;
    /** 仓库id */
    wareHouseId?: string;
    /** 工厂id */
    factoryId?: string;
    /** 数量 */
    stockQty?: number;
    /** 申请时间 */
    timeApply?: string;
    /** 库位 */
    location?: string;
    /** 订单号、货号、mps */
    fromMpsNo?: string;
    toMpsNo?: string;
    /** 批次号 */
    batchNo?: string;
    /** 附加信息 */
    addInfo?: string;
    /** 说明 */
    remark?: string;
    /** 申请确认时间 */
    timeApplyConfirm?: string;
  };

  type MpsStockQueryParamDto = {
    /** 物料Id */
    itemSkuId?: string;
    /** 工厂Id */
    factoryId?: string;
    /** 仓库Id */
    wareHouseCode?: string;
    /** 批次号 */
    batchNo?: string;
    /** mps */
    fromMpsNo?: string;
    /** mps */
    toMpsNo?: string;
    /** 附加信息 */
    addInfo?: string;
    /** 库位 */
    location?: string;
    /** //类型; 0仓库分配，-1仓库取消分配，1 mps转换 -2 取消mps分配 */
    type?: number;
  };

  type MpsUnlockingParamDto = {
    mpsId?: string;
    unlockReason?: string;
    remarks?: string;
  };

  type OSPurchaseOrderDto = {
    poId?: string;
    poNo?: string;
    vendorCode?: string;
    vendorName?: string;
    /** 到货日期 */
    duDate?: string;
    /** 运输日期 */
    shipDate?: string;
    /** 备注说明 */
    remarks?: string;
    /** 采购数量 */
    qty?: number;
    /** 状态 */
    status?: number;
    statusCN?: string;
    /** 订单日期 */
    orderDate?: string;
    /** 币种 */
    currencyCode?: string;
    /** 单位 */
    unitCode?: string;
    /** 采购成本 */
    poCost?: number;
    /** 税码 */
    taxCode?: string;
    /** 成本编码 */
    costCode?: string;
  };

  type OSPurchaseOrderDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: OSPurchaseOrderDto[];
    queryCount?: number;
  };

  type OSPurchaseOrderParamDto = {
    /** iD */
    id?: string;
    prodOrderId?: string;
    /** 工厂信息 */
    factoryId?: string;
    factoryCode?: string;
    factoryName?: string;
    /** 客户信息 */
    customerId?: string;
    customerCode?: string;
    customerName?: string;
    /** 订单类型 */
    orderType?: string;
    /** 供应商信息 */
    vendorId?: string;
    vendorCode?: string;
    vendorName?: string;
    /** 币种信息 */
    currencyId?: string;
    currencyCode?: string;
    currencyName?: string;
    /** 仓库信息 */
    warehouseId?: string;
    warehouseCode?: string;
    warehouseName?: string;
    /** 运输方式 */
    shipViaId?: string;
    shipViaCode?: string;
    shipViaName?: string;
    /** 运输日期 */
    shipDate?: string;
    /** 到货日期 */
    duDate?: string;
    /** 款式 */
    styleCode?: string;
    styleId?: string;
    styleName?: string;
    /** 单位 */
    unitId?: string;
    unitCode?: string;
    unitName?: string;
    /** 采购数量 */
    qty?: number;
    /** 税码信息 */
    taxCode?: string;
    taxId?: string;
    taxName?: string;
    /** 成本项信息 */
    costItemId?: string;
    costItemCode?: string;
    costItemName?: string;
    /** 成本价 */
    costPrice?: number;
    /** 备注说明 */
    remarks?: string;
    /** 支付条款 */
    payTerms?: string;
    /** 运输条款 */
    shipTerms?: string;
    addInfo?: string;
  };

  type POOrderDetailCombineDto = {
    factoryCode?: string;
    orderNo?: string;
    style?: string;
    customer?: string;
    label?: string;
    color?: string;
    colorDesc?: string;
    orderType?: string;
    exFtyDate?: string;
    qtyOrder?: number;
    uom?: string;
    size?: string;
    dueDate?: string;
    styleName?: string;
    orderDateilsDto?: POOrderDetailDto[];
  };

  type POOrderDetailDto = {
    factoryCode?: string;
    orderNo?: string;
    style?: string;
    styleName?: string;
    customer?: string;
    label?: string;
    color?: string;
    colorDesc?: string;
    orderType?: string;
    dueDate?: string;
    orderQty?: number;
    uom?: string;
    size?: string;
  };

  type POQueryParamDto = {
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
    /** 单号 */
    prodOrderNo?: string;
    /** 仓库 */
    wareHouseId?: string;
    /** mps编号 */
    mpsNo?: string;
    /** 起始日期 */
    startDate?: string;
    /** 结束日期 */
    endDate?: string;
    status?: PordOrderStatus;
  };

  type PordOrderStatus = 0 | 1 | 2 | 3 | 4;

  type PORMCompAndStyleDetailDto = {
    prodRMConsumptionId?: string;
    styleComponents?: StyleComponentDto[];
    styleDetails?: StyleDetailDto[];
  };

  type PORMCompAndStyleDetailDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: PORMCompAndStyleDetailDto;
    queryCount?: number;
  };

  type ProdOrderAddParamDto = {
    mpsId?: string;
    orderDetails?: string[];
  };

  type ProdOrderCostDetailsDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    prodNo?: string;
    /** 工单Id */
    prodOrderId?: string;
    /** 工单编号 */
    productNo?: string;
    /** 工厂IDFinancialCode */
    factoryId?: string;
    /** 部门Id */
    departmentId?: string;
    /** 报工数量 */
    prodOrderQty?: number;
    /** 成本中心 */
    costCentent?: string;
    costCententId?: string;
    /** 款式Id */
    styleId?: string;
    /** 颜色Id */
    colorId?: string;
    /** 交易日期 */
    transDate?: string;
    /** 组信息 */
    teamId?: string;
    /** 账期 */
    periodCode?: string;
    /** 关联账期Id */
    arPeriodId?: string;
    factoryCode?: string;
    factoryName?: string;
    departmentCode?: string;
    departmentName?: string;
    styleCode?: string;
    styleName?: string;
    colorCode?: string;
    colorName?: string;
    sam?: number;
    totalSAM?: number;
    /** 币种 */
    currencyId?: string;
    /** 币种信息 */
    currencyName?: string;
    currencyCode?: string;
    /** 错误消息，界面展示 */
    errorMessage?: string;
  };

  type ProdOrderCostDetailsDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProdOrderCostDetailsDto[];
    queryCount?: number;
  };

  type ProdOrderCostDto = {
    details?: ProdOrderCostDetailsDto[];
    total?: TotalProdOrderCostDto[];
  };

  type ProdOrderCostDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProdOrderCostDto;
    queryCount?: number;
  };

  type ProdOrderCostParamDto = {
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
    /** 创建起始日期 */
    startDate?: string;
    /** 创建结束日期 */
    endDate?: string;
    /** 成本中心id */
    costCenterId?: string;
    /** 部门Id */
    departmentId?: string;
    /** 账期id */
    periodId?: string;
    /** 成本代码 */
    costCode?: string;
    /** 币种 */
    currencyId?: string;
    /** 币种信息 */
    currencyName?: string;
    currencyCode?: string;
    prodNo?: string;
  };

  type ProdOrderDetail = {
    style?: string;
    color?: string;
    size?: string;
    seq?: number;
    qty?: number;
    label?: string;
  };

  type ProdOrderDetailCloudDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    productNo?: number;
    erpProdDiv?: string;
    customerStyle?: string;
    customerStyleDesc?: string;
    custColor?: string;
    custColorDesc?: string;
    customerSize?: string;
    erpStyle?: string;
    erpStyleName?: string;
    erpStyleDesc?: string;
    erpColor?: string;
    erpColorDesc?: string;
    erpSizeSeq?: number;
    erpLabel?: string;
    erpSize?: string;
    erpSizeDesc?: string;
    prodQty?: number;
    skuId?: number;
    isNeedUp?: boolean;
    tempMsg?: string;
    lineSeq?: number;
    openSeq?: number;
    isNeedWork?: number;
    dueDate?: string;
    pKey?: number;
    labelDesc?: string;
    dim?: string;
    sizeRange?: string;
    dimRange?: string;
    processStatus?: number;
    hasCutQty?: number;
    unitId?: string;
    uomDesc?: string;
    uom?: string;
  };

  type ProdOrderDetailsCombineDto = {
    id?: string;
    prodNo?: string;
    /** 明细序号 */
    lineSEQ?: number;
    /** 款式 */
    style?: string;
    /** 款式名称 */
    styleDesc?: string;
    /** 走地 */
    label?: string;
    /** 颜色 */
    color?: string;
    /** 颜色名称 */
    colorDesc?: string;
    cancelledQty?: number;
    qty?: number;
    unitId?: string;
    uomDesc?: string;
    uom?: string;
    /** 最早交期 */
    earliestDuDate?: string;
    /** 最晚交期 */
    lastDuDate?: string;
    prodOrderDetailsDto?: ProdOrderDetailCloudDto[];
    poNo?: string;
  };

  type ProdOrderHeader = {
    /** 工单编号 */
    productNo?: string;
    /** 仓库编码 */
    warehouseName?: string;
    /** 仓库名称 */
    warehouseCode?: string;
    /** 客户款 */
    custStyle?: string;
    /** 客户款名称 */
    custStyleName?: string;
    /** 工厂款 */
    factoryStyle?: string;
    /** 工厂款名称 */
    factoryStyleName?: string;
    /** 创建时间 */
    timeCreated?: string;
    /** 季节 */
    seasonCode?: string;
    /** 季节名称 */
    seasonName?: string;
    /** 客户 */
    customerCode?: string;
    /** 客户名称 */
    customerName?: string;
    /** 说明 */
    description?: string;
    /** 交货日期 */
    dueDate?: string;
    /** 发货日期 */
    shipDate?: string;
    /** MPSNo */
    mpsNo?: string;
    /** 订单数量 */
    orderQty?: number;
    /** 工序数量 */
    cutQty?: number;
    /** 品牌 */
    brandCode?: string;
    /** 品牌名称 */
    brandName?: string;
    userIdCreated?: string;
    status?: string;
  };

  type ProdOrderHeaderCloudDto = {
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
    /** 工厂Code */
    factoryCode?: string;
    /** 车间 */
    workShopId?: string;
    status?: PordOrderStatus;
    plannedStartDate?: string;
    plannedEndDate?: string;
    /** 关闭账期 */
    financialDate?: string;
    /** 财务关闭时间 */
    timeFinanceClose?: string;
    /** 计划关闭时间 工厂关闭 */
    timeScheduleClose?: string;
    currencyId?: string;
    currencyCode?: string;
    currencyName?: string;
    workCellId?: string;
    productNo?: string;
    mpsNo?: string;
    mpsId?: string;
    channelId?: string;
    erpFtyCode?: string;
    erpFtyName?: string;
    erpVendor?: string;
    erpVendorName?: string;
    erpCustomer?: string;
    erpCustName?: string;
    erpProdDiv?: string;
    erpStyle?: string;
    erpStyleName?: string;
    erpStyleDesc?: string;
    customerStyle?: string;
    customerStyleDesc?: string;
    custPONum?: string;
    prodQty?: number;
    dueDate?: string;
    materialDate?: string;
    prodType?: string;
    prodTypeName?: string;
    sP_Pkey?: number;
    isNeedUp?: boolean;
    isNeedWork?: boolean;
    workShopCode?: string;
    workCellCode?: string;
    workShopName?: string;
    workCellName?: string;
    factoryName?: string;
    tempMsg?: string;
    routingPath?: string;
    printingLocation?: string;
    embroideryLocation?: string;
    washingRequired?: string;
    poNum?: string;
    samPerUnit?: number;
    matchedQty?: number;
    matchedFabricQty?: number;
    season?: string;
    samPerUnitQuo?: number;
    pType?: string;
    prodDate?: string;
    matchedTrimQty?: number;
    matchedCutTrimQty?: number;
    matchedSewTrimQty?: number;
    matchedFinTrimQty?: number;
    millDueDate?: string;
    trimDueDate?: string;
    trimSewDueDate?: string;
    processStatus?: number;
    sizeRange?: string;
    isMatched?: number;
    isMatchedFabric?: number;
    isMatchedTrim?: number;
    isMatchedCutTrim?: number;
    isMatchedSewTrim?: number;
    isMatchedFinTrim?: number;
    orderQrBtb?: string;
    prodSourceType?: number;
    styleImgId?: string;
    imagePkey?: string;
    firstReleaseDate?: string;
    firstPlanDate?: string;
    prodNoOri?: string;
    wareHouseId?: string;
    wareHouseName?: string;
    wareHouseCode?: string;
    unitId?: string;
    unitCode?: string;
    unitName?: string;
    prodOrderDetailsCombineDto?: ProdOrderDetailsCombineDto[];
    orderDateilsCombineDto?: POOrderDetailCombineDto[];
    prodOrderRMDemandDetailDto?: ProdOrderRMDemandDetailDto[];
  };

  type ProdOrderHeaderCloudDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProdOrderHeaderCloudDto;
    queryCount?: number;
  };

  type ProdOrderHeaderCloudDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProdOrderHeaderCloudDto[];
    queryCount?: number;
  };

  type ProdOrderPrintDto = {
    id?: string;
    header?: ProdOrderHeader;
    details?: ProdOrderDetail[];
    rmDetails?: ProdOrderRMDetail[];
  };

  type ProdOrderPrintDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProdOrderPrintDto[];
    queryCount?: number;
  };

  type ProdOrderProductionCostParamDto = {
    /** 工单Id */
    prodOrderId?: string;
    costBy?: number[];
  };

  type ProdOrderReceiveDetailDto = {
    /** 收货单号 */
    receiveNo?: string;
    colorCode?: string;
    colorName?: string;
    sizeCode?: string;
    sizeName?: string;
    label?: string;
    receiveQty?: number;
    unitCode?: string;
    unitName?: string;
    /** 收货日期 */
    receiveDate?: string;
    /** 成本金额 2 */
    cost?: number;
    /** 成本价 单价 4 */
    costPirce?: number;
    /** 成本代码 */
    costCode?: string;
  };

  type ProdOrderReceiveDetailDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProdOrderReceiveDetailDto[];
    queryCount?: number;
  };

  type ProdOrderRMDemandDetailDto = {
    componentCode?: string;
    componentName?: string;
    componentProcess?: string;
    itemCode?: string;
    itemName?: string;
    itemSkuId?: string;
    itemColorName?: string;
    itemColorCode?: string;
    itemSizeCode?: string;
    itemSizeName?: string;
    baseUOM?: string;
    /** 总需求 */
    demandQty?: number;
    /** 已发放 */
    issuedQty?: number;
    /** 净需求 */
    netReqedQty?: number;
    /** 申请中 */
    requestedQty?: number;
    /** 库存 */
    availFreeQOH?: number;
    /** mps库存 */
    mpsqoh?: number;
    /** 已分配 */
    availQty?: number;
    /** 损耗 */
    waste?: number;
    addiInfo?: string;
    prodLineQty?: number;
    label?: string;
  };

  type ProdOrderRMDetail = {
    /** 部位编号 */
    componentCode?: string;
    /** 部位名称 */
    componentName?: string;
    /** 走地 */
    label?: string;
    /** 总用量 */
    demandQty?: number;
    /** 损耗 */
    waste?: number;
    /** 用量 */
    usage?: number;
    /** 实际用量 */
    effUsage?: number;
    /** 物料编码 */
    itemCode?: string;
    /** 物料名称 */
    itemName?: string;
    /** 物料颜色编码 */
    itemColorCode?: string;
    /** 物料颜色名称 */
    itemColorName?: string;
    /** 尺码编码 */
    itemSizeCode?: string;
    /** 尺码名称 */
    itemSizeName?: string;
    uom?: string;
    uomDesc?: string;
    addiInfo?: string;
  };

  type ProdOrderWIPParamDto = {
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
    financialDate?: number;
    prodOrderId?: string;
  };

  type ProdOrdMaterSendDtlDto = {
    /** 发料单号 */
    materialSendNo?: string;
    /** 账期 */
    periondCode?: string;
    /** 通知单ID;关联MOS_ProdRMConsumption.Id */
    materialSendApplyId?: string;
    /** 物料发货仓库ID */
    warehouseCode?: string;
    warehouseName?: string;
    itemColorCode?: string;
    itemColorMame?: string;
    status?: SendStatus;
    /** 工单ID */
    prodOrderId?: string;
    /** 物料Id;关联BA_StyleItem.Id */
    itemId?: string;
    itemCode?: string;
    itemName?: string;
    itemSkuId?: string;
    /** 颜色 */
    colorCode?: string;
    /** 颜色名称 */
    colorName?: string;
    /** 尺码 */
    sizeCode?: string;
    /** 尺码 */
    sizeName?: string;
    addiInfo?: string;
    uomId?: number;
    uom?: string;
    uomDesc?: string;
    /** 发放数量 */
    sendQty?: number;
    /** 发料日期 */
    sendDate?: string;
    currencyCode?: string;
    currencyName?: string;
    /** 出库成本 */
    itemCost?: number;
    /** 成本金额 */
    itemPrice?: number;
    itemType?: string;
    /** 交易日期 */
    trxDate?: string;
  };

  type ProdOrdMaterSendDtlDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProdOrdMaterSendDtlDto[];
    queryCount?: number;
  };

  type ProdRMConsItemDetailsDto = {
    /** 领料单Id */
    prodRMConsumptionId?: string;
    /** 关联表Id */
    materialSendApplyStyleId?: string;
    /** 部件使用部门 */
    prodProcess?: number;
    itemSkuId?: string;
    componentId?: string;
    /** 部件编码 */
    componentCode?: string;
    componentName?: string;
    mpsBomComponentId?: string;
    /** 物料编码 */
    itemCode?: string;
    itemName?: string;
    /** 物料Id -------------1224 表示bomdetail.ItemSkuId */
    itemId?: string;
    /** ItemColorCode 物料颜色编码 */
    itemColorCode?: string;
    itemColorName?: string;
    /** 用量 */
    quantity?: number;
    /** 尺码 */
    itemSizeCode?: string;
    itemSizeName?: string;
    size?: string;
    /** 单位 */
    uom?: string;
    uomDesc?: string;
    /** 损耗率 */
    rmWastePerc?: number;
    /** 申请的订单数量 */
    orderQty?: number;
    /** 工单数量 */
    prodOrderQty?: number;
    /** 已发放的订单数量 */
    issuedOrderQty?: number;
    /** 工单已发数量 */
    prodOrderIssuedQty?: number;
    /** 备注 */
    comment?: string;
    /** 汇总 */
    totalQty?: number;
    addiInfo?: string;
    /** 总需求量 */
    demandQty?: number;
    /** 已发数量 */
    rmIssuedQty?: number;
    /** 本次申请数量 */
    requestedQty?: number;
    /** 实际用量 */
    effUsage?: number;
    availQty?: number;
  };

  type ProdRMConsItemDetailsDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProdRMConsItemDetailsDto[];
    queryCount?: number;
  };

  type ProdRMConsQueryParamDto = {
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
    /** 工单号 */
    prodNo?: string;
    status?: MaterialApplyStatus;
    startCreateDate?: string;
    endCreateDate?: string;
  };

  type ProdRMConsumptionDetailDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** ProdRMConsumption ID;关联ProdRMConsumption.Id */
    materialSendApplyId?: string;
    /** 部位ID */
    componentId?: string;
    /** 物料Id;关联BA_StyleItem.Id */
    itemId?: string;
    /** styleitemid */
    itemSkuId?: string;
    /** 颜色 */
    colorCode?: string;
    /** 颜色名称 */
    colorName?: string;
    /** 尺码 */
    sizeCode?: string;
    /** 尺码 */
    sizeName?: string;
    /** 工单总用量 */
    applyQty?: number;
    /** 来自BOM的用量 */
    usageQty?: number;
    /** 已发放的订单数量 */
    issuedOrderQty?: number;
    /** 审核时间 */
    timeCheck?: string;
    /** 审核人 */
    userIdCheck?: string;
    /** 作废时间 */
    timeCancel?: string;
    /** 作废人 */
    userIdCancel?: string;
    /** 反审核时间 */
    timeUnCheck?: string;
    /** 反审核人 */
    userIdUnCheck?: string;
    itemCode?: string;
    itemName?: string;
    totalQty?: number;
    uom?: string;
    uomDesc?: string;
    mpsBomComponentId?: string;
    rmWastePerc?: number;
    productNo?: string;
    effUsage?: number;
    /** 附加信息 */
    addiInfo?: string;
    /** 本次申请数量 */
    requestedQty?: number;
    /** 本次已发数量 */
    issuedQty?: number;
    /** 总需求量 */
    demandQty?: number;
    /** 已发数量 */
    rmIssuedQty?: number;
    availFreeQOH?: number;
    availQty?: number;
    prodDemandQty?: number;
  };

  type ProdRMConsumptionDto = {
    id?: string;
    version?: string;
    oldVersion?: string;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: string;
    groupId?: string;
    /** 单号 */
    materialSendApplyNo?: string;
    /** 工单ID;关联SP_ProdOrderHeaderCloud.Id */
    prodOrderId?: string;
    /** 物料出货仓库ID;关联Wh_WareHouse.Id */
    rmWarehouseId?: string;
    /** 备注 */
    remark?: string;
    /** 审核时间 */
    timeCheck?: string;
    /** 审核人 */
    userIdCheck?: string;
    /** 作废时间 */
    timeCancel?: string;
    /** 作废人 */
    userIdCancel?: string;
    /** 反审核时间 */
    timeUnCheck?: string;
    /** 币种 */
    currencyId?: string;
    currencyCode?: string;
    currencyName?: string;
    /** 反审核人 */
    userIdUnCheck?: string;
    status?: MaterialApplyStatus;
    /** 领料状态，是否已领 */
    sendStatus?: boolean;
    productNo?: string;
    factoryId?: number;
    factoryName?: string;
    factoryCode?: string;
    warehouseId?: number;
    warehouseCode?: string;
    warehouseName?: string;
    styleId?: number;
    styleCode?: string;
    styleName?: string;
    mpsNo?: string;
    customerId?: string;
    customerName?: string;
    customerCode?: string;
    details?: ProdRMConsumptionDetailDto[];
    rmDemandDetails?: ProdRMConsumptionDetailDto[];
  };

  type ProdRMConsumptionDtoApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProdRMConsumptionDto;
    queryCount?: number;
  };

  type ProdRMConsumptionDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProdRMConsumptionDto[];
    queryCount?: number;
  };

  type ProductionCostDto = {
    /** 账期 */
    periond?: string;
    /** 交易日期 */
    trxDate?: string;
    /** 币种 */
    currencyCode?: string;
    /** 币种 */
    currencyName?: string;
    /** 成本分类 */
    costType?: string;
    /** 成本代码 */
    costCode?: string;
    /** 实际成本 */
    debitCost?: number;
    /** 标准成本 */
    creditCost?: number;
    /** 差异 */
    varCost?: number;
  };

  type ProductionCostDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ProductionCostDto[];
    queryCount?: number;
  };

  type PROrderDemandDetailDto = {
    itemSkuId?: string;
    itemId?: string;
    itemCode?: string;
    itemName?: string;
    itemColorCode?: string;
    itemColorName?: string;
    itemSizeCode?: string;
    addiInfo?: string;
    unitCode?: string;
    unitName?: string;
    itemType?: string;
    /** 申请数量 */
    reqQty?: number;
  };

  type PROrderDemandDto = {
    mpsId?: string;
    details?: PROrderDemandDetailDto[];
  };

  type QueryField = {
    fieldName?: string;
    fieldValue?: string;
  };

  type QueryFieldDto = {
    fieldName?: string;
    fieldValue?: string;
  };

  type ReceiveDetailDto = {
    styleItemId?: number;
    receivedQty?: number;
  };

  type ReceiveDetailDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: ReceiveDetailDto[];
    queryCount?: number;
  };

  type ReceiveQueryParamDto = {
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
    customerId?: number;
    warehouseId?: number;
    status?: number;
    startReceiveDate?: string;
    endReceiveDate?: string;
    startCreateDate?: string;
    endCreateDate?: string;
  };

  type RMAddiInfoQueryParamDto = {
    mpsId?: string;
    /** 物料编号 */
    itemCode?: string;
    /** 物料颜色 */
    itemColorCode?: string;
    /** 物料尺码 */
    itemSizeCode?: string;
    /** 附加信息 */
    addiInfo?: string;
  };

  type RMAddiInfoUsageDto = {
    itemSkuId?: string;
    addiInfo?: string;
  };

  type RMWarehouse = {
    warehouseId?: string;
    warehouseName?: string;
    warehouseCode?: string;
    /** 库存 */
    mpsStockQty?: number;
  };

  type SaveMpslockDto = {
    mpsId?: string;
    details?: MpslockDto[];
  };

  type SendStatus = 1 | -1;

  type SPProdLinkSODetailCloud = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    orderDetailPKey?: number;
    prodDetailPKey?: number;
    prodNo?: number;
    orderQty?: number;
    prodLineQty?: number;
    unitId?: number;
    dueDate?: string;
    orderNo?: number;
    customer?: string;
    division?: string;
    style?: string;
    color?: string;
    label?: string;
    customerStyle?: string;
    lineSeq?: number;
    sequence?: number;
    size?: string;
    sizeSeq?: number;
    productNo?: string;
    custColor?: string;
    colorDesc?: string;
    styleDesc?: string;
    labelDesc?: string;
    sizeDesc?: string;
    custPoNum?: string;
    bolShipDate?: string;
    orderNO?: string;
    factoryCode?: string;
    uom?: string;
    orderNoCompany?: number;
    factoryOrderId?: number;
    exFtyDate?: string;
    styleName?: string;
    brandCode?: string;
    brandName?: string;
  };

  type SPProdOrderDetailCloud = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    productNo?: string;
    customerStyle?: string;
    customerStyleDesc?: string;
    custColor?: string;
    custColorDesc?: string;
    erpStyle?: string;
    erpStyleName?: string;
    erpStyleDesc?: string;
    erpColor?: string;
    erpColorDesc?: string;
    erpSizeSeq?: number;
    erpLabel?: string;
    erpSize?: string;
    erpSizeDesc?: string;
    prodQty?: number;
    skuId?: number;
    lineSeq?: number;
    dueDate?: string;
    labelDesc?: string;
    unitId?: number;
    headId?: number;
    /** 已收数量 */
    receivedQty?: number;
    /** 未收数量 */
    notReceivedQty?: number;
    styleCode?: string;
    color?: string;
    size?: string;
    label?: string;
    customerSize?: string;
    erpProdDiv?: string;
    isNeedUp?: boolean;
    tempMsg?: string;
    openSeq?: number;
    isNeedWork?: number;
    pKey?: number;
    dim?: string;
    sizeRange?: string;
    dimRange?: string;
    processStatus?: number;
    hasCutQty?: number;
    uomDesc?: string;
    uom?: string;
  };

  type SPProdOrderHeaderCloud = {
    id?: number;
    version?: string;
    groupId?: number;
    timeCreated?: string;
    userIdCreated?: string;
    timeLastMod?: string;
    userIdLastMod?: string;
    clientId?: number;
    /** 工厂Id */
    factoryId?: number;
    /** 工厂Code */
    factoryCode?: string;
    currencyId?: number;
    productNo?: string;
    mpsNo?: string;
    erpCustomer?: string;
    erpCustName?: string;
    erpStyle?: string;
    erpStyleName?: string;
    erpStyleDesc?: string;
    prodQty?: number;
    dueDate?: string;
    styleId?: number;
    factoryName?: string;
    season?: string;
    mpsId?: number;
    plannedEndDate?: string;
    plannedStartDate?: string;
    status?: PordOrderStatus;
    /** 关闭账期 */
    financialDate?: string;
    /** 财务关闭时间 */
    timeFinanceClose?: string;
    /** 计划关闭时间 工厂关闭 */
    timeScheduleClose?: string;
    prodOrderDetails?: SPProdOrderDetailCloud[];
    orderDetails?: SPProdLinkSODetailCloud[];
    wareHouseId?: number;
    wareHouseName?: string;
    wareHouseCode?: string;
    workShopId?: number;
    workCellId?: number;
    channelId?: number;
    erpFtyCode?: string;
    erpFtyName?: string;
    erpVendor?: string;
    erpVendorName?: string;
    erpProdDiv?: string;
    customerStyle?: string;
    customerStyleDesc?: string;
    custPONum?: string;
    materialDate?: string;
    prodType?: string;
    prodTypeName?: string;
    sP_Pkey?: number;
    isNeedUp?: boolean;
    isNeedWork?: boolean;
    workShopCode?: string;
    workCellCode?: string;
    workShopName?: string;
    workCellName?: string;
    tempMsg?: string;
    routingPath?: string;
    printingLocation?: string;
    embroideryLocation?: string;
    washingRequired?: string;
    poNum?: string;
    samPerUnit?: number;
    matchedQty?: number;
    matchedFabricQty?: number;
    samPerUnitQuo?: number;
    matchedTrimQty?: number;
    matchedCutTrimQty?: number;
    matchedSewTrimQty?: number;
    matchedFinTrimQty?: number;
    millDueDate?: string;
    trimDueDate?: string;
    trimSewDueDate?: string;
    processStatus?: number;
    sizeRange?: string;
    isMatched?: number;
    isMatchedFabric?: number;
    isMatchedTrim?: number;
    isMatchedCutTrim?: number;
    isMatchedSewTrim?: number;
    isMatchedFinTrim?: number;
    orderQrBtb?: string;
    prodSourceType?: number;
    styleImgId?: string;
    imagePkey?: string;
    firstReleaseDate?: string;
    firstPlanDate?: string;
    prodNoOri?: string;
    pType?: string;
    prodDate?: string;
    currencyCode?: string;
    currencyName?: string;
    unitId?: number;
    unitCode?: string;
    unitName?: string;
  };

  type SPProdOrderHeaderCloudApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SPProdOrderHeaderCloud;
    queryCount?: number;
  };

  type StdCostRateQueryParamDto = {
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

  type StyleComponentDto = {
    mpsBomComponentId?: string;
    styleId?: string;
    styleCode?: string;
    styleName?: string;
    componentId?: string;
    componentName?: string;
    componentCode?: string;
    className?: string;
    prodProcess?: number;
    comment?: string;
  };

  type StyleDetailDto = {
    label?: string;
    color?: string;
    size?: string;
    /** 工单数量 */
    prodOrderQty?: number;
    /** 当前领取数量 */
    orderQty?: number;
    /** 已领数量 */
    issuedOrderQty?: number;
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

  type SysDictDataRtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: SysDictDataRto[];
    queryCount?: number;
  };

  type TotalProdOrderCostDto = {
    sam?: number;
    totalSAM?: number;
    /** 报工数量 */
    prodOrderQty?: number;
    title?: string;
  };

  type WasteQueryParamDto = {
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

  type WIPCostMovingInquiryReportDto = {
    /** 工单id */
    prodOrderId?: string;
    /** 工单号 */
    productNo?: string;
    /** 账期 */
    financialDate?: string;
    /** 客户 */
    customerCode?: string;
    /** 款号 */
    styleCode?: string;
    styleName?: string;
    /** 币种 */
    currencyCode?: string;
    /** 成本类型 */
    costType?: string;
    /** 状态 */
    status?: number;
    statusCN?: string;
    /** mps */
    mpsNo?: string;
    /** 期初 */
    begning?: number;
    /** 转入 */
    debit?: number;
    /** 外协转入 */
    osDebit?: number;
    /** 差异 */
    varDebit?: number;
    credit?: number;
    /** 工单数量 */
    prodLineQty?: number;
    /** 最后入库日期 */
    lastRcvDate?: string;
    /** 生产数量 */
    productQty?: number;
    /** 总sam */
    totalSAM?: number;
    /** 入库率 % */
    recvRatio?: number;
    /** 期末 */
    ending?: number;
    /** 本期入库数量 */
    currentRcvQty?: number;
    /** 总转入 */
    totalDebitAmt?: number;
    /** 总转出 */
    totalCreditAmt?: number;
    /** 总入库数量 */
    totalRcvQty?: number;
  };

  type WIPCostMovingInquiryReportDtoListApiResult = {
    statusCode?: APIStatusCode;
    errCode?: string;
    msg?: string;
    data?: WIPCostMovingInquiryReportDto[];
    queryCount?: number;
  };

  type ComponentGetByIdParams = {
    Id?: string;
  };

  type ComponentGetListByStyleIdParams = {
    styleId?: string;
  };

  type ComponentGetByCodeParams = {
    componentCode?: string;
  };

  type ComponentDesignBaseGetByIdParams = {
    Id?: string;
  };

  type CostItemGetByIdParams = {
    id?: number;
  };

  type CostItemDeleteParams = {
    id?: number;
  };

  type CostSheetGetByIdParams = {
    id?: number;
  };

  type CostSheetCalculateParams = {
    id: number;
  };

  type CostSheetDeleteParams = {
    id?: number;
  };

  type CostSheetActivateParams = {
    id?: number;
  };

  type CostSheetDeActivateParams = {
    id?: number;
  };

  type CostTempletGetByIdParams = {
    id?: number;
  };

  type CostTempletDeleteParams = {
    id?: number;
  };

  type MasterProdScheduleGetByIdParams = {
    Id?: string;
  };

  type MasterProdScheduleDeApproveParams = {
    /** 反审核原因code */
    reasonCode?: string;
  };

  type MasterProdScheduleGetPROrderDemandParams = {
    MpsId?: string;
  };

  type MasterProdScheduleGetOperationLogByIdParams = {
    Id?: string;
  };

  type MasterProdScheduleGetMpsTotalDemandParams = {
    /** MPSId */
    MpsId?: string;
  };

  type MasterProdScheduleGetMpsRMDemandDetailParams = {
    /** MPSID */
    MpsId?: string;
    /** 物料SKUID */
    ItemSkuId?: string;
    /** 附加信息 */
    AddiInfo?: string;
  };

  type MasterProdScheduleGetMpsItemPurchaseCostParams = {
    MpsId?: string;
  };

  type MasterProdScheduleMpslockingParams = {
    mpsId?: string;
  };

  type MaterialSendGetByIdParams = {
    id?: string;
  };

  type MaterialSendGetOperationLogByIdParams = {
    Id?: string;
  };

  type MaterialSendOffsetParams = {
    MaterialSendId?: string;
  };

  type MaterialSendDeleteParams = {
    MaterialSendId?: string;
  };

  type MaterialSendApplyGetByIdParams = {
    Id?: string;
  };

  type MaterialSendApplyDeleteParams = {
    id?: string;
  };

  type MaterialSendApplyGetCompByIdParams = {
    ProdRMConsId?: string;
  };

  type MaterialSendApplyGetOperationLogByIdParams = {
    Id?: string;
  };

  type MaterialSendApplyDeApproveParams = {
    /** 撤审原因 */
    reasonId?: string;
  };

  type MpsBomGetListByParmParams = {
    /** Mps Id */
    mpsId?: number;
    /** 款ID */
    styleId?: number;
    /** BOM类型：0辅料，1面料 */
    itemType?: number;
  };

  type MpsBomDeleteDetailParams = {
    /** BOM ID */
    mpsBomId?: number;
    /** 部位ID */
    componentId?: number;
  };

  type MpsBomGetBomReportPrintByIdParams = {
    bomId?: string;
  };

  type MpsBomGetDetailsByStatusParams = {
    MpsBomId?: string;
    Status?: MosStatus[];
  };

  type MpsBomCopyMpsBomDetailParams = {
    /** 被复制的bomId */
    FromMpsBomId?: string;
    /** 复制的bomId */
    ToMpsBomId?: string;
  };

  type MpsBomGetMpsBomCompQtyParams = {
    mpsNo?: string;
    itemTypeCode?: number;
  };

  type MpsBomDeApproveParams = {
    /** 撤审原因 */
    reasonId?: number;
  };

  type MpsBomGetOperationLogByIdParams = {
    Id?: string;
  };

  type MpsRMInventoryTransferGetRMByParamParams = {
    mpsId?: string;
    itemSkuId?: string;
    addiInfo?: string;
  };

  type MpsRMInventoryTransferGetListByMpsIdParams = {
    mpsId?: string;
    itemSkuId?: string;
    addiInfo?: string;
  };

  type ProductOrderGetByIdParams = {
    ProdId?: string;
  };

  type ProductOrderGetReceiveByProdIdParams = {
    /** 工单ID */
    id?: number;
  };

  type ProductOrderGetProdOrdMaterSendDtlByIdParams = {
    prodOrderId?: string;
  };

  type ProductOrderGetReceiveDetailByIdParams = {
    /** 工单Id */
    prodOrderId?: string;
  };

  type ProductOrderDeleteParams = {
    id?: number;
  };

  type ProductOrderDeleteDetailParams = {
    detailId?: string;
  };

  type ProductOrderGetOSPurchaseOrderParams = {
    prodOrderId?: string;
  };

  type ReceiveGetByIdParams = {
    id?: number;
  };

  type ReceiveDeleteParams = {
    id?: number;
  };

  type ReceiveGetReceiveDetailByPickIdParams = {
    pickId?: number;
  };

  type StdCostRateGetByIdParams = {
    id?: number;
  };

  type StdCostRateDeleteParams = {
    id?: number;
  };

  type WasteGetByIdParams = {
    id?: number;
  };

  type WasteDeleteParams = {
    id?: number;
  };
}
