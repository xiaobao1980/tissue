import {request} from "../utils/requests";

export async function getSubscribes() {
    const response = await request.request({
        url: '/subscribe/',
        method: 'get'
    })
    return response.data.data
}

export function modifySubscribe(data: any) {
    return request.request({
        url: '/subscribe/',
        method: data.id ? 'put' : 'post',
        data: data
    })
}

export function deleteSubscribe(id: number) {
    return request.request({
        url: '/subscribe/',
        method: 'delete',
        params: {subscribe_id: id},
    })
}

export async function getVideos(num: string) {
    const response = await request.request({
        url: '/subscribe/videos',
        method: 'get',
        params: {num}
    })
    return response.data.data
}

export async function downloadVideos(video: any, link: any) {
    const response = await request.request({
        url: '/subscribe/download',
        method: 'post',
        data: {
            video, link
        }
    })
    return response.data.data
}
