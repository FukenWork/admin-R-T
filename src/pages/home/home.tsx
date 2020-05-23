import * as  React from 'react'
import StringName from '../../common/string-name/index'
import { Redirect } from 'react-router'
import { connect } from 'react-redux'

interface IProps {
  userInfo: any
}


class HomeComponent extends React.Component<IProps>{
  render() {
    // 获取是否存用户信息
    const user: any = localStorage.getItem(StringName.USER_INFO)
    const data = JSON.parse(user)
    let { userInfo }  = this.props;
    console.log(userInfo)
    if (!user) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        {data.id}
      </div>
    )
  }
}


const mapToStateProps = (state: any) => ({
  userInfo: state.saveUserInfo
})

export default connect(mapToStateProps)(HomeComponent)
