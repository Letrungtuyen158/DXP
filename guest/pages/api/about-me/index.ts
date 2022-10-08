import { checkApiStatus } from './../../../utils/common';
import Api from "services/api"

export default async function handler(req: any, res: any) {
    const { query } = req
    const filter = query?.filter ? JSON.parse(query.filter) : {}
    const result: any = await Api.getAboutMe(filter)
    if (checkApiStatus(result)) return res.status(200).json(result?.data)
}

