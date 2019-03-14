import React, { Component } from 'react';
import styled, {css, ThemeProvider} from 'styled-components';

class App extends Component {
  constructor(props) {
      super(props);
      //获取StyleComponent Dom时拿到的ref需要在constructor中生成
      this.inputRef = React.createRef();
  }
  render() {
    return (
      //  此处的this.props.className放置在styled样式生效到的元素上
      <div className={this.props.className}>
          container
          <h2>title</h2>
          <StyledH1>body</StyledH1>
          <StyledInput
            placeholder={'Hover here'}
            /*通过ref拿到StyledCompoennt内的Dom*/
            ref={this.inputRef}
            onMouseEnter={() => this.inputRef.current.focus()}
          />
          {/*将定义的主题对象传递给ThemeProvider 在内部不管多少
            层级的组件都可以在props中拿到
          */}
          <ThemeProvider theme={theme}>
              <Button>Themed</Button>
          </ThemeProvider>
          <Button>without Themed</Button>
      </div>
    );
  }
}

//styled方法将一个组件封装成一个具有样式的styleComponent
//此处为styled的一种写法 styled(component)
const StyledComponent = styled(App)`
    &{
        color: red;
        h2{
            color: blue;
        }
        div{
            font-size: ${props => props.fontSize};
            color: pink;
        }
    }
`;

//此处为styled第二种写法 styled.tagName
const StyledDiv = styled.div`
    background-color: blue;
`;

//withComponent替换StyledComponent之前的标签
const StyledH1 = StyledDiv.withComponent('h1');

//此处为styled第三种写法 styled(styledComponent)
const StyledComponent2 = styled(StyledComponent)`
    border: 1px solid black;
`;

//用css方法定义minxin
let minxin = css`
    &{
        color:red;
        ${{
        position:'absolute'
        ,left:'100px'
        ,top:'100px'
    }}
        .title{
          color:blue;
        }
        .content{
          font-size:${props=>props.someCondition.fontSize};
          color:pink;
        }
      }
`;

//通过模板语法 判断如果有someCondition就使用minxin
const StyledComponent3 = styled(App)`
    ${props => props.someCondition ? minxin : null}
`;

//attrs属性给StyledCompoennt设置默认属性和默认样式
const StyledInput = styled.input.attrs({
    type: 'password',
    margin: '1em',
    padding: '1em'
})`
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
    ${{color:'red'}}
`;

//定义主题
const theme = {
    main: 'mediumseagreen'
};

//运用ThemeProvider提供的props.theme判断
const Button = styled.button`
  font-size:1em;
  margin:1em;
  padding:0.25em 1em;
  border-radius:3px;
  /*color the border and text with theme.main*/
  color:${props=>props.theme.main};
  border:2px solid ${props=>props.theme.main};
`;

//定义一个styleCompoennt的默认props
Button.defaultProps = {
    theme: {
        main: 'palevioletred'
    }
};


export default StyledComponent3;
