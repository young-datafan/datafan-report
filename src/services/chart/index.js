/*
 * @Description: 首页
 * @Date: 2021-12-08 18:18:17
 * @LastEditTime: 2022-01-21 15:17:16
 */
import { REPORT } from '@/services/api'
import { request, METHOD } from '@sense70/common-component-vue'

const ChartApiServices = {
  /**
   * @description: 获取首页列表数据
   */
  getChartInfo() {
    return request(`${REPORT}/dpPortalDashboard/reportList`, METHOD.GET)
  }
}
export default ChartApiServices
