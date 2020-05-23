import * as  React from 'react'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/index';
import { UserInfo } from '../redux/types/index';




interface IState {
  userInfo?: any,
  list: any
}
interface IProps {
  getUserInfo: UserInfo,
  saveuserInfo: (e:any)=>void
}
class List extends React.Component<IProps, IState> {
  public state: Readonly<IState> = {
    list: []
  }
  public getInit = (e: any) => {
    return e.map((ele: any, index: any) => {
      return <div key={index}> {index}{ele.id} {ele.name}</div>
    })
  }
  saveUserInfomessage = ()=>{
    let { saveuserInfo } = this.props
    let obj: UserInfo = {
      username: 'sss',
      id: 'asf',
      roleId: 1
    }
    saveuserInfo(obj);
  }
  render() {
    let { getUserInfo } = this.props;
    console.log(getUserInfo, '===================')
    return (
      <div>
        List: {this.getInit(this.state.list)}
----------------------------------------------------------------
        <div className="greeting">
        </div>
        <div>
         {/* {getUserInfo? 'ss': 'bbb'} */}
         <button onClick={this.saveUserInfomessage}></button>
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

export default connect(mapToStateProps, mapToDispatchProps)(List);
