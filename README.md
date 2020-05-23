## React +  Typescript

#### props

```javascript
// 使用props首先要声明
interface IProps {
  username: string;
  password: string;
}

```

#### state
```javascript
// 使用state首先要声明
interface IState {
  num: number;
  age: number;
}

export  default class Login extends React.Component<IState, IProps> {
  // 不用使用了构造函数了
   public state: Readonly<IState> = {
    num: 1,
    age: 18
  }
  render() {
    return (
      <div>{this.state.age}</div>
    )
  }
}

```
#### 组件之间的传值

```javascript
// 父组件到子组件
// 父组件

render() {
  return (
    <div>
      <Children title={'你好'} />
    </div>
  )
}

// 子组件

interface IProps {
  title: string;
}

render() {
  const { title } = this.props
  return (
    <div>{title}</div>
  )
}

// 子组件传递给父组件

interface IProps {
  handleOpen: any;
}

handlerSend = (e)=>{
  this.props.handleOpen
}
 return (
      <div>
        <Button onClick={this.handlerSend}>发送</Button>
      </div>
    )

// 父组件接收
render() {
   return (
      <div>
        <Children handleOpen={this.myHandler}></Children>
      </div>
    )
}
myHandler = (e) =>{
  console.log('=========接收子组件的值==========')
}


```


