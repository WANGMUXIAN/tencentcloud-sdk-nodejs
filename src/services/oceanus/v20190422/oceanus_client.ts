/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  CreateResourceRequest,
  CreateJobRequest,
  StopJobsRequest,
  CreateJobResponse,
  RunJobsRequest,
  StopJobDescription,
  DeleteTableConfigResponse,
  CreateResourceConfigResponse,
  CreateJobConfigRequest,
  CreateResourceConfigRequest,
  CreateResourceResponse,
  DeleteTableConfigRequest,
  SystemResourceItem,
  StopJobsResponse,
  CreateJobConfigResponse,
  ResourceLocParam,
  RunJobsResponse,
  Filter,
  DescribeJobsResponse,
  Property,
  DescribeSystemResourcesRequest,
  RunJobDescription,
  ResourceLoc,
  ResourceRef,
  DescribeJobsRequest,
  JobV1,
  DescribeSystemResourcesResponse,
} from "./oceanus_models"

/**
 * oceanus client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("oceanus.tencentcloudapi.com", "2019-04-22", clientConfig)
  }

  /**
   * 批量停止作业，批量操作数量上限为20
   */
  async StopJobs(
    req: StopJobsRequest,
    cb?: (error: string, rep: StopJobsResponse) => void
  ): Promise<StopJobsResponse> {
    return this.request("StopJobs", req, cb)
  }

  /**
   * 删除作业表配置
   */
  async DeleteTableConfig(
    req: DeleteTableConfigRequest,
    cb?: (error: string, rep: DeleteTableConfigResponse) => void
  ): Promise<DeleteTableConfigResponse> {
    return this.request("DeleteTableConfig", req, cb)
  }

  /**
   * 创建资源接口
   */
  async CreateResource(
    req: CreateResourceRequest,
    cb?: (error: string, rep: CreateResourceResponse) => void
  ): Promise<CreateResourceResponse> {
    return this.request("CreateResource", req, cb)
  }

  /**
   * 批量启动或者恢复作业，批量操作数量上限20
   */
  async RunJobs(
    req: RunJobsRequest,
    cb?: (error: string, rep: RunJobsResponse) => void
  ): Promise<RunJobsResponse> {
    return this.request("RunJobs", req, cb)
  }

  /**
   * 查询作业
   */
  async DescribeJobs(
    req: DescribeJobsRequest,
    cb?: (error: string, rep: DescribeJobsResponse) => void
  ): Promise<DescribeJobsResponse> {
    return this.request("DescribeJobs", req, cb)
  }

  /**
   * 描述系统资源接口
   */
  async DescribeSystemResources(
    req: DescribeSystemResourcesRequest,
    cb?: (error: string, rep: DescribeSystemResourcesResponse) => void
  ): Promise<DescribeSystemResourcesResponse> {
    return this.request("DescribeSystemResources", req, cb)
  }

  /**
   * 创建资源配置接口
   */
  async CreateResourceConfig(
    req: CreateResourceConfigRequest,
    cb?: (error: string, rep: CreateResourceConfigResponse) => void
  ): Promise<CreateResourceConfigResponse> {
    return this.request("CreateResourceConfig", req, cb)
  }

  /**
   * 创建作业配置，一个作业最多有100个配置版本
   */
  async CreateJobConfig(
    req: CreateJobConfigRequest,
    cb?: (error: string, rep: CreateJobConfigResponse) => void
  ): Promise<CreateJobConfigResponse> {
    return this.request("CreateJobConfig", req, cb)
  }

  /**
   * 新建作业接口，一个 AppId 最多允许创建1000个作业
   */
  async CreateJob(
    req: CreateJobRequest,
    cb?: (error: string, rep: CreateJobResponse) => void
  ): Promise<CreateJobResponse> {
    return this.request("CreateJob", req, cb)
  }
}
