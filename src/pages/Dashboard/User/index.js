import React, { Component } from 'react'
import { Panel } from '../../../commons'
import { Card,Form,Input,Button,Table,Space, Avatar } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import ModalUser from './ModalUser'

class User extends Component {
constructor(props){
    super(props);
    this.state ={
        dataSource:[]
    }
}
componentDidMount(){
    this.onGetUsers();  //fetching users once upon the element are rendered
}
onGetUsers=(params={})=>{
    global.request.get('/api/user/all',params).then(
        data=>{
            this.setState({dataSource:data.records})
        }
    )
}

onSearch=(values)=>{
    console.log(values)
    this.onGetUsers(values)
}
onAddUser=()=>{
    this.props.dispatch({
        type:'show',
        data:{
            title:'New User',
            data:{},
            refreshList:this.onGetUsers
        }
    })
}
//Username Password Phonenumber Email 
fetchUsers=()=>({
    columns:[
        {
            title:"username",
            dataIndex:'username',
            render:(text,record)=>{
                return <Space>
                    <Avatar src={record.profile}/>
                    {text}
                </Space>
            }
        },
        {
            title:"email",
            dataIndex:'email'
        },
        {
            title:"phone",
            dataIndex:'phonenumber'
        },
        {
            title:"userID",
            dataIndex:'id'
        },
        {
            title:'operate',
            render:(record)=>{
                return <Space>
                    <a>View</a>
                    <a>Edit</a>
                    <a>Delete</a>
                    <a>LevelUp</a>
                </Space>
            }
        }
    ],
    dataSource:this.state.dataSource

})

render() {
    const {userModal}=this.props.userState
    return <Panel title="User">
        <Card className='m-filter'>
            <Form layout="inline" onFinish={this.onSearch}>
                <Form.Item label="username" name="uname">
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary' htmlType='submit'>Search</Button>
                    {/**htmlType submit so form get data */}
                </Form.Item>
            </Form>
        </Card>
        <Card>
            <div className='m-operate'>
                <Button type='primary' icon={<PlusOutlined/>} onClick={this.onAddUser}>Add User</Button>
            </div>
            <Table {...this.fetchUsers()}/>
        </Card>
        {userModal&&<ModalUser {...userModal} {...this.props}/>} {/**passing dispatch by props since it is in props */}
    </Panel>
  }
}
const mapStateToProps=(store)=>({userState:store.user})
const mapDispatchToProps=(dispatch)=>({dispatch})
export default connect(mapStateToProps,mapDispatchToProps)(User)