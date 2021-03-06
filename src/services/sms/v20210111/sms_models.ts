/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/**
 * 获取短信模板信息响应
 */
export interface DescribeTemplateListStatus {
  /**
   * 模板Id
   */
  TemplateId: number

  /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
  International: number

  /**
      * 申请签名状态。其中：
0：表示审核通过。
1：表示审核中。
-1：表示审核未通过或审核失败。
      */
  StatusCode: number

  /**
   * 审核回复，审核人员审核后给出的回复，通常是审核未通过的原因。
   */
  ReviewReply: string

  /**
   * 模板名称。
   */
  TemplateName: string

  /**
   * 提交审核时间，UNIX 时间戳（单位：秒）。
   */
  CreateTime: number
}

/**
 * DescribeSmsTemplateList返回参数结构体
 */
export interface DescribeSmsTemplateListResponse {
  /**
   * 获取短信模板信息响应
   */
  DescribeTemplateStatusSet?: Array<DescribeTemplateListStatus>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSmsTemplateList请求参数结构体
 */
export interface DescribeSmsTemplateListRequest {
  /**
   * 模板 ID 数组。
   */
  TemplateIdSet: Array<number>

  /**
      * 是否国际/港澳台短信：
0：表示国内短信。
1：表示国际/港澳台短信。
      */
  International: number
}
