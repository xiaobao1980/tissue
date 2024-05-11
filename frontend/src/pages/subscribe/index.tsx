import {Button, Card, Col, Empty, FloatButton, message, Row, Skeleton, Space, Tag} from "antd";
import VideoCover from "../../components/VideoCover";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import * as api from "../../apis/subscribe";
import {useRequest} from "ahooks";
import ModifyModal from "./modifyModal";
import {useFormModal} from "../../utils/useFormModal";
import {createPortal} from "react-dom";
import {PlusOutlined} from "@ant-design/icons";


function Subscribe() {

    const {data = [], loading, refresh} = useRequest(api.getSubscribes, {})
    const {setOpen, modalProps} = useFormModal({
        service: api.modifySubscribe,
        onOk: () => {
            setOpen(false)
            refresh()
        }
    })

    const {run: onDelete} = useRequest(api.deleteSubscribe, {
        manual: true,
        onSuccess: () => {
            message.success("删除成功")
            setOpen(false)
            refresh()
        }
    })

    if (loading) {
        return (
            <Card>
                <Skeleton loading/>
            </Card>
        )
    }

    return (
        <div>
            <Row gutter={[15, 15]}>
                {data.length > 0 ? (
                    data.map((subscribe: any) => (
                        <Col key={subscribe.id} span={24} lg={6}>
                            <Card hoverable
                                  cover={(<VideoCover src={subscribe.cover}/>)}
                                  onClick={() => setOpen(true, subscribe)}
                            >
                                <Card.Meta title={subscribe.title || subscribe.num}
                                           description={(
                                               <Space size={[0, 'small']} wrap>
                                                   {subscribe.premiered && (
                                                       <Tag bordered={false}>{subscribe.premiered}</Tag>
                                                   )}
                                                   {subscribe.is_hd && (
                                                       <Tag color={'red'} bordered={false}>高清</Tag>)}
                                                   {subscribe.is_zh && (
                                                       <Tag color={'blue'} bordered={false}>中文</Tag>)}
                                                   {subscribe.is_uncensored && (
                                                       <Tag color={'green'} bordered={false}>无码</Tag>)}
                                               </Space>
                                           )}
                                />
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col span={24}>
                        <Card>
                            <Empty description={'无订阅'}/>
                        </Card>
                    </Col>
                )}
            </Row>
            <ModifyModal width={1100}
                         onDelete={onDelete}
                         {...modalProps} />
            <>
                {createPortal((
                        <FloatButton icon={<PlusOutlined/>} type={'primary'} onClick={() => setOpen(true)}/>),
                    document.getElementsByClassName('index-float-button-group')[0]
                )}
            </>
        </div>
    )
}

export default Subscribe
