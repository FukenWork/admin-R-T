import * as React from 'react'
import {Button} from 'antd';


// 申明==IProps以泛型的形式传递
interface IProps {
  title: string,
  age: number,
  word?: string,
  onMyClick: any
}

// 声明状态state中的值
interface IState {
  count: number,
  list: []
}


export default class hello extends React.Component<IProps, IState>{
  //  实现state
  public state: Readonly<IState> = {
    count: 1,
    list: []
  }
  public handler = (e: any) => {
    this.setState({ count: 10 })
  }


  // 子组件到父组件传递方法
  public handlerSend = (e:any) =>{
    this.props.onMyClick();
  }

  render() {
    const { title, age } = this.props;
    return (
      <div>
        <div>nihao {title} {age} {this.state.count}</div>
        <Button onClick={this.handler}>点击</Button>
        <Button onClick={this.handlerSend}>发送</Button>
      </div>
    )
  }
}
