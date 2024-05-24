import { get, ApiResponse } from '@request/index'

export interface Role {
  id: number;
  name: string;
  // 其他角色属性...
}
export const  getRoles = async (): Promise<ApiResponse<Role[]>> => {
  return await get('/mockapi/roleList')
}