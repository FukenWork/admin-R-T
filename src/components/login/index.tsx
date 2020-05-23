import * as React from 'react'
import './index.css'
import { Form, Input, Button, Checkbox, message } from 'antd'
import { userService } from '../../services/user.services'
import { UserInfo } from '../../redux/types'
import StringName from '../../common/string-name'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions/index'



interface IState {
  num: string
}

interface IProps {
  history: any,
  saveuserInfo: (e: any) => void
}
class LoginComponent extends React.Component<IProps, IState> {
  public state = {
    num: ''
  }
  onFinish = async (value: any) => {
    const data: any = await userService.login(value.username, value.password);
    let userInfo: UserInfo = {
      username: data.username,
      id: data.id,
      roleId: data.roleId,
    }
    message.success('登录成功')
    localStorage.setItem(StringName.USER_INFO, JSON.stringify(userInfo as any));
    // 路由跳转
    this.props.history.replace('/');
    this.props.saveuserInfo(userInfo);
  }
  onFinishFailed = () => { }
  render() {
    return (
      <div className="login_container">
        <div className="login">
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item >
              <Button type="primary" htmlType="submit" className="submit_btn">
                Submit
        </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const mapToStateProps = (state: any) => ({
  getUserInfo: state.saveUserInfo
});

const mapToDispatchProps = (dispatch: any) => ({
  saveuserInfo: (e: any) => dispatch(actions.saveUserInfoMessage(e))

})


export default connect(mapToStateProps, mapToDispatchProps)(LoginComponent)